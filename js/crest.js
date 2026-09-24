/* =========================================================================
   ESCUDOS
   Genera un escudo vectorial por equipo a partir de sus colores y su nombre.
   Si existe un archivo real en assets/crests/<id>.png|svg|webp (o el equipo
   define .logo), se usa ese en su lugar.
   ========================================================================= */
(function (global) {
  'use strict';

  var SHAPES = ['shield', 'roundShield', 'circle', 'pointed', 'hex'];
  var PATTERNS = ['solid', 'stripes', 'halves', 'sash', 'hoops', 'quarters', 'chevron', 'cross'];

  function hash(s) {
    var h = 2166136261;
    for (var i = 0; i < s.length; i++) { h ^= s.charCodeAt(i); h = Math.imul(h, 16777619); }
    return Math.abs(h);
  }

  /* letras del escudo: 2-3 iniciales legibles */
  function initials(team) {
    if (team.s && team.s.length <= 4) return team.s;
    var stop = ['de', 'del', 'la', 'el', 'los', 'las', 'fc', 'cf', 'ac', 'sc', 'cd', 'ca', 'club', 'united', 'city', 'do', 'da'];
    var w = team.n.split(/[\s.]+/).filter(function (x) { return x && stop.indexOf(x.toLowerCase()) < 0; });
    if (!w.length) w = team.n.split(/\s+/);
    if (w.length === 1) return w[0].slice(0, 3).toUpperCase();
    return w.slice(0, 3).map(function (x) { return x[0]; }).join('').toUpperCase();
  }

  function lum(hex) {
    var c = hex.replace('#', '');
    if (c.length === 3) c = c[0] + c[0] + c[1] + c[1] + c[2] + c[2];
    var r = parseInt(c.slice(0, 2), 16), g = parseInt(c.slice(2, 4), 16), b = parseInt(c.slice(4, 6), 16);
    return (0.299 * r + 0.587 * g + 0.114 * b) / 255;
  }
  function readable(bg) { return lum(bg) > 0.6 ? '#10161f' : '#ffffff'; }

  /* trazados de las siluetas, en una caja 0 0 100 116 */
  function outline(shape) {
    switch (shape) {
      case 'circle': return 'M50 4a54 54 0 1 1-.1 0z';
      case 'roundShield': return 'M6 8h88v54c0 28-24 42-44 50C30 104 6 90 6 62z';
      case 'pointed': return 'M50 2 96 16v46c0 30-25 44-46 52C29 106 4 92 4 62V16z';
      case 'hex': return 'M50 2 94 26v64L50 114 6 90V26z';
      default: return 'M4 6h92v56c0 26-26 42-46 52C30 104 4 88 4 62z';
    }
  }

  function patternSvg(pattern, c1, c2, id) {
    switch (pattern) {
      case 'stripes':
        return '<rect width="100" height="116" fill="' + c1 + '"/>' +
          [14, 38, 62, 86].map(function (x) {
            return '<rect x="' + x + '" y="0" width="12" height="116" fill="' + c2 + '"/>';
          }).join('');
      case 'halves':
        return '<rect width="100" height="116" fill="' + c1 + '"/><rect x="50" width="50" height="116" fill="' + c2 + '"/>';
      case 'sash':
        return '<rect width="100" height="116" fill="' + c1 + '"/><path d="M-10 84 84-12h30L20 116z" fill="' + c2 + '"/>';
      case 'hoops':
        return '<rect width="100" height="116" fill="' + c1 + '"/>' +
          [12, 40, 68, 96].map(function (y) {
            return '<rect x="0" y="' + y + '" width="100" height="13" fill="' + c2 + '"/>';
          }).join('');
      case 'quarters':
        return '<rect width="100" height="116" fill="' + c1 + '"/><rect width="50" height="58" fill="' + c2 + '"/>' +
          '<rect x="50" y="58" width="50" height="58" fill="' + c2 + '"/>';
      case 'chevron':
        return '<rect width="100" height="116" fill="' + c1 + '"/><path d="M50 6 100 44v26L50 32 0 70V44z" fill="' + c2 + '"/>';
      case 'cross':
        return '<rect width="100" height="116" fill="' + c1 + '"/><rect x="38" width="24" height="116" fill="' + c2 + '"/>' +
          '<rect y="30" width="100" height="22" fill="' + c2 + '"/>';
      default:
        return '<rect width="100" height="116" fill="' + c1 + '"/>';
    }
  }

  /* escudo vectorial generado */
  function svgFor(team, size) {
    var s = size || 48;
    var h = hash(team.n + (team.leagueId || ''));
    var shape = team.shape || SHAPES[h % SHAPES.length];
    var pattern = team.pattern || PATTERNS[(h >> 3) % PATTERNS.length];
    var c1 = team.c1 || '#2b3444', c2 = team.c2 || '#ffffff';
    // si los dos colores son casi iguales, oscurece el segundo para que se note
    if (Math.abs(lum(c1) - lum(c2)) < 0.08) c2 = lum(c1) > 0.5 ? '#1b2330' : '#e9eef6';
    var uid = 'cr' + (h % 100000);
    var txt = initials(team);
    var fs = txt.length >= 3 ? 30 : 36;
    var band = lum(c1) > 0.55 ? 'rgba(0,0,0,.55)' : 'rgba(255,255,255,.22)';

    return '<svg class="crest-svg" viewBox="0 0 100 116" width="' + s + '" height="' + (s * 1.16) + '" ' +
      'role="img" aria-label="' + team.n.replace(/"/g, '') + '">' +
      '<defs><clipPath id="' + uid + '"><path d="' + outline(shape) + '"/></clipPath>' +
      '<linearGradient id="g' + uid + '" x1="0" y1="0" x2="0" y2="1">' +
      '<stop offset="0" stop-color="#fff" stop-opacity=".22"/><stop offset="1" stop-color="#000" stop-opacity=".28"/>' +
      '</linearGradient></defs>' +
      '<g clip-path="url(#' + uid + ')">' + patternSvg(pattern, c1, c2, uid) +
      '<rect x="0" y="38" width="100" height="34" fill="' + band + '"/>' +
      '<rect width="100" height="116" fill="url(#g' + uid + ')"/></g>' +
      '<path d="' + outline(shape) + '" fill="none" stroke="rgba(0,0,0,.55)" stroke-width="4"/>' +
      '<text x="50" y="55" text-anchor="middle" dominant-baseline="central" ' +
      'font-family="Segoe UI,Arial,sans-serif" font-weight="900" font-size="' + fs + '" ' +
      'fill="' + readable(band === 'rgba(0,0,0,.55)' ? '#000000' : c1) + '" ' +
      'stroke="rgba(0,0,0,.35)" stroke-width="1" paint-order="stroke">' + txt + '</text>' +
      '</svg>';
  }

  /* bandera de selección: primero la imagen real de logos/paises/, luego la
     bandera dibujada y, como último recurso, un escudo con sus colores. */
  function flagFor(team, size) {
    var s = size || 48;
    var file = team.s && global.FLAG_FILE ? global.FLAG_FILE[team.s] : null;
    if (file) {
      var alt = String(team.n || team.s).replace(/"/g, "");
      return '<img class="crest-img flag-img" src="logos/paises/' + file + '.png" ' +
        'width="' + s + '" height="' + Math.round(s * 0.75) + '" alt="' + alt + '" ' +
        'onerror="this.outerHTML=Crest.drawnFlag(this.dataset.c,' + s + ')" data-c="' + (team.s || "") + '">';
    }
    return drawnFlag(team.s, s) ||
      svgFor({ n: team.n, s: team.s, c1: team.c1, c2: team.c2, shape: "circle", pattern: "halves" }, s);
  }

  /* bandera dibujada a mano (js/flags.js) */
  function drawnFlag(code, size) {
    if (global.Flags && code) {
      var svg = global.Flags.svg(code, size || 48);
      if (svg) return svg;
    }
    return "";
  }
  /* ---------- escudos reales en assets/crests/ ---------- */
  var useFiles = false, ext = 'png';
  try {
    var pref = localStorage.getItem('simufut.crestfiles');
    if (pref) { useFiles = true; ext = pref; }
  } catch (e) { }

  function slug(n) {
    return String(n).normalize('NFD').replace(/[̀-ͯ]/g, '')
      .toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');
  }
  function setFiles(on, extension) {
    useFiles = !!on; ext = extension || 'png';
    try {
      if (useFiles) localStorage.setItem('simufut.crestfiles', ext);
      else localStorage.removeItem('simufut.crestfiles');
    } catch (e) { }
  }

  /* punto de entrada: imagen real > bandera > escudo generado */
  function html(team, size) {
    var s = size || 48;
    if (!team) return '';
    if (team.isNation) return flagFor(team, s);
    var src = team.logo ||
      (team.uid && global.CREST_MAP ? global.CREST_MAP[team.uid] : null) ||
      (team.crestId ? 'assets/crests/' + team.crestId + '.' + ext : null) ||
      (useFiles ? 'assets/crests/' + slug(team.n) + '.' + ext : null);
    if (src) {
      // si el archivo no existe, el onerror cambia al escudo generado
      return '<img class="crest-img" src="' + src + '" width="' + s + '" height="' + s + '" alt="' + team.n.replace(/"/g, '') + '" ' +
        'onerror="this.outerHTML=Crest.svg(Crest.byKey(this.dataset.k),' + s + ')" data-k="' + (team.leagueId || '') + '|' + team.n.replace(/"/g, '') + '">';
    }
    return svgFor(team, s);
  }

  /* recuperar un equipo por clave liga|nombre, para el fallback del onerror */
  function byKey(k) {
    var parts = (k || '').split('|');
    var lg = global.LEAGUES && global.LEAGUES[parts[0]];
    var t = lg && lg.teams.filter(function (x) { return x.n === parts[1]; })[0];
    return t || { n: parts[1] || '?', s: '?', c1: '#2b3444', c2: '#ffffff' };
  }

  global.Crest = {
    html: html, svg: svgFor, flag: flagFor, drawnFlag: drawnFlag, byKey: byKey, initials: initials,
    readable: readable, lum: lum, slug: slug, setFiles: setFiles,
    usingFiles: function () { return useFiles; }, ext: function () { return ext; }
  };
})(window);
