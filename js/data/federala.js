/* =========================================================================
   TORNEO FEDERAL A — tercera división argentina (interior)
   Dos ascensos a la Primera Nacional, igual que la B Metropolitana.
   Las plantillas las genera el simulador (quedan marcadas «genérico»).
   ========================================================================= */
window.LEAGUES = window.LEAGUES || {};
window.LEAGUES.federala = {
  id: 'federala', name: 'Torneo Federal A', country: 'Argentina', tier: 3,
  ucl: 0, rel: 5, single: true, pool: 'latam', squadSize: 17, teams: [
    { n: '9 de Julio de Rafaela', s: '9JU', c1: '#E30613', c2: '#FFFFFF', str: 57, p: [
       ['Franco Fragueda', 'GK', 57, 26], ['Sebastián Acuña', 'RB', 56, 27], ['Jerónimo Almada', 'CB', 55, 24],
       ['Tomás Androetto', 'CB', 59, 26], ['Milton Bertholt', 'LB', 55, 20], ['Tomás Abondetto', 'DM', 58, 22],
       ['Maximiliano Aguilar', 'CM', 55, 31], ['Tomás Aversa', 'AM', 57, 21], ['Nicolás Del Sole', 'RW', 58, 28],
       ['Maximiliano Ibañez', 'ST', 56, 26], ['Mariano Meynier', 'LW', 55, 23], ['Joaquín Gómez', 'GK', 55, 26],
       ['Nahuel Bravo', 'CB', 52, 24], ['Facundo Centurión', 'LB', 52, 27], ['Jeremías Bustos', 'CM', 53, 23],
       ['Alan Sosa', 'RW', 63, 29], ['Martín Sterren', 'ST', 54, 24], ['Gastón Galván', 'CB', 54, 22],
       ['Luciano Trejo', 'GK', 50, 25], ['Mirko Zanoni', 'GK', 51, 23], ['Axel Gravenbarter', 'DM', 50, 22],
       ['Facundo Martínez', 'CB', 66, 22]
     ] },
    { n: 'Alvarado', s: 'ALV', c1: '#FFE500', c2: '#000000', str: 61, p: [
       ['Emmanuel Gómez Riga', 'GK', 59, 25], ['Agustín Aleo', 'RB', 57, 28], ['Facundo Ardiles', 'CB', 66, 28],
       ['Brian Blasi', 'CB', 60, 30], ['Tomás Fernández', 'LB', 66, 27], ['Julián Ascacíbar', 'DM', 58, 25],
       ['Diego Becker', 'CM', 62, 29], ['Agustín Bolívar', 'AM', 61, 30], ['Thomas Amilivia', 'RW', 61, 28],
       ['Matías Bergara', 'ST', 58, 22], ['Tomás Bolzicco', 'LW', 62, 32], ['Fabricio Henricot', 'GK', 56, 36],
       ['Cristian Gorgerino', 'CB', 56, 30], ['Leonardo Incorvaia', 'LB', 56, 34], ['Marco Borgnino', 'CM', 56, 29],
       ['Ariel Castellano', 'RW', 57, 29], ['Marco Miori', 'ST', 57, 23], ['Agustín Irazoque', 'CB', 65, 27],
       ['Julián Lobelos', 'GK', 53, 27], ['Agustín Zapata', 'GK', 55, 23], ['Mateo Ortale', 'CB', 55, 24],
       ['Kevin Silva', 'DM', 53, 23]
     ] },
    { n: 'Argentino de Monte Maíz', s: 'AMM', c1: '#0057B8', c2: '#FFFFFF', str: 58, p: [
       ['Alexis Bonet', 'GK', 58, 31], ['Iván Amaya', 'RB', 58, 28], ['Pablo Moreyra', 'CB', 60, 31],
       ['Elián Coronas', 'CB', 57, 26], ['Emanuel Díaz', 'LB', 57, 24], ['Maximiliano Correa', 'DM', 56, 36],
       ['Marcos Brítez Ojeda', 'CM', 58, 40], ['Gianfranco Baier', 'AM', 61, 27], ['Ramón Lentini', 'RW', 59, 38],
       ['Mariano Guerreiro', 'ST', 58, 33], ['Eber Soto', 'LW', 57, 38], ['Juan Cruz Cuesta', 'GK', 53, 30],
       ['Cristian Mercado', 'CB', 57, 37], ['Nahuel Rodríguez', 'LB', 53, 39], ['David Franco', 'CM', 54, 30],
       ['Adrián Rodríguez', 'RW', 52, 29], ['Nicolás Reche', 'ST', 57, 26], ['Facundo Rassol', 'CB', 57, 32],
       ['Guido Nogar', 'GK', 51, 30], ['Agustín Tinari', 'DM', 52, 30], ['Hugo Vera Oviedo', 'CB', 54, 35],
       ['Ezequiel Giaime', 'CB', 54, 41]
     ] },
    { n: 'Atenas de Río Cuarto', s: 'ATE', c1: '#E30613', c2: '#000000', str: 57, p: [
       ['Agustín Arrieta', 'GK', 54, 23], ['Santiago Abayay', 'RB', 57, 20], ['Francisco Araya', 'CB', 54, 28],
       ['Alan Fernández', 'CB', 56, 28], ['Isaías Guzmán', 'LB', 58, 23], ['Martín Argüello', 'DM', 58, 26],
       ['Agustín Alcaraz', 'CM', 57, 28], ['Mateo Felippa', 'AM', 58, 20], ['Gabriel Azcurra', 'RW', 59, 28],
       ['Mateo Mana', 'ST', 57, 27], ['Baltazar Muchut', 'LW', 55, 21], ['Cristian Geist', 'GK', 53, 27],
       ['Federico Peralta', 'CB', 51, 25], ['Lucio Pérez', 'LB', 55, 29], ['Antú Hernandez', 'CM', 53, 31],
       ['Lionel Pedrueza', 'RW', 55, 23], ['Franco Pérez', 'ST', 54, 30], ['Juan Ignacio Romero', 'CB', 53, 23],
       ['Francisco Herrera', 'GK', 52, 22], ['Mariano Martínez', 'CM', 52, 35], ['Facundo Mucignat', 'CM', 50, 27],
       ['Pablo Palavecino', 'CM', 51, 26]
     ] },
    { n: 'Bartolomé Mitre', s: 'BMI', c1: '#0057B8', c2: '#FFE500', str: 56, p: [
       ['Guillermo Bachke', 'GK', 54, 29], ['Richard Rodríguez', 'RB', 52, 22], ['Franco Mendoza', 'CB', 54, 34],
       ['Iván Esquivel', 'CB', 56, 28], ['Ernesto Mazacote', 'LB', 55, 30], ['Enzo Bruno', 'DM', 53, 39],
       ['Leonardo Morales', 'CM', 72, 39], ['Kevin Sarza', 'AM', 55, 27], ['Guido Da Silva', 'RW', 55, 26],
       ['Thomas Silvero', 'ST', 53, 26], ['Ulises Silveira', 'LW', 51, 28], ['Manuel Galeano', 'GK', 47, 32],
       ['Cristóbal Ramírez', 'CB', 48, 30], ['Manuel Roa', 'LB', 48, 25], ['Esteban Klyniauk', 'CM', 48, 28],
       ['Julio Cáceres', 'RW', 50, 38], ['Matías Donato', 'ST', 52, 27], ['Katriel Lukoski', 'CB', 49, 33],
       ['José Gutiérrez', 'GK', 46, 26], ['Matias Barrientos', 'CB', 47, 28], ['Gonzalo Melgarejo', 'CM', 45, 25],
       ['Rodrigo Cerdan', 'CM', 47, 28]
     ] },
    { n: 'Boca Unidos', s: 'BUN', c1: '#0057B8', c2: '#FFE500', str: 57, p: [
       ['David Acuña', 'GK', 56, 26], ['Raúl Albornoz', 'RB', 56, 37], ['Santiago Chamorro', 'CB', 55, 23],
       ['Pablo Cuevas', 'CB', 58, 32], ['Leandro Díaz', 'LB', 70, 22], ['Mateo De Olivera', 'DM', 56, 22],
       ['Leandro Gómez', 'CM', 56, 22], ['Kevin Gribas', 'AM', 55, 22], ['Francisco Aman', 'RW', 55, 33],
       ['Ignacio Colombini', 'ST', 54, 34], ['Israel Escalante', 'LW', 56, 27], ['Lucas Álvarez', 'GK', 53, 32],
       ['Facundo Fernández', 'CB', 50, 29], ['Marcos Fissore', 'LB', 50, 34], ['Sebastián Navarro', 'CM', 66, 38],
       ['Diego López', 'RW', 75, 21], ['Antonio Medina', 'ST', 52, 42], ['Nahuel Franco', 'CB', 51, 25],
       ['Lautaro Rojas', 'GK', 47, 24], ['Ignacio Turnes', 'GK', 51, 26], ['Alejandro Leani', 'CB', 49, 29],
       ['Gastón Lovato', 'DM', 47, 26]
     ] },
    { n: 'Círculo Deportivo', s: 'CDE', c1: '#00A94F', c2: '#FFFFFF', str: 54, p: [
       ['Mateo Parin', 'GK', 52, 23], ['Iván Carbajo', 'RB', 53, 30], ['Samuel Sebastián Cotto', 'CB', 52, 26],
       ['Jose Adrían Al Pacino', 'CB', 57, 24], ['Valentín Dimare', 'LB', 56, 26], ['Joaquín Bassani', 'DM', 55, 25],
       ['Jeremías Bertacin', 'CM', 53, 24], ['Francisco Erivaldo Rosendo De Souza', 'AM', 56, 35], ['José Albornoz', 'RW', 55, 24],
       ['Ezequiel Alexander Denis', 'ST', 55, 30], ['Diego Leonardo Martínez', 'LW', 55, 42], ['Federico Nicolas Tursi', 'GK', 53, 35],
       ['Gabriel Adrián Ferro', 'CB', 50, 39], ['Santiago Filippini', 'LB', 48, 20], ['Matías Agustín Dolce', 'CM', 49, 28],
       ['Axel Manual Pereyra', 'RW', 48, 25], ['Lautaro Ruiz Martínez', 'ST', 49, 27], ['Guillermo Nicolás Pfund', 'CB', 53, 37],
       ['Carlos Nahuel Roselli', 'DM', 47, 41], ['Damián Leonel Schvindt', 'CB', 50, 28], ['Bruno Victor Gaston Vedda', 'CB', 50, 29],
       ['Martín Villar', 'CB', 47, 25]
     ] },
    { n: 'Costa Brava', s: 'COB', c1: '#E30613', c2: '#FFFFFF', str: 55, p: [] },
    { n: 'Crucero del Norte', s: 'CRU', c1: '#E30613', c2: '#000000', str: 58, p: [
       ['Juan Martín Boiero', 'GK', 59, 31], ['Dylan García', 'RB', 57, 26], ['Nicolás Inostroza', 'CB', 55, 35],
       ['Eric Tomas Cristaldo', 'CB', 59, 29], ['Santiago Nicolás Diaz', 'LB', 59, 27], ['Néstor Arévalo González', 'DM', 57, 26],
       ['Nahuel Bentos', 'CM', 57, 27], ['Isaac Campos', 'AM', 57, 25], ['Ernesto Álvarez', 'RW', 58, 38],
       ['Osmar Fernández', 'ST', 59, 26], ['Braian Perussato', 'LW', 59, 28], ['Leonel Garcete', 'GK', 54, 27],
       ['Walter Rubén Figueroa', 'CB', 54, 41], ['Roque Gabriel Gonzalez', 'CM', 52, 26], ['Alex Garay', 'CM', 54, 32],
       ['Fabricio Illanes', 'RW', 56, 30], ['Danilo Mullembach', 'ST', 52, 25], ['Carlos Nahuel Speck', 'CB', 55, 24],
       ['Francisco Javier Del Riego', 'GK', 51, 27], ['Tomas Ignacio Palleres', 'GK', 51, 32], ['Carlos Emanuel Franco', 'GK', 49, 26],
       ['Matias Iglesias', 'GK', 50, 25]
     ] },
    { n: 'Deportivo Rincón', s: 'RIN', c1: '#00A94F', c2: '#FFFFFF', str: 57, p: [] },
    { n: 'Douglas Haig', s: 'DOU', c1: '#E30613', c2: '#FFFFFF', str: 59, p: [
       ['Agustín Auil', 'GK', 57, 24], ['Nicolás Bazzana', 'RB', 59, 30], ['Bruno Bianchi', 'CB', 59, 37],
       ['Luciano Cuello', 'CB', 59, 26], ['Kevin Fleitas', 'LB', 61, 20], ['Gonzalo Baglivo', 'DM', 61, 30],
       ['Rodrigo Caballuci', 'CM', 61, 34], ['Joaquín Castellano', 'AM', 60, 25], ['Emiliano Bogado', 'RW', 58, 29],
       ['Álex González', 'ST', 61, 21], ['Fabricio González', 'LW', 57, 25], ['Ezequiel Bacher', 'GK', 55, 30],
       ['Boris Magnago', 'CB', 55, 25], ['Mariano Mauri', 'LB', 58, 32], ['Iván De Gaetani', 'CM', 58, 21],
       ['Santiago Gutiérrez', 'RW', 56, 29], ['Agustín Jara', 'ST', 55, 22], ['Agustín Pezzi', 'CB', 55, 29],
       ['Juan Ignacio Carrera', 'GK', 51, 45], ['Matías Romanisio', 'GK', 54, 22], ['Tomás Puplo', 'DM', 53, 20],
       ['Ezequiel Santángelo', 'CB', 54, 31]
     ] },
    { n: 'El Linqueño', s: 'LIN', c1: '#00A94F', c2: '#FFFFFF', str: 55, p: [
       ['Diego Perez Diaz', 'GK', 57, 20], ['Agustin Herrera', 'RB', 56, 21], ['Alejandro Nardi', 'CB', 54, 32],
       ['Gabriel Medina', 'CB', 55, 27], ['Lautaro Borao', 'LB', 53, 21], ['Kevin Redondo', 'DM', 54, 20],
       ['Alejo Vega', 'CM', 55, 27], ['Juan Coria', 'AM', 55, 23], ['Mauricio Pavon Zarate', 'RW', 55, 24],
       ['Gianfranco Ottaviani', 'ST', 53, 22], ['Andrés Mc Cormick', 'LW', 54, 30], ['Mariano Alcaraz', 'GK', 52, 30],
       ['Carlos Nuñez', 'CB', 52, 22], ['Manuel Reynoso', 'LB', 48, 33], ['Bautista Colombi', 'CM', 48, 25],
       ['Lucas Ciotti', 'RW', 50, 33], ['Rafael Ferro', 'ST', 50, 26], ['Agustin Alonso', 'CB', 52, 29],
       ['Nicolas Herrera', 'CM', 47, 30], ['Gabriel Serrano', 'CM', 48, 31], ['Juan García Pereyra', 'CM', 49, 27],
       ['Franco Olmos', 'CM', 50, 28]
     ] },
    { n: 'Germinal', s: 'GER', c1: '#0057B8', c2: '#FFE500', str: 54, p: [] },
    { n: 'Gimnasia (CdU)', s: 'GCU', c1: '#00A94F', c2: '#FFFFFF', str: 59, p: [
       ['Pedro Bravo', 'GK', 66, 26], ['Jonathan Benítez', 'RB', 68, 29], ['Ariel Gonzalez', 'CB', 54, 25],
       ['Leonel Lopez', 'CB', 56, 28], ['Nicolas Gomez', 'LB', 58, 29], ['Julián Acosta', 'DM', 58, 29],
       ['Juan Luis Alfaro', 'CM', 65, 27], ['Agustín García', 'AM', 58, 29], ['Joaquín Arriarán Maurer', 'RW', 56, 24],
       ['Francisco Borda', 'ST', 54, 25], ['Flavio Ciampichetti', 'LW', 56, 38], ['Bautista Etcheverry', 'GK', 51, 23],
       ['Jonathan Medina', 'CB', 54, 35], ['Rafael Ríos', 'LB', 50, 30], ['Nicolás Germanier', 'CM', 50, 26],
       ['Luciano Leguizamón', 'RW', 51, 44], ['Jonathan López', 'ST', 50, 37], ['Cristian Romero Giraud', 'CB', 52, 35],
       ['Joaquin Bortagaray', 'GK', 51, 26], ['Matías Bregant', 'GK', 49, 31], ['Leandro Olivera', 'GK', 49, 32],
       ['Marcos Rouzies', 'DM', 49, 29]
     ] },
    { n: 'Gimnasia de Chivilcoy', s: 'GCH', c1: '#FFFFFF', c2: '#0057B8', str: 56, p: [] },
    { n: 'Guillermo Brown', s: 'GBR', c1: '#8B1F2F', c2: '#FFFFFF', str: 58, p: [
       ['Luciano Guarracino', 'GK', 60, 28], ['Danilo Actis', 'RB', 56, 24], ['Iván Bravo', 'CB', 57, 22],
       ['Alejandro Chiavetto', 'CB', 60, 23], ['Natanael Hernández', 'LB', 58, 27], ['Marcos Giménez', 'DM', 59, 29],
       ['Axel Kostelak', 'CM', 56, 23], ['Branco Mera', 'AM', 59, 26], ['Máximo Florentín', 'RW', 57, 22],
       ['Leonardo González', 'ST', 58, 25], ['Santiago Ibáñez', 'LW', 56, 31], ['Matías Soria', 'GK', 55, 25],
       ['Gabriel Lazarte', 'CB', 52, 29], ['Thiago Martínez', 'LB', 53, 20], ['Martín Rivero', 'CM', 54, 37],
       ['Francisco Ilarregui', 'RW', 55, 29], ['Ramiro López', 'ST', 57, 23], ['Renzo Paparelli', 'CB', 53, 29],
       ['Santiago Ullúa', 'GK', 54, 24], ['Agustín Pereyra', 'DM', 51, 28], ['Mateo Ramírez', 'CB', 60, 22],
       ['Matías Vidal', 'CB', 52, 23]
     ] },
    { n: 'Gutiérrez SC', s: 'GUT', c1: '#E30613', c2: '#FFFFFF', str: 54, p: [
       ['Maximiliano Diaz', 'GK', 52, 36], ['Fernando Mesa', 'RB', 56, 27], ['Juan Ignacio Trentín', 'CB', 53, 27],
       ['Agustín Albano', 'CB', 54, 27], ['Santiago López', 'LB', 63, 29], ['Nicolás Arce', 'DM', 55, 41],
       ['Enzo Tejada', 'CM', 51, 29], ['Fabricio Almeida', 'AM', 53, 25], ['Lucas Comachi', 'RW', 56, 32],
       ['Martín Comachi', 'ST', 53, 35], ['Jesús Vera', 'LW', 54, 37], ['Leandro Irrera', 'GK', 52, 33],
       ['Elías Medeiro', 'CB', 50, 28], ['Nicolás Pacheco', 'LB', 49, 32], ['Enzo López', 'CM', 62, 29],
       ['Maximiliano Herrera', 'RW', 50, 33], ['Francisco Agost', 'ST', 51, 28], ['Mateo Vignolo', 'CB', 48, 27],
       ['Ezequiel Navarro Montoya', 'GK', 47, 28], ['Ismael Quílez', 'CB', 46, 37], ['Pablo Peña', 'DM', 45, 27],
       ['Mauro Brito', 'CB', 46, 32]
     ] },
    { n: 'Juventud Antoniana', s: 'JAN', c1: '#0057B8', c2: '#FFFFFF', str: 60, p: [
       ['Matías Montero', 'GK', 59, 29], ['Julio López', 'RB', 61, 28], ['Axel Carrión', 'CB', 57, 22],
       ['Dardo Torres', 'CB', 60, 25], ['Ilan Arevalos', 'LB', 60, 23], ['Agustín Costilla', 'DM', 59, 21],
       ['Leandro Condorí', 'CM', 61, 22], ['Emanuel "Chiro" Romero', 'AM', 61, 34], ['Daniel Lucero', 'RW', 59, 24],
       ['Johnjayler Palacios', 'ST', 60, 27], ['Santiago López', 'LW', 66, 22], ['Facundo Perrone', 'GK', 54, 27],
       ['Ignacio Sanabria', 'CB', 54, 37], ['Andrés Berizovsky', 'LB', 54, 22], ['Martín Esparza', 'CM', 54, 31],
       ['Mauricio Hoyos', 'RW', 53, 34], ['Sergio Frutos', 'ST', 55, 22], ['Lucciano Arraya', 'CB', 54, 25],
       ['Juan Pablo Serrano', 'GK', 53, 29], ['Said Dipp Lizondo', 'GK', 53, 25], ['Nahuel Viveros', 'CM', 53, 22],
       ['EnzoSerrano', 'CM', 51, 28]
     ] },
    { n: 'Juventud Unida Universitario', s: 'JUU', c1: '#E30613', c2: '#FFFFFF', str: 58, p: [
       ['Alejo Lazarte', 'GK', 58, 26], ['Juan Ignacio Benenatti', 'RB', 55, 20], ['Lautaro Figueroa', 'CB', 57, 24],
       ['Eber Garro', 'CB', 57, 29], ['Matías Godoy', 'LB', 67, 21], ['Gustavo Arce', 'DM', 53, 22],
       ['Brandon Cuello', 'CM', 57, 22], ['Tomás Garro', 'AM', 55, 27], ['Francisco Aman', 'RW', 58, 33],
       ['Damián De Hoyos', 'ST', 56, 38], ['Franco Paredes', 'LW', 67, 23], ['Julián Lucero', 'GK', 50, 31],
       ['Julián Gómez', 'CB', 53, 24], ['Lautaro Mancuso', 'LB', 52, 21], ['Nicolás Gatica', 'CM', 50, 26],
       ['Matías Persia', 'RW', 51, 32], ['Santiago Rodríguez', 'ST', 69, 29], ['Juan Manuel Marital', 'CB', 53, 33],
       ['Joaquín Peña', 'GK', 49, 19], ['Marcos Sosa', 'GK', 48, 22], ['César Taborda', 'GK', 49, 42],
       ['Mariano Pieres', 'DM', 50, 26]
     ] },
    { n: 'Kimberley', s: 'KIM', c1: '#00A94F', c2: '#FFFFFF', str: 55, p: [
       ['Diego Aguayo', 'GK', 55, 32], ['Tomás Loscalzo', 'RB', 55, 27], ['Bruno Di Bello', 'CB', 56, 21],
       ['Mateo Rinaldi', 'CB', 56, 20], ['Tomás Mantia', 'LB', 58, 23], ['Mauricio Miori', 'DM', 53, 31],
       ['Ezequiel Goiburu', 'CM', 54, 20], ['Leonel Iriarte', 'AM', 53, 20], ['Rodrigo Ríos', 'RW', 57, 32],
       ['Sebastián Gularte', 'ST', 58, 31], ['Ever Emanuel Ullua', 'LW', 56, 24], ['Tomás Casas', 'GK', 54, 31],
       ['Julián Fritzler', 'CB', 50, 31], ['Facundo Rojas', 'LB', 50, 30], ['Leonardo Verón', 'CM', 51, 26],
       ['Braian Cos', 'RW', 49, 27], ['Axel Pereyra', 'ST', 53, 25], ['Bautista Suárez', 'CB', 50, 22],
       ['Nazareno Orellana', 'GK', 50, 20], ['Hernán Sosa', 'CB', 47, 25], ['Santos Bacigalupe', 'CB', 51, 31],
       ['Nahuel Roselli', 'CM', 48, 23]
     ] },
    { n: 'Olimpo', s: 'OLI', c1: '#000000', c2: '#FFE500', str: 62, p: [
       ['Juan Pablo Lungarzo', 'GK', 59, 29], ['Néstor Moiraghi', 'RB', 62, 41], ['Martín Ferreyra', 'CB', 62, 30],
       ['Agustín Osinaga', 'CB', 60, 28], ['Leandro Hertel', 'LB', 59, 30], ['Diego Ramírez', 'DM', 62, 34],
       ['Cristian Amarilla', 'CM', 62, 33], ['Enzo Coacci', 'AM', 62, 28], ['Braian Guille', 'RW', 66, 29],
       ['Federico González', 'ST', 62, 39], ['Cristian Ibarra', 'LW', 62, 34], ['Cristian Geist', 'GK', 59, 27],
       ['Luciano Lapetina', 'CB', 59, 30], ['Cristian Chimino', 'LB', 57, 38], ['Sebastián Fernández', 'CM', 55, 26],
       ['Marcelo Olivera', 'RW', 60, 27], ['Joaquín Susvielles', 'ST', 60, 35], ['Agustín Bellone', 'CB', 58, 33],
       ['Gastón Vega', 'CB', 54, 26], ['Agustín Stancato', 'CM', 54, 27], ['Antú Hernández', 'CM', 54, 31],
       ['Manuel Vargas', 'CM', 55, 28]
     ] },
    { n: 'San Martín de Formosa', s: 'SMF', c1: '#E30613', c2: '#000000', str: 58, p: [
       ['Kevin Humeler', 'GK', 57, 29], ['Adrián González', 'RB', 57, 31], ['Dylan Leiva', 'CB', 60, 30],
       ['Nicolás Brienzo', 'CB', 56, 28], ['Maximiliano Denis', 'LB', 58, 27], ['Fabricio Illanes', 'DM', 58, 30],
       ['Ricardo Tapia', 'CM', 58, 38], ['Gervasio Núñez', 'AM', 61, 38], ['Mauro Siergiejuk', 'RW', 61, 29],
       ['Favio Durán', 'ST', 56, 31], ['Brian Peralta', 'LW', 59, 30], ['Facundo Tavoliere', 'GK', 55, 33],
       ['Lucas Bazán', 'CB', 56, 31], ['Blas Finardi', 'LB', 57, 23], ['Marcelo Bobadilla', 'CM', 57, 31],
       ['Santiago Ibañez', 'RW', 56, 31], ['Guillermo Bassi', 'ST', 54, 27], ['Lucas Amud', 'CB', 56, 25],
       ['Óscar Maidana', 'GK', 51, 26], ['Agustín Griego', 'CB', 53, 31], ['Iván Suárez', 'DM', 50, 30],
       ['Rolando Serrano', 'CB', 51, 37]
     ] },
    { n: 'San Martín de Mendoza', s: 'SMM', c1: '#00A94F', c2: '#FFFFFF', str: 57, p: [
       ['Facundo Abraham', 'GK', 57, 30], ['Facundo Ruíz', 'RB', 57, 32], ['Sebastián Olivarez', 'CB', 59, 34],
       ['Bruno Rodríguez', 'CB', 54, 26], ['Enzo Ferreira', 'LB', 55, 23], ['Juan Manuel Marital', 'DM', 58, 33],
       ['Luciano Pizarro', 'CM', 58, 29], ['Ramiro Makarte', 'AM', 54, 23], ['Felipe Rivarola Villalba', 'RW', 55, 27],
       ['Francisco Doñate', 'ST', 58, 26], ['Valentín Mancini', 'LW', 57, 23], ['Agustín Grinovero', 'GK', 54, 26],
       ['Juan José Almeida', 'CB', 53, 25], ['Bruno Lira', 'LB', 54, 24], ['Germán Mayenfisch', 'CM', 53, 33],
       ['Facundo Márquez', 'RW', 52, 23], ['Santiago Romero', 'ST', 55, 24], ['Juan Dutto', 'CB', 53, 20],
       ['Matías Heredia', 'GK', 51, 25], ['Edgar González', 'CM', 51, 23], ['Alexis Arias', 'CM', 66, 22],
       ['Ignacio Castro', 'CM', 49, 25]
     ] },
    { n: 'Santamarina', s: 'STA', c1: '#FFE500', c2: '#00A94F', str: 57, p: [
       ['Santiago Casal', 'GK', 58, 26], ['Santos Bacigalupe', 'RB', 56, 31], ['Brian Berlo', 'CB', 59, 38],
       ['Mathias Buongiorno', 'CB', 59, 38], ['Facundo Fernández', 'LB', 58, 26], ['Nicolás Igartúa', 'DM', 56, 33],
       ['Joaquín Jara', 'CM', 55, 23], ['Marcos Pérez', 'AM', 55, 33], ['Thiago Beltrán', 'RW', 58, 25],
       ['Valentino Bruggesser', 'ST', 57, 26], ['Francisco Doñate', 'LW', 59, 26], ['Juan Pablo Mazza', 'GK', 53, 29],
       ['Agustín Lucero', 'CB', 54, 25], ['Juan Ignacio Quintana', 'LB', 52, 26], ['Agustín Sansoni', 'CM', 54, 25],
       ['Joaquín Pavón', 'RW', 54, 16], ['Lautaro Larrasábal', 'ST', 51, 29], ['Juan Cruz Ridao', 'CB', 55, 25],
       ['Lucas Vallejos', 'CB', 50, 26], ['Santiago Sayago', 'CM', 53, 26], ['Pehuén Valenzuela', 'CM', 51, 25],
       ['Nicolás Valerio', 'CM', 51, 34]
     ] },
    { n: 'Sarmiento de La Banda', s: 'SLB', c1: '#00A94F', c2: '#FFFFFF', str: 58, p: [
       ['Juan Mendonça', 'GK', 58, 24], ['Fabio Junior Barrios', 'RB', 57, 25], ['Gabriel Fernández', 'CB', 55, 30],
       ['Leandro Baterette', 'CB', 56, 31], ['Rodrigo Herrera', 'LB', 68, 24], ['Axel Pinto', 'DM', 57, 27],
       ['Pablo Ezequiel López', 'CM', 58, 26], ['Nicolás Juárez', 'AM', 58, 20], ['Matías Pato', 'RW', 60, 21],
       ['Nahuel Speck', 'ST', 57, 23], ['Santiago Mendoza', 'LW', 56, 31], ['Luis Rodriguez', 'GK', 52, 24],
       ['Iván Suárez', 'CB', 52, 31], ['Walter Brandán', 'LB', 55, 32], ['Alejandro Díaz', 'CM', 66, 25],
       ['Facundo Pérez', 'RW', 52, 32], ['Rodrigo Bernal', 'ST', 54, 27], ['Guillermo Guzmán', 'CB', 55, 29],
       ['Facundo Acuña', 'GK', 52, 29], ['Facundo Rodriguez', 'GK', 71, 25], ['Kevin Zamora', 'CB', 53, 26],
       ['Franco Bigo Durando', 'DM', 50, 26]
     ] },
    { n: 'Sarmiento de Resistencia', s: 'SRE', c1: '#00A94F', c2: '#FFFFFF', str: 56, p: [
       ['Emilio Di Fulvio', 'GK', 56, 31], ['Facundo Pardo', 'RB', 55, 28], ['Luciano Lapetina', 'CB', 57, 30],
       ['Nahuel Gómez', 'CB', 54, 30], ['Fernando Ponce', 'LB', 53, 34], ['Matías Mansilla', 'DM', 71, 30],
       ['Mariano Martínez', 'CM', 53, 36], ['Franco Schiavoni', 'AM', 54, 33], ['Gonzalo Cañete', 'RW', 55, 32],
       ['Franco Olego', 'ST', 53, 39], ['Maximiliano Resquín', 'LW', 53, 31], ['Iván Gorosito', 'GK', 49, 37],
       ['Santiago Gioria', 'CB', 51, 27], ['Franco Domínguez', 'LB', 49, 27], ['Diego Nakache', 'CM', 48, 30],
       ['Daniel Salvatierra', 'RW', 51, 36], ['Alexis Wucherer', 'ST', 50, 31], ['Nahuel Peloso', 'CB', 48, 24],
       ['Agustín Gómez', 'GK', 48, 24], ['Sergio Sagarzazú', 'CM', 47, 39], ['Fabrizio Palma', 'CM', 50, 33],
       ['Rodrigo Montenegro', 'CM', 49, 29]
     ] },
    { n: 'Sol de América', s: 'SDA', c1: '#E30613', c2: '#FFE500', str: 54, p: [
       ['Bernardo Medina', 'GK', 53, 30], ['Gustavo Giménez', 'RB', 53, 25], ['Rodrigo Duarte', 'CB', 59, 19],
       ['Rolando García Guerreño', 'CB', 56, 30], ['Matías Rodrigo Pérez', 'LB', 53, 20], ['Edgar Ferreira', 'DM', 55, 32],
       ['Pedro Catalino Martínez', 'CM', 53, 20], ['Jorge Mora', 'AM', 54, 21], ['Jaime Moreno', 'RW', 52, 31],
       ['José Ortigoza', 'ST', 52, 31], ['Julio Villalba', 'LW', 51, 28], ['Mathías Bordón', 'GK', 49, 23],
       ['Víctor Barrios', 'CB', 50, 25], ['Guido Gamarra', 'LB', 47, 20], ['Juan Ramón Cáceres', 'CM', 52, 24],
       ['Emiliano Ozuna', 'RW', 48, 30], ['Fernando Díaz Arrellaga', 'ST', 56, 24], ['Ignacio Paniagua', 'CB', 50, 33],
       ['Luis Hernán Franco', 'GK', 46, 25], ['Diego Aranda', 'GK', 46, 21], ['Derlis Aquino', 'CM', 46, 29],
       ['Derlis Orue', 'CM', 47, 22]
     ] },
    { n: 'Sol de Mayo', s: 'SDM', c1: '#E30613', c2: '#000000', str: 56, p: [
       ['Juan Cruz Nadal', 'GK', 55, 28], ['Mateo Agostinelli', 'RB', 57, 20], ['Maximiliano Lucena', 'CB', 56, 26],
       ['Lucas Míguez', 'CB', 56, 28], ['Tamir Ortiz', 'LB', 56, 23], ['Ignacio Aldabe', 'DM', 56, 26],
       ['Samuel Barry', 'CM', 56, 20], ['Valentino Benítez Digorado', 'AM', 55, 23], ['Kevin Pereira', 'RW', 64, 20],
       ['Nicolás Mazzola', 'ST', 56, 36], ['Héctor Morales', 'LW', 55, 37], ['Brandon Salinas', 'GK', 54, 22],
       ['Manuel Preciado', 'CB', 50, 22], ['Rafael Ríos', 'LB', 52, 30], ['Diego Dietz', 'CM', 50, 23],
       ['Alberto Reyes', 'RW', 50, 32], ['Juan Manuel Rubio', 'ST', 52, 21], ['Jorge Scolari', 'CB', 53, 37],
       ['Ignacio Hildmann', 'GK', 48, 26], ['Kevin Semeniuk', 'GK', 50, 24], ['Bharti Abneet', 'DM', 47, 28],
       ['Matías Acuña', 'CB', 51, 33]
     ] },
    { n: 'Sportivo Las Parejas', s: 'SAC', c1: '#0057B8', c2: '#FFFFFF', str: 54, p: [
       ['Matías Caballero', 'GK', 55, 22], ['Juan Albertinazzi', 'RB', 55, 30], ['Agustín Arcando', 'CB', 55, 25],
       ['Jerónimo Cabrera', 'CB', 54, 23], ['Facundo Fernández', 'LB', 54, 22], ['Facundo Britos', 'DM', 54, 30],
       ['Ivo Cantadori', 'CM', 53, 23], ['Lautaro Gayoso', 'AM', 54, 27], ['Nahuel Blanco', 'RW', 53, 22],
       ['Teo Cantadori', 'ST', 54, 21], ['Facundo Cervantes', 'LW', 55, 30], ['Emilio Rébora', 'GK', 48, 39],
       ['Sebastián Hernández Le Pors', 'CB', 50, 31], ['Nicolás Herranz', 'LB', 49, 32], ['Brian Guerra', 'CM', 51, 26],
       ['Ignacio González', 'RW', 52, 26], ['Braian Jiménez', 'ST', 50, 27], ['Sebastián Parisi', 'CB', 52, 30],
       ['Alejo Villanueva', 'GK', 46, 26], ['Alejo Pereyra', 'CB', 48, 27], ['Lautaro Príncipe', 'DM', 47, 24],
       ['Julián Taverna', 'CB', 50, 27]
     ] },
    { n: 'Sportivo Belgrano', s: 'SBE', c1: '#0057B8', c2: '#FFFFFF', str: 57, p: [
       ['Leandro Maffini', 'GK', 56, 27], ['Camilo Alessandria', 'RB', 55, 26], ['Lucas Alessi', 'CB', 58, 23],
       ['Eduardo Battán', 'CB', 60, 32], ['Braian Camisassa', 'LB', 56, 29], ['Pablo Cortizo', 'DM', 57, 37],
       ['Leonel Flores', 'CM', 57, 19], ['Elías Franceschi', 'AM', 60, 22], ['Juan Ignacio Aróstegui', 'RW', 55, 20],
       ['Tomás Attis', 'ST', 58, 27], ['Enzo Avaro', 'LW', 56, 27], ['Leonardo Martina', 'GK', 55, 30],
       ['Guillermo Cóceres', 'CB', 55, 24], ['Leonardo Ferreyra', 'CM', 52, 35], ['David Franco', 'CM', 56, 29],
       ['Hernán Brylko', 'RW', 55, 30], ['Máximo Forlín', 'ST', 55, 21], ['Tomás Nallim', 'CB', 53, 27],
       ['Román Negri', 'GK', 49, 22], ['Santiago Roggero', 'GK', 53, 25], ['Tomás Pennesi', 'CB', 53, 28],
       ['Tomás Roullier', 'CB', 52, 24]
     ] },
    { n: 'Villa Mitre', s: 'VMI', c1: '#0057B8', c2: '#FFFFFF', str: 60, p: [
       ['Franco Agüero', 'GK', 62, 33], ['Víctor Manchafico', 'RB', 58, 40], ['Alan Moreno', 'CB', 58, 38],
       ['Federico Tanner', 'CB', 59, 30], ['Genaro Cepeda', 'LB', 60, 26], ['Mauro Bellone', 'DM', 58, 36],
       ['Pablo Mujica', 'CM', 61, 30], ['Enzo González Gatica', 'AM', 62, 31], ['Martín Peralta', 'RW', 58, 29],
       ['Damián De Hoyos', 'ST', 59, 38], ['Joaquín Vivani', 'LW', 60, 31], ['Luciano Molini', 'GK', 53, 38],
       ['Damián Zadel', 'CB', 54, 39], ['Ramiro Formigo', 'LB', 53, 36], ['Maximiliano López', 'CM', 55, 33],
       ['Julián Monteverde', 'RW', 55, 23], ['Nicolás Cavagnero', 'ST', 57, 26], ['Santiago Villalba', 'CB', 54, 27],
       ['Tomás Manganaro', 'GK', 53, 22], ['Thiago Pérez', 'CM', 55, 26], ['Lucas Algozino', 'CM', 53, 31],
       ['Valentín Jouglard', 'CM', 55, 25]
     ] },
    { n: 'Atlético Escobar', s: 'AES', c1: '#E30613', c2: '#FFFFFF', str: 56, p: [] },
    { n: 'Huracán Las Heras', s: 'HLH', c1: '#D9241C', c2: '#FFFFFF', str: 59, p: [] },
    { n: 'Cipolletti', s: 'CIP', c1: '#C8102E', c2: '#FFFFFF', str: 57, p: [] },
    { n: 'Independiente de Chivilcoy', s: 'ICH', c1: '#D52B1E', c2: '#FFFFFF', str: 57, p: [] },
    { n: 'Defensores de Villa Ramallo', s: 'DVR', c1: '#0B4EA2', c2: '#FFFFFF', str: 54, p: [] },
    { n: 'FADEP', s: 'FAD', c1: '#1B7A3D', c2: '#FFFFFF', str: 52, p: [] },
    { n: 'Tucumán Central', s: 'TUC', c1: '#0057B8', c2: '#FFD100', str: 52, p: [] },
  ]
};
