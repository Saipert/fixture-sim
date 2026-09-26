/* =========================================================================
   MODO CARRERA — tablero
   ========================================================================= */
(function () {
  'use strict';
  var X = window.UIX;
  var $ = X.$, $$ = X.$$, esc = X.esc, crest = X.crest;
  var COUNTRIES = X.countries, LG = X.leagues;

  var me = null, started = false, sub = 'club';
  /* 'dt' dirige un club; 'jugador' vive la carrera de un futbolista */
  var modo = 'dt', miSel = null, finTemp = null;
  var selNac = null, selNacManual = false;   /* la selección que dirige el DT */
  var mv = null, playing = false, currentMatch = null, matchVisual = false, matchOver = false;
  var matchQueue = [], matchIdx = 0;   // el equipo puede jugar 2 partidos la misma semana
  var selSlot = null, selBench = null;
  /* los filtros de Resultados, que se pintan en la barra de pestañas */
  var resBar = '';
  /* en qué paso del torneo estamos: grupos, octavos, cuartos... Vale igual
     para los torneos de selecciones y para las copas continentales. */
  var selPaso = null, selPasoClave = '', pasosVista = [];
  /* qué competición de selecciones se está mirando */
  var selBloque = null;
  var rConf = 'UEFA', rScope = null, rComp = null, rView = null;
  var changing = false;

  var CONF_ORDER = ['MIAS', 'UEFA', 'CONMEBOL', 'CONCACAF', 'AFC', 'CAF', 'OFC', 'SEL'];
  var CONF_LABEL = {
    MIAS: 'Mis competencias',
    UEFA: 'Europa', CONMEBOL: 'Sudamérica', CONCACAF: 'Norte y Centroamérica',
    AFC: 'Asia', CAF: 'África', OFC: 'Oceanía', SEL: 'Selecciones'
  };
  var LMETA = {};
  COUNTRIES.forEach(function (c) {
    c.have.forEach(function (l) { LMETA[l] = { flag: c.flag, conf: c.conf, country: c.name, cid: c.id }; });
  });
  /* los emoji de bandera no se dibujan en Windows: se usan las imágenes
     reales de logos/paises/ y el texto queda sin emoji */
  function flagImg(cid, h) {
    var f = cid && window.COUNTRY_FLAG_FILE ? window.COUNTRY_FLAG_FILE[cid] : null;
    if (!f) return '';
    return '<img class="cflag" src="logos/paises/' + f + '.png" alt="" ' +
      'height="' + (h || 13) + '" onerror="this.remove()">';
  }
  function lflagImg(id, h) { return flagImg((LMETA[id] || {}).cid, h); }
  /* la bandera del país del jugador */
  function natImg(p, h) { return window.Nac ? Nac.bandera(Nac.de(p, me), h || 12) : ''; }
  function lflag(id) { return ''; }
  /* nombre de país legible para los sorteos (en vez del id de liga) */
  function countryName(t) {
    if (t.countryId && window.CLUB_COUNTRY && window.CLUB_COUNTRY[t.n]) return window.CLUB_COUNTRY[t.n];
    var m = LMETA[t.leagueId];
    return m ? m.country : Draw.countryOf(t);
  }
  /* la clave que espera el desplegable de país: «C:arg», no «arg» */
  function paisDeMiLiga() {
    var cid = me ? (LMETA[me.leagueId] || {}).cid : null;
    return cid ? 'C:' + cid : null;
  }
  function lname(id) { return (lflag(id) ? lflag(id) + ' ' : '') + LG[id].name; }

  /* posiciones sobre el campo, por formación */
  var COORDS = {
    GK: [50, 93],
    RB: [85, 76], LB: [15, 76], CB: [50, 80], RWB: [88, 64], LWB: [12, 64],
    DM: [50, 62], CM: [50, 50], AM: [50, 38],
    RW: [82, 26], LW: [18, 26], ST: [50, 16], CF: [50, 18]
  };
  /* El campo se dibuja por líneas: el nombre de la formación ya dice
     cuántos van en cada una (4-4-2 son cuatro atrás, cuatro en el medio y
     dos arriba) y dentro de cada línea se abren en horizontal. */
  var LADO = {
    LB: 0, LWB: 0, LW: 1, CB: 5, DM: 5, CM: 5, AM: 5, ST: 5, CF: 5,
    RW: 9, RB: 10, RWB: 10
  };
  /* de qué formación son estos puestos */
  function lineasDe(slots) {
    var clave = slots.join('|'), nombre = null;
    Object.keys(Engine.FORMATIONS).forEach(function (k) {
      if (Engine.FORMATIONS[k].join('|') === clave) nombre = k;
    });
    if (!nombre) return null;
    return nombre.split('-').map(Number);
  }

  function layout(slots) {
    var pos = new Array(slots.length);
    var filas = [], corte = 1;
    var lineas = lineasDe(slots);
    if (lineas) {
      lineas.forEach(function (n) {
        filas.push(slots.slice(corte, corte + n).map(function (s, k) {
          return { s: s, i: corte + k };
        }));
        corte += n;
      });
    } else {
      /* sin formación conocida, por líneas del motor */
      var por = {};
      slots.forEach(function (s, i) {
        if (i === 0) return;
        var g = Engine.group(s);
        (por[g] = por[g] || []).push({ s: s, i: i });
      });
      ['DEF', 'MID', 'ATT'].forEach(function (g) { if (por[g]) filas.push(por[g]); });
    }
    /* el portero, abajo del todo */
    pos[0] = [50, 92];

    var L = filas.length;
    filas.forEach(function (fila, fi) {
      /* de izquierda a derecha según el puesto */
      fila.sort(function (a2, b2) {
        var la = LADO[a2.s] == null ? 5 : LADO[a2.s];
        var lb = LADO[b2.s] == null ? 5 : LADO[b2.s];
        return la - lb || a2.i - b2.i;
      });
      var n = fila.length;
      var paso = n <= 1 ? 0 : n === 2 ? 30 : n === 3 ? 28 : n === 4 ? 24 : n === 5 ? 20 : 16;
      var y = L <= 1 ? 50 : 76 - fi * (76 - 24) / (L - 1);
      fila.forEach(function (p, k) {
        var x = 50 + (k - (n - 1) / 2) * paso;
        pos[p.i] = [Math.max(9, Math.min(91, x)), Math.max(10, Math.min(94, y))];
      });
    });
    for (var z = 0; z < pos.length; z++) if (!pos[z]) pos[z] = [50, 50];
    return pos;
  }

  /* ---------- pantalla de inicio ----------
     Las ligas se ven en cuanto se entra: nada preseleccionado. Es la misma
     rejilla del Picker, pero incrustada en la pantalla en vez de en un modal. */
  var startTeam = null;
  var sel = { conf: 'UEFA', league: null, q: '', cat: Picker.catalog(), shown: [] };

  function selTabs() {
    var tabs = Picker.confs.filter(function (c) {
      return sel.cat.some(function (x) { return Picker.enZona(x, c.id); });
    });
    var html = tabs.map(function (t) {
      return '<button class="pk-tab' + (t.id === sel.conf ? ' on' : '') + '" data-c="' +
        t.id + '">' + esc(t.label) + '</button>';
    }).join('');
    if (sel.cat.some(function (x) { return !x.conf; })) {
      html += '<button class="pk-tab' + (sel.conf === 'OTRAS' ? ' on' : '') +
        '" data-c="OTRAS">Otras</button>';
    }
    $('#wSelTabs').innerHTML = html;
  }

  function selPaint() {
    var body = $('#wSelBody'), q = Picker.norm(sel.q.trim()), html = '';
    sel.shown = [];
    $('#wSelBack').hidden = !sel.league;

    if (q.length >= 2) {
      var hits = sel.cat.filter(function (c) {
        return Picker.norm(c.name + ' ' + c.country).indexOf(q) >= 0;
      }).slice(0, 12);
      if (hits.length) {
        html += '<h5 class="pk-sec">Ligas</h5><div class="pk-lgs">' +
          hits.map(function (c) { return Picker.leagueCard(c); }).join('') + '</div>';
      }
      sel.cat.forEach(function (c) {
        c.lg.teams.forEach(function (t) {
          if (sel.shown.length >= 160) return;
          if (Picker.norm(t.n).indexOf(q) >= 0) sel.shown.push(t);
        });
      });
      html += '<h5 class="pk-sec">Equipos (' + sel.shown.length + ')</h5><div class="pk-tms">' +
        (sel.shown.length ? sel.shown.map(tarjetaConDinero).join('')
          : '<p class="hint">Nada que coincida.</p>') + '</div>';
      $('#wSelCrumb').textContent = 'Resultados de "' + sel.q.trim() + '"';

    } else if (sel.league) {
      var lg = LG[sel.league];
      var meta = sel.cat.filter(function (x) { return x.id === sel.league; })[0];
      sel.shown = lg.teams.slice().sort(function (a, b) { return (b.ovr || 0) - (a.ovr || 0); });
      html = '<div class="pk-tms">' + sel.shown.map(tarjetaConDinero).join('') + '</div>';
      $('#wSelCrumb').textContent = (meta && meta.country ? meta.country + ' · ' : '') +
        lg.name + ' · elige tu club';

    } else {
      var list = sel.cat.filter(function (c) { return Picker.enZona(c, sel.conf); })
        .sort(Picker.byRank);
      html = list.length
        ? '<div class="pk-lgs">' + list.map(function (c) { return Picker.leagueCard(c); }).join('')
        + '</div>'
        : '<p class="hint">No hay ligas en esta zona.</p>';
      $('#wSelCrumb').textContent = 'Elige primero la liga';
    }

    body.innerHTML = html;
    Picker.watchLogos(body);
    marcarElegido();
  }

  /* deja resaltada la tarjeta del club elegido, si está a la vista */
  /* la tarjeta del selector, con el presupuesto del club */
  function tarjetaConDinero(t, i) {
    var h = Picker.teamCard(t, i);
    if (!window.Market) return h;
    return h.replace('</button>',
      '<u class="pk-tm-eur">' + Market.dinero(Market.presupuesto(t)) + '</u></button>');
  }

  function marcarElegido() {
    if (!startTeam) return;
    var i = sel.shown.indexOf(startTeam);
    if (i < 0) return;
    var b = $('#wSelBody').querySelector('[data-t="' + i + '"]');
    if (b) b.classList.add('sel');
  }

  /* ---------- elegir entre entrenador y jugador ---------- */
  function volverAlModo() {
    finTemp = null;
    modo = 'dt';
    refreshSaveInfo();
    $('#wModo').classList.remove('hidden');
    $('#wStart').classList.add('hidden');
    $('#wJugador').classList.add('hidden');
    $('#wLoadBox').classList.remove('hidden');
  }
  if ($('#wModo')) {
    $('#wModo').onclick = function (e) {
      var b = e.target;
      while (b && b !== this && !b.getAttribute('data-modo')) b = b.parentNode;
      if (!b || b === this) return;
      modo = b.getAttribute('data-modo');
      /* cada modo tiene su propia partida guardada */
      refreshSaveInfo();
      $('#wModo').classList.add('hidden');
      /* Cada modo esconde el panel del otro. Si no, al pasar por «Jugador»
         y volver a entrar como «Entrenador», la ficha de creación se queda
         puesta y empuja el selector de clubes mil cuatrocientos píxeles
         hacia abajo: en el teléfono parecía que no estaban las ligas. */
      if (modo === 'jugador') {
        $('#wStart').classList.add('hidden');
        CarreraUI.abreCreacion(function (datos) {
          World.create({ manualDraw: false });
          if (window.Carrera) {
            Carrera.limpia();
            var j = Carrera.crea(datos);
            Carrera.ajustaSeleccion();
            enterGame(j.club);
          }
        });
      } else {
        $('#wJugador').classList.add('hidden');
        $('#wStart').classList.remove('hidden');
        $('#wLoadBox').classList.remove('hidden');
      }
    };
  }

  /* el selector de selección de la pantalla de inicio */
  function pintaSelNac() {
    var b = $('#wSelNac'), chk = $('#wConSel');
    if (!b || !chk) return;
    b.classList.toggle('hidden', !chk.checked);
    if (!chk.checked) return;
    if (!selNacManual && startTeam && window.Nac) {
      var fifa = Nac.paisDeLiga(startTeam.leagueId);
      selNac = fifa ? Nac.seleccion(fifa) : null;
    }
    b.innerHTML = selNac
      ? (window.Nac ? Nac.bandera(selNac.s, 13) : '') + esc(selNac.n) + ' ›'
      : 'Elegir selección ›';
  }
  if ($('#wConSel')) $('#wConSel').onchange = pintaSelNac;
  if ($('#wSelNac')) $('#wSelNac').onclick = function () {
    Picker.team({
      title: 'Elige la selección que vas a dirigir', nations: 'only',
      onPick: function (t) { selNac = t; selNacManual = true; pintaSelNac(); }
    });
  };

  function paintStartPick() {
    var box = $('#wPick'), hay = !!startTeam;
    $('#wBegin').disabled = !hay;
    $('#wOtro').classList.toggle('hidden', !hay);
    /* con club elegido no pinta nada tener delante lo de continuar partida */
    $('#wLoadBox').classList.toggle('hidden', hay);
    $('#wSelBody').classList.toggle('apagado', hay);
    $('#wSelFoot').classList.toggle('elegido', hay);
    if (!hay) {
      box.innerHTML = '<span class="hint">Elige un club de la lista para empezar</span>';
      return;
    }
    pintaSelNac();
    var est = window.Market ? Market.estadio(startTeam) : null;
    var estrellas = window.Stars ? Stars.html(startTeam.ovr) : '';
    box.innerHTML =
      '<span class="pb-crest">' + Crest.html(startTeam, 46) + '</span>' +
      '<span class="pb-txt"><b>' + esc(startTeam.n) + '</b>' +
      '<small>' + esc(startTeam.league || '') + '</small></span>' +
      '<span class="pb-dato"><small>Valoración</small><b>' + startTeam.ovr + '</b>' + estrellas + '</span>' +
      (window.Market ? '<span class="pb-dato"><small>Presupuesto</small>' +
        '<b class="oro">' + Market.dinero(Market.presupuesto(startTeam)) + '</b></span>' : '') +
      (est ? '<span class="pb-dato"><small>' + esc(est.est || 'Estadio') + '</small><b>' +
        est.cap.toLocaleString('es') + ' plazas</b></span>' : '');
  }

  $('#wSelTabs').onclick = function (e) {
    var b = e.target.closest ? e.target.closest('[data-c]') : null;
    if (!b) return;
    sel.conf = b.getAttribute('data-c'); sel.league = null; sel.q = ''; $('#wSelQ').value = '';
    selTabs(); selPaint();
  };
  $('#wSelBody').onclick = function (e) {
    var n = e.target;
    while (n && n !== this && !n.getAttribute('data-l') && !n.getAttribute('data-t')) n = n.parentNode;
    if (!n || n === this) return;
    var lid = n.getAttribute('data-l');
    if (lid) {
      sel.league = lid; sel.q = ''; $('#wSelQ').value = '';
      var c = sel.cat.filter(function (x) { return x.id === lid; })[0];
      if (c && c.conf) { sel.conf = Picker.zonaDe(c.conf) || sel.conf; selTabs(); }
      selPaint();
      $('#wSelBody').scrollTop = 0;
      return;
    }
    var t = sel.shown[+n.getAttribute('data-t')];
    if (!t) return;
    startTeam = t;
    var prev = $('#wSelBody').querySelector('.pk-tm.sel');
    if (prev) prev.classList.remove('sel');
    n.classList.add('sel');
    paintStartPick();
  };
  $('#wSelBack').onclick = function () { sel.league = null; selPaint(); };
  $('#wOtro').onclick = function () {
    startTeam = null;
    var prev = $('#wSelBody').querySelector('.pk-tm.sel');
    if (prev) prev.classList.remove('sel');
    paintStartPick();
  };

  /* La flecha de atrás va deshaciendo paso a paso: de los equipos a las
     ligas, y de ahí al menú de entrenador o jugador. */
  if (window.Nav) Nav.alVolver('world', function (soloPreguntar) {
    if (started) return false;
    if (sel.league || sel.q) {
      if (soloPreguntar) return true;
      sel.league = null; sel.q = ''; $('#wSelQ').value = '';
      selPaint();
      return true;
    }
    /* el menú de modo está escondido: se eligió uno y hay que poder volver */
    if ($('#wModo') && $('#wModo').classList.contains('hidden')) {
      if (soloPreguntar) return true;
      volverAlModo();
      return true;
    }
    return false;
  });
  $('#wSelQ').oninput = function () { sel.q = this.value; selPaint(); };

  selTabs();
  selPaint();
  paintStartPick();

  function enterGame(team) {
    /* partida nueva: lo que hubiera guardado de otra carrera ya no sirve */
    mundoCarrera = null;
    me = team;
    if (modo !== 'jugador' && window.Carrera) Carrera.limpia();
    rConf = 'MIAS';
    rScope = 'L:' + me.leagueId;
    rComp = 'L:' + me.leagueId; rView = 'tabla';
    started = true; currentMatch = null; matchOver = false; changing = false;
    sub = 'club'; finTemp = null;
    World.setDetail(me, false);
    $('#wModo').classList.add('hidden');
    $('#wJugador').classList.add('hidden');
    $('#wStart').classList.add('hidden');
    $('#wLoadBox').classList.add('hidden');
    $('#wPlay').classList.remove('hidden');
    syncTabs(); render();
  }
  $('#wBegin').onclick = function () {
    if (!startTeam) return;
    modo = 'dt';
    World.create({ manualDraw: $('#wManual').checked });
    miSel = null;
    if ($('#wConSel') && $('#wConSel').checked) {
      pintaSelNac();
      miSel = selNac;
    }
    World.state.miSeleccion = miSel ? miSel.s : null;
    enterGame(startTeam);
  };

  /* ---------- guardado ---------- */
  function refreshSaveInfo() {
    var i = SaveGame.info(modo), has = !!i;
    $('#wContinue').disabled = !has;
    $('#wForget').disabled = !has;
    if (!has) { $('#wSaveInfo').textContent = 'No hay ninguna partida guardada en este navegador.'; return; }
    var team = null;
    Object.keys(LG).forEach(function (id) {
      if (id === '__nations__') return;
      LG[id].teams.forEach(function (t) {
        if (t.uid === (SaveGame.uidVigente ? SaveGame.uidVigente(i.me) : i.me)) team = t;
      });
    });
    $('#wSaveInfo').innerHTML = 'Guardada el ' + new Date(i.saved).toLocaleString('es') +
      ' · <b>' + esc(team ? team.n : '—') + '</b> · temporada ' + Temporada(i.year) +
      ' · ' + Math.round(i.bytes / 1024) + ' KB';
  }
  refreshSaveInfo();
  $('#wContinue').onclick = function () {
    try { cargaPartida(SaveGame.load(modo)); } catch (e) { alert('No pude cargar la partida: ' + e.message); }
  };
  /* al cargar, el modo lo dice la propia partida */
  function cargaPartida(team) {
    modo = (window.Carrera && Carrera.jugador()) ? 'jugador' : 'dt';
    if (modo === 'jugador') {
      var j = Carrera.jugador();
      if (j.club) team = j.club;
    }
    miSel = null;
    if (World.state.miSeleccion && window.Nac) miSel = Nac.seleccion(World.state.miSeleccion);
    /* si la liga ya acabó en la partida guardada, su play-off al día */
    if (World.ponAlDiaPlayoffs) World.ponAlDiaPlayoffs();
    /* El parón de selecciones no cabe en el archivo: si se guardó a medias,
       se deshace entero y se vuelve a jugar desde el primer partido. */
    var st0 = World.state;
    /* el play-off que quedó a medias se vuelve a jugar desde el principio */
    if (st0 && !st0.poCompleta && World.rehazPlayoffs) {
      var repPo = World.rehazPlayoffs();
      if (repPo) {
        capture(repPo);
        /* ninguno visto todavía: la cola empieza antes del primero */
        matchIdx = -1; currentMatch = null; matchOver = true;
        setTimeout(function () {
          toast('El play-off de ascenso se había quedado a medias: se juega otra vez.');
        }, 700);
      }
    }
    if (st0 && st0.selHecha === st0.year && !st0.selCompleta && World.deshazSelecciones) {
      if (World.deshazSelecciones()) {
        setTimeout(function () {
          toast('El parón de selecciones se había quedado a medias: se juega otra vez desde el principio.');
        }, 400);
      }
    }
    enterGame(team);
    /* los partidos de club que se quedaron sin ver siguen ahí: se juegan
       de uno en uno antes de seguir la temporada */
    if (st0 && st0.colaGuardada && st0.colaGuardada.length && !matchQueue.length) {
      matchQueue = reconstruyeCola(st0.colaGuardada);
      matchIdx = -1; currentMatch = null; matchOver = true; matchVisual = false;
      syncTabs(); render();
      setTimeout(function () {
        toast(matchQueue.length === 1
          ? 'Te quedaba un partido sin ver: ahí lo tienes.'
          : 'Te quedaban ' + matchQueue.length + ' partidos sin ver: ahí los tienes.');
      }, 500);
    }
  }
  $('#wForget').onclick = function () {
    if (!confirm('¿Borrar la partida guardada?')) return;
    SaveGame.clear(modo); refreshSaveInfo();
  };
  $('#wFile').onchange = function () {
    var f = this.files[0]; if (!f) return;
    SaveGame.importFile(f, function (err, team) {
      if (err) { alert('No pude abrir el archivo: ' + err.message); return; }
      cargaPartida(team);
    });
    this.value = '';
  };
  /* El interruptor del autoguardado se recuerda de una sesión a otra. */
  var autoGuardar = true;
  try { autoGuardar = localStorage.getItem('fx_autoguardar') !== '0'; } catch (e) {}
  function ponAutoGuardar(v) {
    autoGuardar = !!v;
    try { localStorage.setItem('fx_autoguardar', autoGuardar ? '1' : '0'); } catch (e) {}
  }

  function doSave(auto, callado) {
    try {
      /* si el parón de selecciones quedó a medias hay que saberlo al cargar */
      if (World.state) {
        var pend = sinVer();
        World.state.selCompleta = !pend.some(function (m) { return m.kind === 'sel'; });
        World.state.poCompleta = !pend.some(function (m) { return m.kind === 'po'; });
        /* y los partidos de club que se quedaron sin ver */
        World.state.colaGuardada = serializaCola();
      }
      var r = SaveGame.save(me, modo);
      if (!callado || !r.ok) {
        toast(r.ok ? (auto ? 'Autoguardado' : 'Partida guardada') + ' · ' + Math.round(r.bytes / 1024) + ' KB'
          : 'No se pudo guardar: ' + r.error);
      }
      refreshSaveInfo();
    } catch (e) { toast(e.message); }
  }
  /* se guarda solo si el interruptor está puesto, y sin avisar */
  function guardaSolo() { if (autoGuardar && started && me) doSave(true, true); }
  function toast(msg) {
    var el = $('#wToast');
    if (!el) return;
    el.textContent = msg;
    el.classList.add('on');
    clearTimeout(toast._t);
    toast._t = setTimeout(function () { el.classList.remove('on'); }, 3200);
  }

  /* ---------- avance ---------- */
  function capture(rep) {
    var list = rep && rep.myMatches && rep.myMatches.length
      ? rep.myMatches : (rep && rep.myMatch ? [rep.myMatch] : []);
    if (!list.length) return;
    list.forEach(function (mm) { decorate(rep, mm); });
    matchQueue = list; matchIdx = 0;
    currentMatch = list[0];
  }
  /* El partido propio se ve en grande arriba: abajo van solo los demás. */
  function sinElMio(lista, sonCruces) {
    return (lista || []).filter(function (x) {
      return sonCruces ? !(x.a === me || x.b === me) : !(x.h === me || x.a === me);
    });
  }
  function decorate(rep, mm) {
    if (mm.kind === 'liga') {
      var blk = rep.leagues.filter(function (l) { return l.id === mm.leagueId; })[0];
      mm.others = sinElMio(blk ? blk.matches : [], false);
      mm.blockName = blk ? blk.name + ' · jornada ' + blk.round : '';
    } else {
      var mios = rep.cups.concat(rep.conts).filter(function (x) {
        return (x.ties || []).some(function (t) { return t.a === me || t.b === me; }) ||
          (x.matches || []).some(function (m) { return m.h === me || m.a === me; });
      });
      /* Una misma semana puede dejar copa nacional y continental. Los otros
         partidos que van debajo son los de ESTA competición, no los del
         primer bloque que aparezca: si no, viendo la Champions te salen
         abajo los dieciseisavos de la Copa del Rey. */
      /* en las eliminatorias el nombre trae pegada la ronda («Champions ·
         Octavos»), así que vale con que el bloque sea su comienzo */
      var suyo = String(mm.comp || '');
      var b2 = mios.filter(function (x) { return x.name === suyo; })[0] ||
        mios.filter(function (x) { return x.name && suyo.indexOf(x.name) === 0; })[0] ||
        mios[0];
      mm.areTies = !!(b2 && b2.ties);
      mm.others = sinElMio(b2 ? (b2.ties || b2.matches || []) : [], mm.areTies);
      mm.blockName = b2 ? (b2.name + (b2.phase ? ' · ' + b2.phase : (b2.round ? ' · ' + b2.round : ''))) : mm.comp;
    }
  }
  /* Los partidos de tu selección, a la cola para verlos de uno en uno. Van
     aunque no te hayan convocado: el torneo de tu país se sigue igual. */
  function ponEnColaSeleccion(sel) {
    /* se limpia SIEMPRE: si este verano no hubo partidos, la cola no puede
       quedarse con los del verano pasado */
    matchQueue = []; matchIdx = 0; currentMatch = null;
    var lista = (sel && sel.misPartidos) || [];
    if (!lista.length) return;
    matchVisual = false;
    matchQueue = lista.map(function (m) {
      return { kind: 'sel', comp: m.comp, label: m.label || sel.nombreFase,
        res: m.res, others: [], blockName: sel.nombreFase, neutral: true,
        convocado: m.convocado };
    });
    /* se arranca «antes» del primero: el tablero enseña la previa y el
       partido sale cuando se pulsa, no de golpe */
    matchIdx = -1;
    currentMatch = null;
    matchOver = true;
  }

  /* Lo que la selección lleva hecho SIN VER: el torneo se simula entero,
     así que el panel tiene que restarlo o te canta los goles antes de
     jugarlos. */
  function selPendiente() {
    var out = { pj: 0, g: 0, a: 0 };
    if (!(window.Carrera && Carrera.activa && Carrera.activa())) return out;
    sinVer().forEach(function (m) {
      if (m.kind !== 'sel' || !m.res) return;
      var x = Carrera.aporte(m.res);
      if (!x) return;
      out.pj++; out.g += x.g; out.a += x.a;
    });
    return out;
  }

  /* Todo lo que el jugador NO ha visto todavía. No es lo mismo que la
     cola: el partido que tiene delante sin terminar tampoco está visto, y
     mientras no lo acabe no puede salir su marcador en ninguna pantalla. */
  function sinVer() {
    if (!matchQueue.length) return [];
    var desde = matchIdx + (matchOver ? 1 : 0);
    return matchQueue.slice(desde < 0 ? 0 : desde);
  }

  /* Los partidos que quedaron sin ver al guardar. El relato minuto a
     minuto no cabe en el archivo, así que va el resumen: al cargar salen
     de uno en uno con su marcador y sus goleadores, en vez de perderse y
     de que el resultado aparezca en las tablas sin haberlos jugado. */
  function serializaCola() {
    return sinVer().filter(function (m) { return m.res && m.kind !== 'sel'; })
      .map(function (m) {
        var r = m.res;
        var g = window.Comp ? Comp.matchScorers(r) : null;
        return {
          kind: m.kind, comp: m.comp || '', label: m.label || '',
          neutral: !!m.neutral, bloque: m.blockName || '',
          casa: r.home.name, fuera: r.away.name,
          marcador: [r.score[0], r.score[1]],
          pens: r.pens || null, aet: !!r.aet, global: r.aggNote || '',
          goles: g ? { home: g.home, away: g.away } : null
        };
      });
  }
  /* la vuelta: del resumen guardado a algo que el visor sepa pintar */
  function reconstruyeCola(lista) {
    return (lista || []).map(function (x) {
      return {
        kind: x.kind, comp: x.comp, label: x.label, neutral: !!x.neutral,
        others: [], blockName: x.bloque || x.comp, soloResumen: true,
        res: {
          home: { name: x.casa }, away: { name: x.fuera }, score: x.marcador,
          pens: x.pens, aet: x.aet, aggNote: x.global, golesYa: x.goles
        }
      };
    });
  }

  /* los partidos de esta semana que aún no se han visto */
  function colaPendiente() {
    if (!matchQueue.length || matchIdx >= matchQueue.length - 1) return null;
    return matchQueue.slice(matchIdx + 1);
  }
  function verSiguienteDeLaCola() {
    if (matchIdx >= matchQueue.length - 1) return;
    if (mv) mv.stop();
    matchIdx++;
    currentMatch = matchQueue[matchIdx];
    matchOver = !matchVisual || !!(currentMatch && currentMatch.soloResumen);
    sub = 'match';
    syncTabs(); render();
  }

  function playNext(visual) {
    var st = World.state, guard = 0;
    /* si la semana dejó partidos sin ver, se ven antes de seguir */
    if (matchIdx < matchQueue.length - 1) {
      matchVisual = visual;
      verSiguienteDeLaCola();
      return;
    }
    matchVisual = visual; matchOver = false; currentMatch = null;
    matchQueue = []; matchIdx = 0;
    World.setDetail(me, visual);
    while (!st.paused && st.week < st.total && guard++ < 80) {
      var r = World.advanceWeek();
      if (r && (r.myMatches && r.myMatches.length || r.myMatch)) { capture(r); break; }
    }
    World.setDetail(me, false);
    /* en simulación rápida el marcador sale entero nada más entrar, así que
       cuenta como visto desde ya; en la narrada, hasta que acabe no. */
    if (currentMatch) { matchOver = !matchVisual; sub = 'match'; syncTabs(); }
    render();
  }
  function skipWeeks(n) {
    var st = World.state;
    World.setDetail(me, false);
    for (var i = 0; i < n; i++) {
      if (st.paused || st.week >= st.total) break;
      capture(World.advanceWeek());
    }
    matchVisual = false; matchOver = true;
    render();
    guardaSolo();
  }

  function syncTabs() {
    var jug = modo === 'jugador';
    var mk = $('#wTabMk');
    if (mk) mk.classList.toggle('hidden', jug || !(World.state && (World.state.mercadoAbierto || World.state.mercado)));
    var cr = $('#wTabCr');
    if (cr) cr.classList.toggle('hidden', !jug);
    var cal = $('#wTabCal');
    if (cal) cal.classList.remove('hidden');
    var al = document.querySelector('#wTabs [data-w="squad"]');
    if (al) al.classList.toggle('hidden', jug);
    var t = sub === 'match' ? 'club' : sub;   // el partido cuelga de «Club»
    /* mientras se juega un partido las pestañas estorban */
    var barra = $('#wTabs');
    if (barra) barra.classList.toggle('hidden', sub === 'match');
    $$('#wTabs button').forEach(function (x) { x.classList.toggle('active', x.dataset.w === t); });
  }
  $$('#wTabs button').forEach(function (b) {
    b.onclick = function () {
      sub = b.dataset.w;
      /* al abrir «Resultados» se vuelve a la liga que uno está jugando */
      if (sub === 'results' && me) {
        rConf = 'MIAS';
        rScope = 'L:' + me.leagueId;
        rComp = 'L:' + me.leagueId;
        rView = null; rondaIdx = null;
      }
      syncTabs(); renderBody();
    };
  });

  /* ---------- sorteo manual ---------- */
  function renderDraw() {
    var st = World.state, panel = $('#wDrawPanel');
    var pend = !!(st && st.paused && st.pendingDraws.length);
    if (started) $('#wPlay').classList.toggle('hidden', pend);
    if (!pend) { panel.classList.add('hidden'); return; }
    var id = st.pendingDraws[0], c = st.conts[id], ds = c.drawState;
    panel.classList.remove('hidden');
    $('#wDrawTitle').textContent = 'Sorteo · ' + c.name +
      (ds.kind === 'ko' && c.pendingRound ? ' · ' + c.pendingRound.name : '');
    $('#wDrawBall').disabled = ds.done;
    $('#wDrawRest').disabled = ds.done;
    $('#wDrawOk').disabled = !ds.done;
    $('#wDrawHd1').textContent = 'Bombos';
    $('#wDrawHd2').textContent = ds.kind === 'ko' ? 'Cruces' : 'Grupos';
    if (ds.kind === 'ko') { renderKODraw(ds); return; }
    $('#wDrawInfo').innerHTML = 'Bombo ' + Math.min(ds.potIndex + 1, ds.pots.length) + ' de ' + ds.pots.length +
      ' · quedan ' + ds.pots.reduce(function (s, p) { return s + p.length; }, 0) + ' bolas. ' +
      'Si el equipo que sale coincide de país con alguno del grupo, pasa al siguiente grupo válido.';
    $('#wDrawBall').disabled = ds.done;
    $('#wDrawRest').disabled = ds.done;
    $('#wDrawOk').disabled = !ds.done;
    $('#wDrawPots').innerHTML = Draw.potsView(ds).map(function (p) {
      return '<div class="potbox' + (p.current ? ' now' : '') + '">' +
        '<h4>Bombo ' + (p.index + 1) + '<small>' + p.left + ' por sortear</small></h4>' +
        p.teams.map(function (x) {
          return '<div class="drawline' + (x.drawn ? ' done' : '') + '">' + crest(x.t, 18) +
            '<span>' + esc(x.t.n) + '</span>' +
            (x.group ? '<small class="tag">' + esc(x.group.replace('Grupo ', '')) + '</small>'
              : '<small>' + esc(countryName(x.t)) + '</small>') + '</div>';
        }).join('') + '</div>';
    }).join('');
    $('#wDrawGroups').innerHTML = ds.groups.map(function (g) {
      return '<div class="gbox"><h4>' + esc(g.name) + '</h4>' + (g.teams.length ? g.teams.map(function (t) {
        return '<div class="drawline">' + crest(t, 18) + '<span>' + esc(t.n) + '</span>' +
          '<small>' + esc(countryName(t)) + '</small></div>';
      }).join('') : '<p class="hint">vacío</p>') + '</div>';
    }).join('');
  }
  /* sorteo de eliminatorias: bombo 1 primeros de grupo, bombo 2 segundos */
  function renderKODraw(ds) {
    var quedan = ds.pot1.length + ds.pot2.length + (ds.current ? 1 : 0);
    $('#wDrawInfo').innerHTML = ds.done
      ? 'Sorteo completo: ' + ds.ties.length + ' cruces. Sólo se sortea esta ronda; ' +
      'a partir de aquí el cuadro ya queda definido.'
      : 'Quedan ' + quedan + ' bolas. ' +
      (ds.current
        ? '<b>' + esc(ds.current.n) + '</b> espera rival del bombo 1.'
        : 'Saca una bola del bombo ' + (ds.two ? '2' : '') + ' para abrir el siguiente cruce.') +
      (ds.two ? ' El segundo de grupo juega la ida en casa y el primero, la vuelta.' : '') +
      ' No se cruzan equipos que compartieron grupo; del mismo país sí pueden cruzarse.';

    $('#wDrawPots').innerHTML = Draw.koPots(ds).map(function (p) {
      return '<div class="potbox' + (p.current ? ' now' : '') + '">' +
        '<h4>' + esc(p.name) + '<small>' + p.left + ' por salir</small></h4>' +
        (p.teams.length ? p.teams.map(function (t) {
          return '<div class="drawline">' + crest(t, 18) + '<span>' + esc(t.n) + '</span>' +
            '<small>' + esc(countryName(t)) + '</small></div>';
        }).join('') : '<p class="hint">vacío</p>') + '</div>';
    }).join('') +
      (ds.current ? '<div class="potbox wait"><h4>En juego<small>espera rival</small></h4>' +
        '<div class="drawline wait">' + crest(ds.current, 18) +
        '<span>' + esc(ds.current.n) + '</span></div></div>' : '');

    $('#wDrawGroups').innerHTML = ds.ties.length ? ds.ties.map(function (t, i) {
      return '<div class="gbox"><h4>Cruce ' + (i + 1) + '<small>ida en ' + esc(t.a.s) + '</small></h4>' +
        '<div class="drawline">' + crest(t.a, 18) + '<span>' + esc(t.a.n) + '</span>' +
        '<small>' + esc(countryName(t.a)) + '</small></div>' +
        '<div class="drawline">' + crest(t.b, 18) + '<span>' + esc(t.b.n) + '</span>' +
        '<small>' + esc(countryName(t.b)) + '</small></div></div>';
    }).join('') : '<p class="hint">Todavía no hay ningún cruce.</p>';
  }

  $('#wDrawBall').onclick = function () {
    var e = World.drawBall(World.state.pendingDraws[0]);
    if (e) {
      if (e.tie) {
        $('#wDrawLast').innerHTML = '🎱 <b>' + esc(e.tie.a.n) + '</b> — <b>' + esc(e.tie.b.n) + '</b>' +
          (e.skipped.length ? ' <span style="color:var(--warn)">(se saltaron ' + e.skipped.length +
            ' bola' + (e.skipped.length > 1 ? 's' : '') + ')</span>' : '');
      } else if (e.role === 'a') {
        $('#wDrawLast').innerHTML = '🎱 <b>' + esc(e.team.n) + '</b> abre la serie en casa, espera rival…';
      } else {
        $('#wDrawLast').innerHTML = '🎱 <b>' + esc(e.team.n) + '</b> → ' + esc(e.groupName) +
          (e.skipped.length ? ' <span style="color:var(--warn)">(saltó ' + e.skipped.length +
            ' grupo' + (e.skipped.length > 1 ? 's' : '') + ' por coincidencia de país)</span>' : '');
      }
    }
    renderDraw();
  };
  $('#wDrawRest').onclick = function () { World.drawRest(World.state.pendingDraws[0]); renderDraw(); };
  $('#wDrawOk').onclick = function () {
    World.commitDraw(World.state.pendingDraws[0]);
    $('#wDrawLast').textContent = ''; render();
  };

  /* =====================================================================
     CABECERA
     ===================================================================== */
  /* ---------------------------------------------------------------------
     LOS COLORES DEL CLUB
     El primario tiñe el fondo y el secundario dibuja el borde de los
     paneles. Van muy rebajados: es el fondo de una pantalla de trabajo, no
     una camiseta, y el texto tiene que seguir leyéndose.
     --------------------------------------------------------------------- */
  function aRGB(hex) {
    var h = String(hex || '').replace('#', '');
    if (h.length === 3) h = h[0] + h[0] + h[1] + h[1] + h[2] + h[2];
    if (h.length !== 6) return null;
    var n = parseInt(h, 16);
    if (isNaN(n)) return null;
    return [(n >> 16) & 255, (n >> 8) & 255, n & 255];
  }
  function rgba(hex, a) {
    var c = aRGB(hex);
    return c ? 'rgba(' + c[0] + ',' + c[1] + ',' + c[2] + ',' + a + ')' : null;
  }
  /* Un color oscuro sobre fondo oscuro no se ve: se aclara hasta que tenga
     luz suficiente para dibujar la barra de scroll. */
  function aclara(hex, minimo) {
    var c = aRGB(hex);
    if (!c) return null;
    var luz = (0.299 * c[0] + 0.587 * c[1] + 0.114 * c[2]) / 255;
    var k = luz >= minimo ? 0 : (minimo - luz) / (1 - luz);
    return [0, 1, 2].map(function (i) { return Math.round(c[i] + (255 - c[i]) * k); });
  }
  function rgbaDe(c, a) {
    return c ? 'rgba(' + c[0] + ',' + c[1] + ',' + c[2] + ',' + a + ')' : null;
  }
  function pintaColores() {
    /* las variables van en el <body>: el tinte tiene que llegar también a la
       cabecera del juego, que vive fuera del tablero */
    var raiz = document.body;
    if (!raiz) return;
    if (!me) {
      raiz.classList.remove('conclub');
      ['--club-fondo', '--club-fondo2', '--club-borde'].forEach(function (k) {
        raiz.style.removeProperty(k);
      });
      return;
    }
    var f1 = rgba(me.c1, 0.38), f2 = rgba(me.c1, 0.14), b = rgba(me.c2, 0.55);
    if (f1) { raiz.style.setProperty('--club-fondo', f1);
      raiz.style.setProperty('--club-fondo2', f2); }
    if (b) raiz.style.setProperty('--club-borde', b);
    /* la barra de scroll: el primario aclarado, con el secundario de filo */
    var vivo = aclara(me.c1, 0.42), filo = aclara(me.c2, 0.55);
    if (vivo) {
      raiz.style.setProperty('--club-scroll', rgbaDe(vivo, 0.85));
      raiz.style.setProperty('--club-scroll2', rgbaDe(vivo, 0.55));
      raiz.style.setProperty('--club-scroll-on', rgbaDe(vivo, 1));
    }
    if (filo) raiz.style.setProperty('--club-scroll-filo', rgbaDe(filo, 0.45));
    raiz.classList.add('conclub');
  }

  function render() {
    if (!started) return;
    pintaColores();
    var st = World.state;
    var lg = st.leagues[me.leagueId];
    var rows = Comp.sortTable(lg.table);
    var pos = rows.findIndex(function (r) { return r.t === me; }) + 1;
    var row = rows[pos - 1];
    var over = st.week >= st.total;

    if (modo === 'jugador' && window.CarreraUI && window.Carrera && Carrera.jugador()) {
      $('#wHead').innerHTML = CarreraUI.cabecera() +
        '<span class="spacer"></span>' +
        (over ? '<button class="primary" id="wNewSeason">Cerrar temporada</button>' : '') +
        '<button class="mini" id="wSave">Guardar</button>' +
        '<button class="mini" id="wDownload">Descargar</button>' +
        '<button class="mini swbtn' + (autoGuardar ? ' on' : '') + '" id="wAuto" type="button" ' +
        'role="switch" aria-checked="' + (autoGuardar ? 'true' : 'false') + '">' +
        '<i></i>Autoguardar</button>' +
        '<span class="hint" id="wToast"></span>';
      enlazaBarra(st, over);
      renderDraw();
      renderBody();
      return;
    }
    $('#wHead').innerHTML = crest(me, 40) +
      '<div><div class="big">' + esc(me.n) + '</div>' +
      '<div class="sub2">' + esc(lname(me.leagueId)) + ' · ' + pos + 'º con ' + row.pts + ' pts</div></div>' +
      '<span class="pill">Temporada <b>' + Temporada(st.year) + '</b></span>' +
      '<span class="pill">Partido <b>' + cuentaPartidos().jugados + '</b>/' +
        cuentaPartidos().total + '</span>' +
      (window.Market ? '<span class="chip dinero" title="Dinero disponible">💰 ' +
        Market.dinero(World.state.caja || 0) + '</span>' : '') +
      '<span class="sim-until"><label for="wUntil">Simular hasta el partido</label>' +
      '<input type="number" id="wUntil" min="' + (cuentaPartidos().jugados + 1) +
      '" max="' + cuentaPartidos().total +
      '" value="' + Math.min(cuentaPartidos().total, cuentaPartidos().jugados + 3) + '">' +
      '<button class="mini" id="wGoUntil"' + (over ? ' disabled' : '') + '>Ir</button></span>' +
      '<span class="spacer"></span>' +
      (over ? '<button class="primary" id="wNewSeason">Cerrar temporada</button>' +
        '<button class="mini" id="wSwap">Cambiar de equipo</button>' : '') +
      '<button class="mini" id="wSave">Guardar</button>' +
      '<button class="mini" id="wDownload">Descargar</button>' +
      '<button class="mini swbtn' + (autoGuardar ? ' on' : '') + '" id="wAuto" type="button" ' +
      'role="switch" aria-checked="' + (autoGuardar ? 'true' : 'false') + '" ' +
      'title="Guarda la partida sola después de cada partido">' +
      '<i></i>Autoguardar</button>' +
      '<span class="hint" id="wToast"></span>';

    enlazaBarra(st, over);

    renderDraw();
    renderBody();
  }

  /* cuántos partidos llevás y cuántos tiene la temporada */
  function cuentaPartidos() {
    var cal = myCalendar();
    return { jugados: cal.filter(function (e) { return e.res; }).length, total: cal.length };
  }
  /* avanza hasta haber jugado N partidos, sin hablar de semanas */
  function simularHastaPartido(n) {
    var st = World.state, guard = 0;
    World.setDetail(me, false);
    while (guard++ < 500) {
      if (st.paused || st.week >= st.total) break;
      if (cuentaPartidos().jugados >= n) break;
      capture(World.advanceWeek());
    }
    /* simulación en bloque: no queda nada pendiente de ver */
    matchQueue = []; matchIdx = 0; currentMatch = null;
    matchVisual = false; matchOver = true;
    render();
    guardaSolo();
  }

  function enlazaBarra(st, over) {
    if ($('#wGoUntil')) $('#wGoUntil').onclick = function () {
      var c = cuentaPartidos();
      var target = Math.max(c.jugados + 1, Math.min(c.total, +$('#wUntil').value || 0));
      simularHastaPartido(target);
    };
    $('#wSave').onclick = function () { doSave(false); };
    $('#wAuto').onclick = function () {
      ponAutoGuardar(!autoGuardar);
      this.classList.toggle('on', autoGuardar);
      this.setAttribute('aria-checked', autoGuardar ? 'true' : 'false');
      toast(autoGuardar ? 'Autoguardado activado' : 'Autoguardado desactivado');
    };
    $('#wDownload').onclick = function () {
      try { toast('Archivo descargado (' + Math.round(SaveGame.download(me) / 1024) + ' KB)'); }
      catch (e) { toast(e.message); }
    };
    if ($('#wNewSeason')) $('#wNewSeason').onclick = function () {
      var auto = autoGuardar;
      /* el parón de selecciones es de la temporada que acaba: si todavía no
         se jugó, se juega ahora y la temporada se cierra después */
      if (World.seleccionesPendientes && World.seleccionesPendientes()) {
        ponEnColaSeleccion(World.jugarSelecciones());
        sub = 'club'; syncTabs(); render();
        toast(matchQueue.length
          ? 'Juega los partidos de tu selección y luego cierra la temporada.'
          : 'Tu selección no jugó este verano.');
        return;
      }
      var sum = World.endSeason();
      World.setDetail(me, false);
      currentMatch = null;
      mkSel = null;
      /* temporada nueva, cola limpia: si no, los partidos de la selección
         del año pasado se repiten en bucle */
      matchQueue = []; matchIdx = 0; matchOver = false;
      if (modo === 'jugador' && sum.carrera) {
        finTemp = { fin: sum.carrera, sel: sum.selecciones };
        sub = 'club';
        syncTabs(); render();
        if (auto) doSave(true);
        return;
      }
      sub = World.state.mercadoAbierto ? 'mercado' : 'history';
      syncTabs(); render();
      if (auto) doSave(true);
      var m = 'Temporada ' + Temporada(sum.year) + ' cerrada. ' +
        (World.state.mercadoAbierto ? 'Abre el mercado de pases.' : 'Empieza ' + Temporada(World.state.year) + '.');
      if (sum.selecciones) m += ' Selecciones: ' + sum.selecciones.nombreFase + '.';
      toast(m);
    };
    if ($('#wSwap')) $('#wSwap').onclick = function () { changing = true; sub = 'club'; syncTabs(); renderBody(); };

    renderDraw();
    renderBody();
  }

  /* la carrera de jugador pinta cosas que viven aquí: la tabla con zonas
     y el calendario con escudos */
  if (window.CarreraUI && CarreraUI.conecta) {
    CarreraUI.conecta({ tabla: zonedTable, crest: crest, tie: brTie, proximaCopa: proximaCopa,
      panelSeleccion: panelSeleccionActual,
      filasGrupo: filasGrupoCont, enEspera: compEnEspera, tieCiego: tieSinVer,
      selPendiente: selPendiente,
      cola: colaPendiente, verCola: verSiguienteDeLaCola });
  }

  function renderBody() {
    if (!started) return;
    if (mv) { mv.stop(); mv = null; }
    playing = false;
    if (modo === 'jugador' && window.CarreraUI) {
      var htmlJ = '';
      if (sub === 'match') htmlJ = viewMatch();
      else if (sub === 'carrera') htmlJ = CarreraUI.vistaMiCarrera();
      else if (sub === 'calendario') htmlJ = CarreraUI.vistaCalendario(myCalendar(), me);
      else if (sub === 'miclub') htmlJ = vistaMiClub();
      else if (sub === 'seltorneo') htmlJ = vistaTorneoSel();
      else if (sub === 'results') htmlJ = viewResults();
      else if (sub === 'history') htmlJ = viewHistory();
      /* el resumen de la temporada espera a que se vean los partidos de
         la selección que quedaron en la cola */
      else if (finTemp && !colaPendiente()) htmlJ = CarreraUI.vistaFinTemporada(finTemp.fin, finTemp.sel);
      else {
        var calJ = myCalendar();
        var sigJ = siguienteReal(calJ);
        if (sigJ) {
          sigJ.nPartido = calJ.filter(function (e) { return e.res; }).length + 1;
          /* En el parón no hay total que enseñar: el calendario está
             cortado en el partido que toca, y decir cuántos le quedan a tu
             selección sería cantarte hasta dónde llega. */
          sigJ.dePartidos = sigJ.cmp === 'Selección' ? 0 : calJ.length;
        }
        htmlJ = CarreraUI.vistaJugador(sigJ);
      }
      $('#wBody').innerHTML = htmlJ;
      ponBarraResultados();
      bindBody();
      bindCarrera();
      if (sub === 'results') fillResults();
      return;
    }
    if (sub === 'calendario' && window.CarreraUI) {
      $('#wBody').innerHTML = CarreraUI.vistaCalendario(myCalendar(), me);
      ponBarraResultados();
      bindBody();
      return;
    }
    var fn = { club: viewClub, match: viewMatch, squad: viewSquad, results: viewResults,
      history: viewHistory, mercado: viewMercado, miclub: vistaMiClub,
      seltorneo: vistaTorneoSel }[sub];
    $('#wBody').innerHTML = fn ? fn() : '';
    ponBarraResultados();
    bindBody();
  }
  /* la fila de pestañas tiene sitio de sobra a la derecha: ahí van los
     filtros de Resultados, y en el resto de vistas queda vacía */
  function ponBarraResultados() {
    var ex = $('#wTabsExtra');
    if (!ex) return;
    ex.innerHTML = sub === 'results' ? resBar : '';
    ex.classList.toggle('on', sub === 'results');
  }


  /* =====================================================================
     MERCADO DE PASES
     Se abre al cerrar cada temporada (la primera se juega con la plantilla
     tal cual). Cuatro fichajes y cuatro ventas como mucho.
     ===================================================================== */
  var mkSel = null;       /* el club del que estamos mirando jugadores */

  function mkEstado() {
    var st = World.state;
    st.fichajes = st.fichajes || [];
    st.ventas = st.ventas || [];
    return st;
  }
  function mkPuedeFichar() {
    var st = mkEstado();
    if (st.fichajes.length >= Market.FICHAJES_MAX) return 'ya hiciste los ' + Market.FICHAJES_MAX + ' fichajes';
    return Market.puedeEntrar(me);
  }

  function chipJug(p, extra) {
    return '<div class="mk-jug">' +
      '<span class="mk-pos ' + Market.linea(p) + '">' + esc(p[1]) + '</span>' +
      (window.Nac ? Nac.bandera(p[4] || '', 11) : '') +
      '<b>' + esc(p[0]) + '</b>' +
      '<span class="mk-ovr">' + p[2] + '</span>' +
      '<span class="mk-edad">' + p[3] + ' años</span>' +
      (extra || '') + '</div>';
  }

  function viewMercado() {
    var st = mkEstado();
    if (!st.mercadoAbierto) return mkResumenHTML();

    var c = Market.cuenta(me);
    var est = Market.estadio(me);
    var cabecera = '<div class="panel mk-cab"><div class="pbody">' +
      '<div class="mk-cifras">' +
      '<div class="mk-cif"><small>Caja</small><b>' + Market.dinero(st.caja || 0) + '</b></div>' +
      '<div class="mk-cif"><small>Fichajes</small><b>' + st.fichajes.length + ' / ' + Market.FICHAJES_MAX + '</b></div>' +
      '<div class="mk-cif"><small>Ventas</small><b>' + st.ventas.length + ' / ' + Market.VENTAS_MAX + '</b></div>' +
      '<div class="mk-cif"><small>Plantilla</small><b>' + c.total + ' / ' + Market.MAX_PLANTILLA + '</b></div>' +
      '<div class="mk-cif"><small>' + esc(est.est || 'Estadio') + '</small><b>' +
        est.cap.toLocaleString('es') + ' plazas</b></div>' +
      '<div class="mk-cif"><small>Taquilla de la temporada</small><b>' +
        Market.dinero(st.taquilla || 0) + '</b></div>' +
      '</div>' +
      '<p class="hint">' + esc(me.n) + ' · ' + c.GK + ' arqueros · ' + c.DEF + ' defensores · ' +
      c.MID + ' medios · ' + c.ATT + ' delanteros. ' +
      'El mínimo es ' + Market.MINIMOS.GK + '/' + Market.MINIMOS.DEF + '/' + Market.MINIMOS.MID +
      '/' + Market.MINIMOS.ATT + ' y la plantilla no puede bajar de ' + Market.MIN_PLANTILLA + '.</p>' +
      '<div class="toolbar">' +
      '<button class="primary" id="mkCerrar">Cerrar el mercado y empezar la temporada</button>' +
      '<button class="mini" id="mkBuscar">Buscar jugadores en otro club</button>' +
      (modo !== 'jugador' ? '<button class="mini" id="mkDirigir">Dirigir otro club</button>' : '') +
      '</div>' +
      (modo !== 'jugador' ? '<p class="hint">Si cambias de club te haces cargo de su plantilla y de su ' +
        'presupuesto, y los fichajes y ventas vuelven a cero.</p>' : '') +
      '</div></div>';

    /* mi plantilla, para vender */
    var mios = me.p.slice().sort(function (a, b) { return b[2] - a[2]; });
    var vendidos = {};
    st.ventas.forEach(function (v) { vendidos[v.n] = v; });
    var izq = '<div class="panel"><h3>Mi plantilla <small>pulsa para vender</small></h3><div class="pbody mk-lista">' +
      mios.map(function (p) {
        var v = Market.valor(p);
        var freno = Market.puedeSalir(me, p);
        var ya = vendidos[p[0]];
        return chipJug(p, '<span class="mk-val">' + Market.dinero(v) + '</span>' +
          (ya ? '<span class="mk-ok">vendido</span>'
            : '<button class="mini mk-b" data-vender="' + esc(p[0]) + '"' +
              (freno || st.ventas.length >= Market.VENTAS_MAX ? ' disabled title="' +
                esc(freno || 'ya hiciste las ' + Market.VENTAS_MAX + ' ventas') + '"' : '') +
              '>Vender</button>'));
      }).join('') + '</div></div>';

    /* el club que estemos mirando */
    var der = '<div class="panel"><h3>Fichar</h3><div class="pbody mk-lista" id="mkDer">' +
      mkClubHTML() + '</div></div>';

    return '<div class="mk-wrap">' + cabecera + '<div class="mk-cols">' + izq + der + '</div></div>';
  }

  function mkClubHTML() {
    var st = mkEstado();
    if (!mkSel) return '<p class="hint">Pulsa «Buscar jugadores en otro club» y elige de dónde quieres fichar.</p>';
    var freno = mkPuedeFichar();
    var fichados = {};
    st.fichajes.forEach(function (x) { fichados[x.n] = 1; });
    var lista = mkSel.p.slice().sort(function (a, b) { return b[2] - a[2]; });
    return '<div class="mk-club">' + crest(mkSel, 26) + '<b>' + esc(mkSel.n) + '</b>' +
      '<span class="hint">' + esc(mkSel.league || '') + ' · global ' + mkSel.ovr + '</span></div>' +
      lista.map(function (p) {
        var precio = Market.pedido(p, mkSel);
        var pr = Math.round(Market.opciones(p, mkSel, me, precio) * 100);
        var noSale = Market.puedeSalir(mkSel, p);
        var motivo = freno || noSale || (precio > (st.caja || 0) ? 'no te alcanza la caja' : '') ||
          (fichados[p[0]] ? 'ya lo fichaste' : '');
        return chipJug(p, '<span class="mk-val">' + Market.dinero(precio) + '</span>' +
          '<span class="mk-prob ' + (pr >= 45 ? 'alta' : pr >= 18 ? 'media' : 'baja') + '">' + pr + '%</span>' +
          (fichados[p[0]] ? '<span class="mk-ok">fichado</span>'
            : '<button class="mini mk-b" data-fichar="' + esc(p[0]) + '"' +
              (motivo ? ' disabled title="' + esc(motivo) + '"' : '') + '>Ofertar</button>'));
      }).join('');
  }

  /* ---- acciones ---- */
  function mkVender(nombre) {
    var st = mkEstado();
    var p = me.p.filter(function (x) { return x[0] === nombre; })[0];
    if (!p || st.ventas.length >= Market.VENTAS_MAX || Market.puedeSalir(me, p)) return;
    var v = Market.valor(p);
    Market.quita(me, p);
    st.caja = (st.caja || 0) + v;
    st.ventas.push({ n: p[0], ovr: p[2], precio: v, j: p });
    me.ovr = Engine.overall(me);
    renderBody();
    toast('Vendido ' + p[0] + ' por ' + Market.dinero(v) + '.');
  }
  /* Cambiar de banquillo entre temporadas: el club nuevo llega con su
     plantilla y su presupuesto, y el cupo de fichajes empieza de cero. */
  function dirigeOtroClub(t) {
    var st = World.state;
    me = t;
    World.setDetail(me, false);
    if (window.Market) {
      st.presupuesto = Market.presupuesto(me);
      st.caja = st.presupuesto;
    }
    st.taquilla = 0;
    st.fichajes = []; st.ventas = [];
    mkSel = null;
    rConf = 'MIAS'; rScope = 'L:' + me.leagueId; rComp = 'L:' + me.leagueId; rView = 'tabla';
    selSlot = selBench = null;
    pintaColores();
    syncTabs(); render();
    toast('Te haces cargo de ' + me.n + '.');
  }

  function mkFichar(nombre) {
    var st = mkEstado();
    if (!mkSel || mkPuedeFichar()) return;
    var p = mkSel.p.filter(function (x) { return x[0] === nombre; })[0];
    if (!p) return;
    var precio = Market.pedido(p, mkSel);
    if (precio > (st.caja || 0)) return;
    var pr = Market.opciones(p, mkSel, me, precio);
    if (Math.random() > pr) {
      st.fichajes.push({ n: p[0], ovr: p[2], precio: 0, fallo: true, de: mkSel.n });
      renderBody();
      toast('«' + p[0] + '» rechazó la oferta. Te queda ' +
        (Market.FICHAJES_MAX - st.fichajes.length) + ' intento(s).');
      return;
    }
    Market.quita(mkSel, p);
    Market.mete(me, p);
    st.caja -= precio;
    st.fichajes.push({ n: p[0], ovr: p[2], precio: precio, de: mkSel.n, j: p });
    me.ovr = Engine.overall(me);
    mkSel.ovr = Engine.overall(mkSel);
    renderBody();
    toast('¡Fichado ' + p[0] + ' por ' + Market.dinero(precio) + '!');
  }

  /* ---- resumen al cerrar ---- */
  function mkResumenHTML() {
    var st = World.state, r = st.mercado;
    if (!r) return '<p class="hint">El mercado abre al cerrar la temporada.</p>';
    var mias = r.mias || { entran: [], salen: [] };
    var fichajes = mias.entran.filter(function (x) { return !x.fallo; });

    var mio = '<div class="panel"><h3>' + esc(me.n) + ' <small>tu mercado</small></h3><div class="pbody">' +
      '<h4 class="subh">Llegaron <small>' + fichajes.length + '</small></h4>' +
      (fichajes.length ? '<div class="mk-lista">' + fichajes.map(function (x) {
        return '<div class="mk-jug"><b>' + esc(x.n) + '</b><span class="mk-ovr">' + x.ovr +
          '</span><span class="hint">de ' + esc(x.de) + '</span>' +
          '<span class="mk-val">' + Market.dinero(x.precio) + '</span></div>';
      }).join('') + '</div>' : '<p class="hint">Nadie.</p>') +
      '<h4 class="subh">Se fueron <small>' + mias.salen.length + '</small></h4>' +
      (mias.salen.length ? '<div class="mk-lista">' + mias.salen.map(function (x) {
        return '<div class="mk-jug"><b>' + esc(x.n) + '</b><span class="mk-ovr">' + x.ovr +
          '</span><span class="mk-val">' + Market.dinero(x.precio) + '</span></div>';
      }).join('') + '</div>' : '<p class="hint">Nadie.</p>') +
      '</div></div>';

    var caros = '<div class="panel"><h3>Los traspasos del verano ' +
      '<small>' + r.total.toLocaleString('es') + ' en todo el mundo</small></h3><div class="pbody mk-lista">' +
      r.caros.map(function (m) {
        return '<div class="mk-jug"><b>' + esc(m.j[0]) + '</b>' +
          '<span class="mk-ovr">' + m.j[2] + '</span>' +
          '<span class="mk-ruta">' + crest(m.de, 18) + esc(m.de.n) + ' → ' +
          crest(m.a, 18) + esc(m.a.n) + '</span>' +
          '<span class="mk-val">' + Market.dinero(m.precio) + '</span></div>';
      }).join('') + '</div></div>';

    /* los movimientos de los rivales de mi liga */
    var liga = World.state.leagues[me.leagueId];
    var rivales = '';
    if (liga) {
      var filas = LG[me.leagueId].teams.slice().sort(function (a, b) { return b.ovr - a.ovr; })
        .map(function (t) {
          var x = r.porClub[me.leagueId + '|' + t.n];
          if (!x && t !== me) return '';
          var ent = (x ? x.entran : fichajes.map(function (y) { return { j: [y.n, '', y.ovr], precio: y.precio }; }));
          var sal = (x ? x.salen : mias.salen.map(function (y) { return { j: [y.n, '', y.ovr], precio: y.precio }; }));
          return '<tr><td><div class="tname">' + crest(t, 18) + '<span>' + esc(t.n) + '</span></div></td>' +
            '<td class="num">' + t.ovr + '</td>' +
            '<td>' + ent.map(function (e) { return esc(e.j[0]) + ' <u>' + e.j[2] + '</u>'; }).join(', ') + '</td>' +
            '<td>' + sal.map(function (e) { return esc(e.j[0]) + ' <u>' + e.j[2] + '</u>'; }).join(', ') + '</td></tr>';
        }).join('');
      rivales = '<div class="panel"><h3>Cómo quedó ' + esc(LG[me.leagueId].name) + '</h3>' +
        '<div class="pbody scroll"><table class="mk-tabla"><thead><tr><th>Equipo</th><th class="num">Global</th>' +
        '<th>Llegaron</th><th>Se fueron</th></tr></thead><tbody>' + filas + '</tbody></table></div></div>';
    }

    return '<div class="mk-wrap">' + mio + '<div class="mk-cols">' + caros + rivales + '</div></div>';
  }


  /* La ficha del club se abre tocando su escudo: hace falta poder mirar
     cómo llega el rival antes de jugar. */
  function marcaPerfil(t) {
    if (!t || !window.Profile) return '';
    return ' data-perfil="' + esc((t.leagueId || '') + '|' + t.n) + '"' +
      ' title="Ver la ficha de ' + esc(t.n) + '"';
  }
  function clubDePerfil(clave) {
    var i = String(clave).indexOf('|');
    if (i < 0) return null;
    var lid = clave.slice(0, i), nombre = clave.slice(i + 1), eq = null;
    if (LG[lid]) {
      LG[lid].teams.forEach(function (t) { if (t.n === nombre) eq = t; });
    }
    if (!eq) {
      Object.keys(LG).forEach(function (id) {
        LG[id].teams.forEach(function (t) { if (!eq && t.n === nombre) eq = t; });
      });
    }
    return eq;
  }

  /* ---------- vista previa del partido ---------- */
  function ladoPrevia(t) {
    /* el rival puede no estar sorteado todavía */
    if (!t) return '<div class="side2"><b>Por definir</b></div>';
    /* la fuerza del rival se lee en estrellas, no en número */
    var e = window.Stars ? Stars.html(t.ovr, 'pv') : '';
    return '<div class="side2 pinchable"' + marcaPerfil(t) + '>' + crest(t, 46) +
      '<b>' + esc(t.n) + '</b>' +
      (e ? '<span class="pv-est">' + e + '</span>' : '') + '</div>';
  }

  /* ---------- goleadores de la competición que toca ---------- */
  /* Goles y asistencias de la competición de selecciones que se juega,
     sumando sólo las jornadas que el jugador ya vio. */
  function almacenSel(nx) {
    var res = World.state.seleccionUltimo;
    if (!res || !res.marcadores || !nx || nx.cmp !== 'Selección') return null;
    var m = res.marcadores[nx.comp];
    if (!m) return null;
    var orden = (res.ordenRondas || {})[nx.comp] || Object.keys(m);
    var est = estadoSel();
    var lim = est ? orden.indexOf(est.jugada) : orden.length - 1;
    var total = {};
    for (var i = 0; i <= lim; i++) {
      var parcial = m[orden[i]] || {};
      Object.keys(parcial).forEach(function (k) {
        var x = parcial[k];
        total[k] = total[k] || { n: x.n, t: x.t, g: 0, a: 0 };
        total[k].g += x.g; total[k].a += x.a;
      });
    }
    return total;
  }
  /* la tabla de asistentes, que sustituye a la continental en el parón */
  function asistenciasSel(nx) {
    var store = almacenSel(nx);
    if (!store) return null;
    var lista = Object.keys(store).map(function (k) { return store[k]; })
      .filter(function (x) { return x.a > 0; })
      .sort(function (a, b) { return b.a - a.a || b.g - a.g; }).slice(0, 10);
    if (!lista.length) return '<p class="hint">Todavía no ha asistido nadie.</p>';
    return '<table class="gol-mini"><tbody>' + lista.map(function (x, i) {
      var yo = X.esMiFutbolista && X.esMiFutbolista(x);
      return '<tr class="' + (yo ? 'yo' : '') + '"><td class="num">' + (i + 1) + '</td>' +
        '<td>' + esc(x.n) + '<small>' + esc(x.t) + '</small></td>' +
        '<td class="num"><b>' + x.a + '</b></td></tr>';
    }).join('') + '</tbody></table>';
  }

  function goleadoresDe(nx) {
    var st = World.state;
    var almacen = almacenSel(nx), titulo = '';
    if (nx && nx.cmp === 'Copa' && st.cups) {
      Object.keys(st.cups).forEach(function (k) {
        if (st.cups[k].name === nx.comp) { almacen = st.cups[k].scorers; titulo = nx.comp; }
      });
    }
    if (!almacen && nx && st.conts) {
      Object.keys(st.conts).forEach(function (k) {
        if (st.conts[k].name === nx.comp) { almacen = st.conts[k].scorers; titulo = nx.comp; }
      });
    }
    if (!almacen) {
      var lg = st.leagues[me.leagueId];
      almacen = lg ? lg.scorers : null;
    }
    var lista = almacen ? Comp.topScorers(almacen, 10) : [];
    if (!lista.length) return '<p class="hint">Todavía no ha marcado nadie.</p>';
    return '<table class="gol-mini"><tbody>' + lista.map(function (x, i) {
      var yo = X.esMiFutbolista && X.esMiFutbolista(x);
      return '<tr class="' + (yo ? 'yo' : x.t === me.n ? 'mine' : '') + '"><td class="num">' + (i + 1) + '</td>' +
        '<td>' + esc(x.n) + '<small>' + esc(x.t) + '</small></td>' +
        '<td class="num"><b>' + x.g + '</b></td></tr>';
    }).join('') + '</tbody></table>';
  }

  /* La ronda de eliminatoria que se está jugando, sea de copa nacional o de
     continental: el cruce propio y los del resto de la ronda. */
  function rondaEnCurso(nx) {
    if (!nx) return null;
    if (nx.cmp === 'Cont.') {
      var c = null, st = World.state;
      Object.keys(st.conts || {}).forEach(function (k) {
        if (st.conts[k].name === nx.comp) c = st.conts[k];
      });
      if (!c) return null;
      var r = null;
      (c.koRounds || []).forEach(function (x) {
        if (x.ties.some(function (t) { return t.a === me || t.b === me; })) r = x;
      });
      if (!r && (c.prelimTies || []).some(function (t) { return t.a === me || t.b === me; })) {
        r = { name: 'Fase previa', ties: c.prelimTies };
      }
      if (!r && (c.playoffTies || []).some(function (t) { return t.a === me || t.b === me; })) {
        r = { name: 'Play-off', ties: c.playoffTies };
      }
      return r ? { nombre: r.name, sub: c.name, ties: r.ties } : null;
    }
    if (nx.cmp === 'Copa') {
      var cup = null, st2 = World.state;
      Object.keys(st2.cups || {}).forEach(function (k) {
        if (st2.cups[k].name === nx.comp) cup = st2.cups[k];
      });
      if (!cup) return null;
      var rc = null;
      (cup.rounds || []).forEach(function (x) {
        if (x.ties.some(function (t) { return t.a === me || t.b === me; })) rc = x;
      });
      var prox = proximaCopa(cup);
      if (prox && prox.ties.some(function (t) { return t.a === me || t.b === me; })) {
        rc = { name: prox.name, ties: prox.ties };
      }
      return rc ? { nombre: rc.name, sub: cup.name, ties: rc.ties } : null;
    }
    return null;
  }
  function panelDerecha(nx) {
    /* si lo que toca es un partido de selección, su tabla o su cuadro */
    if (nx && nx.cmp === 'Selección') {
      var ps = panelSeleccionActual();
      if (ps) {
        return '<div class="panel"><h3>' + esc(ps.titulo) +
          ' <small>' + esc(ps.sub) + '</small></h3>' +
          '<div class="pbody tight">' + ps.html + '</div></div>';
      }
    }
    var r = rondaEnCurso(nx);
    if (r) {
      var ciego = compEnEspera(r.sub) || compEnEspera(nx && nx.comp);
      return '<div class="panel"><h3>' + esc(r.nombre) +
        ' <small>' + esc(r.sub) + ' · ' + r.ties.length + ' cruces' +
        (ciego ? ' · por jugar' : '') + '</small></h3>' +
        '<div class="pbody tight"><div class="br-listagrid">' +
        r.ties.map(function (t) { return brTie(ciego ? tieSinVer(t) : t); }).join('') +
        '</div></div></div>';
    }
    return '<div class="panel"><h3>Clasificación <small>' + esc(LG[me.leagueId].name) + '</small></h3>' +
      '<div class="pbody tight">' + zonedTable(me.leagueId, { form: true }) + '</div></div>';
  }

  /* ---------- la continental que estoy jugando ---------- */
  function contDeMiEquipo() {
    var st = World.state;
    if (!st.conts) return null;
    var out = null;
    Object.keys(st.conts).forEach(function (k) {
      var c = st.conts[k];
      if (out || !c) return;
      var dentro = (c.pool || []).indexOf(me) >= 0 || (c.prelimPool || []).indexOf(me) >= 0;
      (c.groups || []).forEach(function (g) {
        if ((g.teams || []).indexOf(me) >= 0) dentro = true;
      });
      if (dentro) out = c;
    });
    return out;
  }
  function nombreContinental() {
    var c = contDeMiEquipo();
    return c ? c.name : '';
  }
  function tablaContinental() {
    var c = contDeMiEquipo();
    if (!c) return '<p class="hint">Este año no juegas ninguna copa continental.</p>';
    var g = null;
    (c.groups || []).forEach(function (x) {
      if ((x.teams || []).indexOf(me) >= 0) g = x;
    });
    if (!g) {
      var n = (c.pool || []).length + (c.prelimPool || []).length;
      return '<p class="hint">' + esc(c.name) + ': pendiente del sorteo' +
        (n ? ' (' + n + ' equipos)' : '') + '.</p>';
    }
    var filas = filasGrupoCont(c, g);
    return '<h4 class="subh">' + esc(g.name) + '</h4>' +
      '<table class="gol-mini cont"><thead><tr><th class="num">#</th><th>Equipo</th>' +
      '<th class="num">PJ</th><th class="num">Pts</th></tr></thead><tbody>' +
      filas.map(function (r, i) {
        return '<tr class="' + (i < 2 ? 'q-yes' : 'q-no') + (r.t === me ? ' mine' : '') + '">' +
          '<td class="num">' + (i + 1) + '</td>' +
          '<td><div class="tname">' + crest(r.t, 16) + '<span>' + esc(r.t.n) + '</span></div></td>' +
          '<td class="num">' + r.pj + '</td><td class="num"><b>' + r.pts + '</b></td></tr>';
      }).join('') + '</tbody></table>';
  }

  /* =====================================================================
     CALENDARIO DEL EQUIPO
     ===================================================================== */
  function calendarFor(who) {
    var st = World.state, out = [];
    var lg = st.leagues[who.leagueId];
    lg.rounds.forEach(function (pairs, i) {
      var p = null;
      pairs.forEach(function (x) { if (x[0] === who || x[1] === who) p = x; });
      if (!p) return;
      var res = null;
      if (i < lg.played && lg.results[i]) {
        lg.results[i].matches.forEach(function (m) { if (m.h === who || m.a === who) res = m; });
      }
      out.push({
        week: lg.weeks[i], cmp: 'Liga', comp: lg.name, round: 'J' + (i + 1),
        home: p[0] === who, opp: p[0] === who ? p[1] : p[0], res: res
      });
    });
    Object.keys(st.cups).forEach(function (cid) {
      var cup = st.cups[cid];
      cup.rounds.forEach(function (r, i) {
        r.ties.forEach(function (t) {
          if (t.a !== who && t.b !== who) return;
          out.push({
            week: cup.weeks[i], cmp: 'Copa', comp: cup.name, round: r.name,
            home: t.a === who, neutral: true, opp: t.a === who ? t.b : t.a,
            res: { h: t.a, a: t.b, s: t.s }, pens: t.pens
          });
        });
      });
      /* el cruce de la ronda siguiente ya está hecho */
      var prox = proximaCopa(cup);
      if (prox) {
        prox.ties.forEach(function (t) {
          if (t.a !== who && t.b !== who) return;
          out.push({
            week: prox.week, cmp: 'Copa', comp: cup.name, round: prox.name,
            home: t.a === who, neutral: true, opp: t.a === who ? t.b : t.a, res: null
          });
        });
      }
    });
    Object.keys(st.conts).forEach(function (cid) {
      var c = st.conts[cid];
      /* el Mundial de Clubes tiene sus propias fechas, al final de todo */
      var semGrupos = cid === 'cwc' ? World.weeks.cwcGrupos : World.weeks.groups;
      (c.groups || []).forEach(function (g) {
        if (g.teams.indexOf(who) < 0) return;
        (g.fixtures || []).forEach(function (pairs, mdi) {
          var p = null;
          pairs.forEach(function (x) { if (x[0] === who || x[1] === who) p = x; });
          if (!p) return;
          var res = null;
          (g.results || []).forEach(function (m) {
            if (m.md === mdi + 1 && (m.h === who || m.a === who)) res = m;
          });
          out.push({
            week: semGrupos[mdi] || 0, cmp: 'Cont.', comp: c.name, round: g.name + ' J' + (mdi + 1),
            home: p[0] === who, opp: p[0] === who ? p[1] : p[0], res: res
          });
        });
      });
      /* la previa y el play-off, se estén jugando o ya jugados */
      var ties = [];
      (c.prelimTies || []).concat(c.prelimHechas || []).forEach(function (t) {
        ties.push({ t: t, n: 'Fase previa', semanas: World.weeks.prelim });
      });
      (c.playoffTies || []).concat(c.playoffHechas || []).forEach(function (t) {
        ties.push({ t: t, n: 'Play-off', semanas: World.weeks.playoff });
      });
      (c.koRounds || []).forEach(function (r) {
        r.ties.forEach(function (t) {
          ties.push({ t: t, n: r.name, slot: r.slot,
            semanas: World.weeks.ko[r.slot] || World.weeks.cwc });
        });
      });
      ties.forEach(function (x) {
        var t = x.t;
        if (t.a !== who && t.b !== who) return;
        /* sorteada pero todavía sin jugar: se anuncia con su semana */
        var sems = x.semanas || [];
        if (!t.leg1 && !t.s) {
          var sem = sems[0] || 0;
          out.push({
            week: sem, cmp: 'Cont.', comp: c.name, round: x.n + (t.single ? '' : ' (ida)'),
            home: t.a === who, opp: t.a === who ? t.b : t.a, res: null
          });
          return;
        }
        if (t.leg1) out.push({
          week: sems[0] || 0, cmp: 'Cont.', comp: c.name, round: x.n + (t.single ? '' : ' (ida)'),
          home: t.a === who, opp: t.a === who ? t.b : t.a,
          res: { h: t.leg1.h, a: t.leg1.a, s: t.leg1.s }, pens: t.single ? t.pens : null
        });
        if (t.leg2) out.push({
          week: sems[1] || sems[0] || 0, cmp: 'Cont.', comp: c.name, round: x.n + ' (vuelta)',
          home: t.leg2.h === who, opp: t.leg2.h === who ? t.leg2.a : t.leg2.h,
          res: { h: t.leg2.h, a: t.leg2.a, s: t.leg2.s }, pens: t.pens
        });
        /* jugada la ida y la vuelta por jugar: se anuncia igual, que en la
           vuelta manda el otro campo */
        else if (!t.single) out.push({
          week: sems[1] || sems[0] || 0, cmp: 'Cont.', comp: c.name, round: x.n + ' (vuelta)',
          home: t.b === who, opp: t.b === who ? t.a : t.b, res: null
        });
      });
    });
    /* Lo que sigue en la cola todavía no lo viste: no se enseña el marcador
       o el calendario te cuenta el final antes de jugarlo. */
    var enCola = {};
    sinVer().forEach(function (m) {
      if (!m.res || m.kind === 'sel') return;
      var h = m.res.home.name, a2 = m.res.away.name;
      enCola[compBase(m.comp) + '|' + (h === who.n ? a2 : h)] = 1;
    });
    out.forEach(function (e) {
      if (e.res && e.opp && enCola[compBase(e.comp) + '|' + e.opp.n]) e.res = null;
    });
    /* Primero lo jugado, después lo que viene. Un partido sin semana no
       puede colarse al principio: va al final de su grupo. */
    out.forEach(function (e, i) { e.orden = i; });
    out.sort(function (a, b) {
      var pa = a.res ? 0 : 1, pb = b.res ? 0 : 1;
      if (pa !== pb) return pa - pb;
      var sa = a.week || 9e4, sb = b.week || 9e4;
      if (sa !== sb) return sa - sb;
      return a.orden - b.orden;
    });
    return out;
  }
  /* Los partidos del torneo de selecciones, con el mismo formato que los del
     club, para que el calendario los enseñe igual. */
  function calendarioSeleccion() {
    var mia = window.SelCarrera ? SelCarrera.miSeleccion() : null;
    if (!mia) return [];
    /* El torneo entero está simulado de antemano, pero el calendario sólo
       puede llegar hasta el partido que toca: si no, antes de jugar los
       dieciseisavos ya sabrías que llegaste a la final. */
    return matchQueue.filter(function (m) { return m.kind === 'sel' && m.res; })
      .slice(0, matchIdx + 2)
      .map(function (m, i) {
        var soyLocal = m.res.home.name === mia.n;
        /* el resultado sólo se enseña cuando ya lo viste: si no, el
           calendario te cuenta el final antes de jugarlo */
        var visto = i <= matchIdx;
        return {
          week: 0, cmp: 'Selección', comp: m.comp, round: m.label || '',
          home: soyLocal, neutral: true,
          opp: homeTeamOf(m.res, !soyLocal),
          res: visto ? { h: homeTeamOf(m.res, true), a: homeTeamOf(m.res, false),
            s: m.res.score } : null
        };
      });
  }
  function myCalendar() {
    /* En el parón de selecciones el calendario es el de la selección y nada
       más: lo del club ya terminó y sólo estorba. Pero el parón sólo existe
       con la temporada de clubes acabada: empezada la siguiente, manda el club. */
    var st = World.state;
    if (st && st.week >= st.total) {
      var sel = calendarioSeleccion();
      if (sel.length) return sel;
    }
    return calendarFor(me);
  }
  function nextFixture(cal) {
    for (var i = 0; i < cal.length; i++) if (!cal[i].res) return cal[i];
    return null;
  }
  /* Cuando una semana deja dos partidos (liga y copa), el segundo queda en
     la cola ya simulado pero sin ver. El menú tiene que anunciar ÉSE, que es
     el que va a salir al pulsar, y no la jornada siguiente del calendario. */
  function proximoDeCola() {
    var pend = colaPendiente();
    if (!pend || !pend.length) return null;
    var mm = pend[0], r = mm.res;
    if (!r) return null;
    var soyLocal, rival;
    if (mm.kind === 'sel') {
      /* en selecciones el equipo propio es el país, no el club */
      var mia = window.SelCarrera ? SelCarrera.miSeleccion() : null;
      soyLocal = !!(mia && r.home.name === mia.n);
      rival = homeTeamOf(r, !soyLocal);
    } else {
      soyLocal = r.home.src === me || r.home.name === me.n;
      rival = homeTeamOf(r, !soyLocal);
    }
    var cmp = mm.kind === 'liga' ? 'Liga' : mm.kind === 'copa' ? 'Copa'
      : mm.kind === 'sel' ? 'Selección' : mm.kind === 'po' ? 'Ascenso' : 'Cont.';
    return { cmp: cmp, comp: mm.comp, round: mm.label || '', week: World.state.week,
      home: soyLocal, neutral: mm.neutral || mm.kind === 'sel', opp: rival,
      res: null, porVer: true, sinConvocar: mm.kind === 'sel' && !mm.convocado };
  }
  /* el que toca de verdad: primero lo que quedó en la cola */
  function siguienteReal(cal) {
    return proximoDeCola() || nextFixture(cal);
  }
  function calRow(e, isNext) {
    var cls = 'calrow', rs = '—';
    if (e.res) {
      var my = e.res.h === me ? e.res.s[0] : e.res.s[1];
      var op = e.res.h === me ? e.res.s[1] : e.res.s[0];
      cls += my > op ? ' w' : my === op ? ' d' : ' l';
      rs = e.res.s[0] + '-' + e.res.s[1];
    } else if (isNext) cls += ' next';
    return '<div class="' + cls + '">' +
      '<span class="op"><span class="o1"><i>' + (e.home ? 'vs' : '@') + '</i>' + crest(e.opp, 16) +
      '<em>' + esc(e.opp.n) + '</em></span>' +
      '<span class="cmp">' + esc(e.cmp + ' · ' + e.round) + '</span></span>' +
      '<span class="rs">' + rs + '</span></div>';
  }

  /* =====================================================================
     TABLAS CON ZONAS
     ===================================================================== */
  /* Un partido que sigue en la cola todavía no se jugó para el jugador:
     su jornada entera se queda fuera de las tablas, o el marcador se sabe
     antes de salir a la cancha. */
  function jornadaEnEspera(comp) {
    var pend = sinVer(), min = null;
    for (var i = 0; i < pend.length; i++) {
      var m = pend[i];
      if (m.kind === 'sel' || m.comp !== comp) continue;
      var n = /(\d+)\s*$/.exec(m.label || '');
      if (!n) continue;
      if (min == null || +n[1] < min) min = +n[1];
    }
    return min;
  }
  /* El nombre pelado de la competición: en las eliminatorias el partido lo
     guarda con la ronda pegada («UEFA Champions League · Final»), y así no
     casa con el nombre que usan el calendario y las tablas. */
  function compBase(nombre) {
    var n = String(nombre || ''), i = n.indexOf(' · ');
    return i < 0 ? n : n.slice(0, i);
  }
  /* La ronda de una competición continental que sigue en la cola sin ver.
     En las eliminatorias el partido guarda el nombre con la ronda pegada
     («UEFA Champions League · Cuartos de final») y si es ida o vuelta. */
  function esperaCont(nombre) {
    var pre = nombre + ' · ', out = null;
    sinVer().forEach(function (m) {
      if (out || m.kind === 'sel' || !m.comp) return;
      var c = String(m.comp);
      if (c.indexOf(pre) !== 0) return;
      out = { ronda: c.slice(pre.length), leg: m.label || '' };
    });
    return out;
  }
  /* lo mismo en las copas nacionales, donde la ronda va en la etiqueta */
  function esperaCopa(nombre) {
    var out = null;
    sinVer().forEach(function (m) {
      if (out || m.kind !== 'copa' || m.comp !== nombre) return;
      out = m.label || '';
    });
    return out;
  }
  function mismaRonda(a, b) {
    return String(a || '').toLowerCase().trim() === String(b || '').toLowerCase().trim();
  }
  /* el cruce con la ida jugada y la vuelta todavía por ver */
  function tieSoloIda(t) { return { a: t.a, b: t.b, leg1: t.leg1 }; }
  /* ¿queda algun partido de esta competición esperando en la cola? */
  function compEnEspera(comp) {
    if (!comp) return false;
    /* en las eliminatorias el partido lleva la ronda pegada al nombre, así
       que valen los dos sentidos: «Champions» y «Champions · Cuartos» */
    var pre = comp + ' · ';
    return sinVer().some(function (m) {
      var c = String(m.comp || '');
      return m.kind !== 'sel' &&
        (c === comp || c.indexOf(pre) === 0 || comp.indexOf(c + ' · ') === 0);
    });
  }
  /* la tabla de una liga contando sólo hasta la jornada que ya se vio */
  function filasLiga(lg) {
    var espera = jornadaEnEspera(lg.name);
    if (espera == null || !lg.results || !window.Comp) return Comp.sortTable(lg.table);
    var t = Comp.newTable(lg.teams);
    lg.results.forEach(function (r) {
      if (r.round >= espera) return;
      r.matches.forEach(function (m) { Comp.applyResult(t, m.h, m.a, m.s); });
    });
    return Comp.sortTable(t);
  }
  /* lo mismo con un grupo de competición continental */
  function filasGrupoCont(c, g) {
    var espera = jornadaEnEspera(c.name);
    if (espera == null || !g.results || !window.Comp) return g.standings || Comp.sortTable(g.table);
    var t = Comp.newTable(g.teams);
    g.results.forEach(function (m) { if (m.md < espera) Comp.applyResult(t, m.h, m.a, m.s); });
    return Comp.sortTable(t);
  }

  function zonedTable(lid, opts) {
    opts = opts || {};
    var st = World.state, lg = st.leagues[lid];
    var rows = filasLiga(lg);
    var z = World.zonesFor(lid) || { map: {}, labels: {}, rel: 0, promo: 0 };
    var n = rows.length;
    var slice = rows, offset = 0, corte = false;
    if (opts.around && me) {
      var i = rows.findIndex(function (r) { return r.t === me; });
      var from = Math.max(0, i - 2), to = Math.min(n, i + 3);
      if (to - from < 5) from = Math.max(0, to - 5);
      slice = rows.slice(from, to); offset = from;
    }
    /* la tabla del panel del club: los cinco primeros y, si ando más abajo,
       mi propia fila al final para no perderme de vista */
    if (opts.top5) {
      slice = rows.slice(0, 5); offset = 0;
      var yo = rows.findIndex(function (r) { return r.t === me; });
      if (yo >= 5) { slice = slice.concat([rows[yo]]); corte = true; }
    }
    var html = '<table class="minitab"><thead><tr><th class="num">#</th><th>Equipo</th>' +
      '<th class="num">PJ</th><th class="num gep">G</th><th class="num gep">E</th>' +
      '<th class="num gep">P</th>' +
      '<th class="num">DG</th><th class="num">Pts</th>' +
      (opts.form ? '<th class="form">Últimos</th>' : '') + '</tr></thead><tbody>';
    slice.forEach(function (r, k) {
      var i = (corte && k === slice.length - 1)
        ? rows.indexOf(r) : offset + k;
      if (corte && k === slice.length - 1) html += '<tr class="salto"><td colspan="9">···</td></tr>';
      var zone = z.map[r.t.uid || r.t.n];
      var cls = zone ? 'z-' + zone : '';
      if (!zone && z.promo && i < z.promo) cls = 'z-promo';
      else if (!zone && z.promoPo && i >= z.promo && i < z.promo + z.promoPo) cls = 'z-promopo';
      if (z.rel && i >= n - z.rel) cls = 'z-rel';
      if (z.cupChampion && r.t === z.cupChampion) cls += ' z-cup';
      html += '<tr class="' + cls + (r.t === me ? ' me' : '') + '">' +
        '<td class="num"><span class="pos-chip">' + (i + 1) + '</span></td>' +
        '<td><div class="tname">' + crest(r.t, 18) + '<span>' + esc(r.t.n) + '</span></div></td>' +
        '<td class="num">' + r.pj + '</td>' +
        '<td class="num gep">' + r.g + '</td>' +
        '<td class="num gep">' + r.e + '</td>' +
        '<td class="num gep">' + r.p + '</td>' +
        '<td class="num">' + (r.gf - r.gc > 0 ? '+' : '') + (r.gf - r.gc) + '</td>' +
        '<td class="num"><b>' + r.pts + '</b></td>' +
        (opts.form ? '<td class="form">' + r.form.slice(-5).map(function (f) {
          return '<span class="' + f + '">' + f + '</span>';
        }).join('') + '</td>' : '') + '</tr>';
    });
    html += '</tbody></table>';
    if (opts.legend !== false) html += zoneLegend(z);
    return html;
  }
  function zoneLegend(z) {
    var k = [];
    ['top', 'prelim', 'second'].forEach(function (n) {
      if (z.labels[n]) k.push('<span class="k"><i class="' + n + '"></i>' + esc(z.labels[n]) + '</span>');
    });
    if (z.promo) k.push('<span class="k"><i class="promo"></i>Ascenso directo</span>');
    if (z.promoPo) k.push('<span class="k"><i class="promopo"></i>Play-off de ascenso</span>');
    if (z.rel) k.push('<span class="k"><i class="rel"></i>Descenso</span>');
    if (z.cupChampion) k.push('<span class="k"><i class="cup"></i>Campeón de ' + esc(z.cupName || 'copa') + '</span>');
    return k.length ? '<div class="zleg">' + k.join('') + '</div>' : '';
  }

  /* =====================================================================
     VISTA · CLUB
     ===================================================================== */
  /* en un partido de selección el equipo propio es el país que dirige */
  function miLadoEn(nx) {
    if (nx && nx.cmp === 'Selección' && window.SelCarrera) {
      return SelCarrera.miSeleccion() || me;
    }
    return me;
  }
  function viewClub() {
    var st = World.state;
    var cal = myCalendar();
    var nx = siguienteReal(cal);
    /* mientras juega la selección, en vez de la continental van los asistentes */
    var asistSel = asistenciasSel(nx);
    var played = cal.filter(function (e) { return e.res; });
    var pend = cal.filter(function (e) { return !e.res; });
    var over = st.week >= st.total;

    if (changing) return viewChange();

    var nextCard;
    /* lo primero, el parón de selecciones: hasta que no se juegue no tiene
       sentido cerrar la temporada */
    if ((over || !nx) && !(nx && nx.porVer) &&
        World.seleccionesPendientes && World.seleccionesPendientes()) {
      nextCard = '<div class="nextm"><div class="comp">Se acabó la temporada del club</div>' +
        '<p class="hint" style="margin:12px 0">Queda el parón de selecciones. ' +
        'Cuando lo termines podrás cerrar la temporada.</p>' +
        '<div class="simbtns"><button class="primary" id="bSel">Ir a selección nacional</button>' +
        '</div></div>';
    /* un partido en cola manda sobre el cartel de temporada terminada */
    } else if (over && !(nx && nx.porVer)) {
      nextCard = '<div class="nextm"><div class="comp">Temporada terminada</div>' +
        '<p class="hint" style="margin:14px 0">Cierra la temporada desde la barra superior para aplicar ascensos, ' +
        'descensos y el reparto de plazas continentales. También puedes cambiar de equipo.</p></div>';
    } else if (!nx) {
      nextCard = '<div class="nextm"><div class="comp">Sin partidos pendientes</div>' +
        '<div class="simbtns"><button class="mini" id="bWeek">Ir al siguiente partido</button>' +
        '<button class="mini" id="bRest">Ir al final de la temporada</button></div></div>';
    } else {
      nextCard = '<div class="nextm"><div class="comp">' + esc(nx.comp) + ' · ' + esc(nx.round) + '</div>' +
        '<div class="vs2">' +
        ladoPrevia(nx.home ? miLadoEn(nx) : nx.opp) +
        '<div class="mid">VS</div>' +
        ladoPrevia(nx.home ? nx.opp : miLadoEn(nx)) +
        '</div>' +
        '<div class="where">' + (nx.neutral ? 'Cancha neutral'
          : nx.home ? 'En casa' : 'A domicilio') +
        ' · partido ' + (played.length + 1) +
        (nx.cmp === 'Selección' ? '' : ' de ' + cal.length) + '</div>' +
        '<div class="simbtns">' +
        '<button class="primary" id="bVisual">Ver el partido</button>' +
        '<button class="mini" id="bQuick">Simulación rápida</button>' +
        '<button class="mini" id="bWeek">Saltar este partido</button>' +
        '</div></div>';
    }

    return '<div class="dash">' +
      '<div class="dcol r21">' +
      (miSel ? '<div class="panel"><h3>Tu selección <small>' + esc(miSel.n) + '</small></h3>' +
        '<div class="pbody tight">' + seleccionDT() + '</div></div>' : '') +
      '<div class="panel"><h3>Últimos resultados</h3><div class="pbody tight"><div class="cal">' +
      (played.length ? played.slice(-12).reverse().map(function (e) { return calRow(e); }).join('')
        : '<p class="hint">Aún no has jugado.</p>') +
      '</div></div></div></div>' +

      '<div class="dcol rpart">' +
      '<div class="panel"><h3>Próximo partido</h3><div class="pbody">' + nextCard + '</div></div>' +
      '<div class="dsplit">' +
      '<div class="panel"><h3>Goleadores <small>' + esc(nx ? nx.comp : LG[me.leagueId].name) + '</small></h3>' +
      '<div class="pbody tight">' + goleadoresDe(nx) + '</div></div>' +
      (asistSel
        ? '<div class="panel"><h3>Asistencias <small>' + esc(nx ? nx.comp : '') + '</small></h3>' +
          '<div class="pbody tight">' + asistSel + '</div></div>'
        : '<div class="panel"><h3>Continental <small>' + esc(nombreContinental() || 'sin competición') + '</small></h3>' +
          '<div class="pbody tight">' + tablaContinental() + '</div></div>') +
      '</div></div>' +

      /* A la derecha, lo que toque: si el próximo partido es una
         eliminatoria, los cruces de esa ronda; si no, la tabla de la liga. */
      panelDerecha(nx) +
      '</div>';
  }

  /* La selección que también dirige el entrenador. */
  function seleccionDT() {
    if (!miSel) return '';
    var st = World.state;
    var fase = window.SelCarrera
      ? SelCarrera.NOMBRE_FASE[SelCarrera.faseActual()] : '';
    var hist = (st.seleccionHistorial || []).slice().reverse().slice(0, 5);
    var puede = !!World.state.cambioSeleccion;
    return '<div class="selbox">' +
      (window.Nac ? Nac.bandera(miSel.s, 26) : '') +
      '<div><b>' + esc(miSel.n) + '</b><small>media ' + miSel.ovr + '</small></div>' +
      (puede ? '<button class="mini primary" id="bCambiarSel">Cambiar</button>' : '') +
      '</div>' +
      '<p class="hint">Este año toca: <b>' + esc(fase) + '</b>. Se juega al cerrar la temporada.</p>' +
      '<p class="hint">' + (puede
        ? 'Acaba de terminar el Mundial: puedes cambiar de selección hasta el próximo torneo.'
        : 'Sólo se puede cambiar de selección cuando termina un Mundial.') + '</p>' +
      (hist.length ? '<div class="cal">' + hist.map(function (h) {
        return '<div class="calrow" style="grid-template-columns:auto 1fr">' +
          '<span class="cmp">' + h.anio + '</span>' +
          '<span class="op"><span class="o1"><em>' + esc(h.nombre) + '</em></span></span></div>';
      }).join('') + '</div>' : '');
  }

  function myCupsSummary() {
    var st = World.state, out = [];
    Object.keys(st.cups).forEach(function (cid) {
      var c = st.cups[cid];
      var inIt = c.alive.indexOf(me) >= 0;
      var played = c.rounds.some(function (r) {
        return r.ties.some(function (t) { return t.a === me || t.b === me; });
      });
      if (!inIt && !played) return;
      out.push({
        name: c.name,
        state: c.champion === me ? '🏆 campeón' : inIt ? 'en juego' : 'eliminado'
      });
    });
    Object.keys(st.conts).forEach(function (cid) {
      var c = st.conts[cid];
      var inGroup = (c.groups || []).some(function (g) { return g.teams.indexOf(me) >= 0; });
      var inKo = (c.koRounds || []).some(function (r) {
        return r.ties.some(function (t) { return t.a === me || t.b === me; });
      });
      var inPre = (c.prelimTies || []).some(function (t) { return t.a === me || t.b === me; });
      if (!inGroup && !inKo && !inPre) return;
      var last = null;
      (c.koRounds || []).forEach(function (r) {
        r.ties.forEach(function (t) { if (t.a === me || t.b === me) last = { r: r, t: t }; });
      });
      var stt = c.champion === me ? '🏆 campeón'
        : last ? (last.t.w === me ? 'pasa de ' + last.r.name.toLowerCase() : 'eliminado en ' + last.r.name.toLowerCase())
          : (inGroup ? 'fase de grupos' : 'fase previa');
      out.push({ name: c.name, state: stt });
    });
    if (!out.length) return '<p class="hint">Tu equipo no disputa copas esta temporada.</p>';
    return '<div class="cal">' + out.map(function (o) {
      return '<div class="calrow" style="grid-template-columns:1fr auto"><span class="op">' +
        '<span class="o1"><em>' + esc(o.name) + '</em></span></span>' +
        '<span class="cmp">' + esc(o.state) + '</span></div>';
    }).join('') + '</div>';
  }

  var chTeam = null;
  function viewChange() {
    var t = chTeam || me;
    return '<div class="dash" style="grid-template-columns:1fr"><div class="panel">' +
      '<h3>Cambiar de equipo</h3><div class="pbody">' +
      '<p class="hint">Elige el club con el que quieres seguir la carrera. El mundo sigue donde está.</p>' +
      '<div class="toolbar" style="margin-top:14px">' +
      '<button class="pickbtn" id="chPick" style="max-width:340px">' +
      '<span class="pb-crest">' + Crest.html(t, 28) + '</span>' +
      '<span class="pb-txt"><b>' + esc(t.n) + '</b><small>' + esc(t.league) +
      ' · global ' + t.ovr + '</small></span>' + Stars.html(t.ovr) +
      '<span class="pb-ch">›</span></button>' +
      '<button class="primary" id="chOk">Dirigir a este equipo</button>' +
      '<button class="mini" id="chCancel">Cancelar</button></div>' +
      '</div></div></div>';
  }

  /* =====================================================================
     VISTA · PARTIDO
     ===================================================================== */
  function viewMatch() {
    if (!currentMatch) {
      return '<div class="panel" style="height:100%"><h3>Partido</h3><div class="pbody">' +
        '<p class="hint">Todavía no hay partido.</p>' +
        '<div class="toolbar"><button class="primary" id="bBack">Volver al club</button></div>' +
        '</div></div>';
    }
    var mm = currentMatch;
    /* Un partido termina y se vuelve al club. Si la semana dejó otro, se
       retoma desde «Ver el partido»: no se pierde ninguno. */
    /* el contador es el de la temporada entera: las semanas no existen */
    var cp = cuentaPartidos();
    var queue = '<span class="pill">Partido ' + cp.jugados + ' de ' + cp.total + '</span>';
    var volver = ' <button class="primary mini" id="bBack">Volver al club</button>';
    /* un partido recuperado del archivo no trae el relato: sólo resumen */
    if (!matchVisual || mm.soloResumen) {
      var r = mm.res;
      return '<div class="mv-wrap">' +
        '<div class="mbar"><div><b>' + esc(mm.comp) + '</b> <span class="hint">· ' + esc(mm.label || '') + '</span>' +
        (mm.kind === 'sel' && !mm.convocado ? ' <span class="pill">No estabas convocado</span>' : '') +
        '</div>' +
        '<div>' + queue + volver + '</div></div>' +
        '<div class="panel" style="flex:1"><h3>Resultado</h3><div class="pbody">' +
        '<div class="nextm"><div class="vs2">' +
        '<div class="side2">' + crest(r.home.ref || homeTeamOf(r, true), 46) + '<b>' + esc(r.home.name) + '</b></div>' +
        '<div class="mid">' + r.score[0] + ' - ' + r.score[1] + '</div>' +
        '<div class="side2">' + crest(homeTeamOf(r, false), 46) + '<b>' + esc(r.away.name) + '</b></div>' +
        '</div>' + extraHTML(r) + golesDeRes(r) + '</div>' +
        ((mm.others && mm.others.length)
          ? '<h4 class="subh">' + esc(mm.blockName || '') + '</h4>' +
            (mm.areTies ? '<div class="ties">' + mm.others.map(tieCard).join('') + '</div>'
              : '<div class="fx">' + mm.others.map(scoreLine).join('') + '</div>')
          : '') +
        '</div></div></div>';
    }
    return '<div class="mv-wrap">' +
      '<div class="mbar"><div><b>' + esc(mm.comp) + '</b> <span class="hint">· ' + esc(mm.label || '') + '</span>' +
      (mm.kind === 'sel' && !mm.convocado ? ' <span class="pill">No estabas convocado</span>' : '') +
      '</div>' +
      '<div>' + queue + ' <button class="mini" id="bSkip">Ver el final</button>' +
      volver + '</div></div>' +
      '<div id="wMatchBox" style="flex:1;min-height:0;display:flex;flex-direction:column"></div>' +
      '<div id="wStrip"></div></div>';
  }
  /* desempates: global de la eliminatoria, prórroga y tanda de penales */
  function extraHTML(r) {
    var bits = [];
    if (r.aggNote) bits.push(esc(r.aggNote));
    if (r.pens) {
      bits.push('Penales <b>' + r.pens.a + '-' + r.pens.b + '</b> · gana ' +
        esc(r.winner === 'home' ? r.home.name : r.away.name));
    } else if (r.aet) bits.push('Tras la prórroga');
    return bits.length ? '<div class="mextra">' + bits.join(' · ') + '</div>' : '';
  }

  function homeTeamOf(res, isHome) {
    var name = isHome ? res.home.name : res.away.name;
    var lgIds = Object.keys(LG);
    for (var i = 0; i < lgIds.length; i++) {
      var t = LG[lgIds[i]].teams.filter(function (x) { return x.n === name; })[0];
      if (t) return t;
    }
    return { n: name, s: '?', c1: '#2b3444', c2: '#fff' };
  }
  function stripHTML() {
    var mm = currentMatch;
    if (!mm || !mm.others || !mm.others.length) return '';
    var items = mm.areTies
      ? mm.others.map(function (t) {
        if (!t.b) return '';
        var sa = t.agg ? t.agg[0] : (t.leg1 ? t.leg1.s[0] : (t.s ? t.s[0] : '-'));
        var sb = t.agg ? t.agg[1] : (t.leg1 ? t.leg1.s[1] : (t.s ? t.s[1] : '-'));
        return chip(t.a, sa, sb, t.b);
      })
      : mm.others.map(function (m) { return chip(m.h, m.s[0], m.s[1], m.a); });
    return '<div class="mbar" style="gap:6px;overflow-x:auto;justify-content:flex-start">' +
      '<span class="cmp" style="white-space:nowrap;color:var(--dim);font-size:11px;text-transform:uppercase;letter-spacing:1px">' +
      esc(mm.blockName || '') + '</span>' + items.join('') + '</div>';
  }
  function chip(a, sa, sb, b) {
    var mine = (a === me || b === me);
    return '<span class="pill" style="white-space:nowrap;font-size:11.5px' +
      (mine ? ';border-color:var(--acc);color:var(--acc)' : '') + '">' +
      esc(a.s) + ' <b>' + sa + '-' + sb + '</b> ' + esc(b.s) + '</span>';
  }
  /* En los listados de resultados va sólo el escudo del club (el nombre
     queda en el tooltip), para que se lean de un vistazo. */
  /* quién marcó, a cada lado del resultado */
  /* la lista de goleadores de un lado, con sus minutos */
  function listaGoles(l) {
    if (!l || !l.length) return '';
    return l.map(function (g) {
      return '<i>' + esc(g.n) + ' <u>' +
        g.mins.map(function (x) { return x + "'"; }).join(', ') + '</u></i>';
    }).join('');
  }
  /* los dos lados de un partido, con la pelota en medio */
  function golesPartido(gh, ga) {
    if (!(gh && gh.length) && !(ga && ga.length)) return '';
    return '<div class="qgoles"><span class="qg izq">' + listaGoles(gh) + '</span>' +
      '<span class="qg-bola">⚽</span>' +
      '<span class="qg der">' + listaGoles(ga) + '</span></div>';
  }
  /* los goleadores de un resultado del motor */
  function golesDeRes(r) {
    var g = r.golesYa || (window.Comp ? Comp.matchScorers(r) : null);
    return g ? golesPartido(g.home, g.away) : '';
  }

  function golesHTML(m) {
    function lado(l, clase) {
      if (!l || !l.length) return '<span class="sc-g ' + clase + '"></span>';
      return '<span class="sc-g ' + clase + '">' + l.map(function (g) {
        return '<i>' + esc(g.n) + ' <u>' + g.mins.map(function (x) { return x + "'"; }).join(', ') +
          '</u></i>';
      }).join('') + '</span>';
    }
    if (!(m.gh && m.gh.length) && !(m.ga && m.ga.length)) return '';
    return '<div class="sc-gols">' + lado(m.gh, 'izq') + lado(m.ga, 'der') + '</div>';
  }
  function scoreLine(m) {
    var mine = (m.h === me || m.a === me);
    var pen = m.pens ? '<i class="pen">pen ' + m.pens.a + '-' + m.pens.b + '</i>' : '';
    return '<div class="scline' + (mine ? ' mine' : '') + '">' +
      '<span class="sc-c" title="' + esc(m.h.n) + '">' + crest(m.h, 34) + '</span>' +
      '<b>' + m.s[0] + ' - ' + m.s[1] + pen + '</b>' +
      '<span class="sc-c" title="' + esc(m.a.n) + '">' + crest(m.a, 34) + '</span>' +
      golesHTML(m) + '</div>';
  }
  function tieCard(t) {
    if (!t || !t.a) return '';
    if (!t.b) return '<div class="tiecard"><div class="trow win">' + crest(t.a, 18) + '<em>' + esc(t.a.n) + '</em><b>bye</b></div></div>';
    /* El marcador grande es el del partido que se acaba de jugar, con los
       goleadores de ESE partido. El global va debajo, con las dos piernas.
       En la vuelta se juega en casa del otro, así que los lados se dan vuelta. */
    var sa, sb, legs = '', ga1 = [], gb1 = [];
    if (t.single && t.leg1) {
      sa = t.leg1.s[0]; sb = t.leg1.s[1];
      ga1 = t.leg1.gh || []; gb1 = t.leg1.ga || [];
    } else if (t.agg) {
      sa = t.leg2.s[1]; sb = t.leg2.s[0];
      ga1 = t.leg2.ga || []; gb1 = t.leg2.gh || [];
      legs = 'Global ' + t.agg[0] + '-' + t.agg[1] +
        ' · Ida ' + esc(t.a.s) + ' ' + t.leg1.s[0] + '-' + t.leg1.s[1] + ' ' + esc(t.b.s) +
        ' · Vuelta ' + esc(t.b.s) + ' ' + t.leg2.s[0] + '-' + t.leg2.s[1] + ' ' + esc(t.a.s);
    } else if (t.leg1) {
      sa = t.leg1.s[0]; sb = t.leg1.s[1];
      ga1 = t.leg1.gh || []; gb1 = t.leg1.ga || [];
      legs = 'ida · falta la vuelta';
    } else if (t.s) {
      sa = t.s[0]; sb = t.s[1];
      ga1 = t.gh || []; gb1 = t.ga || [];
    } else { sa = '–'; sb = '–'; }
    if (t.pens) legs += (legs ? ' · ' : '') + 'penales ' + t.pens.a + '-' + t.pens.b;
    else if (t.aet) legs += (legs ? ' · ' : '') + 'tras prórroga';
    var mine = (t.a === me || t.b === me) ? ' mine' : '';
    return '<div class="tiecard' + mine + '">' +
      '<div class="trow' + (t.w === t.a ? ' win' : '') + '">' + crest(t.a, 18) + '<em>' + esc(t.a.n) + '</em><b>' + sa + '</b></div>' +
      '<div class="trow' + (t.w === t.b ? ' win' : '') + '">' + crest(t.b, 18) + '<em>' + esc(t.b.n) + '</em><b>' + sb + '</b></div>' +
      golesPartido(ga1, gb1) +
      (legs ? '<div class="tlegs">' + legs + '</div>' : '') + '</div>';
  }

  /* =====================================================================
     VISTA · ALINEACIÓN
     ===================================================================== */
  /* Mientras haya partidos de selección en cola, el equipo que se gestiona
     es la selección: su alineación, su plantilla y sus cambios. */
  function equipoActivo() {
    var pend = colaPendiente();
    if (pend && pend.length && pend[0].kind === 'sel' && window.SelCarrera) {
      return SelCarrera.miSeleccion() || me;
    }
    return me;
  }
  function slots() {
    var eq = equipoActivo();
    return (eq.fm && eq.fm.length === 11) ? eq.fm.slice() : Engine.FORMATIONS['4-3-3'].slice();
  }
  function formationName() {
    var cur = slots().join(',');
    var found = '';
    Object.keys(Engine.FORMATIONS).forEach(function (k) {
      if (Engine.FORMATIONS[k].join(',') === cur) found = k;
    });
    return found || 'Personalizada';
  }
  var CONV = (window.Engine && Engine.BANQUILLO) || 7;
  function viewSquad() {
    var eq = equipoActivo();
    var sl = slots(), pos = layout(sl);
    var xi = eq.p.slice(0, 11), bench = eq.p.slice(11);
    var st = Engine.strengths(Engine.buildTeam(eq, 'bal'), 0);

    var pitch = '<div class="pitch"><div class="halfway"></div><div class="circle"></div>' +
      xi.map(function (p, i) {
        var bad = Engine.misfit(p[1], sl[i]);
        return '<div class="slot' + (selSlot === i ? ' sel' : '') + '" data-slot="' + i + '" ' +
          'style="left:' + pos[i][0] + '%;top:' + pos[i][1] + '%">' +
          '<div class="sdot' + (bad >= 4 ? ' off' : '') + '">' + p[2] + '</div>' +
          '<div class="sname">' + natImg(p, 9) + esc(p[0].split(' ').slice(-1)[0]) + '</div>' +
          '<div class="spos">' + sl[i] + (bad >= 4 ? ' ⚠' : '') + '</div></div>';
      }).join('') + '</div>';

    var fopts = Object.keys(Engine.FORMATIONS).map(function (k) {
      return '<option' + (k === formationName() ? ' selected' : '') + '>' + k + '</option>';
    }).join('');

    return '<div class="lineupgrid">' +
      '<div class="panel"><h3>Once inicial <small>' + esc(eq.n) + ' · ' + esc(formationName()) +
      ' · ATA ' + Math.round(st.att) + ' MED ' + Math.round(st.mid) + ' DEF ' + Math.round(st.def) + '</small></h3>' +
      '<div class="pbody tight" style="display:flex;flex-direction:column;gap:8px">' +
      '<div class="toolbar" style="gap:8px">' +
      '<label>Formación</label><select id="fmSel" style="width:auto">' + fopts + '</select>' +
      '<button class="mini" id="fmAuto">Once automático</button>' +
      '<span class="hint">Toca un jugador del campo y luego otro (o uno del banco) para intercambiarlos.</span>' +
      '</div>' + pitch + '</div></div>' +
      '<div class="panel"><h3>Banco <small>' + Math.min(bench.length, CONV) +
      ' convocados de ' + bench.length + '</small></h3>' +
      '<div class="pbody tight"><div class="benchlist">' +
      bench.map(function (p, i) {
        return '<div class="bp' + (selBench === i ? ' sel' : '') +
          (i >= CONV ? ' fuera' : '') + '" data-bench="' + i + '" ' +
          (i >= CONV ? 'title="Fuera de la convocatoria"' : '') + '>' +
          '<span class="pos">' + p[1] + '</span>' + natImg(p, 11) +
          '<span class="nm">' + esc(p[0]) + '</span>' +
          '<span class="rt ' + X.ratClass(p[2]) + '">' + p[2] + '</span></div>';
      }).join('') + '</div>' +
      '<p class="hint" style="margin-top:6px">Sólo se sientan los ' + CONV + ' primeros. ' +
      'Toca dos jugadores del banco para intercambiarlos y convocar a quien quieras.</p></div></div></div>';
  }

  /* =====================================================================
     VISTA · RESULTADOS
     ===================================================================== */
  /* Todo lo que tu club disputa esta temporada, en una sola lista: la liga,
     la copa del país, la continental que le toque y las supercopas si juega. */
  function misCompeticiones() {
    var st = World.state, out = [];
    if (!me || !st) return out;
    function mio(t) { return t === me; }
    function enCruces(ts) { return (ts || []).some(function (t) { return t.a === me || t.b === me; }); }
    if (me.leagueId && st.leagues[me.leagueId]) out.push({ v: 'L:' + me.leagueId, t: lname(me.leagueId) });
    Object.keys(st.cups || {}).forEach(function (cid) {
      var c = st.cups[cid];
      var dentro = (c.alive || []).some(mio) || (c.rounds || []).some(function (r) { return enCruces(r.ties); });
      if (dentro) out.push({ v: 'U:' + cid, t: c.name });
    });
    Object.keys(st.conts || {}).forEach(function (cid) {
      var c = st.conts[cid];
      var dentro = (c.pool || []).some(mio) || (c.prelimPool || []).some(mio) ||
        (c.groups || []).some(function (g) { return (g.teams || []).some(mio); }) ||
        enCruces(c.prelimTies) || enCruces(c.playoffTies) ||
        (c.koRounds || []).some(function (r) { return enCruces(r.ties); });
      if (dentro) out.push({ v: 'K:' + cid, t: '★ ' + c.name });
    });
    var SC = st.superCopas || {};
    if (SC.uefa && (SC.uefa.a === me || SC.uefa.b === me)) {
      out.push({ v: 'X:uefa', t: '★ Supercopa de UEFA' });
    }
    if (SC.conmebol && (SC.conmebol.a === me || SC.conmebol.b === me)) {
      out.push({ v: 'X:conmebol', t: '★ Recopa Sudamericana' });
    }
    return out;
  }

  function scopeList() {
    var st = World.state, out = [];
    if (rConf === 'MIAS') return misCompeticiones();
    /* las competiciones de selecciones viven aparte de los continentes */
    if (rConf === 'SEL') {
      var h = (st.seleccionHistorial || []).slice().reverse();
      if (st.seleccionUltimo) {
        /* una entrada por competición, y primero la que juega mi selección */
        var mio = bloqueMio(st.seleccionUltimo);
        var anio = st.seleccionUltimo.anio || '';
        bloquesSel(st.seleccionUltimo).sort(function (a, b) {
          return (a.id === mio ? -1 : 0) - (b.id === mio ? -1 : 0);
        }).forEach(function (b) {
          out.push({ v: 'S:' + b.id, t: (b.id === mio ? '★ ' : '') + b.t + ' ' + anio });
        });
      }
      h.forEach(function (x, i) {
        if (i === 0 && st.seleccionUltimo && x.anio === st.seleccionUltimo.anio) return;
        out.push({ v: 'H:' + i, t: (x.nombre || 'Torneo') + ' ' + x.anio });
      });
      if (!out.length) out.push({ v: 'S:nada', t: 'Todavía no hubo torneos' });
      return out;
    }
    COUNTRIES.forEach(function (c) {
      if (c.conf !== rConf) return;
      if (!c.have.length) return;
      out.push({ v: 'C:' + c.id, t: c.name });
    });
    Object.keys(st.conts).forEach(function (id) {
      var c = st.conts[id];
      if (c.cfg.conf === rConf || (id === 'cwc' && rConf === 'UEFA')) out.push({ v: 'K:' + id, t: '★ ' + c.name });
    });
    /* la Supercopa y la Recopa no son torneos largos, pero se consultan igual */
    var SC = st.superCopas || {};
    if (rConf === 'UEFA' && SC.uefa) out.push({ v: 'X:uefa', t: '★ Supercopa de UEFA' });
    if (rConf === 'CONMEBOL' && SC.conmebol && SC.conmebol.leg1) {
      out.push({ v: 'X:conmebol', t: '★ Recopa Sudamericana' });
    }
    return out;
  }
  function compList() {
    var st = World.state;
    if (rConf === 'SEL' || rConf === 'MIAS') return [];
    if (!rScope || rScope.charAt(0) === 'K' || rScope.charAt(0) === 'X') return [];
    var c = COUNTRIES.filter(function (x) { return x.id === rScope.slice(2); })[0];
    if (!c) return [];
    var out = c.have.map(function (l) { return { v: 'L:' + l, t: LG[l].name }; });
    if (st.cups[c.id]) out.push({ v: 'U:' + c.id, t: st.cups[c.id].name });
    return out;
  }
  function viewList() {
    if (rConf === 'SEL') {
      /* el cuadro se recorre con las flechas: aquí sólo hace falta poder
         saltar a los goleadores */
      var rsel = torneoSelDe(rScope);
      var bid = (rScope && rScope.indexOf('S:') === 0) ? rScope.slice(2) : null;
      if (!goleadoresBloqueSel(rsel, bid)) return [];
      return [{ v: 'cuadro', t: 'Torneo' }, { v: 'gol', t: 'Goleadores' }];
    }
    if (!rComp) return [];
    var k = rComp.charAt(0);
    if (k === 'L') {
      var vl = [{ v: 'tabla', t: 'Clasificación' }, { v: 'gol', t: 'Goleadores' },
        { v: 'res', t: 'Última jornada' }];
      /* si la liga regular ya acabó con promoción, se puede repasar */
      if ((World.state.playoffs || {})[rComp.slice(2)]) vl.push({ v: 'po', t: 'Play-off de ascenso' });
      return vl;
    }
    if (k === 'U') return [{ v: 'llaves', t: 'Cuadro' }];
    /* el cuadro se recorre con las flechas, sin desplegable */
    return [{ v: 'cuadro', t: 'Torneo' }, { v: 'gol', t: 'Goleadores' }];
  }

  /* El play-off se simula entero de una vez, así que hay que tapar lo que
     el jugador todavía no vio: su ronda pendiente sale sin marcadores y las
     siguientes no salen. */
  function playoffVisible(po, rondas) {
    var mio = (po.ties || []).some(function (t) { return t.a === me || t.b === me; });
    var pend = sinVer().filter(function (m) { return m.kind === 'po'; });
    if (!mio || !pend.length) return { rondas: rondas, campeon: po.campeon };
    var lab = pend[0].label || '';
    var corte = 0;
    rondas.forEach(function (r, i) {
      if (r.ties.some(function (t) { return (t.name || '') === lab; })) corte = i;
    });
    var vistas = rondas.slice(0, corte).concat([{
      name: rondas[corte].name,
      ties: rondas[corte].ties.map(tieSinVer),
      futura: true
    }]);
    return { rondas: vistas, campeon: null };
  }

  /* El play-off de ascenso, en rondas, para que se dibuje como cualquier
     otra llave: dos semifinales y la final. */
  function rondasPlayoff(po) {
    var semis = [], final = [];
    (po.ties || []).forEach(function (t) {
      /* ojo: «semifinal» también contiene «final» */
      (/^final/i.test(t.name || '') ? final : semis).push(t);
    });
    var out = [];
    if (semis.length) out.push({ name: 'Semifinales', ties: semis });
    if (final.length) out.push({ name: 'Final del play-off', ties: final });
    return out;
  }

  /* =====================================================================
     VISTA · MI CLUB
     La plantilla entera con lo que lleva cada uno esta temporada. Las fichas
     las apunta el mundo partido a partido, y sólo las del club que se sigue.
     ===================================================================== */
  function vistaMiClub() {
    if (!me) return '<p class="hint">Todavía no tienes club.</p>';
    var eq = equipoActivo();
    var fichas = (World.state.plantillaDe === eq.n && World.state.plantilla) || {};
    var yo = (window.Carrera && Carrera.activa()) ? Carrera.jugador().p : null;
    var CONV = 11 + ((window.Engine && Engine.BANQUILLO) || 7);
    var filas = eq.p.map(function (p, i) {
      var f = fichas[p[0]] || { pj: 0, tit: 0, g: 0, a: 0, am: 0, rj: 0 };
      var sitio = i < 11 ? 'Titular' : i < CONV ? 'Suplente' : 'No convocado';
      return '<tr class="' + (p === yo ? 'yo' : '') + '">' +
        '<td class="num"><span class="pos-chip">' + esc(p[1]) + '</span></td>' +
        '<td><div class="tname">' + natImg(p, 13) + '<span>' + esc(p[0]) + '</span></div></td>' +
        '<td class="num">' + p[3] + '</td>' +
        '<td class="num"><b class="' + (X.ratClass ? X.ratClass(p[2]) : '') + '">' + p[2] + '</b></td>' +
        '<td class="mc-sitio ' + (i < 11 ? 'tit' : i < CONV ? 'sup' : 'fue') + '">' + sitio + '</td>' +
        '<td class="num">' + f.pj + '</td>' +
        '<td class="num">' + (f.g || '') + '</td>' +
        '<td class="num">' + (f.a || '') + '</td>' +
        '<td class="num">' + (f.am ? '<i class="tarj am">' + f.am + '</i>' : '') + '</td>' +
        '<td class="num">' + (f.rj ? '<i class="tarj rj">' + f.rj + '</i>' : '') + '</td>' +
        '</tr>';
    }).join('');
    return '<div class="mv-wrap"><div class="panel" style="flex:1">' +
      '<h3>' + crest(eq, 22) + esc(eq.n) +
      '<small>' + esc(eq.league || eq.conf || '') + ' · ' + eq.p.length + ' fichas · media ' + (eq.ovr || 0) + '</small></h3>' +
      '<div class="pbody tabla-fija">' +
      '<table class="minitab miclub"><thead><tr>' +
      '<th class="num">POS</th><th>Jugador</th><th class="num">Edad</th>' +
      '<th class="num">Media</th><th>Sitio</th><th class="num">PJ</th>' +
      '<th class="num">G</th><th class="num">A</th>' +
      '<th class="num">🟨</th><th class="num">🟥</th>' +
      '</tr></thead><tbody>' + filas + '</tbody></table>' +
      '<p class="hint" style="margin-top:8px">Los once primeros salen de inicio y los ' +
      ((window.Engine && Engine.BANQUILLO) || 7) + ' siguientes van al banco.</p>' +
      '</div></div></div>';
  }

  /* =====================================================================
     VISTA · EL TORNEO DE SELECCIONES
     Lo que se jugó el verano pasado: los grupos con sus tablas y el cuadro
     ronda por ronda. Tu selección va resaltada.
     ===================================================================== */
  function miNacion() {
    return (window.SelCarrera && SelCarrera.miSeleccion) ? SelCarrera.miSeleccion() : null;
  }
  /* Hasta dónde ha llegado el jugador con su selección: lo que venga
     después todavía no se puede enseñar, ni en la tabla ni en el cuadro. */
  function estadoSel() {
    var sel = matchQueue.filter(function (m) { return m.kind === 'sel' && m.res; });
    if (!sel.length) return null;
    /* Vistos todos mis partidos —porque llegué al final o porque me
       eliminaron—, el torneo deja de ser secreto: no me queda nada por
       jugar y tengo que poder ver quién lo ganó. */
    if (matchIdx >= sel.length - 1) return null;
    var i = Math.min(matchIdx, sel.length - 1);
    return {
      jugada: i < 0 ? '' : (sel[i].label || ''),
      siguiente: (matchIdx + 1 < sel.length) ? (sel[matchIdx + 1].label || '') : null
    };
  }
  /* el límite sólo vale para el torneo que se está jugando ahora */
  function limiteSel(res) {
    if (res && res !== World.state.seleccionUltimo) return null;
    var e = estadoSel();
    return e ? e.jugada : null;
  }
  /* la tabla rehecha con los partidos disputados hasta esa jornada */
  /* La primera fecha que se juega en ESTE parón. Lo de antes se jugó en
     temporadas pasadas y ya se vio, así que se puede enseñar entero: sin
     esto, al empezar la segunda vuelta de las eliminatorias la tabla salía
     a cero y se perdían los puntos de las nueve fechas anteriores. */
  function primeraFechaSel() {
    var min = null;
    matchQueue.forEach(function (m) {
      if (m.kind !== 'sel') return;
      var n = /(\d+)\s*$/.exec(m.label || '');
      if (!n) return;
      if (min == null || +n[1] < min) min = +n[1];
    });
    return min;
  }
  /* lo que ya estaba jugado antes de este parón */
  function fechasViejasSel() {
    var d = primeraFechaSel();
    return d == null ? 0 : d - 1;
  }
  function filasGrupoSel(g, hasta) {
    var todas = g.standings || (window.Comp ? Comp.sortTable(g.table) : []);
    if (hasta == null || !g.results || !window.Comp) return todas;
    /* '' es que no se vio nada; una ronda con nombre y sin número (octavos,
       cuartos...) quiere decir que la fase de grupos ya terminó */
    if (hasta !== '' && !/\d/.test(hasta)) return todas;
    var n = /(\d+)/.exec(hasta);
    var md = Math.max(n ? +n[1] : 0, fechasViejasSel());
    var equipos = g.teams || todas.map(function (r) { return r.t; });
    if (!equipos.length) return todas;
    var t = Comp.newTable(equipos);
    g.results.forEach(function (m) { if (m.md <= md) Comp.applyResult(t, m.h, m.a, m.s); });
    return Comp.sortTable(t);
  }
  /* ¿terminaron ya de jugarse todas las jornadas del grupo? */
  function grupoCompleto(g, hasta) {
    if (hasta == null || !/\d/.test(hasta)) return true;
    if (!g.results || !g.results.length) return false;
    var tope = 0;
    g.results.forEach(function (m) { if (m.md > tope) tope = m.md; });
    return +(/(\d+)/.exec(hasta)[1]) >= tope;
  }
  /* los que pasan de ronda, por código FIFA */
  function mapaClasificados(clasi) {
    var m = {};
    (clasi || []).forEach(function (t) { if (t) m[t.s || t.n] = 1; });
    return m;
  }
  /* el desglose del grupo: los partidos, jornada a jornada */
  function partidosGrupoSel(g, hasta) {
    /* Con el parón en marcha sólo se enseñan las fechas ya jugadas: las de
       temporadas anteriores enteras, y de ésta las que se hayan visto. */
    var lim;
    if (hasta == null) lim = 1e9;
    else if (hasta === '') lim = fechasViejasSel();
    else if (!/\d/.test(hasta)) lim = 1e9;
    else lim = Math.max(+(/(\d+)/.exec(hasta)[1]), fechasViejasSel());
    var res = (g.results || []).filter(function (m) { return (m.md || 0) <= lim; });
    if (!res.length) return '';
    var byMd = {}, orden = [];
    res.forEach(function (m) {
      if (!byMd[m.md]) { byMd[m.md] = []; orden.push(m.md); }
      byMd[m.md].push(m);
    });
    return '<details class="gres"><summary>Resultados del grupo (' + res.length + ')</summary>' +
      orden.map(function (md) {
        return '<div class="mdblock"><span class="mdlabel">Jornada ' + md + '</span>' +
          byMd[md].map(function (m) {
            return '<div><span>' + esc(m.h.n) + '</span><b>' + m.s[0] + ' - ' + m.s[1] +
              '</b><span>' + esc(m.a.n) + '</span></div>';
          }).join('') + '</div>';
      }).join('') + '</details>';
  }
  function tablaGrupoSel(g, mia, hasta, clasi) {
    var filas = filasGrupoSel(g, hasta);
    /* los que pasan se pintan en verde, pero sólo con el grupo terminado */
    var pasan = (clasi && clasi.length && grupoCompleto(g, hasta)) ? mapaClasificados(clasi) : null;
    return '<div class="gsel"><h4>' + esc(g.name) + '</h4>' +
      '<table class="minitab"><thead><tr><th class="num">#</th><th>Selección</th>' +
      '<th class="num">PJ</th><th class="num">DG</th><th class="num">Pts</th></tr></thead><tbody>' +
      filas.map(function (r, i) {
        var cls = r.t === mia ? 'me' : '';
        if (pasan && pasan[r.t.s || r.t.n]) cls += (cls ? ' ' : '') + 'q-yes';
        return '<tr class="' + cls + '">' +
          '<td class="num"><span class="pos-chip">' + (i + 1) + '</span></td>' +
          '<td><div class="tname">' + crest(r.t, 18) + '<span>' + esc(r.t.n) + '</span></div></td>' +
          '<td class="num">' + r.pj + '</td>' +
          '<td class="num">' + (r.gf - r.gc > 0 ? '+' : '') + (r.gf - r.gc) + '</td>' +
          '<td class="num"><b>' + r.pts + '</b></td></tr>';
      }).join('') + '</tbody></table>' + partidosGrupoSel(g, hasta) + '</div>';
  }
  function bloqueGrupos(gs, mia, hasta, clasi) {
    if (!gs || !gs.length) return '';
    return '<div class="gselgrid">' + gs.map(function (g) {
      return tablaGrupoSel(g, mia, hasta, clasi);
    }).join('') + '</div>';
  }
  /* el cruce sin marcador: se ve quién juega, no cómo acabó */
  function tieSinVer(t) { return { a: t.a, b: t.b, single: t.single }; }
  function bloqueRondas(rondas, est, mia) {
    if (!rondas || !rondas.length) return '';
    /* Con la selección en marcha sólo se enseña hasta la ronda ya jugada.
       La siguiente aparece sin marcadores, pero sólo cuando es la que te toca
       jugar ahora: si no, el cuadro sale antes de disputarse la fase previa. */
    var corte = rondas.length - 1;
    if (est) {
      corte = -1;
      rondas.forEach(function (r, i) { if (r.name === est.jugada) corte = i; });
    }
    var out = [];
    rondas.forEach(function (r, i) {
      var ciega = i > corte;
      /* y sólo si es la tuya: la de otra confederación no se adelanta */
      var esMia = !mia || r.ties.some(function (t) { return t.a === mia || t.b === mia; });
      if (ciega && !(esMia && est && est.siguiente && r.name === est.siguiente)) return;
      out.push('<h4 class="subh">' + esc(r.name) +
        (ciega ? ' <small>por jugar</small>' : '') + '</h4>' +
        '<div class="br-listagrid">' + r.ties.map(function (t) {
          return brTie(ciega ? tieSinVer(t) : t);
        }).join('') + '</div>');
    });
    return out.join('');
  }
  /* El grupo o la ronda que juega mi selección, para el panel de la derecha */
  function panelSeleccionActual() {
    var res = World.state.seleccionUltimo;
    var mia = window.SelCarrera ? SelCarrera.miSeleccion() : null;
    if (!res || !mia) return null;
    var enGrupo = null, cajas = [];
    function miraGrupos(gs, clasi) {
      (gs || []).forEach(function (g) {
        if ((g.teams || []).indexOf(mia) >= 0) { enGrupo = g; if (clasi) pasan = clasi; }
      });
    }
    var est = estadoSel(), hasta = est ? est.jugada : null, pasan = null;
    /* Si lo que toca es una ronda del cuadro, el panel enseña los cruces y no
       la tabla del grupo: la fase de grupos ya terminó. */
    var toca = est ? (est.siguiente || est.jugada) : null;
    var enLlaves = !!(toca && !/\d/.test(toca));
    miraGrupos(res.grupos);
    if (enGrupo) pasan = res.clasificados;
    (res.zonas || []).forEach(function (z) { miraGrupos(z.grupos, z.clasificados); if (z.tabla &&
      z.tabla.some(function (r) { return r.t === mia; })) {
      enGrupo = { name: z.nombre || 'Tabla', standings: z.tabla, teams: z.teams, results: z.results };
      pasan = z.clasificados;
    } });
    (res.torneos || []).forEach(function (t) { miraGrupos(t.grupos, t.clasificados); });
    if (enGrupo && !enLlaves) {
      return { titulo: 'Clasificación', sub: res.nombreFase || 'Selecciones',
        html: tablaGrupoSel(enGrupo, mia, hasta, pasan) };
    }
    /* sin grupo: la última ronda de cuadro donde aparezca */
    /* la ronda que toca ahora: la del próximo partido si queda alguno,
       y si no la del último que ya se jugó */
    var quiero = toca;
    var ronda = null, primera = null;
    function miraRondas(rs) {
      (rs || []).forEach(function (r) {
        if (!r.ties.some(function (t) { return t.a === mia || t.b === mia; })) return;
        if (!primera) primera = r;
        if (quiero == null) ronda = r;
        else if (r.name === quiero) ronda = r;
      });
    }
    miraRondas(res.rondas);
    (res.torneos || []).forEach(function (t) { miraRondas(t.rondas); });
    if (!ronda) ronda = primera;
    if (ronda) {
      var ciega = !!(est && est.siguiente && ronda.name === est.siguiente);
      return { titulo: ronda.name + (ciega ? ' · por jugar' : ''),
        sub: res.nombreFase || 'Selecciones',
        html: '<div class="br-listagrid">' + ronda.ties.map(function (t) {
          return brTie(ciega ? tieSinVer(t) : t);
        }).join('') + '</div>' };
    }
    return null;
  }

  /* el torneo que pide el selector: el último jugado o uno del historial */
  function torneoSelDe(scope) {
    var st = World.state;
    if (!scope || scope === 'S:ultimo') return st.seleccionUltimo || null;
    if (scope.indexOf('H:') === 0) {
      /* del historial sólo queda el resumen: se enseña el último con cuadro
         si coincide el año, y si no, lo que haya */
      return st.seleccionUltimo || null;
    }
    return st.seleccionUltimo || null;
  }
  /* el cuerpo del cuadro, sin el envoltorio de panel */
  /* Cada confederación juega lo suyo y no se enseñan todas de golpe:
     esto lista los bloques para que el jugador elija cuál mirar. */
  function bloquesSel(res) {
    var out = [];
    if (!res) return out;
    if ((res.grupos || []).length || (res.rondas || []).length) {
      out.push({ id: 'principal', t: res.nombreFase || 'Torneo' });
    }
    (res.zonas || []).forEach(function (z, i) {
      out.push({ id: 'z' + i, t: z.nombre || z.conf || ('Zona ' + (i + 1)) });
    });
    (res.torneos || []).forEach(function (t, i) {
      out.push({ id: 't' + i, t: t.nombre || t.conf || ('Torneo ' + (i + 1)) });
    });
    return out;
  }
  /* el bloque donde juega mi selección, que es el que se abre primero */
  function bloqueMio(res) {
    var bs = bloquesSel(res);
    if (!bs.length) return null;
    var mia = miNacion();
    if (!mia) return bs[0].id;
    function enGrupos(gs) {
      return (gs || []).some(function (g) { return (g.teams || []).indexOf(mia) >= 0; });
    }
    function enRondas(rs) {
      return (rs || []).some(function (r) {
        return r.ties.some(function (t) { return t.a === mia || t.b === mia; });
      });
    }
    var eleg = null;
    (res.zonas || []).forEach(function (z, i) {
      if (eleg) return;
      if (enGrupos(z.grupos) || (z.tabla || []).some(function (r) { return r.t === mia; })) eleg = 'z' + i;
    });
    (res.torneos || []).forEach(function (t, i) {
      if (eleg) return;
      if (enGrupos(t.grupos) || enRondas(t.rondas)) eleg = 't' + i;
    });
    if (!eleg && (enGrupos(res.grupos) || enRondas(res.rondas))) eleg = 'principal';
    return eleg || bs[0].id;
  }

  /* el cuadro de un bloque, si lo tiene: las clasificaciones no lo tienen */
  function rondasDelBloque(res, id) {
    if (!res) return null;
    if (!id) id = bloqueMio(res);
    if (id === 'principal') return res.rondas || null;
    if (id && id.charAt(0) === 't') {
      var t = (res.torneos || [])[+id.slice(1)];
      return t ? (t.rondas || null) : null;
    }
    return null;
  }
  function campeonBloque(res, id) {
    if (!res) return null;
    if (!id) id = bloqueMio(res);
    if (id === 'principal') return res.campeon || null;
    if (id && id.charAt(0) === 't') {
      var t = (res.torneos || [])[+id.slice(1)];
      return t ? (t.campeon || null) : null;
    }
    return null;
  }

  /* El torneo se recorre paso a paso como las eliminatorias de clubes:
     la fase de grupos primero y después cada ronda del cuadro, con las
     flechitas de la cabecera. */
  function pasosSel(res, id) {
    var out = [];
    if (!res) return out;
    if (!id) id = bloqueMio(res);
    var mia = miNacion();
    var hasta = limiteSel(res), est = hasta == null ? null : estadoSel();
    var gs = null, rondas = null, clasi = null, campeon = null;
    if (id === 'principal') { gs = res.grupos; rondas = res.rondas; clasi = res.clasificados; campeon = res.campeon; }
    else if (id && id.charAt(0) === 'z') {
      var z = (res.zonas || [])[+id.slice(1)];
      if (z) {
        gs = z.grupos; clasi = z.clasificados;
        if (z.tabla) {
          gs = [{ name: z.nombre || 'Tabla', standings: z.tabla, teams: z.teams, results: z.results }]
            .concat(z.grupos || []);
        }
      }
    } else if (id && id.charAt(0) === 't') {
      var t = (res.torneos || [])[+id.slice(1)];
      if (t) { gs = t.grupos; rondas = t.rondas; clasi = t.clasificados; campeon = t.campeon; }
    }
    if (gs && gs.length) {
      out.push({ nombre: 'Fase de grupos', tipo: 'grupos', gs: gs, clasi: clasi, hasta: hasta,
        n: gs.length, unidad: 'grupo' });
    }
    /* las rondas pasan por el mismo filtro que ya decide qué se puede ver */
    var corte = (rondas || []).length - 1;
    if (est) {
      corte = -1;
      (rondas || []).forEach(function (r, i) { if (r.name === est.jugada) corte = i; });
    }
    (rondas || []).forEach(function (r, i) {
      var ciega = i > corte;
      var esMia = !mia || r.ties.some(function (x) { return x.a === mia || x.b === mia; });
      if (ciega && !(esMia && est && est.siguiente && r.name === est.siguiente)) return;
      out.push({ nombre: r.name, tipo: 'ronda', ties: r.ties, ciega: ciega,
        n: r.ties.length, unidad: 'cruce',
        campeon: (!ciega && campeon && i === rondas.length - 1) ? campeon : null });
    });
    return out;
  }
  /* la cabecera con las flechas, igual que en las eliminatorias de clubes */
  function tituloPasoSel(dentro, pasos) {
    var p = pasos[selPaso];
    if (!p || pasos.length < 2) return dentro;
    return '<button class="rn-flecha" data-paso="-1"' + (selPaso > 0 ? '' : ' disabled') +
      ' title="Anterior">&#8249;</button>' +
      '<span class="rn-nombre">' + dentro +
      '<small>' + esc(p.nombre) + ' · ' + p.n + ' ' + p.unidad + (p.n === 1 ? '' : 's') +
      (p.ciega ? ' · por jugar' : '') + '</small></span>' +
      '<button class="rn-flecha" data-paso="1"' + (selPaso < pasos.length - 1 ? '' : ' disabled') +
      ' title="Siguiente">&#8250;</button>';
  }
  /* Los pasos de una copa continental: la previa, los grupos y cada ronda
     del cuadro, para recorrerlos con las mismas flechas. */
  /* El torneo se simula semana a semana, pero mis partidos esperan en la
     cola hasta que los veo. Así que la ronda que tengo pendiente sale sin
     marcadores —o sólo con la ida, si lo que falta es la vuelta— y lo que
     viene detrás no sale: el sorteo de la ronda siguiente ya cantaría
     quién pasó. */
  function pasosCont(c) {
    var out = [], esp = esperaCont(c.name), cortado = false;
    function ronda(nombre, ties, campeon) {
      if (cortado || !ties || !ties.length) return;
      var ciega = false, soloIda = false;
      if (esp && mismaRonda(esp.ronda, nombre)) {
        cortado = true;
        if (/vuelta/i.test(esp.leg)) soloIda = true; else ciega = true;
      }
      out.push({ nombre: nombre, tipo: 'ronda', ties: ties, ciega: ciega, soloIda: soloIda,
        n: ties.length, unidad: 'cruce',
        campeon: (ciega || soloIda) ? null : campeon });
    }
    ronda('Fase previa', c.prelimTies);
    if (!cortado && c.groups && c.groups.length) {
      out.push({ nombre: 'Fase de grupos', tipo: 'gruposCont', c: c,
        n: c.groups.length, unidad: 'grupo' });
      /* la tabla ya se corta sola, pero lo que venga después no se enseña */
      if (jornadaEnEspera(c.name) != null) cortado = true;
    }
    ronda('Play-off', c.playoffTies);
    var ko = c.koRounds || [];
    ko.forEach(function (r, i) {
      ronda(r.name, r.ties, (i === ko.length - 1) ? c.champion : null);
    });
    return out;
  }
  /* ¿este torneo tiene algo mío sin ver? */
  function contPendiente(c) {
    return !!esperaCont(c.name) || jornadaEnEspera(c.name) != null;
  }
  function cuerpoPasoSel(p) {
    if (!p) return '<p class="hint">Este torneo no dejó cuadro que mirar.</p>';
    var mia = miNacion();
    if (p.tipo === 'gruposCont') return groupsHTML(p.c);
    if (p.tipo === 'grupos') return bloqueGrupos(p.gs, mia, p.hasta, p.clasi);
    /* mismo cuadro que en los clubes: cuatro filas de cruces por columna */
    var cols = Math.min(4, Math.max(1, Math.ceil(p.ties.length / 4)));
    return '<div class="br-listagrid ancha cols-' + cols +
      '" style="grid-template-columns:repeat(' + cols + ',minmax(0,1fr))">' +
      p.ties.map(function (t) {
        return brTie(p.ciega ? tieSinVer(t) : p.soloIda ? tieSoloIda(t) : t);
      }).join('') + '</div>' +
      (p.campeon ? '<div class="rn-campeon">🏆 ' + crest(p.campeon, 26) +
        '<b>' + esc(p.campeon.n) + '</b></div>' : '');
  }
  /* los goleadores de la competición elegida */
  function goleadoresBloqueSel(res, id) {
    if (!res || !res.marcadores) return null;
    if (!id) id = bloqueMio(res);
    var comp = null;
    if (id === 'principal') comp = res.comp;
    else if (id && id.charAt(0) === 'z') { var z = (res.zonas || [])[+id.slice(1)]; comp = z && z.comp; }
    else if (id && id.charAt(0) === 't') { var t = (res.torneos || [])[+id.slice(1)]; comp = t && t.comp; }
    var m = comp && res.marcadores[comp];
    if (!m) return null;
    var orden = (res.ordenRondas || {})[comp] || Object.keys(m);
    var est = limiteSel(res) == null ? null : estadoSel();
    var lim = est ? orden.indexOf(est.jugada) : orden.length - 1;
    var total = {};
    for (var i = 0; i <= lim; i++) {
      var parcial = m[orden[i]] || {};
      Object.keys(parcial).forEach(function (k) {
        var x = parcial[k];
        total[k] = total[k] || { n: x.n, t: x.t, g: 0, a: 0 };
        total[k].g += x.g; total[k].a += x.a;
      });
    }
    return total;
  }

  function cuerpoTorneoSel(res, id, vista) {
    var mia = miNacion();
    var hasta = limiteSel(res), est = hasta == null ? null : estadoSel();
    var cuerpo = '';
    if (!id) id = bloqueMio(res);
    /* 'grupos' o 'llaves': si no se pide nada, van las dos cosas */
    var verG = vista !== 'llaves', verR = vista !== 'grupos';
    if (id === 'principal') {
      if (verG) cuerpo += bloqueGrupos(res.grupos, mia, hasta, res.clasificados);
      if (verR) cuerpo += bloqueRondas(res.rondas, est, mia);
    } else if (id && id.charAt(0) === 'z') {
      var z = (res.zonas || [])[+id.slice(1)];
      if (z) {
        if (z.tabla) {
          cuerpo += tablaGrupoSel({ name: z.nombre || 'Tabla', standings: z.tabla,
            teams: z.teams, results: z.results }, mia, hasta, z.clasificados);
        }
        cuerpo += bloqueGrupos(z.grupos, mia, hasta, z.clasificados);
      }
    } else if (id && id.charAt(0) === 't') {
      var t = (res.torneos || [])[+id.slice(1)];
      if (t) {
        if (verG) cuerpo += bloqueGrupos(t.grupos, mia, hasta, t.clasificados);
        if (verR) cuerpo += bloqueRondas(t.rondas, est, mia);
      }
    }
    return cuerpo || '<p class="hint">Este torneo no dejó cuadro que mirar.</p>';
  }

  function vistaTorneoSel() {
    var res = World.state.seleccionUltimo;
    if (!res) return '<div class="panel" style="height:100%"><h3>Selecciones</h3><div class="pbody">' +
      '<p class="hint">Todavía no se ha jugado ningún torneo de selecciones.</p></div></div>';
    var bs = bloquesSel(res);
    if (!bs.some(function (b) { return b.id === selBloque; })) selBloque = bloqueMio(res);
    var barra = bs.length > 1
      ? '<div class="mbar"><div class="toolbar" style="gap:8px">' +
        '<label>Competición</label><select id="selBloque">' + bs.map(function (b) {
          return '<option value="' + b.id + '"' + (b.id === selBloque ? ' selected' : '') +
            '>' + esc(b.t) + '</option>';
        }).join('') + '</select></div></div>'
      : '';
    var cuerpo = cuerpoTorneoSel(res, selBloque);
    var camp = res.campeon ? ' <i class="rn-camp">🏆 ' + esc(res.campeon.n) + '</i>' : '';
    return '<div class="mv-wrap">' + barra + '<div class="panel" style="flex:1">' +
      '<h3>' + esc(res.nombreFase || 'Selecciones') +
      '<small>' + (res.anio || '') + (res.anfitrion ? ' · en ' + esc(res.anfitrion.n) : '') + '</small>' +
      camp + '</h3>' +
      '<div class="pbody">' + cuerpo + '</div></div></div>';
  }

  function viewResults() {
    var st = World.state;
    var scopes = scopeList();
    if (!scopes.some(function (s) { return s.v === rScope; })) rScope = scopes.length ? scopes[0].v : null;
    var comps = compList();
    if (rConf === 'MIAS') rComp = (rScope && rScope.charAt(0) !== 'X') ? rScope : null;
    else if (rScope && rScope.charAt(0) === 'K') rComp = rScope;
    else if (!comps.some(function (c) { return c.v === rComp; })) rComp = comps.length ? comps[0].v : null;
    var views = viewList();
    if (!views.some(function (v) { return v.v === rView; })) rView = views.length ? views[0].v : null;

    /* los filtros se pintan arriba, en la fila de pestañas: así el cuadro
       se queda con toda la altura de la pantalla */
    resBar = '<div class="toolbar" style="gap:8px">' +
      '<label>Continente</label><select id="rConf">' + CONF_ORDER.filter(function (k) {
        return k !== 'MIAS' || (me && misCompeticiones().length);
      }).map(function (k) {
        return '<option value="' + k + '"' + (k === rConf ? ' selected' : '') + '>' + esc(CONF_LABEL[k]) + '</option>';
      }).join('') + '</select>' +
      '<label>' + (rConf === 'MIAS' ? 'Competición' : rConf === 'SEL' ? 'Torneo' : 'País o torneo') +
      '</label><select id="rScope">' + scopes.map(function (s) {
        return '<option value="' + s.v + '"' + (s.v === rScope ? ' selected' : '') + '>' + esc(s.t) + '</option>';
      }).join('') + '</select>' +
      (comps.length ? '<label>Competición</label><select id="rComp">' + comps.map(function (c) {
        return '<option value="' + c.v + '"' + (c.v === rComp ? ' selected' : '') + '>' + esc(c.t) + '</option>';
      }).join('') + '</select>' : '') +
      (views.length > 1 ? '<label>Ver</label><select id="rView">' + views.map(function (v) {
        return '<option value="' + v.v + '"' + (v.v === rView ? ' selected' : '') + '>' + esc(v.t) + '</option>';
      }).join('') + '</select>' : '') +
      '</div>';

    return '<div class="mv-wrap">' + '<div class="panel" style="flex:1">' +
      '<h3 id="rTitle"></h3><div class="pbody" id="rBody"></div></div></div>';
  }
  function fillResults() {
    var st = World.state;
    var title = $('#rTitle'), body = $('#rBody');
    if (!title) return;
    if (rConf === 'SEL') {
      var res = torneoSelDe(rScope);
      var bid = (rScope && rScope.indexOf('S:') === 0) ? rScope.slice(2) : null;
      var nomb = '';
      bloquesSel(res).forEach(function (b) { if (b.id === bid) nomb = b.t; });
      /* el campeón, en el título, pero sólo con el torneo terminado de ver */
      var campS = (res && limiteSel(res) == null) ? campeonBloque(res, bid) : null;
      var cabS = esc(nomb || (res && res.nombreFase) || 'Selecciones') +
        '<small>' + ((res && res.anio) || '') + '</small>' +
        (campS ? ' <i class="rn-camp">🏆 ' + esc(campS.n) + '</i>' : '');
      if (!res) { title.innerHTML = 'Selecciones';
        body.innerHTML = '<p class="hint">Todavía no se ha jugado ningún torneo de selecciones.</p>';
        return; }
      if (rView === 'gol') {
        var st2 = goleadoresBloqueSel(res, bid);
        title.innerHTML = cabS;
        body.innerHTML = st2 ? X.scorersHTML(Comp.topScorers(st2, 40))
          : '<p class="hint">Todavía no ha marcado nadie.</p>';
        return;
      }
      var pasos = pasosSel(res, bid);
      var clave = (rScope || '') + '|' + pasos.map(function (x) { return x.nombre + ':' + x.n; }).join(',');
      if (clave !== selPasoClave) { selPasoClave = clave; selPaso = null; }
      if (selPaso == null || selPaso < 0 || selPaso >= pasos.length) selPaso = pasos.length - 1;
      pasosVista = pasos;
      title.innerHTML = tituloPasoSel(cabS, pasos);
      body.innerHTML = pasos.length ? cuerpoPasoSel(pasos[selPaso])
        : '<p class="hint">Este torneo no dejó cuadro que mirar.</p>';
      return;
    }
    if (rScope && rScope.charAt(0) === 'X') { superCopaHTML(rScope.slice(2), title, body); return; }
    if (rConf === 'MIAS' && !rScope) {
      title.innerHTML = 'Mis competencias';
      body.innerHTML = '<p class="hint">Tu club todavía no disputa nada esta temporada.</p>';
      return;
    }
    if (!rComp) return;
    var k = rComp.charAt(0), id = rComp.slice(2);

    if (k === 'L') {
      var lg = st.leagues[id];
      title.innerHTML = lflagImg(id, 16) + esc(lname(id)) + '<small>Jornada ' + lg.played + ' de ' + lg.rounds.length + '</small>';
      if (rView === 'gol') body.innerHTML = X.scorersHTML(Comp.topScorers(lg.scorers, 40));
      else if (rView === 'res') {
        /* la jornada que espera en la cola no se enseña hasta jugarla */
        var espL = jornadaEnEspera(lg.name);
        var vistas = lg.results.filter(function (r) { return espL == null || r.round < espL; });
        var last = vistas[vistas.length - 1];
        body.innerHTML = last
          ? '<h4 class="subh">Jornada ' + last.round + '</h4><div class="fx">' + last.matches.map(scoreLine).join('') + '</div>'
          : '<p class="hint">Todavía no se ha jugado ninguna jornada.</p>';
      } else if (rView === 'po') {
        var po = (st.playoffs || {})[id];
        if (!po || !po.ties || !po.ties.length) {
          body.innerHTML = '<p class="hint">Esta categoría no jugó play-off.</p>';
        } else {
          var vis = playoffVisible(po, rondasPlayoff(po));
          body.innerHTML = bracketHTML(vis.rondas, vis.campeon) +
            (vis.campeon ? '<p class="hint" style="margin-top:10px">Ascendió <b>' +
              esc(vis.campeon.n) + '</b> a ' + esc(vis.sube || po.sube || '') + '.</p>' : '');
          title.innerHTML = tituloConRondas(lflagImg(id, 16) + esc(lname(id)) +
            ' <i class="rn-camp">Play-off de ascenso ' + (po.year || '') + '</i>');
        }
      } else body.innerHTML = zonedTable(id, { form: true });
      return;
    }
    if (k === 'U') {
      var cup = st.cups[id];
      /* la ronda que espera en la cola, sin marcadores; y sin sorteo de la
         siguiente, que diría quién pasó */
      var espCopa = esperaCopa(cup.name);
      var rondasCup = cup.rounds, campCup = cup.champion, proxCup = proximaCopa(cup);
      if (espCopa != null) {
        var corte = cup.rounds.length;
        cup.rounds.forEach(function (r, i) {
          if (corte === cup.rounds.length && mismaRonda(r.name, espCopa)) corte = i;
        });
        rondasCup = cup.rounds.slice(0, corte + 1).map(function (r, i) {
          return i < corte ? r : { name: r.name, ties: r.ties.map(tieSinVer) };
        });
        campCup = null; proxCup = null;
      }
      body.innerHTML = bracketHTML(rondasCup, campCup, proxCup);
      title.innerHTML = tituloConRondas(flagImg(id, 16) + esc(cup.name) +
        (campCup ? ' <i class="rn-camp">🏆 ' + esc(campCup.n) + '</i>' : ''));
      return;
    }
    var c = st.conts[id];
    var cabC = esc(c.name) + '<small>Fase: ' + esc(c.phase) +
      (c.champion && !contPendiente(c) ? ' · 🏆 ' + esc(c.champion.n) : '') + '</small>';
    if (rView === 'gol') {
      title.innerHTML = cabC;
      body.innerHTML = X.scorersHTML(Comp.topScorers(c.scorers, 40));
      return;
    }
    var pasosC = pasosCont(c);
    if (!pasosC.length) {
      title.innerHTML = cabC;
      body.innerHTML = '<p class="hint">El sorteo de grupos aún no se ha hecho.</p>';
      return;
    }
    var claveC = (rComp || '') + '|' + pasosC.map(function (x) { return x.nombre + ':' + x.n; }).join(',');
    if (claveC !== selPasoClave) { selPasoClave = claveC; selPaso = null; }
    if (selPaso == null || selPaso < 0 || selPaso >= pasosC.length) selPaso = pasosC.length - 1;
    pasosVista = pasosC;
    title.innerHTML = tituloPasoSel(cabC, pasosC);
    body.innerHTML = cuerpoPasoSel(pasosC[selPaso]);
  }

  function groupsHTML(c) {
    var qmap = qualifiedMap(c);
    var espera = jornadaEnEspera(c.name);
    return '<div class="groups">' + c.groups.map(function (g) {
      var rows = filasGrupoCont(c, g);
      var res = (g.results || []).filter(function (m) { return espera == null || m.md < espera; });
      var byMd = {};
      res.forEach(function (m) { (byMd[m.md] = byMd[m.md] || []).push(m); });
      return '<div class="gbox"><h4>' + esc(g.name) + '</h4><table><thead><tr><th class="num">#</th><th>Equipo</th>' +
        '<th class="num">PJ</th><th class="num">Pts</th><th class="num">DG</th></tr></thead><tbody>' +
        rows.map(function (r, i) {
          var q = qmap[r.t.leagueId + '|' + r.t.n];
          var cls = q === 'yes' ? 'q-yes' : q === 'alt' ? 'q-alt' : 'q-no';
          return '<tr class="' + cls + (r.t === me ? ' me' : '') + '"><td class="num">' + (i + 1) + '</td>' +
            '<td><div class="tname">' + crest(r.t, 18) + '<span>' + esc(r.t.n) + '</span></div></td>' +
            '<td class="num">' + r.pj + '</td><td class="num"><b>' + r.pts + '</b></td>' +
            '<td class="num">' + (r.gf - r.gc > 0 ? '+' : '') + (r.gf - r.gc) + '</td></tr>';
        }).join('') + '</tbody></table>' +
        (res.length ? '<details class="gres"><summary>Resultados del grupo (' + res.length + ')</summary>' +
          Object.keys(byMd).map(function (md) {
            return '<div class="mdblock"><span class="mdlabel">Jornada ' + md + '</span>' +
              byMd[md].map(function (m) {
                return '<div' + ((m.h === me || m.a === me) ? ' class="mine"' : '') + '><span>' + esc(m.h.n) +
                  '</span><b>' + m.s[0] + ' - ' + m.s[1] + '</b><span>' + esc(m.a.n) + '</span></div>';
              }).join('') + '</div>';
          }).join('') + '</details>' : '') + '</div>';
    }).join('') + '</div>' + contLegend(c);
  }
  function qualifiedMap(c) {
    var map = {};
    if (!c.groups) return map;
    var extras = [];
    c.groups.forEach(function (g) {
      (g.standings || Comp.sortTable(g.table)).forEach(function (r, i) {
        var k = r.t.leagueId + '|' + r.t.n;
        if (i < c.cfg.qualify) map[k] = 'yes';
        else if (i === c.cfg.qualify) { extras.push(r); if (c.cfg.feeds) map[k] = 'alt'; }
      });
    });
    if (c.cfg.bestExtra) {
      extras.slice().sort(function (a, b) {
        return b.pts - a.pts || (b.gf - b.gc) - (a.gf - a.gc) || b.gf - a.gf;
      }).slice(0, c.cfg.bestExtra).forEach(function (r) { map[r.t.leagueId + '|' + r.t.n] = 'yes'; });
    }
    return map;
  }
  function contLegend(c) {
    var out = '<div class="zleg"><span class="k"><i class="top"></i>clasificado';
    if (c.cfg.bestExtra) out += ' (con los ' + c.cfg.bestExtra + ' mejores terceros)';
    out += '</span>';
    if (c.cfg.feeds) {
      var d = (World.state.conts[c.cfg.feeds] || {}).name || '';
      out += '<span class="k"><i class="second"></i>pasa a ' + esc(d) + '</span>';
    }
    return out + '</div>';
  }

  /* ---------- llaves ---------- */
  /* Cuadro simétrico: la mitad de los cruces a la izquierda, la otra mitad
     a la derecha, y la final en el centro. Las rondas previas no se pintan
     y, si hay muchas, sólo se muestran las cuatro últimas: así entra en
     pantalla sin scroll. */
  function isPrelim(r) {
    var n = (r.name || '').toLowerCase();
    return n.indexOf('previa') >= 0 || n.indexOf('play-off') >= 0 || n.indexOf('playoff') >= 0;
  }
  /* de octavos (ocho cruces) para arriba se dibuja el cuadro; lo anterior
     son demasiadas llaves para que quepan, así que va en lista */
  var CRUCES_CUADRO = 8;

  /* La ronda que viene. En las copas nacionales el orden de los equipos
     vivos ya dice quién juega contra quién: el cruce está hecho aunque
     todavía no se haya jugado, así que se enseña. */
  function proximaCopa(cup) {
    if (!cup || cup.champion) return null;
    var vivos = (cup.alive || []).slice();
    if (vivos.length < 2) return null;
    /* si hay ronda previa, los que esperan van delante y el resto ya está
       emparejado en ese mismo orden */
    var K = Comp.pow2AtMost(vivos.length), nombre = Comp.roundName(vivos.length);
    if (vivos.length > K) {
      vivos = vivos.slice(K * 2 - vivos.length);
      nombre = 'Ronda previa';
    }
    var ties = [];
    for (var i = 0; i + 1 < vivos.length; i += 2) ties.push({ a: vivos[i], b: vivos[i + 1] });
    return { name: nombre, ties: ties, week: cup.weeks[cup.idx] || 0 };
  }
  function proximaHTML(r) {
    if (!r || !r.ties.length) return '';
    return '<div class="br-lista proxima"><h5>Próxima ronda · ' + esc(r.name) +
      ' <small>' + r.ties.length + ' cruces</small></h5>' +
      '<div class="br-listagrid">' + r.ties.map(brTie).join('') + '</div></div>';
  }

  function rondasEnListaHTML(rondas) {
    if (!rondas.length) return '';
    return rondas.map(function (r) {
      return '<div class="br-lista"><h5>' + esc(r.name) +
        ' <small>' + r.ties.length + ' cruces</small></h5>' +
        '<div class="br-listagrid">' + r.ties.map(brTie).join('') + '</div></div>';
    }).join('');
  }

  /* Qué ronda se está mirando. Se guarda fuera para que las flechas
     puedan moverse sin perder el sitio al repintar. */
  var rondaIdx = null, rondasVista = [], rondasClave = '';
  /* La ronda que interesa es la que se está jugando: la primera que aún
     tiene cruces sin resolver. Cuando una termina y aparece la siguiente,
     el visor salta solo para enseñar los partidos que vienen. */
  function rondaEnJuego(todas) {
    for (var i = 0; i < todas.length; i++) {
      var r = todas[i];
      if (r.futura) return i;
      if (r.ties.some(function (t) { return !t.w; })) return i;
    }
    return todas.length - 1;
  }

  function bracketHTML(rounds, champion, proxima) {
    var todas = (rounds || []).filter(function (r) { return r.ties && r.ties.length; });
    if (proxima && proxima.ties.length) {
      todas = todas.concat([{ name: proxima.name, ties: proxima.ties, futura: true, week: proxima.week }]);
    }
    rondasVista = todas;
    if (!todas.length) {
      return '<p class="hint">Todavía no se ha jugado ninguna ronda. El cuadro aparecerá aquí ' +
        'según avancen las eliminatorias.</p>';
    }
    /* si cambió la competición o salió una ronda nueva, se vuelve a la que toca */
    var clave = (rComp || '') + '|' + todas.length + '|' +
      todas.map(function (r) { return r.name + ':' + r.ties.length; }).join(',');
    if (clave !== rondasClave) { rondasClave = clave; rondaIdx = null; }
    if (rondaIdx == null || rondaIdx < 0 || rondaIdx >= todas.length) rondaIdx = rondaEnJuego(todas);
    var r = todas[rondaIdx];
    var camp = (champion && rondaIdx === todas.length - 1)
      ? '<div class="rn-campeon">🏆 ' + crest(champion, 26) + '<b>' + esc(champion.n) + '</b></div>' : '';
    /* Cuatro filas siempre que se pueda: cuartos en una columna, octavos en
       dos, dieciseisavos en cuatro. Nunca sobra un cruce suelto. */
    var n = r.ties.length;
    var cols = Math.min(4, Math.max(1, Math.ceil(n / 4)));
    return '<div class="br-listagrid ancha cols-' + cols +
      '" style="grid-template-columns:repeat(' + cols + ',minmax(0,1fr))">' +
      r.ties.map(brTie).join('') + '</div>' + camp;
  }
  /* el nombre de la ronda que se está viendo, para la cabecera */
  function rondaActual() {
    var r = rondasVista[rondaIdx];
    if (!r) return null;
    return { nombre: r.name, n: r.ties.length, futura: !!r.futura, week: r.week,
      hayAntes: rondaIdx > 0, hayDespues: rondaIdx < rondasVista.length - 1 };
  }
  /* la cabecera con las flechas a los lados */
  function tituloConRondas(dentro) {
    var r = rondaActual();
    if (!r) return dentro;
    return '<button class="rn-flecha" data-ronda="-1"' + (r.hayAntes ? '' : ' disabled') +
      ' title="Ronda anterior">&#8249;</button>' +
      '<span class="rn-nombre">' + dentro +
      '<small>' + esc(r.nombre) + ' · ' + r.n + ' cruce' + (r.n === 1 ? '' : 's') +
      (r.futura ? ' · por jugar' : '') + '</small></span>' +
      '<button class="rn-flecha" data-ronda="1"' + (r.hayDespues ? '' : ' disabled') +
      ' title="Ronda siguiente">&#8250;</button>';
  }
  function bracketBody(rounds, champion) {
    var todas = (rounds || []).filter(function (r) { return r.ties && r.ties.length && !isPrelim(r); });
    var previas = todas.filter(function (r) { return r.ties.length > CRUCES_CUADRO; });
    var list = todas.filter(function (r) { return r.ties.length <= CRUCES_CUADRO; });
    if (!list.length) {
      return (previas.length ? rondasEnListaHTML(previas)
        : '<p class="hint">Todavía no se ha jugado ninguna ronda. El cuadro aparecerá aquí ' +
          'según avancen las eliminatorias.</p>');
    }
    var hidden = 0;

    var last = list[list.length - 1];
    var isFinal = last.ties.length === 1;
    var body = isFinal ? list.slice(0, -1) : list;

    function col(r, half) {
      var n = r.ties.length, mid = Math.ceil(n / 2);
      var ties = half === 'L' ? r.ties.slice(0, mid) : r.ties.slice(mid);
      return '<div class="br-round"><h5>' + esc(r.name) + '</h5><div class="br-col">' +
        (ties.length ? ties.map(brTie).join('') : '<div class="br-empty"></div>') +
        '</div></div>';
    }

    var left = body.map(function (r) { return col(r, 'L'); }).join('');
    var right = body.slice().reverse().map(function (r) { return col(r, 'R'); }).join('');

    var center = '<div class="br-center">';
    if (isFinal) center += '<h5>' + esc(last.name) + '</h5>' + brTie(last.ties[0]);
    if (champion) {
      center += '<div class="br-champ"><div class="cup">🏆</div>' + crest(champion, 46) +
        '<b>' + esc(champion.n) + '</b></div>';
    } else if (!isFinal) {
      center += '<p class="hint" style="text-align:center">La final se jugará aquí.</p>';
    }
    center += '</div>';

    return '<div class="br2"><div class="br-side">' + left + '</div>' +
      center + '<div class="br-side">' + right + '</div></div>' +
      rondasEnListaHTML(previas);
  }
  /* La Supercopa y la Recopa son una llave de un solo cruce: se dibujan
     con el mismo cuadro que cualquier otra eliminatoria. */
  function superCopaHTML(cual, title, body) {
    var SC = World.state.superCopas || {};
    var t = cual === 'uefa' ? SC.uefa : SC.conmebol;
    var nombre = cual === 'uefa' ? 'Supercopa de UEFA' : 'Recopa Sudamericana';
    if (!t) {
      title.innerHTML = esc(nombre);
      body.innerHTML = '<p class="hint">Todavía no se ha jugado.</p>';
      return;
    }
    title.innerHTML = esc(nombre) + (t.w ? ' <i class="rn-camp">🏆 ' + esc(t.w.n) + '</i>' : '');
    body.innerHTML = bracketHTML([{ name: 'Final', ties: [t] }], t.w || null) +
      (cual === 'conmebol'
        ? '<p class="hint" style="margin-top:10px">El campeón de la Libertadores cierra la serie en casa.</p>'
        : '<p class="hint" style="margin-top:10px">Partido único en campo neutral.</p>');
  }

  function brTie(t) {
    if (!t || !t.a) return '';
    if (!t.b) {
      return '<div class="br-tie"><div class="t win">' + crest(t.a, 16) + '<em>' + esc(t.a.n) + '</em><b>—</b></div></div>';
    }
    var sa, sb, lg = '';
    /* Los dos partidos, cada uno en su línea y siempre en el orden de la
       ficha: primero el de la izquierda. En la vuelta juega fuera, así que
       hay que dar la vuelta al marcador para que no engañe. */
    function pierna(nombre, marcador, fuera) {
      return '<i class=leg><u>' + nombre + '</u>' +
        (fuera ? marcador[1] + '-' + marcador[0] : marcador[0] + '-' + marcador[1]) + '</i>';
    }
    if (t.agg) {
      sa = t.agg[0]; sb = t.agg[1];
      lg = pierna('Ida', t.leg1.s, false) + pierna('Vuelta', t.leg2.s, true);
    } else if (t.single && t.leg1) { sa = t.leg1.s[0]; sb = t.leg1.s[1]; }
    else if (t.leg1) { sa = t.leg1.s[0]; sb = t.leg1.s[1]; lg = pierna('Ida', t.leg1.s, false); }
    else if (t.s) { sa = t.s[0]; sb = t.s[1]; }
    else { sa = ''; sb = ''; }
    if (t.aet && !t.pens) lg += '<i class="leg">prórroga</i>';
    /* la tanda va pegada al marcador, entre paréntesis: 0(7) y 0(8) */
    var pa = t.pens ? '<i class="pens">(' + t.pens.a + ')</i>' : '';
    var pb = t.pens ? '<i class="pens">(' + t.pens.b + ')</i>' : '';
    var mine = (t.a === me || t.b === me) ? ' mine' : '';
    return '<div class="br-tie' + mine + '">' +
      '<div class="t' + (t.w === t.a ? ' win' : '') + '">' + crest(t.a, 16) + '<em>' + esc(t.a.n) + '</em><b>' + sa + pa + '</b></div>' +
      '<span class="br-sep">–</span>' +
      '<div class="t' + (t.w === t.b ? ' win' : '') + '">' + crest(t.b, 16) + '<em>' + esc(t.b.n) + '</em><b>' + sb + pb + '</b></div>' +
      (lg ? '<div class="lg">' + lg + '</div>' : '') + '</div>';
  }

  /* =====================================================================
     VISTA · PALMARÉS
     ===================================================================== */
  var hYear = null, hScope = 'todo', hCuantas = -1;
  function viewHistory() {
    var st = World.state;
    if (!st.history.length) {
      return '<div class="panel" style="height:100%"><h3>Palmarés</h3><div class="pbody">' +
        '<p class="hint">Aún no has cerrado ninguna temporada. Al cerrar la primera aparecerán aquí ' +
        'los campeones y subcampeones de cada competición.</p></div></div>';
    }
    var years = st.history.map(function (h) { return h.year; }).reverse();
    /* al cerrar una temporada el palmarés salta a ella: si no, se quedaba
       clavado en la que se hubiera mirado la primera vez */
    if (st.history.length !== hCuantas) { hCuantas = st.history.length; hYear = years[0]; }
    if (years.indexOf(hYear) < 0) hYear = years[0];
    var s0 = st.history.filter(function (h) { return h.year === hYear; })[0];

    /* En la carrera de jugador el último filtro son SUS títulos, todos los
       de su vida; en la de entrenador, los de su club esa temporada. */
    var esJugador = !!(window.Carrera && Carrera.activa());
    var SCOPES = [
      { v: 'todo', t: 'Todo' },
      { v: 'cont', t: 'Continentales' },
      { v: 'liga', t: 'Ligas' },
      { v: 'copa', t: 'Copas' },
      esJugador ? { v: 'mis', t: 'Mis títulos' } : { v: 'mio', t: 'Mi equipo' }
    ];
    if (!esJugador && hScope === 'mis') hScope = 'mio';
    if (esJugador && hScope === 'mio') hScope = 'mis';
    var mis = hScope === 'mis';
    var bar = '<div class="mbar"><div class="toolbar" style="gap:8px">' +
      (mis ? '' : '<label>Temporada</label><select id="hYear">' + years.map(function (y) {
        return '<option value="' + y + '"' + (y === hYear ? ' selected' : '') + '>' + y + '</option>';
      }).join('') + '</select>') +
      '<label>Ver</label><select id="hScope">' + SCOPES.map(function (x) {
        return '<option value="' + x.v + '"' + (x.v === hScope ? ' selected' : '') + '>' + esc(x.t) + '</option>';
      }).join('') + '</select>' +
      '<span class="hint">' + (mis ? 'Todo lo que has ganado desde que empezaste.'
        : 'Campeón y subcampeón de cada competición.') + '</span>' +
      '</div></div>';

    if (mis) {
      var jj = Carrera.jugador();
      var cuantos = jj ? jj.palmares.length : 0;
      return '<div class="mv-wrap">' + bar +
        '<div class="panel" style="flex:1"><h3>Mis títulos' +
        '<small>' + cuantos + (cuantos === 1 ? ' título' : ' títulos') + '</small></h3>' +
        '<div class="pbody" id="hBody">' +
        (window.CarreraUI ? CarreraUI.palmaresJugador() : '') + '</div></div></div>';
    }
    return '<div class="mv-wrap">' + bar +
      '<div class="panel" style="flex:1"><h3>Temporada ' + Temporada(s0.year) +
      '<small>' + st.history.length + ' temporada(s) jugadas</small></h3>' +
      '<div class="pbody" id="hBody">' + palmaresHTML(s0) + '</div></div></div>';
  }

  function trophyRow(name, champ, second, kind, flag) {
    if (!champ) return '';
    var mine = (champ === me || second === me) ? ' mine' : '';
    return '<div class="trow2' + mine + '" data-k="' + kind + '">' +
      '<span class="cmp">' + (flag || '') + esc(name) + '</span>' +
      '<span class="win">' + crest(champ, 22) + '<em>' + esc(champ.n) + '</em><i>campeón</i></span>' +
      '<span class="sec">' + (second ? crest(second, 20) + '<em>' + esc(second.n) + '</em><i>subcampeón</i>'
        : '<em class="hint">—</em>') + '</span></div>';
  }

  /* En qué club estabas ESA temporada. El palmarés de «Mi equipo» no puede
     colgarte los títulos que el club ganó antes de que llegaras. */
  function miClubEnAnio(anio) {
    if (modo !== 'jugador' || !window.Carrera || !Carrera.activa()) return me;
    var j = Carrera.jugador();
    var filas = (j.historial || []).concat(j.temp ? [j.temp] : []);
    var fila = null;
    filas.forEach(function (t) { if (t && t.anio === anio) fila = t; });
    if (!fila) return null;
    if (fila.clubRef) return fila.clubRef;
    var eq = null;
    Object.keys(LG).forEach(function (id) {
      if (id === '__nations__') return;
      LG[id].teams.forEach(function (t) {
        if (t.uid === fila.clubUid || t.n === fila.club) eq = t;
      });
    });
    return eq;
  }

  function palmaresHTML(s0) {
    var out = '';
    function block(title, rows) {
      var body = rows.join('');
      if (!body) return '';
      return '<h4 class="subh">' + esc(title) + '</h4><div class="palm">' + body + '</div>';
    }
    var wantsMine = hScope === 'mio';
    var mio = wantsMine ? miClubEnAnio(s0.year) : null;
    function keep(kind, champ, second) {
      if (wantsMine) return !!mio && (champ === mio || second === mio);
      return hScope === 'todo' || hScope === kind;
    }

    var conts = s0.conts.filter(function (c) { return keep('cont', c.champion, c.runnerUp); })
      .map(function (c) { return trophyRow(c.name, c.champion, c.runnerUp, 'cont'); });
    out += block('Competiciones continentales', conts);

    var cups = s0.cups.filter(function (c) { return keep('copa', c.champion, c.runnerUp); })
      .map(function (c) { return trophyRow(c.name, c.champion, c.runnerUp, 'copa', flagImg(c.id, 12)); });
    out += block('Copas nacionales', cups);

    var ligas = s0.leagues.filter(function (l) {
      return l.champion && keep('liga', l.champion, l.runnerUp);
    }).map(function (l) {
      return trophyRow(l.name, l.champion, l.runnerUp, 'liga', lflagImg(l.id, 12));
    });
    out += block('Ligas', ligas);

    if (!out) {
      out = (wantsMine && !mio)
        ? '<p class="hint">Esa temporada todavía no jugabas.</p>'
        : '<p class="hint">No hay nada que mostrar con este filtro.</p>';
    }

    /* lo que pasó con las selecciones ese año */
    var hs = (World.state.seleccionHistorial || []).filter(function (h) { return h.anio === s0.year; });
    if (hScope === 'todo' && hs.length) {
      out += '<h4 class="subh">Selecciones</h4><div class="fx">' +
        hs.map(function (h) {
          return '<div style="display:block"><b>' + esc(h.nombre) + '</b><br>' +
            '<span class="hint">' + esc(h.campeon || '') + '</span></div>';
        }).join('') + '</div>';
    }
    if (hScope === 'todo' && s0.moves && s0.moves.length) {
      out += '<h4 class="subh">Ascensos y descensos</h4><div class="fx">' +
        s0.moves.map(function (m) {
          var po = m.po ? '<br><span class="hint">Play-off: ' +
            m.po.ties.map(function (t) {
              return esc(t.a.n) + ' ' + t.s[0] + '-' + t.s[1] + ' ' + esc(t.b.n) +
                (t.pens ? ' (pen ' + t.pens.a + '-' + t.pens.b + ')' : '');
            }).join(' · ') + ' → sube ' + esc(m.po.campeon) + '</span>' : '';
          return '<div style="display:block"><b>' + esc(m.tier1) + '</b><br>' +
            '<span style="color:#7dffcd">▲ ' + esc(m.up.join(', ')) + '</span><br>' +
            '<span style="color:#ff9f9f">▼ ' + esc(m.down.join(', ')) + '</span>' + po + '</div>';
        }).join('') + '</div>' +
        '<p class="hint" style="margin-top:8px">Retiradas: ' + s0.aging.retired +
        ' · debutantes: ' + s0.aging.debuts + '</p>';
    }
    return out;
  }

  /* decisiones de fin de temporada en la carrera de jugador */
  function bindCarrera() {
    if (modo !== 'jugador' || !window.Carrera) return;
    var caja = $('#wBody');
    if (!caja) return;
    caja.querySelectorAll('[data-cr]').forEach(function (b) {
      b.onclick = function () {
        var a = b.getAttribute('data-cr');
        if (a === 'sigue') {
          if (Carrera.sigue()) { trasDecidir(); }
        } else if (a === 'torneo') {
          /* el cuadro del torneo de selecciones del verano */
          sub = 'seltorneo';
          syncTabs(); renderBody();
        } else if (a === 'retiro') {
          Carrera.retirarse();
          finTemp = null;
          sub = 'carrera';
          syncTabs(); render();
          toast('Colgaste las botas. Mira todo lo que hiciste en «Mi carrera».');
        }
      };
    });
    caja.querySelectorAll('[data-oferta]').forEach(function (b) {
      b.onclick = function () {
        var i = +b.getAttribute('data-oferta');
        var j = Carrera.jugador();
        var antes = j.club;
        if (Carrera.aceptaOferta(i)) {
          toast('Fichas por ' + j.club.n + (antes ? ' dejando ' + antes.n : '') + '.');
          trasDecidir();
        }
      };
    });
  }
  function trasDecidir() {
    var j = Carrera.jugador();
    finTemp = null;
    me = j.club;
    World.setDetail(me, false);
    Carrera.ajustaSeleccion();
    rConf = (LMETA[me.leagueId] || {}).conf || 'UEFA';
    rScope = paisDeMiLiga();
    rComp = 'L:' + me.leagueId;
    /* el mercado del mundo se resuelve solo: el jugador no lo maneja */
    if (World.state.mercadoAbierto && window.World.cerrarMercado) World.cerrarMercado();
    Carrera.ordena(me);
    sub = 'club';
    syncTabs(); render();
  }

  /* =====================================================================
     ENLACES DE EVENTOS
     ===================================================================== */
  /* La clasificación se abre a la altura de tu equipo: en una tabla de
     veinticuatro no se busca la fila a mano. */
  function centraMiFila() {
    /* el panel todavía no tiene alto cuando se pinta: se espera al reparto */
    var hazlo = function () {
      $$('#wBody tr.me, #wBody tr.yo').forEach(function (fila) {
        var caja = fila.closest ? fila.closest('.pbody') : null;
        if (!caja || !caja.clientHeight) return;
        if (caja.scrollHeight <= caja.clientHeight + 4) return;
        var rf = fila.getBoundingClientRect(), rc = caja.getBoundingClientRect();
        caja.scrollTop += (rf.top - rc.top) - (caja.clientHeight - rf.height) / 2;
      });
    };
    if (window.requestAnimationFrame) requestAnimationFrame(function () { requestAnimationFrame(hazlo); });
    else setTimeout(hazlo, 30);
  }

  function bindBody() {
    /* mercado de pases */
    if ($('#mkCerrar')) $('#mkCerrar').onclick = function () {
      var r = World.cerrarMercado();
      renderBody();
      toast('Mercado cerrado: ' + (r ? r.total.toLocaleString('es') : 0) + ' traspasos en todo el mundo.');
    };
    if ($('#mkDirigir')) $('#mkDirigir').onclick = function () {
      Picker.team({
        title: 'Elige el club que vas a dirigir', nations: false,
        onPick: function (t) { if (t && t !== me) dirigeOtroClub(t); }
      });
    };
    if ($('#mkBuscar')) $('#mkBuscar').onclick = function () {
      Picker.team({
        title: 'Elige el club del que quieres fichar', nations: false,
        onPick: function (t) { if (t !== me) { mkSel = t; renderBody(); } }
      });
    };
    if ($('#wBody')) {
      $('#wBody').addEventListener('click', function (e) {
        var pf = e.target;
        while (pf && pf !== this && !pf.getAttribute('data-perfil')) pf = pf.parentNode;
        if (pf && pf !== this && window.Profile) {
          var eq = clubDePerfil(pf.getAttribute('data-perfil'));
          if (eq) { Profile.open(eq); return; }
        }
        var n = e.target;
        while (n && n !== this && !n.getAttribute('data-vender') && !n.getAttribute('data-fichar')) n = n.parentNode;
        if (!n || n === this) return;
        var v = n.getAttribute('data-vender');
        if (v) { mkVender(v); return; }
        var fch = n.getAttribute('data-fichar');
        if (fch) mkFichar(fch);
      });
    }

    /* club */
    if ($('#bVisual')) $('#bVisual').onclick = function () { playNext(true); };
    if ($('#bQuick')) $('#bQuick').onclick = function () { playNext(false); };
    if ($('#bWeek')) $('#bWeek').onclick = function () { skipWeeks(1); };
    if ($('#bVerCola')) $('#bVerCola').onclick = verSiguienteDeLaCola;
    if ($('#bCambiarSel')) $('#bCambiarSel').onclick = function () {
      if (!World.state.cambioSeleccion) return;
      Picker.team({
        title: 'Elige tu nueva selección', nations: 'only',
        onPick: function (t) {
          miSel = t; selNac = t; selNacManual = true;
          World.state.miSeleccion = t.s;
          World.state.cambioSeleccion = false;
          toast('Ahora diriges a ' + t.n + '.');
          renderBody();
        }
      });
    };
    if ($('#bRest')) $('#bRest').onclick = function () { skipWeeks(World.state.total - World.state.week); };
    if ($('#bSel')) $('#bSel').onclick = function () {
      var sum = World.jugarSelecciones();
      ponEnColaSeleccion(sum);
      sub = 'club';
      syncTabs(); render();
      if (!matchQueue.length) toast('Tu selección no jugó este verano.');
    };

    /* carrera de jugador */
    bindCarrera();
    centraMiFila();

    /* cambio de equipo */
    if ($('#chPick')) {
      $('#chPick').onclick = function () {
        Picker.team({
          title: 'Elige tu nuevo club', nations: false,
          onPick: function (t) { chTeam = t; renderBody(); }
        });
      };
      $('#chOk').onclick = function () {
        var t = chTeam;
        if (!t) return;
        me = t; chTeam = null; changing = false;
        World.setDetail(me, false);
        rConf = (LMETA[me.leagueId] || {}).conf || 'UEFA';
        rScope = paisDeMiLiga();
        rComp = 'L:' + me.leagueId;
        toast('Ahora diriges al ' + me.n + '.');
        render();
      };
      $('#chCancel').onclick = function () { changing = false; renderBody(); };
    }

    /* partido */
    /* Al volver al club se deja el partido atrás y no hay manera de
       regresar a él, así que cuenta como visto: si no, su marcador se
       quedaría tapado para siempre en el calendario y en el cuadro. */
    if ($('#bBack')) $('#bBack').onclick = function () {
      if (mv) mv.stop();
      matchOver = true; sub = 'club'; syncTabs(); renderBody();
    };
    if ($('#bNextM')) $('#bNextM').onclick = function () {
      if (mv) mv.stop();
      matchIdx++;
      currentMatch = matchQueue[matchIdx];
      matchOver = !matchVisual;
      renderBody();
    };
    var box = $('#wMatchBox');
    if (box && currentMatch && matchVisual) {
      mv = MatchView.create(box);
      var live = !matchOver;
      mv.show(currentMatch.res, {
        live: live,
        onStart: function () { playing = true; },
        onEnd: function () {
          playing = false; matchOver = true;
          var s = $('#wStrip'); if (s) s.innerHTML = stripHTML();
        }
      });
      if ($('#bSkip')) $('#bSkip').onclick = function () {
        if (!mv) return;
        mv.show(currentMatch.res, {
          live: false, onEnd: function () {
            matchOver = true;
            var s = $('#wStrip'); if (s) s.innerHTML = stripHTML();
          }
        });
      };
    }

    /* alineación */
    if ($('#fmSel')) {
      $('#fmSel').onchange = function () {
        var sl = Engine.FORMATIONS[this.value];
        if (!sl) return;
        var eq = equipoActivo();
        eq.fm = sl.slice();
        eq.p = Engine.autoLineup(eq.p, sl);
        eq.ovr = Engine.overall(eq);
        selSlot = selBench = null; renderBody();
      };
      $('#fmAuto').onclick = function () {
        var eq = equipoActivo(), sl = slots();
        eq.p = Engine.autoLineup(eq.p, sl);
        eq.fm = sl; eq.ovr = Engine.overall(eq);
        selSlot = selBench = null; renderBody();
      };
      $$('#wBody .slot').forEach(function (el) {
        el.onclick = function () {
          var i = +el.dataset.slot;
          if (selBench != null) { swap(i, 11 + selBench); return; }
          if (selSlot === i) { selSlot = null; renderBody(); return; }
          if (selSlot != null) { swap(selSlot, i); return; }
          selSlot = i; selBench = null; renderBody();
        };
      });
      $$('#wBody .bp').forEach(function (el) {
        el.onclick = function () {
          var i = +el.dataset.bench;
          if (selSlot != null) { swap(selSlot, 11 + i); return; }
          /* dos del banco tambien se cambian entre si: asi entra y sale gente
             de la convocatoria sin pasar por el once */
          if (selBench != null && selBench !== i) { swap(11 + selBench, 11 + i); return; }
          selBench = (selBench === i ? null : i); selSlot = null; renderBody();
        };
      });
    }

    if ($('#selBloque')) $('#selBloque').onchange = function () {
      selBloque = this.value; renderBody();
    };

    /* resultados */
    if ($('#rConf')) {
      $('#rConf').onchange = function () { rConf = this.value; rScope = null; rComp = null; renderBody(); };
      if ($('#rScope')) $('#rScope').onchange = function () { rScope = this.value; rComp = null; rView = null; renderBody(); };
      if ($('#rComp')) $('#rComp').onchange = function () {
        rComp = this.value; rView = null; rondaIdx = null; renderBody();
      };
      var cab = $('#rTitle');
      if (cab) cab.onclick = function (e) {
        var b = e.target;
        while (b && b !== this && !b.getAttribute('data-ronda') && !b.getAttribute('data-paso')) b = b.parentNode;
        if (!b || b === this || b.disabled) return;
        if (b.getAttribute('data-paso')) {
          var tot = pasosVista.length || 1;
          selPaso = Math.max(0, Math.min(tot - 1, (selPaso || 0) + (+b.getAttribute('data-paso'))));
          fillResults();
          return;
        }
        rondaIdx = Math.max(0, Math.min(rondasVista.length - 1,
          (rondaIdx == null ? rondasVista.length - 1 : rondaIdx) + (+b.getAttribute('data-ronda'))));
        fillResults();
      };
      if ($('#rView')) $('#rView').onchange = function () { rView = this.value; fillResults(); };
      fillResults();
    }

    /* palmarés */
    if ($('#hYear')) {
      $('#hYear').onchange = function () { hYear = +this.value; renderBody(); };
      $('#hScope').onchange = function () { hScope = this.value; renderBody(); };
    }
  }
  function swap(i, j) {
    var eq = equipoActivo(), p = eq.p;
    var t = p[i]; p[i] = p[j]; p[j] = t;
    eq.ovr = Engine.overall(eq);
    selSlot = selBench = null;
    renderBody();
  }

  /* =====================================================================
     EL MODO CARRERA ES UN MUNDO APARTE
     Los ascensos, los descensos, los fichajes y los años que cumple cada
     jugador sólo valen dentro de la partida. Al salir se devuelve el mundo
     tal y como estaba, y al volver se pone otra vez el de la carrera.
     ===================================================================== */
  var mundoOriginal = null, mundoCarrera = null;
  function capturaMundo() {
    var snap = { ligas: {}, eq: [] };
    Object.keys(LEAGUES).forEach(function (id) {
      var lg = LEAGUES[id];
      if (!lg || !lg.teams) return;
      snap.ligas[id] = lg.teams.slice();
      lg.teams.forEach(function (t) {
        snap.eq.push({
          t: t, lg: t.leagueId, ovr: t.ovr,
          filas: (t.p || []).slice(),
          datos: (t.p || []).map(function (x) { return x.slice(); })
        });
      });
    });
    return snap;
  }
  function aplicaMundo(snap) {
    if (!snap) return;
    Object.keys(snap.ligas).forEach(function (id) {
      if (LEAGUES[id]) LEAGUES[id].teams = snap.ligas[id].slice();
    });
    snap.eq.forEach(function (e) {
      e.t.leagueId = e.lg;
      e.t.ovr = e.ovr;
      e.t.p = e.filas.slice();
      /* las fichas se rellenan en su sitio: hay medio programa apuntando
         a ellas y cambiarlas por copias rompería esas referencias */
      e.filas.forEach(function (fila, i) {
        var d = e.datos[i];
        for (var k = 0; k < d.length; k++) fila[k] = d[k];
        fila.length = d.length;
      });
    });
  }

  /* lo que necesita la ficha de club para pintar el calendario de cualquier equipo */
  window.Career = {
    calendarFor: calendarFor,
    myTeam: function () { return started ? me : null; },
    started: function () { return started; },
    /* al entrar en el modo carrera */
    preparaMundo: function () {
      if (!mundoOriginal) mundoOriginal = capturaMundo();
      if (started && mundoCarrera) { aplicaMundo(mundoCarrera); mundoCarrera = null; }
    },
    /* al salir a cualquier otro modo */
    sacaMundo: function () {
      if (!started || !mundoOriginal) return;
      mundoCarrera = capturaMundo();
      aplicaMundo(mundoOriginal);
    }
  };
})();
