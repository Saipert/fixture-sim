/* =========================================================================
   FICHA DE CLUB
   Se abre al pulsar el escudo de cualquier equipo en cualquier pantalla.
   Muestra la plantilla, su posición en la liga y, si hay una carrera en
   marcha, los resultados y los próximos partidos de su temporada.
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

  /* índice uid -> equipo, para resolver los clics en los escudos */
  var INDEX = null;
  function index() {
    if (INDEX) return INDEX;
    INDEX = {};
    var LG = global.LEAGUES || {};
    Object.keys(LG).forEach(function (id) {
      (LG[id].teams || []).forEach(function (t) { if (t.uid) INDEX[t.uid] = t; });
    });
    return INDEX;
  }
  function byUid(uid) { return index()[uid] || null; }
  function forget() { INDEX = null; }

  /* ---------- modal ---------- */
  var ov = null, el = {};
  function build() {
    if (ov) return;
    ov = document.createElement('div');
    ov.className = 'pf-ov hidden';
    ov.innerHTML =
      '<div class="pf-box" role="dialog" aria-modal="true">' +
      '<div class="pf-head" data-p="head"></div>' +
      '<div class="pf-body" data-p="body"></div>' +
      '</div>';
    document.body.appendChild(ov);
    Array.prototype.forEach.call(ov.querySelectorAll('[data-p]'), function (n) { el[n.dataset.p] = n; });
    ov.addEventListener('click', function (e) { if (e.target === ov) close(); });
    document.addEventListener('keydown', function (e) {
      if (ov && !ov.classList.contains('hidden') && e.key === 'Escape') close();
    });
  }
  function close() { if (ov) ov.classList.add('hidden'); }

  /* ---------- bloques ---------- */
  function squadHTML(t) {
    return '<table class="pf-squad"><thead><tr><th class="num">#</th><th>Jugador</th><th>Pos</th>' +
      '<th class="num">Edad</th><th class="num">Val</th></tr></thead><tbody>' +
      t.p.map(function (p, i) {
        return '<tr' + (i > 10 ? ' class="sub"' : '') + '><td class="num">' + (i < 11 ? i + 1 : '') + '</td>' +
          '<td>' + (window.Nac ? Nac.bandera(Nac.de(p, t), 12) : '') + esc(p[0]) +
          '</td>' +
          '<td class="pos">' + esc(p[1]) + '</td><td class="num">' + p[3] + '</td>' +
          '<td class="num"><span class="rt ' + ratClass(p[2]) + '">' + p[2] + '</span></td></tr>';
      }).join('') + '</tbody></table>';
  }

  /* clasificación: el equipo y sus vecinos */
  function tableHTML(t) {
    var st = global.World && World.state;
    if (!st || !st.leagues || !st.leagues[t.leagueId]) return null;
    var lg = st.leagues[t.leagueId];
    var rows = Comp.sortTable(lg.table);
    var pos = rows.findIndex(function (r) { return r.t === t; });
    if (pos < 0) return null;
    var from = Math.max(0, pos - 3), to = Math.min(rows.length, pos + 4);
    return '<h4 class="pf-h">' + esc(lg.name) + ' · ' + (pos + 1) + 'º de ' + rows.length + '</h4>' +
      '<table class="pf-tab"><thead><tr><th class="num">#</th><th>Equipo</th><th class="num">PJ</th>' +
      '<th class="num">DG</th><th class="num">Pts</th></tr></thead><tbody>' +
      rows.slice(from, to).map(function (r, i) {
        var n = from + i;
        return '<tr' + (r.t === t ? ' class="me"' : '') + '><td class="num">' + (n + 1) + '</td>' +
          '<td><div class="tname">' + crest(r.t, 18) + '<span>' + esc(r.t.n) + '</span></div></td>' +
          '<td class="num">' + r.pj + '</td>' +
          '<td class="num">' + (r.gf - r.gc > 0 ? '+' : '') + (r.gf - r.gc) + '</td>' +
          '<td class="num"><b>' + r.pts + '</b></td></tr>';
      }).join('') + '</tbody></table>';
  }

  function calRow(e, t) {
    var cls = 'pf-row', rs = 'vs';
    if (e.res) {
      var my = e.res.h === t ? e.res.s[0] : e.res.s[1];
      var op = e.res.h === t ? e.res.s[1] : e.res.s[0];
      cls += my > op ? ' w' : my === op ? ' d' : ' l';
      rs = e.res.s[0] + '-' + e.res.s[1];
    }
    return '<div class="' + cls + '"><span class="cmp">' + esc(e.round || '') + '</span>' +
      '<span class="opp">' + (e.home ? '' : '@ ') + crest(e.opp, 20) +
      '<em>' + esc(e.opp.n) + '</em></span><b>' + rs + '</b></div>';
  }

  function seasonHTML(t) {
    if (!global.Career || !Career.started()) return null;
    var st = global.World && World.state;
    if (!st || !st.leagues || !st.leagues[t.leagueId]) return null;
    var cal;
    try { cal = Career.calendarFor(t); } catch (e) { return null; }
    if (!cal || !cal.length) return null;
    var played = cal.filter(function (e) { return e.res; });
    var pend = cal.filter(function (e) { return !e.res; });
    return '<div class="pf-two">' +
      '<div><h4 class="pf-h">Últimos resultados</h4>' +
      (played.length ? played.slice(-8).reverse().map(function (e) { return calRow(e, t); }).join('')
        : '<p class="hint">Todavía no ha jugado.</p>') + '</div>' +
      '<div><h4 class="pf-h">Próximos partidos</h4>' +
      (pend.length ? pend.slice(0, 8).map(function (e) { return calRow(e, t); }).join('')
        : '<p class="hint">No le quedan partidos.</p>') + '</div></div>';
  }

  /* ---------- abrir ---------- */
  function open(t) {
    if (!t || !t.p) return;
    build();
    var stg = Engine.strengths(Engine.buildTeam(t, 'bal'), 0);
    el.head.innerHTML = crest(t, 54) +
      '<div class="pf-id"><b>' + esc(t.n) + '</b><small>' + esc(t.league || '') +
      ' · ' + t.p.length + ' jugadores</small></div>' +
      '<div class="pf-st"><span><i>ATA</i>' + Math.round(stg.att) + '</span>' +
      '<span><i>MED</i>' + Math.round(stg.mid) + '</span>' +
      '<span><i>DEF</i>' + Math.round(stg.def) + '</span>' +
      '<span class="big"><i>GLOBAL</i>' + (t.ovr || Engine.overall(t)) + '</span>' +
      Stars.html(t.ovr || Engine.overall(t), 'big') + '</div>' +
      '<button class="pf-close" type="button">✕</button>';
    el.head.querySelector('.pf-close').onclick = close;

    var tab = tableHTML(t), season = seasonHTML(t);
    el.body.innerHTML = '<div class="pf-grid">' +
      '<div class="pf-col"><h4 class="pf-h">Plantilla</h4>' + squadHTML(t) + '</div>' +
      '<div class="pf-col">' +
      (tab || '<p class="hint">Empieza una carrera para ver su clasificación y su calendario.</p>') +
      (season || '') + '</div></div>';
    ov.classList.remove('hidden');
  }

  /* ---------- clic en cualquier escudo ---------- */
  document.addEventListener('click', function (e) {
    var n = e.target;
    while (n && n !== document.body && !(n.getAttribute && n.getAttribute('data-tid'))) n = n.parentNode;
    if (!n || n === document.body) return;
    /* dentro de un control (selector de equipo, banquillo, tarjeta de menú…)
       manda el control, no la ficha */
    var c = n;
    while (c && c !== document.body) {
      if (c.tagName === 'BUTTON' || c.tagName === 'A' ||
        (c.className && /\b(pickbtn|pk-tm|pk-lg|mcard|bp|slot|team-badge)\b/.test(c.className))) return;
      c = c.parentNode;
    }
    var t = byUid(n.getAttribute('data-tid'));
    if (t) { e.preventDefault(); open(t); }
  });

  global.Profile = { open: open, close: close, byUid: byUid, forget: forget };
})(window);
