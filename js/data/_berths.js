/* =========================================================================
   CUPOS CONTINENTALES Y FORMATOS
   ---------------------------------------------------------------------
   Regla general de copa nacional:
     El campeón de copa entra en la competición marcada en "cup".
     Si ese equipo ya se clasificó por posición en liga, su plaza de copa
     pasa al siguiente equipo de la tabla ("libera cupo al siguiente").
   ========================================================================= */

/* País real de los clubes de las ligas "Resto de…", para que el sorteo
   pueda evitar que coincidan en el mismo grupo. */
window.CLUB_COUNTRY = {
  /* Resto de CONCACAF */
  'Deportivo Saprissa': 'Costa Rica', 'LD Alajuelense': 'Costa Rica', 'CS Herediano': 'Costa Rica', 'CS Cartaginés': 'Costa Rica',
  'CD Olimpia': 'Honduras', 'FC Motagua': 'Honduras', 'Real España': 'Honduras', 'CD Marathón': 'Honduras',
  'Comunicaciones FC': 'Guatemala', 'CSD Municipal': 'Guatemala', 'Antigua GFC': 'Guatemala', 'Xelajú MC': 'Guatemala',
  'Tauro FC': 'Panamá', 'CA Independiente de La Chorrera': 'Panamá',
  'Alianza FC El Salvador': 'El Salvador', 'Cavalier SC': 'Jamaica',
  /* Resto de AFC */
  'Al Ain FC': 'EAU', 'Shabab Al Ahli': 'EAU', 'Al Wasl': 'EAU', 'Sharjah FC': 'EAU',
  'Persepolis': 'Irán', 'Esteghlal': 'Irán', 'Sepahan': 'Irán', 'Tractor SC': 'Irán',
  'Pakhtakor Tashkent': 'Uzbekistán', 'Nasaf Qarshi': 'Uzbekistán',
  'Al Sadd': 'Catar', 'Al Duhail': 'Catar',
  'Buriram United': 'Tailandia', 'BG Pathum United': 'Tailandia',
  'Al Quwa Al Jawiya': 'Irak', 'Johor Darul Ta\'zim': 'Malasia',
  /* Resto de CAF */
  'Espérance de Túnez': 'Túnez', 'Étoile du Sahel': 'Túnez', 'Club Africain': 'Túnez', 'CS Sfaxien': 'Túnez',
  'TP Mazembe': 'RD Congo', 'AS Vita Club': 'RD Congo',
  'CR Belouizdad': 'Argelia', 'MC Alger': 'Argelia', 'JS Kabylie': 'Argelia',
  'Asante Kotoko': 'Ghana', 'Hearts of Oak': 'Ghana',
  'Enyimba FC': 'Nigeria', 'Rivers United': 'Nigeria',
  'Coton Sport': 'Camerún', 'Petro de Luanda': 'Angola', 'Simba SC': 'Tanzania',
  /* Resto de OFC */
  'Auckland City FC': 'Nueva Zelanda', 'Wellington Olympic': 'Nueva Zelanda', 'Bay Olympic': 'Nueva Zelanda',
  'Birkenhead United': 'Nueva Zelanda', 'Christchurch United': 'Nueva Zelanda',
  'AS Pirae': 'Tahití', 'Hienghène Sport': 'Nueva Caledonia', 'Solomon Warriors': 'Islas Salomón'
};

/* Competiciones continentales.
   groups = número de grupos · size = equipos por grupo
   qualify = cuántos pasan por grupo · bestExtra = mejores terceros añadidos  */
window.CONT_COMPS = {
  libertadores: {
    id: 'libertadores', name: 'Copa Libertadores', conf: 'CONMEBOL', level: 1,
    groups: 8, size: 4, qualify: 2, bestExtra: 0, prelim: true, feeds: 'sudamericana'
  },
  sudamericana: {
    id: 'sudamericana', name: 'Copa Sudamericana', conf: 'CONMEBOL', level: 2,
    groups: 8, size: 4, qualify: 1, bestExtra: 0, playoffWith: 'libertadores'
  },
  ucl: {
    id: 'ucl', name: 'UEFA Champions League', conf: 'UEFA', level: 1,
    groups: 8, size: 4, qualify: 2, bestExtra: 0,
    prelim: true, playoff: true, feeds: 'uel'
  },
  /* 48 equipos: pasan los dos primeros de cada grupo y se les suman los
     ocho terceros de la Champions: dieciseisavos de 32.
     Su clasificación tiene dos rondas, primera y play-off. */
  uel: {
    id: 'uel', name: 'UEFA Europa League', conf: 'UEFA', level: 2,
    groups: 12, size: 4, qualify: 2, bestExtra: 0,
    prelim: true, prelimSize: 24, playoff: true, takesThirdsFrom: 'ucl'
  },
  concachampions: {
    id: 'concachampions', name: 'CONCACAF Champions Cup', conf: 'CONCACAF', level: 1,
    groups: 4, size: 4, qualify: 2, bestExtra: 0
  },
  afccl: {
    id: 'afccl', name: 'AFC Champions League Elite', conf: 'AFC', level: 1,
    groups: 6, size: 4, qualify: 2, bestExtra: 4
  },
  cafcl: {
    id: 'cafcl', name: 'CAF Champions League', conf: 'CAF', level: 1,
    groups: 4, size: 4, qualify: 2, bestExtra: 0
  },
  ofc: {
    id: 'ofc', name: 'Campeón de Oceanía', conf: 'OFC', level: 1,
    leagueChampion: 'otrosofc'          // sin torneo: campeón de liga
  },
  cwc: {
    id: 'cwc', name: 'Mundial de Clubes', conf: null, level: 0,
    knockoutOnly: true, singleMatches: true
  }
};

/* Cupos por país.
   top     = plazas directas a la fase de grupos del torneo de 1er nivel
   prelim  = plazas a la fase previa
   second  = plazas al torneo de 2º nivel
   cup     = dónde entra el campeón de copa: 'top' | 'prelim' | 'second'   */
window.BERTHS = {
  /* ---------------- CONMEBOL ---------------- */
  arg: { conf: 'CONMEBOL', top: 6, pre: 0, second: 6, cup: 'top' },
  bra: { conf: 'CONMEBOL', top: 6, pre: 0, second: 6, cup: 'top' },
  chi: { conf: 'CONMEBOL', top: 2, pre: 1, second: 2, cup: 'pre' },
  col: { conf: 'CONMEBOL', top: 2, pre: 1, second: 2, cup: 'pre' },
  ecu: { conf: 'CONMEBOL', top: 2, pre: 1, second: 2, cup: 'pre' },
  par: { conf: 'CONMEBOL', top: 2, pre: 1, second: 2, cup: 'pre' },
  uru: { conf: 'CONMEBOL', top: 2, pre: 1, second: 2, cup: 'pre' },
  ven: { conf: 'CONMEBOL', top: 2, pre: 1, second: 2, cup: 'pre' },
  per: { conf: 'CONMEBOL', top: 2, pre: 1, second: 2, cup: 'pre' },
  bol: { conf: 'CONMEBOL', top: 2, pre: 1, second: 2, cup: 'pre' },

  /* ---------------- UEFA ----------------
     Cinco puertas de entrada y los totales cuadran exactos:

       CHAMPIONS
         grupos 32 = 23 directos + campeón de Champions + campeón de Europa
                     League + 7 ganadores del play-off
         play-off 14 = 6 directos + 8 ganadores de la ronda previa
         previa   16 = 14 directos + 2 del Resto de UEFA

       EUROPA LEAGUE
         grupos   48 = 22 directos + 7 perdedores del play-off de Champions
                       + 19 ganadores del play-off (12 grupos de 4)
         play-off 38 = 12 ganadores de su primera ronda + 18 directos
                       + 8 perdedores de la previa de Champions
         1ª ronda 24 = los 24 más flojos de los 42 con cupo de clasificación

     El campeón de cada copa nacional entra en los grupos de la Europa League
     en los siete países grandes; en el resto, en su play-off.              */
  eng: { conf: 'UEFA', top: 4, po: 0, pre: 0, second: 3, secondPo: 0, cup: 'second' },
  esp: { conf: 'UEFA', top: 4, po: 0, pre: 0, second: 3, secondPo: 0, cup: 'second' },
  ita: { conf: 'UEFA', top: 4, po: 0, pre: 0, second: 3, secondPo: 0, cup: 'second' },
  ger: { conf: 'UEFA', top: 3, po: 0, pre: 0, second: 3, secondPo: 0, cup: 'second' },
  fra: { conf: 'UEFA', top: 2, po: 0, pre: 0, second: 3, secondPo: 0, cup: 'second' },
  por: { conf: 'UEFA', top: 2, po: 0, pre: 0, second: 2, secondPo: 0, cup: 'second' },
  ned: { conf: 'UEFA', top: 1, po: 1, pre: 0, second: 2, secondPo: 0, cup: 'second' },
  tur: { conf: 'UEFA', top: 1, po: 1, pre: 0, second: 1, secondPo: 1, cup: 'secondPo' },
  bel: { conf: 'UEFA', top: 1, po: 0, pre: 1, second: 1, secondPo: 1, cup: 'secondPo' },
  rus: { conf: 'UEFA', top: 1, po: 0, pre: 1, second: 1, secondPo: 1, cup: 'secondPo' },

  gre: { conf: 'UEFA', top: 0, po: 1, pre: 0, second: 0, secondPo: 2, cup: 'secondPo' },
  aut: { conf: 'UEFA', top: 0, po: 1, pre: 0, second: 0, secondPo: 2, cup: 'secondPo' },
  sco: { conf: 'UEFA', top: 0, po: 1, pre: 0, second: 0, secondPo: 2, cup: 'secondPo' },
  sui: { conf: 'UEFA', top: 0, po: 1, pre: 0, second: 0, secondPo: 2, cup: 'secondPo' },

  cze: { conf: 'UEFA', top: 0, po: 0, pre: 1, second: 0, secondPo: 2, cup: 'secondPo' },
  nor: { conf: 'UEFA', top: 0, po: 0, pre: 1, second: 0, secondPo: 2, cup: 'secondPo' },
  den: { conf: 'UEFA', top: 0, po: 0, pre: 1, second: 0, secondPo: 2, cup: 'secondPo' },
  pol: { conf: 'UEFA', top: 0, po: 0, pre: 1, second: 0, secondPo: 2, cup: 'secondPo' },
  isr: { conf: 'UEFA', top: 0, po: 0, pre: 1, second: 0, secondPo: 2, cup: 'secondPo' },
  ukr: { conf: 'UEFA', top: 0, po: 0, pre: 1, second: 0, secondPo: 2, cup: 'secondPo' },
  srb: { conf: 'UEFA', top: 0, po: 0, pre: 1, second: 0, secondPo: 2, cup: 'secondPo' },
  cyp: { conf: 'UEFA', top: 0, po: 0, pre: 1, second: 0, secondPo: 2, cup: 'secondPo' },

  swe: { conf: 'UEFA', top: 0, po: 0, pre: 1, second: 0, secondPo: 2, cup: 'secondPo' },
  cro: { conf: 'UEFA', top: 0, po: 0, pre: 1, second: 0, secondPo: 2, cup: 'secondPo' },
  rou: { conf: 'UEFA', top: 0, po: 0, pre: 1, second: 0, secondPo: 2, cup: 'secondPo' },
  hun: { conf: 'UEFA', top: 0, po: 0, pre: 1, second: 0, secondPo: 2, cup: 'secondPo' },

  /* los campeones de las ligas que no están cargadas enteras */
  uex: { conf: 'UEFA', top: 0, po: 0, pre: 2, second: 0, secondPo: 7, cup: 'secondPo' },

  /* ---------------- CONCACAF ---------------- */
  mex: { conf: 'CONCACAF', top: 4, pre: 0, second: 0, cup: 'top' },
  usa: { conf: 'CONCACAF', top: 4, pre: 0, second: 0, cup: 'top' },
  ccx: { conf: 'CONCACAF', top: 8, pre: 0, second: 0, cup: 'top' },

  /* ---------------- AFC ---------------- */
  ksa: { conf: 'AFC', top: 3, pre: 0, second: 0, cup: 'top' },
  jpn: { conf: 'AFC', top: 3, pre: 0, second: 0, cup: 'top' },
  kor: { conf: 'AFC', top: 3, pre: 0, second: 0, cup: 'top' },
  aus: { conf: 'AFC', top: 3, pre: 0, second: 0, cup: 'top' },
  chn: { conf: 'AFC', top: 3, pre: 0, second: 0, cup: 'top' },
  afx: { conf: 'AFC', top: 9, pre: 0, second: 0, cup: 'top' },

  /* ---------------- CAF ---------------- */
  mar: { conf: 'CAF', top: 3, pre: 0, second: 0, cup: 'top' },
  egy: { conf: 'CAF', top: 3, pre: 0, second: 0, cup: 'top' },
  rsa: { conf: 'CAF', top: 3, pre: 0, second: 0, cup: 'top' },
  cfx: { conf: 'CAF', top: 7, pre: 0, second: 0, cup: 'top' },

  /* ---------------- OFC ---------------- */
  ofx: { conf: 'OFC', top: 0, pre: 0, second: 0, cup: null }
};

/* Ascensos y descensos: liga de 1ª ← → liga de 2ª */
/* «po» = el último cupo se juega en un play-off entre los cuatro mejores
   que no ascendieron directo (semifinales cruzadas y final). */
window.PROMOTIONS = [
  { tier1: 'premier', tier2: 'championship', n: 3, po: true },
  { tier1: 'championship', tier2: 'league1', n: 3, po: true },
  { tier1: 'league1', tier2: 'league2', n: 4, po: true },
  { tier1: 'laliga', tier2: 'laliga2', n: 3, po: true },
  { tier1: 'seriea', tier2: 'serieb', n: 3, po: true },
  { tier1: 'bundesliga', tier2: 'bundesliga2', n: 2 },
  { tier1: 'ligue1', tier2: 'ligue2', n: 2 },
  { tier1: 'argentina', tier2: 'argentina2', n: 4 },
  /* La Primera Nacional baja 4, pero no a una sola categoría: los clubes del
     AMBA caen a la B Metropolitana y los del interior al Federal A (ver
     _zonas_ar.js). El reparto depende de quién descienda, así que puede ser
     3 y 1, o 4 y 0; «n» aquí sólo cuenta cuántos suben de cada categoría. */
  { tier1: 'argentina2', tier2: 'argentina3', n: 2, po: true, zona: 'M' },
  { tier1: 'argentina2', tier2: 'federala', n: 2, po: true, zona: 'I' },
  /* La B Metropolitana baja tres a la Primera C y sube tres de allí. */
  { tier1: 'argentina3', tier2: 'argentina4', n: 3 },
  /* Entre los dos federales se mueven cinco equipos por temporada. */
  { tier1: 'federala', tier2: 'federalam', n: 5 },
  /* Portugal: 2 descensos directos y 2 ascensos.
     Países Bajos: 1 descenso directo y el resto por promoción; se resuelve como 2. */
  { tier1: 'portugal', tier2: 'portugal2', n: 2 },
  { tier1: 'eredivisie', tier2: 'eredivisie2', n: 2 },
  { tier1: 'brasileirao', tier2: 'brasileirao2', n: 4 }
];

/* Coeficiente de país de la UEFA: manda en el orden de las ligas del menú,
   de la federación más fuerte a la más débil. Rusia figura al final porque
   está suspendida y su coeficiente lleva temporadas sin sumar. */
window.UEFA_RANK = {
  eng: 1, ita: 2, esp: 3, ger: 4, fra: 5, ned: 6, por: 7, bel: 8, tur: 9,
  cze: 10, gre: 11, nor: 12, den: 13, aut: 14, sui: 15, pol: 16, sco: 17,
  isr: 18, ukr: 19, cyp: 20, srb: 21, swe: 22, cro: 23, rou: 24, hun: 25,
  rus: 26
};
