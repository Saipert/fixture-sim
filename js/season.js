/* =========================================================================
   TEMPORADA SIMULTÁNEA
   Varias competiciones a la vez, jornada a jornada: primero todas las
   primeras jornadas, después todas las segundas. Las que tienen menos
   partidos esperan al principio, para que las finales caigan todas el
   mismo día. Y antes de cada ronda se sortea: la previa, el play-off, los
   grupos y cada eliminatoria.

   Se usa así:
     Temporada.corre(caja, {
       nombre, comps: [{ id, name, k, pre, po, grupos }],
       supercopas: [{ nombre, de: [idA, idB], legs }],
       cwc: { nombre, plazas, confDe },
       alAcabar: function (campeones) {}
     });
   ========================================================================= */
(function (global) {
  'use strict';
  function esc(s) { return String(s == null ? '' : s).replace(/[&<>"]/g, function (c) {
    return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c];
  }); }
  function crest(t, s) { return global.Crest ? Crest.html(t, s) : ''; }

  /* cuántas jornadas le quedan a una competición desde que entra: dos por
     cada ronda a ida y vuelta y seis de grupos */
  function rondasKO(n) {
    var r = 0, k = 1;
    while (k < n) { k *= 2; r++; }
    return r;
  }
  function jornadasDe(c) {
    var j = 0;
    var hereda = c.hereda || 0;        /* los que le caen de otra competición */
    if ((c.pre || []).length >= 2) j += 2;
    if ((c.po || []).length + hereda >= 2) j += 2;
    var enGrupos = (c.grupos || []).length +
      (((c.po || []).length + hereda) ? Math.floor(((c.po || []).length + hereda) / 2) : 0) +
      ((c.pre || []).length ? Math.floor(c.pre.length / 4) : 0);
    if (c.k.groupSize) {
      j += 6;                                   /* grupos de cuatro, ida y vuelta */
      j += rondasKO(Math.max(2, enGrupos / 2)) * 2;
    } else {
      j += rondasKO(Math.max(2, enGrupos)) * 2;
    }
    return j;
  }

  function corre(caja, cfg) {
    var comps = cfg.comps.slice();
    var campeones = {};
    var fase = 'previa';
    var tic = 0;

    /* las que menos jornadas tienen entran más tarde */
    var maxJ = 0;
    comps.forEach(function (c) { c.jornadas = jornadasDe(c); if (c.jornadas > maxJ) maxJ = c.jornadas; });
    comps.forEach(function (c) { c.espera = maxJ - c.jornadas; });

    caja.innerHTML = '<div class="card tb-bar" id="tbBar"></div>' +
      '<div class="tempboard" id="tbCajas"></div>';
    var cajas = caja.querySelector('#tbCajas');
    comps.forEach(function (c) {
      var d = document.createElement('div');
      d.className = 'tb-comp';
      d.innerHTML = '<h3 class="tb-tit">' + esc(c.name) + '<small></small></h3><div class="tb-cuerpo"></div>';
      cajas.appendChild(d);
      c.caja = d.querySelector('.tb-cuerpo');
      c.rotulo = d.querySelector('.tb-tit small');
    });

    /* ---------------- la barra de mando ---------------- */
    function vivos() {
      return comps.filter(function (c) { return c.R && !c.R.done && !c.R.esperaKO && !c.espera; });
    }
    function conSorteo() { return comps.filter(function (c) { return c.R && c.R.esperaKO; }); }
    function pintaBarra() {
      var bar = caja.querySelector('#tbBar');
      var falta = conSorteo();
      var jugando = comps.filter(function (c) { return c.R && !c.R.done; });
      var txt = fase === 'fin' ? 'Temporada terminada'
        : falta.length ? 'Faltan sorteos: ' + falta.map(function (c) { return c.name; }).join(', ')
        : 'Jornada ' + (tic + 1) + ' · ' + jugando.length + ' competiciones en juego';
      bar.innerHTML = '<div class="tb-now"><b>' + esc(cfg.nombre) + '</b><small>' + esc(txt) + '</small></div>' +
        '<div class="tb-btns">' +
        (fase === 'fin' ? ''
          : '<button class="primary" id="tbJor"' + (falta.length ? ' disabled' : '') + '>Jugar la jornada</button>' +
            '<button class="mini" id="tbTodo"' + (falta.length ? ' disabled' : '') + '>Simular hasta el final</button>') +
        '</div>';
      if (bar.querySelector('#tbJor')) bar.querySelector('#tbJor').onclick = function () { jornada(); };
      if (bar.querySelector('#tbTodo')) bar.querySelector('#tbTodo').onclick = function () { todo(); };
    }
    function pintaRotulos() {
      comps.forEach(function (c) {
        var t = c.espera ? 'entra en ' + c.espera + ' jornada' + (c.espera === 1 ? '' : 's')
          : !c.R ? 'esperando el sorteo'
          : c.R.esperaKO ? 'hay que sortear'
          : c.R.done ? (c.R.champion ? '🏆 ' + c.R.champion.n : 'terminada')
          : c.R.label;
        c.rotulo.textContent = t;
      });
    }
    function repinta() { comps.forEach(function (c) { if (c.mando) c.mando.repaint(); }); pintaRotulos(); pintaBarra(); }

    /* ---------------- una jornada de todas a la vez ---------------- */
    function jornada() {
      if (conSorteo().length) return;
      comps.forEach(function (c) { if (c.espera) c.espera--; });
      vivos().forEach(function (c) { Runner.stepRound(c.R); });
      tic++;
      repinta();
      revisaFase();
    }
    function todo() {
      var guarda = 0;
      while (fase !== 'fin' && !conSorteo().length && guarda++ < 400) {
        var antes = fase, antesTic = tic;
        jornada();
        if (fase === antes && tic === antesTic) break;
      }
    }

    /* ---------------- el paso de una fase a la siguiente ---------------- */
    function todasListas() {
      return comps.every(function (c) { return !c.R || c.R.done; });
    }
    function revisaFase() {
      if (fase === 'previa' && todasListas()) { recogePrevia(); sorteaPlayoff(); return; }
      if (fase === 'playoff' && todasListas()) { recogePlayoff(); sorteaGrupos(); return; }
      if (fase === 'torneo' && todasListas()) { guardaCampeones(); extras(); return; }
    }

    /* ---------------- 1 · la ronda previa ---------------- */
    function sorteaPrevia() {
      fase = 'previa';
      var cola = comps.filter(function (c) { return c.pre && c.pre.length >= 2; });
      unoAUno(cola, function (c, sigue) {
        sorteoRonda(c, c.pre, c.name + ' · ronda previa', function (campo, byes) {
          c.R = Runner.knockout(byes.concat(campo), {
            name: c.name + ' · ronda previa', legs: 2, unaRonda: true, ordenFijo: true,
            byesFijos: byes.length ? byes : null
          });
          c.mando = Runner.mount(c.caja, c.R);
          sigue();
        });
      }, function () { repinta(); });
    }
    function porId(id) { return comps.filter(function (x) { return x.id === id; })[0]; }
    /* los que caen no se eligen a dedo: bajan a la competición de abajo,
       que es de donde salen de verdad */
    function reparteCaidos(c, perdedores, cual) {
      var ca = (cfg.cascada || {})[c.id];
      var d = ca && ca[cual];
      if (!d) return;
      var otro = porId(d.a);
      if (!otro) return;
      otro[d.fase] = (otro[d.fase] || []).concat(perdedores);
    }
    function recogePrevia() {
      comps.forEach(function (c) {
        if (!c.R) return;
        c.po = (c.po || []).concat(c.R.ganadores || []);
        reparteCaidos(c, c.R.perdedores || [], 'previa');
        c.R = null; c.mando = null; c.caja.innerHTML = '';
      });
    }

    /* ---------------- 2 · el play-off ---------------- */
    function sorteaPlayoff() {
      fase = 'playoff';
      var cola = comps.filter(function (c) { return c.po && c.po.length >= 2; });
      if (!cola.length) { sorteaGrupos(); return; }
      unoAUno(cola, function (c, sigue) {
        sorteoRonda(c, c.po, c.name + ' · play-off', function (campo, byes) {
          c.R = Runner.knockout(byes.concat(campo), {
            name: c.name + ' · play-off', legs: 2, unaRonda: true, ordenFijo: true,
            byesFijos: byes.length ? byes : null
          });
          c.mando = Runner.mount(c.caja, c.R);
          sigue();
        });
      }, function () { repinta(); });
    }
    function recogePlayoff() {
      comps.forEach(function (c) {
        if (!c.R) return;
        c.grupos = (c.grupos || []).concat(c.R.ganadores || []);
        reparteCaidos(c, c.R.perdedores || [], 'playoff');
        c.R = null; c.mando = null; c.caja.innerHTML = '';
      });
    }

    /* ---------------- 3 · grupos y eliminatorias ---------------- */
    function sorteaGrupos() {
      fase = 'grupos';
      var cola = comps.slice();
      unoAUno(cola, function (c, sigue) {
        var campo = cfg.cuadra ? cfg.cuadra(c, c.grupos || []) : (c.grupos || []);
        c.grupos = campo;
        if (campo.length < 4) { sigue(); return; }
        var st = Comp.structureFor(campo.length, c.k.groupSize);
        if (!st.ok || st.mode !== 'groups') { montaSoloCuadro(c, campo, sigue); return; }
        Sorteo.grupos(c.caja, {
          campo: campo, nGrupos: st.groups, azar: false,
          titulo: 'Sorteo de la fase de grupos',
          sub: c.name + ' · ' + campo.length + ' equipos en ' + st.groups + ' grupos de ' + st.groupSize,
          boton: 'Listo',
          onListo: function (gs) {
            c.R = Runner.tournament(campo, {
              name: c.name, groupSize: c.k.groupSize, groups: gs,
              neutral: true, legs: 2, groupDouble: true,
              antesDelKO: function (R2) { sorteoKO(c, R2); }
            });
            c.mando = Runner.mount(c.caja, c.R);
            sigue();
          }
        });
      }, function () { fase = 'torneo'; repinta(); });
    }
    /* las que no tienen grupos: cuadro directo, y entran más tarde para
       que su final caiga con las demás */
    function montaSoloCuadro(c, campo, sigue) {
      sorteoRonda(c, campo, c.name, function (lista, byes) {
        c.R = Runner.knockout(byes.concat(lista), {
          name: c.name, legs: 2, ordenFijo: true,
          byesFijos: byes.length ? byes : null
        });
        c.mando = Runner.mount(c.caja, c.R);
        sigue();
      });
    }

    /* el sorteo de cada eliminatoria, ronda a ronda */
    function sorteoKO(c, R) {
      var e = R.esperaKO;
      if (!e) return;
      var byes = (e.byes || []).slice();
      var juegan = e.campo.filter(function (t) { return byes.indexOf(t) < 0; });
      var b1, b2, nombres;
      if (e.bombos) { b1 = e.bombos[0].slice(); b2 = e.bombos[1].slice();
        nombres = ['Segundos de grupo', 'Llegan de fuera']; }
      else {
        var orden = juegan.slice().sort(function (a, b) { return (b.ovr || 0) - (a.ovr || 0); });
        b1 = orden.slice(0, Math.ceil(orden.length / 2));
        b2 = orden.slice(Math.ceil(orden.length / 2));
        nombres = ['Cabezas de serie', 'Resto'];
      }
      var cajita = document.createElement('div');
      c.caja.insertBefore(cajita, c.caja.firstChild);
      Sorteo.cruces(cajita, {
        bombos: [b1, b2], nombres: nombres, esperan: byes, choca: cfg.choca || null,
        titulo: 'Sorteo de las eliminatorias',
        sub: c.name + ' · ' + juegan.length + ' equipos',
        boton: 'Listo',
        onListo: function (campo, esperan) {
          cajita.remove();
          R.seguirKO(campo, esperan, true);
          if (c.mando) c.mando.repaint();
          repinta();
        }
      });
      pintaBarra();
    }

    /* el sorteo de una ronda suelta: juegan todos, y si son impares el
       mejor pasa de oficio */
    function sorteoRonda(c, equipos, titulo, listo) {
      var juegan = equipos.slice(), byes = [];
      if (juegan.length % 2) {
        var mejor = juegan.slice().sort(function (a, b) { return (b.ovr || 0) - (a.ovr || 0); })[0];
        byes = [mejor];
        juegan = juegan.filter(function (t) { return t !== mejor; });
      }
      if (juegan.length < 4) { listo(juegan, byes); return; }
      var orden = juegan.slice().sort(function (a, b) { return (b.ovr || 0) - (a.ovr || 0); });
      Sorteo.cruces(c.caja, {
        bombos: [orden.slice(0, Math.ceil(orden.length / 2)), orden.slice(Math.ceil(orden.length / 2))],
        nombres: ['Cabezas de serie', 'Resto'], esperan: byes, choca: cfg.choca || null,
        titulo: 'Sorteo · ' + titulo,
        sub: equipos.length + ' equipos · ' + (juegan.length / 2) + ' cruces',
        boton: 'Listo',
        onListo: function (campo, esperan) { listo(campo, esperan || byes); }
      });
    }

    /* ---------------- 4 · supercopas y Mundial de Clubes ---------------- */
    function guardaCampeones() {
      comps.forEach(function (c) { campeones[c.id] = c.R ? c.R.champion : null; });
    }
    function extras() {
      fase = 'extras';
      var cola = (cfg.supercopas || []).slice();
      var cajaEx = document.createElement('div');
      cajaEx.className = 'tb-comp';
      cajaEx.innerHTML = '<h3 class="tb-tit">Después de la temporada<small></small></h3>' +
        '<div class="tb-cuerpo"></div>';
      cajas.appendChild(cajaEx);
      var dentro = cajaEx.querySelector('.tb-cuerpo');
      unoAUno(cola, function (sc, sigue) {
        var a = campeones[sc.de[0]], b = campeones[sc.de[1]];
        if (!a || !b) { sigue(); return; }
        var R = Runner.knockout([a, b], {
          name: sc.nombre, legs: sc.legs, unaRonda: true, ordenFijo: true,
          neutral: sc.legs === 1
        });
        var d = document.createElement('div');
        dentro.appendChild(d);
        var m = Runner.mount(d, R);
        R.alTerminar = function (fin) {
          campeones[sc.id] = (fin.ganadores || [])[0] || null;
          m.repaint();
          sigue();
        };
        Runner.stepAll(R);
      }, function () { mundialDeClubes(dentro); });
    }
    function mundialDeClubes(dentro) {
      if (!cfg.cwc) { fin(); return; }
      var plazas = cfg.cwc.plazas, puestos = {}, ocho = [];
      comps.forEach(function (c) {
        var t = campeones[c.id];
        if (!t) return;
        var z = c.conf || (cfg.cwc.confDe ? cfg.cwc.confDe(t) : '');
        if ((puestos[z] || 0) >= (plazas[z] || 0)) return;
        puestos[z] = (puestos[z] || 0) + 1;
        ocho.push(t);
      });
      while (ocho.length % 4) ocho.pop();
      if (ocho.length < 4) { fin(); return; }
      var st = Comp.structureFor(ocho.length, 4);
      var d = document.createElement('div');
      dentro.appendChild(d);
      Sorteo.grupos(d, {
        campo: ocho, nGrupos: st.groups, azar: false,
        zonaDe: cfg.cwc.confDe || null,
        titulo: 'Sorteo del Mundial de Clubes',
        sub: cfg.cwc.nombre + ' · ' + ocho.length + ' equipos en ' + st.groups + ' grupos de ' + st.groupSize,
        boton: 'Listo',
        onListo: function (gs) {
          var R = Runner.tournament(ocho, {
            name: cfg.cwc.nombre, groupSize: 4, groups: gs,
            neutral: true, legs: 1, groupDouble: false, tercerPuesto: true
          });
          var m = Runner.mount(d, R);
          R.alTerminar = function (f2) { campeones.cwc = f2.champion || null; m.repaint(); fin(); };
          Runner.stepAll(R);
        }
      });
    }
    function fin() {
      fase = 'fin';
      repinta();
      if (cfg.alAcabar) cfg.alAcabar(campeones);
    }

    /* un paso detrás de otro, esperando a que cada uno avise */
    function unoAUno(lista, hace, alFinal) {
      var i = 0;
      function sigue() {
        if (i >= lista.length) { alFinal(); return; }
        var x = lista[i++];
        hace(x, sigue);
      }
      sigue();
    }

    sorteaPrevia();
    pintaBarra();
    pintaRotulos();
    return { campeones: function () { return campeones; } };
  }

  global.Temporada = { corre: corre, jornadasDe: jornadasDe };
})(window);
