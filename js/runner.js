/* =========================================================================
   TORNEOS PASO A PASO (fuera del modo carrera)
   Ligas, copas, continentales, selecciones y torneos creados por el usuario
   se juegan partido a partido, jornada a jornada o de golpe.
     var r = Runner.league(teams, {name, double});
     Runner.mount(document.querySelector('#out'), r);
   ========================================================================= */
(function (global) {
  'use strict';

  var esc = function (s) {
    return String(s == null ? '' : s).replace(/&/g, '&amp;').replace(/</g, '&lt;')
      .replace(/>/g, '&gt;').replace(/"/g, '&quot;');
  };
  function X() { return global.UIX || {}; }
  function crest(t, s) {
    return '<span class="cw' + (t && t.uid ? ' tclick' : '') + '"' +
      (t && t.uid ? ' data-tid="' + t.uid + '"' : '') +
      ' style="width:' + s + 'px;height:' + s + 'px">' + Crest.html(t, s) + '</span>';
  }

  /* =====================================================================
     NÚCLEO
     ===================================================================== */
  /* alterna dos listas: a0, b0, a1, b1… */
  function intercala(a, b) {
    var out = [], n = Math.max(a.length, b.length);
    for (var i = 0; i < n; i++) {
      if (a[i]) out.push(a[i]);
      if (b[i]) out.push(b[i]);
    }
    return out;
  }

  function base(name) {
    return {
      name: name || 'Torneo',
      scorers: {},
      pending: [],        // partidos de la ronda en curso
      idx: 0,             // siguiente partido de la ronda
      label: '',          // nombre de la ronda en curso
      log: [],            // resultados de la ronda en curso
      done: false,
      champion: null
    };
  }
  function remaining(R) { return R.pending.length - R.idx; }

  /* juega el siguiente partido; si `res` viene dado, lo aplica en vez de simular */
  function step(R, res) {
    if (R.done) return null;
    var m = R.pending[R.idx];
    if (!m) return null;
    res = res || Engine.simulate(m.h, m.a, {
      quick: true, neutral: !!m.neutral, knockout: !!m.knockout
    });
    Comp.collectScorers(R.scorers, res);
    m.apply(res);
    R.idx++;
    var gol = Comp.matchScorers(res);
    R.log.push({
      h: m.h, a: m.a, s: res.score, pens: res.pens || null, note: m.note || '',
      gh: gol.home, ga: gol.away, tie: m.tie || null
    });
    if (R.idx >= R.pending.length) {
      // guarda la ronda recién terminada para que se pueda seguir viendo
      R.prevLog = R.log.slice(); R.prevLabel = R.label;
      R.advance();
    }
    return { m: m, res: res };
  }
  function peek(R) { return R.done ? null : R.pending[R.idx] || null; }
  /* «Jornada completa» juega toda la jornada. Lo único que corta es el paso
     de la ida a la vuelta: son dos tandas de partidos, no una. */
  function esLeg(n) { return n === 'ida' || n === 'vuelta'; }
  function stepRound(R) {
    var guard = 0, label = R.label;
    var primero = peek(R);
    var tramo = primero && esLeg(primero.note) ? primero.note : null;
    while (!R.done && R.label === label && remaining(R) > 0 && guard++ < 2000) {
      var sig = peek(R);
      if (tramo && sig && esLeg(sig.note) && sig.note !== tramo) break;
      step(R);
    }
  }
  function stepAll(R) {
    var guard = 0;
    while (!R.done && guard++ < 40000) step(R);
  }

  /* =====================================================================
     LIGA
     ===================================================================== */
  function league(teams, opts) {
    opts = opts || {};
    var R = base(opts.name || 'Liga');
    R.kind = 'league';
    R.table = Comp.newTable(teams);
    R.rounds = Comp.roundRobin(teams, opts.double !== false);
    R.results = [];
    R.ri = -1;
    R.ucl = opts.ucl; R.rel = opts.rel;

    R.build = function () {
      R.ri++;
      if (R.ri >= R.rounds.length) {
        R.done = true;
        R.champion = Comp.sortTable(R.table)[0].t;
        R.label = 'Temporada terminada';
        R.pending = []; R.idx = 0;
        return;
      }
      R.label = 'Jornada ' + (R.ri + 1) + ' de ' + R.rounds.length;
      R.log = [];
      R.idx = 0;
      var bucket = [];
      R.results.push({ n: R.ri + 1, r: bucket });
      R.pending = R.rounds[R.ri].map(function (p) {
        return {
          h: p[0], a: p[1],
          apply: function (res) {
            Comp.applyResult(R.table, p[0], p[1], res.score);
            bucket.push({ h: p[0], a: p[1], s: res.score });
          }
        };
      });
    };
    R.advance = R.build;
    R.build();
    return R;
  }

  /* =====================================================================
     ELIMINATORIA
     ===================================================================== */
  function koPhase(R, entrants, opts) {
    opts = opts || {};
    R.koRounds = R.koRounds || [];
    R.cur = entrants.slice();

    R.buildKO = function () {
      if (R.cur.length <= 1) {
        R.done = true;
        R.champion = R.cur[0] || null;
        R.label = 'Torneo terminado';
        R.pending = []; R.idx = 0;
        return;
      }
      var pairs = [], i;
      var K = Comp.pow2AtMost(R.cur.length);
      var name;
      /* Una ronda de clasificación empareja a todos y no reparte byes: de
         catorce equipos salen siete cruces, no ocho con dos pases gratis. */
      if (opts.unaRonda) {
        for (i = 0; i + 1 < R.cur.length; i += 2) pairs.push([R.cur[i], R.cur[i + 1]]);
        R.byes = R.cur.length % 2 ? [R.cur[R.cur.length - 1]] : [];
        name = opts.name || 'Clasificación';
      } else if (opts.byesFijos && opts.byesFijos.length) {
        /* Los que esperan vienen dados (los primeros de grupo); el resto se
           cruza entre sí en la ronda de acceso. */
        var esperan = opts.byesFijos.slice();
        var juegan = R.cur.filter(function (t) { return esperan.indexOf(t) < 0; });
        /* si el orden viene dado (dos bombos ya intercalados) no se toca */
        if (!opts.ordenFijo) juegan = Comp.shuffle(juegan);
        for (i = 0; i + 1 < juegan.length; i += 2) pairs.push([juegan[i], juegan[i + 1]]);
        R.byes = esperan;
        name = opts.nombrePrimera || Comp.roundName(R.cur.length);
        opts.byesFijos = null;                 /* sólo manda en la primera ronda */
      } else if (R.cur.length > K) {                       // ronda previa con byes
        var byN = K * 2 - R.cur.length;
        var ordered = R.cur.slice().sort(function (a, b) { return (b.ovr || 0) - (a.ovr || 0); });
        R.byes = ordered.slice(0, byN);
        var playing = Comp.shuffle(ordered.slice(byN));
        for (i = 0; i < playing.length; i += 2) pairs.push([playing[i], playing[i + 1]]);
        name = opts.nombrePrimera || 'Ronda previa';
      } else {
        for (i = 0; i < R.cur.length; i += 2) pairs.push([R.cur[i], R.cur[i + 1]]);
        R.byes = [];
        name = (opts.unaRonda && opts.name) ? opts.name : Comp.roundName(R.cur.length);
      }

      var ties = pairs.map(function (p) {
        return { a: p[0], b: p[1], legs: [], two: false, w: null };
      });
      var col = { name: name, ties: ties, byes: R.byes.slice() };
      R.koRounds.push(col);
      R.label = name;
      R.log = [];
      R.idx = 0;
      R.pending = [];

      var isFinal = pairs.length === 1;
      var twoLegs = opts.legs === 2 && !isFinal;

      ties.forEach(function (t) {
        t.two = twoLegs;
        R.pending.push({
          h: t.a, a: t.b, neutral: isFinal ? true : false, knockout: !twoLegs,
          tie: t, note: twoLegs ? 'ida' : '',
          apply: function (res) { t.leg1 = res.score; if (!twoLegs) { t.s = res.score; t.pens = res.pens; t.aet = res.aet; t.w = res.winner === 'home' ? t.a : t.b; } }
        });
      });
      if (twoLegs) {
        ties.forEach(function (t) {
          R.pending.push({
            h: t.b, a: t.a, note: 'vuelta', tie: t,
            apply: function (res) {
              t.leg2 = res.score;
              var agA = t.leg1[0] + res.score[1], agB = t.leg1[1] + res.score[0];
              t.legs = [t.leg1, t.leg2];
              t.agg = [agA, agB];
              /* en la vuelta el local es t.b: el global se escribe en ese orden */
              res.aggNote = 'Global ' + agB + '-' + agA;
              if (agA === agB) {
                t.pens = Comp.penaltyShootout(t.a, t.b);
                t.w = t.pens.a > t.pens.b ? t.a : t.b;
                // en la vuelta el local es t.b: hay que dar la vuelta a la tanda
                res.pens = { a: t.pens.b, b: t.pens.a };
                res.winner = t.w === t.b ? 'home' : 'away';
              } else t.w = agA > agB ? t.a : t.b;
            }
          });
        });
      }

      /* el tercer puesto se juega el mismo día que la final */
      if (opts.tercerPuesto && R.pendienteTercero && pairs.length === 1) {
        var t3 = { a: R.pendienteTercero[0], b: R.pendienteTercero[1], legs: [], two: false, w: null };
        R.tercerTie = t3;
        R.pendienteTercero = null;
        R.pending.push({
          h: t3.a, a: t3.b, neutral: true, knockout: true, tie: t3, note: 'Tercer puesto',
          apply: function (res) {
            t3.s = res.score; t3.pens = res.pens; t3.aet = res.aet;
            t3.w = res.winner === 'home' ? t3.a : t3.b;
          }
        });
      }

      R.advance = function () {
        /* Fase de clasificación: se juega una ronda y se acabó. Los que pasan
           y los que caen se entregan al que la haya montado. */
        if (opts.unaRonda) {
          R.done = true;
          R.label = (opts.name || 'Clasificación') + ' · terminada';
          R.pending = []; R.idx = 0;
          R.ganadores = col.byes.slice().concat(ties.map(function (t) { return t.w; }));
          R.perdedores = ties.map(function (t) { return t.w === t.a ? t.b : t.a; });
          if (R.alTerminar) R.alTerminar(R);
          return;
        }
        /* de semifinales salen la final y el partido por el tercer puesto */
        if (opts.tercerPuesto && ties.length === 2) {
          R.pendienteTercero = ties.map(function (t) { return t.w === t.a ? t.b : t.a; });
        }
        var next;
        if (col.byes.length) {
          /* Se intercalan: ganador de la ronda de acceso primero y el que
             esperaba después, para que se crucen entre sí y el que esperaba
             cierre la eliminatoria en casa. */
          next = [];
          var gan = ties.map(function (t) { return t.w; });
          var tope = Math.max(col.byes.length, gan.length);
          for (var q = 0; q < tope; q++) {
            if (gan[q]) next.push(gan[q]);
            if (col.byes[q]) next.push(col.byes[q]);
          }
        } else {
          next = [];
          ties.forEach(function (t) { next.push(t.w); });
        }
        /* sin barajar: el ganador se queda en su rama, que es lo que permite
           dibujar la llave entera de un vistazo */
        R.cur = next;
        R.buildKO();
      };
    };
    R.buildKO();
  }

  function knockout(teams, opts) {
    opts = opts || {};
    var R = base(opts.name || 'Copa');
    R.kind = 'ko';
    /* si el cuadro ya viene sorteado, el orden que llega es el bueno */
    koPhase(R, opts.ordenFijo ? teams.slice() : Comp.shuffle(teams), opts);
    return R;
  }

  /* =====================================================================
     TORNEO COMPLETO: GRUPOS + ELIMINATORIAS
     ===================================================================== */
  function tournament(teams, cfg) {
    cfg = cfg || {};
    var st = cfg.structure || Comp.structureFor(teams.length, cfg.groupSize);
    if (!st.ok) return { error: st.msg };
    if (st.mode === 'ko') {
      var r0 = knockout(teams, { name: cfg.name, legs: cfg.legs, neutral: cfg.neutral });
      r0.structure = st;
      return r0;
    }

    var R = base(cfg.name || 'Torneo');
    R.kind = 'tournament';
    R.structure = st;
    R.groups = cfg.groups || Comp.makeGroups(teams, st.groups, cfg.seeded);
    R.groups.forEach(function (g) {
      g.table = Comp.newTable(g.teams);
      g.matches = [];
      g.standings = Comp.sortTable(g.table);
      g.rounds = Comp.roundRobin(g.teams, !!cfg.groupDouble);
    });
    R.gi = -1;

    function refresh() {
      R.groups.forEach(function (g) {
        g.standings = Comp.sortTable(g.table);
        g.standings.forEach(function (row, i) { row.pos = i + 1; row.group = g.name; });
      });
    }

    R.buildGroup = function () {
      R.gi++;
      var total = R.groups[0].rounds.length;
      if (R.gi >= total) {
        refresh();
        R.q = Comp.qualifiers(R.groups, st.perGroup, st.extra);
        /* una fase de clasificación acaba aquí: no hay cuadro, sólo la lista
           de los que pasan */
        if (cfg.onlyGroups) {
          R.done = true;
          R.label = 'Clasificación terminada';
          R.pending = []; R.idx = 0;
          R.qualified = R.q.qualified.map(function (x) { return x.t; });
          if (R.alTerminar) R.alTerminar(R);
          return;
        }
        var flat = [], byesFijos = null, bombosKO = null;
        if (cfg.extraKO && cfg.extraKO.length) {
          /* Los primeros de grupo esperan; los segundos juegan la ronda de
             acceso contra los que llegan de la otra competición. */
          var primeros = [], segundos = [];
          R.groups.forEach(function (g) {
            if (g.standings[0]) primeros.push(g.standings[0].t);
            if (g.standings[1]) segundos.push(g.standings[1].t);
          });
          /* dos bombos: los segundos y los que llegan de la otra competición.
             Se intercalan para que cada cruce sea uno de cada bombo, y el de
             fuera cierre la eliminatoria en casa. */
          bombosKO = [segundos.slice(), cfg.extraKO.slice()];
          flat = primeros.concat(intercala(segundos, cfg.extraKO));
          byesFijos = primeros;
        } else {
          var pairs = Comp.seedBracket(R.q.qualified);
          pairs.forEach(function (p) { flat.push(p[0].t, p[1].t); });
        }
        /* si alguien quiere sortear antes, el torneo espera aquí */
        if (cfg.antesDelKO && !R.koSorteado) {
          R.esperaKO = { campo: flat, byes: byesFijos, bombos: bombosKO };
          R.pending = []; R.idx = 0;
          R.label = 'Sorteo de las eliminatorias';
          R.seguirKO = function (campo, byes, ordenFijo) {
            R.koSorteado = true;
            R.esperaKO = null;
            R.phase = 'ko';
            koPhase(R, campo || flat, { legs: cfg.legs, neutral: cfg.neutral,
              nombrePrimera: cfg.nombrePrimera, byesFijos: byes || byesFijos,
              tercerPuesto: cfg.tercerPuesto, ordenFijo: !!ordenFijo });
          };
          cfg.antesDelKO(R);
          return;
        }
        R.phase = 'ko';
        koPhase(R, flat, { legs: cfg.legs, neutral: cfg.neutral,
          nombrePrimera: cfg.nombrePrimera, byesFijos: byesFijos,
          tercerPuesto: cfg.tercerPuesto, ordenFijo: !!bombosKO });
        return;
      }
      R.phase = 'groups';
      R.label = 'Grupos · jornada ' + (R.gi + 1) + ' de ' + total;
      R.log = [];
      R.idx = 0;
      R.pending = [];
      R.groups.forEach(function (g) {
        (g.rounds[R.gi] || []).forEach(function (p) {
          R.pending.push({
            h: p[0], a: p[1], neutral: cfg.neutral !== false, note: g.name,
            apply: function (res) {
              Comp.applyResult(g.table, p[0], p[1], res.score);
              g.matches.push({ h: p[0], a: p[1], s: res.score });
              refresh();
            }
          });
        });
      });
      R.advance = R.buildGroup;
    };
    R.buildGroup();
    return R;
  }

  /* =====================================================================
     INTERFAZ
     ===================================================================== */
  var TPL =
    '<div class="card rn-bar">' +
    '<div class="rn-now"><b data-r="label"></b><small data-r="next"></small></div>' +
    '<div class="rn-btns">' +
    '<button class="primary" data-r="one">Siguiente partido</button>' +
    '<button class="mini" data-r="live">Ver en vivo</button>' +
    '<button class="mini" data-r="round">Jornada completa</button>' +
    '<button class="mini" data-r="all">Simular todo</button>' +
    '</div></div>' +
    '<div class="hidden" data-r="livebox"></div>' +
    '<div class="card hidden" data-r="logbox"><h3 data-r="logtitle">Resultados</h3><div class="fx" data-r="log"></div></div>' +
    '<div data-r="state"></div>';

  function mount(box, R) {
    if (R.error) { box.innerHTML = '<div class="card format-box bad">' + esc(R.error) + '</div>'; return; }
    box.innerHTML = TPL;
    var el = {};
    Array.prototype.forEach.call(box.querySelectorAll('[data-r]'), function (n) { el[n.dataset.r] = n; });
    var mv = null, busy = false;

    function scoreLine(r) {
      var pen = r.pens ? '<i class="pen">pen ' + r.pens.a + '-' + r.pens.b + '</i>' : '';
      return '<div class="scline">' +
        '<span class="sc-c" title="' + esc(r.h.n) + '">' + crest(r.h, 34) + '</span>' +
        '<b>' + r.s[0] + ' - ' + r.s[1] + pen + '</b>' +
        '<span class="sc-c" title="' + esc(r.a.n) + '">' + crest(r.a, 34) + '</span>' +
        golesHTML(r) + '</div>';
    }
    /* quién marcó y en qué minuto, a los dos lados del marcador */
    function golesHTML(r) {
      if (!r.gh && !r.ga) return '';
      function lado(l, clase) {
        if (!l || !l.length) return '<span class="sc-g ' + clase + '"></span>';
        return '<span class="sc-g ' + clase + '">' + l.map(function (g) {
          return '<i>' + esc(g.n) + ' <u>' + g.mins.map(function (m) { return m + "'"; }).join(', ') + '</u></i>';
        }).join('') + '</span>';
      }
      if (!(r.gh && r.gh.length) && !(r.ga && r.ga.length)) return '';
      return '<div class="sc-gols">' + lado(r.gh, 'izq') + lado(r.ga, 'der') + '</div>';
    }

    function paint() {
      var nx = peek(R);
      el.label.textContent = R.label;
      el.next.innerHTML = nx
        ? 'Siguiente: ' + esc(nx.h.n) + ' — ' + esc(nx.a.n) +
        (nx.note ? ' <i>(' + esc(nx.note) + ')</i>' : '') + ' · quedan ' + remaining(R) + ' en esta ronda'
        : (R.done && R.label.indexOf('🏆') < 0
          ? '🏆 Campeón: <b>' + esc(R.champion ? R.champion.n : '—') + '</b>' : '');
      ['one', 'live', 'round', 'all'].forEach(function (k) { el[k].disabled = R.done || busy || !nx; });

      var lg = R.log.length ? R.log : (R.prevLog || []);
      var lgName = R.log.length ? R.label : (R.prevLabel || '');
      el.logbox.classList.toggle('hidden', !lg.length || !!R.hideLog);
      el.log.innerHTML = lg.map(scoreLine).join('');
      el.logtitle.textContent = lg.length + ' resultado' + (lg.length === 1 ? '' : 's') +
        (lgName ? ' · ' + lgName : '');

      var h = '';
      if (R.extraHTML) h += R.extraHTML();
      if (R.kind === 'league' && !R.hideTable) {
        h += '<div class="card"><h3>Clasificación</h3>' +
          X().tableHTML(Comp.sortTable(R.table), { ucl: R.ucl, rel: R.rel, form: true }) + '</div>';
      }
      if (R.groups && !R.hideGroups) {
        h += '<div class="card"><h3>Fase de grupos</h3>' +
          X().groupsHTML(R.groups, R.structure.perGroup, R.structure.extra) + '</div>';
      }
      if (R.koRounds && R.koRounds.length && !R.hideKO) {
        // sólo los cruces ya resueltos: los que están en juego aún no tienen marcador
        var cols = R.koRounds.map(function (c) {
          return {
            name: c.name,
            ties: c.ties.filter(function (t) { return t.w && (t.bye || t.s || t.agg); })
          };
        }).filter(function (c) { return c.ties.length; });
        if (cols.length) {
          h += '<div class="card"><h3>Eliminatorias</h3>' +
            X().bracketHTML(cols, R.champion) + '</div>';
        }
      }
      var sc = Comp.topScorers(R.scorers);
      /* si el torneo dejó atrás una fase previa, se dice de qué cuenta */
      var golT = R.scorersQuali ? 'Goleadores del Mundial' : 'Goleadores';
      if (sc.length) h += '<div class="card"><h3>' + golT + '</h3><div class="scroll">' +
        X().scorersHTML(sc.slice(0, 25)) + '</div></div>';
      if (R.tailHTML) h += R.tailHTML();   /* siempre al final de la pagina */
      el.state.innerHTML = h;
    }

    /* si el torneo pinta sus propios botones (data-q), aquí se atienden */
    el.state.onclick = function (e) {
      if (!R.onStateClick) return;
      var n = e.target;
      while (n && n !== el.state && !(n.getAttribute && n.getAttribute('data-q'))) n = n.parentNode;
      if (!n || n === el.state) return;
      R.onStateClick(n.getAttribute('data-q'));
      paint();
    };

    /* La ficha del partido en vivo se cierra sola en cuanto se sigue
       simulando; antes se quedaba en pantalla para siempre. */
    function cerrarVivo() {
      if (mv && mv.stop) mv.stop();
      el.livebox.classList.add('hidden');
      el.livebox.innerHTML = '';
      mv = null;
    }

    /* «Siguiente partido»: primero se enseña el partido en juego y, tras un
       instante, aparece el resultado. Sin esto el marcador salía de golpe. */
    el.one.onclick = function () {
      var nx = peek(R);
      if (busy) return;
      cerrarVivo();
      if (!R.enJuego || !nx) { step(R); paint(); return; }
      busy = true;
      R.enJuego(nx);
      paint();
      setTimeout(function () {
        R.enJuego(null);
        busy = false;
        step(R);
        paint();
      }, 750);
    };
    el.round.onclick = function () { if (busy) return; cerrarVivo(); stepRound(R); paint(); };
    el.all.onclick = function () { if (busy) return; cerrarVivo(); stepAll(R); paint(); };
    el.live.onclick = function () {
      var m = peek(R);
      if (!m || busy) return;
      cerrarVivo();
      var res = Engine.simulate(m.h, m.a, { quick: false, neutral: !!m.neutral, knockout: !!m.knockout });
      /* se aplica antes de verlo: así la tanda de penales de una vuelta
         igualada ya viene colgada del resultado cuando el visor termina.
         El marcador no se destripa porque la pantalla no se repinta hasta el final. */
      step(R, res);
      busy = true;
      el.livebox.classList.remove('hidden');
      if (!mv) mv = MatchView.create(el.livebox);
      mv.show(res, {
        live: true,
        onEnd: function () { busy = false; paint(); },
        onClose: function () { cerrarVivo(); busy = false; paint(); }
      });
      el.livebox.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };

    paint();
    return { repaint: paint };
  }

  global.Runner = {
    league: league, knockout: knockout, tournament: tournament,
    mount: mount, step: step, stepRound: stepRound, stepAll: stepAll, peek: peek
  };
})(window);
