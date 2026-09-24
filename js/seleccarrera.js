/* =========================================================================
   SELECCIONES EN EL MODO CARRERA
   Cada temporada, cuando acaba la liga, hay parón de selecciones. El ciclo
   dura cuatro años y siempre es el mismo:

     1ª · clasificación para la copa continental
          (la CONMEBOL juega la primera vuelta de las eliminatorias, 9 fechas)
     2ª · copa continental
     3ª · clasificación mundialista
          (la CONMEBOL, su segunda vuelta; el resto, las suyas enteras)
     4ª · Mundial

   Se juega el torneo entero, con todas las selecciones, y de ahí salen los
   partidos del jugador (si le convocan) y los títulos de su palmarés.
   ========================================================================= */
(function (global) {
  'use strict';

  var CONFS = ['UEFA', 'CONMEBOL', 'CONCACAF', 'AFC', 'CAF', 'OFC'];
  var COPA = {
    UEFA: { id: 'euro', name: 'Eurocopa', size: 24, grupo: 4 },
    CONMEBOL: { id: 'copaamerica', name: 'Copa América', size: 12, grupo: 4, invitados: ['CRC', 'PAN'] },
    CONCACAF: { id: 'goldcup', name: 'Copa Oro', size: 16, grupo: 4 },
    AFC: { id: 'asiancup', name: 'Copa Asiática', size: 24, grupo: 4 },
    CAF: { id: 'afcon', name: 'Copa Africana de Naciones', size: 24, grupo: 4 },
    OFC: { id: 'ofcnations', name: 'Copa de Naciones de la OFC', size: 8, grupo: 4 }
  };
  /* plazas de cada zona en el Mundial de 48 */
  var PLAZAS_MUNDIAL = { UEFA: 16, CAF: 9, AFC: 8, CONMEBOL: 6, CONCACAF: 6, OFC: 1 };

  function naciones(conf) {
    var lista = (global.NATIONS || []).filter(function (n) { return n.conf === conf; });
    return lista.sort(function (a, b) { return (b.ovr || 0) - (a.ovr || 0); });
  }
  /* Los partidos del jugador, para que pueda verlos uno a uno en vez de
     enterarse por un resumen. Se vacía al empezar cada torneo. */
  var MIOS = [];
  /* Tu selección: la del futbolista si hay carrera de jugador, y si no la
     que dirige el entrenador. */
  function miSeleccion() {
    var st = global.World && global.World.state;
    var codigo = null;
    if (global.Carrera && Carrera.activa()) codigo = Carrera.jugador().nat;
    else if (st && st.miSeleccion) codigo = st.miSeleccion;
    if (!codigo) return null;
    return (global.NATIONS || []).filter(function (n) { return n.s === codigo; })[0] || null;
  }
  /* juega mi selección, esté yo en la lista o no: si no me convocan también
     quiero poder ver los partidos */
  function esMiPartido(a, b) {
    var mia = miSeleccion();
    return !!(mia && (a === mia || b === mia));
  }
  function estoyEnLaLista() {
    /* el entrenador siempre está: es el que la dirige */
    if (!(global.Carrera && Carrera.activa())) return true;
    var mia = miSeleccion();
    return !!(mia && (mia.p || []).indexOf(Carrera.jugador().p) >= 0);
  }
  /* Goles y asistencias de cada competición, guardados jornada a jornada:
     así el panel puede enseñar sólo lo de los partidos ya vistos. */
  var MARCA = {}, ORDEN = {};
  function apunta(comp, ronda, r) {
    if (!global.Comp || !comp) return;
    ronda = ronda || '—';
    var c = MARCA[comp] = MARCA[comp] || {};
    if (!c[ronda]) { c[ronda] = {}; (ORDEN[comp] = ORDEN[comp] || []).push(ronda); }
    Comp.collectScorers(c[ronda], r);
  }

  function juega(a, b, opts) {
    opts = opts || { quick: true, neutral: true };
    var mio = esMiPartido(a, b);
    /* el partido propio se juega con narración: si no, no hay nada que ver */
    if (mio) opts.quick = false;
    var r = Engine.simulate(a, b, opts);
    apunta(opts.comp, opts.ronda, r);
    if (global.Carrera && Carrera.activa()) Carrera.apuntaSeleccion(r, opts.comp);
    if (mio) {
      MIOS.push({ kind: 'sel', comp: opts.comp || 'Selección',
        label: opts.ronda || '', res: r, neutral: opts.neutral !== false,
        convocado: estoyEnLaLista() });
    }
    return r;
  }

  /* ---------------------------------------------------------------------
     PIEZAS SUELTAS
     --------------------------------------------------------------------- */
  /* grupos por bombos, sin repetir nada raro: aquí todas son del mismo sitio */
  /* Cuántos del mismo continente aguanta un grupo. En el sorteo de verdad,
     uno por confederación; Europa, que lleva la mitad del cuadro, hasta dos. */
  function topeConf(conf) { return conf === 'UEFA' ? 2 : 1; }
  function cuantosDe(grupo, conf) {
    var n = 0;
    grupo.teams.forEach(function (t) { if (t.conf === conf) n++; });
    return n;
  }
  /* Coloca a «t» en algún grupo que lo admita. Si todos los que le valen
     están pillados, se mira si el que ocupa uno de ellos puede mudarse a
     otro y dejarle el sitio. Colocando a pelo, el último del bombo se queda
     sin grupo válido aunque hubiera un reparto posible. */
  function hazSitio(gs, asign, t, visto) {
    for (var gi = 0; gi < gs.length; gi++) {
      if (visto[gi] || cuantosDe(gs[gi], t.conf) >= topeConf(t.conf)) continue;
      visto[gi] = 1;
      if (asign[gi] == null || hazSitio(gs, asign, asign[gi], visto)) {
        asign[gi] = t;
        return true;
      }
    }
    return false;
  }
  /* Grupos por bombos. Con «porConf» se respeta el reparto por continentes,
     que es lo que hace falta en el Mundial: allí no pueden caer dos africanos
     ni dos sudamericanos juntos. */
  function reparte(lista, nGrupos, porConf) {
    var orden = lista.slice().sort(function (a, b) { return (b.ovr || 0) - (a.ovr || 0); });
    var gs = [];
    for (var i = 0; i < nGrupos; i++) {
      gs.push({ name: 'Grupo ' + String.fromCharCode(65 + i), teams: [] });
    }
    var porBombo = Math.ceil(orden.length / nGrupos);
    for (var b = 0; b < porBombo; b++) {
      var bombo = Comp.shuffle(orden.slice(b * nGrupos, (b + 1) * nGrupos));
      if (!porConf) {
        bombo.forEach(function (t, k) { gs[k].teams.push(t); });
        continue;
      }
      /* del bombo sale uno por grupo, y ninguno cae con otro de su misma
         confederación mientras quede un reparto que lo evite */
      var asign = [], sobran = [], gi2;
      for (gi2 = 0; gi2 < nGrupos; gi2++) asign.push(null);
      bombo.forEach(function (t) { if (!hazSitio(gs, asign, t, [])) sobran.push(t); });
      /* si el cupo no da de sí, al grupo libre que menos tenga de lo suyo:
         el sorteo no puede frenarse */
      sobran.forEach(function (t) {
        var elegido = -1;
        for (var gi = 0; gi < nGrupos; gi++) {
          if (asign[gi] != null) continue;
          if (elegido < 0 || cuantosDe(gs[gi], t.conf) < cuantosDe(gs[elegido], t.conf)) elegido = gi;
        }
        if (elegido >= 0) asign[elegido] = t;
      });
      for (gi2 = 0; gi2 < nGrupos; gi2++) if (asign[gi2]) gs[gi2].teams.push(asign[gi2]);
    }
    return gs;
  }
  function juegaGrupos(gs, doble, comp) {
    gs.forEach(function (g) {
      g.table = Comp.newTable(g.teams);
      g.results = [];
      Comp.roundRobin(g.teams, !!doble).forEach(function (jor, ji) {
        jor.forEach(function (p) {
          var r = juega(p[0], p[1], { quick: true, neutral: !doble, comp: comp,
            ronda: 'Jornada ' + (ji + 1) });
          Comp.applyResult(g.table, p[0], p[1], r.score);
          g.results.push({ md: ji + 1, h: p[0], a: p[1], s: r.score });
        });
      });
      g.standings = Comp.sortTable(g.table);
      g.standings.forEach(function (r, i) { r.pos = i + 1; r.group = g.name; });
    });
    return gs;
  }
  /* cuadro de eliminatorias a partido único hasta el campeón */
  function cuadro(lista, comp) {
    var cur = Comp.shuffle(lista.slice()), rondas = [];
    var guard = 0;
    while (cur.length > 1 && guard++ < 10) {
      var ties = [], sig = [];
      for (var i = 0; i + 1 < cur.length; i += 2) {
        var r = juega(cur[i], cur[i + 1], { quick: true, neutral: true, knockout: true,
          comp: comp, ronda: Comp.roundName(cur.length) });
        var w = r.winner === 'home' ? cur[i] : cur[i + 1];
        ties.push({ a: cur[i], b: cur[i + 1], s: r.score, pens: r.pens, w: w });
        sig.push(w);
      }
      rondas.push({ name: Comp.roundName(cur.length), ties: ties });
      cur = sig;
    }
    return { rondas: rondas, campeon: cur[0] || null,
      finalista: finalistaDe(rondas) };
  }
  function finalistaDe(rondas) {
    var f = rondas[rondas.length - 1];
    if (!f || f.ties.length !== 1) return null;
    var t = f.ties[0];
    return t.w === t.a ? t.b : t.a;
  }
  /* de un grupo salen los N primeros */
  function pasan(gs, n, mejoresTerceros) {
    var out = [], terceros = [];
    gs.forEach(function (g) {
      g.standings.forEach(function (r, i) {
        if (i < n) out.push(r.t);
        else if (i === n) terceros.push(r);
      });
    });
    if (mejoresTerceros) {
      terceros.sort(function (a, b) {
        return b.pts - a.pts || (b.gf - b.gc) - (a.gf - a.gc) || b.gf - a.gf;
      });
      terceros.slice(0, mejoresTerceros).forEach(function (r) { out.push(r.t); });
    }
    return out;
  }
  /* recorta hasta una potencia de dos por si el cuadro no cuadra */
  function aPotencia(lista) {
    var k = 1;
    while (k * 2 <= lista.length) k *= 2;
    return lista.slice(0, k);
  }

  /* ---------------------------------------------------------------------
     1ª TEMPORADA · CLASIFICACIÓN CONTINENTAL
     --------------------------------------------------------------------- */
  var FORMATO_CLASI = {
    UEFA: { entran: 55, grupo: 5, pasan: 2, extra: 2 },
    CONCACAF: { entran: 32, grupo: 4, pasan: 2, extra: 0 },
    AFC: { entran: 44, grupo: 4, pasan: 2, extra: 2 },
    CAF: { entran: 54, grupo: 6, pasan: 2, extra: 6 },
    OFC: { entran: 12, grupo: 4, pasan: 2, extra: 2 }
  };
  function clasificacionContinental() {
    var out = { fase: 'clasificacion-continental', zonas: [], titulo: null };
    CONFS.forEach(function (conf) {
      var lista = naciones(conf);
      if (conf === 'CONMEBOL') {
        /* primera vuelta de las eliminatorias mundialistas: nueve fechas */
        out.zonas.push(conmebol(lista, 1, 'Eliminatorias · primera vuelta'));
        return;
      }
      var f = FORMATO_CLASI[conf];
      if (!f) return;
      var entran = lista.slice(0, Math.min(f.entran, lista.length - lista.length % f.grupo));
      if (entran.length < f.grupo * 2) return;
      var gs = juegaGrupos(reparte(entran, entran.length / f.grupo), true,
        'Clasificación ' + (COPA[conf] ? COPA[conf].name : conf));
      var clasi = pasan(gs, f.pasan, f.extra);
      out.zonas.push({
        conf: conf, nombre: 'Clasificación para la ' + (COPA[conf] ? COPA[conf].name : conf),
        comp: 'Clasificación ' + (COPA[conf] ? COPA[conf].name : conf),
        grupos: gs, clasificados: clasi
      });
    });
    return out;
  }

  /* la CONMEBOL juega una liguilla de todos contra todos a ida y vuelta:
     la primera vuelta un año y la segunda dos años después */
  function conmebol(lista, vuelta, nombre) {
    var st = global.World.state;
    st.conmebol = st.conmebol || null;
    if (vuelta === 1 || !st.conmebol) {
      st.conmebol = { table: Comp.newTable(lista), results: [], teams: lista };
    }
    var c = st.conmebol;
    var jornadas = Comp.roundRobin(lista, false);          /* 9 fechas */
    jornadas.forEach(function (jor, ji) {
      jor.forEach(function (p) {
        /* en la segunda vuelta se cambian los campos */
        var h = vuelta === 1 ? p[0] : p[1], a = vuelta === 1 ? p[1] : p[0];
        var r = juega(h, a, { quick: true, comp: 'Eliminatorias sudamericanas',
          ronda: 'Fecha ' + ((vuelta - 1) * 9 + ji + 1) });
        Comp.applyResult(c.table, h, a, r.score);
        c.results.push({ md: (vuelta - 1) * 9 + ji + 1, h: h, a: a, s: r.score });
      });
    });
    c.standings = Comp.sortTable(c.table);
    c.standings.forEach(function (r, i) { r.pos = i + 1; });
    return {
      conf: 'CONMEBOL', nombre: nombre, tabla: c.standings,
      comp: 'Eliminatorias sudamericanas',
      teams: c.teams, results: c.results,
      clasificados: c.standings.slice(0, 6).map(function (r) { return r.t; })
    };
  }

  /* ---------------------------------------------------------------------
     2ª TEMPORADA · COPA CONTINENTAL
     --------------------------------------------------------------------- */
  function copaContinental(clasificados) {
    var out = { fase: 'copa-continental', torneos: [], titulo: null };
    /* nadie juega dos copas continentales el mismo verano */
    var yaJuegan = {};
    CONFS.forEach(function (conf) {
      var k = COPA[conf];
      if (!k) return;
      /* De la clasificación salen los que ya están y, si faltan plazas, los
         mejores de la propia zona. Ninguna copa se llena con equipos de otro
         continente: la única que invita es la Copa América, y como en la de
         verdad los invitados son de la CONCACAF. Si aun así no salen las
         plazas, el torneo se juega con menos equipos. */
      var lista = ((clasificados && clasificados[conf]) || []).filter(function (t) {
        return !yaJuegan[t.s];
      });
      var dentro = {};
      lista.forEach(function (t) { dentro[t.s] = 1; });
      function completa(zona) {
        naciones(zona).forEach(function (t) {
          if (lista.length < k.size && !dentro[t.s] && !yaJuegan[t.s]) {
            lista.push(t); dentro[t.s] = 1;
          }
        });
      }
      completa(conf);
      /* la Copa América invita a dos y nada más: si se lleva media CONCACAF,
         la Copa Oro se queda sin nivel */
      (k.invitados || []).forEach(function (cod) {
        if (lista.length >= k.size || dentro[cod] || yaJuegan[cod]) return;
        var inv = (global.NATIONS || []).filter(function (n) { return n.s === cod; })[0];
        if (inv) { lista.push(inv); dentro[inv.s] = 1; }
      });
      lista = lista.slice(0, k.size);
      if (lista.length < 8) return;
      /* que cuadre en grupos de cuatro */
      var nG = Math.floor(lista.length / k.grupo);
      lista = lista.slice(0, nG * k.grupo);
      lista.forEach(function (t) { yaJuegan[t.s] = 1; });
      var gs = juegaGrupos(reparte(lista, nG), false, k.name);
      /* dos por grupo y, si hacen falta para cuadrar el cuadro, los mejores
         terceros: con 6 grupos entran 4 y con 3 grupos entran 2 */
      var clasi = pasan(gs, 2, nG === 6 ? 4 : nG === 3 ? 2 : 0);
      clasi = aPotencia(clasi);
      var c = cuadro(clasi, k.name);
      out.torneos.push({
        conf: conf, id: k.id, nombre: k.name, comp: k.name, grupos: gs, clasificados: clasi,
        rondas: c.rondas, campeon: c.campeon, finalista: c.finalista
      });
    });
    return out;
  }

  /* ---------------------------------------------------------------------
     3ª TEMPORADA · CLASIFICACIÓN MUNDIALISTA
     --------------------------------------------------------------------- */
  function clasificacionMundial() {
    var out = { fase: 'clasificacion-mundial', zonas: [], clasificados: [] };
    CONFS.forEach(function (conf) {
      var lista = naciones(conf);
      var plazas = PLAZAS_MUNDIAL[conf] || 1;
      if (conf === 'CONMEBOL') {
        var z = conmebol(lista, 2, 'Eliminatorias · segunda vuelta');
        z.clasificados = z.tabla.slice(0, plazas).map(function (r) { return r.t; });
        out.zonas.push(z);
        out.clasificados = out.clasificados.concat(z.clasificados);
        return;
      }
      var tam = conf === 'OFC' ? 4 : conf === 'CONCACAF' ? 4 : conf === 'UEFA' ? 5 : conf === 'CAF' ? 6 : 4;
      var nG = Math.max(2, Math.min(Math.floor(lista.length / tam), plazas * 2));
      var entran = lista.slice(0, nG * tam);
      if (entran.length < tam * 2) {
        var directos = lista.slice(0, plazas);
        out.zonas.push({ conf: conf, nombre: 'Clasificación mundialista', grupos: [], clasificados: directos });
        out.clasificados = out.clasificados.concat(directos);
        return;
      }
      var gs = juegaGrupos(reparte(entran, nG), true, 'Clasificación mundialista');
      /* primeros de grupo y, si hacen falta más, los mejores segundos */
      var primeros = pasan(gs, 1, 0);
      var clasi = primeros.slice(0, plazas);
      if (clasi.length < plazas) {
        var segundos = [];
        gs.forEach(function (g) { if (g.standings[1]) segundos.push(g.standings[1]); });
        segundos.sort(function (a, b) {
          return b.pts - a.pts || (b.gf - b.gc) - (a.gf - a.gc) || b.gf - a.gf;
        });
        clasi = clasi.concat(segundos.slice(0, plazas - clasi.length).map(function (r) { return r.t; }));
      }
      out.zonas.push({ conf: conf, nombre: 'Clasificación mundialista',
        comp: 'Clasificación mundialista', grupos: gs, clasificados: clasi });
      out.clasificados = out.clasificados.concat(clasi);
    });
    return out;
  }

  /* ---------------------------------------------------------------------
     4ª TEMPORADA · MUNDIAL
     --------------------------------------------------------------------- */
  function mundial(clasificados) {
    var lista = (clasificados || []).slice();
    if (lista.length < 48) {
      /* Si faltan (partida recién empezada) se completa respetando las
         plazas de cada zona: rellenar sólo por nivel deja un Mundial de
         europeos, sin un solo africano ni asiático. */
      var dentro = {}, cupo = {};
      lista.forEach(function (t) { dentro[t.s] = 1; cupo[t.conf] = (cupo[t.conf] || 0) + 1; });
      var resto = (global.NATIONS || []).slice()
        .sort(function (a, b) { return (b.ovr || 0) - (a.ovr || 0); })
        .filter(function (t) { return !dentro[t.s]; });
      resto.forEach(function (t) {
        var tope = PLAZAS_MUNDIAL[t.conf] || 0;
        if (lista.length < 48 && (cupo[t.conf] || 0) < tope) {
          lista.push(t); dentro[t.s] = 1; cupo[t.conf] = (cupo[t.conf] || 0) + 1;
        }
      });
      /* lo que sobre (las plazas de repesca), a los mejores que queden */
      resto.forEach(function (t) {
        if (lista.length < 48 && !dentro[t.s]) { lista.push(t); dentro[t.s] = 1; }
      });
    }
    lista = lista.slice(0, 48);
    var anfitrion = lista[Math.floor(Math.random() * lista.length)];
    var gs = juegaGrupos(reparte(lista, 12, true), false, 'Mundial');
    var clasi = pasan(gs, 2, 8);            /* 24 + 8 mejores terceros = 32 */
    clasi = aPotencia(clasi);
    var c = cuadro(clasi, 'Mundial');
    return {
      fase: 'mundial', nombre: 'Copa del Mundo', anfitrion: anfitrion, comp: 'Mundial',
      grupos: gs, clasificados: clasi,
      rondas: c.rondas, campeon: c.campeon, finalista: c.finalista
    };
  }

  /* ---------------------------------------------------------------------
     EL PARÓN DE CADA TEMPORADA
     --------------------------------------------------------------------- */
  var NOMBRE_FASE = {
    'clasificacion-continental': 'Clasificación continental',
    'copa-continental': 'Copa continental',
    'clasificacion-mundial': 'Clasificación mundialista',
    'mundial': 'Copa del Mundo'
  };

  /* qué toca este año (el ciclo se cuenta desde que empieza la partida) */
  function faseDe(ciclo) {
    return ['clasificacion-continental', 'copa-continental',
      'clasificacion-mundial', 'mundial'][ciclo % 4];
  }
  /* El calendario real manda: el Mundial cae en 2026, 2030, 2034... y las
     copas continentales dos años después. Se cuenta por año y no con un
     contador suelto, así nunca se corre de sitio. */
  var CICLO_ANIO = {
    2: 'mundial',                    /* 2026, 2030, 2034 */
    3: 'clasificacion-continental',  /* 2027, 2031 */
    0: 'copa-continental',           /* 2028, 2032 */
    1: 'clasificacion-mundial'       /* 2029, 2033 */
  };
  function faseDeAnio(anio) { return CICLO_ANIO[((anio % 4) + 4) % 4]; }
  /* el torneo se juega en el verano siguiente al cierre de la temporada */
  function anioDelVerano() {
    var st = global.World && global.World.state;
    return st ? st.year + 1 : 0;
  }
  function faseActual() { return faseDeAnio(anioDelVerano()); }

  function juegaTemporada() {
    var st = global.World.state;
    MIOS = []; MARCA = {}; ORDEN = {};
    st.seleccionCiclo = st.seleccionCiclo || 0;
    var fase = faseActual();
    if (global.Carrera && Carrera.activa()) Carrera.ajustaSeleccion();

    var res;
    if (fase === 'clasificacion-continental') {
      res = clasificacionContinental();
      st.clasificadosCopa = {};
      res.zonas.forEach(function (z) { st.clasificadosCopa[z.conf] = z.clasificados; });
    } else if (fase === 'copa-continental') {
      res = copaContinental(st.clasificadosCopa);
    } else if (fase === 'clasificacion-mundial') {
      res = clasificacionMundial();
      st.clasificadosMundial = res.clasificados;
    } else {
      res = mundial(st.clasificadosMundial);
    }
    res.anio = anioDelVerano();
    res.marcadores = MARCA;
    res.ordenRondas = ORDEN;
    res.nombreFase = NOMBRE_FASE[fase];
    res.miSeleccion = resumenMio(res, fase);
    res.misPartidos = MIOS.slice();
    st.seleccionCiclo++;
    st.seleccionUltimo = res;
    /* sólo se cambia de selección después de un Mundial */
    st.cambioSeleccion = (fase === 'mundial');
    var jj = (global.Carrera && Carrera.activa()) ? Carrera.jugador() : null;
    (st.seleccionHistorial = st.seleccionHistorial || []).push({
      anio: res.anio, fase: fase, nombre: res.nombreFase,
      campeon: campeonDe(res), mio: res.miSeleccion,
      pj: jj ? jj.temp.selPj : 0, g: jj ? jj.temp.selG : 0, a: jj ? jj.temp.selA : 0,
      seleccion: jj && global.Nac ? Nac.nombre(jj.nat) : '',
      nat: jj ? jj.nat : ''
    });
    /* Si su selección gana algo, al palmarés; pero sólo si estuvo en la
     lista: un título que ganaron otros mientras él se quedaba en casa no
     es suyo. */
    if (global.Carrera && Carrera.activa() && res.miSeleccion &&
        res.miSeleccion.campeon && res.miSeleccion.convocado) {
      var j = Carrera.jugador();
      j.palmares.push({ anio: res.anio, titulo: res.miSeleccion.torneo,
        club: nombreSel(j.nat), nat: j.nat, convocado: true });
    }
    return res;
  }

  function nombreSel(fifa) { return global.Nac ? Nac.nombre(fifa) : fifa; }
  function campeonDe(res) {
    if (res.campeon) return res.campeon.n;
    if (res.torneos) {
      return res.torneos.map(function (t) {
        return t.nombre + ': ' + (t.campeon ? t.campeon.n : '—');
      }).join(' · ');
    }
    return '';
  }

  /* cómo le fue a la selección del jugador */
  function resumenMio(res, fase) {
    if (!global.Carrera || !Carrera.activa()) return null;
    var j = Carrera.jugador();
    var sel = global.Nac ? Nac.seleccion(j.nat) : null;
    if (!sel) return null;
    var o = { seleccion: sel.n, convocado: !!j.sel.convocado, torneo: NOMBRE_FASE[fase], campeon: false };
    if (fase === 'mundial') {
      o.torneo = 'Copa del Mundo';
      o.campeon = res.campeon === sel;
      o.puesto = puestoEn(res, sel);
    } else if (fase === 'copa-continental') {
      var t = (res.torneos || []).filter(function (x) { return x.conf === sel.conf; })[0];
      if (t) {
        o.torneo = t.nombre;
        o.campeon = t.campeon === sel;
        o.puesto = puestoEn(t, sel);
      }
    } else {
      var z = (res.zonas || []).filter(function (x) { return x.conf === sel.conf; })[0];
      if (z) {
        o.torneo = z.nombre;
        o.clasificado = (z.clasificados || []).indexOf(sel) >= 0;
      }
    }
    return o;
  }
  function puestoEn(t, sel) {
    if (t.campeon === sel) return 'campeón';
    if (t.finalista === sel) return 'subcampeón';
    var r = (t.rondas || []);
    for (var i = r.length - 1; i >= 0; i--) {
      var esta = r[i].ties.some(function (x) { return x.a === sel || x.b === sel; });
      if (esta) return 'eliminado en ' + r[i].name.toLowerCase();
    }
    return 'fase de grupos';
  }

  global.SelCarrera = {
    juegaTemporada: juegaTemporada, faseDe: faseDe, faseDeAnio: faseDeAnio,
    faseActual: faseActual, anioDelVerano: anioDelVerano, NOMBRE_FASE: NOMBRE_FASE,
    miSeleccion: miSeleccion,
    COPA: COPA, naciones: naciones
  };
})(window);
