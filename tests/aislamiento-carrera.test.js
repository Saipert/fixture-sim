/* El modo carrera es un mundo aparte: lo que pase en él (descensos, ascensos,
   plantillas que envejecen) no puede verse en los demás modos, como las
   «Competiciones continentales». Se corre con:  node tests/aislamiento-carrera.test.js */
'use strict';
const fs = require('fs'), vm = require('vm'), path = require('path'), assert = require('assert');
const root = path.join(__dirname, '..');
const html = fs.readFileSync(path.join(root, 'index.html'), 'utf8');
const hasta = ['js/season.js'];
const srcs = [...html.matchAll(/<script src="([^"?]+)/g)].map(m => m[1]);
const win = { console, setTimeout, clearTimeout, Math, Date, JSON,
  localStorage: { getItem() { return null; }, setItem() {}, removeItem() {} }, navigator: {}, location: {} };
win.window = win; win.global = win; win.self = win;
const ctx = vm.createContext(win);
for (const s of srcs) {
  if (s === 'js/world-ui.js' || s === 'js/app.js' || s === 'js/carrera-ui.js' || s === 'js/profile.js') continue;
  vm.runInContext(fs.readFileSync(path.join(root, s), 'utf8'), ctx, { filename: s });
}
const LG = win.LEAGUES;
Object.keys(LG).forEach(id => LG[id].teams.forEach(t => {
  const p = win.PLANTILLAS_2627 && win.PLANTILLAS_2627[id + '|' + t.n];
  if (p && p.length >= 11) t.p = p;
}));
win.Fill.run(LG);
Object.keys(LG).forEach(id => { LG[id].id = id; LG[id].teams.forEach(t => { t.leagueId = id; t.league = LG[id].name; t.ovr = win.Engine.overall(t); }); });
win.COUNTRIES = (win.COUNTRIES || []).filter(c => { c.have = c.leagues.filter(l => LG[l]); return c.have.length; });

/* huella del mundo: a qué liga pertenece cada club y qué plantilla lleva */
function huella() {
  const out = [];
  Object.keys(LG).sort().forEach(id => {
    out.push(id + ':' + LG[id].teams.map(t => t.n).join(','));
    LG[id].teams.forEach(t => out.push([t.n, t.leagueId, t.league, t.ovr, JSON.stringify(t.p)].join('|')));
  });
  return out.join('\n');
}

const antes = huella();
win.Mundo.entra(false);                        /* se abre el modo carrera */

/* una temporada completa con descensos y ascensos, y el cierre con el mercado */
const W = win.World;
W.create({});
const mio = LG.laliga.teams.find(t => t.n === 'Sevilla FC') || LG.laliga.teams[0];
W.setDetail(mio, false);
while (W.state.week < W.state.total) W.advanceWeek();
W.endSeason();
assert.notStrictEqual(huella(), antes, 'la carrera tendría que haber movido clubes o plantillas');

win.Mundo.sale(true);                          /* se sale al menú: los demás modos ven el original */
assert.strictEqual(huella(), antes, 'el mundo original se tiene que recuperar al salir de la carrera');
assert.ok(LG.laliga.teams.indexOf(mio) >= 0, mio.n + ' tiene que seguir en LaLiga fuera de la carrera');

const enCarrera = (win.Mundo.entra(true), huella());   /* se vuelve a la partida */
assert.notStrictEqual(enCarrera, antes, 'al volver se tiene que recuperar el mundo de la carrera');
win.Mundo.sale(true);
assert.strictEqual(huella(), antes);
console.log('ok · el modo carrera no se filtra a los demás modos');
