/* =========================================================================
   ESTRELLAS DE VALORACIÓN
   Traduce el global de un equipo a estrellas, de media en media:
     85+  5    80-84 4,5   75-79 4    70-74 3,5   65-69 3
     60-64 2,5 55-59 2     50-54 1,5  45-49 1     menos de 45  media
     Stars.n(ovr)    -> 0,5 … 5
     Stars.html(ovr) -> las cinco estrellas, con las llenas recortadas encima
   ========================================================================= */
(function (global) {
  'use strict';

  function n(ovr) {
    /* 45-49 son dos medias estrellas; cada tramo de 5 suma otra media */
    var m = Math.floor((Number(ovr) - 45) / 5) + 2;
    return Math.max(1, Math.min(10, m)) / 2;
  }

  function texto(v) {
    return String(v).replace('.', ',') + (v === 1 ? ' estrella' : ' estrellas');
  }

  /* cinco apagadas y encima las encendidas, recortadas al porcentaje justo:
     así la media estrella sale exacta sin depender de ningún glifo raro */
  function html(ovr, cls) {
    var v = n(ovr), t = texto(v);
    return '<span class="stars' + (cls ? ' ' + cls : '') + '" style="--p:' + (v * 20) + '%"' +
      ' title="' + t + '" aria-label="' + t + '">' +
      '<span class="sb">★★★★★</span><span class="sf">★★★★★</span></span>';
  }

  global.Stars = { n: n, texto: texto, html: html };
})(window);
