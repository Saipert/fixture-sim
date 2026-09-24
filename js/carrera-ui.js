/* =========================================================================
   MODO CARRERA · JUGADOR — pantallas
   La creación del futbolista, su tablero, el cierre de temporada con las
   ofertas y el resumen de toda la carrera.
   ========================================================================= */
(function (global) {
  'use strict';

  var $ = function (s, r) { return (r || document).querySelector(s); };
  var esc = function (s) {
    return String(s == null ? '' : s).replace(/&/g, '&amp;').replace(/</g, '&lt;')
      .replace(/>/g, '&gt;').replace(/"/g, '&quot;');
  };
  function crest(t, s) {
    return '<span class="cw" style="width:' + s + 'px;height:' + s + 'px">' +
      (global.Crest ? Crest.html(t, s) : '') + '</span>';
  }
  function band(fifa, h) { return global.Nac ? Nac.bandera(fifa, h || 14) : ''; }
  /* el tablero nos presta la tabla con zonas */
  var HOOK = {};
  function conecta(h) { HOOK = h || {}; }

  /* El escudo de un club del historial. Se guarda su uid, pero si viene de
     una partida vieja se busca por nombre. */
  var INDICE = null;
  function indexa() {
    INDICE = { uid: {}, nombre: {} };
    Object.keys(global.LEAGUES || {}).forEach(function (id) {
      if (id === '__nations__') return;
      global.LEAGUES[id].teams.forEach(function (t) {
        if (t.uid) INDICE.uid[t.uid] = t;
        if (!INDICE.nombre[t.n]) INDICE.nombre[t.n] = t;
      });
    });
  }
  function clubDe(uid, nombre) {
    if (!INDICE) indexa();
    var t = (uid && INDICE.uid[uid]) || (nombre && INDICE.nombre[nombre]);
    if (!t && uid) { indexa(); t = INDICE.uid[uid] || INDICE.nombre[nombre]; }
    return t || null;
  }
  /* escudo + nombre, para las tablas de la carrera */
  function clubHTML(nombre, uid, nat, size) {
    var s = size || 18;
    if (nat) return '<span class="cl">' + band(nat, s) + '<b>' + esc(nombre) + '</b></span>';
    var t = clubDe(uid, nombre);
    return '<span class="cl">' + (t ? crest(t, s) : '') + '<b>' + esc(nombre) + '</b></span>';
  }
  function estrellas(v) { return global.Stars ? Stars.html(v) : ''; }

  /* =====================================================================
     CREACIÓN DEL JUGADOR
     ===================================================================== */
  var POR_DEFECTO = 'David Saipert';
  var nuevo = { nombre: POR_DEFECTO, nat: '', pos: 'ST', ofertas: [], elegida: -1 };
  var alEmpezar = null;

  function naciones() {
    return (global.NATIONS || []).slice().sort(function (a, b) {
      return a.n.localeCompare(b.n, 'es');
    });
  }

  /* Dónde va cada puesto en el campo. El central, el pivote, el medio, el
     mediapunta y el delantero forman la columna; laterales y extremos, a los
     lados. Se toca el que se quiere ser. */
  var SITIOS = [
    { p: 'ST', x: 50, y: 11 }, { p: 'LW', x: 13, y: 23 }, { p: 'RW', x: 87, y: 23 },
    { p: 'AM', x: 50, y: 34 }, { p: 'CM', x: 50, y: 48 }, { p: 'DM', x: 50, y: 61 },
    { p: 'LB', x: 11, y: 74 }, { p: 'CB', x: 50, y: 75 }, { p: 'RB', x: 89, y: 74 },
    { p: 'GK', x: 50, y: 88 }
  ];
  function nombrePuesto(p) {
    var x = Carrera.POSICIONES.filter(function (q) { return q.p === p; })[0];
    return x ? x.n : p;
  }
  function campoHTML() {
    return '<div class="pitch crea-pitch"><div class="halfway"></div><div class="circle"></div>' +
      SITIOS.map(function (s2) {
        return '<button type="button" class="pos-slot' + (nuevo.pos === s2.p ? ' on' : '') +
          '" data-pos="' + s2.p + '" style="left:' + s2.x + '%;top:' + s2.y + '%" ' +
          'title="' + esc(nombrePuesto(s2.p)) + '">' +
          '<span class="ps-dot">' + s2.p + '</span>' +
          '<span class="ps-nom">' + esc(nombrePuesto(s2.p)) + '</span></button>';
      }).join('') + '</div>';
  }

  /* La caja de «continuar partida» es la misma de la pantalla de inicio: se
     muda al hueco de la creación y se devuelve al salir. Así no hay botones
     duplicados ni handlers repetidos. */
  var cajaSitio = null, cajaPadre = null;
  function mudaGuardada() {
    var box = document.getElementById('wLoadBox'), hueco = $('#crGuardada');
    if (!box || !hueco) return;
    if (!cajaPadre) { cajaPadre = box.parentNode; cajaSitio = box.nextSibling; }
    box.classList.remove('hidden');
    hueco.appendChild(box);
  }
  function devuelveGuardada() {
    var box = document.getElementById('wLoadBox');
    if (!box || !cajaPadre) return;
    cajaPadre.insertBefore(box, cajaSitio);
  }

  function pintaCreacion() {
    var caja = $('#wJugador');
    if (!caja) return;
    /* la caja de partida guardada vive fuera: se rescata antes de vaciar
       esto, o el repintado se la lleva por delante */
    devuelveGuardada();
    var listo = nuevo.nombre.trim().length >= 3 && nuevo.nat;
    var sel = nuevo.nat && global.Nac ? Nac.seleccion(nuevo.nat) : null;
    var ligas = nuevo.nat && global.Carrera ? Carrera.ligasCantera(nuevo.nat) : [];
    var lid = ligas.length ? ligas[ligas.length - 1] : null;
    var nombresLigas = ligas.slice().reverse().map(function (l) { return global.LEAGUES[l].name; });

    caja.innerHTML =
      '<h3>Crea tu futbolista <small>16 años y toda una carrera por delante</small></h3>' +
      '<div class="crea2' + (nuevo.ofertas.length ? ' tres' : '') + '">' +

      '<div class="crea-col">' +
      '<div class="crea-campo"><label for="crNombre">Nombre y apellido</label>' +
      '<input type="text" id="crNombre" maxlength="28" placeholder="' + esc(POR_DEFECTO) + '" value="' +
      esc(nuevo.nombre) + '"></div>' +

      '<div class="crea-campo"><label>Nacionalidad</label>' +
      '<button type="button" class="crea-pick' + (sel ? ' puesto' : '') + '" id="crNat">' +
      (sel ? band(sel.s, 26) + '<span class="cp-txt"><b>' + esc(sel.n) + '</b>' +
        '<small>' + esc(sel.conf) + ' · media ' + sel.ovr + '</small></span>'
        : '<span class="cp-txt"><b>Elige tu país</b><small>de ahí saldrán tus primeras ofertas</small></span>') +
      '<span class="cp-mas">›</span></button></div>' +

      (nombresLigas.length
        ? '<div class="crea-nota"><b>Empezarás en ' + esc(nombresLigas.join(', ')) + '</b>' +
          '<small>Tu media será la de los clubes de la liga en la que firmes.</small></div>'
        : (sel ? '<div class="crea-nota"><b>Sin liga propia</b>' +
          '<small>Jugarás en el resto de tu confederación.</small></div>' : '')) +

      '<div class="crea-campo"><label>Posición</label>' +
      '<div class="crea-elegida">' + esc(nuevo.pos) + ' · ' + esc(nombrePuesto(nuevo.pos)) + '</div></div>' +

      '<div class="toolbar" style="margin-top:4px">' +
      '<button class="primary" id="crBuscar"' + (listo ? '' : ' disabled') + '>Buscar club</button>' +
      '<button class="mini" id="crVolver">‹ Volver</button></div>' +
      '<p class="hint">' + (listo ? 'Te saldrán tres ofertas de tu país, una por división.'
        : 'Pon tu nombre y elige de dónde eres.') + '</p>' +
      '<div id="crGuardada" class="crea-guardada"></div>' +
      '</div>' +

      (nuevo.ofertas.length ? '<div class="crea-col ofertas-col">' + ofertasHTML() + '</div>' : '') +

      '<div class="crea-col ancha">' +
      '<label class="crea-lab">Toca tu posición</label>' + campoHTML() +
      '</div></div>';

    mudaGuardada();

    $('#crNombre').oninput = function () { nuevo.nombre = this.value; toggleBuscar(); };
    $('#crNat').onclick = function () {
      Picker.team({
        title: '¿De dónde eres?', nations: 'only',
        onPick: function (t) { nuevo.nat = t.s; nuevo.ofertas = []; pintaCreacion(); }
      });
    };
    caja.querySelectorAll('[data-pos]').forEach(function (b) {
      b.onclick = function () { nuevo.pos = b.getAttribute('data-pos'); pintaCreacion(); };
    });
    $('#crBuscar').onclick = function () {
      nuevo.ofertas = Carrera.ofertasInicio(nuevo.nat);
      nuevo.elegida = -1;
      pintaCreacion();
    };
    $('#crVolver').onclick = function () {
      devuelveGuardada();
      caja.classList.add('hidden');
      $('#wModo').classList.remove('hidden');
    };
    caja.querySelectorAll('[data-of]').forEach(function (b) {
      b.onclick = function () {
        nuevo.elegida = +b.getAttribute('data-of');
        pintaCreacion();
      };
    });
    var fir = $('#crFirmar');
    if (fir) fir.onclick = function () {
      var o = nuevo.ofertas[nuevo.elegida];
      if (!o || !alEmpezar) return;
      devuelveGuardada();
      alEmpezar({ nombre: nuevo.nombre.trim(), nat: nuevo.nat, pos: nuevo.pos, club: o.club });
    };
  }
  function toggleBuscar() {
    var b = $('#crBuscar');
    if (b) b.disabled = !(nuevo.nombre.trim().length >= 3 && nuevo.nat);
  }

  function ofertasHTML() {
    return '<h4 class="subh">Tres clubes te quieren <small>elige dónde empiezas</small></h4>' +
      '<div class="ofertas fila">' + nuevo.ofertas.map(function (o, i) {
        return '<button class="oferta' + (nuevo.elegida === i ? ' on' : '') + '" data-of="' + i + '">' +
          crest(o.club, 40) +
          '<span class="of-txt"><b>' + esc(o.club.n) + '</b>' +
          '<small>' + esc(o.liga) + '</small>' + estrellas(o.nivel) + '</span>' +
          '<span class="of-nivel"><span class="of-ovr">' + o.nivel + '</span>' +
          '<small class="hint">tu media</small></span>' + '</button>';
      }).join('') + '</div>' +
      '<div class="toolbar" style="margin-top:10px">' +
      '<button class="primary" id="crFirmar"' + (nuevo.elegida < 0 ? ' disabled' : '') + '>' +
      'Firmar y empezar</button>' +
      '<span class="hint">' + (nuevo.elegida < 0 ? 'Pulsa uno de los tres.'
        : 'Contrato de 3 años en ' + esc(nuevo.ofertas[nuevo.elegida].club.n) + '.') + '</span></div>';
  }


  function abreCreacion(cb) {
    alEmpezar = cb;
    nuevo = { nombre: POR_DEFECTO, nat: '', pos: 'ST', ofertas: [], elegida: -1 };
    $('#wModo').classList.add('hidden');
    $('#wStart').classList.add('hidden');
    $('#wJugador').classList.remove('hidden');
    pintaCreacion();
  }

  /* =====================================================================
     TABLERO DEL JUGADOR
     ===================================================================== */
  var ROL_TXT = {
    titular: ['Titular', 'Sales de inicio.'],
    suplente: ['Suplente', 'Empiezas en el banco.'],
    'no convocado': ['No convocado', 'Esta vez te quedas fuera de la lista.'],
    fuera: ['Sin equipo', '']
  };

  function cabecera() {
    var j = Carrera.jugador();
    if (!j) return '';
    var st = World.state;
    return band(j.nat, 30) +
      '<div><div class="big">' + esc(j.nombre) + '</div>' +
      '<div class="sub2">' + esc(j.pos) + ' · ' + j.edad + ' años · ' +
      (j.club ? esc(j.club.n) : 'sin equipo') + '</div></div>' +
      '<span class="pill">Media <b>' + j.ovr + '</b></span>' +
      '<span class="pill">Temporada <b>' + Temporada(st.year) + '</b></span>' +
      (j.temp ? '<span class="pill">Partidos <b>' + j.temp.pjEquipo + '</b></span>' : '') +
      '<span class="pill">Contrato <b>' + j.contrato.restan + '</b> año' +
      (j.contrato.restan === 1 ? '' : 's') + '</span>';
  }

  /* en un partido de selección tu equipo es tu país */
  function miEquipoEn(nx) {
    var j = Carrera.jugador();
    if (nx && nx.cmp === 'Selección' && global.SelCarrera) {
      return SelCarrera.miSeleccion() || j.club;
    }
    return j.club;
  }
  /* y el sitio en el once se mira en la lista de la selección */
  function miRolEn(nx) {
    if (!nx || nx.cmp !== 'Selección') return Carrera.rol();
    var j = Carrera.jugador();
    var sel = global.SelCarrera ? SelCarrera.miSeleccion() : null;
    if (!sel) return 'fuera';
    var i = (sel.p || []).indexOf(j.p);
    var banca = 11 + ((global.Engine && Engine.BANQUILLO) || 7);
    return i < 0 ? 'no convocado' : i < 11 ? 'titular' : i < banca ? 'suplente' : 'no convocado';
  }

  function panelProximo(nx) {
    var j = Carrera.jugador();
    var r = miRolEn(nx);
    var t = ROL_TXT[r] || ROL_TXT.fuera;
    var cab = '<div class="rolbox rol-' + r.replace(/ /g, '-') + '">' +
      '<b>' + t[0] + '</b><small>' + t[1] + '</small></div>';
    if (!nx) {
      /* antes de cerrar nada, el parón de selecciones: se juega partido a
         partido desde aquí, igual que en modo entrenador */
      if (global.World && World.seleccionesPendientes && World.seleccionesPendientes()) {
        return cab + '<div class="nextm"><div class="comp">Se acabó la temporada del club</div>' +
          '<p class="hint" style="margin:12px 0">Queda el parón de selecciones. ' +
          'Cuando lo termines podrás cerrar la temporada.</p>' +
          '<div class="simbtns"><button class="primary" id="bSel">Ir a selección nacional</button>' +
          '</div></div>';
      }
      return cab + '<div class="nextm"><div class="comp">Sin partidos pendientes</div>' +
        '<div class="simbtns"><button class="mini" id="bWeek">Ir al siguiente partido</button>' +
        '<button class="mini" id="bRest">Ir al final de la temporada</button></div></div>';
    }
    var mio = miEquipoEn(nx);
    return cab + '<div class="nextm"><div class="comp">' + esc(nx.comp) + ' · ' + esc(nx.round) + '</div>' +
      '<div class="vs2">' + ladoJ(nx.home ? mio : nx.opp) +
      '<div class="mid">VS</div>' + ladoJ(nx.home ? nx.opp : mio) + '</div>' +
      '<div class="where">' + (nx.neutral ? 'Cancha neutral'
        : nx.home ? 'En casa' : 'A domicilio') +
      (nx.nPartido ? ' · partido ' + nx.nPartido +
        (nx.dePartidos ? ' de ' + nx.dePartidos : '') : '') + '</div>' +
      '<div class="simbtns">' +
      '<button class="primary" id="bVisual">Ver el partido</button>' +
      '<button class="mini" id="bQuick">Simulación rápida</button>' +
      '<button class="mini" id="bWeek">Saltar este partido</button>' +
      '</div></div>';
  }
  function ladoJ(t) {
    if (!t) return '<div class="side"></div>';
    /* el escudo abre la ficha del club */
    var marca = ' data-perfil="' + esc((t.leagueId || '') + '|' + t.n) +
      '" title="Ver la ficha de ' + esc(t.n) + '"';
    return '<div class="side pinchable"' + marca + '>' + crest(t, 54) +
      '<b>' + esc(t.n) + '</b>' +
      '<span class="side-est">' + estrellas(t.ovr) + '</span></div>';
  }

  /* la temporada en curso, en números */
  function panelTemporada() {
    var j = Carrera.jugador(), t = j.temp;
    var rend = Carrera.rendimiento();
    var filas = [
      ['Partidos', t.pj + ' <small>de ' + t.pjEquipo + '</small>'],
      ['Titular', t.titular],
      ['Desde el banco', t.suplente],
      ['Goles', t.g],
      ['Asistencias', t.a]
    ];
    if (Engine.group(j.pos) === 'DEF' || j.pos === 'GK') {
      filas.push(['Porterías a cero', t.vallas]);
      filas.push(['Goles encajados', t.pjEquipo ? (t.gcEquipo / t.pjEquipo).toFixed(2) + ' por partido' : '—']);
    }
    var vs = selVisto(t.selPj, t.selG, t.selA);
    if (vs.pj) filas.push(['Selección', vs.pj + ' PJ · ' + vs.g + ' G · ' + vs.a + ' A']);
    return '<table class="micarrera"><tbody>' + filas.map(function (f) {
      return '<tr><td>' + f[0] + '</td><td class="num"><b>' + f[1] + '</b></td></tr>';
    }).join('') + '</tbody></table>' +
      '<div class="rendbar" title="Cómo te está yendo la temporada">' +
      '<i style="width:' + Math.round(rend * 100) + '%"></i></div>' +
      '<p class="hint">Valoración de la temporada: ' + Math.round(rend * 100) + ' sobre 100</p>';
  }

  /* Las cuentas con la selección descontando los partidos que siguen en la
     cola: el torneo entero ya está simulado, pero él no lo ha visto. */
  function selVisto(pj, g, a) {
    var p = HOOK.selPendiente ? HOOK.selPendiente() : null;
    if (!p) return { pj: pj || 0, g: g || 0, a: a || 0 };
    return { pj: Math.max(0, (pj || 0) - p.pj), g: Math.max(0, (g || 0) - p.g),
      a: Math.max(0, (a || 0) - p.a) };
  }
  function panelSeleccion() {
    var j = Carrera.jugador();
    var vc = selVisto(j.sel.pj, j.sel.g, j.sel.a);
    var sel = global.Nac ? Nac.seleccion(j.nat) : null;
    if (!sel) return '<p class="hint">Tu país no tiene selección en el juego.</p>';
    var falta = (sel.ovr || 0) - 4 - j.ovr;
    var st = World.state;
    var fase = global.SelCarrera
      ? SelCarrera.NOMBRE_FASE[SelCarrera.faseActual()] : '';
    return '<div class="selbox">' + band(sel.s, 26) +
      '<div><b>' + esc(sel.n) + '</b><small>media ' + sel.ovr + '</small></div>' +
      '<span class="pill ' + (Carrera.convocable() ? 'ok' : 'no') + '">' +
      (Carrera.convocable() ? 'Convocado' : 'Fuera de la lista') + '</span></div>' +
      (Carrera.convocable() ? '' :
        '<p class="hint">Te faltan <b>' + Math.max(1, falta) + '</b> puntos de media para entrar ' +
        '(entran desde ' + ((sel.ovr || 0) - 4) + ').</p>') +
      '<p class="hint">Este año toca: <b>' + esc(fase) + '</b>. Se juega al cerrar la temporada.</p>' +
      (vc.pj ? '<p class="hint">Llevas ' + vc.pj + ' partidos con ' + esc(sel.n) +
        ' · ' + vc.g + ' goles y ' + vc.a + ' asistencias.</p>' : '');
  }

  function vistaJugador(nx) {
    var j = Carrera.jugador();
    if (!j) return '';
    if (j.retirado) return vistaRetirado();
    var comp = panelCompeticion(nx);
    return '<div class="dash">' +
      '<div class="dcol r21">' +
      '<div class="panel"><h3>Tu temporada <small>' + esc(j.temp.club) + '</small></h3>' +
      '<div class="pbody tight">' + panelTemporada() + '</div></div>' +
      '<div class="panel"><h3>Selección</h3><div class="pbody tight">' + panelSeleccion() + '</div></div>' +
      '</div>' +
      '<div class="dcol rpart">' +
      '<div class="panel"><h3>Próximo partido</h3><div class="pbody">' + panelProximo(nx) + '</div></div>' +
      '<div class="panel"><h3>Tu ficha</h3><div class="pbody tight">' + fichaHTML() + '</div></div>' +
      '</div>' +
      /* la tercera columna mira a la competición que toca */
      '<div class="panel"><h3>' + esc(comp.titulo) + ' <small>' + esc(comp.sub) + '</small></h3>' +
      '<div class="pbody tight">' + comp.html + '</div></div>' +
      '</div>';
  }

  /* ---------------------------------------------------------------------
     LA COMPETICIÓN QUE TOCA
     --------------------------------------------------------------------- */
  function tablaLiga(lid) {
    if (!lid || !HOOK.tabla || !World.state.leagues[lid]) return null;
    return HOOK.tabla(lid, { form: true });
  }
  /* una tabla de grupo, cortita */
  function tablaGrupo(g, mio, c) {
    /* la tabla se corta en la jornada que el jugador ya vio */
    var filas = (c && HOOK.filasGrupo) ? HOOK.filasGrupo(c, g)
      : (g.standings || Comp.sortTable(g.table));
    return '<table class="minitab"><thead><tr><th class="num">#</th><th>Equipo</th>' +
      '<th class="num">PJ</th><th class="num">DG</th><th class="num">Pts</th></tr></thead><tbody>' +
      filas.map(function (r, i) {
        return '<tr class="' + (i < 2 ? 'z-ucl' : '') + (r.t === mio ? ' me' : '') + '">' +
          '<td class="num"><span class="pos-chip">' + (i + 1) + '</span></td>' +
          '<td><div class="tname">' + crest(r.t, 18) + '<span>' + esc(r.t.n) + '</span></div></td>' +
          '<td class="num">' + r.pj + '</td>' +
          '<td class="num">' + (r.gf - r.gc > 0 ? '+' : '') + (r.gf - r.gc) + '</td>' +
          '<td class="num"><b>' + r.pts + '</b></td></tr>';
      }).join('') + '</tbody></table>';
  }
  /* El marcador de un cruce, venga de donde venga: un partido, dos piernas
     o todavía sin jugar. */
  function marcadorTie(t) {
    if (t.single && t.leg1) return [t.leg1.s[0], t.leg1.s[1]];
    if (t.agg) return [t.agg[0], t.agg[1]];
    if (t.leg1) return [t.leg1.s[0], t.leg1.s[1]];
    if (t.s) return [t.s[0], t.s[1]];
    return ['', ''];
  }

  /* La ronda entera en cuatro columnas: escudo contra escudo, sin nombres,
     que en este panel no caben. */
  function crucesHTML(ties) {
    if (!ties || !ties.length) return '<p class="hint">Todavía no hay cruces.</p>';
    var j = Carrera.jugador() || {}, mio = j.club;
    return '<div class="crugrid">' + ties.map(function (t) {
      if (!t || !t.a) return '';
      if (!t.b) {
        return '<div class="cru' + (t.a === mio ? ' mine' : '') + '" title="' + esc(t.a.n) + '">' +
          '<span class="cl win">' + crest(t.a, 44) + '</span><b class="bye">bye</b></div>';
      }
      var m = marcadorTie(t);
      var jugado = m[0] !== '';
      var pen = t.pens ? '<u>' + t.pens.a + '-' + t.pens.b + '</u>' : '';
      return '<div class="cru' + (t.a === mio || t.b === mio ? ' mine' : '') +
        '" title="' + esc(t.a.n) + ' - ' + esc(t.b.n) + '">' +
        '<span class="cl' + (t.w === t.a ? ' win' : '') + '">' + crest(t.a, 44) + '</span>' +
        '<b>' + (jugado ? m[0] + '<i>-</i>' + m[1] : '<i>vs</i>') + pen + '</b>' +
        '<span class="cl' + (t.w === t.b ? ' win' : '') + '">' + crest(t.b, 44) + '</span>' +
        '</div>';
    }).join('') + '</div>';
  }
  /* la competición continental por su nombre */
  function contPorNombre(nombre) {
    var st = World.state, out = null;
    Object.keys(st.conts || {}).forEach(function (id) {
      if (st.conts[id].name === nombre) out = st.conts[id];
    });
    return out;
  }
  function copaPorNombre(nombre) {
    var st = World.state, out = null;
    Object.keys(st.cups || {}).forEach(function (id) {
      if (st.cups[id].name === nombre) out = st.cups[id];
    });
    return out;
  }

  function panelCompeticion(nx) {
    var j = Carrera.jugador();
    var club = j.club;
    var lid = club ? club.leagueId : null;
    var lg = lid && global.LEAGUES[lid] ? global.LEAGUES[lid] : null;
    var porDefecto = {
      titulo: 'Clasificación', sub: lg ? lg.name : '',
      html: tablaLiga(lid) || '<p class="hint">Tu equipo no juega liga esta temporada.</p>'
    };
    /* en el parón manda la selección: su grupo o su ronda */
    if (nx && nx.cmp === 'Selección' && HOOK.panelSeleccion) {
      var ps = HOOK.panelSeleccion();
      if (ps) return ps;
    }
    if (!nx || !club) return porDefecto;

    if (nx.cmp === 'Cont.') {
      var c = contPorNombre(nx.comp);
      if (c) {
        /* fase de grupos: el grupo del equipo */
        var mig = null;
        (c.groups || []).forEach(function (g) { if (g.teams.indexOf(club) >= 0) mig = g; });
        if (mig && /grupo/i.test(nx.round)) {
          return { titulo: 'Clasificación', sub: c.name + ' \u00b7 ' + mig.name,
            html: tablaGrupo(mig, club, c) };
        }
        /* eliminatoria: todos los cruces de su ronda */
        var ronda = null;
        (c.koRounds || []).forEach(function (r) {
          if (r.ties.some(function (t) { return t.a === club || t.b === club; })) ronda = r;
        });
        if (!ronda && (c.prelimTies || []).some(function (t) { return t.a === club || t.b === club; })) {
          ronda = { name: 'Fase previa', ties: c.prelimTies };
        }
        if (ronda) {
          /* si el cruce propio sigue en la cola, la ronda va sin marcadores */
          var ciego = !!(HOOK.enEspera && HOOK.enEspera(c.name));
          var vistos = (ciego && HOOK.tieCiego) ? ronda.ties.map(HOOK.tieCiego) : ronda.ties;
          return { titulo: ronda.name + (ciego ? ' \u00b7 por jugar' : ''),
            sub: c.name + ' \u00b7 ' + ronda.ties.length + ' cruces',
            html: crucesHTML(vistos) };
        }
        if (mig) {
          return { titulo: 'Clasificación', sub: c.name + ' \u00b7 ' + mig.name,
            html: tablaGrupo(mig, club, c) };
        }
      }
    }

    if (nx.cmp === 'Copa') {
      var cup = copaPorNombre(nx.comp);
      if (cup) {
        var r2 = null;
        (cup.rounds || []).forEach(function (r) {
          if (r.ties.some(function (t) { return t.a === club || t.b === club; }) && !r.ties[0].w) r2 = r;
        });
        if (!r2 && HOOK.proximaCopa) {
          var prox = HOOK.proximaCopa(cup);
          if (prox && prox.ties.some(function (t) { return t.a === club || t.b === club; })) {
            r2 = { name: prox.name, ties: prox.ties };
          }
        }
        if (!r2 && (cup.rounds || []).length) r2 = cup.rounds[cup.rounds.length - 1];
        if (r2) {
          return { titulo: r2.name, sub: cup.name + ' \u00b7 ' + r2.ties.length + ' cruces',
            html: crucesHTML(r2.ties) };
        }
      }
    }

    return porDefecto;
  }

  function fichaHTML() {
    var j = Carrera.jugador();
    return '<div class="fichaj">' +
      '<div class="fj-ovr"><b>' + j.ovr + '</b><span>MEDIA</span>' + estrellas(j.ovr) + '</div>' +
      '<div class="fj-datos">' +
      '<div>' + band(j.nat, 16) + esc(Nac.nombre(j.nat)) + '</div>' +
      '<div>' + esc(j.pos) + ' · ' + j.edad + ' años</div>' +
      (j.club ? '<div>' + crest(j.club, 18) + esc(j.club.n) +
        ' <span class="fj-est">' + estrellas(j.club.ovr) + '</span></div>' : '') +
      '<div>Contrato: ' + j.contrato.restan + ' de ' + j.contrato.anios + ' años</div>' +
      '<div>Debutó en ' + j.debut + '</div>' +
      '</div></div>';
  }

  function vistaRetirado() {
    var j = Carrera.jugador();
    var tot = Carrera.totales();
    return '<div class="panel"><h3>Carrera terminada</h3><div class="pbody">' +
      '<div class="retirado">' + band(j.nat, 40) +
      '<h2>' + esc(j.nombre) + '</h2>' +
      '<p>' + Temporada(j.debut) + ' — ' + Temporada(World.state.year - 1) + ' · se retiró con ' + j.edad + ' años ' +
      'y una media de ' + j.ovr + '.</p>' +
      '<p><b>' + tot.pj + '</b> partidos · <b>' + tot.g + '</b> goles · <b>' + tot.a + '</b> asistencias</p>' +
      (tot.selPj ? '<p>Con su selección: ' + tot.selPj + ' partidos, ' + tot.selG + ' goles.</p>' : '') +
      '<p>' + (j.palmares.length ? j.palmares.length + ' títulos' : 'Sin títulos') + '.</p>' +
      '</div></div></div>';
  }

  /* =====================================================================
     MI CARRERA
     ===================================================================== */
  function vistaMiCarrera() {
    var j = Carrera.jugador();
    if (!j) return '';
    var temporadas = j.historial.concat(j.temp && j.temp.pjEquipo ? [j.temp] : []);
    var tot = Carrera.totales();

    var porAnio = '<table class="micarrera ancha"><thead><tr>' +
      '<th>Año</th><th>Club</th>' +
      '<th class="num">PJ</th><th class="num">G</th><th class="num">A</th>' +
      '<th class="num">Sel.</th></tr></thead><tbody>' +
      (temporadas.length ? temporadas.slice().reverse().map(function (t) {
        return '<tr><td>' + Temporada(t.anio) + '</td>' +
          '<td>' + clubHTML(t.club, t.clubUid) +
          '<small class="hint">' + esc(t.liga || '') + '</small></td>' +
          '<td class="num">' + t.pj + '</td><td class="num">' + t.g + '</td><td class="num">' + t.a + '</td>' +
          '<td class="num">' + (t.selPj ? t.selPj : '—') + '</td></tr>';
      }).join('') : '<tr><td colspan="6" class="hint">Todavía no has terminado ninguna temporada.</td></tr>') +
      '</tbody></table>';

    var ciclos = Carrera.ciclos();
    var porClub = '<table class="micarrera ancha"><thead><tr>' +
      '<th>Etapa</th><th>Club</th><th class="num">Temp.</th>' +
      '<th class="num">PJ</th><th class="num">G</th><th class="num">A</th></tr></thead><tbody>' +
      (ciclos.length ? ciclos.slice().reverse().map(function (c) {
        return '<tr><td>' + c.desde + '/' + (c.hasta + 1) + '</td>' +
          '<td>' + clubHTML(c.club, c.uid) +
          '<small class="hint">' + esc(c.liga || '') + '</small></td>' +
          '<td class="num">' + c.temporadas + '</td><td class="num">' + c.pj + '</td>' +
          '<td class="num">' + c.g + '</td><td class="num">' + c.a + '</td></tr>';
      }).join('') : '<tr><td colspan="6" class="hint">—</td></tr>') + '</tbody></table>';

    var sel = global.Nac ? Nac.seleccion(j.nat) : null;
    var totales = '<div class="totales">' +
      caja('Carrera en clubes', tot.pj + ' PJ', tot.g + ' goles · ' + tot.a + ' asistencias') +
      caja(sel ? esc(sel.n) : 'Selección', tot.selPj + ' PJ', tot.selG + ' goles · ' + tot.selA + ' asistencias') +
      caja('Total', (tot.pj + tot.selPj) + ' PJ', (tot.g + tot.selG) + ' goles · ' +
        (tot.a + tot.selA) + ' asistencias') +
      '</div>';

    return '<div class="micarrera-wrap">' +
      '<div class="panel"><h3>Temporada a temporada</h3><div class="pbody tight">' + porAnio + '</div></div>' +
      '<div class="panel"><h3>Por etapa</h3><div class="pbody tight">' + porClub + '</div></div>' +
      '<div class="panel"><h3>Totales</h3><div class="pbody tight">' + totales + '</div></div>' +
      '<div class="panel"><h3>Con tu selección <small>' + esc(sel ? sel.n : '') + '</small></h3>' +
      '<div class="pbody tight">' + seleccionHTML() + '</div></div>' +
      '</div>';
  }
  /* Todos los títulos del jugador desde que se creó. Vive aquí porque es
     donde están el escudo del club de cada época y la bandera, pero se
     enseña en la pestaña de Palmarés. */
  function palmaresJugador() {
    var j = Carrera.jugador();
    if (!j) return '';
    var pal = j.palmares.slice().reverse();
    if (!pal.length) return '<p class="hint">Todavía no has ganado nada. Tiempo hay.</p>';
    return '<div class="palmares">' + pal.map(function (p) {
      var t = p.nat ? null : clubDe(p.uid, p.club);
      return '<div class="pal"><span class="pal-cup">🏆</span>' +
        (p.nat ? band(p.nat, 22) : (t ? crest(t, 24) : '')) +
        '<div><b>' + esc(p.titulo) + '</b><small>' + esc(p.club) + ' · ' +
        Temporada(p.anio) + '</small></div></div>';
    }).join('') + '</div>';
  }
  function caja(t, a, b) {
    return '<div class="tot"><small>' + t + '</small><b>' + a + '</b><span>' + b + '</span></div>';
  }

  /* =====================================================================
     CALENDARIO
     Nada de lista: una cuadrícula con el escudo del rival, su nombre y
     debajo la competición.
     ===================================================================== */
  function vistaCalendario(cal, club) {
    var j = global.Carrera && Carrera.activa() ? Carrera.jugador() : null;
    var mio = club || (j && j.club);
    if (!mio) return '';
    /* En orden de fecha y quietos: un partido no cambia de sitio por
       haberse jugado, sólo se le pone el marcador encima. */
    var mios = (cal || []).slice().sort(function (a, b) {
      return (a.week || 0) - (b.week || 0);
    });
    var jugados = mios.filter(function (e) { return e.res; });
    var pendientes = mios.filter(function (e) { return !e.res; });
    var siguiente = pendientes[0];

    function ficha(e, siguiente, n) {
      var cls = 'calcard';
      var marc = '';
      if (e.res) {
        var mios = e.res.h === mio ? e.res.s[0] : e.res.s[1];
        var suyo = e.res.h === mio ? e.res.s[1] : e.res.s[0];
        cls += mios > suyo ? ' gano' : mios === suyo ? ' empate' : ' perdio';
        marc = '<span class="cc-res">' + e.res.s[0] + '-' + e.res.s[1] +
          (e.pens ? ' <i>(' + e.pens.a + '-' + e.pens.b + ')</i>' : '') + '</span>';
      } else if (siguiente) cls += ' proximo';
      return '<div class="' + cls + '">' +
        '<span class="cc-semana">' + n + '</span>' +
        /* jugar en casa se marca con una casita; fuera no hace falta decir
           nada, y en la copa nadie juega en casa */
        (e.home && !e.neutral ? '<span class="cc-loc" title="En casa">' +
          '<svg viewBox="0 0 24 24" width="13" height="13" aria-hidden="true">' +
          '<path fill="currentColor" d="M12 3.2 2.8 11h2.4v9.2h5.1v-5.6h3.4v5.6h5.1V11h2.4z"/>' +
          '</svg></span>' : '') +
        '<div class="cc-escudo">' + crest(e.opp, 46) + '</div>' +
        '<b>' + esc(e.opp.n) + '</b>' +
        '<small>' + esc(e.comp) + '</small>' +
        '<small class="cc-ronda">' + esc(e.round) + '</small>' +
        marc + '</div>';
    }

    return '<div class="micarrera-wrap uno">' +
      '<div class="panel"><h3>Calendario <small>' + jugados.length + ' jugados · ' +
      pendientes.length + ' por jugar</small></h3>' +
      '<div class="pbody">' + (mios.length
        ? '<div class="calgrid">' + mios.map(function (e, i) {
            return ficha(e, e === siguiente, i + 1);
          }).join('') + '</div>'
        : '<p class="hint">Todavía no hay calendario.</p>') + '</div></div>' +
      '</div>';
  }

  /* =====================================================================
     EL PARÓN DE SELECCIONES
     ===================================================================== */
  /* Lo que hizo tu país este verano y lo que hiciste tú con él. */
  function paronHTML(sum) {
    if (!sum || !sum.miSeleccion) return '';
    var j = Carrera.jugador();
    var m = sum.miSeleccion;
    var sel = global.Nac ? Nac.seleccion(j.nat) : null;
    var t = j.historial[j.historial.length - 1] || { selPj: 0, selG: 0, selA: 0 };
    var final = m.campeon ? '<b class="campeon">campeón</b>'
      : esc(m.puesto || (m.clasificado ? 'clasificada' : 'eliminada'));
    var mios = m.convocado
      ? (t.selPj ? t.selPj + ' partidos, ' + t.selG + ' goles y ' + t.selA + ' asistencias'
        : 'estuviste en la lista pero no llegaste a jugar')
      : 'no estuviste convocado';
    return '<div class="paron">' +
      (sel ? band(sel.s, 30) : '') +
      '<div class="paron-txt"><b>' + esc(m.torneo) + '</b>' +
      '<small>' + esc(m.seleccion) + ': ' + final + '</small>' +
      '<small>' + mios + '</small></div>' +
      (m.campeon ? '<span class="paron-cup">🏆</span>' : '') + '</div>' +
      (sum.campeon ? '<p class="hint">Lo ganó ' + esc(sum.campeon.n) + '.</p>' : '') +
      '<div class="toolbar" style="margin:6px 0 2px">' +
      '<button class="mini" data-cr="torneo">Ver el torneo completo</button></div>';
  }

  /* la tabla de todos los veranos, para Mi carrera */
  function seleccionHTML() {
    var j = Carrera.jugador();
    var h = (World.state.seleccionHistorial || []).filter(function (x) { return x.nat === j.nat; });
    if (!h.length) return '<p class="hint">Todavía no ha habido ningún torneo de selecciones.</p>';
    return '<table class="micarrera ancha"><thead><tr><th>Año</th><th>Torneo</th>' +
      '<th class="num">PJ</th><th class="num">G</th><th class="num">A</th>' +
      '<th>Resultado</th></tr></thead><tbody>' +
      h.slice().reverse().map(function (x) {
        var m = x.mio || {};
        var res = m.campeon ? '<b class="campeon">campeón</b>'
          : esc(m.puesto || (m.clasificado ? 'clasificada' : '—'));
        return '<tr><td>' + Temporada(x.anio) + '</td>' +
          '<td>' + esc(m.torneo || x.nombre) + '</td>' +
          '<td class="num">' + (x.pj || 0) + '</td>' +
          '<td class="num">' + (x.g || 0) + '</td>' +
          '<td class="num">' + (x.a || 0) + '</td>' +
          '<td>' + res + '</td></tr>';
      }).join('') + '</tbody></table>';
  }


  /* =====================================================================
     CIERRE DE TEMPORADA
     ===================================================================== */
  function vistaFinTemporada(fin, sumSel) {
    var j = Carrera.jugador();
    var d = fin.delta;
    var cab = '<div class="fintemp">' +
      '<div class="ft-ovr"><small>Tu media</small><b>' + j.ovr + '</b>' +
      '<span class="' + (d > 0 ? 'up' : d < 0 ? 'down' : '') + '">' +
      (d > 0 ? '+' + d : d) + '</span></div>' +
      '<div class="ft-txt"><b>' + esc(j.nombre) + ', ' + j.edad + ' años</b>' +
      '<small>Temporada ' + Temporada(World.state.year - 1) + ' con ' + esc(j.historial.length ?
        j.historial[j.historial.length - 1].club : '') + ': ' +
      (j.historial.length ? j.historial[j.historial.length - 1].pj + ' partidos, ' +
        j.historial[j.historial.length - 1].g + ' goles y ' +
        j.historial[j.historial.length - 1].a + ' asistencias' : '') + '.</small>' +
      '<small>Valoración del año: ' + Math.round(fin.rend * 100) + ' sobre 100.</small></div></div>';

    var selTxt = paronHTML(sumSel);

    var contrato;
    if (fin.obligadoRetirarse) {
      contrato = '<p class="aviso">Se acabó: con ' + j.edad + ' años cuelgas las botas.</p>' +
        '<button class="primary" data-cr="retiro">Retirarme</button>';
    } else if (fin.libre && !fin.renueva) {
      contrato = '<p class="aviso">Tu contrato ha terminado y ' +
        esc(j.club ? j.club.n : 'el club') + ' no te renueva. Tienes que elegir destino.</p>';
    } else if (fin.libre) {
      contrato = '<p class="aviso">' + esc(j.club ? j.club.n : 'El club') +
        ' quiere renovarte ' + fin.anios + ' años más.</p>';
    } else {
      contrato = '<p class="hint">Te quedan ' + j.contrato.restan + ' años de contrato en ' +
        esc(j.club ? j.club.n : '') + '.</p>';
    }

    var puedeSeguir = !fin.obligadoRetirarse && (!fin.libre || fin.renueva);
    var botones = '<div class="toolbar" style="margin-top:10px">' +
      (puedeSeguir ? '<button class="primary" data-cr="sigue">Seguir en ' +
        esc(j.club ? j.club.n : '') + '</button>' : '') +
      (fin.puedeRetirarse && !fin.obligadoRetirarse ?
        '<button class="mini danger" data-cr="retiro">Retirarme</button>' : '') +
      '</div>';

    var ofertas = fin.obligadoRetirarse ? '' :
      '<h4 class="subh">Ofertas <small>clubes a menos de ' + Carrera.RANGO_OFERTAS +
      ' puntos de tu media</small></h4><div class="ofertas">' +
      j.ofertas.map(function (o, i) {
        return '<button class="oferta" data-oferta="' + i + '">' +
          crest(o.club, 40) + '<b>' + esc(o.club.n) + '</b>' +
          '<small>' + esc(o.liga) + '</small>' +
          '<span class="of-ovr">' + o.club.ovr + '</span>' +
          '<small class="hint">' + o.anios + ' años</small></button>';
      }).join('') + '</div>';

    return '<div class="panel"><h3>Fin de temporada</h3><div class="pbody">' +
      cab + selTxt + contrato + botones + ofertas + '</div></div>';
  }

  global.CarreraUI = {
    abreCreacion: abreCreacion, cabecera: cabecera,
    conecta: conecta, vistaCalendario: vistaCalendario,
    palmaresJugador: palmaresJugador,
    vistaJugador: vistaJugador, vistaMiCarrera: vistaMiCarrera,
    vistaFinTemporada: vistaFinTemporada, vistaRetirado: vistaRetirado
  };
})(window);
