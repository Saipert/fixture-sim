/* =========================================================================
   GUARDADO DE PARTIDAS
   El estado del mundo está lleno de referencias a objetos de equipo, así que
   al guardar se sustituyen por identificadores estables (uid) y al cargar se
   vuelven a enlazar. También se guardan las plantillas y en qué liga está
   cada equipo, porque el envejecimiento y los ascensos las modifican.
   ========================================================================= */
(function (global) {
  'use strict';

  var KEY = 'simufut.save.v1';
  /* Cada modo guarda en su propia ranura: la carrera de jugador no pisa la
     del entrenador ni al revés. La del entrenador conserva la clave de
     siempre para no perder las partidas ya guardadas. */
  function clave(modo) { return modo === 'jugador' ? KEY + '.jugador' : KEY; }
  /* Las partidas guardadas antes de que hubiera una ranura por modo están
     todas en la del entrenador. Si la de ahí es de carrera de jugador, se
     muda a su sitio la primera vez que se abre el juego. */
  function migra() {
    try {
      var txt = localStorage.getItem(KEY);
      if (!txt) return;
      var d = JSON.parse(txt);
      if (!d || !d.carrera) return;
      if (!localStorage.getItem(KEY + '.jugador')) localStorage.setItem(KEY + '.jugador', txt);
      localStorage.removeItem(KEY);
    } catch (e) { }
  }
  migra();
  var VERSION = 1;
  var FS = '|', RS = ';';
  function clean(x) { return String(x).split(FS).join('/').split(RS).join(','); }

  /* ---------- identificadores estables ---------- */
  function assignUids(LEAGUES) {
    Object.keys(LEAGUES).forEach(function (id) {
      if (id === '__nations__') return;
      LEAGUES[id].teams.forEach(function (t) {
        if (!t.uid) t.uid = id + '#' + t.n;
      });
    });
  }
  /* Un club se identifica por liga + nombre, así que al corregirle el nombre
     las partidas guardadas dejan de encontrarlo. Aquí van esos cambios para
     que una partida vieja siga abriendo. */
  var RENOMBRADOS = {
    'federala#Gimnasia de Concepción del Uruguay': 'federala#Gimnasia (CdU)'
  };
  function index(LEAGUES) {
    var byUid = {};
    Object.keys(LEAGUES).forEach(function (id) {
      if (id === '__nations__') return;
      LEAGUES[id].teams.forEach(function (t) { byUid[t.uid] = t; });
    });
    /* los nombres viejos apuntan al club de siempre */
    Object.keys(RENOMBRADOS).forEach(function (antes) {
      var t = byUid[RENOMBRADOS[antes]];
      if (t && !byUid[antes]) byUid[antes] = t;
    });
    return byUid;
  }

  var U = null;                      // índice activo durante la carga
  function tid(t) { return t ? t.uid : null; }
  function tref(uid) { return uid ? U[uid] || null : null; }

  /* ---------- codificación de partidos y cruces ---------- */
  function encMatch(m) { return [tid(m.h), tid(m.a), m.s[0], m.s[1], m.pens ? [m.pens.a, m.pens.b] : 0, m.aet ? 1 : 0]; }
  function decMatch(a) {
    return { h: tref(a[0]), a: tref(a[1]), s: [a[2], a[3]], pens: a[4] ? { a: a[4][0], b: a[4][1] } : null, aet: !!a[5] };
  }
  function encTie(t) {
    return {
      a: tid(t.a), b: tid(t.b), w: tid(t.w), single: t.single ? 1 : 0,
      l1: t.leg1 ? encMatch(t.leg1) : 0, l2: t.leg2 ? encMatch(t.leg2) : 0,
      ag: t.agg || 0, pn: t.pens ? [t.pens.a, t.pens.b] : 0,
      s: t.s || 0, ae: t.aet ? 1 : 0
    };
  }
  function decTie(o) {
    return {
      a: tref(o.a), b: tref(o.b), w: tref(o.w), single: !!o.single,
      leg1: o.l1 ? decMatch(o.l1) : null, leg2: o.l2 ? decMatch(o.l2) : null,
      agg: o.ag || null, pens: o.pn ? { a: o.pn[0], b: o.pn[1] } : null,
      s: o.s || null, aet: !!o.ae
    };
  }

  /* ---------- tablas ---------- */
  function encTable(tbl) {
    var out = [];
    Object.keys(tbl).forEach(function (k) {
      var r = tbl[k];
      out.push([tid(r.t), r.pj, r.g, r.e, r.p, r.gf, r.gc, r.pts, r.form.join('')]);
    });
    return out;
  }
  function decTable(arr) {
    var teams = arr.map(function (a) { return tref(a[0]); }).filter(Boolean);
    var tbl = Comp.newTable(teams);
    arr.forEach(function (a) {
      var t = tref(a[0]); if (!t || !tbl[t.n]) return;
      var r = tbl[t.n];
      r.pj = a[1]; r.g = a[2]; r.e = a[3]; r.p = a[4];
      r.gf = a[5]; r.gc = a[6]; r.pts = a[7];
      r.form = (a[8] || '').split('');
    });
    return tbl;
  }

  /* ---------- goleadores ---------- */
  function encScorers(sc, idxByName) {
    var out = [];
    Object.keys(sc).forEach(function (k) {
      var r = sc[k];
      var team = idxByName ? (idxByName[r.t] != null ? idxByName[r.t] : -1) : clean(r.t);
      out.push(team + FS + clean(r.n) + FS + r.g + FS + r.a);
    });
    return out.join(RS);
  }
  function decScorers(txt, names) {
    var sc = {};
    (txt || '').split(RS).filter(Boolean).forEach(function (line) {
      var f = line.split(FS);
      var team = names ? (names[+f[0]] || '?') : f[0];
      sc[team + '|' + f[1]] = { t: team, n: f[1], g: +f[2], a: +f[3] };
    });
    return sc;
  }

  /* =====================================================================
     SNAPSHOT
     ===================================================================== */
  function snapshot(meTeam) {
    var st = World.state;
    if (!st) return null;
    if (st.paused) throw new Error('Termina el sorteo pendiente antes de guardar.');

    var LEAGUES = global.LEAGUES;
    assignUids(LEAGUES);

    /* plantillas y ubicación actual de cada equipo */
    var rosters = {};
    Object.keys(LEAGUES).forEach(function (id) {
      if (id === '__nations__') return;
      LEAGUES[id].teams.forEach(function (t) {
        rosters[t.uid] = {
          lg: id, n: t.n, s: t.s, fm: t.fm || 0,
          p: t.p.map(function (p) {
            return clean(p[0]) + FS + p[1] + FS + p[2] + FS + p[3] + FS +
              (p.gen ? '1' : '') + FS + (p[4] || '');
          }).join(RS)
        };
      });
    });

    /* ligas */
    var leagues = {};
    Object.keys(st.leagues).forEach(function (id) {
      var lg = st.leagues[id];
      var idx = {}, nameIdx = {};
      lg.teams.forEach(function (t, i) { idx[t.uid] = i; nameIdx[t.n] = i; });
      leagues[id] = {
        teams: lg.teams.map(tid),
        rounds: lg.rounds.map(function (r) {
          return r.map(function (p) { return [idx[p[0].uid], idx[p[1].uid]]; });
        }),
        weeks: lg.weeks, played: lg.played,
        table: encTable(lg.table), scorers: encScorers(lg.scorers, nameIdx),
        results: lg.results.map(function (r) {
          return [r.round, r.matches.map(function (m) { return [idx[m.h.uid], idx[m.a.uid], m.s[0], m.s[1]]; })];
        })
      };
    });

    /* copas */
    var cups = {};
    Object.keys(st.cups).forEach(function (id) {
      var c = st.cups[id];
      cups[id] = {
        name: c.name, country: c.country, flag: c.flag, idx: c.idx, weeks: c.weeks,
        alive: c.alive.map(tid), champion: tid(c.champion),
        rounds: c.rounds.map(function (r) { return { name: r.name, ties: r.ties.map(encTie) }; })
      };
    });

    /* continentales */
    var conts = {};
    Object.keys(st.conts).forEach(function (id) {
      var c = st.conts[id];
      conts[id] = {
        phase: c.phase, champion: tid(c.champion),
        pool: (c.pool || []).map(tid), prelimPool: (c.prelimPool || []).map(tid),
        prelimTies: (c.prelimTies || []).map(encTie),
        prelimHechas: (c.prelimHechas || []).map(encTie),
        playoffTies: (c.playoffTies || []).map(encTie),
        playoffHechas: (c.playoffHechas || []).map(encTie),
        groupWinners: (c.groupWinners || []).map(tid),
        scorers: encScorers(c.scorers || {}),
        groups: c.groups ? c.groups.map(function (g) {
          var gi = {};
          g.teams.forEach(function (t, i) { gi[t.uid] = i; });
          return {
            name: g.name, teams: g.teams.map(tid), played: g.played,
            table: encTable(g.table),
            results: (g.results || []).map(function (m) { return [m.md, gi[m.h.uid], gi[m.a.uid], m.s[0], m.s[1]]; }),
            fixtures: g.fixtures.map(function (r) {
              return r.map(function (p) { return [gi[p[0].uid], gi[p[1].uid]]; });
            })
          };
        }) : null,
        koRounds: (c.koRounds || []).map(function (r) {
          return { name: r.name, slot: r.slot, done: !!r.done, single: !!r.single, isPlayoff: !!r.isPlayoff, ties: r.ties.map(encTie) };
        })
      };
    });

    /* cupos e historial */
    function encQual(q) {
      if (!q) return null;
      var o = { notes: q.notes || [] };
      Object.keys(q).forEach(function (k) {
        if (k === 'notes') return;
        o[k] = { groups: q[k].groups.map(tid), prelim: q[k].prelim.map(tid) };
      });
      return o;
    }
    /* los play-off de ascenso: se guardan por identificador, como todo */
    function encPlayoffs(po) {
      var o = {};
      Object.keys(po || {}).forEach(function (lid) {
        var p = po[lid];
        o[lid] = { year: p.year, liga: p.liga, sube: p.sube, campeon: tid(p.campeon),
          ties: p.ties.map(function (t) {
            return { name: t.name, a: tid(t.a), b: tid(t.b), s: t.s,
              pens: t.pens, aet: t.aet, w: tid(t.w) };
          }) };
      });
      return o;
    }
    /* la Supercopa y la Recopa, por identificador como todo lo demás */
    function encTie(t) {
      if (!t) return null;
      return { nombre: t.nombre, a: tid(t.a), b: tid(t.b), s: t.s, pens: t.pens,
        aet: t.aet, w: tid(t.w), agg: t.agg,
        leg1: t.leg1 ? { h: tid(t.leg1.h), a: tid(t.leg1.a), s: t.leg1.s } : null,
        leg2: t.leg2 ? { h: tid(t.leg2.h), a: tid(t.leg2.a), s: t.leg2.s } : null };
    }
    function encSuper(sc) {
      if (!sc) return null;
      return { uefa: encTie(sc.uefa), conmebol: encTie(sc.conmebol) };
    }
    var history = st.history.map(function (h) {
      return {
        year: h.year,
        leagues: h.leagues.filter(function (l) { return l.champion; })
          .map(function (l) { return { id: l.id, name: l.name, champion: tid(l.champion), runnerUp: tid(l.runnerUp) }; }),
        cups: h.cups.map(function (c) {
          return { id: c.id, name: c.name, flag: c.flag, champion: tid(c.champion), runnerUp: tid(c.runnerUp) };
        }),
        conts: h.conts.map(function (c) {
          return { id: c.id, name: c.name, champion: tid(c.champion), runnerUp: tid(c.runnerUp) };
        }),
        moves: h.moves, aging: h.aging,
        qualification: { notes: (h.qualification && h.qualification.notes) || [] }
      };
    });

    var last = st.weekLog[st.weekLog.length - 1];
    var weekLog = last ? [{
      week: last.week, year: last.year, notes: last.notes,
      leagues: last.leagues.map(function (l) {
        return { id: l.id, name: l.name, round: l.round, total: l.total, matches: l.matches.map(encMatch) };
      }),
      cups: last.cups.map(function (c) {
        return { id: c.id, name: c.name, flag: c.flag, round: c.round, ties: c.ties.map(encTie), champion: tid(c.champion) };
      }),
      conts: last.conts.map(function (c) {
        return {
          id: c.id, name: c.name, phase: c.phase, champion: tid(c.champion),
          ties: c.ties ? c.ties.map(encTie) : 0,
          matches: c.matches ? c.matches.map(function (m) { return [tid(m.h), tid(m.a), m.s[0], m.s[1], m.g || '']; }) : 0
        };
      })
    }] : [];

    return {
      v: VERSION, saved: new Date().toISOString(),
      me: tid(meTeam),
      year: st.year, week: st.week, total: st.total, manualDraw: st.manualDraw,
      ofcChampion: tid(st.ofcChampion), detail: tid(st.detailTeam),
      rosters: rosters, leagues: leagues, cups: cups, conts: conts,
      qualification: encQual(st.qualification), history: history, weekLog: weekLog,
      playoffs: encPlayoffs(st.playoffs),
      plantilla: st.plantilla || {}, plantillaDe: st.plantillaDe || null,
      selHecha: st.selHecha != null ? st.selHecha : null,
      selCompleta: !!st.selCompleta,
      poCompleta: !!st.poCompleta,
      colaGuardada: st.colaGuardada || [],
      selAntes: st.selAntes || null,
      superCopas: encSuper(st.superCopas),
      /* dinero y mercado de pases */
      caja: st.caja || 0, taquilla: st.taquilla || 0, partidosCasa: st.partidosCasa || 0,
      presupuesto: st.presupuesto || 0, mercadoAbierto: !!st.mercadoAbierto,
      fichajes: encMov(st.fichajes), ventas: encMov(st.ventas),
      /* carrera de jugador y ciclo de selecciones */
      carrera: global.Carrera ? Carrera.exporta() : null,
      miSeleccion: st.miSeleccion || null,
      cambioSeleccion: !!st.cambioSeleccion,
      seleccionCiclo: st.seleccionCiclo || 0,
      /* Con los partidos y goles de cada torneo: si sólo se guarda el
         nombre, al recargar el panel «Con tu selección» se queda con lo de
         esta temporada y borra toda la historia. */
      seleccionHistorial: (st.seleccionHistorial || []).map(function (h) {
        var m = h.mio || null;
        return { anio: h.anio, fase: h.fase, nombre: h.nombre, campeon: h.campeon,
          nat: h.nat || '', seleccion: h.seleccion || '',
          pj: h.pj || 0, g: h.g || 0, a: h.a || 0,
          mio: m ? { torneo: m.torneo || '', campeon: !!m.campeon,
            convocado: !!m.convocado, puesto: m.puesto || '',
            clasificado: !!m.clasificado, seleccion: m.seleccion || '' } : null };
      })
    };
  }

  /* los movimientos del mercado, sin referencias a objetos */
  function encMov(l) {
    return (l || []).map(function (x) {
      return { n: x.n, ovr: x.ovr, precio: x.precio, de: x.de || '', a: x.a || '',
        fallo: !!x.fallo, club: !!x.club };
    });
  }

  /* =====================================================================
     RESTAURAR
     ===================================================================== */
  function apply(data) {
    if (!data || data.v !== VERSION) throw new Error('Esa partida es de otra versión del simulador.');
    var LEAGUES = global.LEAGUES;
    assignUids(LEAGUES);

    /* 1 · plantillas y cambios de liga */
    var byUid = index(LEAGUES);
    Object.keys(data.rosters).forEach(function (uid) {
      var t = byUid[uid], r = data.rosters[uid];
      if (!t) return;
      /* si el club se renombró, manda el nombre nuevo, no el del archivo */
      if (!RENOMBRADOS[uid]) t.n = r.n;
      t.s = r.s;
      if (r.fm) t.fm = r.fm; else delete t.fm;
      t.p = r.p.split(RS).filter(Boolean).map(function (line) {
        var f = line.split(FS);
        var pl = [limpiaNombre(f[0]), f[1], +f[2], +f[3]];
        if (f[4]) pl.gen = true;
        if (f[5]) pl[4] = f[5];
        return pl;
      });
      if (t.leagueId !== r.lg && LEAGUES[r.lg]) {
        var from = LEAGUES[t.leagueId];
        if (from) { var i = from.teams.indexOf(t); if (i >= 0) from.teams.splice(i, 1); }
        LEAGUES[r.lg].teams.push(t);
        t.leagueId = r.lg; t.league = LEAGUES[r.lg].name;
      }
      t.ovr = Engine.overall(t);
    });
    Object.keys(LEAGUES).forEach(function (id) {
      if (id === '__nations__') return;
      LEAGUES[id].teams.sort(function (a, b) { return a.n.localeCompare(b.n, 'es'); });
    });
    U = index(LEAGUES);

    /* 2 · estado del mundo */
    World.create({ manualDraw: data.manualDraw });
    var st = World.state;
    st.year = data.year; st.week = data.week; st.total = data.total;
    st.ofcChampion = tref(data.ofcChampion);
    st.detailTeam = tref(data.detail);
    st.caja = data.caja != null ? data.caja : null;
    st.taquilla = data.taquilla || 0;
    st.partidosCasa = data.partidosCasa || 0;
    st.presupuesto = data.presupuesto || 0;
    st.mercadoAbierto = !!data.mercadoAbierto;
    st.fichajes = data.fichajes || [];
    st.ventas = data.ventas || [];
    st.mercado = null;

    st.leagues = {};
    Object.keys(data.leagues).forEach(function (id) {
      var d = data.leagues[id];
      var teams = d.teams.map(tref).filter(Boolean);
      st.leagues[id] = {
        id: id, name: LEAGUES[id].name, ref: LEAGUES[id], teams: teams,
        rounds: d.rounds.map(function (r) { return r.map(function (p) { return [teams[p[0]], teams[p[1]]]; }); }),
        weeks: d.weeks, played: d.played,
        table: decTable(d.table), scorers: decScorers(d.scorers, teams.map(function (t) { return t.n; })),
        results: d.results.map(function (r) {
          return {
            round: r[0], matches: r[1].map(function (m) {
              return { h: teams[m[0]], a: teams[m[1]], s: [m[2], m[3]] };
            })
          };
        })
      };
    });

    st.cups = {};
    Object.keys(data.cups).forEach(function (id) {
      var d = data.cups[id];
      st.cups[id] = {
        id: id, name: d.name, country: d.country, flag: d.flag, idx: d.idx, weeks: d.weeks,
        alive: d.alive.map(tref).filter(Boolean), champion: tref(d.champion),
        rounds: d.rounds.map(function (r) { return { name: r.name, ties: r.ties.map(decTie) }; })
      };
    });

    Object.keys(data.conts).forEach(function (id) {
      var d = data.conts[id], c = st.conts[id];
      if (!c) return;
      c.phase = d.phase; c.champion = tref(d.champion);
      c.pool = d.pool.map(tref).filter(Boolean);
      c.prelimPool = d.prelimPool.map(tref).filter(Boolean);
      c.prelimTies = d.prelimTies.map(decTie);
      c.prelimHechas = (d.prelimHechas || []).map(decTie);
      c.playoffTies = (d.playoffTies || []).map(decTie);
      c.playoffHechas = (d.playoffHechas || []).map(decTie);
      c.groupWinners = d.groupWinners.map(tref).filter(Boolean);
      c.scorers = decScorers(d.scorers);
      c.groups = d.groups ? d.groups.map(function (g) {
        var teams = g.teams.map(tref).filter(Boolean);
        teams.forEach(function (t) { t.__grp = id + '|' + g.name; });
        var grp = {
          name: g.name, teams: teams, played: g.played, table: decTable(g.table),
          results: (g.results || []).map(function (m) {
            return { md: m[0], h: teams[m[1]], a: teams[m[2]], s: [m[3], m[4]] };
          }),
          fixtures: g.fixtures.map(function (r) { return r.map(function (p) { return [teams[p[0]], teams[p[1]]]; }); })
        };
        grp.standings = Comp.sortTable(grp.table);
        grp.standings.forEach(function (r, i) { r.pos = i + 1; r.group = g.name; });
        return grp;
      }) : null;
      c.koRounds = d.koRounds.map(function (r) {
        return { name: r.name, slot: r.slot, done: r.done, single: r.single, isPlayoff: r.isPlayoff, ties: r.ties.map(decTie) };
      });
    });

    function decQual(q) {
      if (!q) return null;
      var o = { notes: q.notes || [] };
      Object.keys(q).forEach(function (k) {
        if (k === 'notes') return;
        o[k] = { groups: q[k].groups.map(tref).filter(Boolean), prelim: q[k].prelim.map(tref).filter(Boolean) };
      });
      return o;
    }
    st.qualification = decQual(data.qualification);
    st.history = data.history.map(function (h) {
      return {
        year: h.year,
        leagues: h.leagues.map(function (l) {
          return { id: l.id, name: l.name, champion: tref(l.champion), runnerUp: tref(l.runnerUp) };
        }),
        cups: h.cups.map(function (c) {
          return { id: c.id, name: c.name, flag: c.flag, champion: tref(c.champion), runnerUp: tref(c.runnerUp) };
        }),
        conts: h.conts.map(function (c) {
          return { id: c.id, name: c.name, champion: tref(c.champion), runnerUp: tref(c.runnerUp) };
        }),
        moves: h.moves, aging: h.aging, qualification: h.qualification
      };
    });
    st.plantilla = data.plantilla || {};
    st.plantillaDe = data.plantillaDe || null;
    st.selHecha = data.selHecha != null ? data.selHecha : null;
    st.selCompleta = !!data.selCompleta;
    st.poCompleta = !!data.poCompleta;
    st.colaGuardada = data.colaGuardada || [];
    st.selAntes = data.selAntes || null;
    st.superCopas = decSuper(data.superCopas);
    function decTie(t) {
      if (!t) return null;
      return { nombre: t.nombre, a: tref(t.a), b: tref(t.b), s: t.s, pens: t.pens,
        aet: t.aet, w: tref(t.w), agg: t.agg,
        leg1: t.leg1 ? { h: tref(t.leg1.h), a: tref(t.leg1.a), s: t.leg1.s } : null,
        leg2: t.leg2 ? { h: tref(t.leg2.h), a: tref(t.leg2.a), s: t.leg2.s } : null };
    }
    function decSuper(sc) {
      if (!sc) return null;
      return { uefa: decTie(sc.uefa), conmebol: decTie(sc.conmebol) };
    }
    st.playoffs = {};
    Object.keys(data.playoffs || {}).forEach(function (lid) {
      var p = data.playoffs[lid];
      st.playoffs[lid] = { year: p.year, liga: p.liga, sube: p.sube, campeon: tref(p.campeon),
        ties: p.ties.map(function (t) {
          return { name: t.name, a: tref(t.a), b: tref(t.b), s: t.s,
            pens: t.pens, aet: t.aet, w: tref(t.w) };
        }) };
    });
    st.weekLog = (data.weekLog || []).map(function (l) {
      return {
        week: l.week, year: l.year, notes: l.notes, draws: [],
        leagues: l.leagues.map(function (x) {
          return { id: x.id, name: x.name, round: x.round, total: x.total, matches: x.matches.map(decMatch) };
        }),
        cups: l.cups.map(function (x) {
          return { id: x.id, name: x.name, flag: x.flag, round: x.round, ties: x.ties.map(decTie), champion: tref(x.champion) };
        }),
        conts: l.conts.map(function (x) {
          return {
            id: x.id, name: x.name, phase: x.phase, champion: tref(x.champion),
            ties: x.ties ? x.ties.map(decTie) : null,
            matches: x.matches ? x.matches.map(function (m) {
              return { h: tref(m[0]), a: tref(m[1]), s: [m[2], m[3]], g: m[4] };
            }) : null
          };
        })
      };
    });

    st.miSeleccion = data.miSeleccion || null;
    st.cambioSeleccion = !!data.cambioSeleccion;
    st.seleccionCiclo = data.seleccionCiclo || 0;
    st.seleccionHistorial = data.seleccionHistorial || [];
    if (global.Carrera) {
      Carrera.importa(data.carrera || null, tref);
      if (data.carrera) Carrera.ajustaSeleccion();
      if (data.carrera) quitaTitulosSinJugar();
    }

    var me = tref(data.me);
    U = null;
    return me;
  }

  /* =====================================================================
     ALMACENAMIENTO
     ===================================================================== */
  /* Las partidas viejas guardaron nombres con restos del marcado de la web
     de donde salieron las plantillas («Juan Coria 15px|Capitán»). Al cargar
     se limpian, que si no se arrastran para siempre. */
  /* Las partidas viejas apuntaron en el palmarés títulos de selección que
     ganó su país sin él. El torneo se juega el verano siguiente al de la
     temporada, así que el año del título es el de la temporada más uno: si
     ese año no disputó ni un partido con su selección, no estuvo. */
  function quitaTitulosSinJugar() {
    var j = Carrera.activa() ? Carrera.jugador() : null;
    if (!j || !j.palmares) return;
    var jugados = {};
    (j.historial || []).concat(j.temp ? [j.temp] : []).forEach(function (h) {
      if (h && h.selPj) jugados[h.anio + 1] = 1;
    });
    j.palmares = j.palmares.filter(function (t) {
      if (!t || !t.nat) return true;
      if (t.convocado) return true;
      return !!jugados[t.anio];
    });
  }
  function limpiaNombre(n) {
    var v = String(n || '');
    /* ojo: al guardar, la barra vertical se convierte en «/», así que los
       restos viejos llegan como «15px/Capitán» */
    if (!/px|[|\/]\s*(Capitán|Lesionado|Formativas|Campeón)|\[|SUB-|on loan/i.test(v)) return v;
    var m = /^\[https?:\/\/\S+\s+(.+?)\]$/.exec(v);
    if (m) v = m[1];
    v = v.replace(/Cedido desde otro club/g, '')
      .replace(/\d+x\d+px|\d+px/g, '')
      .replace(/[|\/]\s*(Capitán|Lesionado|Formativas|Campeón[^|\/]*|Cedido[^|\/]*)/gi, '')
      .replace(/\bSUB-\d+\b/g, '')
      .replace(/\s*\(?on loan from.*$/i, '')
      .replace(/\s*\*+\s*$/, '')
      .replace(/\s{2,}/g, ' ');
    v = v.replace(/^[\s|\/]+|[\s|\/]+$/g, '');
    return v || String(n || '');
  }

  function save(meTeam, modo) {
    var data = snapshot(meTeam);
    var txt = JSON.stringify(data);
    try {
      localStorage.setItem(clave(modo), txt);
      return { ok: true, bytes: txt.length };
    } catch (e) {
      return { ok: false, bytes: txt.length, error: e.name === 'QuotaExceededError' || /quota/i.test(e.message || '')
        ? 'No cabe en el navegador. Usa «Descargar partida».' : e.message };
    }
  }
  function info(modo) {
    try {
      var txt = localStorage.getItem(clave(modo));
      if (!txt) return null;
      var d = JSON.parse(txt);
      return { year: d.year, week: d.week, me: d.me, saved: d.saved, bytes: txt.length };
    } catch (e) { return null; }
  }
  function load(modo) {
    var txt = localStorage.getItem(clave(modo));
    if (!txt) throw new Error('No hay ninguna partida guardada en este navegador.');
    return apply(JSON.parse(txt));
  }
  function clear(modo) { try { localStorage.removeItem(clave(modo)); } catch (e) { } }

  function download(meTeam) {
    var data = snapshot(meTeam);
    var txt = JSON.stringify(data);
    var blob = new Blob([txt], { type: 'application/json' });
    var a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = 'carrera-' + data.year + '-s' + data.week + '.simufut.json';
    document.body.appendChild(a); a.click();
    setTimeout(function () { URL.revokeObjectURL(a.href); a.remove(); }, 1000);
    return txt.length;
  }
  function importFile(file, cb) {
    var fr = new FileReader();
    fr.onload = function () {
      try { cb(null, apply(JSON.parse(fr.result))); }
      catch (e) { cb(e); }
    };
    fr.onerror = function () { cb(new Error('No pude leer el archivo.')); };
    fr.readAsText(file);
  }

  global.SaveGame = {
    assignUids: assignUids, snapshot: snapshot, apply: apply,
    save: save, load: load, info: info, clear: clear,
    /* el uid actual de un club que cambió de nombre */
    uidVigente: function (uid) { return RENOMBRADOS[uid] || uid; },
    download: download, importFile: importFile
  };
})(window);
