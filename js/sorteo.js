/* =========================================================================
   SORTEOS QUE SE VEN
   Los bombos a un lado, los grupos (o los cruces) al otro, y las bolas van
   saliendo de una en una, como el sorteo del Mundial. Lo usan todas las
   competiciones sueltas: continentales, copas nacionales, selecciones y
   torneos creados por el usuario.

     Sorteo.grupos(caja, { campo, nGrupos, titulo, sub, onListo })
     Sorteo.cruces(caja, { bombos, nombres, esperan, titulo, sub, onListo })
     Sorteo.reparteBye(equipos)   -> { esperan, juegan }
   ========================================================================= */
(function (global) {
  'use strict';

  var esc = function (s) {
    return String(s == null ? '' : s).replace(/&/g, '&amp;').replace(/</g, '&lt;')
      .replace(/>/g, '&gt;').replace(/"/g, '&quot;');
  };
  function crest(t, s) {
    return '<span class="cw" style="width:' + s + 'px;height:' + s + 'px">' +
      (global.Crest ? Crest.html(t, s) : '') + '</span>';
  }
  function baraja(a) { return global.Comp ? Comp.shuffle(a) : a.slice(); }
  /* de dónde es cada uno: el país para los clubes, la confederación para las
     selecciones. Es lo que no se puede repetir dentro de un grupo. */
  function origen(t, zona) {
    if (!t) return '';
    if (zona) return zona(t) || '';
    if (t.isNation) return t.conf || '';
    if (global.Draw && Draw.countryOf) return Draw.countryOf(t) || '';
    return t.leagueId || '';
  }
  function ident(t) { return t ? (t.leagueId || '') + '|' + t.n : ''; }

  function linea(t, clase, cola) {
    if (!t) return '<div class="drawline"><span class="hint">—</span></div>';
    return '<div class="drawline' + (clase ? ' ' + clase : '') + '" title="' + esc(t.n) + '">' +
      crest(t, 18) + '<span>' + esc(t.n) + '</span>' +
      (cola ? '<small>' + esc(cola) + '</small>' : '') + '</div>';
  }
  /* el mando de arriba: sacar una bola, terminar el sorteo o empezar a jugar */
  function barra(hecho, quedan, aviso, boton, nombres) {
    return '<div class="toolbar so-bar">' +
      '<button class="primary" data-so="bola"' + (hecho ? ' disabled' : '') + '>' +
      esc(nombres[0]) + '</button>' +
      '<button class="mini" data-so="todo"' + (hecho ? ' disabled' : '') + '>Completar sorteo</button>' +
      '<button class="mini' + (hecho ? ' primary' : '') + '" data-so="ok"' +
      (hecho ? '' : ' disabled') + '>' + esc(boton || 'Empezar a jugar') + '</button>' +
      '<span class="hint">' + (aviso
        ? esc(aviso) + (hecho ? ' · sorteo completo' : '')
        : (hecho ? 'Sorteo completo. Ya se puede jugar.' : 'Quedan ' + quedan + ' ' + nombres[1] + '.')) +
      '</span></div>';
  }
  /* engancha los tres botones */
  function manda(caja, saca, todo, listo) {
    var card = caja.querySelector('.so-card');
    if (!card) return;
    card.onclick = function (e) {
      var n = e.target;
      while (n && n !== card && !n.getAttribute('data-so')) n = n.parentNode;
      if (!n || n === card) return;
      var a = n.getAttribute('data-so');
      if (a === 'bola') return saca();
      if (a === 'todo') return todo();
      if (a === 'ok') return listo();
    };
  }

  /* =====================================================================
     SORTEO DE GRUPOS
     ===================================================================== */
  function grupos(caja, opts) {
    var campo = opts.campo.slice();
    var n = opts.nGrupos;
    /* con siembra los bombos van por nivel; sin ella, todos al mismo saco */
    var orden = opts.azar ? baraja(campo)
      : campo.slice().sort(function (a, b) { return (b.ovr || 0) - (a.ovr || 0); });
    var bombos = [], porBombo = Math.ceil(orden.length / n);
    for (var b = 0; b < porBombo; b++) bombos.push(orden.slice(b * n, (b + 1) * n));
    var pendientes = bombos.map(function (p) { return baraja(p); });

    var gs = [], puestos = {};
    for (var g = 0; g < n; g++) {
      gs.push({ name: 'Grupo ' + String.fromCharCode(65 + g), teams: [], de: {} });
    }
    var bi = 0, ultima = '';

    function quedan() {
      var q = 0;
      pendientes.forEach(function (p) { q += p.length; });
      return q;
    }
    /* saca una bola y la mete donde quepa */
    function bola() {
      while (bi < pendientes.length && !pendientes[bi].length) bi++;
      if (bi >= pendientes.length) return;
      var t = pendientes[bi].shift();
      var o = origen(t, opts.zonaDe);
      var sitio = gs.filter(function (gr) { return gr.teams.length <= bi; });
      var limpios = sitio.filter(function (gr) { return !gr.de[o]; });
      if (limpios.length) sitio = limpios;
      sitio.sort(function (x, y) { return x.teams.length - y.teams.length; });
      var gr = sitio[0] || gs[0];
      gr.teams.push(t);
      gr.de[o] = 1;
      puestos[ident(t)] = gr.name;
      ultima = t.n + ' → ' + gr.name;
    }

    function pinta() {
      var hecho = !quedan();
      caja.innerHTML = '<div class="card so-card wcdraw"><h3>' +
        esc(opts.titulo || 'Sorteo de la fase de grupos') + ' <small>' +
        esc(opts.sub || (campo.length + ' equipos · ' + n + ' grupos')) + '</small></h3>' +
        barra(hecho, quedan(), ultima, opts.boton, ['Sacar bola', 'bolas']) +
        '<div class="drawsplit"><div class="drawcol pots-col"><h4 class="drawhd">Bombos</h4><div class="pots">' +
        bombos.map(function (p, i) {
          return '<div class="potbox' + (i === bi && !hecho ? ' now' : '') + '">' +
            '<h4>Bombo ' + (i + 1) + '<small>' + pendientes[i].length + ' por salir</small></h4>' +
            p.map(function (t) {
              var d = puestos[ident(t)];
              return linea(t, d ? 'done' : '', d ? d.replace('Grupo ', '') : String(t.ovr || ''));
            }).join('') + '</div>';
        }).join('') + '</div></div>' +
        '<div class="drawcol groups-col"><h4 class="drawhd">Grupos</h4><div class="groups">' +
        gs.map(function (gr) {
          return '<div class="gbox"><h4>' + esc(gr.name) + '</h4>' +
            (gr.teams.length ? gr.teams.map(function (t) { return linea(t); }).join('')
              : '<p class="hint">vacío</p>') + '</div>';
        }).join('') + '</div></div></div></div>';

      manda(caja,
        function () { bola(); pinta(); },
        function () { var gu = 0; while (quedan() && gu++ < 500) bola(); pinta(); },
        function () {
          caja.innerHTML = '';
          opts.onListo(gs.map(function (gr) { return { name: gr.name, teams: gr.teams }; }));
        });
    }
    pinta();
    caja.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  /* =====================================================================
     SORTEO DE CRUCES
     Dos bombos: sale uno de cada uno y queda abierta la eliminatoria.
     ===================================================================== */
  function cruces(caja, opts) {
    var esperan = (opts.esperan || []).slice();
    var b1 = opts.bombos[0].slice(), b2 = opts.bombos[1].slice();
    var nom = opts.nombres || ['Bombo 1', 'Bombo 2'];
    var p1 = baraja(b1), p2 = baraja(b2);
    var choca = opts.choca || function (a, b) {
      var oa = origen(a), ob = origen(b);
      return !!oa && oa === ob;
    };
    var hechos = [], ultima = '';

    function quedan() { return Math.min(p1.length, p2.length); }
    function bola() {
      if (!p1.length || !p2.length) return;
      var a = p1.shift(), j = 0;
      /* si el primero de la urna no vale (mismo país, mismo grupo) se busca
         el siguiente que sí; si no vale ninguno, se acepta el que salió */
      while (j < p2.length - 1 && choca(a, p2[j])) j++;
      if (choca(a, p2[j])) j = 0;
      var b = p2.splice(j, 1)[0];
      hechos.push([a, b]);
      ultima = a.n + ' — ' + b.n;
    }

    function urna(titulo, quedanEn, todos) {
      return '<div class="potbox' + (quedanEn.length ? ' now' : '') + '"><h4>' + esc(titulo) +
        '<small>' + quedanEn.length + ' por salir</small></h4>' +
        todos.map(function (t) {
          return linea(t, quedanEn.indexOf(t) < 0 ? 'done' : '', String(t.ovr || ''));
        }).join('') + '</div>';
    }

    function pinta() {
      var hecho = !quedan();
      caja.innerHTML = '<div class="card so-card wcdraw"><h3>' +
        esc(opts.titulo || 'Sorteo del cuadro') + ' <small>' +
        esc(opts.sub || ((hechos.length + quedan()) + ' eliminatorias')) + '</small></h3>' +
        barra(hecho, quedan(), ultima, opts.boton, ['Sacar bola', 'cruces']) +
        '<div class="drawsplit"><div class="drawcol pots-col"><h4 class="drawhd">Bombos</h4><div class="pots">' +
        urna(nom[0], p1, b1) + urna(nom[1], p2, b2) +
        (esperan.length ? '<div class="potbox"><h4>Ya esperan<small>' + esperan.length + '</small></h4>' +
          esperan.map(function (t) { return linea(t, 'done'); }).join('') + '</div>' : '') +
        '</div></div>' +
        '<div class="drawcol groups-col"><h4 class="drawhd">Eliminatorias</h4><div class="socruces">' +
        (hechos.length ? hechos.map(function (p, i) {
          return '<div class="socruce"><span class="so-num">' + (i + 1) + '</span>' +
            '<span class="so-eq">' + crest(p[0], 22) + '<b>' + esc(p[0].n) + '</b></span>' +
            '<em>vs</em>' +
            '<span class="so-eq der"><b>' + esc(p[1].n) + '</b>' + crest(p[1], 22) + '</span></div>';
        }).join('') : '<p class="hint">Todavía no ha salido ninguna bola.</p>') +
        '</div></div></div></div>';

      manda(caja,
        function () { bola(); pinta(); },
        function () { var gu = 0; while (quedan() && gu++ < 300) bola(); pinta(); },
        function () {
          caja.innerHTML = '';
          var campo = [];
          hechos.forEach(function (p) { campo.push(p[0], p[1]); });
          opts.onListo(campo, esperan);
        });
    }
    pinta();
    caja.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  /* Cuando no son potencia de dos, los mejores esperan a la segunda ronda.
     Es el mismo reparto que hace el cuadro por su cuenta. */
  function reparteBye(equipos) {
    var n = equipos.length, K = 1;
    while (K * 2 <= n) K *= 2;
    if (n === K) return { esperan: [], juegan: equipos.slice() };
    var orden = equipos.slice().sort(function (a, b) { return (b.ovr || 0) - (a.ovr || 0); });
    var byN = K * 2 - n;
    return { esperan: orden.slice(0, byN), juegan: orden.slice(byN) };
  }

  global.Sorteo = { grupos: grupos, cruces: cruces, reparteBye: reparteBye };
})(window);
