/* =========================================================================
   SORTEOS
   Bombos por nivel y reparto en grupos evitando que coincidan equipos del
   mismo país. Si la bola que sale no cabe en el grupo que toca, pasa al
   siguiente grupo válido; antes de confirmar se comprueba que el resto del
   bombo todavía se pueda repartir (si no, se prueba otro grupo).
   ========================================================================= */
(function (global) {
  'use strict';

  var LETTERS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

  function shuffle(a) {
    a = a.slice();
    for (var i = a.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1)), t = a[i]; a[i] = a[j]; a[j] = t;
    }
    return a;
  }

  /* país de un equipo, para la restricción del sorteo */
  function countryOf(t) {
    if (!t) return '';
    if (t.co) return t.co;
    if (global.CLUB_COUNTRY && global.CLUB_COUNTRY[t.n]) return global.CLUB_COUNTRY[t.n];
    return t.countryId || t.leagueId || t.n;
  }

  /* bombos: mejor valorados en el bombo 1, y así sucesivamente */
  function makePots(teams, nGroups) {
    var sorted = teams.slice().sort(function (a, b) { return (b.ovr || 0) - (a.ovr || 0); });
    var pots = [];
    for (var i = 0; i < sorted.length; i += nGroups) pots.push(sorted.slice(i, i + nGroups));
    return pots;
  }

  /* ¿se puede repartir la lista restante en los grupos libres sin repetir país? */
  function feasible(remaining, slots) {
    // slots: [{gi, countries:Set}]  — emparejamiento por backtracking
    if (!remaining.length) return true;
    // ordena por el que menos opciones tiene (heurística MRV)
    var best = -1, bestOpts = null;
    for (var i = 0; i < remaining.length; i++) {
      var opts = [];
      for (var s = 0; s < slots.length; s++) {
        if (!slots[s].countries[countryOf(remaining[i])]) opts.push(s);
      }
      if (!opts.length) return false;
      if (bestOpts === null || opts.length < bestOpts.length) { best = i; bestOpts = opts; }
    }
    var team = remaining[best];
    var rest = remaining.slice(0, best).concat(remaining.slice(best + 1));
    for (var k = 0; k < bestOpts.length; k++) {
      var s2 = bestOpts[k], c = countryOf(team);
      var taken = slots.slice(0, s2).concat(slots.slice(s2 + 1));
      if (feasible(rest, taken)) return true;
    }
    return false;
  }

  /* crea el estado de un sorteo (sirve para automático y manual) */
  function create(teams, nGroups, opts) {
    opts = opts || {};
    var pots = makePots(teams, nGroups);
    var groups = [];
    for (var g = 0; g < nGroups; g++) {
      groups.push({ name: 'Grupo ' + LETTERS[g], teams: [], countries: {} });
    }
    return {
      nGroups: nGroups,
      pots: pots.map(function (p) { return p.slice(); }),
      potsAll: pots.map(function (p) { return p.slice(); }),   // copia fija para la vista previa
      potIndex: 0,
      groups: groups,
      log: [],
      relaxed: false,
      get done() { return this.potIndex >= this.pots.length; },
      get currentPot() { return this.pots[this.potIndex] || []; }
    };
  }

  /* saca una bola y la coloca; devuelve {team, group, skipped} */
  function drawOne(st) {
    if (st.done) return null;
    var pot = st.pots[st.potIndex];
    if (!pot.length) { st.potIndex++; return drawOne(st); }

    /* la bola sale al azar del bombo, no por orden de lista */
    var team = pot.splice(Math.floor(Math.random() * pot.length), 1)[0];
    var country = countryOf(team);
    var potSize = st.potIndex + 1;              // cada grupo lleva 1 equipo por bombo

    // grupos que aún no tienen equipo de este bombo
    var free = [];
    for (var g = 0; g < st.nGroups; g++) if (st.groups[g].teams.length < potSize) free.push(g);

    var skipped = [];
    var chosen = -1;
    for (var i = 0; i < free.length; i++) {
      var gi = free[i];
      if (st.groups[gi].countries[country]) { skipped.push(gi); continue; }
      // ¿queda repartible el resto del bombo?
      var slots = [];
      for (var j = 0; j < free.length; j++) {
        if (free[j] === gi) continue;
        slots.push({ gi: free[j], countries: st.groups[free[j]].countries });
      }
      if (feasible(pot, slots)) { chosen = gi; break; }
      skipped.push(gi);
    }
    if (chosen < 0) {                            // imposible respetar la regla
      chosen = free[0];
      st.relaxed = true;
    }

    st.groups[chosen].teams.push(team);
    st.groups[chosen].countries[country] = true;
    var entry = { team: team, group: chosen, groupName: st.groups[chosen].name, skipped: skipped, pot: st.potIndex + 1 };
    st.log.push(entry);
    if (!pot.length) st.potIndex++;
    return entry;
  }

  /* sorteo entero de golpe */
  function auto(teams, nGroups) {
    var st = create(teams, nGroups);
    var guard = 0;
    while (!st.done && guard++ < 500) drawOne(st);
    return st;
  }

  /* comprobación: ningún grupo con dos equipos del mismo país */
  function check(st) {
    var bad = [];
    st.groups.forEach(function (g) {
      var seen = {};
      g.teams.forEach(function (t) {
        var c = countryOf(t);
        if (seen[c]) bad.push(g.name + ': dos de ' + c);
        seen[c] = 1;
      });
    });
    return bad;
  }

  /* =====================================================================
     SORTEO DE ELIMINATORIAS
     Dos bombos: el 1 son los primeros de grupo y el 2 los segundos.
     Sale una bola del bombo 2 (ese equipo abre la serie como local) y
     después su rival del bombo 1, que jugará la vuelta en casa.
     No se pueden cruzar equipos que compartieron grupo; del mismo país sí.
     ===================================================================== */
  var byOvr = function (a, b) { return (b.ovr || 0) - (a.ovr || 0); };

  /* ¿se pueden emparejar todos los que quedan sin repetir grupo? */
  function canMatch(rest, pool) {
    if (!rest.length) return true;
    // el que menos rivales válidos tenga, primero
    var best = -1, bestOpts = null;
    for (var i = 0; i < rest.length; i++) {
      var opts = [];
      for (var j = 0; j < pool.length; j++) if (!sameGroup(rest[i], pool[j])) opts.push(j);
      if (!opts.length) return false;
      if (bestOpts === null || opts.length < bestOpts.length) { best = i; bestOpts = opts; }
    }
    var r2 = rest.slice(0, best).concat(rest.slice(best + 1));
    for (var k = 0; k < bestOpts.length; k++) {
      var p2 = pool.slice(0, bestOpts[k]).concat(pool.slice(bestOpts[k] + 1));
      if (canMatch(r2, p2)) return true;
    }
    return false;
  }
  function sameGroup(a, b) { return !!(a.__grp && a.__grp === b.__grp); }
  function takeRandom(arr) { return arr.splice(Math.floor(Math.random() * arr.length), 1)[0]; }

  /* createKO(list, {seeded, unseeded, name})
       con seeded/unseeded -> sorteo de dos bombos
       sin ellos           -> bombo único (play-offs, Mundial de Clubes…) */
  function createKO(list, opts) {
    opts = opts || {};
    var seeded = opts.seeded || null, unseeded = opts.unseeded || null;
    var two = !!(seeded && unseeded && seeded.length && seeded.length === unseeded.length);
    return {
      kind: 'ko',
      name: opts.name || '',
      two: two,
      pot1: two ? seeded.slice().sort(byOvr) : [],          // primeros de grupo
      pot2: two ? unseeded.slice().sort(byOvr)              // segundos
        : (list || []).slice().sort(byOvr),                 // o bombo único
      all: two ? seeded.concat(unseeded) : (list || []).slice(),
      ties: [],
      current: null,
      relaxed: false,
      get bowl() { return this.pot2; },
      get done() { return !this.pot2.length && !this.current && !this.pot1.length; }
    };
  }

  function drawKO(st) {
    if (st.done) return null;

    /* primera bola: abre la serie (es el segundo de grupo y juega la ida en casa) */
    if (!st.current) {
      st.current = takeRandom(st.pot2);
      return { team: st.current, role: 'a', pot: st.two ? 2 : 1, skipped: [], tie: null };
    }

    var a = st.current, from = st.two ? st.pot1 : st.pot2;
    var skipped = [], pick = -1;
    var order = [];
    for (var k = 0; k < from.length; k++) order.push(k);
    order = shuffle(order);
    for (var i = 0; i < order.length; i++) {
      var j = order[i], cand = from[j];
      if (sameGroup(a, cand)) { skipped.push(cand); continue; }
      var restPool = from.slice(0, j).concat(from.slice(j + 1));
      var restA = st.two ? st.pot2.slice() : restPool.slice();
      if (st.two ? !canMatch(restA, restPool) : false) { skipped.push(cand); continue; }
      pick = j; break;
    }
    if (pick < 0) { pick = order.length ? order[0] : 0; st.relaxed = true; skipped = []; }

    var b = from.splice(pick, 1)[0];
    var tie = { a: a, b: b };        // a: ida en casa · b: vuelta en casa
    st.ties.push(tie);
    st.current = null;
    return { team: b, role: 'b', pot: st.two ? 1 : 1, skipped: skipped, tie: tie };
  }

  function autoKO(st) {
    var guard = 0;
    while (!st.done && guard++ < 500) drawKO(st);
    return st;
  }

  /* los dos bombos tal como hay que pintarlos */
  function koPots(st) {
    var out = [];
    if (st.two) {
      out.push({ name: 'Bombo 1 · primeros de grupo', teams: st.pot1.slice(), left: st.pot1.length, current: !!st.current });
      out.push({ name: 'Bombo 2 · segundos', teams: st.pot2.slice(), left: st.pot2.length, current: !st.current });
    } else {
      out.push({ name: 'Bombo', teams: st.pot2.slice(), left: st.pot2.length, current: true });
    }
    return out;
  }

  /* lista plana de equipos en el orden en que quedaron emparejados */
  function koField(st) {
    var out = [];
    st.ties.forEach(function (t) { out.push(t.a, t.b); });
    return out;
  }

  /* Vista previa de los bombos: para cada bombo, sus clubes con el estado
     (pendiente de salir, o ya sorteado y en qué grupo cayó). */
  function potsView(st) {
    var where = {};
    st.groups.forEach(function (g) {
      g.teams.forEach(function (t) { where[t.n] = g.name; });
    });
    return (st.potsAll || st.pots).map(function (p, i) {
      var pending = st.pots[i] || [];
      return {
        index: i,
        current: i === st.potIndex,
        left: pending.length,
        teams: p.map(function (t) {
          return { t: t, group: where[t.n] || null, drawn: pending.indexOf(t) < 0 };
        })
      };
    });
  }

  global.Draw = {
    create: create, drawOne: drawOne, auto: auto, makePots: makePots, potsView: potsView,
    createKO: createKO, drawKO: drawKO, autoKO: autoKO, koField: koField, koPots: koPots,
    countryOf: countryOf, check: check, shuffle: shuffle, LETTERS: LETTERS
  };
})(window);
