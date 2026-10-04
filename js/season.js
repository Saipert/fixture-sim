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
    var hayPrevia = (c.pre || []).length >= 2;
    var trasPrevia = hayPrevia ? Math.floor(c.pre.length / 2) : 0;
    if (hayPrevia) j += 2;
    /* los de la previa sólo juegan otra ronda si la competición la tiene */
    var enPlayoff = (c.po || []).length + hereda + (c.playoff ? trasPrevia : 0);
    if (enPlayoff >= 2) j += 2;
    var enGrupos = (c.grupos || []).length + Math.floor(enPlayoff / 2) +
      (c.playoff ? 0 : trasPrevia);
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

    /* Las finales se alinean solas: cada jornada se mira cuántas le quedan
       a cada una y juegan las que van más atrasadas. Con una cuenta hecha
       de antemano siempre se escapaba alguna por una ronda. */
    comps.forEach(function (c) { c.espera = 0; });
    function restan(c) {
      var R = c.R;
      if (!R || R.done) return 0;
      if (R.unaRonda) return Math.max(1, R.pending.length ? 2 : 1);
      if (R.groups && R.phase !== 'ko') {
        var total = R.groups[0].rounds.length;
        var quedanGrupos = Math.max(0, total - R.gi - 1);
        var enKO = (R.q && R.q.qualified ? R.q.qualified.length : R.groups.length * 2) +
          ((R.cfgExtras || 0));
        return quedanGrupos + rondasKO(enKO) * 2;
      }
      if (R.cur) return rondasKO(R.cur.length) * 2;
      return 1;
    }

    /* Una pestaña por competición y una sola a la vista: con todas en
       columna, la que se estaba sorteando se comía la pantalla y las demás
       quedaban en blanco. */
    caja.innerHTML = '<div class="card tb-bar" id="tbBar"></div>' +
      '<div class="tb-camps hidden" id="tbCamp"></div>' +
      '<div class="tb-tabs" id="tbTabs"></div>' +
      '<div class="tb-panel" id="tbCajas"></div>';
    var cajas = caja.querySelector('#tbCajas');
    var activa = comps.length ? comps[0].id : null;
    comps.forEach(function (c) {
      var d = document.createElement('div');
      d.className = 'tb-comp';
      d.innerHTML = '<div class="tb-cuerpo"></div>';
      cajas.appendChild(d);
      c.panel = d;
      c.caja = d.querySelector('.tb-cuerpo');
    });
    /* Lo que viene después de la temporada también es una pestaña: antes
       se colgaba debajo de todas las columnas y había que bajar media
       pantalla para verlo. */
    var extrasTabs = [];
    function apartado(id, nombre) {
      var d = document.createElement('div');
      d.className = 'tb-comp';
      d.innerHTML = '<div class="tb-cuerpo"></div>';
      cajas.appendChild(d);
      var x = { id: id, name: nombre, panel: d, caja: d.querySelector('.tb-cuerpo'), extra: true };
      extrasTabs.push(x);
      return x;
    }
    function todasLasTabs() { return comps.concat(extrasTabs); }
    function enseña(id) { activa = id; pintaTabs(); }
    function estadoDe(c) {
      if (c.extra) return campeones[c.id] ? '🏆 ' + campeones[c.id].n : (c.estado || 'en juego');
      return !c.R ? 'por sortear'
        : c.sorteoAbierto ? 'hay sorteo'
        : c.colaKO ? 'espera a los grupos'
        : c.R.done ? (c.R.champion ? '🏆 ' + c.R.champion.n : 'terminada')
        : c.R.label;
    }
    function pintaTabs() {
      var tabs = caja.querySelector('#tbTabs');
      tabs.innerHTML = todasLasTabs().map(function (c) {
        var avisa = c.sorteoAbierto || (!c.R && fase !== 'fin');
        return '<button class="tb-tab' + (c.id === activa ? ' on' : '') +
          (avisa ? ' avisa' : '') + '" data-c="' + esc(c.id) + '">' +
          (c.logo || '') +
          '<span><b>' + esc(c.name) + '</b><small>' + esc(estadoDe(c)) + '</small></span></button>';
      }).join('');
      Array.prototype.forEach.call(tabs.querySelectorAll('[data-c]'), function (b) {
        b.onclick = function () { enseña(b.dataset.c); };
      });
      todasLasTabs().forEach(function (c) { c.panel.classList.toggle('hidden', c.id !== activa); });
      pintaCampeones();
    }
    /* los campeones, siempre a la vista arriba */
    function pintaCampeones() {
      var d = caja.querySelector('#tbCamp');
      if (!d) return;
      var hechas = todasLasTabs().filter(function (c) { return campeones[c.id]; });
      d.classList.toggle('hidden', !hechas.length);
      d.innerHTML = hechas.map(function (c) {
        var t = campeones[c.id];
        return '<div class="tb-camp" title="' + esc(c.name + ' · ' + t.n) + '">' +
          crest(t, 26) + '<span><small>' + esc(c.name) + '</small><b>' + esc(t.n) + '</b></span></div>';
      }).join('');
    }

    /* ---------------- la barra de mando ---------------- */
    function vivos() {
      return comps.filter(function (c) { return c.R && !c.R.done && !c.R.esperaKO; });
    }
    /* Sólo cuenta como «hay sorteo» el que está abierto de verdad. Los que
       esperan su turno no bloquean el botón: los demás todavía tienen
       grupos que jugar. */
    function conSorteo() { return comps.filter(function (c) { return c.sorteoAbierto; }); }
    /* Nadie juega una eliminatoria mientras quede una fase de grupos por
       terminar, y hasta entonces tampoco se sortea. */
    function enGrupos(c) {
      return c.R && !c.R.done && c.R.groups && c.R.phase !== 'ko' &&
        !c.R.esperaKO && !c.colaKO;
    }
    function quedanGrupos() { return comps.some(enGrupos); }
    function enCuadro(c) { return c.R && (c.R.phase === 'ko' || !c.R.groups); }
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
          : '<button class="primary" id="tbJor"' + (falta.length || corriendo ? ' disabled' : '') +
              '>Jugar la jornada</button>' +
            '<button class="mini" id="tbTodo"' + (falta.length || corriendo ? ' disabled' : '') +
              '>Simular hasta el final</button>') +
        '</div>';
      if (bar.querySelector('#tbJor')) bar.querySelector('#tbJor').onclick = function () { jornada(); };
      if (bar.querySelector('#tbTodo')) bar.querySelector('#tbTodo').onclick = function () {
        var n = bar.querySelector('.tb-now small');
        if (n) n.innerHTML = '<span class="qnext-puntos"><i></i><i></i><i></i></span>';
        setTimeout(todo, 420);
      };
    }
    function repinta() {
      comps.forEach(function (c) { if (c.mando) c.mando.repaint(); });
      /* si la pestaña abierta no tiene nada pendiente y otra está esperando
         un sorteo, se salta sola: con dos a la vez se quedaba uno escondido
         y la barra decía «faltan sorteos» sin enseñar cuál */
      var yo = comps.filter(function (c) { return c.id === activa; })[0];
      if (!yo || !yo.sorteoAbierto) {
        var pide = conSorteo()[0];
        if (pide) activa = pide.id;
      }
      pintaTabs(); pintaBarra();
    }

    /* ---------------- una jornada de todas a la vez ---------------- */
    /* Los terceros de grupo de una competición se van a jugar el pase con
       los segundos de la de abajo. Hay que dárselos antes de que la de
       abajo cierre sus grupos, y como todas las cierran la misma jornada,
       las de arriba juegan primero. */
    function bajaTerceros(c) {
      var destino = ((cfg.cascada || {})[c.id] || {}).terceros;
      if (!destino || c.tercerosHechos || !c.R || !c.R.groups) return;
      if (!c.R.esperaKO && c.R.phase !== 'ko') return;
      var otro = porId(destino);
      if (!otro || !otro.cfgT) { c.tercerosHechos = true; return; }
      var terceros = [];
      c.R.groups.forEach(function (g) {
        if (g.standings && g.standings[2]) terceros.push(g.standings[2].t);
      });
      otro.cfgT.extraKO = terceros;
      if (otro.R) otro.R.cfgExtras = terceros.length;
      c.tercerosHechos = true;
    }
    function ordenDePaso() {
      /* las que alimentan a otra, delante */
      var manda = {};
      Object.keys(cfg.cascada || {}).forEach(function (id) {
        var t = cfg.cascada[id].terceros;
        if (t) manda[t] = (manda[t] || 0) + 1;
      });
      return comps.slice().sort(function (a, b) { return (manda[a.id] || 0) - (manda[b.id] || 0); });
    }
    /* las que juegan esta jornada */
    function lasDeHoy() {
      var listas = ordenDePaso().filter(function (c) {
        return c.R && !c.R.done && !c.R.esperaKO && !c.colaKO;
      });
      /* si alguien sigue en grupos, las eliminatorias esperan */
      if (quedanGrupos()) listas = listas.filter(function (c) { return !enCuadro(c); });
      /* en el cuadro final sólo juegan las que van más atrasadas, para que
         todas lleguen a su final la misma jornada */
      if (fase === 'torneo' && listas.length > 1) {
        var tope = 0;
        listas.forEach(function (c) { var r = restan(c); if (r > tope) tope = r; });
        listas = listas.filter(function (c) { return restan(c) >= tope; });
      }
      return listas;
    }
    function cierraJornada(listas) {
      listas.forEach(bajaTerceros);
      tic++;
      corriendo = false;
      repinta();
      miraSorteos();
      revisaFase();
    }
    /* Los partidos no salen de golpe: van cayendo uno a uno, como en la
       simulación rápida de siempre. Una jornada de trece cruces tarda poco
       más de un segundo. */
    var VELOCIDAD = 110;
    var corriendo = false;
    function jornada(alAcabar) {
      if (corriendo || conSorteo().length) { if (alAcabar) alAcabar(); return; }
      var listas = lasDeHoy();
      if (!listas.length) { cierraJornada(listas); if (alAcabar) alAcabar(); return; }
      corriendo = true;
      /* la ronda y la tanda con que entra cada una: la jornada acaba ahí */
      var hasta = {};
      listas.forEach(function (c) {
        var m = Runner.peek(c.R);
        hasta[c.id] = { label: c.R.label, tanda: m ? (m.note || '') : '' };
      });
      pintaBarra();
      function paso() {
        var algo = false;
        listas.forEach(function (c) {
          var h = hasta[c.id];
          if (c.R.done || c.R.label !== h.label) return;
          var m = Runner.peek(c.R);
          if (!m || (m.note || '') !== h.tanda) return;
          Runner.step(c.R);
          /* en cuanto cierra sus grupos, sus terceros bajan: la de abajo
             monta su cuadro en este mismo paso y los necesita ya */
          bajaTerceros(c);
          algo = true;
        });
        comps.forEach(function (c) { if (c.mando) c.mando.repaint(); });
        if (algo) { setTimeout(paso, VELOCIDAD); return; }
        cierraJornada(listas);
        if (alAcabar) alAcabar();
      }
      paso();
    }
    /* «Simular hasta el final» no se para a enseñar nada: va de corrido */
    function todo() {
      var guarda = 0;
      while (fase !== 'fin' && !conSorteo().length && !corriendo && guarda++ < 400) {
        var listas = lasDeHoy();
        if (!listas.length) { cierraJornada(listas); continue; }
        var antes = tic;
        listas.forEach(function (c) { Runner.stepRound(c.R); bajaTerceros(c); });
        cierraJornada(listas);
        if (tic === antes) break;
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
          c.R.unaRonda = true;
          if (c.logo) c.R.logo = c.logo;
          if (c.logo) c.R.logo = c.logo;
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
        /* quien no tiene play-off pasa de la previa directo a los grupos */
        var donde = c.playoff ? 'po' : 'grupos';
        c[donde] = (c[donde] || []).concat(c.R.ganadores || []);
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
          c.R.unaRonda = true;
          if (c.logo) c.R.logo = c.logo;
          if (c.logo) c.R.logo = c.logo;
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
        enseña(c.id);
        Sorteo.grupos(c.caja, {
          campo: campo, nGrupos: st.groups, azar: false,
          titulo: 'Sorteo de la fase de grupos',
          sub: c.name + ' · ' + campo.length + ' equipos en ' + st.groups + ' grupos de ' + st.groupSize,
          boton: 'Listo',
          onListo: function (gs) {
            /* el cfg se guarda: cuando la competición de arriba acabe sus
               grupos, sus terceros se meten aquí como «extraKO», que es lo
               que mira el motor al montar las eliminatorias */
            c.cfgT = {
              name: c.name, groupSize: c.k.groupSize, groups: gs,
              neutral: true, legs: 2, groupDouble: true,
              nombrePrimera: 'Play-off de octavos',
              antesDelKO: function (R2) { sorteoKO(c, R2); }
            };
            c.R = Runner.tournament(campo, c.cfgT);
            if (c.logo) c.R.logo = c.logo;
          if (c.logo) c.R.logo = c.logo;
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
        if (c.logo) c.R.logo = c.logo;
        c.mando = Runner.mount(c.caja, c.R);
        sigue();
      });
    }

    /* el sorteo de cada eliminatoria, ronda a ronda */
    function sorteoKO(c, R) {
      if (!R.esperaKO) return;
      c.colaKO = R;
      miraSorteos();
    }
    /* los sorteos encolados se abren de uno en uno, y sólo cuando no queda
       ninguna fase de grupos en marcha */
    function miraSorteos() {
      if (quedanGrupos()) { pintaTabs(); pintaBarra(); return; }
      /* de uno en uno: con dos bombos abiertos a la vez no se sabe cuál
         se está sorteando */
      if (comps.some(function (c) { return c.sorteoAbierto; })) return;
      var cola = comps.filter(function (c) { return c.colaKO && !c.sorteoAbierto; });
      if (!cola.length) return;
      var c = cola[0];
      c.sorteoAbierto = true;
      abreSorteoKO(c, c.colaKO);
    }
    function abreSorteoKO(c, R) {
      var e = R.esperaKO;
      if (!e) { c.colaKO = null; c.sorteoAbierto = false; miraSorteos(); return; }
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
      enseña(c.id);
      Sorteo.cruces(cajita, {
        bombos: [b1, b2], nombres: nombres, esperan: byes, choca: cfg.choca || null,
        titulo: 'Sorteo de las eliminatorias',
        sub: c.name + ' · ' + juegan.length + ' equipos',
        boton: 'Listo',
        onListo: function (campo, esperan) {
          cajita.remove();
          R.seguirKO(campo, esperan, true);
          c.colaKO = null; c.sorteoAbierto = false;
          if (c.mando) c.mando.repaint();
          repinta();
          miraSorteos();
        }
      });
      pintaBarra();
    }

    /* el sorteo de una ronda suelta: juegan todos, y si son impares el
       mejor pasa de oficio */
    function sorteoRonda(c, equipos, titulo, listo) {
      enseña(c.id);
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
      unoAUno(cola, function (sc, sigue) {
        var a = campeones[sc.de[0]], b = campeones[sc.de[1]];
        if (!a || !b) { sigue(); return; }
        var x = apartado(sc.id, sc.nombre);
        enseña(x.id);
        var R = Runner.knockout([a, b], {
          name: sc.nombre, legs: sc.legs, unaRonda: true, ordenFijo: true,
          neutral: sc.legs === 1
        });
        var m = Runner.mount(x.caja, R);
        R.alTerminar = function (fin) {
          campeones[sc.id] = (fin.ganadores || [])[0] || null;
          m.repaint(); pintaTabs();
          sigue();
        };
        Runner.stepAll(R);
      }, function () { mundialDeClubes(); });
    }
    function mundialDeClubes() {
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
      var x = apartado('cwc', cfg.cwc.nombre);
      enseña(x.id);
      var d = x.caja;
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
    pintaTabs();
    return { campeones: function () { return campeones; } };
  }

  /* «Temporada» ya estaba cogido: competitions.js lo usa para escribir
     «2026/2027», y al pisarlo se caía el modo carrera entero. */
  global.Tablero = { corre: corre, jornadasDe: jornadasDe };
})(window);
