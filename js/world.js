/* =========================================================================
   EL MUNDO
   Un calendario global de 64 semanas por temporada. Cada semana se juegan
   las jornadas de las 52 ligas, las rondas de copa nacional que tocan y las
   fases de las competiciones continentales. Al terminar hay ascensos,
   descensos, reparto de cupos continentales y empieza la temporada siguiente.
   ========================================================================= */
(function (global) {
  'use strict';

  var W = {
    leagueStart: 1, leagueEnd: 60,
    cupStart: 3, cupEnd: 56,
    prelim: [2, 3],
    playoff: [4, 5],
    groupDraw: 6,
    groups: [8, 12, 16, 20, 24, 28],
    build: 29,                        // se arman los cuadros de eliminatorias
    ko: [[31, 33], [36, 38], [42, 44], [48, 50], [54]],
    /* El Mundial de Clubes va entero al final, de corrido y después de que
       terminen las ligas: sus doce clubes no juegan dos cosas la misma semana. */
    superCopas: [56, 58],          /* Supercopa de UEFA y Recopa: ida y vuelta */
    cwcDraw: 59,
    cwcGrupos: [61, 62, 63],
    cwc: [64, 65],
    total: 66
  };
  var KO_SLOTS = W.ko.length;

  /* ---------------------------------------------------------------------
     LA PLANTILLA DEL CLUB QUE SE SIGUE

     De las ciento y pico ligas no se llevan fichas: no cabrían ni en memoria
     ni en el fichero. Del club del usuario sí, y se reinician cada temporada.
     --------------------------------------------------------------------- */
  function fichaDe(nombre) {
    var p = state.plantilla;
    if (!p[nombre]) p[nombre] = { pj: 0, tit: 0, g: 0, a: 0, am: 0, rj: 0 };
    return p[nombre];
  }
  function apuntaPlantilla(r) {
    var club = state.detailTeam;
    if (!club || !r) return;
    var t = (r.home && r.home.src === club) ? r.home
      : (r.away && r.away.src === club) ? r.away : null;
    if (!t) return;
    if (!state.plantilla || state.plantillaDe !== club.n) {
      state.plantilla = {}; state.plantillaDe = club.n;
    }
    var entraron = {};
    (t.subsLog || []).forEach(function (x) { entraron[x.in] = 1; });
    t.players.forEach(function (p, i) {
      var jugo = i < 11 || entraron[p.name];
      if (!jugo && !p.yellow && !p.red) return;
      var f = fichaDe(p.name);
      if (jugo) { f.pj++; if (i < 11) f.tit++; }
      f.g += p.goals || 0;
      f.a += p.assists || 0;
      f.am += p.yellow || 0;
      if (p.red) f.rj++;
    });
  }
  /* todos los partidos pasan por aquí, así que aquí se apunta */
  function juega(a, b, opts) {
    var r = Engine.simulate(a, b, opts);
    apuntaPlantilla(r);
    return r;
  }

  function isDetail(a, b) {
    return !!(state.detailTeam && (a === state.detailTeam || b === state.detailTeam));
  }
  /* si el partido es del equipo seguido y se quiere ver, se simula con narracion */
  function simOpts(a, b, extra) {
    var o = extra || {};
    var d = isDetail(a, b);
    o.quick = !(d && state.detailVisual);
    if (!o.neutral) taquillaDe(a, b);
    return o;
  }

  /* Lo que deja un partido en casa. Se lleva la cuenta del club del usuario,
     que es el que maneja el dinero; a los demás el presupuesto ya les entra
     calculado a partir de su estadio. */
  function taquillaDe(local, visita) {
    if (!global.Market || local !== state.detailTeam) return;
    var e = Market.taquilla(local, visita);
    state.caja = (state.caja || 0) + e;
    state.taquilla = (state.taquilla || 0) + e;
    state.partidosCasa = (state.partidosCasa || 0) + 1;
  }
  function log2(n) { return Math.round(Math.log(n) / Math.LN2); }
  function pow2AtMost(n) { var k = 1; while (k * 2 <= n) k *= 2; return k; }
  function shuffle(a) { return Comp.shuffle(a); }

  /* =====================================================================
     CREACIÓN
     ===================================================================== */
  var state = null;

  function spread(count, from, to) {
    var out = [];
    for (var i = 0; i < count; i++) {
      out.push(count === 1 ? from : Math.round(from + i * (to - from) / (count - 1)));
    }
    return out;
  }

  function newLeague(id) {
    var lg = global.LEAGUES[id];
    var rounds = Comp.roundRobin(lg.teams, !lg.single);
    return {
      id: id, name: lg.name, teams: lg.teams.slice(), ref: lg,
      rounds: rounds, weeks: spread(rounds.length, W.leagueStart, W.leagueEnd),
      played: 0, table: Comp.newTable(lg.teams), scorers: {}, results: []
    };
  }

  /* La copa nacional la juegan TODOS los equipos del país, de todas las
     divisiones. Si no son potencia de dos, los mejor valorados descansan
     en una ronda previa en vez de quedarse fuera. */
  /* Las semanas que ya tiene ocupadas un país: las jornadas de sus ligas y
     las fechas continentales. La copa se mete en los huecos. */
  function semanasDeCopa(c, n) {
    /* la primera división manda: esas semanas no se tocan. Las de las
       divisiones de abajo y las continentales se esquivan si se puede. */
    var liga = {}, cont = {};
    (c.have || []).forEach(function (l, i) {
      var lg = state.leagues[l];
      if (!lg || !lg.weeks) return;
      lg.weeks.forEach(function (w) { if (i === 0) liga[w] = 1; else cont[w] = 1; });
    });
    [].concat(W.prelim || [], W.playoff || [], W.groups || [], [W.groupDraw],
      W.cwcGrupos || [], W.cwc || []).forEach(function (w) { cont[w] = 1; });
    (W.ko || []).forEach(function (par) { par.forEach(function (w) { cont[w] = 1; }); });

    var base = spread(n, W.cupStart, W.cupEnd);
    var usadas = {}, anterior = 0, out = [];
    base.forEach(function (w) {
      var desde = Math.max(w, anterior + 1);
      var sinLiga = 0, libre = 0;
      for (var x = desde; x <= W.total && x < desde + 12; x++) {
        if (usadas[x] || liga[x]) continue;
        if (!sinLiga) sinLiga = x;
        if (!cont[x]) { libre = x; break; }
      }
      var elegida = libre || sinLiga || Math.min(W.total, desde);
      usadas[elegida] = 1;
      anterior = elegida;
      out.push(elegida);
    });
    return out;
  }

  function newCup(c) {
    var entrants = [];
    c.have.forEach(function (l) {
      var lg = global.LEAGUES[l];
      /* las categorias de abajo no entran a la copa nacional */
      if (!lg || lg.sinCopa) return;
      entrants = entrants.concat(lg.teams);
    });
    entrants = shuffle(entrants);
    var K = pow2AtMost(entrants.length);
    var nRounds = log2(K) + (entrants.length > K ? 1 : 0);
    /* La primera ronda se sortea ya: los mejor valorados esperan y el resto
       queda emparejado en el orden en que van. Así se ve en el calendario
       desde la primera semana. */
    if (entrants.length > K) {
      var byN = K * 2 - entrants.length;
      var orden = entrants.slice().sort(function (a, b) { return (b.ovr || 0) - (a.ovr || 0); });
      entrants = orden.slice(0, byN).concat(shuffle(orden.slice(byN)));
    }
    return {
      id: c.id, name: c.cup || 'Copa', country: c.name, flag: c.flag,
      alive: entrants, rounds: [], idx: 0,
      weeks: semanasDeCopa(c, nRounds), champion: null
    };
  }

  function create(opts) {
    opts = opts || {};
    state = {
      year: 2026, week: 0, total: W.total,
      manualDraw: !!opts.manualDraw, paused: false, pendingDraws: [], detailTeam: null, detailVisual: false,
      leagues: {}, cups: {}, conts: {}, draws: [],
      qualification: null, weekLog: [], seasonLog: [], history: [], playoffs: {},
      plantilla: {}, plantillaDe: null, selHecha: null, superCopas: null
    };
    Object.keys(global.LEAGUES).forEach(function (id) {
      if (id === '__nations__') return;
      state.leagues[id] = newLeague(id);
    });
    (global.COUNTRIES || []).forEach(function (c) {
      if (!c.have || !c.have.length) return;
      state.cups[c.id] = newCup(c);
    });
    state.qualification = seedQualification();
    buildContinentals();
    return state;
  }

  /* =====================================================================
     CUPOS CONTINENTALES
     ===================================================================== */
  function countryOf(id) {
    var list = global.COUNTRIES || [];
    for (var i = 0; i < list.length; i++) if (list[i].id === id) return list[i];
    return null;
  }

  /* Reparte los cupos continentales de un país.
     Si el campeón de copa ya entraba por la liga, su plaza NO se le da al
     siguiente equipo libre dentro de esa misma copa: el cupo se libera y todo
     el reparto corre un puesto hacia abajo, así que el que se beneficia entra
     por la última plaza (la competición de menor nivel). */
  /* quién marcó en un partido, para que el resultado no sea sólo un número */
  function goles(r) {
    var g = global.Comp.matchScorers(r);
    return { gh: g.home, ga: g.away };
  }

  /* las puertas de entrada, de la mejor a la peor */
  var PUERTAS = ['top', 'po', 'pre', 'second', 'secondPo'];

  function allocate(countryId, orderedTeams, cupChampion) {
    var b = global.BERTHS[countryId];
    if (!b) return null;
    var cupo = {};
    var N = 0;
    PUERTAS.forEach(function (k) { cupo[k] = b[k] || 0; N += cupo[k]; });
    if (!N) return null;

    var cupTeam = null, freed = false;
    if (b.cup && cupChampion) {
      /* ¿Habría entrado en ESA competición por la tabla? La copa da una plaza
         concreta (en Argentina, Libertadores), así que se mira hasta donde
         llegan las plazas de esa puerta y no hasta la última de todas: un
         octavo que gana la Copa Argentina se lleva un cupo de Libertadores y
         empuja al sexto a la Sudamericana. */
      var hasta = 0;
      for (var pi = 0; pi < PUERTAS.length; pi++) {
        hasta += cupo[PUERTAS[pi]] || 0;
        if (PUERTAS[pi] === b.cup) break;
      }
      if (orderedTeams.slice(0, hasta).indexOf(cupChampion) < 0) cupTeam = cupChampion;
      else freed = true;
    }

    /* los equipos que entran por la tabla */
    var plazas = N - (cupTeam ? 1 : 0);
    var chosen = [], i = 0;
    while (chosen.length < plazas && i < orderedTeams.length) {
      var t = orderedTeams[i++];
      if (t !== cupTeam) chosen.push(t);
    }

    var res = {
      top: [], po: [], pre: [], second: [], secondPo: [],
      cupTeam: cupTeam, cupTo: b.cup, freed: freed, conf: b.conf,
      entra: null, entraEn: null
    };
    if (cupTeam && b.cup) { res[b.cup].push(cupTeam); cupo[b.cup]--; }

    var k = 0;
    PUERTAS.forEach(function (key) {
      if (cupo[key] > 0) {
        res[key] = res[key].concat(chosen.slice(k, k + cupo[key]));
        k += cupo[key];
      }
    });

    /* dentro de cada competición, por posición en la tabla */
    PUERTAS.forEach(function (key) {
      res[key].sort(function (x, y) {
        return orderedTeams.indexOf(x) - orderedTeams.indexOf(y);
      });
    });

    /* quién se metió gracias al cupo liberado: el de la última plaza */
    if (freed && chosen.length) {
      res.entra = chosen[chosen.length - 1];
      PUERTAS.slice().reverse().forEach(function (key) {
        if (!res.entraEn && res[key].indexOf(res.entra) >= 0) res.entraEn = key;
      });
    }
    return res;
  }

  var CONF_MAP = {
    CONMEBOL: { top: 'libertadores', second: 'sudamericana' },
    UEFA: { top: 'ucl', second: 'uel' },
    CONCACAF: { top: 'concachampions' },
    AFC: { top: 'afccl' },
    CAF: { top: 'cafcl' }
  };

  function emptyQual() {
    var q = {};
    Object.keys(global.CONT_COMPS).forEach(function (id) {
      q[id] = { groups: [], prelim: [], playoff: [] };
    });
    q.notes = [];
    return q;
  }

  function applyAllocation(q, alloc) {
    var map = CONF_MAP[alloc.conf];
    if (!map) return;
    if (map.top) {
      alloc.top.forEach(function (t) { q[map.top].groups.push(t); });
      alloc.po.forEach(function (t) { q[map.top].playoff.push(t); });
      alloc.pre.forEach(function (t) { q[map.top].prelim.push(t); });
    }
    if (map.second) {
      alloc.second.forEach(function (t) { q[map.second].groups.push(t); });
      alloc.secondPo.forEach(function (t) { q[map.second].playoff.push(t); });
    }
  }

  /* temporada 1: no hay clasificaciones previas, se usa la valoración */
  function seedQualification() {
    var q = emptyQual();
    (global.COUNTRIES || []).forEach(function (c) {
      if (!global.BERTHS[c.id] || !c.have || !c.have.length) return;
      var teams = global.LEAGUES[c.have[0]].teams.slice()
        .sort(function (a, b) { return b.ovr - a.ovr; });
      var cupChamp = teams[2] || teams[0];
      var alloc = allocate(c.id, teams, cupChamp);
      if (alloc) applyAllocation(q, alloc);
    });
    return q;
  }

  /* fin de temporada: con tablas reales y campeones de copa */
  function computeQualification() {
    var q = emptyQual();
    (global.COUNTRIES || []).forEach(function (c) {
      if (!global.BERTHS[c.id] || !c.have || !c.have.length) return;
      var lg = state.leagues[c.have[0]];
      var rows = Comp.sortTable(lg.table);
      var teams = rows.map(function (r) { return r.t; });
      var cup = state.cups[c.id];
      var alloc = allocate(c.id, teams, cup && cup.champion);
      if (!alloc) return;
      applyAllocation(q, alloc);
      if (alloc.freed && cup && cup.champion && alloc.entra) {
        var mapa = CONF_MAP[alloc.conf] || {};
        var compId = mapa[alloc.entraEn === 'prelim' ? 'top' : alloc.entraEn];
        var compName = compId && global.CONT_COMPS[compId] ? global.CONT_COMPS[compId].name : '';
        q.notes.push(c.flag + ' ' + cup.champion.n + ' ganó ' + cup.name +
          ' pero ya estaba clasificado: el cupo se liberó y entró ' + alloc.entra.n +
          (compName ? ' a la ' + compName : '') + '.');
      }
    });

    /* Los dos campeones europeos tienen su plaza en los grupos de la
       Champions. El que ya se había clasificado por liga libera su cupo, y
       el hueco se lo queda el mejor equipo libre de su país. */
    campeonesVigentes(q);
    return q;
  }

  function campeonesVigentes(q) {
    if (!q.ucl) return;
    var C = state.conts || {};
    [['ucl', 'la Champions'], ['uel', 'la Europa League']].forEach(function (par) {
      var camp = C[par[0]] && C[par[0]].champion;
      if (!camp) return;
      var dentro = q.ucl.groups.indexOf(camp) >= 0;
      if (!dentro) {
        /* si venía por una puerta de atrás, sube a los grupos */
        ['playoff', 'prelim'].forEach(function (k) {
          var i = (q.ucl[k] || []).indexOf(camp);
          if (i >= 0) q.ucl[k].splice(i, 1);
        });
        ['groups', 'playoff'].forEach(function (k) {
          var i = (q.uel[k] || []).indexOf(camp);
          if (i >= 0) q.uel[k].splice(i, 1);
        });
        q.ucl.groups.push(camp);
        q.notes.push('🏆 ' + camp.n + ', campeón de ' + par[1] +
          ', entra directo a los grupos de la Champions.');
        return;
      }
      /* Ya estaba dentro por liga, así que su plaza de campeón queda libre:
         se la queda el mejor equipo de su país que se hubiera quedado fuera,
         y entra a los grupos igual. Así los 32 siguen siendo 32. */
      var extra = siguienteLibre(q, camp);
      if (extra) {
        q.ucl.groups.push(extra);
        q.notes.push('🏆 ' + camp.n + ', campeón de ' + par[1] +
          ', ya estaba clasificado por liga: libera cupo y entra ' + extra.n +
          ' a los grupos de la Champions.');
      }
    });
  }

  /* el mejor equipo de la liga del campeón que no tenga plaza europea */
  function siguienteLibre(q, camp) {
    var lg = state.leagues[camp.leagueId];
    if (!lg) return null;
    var ocupados = {};
    ['ucl', 'uel'].forEach(function (id) {
      ['groups', 'playoff', 'prelim'].forEach(function (k) {
        (q[id] && q[id][k] || []).forEach(function (t) { ocupados[t.n] = 1; });
      });
    });
    var filas = Comp.sortTable(lg.table);
    for (var i = 0; i < filas.length; i++) {
      if (!ocupados[filas[i].t.n]) return filas[i].t;
    }
    return null;
  }

  /* =====================================================================
     COMPETICIONES CONTINENTALES
     ===================================================================== */
  function newCont(id) {
    var cfg = global.CONT_COMPS[id];
    var q = state.qualification[id] || { groups: [], prelim: [] };
    return {
      id: id, cfg: cfg, name: cfg.name,
      pool: q.groups.filter(Boolean), prelimPool: q.prelim.filter(Boolean),
      playoffPool: (q.playoff || []).filter(Boolean),
      prelimTies: [], playoffTies: [], groups: null, drawState: null,
      koRounds: [], koField: null, koSlot: 0, playoff: null,
      champion: null, phase: 'espera', scorers: {}
    };
  }

  /* La Europa League clasifica en dos rondas: los más flojos de la bolsa
     del play-off juegan antes una primera ronda. Así entran los 48 justos. */
  function parteLaBolsa(c) {
    var n = c.cfg.prelimSize || 0;
    if (!n || c.prelimPool.length || c.playoffPool.length <= n) return;
    var orden = c.playoffPool.slice().sort(function (a, b) { return (b.ovr || 0) - (a.ovr || 0); });
    var flojos = orden.slice(orden.length - n);
    var marca = {};
    flojos.forEach(function (t) { marca[t.leagueId + '|' + t.n] = 1; });
    c.prelimPool = flojos;
    c.playoffPool = c.playoffPool.filter(function (t) { return !marca[t.leagueId + '|' + t.n]; });
  }

  /* Reparte los grupos de una competición. Se usa tanto al empezar la
     temporada (las que no tienen previa) como en la semana del sorteo. */
  function sorteaGrupos(c, rep) {
    var need = c.cfg.groups * c.cfg.size;
    /* una plaza sin dueño no puede tumbar el sorteo: se descarta y se repone */
    c.pool = c.pool.filter(Boolean);
    if (c.pool.length > need) c.pool = c.pool.slice(0, need);
    if (c.pool.length < need) topUp(c, need);
    c.drawState = Draw.create(c.pool, c.cfg.groups);
    if (state.manualDraw) { state.pendingDraws.push(c.id); return false; }
    var guard = 0;
    while (!c.drawState.done && guard++ < 500) Draw.drawOne(c.drawState);
    finishDraw(c);
    if (rep) rep.draws.push({ id: c.id, name: c.name, groups: c.groups, relaxed: c.drawState.relaxed });
    return true;
  }

  function buildContinentals() {
    state.conts = {};
    ['libertadores', 'sudamericana', 'ucl', 'uel', 'concachampions', 'afccl', 'cafcl'].forEach(function (id) {
      if (!global.CONT_COMPS[id]) return;
      state.conts[id] = newCont(id);
      parteLaBolsa(state.conts[id]);
    });
    /* Lo que ya se puede sortear, se sortea ahora: las previas (sus cruces
       ya están decididos) y los grupos de las competiciones sin fase previa.
       Así el calendario está completo desde la semana uno. */
    Object.keys(state.conts).forEach(function (id) {
      var c = state.conts[id];
      if (!c || !c.cfg || !c.cfg.groups) return;
      if (c.prelimPool && c.prelimPool.length) {
        c.prelimTies = makeTies(shuffle(c.prelimPool));
        c.phase = 'previa';
      }
      var esperaPrevia = (c.prelimPool && c.prelimPool.length) ||
        (c.playoffPool && c.playoffPool.length);
      if (!esperaPrevia && !state.manualDraw) sorteaGrupos(c, null);
    });

    state.conts.cwc = {
      id: 'cwc', cfg: global.CONT_COMPS.cwc, name: 'Mundial de Clubes',
      pool: [], groups: null, koRounds: [], tercerPuesto: null, deDonde: {},
      champion: null, phase: 'espera', scorers: {}
    };
    state.ofcChampion = null;
  }

  /* completa un cupo incompleto con los mejores equipos libres de la confederación */
  /* todos los clubes que ya tienen plaza en alguna competición continental
     esta temporada: nadie puede jugar dos a la vez */
  function yaTienenPlaza() {
    var m = {};
    function mete(t) { if (t) m[t.leagueId + '|' + t.n] = 1; }
    Object.keys(state.conts || {}).forEach(function (id) {
      var c = state.conts[id];
      if (!c) return;
      (c.pool || []).forEach(mete);
      (c.prelimPool || []).forEach(mete);
      (c.playoffPool || []).forEach(mete);
      (c.groups || []).forEach(function (g) { (g.teams || []).forEach(mete); });
      (c.prelimTies || []).concat(c.playoffTies || []).forEach(function (t) {
        mete(t.a); mete(t.b);
      });
    });
    return m;
  }

  function topUp(c, need) {
    /* por si alguna plaza se quedó sin dueño: un hueco no puede tumbar el sorteo */
    c.pool = c.pool.filter(Boolean);
    var inPool = yaTienenPlaza();
    c.pool.forEach(function (t) { inPool[t.leagueId + '|' + t.n] = 1; });
    var reserve = [];
    (global.COUNTRIES || []).forEach(function (co) {
      var b = global.BERTHS[co.id];
      if (!b || b.conf !== c.cfg.conf || !co.have || !co.have.length) return;
      /* Sólo la primera división. Si no, un recién descendido con buena
         valoración entra por la puerta de atrás a llenar el hueco y aparece
         jugando la Sudamericana desde la B. */
      var lid = co.have[0];
      if (!global.LEAGUES[lid]) return;
      global.LEAGUES[lid].teams.forEach(function (t) {
        if (!inPool[t.leagueId + '|' + t.n]) reserve.push(t);
      });
    });
    reserve.sort(function (a, b2) { return b2.ovr - a.ovr; });
    while (c.pool.length < need && reserve.length) c.pool.push(reserve.shift());
  }

  /* ---------- eliminatorias a doble partido ---------- */
  /* El equipo del usuario puede jugar más de un partido en la misma semana
     (liga + copa + continental). Se guardan todos, no sólo el último. */
  function pushMy(rep, m) {
    if (!rep) return;
    if (!rep.myMatches) rep.myMatches = [];
    rep.myMatches.push(m);
    if (!rep.myMatch) rep.myMatch = m;
    /* en la carrera de jugador, aquí se apuntan sus minutos y sus goles */
    if (global.Carrera && Carrera.activa()) Carrera.apunta(m);
  }

  function makeTies(teams) {
    var ties = [];
    for (var i = 0; i < teams.length; i += 2) {
      ties.push({ a: teams[i], b: teams[i + 1], leg1: null, leg2: null, agg: null, pens: null, w: null });
    }
    return ties;
  }
  function playLeg(tie, leg, scorers, single, rep, label) {
    if (!tie.b) { tie.w = tie.a; return null; }
    var home = leg === 1 ? tie.a : tie.b, away = leg === 1 ? tie.b : tie.a;
    var detail = isDetail(home, away);
    var r = juega(home, away, simOpts(home, away, { neutral: !!single, knockout: !!single }));
    if (detail && rep) {
      pushMy(rep, {
        kind: 'ko', comp: label || '', res: r,
        label: single ? 'Partido único' : (leg === 1 ? 'Ida' : 'Vuelta')
      });
    }
    Comp.collectScorers(scorers, r);
    var gl = goles(r);
    var entry = { h: home, a: away, s: r.score, pens: r.pens, aet: r.aet, gh: gl.gh, ga: gl.ga };
    if (single) {
      tie.leg1 = entry; tie.single = true;
      tie.w = r.winner === 'home' ? home : away;
      tie.pens = r.pens;
      return entry;
    }
    if (leg === 1) { tie.leg1 = entry; return entry; }
    tie.leg2 = entry;
    var agA = tie.leg1.s[0] + entry.s[1], agB = tie.leg1.s[1] + entry.s[0];
    tie.agg = [agA, agB];
    /* el global va en el orden del partido que se está viendo, y en la
       vuelta el local es tie.b: al revés engañaba y parecía que ganaba el
       que había perdido */
    r.aggNote = 'Global ' + agB + '-' + agA;
    if (agA === agB) {
      /* la misma tanda que en todas partes: se corta en cuanto está decidida */
      var tanda = Comp.penaltyShootout(tie.a, tie.b);
      var pa = tanda.a, pb = tanda.b;
      tie.pens = { a: pa, b: pb };
      tie.w = pa > pb ? tie.a : tie.b;
      /* la tanda se decide después del partido: hay que colgarla del
         resultado de la vuelta para que se vea en el visor y en la ficha.
         Ojo al orden: en la vuelta el local es tie.b */
      var pl = { a: pb, b: pa };
      r.pens = pl; entry.pens = pl;
      r.winner = tie.w === tie.b ? 'home' : 'away';
    } else tie.w = agA > agB ? tie.a : tie.b;
    return entry;
  }

  var KO_NAMES = { 128: 'Primera ronda', 64: 'Treintaidosavos', 32: 'Dieciseisavos',
    16: 'Octavos de final', 8: 'Cuartos de final', 4: 'Semifinales', 2: 'Final' };

  /* siembra evitando cruces del mismo grupo y, si se puede, del mismo país */
  function seedKO(list) {
    var arr = shuffle(list);
    var out = [], used = {};
    for (var i = 0; i < arr.length; i++) {
      if (used[i]) continue;
      used[i] = 1;
      var a = arr[i], perfect = -1, okGroup = -1, any = -1;
      for (var j = i + 1; j < arr.length; j++) {
        if (used[j]) continue;
        if (any < 0) any = j;
        var sameGroup = !!(a.__grp && arr[j].__grp === a.__grp);
        var sameCountry = Draw.countryOf(a) === Draw.countryOf(arr[j]);
        if (!sameGroup && !sameCountry) { perfect = j; break; }
        if (!sameGroup && okGroup < 0) okGroup = j;
      }
      var pick = perfect >= 0 ? perfect : (okGroup >= 0 ? okGroup : any);
      if (pick < 0) break;
      used[pick] = 1;
      out.push(a, arr[pick]);
    }
    return out;
  }

  /* =====================================================================
     AVANZAR UNA SEMANA
     ===================================================================== */
  /* pasa del estado del sorteo a los grupos reales */
  function finishDraw(c) {
    c.groups = c.drawState.groups.map(function (g) {
      g.teams.forEach(function (t) { t.__grp = c.id + '|' + g.name; });
      return {
        name: g.name, teams: g.teams.slice(), results: [],
        table: Comp.newTable(g.teams), fixtures: Comp.roundRobin(g.teams, true), played: 0
      };
    });
    c.phase = 'grupos';
  }

  function advanceWeek() {
    if (state.paused || state.week >= W.total) return null;
    state.week++;
    var w = state.week;
    var rep = { week: w, year: state.year, leagues: [], cups: [], conts: [], draws: [], notes: [], myMatch: null, myMatches: [] };

    /* --- ligas --- */
    Object.keys(state.leagues).forEach(function (id) {
      var lg = state.leagues[id];
      while (lg.played < lg.rounds.length && lg.weeks[lg.played] === w) {
        var pairs = lg.rounds[lg.played], results = [], roundNo = lg.played + 1;
        pairs.forEach(function (p) {
          var detail = isDetail(p[0], p[1]);
          var r = juega(p[0], p[1], simOpts(p[0], p[1]));
          Comp.applyResult(lg.table, p[0], p[1], r.score);
          Comp.collectScorers(lg.scorers, r);
          var gl1 = goles(r);
          results.push({ h: p[0], a: p[1], s: r.score, gh: gl1.gh, ga: gl1.ga });
          if (detail) pushMy(rep, { kind: 'liga', comp: lg.name, label: 'Jornada ' + roundNo, res: r, leagueId: id });
        });
        lg.played++;
        lg.results.push({ round: lg.played, matches: results });
        rep.leagues.push({ id: id, name: lg.name, round: lg.played, total: lg.rounds.length, matches: results });
      }
    });

    /* en cuanto una categoría termina su liga regular se juega su play-off
       de ascenso, para poder verlo antes de cerrar la temporada */
    playoffsDeAscenso(rep);

    /* --- copas nacionales --- */
    Object.keys(state.cups).forEach(function (id) {
      var cup = state.cups[id];
      if (cup.champion || cup.idx >= cup.weeks.length || cup.weeks[cup.idx] !== w) return;
      var alive = cup.alive, ties = [], next = [];
      var cupK = pow2AtMost(alive.length);
      var playing = alive, byes = [];
      var roundName;
      if (alive.length > cupK) {
        /* ronda previa: los que esperan van delante, ya sorteado */
        var byN = cupK * 2 - alive.length;
        byes = alive.slice(0, byN);
        playing = alive.slice(byN);
        roundName = 'Ronda previa';
      } else {
        roundName = KO_NAMES[alive.length] || (alive.length + ' equipos');
      }
      for (var i = 0; i < playing.length; i += 2) {
        var detail = isDetail(playing[i], playing[i + 1]);
        /* la copa nacional se juega siempre en cancha neutral */
        var r = juega(playing[i], playing[i + 1],
          simOpts(playing[i], playing[i + 1], { knockout: true, neutral: true }));
        if (detail) pushMy(rep, { kind: 'copa', comp: cup.name, label: roundName, res: r, neutral: true });
        var win = r.winner === 'home' ? playing[i] : playing[i + 1];
        var glc = goles(r);
        ties.push({ a: playing[i], b: playing[i + 1], s: r.score, pens: r.pens, aet: r.aet,
          gh: glc.gh, ga: glc.ga, w: win });
        next.push(win);
      }
      cup.rounds.push({ name: roundName, ties: ties, byes: byes.slice() });
      cup.alive = shuffle(byes.concat(next));
      cup.idx++;
      /* Campeón es el que se queda solo en el torneo, no el que gana la
         única llave de una ronda: en una previa de un solo cruce quedan
         vivos además todos los que esperaban. */
      if (cup.alive.length === 1) cup.champion = cup.alive[0];
      rep.cups.push({ id: id, name: cup.name, flag: cup.flag, round: roundName, ties: ties, champion: cup.champion });
    });

    /* --- continentales --- */
    contWeek(w, rep);
    state.weekLog.push(rep);
    if (state.weekLog.length > 90) state.weekLog.shift();
    return rep;
  }

  /* ---------------------------------------------------------------------
     SUPERCOPA DE UEFA Y RECOPA SUDAMERICANA
     La Supercopa la juegan el campeón de Champions y el de Europa League a
     partido único en campo neutral. La Recopa, el campeón de Libertadores
     contra el de Sudamericana a ida y vuelta, con el de Libertadores de
     local en la vuelta, que es como se juega de verdad.
     --------------------------------------------------------------------- */
  function campeonDe(id) {
    var c = state.conts[id];
    return c && c.champion ? c.champion : null;
  }
  function superCopas(w, rep) {
    var i = W.superCopas.indexOf(w);
    if (i < 0) return;
    state.superCopas = state.superCopas || { uefa: null, conmebol: null };
    var S = state.superCopas;

    /* Supercopa de UEFA: partido único, en la primera fecha */
    if (i === 0 && !S.uefa) {
      var a = campeonDe('ucl'), b = campeonDe('uel');
      if (a && b && a !== b) {
        var r = juega(a, b, simOpts(a, b, { neutral: true, knockout: true }));
        var gl = goles(r);
        S.uefa = { nombre: 'Supercopa de UEFA', a: a, b: b, s: r.score, pens: r.pens,
          aet: r.aet, gh: gl.gh, ga: gl.ga,
          w: r.winner === 'home' ? a : b };
        if (isDetail(a, b)) pushMy(rep, { kind: 'ko', comp: 'Supercopa de UEFA',
          label: 'Final', res: r, neutral: true });
        rep.cups.push({ id: 'supercopa', name: 'Supercopa de UEFA', flag: null,
          round: 'Final', ties: [S.uefa], champion: S.uefa.w });
      }
    }

    /* Recopa Sudamericana: ida y vuelta */
    var la = campeonDe('libertadores'), su = campeonDe('sudamericana');
    if (!la || !su || la === su) return;
    if (!S.conmebol) S.conmebol = { nombre: 'Recopa Sudamericana', a: su, b: la,
      leg1: null, leg2: null, agg: null, pens: null, w: null };
    var t = S.conmebol;
    /* el campeón de Libertadores (t.b) cierra en casa */
    var leg = i === 0 ? 1 : 2;
    if (leg === 1 && t.leg1) return;
    if (leg === 2 && (t.leg2 || !t.leg1)) return;
    var local = leg === 1 ? t.a : t.b, visita = leg === 1 ? t.b : t.a;
    var rr = juega(local, visita, simOpts(local, visita, { knockout: leg === 2 }));
    var g2 = goles(rr);
    var entrada = { h: local, a: visita, s: rr.score, gh: g2.gh, ga: g2.ga };
    if (leg === 1) { t.leg1 = entrada; }
    else {
      t.leg2 = entrada;
      var agA = t.leg1.s[0] + entrada.s[1], agB = t.leg1.s[1] + entrada.s[0];
      t.agg = [agA, agB];
      rr.aggNote = 'Global ' + agB + '-' + agA;
      if (agA === agB) {
        var tanda = Comp.penaltyShootout(t.a, t.b);
        t.pens = { a: tanda.a, b: tanda.b };
        t.w = tanda.a > tanda.b ? t.a : t.b;
        rr.pens = { a: tanda.b, b: tanda.a };
      } else t.w = agA > agB ? t.a : t.b;
      rep.cups.push({ id: 'recopa', name: 'Recopa Sudamericana', flag: null,
        round: 'Final', ties: [t], champion: t.w });
    }
    if (isDetail(local, visita)) pushMy(rep, { kind: 'ko', comp: 'Recopa Sudamericana',
      label: leg === 1 ? 'Ida' : 'Vuelta', res: rr });
  }

  function contWeek(w, rep) {
    var C = state.conts;

    /* 1 · fase previa (ida y vuelta) */
    if (w === W.prelim[0] || w === W.prelim[1]) {
      ['libertadores', 'ucl', 'uel'].forEach(function (id) {
        var c = C[id]; if (!c || !c.cfg.prelim) return;
        if (w === W.prelim[0] && !c.prelimTies.length) {
          c.prelimTies = makeTies(shuffle(c.prelimPool));
          c.phase = 'previa';
        }
        var leg = w === W.prelim[0] ? 1 : 2;
        c.prelimTies.forEach(function (t) { playLeg(t, leg, c.scorers, false, rep, c.name + ' · fase previa'); });
        rep.conts.push({ id: id, name: c.name, phase: 'Fase previa · ' + (leg === 1 ? 'ida' : 'vuelta'), ties: c.prelimTies.slice() });
        /* al cerrar la vuelta: los que ganan al play-off, los que pierden a
           la puerta de atrás del torneo de segundo nivel */
        if (leg === 2) {
          var feed2 = C[c.cfg.feeds];
          c.prelimTies.forEach(function (t) {
            var perdedor = t.w === t.a ? t.b : t.a;
            if (c.cfg.playoff) c.playoffPool.push(t.w);
            else c.pool.push(t.w);
            if (feed2) {
              if (feed2.cfg.playoff) feed2.playoffPool.push(perdedor);
              else feed2.pool.push(perdedor);
            }
          });
          c.prelimHechas = c.prelimTies.slice();
          c.prelimTies = [];
        }
      });
    }

    /* 2 · play-off (ida y vuelta): el último paso antes de los grupos */
    if (W.playoff && (w === W.playoff[0] || w === W.playoff[1])) {
      ['ucl', 'uel'].forEach(function (id) {
        var c = C[id]; if (!c || !c.cfg.playoff) return;
        if (w === W.playoff[0]) {
          c.playoffTies = makeTies(shuffle(c.playoffPool));
          c.phase = 'playoff';
        }
        var leg = w === W.playoff[0] ? 1 : 2;
        c.playoffTies.forEach(function (t) { playLeg(t, leg, c.scorers, false, rep, c.name + ' · play-off'); });
        rep.conts.push({ id: id, name: c.name, phase: 'Play-off · ' + (leg === 1 ? 'ida' : 'vuelta'), ties: c.playoffTies.slice() });
        if (leg === 2) {
          var feed3 = C[c.cfg.feeds];
          c.playoffTies.forEach(function (t) {
            if (!t.w) return;
            c.pool.push(t.w);
            /* el que cae en el play-off de Champions se va a los grupos de
               la Europa League; el que cae en el de la Europa League, fuera */
            if (feed3) feed3.pool.push(t.w === t.a ? t.b : t.a);
          });
          c.playoffHechas = c.playoffTies.slice();
          c.playoffTies = [];
        }
      });
    }

    /* 3 · sorteos de la fase de grupos */
    if (w === W.groupDraw) {
      /* las previas de las confederaciones sin play-off vuelcan aquí */
      ['libertadores'].forEach(function (id) {
        var c = C[id]; if (!c || !c.prelimTies.length) return;
        var feed = C[c.cfg.feeds];
        c.prelimTies.forEach(function (t) {
          if (!t.w) return;
          c.pool.push(t.w);
          if (feed) feed.pool.push(t.w === t.a ? t.b : t.a);
        });
        c.prelimTies = [];
      });
      ['libertadores', 'sudamericana', 'ucl', 'uel', 'concachampions', 'afccl', 'cafcl'].forEach(function (id) {
        var c = C[id]; if (!c || c.groups) return;      /* ya sorteada al empezar */
        sorteaGrupos(c, rep);
      });
      if (state.pendingDraws.length) { state.paused = true; rep.pendingDraw = true; }
    }

    /* 3 · jornadas de la fase de grupos */
    var gi = W.groups.indexOf(w);
    if (gi >= 0) {
      Object.keys(C).forEach(function (id) {
        var c = C[id];
        if (!c.groups || c.phase !== 'grupos') return;
        var matches = [];
        c.groups.forEach(function (g) {
          var pairs = g.fixtures[gi] || [];
          if (!g.results) g.results = [];
          pairs.forEach(function (p) {
            var detail = isDetail(p[0], p[1]);
            var r = juega(p[0], p[1], simOpts(p[0], p[1]));
            Comp.applyResult(g.table, p[0], p[1], r.score);
            Comp.collectScorers(c.scorers, r);
            var gl2 = goles(r);
            matches.push({ g: g.name, h: p[0], a: p[1], s: r.score, gh: gl2.gh, ga: gl2.ga });
            g.results.push({ md: gi + 1, h: p[0], a: p[1], s: r.score, gh: gl2.gh, ga: gl2.ga });
            if (detail) pushMy(rep, { kind: 'grupo', comp: c.name, label: g.name + ' · jornada ' + (gi + 1), res: r });
          });
          g.played++;
        });
        c.groups.forEach(function (g) {
          g.standings = Comp.sortTable(g.table);
          g.standings.forEach(function (r, i) { r.pos = i + 1; r.group = g.name; });
        });
        rep.conts.push({ id: id, name: c.name, phase: 'Grupos · jornada ' + (gi + 1), matches: matches, groups: c.groups });
      });
    }

    /* 4 · se arman los cuadros */
    if (w === W.build) buildKnockouts(rep);

    /* 5 · eliminatorias */
    for (var slot = 0; slot < KO_SLOTS; slot++) {
      var weeks = W.ko[slot];
      var legIdx = weeks.indexOf(w);
      if (legIdx < 0) continue;
      Object.keys(C).forEach(function (id) {
        var c = C[id];
        if (!c.koRounds || !c.koRounds.length) return;
        var round = c.koRounds.filter(function (r) { return r.slot === slot; })[0];
        if (!round || round.done) return;
        var single = round.single;
        round.ties.forEach(function (t) { playLeg(t, legIdx + 1, c.scorers, single, rep, c.name + ' · ' + round.name); });
        if (single || legIdx === 1) {
          round.done = true;
          var winners = round.ties.map(function (t) { return t.w; });
          advanceKO(c, round, winners, rep);
        }
        rep.conts.push({
          id: id, name: c.name,
          phase: round.name + (single ? '' : ' · ' + (legIdx === 0 ? 'ida' : 'vuelta')),
          ties: round.ties.slice(), champion: c.champion
        });
      });
    }

    /* 6 · Mundial de Clubes */
    superCopas(w, rep);
    if (w === W.cwcDraw) setupCWC(rep);
    var gi = W.cwcGrupos.indexOf(w);
    if (gi >= 0 && C.cwc.groups) cwcJornada(C.cwc, gi, rep);
    var ci = W.cwc.indexOf(w);
    if (ci >= 0) {
      var c = C.cwc;
      if (ci === 0 && c.groups && !c.koRounds.length) cwcSemis(c);
      var round = c.koRounds[ci];
      if (round) {
        round.ties.forEach(function (t) { playLeg(t, 1, c.scorers, true, rep, c.name + ' · ' + round.name); });
        round.done = true;
        var winners = round.ties.map(function (t) { return t.w; });
        if (winners.length === 1) {
          c.champion = winners[0]; c.phase = 'terminado';
        } else {
          /* de semifinales salen la final y el partido por el tercer puesto */
          var pierden = round.ties.map(function (t) { return t.w === t.a ? t.b : t.a; });
          c.koRounds.push({ name: 'Final', ties: makeTies(winners), single: true });
          if (pierden.length === 2) {
            c.tercerPuesto = { a: pierden[0], b: pierden[1], w: null };
          }
        }
        rep.conts.push({ id: 'cwc', name: c.name, phase: round.name, ties: round.ties.slice(), champion: c.champion });
      }
      /* el 3º y 4º se juega el mismo día que la final */
      if (c.tercerPuesto && !c.tercerPuesto.w && c.koRounds.length > 1 && ci === W.cwc.length - 1) {
        playLeg(c.tercerPuesto, 1, c.scorers, true, rep, c.name + ' · Tercer puesto');
      }
    }
  }

  /* una jornada de la fase de grupos del Mundial de Clubes */
  function cwcJornada(c, gi, rep) {
    c.groups.forEach(function (g) {
      (g.fixtures[gi] || []).forEach(function (p) {
        var r = juega(p[0], p[1], simOpts(p[0], p[1], { neutral: true }));
        Comp.applyResult(g.table, p[0], p[1], r.score);
        Comp.collectScorers(c.scorers, r);
        var gl = goles(r);
        g.results.push({ md: gi + 1, h: p[0], a: p[1], s: r.score, gh: gl.gh, ga: gl.ga });
        if (isDetail(p[0], p[1])) {
          pushMy(rep, { kind: 'cont', comp: c.name, label: g.name + ' · jornada ' + (gi + 1), res: r });
        }
      });
      g.standings = Comp.sortTable(g.table);
    });
    rep.conts.push({ id: 'cwc', name: c.name, phase: 'Grupos · jornada ' + (gi + 1), ties: [], champion: null });
  }

  /* cruces de semifinales: 1º de un grupo contra 2º del otro */
  function cwcSemis(c) {
    var A = c.groups[0].standings, B = c.groups[1].standings;
    if (!A || !B || A.length < 2 || B.length < 2) return;
    c.koRounds.push({
      name: 'Semifinales', single: true, done: false,
      ties: [
        { a: A[0].t, b: B[1].t, w: null },
        { a: B[0].t, b: A[1].t, w: null }
      ]
    });
    c.phase = 'eliminatorias';
  }

  function buildKnockouts(rep) {
    var C = state.conts;

    function qualifiers(c) {
      var first = [], second = [], thirds = [];
      c.groups.forEach(function (g) {
        if (g.standings[0]) first.push(g.standings[0]);
        if (g.standings[1]) second.push(g.standings[1]);
        if (g.standings[2]) thirds.push(g.standings[2]);
      });
      return { first: first, second: second, thirds: thirds };
    }
    function byRank(rows) {
      return rows.slice().sort(function (a, b) {
        return b.pts - a.pts || (b.gf - b.gc) - (a.gf - a.gc) || b.gf - a.gf;
      });
    }
    /* bombo 1: primeros de grupo (juegan la vuelta en casa)
       bombo 2: el resto. Si hay más plazas que primeros, el bombo 1 se
       completa con los mejores del bombo 2. */
    function potsOf(first, rest) {
      var seeded = first.map(function (r) { return r.t; });
      var others = byRank(rest).map(function (r) { return r.t; });
      var half = (seeded.length + others.length) / 2;
      while (seeded.length < half && others.length) seeded.push(others.shift());
      while (seeded.length > half) others.unshift(seeded.pop());
      return { seeded: seeded, unseeded: others };
    }

    var lib = C.libertadores, sud = C.sudamericana, ucl = C.ucl, uel = C.uel;

    /* CONMEBOL */
    if (lib && lib.groups) {
      var lq = qualifiers(lib);
      var lp = potsOf(lq.first, lq.second);
      startKO2(rep, lib, lp.seeded.concat(lp.unseeded), lp);
      if (sud && sud.groups) {
        var sq = qualifiers(sud);
        var playoffField = [];
        for (var i = 0; i < 8; i++) {
          if (lq.thirds[i]) playoffField.push(lq.thirds[i].t);
          if (sq.second[i]) playoffField.push(sq.second[i].t);
        }
        sud.playoffWinners = [];
        sud.koRounds.push({
          name: 'Play-off de octavos', slot: 0, ties: makeTies(shuffle(playoffField)),
          done: false, isPlayoff: true
        });
        sud.groupWinners = sq.first.map(function (r) { return r.t; });
        sud.phase = 'eliminatorias';
      }
    }

    /* UEFA */
    if (ucl && ucl.groups) {
      var uq = qualifiers(ucl);
      var up = potsOf(uq.first, uq.second);
      startKO2(rep, ucl, up.seeded.concat(up.unseeded), up);
      if (uel && uel.groups) {
        /* 12 grupos: pasan los dos primeros y caen los ocho terceros de la
           Champions, que completan unos dieciseisavos de 32 */
        var eq = qualifiers(uel);
        var resto = eq.second.slice();
        if (uel.cfg.takesThirdsFrom) resto = resto.concat(uq.thirds);
        else if (uel.cfg.bestExtra) resto = byRank(eq.second).slice(0, uel.cfg.bestExtra);
        var ep = potsOf(eq.first, resto);
        startKO2(rep, uel, ep.seeded.concat(ep.unseeded), ep);
      }
    }

    /* resto */
    ['concachampions', 'afccl', 'cafcl'].forEach(function (id) {
      var c = C[id]; if (!c || !c.groups) return;
      var q = qualifiers(c);
      var rest = q.second.slice();
      if (c.cfg.bestExtra) rest = rest.concat(byRank(q.thirds).slice(0, c.cfg.bestExtra));
      var cp = potsOf(q.first, rest);
      startKO2(rep, c, cp.seeded.concat(cp.unseeded), cp);
    });

    rep.notes.push('Cuadros de eliminatorias sorteados.');
  }

  /* pequeño envoltorio: el orden del sorteo manda, la siembra es sólo
     un orden de partida para el bombo */
  function startKO2(rep, c, field, pots) { return startKO(c, field, rep, pots); }

  /* Las eliminatorias también se sortean: manual si el usuario lo pidió,
     automático si no. El bombo evita repetir grupo y país. */
  function startKO(c, field, rep, pots) {
    var rounds = log2(field.length);
    var slot = KO_SLOTS - rounds;
    c.phase = 'eliminatorias';
    queueKODraw(c, field, {
      slot: slot,
      single: slot === KO_SLOTS - 1,
      name: KO_NAMES[field.length] || (field.length + ' equipos')
    }, rep, pots);
  }

  /* Sólo se sortea la primera ronda (octavos o dieciseisavos). A partir de
     ahí el cuadro ya está definido y los ganadores avanzan por su rama. */
  function queueKODraw(c, field, pr, rep, pots) {
    c.pendingRound = pr;
    c.drawState = Draw.createKO(field, {
      name: c.name + ' · ' + pr.name,
      seeded: pots && pots.seeded, unseeded: pots && pots.unseeded
    });
    if (state.manualDraw) {
      state.pendingDraws.push(c.id);
      state.paused = true;
      if (rep) rep.pendingDraw = true;
      return;
    }
    Draw.autoKO(c.drawState);
    finishKODraw(c);
    if (rep) rep.draws.push({ id: c.id, name: c.name + ' · ' + pr.name, ko: true });
  }

  function finishKODraw(c) {
    var pr = c.pendingRound;
    if (!pr || !c.drawState) return;
    c.koRounds.push({
      name: pr.name, slot: pr.slot, done: false, single: pr.single,
      ties: makeTies(Draw.koField(c.drawState))
    });
    c.pendingRound = null;
    c.drawState = null;
  }

  function advanceKO(c, round, winners, rep) {
    if (round.isPlayoff) {
      /* Sudamericana: los primeros de grupo entran aquí y se sortean contra
         los ganadores del play-off (bombo 1 primeros, bombo 2 el resto) */
      var seeded = c.groupWinners.slice(), unseeded = winners.slice();
      var field = seeded.concat(unseeded);
      queueKODraw(c, field, {
        slot: round.slot + 1,
        single: (round.slot + 1) === KO_SLOTS - 1,
        name: KO_NAMES[field.length] || (field.length + ' equipos')
      }, rep, { seeded: seeded, unseeded: unseeded });
      return;
    }
    if (winners.length === 1) {
      c.champion = winners[0];
      c.phase = 'terminado';
      rep.notes.push('🏆 ' + c.name + ': campeón ' + winners[0].n);
      return;
    }
    /* cuadro ya definido: los ganadores se emparejan por su rama */
    c.koRounds.push({
      name: KO_NAMES[winners.length] || (winners.length + ' equipos'),
      slot: round.slot + 1, done: false,
      single: (round.slot + 1) === KO_SLOTS - 1,
      ties: makeTies(winners)
    });
  }

  var CONF_CWC = {
    ucl: 'UEFA', uel: 'UEFA', libertadores: 'CONMEBOL', sudamericana: 'CONMEBOL',
    concachampions: 'CONCACAF', afccl: 'AFC', cafcl: 'CAF'
  };
  function setupCWC(rep) {
    var champs = [];
    ['ucl', 'uel', 'libertadores', 'sudamericana', 'concachampions', 'afccl', 'cafcl'].forEach(function (id) {
      var c = state.conts[id];
      if (c && c.champion) champs.push({ t: c.champion, conf: CONF_CWC[id], de: c.name });
    });
    // Oceanía: campeón de la liga "Resto de OFC"
    var ofcLg = state.leagues[global.CONT_COMPS.ofc.leagueChampion];
    if (ofcLg) {
      var rows = Comp.sortTable(ofcLg.table);
      if (rows.length) {
        state.ofcChampion = rows[0].t;
        champs.push({ t: rows[0].t, conf: 'OFC', de: 'Oceanía' });
      }
    }
    var cwc = state.conts.cwc;
    cwc.pool = champs.map(function (x) { return x.t; });
    cwc.deDonde = {};
    champs.forEach(function (x) { cwc.deDonde[x.t.leagueId + '|' + x.t.n] = x.de; });

    /* Dos grupos de cuatro y ni una confederación repetida dentro de un
       grupo: con dos campeones de UEFA y dos de CONMEBOL sale justo. */
    var ocho = champs.slice(0, 8);
    if (ocho.length >= 4) {
      var gs = [{ name: 'Grupo A', teams: [], confs: {} }, { name: 'Grupo B', teams: [], confs: {} }];
      /* primero los que tienen compañía de su confederación, que son los que
         obligan; después el resto */
      var cuenta = {};
      ocho.forEach(function (x) { cuenta[x.conf] = (cuenta[x.conf] || 0) + 1; });
      var orden = ocho.slice().sort(function (a, b) {
        return (cuenta[b.conf] - cuenta[a.conf]) || ((b.t.ovr || 0) - (a.t.ovr || 0));
      });
      orden.forEach(function (x) {
        var sitio = gs.filter(function (g) { return g.teams.length < 4 && !g.confs[x.conf]; });
        if (!sitio.length) sitio = gs.filter(function (g) { return g.teams.length < 4; });
        sitio.sort(function (p, q) { return p.teams.length - q.teams.length; });
        var g = sitio[0];
        g.teams.push(x.t); g.confs[x.conf] = 1;
      });
      cwc.groups = gs.map(function (g) {
        return {
          name: g.name, teams: g.teams, table: Comp.newTable(g.teams),
          fixtures: Comp.roundRobin(g.teams, false), results: [],
          standings: Comp.sortTable(Comp.newTable(g.teams))
        };
      });
      cwc.phase = 'grupos';
    }
    rep.notes.push('Mundial de Clubes: ' + champs.length + ' campeones continentales clasificados.');
  }

  /* =====================================================================
     FIN DE TEMPORADA
     ===================================================================== */
  /* el perdedor de la final, para el subcampeón */
  function finalLoser(rounds) {
    if (!rounds || !rounds.length) return null;
    for (var i = rounds.length - 1; i >= 0; i--) {
      var r = rounds[i];
      if (r.ties && r.ties.length === 1 && r.ties[0].w && r.ties[0].a && r.ties[0].b) {
        return r.ties[0].w === r.ties[0].a ? r.ties[0].b : r.ties[0].a;
      }
    }
    return null;
  }

  function seasonSummary() {
    var s = { year: state.year, leagues: [], cups: [], conts: [], moves: [] };
    Object.keys(state.leagues).forEach(function (id) {
      var lg = state.leagues[id];
      var rows = Comp.sortTable(lg.table);
      s.leagues.push({
        id: id, name: lg.name,
        champion: rows[0] ? rows[0].t : null,
        runnerUp: rows[1] ? rows[1].t : null,
        table: rows,
        scorer: Comp.topScorers(lg.scorers, 1)[0] || null
      });
    });
    Object.keys(state.cups).forEach(function (id) {
      var c = state.cups[id];
      if (c.champion) s.cups.push({
        id: id, name: c.name, flag: c.flag,
        champion: c.champion, runnerUp: finalLoser(c.rounds)
      });
    });
    /* la Supercopa y la Recopa cuentan como títulos continentales */
    var SC = state.superCopas || {};
    if (SC.uefa && SC.uefa.w) s.conts.push({
      id: 'supercopa', name: 'Supercopa de UEFA', champion: SC.uefa.w,
      runnerUp: SC.uefa.w === SC.uefa.a ? SC.uefa.b : SC.uefa.a
    });
    if (SC.conmebol && SC.conmebol.w) s.conts.push({
      id: 'recopa', name: 'Recopa Sudamericana', champion: SC.conmebol.w,
      runnerUp: SC.conmebol.w === SC.conmebol.a ? SC.conmebol.b : SC.conmebol.a
    });
    Object.keys(state.conts).forEach(function (id) {
      var c = state.conts[id];
      if (c.champion) s.conts.push({
        id: id, name: c.name, champion: c.champion, runnerUp: finalLoser(c.koRounds)
      });
    });
    if (state.ofcChampion) {
      var ofcLg = state.leagues.otrosofc;
      var ofcRows = ofcLg ? Comp.sortTable(ofcLg.table) : [];
      s.conts.push({
        id: 'ofc', name: 'Campeón de Oceanía', champion: state.ofcChampion,
        runnerUp: ofcRows[1] ? ofcRows[1].t : null
      });
    }
    return s;
  }

  /* Ascensos y descensos.
     Una categoría puede tener más de una división por debajo (la Primera
     Nacional baja 2 a la B Metropolitana y 2 al Federal A): en ese caso los
     descendidos se REPARTEN entre ellas, no se mandan a las dos. */
  /* Play-off de ascenso: 1º contra 4º y 2º contra 3º de los que quedaron
     a las puertas, y la final. Manda el mejor clasificado en casa. */
  function playoffAscenso(cuatro, rep) {
    if (cuatro.length < 4) return { campeon: cuatro[0] || null, ties: [] };
    var ties = [];
    function cruce(a, b, nombre) {
      /* si juega el club propio, el partido se narra y va a la cola: el
         play-off se juega, no se lee después en los resultados */
      var r = juega(a, b, simOpts(a, b, { knockout: true }));
      var w = r.winner === 'home' ? a : b;
      if (isDetail(a, b)) {
        pushMy(rep, { kind: 'po', comp: 'Play-off de ascenso', label: nombre, res: r });
      }
      ties.push({ name: nombre, a: a, b: b, s: r.score, pens: r.pens, aet: r.aet, w: w });
      return w;
    }
    var s1 = cruce(cuatro[0], cuatro[3], 'Semifinal');
    var s2 = cruce(cuatro[1], cuatro[2], 'Semifinal');
    /* en la final es local el que mejor acabó la liga */
    var local = cuatro.indexOf(s1) < cuatro.indexOf(s2) ? s1 : s2;
    var visita = local === s1 ? s2 : s1;
    var campeon = cruce(local, visita, 'Final del play-off');
    return { campeon: campeon, ties: ties };
  }

  /* ---------------------------------------------------------------------
     ZONA DE LOS CLUBES ARGENTINOS

     La Primera Nacional no baja a una sola categoría: los del AMBA caen a la
     Primera B Metropolitana y los del interior (la provincia de Buenos Aires
     incluida) al Torneo Federal A. Cuántos van a cada una lo dice quién
     descendió, así que las categorías cambian de tamaño de una temporada a
     otra y el resto del motor tiene que aguantarlo.
     --------------------------------------------------------------------- */
  var ZONA = null;
  function zonaDeClub(t) {
    if (!global.ZONA_AR) return null;
    if (!ZONA) {
      ZONA = {};
      (global.ZONA_AR.amba || []).forEach(function (n) { ZONA[n] = 'M'; });
      (global.ZONA_AR.interior || []).forEach(function (n) { ZONA[n] = 'I'; });
    }
    return ZONA[t.n] || null;
  }
  /* Reparte los descendidos entre las categorías de abajo según su zona. Un
     club sin zona conocida va a la que tenga menos equipos, que es la que
     mejor le viene al calendario. */
  function repartePorZona(bajan, pares) {
    var cesta = {};
    pares.forEach(function (pr) { cesta[pr.tier2] = []; });
    bajan.forEach(function (t) {
      var z = zonaDeClub(t), destino = null;
      pares.forEach(function (pr) {
        if (z && pr.zona === z) destino = pr.tier2;
      });
      if (!destino) {
        var menor = null;
        pares.forEach(function (pr) {
          var n = global.LEAGUES[pr.tier2].teams.length + cesta[pr.tier2].length;
          if (menor === null || n < menor.n) menor = { id: pr.tier2, n: n };
        });
        destino = menor.id;
      }
      cesta[destino].push(t);
    });
    return cesta;
  }

  /* Los cuatro que se juegan la última plaza: del que se quedó a las puertas
     del ascenso directo hasta tres puestos más abajo. */
  function aspirantes(lid, n) {
    var lg = state.leagues[lid];
    if (!lg || lg.played < lg.rounds.length) return null;
    var tb = Comp.sortTable(lg.table).map(function (r) { return r.t; });
    if (tb.length < n + 3) return null;
    return tb.slice(n - 1, n + 3);
  }
  /* Se juega al acabar la liga regular de cada categoría. Guardado en
     state.playoffs, lo lee tanto la pantalla de Resultados como el reparto
     de ascensos al cerrar la temporada. */
  function playoffsDeAscenso(rep) {
    (global.PROMOTIONS || []).forEach(function (pr) {
      if (!pr.po || state.playoffs[pr.tier2]) return;
      if (!state.leagues[pr.tier1] || !state.leagues[pr.tier2]) return;
      var cuatro = aspirantes(pr.tier2, pr.n);
      if (!cuatro) return;
      var po = playoffAscenso(cuatro, rep);
      if (!po.campeon) return;
      state.playoffs[pr.tier2] = {
        year: state.year, liga: global.LEAGUES[pr.tier2].name,
        sube: global.LEAGUES[pr.tier1].name, campeon: po.campeon, ties: po.ties
      };
      if (rep) rep.notes.push('Play-off de ascenso de ' + global.LEAGUES[pr.tier2].name +
        ': sube ' + po.campeon.n + '.');
    });
  }

  /* El play-off se juega partido a partido, pero la cola no cabe en el
     archivo de guardado. Si la partida se guardó con el play-off a medias,
     al cargarla se borra y se vuelve a jugar entero, que si no queda ahí
     colgado sin poder simularse. */
  function rehazPlayoffs() {
    var rep = { notes: [], leagues: [], cups: [], conts: [], myMatches: [] };
    var hubo = false;
    Object.keys(state.playoffs || {}).forEach(function (lid) {
      var po = state.playoffs[lid];
      if (!po || !po.ties) return;
      var mio = po.ties.some(function (t) { return t.a === state.detailTeam || t.b === state.detailTeam; });
      if (!mio) return;
      delete state.playoffs[lid];
      hubo = true;
    });
    if (!hubo) return null;
    playoffsDeAscenso(rep);
    return rep.myMatches.length ? rep : null;
  }

  function applyPromotions(summary) {
    /* por si alguna categoría llegó al final sin pasar por advanceWeek */
    playoffsDeAscenso(null);
    var porArriba = {};
    (global.PROMOTIONS || []).forEach(function (pr) {
      if (!state.leagues[pr.tier1] || !state.leagues[pr.tier2]) return;
      (porArriba[pr.tier1] = porArriba[pr.tier1] || []).push(pr);
    });

    Object.keys(porArriba).forEach(function (tier1) {
      var pares = porArriba[tier1];
      var a = state.leagues[tier1], lgA = global.LEAGUES[tier1];
      var ta = Comp.sortTable(a.table).map(function (r) { return r.t; });
      var totalBajan = pares.reduce(function (s, p) { return s + p.n; }, 0);
      var bajan = ta.slice(Math.max(0, ta.length - totalBajan));   // los peores, de mejor a peor
      var corte = 0;
      /* si las categorías de abajo están repartidas por zona, manda la zona
         del club y no el orden de la tabla */
      var porZona = pares.some(function (p) { return !!p.zona; })
        ? repartePorZona(bajan, pares) : null;

      var byName = function (x, y) { return x.n.localeCompare(y.n, 'es'); };
      function mover(t, desdeLg, haciaLg, haciaId) {
        var i = desdeLg.teams.indexOf(t);
        if (i < 0) return false;                  // ya lo movió otra pareja
        desdeLg.teams.splice(i, 1);
        haciaLg.teams.push(t);
        t.leagueId = haciaId; t.league = haciaLg.name;
        return true;
      }

      pares.forEach(function (pr) {
        var b = state.leagues[pr.tier2], lgB = global.LEAGUES[pr.tier2];
        var tb = Comp.sortTable(b.table).map(function (r) { return r.t; });
        var down = porZona ? porZona[pr.tier2] : bajan.slice(corte, corte + pr.n);
        corte += pr.n;
        var up, po = null;
        if (pr.po && state.playoffs[pr.tier2]) {
          /* suben los directos y el último lo decide el play-off, que ya se
             jugó al acabar la liga regular */
          po = state.playoffs[pr.tier2];
          up = tb.slice(0, pr.n - 1).concat([po.campeon]);
        } else {
          up = tb.slice(0, pr.n);
        }

        down = down.filter(function (t) { return mover(t, lgA, lgB, pr.tier2); });
        up = up.filter(function (t) { return mover(t, lgB, lgA, pr.tier1); });

        lgB.teams.sort(byName);
        summary.moves.push({
          tier1: lgA.name, tier2: lgB.name,
          up: up.map(function (t) { return t.n; }),
          down: down.map(function (t) { return t.n; }),
          po: po ? {
            campeon: po.campeon.n,
            ties: po.ties.map(function (t) {
              return { name: t.name, a: { n: t.a.n }, b: { n: t.b.n }, s: t.s,
                pens: t.pens, aet: t.aet, w: { n: t.w.n } };
            })
          } : null
        });
      });
      lgA.teams.sort(byName);
    });
  }

  /* Cuántos chavales quiere tener siempre un club por debajo de 22 y de
     qué tamaño es una plantilla sana. Sin esto la cantera sólo entraba
     cuando el equipo bajaba de 17, que a un grande no le pasa nunca: el
     mundo se iba llenando de treintañeros temporada tras temporada. */
  var PLANTILLA_OBJ = 22, PLANTILLA_TOPE = 26, JOVENES_MIN = 4;

  /* envejecimiento: los jóvenes tiran hacia su techo, los veteranos bajan,
     se retiran y entra gente de la cantera para reemplazarlos */
  function agePlayers() {
    var retired = 0, debuts = 0;
    Object.keys(global.LEAGUES).forEach(function (id) {
      if (id === '__nations__') return;
      var lg = global.LEAGUES[id];
      lg.teams.forEach(function (t) {
        var keep = [];
        t.p.forEach(function (p) {
          /* el de la carrera lleva su propia curva y no se retira solo */
          if (p.yo) { keep.push(p); return; }
          p[3]++;
          var age = p[3];
          /* Cada uno tira hacia SU techo, no hacia un número fijo: el que
             tiene margen pega estirones y el que ya llegó se estanca. Así
             de cada cantera salen algunos cracks y el mundo se renueva
             en vez de desinflarse. */
          var techo = global.Fill ? Fill.potencial(p) : p[2];
          var margen = techo - p[2];
          if (age <= 30 && margen > 0) {
            var ritmo = age <= 19 ? 0.80 : age <= 22 ? 0.65 : age <= 25 ? 0.42
              : age <= 27 ? 0.22 : 0.10;
            /* cuanto más lejos del techo, más rápido se sube: un crack de
               verdad pega el estirón a los diecisiete, no a los veintinueve */
            var salto = ritmo * Math.min(4.5, 0.8 + margen * 0.30);
            var entero = Math.floor(salto);
            if (entero) p[2] += entero;
            if (Math.random() < salto - entero) p[2] += 1;
            if (p[2] > techo) p[2] = techo;
          }
          var baja = (age >= 31 ? 0.35 : 0) + (age >= 33 ? 0.45 : 0) + (age >= 35 ? 0.6 : 0);
          if (baja) {
            var e2 = Math.floor(baja);
            if (e2) p[2] -= e2;
            if (Math.random() < baja - e2) p[2] -= 1;
          }
          p[2] = Math.max(45, Math.min(95, p[2]));
          /* las retiradas empiezan a los 33 y se aceleran: si sólo se fuera
             la gente a los 38 las plantillas envejecerían temporada a temporada */
          var corte = age >= 39 ? 1 : age >= 37 ? 0.6 : age >= 36 ? 0.45
            : age >= 35 ? 0.3 : age >= 34 ? 0.18 : age >= 33 ? 0.09 : 0;
          if (corte && Math.random() < corte) { retired++; return; }
          keep.push(p);
        });
        t.p = keep;
        /* Al que ya no da más y ocupa sitio se le deja marchar: sin esto la
           plantilla se llena de veteranos y no cabe un chaval. */
        if (t.p.length > PLANTILLA_TOPE) {
          var sobra = t.p.filter(function (p) { return !p.yo && p[3] >= 32; })
            .sort(function (a, b) { return a[2] - b[2]; })
            .slice(0, t.p.length - PLANTILLA_TOPE);
          if (sobra.length) {
            t.p = t.p.filter(function (p) { return sobra.indexOf(p) < 0; });
            retired += sobra.length;
          }
        }
        /* CANTERA, todos los años. Se reponen las bajas hasta la plantilla
           objetivo y además se garantiza un puñado de sub-22. */
        if (global.Fill && Fill.cantera) {
          var jovenes = 0;
          t.p.forEach(function (p) { if (p[3] <= 21) jovenes++; });
          var faltan = Math.max(PLANTILLA_OBJ - t.p.length, JOVENES_MIN - jovenes);
          if (faltan > 0) {
            debuts += Fill.cantera(t, t.pool || lg.pool || 'es',
              Math.min(faltan, PLANTILLA_TOPE - t.p.length),
              state.year + '-' + t.p.length);
          }
        }
        /* que los retiros no dejen al equipo sin medios ni sin delanteros */
        if (global.Market) Market.normaliza(t);
        /* Y el entrenador rehace el once. Sin esto el equipo salía a jugar
           toda la vida con los mismos once, que envejecían juntos mientras
           los chavales se pudrían en el banquillo: de ahí los grandes con
           una media de treinta y tantos años. El club del usuario no se
           toca, que la alineación la pone él. */
        if (t !== state.detailTeam && !(t.p || []).some(function (p) { return p.yo; })) {
          t.p = Engine.autoLineup(t.p, Engine.FORMATIONS[t.fmName || '4-3-3'] ||
            Engine.FORMATIONS['4-3-3']);
        }
        t.ovr = Engine.overall(t);
      });
    });
    return { retired: retired, debuts: debuts };
  }

  /* Los títulos que ganó un club esta temporada, para el palmarés. */
  function titulosDe(summary, club) {
    var out = [];
    if (!club) return out;
    summary.leagues.forEach(function (l) { if (l.champion === club) out.push(l.name); });
    summary.cups.forEach(function (c) { if (c.champion === club) out.push(c.name); });
    summary.conts.forEach(function (c) { if (c.champion === club) out.push(c.name); });
    return out;
  }

  /* El parón de selecciones. Se puede lanzar antes de cerrar la temporada
     desde el botón del club, y se juega una sola vez al año. */
  function jugarSelecciones() {
    if (!global.SelCarrera) return null;
    if (state.selHecha === state.year) return state.seleccionUltimo;
    /* Un apunte de cómo estaba todo antes del parón. El torneo entero vive
       en memoria y no cabe en el archivo de guardado, así que si la partida
       se guarda con el parón a medias, al cargarla se deshace y se vuelve a
       jugar desde el principio en vez de perderse. */
    state.selAntes = {
      ciclo: state.seleccionCiclo || 0,
      hist: (state.seleccionHistorial || []).length,
      temp: (global.Carrera && Carrera.activa())
        ? JSON.parse(JSON.stringify(Carrera.jugador().temp || {})) : null
    };
    state.selCompleta = false;
    var r = SelCarrera.juegaTemporada();
    state.selHecha = state.year;
    return r;
  }
  /* deshace un parón que se quedó a medias: nunca se jugó */
  function deshazSelecciones() {
    var a = state.selAntes;
    if (!a) return false;
    state.seleccionCiclo = a.ciclo;
    if (state.seleccionHistorial && state.seleccionHistorial.length > a.hist) {
      state.seleccionHistorial.length = a.hist;
    }
    if (a.temp && global.Carrera && Carrera.activa()) {
      var j = Carrera.jugador();
      Object.keys(a.temp).forEach(function (k) { j.temp[k] = a.temp[k]; });
    }
    state.seleccionUltimo = null;
    state.selHecha = null;
    state.selAntes = null;
    state.selCompleta = false;
    return true;
  }
  function seleccionesPendientes() {
    return !!(global.SelCarrera && state.selHecha !== state.year);
  }

  function endSeason() {
    var summary = seasonSummary();
    /* parón de selecciones: si no se jugó antes, se juega ahora */
    summary.selecciones = jugarSelecciones();
    /* la temporada del jugador de carrera se cierra antes de envejecer a
       todo el mundo, que a él no le toca la curva general */
    if (global.Carrera && Carrera.activa()) {
      var j = Carrera.jugador();
      summary.carrera = Carrera.cierraTemporada(titulosDe(summary, j.club));
    }
    summary.qualification = computeQualification();
    state.qualification = summary.qualification;
    applyPromotions(summary);
    summary.aging = agePlayers();
    state.history.push(summary);
    state.seasonLog.push(summary);

    /* nueva temporada */
    state.year++;
    state.week = 0;
    state.weekLog = [];
    state.playoffs = {};
    state.plantilla = {};
    state.selHecha = null;          /* el parón del año nuevo está por jugar */
    state.superCopas = null;
    Object.keys(global.LEAGUES).forEach(function (id) {
      if (id === '__nations__') return;
      state.leagues[id] = newLeague(id);
    });
    (global.COUNTRIES || []).forEach(function (c) {
      if (!c.have || !c.have.length) return;
      state.cups[c.id] = newCup(c);
    });
    buildContinentals();

    /* el mercado de pases: se abre entre temporadas, nunca antes de haber
       jugado la primera */
    state.mercado = null;
    if (global.Market) {
      state.presupuesto = Market.presupuesto(state.detailTeam || {});
      state.caja = (state.caja || 0) + state.presupuesto;
      state.mercadoAbierto = true;
      state.fichajes = []; state.ventas = [];
    }
    summary.caja = state.caja;
    return summary;
  }

  /* Cierra el mercado: mueve a todos los clubes de golpe y devuelve el
     resumen para enseñarlo. */
  function cerrarMercado() {
    if (!global.Market) return null;
    var hechos = (state.fichajes || []).filter(function (x) { return !x.fallo; });
    var r = Market.correrMercado({
      protegido: state.detailTeam,
      minimoProtegido: true,
      caja: state.caja,
      faltaFichaje: !hechos.length,
      faltaVenta: !(state.ventas || []).length
    });
    /* lo que decidió el club por su cuenta se suma a lo que hizo el usuario */
    if (r.delClub) {
      r.delClub.entran.forEach(function (x) {
        state.caja -= x.precio;
        state.fichajes.push({ n: x.j[0], ovr: x.j[2], precio: x.precio, de: x.de.n, club: true });
      });
      r.delClub.salen.forEach(function (x) {
        state.caja += x.precio;
        state.ventas.push({ n: x.j[0], ovr: x.j[2], precio: x.precio, a: x.a.n, club: true });
      });
      if (state.detailTeam) state.detailTeam.ovr = Engine.overall(state.detailTeam);
    }
    r.mias = { entran: (state.fichajes || []).slice(), salen: (state.ventas || []).slice() };
    state.mercadoAbierto = false;
    state.mercado = r;
    return r;
  }

  /* =====================================================================
     API
     ===================================================================== */
  function advanceTo(weekTarget) {
    var reports = [];
    while (state.week < Math.min(weekTarget, W.total)) reports.push(advanceWeek());
    return reports;
  }
  function advanceUntilTeam(team) {
    var reports = [];
    while (state.week < W.total) {
      var r = advanceWeek();
      reports.push(r);
      if (teamPlayedIn(r, team)) break;
    }
    return reports;
  }
  function teamPlayedIn(rep, team) {
    if (!team) return false;
    var hit = false;
    rep.leagues.forEach(function (l) {
      l.matches.forEach(function (m) { if (m.h === team || m.a === team) hit = true; });
    });
    rep.cups.forEach(function (c) {
      c.ties.forEach(function (t) { if (t.a === team || t.b === team) hit = true; });
    });
    rep.conts.forEach(function (c) {
      (c.ties || []).forEach(function (t) { if (t.a === team || t.b === team) hit = true; });
      (c.matches || []).forEach(function (m) { if (m.h === team || m.a === team) hit = true; });
    });
    return hit;
  }

  /* =====================================================================
     ZONAS DE LA TABLA (clasificacion continental, ascenso y descenso)
     ===================================================================== */
  function leagueCountry(lid) {
    var list = global.COUNTRIES || [];
    for (var i = 0; i < list.length; i++) {
      if (list[i].have && list[i].have.indexOf(lid) >= 0) return list[i];
    }
    return null;
  }
  var ZONE_LABEL = {
    CONMEBOL: { top: 'Libertadores · grupos', pre: 'Libertadores · fase previa', second: 'Sudamericana' },
    UEFA: {
      top: 'Champions · grupos', po: 'Champions · play-off', pre: 'Champions · previa',
      second: 'Europa League · grupos', secondPo: 'Europa League · play-off'
    },
    CONCACAF: { top: 'Concachampions' }, AFC: { top: 'AFC Champions League' }, CAF: { top: 'CAF Champions League' }
  };
  function zonesFor(lid) {
    var lg = state.leagues[lid];
    if (!lg) return null;
    var c = leagueCountry(lid);
    var out = { map: {}, labels: {}, rel: 0, promo: 0 };
    var rows = Comp.sortTable(lg.table);

    /* Ascensos y descensos. Una categoría puede bajar a varias: la Primera
       Nacional manda dos a la B Metropolitana y dos al Federal A, así que los
       descensos se SUMAN en vez de pisarse. */
    var bajan = 0, refRel = null;
    (global.PROMOTIONS || []).forEach(function (pr) {
      if (pr.tier1 === lid) bajan += pr.n;
      if (pr.tier2 === lid) {
        /* con play-off sólo sube directo lo que no se juega: el resto de
           plazas las pelean los cuatro siguientes */
        out.promo = pr.po ? Math.max(1, pr.n - 1) : pr.n;
        out.promoPo = pr.po ? 4 : 0;
        refRel = lg.ref.rel || 0;
      }
    });
    out.rel = bajan || refRel || 0;

    /* plazas continentales: solo la primera division */
    if (c && global.BERTHS[c.id] && c.have[0] === lid) {
      var b = global.BERTHS[c.id];
      var cup = state.cups[c.id];
      var alloc = allocate(c.id, rows.map(function (r) { return r.t; }), cup && cup.champion);
      if (alloc) {
        var lab = ZONE_LABEL[b.conf] || {};
        PUERTAS.forEach(function (k) {
          (alloc[k] || []).forEach(function (t) { out.map[t.uid || t.n] = k; });
          if ((alloc[k] || []).length) out.labels[k] = lab[k] || k;
        });
        out.cupChampion = cup && cup.champion;
        out.cupZone = b.cup;
        out.cupName = cup && cup.name;
      }
    }
    return out;
  }

  /* ---------- sorteo manual ---------- */
  function drawBall(id) {
    var c = state.conts[id];
    if (!c || !c.drawState || c.drawState.done) return null;
    return c.drawState.kind === 'ko' ? Draw.drawKO(c.drawState) : Draw.drawOne(c.drawState);
  }
  function drawRest(id) {
    var c = state.conts[id], guard = 0;
    if (c && c.drawState && c.drawState.kind === 'ko') { Draw.autoKO(c.drawState); return c.drawState; }
    while (c.drawState && !c.drawState.done && guard++ < 500) Draw.drawOne(c.drawState);
    return c.drawState;
  }
  function commitDraw(id) {
    var c = state.conts[id];
    if (!c || !c.drawState || !c.drawState.done) return false;
    if (c.drawState.kind === 'ko') finishKODraw(c);
    else finishDraw(c);
    state.pendingDraws = state.pendingDraws.filter(function (x) { return x !== id; });
    if (!state.pendingDraws.length) state.paused = false;
    return true;
  }

  global.World = {
    create: create, advanceWeek: advanceWeek, advanceTo: advanceTo,
    advanceUntilTeam: advanceUntilTeam, endSeason: endSeason,
    seasonSummary: seasonSummary, computeQualification: computeQualification,
    cerrarMercado: cerrarMercado,
    teamPlayedIn: teamPlayedIn, weeks: W, zonesFor: zonesFor, leagueCountry: leagueCountry,
    jugarSelecciones: jugarSelecciones, seleccionesPendientes: seleccionesPendientes,
    deshazSelecciones: deshazSelecciones, rehazPlayoffs: rehazPlayoffs,
    /* al cargar una partida cuya liga ya acabó, el play-off que faltaba */
    ponAlDiaPlayoffs: function () { if (state) playoffsDeAscenso(null); },
    drawBall: drawBall, drawRest: drawRest, commitDraw: commitDraw,
    setDetail: function (t, visual) {
      if (!state) return;
      state.detailTeam = t || null;
      state.detailVisual = !!visual;
      /* al empezar, la caja del club es su presupuesto de la temporada */
      if (t && global.Market && state.caja == null) {
        state.presupuesto = Market.presupuesto(t);
        state.caja = state.presupuesto;
      }
    },
    get state() { return state; }
  };
})(window);
