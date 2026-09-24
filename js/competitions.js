/* =========================================================================
   MOTOR DE COMPETICIONES
   Ligas, copas de eliminación directa, fases de grupos con mejores terceros,
   y temporadas completas (liga + copa) vistas desde un equipo concreto.
   Todo devuelve datos; la interfaz sólo los pinta.
   ========================================================================= */
(function (global) {
  'use strict';

  var LETTERS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

  function shuffle(a) {
    a = a.slice();
    for (var i = a.length - 1; i > 0; i--) { var j = Math.floor(Math.random() * (i + 1)); var t = a[i]; a[i] = a[j]; a[j] = t; }
    return a;
  }
  function pow2AtMost(n) { var k = 1; while (k * 2 <= n) k *= 2; return k; }

  /* =====================================================================
     TABLA DE POSICIONES
     ===================================================================== */
  function newTable(teams) {
    var t = {};
    teams.forEach(function (x) { t[x.n] = { t: x, pj: 0, g: 0, e: 0, p: 0, gf: 0, gc: 0, pts: 0, form: [] }; });
    return t;
  }
  function applyResult(table, home, away, score) {
    var h = table[home.n], a = table[away.n];
    if (!h || !a) return;
    h.pj++; a.pj++;
    h.gf += score[0]; h.gc += score[1]; a.gf += score[1]; a.gc += score[0];
    if (score[0] > score[1]) { h.g++; a.p++; h.pts += 3; h.form.push('G'); a.form.push('P'); }
    else if (score[0] < score[1]) { a.g++; h.p++; a.pts += 3; h.form.push('P'); a.form.push('G'); }
    else { h.e++; a.e++; h.pts++; a.pts++; h.form.push('E'); a.form.push('E'); }
  }
  function sortTable(table) {
    return Object.keys(table).map(function (k) { return table[k]; })
      .sort(function (a, b) {
        return b.pts - a.pts || (b.gf - b.gc) - (a.gf - a.gc) || b.gf - a.gf ||
          a.t.n.localeCompare(b.t.n, 'es');
      });
  }

  /* =====================================================================
     CALENDARIO DE LIGA (round robin, método del círculo)
     ===================================================================== */
  function roundRobin(teams, double) {
    var list = shuffle(teams);
    if (list.length % 2) list.push(null);
    var n = list.length, rounds = [];
    for (var r = 0; r < n - 1; r++) {
      var pairs = [];
      for (var i = 0; i < n / 2; i++) {
        var a = list[i], b = list[n - 1 - i];
        if (a && b) pairs.push(r % 2 ? [b, a] : [a, b]);
      }
      rounds.push(pairs);
      list.splice(1, 0, list.pop());
    }
    if (double) rounds = rounds.concat(rounds.map(function (rd) {
      return rd.map(function (p) { return [p[1], p[0]]; });
    }));
    return rounds;
  }

  /* acumular goleadores desde un resultado del motor */
  function collectScorers(store, res) {
    [res.home, res.away].forEach(function (tm) {
      tm.players.forEach(function (p) {
        if (!p.goals && !p.assists) return;
        var k = tm.name + '|' + p.name;
        store[k] = store[k] || { n: p.name, t: tm.name, g: 0, a: 0 };
        store[k].g += p.goals; store[k].a += p.assists;
      });
    });
  }
  /* Los goleadores de UN partido, con su minuto. El motor apunta el gol
     tambien en las simulaciones rapidas, asi que siempre se puede saber. */
  function matchScorers(res) {
    var out = { home: [], away: [] };
    if (!res || !res.events) return out;
    res.events.forEach(function (e) {
      if (e.type !== 'goal' || !e.scorer) return;
      var lado = e.side === 'away' ? out.away : out.home;
      var ya = null;
      lado.forEach(function (x) { if (x.n === e.scorer) ya = x; });
      if (ya) ya.mins.push(e.min);
      else lado.push({ n: e.scorer, mins: [e.min] });
    });
    return out;
  }

  function topScorers(store, limit) {
    return Object.keys(store).map(function (k) { return store[k]; })
      .sort(function (a, b) { return b.g - a.g || b.a - a.a; }).slice(0, limit || 40);
  }

  /* =====================================================================
     LIGA COMPLETA DE UNA VEZ
     ===================================================================== */
  function playLeague(teams, opts) {
    opts = opts || {};
    var rounds = roundRobin(teams, opts.double !== false);
    var table = newTable(teams), scorers = {}, out = [];
    rounds.forEach(function (pairs, ri) {
      var results = [];
      pairs.forEach(function (p) {
        var r = Engine.simulate(p[0], p[1], { quick: true });
        applyResult(table, p[0], p[1], r.score);
        collectScorers(scorers, r);
        results.push({ h: p[0], a: p[1], s: r.score });
      });
      out.push({ n: ri + 1, r: results });
    });
    return { table: sortTable(table), rounds: out, scorers: topScorers(scorers) };
  }

  /* =====================================================================
     ESTRUCTURA INTELIGENTE DE UN TORNEO
     ===================================================================== */
  function structureFor(n, groupSize) {
    if (n < 2) return { ok: false, msg: 'Hacen falta al menos 2 equipos.' };
    if (!groupSize || groupSize < 2) {           // eliminación directa pura
      var k = pow2AtMost(n);
      return { ok: true, mode: 'ko', groups: 0, groupSize: 0, bracket: k, perGroup: 0, extra: 0, byes: n - k };
    }
    if (n % groupSize !== 0) return { ok: false, msg: n + ' equipos no se reparten en grupos de ' + groupSize + '.' };
    var G = n / groupSize;
    if (G < 2) return { ok: false, msg: 'Con un solo grupo usa el modo liga.' };

    var feasible = [];
    for (var k2 = 2; k2 <= n; k2 *= 2) if (k2 <= G * (groupSize - 1) && k2 >= 2) feasible.push(k2);
    if (!feasible.length) return { ok: false, msg: 'No hay un cuadro válido para esa combinación.' };

    var target = G * 2, K = feasible[0];
    feasible.forEach(function (k3) {
      var d = Math.abs(k3 - target), bd = Math.abs(K - target);
      if (d < bd || (d === bd && k3 > K)) K = k3;      // en empate, cuadro más grande
    });
    var per = Math.floor(K / G), extra = K - per * G;
    return { ok: true, mode: 'groups', groups: G, groupSize: groupSize, bracket: K, perGroup: per, extra: extra };
  }

  function describe(st) {
    if (!st.ok) return st.msg;
    if (st.mode === 'ko') {
      return 'Eliminación directa de ' + st.bracket + (st.byes ? ' (' + st.byes + ' con bye en la primera ronda)' : '') + '.';
    }
    var s = st.groups + ' grupos de ' + st.groupSize + '. Pasan ';
    s += st.perGroup === 1 ? 'el primero' : 'los ' + st.perGroup + ' primeros';
    s += ' de cada grupo';
    if (st.extra) {
      var pos = st.perGroup + 1;
      var nombre = pos === 2 ? 'segundos' : pos === 3 ? 'terceros' : pos === 4 ? 'cuartos' : pos + 'º';
      s += ' + los ' + st.extra + ' mejores ' + nombre;
    }
    s += ' → cuadro de ' + st.bracket + '.';
    return s;
  }

  /* bombos: reparte por nivel para que no caigan todos los buenos juntos */
  function makeGroups(teams, nGroups, seeded) {
    var list = teams.slice();
    if (seeded !== false) list.sort(function (a, b) { return (b.ovr || Engine.overall(b)) - (a.ovr || Engine.overall(a)); });
    var perPot = nGroups, pots = [];
    for (var i = 0; i < list.length; i += perPot) pots.push(shuffle(list.slice(i, i + perPot)));
    var groups = [];
    for (var g = 0; g < nGroups; g++) groups.push({ name: 'Grupo ' + LETTERS[g], teams: [] });
    pots.forEach(function (pot, pi) {
      pot.forEach(function (t, idx) {
        // serpiente para que el reparto no sea siempre el mismo orden
        var gi = pi % 2 ? nGroups - 1 - idx : idx;
        groups[gi % nGroups].teams.push(t);
      });
    });
    return groups;
  }

  /* =====================================================================
     FASE DE GRUPOS
     ===================================================================== */
  function playGroups(groups, opts) {
    opts = opts || {};
    var scorers = opts.scorers || {};
    groups.forEach(function (g) {
      g.table = newTable(g.teams);
      g.matches = [];
      var rounds = roundRobin(g.teams, !!opts.double);
      rounds.forEach(function (pairs) {
        pairs.forEach(function (p) {
          var r = Engine.simulate(p[0], p[1], { quick: true, neutral: opts.neutral !== false });
          applyResult(g.table, p[0], p[1], r.score);
          collectScorers(scorers, r);
          g.matches.push({ h: p[0], a: p[1], s: r.score });
        });
      });
      g.standings = sortTable(g.table);
      g.standings.forEach(function (row, i) { row.pos = i + 1; row.group = g.name; });
    });
    return groups;
  }

  /* clasificados: N por grupo + los mejores del puesto siguiente */
  function qualifiers(groups, perGroup, extra) {
    var direct = [], pool = [];
    groups.forEach(function (g) {
      g.standings.forEach(function (row, i) {
        if (i < perGroup) direct.push(row);
        else if (i === perGroup) pool.push(row);
      });
    });
    pool.sort(function (a, b) {
      return b.pts - a.pts || (b.gf - b.gc) - (a.gf - a.gc) || b.gf - a.gf ||
        (b.t.ovr || 0) - (a.t.ovr || 0);
    });
    var best = pool.slice(0, extra);
    best.forEach(function (r) { r.viaBest = true; });
    pool.slice(extra).forEach(function (r) { r.out = true; });
    var all = direct.concat(best);
    all.sort(function (a, b) {
      return a.pos - b.pos || b.pts - a.pts || (b.gf - b.gc) - (a.gf - a.gc) || b.gf - a.gf;
    });
    return { qualified: all, bestThirds: best, pool: pool };
  }

  /* emparejamiento evitando duelos del mismo grupo */
  function seedBracket(rows) {
    var n = rows.length, pairs = [];
    for (var i = 0; i < n / 2; i++) pairs.push([rows[i], rows[n - 1 - i]]);
    for (var a = 0; a < pairs.length; a++) {
      if (pairs[a][0].group && pairs[a][0].group === pairs[a][1].group) {
        for (var b = 0; b < pairs.length; b++) {
          if (a === b) continue;
          if (pairs[b][1].group !== pairs[a][0].group && pairs[a][1].group !== pairs[b][0].group) {
            var tmp = pairs[a][1]; pairs[a][1] = pairs[b][1]; pairs[b][1] = tmp;
            break;
          }
        }
      }
    }
    return pairs;
  }

  var ROUND_NAMES = {
    2: 'Final', 4: 'Semifinales', 8: 'Cuartos de final', 16: 'Octavos de final',
    32: 'Dieciseisavos', 64: 'Treintaidosavos', 128: 'Primera ronda'
  };
  function roundName(n) { return ROUND_NAMES[n] || (n + ' equipos'); }

  /* «2026/2027»: una temporada empieza un año y acaba al siguiente */
  global.Temporada = function (y) { return y + '/' + (y + 1); };

  /* =====================================================================
     ELIMINACIÓN DIRECTA
     ===================================================================== */
  function playKnockout(entrants, opts) {
    opts = opts || {};
    var scorers = opts.scorers || {};
    var cur = entrants.slice(), cols = [];

    // byes si no es potencia de dos: los mejores pasan directamente
    var K = pow2AtMost(cur.length);
    if (cur.length > K) {
      var byN = K * 2 - cur.length;
      var ordered = cur.slice().sort(function (a, b) { return (b.ovr || Engine.overall(b)) - (a.ovr || Engine.overall(a)); });
      var byes = ordered.slice(0, byN);
      var playing = shuffle(ordered.slice(byN));
      var ties = [], next = byes.slice();
      for (var i = 0; i < playing.length; i += 2) {
        var r = tie(playing[i], playing[i + 1], opts, scorers);
        ties.push(r); next.push(r.w);
      }
      cols.push({ name: 'Ronda previa', ties: ties, byes: byes });
      cur = shuffle(next);
    }

    while (cur.length > 1) {
      var ties2 = [], nxt = [], pairs = [];
      for (var j = 0; j < cur.length; j += 2) pairs.push([cur[j], cur[j + 1]]);
      pairs.forEach(function (p) {
        var r = tie(p[0], p[1], opts, scorers);
        ties2.push(r); nxt.push(r.w);
      });
      cols.push({ name: roundName(cur.length), ties: ties2 });
      cur = nxt;
    }
    return { rounds: cols, champion: cur[0], scorers: topScorers(scorers) };
  }

  /* un cruce: partido único o ida y vuelta */
  function tie(A, B, opts, scorers) {
    if (!B) return { a: A, b: null, bye: true, w: A };
    if (opts.legs === 2) {
      var r1 = Engine.simulate(A, B, { quick: true });
      var r2 = Engine.simulate(B, A, { quick: true });
      if (scorers) { collectScorers(scorers, r1); collectScorers(scorers, r2); }
      var agA = r1.score[0] + r2.score[1], agB = r1.score[1] + r2.score[0];
      var pens = null, w;
      if (agA === agB) {
        pens = penaltyShootout(A, B);
        w = pens.a > pens.b ? A : B;
      } else w = agA > agB ? A : B;
      return { a: A, b: B, legs: [r1.score, r2.score], agg: [agA, agB], pens: pens, w: w, two: true };
    }
    var r = Engine.simulate(A, B, { quick: true, knockout: true, neutral: opts.neutral !== false });
    if (scorers) collectScorers(scorers, r);
    return { a: A, b: B, s: r.score, pens: r.pens, aet: r.aet, w: r.winner === 'home' ? A : B };
  }

  /* tanda de penales suelta (para eliminatorias a doble partido) */
  /* Se lanza alternando y se para en cuanto la tanda está decidida: si al
     que va detrás no le alcanzan los penales que le quedan, no se patea más.
     Por eso una tanda nunca puede acabar 5-2. */
  function penaltyShootout(A, B) {
    var oa = Engine.overall(A), ob = Engine.overall(B);
    var pa = 0, pb = 0, ka = 0, kb = 0;
    function mete(local) {
      return Math.random() < 0.75 + ((local ? oa - ob : ob - oa)) * 0.004;
    }
    /* decidida cuando al de atrás no le dan los tiros que le quedan */
    function resuelta() {
      return pa > pb + (5 - kb) || pb > pa + (5 - ka);
    }
    while ((ka < 5 || kb < 5) && !resuelta()) {
      if (ka <= kb && ka < 5) { if (mete(true)) pa++; ka++; }
      else if (kb < 5) { if (mete(false)) pb++; kb++; }
      else break;
    }
    /* muerte súbita: de a un penal cada uno hasta que uno falle */
    var guard = 0;
    while (pa === pb && guard++ < 25) {
      var x = mete(true), y = mete(false);
      if (x) pa++;
      if (y) pb++;
    }
    if (pa === pb) pa++;
    return { a: pa, b: pb };
  }

  /* =====================================================================
     TORNEO COMPLETO (grupos + eliminatorias)
     ===================================================================== */
  function playTournament(teams, cfg) {
    cfg = cfg || {};
    var st = cfg.structure || structureFor(teams.length, cfg.groupSize);
    if (!st.ok) return { error: st.msg };
    var scorers = {};

    if (st.mode === 'ko') {
      var ko0 = playKnockout(shuffle(teams), { legs: cfg.legs, neutral: cfg.neutral, scorers: scorers });
      return { structure: st, groups: null, knockout: ko0.rounds, champion: ko0.champion, scorers: topScorers(scorers) };
    }

    var groups = makeGroups(teams, st.groups, cfg.seeded);
    playGroups(groups, { double: cfg.groupDouble, neutral: cfg.neutral, scorers: scorers });
    var q = qualifiers(groups, st.perGroup, st.extra);
    var pairs = seedBracket(q.qualified);
    var flat = [];
    pairs.forEach(function (p) { flat.push(p[0].t, p[1].t); });
    var ko = playKnockout(flat, { legs: cfg.legs, neutral: cfg.neutral, scorers: scorers, keepOrder: true });
    return {
      structure: st, groups: groups, qualified: q, knockout: ko.rounds,
      champion: ko.champion, scorers: topScorers(scorers)
    };
  }

  /* =====================================================================
     TEMPORADA DE UN EQUIPO (liga + copa nacional)
     ===================================================================== */
  function createSeason(cfg) {
    // cfg: {leagueTeams, teamName, cupName, cupEntrants, leagueName}
    var teams = cfg.leagueTeams;
    var me = teams.filter(function (t) { return t.n === cfg.teamName; })[0];
    var rounds = roundRobin(teams, true);
    var table = newTable(teams);
    var scorers = {};
    var weeks = [];

    // semanas de liga
    rounds.forEach(function (pairs, i) {
      weeks.push({ type: 'liga', label: 'Jornada ' + (i + 1), round: i + 1, pairs: pairs, played: false });
    });

    // rondas de copa repartidas a lo largo del calendario
    var cup = null, cupWeeks = [];
    if (cfg.cupEntrants && cfg.cupEntrants.length >= 4) {
      var entr = shuffle(cfg.cupEntrants);
      var K = pow2AtMost(entr.length);
      if (entr.length > K) {
        entr.sort(function (a, b) { return (b.ovr || 0) - (a.ovr || 0); });
        entr = entr.slice(0, K);      // los K mejores disputan la copa
        entr = shuffle(entr);
      }
      cup = { name: cfg.cupName || 'Copa', alive: entr, rounds: [], out: false, won: false };
      var nRounds = Math.log2(entr.length);
      var gap = Math.max(2, Math.floor(weeks.length / (nRounds + 1)));
      for (var r = 0; r < nRounds; r++) cupWeeks.push(Math.min(weeks.length - 1, gap * (r + 1)));
    }

    var order = [];
    weeks.forEach(function (w, i) {
      order.push(w);
      var n = cupWeeks.filter(function (x) { return x === i; }).length;
      for (var c = 0; c < n; c++) order.push({ type: 'copa', label: null, played: false });
    });

    var idx = 0, history = [];

    function playCupRound() {
      var alive = cup.alive, ties = [], next = [];
      var label = roundName(alive.length);
      for (var i = 0; i < alive.length; i += 2) {
        var t = tie(alive[i], alive[i + 1], { neutral: false, legs: 1 }, scorers);
        ties.push(t); next.push(t.w);
      }
      cup.rounds.push({ name: label, ties: ties });
      var mine = ties.filter(function (t) { return me && (t.a === me || t.b === me); })[0];
      cup.alive = next;
      if (me && next.indexOf(me) < 0 && mine) cup.out = true;
      if (next.length === 1) { cup.champion = next[0]; cup.won = next[0] === me; }
      return { label: label, ties: ties, mine: mine };
    }

    function step() {
      if (idx >= order.length) return null;
      var w = order[idx++];
      var entry;
      if (w.type === 'liga') {
        var results = [];
        w.pairs.forEach(function (p) {
          var r = Engine.simulate(p[0], p[1], { quick: true });
          applyResult(table, p[0], p[1], r.score);
          collectScorers(scorers, r);
          results.push({ h: p[0], a: p[1], s: r.score });
        });
        var mine = results.filter(function (x) { return x.h === me || x.a === me; })[0];
        entry = { type: 'liga', label: w.label, results: results, mine: mine };
      } else {
        if (!cup || cup.alive.length < 2) return step();
        var cr = playCupRound();
        entry = { type: 'copa', label: cup.name + ' · ' + cr.label, ties: cr.ties, mine: cr.mine };
      }
      history.push(entry);
      return entry;
    }

    return {
      me: me, leagueName: cfg.leagueName, cupName: cfg.cupName,
      totalWeeks: order.length,
      get index() { return idx; },
      get finished() { return idx >= order.length; },
      step: step,
      runAll: function () { var out = []; var e; while ((e = step())) out.push(e); return out; },
      table: function () { return sortTable(table); },
      scorers: function (n) { return topScorers(scorers, n); },
      history: history,
      cup: function () { return cup; }
    };
  }

  global.Comp = {
    roundRobin: roundRobin, playLeague: playLeague, structureFor: structureFor, describe: describe,
    makeGroups: makeGroups, playGroups: playGroups, qualifiers: qualifiers, seedBracket: seedBracket,
    playKnockout: playKnockout, playTournament: playTournament, createSeason: createSeason,
    newTable: newTable, applyResult: applyResult, sortTable: sortTable, roundName: roundName,
    collectScorers: collectScorers, matchScorers: matchScorers, topScorers: topScorers, shuffle: shuffle, pow2AtMost: pow2AtMost,
    tie: tie, penaltyShootout: penaltyShootout
  };
})(window);
