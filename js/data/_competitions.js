/* =========================================================================
   REGISTRO DE PAÍSES Y COMPETICIONES
   Define qué ligas y qué copa real tiene cada país, y las competiciones
   continentales e internacionales. Tolera ligas que todavía no existan:
   las que falten simplemente no aparecen en el menú.
   ========================================================================= */
window.CONFEDS = {
  UEFA: { name: 'UEFA', label: 'Europa', flag: '🇪🇺' },
  CONMEBOL: { name: 'CONMEBOL', label: 'Sudamérica', flag: '🌎' },
  CONCACAF: { name: 'CONCACAF', label: 'Norte y Centroamérica', flag: '🌎' },
  AFC: { name: 'AFC', label: 'Asia', flag: '🌏' },
  CAF: { name: 'CAF', label: 'África', flag: '🌍' },
  OFC: { name: 'OFC', label: 'Oceanía', flag: '🌏' }
};

window.COUNTRIES = [
  /* ---------------- UEFA ---------------- */
  { id: 'eng', name: 'Inglaterra', flag: '🏴󠁧󠁢󠁥󠁮󠁧󠁿', conf: 'UEFA', leagues: ['premier', 'championship', 'league1', 'league2'], cup: 'FA Cup', cup2: 'EFL Cup', supercup: 'Community Shield' },
  { id: 'esp', name: 'España', flag: '🇪🇸', conf: 'UEFA', leagues: ['laliga', 'laliga2'], cup: 'Copa del Rey', supercup: 'Supercopa de España' },
  { id: 'ita', name: 'Italia', flag: '🇮🇹', conf: 'UEFA', leagues: ['seriea', 'serieb'], cup: 'Coppa Italia', supercup: 'Supercoppa Italiana' },
  { id: 'ger', name: 'Alemania', flag: '🇩🇪', conf: 'UEFA', leagues: ['bundesliga', 'bundesliga2'], cup: 'DFB-Pokal', supercup: 'Supercopa de Alemania' },
  { id: 'fra', name: 'Francia', flag: '🇫🇷', conf: 'UEFA', leagues: ['ligue1', 'ligue2'], cup: 'Coupe de France', supercup: 'Trophée des Champions' },
  { id: 'por', name: 'Portugal', flag: '🇵🇹', conf: 'UEFA', leagues: ['portugal', 'portugal2'], cup: 'Taça de Portugal', supercup: 'Supertaça' },
  { id: 'sco', name: 'Escocia', flag: '🏴󠁧󠁢󠁳󠁣󠁴󠁿', conf: 'UEFA', leagues: ['escocia'], cup: 'Scottish Cup', cup2: 'Scottish League Cup' },
  { id: 'ned', name: 'Países Bajos', flag: '🇳🇱', conf: 'UEFA', leagues: ['eredivisie', 'eredivisie2'], cup: 'KNVB Beker', supercup: 'Johan Cruyff Schaal' },
  { id: 'tur', name: 'Turquía', flag: '🇹🇷', conf: 'UEFA', leagues: ['turquia'], cup: 'Copa de Turquía' },
  { id: 'gre', name: 'Grecia', flag: '🇬🇷', conf: 'UEFA', leagues: ['grecia'], cup: 'Copa de Grecia' },
  { id: 'ukr', name: 'Ucrania', flag: '🇺🇦', conf: 'UEFA', leagues: ['ucrania'], cup: 'Copa de Ucrania' },
  { id: 'rus', name: 'Rusia', flag: '🇷🇺', conf: 'UEFA', leagues: ['rusia'], cup: 'Copa de Rusia' },
  { id: 'nor', name: 'Noruega', flag: '🇳🇴', conf: 'UEFA', leagues: ['noruega'], cup: 'Copa de Noruega' },
  { id: 'den', name: 'Dinamarca', flag: '🇩🇰', conf: 'UEFA', leagues: ['dinamarca'], cup: 'Copa de Dinamarca' },
  { id: 'swe', name: 'Suecia', flag: '🇸🇪', conf: 'UEFA', leagues: ['suecia'], cup: 'Svenska Cupen' },
  { id: 'pol', name: 'Polonia', flag: '🇵🇱', conf: 'UEFA', leagues: ['polonia'], cup: 'Copa de Polonia' },
  { id: 'cro', name: 'Croacia', flag: '🇭🇷', conf: 'UEFA', leagues: ['croacia'], cup: 'Copa de Croacia' },
  { id: 'hun', name: 'Hungría', flag: '🇭🇺', conf: 'UEFA', leagues: ['hungria'], cup: 'Copa de Hungría' },
  { id: 'srb', name: 'Serbia', flag: '🇷🇸', conf: 'UEFA', leagues: ['serbia'], cup: 'Copa de Serbia' },
  { id: 'aut', name: 'Austria', flag: '🇦🇹', conf: 'UEFA', leagues: ['austria'], cup: 'Copa de Austria' },
  { id: 'bel', name: 'Bélgica', flag: '🇧🇪', conf: 'UEFA', leagues: ['belgica'], cup: 'Copa de Bélgica' },
  { id: 'sui', name: 'Suiza', flag: '🇨🇭', conf: 'UEFA', leagues: ['suiza'], cup: 'Copa de Suiza' },

  { id: "cze", name: "Chequia", flag: "🇨🇿", conf: 'UEFA', leagues: ["chequia"], cup: "Copa de Chequia" },
  { id: "rou", name: "Rumanía", flag: "🇷🇴", conf: 'UEFA', leagues: ["rumania"], cup: "Cupa României" },
  { id: "isr", name: "Israel", flag: "🇮🇱", conf: 'UEFA', leagues: ["israel"], cup: "Copa del Estado" },
  { id: "cyp", name: "Chipre", flag: "🇨🇾", conf: 'UEFA', leagues: ["chipre"], cup: "Copa de Chipre" },
  { id: 'uex', name: 'Resto de UEFA', flag: '🌍', conf: 'UEFA', leagues: ['otrosuefa'], cup: 'Copa UEFA Regional' },
  /* ---------------- CONMEBOL ---------------- */
  { id: 'arg', name: 'Argentina', flag: '🇦🇷', conf: 'CONMEBOL', leagues: ['argentina', 'argentina2', 'argentina3', 'federala', 'argentina4', 'federalam'], cup: 'Copa Argentina', supercup: 'Supercopa Argentina' },
  { id: 'bra', name: 'Brasil', flag: '🇧🇷', conf: 'CONMEBOL', leagues: ['brasileirao', 'brasileirao2'], cup: 'Copa do Brasil', supercup: 'Supercopa do Brasil' },
  { id: 'uru', name: 'Uruguay', flag: '🇺🇾', conf: 'CONMEBOL', leagues: ['uruguay'], cup: 'Copa Uruguay' },
  { id: 'chi', name: 'Chile', flag: '🇨🇱', conf: 'CONMEBOL', leagues: ['chile'], cup: 'Copa Chile' },
  { id: 'col', name: 'Colombia', flag: '🇨🇴', conf: 'CONMEBOL', leagues: ['colombia'], cup: 'Copa Colombia' },
  { id: 'ecu', name: 'Ecuador', flag: '🇪🇨', conf: 'CONMEBOL', leagues: ['ecuador'], cup: 'Copa Ecuador' },
  { id: 'per', name: 'Perú', flag: '🇵🇪', conf: 'CONMEBOL', leagues: ['peru'], cup: 'Copa Perú' },
  { id: 'par', name: 'Paraguay', flag: '🇵🇾', conf: 'CONMEBOL', leagues: ['paraguay'], cup: 'Copa Paraguay' },
  { id: 'bol', name: 'Bolivia', flag: '🇧🇴', conf: 'CONMEBOL', leagues: ['bolivia'], cup: 'Copa Bolivia' },
  { id: 'ven', name: 'Venezuela', flag: '🇻🇪', conf: 'CONMEBOL', leagues: ['venezuela'], cup: 'Copa Venezuela' },

  /* ---------------- CONCACAF ---------------- */
  { id: 'mex', name: 'México', flag: '🇲🇽', conf: 'CONCACAF', leagues: ['ligamx'], cup: 'Copa MX', supercup: 'Campeón de Campeones' },
  { id: 'usa', name: 'Estados Unidos', flag: '🇺🇸', conf: 'CONCACAF', leagues: ['mls'], cup: 'US Open Cup' },
  { id: 'ccx', name: 'Resto de CONCACAF', flag: '🌎', conf: 'CONCACAF', leagues: ['otrosconcacaf'], cup: 'Copa CONCACAF Regional' },

  /* ---------------- AFC ---------------- */
  { id: 'ksa', name: 'Arabia Saudita', flag: '🇸🇦', conf: 'AFC', leagues: ['saudi'], cup: "King's Cup" },
  { id: 'jpn', name: 'Japón', flag: '🇯🇵', conf: 'AFC', leagues: ['japon'], cup: 'Copa del Emperador' },
  { id: 'kor', name: 'Corea del Sur', flag: '🇰🇷', conf: 'AFC', leagues: ['corea'], cup: 'Copa FA de Corea' },
  { id: 'aus', name: 'Australia', flag: '🇦🇺', conf: 'AFC', leagues: ['australia'], cup: 'Australia Cup' },
  { id: 'chn', name: 'China', flag: '🇨🇳', conf: 'AFC', leagues: ['china'], cup: 'Copa FA de China' },
  { id: 'afx', name: 'Resto de AFC', flag: '🌏', conf: 'AFC', leagues: ['otrosafc'], cup: 'Copa AFC Regional' },

  /* ---------------- CAF ---------------- */
  { id: 'mar', name: 'Marruecos', flag: '🇲🇦', conf: 'CAF', leagues: ['marruecos'], cup: 'Copa del Trono' },
  { id: 'egy', name: 'Egipto', flag: '🇪🇬', conf: 'CAF', leagues: ['egipto'], cup: 'Copa de Egipto' },
  { id: 'rsa', name: 'Sudáfrica', flag: '🇿🇦', conf: 'CAF', leagues: ['sudafrica'], cup: 'Nedbank Cup' },
  { id: 'cfx', name: 'Resto de CAF', flag: '🌍', conf: 'CAF', leagues: ['otroscaf'], cup: 'Copa CAF Regional' },

  /* ---------------- OFC ---------------- */
  { id: 'ofx', name: 'Oceanía', flag: '🌏', conf: 'OFC', leagues: ['otrosofc'], cup: 'Copa de Oceanía de Clubes' }
];

/* Competiciones continentales de clubes.
   Los participantes se eligen por valoración dentro de la confederación,
   con un tope de equipos por país para que sea representativo. */
window.CONTINENTAL = [
  { id: 'ucl', name: 'UEFA Champions League', conf: 'UEFA', size: 32, maxPerCountry: 4, groupSize: 4 },
  { id: 'uel', name: 'UEFA Europa League', conf: 'UEFA', size: 32, maxPerCountry: 3, groupSize: 4, skipTop: 32 },
  { id: 'lib', name: 'Copa Libertadores', conf: 'CONMEBOL', size: 32, maxPerCountry: 6, groupSize: 4 },
  { id: 'sud', name: 'Copa Sudamericana', conf: 'CONMEBOL', size: 32, maxPerCountry: 6, groupSize: 4, skipTop: 32 },
  { id: 'ccc', name: 'CONCACAF Champions Cup', conf: 'CONCACAF', size: 16, maxPerCountry: 6, groupSize: 0 },
  { id: 'acl', name: 'AFC Champions League Elite', conf: 'AFC', size: 16, maxPerCountry: 4, groupSize: 4 },
  { id: 'cafcl', name: 'CAF Champions League', conf: 'CAF', size: 16, maxPerCountry: 4, groupSize: 4 },
  { id: 'ofccl', name: 'OFC Champions League', conf: 'OFC', size: 8, maxPerCountry: 8, groupSize: 0 },
  { id: 'cwc', name: 'Mundial de Clubes', conf: null, size: 8, maxPerCountry: 1, groupSize: 4, porConf: true }
];

/* Competiciones de selecciones */
window.NATIONAL_COMPS = [
  { id: 'quali', name: 'Clasificatorias al Mundial', special: 'qualifiers' },
  { id: 'wc2026', name: 'Mundial 2026', filter: 'wc', size: 48, groupSize: 4 },
  { id: 'wcall', name: 'Mundial ampliado (64 selecciones)', filter: 'all', size: 64, groupSize: 4 },
  { id: 'ofcnations', name: 'Copa de Naciones de la OFC', conf: 'OFC', size: 8, groupSize: 4 },
  { id: 'euro', name: 'Eurocopa', conf: 'UEFA', size: 24, groupSize: 4 },
  { id: 'copaamerica', name: 'Copa América', conf: 'CONMEBOL', size: 16, groupSize: 4, invitados: 6 },
  { id: 'goldcup', name: 'Copa Oro', conf: 'CONCACAF', size: 16, groupSize: 4 },
  { id: 'asiancup', name: 'Copa Asiática', conf: 'AFC', size: 24, groupSize: 4 },
  { id: 'afcon', name: 'Copa Africana de Naciones', conf: 'CAF', size: 24, groupSize: 4 },
  { id: 'finalissima', name: 'Finalissima', filter: 'custom', size: 2, groupSize: 0 }
];
