/* =========================================================================
   INTERFAZ
   ========================================================================= */
(function () {
  'use strict';

  var $ = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };
  var esc = function (s) { return String(s == null ? '' : s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;'); };
  var NAT = '__nations__';

  /* =====================================================================
     ARRANQUE
     ===================================================================== */
  var LG = window.LEAGUES = window.LEAGUES || {};
  if (window.NATIONS && window.NATIONS.length) {
    /* pool por defecto: cada selección puede llevar el suyo y el generador
       completa la convocatoria con nombres de esa región */
    LG[NAT] = { id: NAT, name: 'Selecciones', country: '', isNations: true,
      pool: 'en', squadSize: 18, teams: window.NATIONS };
  }
  /* Plantillas reales de la temporada en curso. Van antes del relleno para
     que Fill sólo complete lo que de verdad falte. */
  if (window.PLANTILLAS_2627) {
    Object.keys(LG).forEach(function (id) {
      if (id === NAT) return;
      LG[id].teams.forEach(function (t) {
        var p = window.PLANTILLAS_2627[id + '|' + t.n];
        if (p && p.length >= 11) t.p = p;
      });
    });
  }
  if (window.Fill) Fill.run(LG);
  Store.apply(LG);

  var ALL = [];
  Object.keys(LG).forEach(function (id) {
    var lg = LG[id];
    lg.id = id;
    lg.teams.sort(function (a, b) { return a.n.localeCompare(b.n, 'es'); });
    lg.teams.forEach(function (t) {
      t.leagueId = id;
      t.league = lg.name;
      if (lg.isNations) t.isNation = true;
      t.ovr = Engine.overall(t);
      ALL.push(t);
    });
  });

  if (window.SaveGame) SaveGame.assignUids(LG);

  /* cada jugador con su país: hace falta para las banderas y para el
     modo carrera de jugador */
  if (window.Nac) { Nac.arranca(); Nac.repartePorTodos(); }

  var LEAGUE_IDS = Object.keys(LG).filter(function (id) { return id !== NAT; });
  var COUNTRIES = (window.COUNTRIES || []).filter(function (c) {
    c.have = c.leagues.filter(function (l) { return LG[l]; });
    return c.have.length;
  });
  var NATIONS = LG[NAT] ? LG[NAT].teams : [];

  function refreshOvr(t) { t.ovr = Engine.overall(t); }
  /* el uid viaja en el escudo: al pulsarlo se abre la ficha del club */
  function crestOf(t, s) {
    return '<span class="cw' + (t && t.uid ? ' tclick' : '') + '"' +
      (t && t.uid ? ' data-tid="' + t.uid + '" title="' + esc(t.n) + '"' : '') +
      ' style="width:' + s + 'px;height:' + s + 'px">' + Crest.html(t, s) + '</span>';
  }
  function ratClass(r) { return r >= 86 ? 'r-elite' : r >= 80 ? 'r-great' : ''; }
  function teamsOfCountry(c) {
    var out = [];
    c.have.forEach(function (l) { out = out.concat(LG[l].teams); });
    return out;
  }
  function countryOfLeague(lid) {
    for (var i = 0; i < COUNTRIES.length; i++) if (COUNTRIES[i].have.indexOf(lid) >= 0) return COUNTRIES[i];
    return null;
  }


  /* =====================================================================
     NAVEGACIÓN
     ===================================================================== */
  var TITLES = {
    home: '', match: 'Partido rápido', world: 'Modo carrera',
    domestic: 'Ligas y copas nacionales', contin: 'Competiciones continentales',
    nations: 'Selecciones', builder: 'Crear torneo', editor: 'Editor', squads: 'Plantillas'
  };
  /* de dónde venimos, para la flecha de atrás */
  var vista = 'home', historia = [], ganchos = {};

  function go(v, sinHistoria) {
    if (v === vista) return;
    /* el modo carrera vive en su propio mundo: al entrar se recupera el de
       la partida y al salir se devuelve el original a los demás modos */
    if (window.Career) {
      if (v === 'world' && Career.preparaMundo) Career.preparaMundo();
      else if (vista === 'world' && Career.sacaMundo) Career.sacaMundo();
    }
    if (!sinHistoria && vista) historia.push(vista);
    vista = v;
    $$('.view').forEach(function (x) { x.classList.remove('active'); });
    $('#view-' + v).classList.add('active');
    $('#crumb').innerHTML = v === 'home' ? '' : '<span>›</span><b>' + TITLES[v] + '</b>';
    document.body.classList.toggle('career', v === 'world');
    /* el tinte del club sólo vive dentro del modo carrera */
    if (v !== 'world') document.body.classList.remove('conclub');
    document.body.classList.toggle('menu', v === 'home');
    window.scrollTo({ top: 0, behavior: 'smooth' });
    pintaNav();
  }

  /* Primero deja que la propia pantalla deshaga su último paso (por ejemplo,
     en el selector de club: del listado de equipos vuelve al de ligas). Si no
     tiene nada que deshacer, se sale a la pantalla anterior. */
  function atras() {
    var g = ganchos[vista];
    if (g && g()) { pintaNav(); return; }
    go(historia.pop() || 'home', true);
  }
  function pintaNav() {
    var g = ganchos[vista];
    var hay = vista !== 'home' || historia.length || (g && g(true));
    $('#navBtns').classList.toggle('oculta', !hay);
    $('#btnMenu').classList.toggle('hidden', vista === 'home');
  }

  $$('.mcard').forEach(function (b) { b.onclick = function () { go(b.dataset.go); }; });
  /* la casita y el escudo van al menú y borran el rastro: desde el menú no
     hay nada «atrás» */
  function alMenu() { go('home', true); historia = []; pintaNav(); }
  $('#btnHome').onclick = alMenu;
  $('#btnMenu').onclick = alMenu;
  $('#btnBack').onclick = atras;
  document.addEventListener('keydown', function (e) {
    if (e.altKey && e.key === 'ArrowLeft') { e.preventDefault(); atras(); }
  });

  /* las pantallas con pasos internos se apuntan aquí:
     el gancho devuelve true si se ha comido el «atrás»; llamado con (true)
     sólo responde si tendría algo que deshacer, sin tocar nada */
  window.Nav = {
    go: go, atras: atras, refrescar: pintaNav,
    alVolver: function (v, fn) { ganchos[v] = fn; pintaNav(); }
  };
  document.body.classList.add('menu');     /* se arranca en el menú */
  pintaNav();

  /* =====================================================================
     SELECTORES REUTILIZABLES
     ===================================================================== */
  function poolOptions() {
    var out = [];
    if (LG[NAT]) out.push('<option value="' + NAT + '">★ Selecciones nacionales</option>');
    COUNTRIES.forEach(function (c) {
      c.have.forEach(function (l) {
        out.push('<option value="' + l + '">' + esc(c.flag + ' ' + LG[l].name) + '</option>');
      });
    });
    LEAGUE_IDS.forEach(function (l) {
      if (!countryOfLeague(l)) out.push('<option value="' + l + '">' + esc(LG[l].name) + '</option>');
    });
    return out.join('');
  }
  function fillTeams(sel, poolId, keep) {
    var teams = LG[poolId].teams;
    sel.innerHTML = teams.map(function (t, i) {
      return '<option value="' + i + '">' + esc(t.n) + ' (' + t.ovr + ')</option>';
    }).join('');
    if (keep != null && keep < teams.length) sel.value = keep;
  }


  /* botón que abre el menú visual y muestra el equipo elegido */
  function pickBtn(node, t, hint) {
    node.innerHTML = (t ? '<span class="pb-crest">' + Crest.html(t, 28) + '</span>' : '') +
      '<span class="pb-txt"><b>' + esc(t ? t.n : 'Elegir equipo') + '</b>' +
      '<small>' + esc(t ? (hint || t.league) : 'pulsa para abrir el menú') + '</small></span>' +
      '<span class="pb-ch">›</span>';
  }

  /* =====================================================================
     BLOQUES DE RESULTADO COMPARTIDOS
     ===================================================================== */
  function tableHTML(rows, opts) {
    opts = opts || {};
    var n = rows.length;
    var html = '<table><thead><tr><th class="num">#</th><th>Equipo</th><th class="num">PJ</th><th class="num">G</th>' +
      '<th class="num">E</th><th class="num">P</th><th class="num">GF</th><th class="num">GC</th><th class="num">DG</th>' +
      '<th class="num">Pts</th>' + (opts.form ? '<th>Últimos</th>' : '') + '</tr></thead><tbody>';
    rows.forEach(function (r, i) {
      var z = '';
      if (opts.ucl != null) {
        z = i < opts.ucl ? 'z1' : i < opts.ucl + 2 ? 'z2' : i < opts.ucl + 3 ? 'z3' : (opts.rel && i >= n - opts.rel ? 'zr' : '');
      }
      var me = opts.me && r.t === opts.me ? ' me' : '';
      html += '<tr class="' + z + me + '"><td class="num"><span class="pos-chip">' + (i + 1) + '</span></td>' +
        '<td><div class="tname">' + crestOf(r.t, 20) + '<span>' + esc(r.t.n) + '</span></div></td>' +
        '<td class="num">' + r.pj + '</td><td class="num">' + r.g + '</td><td class="num">' + r.e + '</td>' +
        '<td class="num">' + r.p + '</td><td class="num">' + r.gf + '</td><td class="num">' + r.gc + '</td>' +
        '<td class="num">' + (r.gf - r.gc > 0 ? '+' : '') + (r.gf - r.gc) + '</td><td class="num"><b>' + r.pts + '</b></td>';
      if (opts.form) {
        html += '<td class="form">' + r.form.slice(-5).map(function (f) { return '<span class="' + f + '">' + f + '</span>'; }).join('') + '</td>';
      }
      html += '</tr>';
    });
    return html + '</tbody></table>';
  }

  /* El futbolista de la carrera se reconoce de un vistazo en cualquier
     tabla de goleadores. */
  function esMiFutbolista(r) {
    if (!window.Carrera || !Carrera.activa || !Carrera.activa()) return false;
    var j = Carrera.jugador();
    if (!j || !j.p) return false;
    if (r.n !== j.p[0]) return false;
    return !r.t || !j.club || r.t === j.club.n;
  }

  function scorersHTML(list) {
    if (!list.length) return '<p class="hint">Sin datos todavía.</p>';
    return '<table><thead><tr><th class="num">#</th><th>Jugador</th><th>Equipo</th><th class="num">G</th><th class="num">A</th></tr></thead><tbody>' +
      list.map(function (r, i) {
        return '<tr' + (esMiFutbolista(r) ? ' class="yo"' : '') +
          '><td class="num">' + (i + 1) + '</td><td>' + esc(r.n) + '</td>' +
          '<td style="color:var(--dim)">' + esc(r.t) + '</td><td class="num"><b>' + r.g + '</b></td>' +
          '<td class="num" style="color:var(--dim)">' + r.a + '</td></tr>';
      }).join('') + '</tbody></table>';
  }

  function roundsHTML(rounds) {
    return rounds.map(function (r) {
      return '<div class="round"><h4>Jornada ' + r.n + '</h4><div class="fx">' + r.r.map(function (m) {
        return '<div><span>' + esc(m.h.n) + '</span><b>' + m.s[0] + ' - ' + m.s[1] + '</b><span>' + esc(m.a.n) + '</span></div>';
      }).join('') + '</div></div>';
    }).join('');
  }

  function groupsHTML(groups, per, extra) {
    var bestSet = {};
    groups.forEach(function (g) {
      g.standings.forEach(function (r) { if (r.viaBest) bestSet[r.t.n] = 1; });
    });
    return '<div class="groups">' + groups.map(function (g) {
      return '<div class="gbox"><h4>' + esc(g.name) + '</h4><table><thead><tr><th class="num">#</th><th>Equipo</th>' +
        '<th class="num">PJ</th><th class="num">Pts</th><th class="num">DG</th></tr></thead><tbody>' +
        g.standings.map(function (r, i) {
          var cls = i < per ? 'q-yes' : (bestSet[r.t.n] ? 'q-best' : 'q-no');
          return '<tr class="' + cls + '"><td class="num">' + (i + 1) + '</td>' +
            '<td><div class="tname">' + crestOf(r.t, 18) + '<span>' + esc(r.t.n) + '</span></div></td>' +
            '<td class="num">' + r.pj + '</td><td class="num"><b>' + r.pts + '</b></td>' +
            '<td class="num">' + (r.gf - r.gc > 0 ? '+' : '') + (r.gf - r.gc) + '</td></tr>';
        }).join('') + '</tbody></table></div>';
    }).join('') + '</div>' +
      (extra ? '<p class="hint leg"><span class="sw sw-yes"></span> clasificados · incluye los ' + extra +
        ' mejores ' + (per + 1 === 3 ? 'terceros' : per + 1 === 2 ? 'segundos' : (per + 1) + 'º') + '</p>' : '');
  }

  function tieHTML(t) {
    if (t.bye) return '<div class="tie"><div class="row win"><span>' + crestOf(t.a, 18) + '<em>' + esc(t.a.n) + '</em></span><b>bye</b></div></div>';
    var sa, sb;
    if (t.two) { sa = t.agg[0]; sb = t.agg[1]; } else { sa = t.s[0]; sb = t.s[1]; }
    var extra = '';
    if (t.two) extra = '<div class="pens">' + t.legs[0][0] + '-' + t.legs[0][1] + ' · ' + t.legs[1][0] + '-' + t.legs[1][1] +
      (t.pens ? ' · penales ' + t.pens.a + '-' + t.pens.b : '') + '</div>';
    else if (t.pens) extra = '<div class="pens">penales ' + t.pens.a + '-' + t.pens.b + '</div>';
    else if (t.aet) extra = '<div class="pens">tras prórroga</div>';
    return '<div class="tie">' +
      '<div class="row ' + (t.w === t.a ? 'win' : '') + '"><span>' + crestOf(t.a, 18) + '<em>' + esc(t.a.n) + '</em></span><b>' + sa + '</b></div>' +
      '<div class="row ' + (t.w === t.b ? 'win' : '') + '"><span>' + crestOf(t.b, 18) + '<em>' + esc(t.b.n) + '</em></span><b>' + sb + '</b></div>' +
      extra + '</div>';
  }

  /* Cuadro simétrico, igual que en el modo carrera: mitad izquierda,
     mitad derecha y la final en el centro. Sin rondas previas. */
  function bracketHTML(rounds, champion) {
    var list = (rounds || []).filter(function (r) {
      var n = (r.name || '').toLowerCase();
      return r.ties && r.ties.length && n.indexOf('previa') < 0 && n.indexOf('play-off') < 0;
    });
    if (!list.length) return '<p class="hint">Las eliminatorias aún no han empezado.</p>';
    var hidden = 0;
    if (list.length > 4) { hidden = list.length - 4; list = list.slice(hidden); }

    var last = list[list.length - 1];
    var isFinal = last.ties.length === 1;
    var body = isFinal ? list.slice(0, -1) : list;

    function col(r, half) {
      var mid = Math.ceil(r.ties.length / 2);
      var ties = half === 'L' ? r.ties.slice(0, mid) : r.ties.slice(mid);
      return '<div class="br-round"><h5>' + esc(r.name) + '</h5><div class="br-col">' +
        ties.map(tieHTML).join('') + '</div></div>';
    }
    var left = body.map(function (r) { return col(r, 'L'); }).join('');
    var right = body.slice().reverse().map(function (r) { return col(r, 'R'); }).join('');

    var center = '<div class="br-center">';
    if (isFinal) center += '<h5>' + esc(last.name) + '</h5>' + tieHTML(last.ties[0]);
    if (champion) {
      center += '<div class="br-champ"><div class="cup">🏆</div>' + crestOf(champion, 46) +
        '<b>' + esc(champion.n) + '</b></div>';
    }
    center += '</div>';
    return (hidden ? '<p class="hint brnote">No se muestran ' + hidden + ' ronda(s) anteriores.</p>' : '') +
      '<div class="br2"><div class="br-side">' + left + '</div>' + center +
      '<div class="br-side">' + right + '</div></div>';
  }

  function renderTournament(res, box, title) {
    if (res.error) { box.innerHTML = '<div class="card format-box bad">' + esc(res.error) + '</div>'; return; }
    var html = '';
    if (title) html += '<div class="card"><h3>' + esc(title) + '</h3><p class="hint">' + esc(Comp.describe(res.structure)) + '</p></div>';
    if (res.groups) html += '<div class="card"><h3>Fase de grupos</h3>' +
      groupsHTML(res.groups, res.structure.perGroup, res.structure.extra) + '</div>';
    html += '<div class="card"><h3>Eliminatorias</h3>' + bracketHTML(res.knockout, res.champion) + '</div>';
    html += '<div class="card"><h3>Goleadores del torneo</h3>' + scorersHTML(res.scorers.slice(0, 20)) + '</div>';
    box.innerHTML = html;
  }

  /* =====================================================================
     VISTA · PARTIDO
     ===================================================================== */
  var cfg = { home: { pool: LEAGUE_IDS[0], team: 0, tactic: 'bal' }, away: { pool: LEAGUE_IDS[0], team: 1, tactic: 'bal' } };

  /* el escudo es el propio selector: abre el menú visual de ligas y clubes */
  $$('.team-badge.pick').forEach(function (b) {
    b.onclick = function () {
      var side = b.dataset.side;
      Picker.team({
        title: side === 'home' ? 'Equipo local' : 'Equipo visitante',
        onPick: function (t) { setSide(side, t.leagueId, LG[t.leagueId].teams.indexOf(t)); }
      });
    };
  });
  $$('.seg').forEach(function (seg) {
    $$('button', seg).forEach(function (b) {
      b.onclick = function () {
        $$('button', seg).forEach(function (x) { x.classList.remove('on'); });
        b.classList.add('on'); cfg[seg.dataset.side].tactic = b.dataset.t;
      };
    });
  });
  function teamOf(side) { return LG[cfg[side].pool].teams[cfg[side].team]; }

  /* ---------------------------------------------------------------------
     EL ONCE DEL PARTIDO RÁPIDO
     El motor juega con los once primeros de la plantilla, así que cambiar
     el equipo es reordenar la lista. Se hace sobre una copia: lo que se
     toque aquí no le cambia el equipo a nadie en el resto del juego.
     --------------------------------------------------------------------- */
  var BANCA = (window.Engine && Engine.BANQUILLO) || 7;
  var elegido = null;            /* {side, i} del jugador marcado */

  function plantillaDe(side) {
    var c = cfg[side], t = teamOf(side);
    if (!c.orden || c.ordenDe !== t) { c.orden = (t.p || []).slice(); c.ordenDe = t; }
    return c.orden;
  }
  /* el equipo tal como va a salir a jugar */
  function equipoParaJugar(side) {
    var t = teamOf(side), p = plantillaDe(side);
    if (p === t.p) return t;
    var copia = {};
    Object.keys(t).forEach(function (k) { copia[k] = t[k]; });
    copia.p = p;
    return copia;
  }
  function fichaOnce(p, i, side, titular) {
    var marcado = elegido && elegido.side === side && elegido.i === i;
    return '<button class="on-j' + (titular ? ' tit' : '') + (marcado ? ' sel' : '') +
      '" data-side="' + side + '" data-i="' + i + '">' +
      '<span class="on-pos">' + esc(p[1]) + '</span>' +
      '<span class="on-nom">' + esc(p[0]) + '</span>' +
      '<span class="on-ovr ' + ratClass(p[2]) + '">' + p[2] + '</span></button>';
  }
  function pintaOnce(side) {
    var caja = $('#once' + (side === 'home' ? 'Home' : 'Away'));
    if (!caja) return;
    var p = plantillaDe(side);
    var once = p.slice(0, 11), banca = p.slice(11, 11 + BANCA);
    caja.innerHTML =
      '<div class="on-cols">' +
      '<div class="on-col">' +
      '<div class="on-tit"><span>Once inicial</span></div>' +
      '<div class="on-lista">' + once.map(function (x, i) { return fichaOnce(x, i, side, true); }).join('') + '</div>' +
      '</div>' +
      '<div class="on-col suplentes">' +
      '<div class="on-tit"><span>Banco</span>' +
      '<small>' + (elegido ? 'pulsa a otro' : 'pulsa a uno') + '</small></div>' +
      '<div class="on-lista">' + banca.map(function (x, i) { return fichaOnce(x, 11 + i, side, false); }).join('') + '</div>' +
      '</div></div>';
  }
  function pintaOnces() { pintaOnce('home'); pintaOnce('away'); }
  /* se pulsa un jugador: el primero se marca y el segundo se intercambia */
  function tocaJugador(side, i) {
    if (elegido && elegido.side === side && elegido.i === i) { elegido = null; pintaOnces(); return; }
    if (!elegido || elegido.side !== side) { elegido = { side: side, i: i }; pintaOnces(); return; }
    var p = plantillaDe(side), a = elegido.i;
    var x = p[a]; p[a] = p[i]; p[i] = x;
    elegido = null;
    pintaOnces();
  }
  ['home', 'away'].forEach(function (side) {
    var caja = $('#once' + (side === 'home' ? 'Home' : 'Away'));
    if (!caja) return;
    caja.onclick = function (e) {
      var b = e.target;
      while (b && b !== caja && !b.getAttribute('data-i')) b = b.parentNode;
      if (!b || b === caja) return;
      tocaJugador(b.getAttribute('data-side'), +b.getAttribute('data-i'));
    };
  });
  function badge(side) {
    var t = teamOf(side);
    $('#badge' + (side === 'home' ? 'Home' : 'Away')).innerHTML =
      crestOf(t, 46) + '<div class="badge-info"><b>' + esc(t.n) + '</b><span>' + esc(t.league) + '</span>' +
      '<span class="pickhint">cambiar equipo ›</span></div>' +
      /* en el menú de inicio manda la estrella, no el número */
      '<div class="ovr soloestrellas">' + Stars.html(t.ovr, 'big') + '</div>';
  }
  badge('home'); badge('away');
  pintaOnces();
  function setSide(side, pool, idx) {
    cfg[side].pool = pool; cfg[side].team = idx;
    cfg[side].orden = null;            /* equipo nuevo, once nuevo */
    elegido = null;
    badge(side);
    pintaOnce(side);
  }
  $('#btnSwap').onclick = function () {
    var h = [cfg.home.pool, cfg.home.team], a = [cfg.away.pool, cfg.away.team];
    setSide('home', a[0], a[1]); setSide('away', h[0], h[1]);
  };
  $('#btnRandom').onclick = function () {
    var ids = Object.keys(LG);
    var p1 = ids[Math.floor(Math.random() * ids.length)], p2 = ids[Math.floor(Math.random() * ids.length)];
    var i1 = Math.floor(Math.random() * LG[p1].teams.length), i2 = Math.floor(Math.random() * LG[p2].teams.length);
    if (p1 === p2 && i1 === i2) i2 = (i2 + 1) % LG[p2].teams.length;
    setSide('home', p1, i1); setSide('away', p2, i2);
  };

  $('#btnPlay').onclick = function () {
    if (mv) mv.stop();
    var H = teamOf('home'), A = teamOf('away');
    if (H === A) { alert('Elige dos equipos distintos.'); return; }
    showMatch(Engine.simulate(equipoParaJugar('home'), equipoParaJugar('away'), {
      homeTactic: cfg.home.tactic, awayTactic: cfg.away.tactic, neutral: $('#chkNeutral').checked
    }), $('#chkLive').checked);
  };

  var mv = null;
  function showMatch(res, live) {
    var area = $('#matchArea');
    area.classList.remove('hidden');
    if (!mv) mv = MatchView.create(area);
    $('#btnPlay').disabled = !!live;
    mv.show(res, {
      live: live,
      onEnd: function () { $('#btnPlay').disabled = false; },
      /* botón para cerrar la ficha del partido cuando termina */
      onClose: function () {
        area.classList.add('hidden'); area.innerHTML = ''; mv = null;
        $('#btnPlay').disabled = false;
      }
    });
    area.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  /* =====================================================================
     PAÍSES
     ===================================================================== */
  var CONF_LABEL = {
    UEFA: 'Europa', CONMEBOL: 'Sudamérica', CONCACAF: 'Norteamérica',
    AFC: 'Asia', CAF: 'África', OFC: 'Oceanía'
  };
  /* filtro por continente para no tener 46 países en un solo desplegable */
  function fillConfs() {
    var seen = [];
    COUNTRIES.forEach(function (c) { if (seen.indexOf(c.conf) < 0) seen.push(c.conf); });
    $('#domConf').innerHTML = seen.map(function (k) {
      return '<option value="' + k + '">' + esc(CONF_LABEL[k] || k) + '</option>';
    }).join('');
  }
  function fillCountries(sel) {
    var conf = $('#domConf').value;
    sel.innerHTML = COUNTRIES.map(function (c, i) {
      return c.conf === conf ? '<option value="' + i + '">' + esc(c.name) + '</option>' : '';
    }).join('');
  }
  fillConfs();
  fillCountries($('#domCountry'));
  $('#domConf').onchange = function () { fillCountries($('#domCountry')); domComps(); };

  /* =====================================================================
     VISTA · LIGAS Y COPAS NACIONALES
     ===================================================================== */
  function domComps() {
    var c = COUNTRIES[+$('#domCountry').value];
    var o = c.have.map(function (l) { return '<option value="L:' + l + '">' + esc(LG[l].name) + ' — temporada completa</option>'; });
    if (c.cup) o.push('<option value="C:cup">' + esc(c.cup) + '</option>');
    if (c.cup2) o.push('<option value="C:cup2">' + esc(c.cup2) + '</option>');
    if (c.supercup) o.push('<option value="S:sup">' + esc(c.supercup) + '</option>');
    $('#domComp').innerHTML = o.join('');
    $('#domHint').textContent = teamsOfCountry(c).length + ' equipos disponibles';
  }
  $('#domCountry').onchange = domComps;
  domComps();

  $('#btnDom').onclick = function () {
    var c = COUNTRIES[+$('#domCountry').value], v = $('#domComp').value;
    var box = $('#domOut');
    if (v.charAt(0) === 'L') {
      var lid = v.slice(2), lg = LG[lid];
      var Rl = Runner.league(lg.teams, {
        name: lg.name, double: !lg.single, ucl: lg.ucl, rel: lg.rel
      });
      TourView.attach(Rl, { title: lg.name });
      Runner.mount(box, Rl);
    } else if (v.charAt(0) === 'C') {
      var name = v === 'C:cup' ? c.cup : c.cup2;
      montaCuadro(box, teamsOfCountry(c), { name: name, neutral: false }, { title: name });
      return;
    } else {
      var two = teamsOfCountry(c).slice().sort(function (a, b) { return b.ovr - a.ovr; }).slice(0, 2);
      var Rs = Runner.knockout(two, { name: c.supercup, neutral: true });
      TourView.attach(Rs, { title: c.supercup });
      Runner.mount(box, Rs);
    }
    box.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  /* =====================================================================
     VISTA · CONTINENTALES
     ===================================================================== */
  var CONT = (window.CONTINENTAL || []).filter(function (k) {
    return entrantsFor(k).length >= 4;
  });
  /* la confederación de un club */
  function confDe(t) {
    var m = (window.Nac && Nac.confDeLiga) ? Nac.confDeLiga(t.leagueId) : null;
    if (m) return m;
    var c = COUNTRIES.filter(function (x) { return x.have.indexOf(t.leagueId) >= 0; })[0];
    return c ? c.conf : '';
  }
  /* El Mundial de Clubes no lo juegan los ocho mejores del mundo: lo juegan
     los campeones de cada continente. Dos de Europa y dos de Sudamérica,
     uno del resto, que es como cuadra la fase de grupos. */
  function entrantsCWC() {
    /* dentro de la función: se usa antes de que corra el cuerpo del módulo */
    var CUPOS_CWC = { UEFA: 2, CONMEBOL: 2, CONCACAF: 1, AFC: 1, CAF: 1, OFC: 1 };
    var porConf = {};
    COUNTRIES.forEach(function (c) {
      c.have.forEach(function (lid) {
        (porConf[c.conf] = porConf[c.conf] || []).push.apply(porConf[c.conf], LG[lid].teams);
      });
    });
    var out = [];
    Object.keys(CUPOS_CWC).forEach(function (conf) {
      var lista = (porConf[conf] || []).slice().sort(function (a, b) { return b.ovr - a.ovr; });
      /* uno por país: no van dos del mismo sitio */
      var paises = {}, tomados = [];
      lista.forEach(function (t) {
        if (tomados.length >= CUPOS_CWC[conf]) return;
        var p = Draw.countryOf(t);
        if (paises[p]) return;
        paises[p] = 1; tomados.push(t);
      });
      out = out.concat(tomados);
    });
    return out;
  }

  function entrantsFor(k) {
    if (k.porConf) return entrantsCWC();
    var pool = [];
    COUNTRIES.forEach(function (c) {
      if (k.conf && c.conf !== k.conf) return;
      var ts = teamsOfCountry(c).slice().sort(function (a, b) { return b.ovr - a.ovr; });
      pool = pool.concat(ts.slice(0, k.maxPerCountry).map(function (t, i) { return { t: t, rank: i, c: c }; }));
    });
    pool.sort(function (a, b) { return b.t.ovr - a.t.ovr; });
    var start = k.skipTop || 0;
    return pool.slice(start, start + k.size).map(function (x) { return x.t; });
  }
  /* ---------- cupos reales por país ----------
     La plaza de cada liga es la misma que reparte el modo carrera: los cupos
     de BERTHS. En las competiciones de primer nivel entran las plazas
     directas más las de previa; en las de segundo nivel, las que van detrás. */
  /* Cada competición mira a sus propias puertas: los grupos, el play-off y
     la ronda previa. Son los mismos cupos que reparte el modo carrera. */
  var PUERTAS_COMP = {
    ucl:   { grupos: 'top',    po: 'po', pre: 'pre' },
    uel:   { grupos: 'second', po: 'secondPo' },
    lib:   { grupos: 'top',    pre: 'pre' },
    sud:   { grupos: 'second' },
    ccc:   { grupos: 'top' },
    acl:   { grupos: 'top' },
    cafcl: { grupos: 'top' }
  };
  var ORDEN_PUERTAS = ['top', 'po', 'pre', 'second', 'secondPo'];
  /* la Champions guarda dos sitios: para su campeón y para el de la Europa
     League. El resto de competiciones llena los grupos sólo con cupos. */
  var CAMPEONES_COMP = {
    ucl: ['Campeón de la Champions', 'Campeón de la Europa League']
  };
  /* Los que caen de la Champions y siguen en la Europa League. Al simularla
     sola no hay Champions que los produzca, así que se eligen aquí. */
  var CAIDOS_COMP = {
    uel: [
      { fase: 'grupos', n: 7, name: 'Eliminados en el play-off de la Champions', rango: [8, 44], de: 'la Champions' },
      { fase: 'po',     n: 8, name: 'Eliminados en la previa de la Champions',   rango: [30, 90], de: 'la Champions' }
    ],
    sud: [
      { fase: 'grupos', n: 4, name: 'Eliminados en la previa de la Libertadores', rango: [10, 46], de: 'la Libertadores' },
      { fase: 'ko', n: 8, name: 'Terceros de los grupos de la Libertadores', rango: [4, 34], de: 'la Libertadores' }
    ]
  };

  /* elige n clubes de la zona, de entre los puestos indicados del ranking */
  function sorteaZona(conf, n, rango, fuera) {
    var cand = [];
    COUNTRIES.forEach(function (c) {
      if (conf && c.conf !== conf) return;
      c.have.forEach(function (lid) {
        LG[lid].teams.forEach(function (t) { cand.push(t); });
      });
    });
    cand.sort(function (a, b) { return b.ovr - a.ovr; });
    cand = cand.slice(rango[0], rango[1]).filter(function (t) { return (fuera || []).indexOf(t) < 0; });
    var out = [];
    for (var i = 0; i < n && cand.length; i++) {
      var j = Math.floor(Math.random() * cand.length);
      out.push(cand[j]);
      cand.splice(j, 1);
    }
    return out;
  }

  /* un campeón vigente creíble: sale de entre los grandes de la zona, con
     más papeletas cuanto mejor es, pero no siempre el mismo */
  function campeonAlAzar(conf, fuera) {
    var cand = [];
    COUNTRIES.forEach(function (c) {
      if (conf && c.conf !== conf) return;
      c.have.forEach(function (lid) {
        LG[lid].teams.forEach(function (t) { cand.push(t); });
      });
    });
    cand.sort(function (a, b) { return b.ovr - a.ovr; });
    cand = cand.slice(0, 24).filter(function (t) { return (fuera || []).indexOf(t) < 0; });
    if (!cand.length) return null;
    var peso = cand.map(function (t, i) { return Math.pow(0.86, i); });
    var tot = peso.reduce(function (s2, x) { return s2 + x; }, 0);
    var r = Math.random() * tot;
    for (var i = 0; i < cand.length; i++) { r -= peso[i]; if (r <= 0) return cand[i]; }
    return cand[0];
  }

  function cuposDe(k) {
    var mapa = PUERTAS_COMP[k.id];
    if (!mapa) return null;
    var out = [];
    COUNTRIES.forEach(function (c) {
      var b = (window.BERTHS || {})[c.id];
      if (!b || b.conf !== k.conf || !c.have.length) return;
      /* el desplazamiento: cuántos equipos de ese país van por delante */
      var antes = 0;
      ORDEN_PUERTAS.forEach(function (p) {
        var n = b[p] || 0;
        var fase = null;
        Object.keys(mapa).forEach(function (f2) { if (mapa[f2] === p) fase = f2; });
        if (n && fase) {
          out.push({ cid: c.id, name: c.name, flag: c.flag, have: c.have, lid: c.have[0],
            plazas: n, desde: antes, fase: fase });
        }
        antes += n;
      });
    });
    if (CAMPEONES_COMP[k.id]) {
      out.unshift({ cid: '__camp__', name: 'Campeones vigentes', flag: '🏆',
        have: null, lid: null, plazas: CAMPEONES_COMP[k.id].length, desde: 0,
        fase: 'grupos', campeones: CAMPEONES_COMP[k.id] });
    }
    (CAIDOS_COMP[k.id] || []).forEach(function (c, i) {
      out.push({ cid: '__caidos' + i + '__', name: c.name, flag: '🪂',
        have: null, lid: null, plazas: c.n, desde: 0, fase: c.fase, caidos: c });
    });
    return out.length ? out : null;
  }
  var FASE_NOMBRE = { grupos: 'Fase de grupos', po: 'Play-off', pre: 'Ronda previa',
    ko: 'Dieciseisavos' };

  /* selección actual: país -> array de equipos, uno por plaza */
  var conSel = null, conCupos = null, conComp = null;
  var conModo = 'auto', conPaso = 0, conAbierto = true;

  /* ¿están todos los cupos cubiertos? */
  function conCompleto() {
    if (!conCupos) return true;
    return conCupos.every(function (q) {
      return ((conSel[q.cid + '|' + q.fase] || []).filter(Boolean)).length >= q.plazas;
    });
  }

  function conPorDefecto() {
    conSel = {};
    /* 1 · los cupos por liga, que son los que mandan */
    (conCupos || []).forEach(function (q) {
      if (q.campeones || q.caidos) return;
      var orden = LG[q.lid].teams.slice().sort(function (a, b) { return b.ovr - a.ovr; });
      conSel[q.cid + '|' + q.fase] = orden.slice(q.desde, q.desde + q.plazas);
    });
    /* 2 · y después los que llegan de fuera, sin repetir a nadie */
    (conCupos || []).forEach(function (q) {
      if (!q.campeones && !q.caidos) return;
      var puestos = [];
      Object.keys(conSel).forEach(function (k2) {
        (conSel[k2] || []).forEach(function (t) { if (t) puestos.push(t); });
      });
      if (q.campeones) {
        var lista = [];
        q.campeones.forEach(function () {
          var t = campeonAlAzar(conComp.conf, puestos.concat(lista));
          if (t) lista.push(t);
        });
        conSel[q.cid + '|' + q.fase] = lista;
      } else {
        conSel[q.cid + '|' + q.fase] = sorteaZona(conComp.conf, q.plazas, q.caidos.rango, puestos);
      }
    });
  }
  function conEquipos(fase) {
    if (!conCupos) return fase ? [] : entrantsFor(conComp);
    var out = [];
    conCupos.forEach(function (q) {
      if (fase && q.fase !== fase) return;
      (conSel[q.cid + '|' + q.fase] || []).forEach(function (t) { if (t) out.push(t); });
    });
    return out;
  }

  function conPintaCupos() {
    var caja = $('#conCupos');
    if (!conCupos) {
      caja.classList.add('hidden');
      $('#conCuposBody').innerHTML = '';
      return;
    }
    caja.classList.remove('hidden');
    $$('#conModo button').forEach(function (b) { b.classList.toggle('on', b.dataset.m === conModo); });

    /* elegidos todos, el panel estorba: se recoge y deja un resumen */
    if (conModo === 'manual' && conCompleto() && !conAbierto) {
      var n = 0;
      conCupos.forEach(function (q) { n += (conSel[q.cid + '|' + q.fase] || []).length; });
      $('#conCuposNota').textContent = 'Todos los cupos elegidos.';
      $('#conCuposBody').innerHTML = '<div class="con-listo">' +
        '<b>✔ ' + n + ' equipos elegidos</b>' +
        '<button class="mini" id="conEditar">Volver a elegir</button></div>';
      if ($('#conEditar')) $('#conEditar').onclick = function () {
        conAbierto = true; conPaso = 0; conPintaCupos();
      };
      return;
    }
    if (conModo === 'manual') { conPintaManual(); return; }
    $('#conCuposNota').textContent = 'Los cupos son los de la temporada actual. Pulsa cualquier club para cambiarlo por otro de su país.';
    var fases = {};
    conCupos.forEach(function (q) { (fases[q.fase] = fases[q.fase] || []).push(q); });
    $('#conCuposBody').innerHTML = ['grupos', 'po', 'pre', 'ko'].filter(function (f2) { return fases[f2]; })
      .map(function (f2) {
        return (Object.keys(fases).length > 1
          ? '<h4 class="subh">' + esc(FASE_NOMBRE[f2]) + ' <small>' +
            fases[f2].reduce(function (s2, q) { return s2 + q.plazas; }, 0) + ' plazas</small></h4>' : '') +
          pintaFase(fases[f2]);
      }).join('');
  }

  function pintaFase(lista) {
    return lista.map(function (q) {
      var slots = (conSel[q.cid + '|' + q.fase] || []).map(function (t, i) {
        return '<button class="cupo" data-c="' + esc(q.cid) + '" data-f="' + esc(q.fase) +
          '" data-i="' + i + '">' +
          '<span class="cupo-n">' + (q.campeones ? '🏆' : q.caidos ? '🪂' : (q.desde + i + 1) + 'º') + '</span>' +
          '<span class="cupo-cr">' + Crest.html(t, 22) + '</span>' +
          '<b>' + esc(t.n) + '</b><small>' + t.ovr + '</small></button>';
      }).join('');
      return '<div class="cupopais"><div class="cupopais-h">' + esc(q.flag || '') + ' <b>' + esc(q.name) +
        '</b> <span class="hint">' + esc(q.campeones ? q.campeones.join(' · ')
          : q.caidos ? ('llegan de ' + (q.caidos.de || 'otra competición')) : LG[q.lid].name) + ' · ' + q.plazas +
        (q.plazas === 1 ? ' plaza' : ' plazas') + '</span></div>' +
        '<div class="cupos">' + slots + '</div></div>';
    }).join('');
  }

  /* ---------- elegir a mano, liga por liga ---------- */
  function conPintaManual() {
    var total = conCupos.length;
    if (conPaso >= total) conPaso = total - 1;
    if (conPaso < 0) conPaso = 0;
    var q = conCupos[conPaso];
    var clave = q.cid + '|' + q.fase;
    var elegidos = conSel[clave] || (conSel[clave] = []);
    var faltan = q.plazas - elegidos.length;

    $('#conCuposNota').textContent = 'Paso ' + (conPaso + 1) + ' de ' + total + ' · ' +
      (faltan > 0 ? 'te faltan ' + faltan + ' por elegir' : 'completo');

    var cabecera = '<div class="man-head">' +
      '<button class="mini" id="manPrev"' + (conPaso ? '' : ' disabled') + '>&lsaquo; Anterior</button>' +
      '<div class="man-tit"><b>' + esc(q.flag || '') + ' ' + esc(q.name) + '</b>' +
      '<small>' + esc(q.lid ? LG[q.lid].name : (q.caidos ? 'llegan de ' + q.caidos.de : 'campeones')) +
      ' · ' + esc(FASE_NOMBRE[q.fase] || q.fase) + ' · ' + q.plazas +
      (q.plazas === 1 ? ' plaza' : ' plazas') + '</small></div>' +
      (conPaso < total - 1
        ? '<button class="mini" id="manNext">Siguiente &rsaquo;</button>'
        : '<button class="primary" id="manListo"' + (conCompleto() ? '' : ' disabled') +
          '>Listo</button>') +
      '</div>';

    var cuerpo;
    if (!q.lid) {
      /* campeones y caídos: no salen de una liga, se eligen con el buscador */
      var celdas = [];
      for (var c2 = 0; c2 < q.plazas; c2++) {
        var t2 = elegidos[c2];
        celdas.push('<button class="cupo' + (t2 ? '' : ' vacio') + '" data-c="' + esc(q.cid) +
          '" data-f="' + esc(q.fase) + '" data-i="' + c2 + '">' +
          '<span class="cupo-n">' + (q.campeones ? '🏆' : '🪂') + '</span>' +
          (t2 ? '<span class="cupo-cr">' + Crest.html(t2, 22) + '</span><b>' + esc(t2.n) + '</b>' +
            '<small>' + t2.ovr + '</small>'
              : '<b>elegir club</b>') + '</button>');
      }
      cuerpo = '<div class="cupos">' + celdas.join('') +
        '</div><p class="hint">Pulsa cualquiera para elegirlo o cambiarlo.</p>';
    } else {
      var dentro = {};
      elegidos.forEach(function (t) { dentro[t.n] = 1; });
      var lista = LG[q.lid].teams.slice().sort(function (a, b) { return b.ovr - a.ovr; });
      var cogidos = yaElegidos();
      elegidos.forEach(function (t) { delete cogidos[t.leagueId + '|' + t.n]; });
      cuerpo = '<div class="man-caja"><div class="pk-tms">' + lista.map(function (t, i) {
        var h = Picker.teamCard(t, i).replace('data-t="' + i + '"', 'data-man="' + i + '"');
        if (dentro[t.n]) return h.replace('class="pk-tm"', 'class="pk-tm sel"');
        if (cogidos[t.leagueId + '|' + t.n]) {
          return h.replace('class="pk-tm"', 'class="pk-tm cogido" disabled title="Ya tiene cupo en otra plaza"');
        }
        return h;
      }).join('') + '</div></div>';
    }
    $('#conCuposBody').innerHTML = cabecera + cuerpo;

    if ($('#manPrev')) $('#manPrev').onclick = function () { conPaso--; conPintaCupos(); };
    if ($('#manNext')) $('#manNext').onclick = function () { conPaso++; conPintaCupos(); };
    if ($('#manListo')) $('#manListo').onclick = function () {
      conAbierto = false; conPintaCupos();
    };
  }

  /* marcar y desmarcar clubes en la rejilla de la liga */
  function conManualClick(idx) {
    var q = conCupos[conPaso];
    if (!q || !q.lid) return;
    var lista = LG[q.lid].teams.slice().sort(function (a, b) { return b.ovr - a.ovr; });
    var t = lista[idx];
    if (!t) return;
    var clave = q.cid + '|' + q.fase;
    var sel = conSel[clave] || (conSel[clave] = []);
    var i = sel.indexOf(t);
    if (i >= 0) sel.splice(i, 1);
    else {
      var cogidos2 = yaElegidos();
      if (cogidos2[t.leagueId + '|' + t.n]) return;   /* ya tiene cupo en otro sitio */
      if (sel.length < q.plazas) sel.push(t);
      else { sel.shift(); sel.push(t); }   /* lleno: entra el nuevo, sale el primero */
    }
    conPintaCupos(); conHint();
  }

  $('#conModo').onclick = function (e) {
    var b = e.target.closest ? e.target.closest('[data-m]') : null;
    if (!b) return;
    var nuevo = b.getAttribute('data-m');
    if (nuevo === conModo) return;
    conModo = nuevo;
    conPaso = 0;
    /* a mano se empieza en blanco; en automático los vuelve a llenar el juego */
    conAbierto = true;
    if (conModo === 'manual') conVacia();
    else conPorDefecto();
    conPintaCupos(); conHint();
  };

  function conVacia() {
    conSel = {};
    (conCupos || []).forEach(function (q) { conSel[q.cid + '|' + q.fase] = []; });
  }

  $('#conCuposBody').onclick = function (e) {
    var n = e.target;
    while (n && n !== this && !n.getAttribute('data-c') && !n.getAttribute('data-man')) n = n.parentNode;
    if (!n || n === this) return;
    var man = n.getAttribute('data-man');
    if (man != null) { conManualClick(+man); return; }
    var cid = n.getAttribute('data-c'), i = +n.getAttribute('data-i');
    var fase = n.getAttribute('data-f');
    var q = conCupos.filter(function (x) { return x.cid === cid && x.fase === fase; })[0];
    if (!q) return;
    Picker.team({
      title: q.campeones ? q.campeones[i] : q.caidos ? q.name
        : ('Plaza ' + (q.desde + i + 1) + 'ª de ' + q.name),
      nations: false,
      filterLeague: function (x) {
        return q.have ? q.have.indexOf(x.id) >= 0
          : (!conComp.conf || x.conf === conComp.conf);
      },
      filterTeam: (function () {
        var cogidos = yaElegidos({ clave: cid + '|' + fase, i: i });
        return function (t) { return !cogidos[t.leagueId + '|' + t.n]; };
      })(),
      onPick: function (t) {
        var clave = cid + '|' + fase;
        var antes = (conSel[clave] || [])[i] || null;
        /* si ya estaba en otra plaza, se intercambian */
        Object.keys(conSel).forEach(function (c2) {
          conSel[c2].forEach(function (x, j) {
            if (x === t) conSel[c2][j] = antes;
          });
        });
        conSel[clave] = conSel[clave] || [];
        conSel[clave][i] = t;
        /* sin huecos: los nulos que queden se quitan */
        conSel[clave] = conSel[clave].filter(function (x) { return !!x; });
        conPintaCupos(); conHint();
      }
    });
  };
  $('#conReset').onclick = function () { conPorDefecto(); conPintaCupos(); conHint(); };

  $('#conComp').innerHTML = CONT.map(function (k, i) { return '<option value="' + i + '">' + esc(k.name) + '</option>'; }).join('');
  function conCambio() {
    conComp = CONT[+$('#conComp').value];
    if (!conComp) return;
    conPaso = 0;
    conAbierto = true;
    conCupos = cuposDe(conComp);
    conPorDefecto();
    conPintaCupos();
    conTapaCupos(false);
    conHint();
  }
  function conHint() {
    var k = conComp; if (!k) return;
    var g = conEquipos('grupos').length, po = conEquipos('po').length, pre = conEquipos('pre').length;
    var corte = primeraRonda(k);
    if (corte && !pre && po > corte) { pre = corte; po -= corte; }
    var enGrupos = conCupos ? g + Math.floor((po + Math.floor(pre / 2)) / 2) : conEquipos().length;
    var meta = cupoGrupos(k);
    if (meta > enGrupos) enGrupos = meta;
    else if (k.groupSize) enGrupos += (k.groupSize - enGrupos % k.groupSize) % k.groupSize;
    var st = Comp.structureFor(enGrupos, k.groupSize);
    var fases = [];
    if (pre) fases.push((conEquipos('pre').length ? 'previa de ' : 'primera ronda de ') + pre);
    if (po) fases.push('play-off de ' + (po + Math.floor(pre / 2)));
    $('#conHint').textContent = (fases.length ? fases.join(' · ') + ' · ' : '') +
      enGrupos + ' en grupos · ' + (st.ok ? Comp.describe(st) : st.msg);
    $('#btnCon').disabled = !st.ok;
  }
  $('#conComp').onchange = conCambio; conCambio();

  /* Una fase de clasificación: se juega a ida y vuelta, una sola ronda, y
     al acabar se sigue con la siguiente. */
  function rondaClasi(box, nombre, equipos, alAcabar) {
    montaCuadro(box, equipos, {
      name: nombre, legs: 2, unaRonda: true, nombrePrimera: nombre,
      tras: function (R) {
        R.alTerminar = function (fin) { alAcabar(fin.ganadores || [], fin.perdedores || []); };
      }
    }, { title: nombre, soloRonda: true });
  }

  /* Si faltan equipos para cuadrar los grupos (en la vista suelta no están
     los campeones vigentes), se completa con los mejores libres. */
  function cfgReal(k) {
    var mapa = { ucl: 'ucl', uel: 'uel', lib: 'libertadores', sud: 'sudamericana',
      ccc: 'concachampions', acl: 'afccl', cafcl: 'cafcl' };
    return (window.CONT_COMPS || {})[mapa[k.id]] || null;
  }
  /* si la competición parte su clasificación en dos, cuántos juegan la primera */
  function primeraRonda(k) {
    var c = cfgReal(k);
    return (c && c.prelimSize) || 0;
  }

  /* los clubes que ya ocupan un cupo; 'salvo' deja libre una plaza concreta */
  function yaElegidos(salvo) {
    var m = {};
    Object.keys(conSel || {}).forEach(function (clave) {
      (conSel[clave] || []).forEach(function (t, i) {
        if (!t) return;
        if (salvo && salvo.clave === clave && salvo.i === i) return;
        m[t.leagueId + '|' + t.n] = 1;
      });
    });
    return m;
  }

  function sinRepetidos(lista) {
    var visto = {}, out = [];
    lista.forEach(function (t) {
      var k = t.leagueId + '|' + t.n;
      if (visto[k]) return;
      visto[k] = 1; out.push(t);
    });
    return out;
  }

  /* el tamaño que debería tener la fase de grupos, según el formato real */
  function cupoGrupos(k) {
    var mapa = { ucl: 'ucl', uel: 'uel', lib: 'libertadores', sud: 'sudamericana',
      ccc: 'concachampions', acl: 'afccl', cafcl: 'cafcl' };
    var c = (window.CONT_COMPS || {})[mapa[k.id]];
    return c && c.groups ? c.groups * c.size : 0;
  }

  function completaCupo(campo) {
    var k = conComp;
    if (!k.groupSize) return campo;
    var meta = cupoGrupos(k);
    var falta = meta > campo.length ? meta - campo.length
      : (k.groupSize - campo.length % k.groupSize) % k.groupSize;
    if (!falta) return campo;
    var dentro = {};
    campo.forEach(function (t) { dentro[t.leagueId + '|' + t.n] = 1; });
    var libres = [];
    COUNTRIES.forEach(function (c) {
      if (k.conf && c.conf !== k.conf) return;
      c.have.forEach(function (lid) {
        LG[lid].teams.forEach(function (t) {
          if (!dentro[t.leagueId + '|' + t.n]) libres.push(t);
        });
      });
    });
    libres.sort(function (a2, b2) { return b2.ovr - a2.ovr; });
    return campo.concat(libres.slice(0, falta));
  }

  /* =====================================================================
     SORTEOS
     Ninguna competición empieza sin su sorteo: primero salen las bolas y
     sólo después se juega. Sirve igual para los grupos y para los cuadros.
     ===================================================================== */
  /* de dónde es cada uno: el país de un club, la confederación de una
     selección. Es lo que no conviene repetir dentro de un grupo. */
  function paisClub(t) {
    if (!t) return '';
    if (t.isNation) return t.conf || '';
    return (window.Draw && Draw.countryOf) ? (Draw.countryOf(t) || '') : (t.leagueId || '');
  }
  function grupoDe(R, t) {
    var g = '';
    (R.groups || []).forEach(function (gr) { if (gr.teams.indexOf(t) >= 0) g = gr.name; });
    return g;
  }
  /* Los dos bombos de una eliminatoria: si viene de una fase de grupos,
     primeros contra segundos; si no, cabezas de serie contra el resto. */
  function bombosDe(R, campo) {
    var q = R && R.q && R.q.qualified;
    if (q && q.length === campo.length) {
      var pri = [], seg = [];
      q.forEach(function (row) { (row.pos === 1 ? pri : seg).push(row.t); });
      if (pri.length && pri.length === seg.length) {
        return {
          bombos: [pri, seg], nombres: ['Primeros de grupo', 'Segundos de grupo'],
          choca: function (a, b) {
            var ga = grupoDe(R, a);
            if (ga && ga === grupoDe(R, b)) return true;
            return !!paisClub(a) && paisClub(a) === paisClub(b);
          }
        };
      }
    }
    var orden = campo.slice().sort(function (a, b) { return (b.ovr || 0) - (a.ovr || 0); });
    var mitad = Math.ceil(orden.length / 2);
    return { bombos: [orden.slice(0, mitad), orden.slice(mitad)],
      nombres: ['Cabezas de serie', 'Resto'] };
  }
  function mismoPais(a, b) { return !!paisClub(a) && paisClub(a) === paisClub(b); }

  /* El cuadro de una eliminación directa, bola a bola. */
  function sorteoCuadro(box, equipos, cfg, alAcabar) {
    var r = Sorteo.reparteBye(equipos);
    if (r.juegan.length < 4) { alAcabar(r.juegan, r.esperan); return; }
    var b1, b2, nombres;
    if (cfg.sorteoAzar) {
      var rev = Comp.shuffle(r.juegan);
      b1 = rev.slice(0, rev.length / 2); b2 = rev.slice(rev.length / 2);
      nombres = ['Bombo 1', 'Bombo 2'];
    } else {
      var orden = r.juegan.slice().sort(function (a, b) { return (b.ovr || 0) - (a.ovr || 0); });
      b1 = orden.slice(0, Math.ceil(orden.length / 2));
      b2 = orden.slice(Math.ceil(orden.length / 2));
      nombres = ['Cabezas de serie', 'Resto'];
    }
    Sorteo.cruces(box, {
      bombos: [b1, b2], nombres: nombres, esperan: r.esperan, choca: mismoPais,
      titulo: 'Sorteo del cuadro',
      sub: cfg.name + ' · ' + equipos.length + ' equipos' +
        (r.esperan.length ? ' · ' + r.esperan.length + ' esperan a la segunda ronda' : ''),
      boton: 'Empezar a jugar',
      onListo: alAcabar
    });
  }

  /* Una copa: se sortea el cuadro y sólo entonces se juega. */
  function montaCuadro(box, equipos, cfg, vista) {
    sorteoCuadro(box, equipos, cfg, function (campo, esperan) {
      var R = Runner.knockout(esperan.concat(campo), {
        name: cfg.name, legs: cfg.legs, neutral: cfg.neutral, unaRonda: cfg.unaRonda,
        ordenFijo: true,
        byesFijos: esperan.length ? esperan : null,
        nombrePrimera: esperan.length ? (cfg.nombrePrimera || 'Ronda previa') : null
      });
      if (cfg.tras) cfg.tras(R);
      if (!R.error) TourView.attach(R, vista);
      Runner.mount(box, R);
      box.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  }

  /* El sorteo de las eliminatorias dentro de un torneo: la competición se
     para al acabar los grupos y no sigue hasta que salen las bolas. */
  function sorteoKO(box, R, nom, repinta) {
    var e = R.esperaKO;
    if (!e) return;
    var esperan = (e.byes || []).slice();
    var juegan = e.campo.filter(function (t) { return esperan.indexOf(t) < 0; });
    var b1, b2, nombres, choca = mismoPais;
    if (e.bombos) {
      /* dos bombos de verdad: cada cruce es uno de cada uno */
      b1 = e.bombos[0].slice(); b2 = e.bombos[1].slice();
      nombres = ['Segundos de grupo', 'Llegan de la otra competición'];
    } else {
      var p = bombosDe(R, juegan);
      b1 = p.bombos[0]; b2 = p.bombos[1];
      nombres = p.nombres;
      if (p.choca) choca = p.choca;
    }
    var caja = document.createElement('div');
    box.insertBefore(caja, box.firstChild);
    Sorteo.cruces(caja, {
      bombos: [b1, b2], nombres: nombres, esperan: esperan, choca: choca,
      titulo: 'Sorteo de las eliminatorias',
      sub: nom + ' · ' + juegan.length + ' equipos' +
        (esperan.length ? ' · ' + esperan.length + ' ya esperan' : ''),
      boton: 'Jugar las eliminatorias',
      onListo: function (campo) {
        if (caja.parentNode) caja.parentNode.removeChild(caja);
        R.seguirKO(esperan.concat(campo), esperan.length ? esperan : null, true);
        repinta();
      }
    });
  }

  /* Un torneo entero: sorteo de grupos, se juegan, sorteo del cuadro. */
  function montaConSorteo(box, equipos, cfg, vista) {
    var st = cfg.structure || Comp.structureFor(equipos.length, cfg.groupSize);
    if (!st.ok) { box.innerHTML = '<div class="card format-box bad">' + esc(st.msg) + '</div>'; return; }
    if (st.mode !== 'groups') { montaCuadro(box, equipos, cfg, vista); return; }
    Sorteo.grupos(box, {
      campo: equipos, nGrupos: st.groups, azar: !!cfg.sorteoAzar,
      zonaDe: cfg.porConf ? confDe : null,
      titulo: 'Sorteo de la fase de grupos',
      sub: cfg.name + ' · ' + equipos.length + ' equipos en ' + st.groups +
        ' grupos de ' + st.groupSize,
      boton: 'Empezar a jugar',
      onListo: function (gs) {
        var c = {}, mando = null;
        Object.keys(cfg).forEach(function (k) { c[k] = cfg[k]; });
        c.groups = gs;
        c.antesDelKO = function (R2) {
          sorteoKO(box, R2, cfg.name, function () { if (mando) mando.repaint(); });
        };
        var R = Runner.tournament(equipos, c);
        if (cfg.tras) cfg.tras(R);
        if (!R.error) TourView.attach(R, vista);
        mando = Runner.mount(box, R);
        box.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  }


  function conJuegaGrupos(box, campo) {
    campo = sinRepetidos(campo);
    campo = completaCupo(campo);
    montaConSorteo(box, campo, {
      name: conComp.name, groupSize: conComp.groupSize,
      extraKO: conEquipos('ko'), nombrePrimera: 'Play-off de octavos',
      porConf: !!conComp.porConf, tercerPuesto: !!conComp.porConf,
      neutral: true, legs: conComp.porConf ? 1 : 2,
      groupDouble: !conComp.porConf   /* a ida y vuelta salvo en el Mundial de Clubes */
    }, { title: conComp.name + ' · eliminatorias' });
  }

  /* el panel de clasificados sólo hace falta antes de empezar */
  function conTapaCupos(tapar) {
    var caja = $('#conCupos'), btn = $('#conVerCupos');
    if (!caja) return;
    caja.classList.toggle('hidden', !!tapar);
    if (btn) btn.classList.toggle('hidden', !tapar && !conCupos);
    if (btn) btn.textContent = tapar ? 'Ver clasificados' : 'Ocultar clasificados';
  }
  $('#conVerCupos').onclick = function () {
    conTapaCupos(!$('#conCupos').classList.contains('hidden'));
  };

  $('#btnCon').onclick = function () {
    var box = $('#conOut');
    conTapaCupos(true);
    var grupos = conEquipos('grupos');
    var po = conEquipos('po');
    var pre = conEquipos('pre');

    /* Si la competición clasifica en dos rondas y no tiene cupos propios de
       primera ronda, se separan los más flojos del play-off. */
    var corte = primeraRonda(conComp);
    var nombrePre = pre.length ? 'ronda previa' : 'primera ronda';
    if (corte && !pre.length && po.length > corte) {
      var orden = po.slice().sort(function (a, b) { return b.ovr - a.ovr; });
      pre = orden.slice(orden.length - corte);
      var fuera = {};
      pre.forEach(function (t) { fuera[t.leagueId + '|' + t.n] = 1; });
      po = po.filter(function (t) { return !fuera[t.leagueId + '|' + t.n]; });
    }

    /* sin cupos de clasificación se va directo a los grupos */
    if (!pre.length && !po.length) { conJuegaGrupos(box, conCupos ? grupos : conEquipos()); return; }

    function trasPlayoff(ganan) {
      conJuegaGrupos(box, grupos.concat(ganan));
    }
    /* sólo hay play-off si la competición lo tiene: en la Libertadores se
       clasifica en una única ronda y de ahí a los grupos */
    var hayPlayoff = po.length > 0 || !!(cfgReal(conComp) && cfgReal(conComp).playoff);
    function juegaPlayoff(desdePrevia) {
      var campo = po.concat(desdePrevia);
      if (!hayPlayoff || campo.length < 2) { trasPlayoff(campo); return; }
      rondaClasi(box, conComp.name + ' · play-off', campo, function (ganan) { trasPlayoff(ganan); });
    }
    if (pre.length >= 2) {
      rondaClasi(box, conComp.name + ' · ' + nombrePre, pre, function (ganan) { juegaPlayoff(ganan); });
    } else juegaPlayoff(pre);
  };

  /* =====================================================================
     VISTA · SELECCIONES
     ===================================================================== */
  var NCOMP = (window.NATIONAL_COMPS || []).filter(function (k) {
    return k.special === 'qualifiers' ? !!window.Qualifiers : natsFor(k).length >= 4;
  });
  function natsFor(k) {
    var list = NATIONS.slice();
    if (k.filter === 'wc') list = list.filter(function (n) { return n.wc; });
    else if (k.conf) list = list.filter(function (n) { return n.conf === k.conf; });
    list.sort(function (a, b) { return b.ovr - a.ovr; });
    var size = k.size;
    if (list.length < size) {
      // ajusta al múltiplo de grupo más cercano que sí tengamos
      size = k.groupSize ? Math.floor(list.length / k.groupSize) * k.groupSize : Comp.pow2AtMost(list.length);
    }
    return list.slice(0, size);
  }
  /* ---------- formato de la fase de clasificación de cada continente ----------
     Los números salen de que los clasificados cuadren exactos con las plazas. */
  var CLASI = {
    euro:     { entran: 55, groupSize: 5, perGroup: 2, extra: 2 },   /* 11 grupos -> 24 */
    afcon:    { entran: 54, groupSize: 6, perGroup: 2, extra: 6 },   /*  9 grupos -> 24 */
    asiancup: { entran: 44, groupSize: 4, perGroup: 2, extra: 2 },   /* 11 grupos -> 24 */
    goldcup:  { entran: 32, groupSize: 4, perGroup: 2, extra: 0 }    /*  8 grupos -> 16 */
  };

  var natComp = null, natModo = 'mano', natSel = [], natInv = [], natFijos = [];

  function deConf(conf) {
    return NATIONS.filter(function (n) { return n.conf === conf; })
      .slice().sort(function (a, b) { return b.ovr - a.ovr; });
  }

  function natPorDefecto() {
    var k = natComp;
    natFijos = []; natInv = []; natSel = [];
    if (!k || k.special === 'qualifiers' || !k.conf) return;
    if (k.invitados) {
      /* Copa América: los diez de la CONMEBOL entran solos */
      natFijos = deConf('CONMEBOL');
      natInv = deConf('CONCACAF').slice(0, k.invitados);
      return;
    }
    natSel = deConf(k.conf).slice(0, k.size);
  }
  function natEquipos() {
    if (!natComp || !natComp.conf) return natsFor(natComp);
    if (natComp.invitados) return natFijos.concat(natInv);
    return natSel.slice();
  }
  function conClasificacion() { return !!(natComp && CLASI[natComp.id]); }

  function chipSel(t, editable, i, tipo) {
    return '<button class="cupo' + (editable ? '' : ' fijo') + '"' +
      (editable ? ' data-i="' + i + '" data-t="' + tipo + '"' : ' disabled') + '>' +
      '<span class="cupo-cr">' + Crest.html(t, 22) + '</span>' +
      '<b>' + esc(t.n) + '</b><small>' + t.ovr + '</small></button>';
  }

  function natPintaCupos() {
    var caja = $('#natCupos'), k = natComp;
    if (!k || k.special === 'qualifiers' || !k.conf) {
      caja.classList.add('hidden');
      $('#natCuposBody').innerHTML = '';
      return;
    }
    caja.classList.remove('hidden');
    $('#natModo').classList.toggle('hidden', !conClasificacion());
    $$('#natModo button').forEach(function (b) { b.classList.toggle('on', b.dataset.m === natModo); });

    if (k.invitados) {
      $('#natCuposNota').textContent = 'Las diez de la CONMEBOL están dentro por derecho propio. ' +
        'Los ' + k.invitados + ' invitados los eliges tú, de donde quieras.';
      $('#natCuposBody').innerHTML =
        '<div class="cupopais"><div class="cupopais-h"><b>CONMEBOL</b> ' +
        '<span class="hint">' + natFijos.length + ' plazas fijas</span></div><div class="cupos">' +
        natFijos.map(function (t) { return chipSel(t, false); }).join('') + '</div></div>' +
        '<div class="cupopais"><div class="cupopais-h"><b>Invitados</b> ' +
        '<span class="hint">' + natInv.length + ' plazas · pulsa para cambiarlos</span></div><div class="cupos">' +
        natInv.map(function (t, i) { return chipSel(t, true, i, 'inv'); }).join('') + '</div></div>';
      return;
    }

    if (natModo === 'quali') {
      var c = CLASI[k.id];
      $('#natCuposNota').textContent = 'Se juega la fase de clasificación entre las ' + c.entran +
        ' selecciones de la confederación: ' + (c.entran / c.groupSize) + ' grupos de ' + c.groupSize +
        ', pasan los ' + c.perGroup + ' primeros' + (c.extra ? ' + los ' + c.extra + ' mejores terceros' : '') +
        ' → ' + k.size + ' plazas. Pulsa «Simular» para jugarla.';
      $('#natCuposBody').innerHTML = '';
      return;
    }

    $('#natCuposNota').textContent = k.size + ' selecciones. Pulsa cualquiera para cambiarla por otra de su confederación.';
    $('#natCuposBody').innerHTML = '<div class="cupos">' +
      natSel.map(function (t, i) { return chipSel(t, true, i, 'sel'); }).join('') + '</div>';
  }

  $('#natModo').onclick = function (e) {
    var b = e.target.closest ? e.target.closest('[data-m]') : null;
    if (!b) return;
    natModo = b.getAttribute('data-m');
    natPintaCupos(); natHint();
  };
  $('#natCuposBody').onclick = function (e) {
    var n = e.target;
    while (n && n !== this && !n.getAttribute('data-t')) n = n.parentNode;
    if (!n || n === this) return;
    var i = +n.getAttribute('data-i'), tipo = n.getAttribute('data-t');
    var lista = tipo === 'inv' ? natInv : natSel;
    var conf = natComp.conf;
    Picker.team({
      title: tipo === 'inv' ? 'Elegir invitado' : 'Cambiar clasificado',
      nations: 'only',
      filterTeam: tipo === 'inv'
        ? function (t) { return t.conf !== 'CONMEBOL'; }
        : function (t) { return t.conf === conf; },
      onPick: function (t) {
        var j = lista.indexOf(t);
        if (j >= 0) lista[j] = lista[i];        /* ya estaba: se intercambian */
        lista[i] = t;
        natPintaCupos(); natHint();
      }
    });
  };

  $('#natComp').innerHTML = NCOMP.map(function (k, i) { return '<option value="' + i + '">' + esc(k.name) + '</option>'; }).join('');
  function natCambio() {
    natComp = NCOMP[+$('#natComp').value];
    natModo = 'mano';
    natPorDefecto();
    natPintaCupos();
    natHint();
  }
  function natHint() {
    var k = natComp; if (!k) return;
    if (k.special === 'qualifiers') {
      $('#natHint').textContent = NATIONS.length + ' selecciones por 48 plazas · ' +
        'UEFA 16 · CAF 9 · AFC 8 · CONMEBOL 6 · CONCACAF 6 · OFC 1 + 2 de repesca. ' +
        'El anfitrión se sortea entre las que jugaron un Mundial en este siglo.';
      return;
    }
    if (natModo === 'quali' && conClasificacion()) {
      var c = CLASI[k.id];
      $('#natHint').textContent = 'Clasificación de ' + k.name + ' · ' + c.entran +
        ' selecciones por ' + k.size + ' plazas';
      return;
    }
    var list = natEquipos();
    var st = Comp.structureFor(list.length, k.groupSize);
    $('#natHint').textContent = list.length + ' selecciones · ' + (st.ok ? Comp.describe(st) : st.msg);
  }
  $('#natComp').onchange = natCambio; natCambio();

  $('#btnNat').onclick = function () {
    var k = natComp, box = $('#natOut');
    if (k.special === 'qualifiers') {
      Runner.mount(box, Qualifiers.create(NATIONS));
      box.scrollIntoView({ behavior: 'smooth', block: 'start' });
      return;
    }
    if (natModo === 'quali' && conClasificacion()) {
      var c = CLASI[k.id];
      var entran = deConf(k.conf).slice(0, c.entran);
      var G = entran.length / c.groupSize;
      montaConSorteo(box, entran, {
        name: 'Clasificación · ' + k.name,
        onlyGroups: true,
        structure: {
          ok: true, mode: 'groups', groups: G, groupSize: c.groupSize,
          bracket: k.size, perGroup: c.perGroup, extra: c.extra
        },
        tras: function (R) {
          R.alTerminar = function (fin) {
            natSel = fin.qualified.slice();
            natModo = 'mano';
            natPintaCupos(); natHint();
            $('#natCuposNota').textContent = 'Clasificadas en el campo. Pulsa «Simular» otra vez para jugar ' + k.name + '.';
          };
        }
      }, { title: 'Clasificación' });
      return;
    }
    montaConSorteo(box, natEquipos(), {
      name: k.name, groupSize: k.groupSize, neutral: true
    }, { title: k.name + ' · eliminatorias' });
  };

  /* =====================================================================
     VISTA · CREAR TORNEO
     ===================================================================== */
  var picked = [];
  function addTeam(t) { if (picked.indexOf(t) < 0) picked.push(t); }

  /* todo pasa por el menú visual: ni desplegables ni listas largas */
  $('#bldAddOne').onclick = function () {
    Picker.team({ title: 'Añadir equipo al torneo', onPick: function (t) { addTeam(t); drawBuilder(); } });
  };
  $('#bldAddAll').onclick = function () {
    Picker.league({
      title: 'Añadir una liga entera',
      onPick: function (lid) { LG[lid].teams.forEach(addTeam); drawBuilder(); }
    });
  };
  $('#bldAddTop').onclick = function () {
    Picker.league({
      title: 'Añadir los 8 mejores de una liga',
      onPick: function (lid) {
        LG[lid].teams.slice().sort(function (a, b) { return b.ovr - a.ovr; }).slice(0, 8).forEach(addTeam);
        drawBuilder();
      }
    });
  };
  $('#bldClear').onclick = function () { picked = []; drawBuilder(); };
  $('#bldGroupSize').onchange = drawBuilder;

  function drawBuilder() {
    $('#bldList').innerHTML = picked.length ? picked.map(function (t, i) {
      return '<span class="chip">' + crestOf(t, 18) + esc(t.n) + '<button data-i="' + i + '">✕</button></span>';
    }).join('') : '<p class="hint">Todavía no has añadido equipos.</p>';
    $$('#bldList .chip button').forEach(function (b) {
      b.onclick = function () { picked.splice(+b.dataset.i, 1); drawBuilder(); };
    });
    var gs = +$('#bldGroupSize').value;
    var st = Comp.structureFor(picked.length, gs);
    var fb = $('#bldFormat');
    fb.className = 'format-box' + (st.ok ? '' : ' bad');
    fb.innerHTML = '<b>' + picked.length + ' equipos</b> · ' + esc(Comp.describe(st));
    $('#btnBld').disabled = !st.ok;
  }
  drawBuilder();

  $('#btnBld').onclick = function () {
    var box = $('#bldOut');
    montaConSorteo(box, picked, {
      name: 'Torneo personalizado',
      groupSize: +$('#bldGroupSize').value,
      groupDouble: $('#bldGroupDouble').checked,
      legs: $('#bldLegs').checked ? 2 : 1,
      seeded: $('#bldSeeded').checked,
      sorteoAzar: !$('#bldSeeded').checked,   /* sin siembra, bombo único */
      neutral: true
    }, { title: 'Torneo personalizado' });
  };

  /* =====================================================================
     VISTA · EDITOR
     ===================================================================== */
  var POSITIONS = ['GK', 'RB', 'CB', 'LB', 'RWB', 'LWB', 'DM', 'CM', 'AM', 'RW', 'LW', 'ST', 'CF'];
  var edWork = null, edOriginal = null, edLeague = null;

  var edPick = LG[LEAGUE_IDS[0]].teams[0];
  $('#edPick').onclick = function () {
    Picker.team({ title: 'Editar equipo o selección', onPick: function (t) { edPick = t; edLoad(); } });
  };
  function edTeams() { edLoad(); }

  function edLoad() {
    var t = edPick;
    if (!t) { $('#edBox').innerHTML = ''; return; }
    edLeague = t.leagueId;
    pickBtn($('#edPick'), t, t.league);
    edOriginal = t;
    /* el uid y el crestId viajan con la copia: son la llave del escudo de
       verdad, y sin ellos la vista previa caía al escudo dibujado */
    edWork = JSON.parse(JSON.stringify({ n: t.n, s: t.s, c1: t.c1 || '#2b3444', c2: t.c2 || '#ffffff',
      logo: t.logo || '', p: t.p, flag: t.flag, isNation: t.isNation,
      uid: t.uid || null, crestId: t.crestId || null, leagueId: t.leagueId || null }));
    $('#edHint').textContent = Store.isEdited(edLeague, t.n) ? 'Editado por ti' : '';
    edDraw();
  }
  edLoad();

  /* el botón de nacionalidad de una fila: bandera y código, y al pulsarlo
     se abre el mismo selector de países de todo el juego */
  function natCelda(p, i) {
    var fifa = p[4] || (window.Nac ? Nac.de(p, edWork) : '');
    var band = (window.Nac && fifa) ? Nac.bandera(fifa, 13) : '';
    return '<button class="rowbtn natbtn" data-nat="' + i + '" title="Cambiar nacionalidad">' +
      band + '<span>' + esc(fifa || '—') + '</span></button>';
  }

  function edDraw() {
    var ovr = Engine.overall(edWork);
    var html = '<div class="ed-grid"><div>' +
      '<div class="ed-preview">' + crestOf(edWork, 46) +
      '<div class="badge-info"><b>' + esc(edWork.n) + '</b><span>' + esc(LG[edLeague].name) + '</span></div>' +
      '<div class="ovr"><b>' + ovr + '</b><span>GLOBAL</span>' + Stars.html(ovr) + '</div></div>' +
      '<div class="ed-field"><label>Nombre</label><input type="text" id="edName" value="' + esc(edWork.n) + '"></div>' +
      '<div class="ed-field"><label>Siglas del escudo</label><input type="text" id="edShort" maxlength="4" value="' + esc(edWork.s) + '"></div>' +
      (edWork.isNation ? '' :
        '<div class="ed-field"><label>Colores</label><div class="ed-colors">' +
        '<input type="color" id="edC1" value="' + esc(edWork.c1) + '"><input type="color" id="edC2" value="' + esc(edWork.c2) + '">' +
        '</div></div>' +
        '<div class="ed-field"><label>Escudo real (ruta de imagen)</label>' +
        '<input type="text" id="edLogo" placeholder="assets/crests/mi-escudo.png" value="' + esc(edWork.logo) + '"></div>') +
      '<div class="ed-field"><label>Valoración global</label><div class="ovr-row">' +
      '<input type="range" id="edOvr" min="40" max="95" value="' + ovr + '"><b id="edOvrV">' + ovr + '</b></div>' +
      '<p class="hint">Mover esto reescala toda la plantilla.</p></div>' +
      '<button class="primary" id="edSave">Guardar cambios</button>' +
      '</div><div>' +
      '<h3>Plantilla <small class="hint">— los 11 primeros son titulares</small></h3>' +
      '<div class="scroll tall"><table class="ptable"><thead><tr><th class="num">#</th><th>Jugador</th><th>Pos</th>' +
      '<th class="num">Val</th><th class="num">Edad</th><th>Nac.</th><th></th></tr></thead><tbody>';
    edWork.p.forEach(function (p, i) {
      html += '<tr class="' + (i < 11 ? 'starter' : '') + '"><td class="num" style="color:var(--dim)">' + (i + 1) + '</td>' +
        '<td><input type="text" data-f="0" data-i="' + i + '" value="' + esc(p[0]) + '"></td>' +
        '<td><select data-f="1" data-i="' + i + '">' + POSITIONS.map(function (q) {
          return '<option' + (q === p[1] ? ' selected' : '') + '>' + q + '</option>';
        }).join('') + '</select></td>' +
        '<td class="num"><input type="number" data-f="2" data-i="' + i + '" min="40" max="99" value="' + p[2] + '" style="width:62px"></td>' +
        '<td class="num"><input type="number" data-f="3" data-i="' + i + '" min="15" max="45" value="' + p[3] + '" style="width:62px"></td>' +
        '<td>' + natCelda(p, i) + '</td>' +
        '<td style="white-space:nowrap"><button class="rowbtn" data-up="' + i + '">↑</button> ' +
        '<button class="rowbtn" data-down="' + i + '">↓</button> ' +
        '<button class="rowbtn" data-del="' + i + '">✕</button></td></tr>';
    });
    html += '</tbody></table></div><button class="mini" id="edAddP" style="margin-top:10px">+ Añadir jugador</button></div></div>';
    $('#edBox').innerHTML = html;

    $$('#edBox input[data-f],#edBox select[data-f]').forEach(function (el) {
      el.onchange = function () {
        var i = +el.dataset.i, f = +el.dataset.f;
        edWork.p[i][f] = (f === 2 || f === 3) ? +el.value : el.value;
        if (f === 2) { var o = Engine.overall(edWork); $('#edOvr').value = o; $('#edOvrV').textContent = o; }
      };
    });
    $$('#edBox [data-nat]').forEach(function (b) {
      b.onclick = function () {
        var i = +b.dataset.nat;
        if (!window.Picker) return;
        Picker.team({
          title: 'Nacionalidad de ' + edWork.p[i][0], nations: 'only',
          onPick: function (sel) { edWork.p[i][4] = sel.s; edDraw(); }
        });
      };
    });
    $$('#edBox [data-up]').forEach(function (b) {
      b.onclick = function () { var i = +b.dataset.up; if (i > 0) { var x = edWork.p.splice(i, 1)[0]; edWork.p.splice(i - 1, 0, x); edDraw(); } };
    });
    $$('#edBox [data-down]').forEach(function (b) {
      b.onclick = function () { var i = +b.dataset.down; if (i < edWork.p.length - 1) { var x = edWork.p.splice(i, 1)[0]; edWork.p.splice(i + 1, 0, x); edDraw(); } };
    });
    $$('#edBox [data-del]').forEach(function (b) {
      b.onclick = function () {
        if (edWork.p.length <= 12) { alert('Hacen falta al menos 12 jugadores.'); return; }
        edWork.p.splice(+b.dataset.del, 1); edDraw();
      };
    });
    $('#edAddP').onclick = function () { edWork.p.push(['Nuevo jugador', 'CM', 70, 24]); edDraw(); };
    $('#edName').oninput = function () { edWork.n = this.value; };
    $('#edShort').oninput = function () { edWork.s = this.value.toUpperCase(); };
    if ($('#edC1')) $('#edC1').oninput = function () { edWork.c1 = this.value; edDrawPreview(); };
    if ($('#edC2')) $('#edC2').oninput = function () { edWork.c2 = this.value; edDrawPreview(); };
    if ($('#edLogo')) $('#edLogo').oninput = function () { edWork.logo = this.value.trim(); };
    $('#edOvr').oninput = function () {
      $('#edOvrV').textContent = this.value;
    };
    $('#edOvr').onchange = function () {
      Store.scaleToOverall(edWork, +this.value);
      edDraw();
    };
    $('#edSave').onclick = edSave;
  }
  function edDrawPreview() {
    $('.ed-preview').innerHTML = crestOf(edWork, 46) +
      '<div class="badge-info"><b>' + esc(edWork.n) + '</b><span>' + esc(LG[edLeague].name) + '</span></div>' +
      '<div class="ovr"><b>' + Engine.overall(edWork) + '</b><span>GLOBAL</span>' +
      Stars.html(Engine.overall(edWork)) + '</div>';
  }

  function edSave() {
    if (!edWork.n.trim()) { alert('El equipo necesita un nombre.'); return; }
    var ok = Store.saveTeam(edLeague, edOriginal.n, edWork);
    edOriginal.n = edWork.n; edOriginal.s = edWork.s;
    if (!edWork.isNation) { edOriginal.c1 = edWork.c1; edOriginal.c2 = edWork.c2; edOriginal.logo = edWork.logo; }
    edOriginal.p = JSON.parse(JSON.stringify(edWork.p));
    refreshOvr(edOriginal);
    LG[edLeague].teams.sort(function (a, b) { return a.n.localeCompare(b.n, 'es'); });
    rebuildSelectors();
    edPick = edOriginal;
    pickBtn($('#edPick'), edOriginal, edOriginal.league);
    edDraw();
    $('#edHint').textContent = ok ? 'Guardado ✓' : 'Guardado en memoria (el navegador bloquea el almacenamiento)';
  }

  $('#edNew').onclick = function () {
    var name = prompt('Nombre del nuevo equipo:');
    if (!name) return;
    var base = { n: name, s: name.slice(0, 3).toUpperCase(), c1: '#2b3444', c2: '#ffffff', p: [] };
    var tpl = [['GK', 70], ['RB', 70], ['CB', 70], ['CB', 70], ['LB', 70], ['DM', 70], ['CM', 70], ['AM', 70],
    ['RW', 70], ['ST', 70], ['LW', 70], ['GK', 66], ['CB', 66], ['LB', 66], ['CM', 66], ['RW', 66], ['ST', 66]];
    tpl.forEach(function (x, i) { base.p.push(['Jugador ' + (i + 1), x[0], x[1], 24]); });
    Store.addTeam(edLeague, base);
    base.leagueId = edLeague; base.league = LG[edLeague].name;
    if (LG[edLeague].isNations) base.isNation = true;
    base.userMade = true; refreshOvr(base);
    LG[edLeague].teams.push(base);
    LG[edLeague].teams.sort(function (a, b) { return a.n.localeCompare(b.n, 'es'); });
    ALL.push(base);
    rebuildSelectors();
    edPick = base;
    edLoad();
  };
  $('#edReset').onclick = function () {
    if (!confirm('¿Restaurar la plantilla original de ' + edOriginal.n + '?')) return;
    Store.resetTeam(edLeague, edOriginal.n);
    alert('Restaurado. Recarga la página para ver los datos originales.');
  };
  $('#edDelete').onclick = function () {
    if (!confirm('¿Eliminar ' + edOriginal.n + ' de la lista?')) return;
    Store.deleteTeam(edLeague, edOriginal.n);
    var arr = LG[edLeague].teams;
    arr.splice(arr.indexOf(edOriginal), 1);
    edPick = arr[0] || null;
    rebuildSelectors(); edLoad();
  };
  /* ---------- escudos reales desde archivo ---------- */
  $('#edCrestFiles').checked = Crest.usingFiles();
  $('#edCrestExt').value = Crest.ext();
  function crestPref() {
    Crest.setFiles($('#edCrestFiles').checked, $('#edCrestExt').value);
    $('#edCrestStatus').textContent = Crest.usingFiles()
      ? 'Activado. Recarga la página para aplicarlo en todas las vistas.'
      : 'Desactivado: se usan los escudos generados.';
    edDraw();
  }
  $('#edCrestFiles').onchange = crestPref;
  $('#edCrestExt').onchange = crestPref;

  $('#edExport').onclick = function () { $('#edJSON').value = Store.exportJSON(); };
  $('#edImport').onclick = function () {
    try { Store.importJSON($('#edJSON').value); alert('Importado. Recarga la página para aplicarlo.'); }
    catch (e) { alert('No pude leer esa copia: ' + e.message); }
  };
  $('#edWipe').onclick = function () {
    if (!confirm('Esto borra TODOS tus cambios y vuelve a los datos originales. ¿Seguro?')) return;
    Store.resetAll(); alert('Borrado. Recarga la página.');
  };

  function rebuildSelectors() {
    badge('home'); badge('away');
    if (sqPick) pickBtn($('#sqPick'), sqPick, sqPick.league);
  }

  /* =====================================================================
     VISTA · PLANTILLAS
     ===================================================================== */
  var sqPick = LG[LEAGUE_IDS[0]].teams[0];
  $('#sqPick').onclick = function () {
    Picker.team({ title: 'Ver plantilla', onPick: function (t) { sqPick = t; drawSquad(); } });
  };

  function drawSquad() {
    $('#sqSearch').value = '';
    var t = sqPick;
    if (!t) { $('#sqBox').innerHTML = ''; return; }
    pickBtn($('#sqPick'), t, t.league + ' · ' + t.p.length + ' jugadores');
    var st = Engine.strengths(Engine.buildTeam(t, 'bal'), 0);
    var html = '<div class="ed-preview">' + crestOf(t, 46) +
      '<div class="badge-info"><b>' + esc(t.n) + '</b><span>' + esc(t.league) + ' · ' + t.p.length + ' jugadores</span></div>' +
      '<div class="ovr"><b>' + t.ovr + '</b><span>GLOBAL</span>' + Stars.html(t.ovr) + '</div></div>' +
      '<table><thead><tr><th class="num">#</th><th>Jugador</th><th>Pos</th><th class="num">Edad</th><th class="num">Val</th></tr></thead><tbody>' +
      t.p.map(function (p, i) {
        return '<tr><td class="num" style="color:var(--dim)">' + (i < 11 ? i + 1 : '') + '</td><td>' +
          (window.Nac ? Nac.bandera(Nac.de(p, t), 12) : '') + esc(p[0]) +
          (i < 11 ? '' : ' <span class="hint">(supl.)</span>') + '</td><td style="color:var(--dim)">' + p[1] + '</td>' +
          '<td class="num">' + p[3] + '</td><td class="num"><span class="rt ' + ratClass(p[2]) + '">' + p[2] + '</span></td></tr>';
      }).join('') + '</tbody></table>' +
      '<p class="hint" style="margin-top:10px">ATA ' + Math.round(st.att) + ' · MED ' + Math.round(st.mid) + ' · DEF ' + Math.round(st.def) + '</p>';
    $('#sqBox').innerHTML = html;
  }

  drawSquad();

  $('#sqSearch').oninput = function () {
    var q = this.value.trim().toLowerCase();
    if (q.length < 3) { if (!q) drawSquad(); return; }
    var hits = [];
    ALL.forEach(function (t) {
      t.p.forEach(function (p) { if (p[0].toLowerCase().indexOf(q) >= 0) hits.push({ p: p, t: t }); });
    });
    hits.sort(function (a, b) { return b.p[2] - a.p[2]; });
    $('#sqBox').innerHTML = '<p class="hint">' + hits.length + ' resultados</p>' +
      '<table><thead><tr><th>Jugador</th><th>Equipo</th><th>Liga</th><th>Pos</th><th class="num">Edad</th><th class="num">Val</th></tr></thead><tbody>' +
      hits.slice(0, 150).map(function (h) {
        return '<tr><td>' + esc(h.p[0]) + '</td><td><div class="tname">' + crestOf(h.t, 18) + '<span>' + esc(h.t.n) + '</span></div></td>' +
          '<td style="color:var(--dim)">' + esc(h.t.league) + '</td><td style="color:var(--dim)">' + h.p[1] + '</td>' +
          '<td class="num">' + h.p[3] + '</td><td class="num"><span class="rt ' + ratClass(h.p[2]) + '">' + h.p[2] + '</span></td></tr>';
      }).join('') + '</tbody></table>';
  };

  /* =====================================================================
     AYUDANTES COMPARTIDOS CON EL MODO CARRERA
     ===================================================================== */
  window.UIX = {
    $: $, $$: $$, esc: esc, crest: crestOf, ratClass: ratClass,
    tableHTML: tableHTML, scorersHTML: scorersHTML, roundsHTML: roundsHTML,
    esMiFutbolista: esMiFutbolista,
    groupsHTML: groupsHTML, tieHTML: tieHTML, bracketHTML: bracketHTML,
    countries: COUNTRIES, leagues: LG, fillTeams: fillTeams, go: go
  };
})();
