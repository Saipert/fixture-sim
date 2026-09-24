/* =========================================================================
   VISOR DE PARTIDO
   Marcador, alineaciones, estadísticas y narración minuto a minuto.
   Lo usan tanto «Partido rápido» como el modo carrera.
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
  function ratClass(r) { return r >= 86 ? 'r-elite' : r >= 80 ? 'r-great' : ''; }

  var TPL =
    '<div class="scoreboard card">' +
    '<div class="sb-team"><div class="sb-crest" data-x="hc"></div>' +
    '<div class="sb-name" data-x="hn">—</div><div class="sb-scorers" data-x="hs"></div></div>' +
    '<div class="sb-center"><div class="sb-score"><span data-x="hg">0</span><i>-</i><span data-x="ag">0</span></div>' +
    '<div class="sb-clock" data-x="clock">0\'</div><div class="sb-status" data-x="status"></div>' +
    '<div class="sb-speed" data-x="speed"></div>' +
    '<div class="sb-close" data-x="close"></div></div>' +
    '<div class="sb-team right"><div class="sb-crest" data-x="ac"></div>' +
    '<div class="sb-name" data-x="an">—</div><div class="sb-scorers" data-x="as"></div></div>' +
    '</div>' +
    '<div class="match-grid">' +
    '<div class="card lineup" data-x="hl"></div>' +
    '<div class="card center-col"><div class="stats" data-x="stats"></div>' +
    '<h3 class="feed-title">Narración</h3><div class="feed" data-x="feed"></div></div>' +
    '<div class="card lineup" data-x="al"></div></div>';

  /* Velocidades de la narración. La que había antes (38 ms por minuto)
     es la más rápida, tal como pidió el usuario. */
  var SPEEDS = [
    { label: 'Lenta', ms: 150 },
    { label: 'Normal', ms: 100 },
    { label: 'Rápida', ms: 65 },
    { label: 'Máxima', ms: 38 }
  ];
  function savedSpeed() {
    try {
      var v = +localStorage.getItem('simufut.speed');
      for (var i = 0; i < SPEEDS.length; i++) if (SPEEDS[i].ms === v) return v;
    } catch (_) { }
    return 100;
  }

  function create(root) {
    root.innerHTML = TPL;
    var el = {};
    Array.prototype.forEach.call(root.querySelectorAll('[data-x]'), function (n) { el[n.dataset.x] = n; });
    var timer = null, tick = null, speed = savedSpeed();

    function paintSpeed() {
      el.speed.innerHTML = '<span class="spl">Velocidad</span>' + SPEEDS.map(function (s) {
        return '<button type="button" class="spb' + (s.ms === speed ? ' on' : '') +
          '" data-ms="' + s.ms + '">' + s.label + '</button>';
      }).join('');
    }
    el.speed.onclick = function (e) {
      var b = e.target;
      while (b && b !== el.speed && !b.getAttribute('data-ms')) b = b.parentNode;
      if (!b || b === el.speed) return;
      speed = +b.getAttribute('data-ms');
      try { localStorage.setItem('simufut.speed', speed); } catch (_) { }
      paintSpeed();
      if (timer && tick) { clearInterval(timer); timer = setInterval(tick, speed); }
    };
    paintSpeed();

    /* Hasta qué minuto se ha narrado: los cambios posteriores todavía no
       han pasado y no se pintan. */
    var minutoActual = 0;

    function lineup(node, t, done, hasta) {
      var st = Engine.strengths(t, 0);
      var tope = hasta == null ? 999 : hasta;
      /* quién entró y quién salió, con su minuto */
      var sale = {}, entra = {};
      (t.subsLog || []).forEach(function (c) {
        if (c.min > tope) return;
        sale[c.out] = c.min;
        entra[c.in] = c.min;
      });

      function row(p) {
        var ev = '';
        for (var i = 0; i < (p.goals || 0); i++) ev += '⚽';
        if (p.yellow === 1) ev += '🟨';
        if (p.red) ev += '🟥';
        if (p.assists) ev += ' ' + '🅰'.repeat(p.assists);
        /* uno puede entrar y volver a salir: se muestran las dos flechas */
        var cambio = '';
        if (entra[p.name] != null) {
          cambio += '<span class="camb dentro" title="Entró en el minuto ' + entra[p.name] + '">' +
            '<i>&#8594;</i>' + entra[p.name] + "'" + '</span>';
        }
        if (sale[p.name] != null) {
          cambio += '<span class="camb fuera" title="Sustituido en el minuto ' + sale[p.name] + '">' +
            '<i>&#8592;</i>' + sale[p.name] + "'" + '</span>';
        }
        return '<div class="pl' + (sale[p.name] != null ? ' out' : '') +
          (entra[p.name] != null && sale[p.name] == null ? ' in' : '') + '"><span class="pos">' + p.pos + '</span>' +
          '<span class="nm">' + esc(p.name) + '</span>' + cambio +
          '<span class="ev">' + ev + '</span>' +
          '<span class="rt ' + ratClass(p.rat) + '">' + p.rat + '</span></div>';
      }
      node.innerHTML = '<h3>' + esc(t.name) + '<small>ATA ' + Math.round(st.att) + ' · MED ' + Math.round(st.mid) +
        ' · DEF ' + Math.round(st.def) + '</small></h3>' +
        '<div class="plist">' + t.players.slice(0, 11).map(row).join('') +
        '<div class="bench-title">Banco</div>' + t.players.slice(11).map(row).join('') + '</div>';
    }
    /* repinta las dos alineaciones hasta el minuto que se está narrando */
    function pintaAlineaciones(res, hasta) {
      lineup(el.hl, res.home, true, hasta);
      lineup(el.al, res.away, true, hasta);
    }

    function stats(s) {
      var rows = [
        ['Posesión', s.poss[0] + '%', s.poss[1] + '%', s.poss[0], s.poss[1]],
        ['Remates', s.shots[0], s.shots[1], s.shots[0], s.shots[1]],
        ['A puerta', s.sot[0], s.sot[1], s.sot[0], s.sot[1]],
        ['xG', (s.xg[0] || 0).toFixed(1), (s.xg[1] || 0).toFixed(1), s.xg[0], s.xg[1]],
        ['Córners', s.corners[0], s.corners[1], s.corners[0], s.corners[1]],
        ['Faltas', s.fouls[0], s.fouls[1], s.fouls[0], s.fouls[1]]
      ];
      el.stats.innerHTML = rows.map(function (r) {
        var a = +r[3] || 0, b = +r[4] || 0, tot = a + b || 1;
        return '<div class="st-row"><div class="st-head"><b>' + r[1] + '</b>' + r[0] + '<b>' + r[2] + '</b></div>' +
          '<div class="bar"><i style="width:' + (a / tot * 100) + '%"></i><i style="width:' + (b / tot * 100) + '%"></i></div></div>';
      }).join('');
    }

    function show(res, opts) {
      opts = opts || {};
      stop();
      el.hn.textContent = res.home.name; el.an.textContent = res.away.name;
      if (el.hc) el.hc.innerHTML = Crest.html(res.home.src || { n: res.home.name, s: res.home.short, c1: res.home.c1, c2: res.home.c2 }, 72);
      if (el.ac) el.ac.innerHTML = Crest.html(res.away.src || { n: res.away.name, s: res.away.short, c1: res.away.c1, c2: res.away.c2 }, 72);
      el.hg.textContent = 0; el.ag.textContent = 0;
      el.hs.textContent = ''; el.as.textContent = '';
      el.feed.innerHTML = ''; el.clock.textContent = "0'"; el.status.textContent = '';
      el.close.innerHTML = '';
      minutoActual = 0;
      pintaAlineaciones(res, 0);
      stats({ shots: [0, 0], sot: [0, 0], poss: [50, 50], corners: [0, 0], fouls: [0, 0], xg: [0, 0] });

      var maxMin = res.events.reduce(function (m, e) { return Math.max(m, e.min); }, 90);
      var g = [0, 0], sc = { home: [], away: [] }, byMin = {};
      res.events.forEach(function (e) { (byMin[e.min] = byMin[e.min] || []).push(e); });

      function push(e) {
        if (e.type === 'goal') {
          var i = e.side === 'home' ? 0 : 1;
          g[i]++;
          (e.side === 'home' ? el.hg : el.ag).textContent = g[i];
          sc[e.side].push('⚽ ' + e.scorer + ' ' + e.min + "'");
          (e.side === 'home' ? el.hs : el.as).textContent = sc[e.side].join('\n');
        }
        if (e.type === 'sub') pintaAlineaciones(res, Math.max(minutoActual, e.min));
        if (!e.text) return;
        var cls = { goal: 'ev-goal', yellow: 'ev-yellow', red: 'ev-red', big: 'ev-big', sub: 'ev-sub', info: 'ev-info', injury: 'ev-sub' }[e.type] || '';
        var d = document.createElement('div');
        d.className = 'ev-line ' + cls;
        d.innerHTML = '<span class="min">' + (e.min ? e.min + "'" : '') + '</span><span>' + esc(e.text) + '</span>';
        el.feed.appendChild(d); el.feed.scrollTop = el.feed.scrollHeight;
      }
      function flush(m) {
        minutoActual = m;
        (byMin[m] || []).forEach(push);
        el.clock.textContent = m + "'";
        /* las estadísticas van con el partido, no al final */
        var f = res.linea && res.linea[m];
        if (f) stats(f);
      }
      function finish() {
        el.status.textContent = res.pens
          ? (res.aggNote ? res.aggNote + ' · ' : '') +
          'Penales ' + res.pens.a + '-' + res.pens.b + ' · gana ' +
          (res.winner === 'home' ? res.home.name : res.away.name)
          : (res.aet ? 'Tras la prórroga' : (res.aggNote ? res.aggNote : 'Final'));
        stats({
          shots: [res.home.st.shots, res.away.st.shots], sot: [res.home.st.sot, res.away.st.sot],
          poss: [res.home.st.poss, res.away.st.poss], corners: [res.home.st.corners, res.away.st.corners],
          fouls: [res.home.st.fouls, res.away.st.fouls], xg: [res.home.st.xg, res.away.st.xg]
        });
        pintaAlineaciones(res, 999);
        /* al acabar, una salida clara: cierra la ficha del partido */
        if (opts.onClose) {
          el.close.innerHTML = '<button type="button" class="mini closebtn">Finalizar partido</button>';
          el.close.firstChild.onclick = function () { stop(); opts.onClose(); };
        }
        if (opts.onEnd) opts.onEnd();
      }

      el.speed.style.display = opts.live ? '' : 'none';
      if (!opts.live) { for (var m = 0; m <= maxMin; m++) flush(m); finish(); return; }
      var cur = 0;
      if (opts.speed) speed = opts.speed;
      paintSpeed();
      if (opts.onStart) opts.onStart();
      tick = function () {
        flush(cur++);
        if (cur > maxMin) { stop(); finish(); }
      };
      timer = setInterval(tick, speed);
    }

    function stop() { if (timer) { clearInterval(timer); timer = null; } }
    function running() { return !!timer; }

    return { show: show, stop: stop, running: running, el: el, root: root };
  }

  global.MatchView = { create: create };
})(window);
