/* =========================================================================
   EL MODO CARRERA ES UN MUNDO APARTE
   Los ascensos, los descensos, los fichajes y los años que cumple cada
   jugador sólo valen dentro de la partida. Al salir de la carrera se
   devuelve el mundo tal y como estaba (para que, por ejemplo, el Sevilla
   siga en LaLiga en «Competiciones continentales» aunque en la carrera
   haya descendido), y al volver se pone otra vez el de la carrera.

     Mundo.captura()        -> foto de ligas, equipos y plantillas
     Mundo.aplica(foto)     -> las devuelve a como estaban en la foto
     Mundo.entra(enPartida) -> al abrir el modo carrera
     Mundo.sale(enPartida)  -> al salir de él
     Mundo.limpio()         -> mundo original, antes de empezar o cargar partida
   ========================================================================= */
(function (global) {
  'use strict';

  var original = null, carrera = null;

  function ligas() { return global.LEAGUES || {}; }

  function captura() {
    var L = ligas(), snap = { ligas: {}, eq: [] };
    Object.keys(L).forEach(function (id) {
      var lg = L[id];
      if (!lg || !lg.teams) return;
      snap.ligas[id] = lg.teams.slice();
      lg.teams.forEach(function (t) {
        snap.eq.push({
          t: t, lg: t.leagueId, nombre: t.league, ovr: t.ovr, fm: t.fm, fmName: t.fmName,
          arr: t.p, filas: (t.p || []).slice(),
          datos: (t.p || []).map(function (x) {
            var c = x.slice();
            /* las fichas llevan marcas propias (p.yo...) además de los datos */
            Object.keys(x).forEach(function (k) { if (isNaN(k)) c[k] = x[k]; });
            return c;
          })
        });
      });
    });
    return snap;
  }

  function aplica(snap) {
    if (!snap) return;
    var L = ligas();
    Object.keys(snap.ligas).forEach(function (id) {
      var lg = L[id];
      if (!lg) return;
      /* en su sitio: hay otros módulos con esta lista en la mano */
      var dentro = lg.teams || (lg.teams = []);
      dentro.length = 0;
      snap.ligas[id].forEach(function (t) { dentro.push(t); });
    });
    snap.eq.forEach(function (e) {
      var t = e.t;
      t.leagueId = e.lg; t.league = e.nombre; t.ovr = e.ovr;
      if (e.fm === undefined) delete t.fm; else t.fm = e.fm;
      if (e.fmName === undefined) delete t.fmName; else t.fmName = e.fmName;
      if (e.arr) {
        e.arr.length = 0;
        e.filas.forEach(function (f) { e.arr.push(f); });
        t.p = e.arr;
      }
      /* las fichas se rellenan en su sitio: cambiarlas por copias rompería
         lo que apunta a ellas */
      e.filas.forEach(function (fila, i) {
        var d = e.datos[i];
        Object.keys(fila).forEach(function (k) { if (isNaN(k)) delete fila[k]; });
        for (var k = 0; k < d.length; k++) fila[k] = d[k];
        fila.length = d.length;
        Object.keys(d).forEach(function (k) { if (isNaN(k)) fila[k] = d[k]; });
      });
    });
  }

  function entra(enPartida) {
    original = captura();
    if (enPartida && carrera) aplica(carrera);
  }
  function sale(enPartida) {
    if (!original) return;
    if (enPartida) carrera = captura();
    aplica(original);
  }
  function limpio() {
    if (original) aplica(original);
    carrera = null;
  }

  global.Mundo = { captura: captura, aplica: aplica, entra: entra, sale: sale, limpio: limpio };
})(typeof window !== 'undefined' ? window : globalThis);
