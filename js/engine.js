/* =========================================================================
   MOTOR DE SIMULACION
   Simula el partido completo de golpe y devuelve la lista de eventos.
   La interfaz se encarga de "reproducirlos" minuto a minuto.
   ========================================================================= */
(function (global) {
  'use strict';

  var DEF = ['RB', 'CB', 'LB', 'RWB', 'LWB'];
  var MID = ['DM', 'CM', 'AM'];
  var ATT = ['RW', 'LW', 'ST', 'CF'];

  var GOAL_W = { ST: 10, CF: 9, RW: 5.5, LW: 5.5, AM: 4.5, CM: 2.2, DM: 1.0, RB: 0.8, LB: 0.8, RWB: 1.0, LWB: 1.0, CB: 1.3, GK: 0 };
  var ASS_W = { ST: 3, CF: 3, RW: 6, LW: 6, AM: 6, CM: 4, DM: 1.5, RB: 2.5, LB: 2.5, RWB: 3, LWB: 3, CB: 0.7, GK: 0.2 };
  var FOUL_W = { ST: 2, CF: 2, RW: 1.5, LW: 1.5, AM: 1.5, CM: 3, DM: 4.5, RB: 3, LB: 3, RWB: 3, LWB: 3, CB: 3.5, GK: 0.4 };

  function rnd() { return Math.random(); }
  function pick(a) { return a[Math.floor(rnd() * a.length)]; }
  function avg(a) { return a.length ? a.reduce(function (s, v) { return s + v; }, 0) / a.length : 0; }
  var BANQUILLO = 7;          /* suplentes convocados */

  function group(pos) {
    if (pos === 'GK') return 'GK';
    if (DEF.indexOf(pos) >= 0) return 'DEF';
    if (MID.indexOf(pos) >= 0) return 'MID';
    return 'ATT';
  }

  /* ---------- formaciones ---------- */
  var FORMATIONS = {
    '4-3-3': ['GK', 'RB', 'CB', 'CB', 'LB', 'DM', 'CM', 'AM', 'RW', 'ST', 'LW'],
    '4-2-3-1': ['GK', 'RB', 'CB', 'CB', 'LB', 'DM', 'DM', 'RW', 'AM', 'LW', 'ST'],
    '4-4-2': ['GK', 'RB', 'CB', 'CB', 'LB', 'RW', 'CM', 'CM', 'LW', 'ST', 'ST'],
    '4-1-2-1-2': ['GK', 'RB', 'CB', 'CB', 'LB', 'DM', 'CM', 'CM', 'AM', 'ST', 'ST'],
    '3-5-2': ['GK', 'CB', 'CB', 'CB', 'RWB', 'CM', 'CM', 'CM', 'LWB', 'ST', 'ST'],
    '5-3-2': ['GK', 'RWB', 'CB', 'CB', 'CB', 'LWB', 'DM', 'CM', 'AM', 'ST', 'ST'],
    '3-4-3': ['GK', 'CB', 'CB', 'CB', 'RWB', 'CM', 'CM', 'LWB', 'RW', 'ST', 'LW']
  };
  /* penalizacion por jugar fuera de su puesto */
  function misfit(natural, slot) {
    if (natural === slot) return 0;
    var gn = group(natural), gs = group(slot);
    if (gn === 'GK' || gs === 'GK') return 18;
    if (gn === gs) return 1;
    if ((gn === 'DEF' && gs === 'MID') || (gn === 'MID' && gs === 'DEF')) return 4;
    if ((gn === 'MID' && gs === 'ATT') || (gn === 'ATT' && gs === 'MID')) return 4;
    return 8;
  }
  /* mejor once posible para una formacion; devuelve la plantilla reordenada */
  function autoLineup(list, slots) {
    var pool = list.map(function (p, i) { return { p: p, i: i, used: false }; });
    var xi = [];
    slots.forEach(function (slot) {
      var best = null, bs = -999;
      pool.forEach(function (x) {
        if (x.used) return;
        var sc = x.p[2] - misfit(x.p[1], slot);
        if (sc > bs) { bs = sc; best = x; }
      });
      if (best) { best.used = true; xi.push(best.p); }
    });
    var rest = pool.filter(function (x) { return !x.used; })
      .sort(function (a, b) { return b.p[2] - a.p[2]; })
      .map(function (x) { return x.p; });
    return xi.concat(rest);
  }

  /* ---------- construccion del equipo ---------- */
  function buildTeam(data, tactic) {
    var players = data.p.map(function (p, i) {
      return { id: i, name: p[0], pos: p[1], rat: p[2], age: p[3], g: group(p[1]) };
    });
    var xi = players.slice(0, 11).map(function (p) { return p; });
    if (data.fm && data.fm.length === 11) {
      xi.forEach(function (p, i) {
        var slot = data.fm[i];
        if (!slot) return;
        p.rat = Math.max(40, p.rat - misfit(p.pos, slot));
        p.slot = slot; p.pos = slot; p.g = group(slot);
      });
    }
    /* la convocatoria son dieciocho: el once y siete en el banquillo */
    var bench = players.slice(11, 11 + BANQUILLO);
    /* en el banquillo siempre va un portero de recambio */
    if (bench.length && !bench.some(function (p) { return p.pos === 'GK'; })) {
      var gk2 = players.slice(11 + BANQUILLO).filter(function (p) { return p.pos === 'GK'; })[0];
      if (gk2) bench[bench.length - 1] = gk2;
    }

    // seguro: la alineacion siempre lleva portero
    if (!xi.some(function (p) { return p.pos === 'GK'; })) {
      var gkIdx = bench.findIndex(function (p) { return p.pos === 'GK'; });
      if (gkIdx >= 0) { var gk = bench.splice(gkIdx, 1)[0]; bench.push(xi.shift()); xi.unshift(gk); }
    }
    xi.forEach(function (p) { p.fit = 1; p.onPitch = true; p.yellow = 0; p.red = false; p.goals = 0; p.assists = 0; });
    bench.forEach(function (p) { p.fit = 1; p.onPitch = false; p.yellow = 0; p.red = false; p.goals = 0; p.assists = 0; });

    return {
      name: data.n, short: data.s, c1: data.c1, c2: data.c2, league: data.league,
      src: data,
      players: players, xi: xi, bench: bench, tactic: tactic || 'bal',
      goals: 0, subsMade: 0, subsLog: [],
      st: { shots: 0, sot: 0, corners: 0, fouls: 0, yellow: 0, red: 0, xg: 0, poss: 0 }
    };
  }

  /* ---------- fuerza del equipo en un instante dado ---------- */
  /* Esto se llama una vez por minuto y por equipo, o sea unas doscientas
     veces por partido y veinticuatro mil partidos por temporada: se recorre
     el once una sola vez en lugar de armar nueve listas intermedias. Las
     cuentas son exactamente las mismas. */
  function strengths(t, minute) {
    var xi = t.xi, enCancha = 0, gkS = 0, gkN = 0, dS = 0, dN = 0, mS = 0, mN = 0, aS = 0, aN = 0;
    var envejece = minute > 55 ? (minute - 55) * 0.00055 : 0;
    for (var i = 0; i < xi.length; i++) {
      var p = xi[i];
      if (!p.onPitch || p.red) continue;
      enCancha++;
      var v = p.rat * (p.fit - envejece * (p.age > 31 ? 1.5 : 1));
      if (p.g === 'GK') { gkS += v; gkN++; }
      else if (p.g === 'DEF') { dS += v; dN++; }
      else if (p.g === 'MID') { mS += v; mN++; }
      else if (p.g === 'ATT') { aS += v; aN++; }
    }
    var gk = gkN ? gkS / gkN : 58;
    var dd = dN ? dS / dN : (mN ? mS / mN - 5 : 60);
    var mm = mN ? mS / mN : (dd + (aN ? aS / aN : 60)) / 2;
    var aa = aN ? aS / aN : mm - 3;

    var def = 0.70 * dd + 0.30 * gk;
    var mid = mm;
    var att = 0.78 * aa + 0.22 * mm;

    if (t.tactic === 'def') { def += 3.5; att -= 3.5; mid += 0.5; }
    if (t.tactic === 'atk') { att += 3.5; def -= 3.5; mid += 0.5; }

    // penalizacion por expulsados
    var missing = 11 - enCancha;
    if (missing > 0) { def -= missing * 4.5; mid -= missing * 4; att -= missing * 3.5; }

    return { gk: gk, def: def, mid: mid, att: att };
  }

  function overall(data) {
    var t = buildTeam(data, 'bal');
    var s = strengths(t, 0);
    return Math.round(0.36 * s.att + 0.28 * s.mid + 0.36 * s.def);
  }

  /* ---------- elegir jugador por pesos ---------- */
  function weighted(team, table, exclude) {
    var on = team.xi.filter(function (p) { return p.onPitch && !p.red && p !== exclude; });
    var tot = 0, w = on.map(function (p) {
      var base = table[p.pos];
      if (base == null) base = (p.g === 'GK') ? (table.GK || 0) : 1;
      var v = base * Math.pow(p.rat / 78, 2.6);
      tot += v; return v;
    });
    if (tot <= 0) {                       /* nadie elegible: nunca el portero */
      var campo = on.filter(function (p) { return p.g !== 'GK'; });
      return campo[Math.floor(rnd() * campo.length)] || on[0] || team.xi[0];
    }
    var r = rnd() * tot;
    for (var i = 0; i < on.length; i++) { r -= w[i]; if (r <= 0) return on[i]; }
    return on[on.length - 1] || team.xi[0];
  }

  /* ---------- frases ---------- */
  var TXT = {
    goal: ['¡GOL! %P define y no perdona.', '¡GOOOL de %P! Latigazo imparable.', '¡La clava %P! Golazo.',
      '¡GOL! %P aparece en el área chica y empuja.', '¡Definición perfecta de %P!', '¡GOL! %P fusila al portero.'],
    goalHead: ['¡GOL de cabeza de %P! Ganó en las alturas.', '¡Cabezazo de %P y adentro!'],
    goalFar: ['¡Bombazo de %P desde fuera del área!', '¡Misil de %P desde 30 metros!'],
    assist: [' Asistencia de %A.', ' Habilitó %A.', ' Tras el pase de %A.', ''],
    miss: ['%P remata y se va rozando el poste.', 'Se pierde %P un mano a mano increíble.',
      '¡Al travesaño el disparo de %P!', '%P la manda a las nubes desde buena posición.',
      '¡Qué atajada! %G le saca el gol a %P.', '%G vuela y despeja el remate de %P.'],
    shot: ['Prueba %P desde lejos, sin peligro.', 'Disparo desviado de %P.', 'Remate de %P que ataja sin problemas %G.',
      'Tiro cruzado de %P que se pierde por la línea de fondo.', 'Lo intenta %P, bloquea la defensa.'],
    corner: ['Córner para %T.', 'Saque de esquina para %T.'],
    foul: ['Falta de %P.', 'Corta el avance %P con infracción.', 'Juego brusco de %P.'],
    yellow: ['🟨 Amarilla para %P.', '🟨 El árbitro amonesta a %P.'],
    red: ['🟥 ¡ROJA DIRECTA a %P! Se queda con diez %T.', '🟥 Expulsado %P.'],
    red2: ['🟥 Segunda amarilla y expulsión de %P.'],
    penFor: ['¡PENAL para %T! Derribaron a %P dentro del área.'],
    penGoal: ['⚽ %P cambia el penal por gol.', '⚽ %P engaña al portero desde los once pasos.'],
    penMiss: ['¡%G le ataja el penal a %P!', '¡%P estrella el penal en el palo!']
  };
  function say(key, map) {
    var s = pick(TXT[key]);
    return s.replace('%P', map.P || '').replace('%A', map.A || '').replace('%G', map.G || '').replace('%T', map.T || '');
  }
  function gkOf(t) {
    var g = t.xi.filter(function (p) { return p.onPitch && p.g === 'GK'; })[0];
    return g ? g.name : 'el portero';
  }

  /* ---------- sustituciones ---------- */
  function doSub(t, minute, ev, forced, outPlayer) {
    if (t.subsMade >= 5 || !t.bench.length) return;
    var on = t.xi.filter(function (p) { return p.onPitch && !p.red; });
    var out = outPlayer;
    if (!out) {
      var cands = on.filter(function (p) { return p.g !== 'GK'; });
      if (!cands.length) return;
      cands.sort(function (a, b) { return (a.rat - a.age * 0.25) - (b.rat - b.age * 0.25); });
      out = cands[Math.floor(rnd() * Math.min(4, cands.length))];
    }
    if (out.g === 'GK' && !forced) return;
    var pool = t.bench.filter(function (p) { return !p.used && p.g === out.g; });
    if (!pool.length) pool = t.bench.filter(function (p) { return !p.used && p.g !== 'GK'; });
    if (!pool.length) return;
    pool.sort(function (a, b) { return b.rat - a.rat; });
    var inn = pool[0];
    inn.used = true; inn.onPitch = true; out.onPitch = false; out.subbedAt = minute;
    t.xi.push(inn);
    t.subsMade++;
    t.subsLog.push({ out: out.name, in: inn.name, min: minute });
    if (ev) ev.push({ min: minute, side: t.side, type: 'sub', text: '🔄 Cambio en ' + t.name + ': entra ' + inn.name + ', sale ' + out.name + (forced ? ' (lesionado)' : '') + '.' });
  }

  /* ---------- un minuto de juego ---------- */
  function playMinute(minute, A, B, ev, sA, sB, quick, extra) {
    // A ataca contra B
    var possA = Math.pow(sA.mid, 2.2) / (Math.pow(sA.mid, 2.2) + Math.pow(sB.mid, 2.2));
    A.st.poss += possA; B.st.poss += (1 - possA);

    tryChance(minute, A, B, ev, sA, sB, possA, quick, extra);
    tryChance(minute, B, A, ev, sB, sA, 1 - possA, quick, extra);

    // faltas / tarjetas
    [A, B].forEach(function (t) {
      if (rnd() < 0.125) {
        t.st.fouls++;
        var p = weighted(t, FOUL_W);
        var r = rnd();
        if (r < 0.14) {
          if (p.yellow === 1) {
            // el árbitro suele perdonar la segunda amarilla
            if (rnd() < 0.55) {
              p.yellow = 2; p.red = true; p.onPitch = false; t.st.red++; t.st.yellow++;
              if (!quick) ev.push({ min: minute, side: t.side, type: 'red', text: say('red2', { P: p.name }) });
            }
          } else {
            p.yellow = 1; t.st.yellow++;
            if (!quick) ev.push({ min: minute, side: t.side, type: 'yellow', text: say('yellow', { P: p.name }) });
          }
        } else if (r < 0.144) {
          p.red = true; p.onPitch = false; t.st.red++;
          var second = p.yellow === 1;
          if (second) { p.yellow = 2; t.st.yellow++; }
          if (!quick) ev.push({
            min: minute, side: t.side, type: 'red',
            text: second ? say('red2', { P: p.name }) : say('red', { P: p.name, T: t.name })
          });
        } else if (!quick && rnd() < 0.18) {
          ev.push({ min: minute, side: t.side, type: 'foul', text: say('foul', { P: p.name }) });
        }
      }
    });

    // corners
    [[A, sA, sB], [B, sB, sA]].forEach(function (x) {
      if (rnd() < 0.055 * Math.min(1.8, x[1].att / x[2].def)) {
        x[0].st.corners++;
        if (!quick && rnd() < 0.25) ev.push({ min: minute, side: x[0].side, type: 'corner', text: say('corner', { T: x[0].name }) });
      }
    });

    // lesiones
    [A, B].forEach(function (t) {
      if (!quick && rnd() < 0.0022 && t.subsMade < 5) {
        var on = t.xi.filter(function (p) { return p.onPitch && p.g !== 'GK'; });
        if (on.length) {
          var hurt = pick(on);
          ev.push({ min: minute, side: t.side, type: 'injury', text: '🚑 Se resiente ' + hurt.name + ' y no puede continuar.' });
          doSub(t, minute, ev, true, hurt);
        }
      }
    });
  }

  /* Dos goles no pueden caer en el mismo minuto ni en minutos pegados:
     entre uno y otro tienen que pasar al menos GAP_GOL minutos. El remate
     que llega demasiado seguido se queda en parada del portero. */
  var GAP_GOL = 2;
  function golPermitido(ev, minute) {
    return ev.ultimoGol == null || (minute - ev.ultimoGol) >= GAP_GOL;
  }

  function tryChance(minute, T, O, ev, s, so, possShare, quick, extra) {
    /* la ventaja satura: por mucho que se agrande la diferencia, un equipo
       no genera ocasiones sin límite (si no, salían marcadores de 20-0) */
    var ratio = Math.min(1.45, s.att / so.def);
    /* El exponente decide cuánta ventaja saca el mejor. Está medido contra
       la realidad: con 1.7 un equipo de 80 le gana a uno de 70 dos de cada
       tres veces, que es lo que pasa en el fútbol de verdad. */
    var p = 0.116 * Math.pow(ratio, 1.7) * Math.pow(possShare / 0.5, 0.40);
    if (extra) p *= 0.85;
    // el que va perdiendo al final se vuelca al ataque
    var ventaja = T.goals - O.goals;
    if (minute > 68 && ventaja < 0) p *= 1.14;
    else if (ventaja >= 3) p *= 0.70;        /* con la goleada hecha se afloja */
    else if (minute > 68 && ventaja > 0) p *= 0.92;
    if (rnd() > p) return;

    T.st.shots++;
    var shooter = weighted(T, GOAL_W);
    var keeper = gkOf(O);

    // penal
    if (rnd() < 0.018) {
      var taker = T.xi.filter(function (x) { return x.onPitch && !x.red; })
        .sort(function (a, b) { return (GOAL_W[b.pos] || 0) * b.rat - (GOAL_W[a.pos] || 0) * a.rat; })[0] || shooter;
      if (!quick) ev.push({ min: minute, side: T.side, type: 'big', text: say('penFor', { T: T.name, P: shooter.name }) });
      T.st.xg += 0.78; T.st.sot++;
      if (rnd() < 0.77 - (so.gk - 78) * 0.004 && golPermitido(ev, minute)) {
        T.goals++; taker.goals++; ev.ultimoGol = minute;
        if (!quick) ev.push({ min: minute, side: T.side, type: 'goal', scorer: taker.name, text: say('penGoal', { P: taker.name }) });
        else ev.push({ min: minute, side: T.side, type: 'goal', scorer: taker.name });
      } else if (!quick) {
        ev.push({ min: minute, side: T.side, type: 'miss', text: say('penMiss', { P: taker.name, G: keeper }) });
      }
      return;
    }

    var big = rnd() < 0.24;
    var far = !big && rnd() < 0.22;
    var xg = big ? 0.32 : (far ? 0.05 : 0.11);
    T.st.xg += xg;

    var onT = (big ? 0.52 : (far ? 0.28 : 0.36)) + (shooter.rat - 76) * 0.005;
    if (rnd() > onT) {
      if (!quick) ev.push({ min: minute, side: T.side, type: big ? 'big' : 'shot', text: say(big ? 'miss' : 'shot', { P: shooter.name, G: keeper }) });
      return;
    }
    T.st.sot++;

    var conv = (big ? 0.40 : (far ? 0.12 : 0.24));
    conv *= 1 + (shooter.rat - 78) * 0.009;
    conv *= 1 - (so.gk - 78) * 0.010;
    if (rnd() < conv && golPermitido(ev, minute)) {
      T.goals++; shooter.goals++; ev.ultimoGol = minute;
      var assister = rnd() < 0.74 ? weighted(T, ASS_W, shooter) : null;
      if (assister) assister.assists++;
      var key = far ? 'goalFar' : (shooter.g === 'DEF' || (big && rnd() < 0.3) ? 'goalHead' : 'goal');
      if (quick) { ev.push({ min: minute, side: T.side, type: 'goal', scorer: shooter.name }); return; }
      ev.push({
        min: minute, side: T.side, type: 'goal', scorer: shooter.name,
        text: say(key, { P: shooter.name }) + (assister ? say('assist', { A: assister.name }) : '')
      });
    } else if (!quick) {
      ev.push({ min: minute, side: T.side, type: big ? 'big' : 'shot', text: say(big ? 'miss' : 'shot', { P: shooter.name, G: keeper }) });
    }
  }

  /* ---------- tanda de penales ---------- */
  function shootout(A, B, ev, quick) {
    var takersOf = function (t) {
      return t.xi.filter(function (p) { return p.onPitch && !p.red; })
        .sort(function (a, b) { return (GOAL_W[b.pos] || 0) * b.rat - (GOAL_W[a.pos] || 0) * a.rat; });
    };
    var ta = takersOf(A), tb = takersOf(B);
    var sa = strengths(A, 120), sb = strengths(B, 120);
    var pa = 0, pb = 0, i = 0;
    var log = [];
    function kick(t, list, gkRat, idx) {
      var p = list[idx % list.length];
      var ok = rnd() < (0.75 + (p.rat - 78) * 0.006 - (gkRat - 78) * 0.008);
      log.push({ team: t.name, player: p.name, ok: ok });
      return ok;
    }
    /* se patea alternando y se corta en cuanto está decidida */
    var ka = 0, kb = 0;
    function resuelta() { return pa > pb + (5 - kb) || pb > pa + (5 - ka); }
    while ((ka < 5 || kb < 5) && !resuelta()) {
      if (ka <= kb && ka < 5) { if (kick(A, ta, sb.gk, ka)) pa++; ka++; }
      else if (kb < 5) { if (kick(B, tb, sa.gk, kb)) pb++; kb++; }
      else break;
    }
    /* muerte súbita: de a uno cada equipo hasta que uno falle */
    var k = 5;
    while (pa === pb && k < 40) {
      var a1 = kick(A, ta, sb.gk, k), b1 = kick(B, tb, sa.gk, k);
      if (a1) pa++; if (b1) pb++;
      k++;
    }
    /* alguien tiene que pasar: una tanda no puede quedar empatada */
    if (pa === pb) { if (rnd() < 0.5) pa++; else pb++; }
    if (!quick) ev.push({ min: 121, side: null, type: 'info', text: '⚪ Tanda de penales: ' + A.name + ' ' + pa + ' - ' + pb + ' ' + B.name });
    return { a: pa, b: pb, log: log };
  }

  /* ---------- partido completo ---------- */
  function simulate(homeData, awayData, opts) {
    opts = opts || {};
    var quick = !!opts.quick;
    var A = buildTeam(homeData, opts.homeTactic);
    var B = buildTeam(awayData, opts.awayTactic);
    A.side = 'home'; B.side = 'away';

    var ev = [];
    /* jugar en casa vale un 3% más de valoración, en todas las líneas */
    var homeBoost = opts.neutral ? 1 : 1.03;
    /* El día que tiene cada equipo. Un domingo se juega por encima de lo
       que uno es y otro no entra ni una: sin esto no habría sorpresas. */
    function elDia() { return 1 + (rnd() + rnd() + rnd() - 1.5) * 0.07; }
    var diaA = elDia(), diaB = elDia();

    var subPlanA = [58 + Math.floor(rnd() * 6), 64 + Math.floor(rnd() * 6), 71 + Math.floor(rnd() * 6), 78 + Math.floor(rnd() * 6)];
    var subPlanB = [57 + Math.floor(rnd() * 6), 63 + Math.floor(rnd() * 7), 70 + Math.floor(rnd() * 7), 79 + Math.floor(rnd() * 6)];

    if (!quick) ev.push({ min: 0, side: null, type: 'info', text: '🔊 ¡Comienza el partido en ' + (opts.neutral ? 'campo neutral' : 'casa de ' + A.name) + '!' });

    var addedFirst = 1 + Math.floor(rnd() * 3);
    var addedSecond = 2 + Math.floor(rnd() * 5);

    /* Para narrar el partido hace falta saber cómo iban las estadísticas
       en cada minuto, no sólo al final. */
    var linea = quick ? null : [];
    function foto(m) {
      var tot = A.st.poss + B.st.poss || 1;
      return {
        min: m,
        shots: [A.st.shots, B.st.shots], sot: [A.st.sot, B.st.sot],
        corners: [A.st.corners, B.st.corners], fouls: [A.st.fouls, B.st.fouls],
        xg: [Math.round(A.st.xg * 10) / 10, Math.round(B.st.xg * 10) / 10],
        poss: [Math.round(A.st.poss / tot * 100), 100 - Math.round(A.st.poss / tot * 100)]
      };
    }
    function run(from, to, extra) {
      for (var m = from; m <= to; m++) {
        var sA = strengths(A, m), sB = strengths(B, m);
        sA.att *= homeBoost * diaA; sA.mid *= homeBoost * diaA; sA.def *= homeBoost * diaA;
        sB.att *= diaB; sB.mid *= diaB; sB.def *= diaB;
        playMinute(m, A, B, ev, sA, sB, quick, extra);
        if (subPlanA.indexOf(m) >= 0) doSub(A, m, quick ? null : ev, false);
        if (subPlanB.indexOf(m) >= 0) doSub(B, m, quick ? null : ev, false);
        if (linea) linea[m] = foto(m);
      }
    }

    run(1, 45, false);
    if (addedFirst) run(45, 45 + addedFirst - 1, false);
    if (!quick) ev.push({ min: 45, side: null, type: 'info', text: '⏸ Descanso: ' + A.name + ' ' + A.goals + ' - ' + B.goals + ' ' + B.name });
    run(46, 90, false);
    run(90, 90 + addedSecond - 1, false);
    if (!quick) ev.push({ min: 90, side: null, type: 'info', text: '⏱ Final del partido: ' + A.name + ' ' + A.goals + ' - ' + B.goals + ' ' + B.name });

    var pens = null, aet = false;
    if (opts.knockout && A.goals === B.goals) {
      aet = true;
      if (!quick) ev.push({ min: 91, side: null, type: 'info', text: '➕ Se va a la prórroga.' });
      run(91, 120, true);
      if (!quick) ev.push({ min: 120, side: null, type: 'info', text: '⏱ Fin de la prórroga: ' + A.name + ' ' + A.goals + ' - ' + B.goals + ' ' + B.name });
      if (A.goals === B.goals) pens = shootout(A, B, ev, quick);
    }

    var total = 90 + addedFirst + addedSecond + (aet ? 30 : 0);
    [A, B].forEach(function (t) { t.st.poss = Math.round(t.st.poss / total * 100); });
    var sum = A.st.poss + B.st.poss;
    A.st.poss = Math.round(A.st.poss / sum * 100); B.st.poss = 100 - A.st.poss;
    A.st.xg = Math.round(A.st.xg * 10) / 10; B.st.xg = Math.round(B.st.xg * 10) / 10;

    ev.sort(function (a, b) { return a.min - b.min; });

    return {
      home: A, away: B, events: ev, pens: pens, aet: aet, linea: linea,
      score: [A.goals, B.goals],
      winner: pens ? (pens.a > pens.b ? 'home' : 'away') : (A.goals > B.goals ? 'home' : A.goals < B.goals ? 'away' : 'draw'),
      addedFirst: addedFirst, addedSecond: addedSecond
    };
  }

  global.Engine = {
    simulate: simulate, buildTeam: buildTeam, strengths: strengths, overall: overall,
    group: group, FORMATIONS: FORMATIONS, autoLineup: autoLineup, misfit: misfit,
    BANQUILLO: BANQUILLO, CONVOCADOS: 11 + BANQUILLO
  };
})(window);
