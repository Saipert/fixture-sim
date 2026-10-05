/* =========================================================================
   MUNDIAL DE CLUBES DE 12
   Los nueve campeones continentales, el anfitrión y los subcampeones de la
   Champions y la Libertadores. Tres bombos, tres grupos de cuatro, pasan los
   dos primeros y los dos mejores terceros, y los cuartos están fijados de
   antemano: no hay sorteo del cuadro.

     Bombo 1 · campeón de la Champions, de la Libertadores y el anfitrión
     Bombo 2 · campeón de la Europa League, de la Sudamericana y de la Conference
     Bombo 3 · campeones de CAF, AFC, Concacaf y OFC + los subcampeones de
               UEFA y de CONMEBOL (seis: cada grupo se lleva dos)

   En un grupo no caben más de dos clubes de UEFA, y de las demás
   confederaciones uno solo. La única excepción es que el anfitrión sea de
   CONMEBOL: cuatro clubes para tres grupos obligan a repetir en uno.
   ========================================================================= */
(function (global) {
  'use strict';

  var ROLES = [
    { k: 'ucl',    pot: 1, zona: 'UEFA',     n: 'Campeón de la Champions League' },
    { k: 'lib',    pot: 1, zona: 'CONMEBOL', n: 'Campeón de la Copa Libertadores' },
    { k: 'host',   pot: 1, zona: null,       n: 'Anfitrión' },
    { k: 'uel',    pot: 2, zona: 'UEFA',     n: 'Campeón de la Europa League' },
    { k: 'sud',    pot: 2, zona: 'CONMEBOL', n: 'Campeón de la Copa Sudamericana' },
    { k: 'conf',   pot: 2, zona: 'UEFA',     n: 'Campeón de la Conference League' },
    { k: 'cafcl',  pot: 3, zona: 'CAF',      n: 'Campeón de África' },
    { k: 'acl',    pot: 3, zona: 'AFC',      n: 'Campeón de Asia' },
    { k: 'ccc',    pot: 3, zona: 'CONCACAF', n: 'Campeón de Norte y Centroamérica' },
    { k: 'ofc',    pot: 3, zona: 'OFC',      n: 'Campeón de Oceanía' },
    { k: 'uclSub', pot: 3, zona: 'UEFA',     n: 'Subcampeón de la Champions League' },
    { k: 'libSub', pot: 3, zona: 'CONMEBOL', n: 'Subcampeón de la Copa Libertadores' }
  ];
  var GRUPOS = 3;

  function shuffle(a) {
    a = a.slice();
    for (var i = a.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1)), t = a[i]; a[i] = a[j]; a[j] = t;
    }
    return a;
  }
  function ident(t) { return t ? (t.leagueId || '') + '|' + t.n : ''; }
  function rolDe(k) { return ROLES.filter(function (r) { return r.k === k; })[0]; }

  /* De {rol: club} a tres bombos de { t, rol, zona }. zonaDe da la
     confederación del anfitrión, que no viene de ningún torneo. */
  function bombos(porRol, zonaDe) {
    var out = [[], [], []];
    ROLES.forEach(function (r) {
      var t = porRol[r.k];
      if (!t) return;
      out[r.pot - 1].push({ t: t, rol: r.k, zona: r.zona || (zonaDe ? zonaDe(t) : '') || '' });
    });
    return out;
  }
  function completo(b) {
    return b[0].length === 3 && b[1].length === 3 && b[2].length === 6;
  }

  /* Reparte los bombos en tres grupos de uno-uno-dos. Es una búsqueda con
     vuelta atrás: la bola que sale no puede dejar a otra sin sitio. */
  function reparte(b) {
    var todos = [];
    b.forEach(function (pot, pi) { pot.forEach(function (e) { todos.push({ e: e, pot: pi }); }); });
    var cuenta = {};
    todos.forEach(function (x) { cuenta[x.e.zona] = (cuenta[x.e.zona] || 0) + 1; });
    function tope(z) {
      return Math.max(z === 'UEFA' ? 2 : 1, Math.ceil((cuenta[z] || 0) / GRUPOS));
    }
    for (var intento = 0; intento < 60; intento++) {
      var gs = [], i;
      for (i = 0; i < GRUPOS; i++) gs.push({ teams: [], zonas: {}, pots: [0, 0, 0] });
      var orden = [];
      [0, 1, 2].forEach(function (p) {
        orden = orden.concat(shuffle(todos.filter(function (x) { return x.pot === p; })));
      });
      if (coloca(0, orden, gs, tope)) {
        return gs.map(function (g, gi) {
          return { name: 'Grupo ' + String.fromCharCode(65 + gi), teams: g.teams.map(function (x) { return x.t; }) };
        });
      }
    }
    /* sin solución con las reglas: se reparte por bombos y que sea lo que sea */
    var libres = [[], [], []];
    b.forEach(function (pot, pi) {
      shuffle(pot).forEach(function (e, k) {
        libres[(k + pi) % GRUPOS].push(e.t);
      });
    });
    return libres.map(function (ts, gi) { return { name: 'Grupo ' + String.fromCharCode(65 + gi), teams: ts }; });
  }
  function coloca(i, orden, gs, tope) {
    if (i >= orden.length) return true;
    var x = orden[i], cap = [1, 1, 2][x.pot];
    var cand = shuffle(gs.filter(function (g) {
      return g.pots[x.pot] < cap && (g.zonas[x.e.zona] || 0) < tope(x.e.zona);
    }));
    for (var k = 0; k < cand.length; k++) {
      var g = cand[k];
      g.teams.push(x.e); g.pots[x.pot]++; g.zonas[x.e.zona] = (g.zonas[x.e.zona] || 0) + 1;
      if (coloca(i + 1, orden, gs, tope)) return true;
      g.teams.pop(); g.pots[x.pot]--; g.zonas[x.e.zona]--;
    }
    return false;
  }

  /* Los cuartos, tal cual los fija el reglamento. El orden es el del cuadro:
     el 1.º y el 2.º cruce se encuentran en una semifinal y el 3.º con el 4.º.
       1.º A – mejor tercero      2.º B – 2.º C
       1.º C – 2.º mejor tercero  1.º B – 2.º A
     Si un tercero cae contra el primero de su propio grupo, los dos terceros
     se cambian el cruce para no repetir el partido de la fase de grupos. */
  function cuadro(grupos, q) {
    var A = grupos[0].standings, B = grupos[1].standings, C = grupos[2].standings;
    var terc = (q && q.bestThirds ? q.bestThirds : []).slice();
    var mj = terc[0], mj2 = terc[1];
    var choca = (mj && mj.group === A[0].group) || (mj2 && mj2.group === C[0].group);
    var sirve = mj && mj2 && mj2.group !== A[0].group && mj.group !== C[0].group;
    if (choca && sirve) { var tmp = mj; mj = mj2; mj2 = tmp; }
    return [A[0].t, mj && mj.t, B[1].t, C[1].t, C[0].t, mj2 && mj2.t, B[0].t, A[1].t]
      .filter(function (t) { return !!t; });
  }

  global.CWC12 = { ROLES: ROLES, rolDe: rolDe, bombos: bombos, completo: completo,
    reparte: reparte, cuadro: cuadro, ident: ident };
})(window);
