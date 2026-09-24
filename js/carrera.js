/* =========================================================================
   MODO CARRERA · JUGADOR
   Uno empieza con 16 años en un club de su país y va viviendo su carrera:
   juega, mejora o se estanca según lo que haga en el campo, renueva o se va,
   le llama su selección y un día se retira.

   El jugador es un jugador más de la plantilla: entra en el once, marca,
   asiste y le afecta todo lo que le afecta al resto. Aquí sólo se llevan la
   cuenta de lo suyo y las decisiones que sólo él puede tomar.
   ========================================================================= */
(function (global) {
  'use strict';

  var MAX = 95, MIN = 40, EDAD_INICIAL = 16, EDAD_TOPE = 40, EDAD_RETIRO = 35;
  var BANQUILLO = (global.Engine && Engine.BANQUILLO) || 7;   /* los que se sientan */
  var RANGO_OFERTAS = 7;      /* puntos arriba y abajo para las ofertas */
  /* pasado este nivel a uno lo llama cualquier club de este otro para arriba */
  var MEDIA_ESTRELLA = 90, SUELO_ESTRELLA = 83;
  /* mientras uno no es mejor que el mejor de su país, el país tira de él:
     dos de las cinco ofertas son de casa. Pasados los 80 ya no hace falta. */
  var MEDIA_SUELTA = 80, OFERTAS_DE_CASA = 2, MARGEN_SIMILAR = 2;
  var N_OFERTAS = 5;

  var POSICIONES = [
    { p: 'GK', n: 'Portero' }, { p: 'CB', n: 'Central' }, { p: 'RB', n: 'Lateral derecho' },
    { p: 'LB', n: 'Lateral izquierdo' }, { p: 'DM', n: 'Mediocentro defensivo' },
    { p: 'CM', n: 'Mediocentro' }, { p: 'AM', n: 'Mediapunta' },
    { p: 'RW', n: 'Extremo derecho' }, { p: 'LW', n: 'Extremo izquierdo' },
    { p: 'ST', n: 'Delantero centro' }
  ];
  /* si el país del jugador no tiene liga propia, se va al resto de su zona */
  var RESTO = {
    UEFA: 'otrosuefa', CONCACAF: 'otrosconcacaf', AFC: 'otrosafc',
    CAF: 'otroscaf', OFC: 'otrosofc', CONMEBOL: 'otrosconcacaf'
  };

  var J = null;               /* el jugador de la partida en curso */

  function LG() { return global.LEAGUES || {}; }
  function activa() { return !!(J && !J.retirado); }
  function jugador() { return J; }

  /* ---------------------------------------------------------------------
     DÓNDE EMPEZAR
     --------------------------------------------------------------------- */
  /* las ligas del país elegido; si no tiene, la del resto de su confederación */
  function ligasDe(fifa) {
    var propias = global.Nac ? Nac.ligasDe(fifa) : [];
    propias = propias.filter(function (l) { return LG()[l]; });
    if (propias.length) return propias;
    var sel = global.Nac ? Nac.seleccion(fifa) : null;
    var resto = RESTO[(sel && sel.conf) || 'UEFA'];
    return LG()[resto] ? [resto] : [];
  }
  /* la media de la liga: es con la que arranca el jugador */
  function nivelDeLiga(lid) {
    var lg = LG()[lid];
    if (!lg || !lg.teams.length) return 60;
    var s = 0;
    lg.teams.forEach(function (t) { s += (t.ovr || Engine.overall(t)); });
    return Math.round(s / lg.teams.length);
  }
  /* Hay países con el ascenso partido en regionales, donde dos categorías
     distintas están al mismo nivel. Ahí las ofertas salen de tres escalones
     y de cada uno se sortea la liga: en Argentina, primero las dos cuartas
     (Federal Amateur o Primera C), después las dos terceras (Federal A o B
     Metropolitana) y por último B Nacional o Primera. */
  var CANTERA = {
    ARG: {
      escalones: [
        ['federalam', 'argentina4'],
        ['federala', 'argentina3'],
        ['argentina2', 'argentina']
      ],
      media: 60
    }
  };
  function escalonesDe(fifa) {
    var c = CANTERA[fifa];
    if (!c) return null;
    var out = [];
    c.escalones.forEach(function (grupo) {
      var hay = grupo.filter(function (l) { return LG()[l] && LG()[l].teams.length; });
      if (hay.length) out.push(hay);
    });
    return out.length ? out : null;
  }
  /* con qué media arranca: en los países con escalafón propio, la fija */
  function mediaInicial(fifa, lid) {
    var c = CANTERA[fifa];
    return (c && c.media) ? c.media : nivelDeLiga(lid);
  }

  /* De la cantera no se sale en Primera: las ofertas salen de abajo. Si el
     país sólo tiene una liga, las tres son de esa. */
  function ligasCantera(fifa) {
    var esc = escalonesDe(fifa);
    if (esc) {
      var todas = [];
      esc.forEach(function (g) { todas = todas.concat(g); });
      return todas;
    }
    var ligas = ligasDe(fifa);
    if (ligas.length <= 1) return ligas;
    return ligas.slice(1).slice(-3);          /* todas menos la primera */
  }
  function ligaCantera(fifa) {
    var l = ligasCantera(fifa);
    return l.length ? l[l.length - 1] : null;
  }
  /* un club al azar de cada división, de abajo arriba */
  function ofertasInicio(fifa) {
    var esc = escalonesDe(fifa);
    if (esc) {
      var res = [], vistos = {};
      esc.forEach(function (grupo) {
        var lid = grupo[Math.floor(Math.random() * grupo.length)];
        var bolsa = Comp.shuffle(LG()[lid].teams.slice());
        for (var i = 0; i < bolsa.length; i++) {
          if (vistos[bolsa[i].n]) continue;
          vistos[bolsa[i].n] = 1;
          res.push({ club: bolsa[i], liga: LG()[lid].name, nivel: mediaInicial(fifa, lid) });
          break;
        }
      });
      return res;
    }
    var ligas = ligasCantera(fifa);
    if (!ligas.length) return [];
    var out = [], usados = {};
    ligas.slice().reverse().forEach(function (lid) {
      if (out.length >= 3) return;
      var pool = Comp.shuffle(LG()[lid].teams.slice());
      for (var i = 0; i < pool.length; i++) {
        if (usados[pool[i].n]) continue;
        usados[pool[i].n] = 1;
        out.push({ club: pool[i], liga: LG()[lid].name, nivel: mediaInicial(fifa, lid) });
        break;
      }
    });
    /* si no había tres divisiones se completa con la de más abajo */
    var lid0 = ligas[ligas.length - 1];
    var resto = Comp.shuffle(LG()[lid0].teams.slice());
    for (var k = 0; out.length < 3 && k < resto.length; k++) {
      if (usados[resto[k].n]) continue;
      usados[resto[k].n] = 1;
      out.push({ club: resto[k], liga: LG()[lid0].name, nivel: mediaInicial(fifa, lid0) });
    }
    return out;
  }

  /* ---------------------------------------------------------------------
     CREAR AL JUGADOR
     --------------------------------------------------------------------- */
  function temporadaEnBlanco(anio, club) {
    return {
      anio: anio, club: club ? club.n : '', liga: club ? club.league : '',
      clubUid: club ? club.uid : '', clubRef: club || null,
      pj: 0, titular: 0, suplente: 0, g: 0, a: 0,
      gfEquipo: 0, gcEquipo: 0, pjEquipo: 0, pjLiga: 0, ptsEquipo: 0, vallas: 0,
      selPj: 0, selG: 0, selA: 0,
      /* Aunque no entre en la lista por nivel, el año no puede acabar en
         blanco: entre tres y seis partidos los juega, aunque sea a
         cuentagotas. Un suplente eterno igual suma minutos. */
      minPJ: 3 + Math.floor(Math.random() * 4),
      ovrInicio: J ? J.ovr : 0, ovrFin: 0
    };
  }

  function crea(opts) {
    var club = opts.club;
    var lid = club.leagueId;
    var ovr = opts.ovr || mediaInicial(opts.nat, lid);
    var p = [opts.nombre, opts.pos, ovr, EDAD_INICIAL, opts.nat];
    p.yo = true;
    J = {
      nombre: opts.nombre, nat: opts.nat, pos: opts.pos,
      edad: EDAD_INICIAL, ovr: ovr, p: p, club: club,
      contrato: { anios: 3, restan: 3 },
      debut: (global.World.state || {}).year || 2026,
      temp: null, historial: [], palmares: [],
      sel: { pj: 0, g: 0, a: 0, convocado: false, desde: null },
      sinConvocar: 0, sinTitular: 0, sinJugar: 0, ofertas: [], retirado: false, mensajes: []
    };
    ponEnClub(club);
    J.temp = temporadaEnBlanco(World.state.year, club);
    J.temp.ovrInicio = ovr;
    return J;
  }

  /* mete al jugador en la plantilla y deja el once por orden de calidad */
  function ponEnClub(club) {
    if (!club) return;
    club.p.push(J.p);
    J.club = club;
    ordena(club);
    club.ovr = Engine.overall(club);
  }
  function sacaDelClub(club) {
    if (!club) return;
    var i = club.p.indexOf(J.p);
    if (i >= 0) club.p.splice(i, 1);
    club.ovr = Engine.overall(club);
  }
  /* el entrenador pone a los mejores: el once sale de la formación del club */
  function ordena(club) {
    if (!club) return;
    /* red de seguridad: si algo lo sacó de la plantilla (un mercado, una
       carga antigua), vuelve a entrar */
    if (J && J.p && club.p.indexOf(J.p) < 0) club.p.push(J.p);
    var f = Engine.FORMATIONS[club.fm && Engine.FORMATIONS[club.fm] ? club.fm : '4-3-3'];
    club.p = Engine.autoLineup(club.p, f);
  }

  /* ---------------------------------------------------------------------
     EL SITIO EN EL EQUIPO
     --------------------------------------------------------------------- */
  function indice() {
    if (!J || !J.club) return -1;
    return J.club.p.indexOf(J.p);
  }
  function rol() {
    var i = indice();
    if (i < 0) return 'fuera';
    if (i < 11) return 'titular';
    if (i < 11 + BANQUILLO) return 'suplente';
    return 'no convocado';
  }
  function convocado() {
    var i = indice();
    return i >= 0 && i < 11 + BANQUILLO;
  }
  /* ¿Está fuera de la lista por nivel? Se mira cuántos compañeros son
     mejores que él, no en qué puesto lo dejó el último empujón: si se
     mirara el puesto, el propio empujón lo daría por titular. */
  function fueraPorNivel() {
    var club = J && J.club;
    if (!club || !club.p) return false;
    var mejores = 0;
    club.p.forEach(function (p) { if (p !== J.p && p[2] > J.ovr) mejores++; });
    return mejores >= 11 + BANQUILLO;
  }

  /* Nadie se pasa el año en la grada: al tercer partido seguido fuera de la
     lista, el entrenador lo mete al banquillo aunque no le toque por nivel. */
  function forzarConvocatoria() {
    var club = J && J.club;
    if (!club) return false;
    var i = club.p.indexOf(J.p);
    var tope = 11 + BANQUILLO - 1;
    if (i < 0 || i <= tope) return false;
    club.p.splice(i, 1);
    club.p.splice(tope, 0, J.p);
    return true;
  }

  /* Nadie se pasa cinco partidos seguidos calentando: al sexto sale de
     inicio. El sitio once es el último del once, que se lo gana a pulso. */
  function forzarTitular() {
    var club = J && J.club;
    if (!club) return false;
    var i = club.p.indexOf(J.p);
    if (i < 0 || i < 11) return false;
    club.p.splice(i, 1);
    club.p.splice(10, 0, J.p);
    return true;
  }
  /* Dónde juega el próximo partido. Se decide al acabar éste porque lo que
     lee el motor es el orden de la plantilla. */
  var TOPE_BANQUILLO = 5, RENDIMIENTO_FIJO = 0.70, TOPE_SIN_JUGAR = 6;
  function decideSitio(x) {
    if (!J || !J.club) return;
    if (x && x.titular) J.sinTitular = 0;
    else J.sinTitular = (J.sinTitular || 0) + 1;
    if (x && x.jugo) J.sinJugar = 0;
    else J.sinJugar = (J.sinJugar || 0) + 1;
    /* El cupo del año por delante de todo: si lleva media temporada sin
       pisar el campo y aún le faltan partidos del mínimo, juega el
       siguiente de inicio, esté o no en la lista. */
    var t = J.temp;
    if (fueraPorNivel()) {
      /* No da el nivel: no entra en la rotación normal, sólo juega lo
         justo para que el año no acabe en blanco. */
      if (t && t.pj < (t.minPJ || 3) && (J.sinJugar || 0) >= TOPE_SIN_JUGAR) {
        forzarTitular();
        J.sinJugar = 0; J.sinTitular = 0;
      }
      return;
    }
    /* por encima de 70 de valoración no se le sienta nadie */
    if (rendimiento() > RENDIMIENTO_FIJO) { J.sinTitular = 0; forzarTitular(); return; }
    if (J.sinTitular >= TOPE_BANQUILLO) { forzarTitular(); J.sinTitular = 0; }
  }

  /* ---------------------------------------------------------------------
     APUNTAR LO QUE HACE EN EL CAMPO
     --------------------------------------------------------------------- */
  /* busca al jugador dentro del resultado de un partido */
  function mio(res) {
    if (!J) return null;
    var lados = [res.home, res.away];
    for (var i = 0; i < 2; i++) {
      var t = lados[i];
      var p = t.players.filter(function (x) { return x.name === J.nombre; })[0];
      if (!p) continue;
      var titular = t.xi.indexOf(p) >= 0 && !p.subbedIn;
      var entro = (t.subsLog || []).some(function (s) { return s.in === J.nombre; });
      var arranco = false;
      /* el once inicial son los once primeros de la plantilla */
      var orden = t.players.indexOf(p);
      arranco = orden < 11;
      return {
        p: p, equipo: t, rival: lados[1 - i], lado: i === 0 ? 'home' : 'away',
        titular: arranco, entro: entro, jugo: arranco || entro,
        gf: t.goals, gc: lados[1 - i].goals
      };
    }
    return null;
  }

  /* Lo que hizo en un partido suelto. Los torneos de selecciones se
     simulan enteros de golpe, así que el panel necesita poder restar lo
     que todavía está en la cola sin ver. */
  function aporte(res) {
    var x = (activa() && res) ? mio(res) : null;
    if (!x || !x.jugo) return null;
    return { g: x.p.goals || 0, a: x.p.assists || 0 };
  }

  /* lo llama el mundo con cada partido del club del jugador */
  function apunta(m) {
    if (!activa() || !m || !m.res) return;
    var t = J.temp;
    var x = mio(m.res);
    if (!x) return;
    /* ¿estuvo en la lista? Dos partidos fuera son los que hay; al tercero
       entra al banquillo sí o sí. */
    if (convocado()) {
      J.sinConvocar = 0;
      ordena(J.club);                 /* de vuelta al orden por nivel */
    } else {
      J.sinConvocar = (J.sinConvocar || 0) + 1;
      /* Al que sí da el nivel se le devuelve pronto a la lista. Al que no,
         sólo se le llama para cumplir su cupo del año: si no, un chaval
         muy verde acababa con veinte partidos de titular. */
      var cupo = t.pj < (t.minPJ || 3);
      if (J.sinConvocar >= 2 && (!fueraPorNivel() || cupo)) {
        forzarConvocatoria(); J.sinConvocar = 0;
      }
    }
    t.pjEquipo++;
    t.gfEquipo += x.gf; t.gcEquipo += x.gc;
    if (m.kind === 'liga') {
      t.pjLiga++;
      t.ptsEquipo += x.gf > x.gc ? 3 : x.gf === x.gc ? 1 : 0;
    }
    if (x.jugo) {
      t.pj++;
      if (x.titular) t.titular++; else t.suplente++;
      t.g += x.p.goals || 0;
      t.a += x.p.assists || 0;
      if (x.gc === 0) t.vallas++;
    }
    decideSitio(x);
  }

  /* un partido de la selección */
  function apuntaSeleccion(res, nombreComp) {
    if (!activa()) return;
    var x = mio(res);
    if (!x || !x.jugo) return;
    J.temp.selPj++; J.sel.pj++;
    J.temp.selG += x.p.goals || 0; J.sel.g += x.p.goals || 0;
    J.temp.selA += x.p.assists || 0; J.sel.a += x.p.assists || 0;
    if (nombreComp) J.temp.selComp = nombreComp;
  }

  /* ---------------------------------------------------------------------
     CUÁNTO HA RENDIDO
     --------------------------------------------------------------------- */
  function escala(v, bajo, alto) {
    if (alto === bajo) return 0.5;
    return Math.max(0, Math.min(1, (v - bajo) / (alto - bajo)));
  }
  /* A un chaval de dieciséis no se le puede pedir lo que a uno de veintiocho:
     estar en el banquillo de un equipo de hombres ya es un año aprovechado.
     Por eso cada edad tiene su suelo y la nota se mide contra él. */
  function sueloDeEdad(edad) {
    return edad <= 17 ? 0.38 : edad <= 19 ? 0.30 : edad <= 21 ? 0.24
      : edad <= 23 ? 0.18 : edad <= 29 ? 0.12 : 0.10;
  }
  /* 0 = temporada para olvidar, 1 = temporada de época. Cada puesto se mide
     por lo suyo: al central no se le piden goles, se le pide que no le
     hagan; al delantero, lo contrario. */
  function rendimiento() {
    var t = J.temp;
    var piso = sueloDeEdad(J.edad);
    if (!t.pjEquipo) return piso + (1 - piso) * 0.35;
    var parte = Math.min(1, t.pj / Math.max(1, t.pjEquipo));
    if (!t.pj) return piso * 0.6;
    var ga = (t.g + t.a) / t.pj;
    var gcMedia = t.pjEquipo ? t.gcEquipo / t.pjEquipo : 1.4;
    /* los puntos son de liga: dividir por todos los partidos hundía la nota
       de quien además jugaba copas */
    var jl = t.pjLiga || t.pjEquipo;
    var puntos = t.ptsEquipo ? t.ptsEquipo / jl : 1.3;
    var grupo = Engine.group(J.pos);
    var r;
    /* El tope de cada escala es la temporada de época, no la muy buena: un
     delantero con 24 goles y asistencias en 33 partidos ha hecho un
     señor año, pero el 100 se guarda para los que pasan de gol por
     partido. */
    if (grupo === 'ATT') {
      r = 0.78 * escala(ga, 0.15, 1.00) + 0.22 * escala(puntos, 0.9, 2.4);
    } else if (grupo === 'MID') {
      r = 0.55 * escala(ga, 0.08, 0.65) + 0.45 * escala(puntos, 0.9, 2.4);
    } else if (grupo === 'DEF') {
      r = 0.60 * escala(2.0 - gcMedia, 0.2, 1.5) + 0.16 * escala(ga, 0, 0.30) +
        0.24 * escala(puntos, 0.9, 2.4);
    } else {
      r = 0.68 * escala(2.0 - gcMedia, 0.2, 1.5) + 0.32 * escala(t.vallas / t.pj, 0.05, 0.55);
    }
    /* jugar poco resta, pero no fulmina */
    r *= 0.62 + 0.38 * parte;
    /* y la nota se estira desde el suelo de su edad */
    r = piso + (1 - piso) * Math.max(0, Math.min(1, r));
    return Math.max(0, Math.min(1, r));
  }

  /* ---------------------------------------------------------------------
     CÓMO CAMBIA LA VALORACIÓN
     --------------------------------------------------------------------- */
  /* Lo que puede moverse la media en un año, por tramos de edad. Dentro de
     su banda manda el rendimiento: una temporada mala deja el mínimo y una
     enorme el máximo. La edad es la que tenía durante la temporada, no la
     que cumple al acabarla. */
  var CRECIMIENTO = [
    { hasta: 19, min: 3, max: 7 },
    { hasta: 24, min: 1, max: 4 },
    { hasta: 29, min: 0, max: 3 },
    { hasta: 34, min: -3, max: 1 },
    { hasta: 99, min: -7, max: -4 }
  ];
  function bandaDeEdad(e) {
    for (var i = 0; i < CRECIMIENTO.length; i++) {
      if (e <= CRECIMIENTO[i].hasta) return CRECIMIENTO[i];
    }
    return CRECIMIENTO[CRECIMIENTO.length - 1];
  }
  function crecimiento(rend) {
    var b = bandaDeEdad(J.edad);
    var r = Math.max(0, Math.min(1, rend || 0));
    return Math.round(b.min + r * (b.max - b.min));
  }

  /* ---------------------------------------------------------------------
     FIN DE TEMPORADA
     --------------------------------------------------------------------- */
  /* clubes con nivel parecido al del jugador */
  /* las ligas del país donde uno juega ahora, la primera división delante */
  function ligasDeMiPais() {
    var lid = J && J.club && J.club.leagueId;
    var fifa = lid && global.Nac ? Nac.paisDeLiga(lid) : null;
    return fifa ? ligasDe(fifa) : [];
  }
  /* el mejor club de la primera división de ese país */
  function mejorDeMiPais(ligas) {
    var lg = ligas.length ? LG()[ligas[0]] : null;
    if (!lg) return 0;
    var max = 0;
    lg.teams.forEach(function (t) { max = Math.max(max, t.ovr || 0); });
    return max;
  }

  /* De estrella para arriba ya no manda la banda de siete puntos: a un
     jugador de más de 90 lo llama cualquier club grande, aunque él esté por
     encima de todos ellos. */
  function buscaOfertas(n) {
    var cerca = [], ovr = J.ovr;
    var estrella = ovr > MEDIA_ESTRELLA;
    Object.keys(LG()).forEach(function (id) {
      if (id === '__nations__') return;
      LG()[id].teams.forEach(function (t) {
        if (t === J.club) return;
        var nivel = t.ovr || 0;
        var vale = estrella ? nivel >= SUELO_ESTRELLA
          : Math.abs(nivel - ovr) <= RANGO_OFERTAS;
        if (vale) cerca.push(t);
      });
    });
    cerca = Comp.shuffle(cerca);
    var cuantas = n || N_OFERTAS;

    /* Mientras uno no sea mejor que el mejor de su país, el país no lo suelta:
       dos de las ofertas salen de casa. Si no hay tantos clubes de casa en el
       rango, se ponen los que haya. */
    var ligas = ligasDeMiPais();
    var deCasa = ovr <= MEDIA_SUELTA && ovr <= mejorDeMiPais(ligas) + MARGEN_SIMILAR;
    if (deCasa && ligas.length) {
      var casa = [], fuera = [];
      cerca.forEach(function (t) {
        (ligas.indexOf(t.leagueId) >= 0 ? casa : fuera).push(t);
      });
      var cupo = Math.min(OFERTAS_DE_CASA, cuantas, casa.length);
      var resto = Comp.shuffle(casa.slice(cupo).concat(fuera));
      cerca = Comp.shuffle(casa.slice(0, cupo).concat(resto.slice(0, Math.max(0, cuantas - cupo))));
    }

    return cerca.slice(0, cuantas).map(function (t) {
      return {
        club: t, liga: t.league, nivel: t.ovr,
        anios: 2 + Math.floor(Math.random() * 3)       /* contratos de 2 a 4 años */
      };
    });
  }

  /* se cierra el año: crece o mengua, corre el contrato y llegan ofertas */
  function cierraTemporada(titulos) {
    if (!activa()) return null;
    var rend = rendimiento();
    var d = crecimiento(rend);
    var antes = J.ovr;
    J.ovr = Math.max(MIN, Math.min(MAX, J.ovr + d));
    J.edad++;
    J.p[2] = J.ovr; J.p[3] = J.edad;

    (titulos || []).forEach(function (tt) {
      J.palmares.push({ anio: J.temp.anio, titulo: tt, club: J.temp.club,
        uid: J.temp.clubUid || (J.club ? J.club.uid : '') });
    });

    J.temp.ovrFin = J.ovr;
    J.temp.rend = rend;
    J.temp.delta = J.ovr - antes;
    J.temp.edad = J.edad - 1;
    J.historial.push(J.temp);

    /* el contrato corre */
    J.contrato.restan--;
    var libre = J.contrato.restan <= 0;
    var renueva = false;
    if (libre) {
      /* el club renueva si le sirve: cuenta el nivel y la edad */
      var suyo = J.club ? (J.club.ovr || 0) : 0;
      var ganas = (J.ovr - suyo + 6) / 12;                /* 1 si es mucho mejor */
      if (J.edad >= 34) ganas -= 0.35;
      if (J.edad >= 37) ganas -= 0.35;
      if (J.temp.pj < J.temp.pjEquipo * 0.25) ganas -= 0.3;
      renueva = Math.random() < Math.max(0.05, Math.min(0.95, ganas));
    }
    J.ofertas = buscaOfertas(N_OFERTAS);
    J.finTemporada = {
      rend: rend, delta: J.temp.delta, libre: libre, renueva: renueva,
      puedeRetirarse: J.edad >= EDAD_RETIRO,
      obligadoRetirarse: J.edad >= EDAD_TOPE,
      anios: 2 + Math.floor(Math.random() * 3)
    };
    return J.finTemporada;
  }

  /* se queda donde está (sólo si el club le renueva o aún tiene contrato) */
  function sigue() {
    if (!J.finTemporada) return false;
    if (J.finTemporada.libre && !J.finTemporada.renueva) return false;
    if (J.finTemporada.libre) J.contrato = { anios: J.finTemporada.anios, restan: J.finTemporada.anios };
    nuevaTemporada(J.club);
    return true;
  }
  /* acepta una de las ofertas */
  function aceptaOferta(i) {
    var o = J.ofertas[i];
    if (!o) return false;
    sacaDelClub(J.club);
    J.contrato = { anios: o.anios, restan: o.anios };
    ponEnClub(o.club);
    nuevaTemporada(o.club);
    return true;
  }
  function nuevaTemporada(club) {
    J.ofertas = [];
    J.finTemporada = null;
    ordena(club);
    club.ovr = Engine.overall(club);
    J.temp = temporadaEnBlanco(World.state.year, club);
    J.temp.ovrInicio = J.ovr;
  }
  function retirarse() {
    J.retirado = true;
    J.finTemporada = null;
    sacaDelClub(J.club);
    return J;
  }

  /* ---------------------------------------------------------------------
     SELECCIÓN
     --------------------------------------------------------------------- */
  /* Le llaman si anda a menos de cuatro puntos del nivel de su selección. */
  function convocable() {
    if (!activa()) return false;
    var sel = global.Nac ? Nac.seleccion(J.nat) : null;
    if (!sel) return false;
    return J.ovr >= (sel.ovr || 0) - 4;
  }
  /* mete o saca al jugador de la lista de su selección */
  function ajustaSeleccion() {
    var sel = global.Nac ? Nac.seleccion(J.nat) : null;
    if (!sel) return false;
    var dentro = sel.p.indexOf(J.p) >= 0;
    var debe = convocable();
    if (debe && !dentro) {
      sel.p.push(J.p);
      sel.p = Engine.autoLineup(sel.p, Engine.FORMATIONS['4-3-3']);
      sel.ovr = Engine.overall(sel);
      J.sel.convocado = true;
      if (!J.sel.desde) J.sel.desde = World.state.year;
    } else if (!debe && dentro) {
      var i = sel.p.indexOf(J.p);
      if (i >= 0) sel.p.splice(i, 1);
      sel.ovr = Engine.overall(sel);
      J.sel.convocado = false;
    } else {
      J.sel.convocado = debe;
    }
    return J.sel.convocado;
  }

  /* ---------------------------------------------------------------------
     CARGA Y GUARDADO
     --------------------------------------------------------------------- */
  function exporta() {
    if (!J) return null;
    return {
      nombre: J.nombre, nat: J.nat, pos: J.pos, edad: J.edad, ovr: J.ovr,
      club: J.club ? J.club.uid : null, contrato: J.contrato, debut: J.debut,
      sinConvocar: J.sinConvocar || 0, sinTitular: J.sinTitular || 0,
      sinJugar: J.sinJugar || 0,
      temp: sinRefs(J.temp), historial: J.historial.map(sinRefs),
      palmares: J.palmares, sel: J.sel, retirado: J.retirado
    };
  }
  function sinRefs(t) {
    if (!t) return null;
    var o = {};
    Object.keys(t).forEach(function (k) { if (k !== 'clubRef') o[k] = t[k]; });
    return o;
  }
  function importa(d, buscaClub) {
    if (!d) { J = null; return null; }
    var club = d.club ? buscaClub(d.club) : null;
    var p = null;
    if (club) {
      p = club.p.filter(function (x) { return x[0] === d.nombre; })[0];
    }
    if (!p) {
      p = [d.nombre, d.pos, d.ovr, d.edad, d.nat];
      if (club) club.p.push(p);
    }
    p.yo = true;
    J = {
      nombre: d.nombre, nat: d.nat, pos: d.pos, edad: d.edad, ovr: d.ovr,
      p: p, club: club, contrato: d.contrato, debut: d.debut,
      temp: d.temp, historial: d.historial || [], palmares: d.palmares || [],
      sel: d.sel || { pj: 0, g: 0, a: 0 }, sinConvocar: d.sinConvocar || 0,
      sinJugar: d.sinJugar || 0,
      sinTitular: d.sinTitular || 0,
      ofertas: [], retirado: !!d.retirado,
      mensajes: []
    };
    if (J.temp) J.temp.clubRef = club;
    /* El nombre del club se guardó como texto. Si el club se renombró, la
       carrera no puede seguir enseñando el nombre viejo: se refresca por uid.
       La liga NO se toca: es la de aquella temporada, no la de ahora. */
    function alDia(t) {
      if (!t || !t.clubUid) return;
      var c = buscaClub(t.clubUid);
      if (!c) return;
      t.club = c.n;
      t.clubUid = c.uid;
    }
    alDia(J.temp);
    J.historial.forEach(alDia);
    arreglaLigas();
    return J;
  }
  /* En qué división estaba el club cada temporada. Se reconstruye hacia atrás
     desde la liga de hoy con los ascensos y descensos que guarda el mundo, para
     reparar las carreras a las que se les pisó el dato. */
  function arreglaLigas() {
    if (!J || !global.World || !global.World.state) return;
    var st = global.World.state;
    var hist = (st.history || []).slice().sort(function (a, b) { return b.year - a.year; });
    if (!hist.length) return;
    var filas = J.historial.concat(J.temp ? [J.temp] : []);
    var porAnio = {};
    filas.forEach(function (t) { if (t && t.anio != null) porAnio[t.anio] = t; });
    var liga = J.club ? J.club.league : null;
    if (J.temp && J.temp.anio === st.year && liga) J.temp.liga = liga;
    for (var i = 0; i < hist.length; i++) {
      var h = hist[i], antes = liga;
      (h.moves || []).forEach(function (mv) {
        var nombre = J.club ? J.club.n : '';
        if ((mv.up || []).indexOf(nombre) >= 0) antes = mv.tier2;
        else if ((mv.down || []).indexOf(nombre) >= 0) antes = mv.tier1;
      });
      var fila = porAnio[h.year];
      if (fila && antes) fila.liga = antes;
      liga = antes;
    }
  }

  function limpia() { J = null; }

  /* ---------------------------------------------------------------------
     RESUMEN PARA LA PANTALLA «MI CARRERA»
     --------------------------------------------------------------------- */
  /* junta las temporadas seguidas en un mismo club */
  function ciclos() {
    var out = [], act = null;
    J.historial.concat(J.temp && J.temp.pjEquipo ? [J.temp] : []).forEach(function (t) {
      if (!act || act.club !== t.club) {
        act = { club: t.club, liga: t.liga, uid: t.clubUid || '', desde: t.anio, hasta: t.anio,
          pj: 0, g: 0, a: 0, temporadas: 0 };
        out.push(act);
      }
      act.hasta = t.anio;
      act.pj += t.pj; act.g += t.g; act.a += t.a; act.temporadas++;
    });
    return out;
  }
  function totales() {
    var t = { pj: 0, g: 0, a: 0, selPj: 0, selG: 0, selA: 0 };
    J.historial.concat(J.temp ? [J.temp] : []).forEach(function (s) {
      t.pj += s.pj; t.g += s.g; t.a += s.a;
      t.selPj += s.selPj || 0; t.selG += s.selG || 0; t.selA += s.selA || 0;
    });
    return t;
  }

  global.Carrera = {
    POSICIONES: POSICIONES, MAX: MAX, MIN: MIN, RANGO_OFERTAS: RANGO_OFERTAS,
    EDAD_RETIRO: EDAD_RETIRO, EDAD_TOPE: EDAD_TOPE,
    activa: activa, jugador: jugador, ligasDe: ligasDe, nivelDeLiga: nivelDeLiga,
    ofertasInicio: ofertasInicio, ligaCantera: ligaCantera, ligasCantera: ligasCantera,
    crea: crea, rol: rol, indice: indice,
    apunta: apunta, apuntaSeleccion: apuntaSeleccion, aporte: aporte,
    rendimiento: rendimiento,
    cierraTemporada: cierraTemporada, sigue: sigue, aceptaOferta: aceptaOferta,
    retirarse: retirarse, buscaOfertas: buscaOfertas,
    convocable: convocable, ajustaSeleccion: ajustaSeleccion,
    exporta: exporta, importa: importa, limpia: limpia,
    ciclos: ciclos, totales: totales, ordena: ordena, convocado: convocado
  };
})(window);
