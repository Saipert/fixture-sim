/* =========================================================================
   BANDERAS VECTORIALES
   Windows no dibuja los emoji de bandera, así que cada selección se dibuja
   en SVG. Formato: CODIGO: [patrón, 'color|color|color', 'adorno:color'].
   ========================================================================= */
(function (global) {
  'use strict';

  var SPEC = {
    /* --------- resto de federaciones FIFA --------- */
    ROU: ['v3', '#002B7F|#FCD116|#CE1126'],
    SVN: ['h3', '#FFFFFF|#0000FF|#FF0000'],
    GEO: ['cross', '#FFFFFF|#FF0000'],
    ALB: ['solid', '#E41E20|#000000', 'eagle:#000000'],
    MKD: ['disc2', '#D20000|#FFE600'],
    ISR: ['h5', '#FFFFFF|#0038B8|#FFFFFF'],
    MNE: ['solid', '#C40308|#D4AF37', 'eagle:#D4AF37'],
    BUL: ['h3', '#FFFFFF|#00966E|#D62612'],
    ISL: ['nordic3', '#02529C|#FFFFFF|#DC1E35'],
    FIN: ['nordic', '#FFFFFF|#003580'],
    NIR: ['cross', '#FFFFFF|#CF142B'],
    ARM: ['h3', '#D90012|#0033A0|#F2A800'],
    LUX: ['h3', '#ED2939|#FFFFFF|#00A1DE'],
    KAZ: ['disc2', '#00AFCA|#FEC50C'],
    AZE: ['h3', '#00B5E2|#EF3340|#509E2F'],
    BLR: ['h3u2', '#CE1720|#007C30|#007C30'],
    CYP: ['solid', '#FFFFFF|#D57800'],
    LVA: ['h3u2', '#9E3039|#FFFFFF|#9E3039'],
    LTU: ['h3', '#FDB913|#006A44|#C1272D'],
    EST: ['h3', '#0072CE|#000000|#FFFFFF'],
    MDA: ['v3', '#0046AE|#FFD200|#CC092F'],
    MLT: ['v2', '#FFFFFF|#CF142B'],
    FRO: ['nordic3', '#FFFFFF|#0065BD|#ED2939'],
    GIB: ['h3u2', '#FFFFFF|#FFFFFF|#DA020E'],
    AND: ['v3', '#10069F|#FEDD00|#D50032'],
    LIE: ['h2', '#002B7F|#CE1126'],
    SMR: ['h2', '#FFFFFF|#5EB6E4'],

    GUA: ['v3', '#4997D0|#FFFFFF|#4997D0'],
    SLV: ['h3', '#0F47AF|#FFFFFF|#0F47AF'],
    TRI: ['diag', '#DA1A35|#000000'],
    SUR: ['h5', '#377E3F|#FFFFFF|#B40A2D'],
    DOM: ['quarters', '#002D62|#CE1126|#CE1126|#002D62'],
    NCA: ['h3', '#0067C6|#FFFFFF|#0067C6'],
    CUB: ['triangle', '#002A8F|#FFFFFF|#CF142B'],
    GUY: ['triangle', '#009E49|#009E49|#FCD116'],
    PUR: ['triangle', '#ED0000|#FFFFFF|#0050F0'],
    BER: ['canton', '#CF102D|#012169'],
    BLZ: ['h5', '#CE1126|#003F87|#003F87'],
    ATG: ['triangle', '#CE1126|#000000|#FCD116'],
    BRB: ['v3', '#00267F|#FFC726|#00267F'],
    SKN: ['diag', '#009E49|#CE1126'],
    GRN: ['diamond', '#CE1126|#FCD116|#006B3F'],
    VIN: ['v3', '#0072C6|#FCD116|#009E60'],
    LCA: ['triangle', '#6CCEDD|#6CCEDD|#FCD116'],
    DMA: ['cross', '#006B3F|#FCD116'],
    BAH: ['triangle', '#00778B|#FFC72C|#000000'],
    CAY: ['canton', '#012169|#C8102E'],
    VGB: ['canton', '#012169|#FFFFFF'],
    VIR: ['solid', '#FFFFFF|#0081C8'],
    TCA: ['canton', '#012169|#FFD100'],
    MSR: ['canton', '#012169|#00A650'],
    AIA: ['canton', '#FFFFFF|#012169'],
    ARU: ['solid', '#418FDE|#F2A900'],

    THA: ['h5', '#A51931|#FFFFFF|#2D2A4A'],
    VIE: ['disc2', '#DA251D|#FFFF00'],
    IDN: ['h2', '#CE1126|#FFFFFF'],
    MAS: ['canton', '#CC0001|#010066'],
    OMA: ['v2u', '#DB161B|#FFFFFF'],
    BHR: ['v2u', '#FFFFFF|#CE1126'],
    KUW: ['triangle', '#007A3D|#FFFFFF|#CE1126'],
    PLE: ['triangle', '#000000|#FFFFFF|#CE1126'],
    SYR: ['h3', '#CE1126|#FFFFFF|#000000'],
    LBN: ['h3u', '#ED1C24|#FFFFFF|#ED1C24'],
    PRK: ['h5', '#024FA2|#FFFFFF|#ED1C27'],
    TJK: ['h3', '#CC0000|#FFFFFF|#006600'],
    TKM: ['solid', '#28AE66|#FFFFFF'],
    KGZ: ['disc2', '#E8112D|#FFEF00'],
    IND: ['h3', '#FF9933|#FFFFFF|#138808'],
    PHI: ['triangle', '#0038A8|#CE1126|#FFFFFF'],
    HKG: ['solid', '#DE2910|#FFFFFF'],
    SGP: ['h2', '#EF3340|#FFFFFF'],
    MYA: ['h3', '#FECB00|#34B233|#EA2839'],
    CAM: ['h3u', '#032EA1|#E00025|#032EA1'],
    LAO: ['h3u', '#CE1126|#002868|#CE1126'],
    BRU: ['diag', '#F7E017|#000000'],
    TLS: ['triangle', '#DC241F|#DC241F|#FFC726'],
    TPE: ['canton', '#FE0000|#000095'],
    MAC: ['solid', '#00785E|#FFFFFF'],
    MNG: ['v3', '#C4272F|#015197|#C4272F'],
    AFG: ['v3', '#000000|#D32011|#007A36'],
    PAK: ['v2u', '#FFFFFF|#01411C'],
    BAN: ['disc2', '#006A4E|#F42A41'],
    NEP: ['triangle', '#DC143C|#DC143C|#003893'],
    SRI: ['v2u', '#FFBE29|#8D153A'],
    MDV: ['disc2', '#D21034|#007E3A'],
    BHU: ['diag', '#FFD520|#FF4E12'],
    YEM: ['h3', '#CE1126|#FFFFFF|#000000'],
    GUM: ['disc2', '#003087|#BE0027'],

    MLI: ['v3', '#14B53A|#FCD116|#CE1126'],
    BFA: ['h2', '#EF2B2D|#009E49'],
    GUI: ['v3', '#CE1126|#FCD116|#009460'],
    ZAM: ['solid', '#198A00|#EF7D00'],
    ANG: ['h2', '#CE1126|#000000'],
    UGA: ['h5', '#000000|#FCDC04|#D90000'],
    KEN: ['h3', '#000000|#BB0000|#006600'],
    TAN: ['diag', '#1EB53A|#00A3DD'],
    GAB: ['h3', '#009E60|#FCD116|#3A75C4'],
    BEN: ['h2', '#FCD116|#E8112D'],
    TOG: ['h5', '#006A4E|#FFCE00|#006A4E'],
    SLE: ['h3', '#1EB53A|#FFFFFF|#0072C6'],
    MTN: ['solid', '#006233|#FFC400'],
    GAM: ['h5', '#CE1126|#FFFFFF|#0C1C8C'],
    COM: ['h5', '#FFD100|#FFFFFF|#3A75C4'],
    MOZ: ['h3', '#007168|#000000|#FCE100'],
    NAM: ['diag', '#003580|#009543'],
    MAD: ['h2', '#FC3D32|#007E3A'],
    LBY: ['h3', '#E70013|#000000|#239E46'],
    ZIM: ['h5', '#006400|#FFD200|#000000'],
    CGO: ['diag', '#009543|#DC241F'],
    EQG: ['h3', '#3E9A00|#FFFFFF|#E32118'],
    RWA: ['h3u2', '#00A1DE|#FAD201|#20603D'],
    SDN: ['triangle', '#D21034|#FFFFFF|#007229'],
    ETH: ['h3', '#078930|#FCDD09|#DA121A'],
    GNB: ['h2', '#FCD116|#009E49'],
    NIG: ['h3', '#E05206|#FFFFFF|#0DB02B'],
    LBR: ['canton', '#BF0A30|#002868'],
    MWI: ['h3', '#000000|#CE1126|#339E35'],
    BOT: ['h5', '#75AADB|#FFFFFF|#000000'],
    BDI: ['saltirex', '#FFFFFF|#CE1126|#1EB53A'],
    LES: ['h3', '#00209F|#FFFFFF|#009543'],
    SWZ: ['h5', '#3E5EB9|#FFD900|#B10C0C'],
    CHA: ['v3', '#002664|#FECB00|#C60C30'],
    CTA: ['h5', '#003082|#FFFFFF|#289728'],
    DJI: ['triangle', '#6AB2E7|#12AD2B|#FFFFFF'],
    SOM: ['disc2', '#4189DD|#FFFFFF'],
    ERI: ['triangle', '#12AD2B|#4189DD|#EA0437'],
    SSD: ['triangle', '#078930|#000000|#0F47AF'],
    STP: ['triangle', '#12AD2B|#FFCE00|#D21034'],
    SEY: ['diag', '#003F87|#FCD856'],
    MRI: ['h5', '#EA2839|#1A206D|#FFD500'],

    NCL: ['h3', '#0035AD|#ED4135|#009543'],
    TAH: ['h3u', '#CE1126|#FFFFFF|#CE1126'],
    SOL: ['diag', '#0051BA|#215B33'],
    FIJ: ['canton', '#68BFE5|#012169'],
    VAN: ['triangle', '#D21034|#009543|#000000'],
    PNG: ['diag', '#CE1126|#000000'],
    SAM: ['canton', '#CE1126|#002B7F'],
    TGA: ['canton', '#C10000|#FFFFFF'],
    COK: ['canton', '#00247D|#FFFFFF'],
    ASA: ['triangle', '#00247D|#00247D|#CE1126'],
    /* --------- UEFA --------- */
    GER: ['h3', '#000000|#DD0000|#FFCE00'],
    AUT: ['h3', '#ED2939|#FFFFFF|#ED2939'],
    BEL: ['v3', '#000000|#FAE042|#ED2939'],
    BIH: ['diag', '#002395|#FFCE00', 'stars:#FFFFFF'],
    CZE: ['triangle', '#FFFFFF|#D7141A|#11457E'],
    CRO: ['h3', '#FF0000|#FFFFFF|#171796', 'check:#FF0000'],
    DEN: ['nordic', '#C60C30|#FFFFFF'],
    SCO: ['saltire', '#0065BF|#FFFFFF'],
    SVK: ['h3', '#FFFFFF|#0B4EA2|#EE1C25', 'shield:#EE1C25'],
    ESP: ['h3u', '#AA151B|#F1BF00|#AA151B'],
    FRA: ['v3', '#002395|#FFFFFF|#ED2939'],
    WAL: ['h2', '#FFFFFF|#00B140', 'dragon:#D30731'],
    ENG: ['cross', '#FFFFFF|#CE1124'],
    IRL: ['v3', '#169B62|#FFFFFF|#FF883E'],
    ITA: ['v3', '#008C45|#F4F5F0|#CD212A'],
    KVX: ['solid', '#244AA5', 'stars:#FFFFFF'],
    NOR: ['nordic3', '#BA0C2F|#FFFFFF|#00205B'],
    NED: ['h3', '#AE1C28|#FFFFFF|#21468B'],
    POL: ['h2', '#FFFFFF|#DC143C'],
    GRE: ['greece', '#0D5EAF|#FFFFFF'],
    RUS: ['h3', '#FFFFFF|#0039A6|#D52B1E'],
    SWE: ['nordic', '#006AA7|#FECC00'],
    HUN: ['h3', '#CE2939|#FFFFFF|#477050'],
    SRB: ['h3', '#C6363C|#0C4076|#FFFFFF'],
    POR: ['v2u', '#006600|#FF0000', 'disc:#FFE900'],
    SUI: ['cross', '#D52B1E|#FFFFFF'],
    TUR: ['solid', '#E30A17', 'crescent:#FFFFFF'],
    UKR: ['h2', '#0057B7|#FFD700'],

    /* --------- CONMEBOL --------- */
    ARG: ['h3', '#75AADB|#FFFFFF|#75AADB', 'sun:#F6B40E'],
    BOL: ['h3', '#D52B1E|#F9E300|#007934'],
    BRA: ['diamond', '#009C3B|#FFDF00|#002776'],
    CHI: ['chile', '#FFFFFF|#D52B1E|#0039A6'],
    COL: ['h3u2', '#FCD116|#003893|#CE1126'],
    ECU: ['h3u2', '#FFDD00|#034EA2|#EF3340', 'disc:#FFDD00'],
    PAR: ['h3', '#D52B1E|#FFFFFF|#0038A8', 'disc:#FFFFFF'],
    PER: ['v3', '#D91023|#FFFFFF|#D91023'],
    URU: ['uruguay', '#FFFFFF|#0038A8|#F6B40E'],
    VEN: ['h3', '#FCE300|#00247D|#CF142B', 'stars:#FFFFFF'],

    /* --------- CONCACAF --------- */
    CAN: ['v3u', '#D80621|#FFFFFF|#D80621', 'maple:#D80621'],
    CRC: ['h5', '#0033A0|#FFFFFF|#CE1126'],
    CUW: ['solid', '#002B7F', 'curacao:#F9E814'],
    USA: ['stripes', '#B31942|#FFFFFF|#0A3161'],
    HAI: ['h2', '#00209F|#D21034', 'shield:#FFFFFF'],
    HON: ['h3', '#0073CF|#FFFFFF|#0073CF', 'stars:#0073CF'],
    JAM: ['saltirex', '#009B3A|#000000|#FED100'],
    MEX: ['v3', '#006847|#FFFFFF|#CE1126', 'disc:#9D2235'],
    PAN: ['quarters', '#FFFFFF|#DA121A|#005293|#FFFFFF'],

    /* --------- AFC --------- */
    KSA: ['solid', '#006C35', 'sword:#FFFFFF'],
    AUS: ['canton', '#00008B|#FFFFFF', 'stars:#FFFFFF'],
    QAT: ['v2u', '#FFFFFF|#8A1538'],
    CHN: ['solid', '#DE2910', 'starsL:#FFDE00'],
    KOR: ['discs', '#FFFFFF|#CD2E3A|#0047A0'],
    UAE: ['uae', '#00732F|#FFFFFF|#000000|#FF0000'],
    IRQ: ['h3', '#CE1126|#FFFFFF|#000000', 'text:#007A3D'],
    IRN: ['h3', '#239F40|#FFFFFF|#DA0000', 'disc:#DA0000'],
    JPN: ['disc2', '#FFFFFF|#BC002D'],
    JOR: ['triangle', '#000000|#007A3D|#CE1126', 'white:#FFFFFF'],
    UZB: ['h3', '#0099B5|#FFFFFF|#1EB53A', 'stars:#FFFFFF'],

    /* --------- CAF --------- */
    ALG: ['v2', '#006233|#FFFFFF', 'crescent:#D21034'],
    CPV: ['cpv', '#003893|#FFFFFF|#CF2027'],
    CMR: ['v3', '#007A5E|#CE1126|#FCD116', 'star:#FCD116'],
    CIV: ['v3', '#F77F00|#FFFFFF|#009E60'],
    EGY: ['h3', '#CE1126|#FFFFFF|#000000', 'eagle:#C09300'],
    GHA: ['h3', '#CE1126|#FCD116|#006B3F', 'star:#000000'],
    MAR: ['solid', '#C1272D', 'star:#006233'],
    NGA: ['v3', '#008751|#FFFFFF|#008751'],
    COD: ['diag', '#007FFF|#F7D618', 'star:#FFFFFF'],
    SEN: ['v3', '#00853F|#FDEF42|#E31B23', 'star:#00853F'],
    RSA: ['rsa', '#007A4D|#FFFFFF|#DE3831|#002395|#FFB612|#000000'],
    TUN: ['solid', '#E70013', 'disccrescent:#FFFFFF'],

    /* --------- OFC --------- */
    NZL: ['canton', '#00247D|#FFFFFF', 'starsR:#CC142B']
  };

  var W = 60, H = 40;

  function starPath(cx, cy, r, rot) {
    var pts = [], i, a;
    for (i = 0; i < 10; i++) {
      a = (Math.PI / 5) * i - Math.PI / 2 + (rot || 0);
      var rr = i % 2 ? r * 0.42 : r;
      pts.push((cx + Math.cos(a) * rr).toFixed(2) + ',' + (cy + Math.sin(a) * rr).toFixed(2));
    }
    return '<polygon points="' + pts.join(' ') + '"/>';
  }
  function starAt(cx, cy, r, color, rot) {
    return '<g fill="' + color + '">' + starPath(cx, cy, r, rot) + '</g>';
  }

  function base(pattern, c) {
    var a = c[0], b = c[1], d = c[2], e = c[3];
    switch (pattern) {
      case 'solid': return r(0, 0, W, H, a);
      case 'h2': return r(0, 0, W, 20, a) + r(0, 20, W, 20, b);
      case 'v2': return r(0, 0, 30, H, a) + r(30, 0, 30, H, b);
      case 'v2u': return r(0, 0, 24, H, a) + r(24, 0, 36, H, b);
      case 'h3': return r(0, 0, W, 13.33, a) + r(0, 13.33, W, 13.34, b) + r(0, 26.67, W, 13.33, d);
      case 'h3u': return r(0, 0, W, 10, a) + r(0, 10, W, 20, b) + r(0, 30, W, 10, d);
      case 'h3u2': return r(0, 0, W, 20, a) + r(0, 20, W, 10, b) + r(0, 30, W, 10, d);
      case 'v3': return r(0, 0, 20, H, a) + r(20, 0, 20, H, b) + r(40, 0, 20, H, d);
      case 'v3u': return r(0, 0, 15, H, a) + r(15, 0, 30, H, b) + r(45, 0, 15, H, d);
      case 'h5': return r(0, 0, W, 7, a) + r(0, 7, W, 6, b) + r(0, 13, W, 14, d) + r(0, 27, W, 6, b) + r(0, 33, W, 7, a);
      case 'cross': return r(0, 0, W, H, a) + r(24, 0, 12, H, b) + r(0, 14, W, 12, b);
      case 'nordic': return r(0, 0, W, H, a) + r(18, 0, 10, H, b) + r(0, 15, W, 10, b);
      case 'nordic3': return r(0, 0, W, H, a) + r(16, 0, 14, H, b) + r(0, 13, W, 14, b) +
        r(20, 0, 6, H, d) + r(0, 17, W, 6, d);
      case 'saltire': return r(0, 0, W, H, a) +
        '<path d="M0 0 12 0 60 32 60 40 48 40 0 8z M48 0 60 0 60 8 12 40 0 40 0 32z" fill="' + b + '"/>';
      case 'saltirex': return '<path d="M0 0 30 20 0 40z M60 0 30 20 60 40z" fill="' + a + '"/>' +
        '<path d="M0 0 60 0 30 20z M0 40 60 40 30 20z" fill="' + b + '"/>' +
        '<path d="M0 0 7 0 60 35 60 40 53 40 0 5z M53 0 60 0 60 5 7 40 0 40 0 35z" fill="' + d + '"/>';
      case 'canton': return r(0, 0, W, H, a) + r(0, 0, 30, 20, a) +
        '<path d="M0 0 30 0 30 20 0 20z" fill="' + a + '"/>' +
        '<path d="M0 0 30 20 M30 0 0 20 M15 0 15 20 M0 10 30 10" stroke="' + b + '" stroke-width="2.4" fill="none"/>';
      case 'stripes': {
        var out = r(0, 0, W, H, b), i;
        for (i = 0; i < 7; i++) out += r(0, i * 5.72, W, 2.86, a);
        return out + r(0, 0, 26, 21, d) + stars5(26, 21, '#FFFFFF');
      }
      case 'diamond': return r(0, 0, W, H, a) +
        '<polygon points="30,4 56,20 30,36 4,20" fill="' + b + '"/>' +
        '<circle cx="30" cy="20" r="9" fill="' + d + '"/>' +
        '<path d="M21.5 17.5a9 9 0 0 1 17.2 3" stroke="#FFFFFF" stroke-width="2.2" fill="none"/>';
      case 'disc2': return r(0, 0, W, H, a) + '<circle cx="30" cy="20" r="11" fill="' + b + '"/>';
      case 'discs': return r(0, 0, W, H, a) +
        '<path d="M19 20a11 11 0 0 1 22 0 5.5 5.5 0 0 0-11 0 5.5 5.5 0 0 1-11 0z" fill="' + b + '"/>' +
        '<path d="M41 20a11 11 0 0 1-22 0 5.5 5.5 0 0 1 11 0 5.5 5.5 0 0 0 11 0z" fill="' + d + '"/>';
      case 'triangle': return r(0, 0, W, 20, a) + r(0, 20, W, 20, b) +
        '<polygon points="0,0 28,20 0,40" fill="' + d + '"/>';
      case 'diag': return r(0, 0, W, H, a) +
        '<path d="M0 30 44 0 60 0 60 10 16 40 0 40z" fill="' + b + '"/>';
      case 'quarters': return r(0, 0, 30, 20, a) + r(30, 0, 30, 20, b) + r(0, 20, 30, 20, d) + r(30, 20, 30, 20, e) +
        starAt(15, 10, 6, '#005293') + starAt(45, 30, 6, '#DA121A');
      case 'greece': {
        var go = '';
        for (var gi = 0; gi < 9; gi++) go += r(0, gi * 40 / 9, W, 40 / 9 + .2, gi % 2 ? b : a);
        return go + r(0, 0, 22.2, 22.2, a) + r(8.8, 0, 4.6, 22.2, b) + r(0, 8.8, 22.2, 4.6, b);
      }
      case 'chile': return r(0, 0, W, 20, a) + r(0, 20, W, 20, b) + r(0, 0, 20, 20, d) + starAt(10, 10, 6.5, '#FFFFFF');
      case 'uruguay': {
        var o = r(0, 0, W, H, a), k;
        for (k = 0; k < 4; k++) o += r(0, 4.44 + k * 8.89, W, 4.45, b);
        return o + r(0, 0, 22, 22, a) + sun(11, 11, 7, c[2]);
      }
      case 'uae': return r(0, 0, 16, H, e) + r(16, 0, 44, 13.33, a) + r(16, 13.33, 44, 13.34, b) + r(16, 26.67, 44, 13.33, d);
      case 'cpv': {
        var q = r(0, 0, W, H, a);
        q += r(0, 22, W, 3, d) + r(0, 25, W, 6, b) + r(0, 31, W, 3, d);
        var st = '', j;
        for (j = 0; j < 10; j++) {
          var ang = (Math.PI * 2 / 10) * j - Math.PI / 2;
          st += starAt(24 + Math.cos(ang) * 13, 26 + Math.sin(ang) * 13, 1.9, '#F7D116');
        }
        return q + st;
      }
      case 'rsa': return r(0, 0, W, 20, c[2]) + r(0, 20, W, 20, c[3]) +
        '<path d="M0 0 0 40 26 20z" fill="' + c[5] + '"/>' +
        '<path d="M0 4 22 20 0 36 0 40 4 40 30 20 4 0 0 0z" fill="' + c[1] + '" />' +
        '<path d="M0 13 12 20 0 27z M12 15 60 15 60 25 12 25z" fill="' + c[0] + '"/>' +
        '<path d="M0 9 18 20 0 31 0 33 22 20 0 7z" fill="' + c[4] + '" opacity=".9"/>';
      default: return r(0, 0, W, H, a);
    }
  }
  function r(x, y, w, h, f) { return '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + h + '" fill="' + f + '"/>'; }

  function sun(cx, cy, rad, color) {
    var rays = '', i;
    for (i = 0; i < 16; i++) {
      var a = (Math.PI * 2 / 16) * i;
      rays += '<line x1="' + (cx + Math.cos(a) * rad) + '" y1="' + (cy + Math.sin(a) * rad) +
        '" x2="' + (cx + Math.cos(a) * rad * 1.75) + '" y2="' + (cy + Math.sin(a) * rad * 1.75) +
        '" stroke="' + color + '" stroke-width="1.1"/>';
    }
    return rays + '<circle cx="' + cx + '" cy="' + cy + '" r="' + rad + '" fill="' + color + '"/>';
  }
  function stars5(w, h, color) {
    var out = '', row, col;
    for (row = 0; row < 4; row++) for (col = 0; col < 5; col++) {
      out += starAt(3 + col * 5, 3 + row * 4.8, 1.5, color);
    }
    return out;
  }

  function overlay(spec, c) {
    if (!spec) return '';
    var parts = spec.split(':'), kind = parts[0], col = parts[1] || '#FFFFFF';
    switch (kind) {
      case 'star': return starAt(30, 20, 8, col);
      case 'sun': return sun(30, 20, 4.5, col);
      case 'disc': return '<circle cx="30" cy="20" r="6" fill="' + col + '" stroke="rgba(0,0,0,.25)"/>';
      case 'crescent': return '<circle cx="26" cy="20" r="9" fill="' + col + '"/>' +
        '<circle cx="29.5" cy="20" r="7.2" fill="' + c[0] + '"/>' + starAt(39, 20, 4.6, col);
      case 'disccrescent': return '<circle cx="30" cy="20" r="11" fill="' + col + '"/>' +
        '<circle cx="28" cy="20" r="7" fill="' + c[0] + '"/><circle cx="30.5" cy="20" r="5.6" fill="' + col + '"/>' +
        starAt(32.5, 20, 3.6, c[0]);
      case 'stars': return starAt(30, 20, 5, col) + starAt(19, 20, 3, col) + starAt(41, 20, 3, col);
      case 'starsL': return starAt(11, 11, 5, col) + starAt(20, 5, 1.8, col) + starAt(24, 9, 1.8, col) +
        starAt(24, 14, 1.8, col) + starAt(20, 18, 1.8, col);
      case 'starsR': return starAt(44, 11, 3, col) + starAt(50, 19, 3, col) + starAt(44, 28, 3, col) + starAt(38, 20, 2.2, col);
      case 'maple': return '<polygon points="30,8 32,15 38,13 35,19 42,20 35,22 38,28 32,26 30,33 28,26 22,28 25,22 18,20 25,19 22,13 28,15" fill="' + col + '"/>';
      case 'sword': return '<path d="M14 26h32" stroke="' + col + '" stroke-width="2.2"/><path d="M18 15h24" stroke="' + col + '" stroke-width="1.6"/>';
      case 'shield': return '<path d="M25 12h10v9c0 5-5 7-5 7s-5-2-5-7z" fill="' + col + '" stroke="rgba(0,0,0,.3)"/>';
      case 'check': return '<g fill="' + col + '" opacity=".85">' +
        '<rect x="24" y="10" width="4" height="4"/><rect x="32" y="10" width="4" height="4"/>' +
        '<rect x="28" y="14" width="4" height="4"/></g>';
      case 'dragon': return '<path d="M20 22c4-5 10-4 13-1 3-4 7-3 8 1-2 3-6 3-8 1-3 3-9 4-13-1z" fill="' + col + '"/>';
      case 'eagle': return '<path d="M24 17h12l-2 6h-8z" fill="' + col + '"/>';
      case 'text': return '<path d="M22 19h3v3h-3z M28 19h3v3h-3z M34 19h3v3h-3z" fill="' + col + '"/>';
      case 'white': return '<polygon points="4,20 14,14 14,26" fill="' + col + '"/>';
      case 'curacao': return '<rect x="0" y="24" width="60" height="5" fill="' + col + '"/>' +
        starAt(12, 12, 4, '#FFFFFF') + starAt(20, 19, 2.8, '#FFFFFF');
      default: return '';
    }
  }

  function flagSvg(code, size) {
    var spec = SPEC[code];
    var s = size || 44, w = s, h = Math.round(s * 0.68);
    if (!spec) return null;
    var colors = spec[1].split('|');
    var body = base(spec[0], colors) + overlay(spec[2], colors);
    return '<svg class="crest-flagsvg" viewBox="0 0 60 40" width="' + w + '" height="' + h + '" ' +
      'preserveAspectRatio="xMidYMid meet" role="img" aria-label="' + code + '">' +
      '<g>' + body + '</g>' +
      '<rect x=".5" y=".5" width="59" height="39" fill="none" stroke="rgba(0,0,0,.45)" stroke-width="1.6" rx="2"/>' +
      '</svg>';
  }

  global.Flags = { svg: flagSvg, has: function (c) { return !!SPEC[c]; } };
})(window);
