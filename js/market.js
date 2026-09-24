/* =========================================================================
   MERCADO DE PASES
   Valor de los jugadores, presupuesto de los clubes, taquilla de cada
   partido en casa y resolución de los traspasos.

   Todo en euros. Las cifras salen calibradas contra valores reales: un
   crack de 91 ronda los 180 M, uno de 78 los 11 M y uno de 60 los 230 mil.
   ========================================================================= */
(function (global) {
  'use strict';

  /* ---------------------------------------------------------------------
     REGLAS DE PLANTILLA
     --------------------------------------------------------------------- */
  var MIN_PLANTILLA = 16, MAX_PLANTILLA = 30;
  var MINIMOS = { GK: 1, DEF: 4, MID: 5, ATT: 3 };
  var FICHAJES_MAX = 4, VENTAS_MAX = 4;

  function linea(p) {
    var g = global.Engine ? global.Engine.group(p[1]) : null;
    return g || 'MID';
  }
  function cuenta(equipo) {
    var c = { GK: 0, DEF: 0, MID: 0, ATT: 0, total: 0 };
    (equipo.p || []).forEach(function (p) { c[linea(p)]++; c.total++; });
    return c;
  }
  /* ¿se puede sacar a este jugador sin dejar al equipo corto? */
  function puedeSalir(equipo, jugador) {
    /* al jugador de la carrera no lo vende nadie a sus espaldas: sus
       traspasos los decide él al acabar la temporada */
    if (jugador && jugador.yo) return "decide su futuro al final de la temporada";
    var c = cuenta(equipo);
    if (c.total - 1 < MIN_PLANTILLA) return 'quedaría con menos de ' + MIN_PLANTILLA + ' jugadores';
    var l = linea(jugador);
    if (c[l] - 1 < MINIMOS[l]) return 'no puede bajar de ' + MINIMOS[l] + ' ' + nombreLinea(l);
    return null;
  }
  function puedeEntrar(equipo) {
    var c = cuenta(equipo);
    if (c.total + 1 > MAX_PLANTILLA) return 'la plantilla ya tiene ' + MAX_PLANTILLA + ' jugadores';
    return null;
  }
  function nombreLinea(l) {
    return l === 'GK' ? 'arqueros' : l === 'DEF' ? 'defensores'
      : l === 'MID' ? 'mediocampistas' : 'delanteros';
  }
  /* qué línea necesita el equipo con más urgencia (null si está completo) */
  function falta(equipo) {
    var c = cuenta(equipo), peor = null, dif = 0;
    ['GK', 'DEF', 'MID', 'ATT'].forEach(function (l) {
      var d = MINIMOS[l] - c[l];
      if (d > dif) { dif = d; peor = l; }
    });
    if (peor) return peor;
    if (c.total < MIN_PLANTILLA) {
      /* el que esté más justo respecto a su mínimo */
      var mejor = null, margen = 99;
      ['GK', 'DEF', 'MID', 'ATT'].forEach(function (l) {
        var m = c[l] - MINIMOS[l];
        if (m < margen) { margen = m; mejor = l; }
      });
      return mejor;
    }
    return null;
  }

  /* ---------------------------------------------------------------------
     VALOR DE MERCADO
     --------------------------------------------------------------------- */
  /* la curva por valoración: exponencial, con freno arriba del todo para
     que un 94 no se dispare a cifras imposibles */
  function porNivel(ovr) {
    var o = Math.min(ovr, 88) + Math.max(0, ovr - 88) * 0.55;
    return 2e6 * Math.exp(0.214 * (o - 70));
  }
  /* la edad pesa mucho: un 32 vale una fracción de lo que valía a los 25 */
  function porEdad(edad) {
    if (edad <= 18) return 1.05;
    if (edad <= 21) return 1.22;
    if (edad <= 24) return 1.20;
    if (edad <= 26) return 1.00;
    if (edad === 27) return 0.92;
    if (edad === 28) return 0.80;
    if (edad === 29) return 0.66;
    if (edad === 30) return 0.52;
    if (edad === 31) return 0.40;
    if (edad === 32) return 0.29;
    if (edad === 33) return 0.20;
    if (edad === 34) return 0.13;
    return 0.08;
  }
  /* Hasta dónde puede llegar. Sale del nombre, así que no hace falta
     guardarlo y es el mismo en toda la partida. */
  function techo(p) {
    return global.Fill && Fill.potencial ? Fill.potencial(p) : (p ? p[2] : 0);
  }
  /* Un chaval con recorrido: joven y con bastante margen por delante. */
  function promesa(p) {
    if (!p || (p[3] || 26) > 23) return 0;
    var m = techo(p) - p[2];
    return m >= 6 ? m : 0;
  }
  function valor(jugador) {
    if (!jugador) return 0;
    var v = porNivel(jugador[2]) * porEdad(jugador[3] || 26);
    /* por la promesa se paga por adelantado: media carrera por delante */
    var pr = promesa(jugador);
    if (pr) v *= 1 + Math.min(1.6, pr * 0.11);
    return redondea(v);
  }
  function redondea(v) {
    if (v >= 5e7) return Math.round(v / 1e6) * 1e6;
    if (v >= 5e6) return Math.round(v / 1e5) * 1e5;
    if (v >= 2e5) return Math.round(v / 1e4) * 1e4;
    return Math.max(10000, Math.round(v / 1000) * 1000);
  }
  function dinero(v) {
    if (v >= 1e6) {
      var m = v / 1e6;
      return (m >= 100 ? Math.round(m) : m.toFixed(m >= 10 ? 0 : 1)).toString().replace('.', ',') + ' M €';
    }
    if (v >= 1000) return Math.round(v / 1000) + ' mil €';
    return Math.round(v) + ' €';
  }

  /* ---------------------------------------------------------------------
     DINERO DE CADA LIGA
     Cuánto se mueve en cada sitio: entrada media y músculo para fichar.
     --------------------------------------------------------------------- */
  var LIGA = {
    premier: [58, 1.00], championship: [24, 0.16], league1: [14, 0.04], league2: [12, 0.02],
    laliga: [38, 0.62], laliga2: [18, 0.08],
    seriea: [34, 0.58], serieb: [16, 0.07],
    bundesliga: [30, 0.60], bundesliga2: [17, 0.09],
    ligue1: [28, 0.42], ligue2: [14, 0.05],
    portugal: [16, 0.20], portugal2: [8, 0.03],
    eredivisie: [24, 0.20], eredivisie2: [10, 0.03],
    belgica: [21, 0.13], turquia: [14, 0.16], grecia: [14, 0.08], escocia: [22, 0.08],
    rusia: [14, 0.16], ucrania: [9, 0.07], austria: [20, 0.09], suiza: [24, 0.09],
    chequia: [11, 0.05], dinamarca: [20, 0.09], noruega: [20, 0.08], suecia: [18, 0.07],
    polonia: [12, 0.06], croacia: [9, 0.05], serbia: [7, 0.04], rumania: [8, 0.04],
    hungria: [8, 0.03], israel: [12, 0.05], chipre: [9, 0.04],
    argentina: [9, 0.09], argentina2: [5, 0.02], argentina3: [3, 0.005], federala: [2, 0.003],
    brasileirao: [11, 0.16], brasileiraob: [6, 0.03],
    colombia: [6, 0.04], chile: [7, 0.04], uruguay: [6, 0.03], paraguay: [6, 0.03],
    peru: [5, 0.02], ecuador: [6, 0.03], bolivia: [4, 0.015], venezuela: [4, 0.015],
    mls: [32, 0.22], ligamx: [18, 0.20], otrosconcacaf: [6, 0.03],
    saudi: [14, 0.55], japon: [22, 0.10], corea: [14, 0.07], china: [14, 0.12],
    australia: [16, 0.06], otrosafc: [7, 0.06],
    egipto: [5, 0.05], marruecos: [5, 0.04], sudafrica: [8, 0.05], otroscaf: [4, 0.03],
    otrosofc: [3, 0.004]
  };
  function ligaDe(id) { return LIGA[id] || [6, 0.02]; }

  /* ---------------------------------------------------------------------
     ESTADIO Y TAQUILLA
     --------------------------------------------------------------------- */
  function estadio(equipo) {
    var mapa = global.STADIUMS || {};
    var e = mapa[(equipo.leagueId || '') + '|' + equipo.n];
    if (e && e.cap) return e;
    /* sin dato: se estima por el nivel del club y el tamaño de su liga */
    var l = ligaDe(equipo.leagueId);
    var base = 2500 + l[1] * 42000;
    var k = Math.pow(1.055, (equipo.ovr || 65) - 62);
    return { est: e && e.est ? e.est : '', cap: Math.round(Math.max(1200, Math.min(85000, base * k)) / 500) * 500, estimada: true };
  }
  /* lo que deja un partido en casa: entradas vendidas por el precio medio */
  function taquilla(equipo, rival) {
    var l = ligaDe(equipo.leagueId);
    var cap = estadio(equipo).cap;
    var tiron = 0.52 + Math.min(0.34, Math.max(0, ((equipo.ovr || 65) - 62) * 0.018));
    if (rival && rival.ovr > (equipo.ovr || 65) + 3) tiron = Math.min(0.97, tiron + 0.09);
    return Math.round(cap * tiron * l[0]);
  }

  /* ---------------------------------------------------------------------
     PRESUPUESTO
     Una parte de lo que mueve la liga, escalada por el tamaño del club.
     --------------------------------------------------------------------- */
  function presupuesto(equipo) {
    var l = ligaDe(equipo.leagueId);
    var base = l[1] * 120e6;
    var k = Math.pow(1.17, (equipo.ovr || 65) - mediaLiga(equipo.leagueId));
    var taq = taquilla(equipo) * 17;
    return redondea(Math.max(60000, base * k * 0.55 + taq * 0.6));
  }
  var _medias = {};
  function mediaLiga(id) {
    if (_medias[id] != null) return _medias[id];
    var lg = (global.LEAGUES || {})[id];
    if (!lg || !lg.teams.length) return 65;
    var s = 0;
    lg.teams.forEach(function (t) { s += t.ovr || 65; });
    return (_medias[id] = s / lg.teams.length);
  }
  function olvidaMedias() { _medias = {}; }

  /* ---------------------------------------------------------------------
     GEOGRAFÍA DE LOS TRASPASOS
     Un europeo no se va a Sudamérica, y un asiático tampoco. Sólo algún
     grande de Brasil consigue traer gente de fuera, y con mucha suerte.
     --------------------------------------------------------------------- */
  var CONF_DE_LIGA = null;
  function confDe(id) {
    if (!CONF_DE_LIGA) {
      CONF_DE_LIGA = {};
      (global.COUNTRIES || []).forEach(function (c) {
        (c.leagues || []).forEach(function (l) { CONF_DE_LIGA[l] = c.conf; });
      });
    }
    return CONF_DE_LIGA[id] || 'UEFA';
  }
  /* de dónde sale -> a dónde va */
  var GEO = {
    UEFA:      { UEFA: 1.00, CONMEBOL: 0.05, CONCACAF: 0.22, AFC: 0.30, CAF: 0.10, OFC: 0.04 },
    CONMEBOL:  { UEFA: 0.95, CONMEBOL: 1.00, CONCACAF: 0.60, AFC: 0.35, CAF: 0.08, OFC: 0.05 },
    CONCACAF:  { UEFA: 0.55, CONMEBOL: 0.35, CONCACAF: 1.00, AFC: 0.25, CAF: 0.06, OFC: 0.06 },
    AFC:       { UEFA: 0.45, CONMEBOL: 0.04, CONCACAF: 0.20, AFC: 1.00, CAF: 0.08, OFC: 0.25 },
    CAF:       { UEFA: 0.70, CONMEBOL: 0.05, CONCACAF: 0.18, AFC: 0.45, CAF: 1.00, OFC: 0.05 },
    OFC:       { UEFA: 0.35, CONMEBOL: 0.08, CONCACAF: 0.20, AFC: 0.40, CAF: 0.05, OFC: 1.00 }
  };
  /* los pocos de Brasil capaces de traer a alguien de otro continente */
  function grandeDeBrasil(equipo) {
    return equipo.leagueId === 'brasileirao' && (equipo.ovr || 0) >= 74;
  }
  function factorGeo(vende, compra) {
    var a = confDe(vende.leagueId), b = confDe(compra.leagueId);
    var f = (GEO[a] && GEO[a][b] != null) ? GEO[a][b] : 0.2;
    if (b === 'CONMEBOL' && a !== 'CONMEBOL' && grandeDeBrasil(compra)) f = Math.max(f, 0.18);
    return f;
  }

  /* ---------------------------------------------------------------------
     ¿ACEPTA EL TRASPASO?
     --------------------------------------------------------------------- */
  /* cuanto mejor es el jugador, más difícil es llevárselo */
  function porValoracion(ovr) {
    return Math.max(0.03, Math.min(0.92, 1 / (1 + Math.exp((ovr - 74) * 0.23))));
  }
  function pedido(jugador, vende) {
    var v = valor(jugador);
    /* un club con dinero no tiene prisa por vender */
    var l = ligaDe(vende.leagueId);
    return redondea(v * (1.12 + Math.min(0.5, l[1] * 0.45)));
  }

  /* probabilidad de que salga bien, entre 0 y 1 */
  function opciones(jugador, vende, compra, oferta) {
    if (!jugador || !vende || !compra) return 0;
    var p = porValoracion(jugador[2]);

    /* el dinero: pagar lo que piden es lo normal, pasarse ayuda mucho */
    var pide = pedido(jugador, vende);
    var r = oferta / Math.max(1, pide);
    var fDinero = r >= 1 ? Math.min(2.6, 1 + (r - 1) * 1.5) : Math.max(0.03, Math.pow(r, 3.2));
    p *= fDinero;

    /* el escaparate: nadie baja de categoría por gusto */
    var salto = (compra.ovr || 65) - (vende.ovr || 65);
    p *= salto >= 0 ? (1 + Math.min(0.9, salto * 0.055)) : Math.max(0.12, 1 + salto * 0.075);

    /* y el dinero de la liga de destino también tira */
    p *= 0.72 + Math.min(0.9, ligaDe(compra.leagueId)[1] * 0.85);

    /* la geografía */
    p *= factorGeo(vende, compra);

    /* Si al que vende le deja por debajo del mínimo de plantilla, no lo
       suelta ni loco. Si sólo le deja justo en una línea, lo piensa: sabe que
       en el mismo mercado va a fichar un recambio. */
    var freno = puedeSalir(vende, jugador);
    if (freno) p *= /plantilla|jugadores/.test(freno) ? 0.02 : 0.5;

    return Math.max(0, Math.min(0.97, p));
  }


  /* ---------------------------------------------------------------------
     EL MERCADO DE TODOS LOS CLUBES
     Cada club tiene que vender al menos uno y fichar al menos uno. Se hace
     por confederación: los traspasos entre continentes son la excepción,
     no la regla, así que casi todo se mueve dentro de casa.
     --------------------------------------------------------------------- */
  function azar() { return Math.random(); }
  function mezcla(a) {
    var r = a.slice();
    for (var i = r.length - 1; i > 0; i--) {
      var j = Math.floor(azar() * (i + 1)), t = r[i]; r[i] = r[j]; r[j] = t;
    }
    return r;
  }

  /* a quién deja salir un club: el que menos falta le hace */
  function prescindibles(equipo, cuantos) {
    var lista = (equipo.p || []).map(function (p, i) {
      var l = linea(p);
      var estorbo = (p[3] >= 31 ? 14 : 0) + (p[3] >= 34 ? 12 : 0);
      /* Al chaval que apunta no se le suelta: antes salía él, porque era
         el peor de la plantilla, y los clubes se deshacían justo de la
         gente que los iba a sostener diez años. */
      var joya = promesa(p) * 3;
      /* el peor de su línea sale antes, y los veteranos más todavía */
      return { p: p, i: i, l: l, peso: -p[2] + estorbo - joya };
    });
    var c = cuenta(equipo);
    lista = lista.filter(function (x) { return c[x.l] - 1 >= MINIMOS[x.l]; });
    lista.sort(function (a, b) { return b.peso - a.peso; });
    return lista.slice(0, cuantos || 1);
  }

  /* A una liga sudamericana no llega un europeo: sus clubes sólo fichan
     latinoamericanos. Vale para el que compra, no para el que vende: de
     Sudamérica sí se va gente a Europa. */
  function fichable(equipo, jug) {
    if (confDe(equipo.leagueId) !== 'CONMEBOL') return true;
    if (!global.Nac) return true;
    var nat = jug[4] || Nac.de(jug, equipo);
    return !nat || Nac.esLatino(nat);
  }

  /* ¿le viene bien este jugador al club? */
  function interesa(equipo, jug) {
    var c = cuenta(equipo);
    if (c.total >= MAX_PLANTILLA) return 0;
    var l = linea(jug);
    var falta1 = MINIMOS[l] - c[l];
    if (falta1 > 0) return 3;                       /* lo necesita sí o sí */
    if (c.total < MIN_PLANTILLA) return 2;
    /* El peor titular de esa línea. Se busca a mano en vez de filtrar y
       ordenar la plantilla entera: esto se llama cientos de miles de
       veces por mercado y el sort se comía el reloj. */
    var tope = MINIMOS[l], mejores = [], hoy = 0, lista = equipo.p || [];
    for (var z = 0; z < lista.length; z++) {
      if (linea(lista[z]) !== l) continue;
      var v2 = lista[z][2], w = mejores.length;
      while (w > 0 && mejores[w - 1] < v2) w--;
      if (w < tope) {
        mejores.splice(w, 0, v2);
        if (mejores.length > tope) mejores.pop();
      }
    }
    if (mejores.length) hoy = mejores[mejores.length - 1];
    if (jug[2] > hoy) return 1;                     /* mejora lo que tiene */
    /* Y si todavía no lo mejora pero va a hacerlo: un club sabe fichar
       para dentro de tres años, no sólo para el domingo. */
    if (promesa(jug) && techo(jug) > hoy + 2) return 1;
    return 0;
  }

  function quita(equipo, jug) {
    var i = (equipo.p || []).indexOf(jug);
    if (i >= 0) equipo.p.splice(i, 1);
  }
  function mete(equipo, jug) {
    equipo.p = equipo.p || [];
    equipo.p.push(jug);
  }

  /* Mueve el mercado entero. Devuelve el resumen de lo que ha pasado.
     'protegido' es el club del usuario: sus fichajes los decide él. */
  function correrMercado(opts) {
    opts = opts || {};
    var resumenMio = null;
    olvidaMedias();
    var LG = global.LEAGUES || {};
    var protegido = opts.protegido || null;

    /* ---- 1. todos los clubes, con su dinero ---- */
    var clubes = [], elMio = null;
    Object.keys(LG).forEach(function (id) {
      if (id === '__nations__') return;
      LG[id].teams.forEach(function (t) {
        if (t === protegido) {
          /* el club del usuario no compite con los demás, pero si él no ha
             movido nada el club le resuelve el mínimo */
          if (opts.minimoProtegido) {
            elMio = { t: t, caja: opts.caja != null ? opts.caja : presupuesto(t),
              entran: [], salen: [], conf: confDe(id), mio: true };
          }
          return;
        }
        clubes.push({ t: t, caja: presupuesto(t), entran: [], salen: [], conf: confDe(id) });
      });
    });
    var porEquipo = {};
    clubes.forEach(function (c) { porEquipo[c.t.n + '@' + c.t.leagueId] = c; });
    /* Los clubes de cada confederación, barajados UNA vez. Antes se
       filtraban y ordenaban los mil doscientos en cada venta: el mercado
       entero tardaba tres cuartos de minuto. */
    var clubesConf = {}, vueltaConf = {};
    clubes.forEach(function (c) { (clubesConf[c.conf] = clubesConf[c.conf] || []).push(c); });
    Object.keys(clubesConf).forEach(function (k) {
      clubesConf[k] = mezcla(clubesConf[k]); vueltaConf[k] = 0;
    });

    /* ---- 2. cada club pone a alguien en la lista ---- */
    var bolsa = [];
    clubes.forEach(function (c) {
      var n = 2 + (azar() < 0.55 ? 1 : 0) + (azar() < 0.25 ? 1 : 0);
      prescindibles(c.t, n).forEach(function (x) {
        bolsa.push({ jug: x.p, de: c, precio: pedido(x.p, c.t), linea: x.l });
      });
    });

    /* ---- 3. los clubes compran, los mejores primero ---- */
    var movimientos = [];
    var compradores = clubes.slice().sort(function (a, b) { return b.caja - a.caja; });
    var porConf = {};
    bolsa.forEach(function (o) { (porConf[o.de.conf] = porConf[o.de.conf] || []).push(o); });
    /* Se ordenan por lo que VAN A VALER, no por lo que valen hoy: si se
       ordena por la media de ahora, el chaval de diecisiete queda el
       último de una lista de cuatrocientos y ningún grande llega a verlo. */
    function atractivo(j) { return Math.max(j[2], techo(j) - 4); }
    Object.keys(porConf).forEach(function (k) {
      porConf[k].sort(function (a, b) { return atractivo(b.jug) - atractivo(a.jug); });
    });

    function cerrar(o, comp, precio) {
      quita(o.de.t, o.jug);
      mete(comp.t, o.jug);
      comp.caja -= precio;
      o.de.caja += precio;
      comp.entran.push({ j: o.jug, de: o.de.t, precio: precio });
      o.de.salen.push({ j: o.jug, a: comp.t, precio: precio });
      o.vendido = true;
      movimientos.push({ j: o.jug, de: o.de.t, a: comp.t, precio: precio });
    }

    compradores.forEach(function (comp) {
      var tope = 1 + (comp.caja > 8e6 ? 1 : 0) + (azar() < 0.5 ? 1 : 0) + (azar() < 0.2 ? 1 : 0);
      /* de vez en cuando se mira a Europa, pero no desde Sudamérica */
      var mirarUEFA = comp.conf !== 'CONMEBOL' && azar() < 0.25;
      var candidatas = (porConf[comp.conf] || []).concat(
        mirarUEFA ? (porConf.UEFA || []).slice(0, 400) : []);
      /* Sólo se estudian a fondo unos cuantos de los que puede pagar: la
         lista viene ordenada por lo que valen, y mirarse dos mil fichas
         una por una multiplicaba por diez lo que tarda el mercado. */
      var mirados = 0;
      for (var i = 0; i < candidatas.length && comp.entran.length < tope && mirados < 60; i++) {
        var o = candidatas[i];
        if (o.vendido || o.de === comp) continue;
        if (o.precio > comp.caja) continue;
        if (!fichable(comp.t, o.jug)) continue;
        mirados++;
        var g = interesa(comp.t, o.jug);
        if (!g) continue;
        if (puedeSalir(o.de.t, o.jug)) continue;
        var p = opciones(o.jug, o.de.t, comp.t, o.precio) * (g >= 3 ? 1.6 : g === 2 ? 1.25 : 1);
        if (azar() < p) cerrar(o, comp, o.precio);
      }
    });

    /* ---- 4. nadie se queda sin fichar ni sin vender ----
       El orden importa: primero se ficha (así el que estaba al mínimo ya
       tiene un jugador de más para poder vender), y después se vende. */
    /* Una plantilla se mueve todos los veranos: como mínimo dos que llegan
       y dos que se van. Un club que no toca nada en diez años no existe. */
    var MOVIMIENTO_MIN = 2;
    function fichaGarantizado(c) {
      var faltan = Math.max(MOVIMIENTO_MIN - c.entran.length,
        MIN_PLANTILLA - cuenta(c.t).total);
      for (var v = 0; v < faltan; v++) unFichaje(c);
    }
    function unFichaje(c) {
      if (puedeEntrar(c.t)) return;
      /* se mira un trozo de la bolsa, no la bolsa entera: está ordenada por
         lo que vale cada uno, así que lo bueno está arriba */
      var bolsaC = porConf[c.conf] || [], libres = [];
      for (var q = 0; q < bolsaC.length && libres.length < 25; q++) {
        var ox = bolsaC[q];
        if (ox.vendido || ox.de === c) continue;
        if (puedeSalir(ox.de.t, ox.jug) || !fichable(c.t, ox.jug)) continue;
        libres.push(ox);
      }
      if (!libres.length) return;
      /* lo mejor que pueda pagar; si no le llega a nada, lo más barato */
      var pagables = libres.filter(function (x) { return x.precio <= c.caja; });
      var o;
      if (pagables.length) {
        /* la nota de cada uno se saca UNA vez; metida dentro del sort se
           recalculaba en cada comparación */
        pagables.forEach(function (x) { x.nota = interesa(c.t, x.jug); });
        pagables.sort(function (a, b) { return (b.nota - a.nota) || (b.jug[2] - a.jug[2]); });
        o = pagables[0];
      } else {
        libres.sort(function (a, b) { return a.precio - b.precio; });
        o = libres[0];
      }
      cerrar(o, c, Math.min(o.precio, Math.max(0, c.caja)));
    }

    function vendeGarantizado(c) {
      var faltan = MOVIMIENTO_MIN - c.salen.length;
      if (faltan <= 0) return;
      var cand = prescindibles(c.t, 8);
      /* al que acaba de llegar no se le vende el mismo día */
      var recien = c.entran.map(function (x) { return x.j; });
      for (var k = 0; k < cand.length && faltan > 0; k++) {
        var jug = cand[k].p;
        if (recien.indexOf(jug) >= 0) continue;
        if (puedeSalir(c.t, jug)) continue;
        /* Se recorre la lista ya barajada desde donde se quedó la última
           venta y se coge al primero que lo necesite: así cada club mira a
           unos pocos vecinos y no a los mil doscientos. */
        var lista = clubesConf[c.conf] || [], comp2 = null, mejor = -1;
        var desde = vueltaConf[c.conf] || 0;
        for (var d2 = 0; d2 < lista.length && d2 < 30; d2++) {
          var cand2 = lista[(desde + d2) % lista.length];
          if (cand2 === c || puedeEntrar(cand2.t)) continue;
          var g2 = interesa(cand2.t, jug);
          if (g2 > mejor) { mejor = g2; comp2 = cand2; }
          if (mejor >= 1) break;
        }
        vueltaConf[c.conf] = (desde + 7) % Math.max(1, lista.length);
        if (!comp2) continue;
        var precio = Math.min(pedido(jug, c.t), Math.max(0, comp2.caja));
        cerrar({ jug: jug, de: c, precio: precio }, comp2, precio);
        faltan--;
      }
    }

    mezcla(clubes).forEach(fichaGarantizado);
    mezcla(clubes).forEach(vendeGarantizado);
    /* segunda pasada: alguno se habrá quedado descolgado por falta de sitio */
    mezcla(clubes).forEach(fichaGarantizado);
    mezcla(clubes).forEach(vendeGarantizado);

    /* y el club del usuario, si hace falta */
    if (elMio) {
      clubes.push(elMio);
      if (opts.faltaFichaje) fichaGarantizado(elMio);
      if (opts.faltaVenta) vendeGarantizado(elMio);
      resumenMio = { entran: elMio.entran, salen: elMio.salen };
    }

    /* ---- 5. resumen ---- */
    var resumen = {
      total: movimientos.length,
      delClub: resumenMio,
      caros: movimientos.slice().sort(function (a, b) { return b.precio - a.precio; }).slice(0, 12),
      porClub: {}
    };
    clubes.forEach(function (c) {
      if (!c.entran.length && !c.salen.length) return;
      resumen.porClub[c.t.leagueId + '|' + c.t.n] = { entran: c.entran, salen: c.salen };
    });
    /* las valoraciones cambian al cambiar la plantilla, y de paso se deja
       cada plantilla dentro de las reglas */
    Object.keys(LG).forEach(function (id) {
      if (id === '__nations__') return;
      LG[id].teams.forEach(function (t) { normaliza(t); t.ovr = global.Engine.overall(t); });
    });
    return resumen;
  }


  /* ---------------------------------------------------------------------
     REPARAR UNA PLANTILLA
     Los retiros y los traspasos pueden dejar a un equipo sin medios o sin
     delanteros. Antes que inventar jugadores, se recicla al que sobra: un
     central pasa a mediocentro, un extremo a mediapunta.
     --------------------------------------------------------------------- */
  var A_MID = { CB: 'DM', RB: 'CM', LB: 'CM', RWB: 'CM', LWB: 'CM', ST: 'AM', CF: 'AM', RW: 'AM', LW: 'AM' };
  var A_ATT = { AM: 'ST', CM: 'RW', DM: 'ST', RW: 'ST', LW: 'ST', CB: 'ST', RB: 'RW', LB: 'LW' };
  var A_DEF = { DM: 'CB', CM: 'CB', AM: 'RB', RW: 'RB', LW: 'LB', ST: 'CB' };

  function normaliza(equipo) {
    if (!equipo || !equipo.p) return 0;
    var hechos = 0, guard = 0;
    while (guard++ < 12) {
      var c = cuenta(equipo);
      var corta = ['MID', 'ATT', 'DEF'].filter(function (l) { return c[l] < MINIMOS[l]; })[0];
      if (!corta) break;
      var tabla = corta === 'MID' ? A_MID : corta === 'ATT' ? A_ATT : A_DEF;
      var sobra = ['DEF', 'ATT', 'MID'].filter(function (l) {
        return l !== corta && c[l] > MINIMOS[l];
      }).sort(function (a, b) { return (c[b] - MINIMOS[b]) - (c[a] - MINIMOS[a]); })[0];
      if (!sobra) break;
      var cand = null;
      equipo.p.forEach(function (p) {
        if (linea(p) !== sobra || !tabla[p[1]]) return;
        if (!cand || p[2] < cand[2]) cand = p;
      });
      if (!cand) break;
      cand[1] = tabla[cand[1]];
      hechos++;
    }
    return hechos;
  }

  /* ---------------------------------------------------------------------
     API
     --------------------------------------------------------------------- */
  global.Market = {
    techo: techo, promesa: promesa,
    MIN_PLANTILLA: MIN_PLANTILLA, MAX_PLANTILLA: MAX_PLANTILLA, MINIMOS: MINIMOS,
    FICHAJES_MAX: FICHAJES_MAX, VENTAS_MAX: VENTAS_MAX,
    linea: linea, cuenta: cuenta, puedeSalir: puedeSalir, puedeEntrar: puedeEntrar,
    falta: falta, nombreLinea: nombreLinea,
    valor: valor, dinero: dinero, pedido: pedido, opciones: opciones,
    presupuesto: presupuesto, estadio: estadio, taquilla: taquilla,
    ligaDe: ligaDe, confDe: confDe, factorGeo: factorGeo, olvidaMedias: olvidaMedias,
    correrMercado: correrMercado, prescindibles: prescindibles, interesa: interesa,
    normaliza: normaliza,
    quita: quita, mete: mete
  };
})(window);
