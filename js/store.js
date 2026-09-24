/* =========================================================================
   ALMACÉN / EDITOR
   Guarda en el navegador los cambios que haga el usuario sobre equipos y
   selecciones, y los aplica encima de los datos base al arrancar.
   ========================================================================= */
(function (global) {
  'use strict';

  var KEY = 'simufut.v2';
  var state = { teams: {}, custom: {}, meta: {} };

  function safeRead() {
    try {
      var raw = localStorage.getItem(KEY);
      if (raw) state = JSON.parse(raw);
    } catch (e) { /* modo privado o almacenamiento bloqueado */ }
    state.teams = state.teams || {};
    state.custom = state.custom || {};
    state.meta = state.meta || {};
  }
  function save() {
    try { localStorage.setItem(KEY, JSON.stringify(state)); return true; }
    catch (e) { return false; }
  }

  function key(leagueId, name) { return leagueId + '|' + name; }

  /* Un club puede cambiar de categoría de una versión a otra. La edición
     guardada lleva la liga vieja en la clave, así que antes de aplicarla se
     busca al club por su nombre: si no, se perdería todo lo editado. */
  function reubica(LEAGUES) {
    var donde = {};
    Object.keys(LEAGUES).forEach(function (lid) {
      (LEAGUES[lid].teams || []).forEach(function (t) { donde[t.n] = lid; });
    });
    Object.keys(state.teams).forEach(function (k) {
      var corte = k.indexOf('|');
      if (corte < 0) return;
      var lid = k.slice(0, corte), nombre = k.slice(corte + 1);
      var ahora = donde[nombre];
      if (!ahora || ahora === lid) return;
      var nueva = key(ahora, nombre);
      if (!state.teams[nueva]) state.teams[nueva] = state.teams[k];
    });
  }

  /* ---------- aplicar overrides sobre los datos base ---------- */
  function apply(LEAGUES) {
    safeRead();
    reubica(LEAGUES);
    Object.keys(LEAGUES).forEach(function (lid) {
      var lg = LEAGUES[lid];
      // equipos creados por el usuario
      (state.custom[lid] || []).forEach(function (t) {
        if (!lg.teams.some(function (x) { return x.n === t.n; })) {
          var copy = JSON.parse(JSON.stringify(t));
          copy.userMade = true;
          lg.teams.push(copy);
        }
      });
      lg.teams.forEach(function (t, i) {
        var ov = state.teams[key(lid, t.n)];
        if (!ov) return;
        if (ov.deleted) { t.deleted = true; return; }
        if (ov.n) t.n = ov.n;
        if (ov.s) t.s = ov.s;
        if (ov.c1) t.c1 = ov.c1;
        if (ov.c2) t.c2 = ov.c2;
        if (ov.logo) t.logo = ov.logo;
        if (ov.p) t.p = JSON.parse(JSON.stringify(ov.p));
        t.edited = true;
      });
      lg.teams = lg.teams.filter(function (t) { return !t.deleted; });
    });
  }

  /* ---------- guardar un equipo completo ---------- */
  function saveTeam(leagueId, originalName, team) {
    state.teams[key(leagueId, originalName)] = {
      n: team.n, s: team.s, c1: team.c1, c2: team.c2, logo: team.logo || '',
      p: JSON.parse(JSON.stringify(team.p))
    };
    return save();
  }

  function resetTeam(leagueId, name) {
    delete state.teams[key(leagueId, name)];
    (Object.keys(state.custom)).forEach(function (lid) {
      if (lid === leagueId) state.custom[lid] = (state.custom[lid] || []).filter(function (t) { return t.n !== name; });
    });
    return save();
  }

  function addTeam(leagueId, team) {
    state.custom[leagueId] = state.custom[leagueId] || [];
    state.custom[leagueId].push(JSON.parse(JSON.stringify(team)));
    return save();
  }

  function deleteTeam(leagueId, name) {
    state.teams[key(leagueId, name)] = { deleted: true };
    state.custom[leagueId] = (state.custom[leagueId] || []).filter(function (t) { return t.n !== name; });
    return save();
  }

  function isEdited(leagueId, name) { return !!state.teams[key(leagueId, name)]; }

  function resetAll() {
    state = { teams: {}, custom: {}, meta: {} };
    try { localStorage.removeItem(KEY); } catch (e) { }
  }

  function count() { return Object.keys(state.teams).length; }

  /* ---------- escalar una plantilla hasta una valoración global objetivo ---------- */
  function scaleToOverall(team, target) {
    var cur = Engine.overall(team);
    for (var iter = 0; iter < 40 && cur !== target; iter++) {
      var d = target - cur;
      var step = Math.abs(d) > 6 ? d / 2 : (d > 0 ? 1 : -1);
      team.p.forEach(function (p) {
        p[2] = Math.max(40, Math.min(99, Math.round(p[2] + step)));
      });
      cur = Engine.overall(team);
    }
    return cur;
  }

  /* ---------- exportar / importar ---------- */
  function exportJSON() { return JSON.stringify(state, null, 2); }
  function importJSON(txt) {
    var obj = JSON.parse(txt);
    if (!obj || typeof obj !== 'object') throw new Error('formato no válido');
    state = { teams: obj.teams || {}, custom: obj.custom || {}, meta: obj.meta || {} };
    return save();
  }

  global.Store = {
    apply: apply, saveTeam: saveTeam, resetTeam: resetTeam, addTeam: addTeam,
    deleteTeam: deleteTeam, isEdited: isEdited, resetAll: resetAll, count: count,
    scaleToOverall: scaleToOverall, exportJSON: exportJSON, importJSON: importJSON
  };
})(window);
