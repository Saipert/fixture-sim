/* =========================================================================
   SELECTOR VISUAL DE LIGAS Y EQUIPOS
   Sustituye a los desplegables: primero el continente, luego la liga con su
   logo y por último el club con su escudo. Con buscador global.
     Picker.team({ title, nations, onPick })   -> devuelve el equipo
     Picker.league({ title, onPick })          -> devuelve el id de liga
   ========================================================================= */
(function (global) {
  'use strict';

  var esc = function (s) {
    return String(s == null ? '' : s).replace(/&/g, '&amp;').replace(/</g, '&lt;')
      .replace(/>/g, '&gt;').replace(/"/g, '&quot;');
  };
  var NAT = '__nations__';

  /* Con tan pocas ligas fuera de Europa, seis pestañas dejaban tres o cuatro
     equipos en cada una. Se agrupan en zonas. */
  var CONFS = [
    { id: 'UEFA', label: 'Europa', confs: ['UEFA'] },
    { id: 'AMERICA', label: 'América', confs: ['CONMEBOL', 'CONCACAF'] },
    { id: 'RESTO', label: 'Resto del mundo', confs: ['AFC', 'CAF', 'OFC'] }
  ];
  /* de qué pestaña es una confederación */
  function zonaDe(conf) {
    for (var i = 0; i < CONFS.length; i++) {
      if (CONFS[i].confs.indexOf(conf) >= 0) return CONFS[i].id;
    }
    return null;
  }
  /* ¿esta liga cae en la pestaña abierta? */
  function enZona(c, zona) {
    if (zona === 'OTRAS') return !c.conf;
    return zonaDe(c.conf) === zona;
  }

  var COMB = new RegExp('[\u0300-\u036f]', 'g');
  function norm(s) {
    s = String(s);
    return s.normalize ? s.normalize('NFD').replace(COMB, '').toLowerCase() : s.toLowerCase();
  }

  /* bandera real del país; si no hay archivo, la dibujada */
  function flagHTML(cid, size) {
    var f = cid && global.COUNTRY_FLAG_FILE ? global.COUNTRY_FLAG_FILE[cid] : null;
    if (f) {
      return '<img class="cflag" src="logos/paises/' + f + '.png" alt="" ' +
        'height="' + Math.round((size || 20) * 0.75) + '" onerror="this.remove()">';
    }
    var svg = global.Flags && cid ? global.Flags.svg(String(cid).toUpperCase(), size || 20) : null;
    return svg || '<span class="pk-globe">🌐</span>';
  }
  /* ---------- catálogo: liga -> país, confederación, logo ---------- */
  function catalog() {
    var LG = global.LEAGUES || {}, out = [], seen = {};
    (global.COUNTRIES || []).forEach(function (c) {
      (c.leagues || []).forEach(function (lid) {
        if (!LG[lid] || seen[lid]) return;
        seen[lid] = 1;
        out.push({
          id: lid, lg: LG[lid], name: LG[lid].name,
          country: c.name, cid: c.id, conf: c.conf,
          tier: LG[lid].tier || 1,
          logo: (global.LEAGUE_LOGO || {})[lid] || null
        });
      });
    });
    Object.keys(LG).forEach(function (lid) {
      if (seen[lid] || lid === NAT) return;
      seen[lid] = 1;
      out.push({
        id: lid, lg: LG[lid], name: LG[lid].name, country: LG[lid].country || '',
        cid: null, conf: null, tier: LG[lid].tier || 1,
        logo: (global.LEAGUE_LOGO || {})[lid] || null
      });
    });
    return out;
  }

  /* en la UEFA manda el coeficiente de país; en el resto, alfabético */
  function byRank(a, b) {
    var R = global.UEFA_RANK || {};
    var ra = R[a.cid], rb = R[b.cid];
    if (ra && rb && ra !== rb) return ra - rb;
    if (ra && !rb) return -1;
    if (!ra && rb) return 1;
    if (a.country !== b.country) return a.country.localeCompare(b.country, 'es');
    return a.tier - b.tier;
  }

  /* ---------- modal ---------- */
  var ov = null, el = {};
  function build() {
    if (ov) return;
    ov = document.createElement('div');
    ov.className = 'pk-ov hidden';
    ov.innerHTML =
      '<div class="pk-box" role="dialog" aria-modal="true">' +
      '<div class="pk-head">' +
      '<button class="pk-back" data-x="back" title="Atrás">‹</button>' +
      '<div class="pk-titles"><b data-x="title">Elegir equipo</b><small data-x="crumb"></small></div>' +
      '<input type="search" class="pk-search" data-x="q" placeholder="Buscar club, selección o liga…">' +
      '<button class="pk-close" data-x="close" title="Cerrar">✕</button>' +
      '</div>' +
      '<div class="pk-tabs" data-x="tabs"></div>' +
      '<div class="pk-body" data-x="body"></div>' +
      '</div>';
    document.body.appendChild(ov);
    Array.prototype.forEach.call(ov.querySelectorAll('[data-x]'), function (n) { el[n.dataset.x] = n; });
    el.close.onclick = close;
    ov.addEventListener('click', function (e) { if (e.target === ov) close(); });
    document.addEventListener('keydown', function (e) {
      if (!ov || ov.classList.contains('hidden')) return;
      if (e.key === 'Escape') close();
    });
  }
  function close() { if (ov) ov.classList.add('hidden'); }

  /* ---------- estado de la sesión abierta ---------- */
  var S = null;

  function open(opts) {
    build();
    S = {
      mode: opts.mode || 'team',
      nations: opts.nations !== false,
      onlyNations: opts.nations === 'only',
      filterLeague: opts.filterLeague || null,
      filterTeam: opts.filterTeam || null,
      onPick: opts.onPick || function () { },
      cat: catalog(),
      conf: opts.conf || (opts.nations === 'only' ? NAT : 'UEFA'),
      league: null,
      q: ''
    };
    if (S.filterLeague) S.cat = S.cat.filter(S.filterLeague);
    el.title.textContent = opts.title || (S.mode === 'league' ? 'Elegir liga' : 'Elegir equipo');
    el.q.value = '';
    ov.classList.remove('hidden');
    paintTabs();
    paint();
    setTimeout(function () { el.q.focus(); }, 30);
  }

  function paintTabs() {
    var tabs = CONFS.filter(function (c) {
      return S.cat.some(function (x) { return enZona(x, c.id); });
    }).map(function (c) {
      return { id: c.id, label: c.label };
    });
    if (S.cat.some(function (x) { return !x.conf; })) tabs.push({ id: 'OTRAS', label: 'Otras' });
    if (S.nations && (global.LEAGUES || {})[NAT] && S.mode === 'team') tabs.push({ id: NAT, label: 'Selecciones' });
    if (S.onlyNations) tabs = [{ id: NAT, label: 'Selecciones' }];
    el.tabs.innerHTML = tabs.map(function (t) {
      return '<button class="pk-tab' + (t.id === S.conf ? ' on' : '') + '" data-c="' + t.id + '">' +
        esc(t.label) + '</button>';
    }).join('');
    el.tabs.onclick = function (e) {
      var b = e.target.closest ? e.target.closest('[data-c]') : null;
      if (!b) return;
      S.conf = b.getAttribute('data-c'); S.league = null; S.q = ''; el.q.value = '';
      paintTabs(); paint();
    };
  }

  function crumbText() {
    if (S.league) {
      var c = S.cat.filter(function (x) { return x.id === S.league; })[0];
      return c ? c.country + ' · ' + c.name : '';
    }
    return S.mode === 'league' ? 'Elige una competición' : 'Elige primero la liga';
  }

  /* Con logo: placa clara para que se vean también los logos oscuros.
     Sin logo (ligas para las que no hay archivo): la bandera del país ocupa
     el hueco, en vez de dejar una placa en blanco. */
  function leagueCard(c) {
    var inner = c.logo
      ? '<img src="' + esc(c.logo) + '" alt="" loading="lazy" data-lgimg>' +
      '<span class="pk-lg-flag">' + flagHTML(c.cid, 22) + '</span>'
      : '<span class="pk-lg-only">' + flagHTML(c.cid, 34) + '</span>';
    return '<button class="pk-lg" data-l="' + esc(c.id) + '">' +
      '<span class="pk-lg-logo' + (c.logo ? '' : ' noimg') + '">' + inner + '</span>' +
      '<span class="pk-lg-txt"><b>' + esc(c.name) + '</b>' +
      '<small>' + esc(c.country || '') + (c.tier > 1 ? ' · ' + c.tier + 'ª división' : '') +
      ' · ' + c.lg.teams.length + ' equipos</small></span></button>';
  }
  function teamCard(t, idx) {
    return '<button class="pk-tm" data-t="' + idx + '" title="' + esc(t.n) + '">' +
      '<span class="pk-tm-crest">' + Crest.html(t, 38) + '</span>' +
      '<b>' + esc(t.n) + '</b><small>' + (t.ovr || Engine.overall(t)) + '</small>' +
      Stars.html(t.ovr || Engine.overall(t)) + '</button>';
  }


  /* si el archivo del logo falta, la tarjeta se queda con la bandera */
  function watchLogos(root) {
    Array.prototype.forEach.call(root.querySelectorAll("img[data-lgimg]"), function (im) {
      im.onerror = function () {
        var box = im.parentNode;
        if (box) box.classList.add("noimg");
        im.remove();
      };
    });
  }

  var shown = [];   // equipos mostrados, para resolver el click

  function paint() {
    el.crumb.textContent = crumbText();
    el.back.style.visibility = S.league ? 'visible' : 'hidden';
    el.back.onclick = function () { S.league = null; paint(); };

    var q = norm(S.q.trim());
    shown = [];

    /* --- buscador global --- */
    if (q.length >= 2) {
      /* si sólo se buscan selecciones, los clubes no entran ni en el buscador */
      var pools = S.onlyNations ? [] : S.cat.slice();
      if (S.nations && (global.LEAGUES || {})[NAT] && S.mode === 'team') {
        pools.push({ id: NAT, lg: global.LEAGUES[NAT], name: 'Selecciones', country: '', cid: null, conf: null, tier: 1, logo: null });
      }
      var lgHits = pools.filter(function (c) { return norm(c.name + ' ' + c.country).indexOf(q) >= 0; }).slice(0, 12);
      var html = '';
      if (lgHits.length) {
        html += '<h5 class="pk-sec">Ligas</h5><div class="pk-lgs">' + lgHits.map(leagueCard).join('') + '</div>';
      }
      if (S.mode === 'team') {
        pools.forEach(function (c) {
          c.lg.teams.forEach(function (t) {
            if (shown.length >= 160) return;
            if (S.filterTeam && !S.filterTeam(t)) return;
            if (norm(t.n).indexOf(q) >= 0) shown.push(t);
          });
        });
        html += '<h5 class="pk-sec">Equipos (' + shown.length + ')</h5><div class="pk-tms">' +
          (shown.length ? shown.map(teamCard).join('') : '<p class="hint">Nada que coincida.</p>') + '</div>';
      }
      el.body.innerHTML = html;
      watchLogos(el.body);
    bindBody();
      return;
    }

    /* --- lista de equipos de una liga --- */
    if (S.league && S.mode === 'team') {
      var lg = (global.LEAGUES || {})[S.league];
      shown = lg.teams.slice();
      if (S.filterTeam) shown = shown.filter(S.filterTeam);
      shown.sort(function (a, b) { return (b.ovr || 0) - (a.ovr || 0); });
      el.body.innerHTML = '<div class="pk-tms">' + shown.map(teamCard).join('') + '</div>';
      watchLogos(el.body);
    bindBody();
      return;
    }

    /* --- selecciones --- */
    if (S.conf === NAT) {
      var nat = (global.LEAGUES || {})[NAT];
      shown = nat ? nat.teams.slice() : [];
      if (S.filterTeam) shown = shown.filter(S.filterTeam);
      shown.sort(function (a, b) { return (b.ovr || 0) - (a.ovr || 0); });
      el.body.innerHTML = '<div class="pk-tms">' + shown.map(teamCard).join('') + '</div>';
      watchLogos(el.body);
    bindBody();
      return;
    }

    /* --- rejilla de ligas --- */
    var list = S.cat.filter(function (c) { return enZona(c, S.conf); }).sort(byRank);
    el.body.innerHTML = list.length
      ? '<div class="pk-lgs">' + list.map(leagueCard).join('') + '</div>'
      : '<p class="hint">No hay ligas en esta zona.</p>';
    watchLogos(el.body);
    bindBody();
  }

  function bindBody() {
    el.body.onclick = function (e) {
      var n = e.target;
      while (n && n !== el.body && !n.getAttribute('data-l') && !n.getAttribute('data-t')) n = n.parentNode;
      if (!n || n === el.body) return;
      var lid = n.getAttribute('data-l');
      if (lid) {
        if (S.mode === 'league') { close(); S.onPick(lid); return; }
        S.league = lid; S.q = ''; el.q.value = '';
        var c = S.cat.filter(function (x) { return x.id === lid; })[0];
        if (c && c.conf) { S.conf = zonaDe(c.conf) || S.conf; paintTabs(); }
        else if (lid === NAT) { S.conf = NAT; S.league = null; paintTabs(); }
        paint();
        return;
      }
      var t = shown[+n.getAttribute('data-t')];
      if (t) { close(); S.onPick(t); }
    };
  }

  /* buscador */
  function bindSearch() {
    el.q.oninput = function () { S.q = el.q.value; paint(); };
  }

  global.Picker = {
    team: function (o) { o = o || {}; o.mode = 'team'; build(); open(o); bindSearch(); },
    league: function (o) { o = o || {}; o.mode = 'league'; build(); open(o); bindSearch(); },
    close: close,
    /* piezas sueltas: el modo carrera pinta la misma rejilla sin modal */
    confs: CONFS, zonaDe: zonaDe, enZona: enZona,
    catalog: catalog,
    norm: norm,
    byRank: byRank,
    leagueCard: leagueCard,
    teamCard: teamCard,
    watchLogos: watchLogos
  };
})(window);
