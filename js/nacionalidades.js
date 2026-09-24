/* =========================================================================
   NACIONALIDADES
   Cada jugador lleva su país. Los datos reales no traen la nacionalidad, así
   que se reparte a partir del país del club: la mayoría son de casa y el
   resto extranjeros, con el porcentaje que tiene de verdad cada liga y con
   el origen que cabe esperar (a un club inglés le llegan brasileños y
   senegaleses; a uno boliviano, argentinos).

   El reparto es fijo: el mismo jugador saca siempre el mismo país, se
   guarde la partida o no, porque sale de una semilla con su nombre.

     Nac.de(jugador, equipo)   -> 'ARG'
     Nac.bandera('ARG', 18)    -> <img ...>
     Nac.nombre('ARG')         -> 'Argentina'
     Nac.repartePorTodos()     -> pone p[4] a toda la base
   ========================================================================= */
(function (global) {
  'use strict';

  /* ---------------------------------------------------------------------
     El país de cada liga, en código FIFA
     --------------------------------------------------------------------- */
  var REAL = {};           /* nombre del jugador -> código FIFA, de verdad */
  var PAIS_DE_LIGA = {};   /* id de liga -> código FIFA */
  var CONF_DE_LIGA = {};   /* id de liga -> confederación */
  var NAC = {};            /* código FIFA -> selección */
  var POR_CONF = {};       /* confederación -> selecciones */

  function llave(n) {
    return String(n).toLowerCase().replace(/\s+/g, ' ').trim();
  }
  function arranca() {
    /* los que existen de verdad llevan su país real */
    var tabla = global.NAT_REAL || {};
    Object.keys(tabla).forEach(function (code) {
      tabla[code].split('|').forEach(function (nom) { if (nom) REAL[llave(nom)] = code; });
    });
    (global.NATIONS || []).forEach(function (n) {
      NAC[n.s] = n;
      (POR_CONF[n.conf] = POR_CONF[n.conf] || []).push(n);
    });
    /* el archivo de bandera enlaza el país de la liga con su selección */
    var porArchivo = {};
    Object.keys(global.FLAG_FILE || {}).forEach(function (fifa) {
      porArchivo[global.FLAG_FILE[fifa]] = fifa;
    });
    (global.COUNTRIES || []).forEach(function (c) {
      var arch = (global.COUNTRY_FLAG_FILE || {})[c.id];
      var fifa = arch ? porArchivo[arch] : null;
      (c.leagues || c.have || []).forEach(function (l) {
        if (fifa) PAIS_DE_LIGA[l] = fifa;
        CONF_DE_LIGA[l] = c.conf;
      });
    });
  }

  /* ---------------------------------------------------------------------
     Cuántos extranjeros tiene cada liga
     --------------------------------------------------------------------- */
  var EXTRANJEROS = {
    premier: 0.65, championship: 0.42, league1: 0.28, league2: 0.22,
    seriea: 0.60, serieb: 0.33, laliga: 0.42, laliga2: 0.26,
    bundesliga: 0.55, bundesliga2: 0.40, ligue1: 0.55, ligue2: 0.35,
    portugal: 0.60, portugal2: 0.45, eredivisie: 0.48, eredivisie2: 0.30,
    belgica: 0.55, turquia: 0.50, grecia: 0.48, escocia: 0.45,
    suiza: 0.55, austria: 0.45, rusia: 0.35, ucrania: 0.35,
    mls: 0.52, ligamx: 0.42, saudi: 0.45, catar: 0.55, emiratos: 0.55,
    china: 0.25, japon: 0.18, corea: 0.18, australia: 0.35,
    brasileirao: 0.22, brasileirao2: 0.12,
    /* del Federal A y la B Metropolitana para abajo no juega un extranjero:
       son categorías de ascenso regional, todos del país */
    argentina: 0.14, argentina2: 0.08, argentina3: 0, federala: 0,
    argentina4: 0, federalam: 0,
    uruguay: 0.14, chile: 0.25, colombia: 0.16, ecuador: 0.28,
    peru: 0.28, paraguay: 0.30, bolivia: 0.35, venezuela: 0.25
  };
  /* Categorías de ascenso regional: ahí no juega un extranjero ni aunque el
     dato diga otra cosa. Manda la liga, no la ficha. */
  var SOLO_LOCALES = {
    federala: 1, argentina3: 1, argentina4: 1, federalam: 1
  };
  function tasa(lid) {
    if (EXTRANJEROS[lid] != null) return EXTRANJEROS[lid];
    var conf = CONF_DE_LIGA[lid];
    if (conf === 'UEFA') return 0.38;
    if (conf === 'CONMEBOL') return 0.20;
    if (conf === 'CONCACAF') return 0.40;
    if (conf === 'AFC') return 0.35;
    if (conf === 'CAF') return 0.20;
    return 0.30;
  }

  /* De dónde salen los extranjeros de cada confederación. Suman 1. */
  var ORIGEN = {
    UEFA:     { UEFA: 0.58, CONMEBOL: 0.16, CAF: 0.16, CONCACAF: 0.05, AFC: 0.04, OFC: 0.01 },
    CONMEBOL: { CONMEBOL: 0.86, UEFA: 0.06, CAF: 0.03, CONCACAF: 0.04, AFC: 0.01, OFC: 0 },
    CONCACAF: { CONCACAF: 0.42, CONMEBOL: 0.34, UEFA: 0.14, CAF: 0.08, AFC: 0.02, OFC: 0 },
    AFC:      { AFC: 0.40, CONMEBOL: 0.24, CAF: 0.16, UEFA: 0.17, CONCACAF: 0.02, OFC: 0.01 },
    CAF:      { CAF: 0.72, CONMEBOL: 0.08, UEFA: 0.14, CONCACAF: 0.03, AFC: 0.03, OFC: 0 },
    OFC:      { OFC: 0.50, AFC: 0.14, UEFA: 0.20, CONMEBOL: 0.10, CONCACAF: 0.04, CAF: 0.02 }
  };

  /* ---------------------------------------------------------------------
     Semilla fija: el mismo nombre saca siempre el mismo país
     --------------------------------------------------------------------- */
  function semilla(s) {
    var h = 2166136261;
    for (var i = 0; i < s.length; i++) {
      h ^= s.charCodeAt(i);
      h = (h * 16777619) >>> 0;
    }
    return h;
  }
  function azar(h) {
    /* xorshift de 32 bits: devuelve una función con su propia cuenta */
    var x = h || 1;
    return function () {
      x ^= x << 13; x >>>= 0;
      x ^= x >> 17;
      x ^= x << 5; x >>>= 0;
      return x / 4294967296;
    };
  }

  /* una selección de esa confederación, más probable cuanto mejor sea:
     los países que exportan jugadores son los que tienen buen fútbol */
  /* El mercado latino: los diez de Conmebol más los hispanohablantes de
     Concacaf. Un club sudamericano no ficha fuera de aquí. */
  var CONCACAF_ES = ['MEX', 'CRC', 'HON', 'GUA', 'PAN', 'SLV', 'NCA', 'CUB', 'DOM', 'PUR'];
  function esLatino(fifa) {
    var s = NAC[fifa];
    if (!s) return false;
    return s.conf === 'CONMEBOL' || CONCACAF_ES.indexOf(fifa) >= 0;
  }
  function latinos() {
    if (!latinos.lista) {
      latinos.lista = (POR_CONF.CONMEBOL || []).concat(
        (POR_CONF.CONCACAF || []).filter(function (n) { return CONCACAF_ES.indexOf(n.s) >= 0; }));
    }
    return latinos.lista;
  }

  /* uno de la lista, pesando por el nivel de la selección */
  function unoDe(lista, r) {
    if (!lista || !lista.length) return null;
    var pesos = lista.map(function (n) {
      return Math.pow(Math.max(1, (n.ovr || 60) - 42), 2.1);
    });
    var tot = pesos.reduce(function (a, b) { return a + b; }, 0);
    var v = r() * tot;
    for (var i = 0; i < lista.length; i++) {
      v -= pesos[i];
      if (v <= 0) return lista[i].s;
    }
    return lista[lista.length - 1].s;
  }
  function seleccionDe(conf, r) {
    var lista = POR_CONF[conf] || [];
    if (!lista.length) return null;
    var pesos = lista.map(function (n) {
      return Math.pow(Math.max(1, (n.ovr || 60) - 42), 2.1);
    });
    var tot = pesos.reduce(function (a, b) { return a + b; }, 0);
    var v = r() * tot;
    for (var i = 0; i < lista.length; i++) {
      v -= pesos[i];
      if (v <= 0) return lista[i].s;
    }
    return lista[lista.length - 1].s;
  }

  /* ---------------------------------------------------------------------
     La nacionalidad de un jugador
     --------------------------------------------------------------------- */
  function calcula(p, equipo) {
    var lid = equipo && equipo.leagueId;
    var casa = PAIS_DE_LIGA[lid];
    var conf = CONF_DE_LIGA[lid] || 'UEFA';
    var real = REAL[llave(p[0])];
    /* Si el nombre es el de un internacional de verdad, esa es su nacionalidad
       y no se discute: Saúl Ñíguez es español juegue donde juegue. Sólo se
       desconfía en dos casos: un futbolista inventado al que le tocó por azar el
       nombre de un internacional, y las ligas donde prácticamente no hay
       extranjeros, donde un nombre repetido es casi seguro un homónimo. */
    if (real && real !== casa) {
      if (p.gen && conf === 'CONMEBOL' && !esLatino(real)) real = null;
      else if (tasa(lid) < 0.06) real = null;   /* liga sin extranjeros: homónimo */
    }
    if (real) return real;
    /* De un futbolista del que no hay dato, lo más probable es que sea del
       país de su club. Antes se sorteaba un extranjero según la liga y salían
       disparates: es preferible acertar lo común que inventar lo raro. */
    if (casa && !p.gen) return casa;
    var r = azar(semilla(p[0] + '|' + (equipo ? equipo.n : '') + '|' + p[1]));
    if (casa && r() > tasa(lid)) return casa;

    /* en Sudamérica el extranjero es latino, nunca europeo */
    if (conf === 'CONMEBOL') return unoDe(latinos(), r) || casa || 'ARG';

    var mezcla = ORIGEN[conf] || ORIGEN.UEFA;
    var v = r(), acc = 0, elegida = null;
    Object.keys(mezcla).forEach(function (c) {
      if (elegida) return;
      acc += mezcla[c];
      if (v <= acc) elegida = c;
    });
    var s = seleccionDe(elegida || conf, r);
    /* sin dato fiable, la del club antes que una europea al azar */
    if (!CONF_DE_LIGA[lid] && casa) return casa;
    /* si le tocó su propia confederación puede salirle su mismo país: se
       admite, un extranjero de la casa no existe pero tampoco molesta */
    return s || casa || 'ESP';
  }

  /* la guarda en el propio jugador (p[4]) para no recalcularla nunca más */
  function de(p, equipo) {
    if (!p) return '';
    var soloLocal = equipo && SOLO_LOCALES[equipo.leagueId] ? PAIS_DE_LIGA[equipo.leagueId] : null;
    if (soloLocal) { p[4] = soloLocal; return p[4]; }
    if (p[4]) return p[4];
    p[4] = calcula(p, equipo);
    return p[4];
  }

  function repartePorTodos() {
    var n = 0;
    Object.keys(global.LEAGUES || {}).forEach(function (id) {
      if (id === '__nations__') return;
      global.LEAGUES[id].teams.forEach(function (t) {
        /* se pasa por todos: los de las ligas sin extranjeros hay que
           revisarlos aunque ya traigan nacionalidad puesta */
        (t.p || []).forEach(function (p) { if (!p[4]) n++; de(p, t); });
      });
    });
    /* los internacionales llevan la de su selección */
    ((global.LEAGUES || {}).__nations__ ? global.LEAGUES.__nations__.teams : (global.NATIONS || []))
      .forEach(function (sel) {
        (sel.p || []).forEach(function (p) { if (!p[4]) { p[4] = sel.s; n++; } });
      });
    return n;
  }

  /* ---------------------------------------------------------------------
     Pintado
     --------------------------------------------------------------------- */
  function archivo(fifa) { return (global.FLAG_FILE || {})[fifa] || null; }
  function bandera(fifa, alto) {
    var f = archivo(fifa);
    var h = alto || 12;
    if (!f) return '';
    return '<img class="natflag" src="logos/paises-svg/' + f + '.svg" alt="' +
      nombre(fifa) + '" title="' + nombre(fifa) + '" height="' + h + '" ' +
      'onerror="this.onerror=null;this.src=\'logos/paises/' + f + '.png\'">';
  }
  function nombre(fifa) { return (NAC[fifa] && NAC[fifa].n) || fifa || ''; }
  function seleccion(fifa) { return NAC[fifa] || null; }
  function paisDeLiga(lid) { return PAIS_DE_LIGA[lid] || null; }
  function confDeLiga(lid) { return CONF_DE_LIGA[lid] || null; }
  /* todas las ligas de un país, para las ofertas de inicio de carrera */
  function ligasDe(fifa) {
    return Object.keys(PAIS_DE_LIGA).filter(function (l) { return PAIS_DE_LIGA[l] === fifa; });
  }

  global.Nac = {
    arranca: arranca, de: de, calcula: calcula, repartePorTodos: repartePorTodos,
    bandera: bandera, nombre: nombre, seleccion: seleccion, archivo: archivo,
    paisDeLiga: paisDeLiga, confDeLiga: confDeLiga, ligasDe: ligasDe,
    esLatino: esLatino,
    get naciones() { return NAC; }
  };
})(window);
