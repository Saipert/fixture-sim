/* =========================================================================
   CLASIFICATORIAS AL MUNDIAL — formato actual de 48 selecciones
   ---------------------------------------------------------------------
   Reparto de plazas (46 directas + 2 de la repesca intercontinental):
     UEFA 16 · CAF 9 · AFC 8 · CONMEBOL 6 · CONCACAF 6 · OFC 1
   El país anfitrión se sortea entre las selecciones que han jugado un
   Mundial en este siglo, entra clasificado y ocupa una plaza de su
   confederación.
   El objeto que devuelve create() es compatible con Runner.mount().
   ========================================================================= */
(function (global) {
  'use strict';

  var esc = function (s) {
    return String(s == null ? '' : s).replace(/&/g, '&amp;').replace(/</g, '&lt;')
      .replace(/>/g, '&gt;').replace(/"/g, '&quot;');
  };
  function crest(t, s) {
    return '<span class="cw" style="width:' + s + 'px;height:' + s + 'px">' + Crest.html(t, s) + '</span>';
  }
  function byOvr(a, b) { return (b.ovr || 0) - (a.ovr || 0); }

  /* plazas directas por confederación (el anfitrión consume una de la suya) */
  var SLOTS = { UEFA: 16, CAF: 9, AFC: 8, CONMEBOL: 6, CONCACAF: 6, OFC: 1 };

  /* ---------------------------------------------------------------------
     ARMADO
     --------------------------------------------------------------------- */
  function create(nations, opts) {
    opts = opts || {};
    var all = (nations || []).slice();

    /* --- sorteo del anfitrión --- */
    var wc21 = global.WC21 || [];
    var elegibles = all.filter(function (n) { return n.wc || wc21.indexOf(n.s) >= 0; });
    var host = opts.host || elegibles[Math.floor(Math.random() * elegibles.length)] || all[0];

    var R = {
      kind: 'quali',
      name: 'Clasificatorias al Mundial',
      host: host,
      scorers: {},
      pending: [], idx: 0, log: [], label: '', done: false, champion: null,
      qualified: [host],
      playoffPool: [],          // los que van a la repesca intercontinental
      stages: [],               // lo ya disputado, para pintarlo
      koRounds: null
    };

    /* selecciones por confederación, mejor valoradas primero */
    var byConf = {};
    all.forEach(function (n) {
      if (n === host) return;                 // el anfitrión no juega la fase
      (byConf[n.conf] = byConf[n.conf] || []).push(n);
    });
    Object.keys(byConf).forEach(function (k) { byConf[k].sort(byOvr); });

    /* plazas reales de cada confederación descontando al anfitrión */
    var slots = {};
    Object.keys(SLOTS).forEach(function (k) {
      slots[k] = SLOTS[k] - (host.conf === k ? 1 : 0);
    });

    /* ---- las fases, en el orden en que se juegan ---- */
    R.plan = [
      groupStage('CONMEBOL', byConf.CONMEBOL.slice(0, 10), 1, true, slots.CONMEBOL, 1),
      groupStage('UEFA', byConf.UEFA.slice(0, 48), 12, true, 12, 0, 'uefaPlayoff'),   /* ida y vuelta */
      groupStage('CAF', byConf.CAF.slice(0, 54), 9, false, slots.CAF, 0, 'cafPlayoff'),
      groupStage('AFC', byConf.AFC.slice(0, 18), 3, false, 6, 0, 'afcSecond'),
      groupStage('CONCACAF', byConf.CONCACAF.slice(0, 16), 4, false, 4, 0, 'ccfExtra'),
      groupStage('OFC', byConf.OFC.slice(0, 8), 2, false, 0, 0, 'ofcKO')
    ];
    R.planIdx = -1;
    R.slots = slots;

    /* ---------------------------------------------------------------------
       una fase de grupos: reparte, arma el calendario y guarda cómo se resuelve
       --------------------------------------------------------------------- */
    function groupStage(conf, teams, nGroups, double, direct, toPlayoff, after) {
      var groups = [];
      for (var g = 0; g < nGroups; g++) {
        groups.push({ name: conf + (nGroups > 1 ? ' · Grupo ' + String.fromCharCode(65 + g) : ''), teams: [] });
      }
      /* serpiente por nivel para que no caigan todos los fuertes juntos */
      teams.forEach(function (t, i) {
        var fila = Math.floor(i / nGroups), col = i % nGroups;
        groups[fila % 2 ? nGroups - 1 - col : col].teams.push(t);
      });
      groups.forEach(function (gr) {
        gr.table = Comp.newTable(gr.teams);
        gr.rounds = Comp.roundRobin(gr.teams, double !== false);
        gr.standings = Comp.sortTable(gr.table);
      });
      return {
        conf: conf, groups: groups, direct: direct, toPlayoff: toPlayoff,
        after: after, ri: -1, kind: 'groups'
      };
    }

    /* ---------------------------------------------------------------------
       AVANCE
       --------------------------------------------------------------------- */
    function refresh(st) {
      st.groups.forEach(function (g) {
        g.standings = Comp.sortTable(g.table);
        g.standings.forEach(function (r, i) { r.pos = i + 1; });
      });
    }

    function buildMatchday() {
      var st = R.stage;
      st.ri++;
      var total = st.groups[0].rounds.length;
      if (st.ri >= total) { refresh(st); resolveStage(); return; }
      R.label = st.conf + ' · jornada ' + (st.ri + 1) + ' de ' + total;
      R.log = []; R.idx = 0; R.pending = [];
      st.groups.forEach(function (g) {
        (g.rounds[st.ri] || []).forEach(function (p) {
          R.pending.push({
            h: p[0], a: p[1], note: g.name,
            apply: function (res) {
              Comp.applyResult(g.table, p[0], p[1], res.score);
              refresh(st);
            }
          });
        });
      });
      R.advance = buildMatchday;
      if (!R.pending.length) buildMatchday();
    }

    /* cuando termina una fase de grupos, se reparten las plazas */
function rankRows(rows) {
      return rows.slice().sort(function (a, b) {
        return b.pts - a.pts || (b.gf - b.gc) - (a.gf - a.gc) || b.gf - a.gf;
      });
    }
    function resolveStage() {
      var st = R.stage;
      if (st.mundial) { resolveWorldCup(st, rankRows); return; }
      var firsts = [], seconds = [], thirds = [], fourths = [];
      st.groups.forEach(function (g) {
        if (g.standings[0]) firsts.push(g.standings[0]);
        if (g.standings[1]) seconds.push(g.standings[1]);
        if (g.standings[2]) thirds.push(g.standings[2]);
        if (g.standings[3]) fourths.push(g.standings[3]);
      });
      var rank = rankRows;

      if (st.conf === 'CONMEBOL') {
        /* liga única: los N primeros van al Mundial, el siguiente a la repesca */
        var tabla = st.groups[0].standings;
        for (var i = 0; i < st.direct && tabla[i]; i++) R.qualified.push(tabla[i].t);
        if (tabla[st.direct]) R.playoffPool.push(tabla[st.direct].t);
        st.resumen = tabla.slice(0, st.direct + 1).map(function (r) { return r.t; });
        nextStage();
        return;
      }
      if (st.conf === 'UEFA') {
        firsts.forEach(function (r) { R.qualified.push(r.t); });
        /* 16 en la repesca europea: los 12 segundos + los 4 mejores terceros */
        st.playoffTeams = seconds.map(function (r) { return r.t; })
          .concat(rank(thirds).slice(0, 4).map(function (r) { return r.t; }));
        st.playoffSlots = R.slots.UEFA - firsts.length;   // 4, o 3 si el anfitrión es europeo
        nextStage();
        return;
      }
      if (st.conf === 'CAF') {
        rank(firsts).slice(0, st.direct).forEach(function (r) { R.qualified.push(r.t); });
        st.playoffTeams = rank(seconds).slice(0, 4).map(function (r) { return r.t; });
        nextStage();
        return;
      }
      if (st.conf === 'AFC') {
        if (st.kind === 'groups') {
          firsts.forEach(function (r) { R.qualified.push(r.t); });
          seconds.forEach(function (r) { R.qualified.push(r.t); });
          /* terceros y cuartos juegan una segunda ronda por 2 plazas más */
          st.secondRound = thirds.concat(fourths).map(function (r) { return r.t; });
        }
        nextStage();
        return;
      }
      if (st.conf === 'AFC2') {
        var faltanAFC = R.slots.AFC - 6;                  // 2, o 1 si el anfitrión es asiático
        rank(firsts).slice(0, faltanAFC).forEach(function (r) { R.qualified.push(r.t); });
        if (seconds.length) {
          st.playoffTeams = rank(seconds).slice(0, 2).map(function (r) { return r.t; });
        }
        nextStage();
        return;
      }
      if (st.conf === 'CONCACAF') {
        firsts.slice(0, st.direct).forEach(function (r) { R.qualified.push(r.t); });
        var mejores = rank(seconds);
        var faltan = R.slots.CONCACAF - st.direct;
        mejores.slice(0, faltan).forEach(function (r) { R.qualified.push(r.t); });
        if (mejores[faltan]) R.playoffPool.push(mejores[faltan].t);
        nextStage();
        return;
      }
      if (st.conf === 'OFC') {
        st.koTeams = firsts.concat(seconds).map(function (r) { return r.t; });
        nextStage();
        return;
      }
      nextStage();
    }


    /* ---- repescas: el cuadro entero se dibuja antes de jugar nada ----
       rondas = [{name, n}] con el número de cruces de cada una; sembrar()
       coloca en la ronda siguiente a los ganadores de la anterior. */
    function sembrarNormal(ronda, gan, cuadro) {
      var sig = cuadro[ronda];
      for (var i = 0; i < sig.ties.length; i++) {
        sig.ties[i].a = gan[2 * i] || null;
        sig.ties[i].b = gan[2 * i + 1] || null;
      }
    }

    function koCuadro(titulo, rondas, primeros, sembrar, onFin, preparar) {
      var cuadro = rondas.map(function (r) {
        var ties = [];
        for (var i = 0; i < r.n; i++) ties.push({ a: null, b: null, w: null, two: false });
        return { name: r.name, ties: ties };
      });
      for (var j = 0; j < primeros.length; j += 2) {
        var t = cuadro[0].ties[j / 2];
        if (!t) break;
        t.a = primeros[j] || null;
        t.b = primeros[j + 1] || null;
      }
      R.koCuadro = { titulo: titulo, rondas: cuadro, idx: 0 };
      if (preparar) preparar(cuadro);   /* cabezas de serie ya colocadas */
      jugarRondaKo(sembrar || sembrarNormal, onFin);
    }

    function jugarRondaKo(sembrar, onFin) {
      var q = R.koCuadro, col = q.rondas[q.idx];
      R.label = col.name;
      R.log = []; R.idx = 0; R.pending = [];
      col.ties.forEach(function (t) {
        if (!t.a || !t.b) { t.w = t.a || t.b; t.bye = !!t.w; return; }
        R.pending.push({
          h: t.a, a: t.b, neutral: true, knockout: true, note: col.name,
          apply: function (res) {
            t.s = res.score; t.pens = res.pens; t.aet = res.aet;
            t.w = res.winner === 'home' ? t.a : t.b;
          }
        });
      });
      R.advance = function () {
        var gan = col.ties.map(function (t) { return t.w; });
        if (q.idx >= q.rondas.length - 1) {
          var ult = q.rondas[q.rondas.length - 1];
          R.koCuadro = null;
          onFin(gan, ult);
          return;
        }
        sembrar(q.idx + 1, gan, q.rondas);
        q.idx++;
        jugarRondaKo(sembrar, onFin);
      };
      if (!R.pending.length) R.advance();
    }

    /* dibujo: columnas de izquierda a derecha, son cuadros pequeños */
    function cuadroKoHTML() {
      var q = R.koCuadro;
      if (!q) return '';
      var ronda = nombreRonda(q.rondas[q.idx].name);
      return '<div class="card"><h3>' + esc(q.titulo) +
        (ronda === q.titulo ? '' : ' <small>' + esc(ronda) + '</small>') + '</h3>' +
        '<div class="kobr">' + q.rondas.map(function (c, i) {
          return '<div class="wcbr-col"><h5>' + esc(nombreRonda(c.name)) + '</h5>' +
            c.ties.map(function (t) { return ladoTie(t, i === q.idx); }).join('') + '</div>';
        }).join('') + '</div></div>';
    }
    function nombreRonda(n) {
      var p = String(n).split(' · ');
      return p.length > 1 ? p[p.length - 1] : n;
    }

    function nextStage() {
      var prev = R.stage;

      /* colas que deja cada confederación */
      if (prev && prev.after === 'uefaPlayoff' && prev.playoffTeams) {
        var uefa = Draw.shuffle(prev.playoffTeams);
        koCuadro('Repesca europea', [
          { name: 'Repesca europea · semifinales', n: Math.ceil(uefa.length / 2) },
          { name: 'Repesca europea · finales', n: Math.ceil(uefa.length / 4) }
        ], uefa, null, function (w2) {
          var cupo = prev.playoffSlots != null ? prev.playoffSlots : w2.length;
          w2.filter(Boolean).sort(byOvr).slice(0, cupo)
            .forEach(function (t) { R.qualified.push(t); });
          prev.after = null; nextStage();
        });
        return;
      }
      if (prev && prev.after === 'cafPlayoff' && prev.playoffTeams) {
        var caf = Draw.shuffle(prev.playoffTeams);
        koCuadro('Repesca africana', [
          { name: 'Repesca africana · semifinales', n: Math.ceil(caf.length / 2) },
          { name: 'Repesca africana · final', n: Math.ceil(caf.length / 4) }
        ], caf, null, function (w2) {
          if (w2[0]) R.playoffPool.push(w2[0]);
          prev.after = null; nextStage();
        });
        return;
      }
      if (prev && prev.after === 'afcSecond' && prev.secondRound) {
        var st2 = groupStage('AFC2', prev.secondRound, 2, true, 2, 0, 'afcPlayoff');
        prev.after = null;
        R.stages.push(st2);
        R.stage = st2;
        buildMatchday();
        return;
      }
      if (prev && prev.conf === 'AFC2' && prev.playoffTeams) {
        var afc = prev.playoffTeams;
        koCuadro('Repesca asiática', [
          { name: 'Repesca asiática', n: Math.ceil(afc.length / 2) }
        ], afc, null, function (w) {
          if (w[0]) R.playoffPool.push(w[0]);
          prev.playoffTeams = null; nextStage();
        });
        return;
      }
      if (prev && prev.after === 'ofcKO' && prev.koTeams) {
        var ofc = Draw.shuffle(prev.koTeams);
        koCuadro('Eliminatoria de Oceanía', [
          { name: 'Oceanía · semifinales', n: Math.ceil(ofc.length / 2) },
          { name: 'Oceanía · final', n: Math.ceil(ofc.length / 4) }
        ], ofc, null, function (w2, ultima) {
          if (w2[0]) { if (R.slots.OFC > 0) R.qualified.push(w2[0]); else R.playoffPool.push(w2[0]); }
          /* el perdedor de la final va a la repesca intercontinental */
          var fin = ultima.ties[0];
          if (fin && fin.a && fin.b) R.playoffPool.push(fin.w === fin.a ? fin.b : fin.a);
          prev.after = null; nextStage();
        });
        return;
      }

      /* siguiente confederación */
      R.planIdx++;
      if (R.planIdx < R.plan.length) {
        R.stage = R.plan[R.planIdx];
        R.stages.push(R.stage);
        buildMatchday();
        return;
      }

      /* repesca intercontinental: 6 equipos, 2 plazas */
      if (!R.interDone) {
        R.interDone = true;
        var pool = R.playoffPool.slice().sort(byOvr);
        var cabezas = pool.slice(0, 2), resto = Draw.shuffle(pool.slice(2));
        if (resto.length >= 2) {
          koCuadro('Repesca intercontinental', [
            { name: 'Repesca intercontinental · semifinales', n: Math.ceil(resto.length / 2) },
            { name: 'Repesca intercontinental · finales', n: cabezas.length }
          ], resto,
            function (ronda, gan, cuadro) {      /* los ganadores van contra las cabezas */
              var sig = cuadro[ronda];
              for (var i = 0; i < sig.ties.length; i++) sig.ties[i].b = gan[i] || null;
            },
            function (w2) {
              w2.forEach(function (t) { if (t) R.qualified.push(t); });
              finish();
            },
            function (cuadro) {                  /* las cabezas, visibles desde el principio */
              var fin = cuadro[1];
              for (var i = 0; i < fin.ties.length; i++) fin.ties[i].a = cabezas[i] || null;
            });
        } else {
          cabezas.forEach(function (t) { if (t) R.qualified.push(t); });
          finish();
        }
        return;
      }
      finish();
    }

    function finish() {
      R.clasifDone = true;
      startWcDraw();
      return;
    }
    function finishOld() {
      R.done = true;
      R.label = 'Clasificatorias terminadas';
      R.pending = []; R.idx = 0;
      R.champion = R.host;
    }

    /* =================================================================
       SORTEO DEL MUNDIAL
       12 grupos de 4. Cuatro bombos por nivel y la regla real: como mucho
       una selección por confederación en cada grupo, salvo UEFA que puede
       poner dos (con 16 europeas no hay otra manera).
       ================================================================= */
    var LETRAS = 'ABCDEFGHIJKL';
    function limite(conf) { return conf === 'UEFA' ? 2 : 1; }

    function startWcDraw() {
      R.phase = 'draw';
      R.label = 'Sorteo del Mundial';
      R.pending = []; R.idx = 0; R.log = [];
      R.advance = function () { };
      /* el anfitrión es cabeza de serie fija del grupo A y no entra al bombo */
      var resto = R.qualified.filter(function (t) { return t !== R.host; }).sort(byOvr);
      var bombo1 = [R.host].concat(resto.slice(0, 11));
      var potsAll = [bombo1, resto.slice(11, 23), resto.slice(23, 35), resto.slice(35, 47)];
      var pots = potsAll.map(function (p) { return p.slice(); });
      pots[0] = pots[0].slice(1);                 // el anfitrión ya está colocado
      var groups = [];
      for (var g = 0; g < 12; g++) {
        groups.push({ name: 'Grupo ' + LETRAS[g], teams: [], confs: {} });
      }
      groups[0].teams.push(R.host);
      groups[0].confs[R.host.conf] = 1;
      R.wc = {
        pots: pots, potsAll: potsAll.map(function (p) { return p.slice(); }),
        potIndex: 0, groups: groups, relaxed: false,
        ultima: R.host.n + ' → Grupo A (anfitrión)'
      };
    }
    function wcDrawDone() {
      return R.wc && R.wc.potIndex >= R.wc.pots.length;
    }

    /* ¿se puede colocar lo que queda del bombo en los grupos libres? */
    function cabe(resto, libres, cuentas) {
      if (!resto.length) return true;
      var mejor = -1, opciones = null;
      for (var i = 0; i < resto.length; i++) {
        var ops = [];
        for (var s = 0; s < libres.length; s++) {
          if ((cuentas[s][resto[i].conf] || 0) < limite(resto[i].conf)) ops.push(s);
        }
        if (!ops.length) return false;
        if (opciones === null || ops.length < opciones.length) { mejor = i; opciones = ops; }
      }
      var t = resto[mejor];
      var resto2 = resto.slice(0, mejor).concat(resto.slice(mejor + 1));
      for (var k = 0; k < opciones.length; k++) {
        var s2 = opciones[k];
        var c2 = cuentas.slice(0, s2).concat(cuentas.slice(s2 + 1));
        var l2 = libres.slice(0, s2).concat(libres.slice(s2 + 1));
        if (cabe(resto2, l2, c2)) return true;
      }
      return false;
    }

    function wcBall() {
      var w = R.wc;
      if (wcDrawDone()) return null;
      var pot = w.pots[w.potIndex];
      if (!pot.length) { w.potIndex++; return wcBall(); }

      var t = pot.splice(Math.floor(Math.random() * pot.length), 1)[0];
      var cupo = w.potIndex + 1;
      var libres = [];
      for (var g = 0; g < 12; g++) if (w.groups[g].teams.length < cupo) libres.push(g);

      var elegido = -1, saltados = 0;
      for (var i = 0; i < libres.length; i++) {
        var gi = libres[i];
        if ((w.groups[gi].confs[t.conf] || 0) >= limite(t.conf)) { saltados++; continue; }
        var otros = libres.filter(function (x) { return x !== gi; });
        var cuentas = otros.map(function (x) {
          var c = {}; Object.keys(w.groups[x].confs).forEach(function (k) { c[k] = w.groups[x].confs[k]; });
          return c;
        });
        if (!cabe(pot, otros, cuentas)) { saltados++; continue; }
        elegido = gi; break;
      }
      if (elegido < 0) { elegido = libres[0]; w.relaxed = true; }

      w.groups[elegido].teams.push(t);
      w.groups[elegido].confs[t.conf] = (w.groups[elegido].confs[t.conf] || 0) + 1;
      if (!pot.length) w.potIndex++;
      w.ultima = t.n + ' → ' + w.groups[elegido].name +
        (saltados ? ' (saltó ' + saltados + ' grupo' + (saltados > 1 ? 's' : '') + ')' : '');
      return w.ultima;
    }

    /* =================================================================
       EL MUNDIAL
       ================================================================= */
    function startWorldCup() {
      var st = {
        conf: 'MUNDIAL', groups: R.wc.groups, direct: 2, ri: -1, kind: 'groups', mundial: true
      };
      st.groups.forEach(function (g) {
        g.table = Comp.newTable(g.teams);
        g.rounds = Comp.roundRobin(g.teams, false);
        g.standings = Comp.sortTable(g.table);
      });
      R.phase = 'wc';
      R.stage = st;
      R.stages.unshift(st);
      R.koRounds = null;              // el cuadro del Mundial empieza limpio
      /* Los goles de la clasificatoria no cuentan para el Mundial: se
         guardan aparte y la tabla arranca de cero. */
      R.scorersQuali = R.scorers;
      R.scorers = {};
      buildMatchday();
    }

    /* =================================================================
       CUADRO DEL MUNDIAL
       Al cerrarse la fase de grupos se arma el cuadro entero (5 rondas,
       31 cruces). Las rondas siguientes quedan dibujadas y vacías, y se
       van rellenando con los ganadores.
       ================================================================= */
    var RONDAS_WC = ['Dieciseisavos', 'Octavos', 'Cuartos', 'Semifinales', 'Final'];

    function armarCuadro(pares) {
      var b = [], n = pares.length / 2;
      for (var r = 0; r < RONDAS_WC.length && n >= 1; r++) {
        var ties = [];
        for (var i = 0; i < n; i++) ties.push({ a: null, b: null, w: null, two: false });
        b.push({ name: RONDAS_WC[r], ties: ties });
        n = n / 2;
      }
      for (var j = 0; j < pares.length; j += 2) {
        b[0].ties[j / 2].a = pares[j];
        b[0].ties[j / 2].b = pares[j + 1];
      }
      R.wcBracket = b;
      R.wcRonda = 0;
    }

    function rondaDelCuadro() {
      var col = R.wcBracket[R.wcRonda];
      var esFinal = R.wcRonda >= R.wcBracket.length - 1;
      R.label = 'Mundial · ' + col.name;
      R.log = []; R.idx = 0; R.pending = [];

      /* el partido por el tercer puesto se juega antes de la final */
      if (esFinal && R.wcBronce && !R.wcBronce.w && R.wcBronce.a && R.wcBronce.b) {
        R.pending.push({
          h: R.wcBronce.a, a: R.wcBronce.b, neutral: true, knockout: true, note: 'Tercer puesto',
          apply: function (res) {
            var t = R.wcBronce;
            t.s = res.score; t.pens = res.pens; t.aet = res.aet;
            t.w = res.winner === 'home' ? t.a : t.b;
          }
        });
      }

      col.ties.forEach(function (t) {
        if (!t.a || !t.b) { t.w = t.a || t.b; t.bye = !!t.w; return; }
        R.pending.push({
          h: t.a, a: t.b, neutral: true, knockout: true, note: col.name,
          apply: function (res) {
            t.s = res.score; t.pens = res.pens; t.aet = res.aet;
            t.w = res.winner === 'home' ? t.a : t.b;
          }
        });
      });

      R.advance = function () {
        var gan = col.ties.map(function (t) { return t.w; });
        if (esFinal) {
          R.champion = gan[0];
          R.done = true;
          R.label = '🏆 Campeón del mundo: ' + (gan[0] ? gan[0].n : '—');
          R.pending = []; R.idx = 0;
          return;
        }
        /* tras las semifinales quedan definidos los del tercer puesto */
        if (R.wcRonda === R.wcBracket.length - 2) {
          var perd = col.ties.map(function (t) { return t.w === t.a ? t.b : t.a; });
          R.wcBronce = { a: perd[0] || null, b: perd[1] || null, w: null, two: false };
        }
        var sig = R.wcBracket[R.wcRonda + 1];
        for (var i = 0; i < sig.ties.length; i++) {
          sig.ties[i].a = gan[2 * i] || null;
          sig.ties[i].b = gan[2 * i + 1] || null;
        }
        R.wcRonda++;
        rondaDelCuadro();
      };
      if (!R.pending.length) R.advance();
    }

    /* ---------------------------------------------------------------
       Cruces oficiales del Mundial 2026. Cada llave de dieciseisavos
       tiene un origen fijo, en el orden en que se dibuja el cuadro:
       los ocho primeros son la mitad izquierda y los ocho últimos la
       derecha. T0..T7 son las plazas de los mejores terceros.
       --------------------------------------------------------------- */
    var CRUCES_WC = [
      ['1E', 'T0'], ['1I', 'T1'], ['2A', '2B'], ['1F', '2C'],
      ['2K', '2L'], ['1H', '2J'], ['1D', 'T2'], ['1G', 'T3'],
      ['1C', '2F'], ['2E', '2I'], ['1A', 'T4'], ['1L', 'T5'],
      ['1J', '2H'], ['2D', '2G'], ['1B', 'T6'], ['1K', 'T7']
    ];
    /* grupos admitidos en cada plaza de tercero, en el orden T0..T7 */
    var TERCEROS_WC = ['ABCDF', 'CDFGH', 'BEFIJ', 'AEHIJ', 'CEFHI', 'EHIJK', 'EFGIJ', 'DEIJL'];

    /* reparte los ocho terceros clasificados entre sus plazas posibles */
    function repartirTerceros(letras) {
      var res = new Array(TERCEROS_WC.length).fill(null);
      /* primero las letras que caben en menos plazas */
      var orden = letras.slice().sort(function (x, y) {
        function cabe(L) {
          return TERCEROS_WC.filter(function (s) { return s.indexOf(L) >= 0; }).length;
        }
        return cabe(x) - cabe(y);
      });
      function rec(i) {
        if (i >= orden.length) return true;
        for (var s = 0; s < TERCEROS_WC.length; s++) {
          if (res[s]) continue;
          if (TERCEROS_WC[s].indexOf(orden[i]) < 0) continue;
          res[s] = orden[i];
          if (rec(i + 1)) return true;
          res[s] = null;
        }
        return false;
      }
      if (!rec(0)) {
        /* combinación sin reparto válido: se colocan en orden */
        res = new Array(TERCEROS_WC.length).fill(null);
        orden.forEach(function (L, i) { res[i] = L; });
      }
      return res;
    }

    function resolveWorldCup(st, rank) {
      var porGrupo = {}, terceros = [];
      st.groups.forEach(function (g, i) {
        var L = LETRAS[i];
        g.standings.forEach(function (r) { r.grupo = L; });
        porGrupo[L] = {
          1: g.standings[0] ? g.standings[0].t : null,
          2: g.standings[1] ? g.standings[1].t : null,
          3: g.standings[2] ? g.standings[2].t : null
        };
        if (g.standings[2]) terceros.push(g.standings[2]);
      });

      var mejores = rank(terceros).slice(0, 8);
      mejores.forEach(function (r) { r.viaBest = true; });
      var plazas = repartirTerceros(mejores.map(function (r) { return r.grupo; }));

      function equipoDe(clave) {
        if (clave.charAt(0) === 'T') {
          var L = plazas[+clave.slice(1)];
          return L && porGrupo[L] ? porGrupo[L][3] : null;
        }
        var g = porGrupo[clave.slice(1)];
        return g ? g[+clave.charAt(0)] : null;
      }
      function rotuloDe(clave) {
        if (clave.charAt(0) !== 'T') return clave;
        var i = +clave.slice(1);
        return '3' + TERCEROS_WC[i];
      }

      var pares = [], rotulos = [];
      CRUCES_WC.forEach(function (cr) {
        pares.push(equipoDe(cr[0]), equipoDe(cr[1]));
        rotulos.push(rotuloDe(cr[0]), rotuloDe(cr[1]));
      });
      R.wcQualified = pares.filter(Boolean);
      armarCuadro(pares);
      /* el origen de cada equipo, para verlo al pasar el ratón */
      R.wcBracket[0].ties.forEach(function (t, i) {
        t.ra = rotulos[i * 2]; t.rb = rotulos[i * 2 + 1];
      });
      rondaDelCuadro();
    }

    /* ---- dibujo del cuadro, simétrico y sin scroll ---- */
    function ladoTie(t, activa) {
      function fila(eq, gana, rot) {
        if (!eq) return '<div class="wr vacia"><i>' + esc(rot || '—') + '</i></div>';
        return '<div class="wr' + (gana ? ' win' : '') + '" title="' + esc(eq.n) +
          (rot ? ' (' + esc(rot) + ')' : '') + '">' +
          crest(eq, 18) + '<em>' + cod(eq) + '</em></div>';
      }
      function marc(v) { return '<b>' + (v === undefined || v === null ? '' : v) + '</b>'; }
      var sa = t.s ? t.s[0] : null, sb = t.s ? t.s[1] : null;
      var pen = t.pens ? '<u>p ' + t.pens.a + '-' + t.pens.b + '</u>' : '';
      return '<div class="wt' + (activa ? ' ahora' : '') + (t.w ? ' lista' : '') + '">' +
        '<div class="wtrow">' + fila(t.a, t.w === t.a && t.a, t.ra) + marc(sa) + '</div>' +
        '<div class="wtrow">' + fila(t.b, t.w === t.b && t.b, t.rb) + marc(sb) + '</div>' +
        pen + '</div>';
    }

    function columnaHTML(col, desde, hasta, activa) {
      return '<div class="wcbr-col"><h5>' + esc(col.name) + '</h5>' +
        col.ties.slice(desde, hasta).map(function (t) {
          return ladoTie(t, activa);
        }).join('') + '</div>';
    }

    function cuadroWcHTML() {
      var b = R.wcBracket;
      if (!b || !b.length) return '';
      var cuerpo = b.slice(0, b.length - 1);          /* todas menos la final */
      var fin = b[b.length - 1];
      var izq = cuerpo.map(function (c, i) {
        return columnaHTML(c, 0, Math.ceil(c.ties.length / 2), i === R.wcRonda);
      }).join('');
      var der = cuerpo.slice().reverse().map(function (c) {
        var i = b.indexOf(c);
        return columnaHTML(c, Math.ceil(c.ties.length / 2), c.ties.length, i === R.wcRonda);
      }).join('');
      var centro = '<div class="wcbr-col centro"><h5>' + esc(fin.name) + '</h5>' +
        ladoTie(fin.ties[0], R.wcRonda === b.length - 1);
      if (R.wcBronce) {
        centro += '<div class="wcbr-bronce"><h5>Tercer puesto</h5>' +
          ladoTie(R.wcBronce, !R.wcBronce.w) + '</div>';
      }
      if (R.champion) {
        centro += '<div class="wcbr-champ">🏆' + crest(R.champion, 34) +
          '<b>' + esc(R.champion.n) + '</b></div>';
      }
      centro += '</div>';
      return '<div class="card"><h3>Cuadro del Mundial ' +
        '<small>' + (R.champion ? 'terminado' : b[R.wcRonda].name) + '</small></h3>' +
        '<div class="wcbr">' + izq + centro + der + '</div></div>';
    }


    /* ---------------------------------------------------------------------
       PINTADO (lo usa Runner.mount)
       --------------------------------------------------------------------- */
    /* botones del sorteo (los atiende Runner.mount por el gancho data-q) */
    R.onStateClick = function (accion) {
      if (accion.indexOf('fase:') === 0) {
        var f = +accion.slice(5);
        R.faseAbierta = (R.faseAbierta === f) ? null : f;
        return;
      }
      if (accion.indexOf('grupo:') === 0) {
        var v = accion.slice(6);
        R.grupoVista = (v === 'auto') ? null : +v;
        return;
      }
      if (R.phase !== 'draw') return;
      if (accion === 'ball') { wcBall(); return; }
      if (accion === 'rest') {
        var guard = 0;
        while (!wcDrawDone() && guard++ < 200) wcBall();
        return;
      }
      if (accion === 'ok' && wcDrawDone()) startWorldCup();
    };

    function drawPanelHTML() {
      var w = R.wc;
      var hecho = wcDrawDone();
      var quedan = w.pots.reduce(function (s, p) { return s + p.length; }, 0);
      var h = '<div class="card wcdraw"><h3>Sorteo del Mundial ' +
        '<small>12 grupos de 4 · máximo una por confederación, dos si son europeas</small></h3>' +
        '<div class="toolbar" style="margin-bottom:12px">' +
        '<button class="primary" data-q="ball"' + (hecho ? ' disabled' : '') + '>Sacar bola</button>' +
        '<button class="mini" data-q="rest"' + (hecho ? ' disabled' : '') + '>Completar sorteo</button>' +
        '<button class="mini" data-q="ok"' + (hecho ? '' : ' disabled') + '>Confirmar y jugar el Mundial</button>' +
        '<span class="hint">' + (hecho ? 'Sorteo completo. Ya se puede jugar.' :
          'Quedan ' + quedan + ' bolas.') + (w.ultima ? ' · 🎱 ' + esc(w.ultima) : '') + '</span>' +
        '</div>';

      h += '<div class="drawsplit"><div class="drawcol pots-col"><h4 class="drawhd">Bombos</h4><div class="pots">' +
        w.potsAll.map(function (p, i) {
          var pend = w.pots[i] || [];
          return '<div class="potbox' + (i === w.potIndex && !hecho ? ' now' : '') + '">' +
            '<h4>Bombo ' + (i + 1) + '<small>' + pend.length + ' por salir</small></h4>' +
            '<div class="potflags">' + p.map(function (t) {
              var g = null;
              w.groups.forEach(function (gr) { if (gr.teams.indexOf(t) >= 0) g = gr.name; });
              return '<span class="potflag' + (g ? ' done' : '') + '" title="' + esc(t.n) +
                (g ? ' · ' + esc(g) : ' · ' + esc(t.conf)) + '">' + crest(t, 26) +
                (g ? '<i>' + esc(g.replace('Grupo ', '')) + '</i>' : '') + '</span>';
            }).join('') + '</div></div>';
        }).join('') + '</div></div>';

      h += '<div class="drawcol groups-col"><h4 class="drawhd">Grupos</h4><div class="groups" id="wcGroups">' +
        w.groups.map(function (g) {
          return '<div class="gbox"><h4>' + esc(g.name) + '</h4>' +
            (g.teams.length ? g.teams.map(function (t) {
              return '<div class="drawline">' + crest(t, 18) + '<span>' + esc(t.n) + '</span>' +
                '<small>' + esc(t.conf) + '</small></div>';
            }).join('') : '<p class="hint">vacío</p>') + '</div>';
        }).join('') + '</div></div></div></div>';
      return h;
    }


    /* El anfitrión se muestra al sortearse y desaparece en cuanto arranca la
       simulación: a partir de ahí se le ve en el bloque de clasificados. */
    function hostHTML() {
      var jugado = (R.log && R.log.length) || (R.prevLog && R.prevLog.length) ||
        R.phase === 'draw' || R.phase === 'wc';
      if (jugado) return '';
      return '<div class="card qhostcard"><h3>Sorteo del anfitrión</h3>' +
        '<div class="qhost">' + crest(R.host, 44) +
        '<div><b>' + esc(R.host.n) + '</b>' +
        '<small>anfitrión · clasificado de oficio · cabeza de serie del grupo A</small></div>' +
        '</div></div>';
    }

    /* Clasificados agrupados por confederación, al final de la página. */
    var ORDEN_CONF = ['UEFA', 'CONMEBOL', 'CONCACAF', 'CAF', 'AFC', 'OFC'];
    function clasificadosHTML() {
      var por = {};
      R.qualified.forEach(function (t) { (por[t.conf] = por[t.conf] || []).push(t); });
      var confs = ORDEN_CONF.filter(function (c) { return por[c] && por[c].length; })
        .concat(Object.keys(por).filter(function (c) { return ORDEN_CONF.indexOf(c) < 0; }));
      var h = '<div class="card"><h3>Clasificados al Mundial ' +
        '<small>' + R.qualified.length + ' de 48</small></h3><div class="qconfs">';
      confs.forEach(function (c) {
        var tope = (R.slots && R.slots[c] ? R.slots[c] : 0) + (R.host.conf === c ? 1 : 0);
        var extra = tope ? Math.max(0, por[c].length - tope) : 0;
        var pie = !tope ? String(por[c].length)
          : extra ? por[c].length + ' · ' + tope + ' + ' + extra + ' de repesca'
            : por[c].length + ' de ' + tope;
        h += '<div class="qconf"><h4>' + esc(c) + '<small>' + pie + '</small></h4><div class="qgrid">' +
          por[c].slice().sort(byOvr).map(function (t) {
            return '<span class="qteam' + (t === R.host ? ' host' : '') + '">' +
              crest(t, 20) + esc(t.n) + (t === R.host ? ' <em>anf.</em>' : '') + '</span>';
          }).join('') + '</div></div>';
      });
      h += '</div>';
      if (R.playoffPool.length && !R.interDone) {
        h += '<h4 class="subh">A la repesca intercontinental</h4><div class="qgrid">' +
          R.playoffPool.map(function (t) {
            return '<span class="qteam pool">' + crest(t, 20) + esc(t.n) + '</span>';
          }).join('') + '</div>';
      }
      return h + '</div>';
    }

    /* ---------------------------------------------------------------
       Vista compacta de la fase en curso: a la izquierda la tabla del
       grupo que se está jugando, al lado los partidos de la jornada.
       --------------------------------------------------------------- */
    function cod(t) { return esc(t.s || t.n.slice(0, 3)).toUpperCase(); }

    function grupoEnJuego(st) {
      var nx = R.pending && R.pending[R.idx];
      if (nx && nx.note) return nx.note;
      var lg = R.log.length ? R.log : (R.prevLog || []);
      for (var i = lg.length - 1; i >= 0; i--) if (lg[i].note) return lg[i].note;
      return st.groups[0] ? st.groups[0].name : '';
    }

    function corteDe(st) {
      return st.conf === 'CONMEBOL' ? st.direct : st.conf === 'AFC' ? 2 : 1;
    }

    function tablaGrupoHTML(st, g) {
      var corte = corteDe(st);
      return '<table><thead><tr><th class="num">#</th><th>Selección</th>' +
        '<th class="num">PJ</th><th class="num">Pts</th><th class="num">DG</th></tr></thead><tbody>' +
        g.standings.map(function (r, i) {
          return '<tr class="' + (i < corte ? 'q-yes' : 'q-no') + '">' +
            '<td class="num">' + (i + 1) + '</td>' +
            '<td><div class="tname">' + crest(r.t, 18) + '<span>' + esc(r.t.n) + '</span></div></td>' +
            '<td class="num">' + r.pj + '</td><td class="num"><b>' + r.pts + '</b></td>' +
            '<td class="num">' + (r.gf - r.gc > 0 ? '+' : '') + (r.gf - r.gc) + '</td></tr>';
        }).join('') + '</tbody></table>';
    }

    function etiqueta(nota, varios) {
      if (!varios) return '';
      var corto = String(nota || '').split('Grupo ').pop();
      return nota ? '<i>' + esc(corto) + '</i>' : '';
    }

    /* Bloque grande de la columna del medio: enseña el resultado del partido
       recién jugado (no se va directo a «jugados») y, debajo, cuál sigue. */
    function ultimoResultado() {
      var lg = R.log.length ? R.log : (R.prevLog || []);
      return lg.length ? lg[lg.length - 1] : null;
    }

    function siguienteLinea() {
      var ps = (R.pending || []).slice(R.idx);
      if (!ps.length) return '<div class="qsig vacia">Jornada completa</div>';
      var m = ps[0];
      return '<div class="qsig" title="' + esc(m.h.n) + ' — ' + esc(m.a.n) + '">' +
        '<span class="qsig-tag">A continuación</span>' +
        crest(m.h, 20) + '<b>' + esc(cod(m.h)) + '</b><em>v</em>' +
        '<b>' + esc(cod(m.a)) + '</b>' + crest(m.a, 20) + '</div>';
    }

    /* el runner avisa qué partido está rodando, para enseñarlo antes del resultado */
    R.enJuego = function (m) { R.rodando = m || null; };

    function apellido(n) {
      var p = String(n || '').trim().split(' ');
      return p.length > 1 ? p[p.length - 1] : p[0];
    }
    /* los goles de un lado: nombre y minutos */
    function listaGoles(l, largo) {
      if (!l || !l.length) return '';
      return l.map(function (g) {
        return '<i>' + esc(largo ? g.n : apellido(g.n)) + ' <u>' +
          g.mins.map(function (m) { return m + "'"; }).join(', ') + '</u></i>';
      }).join('');
    }
    /* «Messi 12' · Lautaro 45'», para la lista compacta */
    function resumenGoles(r) {
      var todos = (r.gh || []).concat(r.ga || []);
      if (!todos.length) return '';
      return todos.map(function (g) {
        return apellido(g.n) + ' ' + g.mins.map(function (m) { return m + "'"; }).join(', ');
      }).join(' · ');
    }

    function destacadoHTML() {
      if (R.rodando) {
        var j = R.rodando;
        return '<div class="qnext jugando"><span class="qnext-tag">En juego</span>' +
          '<div class="qnext-duelo">' +
          '<div class="qnext-eq">' + crest(j.h, 38) + '<b>' + esc(j.h.n) + '</b></div>' +
          '<span class="qnext-puntos"><i></i><i></i><i></i></span>' +
          '<div class="qnext-eq">' + crest(j.a, 38) + '<b>' + esc(j.a.n) + '</b></div>' +
          '</div>' + (j.note ? '<small>' + esc(j.note) + '</small>' : '') + '</div>';
      }
      var r = ultimoResultado();
      if (!r) {
        var ps = (R.pending || []).slice(R.idx);
        if (!ps.length) return '<p class="hint">Jornada completa.</p>';
        var m = ps[0];
        return '<div class="qnext"><span class="qnext-tag">Próximo partido</span>' +
          '<div class="qnext-duelo">' +
          '<div class="qnext-eq">' + crest(m.h, 38) + '<b>' + esc(m.h.n) + '</b></div>' +
          '<span class="qnext-vs">vs</span>' +
          '<div class="qnext-eq">' + crest(m.a, 38) + '<b>' + esc(m.a.n) + '</b></div>' +
          '</div>' + (m.note ? '<small>' + esc(m.note) + '</small>' : '') + '</div>';
      }
      var gh = r.s[0] > r.s[1] || (r.pens && r.pens.a > r.pens.b);
      var ga = r.s[1] > r.s[0] || (r.pens && r.pens.b > r.pens.a);
      var extra = r.pens ? '<small>penales ' + r.pens.a + '-' + r.pens.b + '</small>' : '';
      return '<div class="qnext hecho"><span class="qnext-tag">Resultado</span>' +
        '<div class="qnext-duelo">' +
        '<div class="qnext-eq' + (gh ? ' gana' : '') + '">' + crest(r.h, 38) +
        '<b>' + esc(r.h.n) + '</b></div>' +
        '<span class="qnext-marc">' + r.s[0] + '<i>-</i>' + r.s[1] + '</span>' +
        '<div class="qnext-eq' + (ga ? ' gana' : '') + '">' + crest(r.a, 38) +
        '<b>' + esc(r.a.n) + '</b></div>' +
        '</div>' + extra +
        ((r.gh && r.gh.length) || (r.ga && r.ga.length)
          ? '<div class="qgoles"><span class="qg izq">' + listaGoles(r.gh, true) + '</span>' +
            '<span class="qg-bola">⚽</span>' +
            '<span class="qg der">' + listaGoles(r.ga, true) + '</span></div>' : '') +
        (r.note ? '<small>' + esc(r.note) + '</small>' : '') +
        siguienteLinea() + '</div>';
    }

    /* los partidos que quedan por jugar en la jornada */
    function porJugarHTML(varios) {
      var ps = (R.pending || []).slice(R.idx);
      if (!ps.length) return '<p class="hint">Jornada completa.</p>';
      return '<div class="qres">' + ps.map(function (x, i) {
        return '<div class="qrline' + (i ? '' : ' next') + '" title="' +
          esc(x.h.n) + ' — ' + esc(x.a.n) + '">' +
          crest(x.h, 20) + '<span>' + cod(x.h) + '</span><em>v</em>' +
          '<span>' + cod(x.a) + '</span>' + crest(x.a, 20) + etiqueta(x.note, varios) + '</div>';
      }).join('') + '</div>';
    }

    /* resultados ya jugados de la jornada */
    function jugadosHTML(varios) {
      var todos = R.log.length ? R.log : (R.prevLog || []);
      var lg = todos.slice(0, -1);      /* el último se muestra en grande */
      if (!lg.length) return '<p class="hint">Nada más por ahora.</p>';
      return '<div class="qres">' + lg.map(function (r) {
        var pen = r.pens ? '<u>p ' + r.pens.a + '-' + r.pens.b + '</u>' : '';
        var res = resumenGoles(r);
        return '<div class="qrbloque"><div class="qrline done" title="' +
          esc(r.h.n) + ' — ' + esc(r.a.n) + '">' +
          crest(r.h, 20) + '<span>' + cod(r.h) + '</span>' +
          '<b>' + r.s[0] + '-' + r.s[1] + '</b>' + pen +
          '<span>' + cod(r.a) + '</span>' + crest(r.a, 20) + etiqueta(r.note, varios) + '</div>' +
          (res ? '<div class="qrgol">' + esc(res) + '</div>' : '') + '</div>';
      }).join('') + '</div>';
    }

    function faseActiva(st) {
      var nx = R.pending && R.pending[R.idx];
      if (!nx || !nx.note) return false;
      var hay = false;
      st.groups.forEach(function (g) { if (g.name === nx.note) hay = true; });
      return hay;
    }

    /* índice del grupo que se muestra: el elegido a mano, o el que se juega */
    function grupoMostrado(st) {
      /* al cambiar de confederación se suelta el grupo fijado a mano */
      if (R.grupoVistaSt !== st) { R.grupoVista = null; R.grupoVistaSt = st; }
      if (R.grupoVista != null && st.groups[R.grupoVista]) return R.grupoVista;
      return grupoVivo(st);
    }
    function grupoVivo(st) {
      var gname = grupoEnJuego(st);
      for (var i = 0; i < st.groups.length; i++) if (st.groups[i].name === gname) return i;
      return 0;
    }
    /* botones para mirar los grupos que no se están jugando */
    function chipsGrupos(st, activo, vivo) {
      if (st.groups.length < 2) return '';
      var h = '<div class="gchips">';
      if (R.grupoVista != null) {
        h += '<button type="button" class="gchip auto" data-q="grupo:auto">seguir el partido</button>';
      }
      st.groups.forEach(function (g, i) {
        var et = String(g.name).split(' ').pop();
        h += '<button type="button" class="gchip' + (i === activo ? ' on' : '') +
          (i === vivo ? ' vivo' : '') + '" data-q="grupo:' + i + '">' + esc(et) + '</button>';
      });
      return h + '</div>';
    }

    /* el último grupo que se jugó antes del que está en juego: se deja
       abajo para poder mirarlo, porque si no pasa demasiado rápido */
    function grupoAnterior(st) {
      if (st.groups.length < 2) return -1;
      var vivo = st.groups[grupoVivo(st)];
      var lg = (R.log && R.log.length) ? R.log : (R.prevLog || []);
      for (var i = lg.length - 1; i >= 0; i--) {
        var nota = lg[i].note;
        if (!nota || (vivo && nota === vivo.name)) continue;
        for (var j = 0; j < st.groups.length; j++) if (st.groups[j].name === nota) return j;
      }
      return -1;
    }

    function faseEnCursoHTML(st) {
      var iv = grupoVivo(st), im = grupoMostrado(st), ia = grupoAnterior(st);
      var g = st.groups[im] || st.groups[0];
      var lg = R.log.length ? R.log : (R.prevLog || []);
      var ps = (R.pending || []).slice(R.idx);
      var corto = String(g.name).split(' · ').pop();

      var izq = '<div class="qcol">' + chipsGrupos(st, im, iv) + tablaGrupoHTML(st, g);
      if (ia >= 0 && ia !== im) {
        var ga = st.groups[ia];
        izq += '<div class="qprev"><h4 class="subh">' +
          esc(String(ga.name).split(' · ').pop()) + ' <small>anterior</small></h4>' +
          tablaGrupoHTML(st, ga) + '</div>';
      }
      izq += '</div>';

      return '<div class="card"><h3>' + esc(st.conf === 'AFC2' ? 'AFC · segunda ronda' : st.conf) +
        (st.groups.length > 1 ? ' <small>' + esc(corto) + ' de ' + st.groups.length + '</small>' : '') +
        '</h3><div class="qsplit">' + izq +
        '<div class="qcol">' + destacadoHTML() +
        '<h4 class="subh">Por jugar <small>' + ps.length + '</small></h4>' +
        porJugarHTML(st.groups.length > 1) + '</div>' +
        '<div class="qcol"><h4 class="subh">Jugados <small>' + Math.max(0, lg.length - 1) + '</small></h4>' +
        jugadosHTML(st.groups.length > 1) + '</div>' +
        '</div></div>';
    }

    /* las tablas de una fase, sin tarjeta propia */
    function tablasFaseHTML(st) {
      return '<div class="groups">' + st.groups.map(function (g) {
        return '<div class="gbox"><h4>' + esc(g.name) + '</h4>' + tablaGrupoHTML(st, g) + '</div>';
      }).join('') + '</div>';
    }

    function nombreFase(st) {
      return st.conf === 'AFC2' ? 'AFC · segunda ronda' : st.conf;
    }

    /* Las fases ya jugadas no ocupan sitio: una fila de pestañas y, si se
       pulsa una, se despliegan sus posiciones. */
    function fasesTerminadasHTML(lista) {
      if (!lista.length) return '';
      var h = '<div class="card"><h3>Fases terminadas ' +
        '<small>' + lista.length + '</small></h3><div class="fases-hechas">' +
        lista.map(function (st, i) {
          return '<button type="button" class="gchip' + (R.faseAbierta === i ? ' on' : '') +
            '" data-q="fase:' + i + '">' + esc(nombreFase(st)) + '</button>';
        }).join('') + '</div>';
      var ab = lista[R.faseAbierta];
      if (ab) h += '<h4 class="subh">' + esc(nombreFase(ab)) + '</h4>' + tablasFaseHTML(ab);
      return h + '</div>';
    }

    R.hideLog = true;          /* los resultados ya se pintan aquí al lado */

    R.extraHTML = function () {
      var h = '';
      if (R.phase === 'draw') h += drawPanelHTML();
      h += hostHTML();
      h += cuadroWcHTML();
      h += cuadroKoHTML();
      /* la fase que se está jugando, con su grupo en curso */
      var enCurso = R.stage && R.stage.groups && faseActiva(R.stage) ? R.stage : null;
      if (enCurso) h += faseEnCursoHTML(enCurso);
      /* el resto, plegadas */
      var hechas = R.stages.slice().reverse().filter(function (st) {
        return st.groups && st !== enCurso;
      });
      h += fasesTerminadasHTML(hechas);
      return h;
    };

    R.tailHTML = clasificadosHTML;

    /* arranque */
    nextStage();
    return R;
  }

  global.Qualifiers = { create: create, SLOTS: SLOTS };
})(window);
