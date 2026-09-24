/* =========================================================================
   VISTA DE TORNEO
   Le pone a cualquier torneo del Runner la misma cara que la sección del
   Mundial: el grupo que se está jugando con sus resultados al lado, el
   partido siguiente en grande, las tablas de los demás grupos a un clic y
   la llave de las eliminatorias dibujada entera desde el primer momento.

     TourView.attach(R, { title })

   Se apoya en los ganchos que ya expone Runner.mount: extraHTML, tailHTML,
   onStateClick, enJuego, hideLog.
   ========================================================================= */
(function (global) {
  'use strict';

  var esc = function (s) {
    return String(s == null ? '' : s).replace(/&/g, '&amp;').replace(/</g, '&lt;')
      .replace(/>/g, '&gt;').replace(/"/g, '&quot;');
  };
  function crest(t, s) {
    return '<span class="cw" style="width:' + s + 'px;height:' + s + 'px">' +
      global.Crest.html(t, s) + '</span>';
  }
  function cod(t) { return esc(t.s || t.n.slice(0, 3)).toUpperCase(); }
  function apellido(n) {
    var p = String(n || '').trim().split(' ');
    return p.length > 1 ? p[p.length - 1] : p[0];
  }
  function minutos(g) { return g.mins.map(function (m) { return m + "'"; }).join(', '); }
  /* la lista de goleadores de un lado, con sus minutos */
  function listaGoles(l, largo) {
    if (!l || !l.length) return '';
    return l.map(function (g) {
      return '<i>' + esc(largo ? g.n : apellido(g.n)) + ' <u>' + minutos(g) + '</u></i>';
    }).join('');
  }
  function resumenGoles(r) {
    var todos = (r.gh || []).concat(r.ga || []);
    if (!todos.length) return '';
    return todos.map(function (g) { return apellido(g.n) + ' ' + minutos(g); }).join(' · ');
  }
  function corto(nombre) { return String(nombre || '').split(' · ').pop(); }
  /* «Ida 2-1» para el que va a jugar la vuelta. El marcador se da en el
     orden del partido que toca: primero el local de hoy. */
  function idaDe(m) {
    if (!m || !m.tie || !m.tie.leg1 || m.note !== 'vuelta') return null;
    var s1 = m.tie.leg1;
    return { local: s1[1], visita: s1[0] };
  }
  function idaTexto(m) {
    var i = idaDe(m);
    return i ? 'Ida ' + i.local + '-' + i.visita : '';
  }
  /* el global de la eliminatoria, visto desde el local de la vuelta */
  function globalDe(r) {
    if (!r || !r.tie || !r.tie.agg || r.note !== 'vuelta') return null;
    var t = r.tie;
    var local = t.agg[1], visita = t.agg[0];        /* en la vuelta manda t.b */
    return {
      local: local, visita: visita,
      quien: t.w ? t.w.n : null,
      pen: t.pens ? t.pens.b + '-' + t.pens.a : null
    };
  }

  function attach(R, opts) {
    opts = opts || {};

    R.hideLog = true;      /* los resultados se pintan aquí al lado */
    R.hideGroups = true;   /* las tablas van dentro del panel del grupo */
    R.hideKO = true;       /* en vez de la lista de cruces, la llave entera */
    R.hideTable = true;    /* la clasificación va al lado de los partidos */

    /* el runner avisa qué partido está rodando, para enseñarlo antes del marcador */
    R.enJuego = function (m) { R.rodando = m || null; };

    R.onStateClick = function (accion) {
      if (accion.indexOf('grupo:') === 0) {
        var v = accion.slice(6);
        R.grupoVista = (v === 'auto') ? null : +v;
        return;
      }
      if (accion === 'grupos') R.gruposAbiertos = !R.gruposAbiertos;
    };

    /* ------------------------------------------------------------------
       TABLAS DE GRUPO
       ------------------------------------------------------------------ */
    function corte() { return (R.structure && R.structure.perGroup) || 1; }

    function tablaGrupoHTML(g) {
      var c = corte();
      return '<table><thead><tr><th class="num">#</th><th>Equipo</th>' +
        '<th class="num">PJ</th><th class="num">Pts</th><th class="num">DG</th></tr></thead><tbody>' +
        g.standings.map(function (r, i) {
          return '<tr class="' + (i < c ? 'q-yes' : 'q-no') + '">' +
            '<td class="num">' + (i + 1) + '</td>' +
            '<td><div class="tname">' + crest(r.t, 18) + '<span>' + esc(r.t.n) + '</span></div></td>' +
            '<td class="num">' + r.pj + '</td><td class="num"><b>' + r.pts + '</b></td>' +
            '<td class="num">' + (r.gf - r.gc > 0 ? '+' : '') + (r.gf - r.gc) + '</td></tr>';
        }).join('') + '</tbody></table>';
    }

    /* ------------------------------------------------------------------
       EL PARTIDO DE AHORA MISMO
       ------------------------------------------------------------------ */
    function ultimoResultado() {
      var lg = R.log.length ? R.log : (R.prevLog || []);
      return lg.length ? lg[lg.length - 1] : null;
    }
    function etiqueta(nota, varios) {
      if (!varios || !nota) return '';
      return '<i>' + esc(String(nota).split('Grupo ').pop()) + '</i>';
    }
    function siguienteLinea() {
      var ps = (R.pending || []).slice(R.idx);
      if (!ps.length) return '<div class="qsig vacia">Ronda completa</div>';
      var m = ps[0];
      var ida1 = idaTexto(m);
      return '<div class="qsig" title="' + esc(m.h.n) + ' — ' + esc(m.a.n) +
        (ida1 ? ' · ' + ida1 : '') + '">' +
        '<span class="qsig-tag">A continuación</span>' +
        crest(m.h, 20) + '<b>' + cod(m.h) + '</b><em>v</em>' +
        '<b>' + cod(m.a) + '</b>' + crest(m.a, 20) +
        (ida1 ? '<u class="qida-min">' + esc(ida1) + '</u>' : '') + '</div>';
    }

    function destacadoHTML() {
      if (R.rodando) {
        var j = R.rodando;
        return '<div class="qnext jugando"><span class="qnext-tag">En juego</span>' +
          '<div class="qnext-duelo">' +
          '<div class="qnext-eq">' + crest(j.h, 38) + '<b>' + esc(j.h.n) + '</b></div>' +
          '<span class="qnext-puntos"><i></i><i></i><i></i></span>' +
          '<div class="qnext-eq">' + crest(j.a, 38) + '<b>' + esc(j.a.n) + '</b></div>' +
          '</div>' + (j.note ? '<small>' + esc(j.note) + '</small>' : '') + '</div>';
      }
      var r = ultimoResultado();
      if (!r) {
        var ps = (R.pending || []).slice(R.idx);
        if (!ps.length) return '<p class="hint">Ronda completa.</p>';
        var m = ps[0];
        var ida = idaDe(m);
        return '<div class="qnext"><span class="qnext-tag">Próximo partido</span>' +
          '<div class="qnext-duelo">' +
          '<div class="qnext-eq">' + crest(m.h, 38) + '<b>' + esc(m.h.n) + '</b></div>' +
          '<span class="qnext-vs">' + (ida ? '<i class="qida">' + ida.local + '-' + ida.visita +
            '</i><u>en la ida</u>' : 'vs') + '</span>' +
          '<div class="qnext-eq">' + crest(m.a, 38) + '<b>' + esc(m.a.n) + '</b></div>' +
          '</div>' + (m.note ? '<small>' + esc(m.note) + '</small>' : '') + '</div>';
      }
      var gh = r.s[0] > r.s[1] || (r.pens && r.pens.a > r.pens.b);
      var ga = r.s[1] > r.s[0] || (r.pens && r.pens.b > r.pens.a);
      var extra = r.pens ? '<small>penales ' + r.pens.a + '-' + r.pens.b + '</small>' : '';
      var gl = globalDe(r);
      var globalHTML = gl
        ? '<div class="qglobal"><span>Global</span><b>' + gl.local + '-' + gl.visita + '</b>' +
          (gl.pen ? '<u>penales ' + esc(gl.pen) + '</u>' : '') +
          (gl.quien ? '<em>pasa ' + esc(gl.quien) + '</em>' : '') + '</div>'
        : '';
      var goles = (r.gh && r.gh.length) || (r.ga && r.ga.length)
        ? '<div class="qgoles"><span class="qg izq">' + listaGoles(r.gh, true) + '</span>' +
          '<span class="qg-bola">⚽</span>' +
          '<span class="qg der">' + listaGoles(r.ga, true) + '</span></div>'
        : '';
      return '<div class="qnext hecho"><span class="qnext-tag">Resultado</span>' +
        '<div class="qnext-duelo">' +
        '<div class="qnext-eq' + (gh ? ' gana' : '') + '">' + crest(r.h, 38) +
        '<b>' + esc(r.h.n) + '</b></div>' +
        '<span class="qnext-marc">' + r.s[0] + '<i>-</i>' + r.s[1] + '</span>' +
        '<div class="qnext-eq' + (ga ? ' gana' : '') + '">' + crest(r.a, 38) +
        '<b>' + esc(r.a.n) + '</b></div>' +
        '</div>' + goles + globalHTML + extra +
        (r.note ? '<small>' + esc(r.note) + '</small>' : '') +
        siguienteLinea() + '</div>';
    }

    function porJugarHTML(varios) {
      var ps = (R.pending || []).slice(R.idx);
      if (!ps.length) return '<p class="hint">Ronda completa.</p>';
      return '<div class="qres">' + ps.map(function (x, i) {
        var ida2 = idaTexto(x);
        return '<div class="qrline' + (i ? '' : ' next') + '" title="' +
          esc(x.h.n) + ' — ' + esc(x.a.n) + (ida2 ? ' · ' + ida2 : '') + '">' +
          crest(x.h, 20) + '<span>' + cod(x.h) + '</span><em>v</em>' +
          '<span>' + cod(x.a) + '</span>' + crest(x.a, 20) +
          (ida2 ? '<u class="qida-min">' + esc(ida2) + '</u>' : '') +
          etiqueta(x.note, varios) + '</div>';
      }).join('') + '</div>';
    }
    function jugadosHTML(varios) {
      var todos = R.log.length ? R.log : (R.prevLog || []);
      var lg = todos.slice(0, -1);        /* el último va en grande */
      if (!lg.length) return '<p class="hint">Nada más por ahora.</p>';
      return '<div class="qres">' + lg.map(function (r) {
        var pen = r.pens ? '<u>p ' + r.pens.a + '-' + r.pens.b + '</u>' : '';
        var gl2 = globalDe(r);
        var res = resumenGoles(r);
        return '<div class="qrbloque"><div class="qrline done" title="' + esc(r.h.n) + ' — ' + esc(r.a.n) +
          (res ? ' · ' + esc(res) : '') + '">' +
          crest(r.h, 20) + '<span>' + cod(r.h) + '</span>' +
          '<b>' + r.s[0] + '-' + r.s[1] + '</b>' + pen +
          '<span>' + cod(r.a) + '</span>' + crest(r.a, 20) + etiqueta(r.note, varios) + '</div>' +
          (gl2 ? '<div class="qrgol glob">global ' + gl2.local + '-' + gl2.visita +
            (gl2.quien ? ' · pasa ' + esc(gl2.quien) : '') + '</div>' : '') +
          (res ? '<div class="qrgol">' + esc(res) + '</div>' : '') + '</div>';
      }).join('') + '</div>';
    }

    /* ------------------------------------------------------------------
       QUÉ GRUPO SE ENSEÑA
       ------------------------------------------------------------------ */
    function grupoEnJuego() {
      var nx = R.pending && R.pending[R.idx];
      if (nx && nx.note) return nx.note;
      var lg = R.log.length ? R.log : (R.prevLog || []);
      for (var i = lg.length - 1; i >= 0; i--) if (lg[i].note) return lg[i].note;
      return R.groups[0] ? R.groups[0].name : '';
    }
    function grupoVivo() {
      var gname = grupoEnJuego();
      for (var i = 0; i < R.groups.length; i++) if (R.groups[i].name === gname) return i;
      return 0;
    }
    function grupoMostrado() {
      if (R.grupoVista != null && R.groups[R.grupoVista]) return R.grupoVista;
      return grupoVivo();
    }
    /* el último grupo que se jugó antes del de ahora: se deja abajo porque
       si no pasa demasiado rápido */
    function grupoAnterior() {
      if (R.groups.length < 2) return -1;
      var vivo = R.groups[grupoVivo()];
      var lg = (R.log && R.log.length) ? R.log : (R.prevLog || []);
      for (var i = lg.length - 1; i >= 0; i--) {
        var nota = lg[i].note;
        if (!nota || (vivo && nota === vivo.name)) continue;
        for (var j = 0; j < R.groups.length; j++) if (R.groups[j].name === nota) return j;
      }
      return -1;
    }
    function chipsGrupos(activo, vivo) {
      if (R.groups.length < 2) return '';
      var h = '<div class="gchips">';
      if (R.grupoVista != null) {
        h += '<button type="button" class="gchip auto" data-q="grupo:auto">seguir el partido</button>';
      }
      R.groups.forEach(function (g, i) {
        h += '<button type="button" class="gchip' + (i === activo ? ' on' : '') +
          (i === vivo ? ' vivo' : '') + '" data-q="grupo:' + i + '">' +
          esc(String(g.name).split(' ').pop()) + '</button>';
      });
      return h + '</div>';
    }

    function faseGruposHTML() {
      var iv = grupoVivo(), im = grupoMostrado(), ia = grupoAnterior();
      var g = R.groups[im] || R.groups[0];
      var lg = R.log.length ? R.log : (R.prevLog || []);
      var ps = (R.pending || []).slice(R.idx);
      var varios = R.groups.length > 1;

      var izq = '<div class="qcol">' + chipsGrupos(im, iv) + tablaGrupoHTML(g);
      if (ia >= 0 && ia !== im) {
        izq += '<div class="qprev"><h4 class="subh">' + esc(corto(R.groups[ia].name)) +
          ' <small>anterior</small></h4>' + tablaGrupoHTML(R.groups[ia]) + '</div>';
      }
      izq += '</div>';

      return '<div class="card"><h3>Fase de grupos' +
        (varios ? ' <small>' + esc(corto(g.name)) + ' de ' + R.groups.length + '</small>' : '') +
        '</h3><div class="qsplit">' + izq +
        '<div class="qcol">' + destacadoHTML() +
        '<h4 class="subh">Por jugar <small>' + ps.length + '</small></h4>' +
        porJugarHTML(varios) + '</div>' +
        '<div class="qcol"><h4 class="subh">Jugados <small>' + Math.max(0, lg.length - 1) + '</small></h4>' +
        jugadosHTML(varios) + '</div></div></div>';
    }

    /* los grupos, ya terminados, plegados detrás de una pestaña */
    function gruposHechosHTML() {
      if (!R.groups) return '';
      var h = '<div class="card"><h3>Fase de grupos <small>terminada</small></h3>' +
        '<div class="fases-hechas"><button type="button" class="gchip' +
        (R.gruposAbiertos ? ' on' : '') + '" data-q="grupos">' +
        (R.gruposAbiertos ? 'ocultar las tablas' : 'ver las tablas') + '</button></div>';
      if (R.gruposAbiertos) {
        h += '<div class="groups">' + R.groups.map(function (g) {
          return '<div class="gbox"><h4>' + esc(g.name) + '</h4>' + tablaGrupoHTML(g) + '</div>';
        }).join('') + '</div>';
      }
      return h + '</div>';
    }

    /* ------------------------------------------------------------------
       LA LLAVE
       El Runner crea una ronda cada vez, pero como el ganador ya no cambia
       de rama, las rondas que faltan se deducen y se pueden dibujar vacías.
       ------------------------------------------------------------------ */
    function llave() {
      if (!R.koRounds || !R.koRounds.length) return null;
      var cols = [], i = 0, ranuras = null, guard = 0;
      while (guard++ < 12) {
        var col = R.koRounds[i], ties, nombre;
        if (col) {
          ties = col.ties;
          nombre = col.name;
          var byes = (col.byes || []);
          if (byes.length) {
            /* igual que en el sorteo: ganador y el que esperaba, alternados */
            ranuras = [];
            var tope2 = Math.max(byes.length, col.ties.length);
            for (var q2 = 0; q2 < tope2; q2++) {
              if (col.ties[q2]) ranuras.push(col.ties[q2].w || null);
              if (byes[q2]) ranuras.push(byes[q2]);
            }
          } else {
            ranuras = col.ties.map(function (t) { return t.w || null; });
          }
        } else {
          if (!ranuras || ranuras.length < 2) break;
          ties = [];
          for (var j = 0; j < ranuras.length; j += 2) {
            ties.push({ a: ranuras[j], b: ranuras[j + 1], w: null });
          }
          nombre = global.Comp.roundName(ranuras.length);
          ranuras = ties.map(function () { return null; });
        }
        cols.push({ name: nombre, ties: ties, activa: !!col && !col.ties[0].w });
        if (ties.length === 1) break;
        i++;
      }
      return cols;
    }

    function ladoTie(t, activa) {
      function fila(eq, gana) {
        if (!eq) return '<div class="wr vacia"><i>—</i></div>';
        /* en la llave hay sitio de sobra: el nombre entero se lee mejor
           que tres letras sueltas */
        return '<div class="wr' + (gana ? ' win' : '') + '" title="' + esc(eq.n) + '">' +
          crest(eq, 18) + '<em>' + esc(eq.n) + '</em></div>';
      }
      /* la tanda, entre paréntesis y pegada al marcador */
      function marc(v, p) {
        return '<b>' + (v === undefined || v === null ? '' : v) +
          (p == null ? '' : '<i class="pens">(' + p + ')</i>') + '</b>';
      }
      var m = t.agg || t.s || null;
      return '<div class="wt' + (activa ? ' ahora' : '') + (t.w ? ' lista' : '') + '">' +
        '<div class="wtrow">' + fila(t.a, t.w === t.a && t.a) +
        marc(m ? m[0] : null, t.pens ? t.pens.a : null) + '</div>' +
        '<div class="wtrow">' + fila(t.b, t.w === t.b && t.b) +
        marc(m ? m[1] : null, t.pens ? t.pens.b : null) + '</div>' +
        '</div>';
    }
    function columnaHTML(col, desde, hasta) {
      return '<div class="wcbr-col"><h5>' + esc(col.name) + '</h5>' +
        col.ties.slice(desde, hasta).map(function (t) {
          return ladoTie(t, col.activa);
        }).join('') + '</div>';
    }

    /* las rondas con demasiados cruces no caben en un cuadro: van en lista */
    var CRUCES_CUADRO = 8;
    function rondasEnListaHTML(rondas) {
      if (!rondas.length) return '';
      return rondas.map(function (c) {
        return '<div class="br-lista"><h5>' + esc(c.name) +
          ' <small>' + c.ties.length + ' cruces</small></h5>' +
          '<div class="br-listagrid">' + c.ties.map(function (t) {
            return ladoTie(t, c.activa);
          }).join('') + '</div></div>';
      }).join('');
    }

    function llaveHTML() {
      var todas = llave();
      if (!todas || !todas.length) return '';
      /* Una ronda de clasificación no es un cuadro: es una lista de cruces
         y punto, sin final ni rondas por venir. */
      if (opts.soloRonda) {
        var uno = todas[0];
        return '<div class="card"><h3>' + esc(opts.title || 'Clasificación') +
          ' <small>' + uno.ties.length + ' cruces</small></h3>' +
          '<div class="br-listagrid">' + uno.ties.map(function (t) {
            return ladoTie(t, !t.w);
          }).join('') + '</div></div>';
      }
      var previas = todas.filter(function (c) { return c.ties.length > CRUCES_CUADRO; });
      var b = todas.filter(function (c) { return c.ties.length <= CRUCES_CUADRO; });
      var titulo = R.champion ? 'terminada'
        : (todas.filter(function (c) { return c.activa; })[0] || todas[0]).name;
      if (!b.length) {
        return '<div class="card"><h3>' + esc(opts.title || 'Eliminatorias') +
          ' <small>' + esc(titulo) + '</small></h3>' + rondasEnListaHTML(previas) + '</div>';
      }
      if (b.length === 1) {
        return '<div class="card"><h3>' + esc(opts.title || 'Eliminatorias') +
          ' <small>' + esc(titulo) + '</small></h3><div class="wcbr una">' +
          '<div class="wcbr-col centro"><h5>' + esc(b[0].name) + '</h5>' +
          ladoTie(b[0].ties[0], b[0].activa) + campeonHTML() + '</div></div>' +
          rondasEnListaHTML(previas) + '</div>';
      }
      var cuerpo = b.slice(0, b.length - 1), fin = b[b.length - 1];
      var izq = cuerpo.map(function (c) {
        return columnaHTML(c, 0, Math.ceil(c.ties.length / 2));
      }).join('');
      var der = cuerpo.slice().reverse().map(function (c) {
        return columnaHTML(c, Math.ceil(c.ties.length / 2), c.ties.length);
      }).join('');
      var centro = '<div class="wcbr-col centro"><h5>' + esc(fin.name) + '</h5>' +
        ladoTie(fin.ties[0], fin.activa) + campeonHTML() + '</div>';
      return '<div class="card"><h3>' + esc(opts.title || 'Eliminatorias') +
        ' <small>' + esc(titulo) + '</small></h3>' +
        '<div class="wcbr cols-' + cuerpo.length + '">' + izq + centro + der + '</div>' +
        rondasEnListaHTML(previas) + '</div>';
    }
    function campeonHTML() {
      var h = '';
      if (R.champion) {
        h += '<div class="wcbr-champ">🏆' + crest(R.champion, 34) +
          '<b>' + esc(R.champion.n) + '</b></div>';
      }
      var t3 = R.tercerTie;
      if (t3) {
        h += '<div class="wcbr-tercero"><h5>Tercer puesto</h5>' + ladoTie(t3, !t3.w) + '</div>';
      }
      return h;
    }

    /* la ronda de eliminatorias que se juega ahora, con sus cruces */
    function rondaKoHTML() {
      var ps = (R.pending || []).slice(R.idx);
      var lg = R.log.length ? R.log : (R.prevLog || []);
      if (!ps.length && !lg.length) return '';
      return '<div class="card"><h3>' + esc(R.label) + '</h3><div class="qsplit dos">' +
        '<div class="qcol">' + destacadoHTML() + '</div>' +
        '<div class="qcol"><h4 class="subh">Por jugar <small>' + ps.length + '</small></h4>' +
        porJugarHTML(false) + '</div>' +
        '<div class="qcol"><h4 class="subh">Jugados <small>' + Math.max(0, lg.length - 1) +
        '</small></h4>' + jugadosHTML(false) + '</div></div></div>';
    }

    function ligaHTML() {
      var ps = (R.pending || []).slice(R.idx);
      var lg = R.log.length ? R.log : (R.prevLog || []);
      var tabla = global.UIX && global.UIX.tableHTML
        ? global.UIX.tableHTML(global.Comp.sortTable(R.table), { ucl: R.ucl, rel: R.rel, form: true })
        : '';
      return '<div class="card"><h3>' + esc(opts.title || 'Clasificación') +
        ' <small>' + esc(R.label) + '</small></h3><div class="qsplit liga">' +
        '<div class="qcol ancha">' + tabla + '</div>' +
        '<div class="qcol">' + destacadoHTML() +
        '<h4 class="subh">Por jugar <small>' + ps.length + '</small></h4>' +
        porJugarHTML(false) + '</div>' +
        '<div class="qcol"><h4 class="subh">Jugados <small>' + Math.max(0, lg.length - 1) +
        '</small></h4>' + jugadosHTML(false) + '</div></div></div>';
    }

    /* ------------------------------------------------------------------ */
    R.extraHTML = function () {
      var h = '';
      if (R.kind === 'league') return ligaHTML();
      if (R.koRounds && R.koRounds.length) {
        h += llaveHTML();
        h += rondaKoHTML();
        if (R.groups) h += gruposHechosHTML();
      } else if (R.groups) {
        h += faseGruposHTML();
      }
      return h;
    };
    return R;
  }

  global.TourView = { attach: attach };
})(window);
