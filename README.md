# Simulador de Fútbol

Aplicación web local, sin instalación y sin servidor, para simular partidos,
temporadas, copas nacionales, torneos continentales, mundiales de selecciones y
cualquier torneo que se te ocurra.

**Para abrirla: doble clic en `index.html`.**

**53 ligas · 903 clubes · 66 selecciones · casi 17.000 jugadores.**

---

## El menú

| Sección | Qué hace |
|---|---|
| **Partido rápido** | Cualquier equipo o selección contra cualquiera, con narración minuto a minuto, táctica y campo neutral. |
| **Modo carrera** | Eliges un club y juegas temporada tras temporada. Ver más abajo. |
| **Ligas y copas nacionales** | Cada país con sus divisiones reales y su copa real (Copa del Rey, FA Cup, Coppa Italia, DFB-Pokal, Copa Argentina, Copa do Brasil…). |
| **Competiciones continentales** | Champions, Europa League, Libertadores, Sudamericana, Concacaf Champions Cup, AFC Champions League Elite, CAF Champions League, OFC Champions League y Mundial de Clubes. |
| **Selecciones** | Mundial 2026 (con las 48 clasificadas), Mundial ampliado, Eurocopa, Copa América, Copa Oro, Copa Asiática y Copa Africana. |
| **Crear torneo** | Tú eliges los equipos y el tamaño de grupo; el formato se calcula solo. |
| **Editar equipos y selecciones** | Nombre, siglas, colores, escudo, plantilla completa y valoración global. |
| **Plantillas** | Consulta cualquier equipo y busca jugadores en todo el mundo. |

---

## Modo carrera

Eliges un club y el mundo entero se pone en marcha a la vez. **Un calendario de 64
semanas por temporada**: cada vez que avanzas se juegan las jornadas de las 52 ligas, las
rondas de copa nacional que tocan y las fases de las ocho competiciones continentales.

Avanzas semana a semana, de cinco en cinco, **hasta tu próximo partido**, o de golpe hasta
el final.

### El tablero

Todo entra en la pantalla, sin scroll de página. Cuatro pestañas:

**Club** — el tablero. A la izquierda la **clasificación recortada**: tu equipo con los dos
de arriba y los dos de abajo. En el centro el **próximo partido** y a la derecha el
**calendario completo** de la temporada: liga, copa y continentales mezcladas y ordenadas,
con el resultado de las jugadas y la próxima resaltada. Debajo, tus últimos resultados y
cómo vas en cada copa.

**Antes de cada partido eliges**: *Ver el partido* lo simula con marcador en vivo,
narración minuto a minuto, alineaciones y estadísticas; *Simulación rápida* lo resuelve al
instante y te muestra el marcador. En ambos casos, al terminar aparecen los resultados de
esa jornada **solo de tu competición**. El resto del mundo se simula en segundo plano.

**Alineación** — un campo de juego con tus once colocados según la formación. Cambias entre
4-3-3, 4-2-3-1, 4-4-2, 4-1-2-1-2, 3-5-2, 5-3-2 y 3-4-3, o pulsas *Once automático*. Tocas
un jugador del campo y luego otro (o uno del banquillo) para intercambiarlos. Los que juegan
fuera de su puesto salen en naranja con un aviso, y pierden valoración en el partido según
lo lejos que sea el puesto: un central de lateral apenas lo nota, un delantero de portero sí.

**Resultados** — eliges **continente**, luego **país o torneo continental**, y después qué
ver. De un país: cada una de sus divisiones o su copa nacional. De un torneo continental:
grupos, eliminatorias o goleadores.

**Palmarés** — lo ganado en cada temporada cerrada.

### Las llaves de copa

Las copas y las eliminatorias continentales se ven como un **cuadro de verdad**: una columna
por ronda, líneas que unen cada cruce con el siguiente, el que pasa en verde, los penales o
la prórroga anotados debajo, tu equipo resaltado y el campeón en dorado al final.

### Los colores de la tabla

Cada clasificación marca las plazas **según los cupos reales de ese país**: verde para la
competición de primer nivel, azul para su fase previa y naranja para la de segundo nivel,
más el rojo del descenso y el verde del ascenso en las segundas divisiones. Debajo de cada
tabla hay una leyenda con los nombres.

Y si el **campeón de copa** queda fuera de esas posiciones, su fila se marca igualmente con
el color que le corresponde y un contorno dorado. Ejemplo real de una simulación: el West
Ham ganó la FA Cup terminando 15º en la Premier, y su fila aparece en naranja de Europa
League con el borde dorado.

### Cambiar de equipo

El botón **Cambiar de equipo** aparece al terminar la temporada, junto a *Cerrar temporada*.
Eliges país, liga y club, y sigues la carrera con él; el mundo continúa donde estaba.

### La temporada no termina

Al cerrar una temporada se aplican **ascensos y descensos** (3 en Inglaterra, España e
Italia; 2 en Alemania, Francia y Argentina; 4 en Brasil), se reparten los cupos
continentales del año siguiente con las clasificaciones reales, los jugadores **cumplen un
año** (los jóvenes mejoran, los veteranos bajan, los muy mayores se retiran y debutan
canteranos) y empieza la temporada siguiente. El *Palmarés* guarda todo lo ganado.

### Cupos continentales

El campeón de copa entra en la competición de primer nivel de su confederación, **salvo en
UEFA, donde va a la Europa League**. Si ese equipo ya se había clasificado por posición en
liga, **su plaza de copa pasa al siguiente de la tabla** — y la app te lo avisa en el
palmarés.

| Competición | Formato | Cupos |
|---|---|---|
| **Copa Libertadores** | 8 grupos de 4 | 6 Argentina y Brasil · 2 por país del resto · + 4 ganadores de la fase previa |
| *Fase previa* | 4 cruces | los 8 campeones de copa de Chile, Colombia, Ecuador, Paraguay, Uruguay, Venezuela, Perú y Bolivia |
| **Copa Sudamericana** | 8 grupos de 4 | 6 Argentina y Brasil · 2 por país del resto · + los 4 perdedores de la previa |
| **Champions League** | 8 grupos de 4 | 4 ING/ESP/ITA · 3 ALE · 2 FRA/POR/NED · 1 BEL/TUR/RUS · + 8 de la previa |
| *Fase previa* | 8 cruces | 1 de Portugal, Países Bajos, Bélgica, Turquía, Grecia, **Escocia**, Ucrania, Austria, Suiza, Noruega, Dinamarca, Suecia, Polonia, Croacia, Serbia y Hungría |
| **Europa League** | 12 grupos de 4 | 8 perdedores de la previa · 2 por país (1 en Rusia, Croacia, Serbia y Hungría) |
| **Concachampions** | 4 grupos de 4 | 4 México · 4 Estados Unidos · 8 del resto de CONCACAF |
| **AFC Champions League** | 6 grupos de 4 | 3 por liga + 9 del resto de AFC |
| **CAF Champions League** | 4 grupos de 4 | 3 por liga + 7 del resto de CAF |
| **Oceanía** | sin torneo | el campeón de la liga de Oceanía es el campeón continental |

**Cruces entre torneos:** los **terceros** de los grupos de Libertadores juegan un play-off
contra los **segundos** de los grupos de Sudamericana; los ganadores entran en los octavos
de Sudamericana. Los **8 terceros** de los grupos de Champions caen a los **dieciseisavos**
de la Europa League, donde se juntan con los 24 clasificados de sus grupos.

**Formato:** fase de grupos a ida y vuelta, eliminatorias a ida y vuelta **sin regla de gol
de visitante** (si hay empate en el global, penales) y **final a partido único en campo
neutral**.

Los **8 campeones continentales** (contando Sudamericana y Europa League) disputan el
**Mundial de Clubes**, a partido único porque se juega en una sede.

### Sorteos

Los bombos se arman por nivel: los mejores al bombo 1 y así sucesivamente. **Dos equipos
del mismo país nunca comparten grupo**; si la bola que sale coincide con alguien ya
sorteado en ese grupo, pasa al siguiente grupo válido — y antes de confirmar se comprueba
que el resto del bombo todavía se pueda repartir, para no bloquear el sorteo.

Marca **«Sorteos manuales»** al empezar la carrera y el mundo se detendrá en la semana del
sorteo para que saques las bolas una a una, viendo cómo se llenan los grupos y cuántos
grupos se salta cada equipo. Sin marcarlo, se sortea solo.

### Guardar y cargar

La carrera se guarda entera: en qué semana vas, las tablas y goleadores de las 52 ligas,
el cuadro de cada copa, la fase de cada continental, el palmarés de temporadas anteriores,
los ascensos ya aplicados y **las plantillas tal y como han quedado** tras el
envejecimiento y las retiradas.

- **Guardar** deja la partida en el navegador (una ranura). Ocupa alrededor de 1 MB y
  tarda unas décimas de segundo.
- **Descargar archivo** genera un `.json` que puedes conservar o llevarte a otro
  ordenador; se abre con **Abrir archivo de partida**.
- **Autoguardar al cerrar temporada** está activado por defecto.

Al volver a entrar en el Modo carrera, si hay partida guardada verás de qué equipo es y por
qué semana ibas, con el botón **Continuar partida guardada**.

Está comprobado que el ida y vuelta es exacto: tras dos temporadas cerradas, el estado
cargado coincide jugador a jugador y punto a punto con el guardado. No se puede guardar con
un sorteo manual a medias: termínalo primero.

---

## Ligas incluidas

**Europa (25)** — Premier League y Championship · LaLiga y LaLiga Hypermotion ·
Serie A y Serie B · Bundesliga y 2. Bundesliga · Ligue 1 y Ligue 2 · Liga Portugal ·
Eredivisie · **Scottish Premiership** · Süper Lig · Pro League belga · Super League suiza ·
Bundesliga austríaca · Eliteserien · Superligaen · Allsvenskan · Ekstraklasa · HNL croata ·
Superliga serbia · NB I húngara · Super League griega · Premier League ucraniana ·
Premier Liga rusa.

**Sudamérica (12)** — Liga Profesional Argentina y Primera Nacional · Brasileirão Série A
y Série B · Primera uruguaya · Liga BetPlay · Primera chilena · LigaPro ecuatoriana ·
Liga 1 peruana · División Profesional paraguaya · División Profesional boliviana · Liga FUTVE.

**Norteamérica (3)** — Liga MX · MLS · Resto de CONCACAF.

**Asia (6)** — Saudi Pro League · J1 League · K League 1 · A-League · Chinese Super League ·
Resto de AFC.

**África (4)** — Botola Pro · Egyptian Premier League · Betway Premiership · Resto de CAF.

**Oceanía (1)** — Resto de OFC.

Los grupos **"Resto de…"** reúnen los mejores clubes de los países sin liga propia en la
app: Costa Rica, Honduras, Guatemala, Panamá y El Salvador en CONCACAF; Emiratos, Irán,
Uzbekistán, Catar, Tailandia, Irak y Malasia en AFC; Túnez, Argelia, RD Congo, Ghana,
Nigeria, Camerún, Angola y Tanzania en CAF; y Nueva Zelanda más Tahití, Nueva Caledonia
e Islas Salomón en OFC.

---

## Selecciones

Las **48 del Mundial 2026** más 18 ausentes de peso: Bolivia, Chile, Venezuela, Perú,
Italia, Dinamarca, Polonia, Ucrania, Gales, Irlanda, Eslovaquia, Camerún, Nigeria,
Costa Rica, Honduras, Jamaica, Emiratos Árabes Unidos y China.

> **Aviso sobre las 48.** Las plazas europeas de repesca son una inferencia mía: puse
> **Turquía, Chequia, Bosnia y Kosovo**. Si alguna no corresponde, cambia el campo
> `wc: true`/`false` de esa selección en `js/data/nations-*.js` y el Mundial 2026 se
> ajusta solo.

---

## Crear torneo

Eliges participantes y tamaño de grupo, y la app deduce el cuadro. Ejemplos reales
que produce:

| Equipos | Grupos | Formato que calcula |
|---|---|---|
| 24 | de 4 | 6 grupos, pasan 2 por grupo **+ los 4 mejores terceros** → cuadro de 16 |
| 48 | de 4 | 12 grupos, pasan 2 por grupo **+ los 8 mejores terceros** → cuadro de 32 |
| 32 | de 4 | 8 grupos, pasan 2 por grupo → cuadro de 16 |
| 20 | de 4 | 5 grupos, pasa 1 por grupo **+ los 3 mejores segundos** → cuadro de 8 |
| 30 | de 5 | 6 grupos, pasan 2 **+ los 4 mejores terceros** → cuadro de 16 |

Si la combinación no cuadra (25 equipos en grupos de 4) te lo dice y bloquea el botón.
El sorteo del cuadro reparte por bombos según nivel y **evita cruces entre equipos del
mismo grupo**. Puedes activar grupos a ida y vuelta, eliminatorias a doble partido, o
quitar los grupos para una eliminación directa pura.

---

## Escudos

No puedo incluir los logos oficiales de 891 clubes: son imágenes con derechos. Lo que hay:

- **Clubes:** escudos vectoriales generados con los colores reales de cada equipo
  (siluetas de escudo, franjas, bandas, aros, cuartos, cruces…).
- **Selecciones:** las **banderas reales dibujadas en SVG**, una por una. No uso emoji
  porque Windows no los dibuja.

### Escudos reales

**577 de los 903 clubes llevan su escudo real**, emparejado automaticamente con los PNG de
la carpeta `logos/`. El mapa esta en `js/data/_crestmap.js` y se consulta por equipo, asi
que sobrevive a ascensos, descensos y cambios de temporada.

Los 326 restantes usan el escudo generado. Les faltan sobre todo a Arabia Saudi, los paises
nordicos, Polonia, Croacia, Serbia, Hungria, Austria, Suiza, Corea, Australia, Sudafrica,
Marruecos, Egipto y los grupos "Resto de...".

Para rellenar huecos tienes tres vias, explicadas en `assets/crests/LEEME.txt`: dejar el PNG
en la carpeta de su liga dentro de `logos/` (y pedirme que regenere el mapa), dejarlo en
`assets/crests/` con el nombre normalizado y activar la casilla del editor, o escribir la
ruta a mano en el campo *Escudo real* de un club concreto.

En `assets/crests/LISTADO.csv` tienes las 903 filas con liga, equipo, si usa escudo real o
generado, y la ruta del archivo.

Las **selecciones** usan su bandera dibujada en SVG, una por una, porque Windows no dibuja
los emoji de bandera.

---

## Sobre la vigencia y la precisión de los datos

Las plantillas son las del **cierre de la temporada 2025/26** (Europa, Arabia, Asia,
África) y la **temporada 2026 en curso** (Argentina, Brasil, México, MLS). **No incluyen
el mercado posterior a mayo de 2026.**

La precisión no es uniforme, y prefiero decírtelo claro:

- **Alta** — las cinco grandes europeas, las 66 selecciones, y los clubes grandes de
  Portugal, Países Bajos, Turquía, Grecia, Rusia, Ucrania, Bélgica, Escocia, Argentina,
  Brasil, México, MLS, Arabia Saudí, Japón y Corea.
- **Parcial** — el resto. En esas ligas guardo **sólo los jugadores que conozco de
  verdad** (entre 1 y 8 por club) y el cupo restante lo completa la app con nombres
  reales del país, marcados con la etiqueta **genérico** en la vista de plantillas.

Esto es deliberado: prefiero un hueco honesto y editable a inventarme fichajes. Los
nombres de los clubes, sus colores y su nivel relativo sí son reales, que es lo que
determina la simulación. Los genéricos nunca superan al mejor jugador real del equipo.

Las valoraciones (1–99) son estimaciones propias para alimentar el motor, no cifras de
ningún videojuego.

---

## El editor

Cambia lo que quieras: nombre, siglas, colores, ruta del escudo, y la plantilla entera
(nombre, posición, valoración, edad, orden de titulares con ↑ ↓, añadir y borrar
jugadores). El deslizador de **valoración global** reescala toda la plantilla de golpe.

También puedes **crear equipos nuevos** y **borrar** los que no quieras. Todo se guarda
en tu navegador; con *Exportar cambios* obtienes un texto que puedes guardar o llevarte
a otro ordenador con *Importar*.

---

## Cómo funciona el motor

`js/engine.js` calcula ataque, medio y defensa a partir de los once en campo (el portero
pesa un 30 % de la defensa), reparte la posesión según el mediocampo y resuelve minuto a
minuto si hay ocasión, si el remate va a puerta y si acaba en gol. Contempla ventaja de
local, cansancio desde el minuto 55, expulsiones, hasta cinco cambios, lesiones y el
empuje del equipo que va perdiendo en el tramo final.

Calibrado contra medias reales: **2,8–3,2 goles por partido**, ~25 remates, ~3,3
amarillas y 0,25 rojas, 24 % de empates, 44 % de victorias locales y un máximo goleador
de liga en torno a los 30 tantos.

---

## Estructura

```
index.html               interfaz y menú
css/styles.css           estilos
js/engine.js             motor de partido
js/competitions.js       ligas, copas, grupos, cuadros y temporadas
js/crest.js              escudos generados
js/flags.js              banderas SVG de las selecciones
js/fill.js               completado de plantillas y bancos de nombres por país
js/store.js              editor y guardado en el navegador
js/app.js                interfaz
js/world.js              el mundo: calendario, temporadas, ascensos y cupos
js/world-ui.js           interfaz del modo carrera (tablero, campo, llaves)
js/matchview.js          visor de partido compartido
css/career.css           estilos del modo carrera
js/draw.js               bombos y sorteos con restricción de país
js/save.js               guardar y cargar la carrera
js/data/_competitions.js países, copas reales y competiciones continentales
js/data/_berths.js       cupos continentales, formatos y ascensos/descensos
js/data/*.js             las 52 ligas y las 66 selecciones
assets/crests/           (opcional) tus escudos reales en PNG
```

Sin módulos ES ni dependencias externas: se abre directamente desde el disco.

### Editar datos a mano

Formato de un equipo con plantilla completa:

```js
{ n: 'Arsenal', s: 'ARS', c1: '#EF0107', c2: '#FFFFFF', p: [
  ['David Raya', 'GK', 85, 30],      // nombre, posición, valoración, edad
  ...                                 // los 11 primeros son los titulares
]}
```

Formato de un equipo con relleno automático (ligas de menor difusión):

```js
{ n: 'Wrexham', s: 'WRE', c1: '#E30613', c2: '#FFFFFF', str: 71, p: [
  ['Conor Coady', 'CB', 75, 33],      // sólo los que conozco
  ['Kieffer Moore', 'ST', 73, 33]
]}
```

`str` es el nivel medio del equipo; la app completa hasta 17 jugadores usando el banco
de nombres de `pool` (definido en la liga). Posiciones válidas: `GK`, `RB`, `CB`, `LB`,
`RWB`, `LWB`, `DM`, `CM`, `AM`, `RW`, `LW`, `ST`, `CF`.

Para añadir una liga nueva, copia un archivo de `js/data/`, cambia el `id`, añade su
`<script>` en `index.html` y declara el país en `js/data/_competitions.js`.
