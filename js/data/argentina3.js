/* =========================================================================
   PRIMERA B METROPOLITANA — tercera división argentina
   Dos ascensos a la Primera Nacional. No hay descensos porque no está
   cargada la categoría siguiente.
   Las plantillas las genera el simulador (quedan marcadas «genérico»).
   ========================================================================= */
window.LEAGUES = window.LEAGUES || {};
window.LEAGUES.argentina3 = {
  id: 'argentina3', name: 'Primera B Metropolitana', country: 'Argentina', tier: 3,
  ucl: 0, rel: 3, single: true, pool: 'latam', squadSize: 17, teams: [
    { n: 'Argentino de Merlo', s: 'AME', c1: '#00A94F', c2: '#FFFFFF', str: 53, p: [
       ['Pedro Fernández', 'GK', 54, 39], ['Manuel Costa', 'RB', 52, 25], ['Darío Ferreyra', 'CB', 53, 29],
       ['Iván Gauna', 'CB', 54, 28], ['Alan Jiménez', 'LB', 54, 23], ['Facundo Aguerre', 'DM', 55, 31],
       ['Lautaro Arellano', 'CM', 53, 29], ['Sebastián Benega', 'AM', 53, 27], ['Rodrigo Cao', 'RW', 52, 25],
       ['Federico González', 'ST', 52, 25], ['Elías Lieve', 'LW', 53, 26], ['Guido Ferrara', 'GK', 48, 26],
       ['Lautaro Ibarra', 'CB', 48, 23], ['Arturo Ordano', 'LB', 52, 32], ['Agustín Bitancurt', 'CM', 47, 19],
       ['Hernán Apolo Rapp', 'RW', 50, 24], ['Santiago Sosa', 'ST', 71, 28], ['Santiago Pérez', 'CB', 51, 24],
       ['Franco Lopresti', 'GK', 45, 25], ['Agustín Polito', 'DM', 45, 25], ['Juan Ignacio Rugeri', 'CB', 45, 22],
       ['Ciro Sineiro', 'CB', 47, 23]
     ] },
    { n: 'Argentino de Quilmes', s: 'AQU', c1: '#E30613', c2: '#FFFFFF', str: 56, p: [
       ['Alejo Tello', 'GK', 54, 27], ['Facundo Lando', 'RB', 56, 27], ['Gerónimo Velozo', 'CB', 56, 23],
       ['Mauro Gómez', 'CB', 56, 25], ['Gonzalo Pedrosa', 'LB', 57, 32], ['Fabricio Filliol', 'DM', 55, 24],
       ['Alan Martín', 'CM', 58, 22], ['Franco Centurión', 'AM', 55, 23], ['Bruno Miño', 'RW', 57, 23],
       ['Facundo Stable', 'ST', 56, 31], ['Joaquín Molina', 'LW', 57, 23], ['Manuel Peralta Salinas', 'GK', 53, 38],
       ['Gerardo Alegre Rojas', 'CB', 54, 27], ['Lucas Cipresso', 'LB', 53, 23], ['Alan Ortíz', 'CM', 53, 27],
       ['Elías Torancio', 'RW', 50, 30], ['Máximo Guzmán', 'ST', 52, 24], ['Fernando Cosciuc', 'CB', 53, 28],
       ['Lucio Nadalín', 'CB', 50, 31], ['Alan Abregú', 'CB', 49, 26], ['Facundo Valdez', 'CB', 48, 23],
       ['Cristian Maidana', 'CM', 49, 39]
     ] },
    { n: 'Deportivo Armenio', s: 'ARM', c1: '#0057B8', c2: '#E30613', str: 55, p: [
       ['Alex Matias Belén Castillo', 'GK', 53, 25], ['Carlos Semeao', 'RB', 57, 33], ['Germán Aguirre Salinas', 'CB', 56, 28],
       ['Gonzalo Errecalde', 'CB', 57, 26], ['Nicolás Jesús Giménez', 'LB', 54, 29], ['Franco Almanza', 'DM', 54, 26],
       ['Carlos Battigelli', 'CM', 54, 30], ['Kevin Flores Pereyra', 'AM', 54, 25], ['Jonathan Nahuel Herrera', 'RW', 56, 26],
       ['Tomás Jerez Sayago', 'ST', 56, 26], ['Diego Nakache', 'LW', 56, 30], ['Iván López', 'GK', 52, 30],
       ['Fabricio Gabriel López', 'CB', 58, 24], ['Cristian Ordoñez', 'LB', 52, 31], ['Nicolás Giovagnoli', 'CM', 52, 28],
       ['Luciano Villalva', 'RW', 51, 26], ['Luciano Lazarte', 'ST', 49, 26], ['Ian Pérez', 'CB', 50, 27],
       ['Lautaro Montani', 'CM', 49, 27], ['Luís Olmedo', 'CM', 48, 26], ['Alejo Roa', 'CM', 46, 27],
       ['Nicolás Sánchez González', 'CM', 48, 29]
     ] },
    { n: 'Brown de Adrogué', s: 'BRA', c1: '#8B1F2F', c2: '#FFFFFF', str: 55, p: [
       ['Emanuel Duba', 'GK', 54, 25], ['Carlos Aguirre', 'RB', 56, 28], ['Jonatan Bogado', 'CB', 53, 25],
       ['Máximo Gaeta', 'CB', 54, 20], ['Braian Guerrero Ruiz', 'LB', 53, 26], ['Alexis Castaño', 'DM', 55, 27],
       ['Fernando Enrique', 'CM', 57, 41], ['Agustín González', 'AM', 60, 25], ['Lucas Campana', 'RW', 53, 33],
       ['Jonathan Cañete', 'ST', 53, 30], ['Sebastián Martínez', 'LW', 55, 21], ['Sebastián Giovini', 'GK', 51, 36],
       ['Leandro Lugarzo', 'CB', 51, 36], ['Agustín Minnicelli', 'LB', 48, 26], ['Luciano González', 'CM', 53, 23],
       ['Nicolás Meaurio', 'RW', 50, 23], ['Juan Mendoza', 'ST', 52, 27], ['Agustín Palomeque', 'CB', 51, 26],
       ['Franco Melo', 'GK', 46, 26], ['Matías Wysocki', 'GK', 48, 32], ['Mariano Pieres', 'CB', 47, 26],
       ['Patricio Romero', 'DM', 46, 24]
     ] },
    { n: 'CADU', s: 'CAD', c1: '#FFE500', c2: '#000000', str: 54, p: [
       ['Mauricio Aquino', 'GK', 53, 33], ['Juan Cruz Argüello', 'RB', 55, 26], ['Nahuel Basualdo', 'CB', 52, 35],
       ['Diego Espíndola', 'CB', 56, 21], ['Tomás Ferreyra', 'LB', 53, 22], ['Manuel Acutain', 'DM', 53, 22],
       ['Martín Caballo', 'CM', 55, 27], ['Thomas Carosio', 'AM', 53, 23], ['Diego Aguirre', 'RW', 53, 33],
       ['Bautista Carboni', 'ST', 54, 22], ['Lautaro Ceratto', 'LW', 54, 34], ['Tomás Barbero Silvestre', 'GK', 50, 24],
       ['Facundo Laumann', 'CB', 49, 36], ['Federico Marchesini', 'LB', 48, 26], ['Daniel Carrasco', 'CM', 53, 33],
       ['Martín Giménez', 'RW', 48, 35], ['Lucas Pedraza', 'ST', 53, 22], ['Luis Olivera', 'CB', 50, 28],
       ['Eric González', 'GK', 48, 22], ['Alejandro Sánchez', 'GK', 73, 40], ['Benjamín Ortiz', 'DM', 47, 23],
       ['Agustín Osinaga', 'CB', 48, 28]
     ] },
    { n: 'Comunicaciones', s: 'COM', c1: '#FFFFFF', c2: '#000000', str: 55, p: [
       ['Estéfano Francesconi', 'GK', 53, 28], ['Ivo Cabrera', 'RB', 54, 25], ['Ariel Coronel', 'CB', 53, 39],
       ['Martín López', 'CB', 56, 26], ['Lucas Míguez', 'LB', 53, 28], ['Claudio Cevasco', 'DM', 52, 38],
       ['Federico Nicolaievsky', 'CM', 56, 25], ['Gonzalo Groba', 'AM', 57, 30], ['Luciano Elisii', 'RW', 53, 23],
       ['Edilson Giménez', 'ST', 56, 22], ['Jeremías Heidenreich', 'LW', 57, 22], ['Juan Pablo Lungarzo', 'GK', 48, 29],
       ['Agustín Minnicelli', 'CB', 52, 26], ['Leonel Müller', 'LB', 49, 30], ['Gonzalo Jaque', 'CM', 49, 30],
       ['Sebastián Montero', 'RW', 52, 30], ['Sergio Sosa', 'ST', 49, 32], ['Juan Cruz Severini', 'CB', 49, 23],
       ['Germán Yacaruso', 'GK', 46, 33], ['Lucas Vallejos', 'DM', 47, 26], ['Diego Zalazar', 'CB', 49, 31],
       ['Federico Pérez', 'CB', 49, 22]
     ] },
    { n: 'Deportivo Merlo', s: 'DME', c1: '#FFE500', c2: '#00A94F', str: 56, p: [
       ['Pedro Fernández', 'GK', 55, 39], ['Manuel Costa', 'RB', 58, 25], ['Darío Ferreyra', 'CB', 57, 29],
       ['Iván Gauna', 'CB', 55, 28], ['Alan Jiménez', 'LB', 58, 23], ['Facundo Aguerre', 'DM', 58, 31],
       ['Lautaro Arellano', 'CM', 54, 29], ['Sebastián Benega', 'AM', 58, 27], ['Rodrigo Cao', 'RW', 57, 25],
       ['Federico González', 'ST', 57, 25], ['Elías Lieve', 'LW', 54, 26], ['Guido Ferrara', 'GK', 53, 26],
       ['Lautaro Ibarra', 'CB', 53, 23], ['Arturo Ordano', 'LB', 52, 32], ['Agustín Bitancurt', 'CM', 51, 19],
       ['Hernán Apolo Rapp', 'RW', 52, 24], ['Santiago Sosa', 'ST', 75, 28], ['Santiago Pérez', 'CB', 50, 24],
       ['Franco Lopresti', 'GK', 52, 25], ['Agustín Polito', 'CB', 51, 25], ['Juan Ignacio Rugeri', 'CB', 50, 22],
       ['Ciro Sineiro', 'DM', 49, 23]
     ] },
    { n: 'Sportivo Dock Sud', s: 'DOC', c1: '#0057B8', c2: '#FFFFFF', str: 54, p: [
       ['Gonzalo Costa', 'GK', 52, 25], ['Enzo Tamborelli', 'RB', 55, 29], ['Santiago Formichelli', 'CB', 52, 28],
       ['Héctor Villalba', 'CB', 62, 30], ['Nicolás Morro', 'LB', 54, 29], ['Agustín Ávalos', 'DM', 51, 25],
       ['Juan Roth', 'CM', 51, 24], ['Rodrigo Recoba', 'AM', 53, 22], ['Sebastián Vivas', 'RW', 54, 30],
       ['Diego Ftacla', 'ST', 55, 34], ['Matías Blanco', 'LW', 56, 32], ['Juan Figueroa', 'GK', 51, 34],
       ['Tomás Prieto', 'CB', 52, 27], ['Giuliano Soria', 'LB', 48, 18], ['Lucas Romero', 'CM', 48, 18],
       ['Nazareno Hvala', 'RW', 47, 31], ['Agustín Lezcano', 'ST', 51, 25], ['Isaías González', 'CB', 49, 23],
       ['Matías Alberti', 'GK', 46, 26], ['Lucas Ábalos', 'GK', 48, 24], ['Nahuel Troxler', 'DM', 46, 29],
       ['Federico Ulayar', 'CB', 46, 26]
     ] },
    { n: 'Excursionistas', s: 'EXC', c1: '#FFFFFF', c2: '#00A94F', str: 58, p: [
       ['Nahuel Cajal', 'GK', 60, 29], ['Francisco Abre', 'RB', 59, 29], ['Rodrigo Arciero', 'CB', 58, 33],
       ['Luciano Balbi', 'CB', 59, 37], ['Matías Cahais', 'LB', 57, 39], ['Nicolás Damiolini', 'DM', 57, 23],
       ['Matías David', 'CM', 57, 26], ['Facundo Ferraro Costa', 'AM', 57, 25], ['Julián Alveira', 'RW', 57, 23],
       ['Mateo Cardozo', 'ST', 56, 23], ['Alexis González', 'LW', 58, 22], ['Matías Escobar Marín', 'GK', 53, 23],
       ['Horacio Igarzábal', 'CB', 55, 26], ['Ignacio Maizares', 'LB', 56, 24], ['Tobías García', 'CM', 53, 22],
       ['Sergio González', 'RW', 67, 24], ['Matías Martínez', 'ST', 55, 30], ['Nicolás Mosca', 'CB', 57, 23],
       ['Francisco Vergara', 'GK', 54, 25], ['Lucas Mulazzi', 'CB', 54, 27], ['Thiago Schiavulli', 'CB', 51, 23],
       ['Miguel López', 'CM', 51, 38]
     ] },
    { n: 'Club Atlético Fénix', s: 'FEN', c1: '#5B2C83', c2: '#FFFFFF', str: 52, p: [
       ['Gianfranco Cao', 'GK', 54, 31], ['Cristian David Solís', 'RB', 50, 43], ['Emanuel Agustín Castañeda', 'CB', 51, 36],
       ['Brian Gastón Kreiman', 'CB', 52, 34], ['Marcelo Nicolás Manuel Martínez', 'LB', 52, 47], ['Mateo Baeza', 'DM', 53, 43],
       ['Cristian Camilo Castillo Tabares', 'CM', 52, 32], ["Gonzalo Nicolás Dell'Aquila", 'AM', 51, 44], ['Fernando Pasquale', 'RW', 53, 29],
       ['Diego Roman Navarro', 'ST', 55, 29], ['Claudio Germán Acosta', 'LW', 52, 34], ['Nahuel Galardi', 'GK', 50, 33],
       ['Enzo Ricardo Pare', 'CB', 51, 32], ['Nahuel Ezequiel Perez', 'LB', 49, 32], ['Juan Gabriel Frías', 'CM', 51, 32],
       ['Guillermo Mackay', 'RW', 48, 33], ['Nicolás Martín Molina', 'ST', 51, 27], ['Mateo Uriel Roumieux', 'CB', 48, 30],
       ['Claudio Alberto Verino', 'CB', 46, 34], ['Brian Eduardo Hernández', 'CM', 46, 42], ['Mariano Alejandro Muñiz', 'CM', 46, 36],
       ['Roque Ezequiel Ovejero', 'CM', 46, 33]
     ] },
    { n: 'Flandria', s: 'FLA', c1: '#E30613', c2: '#FFFFFF', str: 56, p: [
       ['Federico Díaz', 'GK', 58, 34], ['Juan Manuel Cabrera', 'RB', 58, 26], ['Andrés Camacho', 'CB', 56, 34],
       ['Franco Canever', 'CB', 53, 37], ['Dante Cardozo', 'LB', 55, 25], ['Iván Becker', 'DM', 55, 35],
       ['Mauro Bellone', 'CM', 56, 36], ['Franco Bustamante', 'AM', 56, 27], ['Esteban Ciaccheri', 'RW', 53, 35],
       ['Cristian Cuenca', 'ST', 56, 25], ['Ignacio Díaz', 'LW', 54, 19], ['Tomás Figueroa', 'GK', 51, 31],
       ['Facundo Gómez', 'CB', 52, 38], ['Marcos Miers', 'LB', 52, 36], ['Alejandro González', 'CM', 51, 39],
       ['Joan Esteche', 'RW', 50, 22], ['Juan Cruz Franzoni', 'ST', 50, 27], ['Eugenio Raggio', 'CB', 53, 25],
       ['Diego Ramos', 'GK', 50, 23], ['Emilio Suárez', 'CB', 50, 22], ['Bautista González', 'CM', 48, 22],
       ['Mariano Jaureguiberry', 'CM', 49, 22]
     ] },
    { n: 'Deportivo Laferrere', s: 'LAF', c1: '#00A94F', c2: '#FFFFFF', str: 53, p: [
       ['Josué Ayala', 'GK', 53, 38], ['Gabriel Díaz', 'RB', 52, 29], ['Diego Sequeira', 'CB', 50, 39],
       ['Alejandro Gómez', 'CB', 53, 32], ['Sebastián Uzzante', 'LB', 51, 26], ['Pablo Monje', 'DM', 58, 29],
       ['Damian Galván', 'CM', 55, 30], ['Nicolás Vivas', 'AM', 53, 24], ['Francisco Navarro', 'RW', 53, 27],
       ['Alan Espeche', 'ST', 53, 27], ['Joan Gaona', 'LW', 51, 35], ['Juan Rois', 'GK', 50, 23],
       ['Hernán Ortiz', 'CB', 50, 35], ['Agustín Luongo', 'LB', 50, 24], ['Rodrigo Gutiérrez', 'CM', 48, 26],
       ['Enzo Castro', 'RW', 51, 25], ['Agustín Faillace', 'ST', 50, 26], ['Jeronimo Cabral', 'CB', 47, 33],
       ['Carlos Morel', 'GK', 47, 39], ['Agustín Vallejos', 'CB', 46, 27], ['Franco Maraia', 'DM', 45, 34],
       ['Juan Azil', 'CB', 47, 38]
     ] },
    { n: 'Liniers', s: 'LIN', c1: '#0057B8', c2: '#FFE500', str: 54, p: [
       ['Lucas D. Partal', 'GK', 52, 36], ['Mauro Martínez', 'RB', 52, 38], ['Enzo Guardia', 'CB', 54, 30],
       ['Thiago Monzón', 'CB', 56, 27], ['Santiago Formichelli', 'LB', 55, 28], ['Enrique Blanco', 'DM', 53, 29],
       ['Marcelo Araujo', 'CM', 54, 35], ['Ignacio Sallaberry', 'AM', 55, 32], ['Renzo Rajoy', 'RW', 52, 31],
       ['Lautaro Cerato', 'ST', 53, 26], ['Enrique R. Narvay', 'LW', 57, 36], ['Julio Arias', 'GK', 50, 38],
       ['Federico Potarski', 'CB', 49, 33], ['Sergio Escudero', 'LB', 49, 43], ['Lucas Miguens', 'CM', 48, 38],
       ['Tomas Onorio', 'RW', 50, 33], ['Javier Cermesoni', 'ST', 52, 38], ['Rodrigo Di Motta', 'CB', 48, 28],
       ['Bruno Falcioni', 'GK', 48, 27], ['Valentino Torres', 'GK', 47, 24], ['Manuel Cutrin', 'CB', 49, 26],
       ['Boris Herrera', 'DM', 46, 34]
     ] },
    { n: 'Real Pilar', s: 'RPI', c1: '#FFFFFF', c2: '#0057B8', str: 56, p: [
       ['Matias Cano', 'GK', 55, 40], ['Geronimo Govi', 'RB', 58, 23], ['Gaston David', 'CB', 54, 32],
       ['Juan José Rodríguez Silva', 'CB', 56, 30], ['Facundo Márquez', 'LB', 55, 20], ['Nahuel Rios', 'DM', 58, 29],
       ['Nahuel Pansardi', 'CM', 59, 37], ['Mathías Crocco', 'AM', 55, 34], ['Dylan Vergara', 'RW', 54, 26],
       ['Kevin Pavia', 'ST', 55, 23], ['Alexis Dulon', 'LW', 56, 23], ['Alexis Romano', 'GK', 51, 28],
       ['Darío Sebastián Leguiza', 'CB', 54, 33], ['Luis Monge', 'LB', 53, 34], ['Martin Gómez', 'CM', 52, 20],
       ['Kevin González', 'RW', 55, 31], ['Ramiro Estenoz', 'ST', 51, 23], ['Enzo Franco', 'CB', 52, 22],
       ['Santiago Sánchez', 'GK', 49, 28], ['Ariel Otermín', 'CB', 49, 41], ['Ariel Barreiro', 'DM', 48, 25],
       ['Gastón Díaz', 'CB', 52, 38]
     ] },
    { n: 'Sacachispas', s: 'SAC', c1: '#F58220', c2: '#000000', str: 55, p: [
       ['Neyder Aragón', 'GK', 55, 28], ['Elías Barraza', 'RB', 55, 28], ['Alan Buonofiglio', 'CB', 58, 30],
       ['Ezequiel Bustamante', 'CB', 58, 36], ['Manuel Molina', 'LB', 54, 29], ['Santino Aguilera', 'DM', 53, 24],
       ['Alexander Corro', 'CM', 53, 38], ['Kevin Denis', 'AM', 57, 26], ['Rosendo Barni', 'RW', 57, 25],
       ['Denis Cabañas', 'ST', 54, 25], ['Rodrigo Díaz', 'LW', 54, 26], ['Darío Barbera', 'GK', 50, 26],
       ['Leonel Müller', 'CB', 51, 30], ['José Luis Geneiro Núñez', 'LB', 49, 26], ['Matías Forlano', 'CM', 52, 25],
       ['Santiago García', 'RW', 52, 24], ['Víctor Gómez', 'ST', 73, 40], ['Gastón Pinedo', 'CB', 51, 28],
       ['Matías Wysocki', 'GK', 49, 32], ['Santiago Prim', 'CM', 49, 36], ['Cristian Sánchez Prette', 'CM', 49, 41],
       ['Andrés Molina', 'ST', 48, 31]
     ] },
    { n: 'San Martín de Burzaco', s: 'SMB', c1: '#E30613', c2: '#000000', str: 55, p: [
       ['Juan Figueroa', 'GK', 56, 34], ['Matías Escudero', 'RB', 55, 28], ['Juan Cruz Huichulef', 'CB', 57, 31],
       ['Richard Lazarev', 'CB', 57, 25], ['Braian Molina', 'LB', 57, 31], ['Diego Auzqui', 'DM', 53, 37],
       ['Claudio Azaldegui', 'CM', 57, 35], ['Franco Benítez', 'AM', 53, 35], ['Leonardo Ayala', 'RW', 56, 21],
       ['Facundo Brites', 'ST', 55, 22], ['Franco Camejo', 'LW', 54, 23], ['Nicolás Marchesi', 'GK', 51, 27],
       ['Tobías Mora', 'CB', 52, 22], ['Matías Saibene', 'LB', 52, 21], ['Kevin Denis', 'CM', 53, 26],
       ['Joaquín Camejo', 'RW', 49, 23], ['Braian Chávez', 'ST', 50, 35], ['Ariel Siliman', 'CB', 54, 31],
       ['Gonzalo Rehak', 'GK', 48, 32], ['Lucas Rodríguez', 'GK', 67, 22], ['Lautaro Suárez Costa', 'DM', 50, 35],
       ['Juan Pablo Tobón', 'CB', 50, 26]
     ] },
    { n: 'Sportivo Italiano', s: 'SIT', c1: '#0057B8', c2: '#FFFFFF', str: 54, p: [
       ['Sebastián Ezequiel Anchoverri', 'GK', 55, 38], ['Claudio Bifiguer', 'RB', 54, 29], ['Juan Cruz De Cuadro', 'CB', 53, 28],
       ['Hugo Ezequiel Abal', 'CB', 52, 27], ['Franco Daniel Benítez', 'LB', 55, 28], ['Franco Aragón', 'DM', 53, 32],
       ['Alexis Elián Cabrera', 'CM', 54, 26], ['Walter Godoy', 'AM', 55, 37], ['Matías Nicolás Martínez', 'RW', 53, 30],
       ['Alejandro Noriega', 'ST', 55, 42], ['Federico Ortiz López', 'LW', 54, 37], ['Lautaro Renzo Fontan', 'GK', 50, 43],
       ['Maximiliano Ezequiel Denis', 'CB', 51, 34], ['Fernando Pascual', 'LB', 52, 35], ['Facundo Nahuel Pansardi', 'CM', 47, 37],
       ['Valentín Robaldo', 'RW', 49, 26], ['Facundo Matías Esposito', 'ST', 49, 34], ['Nicolás Agustín Pizarro', 'CB', 52, 39],
       ['Hernán Ruquet', 'CB', 47, 36], ['Facundo Rubén Elorga', 'CB', 46, 37], ['Antonio Peralta', 'CM', 45, 25],
       ['Joaquín Rojas', 'CM', 47, 23]
     ] },
    { n: 'UAI Urquiza', s: 'UAI', c1: '#E30613', c2: '#FFFFFF', str: 54, p: [
       ['Leonel Becerra', 'GK', 55, 21], ['Matías Alaniz', 'RB', 56, 27], ['Agustín Cáceres', 'CB', 55, 19],
       ['Joaquín Ferrara', 'CB', 53, 21], ['Quimey Gaitán', 'LB', 54, 24], ['Mauricio Aguirre', 'DM', 55, 26],
       ['Luciano Arcuri', 'CM', 53, 28], ['Lionel Forni', 'AM', 53, 20], ['Maximiliano Brito', 'RW', 53, 35],
       ['Pablo Cáceres', 'ST', 56, 24], ['José Ingratti', 'LW', 56, 26], ['Augusto Bottini', 'GK', 51, 28],
       ['Nahuel Menéndez', 'CB', 52, 32], ['Fransico Natale Oertly', 'LB', 50, 22], ['Elías Galli', 'CM', 50, 23],
       ['Walter Naranjo', 'RW', 52, 25], ['Ramiro Scarcella', 'ST', 50, 24], ['Cristian Ordoñez', 'CB', 51, 31],
       ['Eros Vera', 'GK', 46, 20], ['Ignacio Viain', 'GK', 49, 27], ['Santino Piccinetti', 'DM', 47, 22],
       ['Federico Postel', 'CB', 48, 23]
     ] },
    { n: 'Villa Dálmine', s: 'VDA', c1: '#5B2C83', c2: '#FFFFFF', str: 57, p: [
       ['Nazareno Cruz', 'GK', 55, 23], ['Gastón Bojanich', 'RB', 59, 41], ['Iván Gauna', 'CB', 59, 28],
       ['Lucas Giménez', 'CB', 60, 24], ['Alexis Nievas', 'LB', 58, 25], ['Valentín Albano', 'DM', 56, 23],
       ['Valentín Carlucci', 'CM', 57, 23], ['Diego Castañeda', 'AM', 56, 28], ['Tomás Aballay', 'RW', 56, 23],
       ['Javier Arias', 'ST', 59, 28], ['Agustín Ayala', 'LW', 59, 24], ['Agustín Hernández', 'GK', 55, 23],
       ['Facundo Pardo', 'CB', 54, 28], ['Maximiliano Pollacchi', 'LB', 55, 31], ['Leandro Cirino', 'CM', 54, 29],
       ['Gonzalo Figueroa', 'RW', 54, 27], ['Santino Forlani', 'ST', 54, 21], ['Felipe Rocca', 'CB', 55, 23],
       ['Martín Perafán', 'GK', 53, 39], ['Francisco Salerno', 'GK', 53, 25], ['Marcos Roldán', 'DM', 49, 24],
       ['Juan Ignacio Varela', 'CB', 52, 24]
     ] },
    { n: 'Villa San Carlos', s: 'VSC', c1: '#E30613', c2: '#FFFFFF', str: 55, p: [
       ['Tomás Akimenco', 'GK', 53, 27], ['Braian Acosta', 'RB', 54, 21], ['Nicolás Benavídez', 'CB', 55, 34],
       ['Santiago Díaz', 'CB', 56, 26], ['Lautaro Greco', 'LB', 56, 22], ['Ángel Acosta', 'DM', 55, 27],
       ['Axel Almeida', 'CM', 53, 19], ['Ramiro Álvarez', 'AM', 58, 22], ['Luca Ferro', 'RW', 57, 25],
       ['Alejandro Lugones', 'ST', 54, 32], ['Ezequiel Pérez', 'LW', 55, 25], ['Pablo Bangardino', 'GK', 54, 41],
       ['Alejo Lloyaiy', 'CB', 53, 29], ['Luciano Machín', 'LB', 51, 30], ['Elías Brizuela', 'CM', 51, 23],
       ['Matías Samaniego', 'RW', 50, 29], ['Juan Cruz Villagra', 'ST', 51, 26], ['Mauro Martín', 'CB', 50, 22],
       ['Lisandro González', 'GK', 47, 20], ['Tomás Hornos', 'GK', 50, 22], ['Thiago Mansilla', 'DM', 48, 19],
       ['Martín Morales', 'CB', 51, 22]
     ] },
    { n: 'Arsenal de Sarandí', s: 'ARS', c1: '#7EC0EE', c2: '#E30613', str: 63, p: [
       ['Julián Lobelos', 'GK', 60, 27], ['Nicolás Brienzo', 'RB', 59, 28], ['Rodrigo Delvalle', 'CB', 59, 25],
       ['Iván Cabrera', 'CB', 63, 23], ['Ramiro Cáceres', 'LB', 62, 21], ['Alexis Vega', 'DM', 75, 33],
       ['Joaquín Ochoa', 'CM', 62, 30], ['Luciano Miño', 'AM', 63, 21], ['Uriel La Roza', 'RW', 60, 21],
       ['Luca Duarte', 'ST', 62, 21], ['Dylan Cabral', 'LW', 63, 20], ['Federico Mekbel', 'GK', 56, 22],
       ['Thiago Schiavulli', 'DM', 58, 23], ['Iván Peralta', 'LB', 58, 24], ['Talo Colletta', 'CM', 57, 23],
       ['Matías Sosa', 'RW', 58, 25], ['Julián Ledesma', 'ST', 56, 21]
     ] },
    { n: 'Camioneros', s: 'CAM', c1: '#1B3D8F', c2: '#FFFFFF', str: 60, p: [
       ['Agustín Gómez', 'GK', 60, 32], ['Sebastián Álvarez', 'RB', 61, 34], ['Facundo Ardiles', 'CB', 66, 30],
       ['Jonathan Argañaraz', 'CB', 58, 31], ['José Ignacio Cesarini', 'LB', 59, 34], ['Gonzalo Baglivo', 'DM', 60, 30],
       ['Marcelo Benítez', 'CM', 61, 37], ['Gastón Blanc', 'AM', 60, 21], ['Enzo Chamorro', 'RW', 59, 30],
       ['Darío Gianaschi', 'ST', 59, 39], ['Jorge González', 'LW', 62, 38], ['Cristian Cottone', 'GK', 56, 32],
       ['Matías Lozano', 'CB', 57, 36], ['Juan Navarro', 'CM', 54, 33], ['Alexis Cabrera', 'CM', 54, 39],
       ['Matías González', 'RW', 65, 23], ['Facundo Moyano', 'ST', 58, 28]
     ] }
  ]
};
