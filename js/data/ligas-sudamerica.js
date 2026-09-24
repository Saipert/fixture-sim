/* =========================================================================
   LIGAS SUDAMERICANAS — 2025/26
   ========================================================================= */
window.LEAGUES = window.LEAGUES || {};

window.LEAGUES.uruguay = {
  id: 'uruguay', name: 'Primera División de Uruguay', country: 'Uruguay', ucl: 2, rel: 2,
  pool: 'latam', squadSize: 17, teams: [
    { n: 'Boston River', s: 'BOS', c1: '#0057B8', c2: '#FFFFFF', str: 58, p: [
       ['Bruno Antúnez', 'GK', 58, 22], ['Juan Acosta', 'RB', 59, 31], ['Gerónimo Bortagaray', 'CB', 57, 24],
       ['Marco Mancebo', 'CB', 54, 24], ['Fredy Martínez', 'LB', 58, 24], ['Mauricio Vera', 'DM', 60, 27],
       ['Agustín Amado', 'CM', 60, 24], ['Felipe Chiappini', 'CM', 52, 21], ['Baltasar Barcia', 'RW', 58, 24],
       ['Facundo Rodríguez', 'ST', 56, 29], ['Agustín Anello', 'LW', 57, 23], ['Exequiel Hernández', 'GK', 55, 39],
       ['Martín González', 'CB', 54, 31], ["Jairo O'Neil", 'LB', 54, 23], ['Facundo Muñoa', 'CM', 56, 21],
       ['Gustavo Viera', 'RW', 56, 24], ['Alexander González', 'AM', 55, 22], ['Agustín Albarracín', 'LW', 56, 19]
     ] },
    { n: 'Cerro', s: 'CER', c1: '#0057B8', c2: '#FFFFFF', str: 58, p: [
       ['Juan Moreno', 'GK', 59, 27], ['Gabriel Chocobar', 'RB', 57, 27], ['Alexis Piegas', 'CB', 59, 24],
       ['Fernando Souza', 'CB', 55, 28], ['Mateo Monserrat', 'LB', 58, 21], ['Mario García', 'DM', 58, 27],
       ['Axel Pandiani', 'CM', 58, 26], ['Sebastián Assís', 'AM', 60, 33], ['Gustavo Viera', 'RW', 56, 26],
       ['Tiziano Correa', 'ST', 57, 22], ['Maximiliano Añasco', 'LW', 55, 25], ['Pedro González', 'GK', 54, 27],
       ['Lucas Correa', 'CB', 53, 30], ['Julián Pou', 'LB', 52, 23], ['Nicolás Bertocchi', 'CM', 58, 37],
       ['Alexander Hernández', 'RW', 52, 22], ['Diego Daguerre', 'ST', 50, 21], ['Santiago Franca', 'CB', 54, 24],
       ['Facundo Alvez', 'CB', 52, 19], ['Nicolás Ramos', 'CB', 51, 21], ['Cristian González', 'DM', 50, 27],
       ['Santiago Cappi', 'CB', 52, 23]
     ] },
    { n: 'Cerro Largo', s: 'CLG', c1: '#00A94F', c2: '#FFFFFF', str: 60, p: [
       ['Gino Santilli', 'GK', 61, 23], ['Facundo Parada', 'CB', 59, 25], ['Leonel Correa', 'CB', 61, 29],
       ['Martín Gianoli', 'CB', 61, 24], ['Facundo Bonifazi', 'LB', 61, 29], ['Sebastián Assís', 'DM', 64, 32],
       ['Mario García', 'CM', 60, 25], ['Nicolás Bertocchi', 'AM', 62, 36], ['Federico Medina', 'RW', 57, 21],
       ['Franco Rossi', 'ST', 57, 23], ['Maximiliano Añasco', 'LW', 59, 24], ['Federico Pintado', 'GK', 58, 24],
       ['Brian Ferrares', 'CB', 59, 25], ['Cristian González', 'LB', 54, 26], ['Alan Di Pippa', 'DM', 61, 25],
       ['Leonardo Amaral', 'RW', 55, 22], ['Bruno Hernández', 'LW', 55, 20], ['Agustín Pérez', 'DM', 57, 24]
     ] },
    { n: 'Danubio', s: 'DAN', c1: '#FFFFFF', c2: '#0057B8', str: 61, p: [
       ['Mauro Goicoechea', 'GK', 61, 38], ['Emiliano Velázquez', 'RB', 60, 32], ['Joaquín Pereyra', 'CB', 66, 32],
       ['Mateo Rinaldi', 'CB', 58, 26], ['Leandro Sosa', 'LB', 60, 35], ['Juan Millán', 'DM', 58, 25],
       ['Sebastián Rodríguez', 'CM', 67, 34], ['Mateo Peralta', 'AM', 61, 20], ['Enzo Cabrera', 'RW', 58, 23],
       ['Ivo Costantino', 'ST', 62, 27], ['Maicol Ferreira', 'LW', 61, 28], ['Kevin Martínez', 'GK', 54, 21],
       ['Camilo Mayada', 'CB', 55, 35], ['Tomás Cavanagh', 'LB', 59, 25], ['Emiliano Figueroa', 'CM', 56, 19],
       ['Nicolás Azambuja', 'RW', 53, 18], ['Diego Píriz', 'ST', 55, 20], ['Facundo Balatti', 'CB', 54, 18],
       ['Facundo Saravia', 'CB', 52, 24], ['Martín Jourdan', 'DM', 51, 25], ['Felipe Cabrera', 'CB', 52, 20],
       ['Santiago Sosa', 'CB', 68, 18]
     ] },
    { n: 'Defensor Sporting', s: 'DEF', c1: '#5B2C83', c2: '#FFFFFF', str: 63, p: [
       ['Lucas Machado', 'GK', 62, 28], ['Daniel Martínez', 'RB', 66, 19], ['Guillermo de los Santos', 'CB', 65, 35],
       ['Geanfranco Rodríguez', 'CB', 62, 20], ['Francisco Sorondo', 'LB', 63, 18], ['Germán Barrios', 'DM', 63, 22],
       ['Mauricio Amaro', 'CM', 65, 21], ['Nicolás Wunsch', 'AM', 61, 23], ['Brian Lozano', 'RW', 64, 32],
       ['Alexander Machado', 'ST', 65, 24], ['Lucas Agazzi', 'LW', 61, 21], ['Kevin Dawson', 'GK', 60, 34],
       ['Axel Frugone', 'CB', 60, 21], ['Valentín Rodríguez', 'LB', 60, 25], ['Xavier Biscayzacú', 'CM', 60, 21],
       ['Alan Torterolo', 'RW', 61, 18], ['Brian Montenegro', 'ST', 58, 33], ['Mateo Caballero', 'CB', 61, 19],
       ['Bruno Simone', 'GK', 55, 22], ['Marco Saravia', 'CB', 59, 27], ['Lucas de Los Santos', 'CM', 58, 25],
       ['Juan Manuel Jorge', 'CM', 58, 22]
     ] },
    { n: 'Juventud de Las Piedras', s: 'JUV', c1: '#00A94F', c2: '#FFFFFF', str: 58, p: [
       ['Sebastián Sosa', 'GK', 57, 27], ['Patricio Pernicone', 'RB', 60, 23], ['Axel Prado', 'CB', 60, 32],
       ['Martín Cáceres', 'CB', 56, 30], ['David Morosini', 'LB', 56, 22], ['Mateo Izaguirre', 'DM', 56, 25],
       ['Leonel Roldan', 'CM', 60, 20], ['Emanuel Cecchini', 'AM', 60, 28], ['Agustín Alaníz', 'RW', 61, 23],
       ['Marcelo Pérez', 'ST', 56, 24], ['Bruno Larregui', 'LW', 58, 20], ['Nicolás Rossi', 'GK', 55, 27],
       ['Agustín Pérez', 'CB', 55, 24], ['Renzo Rabino', 'LB', 55, 23], ['Facundo Pérez', 'CM', 54, 26],
       ['Pablo Lago', 'RW', 54, 29], ['Alejo Cruz', 'ST', 63, 24], ['Mauricio Rodríguez', 'CB', 55, 31],
       ['Renzo Sánchez', 'ST', 51, 22], ['Rodrigo Chagas', 'CM', 51, 25], ['Emmanuel Mas', 'CB', 52, 33],
       ['Federico Barrandeguy', 'CB', 50, 26]
     ] },
    { n: 'Liverpool FC', s: 'LIV', c1: '#000000', c2: '#0057B8', str: 62, p: [
       ['Mathías Bernatene', 'GK', 63, 32], ['Santiago Strasorier', 'RB', 64, 27], ['Facundo Perdomo', 'CB', 64, 23],
       ['Jean Rosso', 'CB', 63, 28], ['Santiago Laquidaín', 'LB', 55, 23], ['Nicolás Garayalde', 'DM', 60, 25],
       ['Santiago Milano', 'CM', 64, 22], ['Matías Mir', 'AM', 65, 26], ['Federico Martínez', 'RW', 61, 30],
       ['Renzo Machado', 'ST', 63, 23], ['Ramiro Degregorio', 'LW', 56, 22], ['Martín Campaña', 'GK', 66, 36],
       ['Agustín Cayetano', 'CB', 56, 30], ['Enzo Castillo', 'LB', 57, 30], ['Lucas Acosta', 'CM', 63, 30],
       ['Rubén Bentancourt', 'RW', 62, 32], ['Alfonso de Luca', 'ST', 59, 25], ['Kevin Amaro', 'CB', 60, 33],
       ['Martín Rabuñal', 'CM', 57, 23], ['Diego Zabala', 'ST', 55, 20], ['Nicolas Cabral', 'CB', 55, 25],
       ['Ezequiel Olivera', 'CM', 51, 21]
     ] },
    { n: 'Albion FC', s: 'ALB', c1: '#FFFFFF', c2: '#0057B8', str: 57, p: [
       ['Sebastián Jaume', 'GK', 57, 26], ['Francisco Couture', 'RB', 56, 28], ['Pablo Lacoste', 'CB', 59, 31],
       ['José Álvarez', 'CB', 56, 28], ['Matías de los Santos', 'LB', 56, 31], ['Francisco Ginella', 'DM', 57, 21],
       ['Tomás Moschión', 'CM', 56, 32], ['Leonardo Pais', 'AM', 56, 21], ['Álvaro López', 'RW', 57, 26],
       ['Hernán Toledo', 'ST', 59, 29], ['Mateo Alcoba', 'LW', 57, 27], ['Pedro Ramallo', 'GK', 52, 24],
       ['Ezequiel Burdín', 'CB', 55, 24], ['Andrés Romero', 'LB', 53, 25], ['Octavio Perdomo', 'CM', 53, 20],
       ['Lucas Rodríguez', 'RW', 64, 31], ['Agustín Vera', 'ST', 53, 26], ['Federico Puente', 'CB', 52, 26],
       ['Carlos Airala', 'CM', 51, 32], ['Pablo Alcoba', 'CM', 53, 28], ['Román Gutiérrez', 'CM', 52, 23],
       ['Santiago Costa', 'CM', 53, 28]
     ] },
    { n: 'Montevideo City Torque', s: 'MCT', c1: '#6CACE4', c2: '#FFFFFF', str: 62, p: [
       ['Franco Torgnascioli', 'GK', 63, 36], ['Franco Romero', 'RB', 59, 31], ['Valentino Würth', 'CB', 64, 19],
       ['Franco Pizzichillo', 'CB', 63, 30], ['Nahuel Leivas', 'LB', 60, 20], ['Pablo Siles', 'DM', 62, 29],
       ['Bautista Kociubinski', 'CM', 61, 25], ['Gonzalo Montes', 'AM', 62, 32], ['Luka Andrade', 'RW', 62, 19],
       ['Salomón Rodríguez', 'ST', 60, 26], ['Esteban Obregón', 'LW', 61, 25], ['Gastón Rodríguez', 'GK', 57, 32],
       ['Ezequiel Busquets', 'CB', 59, 26], ['Eduardo Agüero', 'LB', 56, 22], ['Lucas Duré', 'CM', 56, 21],
       ['Nahuel da Silva', 'RW', 56, 21], ['Ramiro Lecchini', 'ST', 58, 19], ['Gary Kagelmacher', 'CB', 58, 38],
       ['Facundo Silvera', 'CB', 56, 29], ['Juan Quintana', 'CB', 54, 26], ['Fabricio Silveira', 'DM', 53, 22],
       ['Julián Pou', 'CB', 53, 23]
     ] },
    { n: 'Montevideo Wanderers', s: 'WAN', c1: '#FFFFFF', c2: '#000000', str: 61, p: [
       ['Gerónimo Govea', 'GK', 60, 27], ['Paulo Lima', 'RB', 59, 26], ['Guillermo Borthagaray', 'CB', 59, 20],
       ['Leandro Zazpe', 'CB', 62, 33], ['Fabricio Formiliano', 'LB', 63, 21], ['Nicolás Queiróz', 'DM', 61, 24],
       ['Sergi Oriol', 'CM', 59, 30], ['Jonás Luna', 'AM', 60, 25], ['Rodrigo Rivero', 'RW', 62, 30],
       ['Santiago Ormeño', 'ST', 62, 22], ['Luciano Cosentino', 'LW', 62, 25], ['José Río', 'GK', 56, 25],
       ['Mateo Acosta', 'CB', 58, 33], ['Darlin Mencia', 'LB', 54, 30], ['José Alberti', 'CM', 57, 32],
       ['Roque Ricca', 'RW', 55, 25], ['Santiago Guzmán', 'ST', 55, 21], ['Alan García', 'CB', 56, 21],
       ['Lisandro Bajú', 'CB', 54, 31], ['Santiago Benítez', 'CB', 54, 28], ['Nicolás Olivera', 'CB', 55, 33],
       ['Gonzalo Freitas', 'CM', 54, 33]
     ] },
    { n: 'Nacional', s: 'NAC', c1: '#FFFFFF', c2: '#0057B8', str: 70, p: [
       ['Luis Mejía', 'GK', 70, 34], ['Nicolás Rodríguez', 'RB', 66, 33], ['Sebastián Coates', 'CB', 77, 34],
       ['Julián Millán', 'CB', 71, 27], ['Diego Romero', 'LB', 64, 25], ['Christian Oliva', 'DM', 70, 29],
       ['Luciano Boggio', 'CM', 71, 26], ['Rómulo Otero', 'AM', 70, 32], ['Lucas Villalba', 'RW', 68, 24],
       ['Nicolás López', 'ST', 74, 31], ['Exequiel Mereles', 'LW', 63, 19], ['Ignacio Suárez', 'GK', 65, 23],
       ['Paolo Calione', 'CB', 62, 19], ['Emiliano Ancheta', 'RB', 66, 26], ['Mauricio Pereyra', 'CM', 68, 35],
       ['Bruno Arady', 'LW', 62, 18], ['Gonzalo Carneiro', 'ST', 68, 29], ['Franco Catarozzi', 'CM', 63, 25]
     ] },
    { n: 'Peñarol', s: 'PEN', c1: '#FFE500', c2: '#000000', str: 71, p: [
       ['Martín Campaña', 'GK', 73, 36], ['Pedro Milans', 'RB', 69, 23], ['Javier Méndez', 'CB', 71, 30],
       ['Emanuel Gularte', 'CB', 71, 27], ['Martín Olivera', 'LB', 70, 33], ['Jesús Trindade', 'DM', 69, 31],
       ['Ignacio Sosa', 'CM', 69, 21], ['Leonardo Fernández', 'AM', 77, 26], ['Javier Cabrera', 'RW', 71, 33],
       ['Maximiliano Silvera', 'ST', 71, 27], ['Diego García', 'LW', 69, 28], ['Brayan Cortés', 'GK', 71, 30],
       ['Nahuel Herrera', 'CB', 67, 20], ['Lucas Hernández', 'LB', 69, 32], ['David Terans', 'AM', 71, 30],
       ['Héctor Villalba', 'AM', 66, 30], ['Matías Arezo', 'ST', 70, 22], ['Alejo Cruz', 'LW', 69, 24]
     ] },
    { n: 'Central Español', s: 'CES', c1: '#E30613', c2: '#FFFFFF', str: 59, p: [
       ['Emiliano Márquez', 'GK', 56, 22], ['Ignacio Rodríguez', 'RB', 62, 23], ['Juan Ignacio Dupont', 'CB', 60, 22],
       ['Mateo Urrutia', 'CB', 59, 33], ['Logan Ponce', 'LB', 58, 27], ['Marcos Montiel', 'DM', 59, 26],
       ['Juber Pereira', 'CM', 56, 31], ['Franco Muñoz', 'AM', 57, 26], ['Raúl Tarragona', 'RW', 56, 29],
       ['Rodrigo Muniz', 'ST', 70, 24], ['Mariano Aguilera', 'LW', 58, 27], ['Rodolfo', 'GK', 51, 21],
       ['Alejandro Villoldo', 'CB', 53, 32], ['Mateo Cantera', 'LB', 52, 23], ['Fernando Camarda', 'CM', 53, 33],
       ['Matías Kusmanis', 'RW', 51, 28], ['Diego Vera', 'ST', 56, 27], ['Luciano Fernández', 'CB', 52, 31],
       ['Isaac Méndez', 'CM', 52, 24], ['Facundo Yocco', 'CM', 52, 24], ['Lucas Wasilewsky', 'CM', 49, 29],
       ['Ernesto Aramburú', 'CB', 50, 23]
     ] },
    { n: 'Progreso', s: 'PRO', c1: '#E30613', c2: '#FFFFFF', str: 57, p: [
       ['Andrés Mehring', 'GK', 57, 23], ['Sebastián Cardozo', 'RB', 59, 26], ['Marcos Paolini', 'CB', 57, 23],
       ['Federico Andueza', 'CB', 56, 29], ['Hernán Carroso', 'LB', 58, 31], ['Agustín Pinheiro', 'DM', 57, 22],
       ['Fabricio Fernández', 'CM', 56, 20], ['Adrián Colombino', 'AM', 55, 29], ['Gary Silva', 'RW', 59, 21],
       ['Nahuel López', 'ST', 55, 23], ['Facundo de León', 'LW', 58, 27], ['Agustín Requena', 'GK', 55, 27],
       ['Facundo Kidd', 'CB', 51, 24], ['Mauro Martín', 'LB', 56, 25], ['Ignacio Lemmo', 'CM', 55, 27],
       ['Joaquín Solleiro', 'RW', 55, 26], ['José Vanetta', 'ST', 53, 22], ['Gianfranco Trasante', 'CB', 54, 28],
       ['Gonzalo Silva', 'CM', 50, 20], ['Juan Rivero', 'ST', 50, 23], ['Agustin Paz', 'CM', 52, 32],
       ['Matteo Copelotti', 'ST', 52, 28]
     ] },
    { n: 'Racing de Montevideo', s: 'RAC', c1: '#6CACE4', c2: '#FFFFFF', str: 61, p: [
       ['Lautaro Amadé', 'GK', 64, 25], ['Agustín Pereira', 'RB', 62, 24], ['Gastón Cotugno', 'CB', 65, 30],
       ['Ramiro Brazionis', 'CB', 62, 23], ['Martín Ferreira', 'LB', 65, 33], ['Juan Bosca', 'DM', 51, 20],
       ['José Varela', 'CM', 64, 37], ['Augusto Scarone', 'AM', 56, 20], ['Alejandro Severo', 'AM', 59, 19],
       ['Hugo Silveira', 'ST', 64, 32], ['Santiago Ramírez', 'LW', 60, 27], ['Facundo Machado', 'GK', 57, 21],
       ['Gastón Bueno', 'CB', 61, 40], ['Thiago Espinosa', 'LB', 64, 20], ['Felipe Cairus', 'CM', 60, 25],
       ['Axel Atum', 'RW', 59, 19], ['Nicolás Sosa Sánchez', 'ST', 62, 29], ['Bautista Tomatis', 'ST', 60, 20]
     ] },
    { n: 'Deportivo Maldonado', s: 'MAL', c1: '#0057B8', c2: '#FFE500', str: 58, p: [
       ['Adriano Freitas', 'GK', 58, 25], ['Hernán Menosse', 'RB', 58, 25], ['Juan Martín Ginzo', 'CB', 61, 33],
       ['Facundo Tealde', 'CB', 58, 26], ['Juan Ramos', 'LB', 60, 20], ['Lucas Núñez', 'DM', 56, 19],
       ['Gonzalo Larrazábal', 'CM', 58, 27], ['Maximiliano González', 'AM', 58, 27], ['Elías de León', 'RW', 61, 20],
       ['Maximiliano Noble', 'ST', 57, 31], ['Guillermo López', 'LW', 58, 22], ['Diego Segovia', 'GK', 55, 32],
       ['Franco Marino', 'CB', 53, 23], ['Hernán Petryk', 'LB', 57, 21], ['Sebastián González', 'CM', 58, 33],
       ['Christian Tabó', 'RW', 54, 29], ['Renato César', 'ST', 54, 29], ['Nicolás Fuica', 'CB', 58, 31],
       ['Bruno Centeno', 'CM', 52, 22], ['Sebastián Tormo', 'CM', 52, 25], ['Matías Espíndola', 'CM', 51, 23],
       ['Adrian Vila', 'CM', 52, 23]
     ] }
  ]
};

window.LEAGUES.colombia = {
  id: 'colombia', name: 'Liga BetPlay Dimayor', country: 'Colombia', ucl: 3, rel: 2,
  pool: 'latam', squadSize: 17, teams: [
    { n: 'Águilas Doradas', s: 'AGU', c1: '#FFE500', c2: '#000000', str: 60, p: [
       ['Jorge Soto', 'GK', 62, 33], ['John García', 'RB', 60, 37], ['Jhon Ontaneda', 'CB', 62, 30],
       ['Andrés Mosquera Guardia', 'CB', 58, 36], ['Jhon Meléndez', 'LB', 62, 24], ['Iván Rojas', 'DM', 62, 29],
       ['Andrés Ricaurte', 'CM', 59, 35], ['Junior Noguera', 'AM', 57, 24], ['Eduar Arízalas', 'RW', 62, 25],
       ['Antony Vásquez', 'ST', 61, 24], ['Tomás Blandón', 'LW', 60, 19], ['Héctor Arango', 'GK', 55, 24],
       ['Alberto Higgins', 'CB', 56, 21], ['Dylan Lozano', 'LB', 56, 24], ['Ángel Cortés', 'CM', 53, 20],
       ['Andrés Carreño', 'RW', 53, 23], ['Ricardo Márquez', 'ST', 53, 29], ['Sebastián Rodríguez', 'CB', 67, 26],
       ['Juan Hurtado', 'GK', 55, 19], ['Nicolás Lara', 'CB', 55, 23], ['Javier Mena', 'DM', 54, 22],
       ['Luis Vasquez', 'CB', 58, 23]
     ] },
    { n: 'Alianza FC', s: 'ALI', c1: '#E30613', c2: '#FFFFFF', str: 61, p: [
       ['Kevin Melgar', 'GK', 63, 34], ['Jesús Cano', 'RB', 60, 28], ['Reyniel Perdomo', 'CB', 62, 23],
       ['Rolando Rodríguez', 'CB', 61, 26], ['Modesto Justiniani', 'LB', 61, 24], ['Manuel Rodríguez', 'DM', 62, 28],
       ['Alcides Díaz', 'CM', 61, 25], ['Alvin Mendoza', 'AM', 63, 24], ['César Medina', 'RW', 59, 46],
       ['Heuyín Guardia', 'ST', 60, 23], ['Reynaldiño Verley', 'LW', 63, 23], ['Ronald Robles', 'GK', 57, 24],
       ['Oliver Cawthorne', 'CB', 56, 24], ['Adolfo Machado', 'LB', 56, 41], ['John Asprilla', 'CM', 54, 23],
       ['Gabriel Chiari', 'RW', 55, 33], ['Leonel Triana', 'ST', 56, 34], ['Jordán Girón', 'CB', 58, 26],
       ['Richard Rodríguez', 'CM', 53, 31], ['Gilberto Rangel', 'CM', 52, 22], ['Maikell Díaz', 'CM', 53, 26],
       ['Aldair McKenzie', 'CM', 55, 29]
     ] },
    { n: 'América de Cali', s: 'AME', c1: '#E30613', c2: '#FFFFFF', str: 68, p: [
       ['Jorge Soto', 'GK', 68, 31], ['Josen Escobar', 'CM', 64, 20], ['Daniel Bocanegra', 'CB', 69, 38],
       ['Jean Pestaña', 'CB', 69, 27], ['Marcos Mina', 'LB', 67, 26], ['Éder Balanta', 'DM', 68, 32],
       ['Rafael Carrascal', 'CM', 68, 32], ['Sebastián Navarro', 'AM', 67, 24], ['Jhon Murillo', 'RW', 70, 29],
       ['Rodrigo Holgado', 'ST', 70, 30], ['Cristian Barrios', 'LW', 70, 27], ['Joel Graterol', 'GK', 68, 28],
       ['Andrés Mosquera', 'CB', 67, 35], ['Omar Bertel', 'LB', 66, 28], ['Jose Cavadia', 'CM', 61, 19],
       ['Yerson Candelo', 'RW', 69, 33], ['Luis Ramos', 'ST', 67, 25], ['Santiago Silva', 'GK', 66, 26]
     ] },
    { n: 'Atlético Bucaramanga', s: 'BUC', c1: '#FFE500', c2: '#00A94F', str: 63, p: [
       ['Alejandro Quintana', 'GK', 66, 30], ['Israel Alba', 'RB', 63, 30], ['Carlos Henao', 'CB', 63, 36],
       ['Jefferson Mena', 'CB', 61, 36], ['Alejandro Artunduaga', 'LB', 56, 27], ['Leonardo Flores', 'DM', 63, 29],
       ['Fabry Castro', 'CM', 64, 33], ['Felix Charrupí', 'AM', 59, 24], ['Fabián Sambueza', 'RW', 66, 36],
       ['Luciano Pons', 'ST', 64, 35], ['Fredy Hinestroza', 'AM', 63, 35], ['Luis Vásquez', 'GK', 60, 29],
       ['Carlos Romaña', 'CB', 61, 25], ['Juan Mosquera', 'LB', 56, 22], ['Diego Chavez', 'CM', 62, 27],
       ['Jhon Vásquez', 'RW', 63, 30], ['Faber Gil', 'ST', 63, 30], ['Kevin Londoño', 'RW', 63, 31]
     ] },
    { n: 'Atlético Nacional', s: 'NAC', c1: '#00A94F', c2: '#FFFFFF', str: 70, p: [
       ['David Ospina', 'GK', 73, 36], ['Felipe Román', 'RB', 69, 29], ['William Tesillo', 'CB', 71, 35],
       ['César Haydar', 'CB', 66, 24], ['Camilo Cándido', 'LB', 68, 30], ['Jorman Campuzano', 'DM', 70, 29],
       ['Mateus Uribe', 'CM', 73, 34], ['Edwin Cardona', 'AM', 71, 32], ['Marino Hinestroza', 'RW', 69, 22],
       ['Alfredo Morelos', 'ST', 72, 29], ['Andrés Sarmiento', 'LW', 67, 27], ['Harlen Castillo', 'GK', 67, 31],
       ['José Arias', 'CB', 65, 21], ['Andrés Salazar', 'CM', 62, 22], ['Elkin Rivero', 'CM', 59, 19],
       ['José Rosa', 'RW', 54, 17], ['Facundo Batista', 'ST', 69, 26], ['Joan Castro', 'RB', 67, 28]
     ] },
    { n: 'Boyacá Chicó', s: 'CHI', c1: '#0057B8', c2: '#FFFFFF', str: 59, p: [
       ['David Agudelo', 'GK', 59, 29], ['Daniel Polanco', 'RB', 57, 28], ['Jefferson Mena', 'CB', 62, 37],
       ['Jhonier Alomía', 'CB', 60, 27], ['Yaliston Martínez', 'LB', 58, 26], ['Camilo Quiceno', 'DM', 56, 22],
       ['Juan Díaz', 'CM', 61, 25], ['Sebastián Salazar', 'AM', 57, 31], ['Felipe Cifuentes', 'RW', 60, 24],
       ['Isaac Camargo', 'ST', 58, 27], ['Óscar Caicedo', 'LW', 57, 20], ['Branndon Zapata', 'GK', 53, 29],
       ['Cristian Blanco', 'CB', 57, 27], ['Sander Navarro', 'LB', 57, 23], ['Yesus Cabrera', 'CM', 55, 36],
       ['Julián Castillo', 'RW', 55, 20], ['Jacobo Pimentel', 'ST', 52, 24], ['Cristian Mosquera', 'CB', 55, 26],
       ['David Quintero', 'GK', 50, 28], ['Rogerio Caicedo', 'GK', 53, 33], ['Juan Palma', 'DM', 51, 27],
       ['Jesús Campo', 'CB', 51, 18]
     ] },
    { n: 'Deportes Tolima', s: 'TOL', c1: '#FFE500', c2: '#E30613', str: 67, p: [
       ['Neto Volpi', 'GK', 67, 34], ['Anderson Angulo', 'RB', 69, 30], ['Jan Carlos Angulo', 'CB', 69, 25],
       ['Daniel Pedrozo', 'CB', 68, 22], ['Juan José Mera', 'LB', 66, 24], ['Cristian Trujillo', 'DM', 65, 28],
       ['Luis Sánchez', 'CM', 63, 26], ['Homer Martínez', 'AM', 66, 29], ['Jorge Hurtado', 'RW', 69, 23],
       ['Ever Valencia', 'ST', 68, 29], ['Luis Sandoval', 'LW', 67, 27], ['Gali José Balanta', 'GK', 62, 24],
       ['Cristian Arrieta', 'CB', 64, 30], ['Junior Hernández', 'LB', 65, 27], ['Víctor Manuel Reyes', 'CM', 62, 19],
       ['Jáder Valencia', 'RW', 64, 27], ['Sergio Aguayo', 'ST', 63, 24], ['Shean Paul Barbosa', 'CB', 66, 22],
       ['Miguel Ortega', 'GK', 60, 31], ['Jherson Mosquera', 'CB', 66, 27], ['Yordan Osorio', 'CB', 62, 32],
       ['Santiago Joven', 'CM', 63, 18]
     ] },
    { n: 'Deportivo Cali', s: 'CAL', c1: '#00A94F', c2: '#FFFFFF', str: 66, p: [
       ['Pedro Gallese', 'GK', 68, 36], ['José Moya', 'RB', 66, 34], ['Fernando Álvarez', 'CB', 60, 23],
       ['José Caldera', 'CB', 63, 24], ['Leyser Chaverra', 'LB', 63, 29], ['Gustavo Cuéllar', 'DM', 64, 34],
       ['Daniel Giraldo', 'CM', 64, 34], ['Emanuel Reynoso', 'AM', 73, 31], ['Juan Ignacio Dinenno', 'RW', 64, 32],
       ['Avilés Hurtado', 'ST', 65, 39], ['Steven Rodríguez', 'LW', 67, 28], ['Santiago Mondragón', 'GK', 59, 18],
       ['Keimer Sandoval', 'CB', 64, 21], ['Kalazán Suárez', 'LB', 61, 24], ['Ronaldo Pájaro', 'CM', 59, 24],
       ['Kevin Suarez', 'RW', 64, 18], ['Ronaldo Riascos', 'ST', 63, 18], ['Juan José Tello', 'CB', 59, 24],
       ['Alexis Manyoma', 'CM', 68, 23], ['Johan Martínez', 'CM', 61, 24], ['Eduard Bello', 'CM', 66, 31],
       ['Nicolás Benedetti', 'CM', 61, 29]
     ] },
    { n: 'Deportivo Pasto', s: 'PAS', c1: '#E30613', c2: '#0057B8', str: 63, p: [
       ['Ederson Cabezas', 'GK', 64, 26], ['Fainer Torijano', 'RB', 61, 38], ['Joyce Ossa', 'CB', 60, 28],
       ['Derik Osede', 'CB', 61, 33], ['Nicolás Gil', 'LB', 61, 29], ['Jonathan Perlaza', 'DM', 62, 25],
       ['Enrique Serje', 'CM', 64, 30], ['Diego Chávez', 'AM', 65, 29], ['Jorge Obregón', 'RW', 64, 29],
       ['Andrés Ibargüen', 'ST', 61, 34], ['Mayer Gil', 'LW', 62, 23], ['Geovanni Banguera', 'GK', 57, 31],
       ['Santiago Jiménez', 'CB', 60, 28], ['Heiler Moreno', 'LB', 61, 18], ['Harrinson Mancilla', 'CM', 59, 35],
       ['Joider Micolta', 'RW', 57, 24], ['Patrick Preciado', 'ST', 57, 21], ['Hervin Goyes', 'CB', 58, 20],
       ['Luis Marquinez', 'GK', 64, 19], ['Mateo Garavito', 'DM', 54, 26], ['Frank Martínez', 'CB', 56, 19],
       ['Julián Quiñones', 'CB', 77, 37]
     ] },
    { n: 'Deportivo Pereira', s: 'PER', c1: '#FFE500', c2: '#E30613', str: 62, p: [
       ['Jorge Martínez', 'GK', 65, 19], ['Sebastián Urrea', 'RB', 62, 24], ['Danilo Ortiz', 'CB', 60, 34],
       ['Santiago Aguilar', 'CB', 65, 28], ['Eber Moreno', 'LB', 61, 24], ['Julián Bazán', 'DM', 62, 21],
       ['Nicolás Rengifo', 'CM', 62, 22], ['Jorge Bermúdez', 'AM', 62, 25], ['Anderson Plata', 'RW', 60, 36],
       ['Marco Pérez', 'ST', 61, 36], ['Luis Palacios', 'LW', 62, 22], ['Juan Betancourth', 'GK', 61, 22],
       ['Richard Renteria', 'CB', 59, 30], ['Jordy Monroy', 'LB', 56, 30], ['Felipe Mosquera', 'CM', 60, 24],
       ['Manuel Díaz', 'RW', 57, 31], ['Andrés Calderón', 'ST', 57, 18], ['Walmer Pacheco', 'CB', 56, 31],
       ['Yimmy Gómez', 'GK', 56, 27], ['Fabio Delgado', 'CB', 56, 27], ['Tobías Bovone', 'CB', 58, 27],
       ['Sebastián Acosta', 'CM', 55, 32]
     ] },
    { n: 'Alianza Petrolera', s: 'ALP', c1: '#FFE500', c2: '#000000', str: 61, p: [
       ['Carlos Mosquera', 'GK', 60, 32], ['Efrain Navarro', 'RB', 61, 27], ['Jair Castillo', 'CB', 63, 29],
       ['Leonardo Saldaña', 'CB', 63, 37], ['Deiver Botero', 'LB', 63, 25], ['Santiago Orozco', 'DM', 59, 29],
       ['Freddy Flórez', 'CM', 62, 33], ['Sebastián Acosta', 'AM', 59, 32], ['Kevin Torres', 'RW', 62, 24],
       ['Jesús Muñoz', 'ST', 63, 26], ['Mayer Gil', 'LW', 61, 23], ['Jaime Mora', 'GK', 59, 29],
       ['Luciano Ospina', 'CB', 59, 35], ['Pedro Franco', 'LB', 59, 35], ['André Morales', 'CM', 55, 27],
       ['Ferlys García', 'RW', 55, 24], ['Diego Torres', 'ST', 60, 22], ['Alfonso Simarra', 'CB', 55, 26],
       ['Pier Grazziani', 'GK', 54, 32], ['Royscer Colpa', 'CM', 54, 31], ['Wilmar Arango', 'CM', 57, 28],
       ['Brayan Gómez', 'CM', 57, 23]
     ] },
    { n: 'Fortaleza CEIF', s: 'FOR', c1: '#FFE500', c2: '#000000', str: 59, p: [
       ['Williams Barlasina', 'GK', 60, 28], ['Andrés Copete', 'RB', 61, 26], ['David Ramírez', 'CB', 58, 24],
       ['Santiago Cabezas', 'CB', 58, 21], ['Yesid Díaz', 'LB', 59, 29], ['Sebastián Navarro', 'DM', 63, 26],
       ['Jhon Velásquez', 'CM', 56, 31], ['Andy Batioja', 'AM', 59, 20], ['Jhon Sebastián Palacios', 'RW', 61, 21],
       ['Ítalo Montaño', 'ST', 57, 27], ['Sebastián Herrera', 'LW', 60, 32], ['Michael Barragán', 'GK', 55, 22],
       ['Santiago Cuero', 'CB', 56, 22], ['Joan Cajares', 'LB', 57, 23], ['Leonardo Pico', 'CM', 58, 35],
       ['Franco Pulicastro', 'RW', 56, 27], ['Jhonier Blanco', 'ST', 58, 26], ['Harold Balanta', 'CB', 56, 28],
       ['Cristian Santander', 'GK', 54, 23], ['Juan Castillo', 'CB', 60, 24], ['Jonathan Marulanda', 'CB', 54, 31],
       ['Kevin Balanta', 'CM', 55, 22]
     ] },
    { n: 'Independiente Medellín', s: 'DIM', c1: '#E30613', c2: '#0057B8', str: 68, p: [
       ['Salvador Ichazo', 'GK', 67, 34], ['Kevin Mantilla', 'RB', 69, 23], ['Joaquín Varela', 'CB', 69, 28],
       ['Jhan Mena', 'CB', 69, 20], ['Frank Fabra', 'LB', 69, 35], ['Didier Moreno', 'DM', 67, 35],
       ['Léider Berrío', 'CM', 67, 28], ['Juan Fernando Quintero', 'AM', 67, 33], ['Jeison Medina', 'RW', 66, 31],
       ['Yony González', 'ST', 69, 32], ['John Montaño', 'LW', 67, 20], ['Simón Romero', 'GK', 62, 20],
       ['Alfonso Simarra', 'CB', 63, 26], ['Esneyder Mena', 'LB', 64, 29], ['Daniel Cataño', 'CM', 69, 34],
       ['Andrés Dávila', 'RW', 65, 19], ['Carlos Lucumí', 'ST', 63, 26], ['Hayen Palacios', 'CB', 62, 27],
       ['Eder Chaux', 'GK', 61, 35], ['Luis Escorcia', 'CB', 61, 22], ['Baldomero Perlaza', 'CM', 60, 34],
       ['Luis Maturana', 'CM', 59, 17]
     ] },
    { n: 'Junior de Barranquilla', s: 'JUN', c1: '#E30613', c2: '#FFFFFF', str: 68, p: [
       ['Mauro Silveira', 'GK', 67, 26], ['Jaime Acosta', 'RB', 65, 25], ['Edwin Herrera', 'CB', 65, 28],
       ['Daniel Rivera', 'CB', 67, 27], ['Carlos Pérez', 'LB', 67, 19], ['Dilan Villarreal', 'DM', 68, 18],
       ['Harold Rivera', 'CM', 68, 33], ['Yimmi Chará', 'AM', 68, 35], ['Jean Pestaña', 'RW', 66, 29],
       ['Guillermo Paiva', 'ST', 69, 29], ['Luis Muriel', 'LW', 71, 35], ['Jefersson Martínez', 'GK', 62, 33],
       ['Pablo Ortiz', 'CB', 58, 26], ['Yeison Suárez', 'LB', 64, 29], ['Juan David Ríos', 'CM', 66, 35],
       ['José Munive', 'RW', 63, 19], ['Francisco Fydriszewski', 'ST', 61, 33], ['Daniel Socarrás', 'CB', 65, 19],
       ['Danny Castro', 'GK', 62, 20], ['Jermein Peña', 'CB', 61, 27], ['Fabián Correa', 'CB', 59, 20],
       ['Kevin Pérez', 'CM', 62, 29]
     ] },
    { n: 'Jaguares de Córdoba', s: 'JAG', c1: '#FFE500', c2: '#000000', str: 59, p: [
       ['Diego Martínez', 'GK', 59, 37], ['Jerson Malagón', 'RB', 62, 33], ['Juan Franco', 'CB', 57, 24],
       ['Jonathan Lovera', 'CB', 60, 21], ['Edwin Martinez', 'LB', 57, 22], ['Andrés Alfonso', 'DM', 56, 21],
       ['Royscer Colpa', 'CM', 60, 31], ['Duvan Rodríguez', 'AM', 59, 30], ['Wilfrido de la Rosa', 'RW', 60, 27],
       ['Johar Mejía', 'ST', 56, 26], ['Andrés Rentería', 'LW', 60, 33], ['Franklin Mosquera', 'GK', 54, 27],
       ['Luis Jiménez', 'CB', 53, 29], ['Nicolás Giraldo', 'LB', 52, 33], ['Cristian Álvarez', 'CM', 53, 34],
       ['Darwin López', 'RW', 55, 34], ['Santiago Cubides', 'ST', 52, 26], ['Juan Arcila', 'CB', 52, 26],
       ['Carlos Henao', 'CB', 63, 38], ['Yan Mosquera', 'CB', 52, 31], ['Johan Hinestroza', 'CM', 50, 24],
       ['Jader Maza', 'CM', 50, 32]
     ] },
    { n: 'Llaneros', s: 'LLA', c1: '#00A94F', c2: '#FFE500', str: 58, p: [
       ['Juan Loaiza', 'GK', 59, 24], ['Howell Mena', 'RB', 59, 25], ['Victor Vidal', 'CB', 56, 19],
       ['Juan Pertuz', 'CB', 59, 22], ['Jhojan Escobar', 'LB', 59, 26], ['Eyder Restrepo', 'DM', 57, 27],
       ['Marlon Ricardo Sierra', 'CM', 59, 32], ['Juan José Ramírez', 'AM', 59, 24], ['Luis Miranda', 'RW', 56, 29],
       ['Manuel Barreiro', 'ST', 58, 25], ['Luis Marimón', 'LW', 60, 22], ['Roameth Romaña', 'GK', 52, 29],
       ['Francisco Meza', 'CB', 52, 35], ['Alejandro Moralez', 'LB', 55, 25], ['Néider Ospina', 'CM', 54, 23],
       ['Yorleys Mena', 'RW', 52, 35], ['Kevin Rincón', 'ST', 53, 20], ['Dennis Quintero', 'CB', 55, 29],
       ['Leider Riascos', 'DM', 49, 26], ['Emilio Pardo', 'CB', 51, 29], ['Jimmy Medranda', 'CB', 49, 32],
       ['Daniel Quiñones', 'CB', 51, 27]
     ] },
    { n: 'Millonarios', s: 'MIL', c1: '#0057B8', c2: '#FFFFFF', str: 69, p: [
       ['Javier Burrai', 'GK', 69, 34], ['Carlos Sarabia', 'RB', 69, 28], ['Samuel Martín', 'CB', 71, 32],
       ['Jaine Barreiro', 'CB', 70, 22], ['Darwin Cortés', 'LB', 67, 20], ['Dewar Victoria', 'DM', 70, 21],
       ['Daniel Ruiz', 'CM', 67, 31], ['Francisco Chaverra', 'AM', 69, 23], ['Andrey Estupiñán', 'RW', 70, 24],
       ['Leonardo Castro', 'ST', 71, 30], ['Rodrigo Contreras', 'LW', 70, 29], ['James Aguirre', 'GK', 65, 32],
       ['Sergio Mosquera', 'CB', 66, 22], ['Jorge Arias', 'LB', 68, 25], ['David Mackalister Silva', 'CM', 65, 23],
       ['Santiago Giordana', 'RW', 66, 29], ['Sebastián Mosquera', 'ST', 68, 20], ['Danovis Banguero', 'CB', 66, 31],
       ['Rodrigo Ureña', 'CM', 68, 32], ['Mateo García', 'CM', 67, 26], ['Juan Carlos Pereira', 'CM', 64, 31],
       ['Sebastián Valencia', 'CB', 64, 22]
     ] },
    { n: 'Once Caldas', s: 'ONC', c1: '#FFFFFF', c2: '#000000', str: 65, p: [
       ['José Aguirre', 'GK', 67, 33], ['Juan Cuesta', 'RB', 65, 27], ['Jáider Riquett', 'CB', 64, 35],
       ['Jerson Malagón', 'CB', 64, 32], ['Kevin Tamayo', 'LB', 53, 25], ['Iván Rojas', 'DM', 66, 27],
       ['Mateo García', 'CM', 66, 26], ['Alejandro García', 'AM', 64, 24], ['Michael Barrios', 'RW', 67, 34],
       ['Dayro Moreno', 'ST', 71, 39], ['Mateo Zuleta', 'LW', 64, 23], ['Joan Parra', 'GK', 62, 25],
       ['Jorge Cardona', 'CB', 64, 26], ['Juan Castaño', 'CB', 62, 26], ['Juan Díaz', 'CM', 62, 24],
       ['Déinner Quiñones', 'RW', 64, 29], ['Luis Palacios', 'RW', 63, 24], ['Luis Sánchez', 'AM', 62, 24]
     ] },
    { n: 'Santa Fe', s: 'SFE', c1: '#E30613', c2: '#FFFFFF', str: 69, p: [
       ['Andrés Mosquera', 'GK', 70, 35], ['Juan Quintero', 'RB', 78, 31], ['Víctor Moreno', 'CB', 71, 32],
       ['Mateo Puerta', 'CB', 71, 29], ['Helibelton Palacios', 'LB', 73, 33], ['Kilian Toscano', 'DM', 63, 22],
       ['Jhojan Torres', 'CM', 72, 23], ['Franco Fagúndez', 'AM', 61, 26], ['Omar Fernández', 'RW', 70, 33],
       ['Hugo Rodallega', 'ST', 71, 41], ['Luis Palacios', 'LW', 68, 25], ['Weimar Asprilla', 'GK', 69, 27],
       ['Iván Scarpeta', 'DM', 67, 30], ['Emanuel Olivera', 'LB', 70, 36], ['Alexis Zapata', 'CM', 68, 31],
       ['Nahuel Bustos', 'RW', 74, 28], ['Emerson Rodríguez', 'ST', 71, 26], ['Jeison Angulo', 'CB', 71, 30],
       ['Emiliano Contreras', 'GK', 64, 19], ['Juan Espitia', 'GK', 67, 26], ['Carlos Nemocón', 'GK', 64, 18],
       ['Jhoyler Andrades', 'GK', 67, 22]
     ] },
    { n: 'Internacional de Bogotá', s: 'INB', c1: '#E30613', c2: '#0057B8', str: 64, p: [
       ['Wuilker Fariñez', 'GK', 63, 28], ['Carlos Vivas', 'RB', 64, 24], ['Mateo Rodas', 'CB', 64, 28],
       ['Miguel Amaya', 'CB', 63, 22], ['Miguel Pernía', 'LB', 69, 26], ['Larry Vásquez', 'DM', 64, 34],
       ['Dewar Victoria', 'CM', 61, 25], ['Facundo Boné', 'AM', 65, 31], ['Fabricio Sanguinetti', 'RW', 61, 26],
       ['Diego Duarte', 'ST', 67, 24], ['Cristian Dájome', 'LW', 60, 32], ['Juan Carrasco', 'GK', 61, 19],
       ['Yulián Gómez', 'CB', 57, 28], ['Joan Castro', 'LB', 70, 29], ['Mateo Santamaría', 'CM', 60, 21],
       ['Yojan Garcés', 'RW', 62, 20], ['Emilio Gutiérrez', 'ST', 60, 20], ['Ronaldo Julio', 'CB', 60, 21],
       ['Simón Zapata', 'GK', 55, 20], ['Kevin Cataño', 'GK', 55, 23], ['Agustín Irazoque', 'CB', 65, 27],
       ['Dannovi Quiñones', 'CM', 58, 25]
     ] }
  ]
};

window.LEAGUES.chile = {
  id: 'chile', name: 'Primera División de Chile', country: 'Chile', ucl: 2, rel: 2,
  pool: 'latam', squadSize: 17, teams: [
    { n: 'Audax Italiano', s: 'AUD', c1: '#00A94F', c2: '#FFFFFF', str: 64, p: [
       ['Tomás Ahumada', 'GK', 66, 25], ['Martín González', 'RB', 58, 19], ['Daniel Piña', 'CB', 63, 25],
       ['Cristóbal Muñoz', 'CB', 65, 27], ['Enzo Ferrario', 'LB', 65, 26], ['Vicente Zenteno', 'DM', 63, 19],
       ['Mario Sandoval', 'CM', 63, 19], ['Marco Collao', 'AM', 65, 28], ['Paolo Guajardo', 'RW', 63, 23],
       ['Diego Coelho', 'ST', 65, 31], ['Rodrigo Cabral', 'LW', 65, 26], ['Cristóbal Piña', 'GK', 59, 19],
       ['Diego Monreal', 'CB', 58, 22], ['Tomás Cayuqueo', 'LB', 59, 20], ['Favian Loyola', 'CM', 51, 21],
       ['Franco Troyansky', 'RW', 60, 29], ['Giovani Chiaverano', 'ST', 53, 21], ['Óliver Rojas', 'CB', 62, 26],
       ['Pedro Garrido', 'GK', 56, 23], ['Martín Ballesteros', 'GK', 58, 24], ['Martín Jiménez', 'DM', 56, 18],
       ['Marcelo Ortiz', 'CB', 62, 32]
     ] },
    { n: 'Cobresal', s: 'COB', c1: '#F58220', c2: '#FFFFFF', str: 63, p: [
       ['Jean Cerda', 'GK', 64, 23], ['Rodrigo Sandoval', 'RB', 62, 25], ['Antonio Castillo', 'CB', 64, 28],
       ['Franco Bechtholdt', 'CB', 62, 33], ['Juan Fuentes', 'LB', 61, 31], ['Esteban Valencia', 'DM', 66, 27],
       ['Bryan Carvallo', 'CM', 62, 30], ['Benjamín Valenzuela', 'AM', 64, 21], ['César Yanis', 'RW', 62, 30],
       ['Steffan Pino', 'ST', 63, 32], ['Yair Guzmán', 'LW', 63, 18], ['Alejandro Santander', 'GK', 58, 24],
       ['Christian Moreno', 'DM', 57, 30], ['José Tiznado', 'LB', 61, 32], ['Milan Roki', 'CM', 58, 19],
       ['Julián Brea', 'RW', 61, 27], ['Renato Huerta', 'ST', 61, 22], ['Aaron Astudillo', 'CB', 57, 26],
       ['Matías Vásquez', 'GK', 55, 19], ['Matías Olguín', 'GK', 56, 30], ['Aníbal Gajardo', 'CB', 57, 21],
       ['Guillermo Pacheco', 'CB', 59, 37]
     ] },
    { n: 'Colo-Colo', s: 'COL', c1: '#FFFFFF', c2: '#000000', str: 70, p: [
       ['Fernando De Paul', 'GK', 69, 34], ['Mauricio Isla', 'RB', 69, 37], ['Sebastián Vegas', 'CB', 71, 28],
       ['Alan Saldivia', 'CB', 70, 23], ['Erick Wiemberg', 'LB', 66, 31], ['Vicente Pizarro', 'DM', 70, 22],
       ['Arturo Vidal', 'CM', 71, 38], ['Claudio Aquino', 'AM', 75, 33], ['Marcos Bolados', 'RW', 64, 29],
       ['Javier Correa', 'ST', 70, 32], ['Lucas Cepeda', 'LW', 70, 22], ['Eduardo Villanueva', 'GK', 58, 20],
       ['Emiliano Amor', 'CB', 68, 30], ['Cristián Riquelme', 'LB', 60, 21], ['Felipe Méndez', 'DM', 69, 25],
       ['Antonio Oroz', 'RW', 64, 22], ['Salomón Rodríguez', 'ST', 65, 25], ['Esteban Pavez', 'DM', 67, 35]
     ] },
    { n: 'Coquimbo Unido', s: 'COQ', c1: '#FFE500', c2: '#000000', str: 66, p: [
       ['Gonzalo Flores', 'GK', 66, 26], ['Benjamín Gazzolo', 'RB', 68, 29], ['Manuel Fernández', 'DM', 61, 37],
       ['Elvis Hernández', 'CB', 66, 27], ['Dylan Escobar', 'LB', 63, 26], ['Sebastián Galani', 'DM', 66, 29],
       ['Alejandro Camargo', 'CM', 69, 37], ['Guido Vadalá', 'AM', 66, 29], ['Joaquín Rojas', 'RW', 65, 16],
       ['Nicolás Johansen', 'ST', 69, 27], ['Alejandro Azócar', 'LW', 69, 26], ['Diego Sánchez', 'GK', 65, 39],
       ['Juan Cornejo', 'CB', 64, 36], ['Francisco Salinas', 'LB', 65, 27], ['Salvador Cordero', 'CM', 62, 30],
       ['Lucas Pratto', 'RW', 64, 38], ['Cristián Zavala', 'ST', 63, 27], ['Joshua Arancibia', 'CB', 66, 22],
       ['Cristóbal Dorador', 'GK', 60, 20], ['Vicente Villegas', 'GK', 59, 17], ['Lukas Soza', 'CB', 62, 28],
       ['Sebastián Cabrera', 'CB', 62, 28]
     ] },
    { n: 'Deportes Concepción', s: 'DCO', c1: '#5B2C83', c2: '#FFFFFF', str: 58, p: [
       ['César Dutra', 'GK', 57, 34], ['Martín Ramírez', 'RB', 58, 21], ['Diego Carrasco', 'CB', 59, 31],
       ['Ariel Cáceres', 'CB', 59, 27], ['Brayan Véjar', 'LB', 61, 31], ['Fernando Martínez', 'DM', 56, 32],
       ['Sebastián Martínez', 'CM', 58, 33], ['Mario Sandoval', 'AM', 59, 35], ['Fernando Romero', 'RW', 58, 26],
       ['Carlos Escobar', 'ST', 56, 37], ['Joaquín Montecinos', 'LW', 58, 31], ['Nery Veloso', 'GK', 57, 39],
       ['Norman Rodríguez', 'CB', 61, 28], ['Cristián Riquelme', 'LB', 56, 23], ['Yonathan Rodríguez', 'CM', 52, 33],
       ['Aldrix Jara', 'RW', 56, 26], ['Matías Cavalleri', 'ST', 54, 28], ['Mateo González', 'DM', 48, 21],
       ['Nicolás Araya', 'GK', 52, 27], ['Benjamín Sepúlveda', 'GK', 51, 19], ['Dilan Varas', 'CB', 53, 21],
       ['Fausto Grillo', 'CB', 64, 33]
     ] },
    { n: 'Deportes Limache', s: 'LIM', c1: '#00A94F', c2: '#FFFFFF', str: 59, p: [
       ['Matías Bórquez', 'GK', 57, 28], ['Augusto Aguirre', 'RB', 57, 27], ['Benjamín Molina', 'CB', 57, 20],
       ['Marcelo Flores', 'CB', 57, 25], ['Axel Alfonzo', 'LB', 54, 22], ['Vicente Cárcamo', 'DM', 59, 21],
       ['César Fuentes', 'CM', 61, 33], ['Hugo Martínez', 'AM', 63, 26], ['Gonzalo Sosa', 'RW', 60, 37],
       ['Vicente Álvarez', 'ST', 58, 20], ['Jean Meneses', 'LW', 58, 33], ['Martin Smith', 'GK', 54, 17],
       ['Carlos Morales', 'CB', 54, 26], ['Javier Rojas', 'LB', 54, 21], ['Danilo Catalán', 'CM', 56, 29],
       ['Daniel Castro', 'RW', 54, 32], ['Marcos Arturia', 'ST', 59, 28], ['Yerko González', 'CB', 54, 25],
       ['Claudio González', 'GK', 52, 36], ['Alfonso Parot', 'CB', 53, 37], ['Dylan Escobar', 'CB', 60, 26],
       ['Flavio Moya', 'CM', 52, 21]
     ] },
    { n: 'Deportes La Serena', s: 'SER', c1: '#E30613', c2: '#FFE500', str: 59, p: [
       ['Federico Lanzillota', 'GK', 57, 34], ['Lucas Alarcón', 'RB', 59, 26], ['Joaquín Gutiérrez', 'CB', 58, 24],
       ['Yahir Salazar', 'CB', 59, 21], ['Matías Cortés', 'LB', 56, 23], ['Francis Mac Allister', 'DM', 62, 31],
       ['Sebastián Díaz', 'CM', 57, 30], ['Gonzalo Escalante', 'AM', 59, 33], ['Gonzalo Figueroa', 'RW', 60, 26],
       ['Alexander Oroz', 'ST', 59, 24], ['Ángelo Henríquez', 'LW', 60, 32], ['Eryin Sanhueza', 'GK', 52, 30],
       ['Bruno Gutiérrez', 'CB', 53, 24], ['Fernando Dinamarca', 'LB', 51, 23], ['Felipe Chamorro', 'CM', 52, 25],
       ['Jeisson Vargas', 'RW', 52, 29], ['Diego Rubio', 'ST', 61, 33], ['Matías Pinto', 'CB', 54, 22],
       ['José Tapia', 'GK', 53, 24], ['Ignacio Sáez', 'GK', 51, 21], ['Martín Castillo', 'DM', 50, 21],
       ['Rafael Delgado', 'CB', 63, 36]
     ] },
    { n: 'Everton de Viña', s: 'EVE', c1: '#0057B8', c2: '#FFE500', str: 62, p: [
       ['Ignacio González', 'GK', 62, 37], ['Óscar Opazo', 'RB', 61, 36], ['Hugo Magallanes', 'CB', 61, 29],
       ['Ramiro González', 'CB', 61, 36], ['Nicolás Baeza', 'LB', 62, 29], ['Gustavo Charrupí', 'DM', 62, 22],
       ['Joaquín Moya', 'CM', 61, 33], ['Andrés Arroyo', 'AM', 62, 24], ['Julián Alfaro', 'RW', 64, 25],
       ['Alan Medina', 'ST', 63, 28], ['Emiliano Ramos', 'LW', 63, 21], ['Isaac Esquenazi', 'GK', 57, 22],
       ['Vicente Fernández', 'CB', 59, 27], ['Cristopher Barrera', 'LB', 56, 28], ['Josué Ovalle', 'CM', 57, 26],
       ['Santiago Londoño', 'RW', 58, 18], ['José Hernández', 'ST', 59, 19], ['Vicente Vega', 'CB', 59, 22],
       ['Esteban Kirkman', 'GK', 55, 22], ['Diego Oyarzún', 'CB', 55, 33], ['Byron Navarro', 'DM', 53, 22],
       ['Valentín Vidal', 'CB', 59, 22]
     ] },
    { n: 'Huachipato', s: 'HUA', c1: '#0057B8', c2: '#000000', str: 64, p: [
       ['Sebastián Mella', 'GK', 65, 21], ['Guillermo Guaiquil', 'RB', 65, 23], ['Maximiliano Osorio', 'CB', 65, 21],
       ['Benjamín Mellado', 'CB', 66, 23], ['José Castro', 'LB', 66, 25], ['Claudio Sepúlveda', 'DM', 65, 34],
       ['Ezequiel Cañete', 'CM', 62, 27], ['Carlos Herrera', 'AM', 63, 26], ['Mario Briceño', 'RW', 63, 30],
       ['Lionel Altamirano', 'ST', 61, 34], ['Juan Ignacio Figueroa', 'LW', 63, 23], ['Christian Bravo', 'GK', 57, 20],
       ['Rafael Caroca', 'CB', 61, 37], ['Nicolás Vargas', 'LB', 61, 33], ['Nicolás Cárcamo', 'CM', 60, 21],
       ['Maximiliano Rodríguez', 'RW', 60, 26], ['Luciano Arriagada', 'ST', 59, 24], ['Renzo Malanca', 'CB', 59, 23],
       ['Rodrigo Odriozola', 'GK', 57, 38], ['Ignacio Cruzat', 'GK', 57, 19], ['Cristian Toro', 'CB', 58, 26],
       ['Lucas Velásquez', 'DM', 56, 20]
     ] },
    { n: 'Ñublense', s: 'NUB', c1: '#E30613', c2: '#FFFFFF', str: 63, p: [
       ['Nicola Pérez', 'GK', 65, 36], ['Carlos Salomón', 'RB', 63, 26], ['Osvaldo Bosso', 'CB', 62, 33],
       ['Felipe Campos', 'CB', 64, 33], ['Pablo Calderón', 'LB', 64, 28], ['Gabriel Graciani', 'DM', 63, 33],
       ['Matías Plaza', 'CM', 62, 25], ['Pablo Toledo', 'AM', 65, 20], ['Fernando Ovelar', 'RW', 63, 22],
       ['Franco Rami', 'ST', 63, 23], ['Lucas Molina', 'LW', 62, 20], ['Claudio Chandía', 'GK', 58, 19],
       ['Jovany Campusano', 'CB', 59, 33], ['Sebastián Valencia', 'LB', 59, 26], ['Diego Céspedes', 'CM', 58, 28],
       ['Ignacio Jeraldino', 'RW', 63, 31], ['Alex Valdés', 'ST', 59, 24], ['Diego Sanhueza', 'DM', 58, 24],
       ['Hernán Muñoz', 'GK', 59, 38], ['Joaquín Ríos', 'GK', 58, 19], ['Joaquín González', 'CB', 60, 25],
       ['Vicente Guzmán', 'CB', 58, 18]
     ] },
    { n: "O'Higgins", s: 'OHI', c1: '#6CACE4', c2: '#FFFFFF', str: 65, p: [
       ['Jorge Peña', 'GK', 67, 26], ['Cristian Morales', 'RB', 66, 20], ['Felipe Faúndez', 'CB', 63, 20],
       ['Adolfo Neira', 'CB', 64, 20], ['Luis Pavez', 'LB', 66, 31], ['Gabriel Pinto', 'DM', 67, 21],
       ['Santiago Toloza', 'CM', 67, 24], ['Felipe Ogaz', 'AM', 63, 23], ['Arnaldo Castillo', 'RW', 66, 29],
       ['Esteban Moreira', 'ST', 65, 24], ['Javier Gutiérrez', 'LW', 63, 18], ['Diego Carreño', 'GK', 63, 24],
       ['Benjamín Rojas', 'CB', 61, 25], ['Tomás Avilés', 'LB', 66, 22], ['Bryan Rabello', 'CM', 63, 32],
       ['David Fernández', 'RW', 61, 20], ['Ignacio Schor', 'ST', 67, 26], ['Leandro Díaz', 'CB', 70, 27],
       ['Omar Carabalí', 'GK', 58, 29], ['José Tomás Parraguez', 'GK', 58, 19], ['Nicolás Garrido', 'DM', 60, 24],
       ['Alan Robledo', 'CB', 61, 28]
     ] },
    { n: 'Palestino', s: 'PAL', c1: '#00A94F', c2: '#E30613', str: 66, p: [
       ['Sebastián Pérez', 'GK', 66, 34], ['José Bizama', 'RB', 63, 31], ['Fernando Meza', 'CB', 69, 35],
       ['Cristian Suárez', 'CB', 69, 38], ['Dilan Zúñiga', 'LB', 65, 28], ['Julián Fernández', 'DM', 66, 30],
       ['Ariel Martínez', 'CM', 63, 31], ['Joe Abrigo', 'AM', 69, 30], ['Bryan Carrasco', 'RW', 68, 34],
       ['Ronnie Fernández', 'ST', 66, 34], ['Jonathan Benítez', 'LW', 66, 33], ['Dixon Contreras', 'GK', 54, 23],
       ['Alejandro Ceza', 'CB', 62, 22], ['Jason León', 'LB', 58, 25], ['Nicolás Meza', 'CM', 57, 23],
       ['Facundo Castro', 'AM', 64, 30], ['Junior Marabel', 'ST', 66, 27], ['Junior Arias', 'ST', 65, 32]
     ] },
    { n: 'Universidad de Concepción', s: 'UDC', c1: '#FFE500', c2: '#0057B8', str: 62, p: [
       ['Jorge Broun', 'GK', 68, 40], ['Esteban Páez', 'RB', 58, 17], ['Miguel Barbieri', 'CB', 64, 33],
       ['Osvaldo González', 'CB', 62, 42], ['David Retamal', 'LB', 59, 23], ['Facundo Mater', 'DM', 64, 28],
       ['Jeison Fuentealba', 'CM', 61, 23], ['Pablo Parra', 'AM', 62, 32], ['Iam González', 'RW', 61, 22],
       ['Daniel Barrea', 'ST', 63, 25], ['Cecilio Waterman', 'LW', 57, 35], ['Diego Matamala', 'GK', 55, 24],
       ['Bastián Ubal', 'CB', 57, 24], ['Antonio Díaz', 'LB', 56, 26], ['Bryan Ogaz', 'CM', 53, 26],
       ['Harol Salgado', 'RW', 55, 26], ['Cristóbal Zambrano', 'ST', 54, 18], ['Yerco Oyanedel', 'CB', 56, 26],
       ['José Sanhueza', 'GK', 51, 25], ['Moisés González', 'DM', 53, 26], ['Jorge Espejo', 'CB', 53, 26],
       ['Patricio Romero', 'CB', 53, 21]
     ] },
    { n: 'Unión La Calera', s: 'CAL', c1: '#E30613', c2: '#FFFFFF', str: 61, p: [
       ['Nicolás Avellaneda', 'GK', 62, 33], ['Yonathan Andía', 'RB', 63, 34], ['Nicolás Palma', 'CB', 60, 25],
       ['Cristián Gutiérrez', 'CB', 65, 29], ['Vicente Lavín', 'LB', 60, 23], ['Camilo Moya', 'DM', 61, 28],
       ['Yerko Leiva', 'CM', 60, 28], ['Joan Cruz', 'AM', 60, 23], ['Bayron Oyarzo', 'RW', 61, 31],
       ['Kevin Méndez', 'ST', 60, 30], ['Martín Hiriart', 'LW', 60, 21], ['Nelson Espinoza', 'GK', 56, 31],
       ['Juan Salomoni', 'CB', 57, 29], ['Christopher Díaz', 'LB', 57, 31], ['Rodrigo Pérez', 'CM', 56, 30],
       ['Axel Encinas', 'RW', 56, 22], ['Matías Campos L.', 'ST', 57, 35], ['Michael Maturana', 'CB', 56, 23],
       ['Benjamín Astudillo', 'GK', 53, 20], ['Rodrigo Cáseres', 'CB', 59, 29], ['Cristóbal López', 'CM', 57, 21],
       ['Joaquín Soto', 'CM', 54, 19]
     ] },
    { n: 'Universidad Católica', s: 'UCA', c1: '#FFFFFF', c2: '#0057B8', str: 69, p: [
       ['Vicente Bernedo', 'GK', 65, 24], ['Dylan Escobar', 'RB', 67, 24], ['Gary Medel', 'CB', 72, 37],
       ['Branco Ampuero', 'CB', 72, 31], ['Esteban Mena', 'LB', 72, 36], ['Jhojan Valencia', 'DM', 68, 28],
       ['Fernando Zuqui', 'CM', 73, 33], ['Leenhan Romero', 'AM', 60, 18], ['Eduard Bello', 'RW', 71, 29],
       ['Fernando Zampedri', 'ST', 75, 37], ['Cristian Cuevas', 'LW', 70, 30], ['Darío Melo', 'GK', 63, 31],
       ['Daniel González', 'CB', 70, 23], ['José Salas', 'CM', 57, 17], ['Alfred Canales', 'CM', 68, 25],
       ['Clemente Montes', 'LW', 69, 24], ['Diego Valencia', 'ST', 68, 25], ['Valber Huerta', 'CB', 68, 31]
     ] },
    { n: 'Universidad de Chile', s: 'UCH', c1: '#0057B8', c2: '#E30613', str: 69, p: [
       ['Gabriel Castellón', 'GK', 71, 31], ['Fabián Hormazábal', 'RB', 68, 29], ['Matías Zaldivia', 'CB', 70, 34],
       ['Franco Calderón', 'CB', 70, 27], ['Matías Sepúlveda', 'LB', 68, 26], ['Marcelo Díaz', 'DM', 70, 38],
       ['Sebastián Rodríguez', 'CM', 74, 32], ['Javier Altamirano', 'AM', 70, 25], ['Maximiliano Guerrero', 'RW', 66, 25],
       ['Leandro Fernández', 'ST', 72, 34], ['Ignacio Vásquez', 'LW', 62, 19], ['Cristopher Toselli', 'GK', 69, 37],
       ['Nicolás Ramírez', 'CB', 67, 28], ['Alejandro Diaz', 'LB', 64, 25], ['Charles Aránguiz', 'CM', 73, 36],
       ['Lucas Di Yorio', 'ST', 72, 28], ['Rodrigo Contreras', 'ST', 72, 29], ['Israel Poblete', 'CM', 67, 30]
     ] }
  ]
};

window.LEAGUES.ecuador = {
  id: 'ecuador', name: 'LigaPro Ecuador', country: 'Ecuador', ucl: 2, rel: 2,
  pool: 'latam', squadSize: 17, teams: [
    { n: 'Aucas', s: 'AUC', c1: '#E30613', c2: '#FFE500', str: 64, p: [
       ['Iván Chaves', 'GK', 64, 27], ['Santiago Morales', 'RB', 60, 25], ['Mateo Burdisso', 'CB', 63, 24],
       ['Luis Gustavino', 'CB', 66, 27], ['Byron Carabalí', 'LB', 64, 23], ['Thiago Serpa', 'DM', 62, 27],
       ['Agostino Spina', 'CM', 65, 25], ['José Andrade', 'AM', 65, 33], ['Rafael Monti', 'RW', 66, 27],
       ['Ayrton Preciado', 'ST', 65, 32], ['Romario Bolaños', 'LW', 63, 32], ['Jefferson Cabezas', 'GK', 61, 22],
       ['Álex Zova', 'CB', 57, 20], ['Sleider Mancilla', 'LB', 61, 19], ['Stiven Tapiero', 'CM', 61, 35],
       ['Cristhoper Zambrano', 'RW', 56, 22], ['Luis Arroyo', 'ST', 59, 30], ['Maverick Vera', 'CB', 59, 19],
       ['Hamilton Piedra', 'GK', 55, 33], ['Alan García', 'DM', 55, 35], ['Erick Klinger', 'CB', 57, 19],
       ['Giovanny Espinoza', 'CB', 55, 19]
     ] },
    { n: 'Barcelona SC', s: 'BSC', c1: '#FFE500', c2: '#000000', str: 68, p: [
       ['Ignacio De Arruabarrena', 'GK', 72, 28], ['Byron Castillo', 'RB', 68, 29], ['Xavier Arreaga', 'CB', 68, 30],
       ['Gustavo Vallecilla', 'CB', 67, 26], ['Aníbal Chalá', 'LB', 67, 29], ['Leonai', 'DM', 67, 30],
       ['Joaquín Valiente', 'AM', 67, 24], ['Gabriel Cortez', 'AM', 69, 29], ['Jandry Gómez', 'RW', 59, 18],
       ['Octavio Rivero', 'ST', 71, 33], ['Janner Corozo', 'LW', 70, 29], ['José Contreras', 'GK', 71, 30],
       ['Gastón Campi', 'DM', 66, 34], ['Mario Pineida', 'LB', 66, 32], ['Dixon Arroyo', 'DM', 66, 33],
       ['Braian Oyola', 'LW', 68, 29], ['Felipe Caicedo', 'ST', 68, 36], ['Bryan Carabalí', 'RB', 67, 27]
     ] },
    { n: 'Delfín', s: 'DEL', c1: '#0057B8', c2: '#FFFFFF', str: 64, p: [
       ['Juan Ortiz', 'GK', 65, 33], ['Darío Aimar', 'RB', 66, 31], ['Anthony Álvarez', 'CB', 63, 25],
       ['Enzo Rubio', 'CB', 62, 23], ['Iván Molano', 'LB', 66, 19], ['Ober Medina', 'DM', 63, 22],
       ['Klíver Moreno', 'CM', 62, 26], ['Danny Luna', 'AM', 65, 35], ['Franco Ayunta', 'RW', 66, 24],
       ['Erik Yépez', 'ST', 64, 33], ['Eber Caicedo', 'LW', 66, 35], ['Benjamín Cárdenas', 'GK', 58, 27],
       ['Fabricio Arteaga', 'CB', 59, 23], ['Anthony Bedoya', 'LB', 61, 30], ['Franco Perinciolo', 'CM', 61, 29],
       ['Leao Tenorio', 'RW', 60, 18], ['Luis Castillo', 'ST', 59, 27], ['Ayrton Cisneros', 'CB', 63, 29],
       ['Brian Heras', 'GK', 60, 31], ['José Cárdenas', 'GK', 57, 31], ['Thiago Ozaeta', 'CB', 60, 19],
       ['Carlos Banguera', 'DM', 57, 20]
     ] },
    { n: 'Deportivo Cuenca', s: 'CUE', c1: '#E30613', c2: '#FFFFFF', str: 63, p: [
       ['Facundo Ferrero', 'GK', 65, 30], ['Ignacio Mosquera', 'CM', 55, 22], ['Gian Nardelli', 'CB', 65, 26],
       ['Santiago Postel', 'CB', 65, 23], ['Mateo Piedra', 'LB', 63, 26], ['David Noboa', 'DM', 62, 31],
       ['Lucas Mancinelli', 'CM', 64, 37], ['Édison Vega', 'AM', 65, 36], ['Romario Ibarra', 'RW', 65, 32],
       ['Germán Rivero', 'ST', 63, 34], ['Mathías Solís', 'LW', 63, 22], ['Ethan Minda', 'GK', 57, 22],
       ['Eddie Guevara', 'CB', 60, 36], ['Andrés López', 'LB', 58, 33], ['Julio Valencia', 'CM', 62, 19],
       ['Melvin Díaz', 'RW', 58, 25], ['Matías Klimowicz', 'ST', 52, 19], ['Patricio Boolsen', 'CB', 61, 28],
       ['Josué Méndez', 'GK', 57, 20], ['Erick Armijos', 'CB', 56, 21], ['Yeltzin Erique', 'CB', 58, 23],
       ['Félix Angüisaca', 'CB', 57, 22]
     ] },
    { n: 'Guayaquil City', s: 'GYC', c1: '#0057B8', c2: '#FFFFFF', str: 62, p: [
       ['Gilmar Napa', 'GK', 62, 23], ['Yardely Rodríguez', 'RB', 60, 32], ['Erick Ladines', 'CB', 61, 24],
       ['Roger Arias', 'CB', 62, 26], ['Jonathan Ordóñez', 'LB', 61, 25], ['Dixon Arroyo', 'DM', 65, 34],
       ['Kevin Sambonino', 'CM', 63, 23], ['Andrew Draper', 'AM', 62, 25], ['Stalin Caicedo', 'RW', 62, 27],
       ['Manu Palma', 'ST', 63, 28], ['Edinson Mero', 'LW', 63, 28], ['Rodrigo Perea', 'GK', 57, 36],
       ['Junior Ayoví', 'CB', 56, 25], ['Joshué Quiñónez', 'LB', 56, 25], ['Santiago Laurino', 'CM', 56, 23],
       ['Anderson Naula', 'RW', 58, 28], ['Diego Dorregaray', 'ST', 57, 34], ['Romario Caicedo', 'CB', 59, 36],
       ['Eved Sánchez', 'GK', 53, 23], ['Jorge Pinos', 'GK', 57, 37], ['Esnáider Cabezas', 'CB', 53, 27],
       ['Janus Vivar', 'CM', 55, 28]
     ] },
    { n: 'Emelec', s: 'EME', c1: '#0057B8', c2: '#FFFFFF', str: 65, p: [
       ['Mario Valero', 'GK', 68, 31], ['Aníbal Leguizamón', 'RB', 63, 34], ['Ignacio Guerrico', 'CB', 68, 28],
       ['Estalin Segura', 'CB', 67, 26], ['Luis Gómez', 'LB', 67, 26], ['Ángelo Mina', 'DM', 63, 27],
       ['Víctor Griffith', 'CM', 64, 26], ['Gonzalo Nápoli', 'AM', 68, 26], ['Luca Klimowicz', 'RW', 57, 22],
       ['Ronie Carrillo', 'ST', 67, 30], ['Francisco Pizzini', 'LW', 67, 33], ['Pedro Ortiz', 'GK', 63, 36],
       ['Ibrain Cuero', 'CB', 62, 21], ['Luis Fernando León', 'LB', 62, 33], ['Luis Fragozo', 'CM', 60, 16],
       ['Teodoro Arce', 'RW', 62, 26], ['Jaime Ayoví', 'ST', 62, 38], ['Stalin Valencia', 'CB', 62, 23],
       ['Ezequiel Castañeda', 'GK', 61, 22], ['Eduardo Bores', 'GK', 58, 24], ['Jeampaul Herrera', 'CB', 61, 22],
       ['Eder Arroyo', 'DM', 59, 20]
     ] },
    { n: 'Independiente del Valle', s: 'IDV', c1: '#000000', c2: '#0057B8', str: 70, p: [
       ['Guido Villar', 'GK', 70, 27], ['Thiago Santamaría', 'RB', 68, 22], ['Richard Schunke', 'CB', 72, 33],
       ['Mateo Carabajal', 'CB', 70, 28], ['Layan Loor', 'LB', 68, 24], ['Cristian Zabala', 'DM', 69, 27],
       ['Jhegson Méndez', 'CM', 70, 28], ['Júnior Sornoza', 'AM', 72, 31], ['Renato Ibarra', 'RW', 70, 34],
       ['Claudio Spinelli', 'ST', 70, 28], ['Aron Rodríguez', 'LW', 69, 25], ['Eduardo Bores', 'GK', 61, 22],
       ['Luis Zárate', 'CB', 68, 25], ['Gustavo Cortéz', 'LB', 67, 27], ['Patrik Mercado', 'CM', 70, 21],
       ['Jean Arroyo', 'RW', 65, 21], ['Michael Hoyos', 'ST', 67, 33], ['José Alcívar', 'DM', 68, 25]
     ] },
    { n: 'Libertad FC', s: 'LIB', c1: '#00A94F', c2: '#FFFFFF', str: 59, p: [
       ['Publio Mina', 'GK', 57, 22], ['Rodrigo Morínigo', 'RB', 64, 25], ['Carlos Gruezo', 'CB', 65, 26],
       ['Bryan Caicedo', 'CB', 57, 26], ['Elvis Patta', 'LB', 60, 36], ['Stick Castro', 'DM', 50, 27],
       ['Rafael Caicedo', 'CM', 60, 23], ['Gabriel Cortez', 'AM', 63, 31], ['Carlos Orejuela', 'RW', 57, 33],
       ['Hancel Batalla', 'ST', 60, 29], ['Jawer Guisamano', 'LW', 60, 30], ['David Cabezas', 'GK', 55, 31],
       ['Yerman Quiñónez', 'CB', 54, 20], ['Orlin Quiñónez', 'LB', 56, 32], ['Sander Bueno', 'CM', 53, 21],
       ['Antony Chére', 'RW', 56, 30], ['Danny Coronel', 'ST', 56, 24], ['Jackson Rodríguez', 'CB', 53, 28],
       ['Ariel Bao', 'GK', 53, 20], ['Emerson Castillo', 'GK', 51, 25], ['Manuel Lucas', 'CB', 52, 33],
       ['Jostin Bravo', 'CM', 53, 25]
     ] },
    { n: 'LDU Quito', s: 'LDU', c1: '#FFFFFF', c2: '#0057B8', str: 71, p: [
       ['Alexander Domínguez', 'GK', 74, 38], ['José Quintero', 'RB', 71, 35], ['Ricardo Adé', 'CB', 73, 35],
       ['Richard Mina', 'CB', 69, 25], ['Leonel Quiñonez', 'LB', 72, 31], ['Carlos Gruezo', 'DM', 73, 30],
       ['Fernando Cornejo', 'CM', 71, 29], ['Antonio Alvarado', 'AM', 71, 26], ['Freddy Mina', 'RW', 64, 26],
       ['Jeison Medina', 'ST', 71, 30], ['Bryan Ramírez', 'LW', 72, 24], ['Gonzalo Valle', 'GK', 71, 29],
       ['Gian Allala', 'CB', 66, 28], ['Yeltzin Erique', 'LB', 62, 22], ['Gabriel Villamíl', 'CM', 69, 24],
       ['Michael Estrada', 'ST', 70, 29], ['Lisandro Alzugaray', 'ST', 70, 35], ['Kevin Minda', 'DM', 70, 26]
     ] },
    { n: 'Macará', s: 'MAC', c1: '#0057B8', c2: '#FFFFFF', str: 63, p: [
       ['Rodrigo Rodríguez', 'GK', 64, 31], ['Juan Espinoza', 'RB', 64, 23], ['John Jairo Jiménez', 'CB', 65, 31],
       ['Leonar Espinoza', 'CB', 62, 30], ['Luis Ayala', 'LB', 64, 33], ['Jean Estacio', 'DM', 63, 29],
       ['Gastón Blanc', 'CM', 64, 30], ['Matías Miranda', 'AM', 64, 26], ['Federico Paz', 'RW', 62, 32],
       ['Franco Posse', 'ST', 63, 26], ['Patricio Ramos', 'LW', 63, 22], ['Darwin Cuero', 'GK', 58, 32],
       ['José Marrufo', 'CB', 57, 30], ['Santiago Etchebarne', 'LB', 58, 32], ['Martín Tello', 'CM', 60, 22],
       ['Luca Ferro', 'RW', 57, 25], ['David Caicedo', 'ST', 61, 23], ['Denilson Bolaños', 'CB', 59, 26],
       ['Julio Cárdenas', 'GK', 56, 26], ['Marlon Medranda', 'CB', 57, 27], ['Jordan Mohor', 'CB', 58, 26],
       ['José Luis Cazares', 'CM', 58, 35]
     ] },
    { n: 'Manta FC', s: 'MAN', c1: '#0057B8', c2: '#FFE500', str: 59, p: [
       ['Walter Chávez', 'GK', 59, 32], ['Jorge Batalla', 'RB', 60, 25], ['Jefferson Nazareno', 'CB', 57, 27],
       ['Jeremy Mina', 'CB', 59, 25], ['Dagner Quintero', 'LB', 58, 26], ['Braian Ramírez', 'DM', 61, 26],
       ['Juan David Jiménez', 'CM', 58, 32], ['Maikel Valencia', 'AM', 58, 25], ['Walter Chalá', 'RW', 60, 34],
       ['Jean Carlos Blanco', 'ST', 57, 34], ['Feyiseitan Asagidigbi', 'LW', 59, 22], ['Félix Zambrano', 'GK', 53, 29],
       ['Josué Chalá', 'CB', 56, 21], ['Mateo Ortiz', 'LB', 56, 26], ['Robert Burbano', 'CM', 61, 31],
       ['José Angulo', 'RW', 56, 31], ['Jostin Alman', 'ST', 54, 31], ['Alexander Medina', 'CB', 55, 27],
       ['Estefano Pico', 'GK', 54, 25], ['Octavio Moscarelli', 'CB', 53, 25], ['José Monaga', 'CB', 52, 28],
       ['Miguel Hurtado', 'DM', 51, 19]
     ] },
    { n: 'Mushuc Runa', s: 'MUS', c1: '#00A94F', c2: '#FFFFFF', str: 60, p: [
       ['Rodrigo Formento', 'GK', 61, 25], ['José Quiñones', 'CB', 57, 23], ['Dennys Quintero', 'CB', 62, 28],
       ['Bryan Bentaberry', 'CB', 60, 28], ['Ángel Gracia', 'LB', 61, 36], ['Stiven Tapiero', 'DM', 61, 33],
       ['Nicolás Dávila', 'CM', 57, 29], ['Joaquín Vergés', 'AM', 64, 33], ['Robert Burbano', 'RW', 60, 29],
       ['Jonathan Dos Santos', 'ST', 61, 33], ['Cristian Penilla', 'LW', 60, 34], ['Adonnis Pabón', 'GK', 58, 29],
       ['Walter Chalá', 'CB', 59, 25], ['Glendys Mina', 'LB', 60, 29], ['Andrés Zambrano', 'CM', 55, 23],
       ['Stick Castro', 'RW', 51, 26], ['Elián Caicedo', 'ST', 56, 20], ['Luis Arce', 'DM', 60, 31]
     ] },
    { n: 'Orense SC', s: 'ORE', c1: '#00A94F', c2: '#FFFFFF', str: 59, p: [
       ['Rolando Silva', 'GK', 61, 31], ['Bryan Quiñónez', 'RB', 61, 23], ['Sixto Mina', 'CB', 58, 27],
       ['Steeven Quiñónez', 'CB', 62, 25], ['Alan Lorenzo', 'LB', 57, 28], ['Sergio Vázquez', 'DM', 57, 22],
       ['Ángel Mena', 'CM', 60, 38], ['Erick Plúas', 'AM', 58, 24], ['Miguel Parrales', 'RW', 59, 31],
       ['Agustín Herrera', 'ST', 59, 28], ['Michael Bermúdez', 'LW', 58, 20], ['Jordy Ortiz', 'GK', 56, 23],
       ['Stefano Callegari', 'CB', 58, 29], ['Beder Caicedo', 'LB', 56, 34], ['Gonzalo Rostagno', 'CM', 58, 25],
       ['Yandry Mosquera', 'RW', 57, 20], ['Jostin Hurtado', 'ST', 55, 19], ['Gabriel Achilier', 'CB', 57, 41],
       ['Gean Toledo', 'GK', 53, 19], ['Pedro Pablo Velasco', 'CB', 55, 33], ['Óscar Quiñónez', 'CB', 59, 25],
       ['Luis Garcés', 'DM', 54, 20]
     ] },
    { n: 'Técnico Universitario', s: 'TEC', c1: '#E30613', c2: '#FFFFFF', str: 58, p: [
       ['Santiago Razzeto', 'GK', 57, 25], ['Luis Córdova', 'RB', 60, 23], ['Stiwar Mena', 'CB', 58, 32],
       ['Julián Anaya', 'CB', 59, 27], ['José Caicedo', 'LB', 58, 23], ['Liberman Torres', 'DM', 60, 24],
       ['Diego Armas', 'CM', 58, 36], ['Johan Bocanegra', 'AM', 58, 28], ['Luis Estupiñán', 'RW', 56, 27],
       ['Heuyín Guardia', 'ST', 58, 25], ['Anthony Castillo', 'LW', 58, 19], ['Ayrton Morales', 'GK', 54, 31],
       ['Edwin Mesa', 'CB', 54, 28], ['Rafael Chila', 'LB', 55, 20], ['Christopher Arteaga', 'CM', 56, 26],
       ['Wagner Caicedo', 'RW', 52, 26], ['Marlon Noroña', 'ST', 57, 22], ['Santiago Freire', 'CB', 52, 22],
       ['Erik Viveros', 'GK', 51, 30], ['Marco Carrasco', 'CB', 53, 33], ['Carlos Cuero', 'CB', 51, 30],
       ['Bryan Oña', 'CM', 53, 33]
     ] },
    { n: 'Universidad Católica de Quito', s: 'UCQ', c1: '#0057B8', c2: '#FFFFFF', str: 63, p: [
       ['Rafael Romo', 'GK', 68, 35], ['Gregori Anangonó', 'RB', 62, 27], ['Luis Cangá', 'CB', 65, 30],
       ['Jhon Chancellor', 'CB', 61, 33], ['Eddy Mejía', 'LB', 63, 25], ['Jerónimo Cacciabue', 'DM', 63, 27],
       ['Emiliano Clavijo', 'CM', 60, 25], ['Mauro Díaz', 'AM', 64, 34], ['Mauricio Alonso', 'RW', 60, 31],
       ['Byron Palacios', 'ST', 66, 30], ['Azarias Londoño', 'ST', 60, 24], ['Johan Lara', 'GK', 58, 26],
       ['Carlos Medina', 'CB', 60, 23], ['Eric Valencia', 'LB', 50, 22], ['Facundo Martínez', 'DM', 62, 40],
       ['Daykol Romero', 'RB', 60, 24], ['José Fajardo', 'ST', 63, 31], ['Luis Moreno', 'DM', 56, 20]
     ] },
    { n: 'Leones del Norte', s: 'LEO', c1: '#FFE500', c2: '#000000', str: 58, p: [
       ['Jordan Congo', 'GK', 58, 30], ['Jordan Morán', 'RB', 60, 24], ['Frixon Vargas', 'CB', 60, 24],
       ['Ronaldo Arroyo', 'CB', 59, 24], ['Mauro Luque', 'LB', 60, 27], ['Tobías Coppo', 'DM', 57, 26],
       ['Emiliano Griffa', 'CM', 57, 27], ['Charles Vélez', 'AM', 59, 34], ['Santiago Arrieta', 'RW', 58, 20],
       ['Thomas Amilivia', 'ST', 56, 28], ['Segundo Portocarrero', 'LW', 56, 30], ['Jeferson Arroyo', 'GK', 53, 23],
       ['Anthony Folleco', 'CB', 55, 19], ['Ignacio Burneo', 'LB', 56, 18], ['Agustín Mansilla', 'CM', 52, 28],
       ['Juan Anangonó', 'RW', 56, 37], ['Darío Pazmiño', 'ST', 55, 26], ['Maiky de la Cruz', 'CB', 52, 22],
       ['Leonel Nazareno', 'GK', 49, 32], ['Juan Arellano', 'DM', 50, 18], ['Nicolás Monserrat', 'CB', 52, 30],
       ['Brian Kreiman', 'CB', 51, 24]
     ] }
  ]
};

window.LEAGUES.paraguay = {
  id: 'paraguay', name: 'División Profesional de Paraguay', country: 'Paraguay', ucl: 2, rel: 2,
  pool: 'latam', squadSize: 17, teams: [
    { n: '2 de Mayo', s: 'DOS', c1: '#E30613', c2: '#FFFFFF', str: 58, p: [
       ['Ángel Martínez', 'GK', 58, 24], ['Miguel Barreto', 'RB', 57, 28], ['Wilson Ibarrola', 'CB', 60, 30],
       ['René Rodríguez', 'CB', 56, 24], ['Juan Camilo Saiz', 'LB', 60, 34], ['Orlando Colmán', 'DM', 59, 24],
       ['Ulises Coronel', 'CM', 59, 28], ['Marcelo Acosta', 'AM', 57, 26], ['Elías Alfonso', 'RW', 61, 27],
       ['Rodrigo Ruiz Díaz', 'ST', 59, 27], ['Alan Gómez', 'LW', 56, 24], ['Carlos Servín', 'GK', 53, 39],
       ['Esteban Maidana', 'CB', 56, 27], ['Víctor Dávalos', 'LB', 53, 35], ['Sergio Sanabria', 'CM', 55, 27],
       ['Brahian Ayala', 'RW', 59, 31], ['Pedro Delvalle', 'ST', 54, 32], ['Alberto Espínola', 'CB', 57, 35],
       ['Miguel Urquiza', 'GK', 52, 26], ['César Castro', 'CB', 51, 33], ['Pedro Sosa', 'CB', 52, 35],
       ['Óscar Romero', 'CM', 53, 27]
     ] },
    { n: 'Cerro Porteño', s: 'CER', c1: '#0057B8', c2: '#E30613', str: 68, p: [
       ['Alexis Martín Arias', 'GK', 69, 32], ['Rodrigo Gómez', 'RB', 58, 19], ['Gustavo Velázquez', 'CB', 71, 34],
       ['Abel Luciatti', 'CB', 68, 32], ['Blás Riveros', 'LB', 66, 27], ['Gastón Giménez', 'DM', 68, 33],
       ['Alan Soñora', 'CM', 65, 26], ['Federico Carrizo', 'AM', 70, 34], ['Juan Iturbe', 'RW', 69, 32],
       ['Jonatán Torres', 'ST', 70, 28], ['Cecilio Domínguez', 'LW', 71, 30], ['Roberto Fernández', 'GK', 68, 37],
       ['Jorge Morel', 'CB', 67, 27], ['Guillermo Benítez', 'LB', 65, 31], ['Robert Piris da Motta', 'DM', 67, 30],
       ['Fabricio Domínguez', 'AM', 67, 27], ['Sergio Araujo', 'ST', 67, 33], ['Ignacio Aliseda', 'LW', 70, 25]
     ] },
    { n: 'General Caballero', s: 'GCJ', c1: '#00A94F', c2: '#FFFFFF', str: 57, p: [
       ['Luis Guillén', 'GK', 57, 30], ['Richard Cabrera', 'RB', 57, 23], ['Manuel Romero', 'CB', 55, 24],
       ['Miller Mareco', 'CB', 58, 21], ['Alexis Rodas', 'LB', 60, 25], ['Cristian Amarilla', 'DM', 59, 21],
       ['Silvio Torales', 'CM', 55, 22], ['Jorge Mendoza', 'AM', 55, 20], ['Ronald Roa', 'RW', 56, 22],
       ['Clementino González', 'ST', 58, 27], ['Sebastián Arce', 'LW', 58, 33], ['Tales Wastowski', 'GK', 56, 20],
       ['Jorge González', 'CB', 53, 32], ['Tomás Lezcano', 'LB', 52, 20], ['Jordan Santacruz', 'CM', 55, 31],
       ['Nicolás Maná', 'RW', 56, 33], ['Jorge Armoa', 'ST', 56, 28], ['Ever Fernández', 'CB', 54, 32],
       ['Ismael Quílez', 'CB', 51, 26], ['Alan Vargas', 'CB', 52, 24], ['Blas Caceres', 'CM', 49, 25],
       ['Alexander Franco', 'CM', 51, 27]
     ] },
    { n: 'Guaraní', s: 'GUA', c1: '#FFE500', c2: '#000000', str: 64, p: [
       ['Martín Rodríguez', 'GK', 63, 35], ['Juan Pérez', 'RB', 66, 31], ['Mario López Quintana', 'CB', 65, 29],
       ['Juan Patiño', 'CB', 65, 35], ['Alexandro Maidana', 'LB', 56, 19], ['Agustín Maíz', 'CM', 60, 24],
       ['Agustín Manzur', 'CM', 66, 24], ['William Mendieta', 'AM', 65, 36], ['Derlis Rodríguez', 'RW', 64, 27],
       ['Fabián Fernández', 'ST', 68, 33], ['Diego Fernández', 'LW', 67, 22], ['Aldo Pérez', 'GK', 61, 24],
       ['Paul Riveros', 'CB', 64, 27], ['Fernando Román', 'CB', 62, 24], ['Luis Martínez', 'CM', 62, 25],
       ['Alcides Benítez', 'AM', 62, 23], ['Richard Torales', 'ST', 63, 24], ['Alan Pereira', 'ST', 62, 25]
     ] },
    { n: 'Libertad', s: 'LIB', c1: '#000000', c2: '#FFFFFF', str: 68, p: [
       ['Rodrigo Morínigo', 'GK', 68, 26], ['Robert Rojas', 'RB', 68, 29], ['Diego Viera', 'CB', 73, 34],
       ['Néstor Giménez', 'CB', 66, 27], ['Matías Espinoza', 'LB', 69, 27], ['Álvaro Campuzano', 'DM', 68, 30],
       ['Ángel Cardozo Lucena', 'CM', 65, 30], ['Lucas Sanabria', 'AM', 67, 25], ['Iván Franco', 'RW', 68, 25],
       ['Ó. Cardozo', 'ST', 68, 42], ['Lorenzo Melgarejo', 'LW', 71, 34], ['Martín Silva', 'GK', 66, 42],
       ['Miguel Jacquet', 'CB', 64, 30], ['Alexis Fretes', 'CM', 57, 19], ['Hugo Martínez', 'DM', 66, 25],
       ['Rodrigo Villalba', 'RW', 60, 19], ['Jorge Recalde', 'ST', 66, 33], ['Iván Ramírez', 'RB', 68, 30]
     ] },
    { n: 'Nacional de Asunción', s: 'NAC', c1: '#FFFFFF', c2: '#0057B8', str: 64, p: [
       ['Gerardo Ortíz', 'GK', 62, 37], ['Alexis Cañete', 'RB', 64, 23], ['Thomas Gutiérrez', 'CB', 63, 26],
       ['Gastón Benítez', 'CB', 64, 24], ['Fernando Díaz', 'LB', 55, 25], ['Silvio Torales', 'DM', 66, 35],
       ['Fabrizio Jara', 'CM', 67, 24], ['Carlos Arrúa', 'AM', 65, 29], ['Ignacio Bailone', 'RW', 66, 32],
       ['Hugo Adrián Benítez', 'ST', 62, 23], ['Matías Almeida', 'LW', 64, 21], ['Santiago Rojas', 'GK', 59, 30],
       ['Líder Cáceres', 'CB', 63, 21], ['Rodolfo Argüello', 'LB', 63, 23], ['Leandro Meza', 'CM', 61, 25],
       ['Iván Valdez', 'RW', 60, 31], ['Lucas González', 'ST', 68, 29], ['Juan Feliú', 'CB', 63, 25],
       ['Carlos Espínola', 'CB', 57, 27], ['Sebastián Vargas', 'CB', 59, 24], ['Tobías Sanabria', 'CM', 58, 22],
       ['Juan Danilo Santacruz', 'CM', 58, 31]
     ] },
    { n: 'Olimpia', s: 'OLI', c1: '#FFFFFF', c2: '#000000', str: 70, p: [
       ['Gastón Olveira', 'GK', 76, 32], ['César Olmedo', 'RB', 69, 22], ['Orlando Barreto', 'CB', 71, 27],
       ['Axel Alfonzo', 'CB', 62, 21], ['Abel Paredes', 'LB', 66, 28], ['Richard Ortiz', 'DM', 72, 35],
       ['Javier Domínguez', 'CM', 70, 25], ['Luis Abreu', 'AM', 62, 21], ['Rodney Redes', 'RW', 72, 25],
       ['Derlis González', 'ST', 75, 31], ['Iván Leguizamón', 'LW', 74, 22], ['Lucas Verza', 'GK', 62, 24],
       ['Matías Arguello', 'RB', 61, 18], ['Alan Morinigo', 'LB', 61, 19], ['Alex Franco', 'CM', 68, 23],
       ['Erik López', 'LW', 68, 23], ['Alan Ledesma', 'CM', 58, 16], ['Facundo Insfrán', 'GK', 59, 19]
     ] },
    { n: 'Recoleta', s: 'REC', c1: '#0057B8', c2: '#FFE500', str: 59, p: [
       ['Andrés Marsengo', 'GK', 58, 24], ['Facundo Echeguren', 'RB', 59, 23], ['Luis Cardozo', 'CB', 58, 38],
       ['Marcos Pereira', 'CB', 58, 24], ['Nicolás Marotta', 'LB', 56, 30], ['José Espínola', 'DM', 59, 25],
       ['Ronal Domínguez', 'CM', 60, 34], ['Fernando Galeano', 'AM', 58, 27], ['Richard Ortiz', 'RW', 64, 31],
       ['Junior Noguera', 'ST', 56, 24], ['Kevin Parzajuk', 'LW', 58, 24], ['Nelson Ferreira', 'GK', 53, 28],
       ['Claudio Figueredo', 'CB', 52, 27], ['Marcelo Medina', 'LB', 55, 30], ['Carlos Vera', 'CM', 56, 38],
       ['Wilfrido Báez', 'RW', 54, 32], ['Héctor López', 'ST', 54, 20], ['Pedro Rios', 'CB', 55, 22],
       ['Óscar Toledo', 'GK', 52, 27], ['Juan Núñez', 'CB', 54, 37], ['Dairon Mosquera', 'CB', 53, 34],
       ['Iván Piris', 'DM', 51, 37]
     ] },
    { n: 'Sportivo Ameliano', s: 'AME', c1: '#00A94F', c2: '#FFFFFF', str: 56, p: [
       ['Miguel Martínez', 'GK', 56, 28], ['Francisco Báez', 'RB', 57, 35], ['Hugo Benítez', 'CB', 55, 27],
       ['Abel Paredes', 'CB', 53, 29], ['Fabián Franco', 'LB', 54, 28], ['Jonathan Benítez', 'DM', 58, 25],
       ['Estivel Moreira', 'CM', 57, 27], ['Walter Rodríguez', 'AM', 56, 31], ['Fredy Vera', 'RW', 56, 28],
       ['Cristhian Ocampos', 'ST', 54, 27], ['Elvio Vera', 'LW', 54, 26], ['Junior Balbuena', 'GK', 50, 32],
       ['Andrea Falabella', 'CB', 52, 27], ['Julio César González', 'LB', 50, 34], ['Valentín Larralde', 'CM', 51, 26],
       ['Ariel Ávalos', 'RW', 52, 21], ['Jorge Sanguina', 'ST', 52, 27], ['Miguel Jacquet', 'CB', 56, 31],
       ['Ángel Sánchez', 'GK', 50, 25], ['Edilson Salinas', 'GK', 52, 24], ['Miguel Benítez', 'DM', 48, 29],
       ['Tomás Lezcano', 'CB', 49, 31]
     ] },
    { n: 'Sportivo Luqueño', s: 'LUQ', c1: '#FFE500', c2: '#0057B8', str: 60, p: [
       ['Ariel Aguilar', 'GK', 62, 36], ['Santiago Ocampos', 'RB', 55, 23], ['Alexis Villalba', 'CB', 60, 26],
       ['Adrián Brizuela', 'CB', 53, 21], ['Mathías Suárez', 'LB', 59, 20], ['Ángel Benítez', 'DM', 60, 29],
       ['Walter Rodríguez', 'CM', 62, 29], ['Julio Báez', 'CM', 60, 25], ['Aldo Parra', 'AM', 55, 22],
       ['Federico Santander', 'ST', 63, 34], ['Lautaro Comas', 'LW', 61, 30], ['Á. Espínola', 'GK', 54, 22],
       ['Joaquín Paredes', 'CB', 52, 22], ['Rodrigo Alborno', 'LB', 58, 31], ['Rubén Ríos', 'CM', 61, 29],
       ['Brahian Ayala', 'LW', 60, 30], ['Walter González', 'ST', 63, 30], ['Kevin Pereira', 'LW', 60, 21]
     ] },
    { n: 'Sportivo Trinidense', s: 'TRI', c1: '#0057B8', c2: '#FFFFFF', str: 58, p: [
       ['Matías Dufour', 'GK', 59, 27], ['Armando Ruiz Díaz', 'RB', 57, 33], ['David Villalba', 'CB', 55, 35],
       ['Diego Melgarejo', 'CB', 60, 30], ['Axel Cañete', 'LB', 57, 25], ['Ariel Gauto', 'DM', 56, 23],
       ['Luis de la Cruz', 'CM', 59, 35], ['Randy Báez', 'AM', 58, 19], ['Néstor Camacho', 'RW', 59, 39],
       ['Óscar Giménez', 'ST', 58, 36], ['Nicolás Maná', 'LW', 60, 32], ['Víctor Samudio', 'GK', 52, 39],
       ['Sergio Mendoza', 'DM', 51, 32], ['César Benítez', 'LB', 54, 36], ['Jorge Marcelino', 'CM', 55, 21],
       ['Ronaldo Báez', 'RW', 56, 28], ['Joel Román', 'ST', 52, 36], ['Franco Ortellado', 'CB', 53, 25],
       ['Mauro Rodas', 'GK', 53, 26], ['Maximiliano Centurión', 'CB', 52, 27], ['Bruno Valdez', 'CB', 61, 34],
       ['Tobías Morinigo', 'CB', 52, 21]
     ] },
    { n: 'Sportivo San Lorenzo', s: 'SSL', c1: '#0057B8', c2: '#FFFFFF', str: 55, p: [
       ['Federico Cristóforo', 'GK', 53, 37], ['Leandro Esteche', 'RB', 57, 25], ['Alexis Doldán', 'CB', 53, 29],
       ['Teodoro Paredes', 'CB', 53, 33], ['Iván Torres', 'LB', 55, 35], ['Héctor Villamayor', 'DM', 55, 29],
       ['Aldo Quiñónez', 'CM', 53, 35], ['Matías Alfonso', 'AM', 55, 26], ['Mathias Martínez', 'RW', 55, 32],
       ['José Barrios', 'ST', 55, 22], ['Alex Álvarez', 'LW', 56, 29], ['Wilson Quiñonez', 'GK', 52, 38],
       ['Mario López Quintana', 'CB', 59, 31], ['Pablo Aveiro', 'LB', 52, 21], ['Bruno Piñatares', 'CM', 52, 36],
       ['Jeferson Torales', 'RW', 54, 26], ['Antonio Oviedo', 'ST', 50, 30], ['Luis Cáceres', 'CB', 52, 30],
       ['Luis Franco', 'GK', 48, 27], ['Matías Agüero', 'CB', 50, 22], ['Maximiliano García', 'CB', 48, 23],
       ['Luis Vargas', 'DM', 47, 26]
     ] }
  ,
    { n: 'Atlético Tembetary', s: 'TEM', c1: '#E30613', c2: '#FFFFFF', str: 54, p: [
       ['Tomás Canteros', 'GK', 54, 25], ['Líder Cáceres', 'RB', 57, 21], ['Claudio Figueredo', 'CB', 57, 27],
       ['Joel Roa', 'CB', 55, 27], ['Hugo Espínola', 'LB', 57, 31], ['Denis Colmán', 'DM', 53, 23],
       ['Edgar Ferreira', 'CM', 55, 39], ['Jorge Nuñéz', 'AM', 52, 31], ['Estiven Pérez', 'RW', 54, 26],
       ['Aaron Spetale', 'ST', 55, 26], ['José Núñez', 'LW', 54, 38], ['Jorge Chena', 'GK', 52, 38],
       ['Víctor Barrios', 'CB', 53, 29], ['Rolando García Guerreño', 'LB', 49, 36], ['Adelio Zárate', 'CM', 53, 25],
       ['Juan Francisco Esteche', 'RW', 49, 24], ['Rodrigo López', 'ST', 51, 24], ['Ever Cáceres', 'CB', 50, 29],
       ['José Aquino', 'GK', 47, 35], ['Alan Paredes', 'DM', 48, 25], ['Ángel Cristaldo', 'CB', 48, 22],
       ['Nicolás Malvacio', 'CB', 50, 27]
     ] },
    { n: 'Rubio Ñu', s: 'RUB', c1: '#FFE500', c2: '#000000', str: 56, p: [
       ['Tomás Canteros', 'GK', 55, 25], ['Rodi Ferreira', 'RB', 57, 28], ['Javier Vallejos', 'CB', 51, 22],
       ['Jorge González', 'CB', 55, 29], ['Pedro Álvarez', 'LB', 54, 25], ['Rodrigo Rojas', 'DM', 55, 38],
       ['William Mendieta', 'CM', 59, 37], ['Ángel Cardozo Lucena', 'AM', 60, 32], ['Pedro Báez', 'RW', 53, 29],
       ['Juan Giménez', 'ST', 54, 23], ['César Villagra', 'LW', 54, 38], ['Aldo Bareiro', 'GK', 49, 30],
       ['Víctor Cabañas', 'CB', 50, 23], ['Brian Blasi', 'CM', 48, 30], ['Santiago Frean', 'CM', 53, 37],
       ['Elías Sarquis', 'RW', 52, 35], ['Sebastián Ruíz Díaz', 'ST', 52, 22], ['Rodrigo Alborno', 'CB', 55, 33],
       ['Tales', 'GK', 48, 29], ['Franco Fragueda', 'GK', 48, 26], ['Carlos Giménez', 'CB', 48, 20],
       ['Renzo Arzamendia', 'CB', 50, 22]
     ] }
  ]
};

window.LEAGUES.peru = {
  id: 'peru', name: 'Liga 1 de Perú', country: 'Perú', ucl: 2, rel: 2,
  pool: 'latam', squadSize: 17, teams: [
    { n: 'ADT de Tarma', s: 'ADT', c1: '#FFE500', c2: '#000000', str: 53, p: [
       ['Juan Valencia', 'GK', 51, 33], ['Ronny Biojó', 'RB', 54, 27], ['Carlos Cabello', 'CB', 53, 29],
       ['Arthur Gutiérrez', 'CB', 53, 26], ['John Narváez', 'LB', 51, 35], ['Jair Reyes', 'DM', 53, 22],
       ['Jhon Vega', 'CM', 53, 31], ['Ángel Ojeda', 'AM', 53, 34], ['Hernán Rengifo', 'RW', 52, 43],
       ['Anthony Cubas', 'ST', 54, 24], ['Hideyoshi Arakaki', 'LW', 53, 28], ['Carlos Solís', 'GK', 49, 36],
       ['Jhair Soto', 'CB', 46, 23], ['Jerry Navarro', 'LB', 46, 24], ['Joao Rojas', 'CM', 50, 37],
       ['Aylton Mazzo', 'RW', 48, 23], ['Luis Benites', 'ST', 57, 30], ['Joao Acosta', 'CB', 49, 21],
       ['Enzo Mori', 'GK', 46, 20], ['Jordan Guivin', 'CM', 47, 28], ['Víctor Cedrón', 'CM', 46, 33],
       ['Josue Alvino', 'CM', 47, 23]
     ] },
    { n: 'Alianza Atlético', s: 'AAS', c1: '#0057B8', c2: '#FFFFFF', str: 56, p: [
       ['Eder Hermoza', 'GK', 57, 36], ['Román Suárez', 'RB', 58, 25], ['José Villegas', 'CB', 55, 30],
       ['José Luján', 'CB', 55, 29], ['Luiggi Alburqueque', 'LB', 54, 24], ['Germán Díaz', 'DM', 54, 30],
       ['Hernán Lupu', 'CM', 57, 22], ['Stefano Fernández', 'AM', 56, 24], ['Franco Coronel', 'RW', 54, 33],
       ['Franchesco Flores', 'ST', 56, 25], ['Valentín Robaldo', 'LW', 55, 26], ['Jesus Rossi', 'GK', 53, 23],
       ['Jesús Mendieta', 'CB', 53, 28], ['Erick Perleche', 'LB', 52, 26], ['Jimmy Pérez', 'CM', 51, 24],
       ['Guillermo Larios', 'RW', 54, 24], ['Cristian Penilla', 'ST', 57, 35], ['Anthony Gordillo', 'CB', 50, 32],
       ['Daniel Prieto', 'GK', 48, 31], ['Williams Guzmán', 'CB', 48, 26], ['Juan Quiñones', 'CB', 47, 25],
       ['Jorge del Castillo', 'CM', 49, 22]
     ] },
    { n: 'Alianza Lima', s: 'ALI', c1: '#0057B8', c2: '#FFFFFF', str: 63, p: [
       ['Guillermo Viscarra', 'GK', 65, 32], ['Josué Estrada', 'RB', 63, 28], ['Carlos Zambrano', 'CB', 66, 35],
       ['Renato Garcés', 'CB', 64, 29], ['Miguel Trauco', 'LB', 64, 32], ['Jesús Castillo', 'DM', 60, 29],
       ['Sergio Peña', 'CM', 66, 29], ['Pablo Ceppelini', 'AM', 62, 33], ['Marco Huamán', 'RW', 58, 22],
       ['Hernán Barcos', 'ST', 66, 41], ['Gaspar Gentile', 'LW', 63, 30], ['Ángelo Campos', 'GK', 62, 32],
       ['Gianfranco Chávez', 'CB', 61, 26], ['Ricardo Lagos', 'LB', 59, 29], ['Fernando Gaibor', 'CM', 64, 33],
       ['Eryc Castillo', 'LW', 63, 30], ['Paolo Guerrero', 'ST', 65, 41], ['Jean Archimbaud', 'CM', 62, 30]
     ] },
    { n: 'Atlético Grau', s: 'GRA', c1: '#FFFFFF', c2: '#0057B8', str: 51, p: [
       ['Patricio Álvarez', 'GK', 54, 31], ['Jeremy Rostaing', 'RB', 51, 30], ['Rodrigo Tapia', 'CB', 53, 30],
       ['Daniel Franco', 'CB', 51, 33], ['José Bolívar', 'LB', 51, 25], ['Rafael Guarderas', 'DM', 52, 31],
       ['Benjamín García', 'CM', 45, 25], ['Diego Soto', 'AM', 51, 23], ['Paulo de la Cruz', 'RW', 51, 25],
       ['Juan Garro', 'ST', 52, 32], ['Neri Bandiera', 'LW', 54, 35], ['Aarom Fuentes', 'GK', 41, 23],
       ['Renato Rojas', 'CB', 48, 25], ['Elsar Rodas', 'LB', 51, 31], ['Joel Herrera', 'CM', 45, 21],
       ['Rodrigo Vilca', 'AM', 49, 26], ['Tomás Sandoval', 'ST', 50, 26], ['Christopher Olivares', 'ST', 49, 26]
     ] },
    { n: 'UTC Cajamarca', s: 'CAJ', c1: '#FFE500', c2: '#000000', str: 55, p: [
       ['Carlos Mosquera', 'GK', 55, 32], ['Pablo Míguez', 'RB', 52, 39], ['Ricardo Lagos', 'CB', 56, 30],
       ['Alexis Rodas', 'CB', 52, 29], ['José Gallardo', 'LB', 52, 25], ['Pablo Lavandeira', 'DM', 58, 36],
       ['Mauricio Arrasco', 'CM', 55, 22], ['Jefferson Orejuela', 'AM', 52, 33], ['Sebastien Pineau', 'RW', 53, 23],
       ['Hernán Barcos', 'ST', 63, 42], ['Brandon Palacios', 'LW', 51, 28], ['Jonathan Medina', 'GK', 51, 33],
       ['Brian Bernaola', 'CB', 52, 31], ['Matías Almirón', 'LB', 48, 31], ['Tomás Andrade', 'CM', 48, 30],
       ['Said Peralta', 'RW', 48, 23], ['Carlos Meza', 'ST', 50, 24], ['Hairo Timaná', 'CB', 51, 26],
       ['Samuel Aspajo', 'GK', 46, 21], ['Jhan Vega', 'CB', 47, 24], ['Carlos Gómez', 'CB', 51, 21],
       ['Enmanuel Páucar', 'CM', 46, 30]
     ] },
    { n: 'Deportivo Moquegua', s: 'MOQ', c1: '#E30613', c2: '#FFFFFF', str: 51, p: [
       ['Carlos Grados', 'GK', 51, 31], ['Cristian Enciso', 'RB', 49, 35], ['Aldair Perleche', 'CB', 50, 31],
       ['Brayan Rivera', 'CB', 53, 23], ['Jimmy Jiménez', 'LB', 52, 23], ['Cristian Mejía', 'DM', 51, 34],
       ['Nicolás Chávez', 'CM', 51, 33], ['Claudio Ramírez', 'AM', 51, 26], ['Édgar Lastre', 'RW', 52, 27],
       ['Marcello Negrón', 'ST', 48, 21], ['Bryan Angulo', 'LW', 52, 31], ['William Falcón', 'GK', 49, 21],
       ['Juan Diego Lojas', 'DM', 44, 37], ['Nicolás Amasifuén', 'LB', 49, 21], ['Diego Ramírez', 'CM', 44, 32],
       ['Allonso Dávila', 'RW', 45, 24], ['Yorman Zapata', 'ST', 44, 26], ['Eros Montenegro', 'CB', 48, 24],
       ['Renzo Figueroa', 'GK', 45, 28], ['Thiago Bedoya', 'GK', 43, 18], ['Kevin Moreno', 'CB', 45, 29],
       ['José Luis Granda', 'CB', 45, 34]
     ] },
    { n: 'Cienciano', s: 'CIE', c1: '#E30613', c2: '#FFFFFF', str: 62, p: [
       ['Ignacio Barrios', 'GK', 61, 32], ['Danilo Ortiz', 'CB', 60, 32], ['Leonel Galeano', 'CB', 63, 33],
       ['Jimmy Valoyes', 'CB', 62, 38], ['João Ortiz', 'LB', 59, 34], ['Claudio Torrejón', 'DM', 63, 32],
       ['Gonzalo Aguirre', 'CM', 57, 22], ['Agustín González', 'AM', 61, 28], ['Luis Benítes', 'LW', 63, 28],
       ['Carlos Garcés', 'ST', 65, 35], ['Alejandro Hohberg', 'LW', 66, 33], ['Juan Bolado', 'GK', 61, 27],
       ['Maximiliano Amondarain', 'CB', 61, 32], ['Nicolás Amasifuén', 'CB', 56, 19], ['Alfredo Ramúa', 'AM', 61, 38],
       ['Beto da Silva', 'ST', 60, 28], ['Osnar Noronha', 'ST', 61, 33], ['Yimy Gamero', 'DM', 60, 23]
     ] },
    { n: 'Comerciantes Unidos', s: 'CUN', c1: '#00A94F', c2: '#FFFFFF', str: 50, p: [
       ['Juan Cubas', 'GK', 50, 18], ['Juan José Rodríguez', 'RB', 50, 30], ['Alexis Cossio', 'CB', 49, 31],
       ['Fabio Renato Rojas', 'CB', 49, 27], ['Daniel Lino', 'LB', 51, 24], ['Alexis Arias', 'DM', 53, 31],
       ['Mathías Carpio', 'CM', 51, 24], ['Thiago Salinas', 'AM', 50, 20], ['Wilter Ayoví', 'RW', 49, 29],
       ['Matías Sen', 'ST', 50, 35], ['Josuee Herrera', 'LW', 48, 27], ['Matías Córdova', 'GK', 46, 24],
       ['Piero Guzmán', 'CB', 44, 26], ['Miguel Hilario', 'LB', 44, 20], ['Agustín Rodríguez', 'CM', 48, 26],
       ['Maxi Pérez', 'RW', 44, 31], ['Fabrizio Cubas', 'ST', 45, 19], ['Flavio Alcedo', 'CB', 45, 23],
       ['José Charún', 'GK', 43, 29], ['Diego López', 'GK', 65, 25], ['Paolo Fuentes', 'CB', 41, 30],
       ['José Parodi', 'CM', 45, 29]
     ] },
    { n: 'Cusco FC', s: 'CUS', c1: '#E30613', c2: '#000000', str: 60, p: [
       ['Rodolfo Anderson', 'GK', 60, 30], ['Carlos Gamarra', 'RB', 61, 26], ['Álex Custodio', 'CB', 62, 22],
       ['Álvaro Ampuero', 'CB', 59, 34], ['Aldair Fuentes', 'LB', 61, 28], ['Miguel Aucca', 'DM', 60, 28],
       ['Iván Colman', 'CM', 60, 31], ['Carlo Diez', 'AM', 59, 30], ['José Manzaneda', 'RW', 63, 32],
       ['Facundo Callejo', 'ST', 58, 34], ['Juan Tévez', 'LW', 60, 39], ['Andy Vidal', 'GK', 55, 32],
       ['José Bolívar', 'CB', 60, 26], ['José Zevallos', 'LB', 57, 27], ['Oswaldo Valenzuela', 'CM', 56, 26],
       ['José Alí', 'RW', 57, 21], ['Nicolás Silva', 'ST', 58, 36], ['Marlon Ruidías', 'CB', 54, 27],
       ['Pedro Díaz', 'GK', 69, 28], ['Alessandro Cavagna', 'GK', 55, 22], ['Julinho Astudillo', 'DM', 52, 21],
       ['Gu-Rum Choi', 'CB', 54, 28]
     ] },
    { n: 'Deportivo Garcilaso', s: 'GAR', c1: '#E30613', c2: '#FFE500', str: 58, p: [
       ['Patrick Zubczuk', 'GK', 59, 31], ['Aldair Salazar', 'RB', 59, 32], ['Agustín Gómez', 'CB', 57, 30],
       ['Horacio Benincasa', 'CB', 61, 32], ['Orlando Nuñez', 'LB', 58, 26], ['Inti Garrafa', 'DM', 56, 31],
       ['Agustín González', 'CM', 59, 29], ['Kevin Sandoval', 'AM', 57, 29], ['José Luis Sinisterra', 'RW', 60, 28],
       ['Paulo Rodríguez', 'ST', 58, 23], ['Francisco Arancibia', 'LW', 56, 30], ['Mallki Marmanillo', 'GK', 53, 22],
       ['Jefferson Portales', 'CB', 57, 29], ['Xavi Moreno', 'LB', 54, 23], ['Erick Canales', 'CM', 55, 25],
       ['Sharif Ramírez', 'RW', 56, 23], ['James Morales', 'ST', 55, 26], ['Samir Villacorta', 'CB', 55, 22],
       ['Juniors Barbieri', 'GK', 51, 30], ['Claudio Torrejón', 'CB', 61, 33], ['Carlos Ramos', 'CB', 55, 27],
       ['Adrián Ascues', 'DM', 50, 24]
     ] },
    { n: 'Juan Pablo II', s: 'JPII', c1: '#FFE500', c2: '#0057B8', str: 50, p: [
       ['Ismael Quispe', 'GK', 49, 27], ['Arón Sánchez', 'RB', 51, 23], ['Paolo Fuentes', 'CB', 49, 30],
       ['Bairon Puño', 'CB', 49, 17], ['Piero Antón', 'LB', 50, 26], ['Cristian García', 'DM', 50, 30],
       ['Christian Flores', 'CM', 49, 25], ['Christian Cueva', 'AM', 50, 35], ['Adán Henricks', 'RW', 51, 22],
       ['Jossimar Serrato', 'ST', 51, 34], ['Adriano Espinoza', 'LW', 51, 21], ['Jorge Stucchi', 'GK', 47, 24],
       ['Martín Peralta', 'CB', 48, 23], ['Iago Iriarte', 'LB', 44, 26], ['Gustavo Aliaga', 'CM', 45, 35],
       ['Jean Piere Valle', 'RW', 47, 22], ['Héctor Bazán', 'ST', 43, 25], ['Fabio Agurto', 'CB', 48, 21],
       ['Matías Vega', 'GK', 41, 40], ['Josué Canova', 'DM', 41, 22], ['Jair Toledo', 'CB', 43, 30],
       ['Sthefano Luzquiños', 'CB', 44, 18]
     ] },
    { n: 'Los Chankas', s: 'CHA', c1: '#00A94F', c2: '#FFFFFF', str: 52, p: [
       ['Hairo Camacho', 'GK', 51, 32], ['Héctor González', 'RB', 53, 34], ['Brayan Guevara', 'CB', 50, 28],
       ['Gonzalo Rizzo', 'CB', 53, 31], ['David Gonzáles', 'LB', 53, 29], ['Jorge Palomino', 'DM', 52, 31],
       ['Abdiel Ayarza', 'CM', 53, 34], ['Juan Ospina', 'AM', 52, 25], ['Jarlín Quintero', 'RW', 53, 33],
       ['Kelvin Sánchez', 'ST', 54, 27], ['Oshiro Takeuchi', 'LW', 51, 32], ['Luis Pretel', 'GK', 50, 24],
       ['Michael Kaufman', 'CB', 50, 24], ['Ayrthon Quintana', 'LB', 48, 25], ['Adrián Quiroz', 'CM', 50, 27],
       ['Marlon Torres', 'RW', 49, 24], ['Kenyi Barrios', 'ST', 49, 30], ['Carlos Pimienta', 'CB', 49, 34],
       ['Franco Nicolás Torres', 'CM', 45, 30], ['Christian Velarde', 'CM', 45, 28], ['Franco Saravia', 'GK', 47, 27],
       ['José Cárdenas', 'CB', 45, 23]
     ] },
    { n: 'Melgar', s: 'MEL', c1: '#E30613', c2: '#000000', str: 61, p: [
       ['Carlos Cáceda', 'GK', 65, 33], ['Alejandro Ramos', 'RB', 59, 26], ['Pier Barrios', 'CB', 65, 35],
       ['Leonel González', 'CB', 63, 31], ['Mathías Llontop', 'LB', 59, 23], ['Horacio Orzán', 'DM', 62, 37],
       ['Tomás Martínez', 'CM', 63, 30], ['Gian García', 'AM', 51, 19], ['Cristian Bordacahar', 'RW', 66, 33],
       ['Bernardo Cuesta', 'ST', 64, 36], ['Nelson Cabanillas', 'LW', 61, 24], ['Ricardo Farro', 'GK', 56, 40],
       ['Matías Lazo', 'CB', 61, 21], ['Alec Deneumostier', 'CB', 60, 26], ['Walter Tandazo', 'CM', 60, 25],
       ['Gregorio Rodríguez', 'RW', 59, 25], ['Percy Liza', 'AM', 58, 25], ['Lautaro Guzmán', 'LW', 60, 25]
     ] },
    { n: 'Sport Boys', s: 'BOY', c1: '#F58220', c2: '#000000', str: 57, p: [
       ['Jeferson Nolasco', 'GK', 54, 24], ['Luciano Zambrano', 'RB', 59, 19], ['Carlos Zambrano', 'CB', 66, 37],
       ['Renzo Alfani', 'CB', 58, 30], ['Mathías Llontop', 'LB', 59, 24], ['Federico Illanes', 'DM', 55, 32],
       ['Leonel Solís', 'CM', 54, 30], ['Nicolás Da Campo', 'AM', 56, 32], ['Luis Urruti', 'RW', 59, 34],
       ['Rolando Díaz', 'ST', 55, 27], ['Adrián Valiente', 'LW', 56, 18], ['Sebastián Oblitas', 'GK', 55, 19],
       ['Evanz Cruz', 'CB', 55, 18], ['Emilio Saba', 'LB', 54, 25], ['Jostin Alarcón', 'CM', 52, 24],
       ['Alexis Huamán', 'RW', 53, 22], ['Percy Liza', 'ST', 58, 26], ['Nicolás Valencia', 'CB', 51, 18],
       ['Diego Melián', 'GK', 49, 35], ['Diego Contreras', 'CB', 50, 20], ['Hansell Riojas', 'CB', 50, 35],
       ['Nilson Loyola', 'DM', 49, 32]
     ] },
    { n: 'Sport Huancayo', s: 'HUA', c1: '#E30613', c2: '#FFFFFF', str: 56, p: [
       ['Massimo Sandi', 'GK', 54, 24], ['Hugo Ángeles', 'RB', 57, 33], ['Gustavo Rissi', 'CB', 54, 28],
       ['Juan Barreda', 'CB', 55, 33], ['Axel Chávez', 'LB', 57, 28], ['Leonardo Villar', 'DM', 55, 26],
       ['Diego Carabaño', 'CM', 58, 29], ['Javier Sanguinetti', 'AM', 58, 36], ['Rick Campodónico', 'RW', 55, 30],
       ['Juan Martínez', 'ST', 54, 21], ['Nahuel Luján', 'LW', 55, 31], ['Ángel Zamudio', 'GK', 54, 29],
       ['Jean Franco Falconí', 'DM', 50, 30], ['Marcelo Gaona', 'LB', 52, 27], ['Ricardo Salcedo', 'CM', 50, 36],
       ['Yorleys Mena', 'RW', 52, 35], ['Ronal Huaccha', 'ST', 51, 33], ['Jeremy Rostaing', 'CB', 57, 31],
       ['Diego Campos', 'GK', 51, 30], ['Edú Ccorahua', 'GK', 50, 25], ['Jimmy Valoyes', 'CB', 58, 40],
       ['Yonatan Murillo', 'CB', 50, 34]
     ] },
    { n: 'Sporting Cristal', s: 'CRI', c1: '#6CACE4', c2: '#FFFFFF', str: 64, p: [
       ['Renato Solís', 'GK', 64, 27], ['Jhilmar Lora', 'RB', 64, 24], ['Rafael Lutiger', 'CB', 63, 23],
       ['Alejandro Pósito', 'CB', 58, 19], ['Nicolás Pasquini', 'LB', 65, 34], ['Jesús Pretell', 'DM', 64, 26],
       ['Martín Távara', 'CM', 66, 26], ['Santiago González', 'AM', 67, 25], ['Leandro Sosa', 'RW', 63, 31],
       ['Írven Ávila', 'ST', 64, 34], ['Luis Iberico', 'LW', 65, 27], ['Diego Enríquez', 'GK', 64, 23],
       ['Christofer Gonzáles', 'AM', 66, 32], ['Axel Cabellos', 'LB', 54, 18], ['Yoshimar Yotún', 'CM', 65, 35],
       ['Fernando Pacheco', 'RW', 61, 26], ['Maxloren Castro', 'LW', 63, 17], ['Catriel Cabellos', 'CM', 63, 20]
     ] },
    { n: 'Universitario', s: 'UNI', c1: '#FFE500', c2: '#8B1F2F', str: 64, p: [
       ['Sebastián Britos', 'GK', 64, 37], ['Hugo Ancajima', 'CM', 57, 27], ['Williams Riveros', 'CB', 65, 32],
       ['Anderson Santamaría', 'CB', 64, 33], ['Joel Carabalí', 'LB', 63, 28], ['Rodrigo Ureña', 'DM', 64, 32],
       ['Jair Concha', 'CM', 65, 26], ['Jairo Vélez', 'AM', 62, 30], ['Andy Polo', 'RW', 65, 30],
       ['A. Valera', 'ST', 65, 29], ['Edison Flores', 'LW', 65, 31], ['Miguel Vargas', 'GK', 59, 29],
       ['Aldo Corzo', 'CB', 64, 36], ['César Inga', 'LB', 62, 23], ['Martín Pérez Guedes', 'CM', 64, 33],
       ['Gabriel Costa', 'RW', 60, 35], ['José Rivera', 'ST', 62, 28], ['Matías Di Benedetto', 'CB', 63, 32]
     ] },
    { n: 'UTC', s: 'UTC', c1: '#E30613', c2: '#000000', str: 57, p: [
       ['Ángelo Campos', 'GK', 63, 33], ['Bruno Duarte', 'RB', 59, 31], ['Manuel Ganoza', 'CB', 56, 27],
       ['Junior Huerto', 'CB', 56, 27], ['Francesco Cavagna', 'LB', 54, 26], ['David Dioses', 'DM', 56, 30],
       ['Marcos Lliuya', 'CM', 56, 34], ['Joshua Cantt', 'AM', 57, 23], ['Jhosep Núñez', 'RW', 56, 23],
       ['Marlon de Jesús', 'ST', 58, 35], ['Abdiel Arroyo', 'LW', 57, 33], ['Ricardo Bettochi', 'GK', 54, 30],
       ['Dylan Caro', 'CB', 50, 27], ['Luis Garro', 'LB', 52, 30], ['Arquímedes Figuera', 'CM', 52, 37],
       ['Michel Rasmussen', 'RW', 54, 27], ['Santiago Gálvez', 'ST', 54, 22], ['Piero Serra', 'CB', 51, 29],
       ['Ignacio Barrios', 'GK', 60, 34], ['Kevin Ramírez', 'CB', 49, 17], ['Gilmar Paredes', 'CB', 51, 23],
       ['Luis Arce', 'CM', 60, 33]
     ] }
  ]
};

window.LEAGUES.bolivia = {
  id: 'bolivia', name: 'División Profesional de Bolivia', country: 'Bolivia', ucl: 2, rel: 2,
  pool: 'latam', squadSize: 17, teams: [
    { n: 'ABB', s: 'ABB', c1: '#E30613', c2: '#FFFFFF', str: 53, p: [
       ['Aldair Riascos', 'GK', 53, 31], ['Jean Riascos', 'RB', 52, 34], ['Sebastián Claure', 'CB', 51, 27],
       ['Carlos Jemio', 'CB', 52, 30], ['Pablo Vaca', 'LB', 56, 24], ['Alejandro Chumacero', 'DM', 51, 35],
       ['Andrés Guillermo', 'CM', 54, 20], ['Marco Salazar', 'AM', 53, 22], ['Layonel Figueroa', 'RW', 56, 27],
       ['José Briceño', 'ST', 55, 24], ['Emanuel Paniagua', 'LW', 54, 21], ['Santiago Paz', 'GK', 48, 22],
       ['Sebastián Reyes', 'CB', 48, 29], ['Fabio Zamora', 'LB', 49, 20], ['Rodderyck Perozo', 'CM', 47, 33],
       ['Juan Fajardo', 'RW', 47, 30], ['Gary Rea', 'ST', 51, 23], ['Denilson Gutiérrez', 'DM', 47, 28],
       ['Santiago Delgadillo', 'GK', 47, 22], ['Jairo Cuéllar', 'GK', 49, 27], ['Omar Preciado', 'CB', 49, 27],
       ['Zinedinne La Fuente', 'CB', 47, 21]
     ] },
    { n: 'Always Ready', s: 'ALW', c1: '#E30613', c2: '#000000', str: 58, p: [
       ['Alain Baroja', 'GK', 59, 37], ['José Herrera', 'RB', 57, 23], ['Nicolás Villarroel', 'CB', 57, 19],
       ['Carlos Medina', 'CB', 54, 21], ['Carlitos Rodríguez', 'LB', 57, 22], ['Álvaro Quiroga', 'DM', 58, 31],
       ['Pablo Lima', 'CM', 59, 26], ['Joel Amoroso', 'AM', 60, 38], ['Enrique Triverio', 'RW', 59, 38],
       ['Juan Godoy', 'ST', 59, 33], ['Carmelo Algarañaz', 'LW', 55, 30], ['Saidt Mustafá', 'GK', 55, 37],
       ['Álex Rambal', 'CB', 55, 34], ['Richet Gómez', 'LB', 53, 28], ['Jesús Maraude', 'CM', 52, 18],
       ['José Ojeda', 'RW', 53, 18], ['Carlos Collazo', 'ST', 55, 17], ['Edisson Restrepo', 'CB', 55, 30],
       ['Enzo Rodríguez', 'GK', 53, 23], ['Santiago Cuestas', 'CB', 52, 19], ['Javier Uzeda', 'CM', 51, 24],
       ['Darío Torrico', 'CM', 50, 26]
     ] },
    { n: 'Aurora', s: 'AUR', c1: '#00A94F', c2: '#FFFFFF', str: 56, p: [
       ['Joel Terrazas', 'GK', 54, 22], ['Miguel Aguada', 'RB', 55, 20], ['René Barbosa', 'CB', 54, 33],
       ['Iván Vidaurre', 'CB', 57, 39], ['José Córdova', 'LB', 57, 24], ['Alfredo Amarilla', 'DM', 55, 25],
       ['Santiago Carrasco', 'CM', 57, 19], ['Henry Vaca', 'AM', 58, 28], ['Sebastián Viviani', 'RW', 55, 19],
       ['Michael Rangel', 'ST', 55, 35], ['Rodrigo Ramallo', 'LW', 55, 36], ['Rubén Cordano', 'GK', 57, 28],
       ['Leandro Barro', 'CB', 52, 23], ['Anyelo Ortíz', 'LB', 50, 25], ['Harrison Mojica', 'CM', 53, 33],
       ['Sergio Ferreira', 'RW', 51, 23], ['David Villca', 'ST', 53, 17], ['Julián Velázquez', 'CB', 50, 36],
       ['Matías Barba', 'GK', 47, 20], ['Cristhian Chilo', 'GK', 51, 32], ['Iván Huayhuata', 'DM', 48, 37],
       ['Oscar Vaca', 'CB', 48, 38]
     ] },
    { n: 'Blooming', s: 'BLO', c1: '#6CACE4', c2: '#FFFFFF', str: 58, p: [
       ['Braulio Uraezaña', 'GK', 60, 31], ['Mauricio Cabral', 'RB', 60, 26], ['Gabriel Valverde', 'CB', 57, 36],
       ['Denilson Durán', 'CB', 58, 24], ['Juan Mercado', 'LB', 61, 29], ['Richard Spenhay', 'DM', 56, 29],
       ['Moisés Villarroel', 'CM', 58, 28], ['Roberto Hinojoza', 'AM', 57, 27], ['Miguel Villarroel', 'RW', 61, 23],
       ['César Menacho', 'ST', 57, 27], ['Percy Loza', 'LW', 58, 29], ['José Camacho', 'GK', 55, 21],
       ['Diago Giménez', 'CB', 55, 29], ['Julio Vila', 'LB', 57, 30], ['Danny Bejarano', 'CM', 54, 32],
       ['Luis Chávez', 'RW', 53, 20], ['Bayron Garcés', 'ST', 56, 33], ['Eduardo Justiniano', 'CB', 55, 21],
       ['Gustavo Almada', 'GK', 52, 32], ['Eduardo Álvarez', 'DM', 52, 23], ['Mario Pérez', 'CB', 52, 21],
       ['Marc Enoumba', 'CB', 52, 33]
     ] },
    { n: 'Bolívar', s: 'BOL', c1: '#6CACE4', c2: '#FFFFFF', str: 64, p: [
       ['Carlos Lampe', 'GK', 66, 38], ['Erwin Saavedra', 'RB', 61, 29], ['Miguel Torrén', 'CB', 62, 36],
       ['José Sagredo', 'CB', 62, 31], ['Ervin Vaca', 'LB', 56, 21], ['Leonel Justiniano', 'DM', 61, 32],
       ['Carlos Melgar', 'CM', 63, 30], ['Daniel Cataño', 'AM', 67, 33], ['Damián Batallini', 'RW', 65, 29],
       ['Martín Cauteruccio', 'ST', 69, 38], ['Patricio Rodríguez', 'LW', 64, 35], ['Federico Lanzillotta', 'GK', 64, 32],
       ['Santiago Echeverría', 'CB', 61, 35], ['Escleizon Freita', 'CM', 53, 18], ['Robson Matheus', 'CM', 59, 23],
       ['Jesús Velasquez', 'RW', 47, 18], ['Dorny Romero', 'ST', 59, 27], ['Rubén Cordano', 'GK', 60, 26]
     ] },
    { n: 'Guabirá', s: 'GUA', c1: '#E30613', c2: '#FFFFFF', str: 55, p: [
       ['Manuel Ferrel', 'GK', 57, 25], ['Joaquín Barro', 'RB', 56, 25], ['Enrique Áñez', 'CB', 56, 31],
       ['Andrés Moreno', 'CB', 56, 24], ['Pablo Melgar', 'LB', 53, 20], ['Andrés Ruiz', 'DM', 56, 19],
       ['Juan Carlos Parada', 'CM', 55, 30], ['Rafinha', 'AM', 55, 35], ['Gustavo Peredo', 'RW', 55, 26],
       ['Samuel Garzón', 'ST', 55, 26], ['Makerlo Téllez', 'LW', 54, 24], ['Jorge Arauz', 'GK', 53, 31],
       ['Enrique Flores', 'CB', 50, 32], ['Milciades Portillo', 'LB', 50, 34], ['Milton Maciel', 'CM', 52, 27],
       ['Yuto Baigorria', 'RW', 50, 20], ['Denilso Fernández', 'ST', 50, 24], ['Óscar Saucedo', 'CB', 51, 21],
       ['Roger Coronado', 'GK', 49, 22], ['Rafael Corrales', 'DM', 47, 22], ['Nicolás Masskooni', 'CB', 47, 23],
       ['Óscar Ríos', 'CB', 48, 17]
     ] },
    { n: 'Gualberto Villarroel San José', s: 'GVS', c1: '#0057B8', c2: '#FFFFFF', str: 54, p: [
       ['Bruno Poveda', 'GK', 56, 21], ['Ronald Bustos', 'RB', 55, 21], ['Augusto Seimandi', 'CB', 54, 30],
       ['Abraham Cabrera', 'DM', 51, 34], ['Jaime Villamil', 'LB', 53, 32], ['David Vargas', 'DM', 49, 22],
       ['Samuel Galindo', 'CM', 57, 33], ['Sergio Villamil', 'CM', 53, 30], ['Fernando Arismendi', 'RW', 55, 34],
       ['Bruno Vides', 'ST', 56, 32], ['Fabricio Vasquez', 'LW', 52, 22], ['Roberto Rivas', 'GK', 53, 40],
       ['Nicolás Landa', 'CB', 51, 29], ['Dico Roca', 'LB', 52, 28], ['Joel Bejarano', 'CM', 53, 29],
       ['Alexis Ribera', 'RW', 54, 29], ['Ferddy Roca', 'ST', 55, 25], ['Jhoni Ramallo', 'RB', 55, 22]
     ] },
    { n: 'Independiente Petrolero', s: 'IPE', c1: '#E30613', c2: '#FFFFFF', str: 54, p: [
       ['Jhohan Gutiérrez', 'GK', 56, 30], ['Saúl Torres', 'RB', 55, 36], ['Lázaro Crescencio', 'CB', 51, 23],
       ['Luis Rodríguez', 'CB', 54, 24], ['Luis Palma', 'LB', 61, 32], ['Daniel Rojas', 'DM', 55, 26],
       ['Rudy Cardozo', 'CM', 55, 36], ['José Gutiérrez', 'AM', 52, 22], ['Gean Morais', 'RW', 51, 23],
       ['Niven Huanca', 'ST', 52, 22], ['Gustavo Mendoza', 'LW', 49, 22], ['Jhunior Vera', 'GK', 48, 23],
       ['Leonardo Montenegro', 'CB', 49, 21], ['Daniel Aponte', 'LB', 47, 21], ['Thomaz Santos', 'CM', 51, 40],
       ['Kelvin Taborga', 'RW', 51, 21], ['Roberto Villavicencio', 'ST', 50, 32], ['Wilfredo Soleto', 'CB', 48, 30],
       ['Dalmiro Chuipa', 'DM', 45, 19], ['Pablo Grass', 'CB', 46, 21], ['Roni Santos', 'CB', 46, 25],
       ['Juan Morales', 'CB', 46, 22]
     ] },
    { n: 'Nacional Potosí', s: 'NPO', c1: '#5B2C83', c2: '#FFFFFF', str: 57, p: [
       ['Saidt Mustafá', 'GK', 58, 35], ['Saúl Torres', 'RB', 57, 35], ['Edisson Restrepo', 'CB', 58, 28],
       ['Leonardo Montenegro', 'DM', 51, 20], ['Daniel Mancilla', 'LB', 57, 34], ['Pedro Azogue', 'DM', 57, 31],
       ['Diego Hoyos', 'CM', 58, 32], ['Hugo Rojas', 'RW', 56, 31], ['Luis Pavia', 'RW', 58, 26],
       ['William Álvarez', 'AM', 55, 29], ['Andrés Torrico', 'LW', 58, 20], ['Pedro Galindo', 'GK', 56, 30],
       ['Luis Demiquel', 'RB', 56, 25], ['Óscar Baldomar', 'RB', 56, 29], ['Javier Guerra', 'RB', 52, 21],
       ['Saulo Guerra', 'RW', 56, 32], ['Duban Palacio', 'LW', 57, 28], ['Alejandro García', 'AM', 51, 23]
     ] },
    { n: 'Oriente Petrolero', s: 'ORI', c1: '#00A94F', c2: '#FFFFFF', str: 57, p: [
       ['Alejandro Torres', 'GK', 58, 28], ['Mizael Pinto', 'RB', 57, 26], ['Manuel Bonilla', 'CB', 56, 21],
       ['Jefferson Virreira', 'CB', 55, 29], ['Dieguito Rodríguez', 'LB', 59, 23], ['Pedro Siles', 'DM', 59, 34],
       ['Franz Gonzales', 'CM', 56, 26], ['Samuel Galindo', 'AM', 58, 38], ['José Flores', 'RW', 59, 23],
       ['Matías Roskopf', 'ST', 56, 28], ['Máximo Mamani', 'LW', 56, 21], ['Joel Bernal', 'GK', 55, 23],
       ['Enrique Taborga', 'CB', 56, 24], ['Roberto Díez', 'LB', 53, 22], ['Jorge Lovera', 'CM', 52, 29],
       ['Leonardo Vaca', 'RW', 51, 31], ['Braian Mamani', 'ST', 53, 20], ['Juvenal Rojas', 'CB', 55, 21],
       ['Remy Rivero', 'GK', 53, 20], ['Arnold Alba', 'GK', 52, 26], ['Marco Velasco', 'DM', 50, 19],
       ['Jhon Velasco', 'CB', 52, 22]
     ] },
    { n: 'Real Oruro', s: 'ORU', c1: '#FFE500', c2: '#000000', str: 53, p: [
       ['Alex Arancibia', 'GK', 54, 36], ['Leandro Corulo', 'RB', 52, 37], ['Daniel Castellón', 'CB', 54, 30],
       ['Carlos Chore', 'CB', 54, 26], ['Yamil Calle', 'LB', 54, 21], ['Ademar Rivera', 'DM', 52, 30],
       ['Bryan Puma', 'CM', 55, 23], ['Luis Rey', 'AM', 52, 31], ['Alejandro Barrón', 'RW', 55, 27],
       ['Denis Pinto', 'ST', 54, 31], ['Ángel Quiñónez', 'LW', 50, 30], ['Israel Peña', 'GK', 49, 28],
       ['Yhon Villegas', 'CB', 48, 29], ['Aderlin Marzana', 'LB', 47, 32], ['Edwin Rivera', 'CM', 46, 37],
       ['Yerco Vallejos', 'RW', 47, 31], ['Adrián Jiménez', 'ST', 50, 23], ['Rodrigo Ari', 'CB', 51, 21],
       ['Reymar Balceras', 'DM', 44, 20], ['Rivaldo Méndez', 'CB', 44, 24], ['Fabio Vargas', 'CB', 45, 22],
       ['Andrés Lizárraga', 'CB', 47, 20]
     ] },
    { n: 'Real Tomayapo', s: 'TOM', c1: '#E30613', c2: '#FFE500', str: 52, p: [
       ['Luis Cárdenas', 'GK', 53, 35], ['Vladimir Gálvez', 'RB', 51, 20], ['Javier Guerra', 'CB', 49, 22],
       ['Marvin Bejarano', 'CB', 53, 38], ['Robson dos Santos', 'LB', 52, 34], ['Lisandro Montenegro', 'DM', 52, 23],
       ['Victor Hugo Melgar', 'CM', 53, 38], ['Cristhian Árabe', 'AM', 51, 35], ['Nelson Orozco', 'RW', 52, 26],
       ['Francisco Nouet', 'ST', 54, 28], ['Mario Barbery', 'LW', 50, 24], ['Mauricio Adorno', 'GK', 51, 25],
       ['David Robles', 'CB', 48, 35], ['Ricardo Suárez', 'LB', 50, 33], ['Josué Mamani', 'CM', 48, 26],
       ['Ramiro Egüez', 'RW', 48, 22], ['Ronald Cuéllar', 'ST', 50, 29], ['Kevin Mamani', 'CB', 49, 22],
       ['Jhon Chávez', 'GK', 45, 30], ['Diego Flores', 'DM', 45, 26], ['Cliver Gareca', 'CB', 46, 29],
       ['César Aguilera', 'CB', 48, 22]
     ] },
    { n: 'San Antonio Bulo Bulo', s: 'SAB', c1: '#FFE500', c2: '#000000', str: 56, p: [
       ['Rodrigo Saracho', 'GK', 58, 31], ['Widen Saucedo', 'RB', 56, 28], ['Luis Barbosa', 'CB', 55, 32],
       ['Leonardo Justiniano', 'CB', 52, 23], ['Jorge Flores', 'LB', 56, 31], ['Carlos Suárez', 'DM', 55, 33],
       ['Hernán Rodríguez', 'CM', 56, 28], ['Adalid Terrazas', 'AM', 58, 24], ['Juan Montenegro', 'RW', 56, 28],
       ['Ariel Ávalos', 'ST', 54, 20], ['Máximo Alonso', 'LW', 57, 22], ['Luca Giossa', 'GK', 56, 25],
       ['Camilo Valencia', 'CB', 50, 33], ['Sebastián Villarroel', 'LB', 46, 18], ['Julio Herrera', 'CM', 56, 26],
       ['Rodrigo Vargas', 'ST', 53, 30], ['Anthony Vásquez', 'ST', 53, 23], ['Erwin Sánchez', 'AM', 57, 32]
     ] },
    { n: 'The Strongest', s: 'STR', c1: '#FFE500', c2: '#000000', str: 61, p: [
       ['Rodrigo Banegas', 'GK', 63, 31], ['Pablo Pedraza', 'RB', 60, 31], ['Martín Chiatti', 'CB', 61, 34],
       ['Adrián Jusino', 'CB', 61, 34], ['Kevin Romay', 'LB', 64, 32], ['Jovani Welch', 'DM', 61, 27],
       ['Kevin Salvatierra', 'CM', 64, 25], ['Raúl Castro', 'AM', 60, 37], ['Carlos Ventura', 'RW', 60, 29],
       ['Darwin Lom', 'ST', 61, 29], ['Adrián Estacio', 'LW', 60, 28], ['Diego Valdivia', 'GK', 55, 25],
       ['Carlos Roca', 'CB', 58, 29], ['Fabricio Quaglio', 'LB', 58, 23], ['Santiago Arce', 'CM', 56, 26],
       ['Gabriel Sotomayor', 'RW', 58, 27], ['Santiago Melgar', 'ST', 57, 21], ['Widen Saucedo', 'CB', 58, 29],
       ['Sebastián Arismendi', 'GK', 56, 21], ['Kiotto Mendoza', 'GK', 55, 20], ['Dilan Saavedra', 'DM', 55, 20],
       ['Yamil Portuncho', 'CB', 55, 20]
     ] },
    { n: 'Universitario de Vinto', s: 'UVI', c1: '#0057B8', c2: '#FFFFFF', str: 54, p: [
       ['Bruno Poveda', 'GK', 57, 23], ['Gustavo Visalla', 'RB', 52, 24], ['Paolo Alcócer', 'CB', 56, 26],
       ['Marco Gómez', 'CB', 52, 29], ['Guilder Cuéllar', 'LB', 52, 27], ['Hugo Dorrego', 'DM', 54, 33],
       ['Daniel Camacho', 'CM', 54, 28], ['Pablo Postigo', 'AM', 54, 23], ['Andrés Llano', 'RW', 51, 34],
       ['Johan Gómez', 'ST', 58, 32], ['José Veizaga', 'LW', 53, 30], ['Jesús Careaga', 'GK', 48, 29],
       ['Brayan Calderón', 'CB', 48, 28], ['José Pinto', 'LB', 49, 26], ['Didí Torrico', 'CM', 49, 39],
       ['Joel Calicho', 'RW', 48, 31], ['José Ábrego', 'ST', 51, 23], ['Agustín Jara', 'CB', 50, 34],
       ['Paolo García', 'GK', 48, 24], ['Santiago Rojas', 'GK', 45, 19], ['Álvaro Cuestas', 'DM', 45, 31],
       ['Julio Lazarte', 'CB', 45, 18]
     ] },
    { n: 'Wilstermann', s: 'WIL', c1: '#E30613', c2: '#0057B8', str: 59, p: [
       ['Lucas Salinas', 'GK', 57, 25], ['Leonel Pozo', 'RB', 60, 20], ['Claudio Ancieta', 'CB', 59, 23],
       ['Gonzalo Castillo', 'CB', 61, 36], ['Matías Delgadillo', 'LB', 61, 21], ['Wilder Soto', 'DM', 59, 22],
       ['Miguel Escobar', 'CM', 58, 31], ['Andy Velásquez', 'AM', 61, 19], ['Israel Rocabado', 'RW', 58, 20],
       ['Alfredo Aliaga', 'ST', 62, 19], ['Alexander Sosa', 'LW', 60, 25], ['Mateo Olivera', 'GK', 57, 20],
       ['Pablo Laredo', 'CB', 57, 33], ['Oscar Flores', 'LB', 57, 21], ['Erick Veizaga', 'CM', 55, 19],
       ['Johan Perea', 'RW', 53, 25], ['Thomas Monterrubianessi', 'ST', 56, 27], ['Diego Roca', 'CB', 55, 26],
       ['Leonel Urquieta', 'GK', 55, 30], ['Santiago Zotes', 'GK', 53, 22], ['Sergio Andia', 'DM', 54, 19],
       ['Axel Mendoza', 'CB', 54, 31]
     ] }
  ]
};

window.LEAGUES.venezuela = {
  id: 'venezuela', name: 'Liga FUTVE', country: 'Venezuela', ucl: 2, rel: 2,
  pool: 'latam', squadSize: 17, teams: [
    { n: 'Academia Puerto Cabello', s: 'APC', c1: '#0057B8', c2: '#FFE500', str: 56, p: [
       ['Luis Romero', 'GK', 59, 34], ['Luis Casiani', 'RB', 56, 23], ['Mamadou Mbaye', 'CB', 59, 27],
       ['Edwin Peraza', 'CB', 57, 32], ['Tony Shimaga', 'CB', 53, 25], ['Abdul Awudu', 'CM', 54, 24],
       ['Harrison Contreras', 'CM', 59, 36], ['Musa Isah', 'CM', 52, 23], ['Raudy Guerrero', 'RW', 56, 31],
       ['José Paredes', 'ST', 59, 24], ['Gerardo Padrón', 'LW', 59, 22], ['Eduardo Herrera', 'GK', 55, 32],
       ['Heiber Linares', 'CB', 53, 24], ['Yeiker Rebolledo', 'RB', 49, 21], ['Junior Cedeño', 'CM', 57, 33],
       ['Carlos Velásquez', 'AM', 48, 20], ['Rubén Rojas', 'ST', 56, 32], ['Dimas Meza', 'ST', 55, 31]
     ] },
    { n: 'Mineros de Guayana', s: 'MIN', c1: '#000000', c2: '#F58220', str: 54, p: [
       ['Julio Morales', 'GK', 54, 23], ['Elijah Pacheco', 'RB', 53, 21], ['Maiker Rivas', 'CB', 53, 26],
       ['José Castellano', 'CB', 52, 21], ['Diosner Pacheco', 'LB', 54, 20], ['Christian Gómez', 'DM', 55, 27],
       ['José Pinto', 'CM', 56, 29], ['Gianfabrizio González', 'AM', 56, 16], ['Jeremi Machado', 'RW', 52, 21],
       ['Diosmer Pacheco', 'ST', 56, 21], ['Jesús Figueroa', 'LW', 52, 22], ['Javier Bravo', 'GK', 51, 22],
       ['César González', 'CB', 53, 22], ['Yanier Rodríguez', 'LB', 48, 22], ['Emilxon Rodríguez', 'CM', 47, 19],
       ['Carlos Espinoza', 'RW', 49, 24], ['Gabriel Monjes', 'ST', 49, 22], ['Santiago Lejarazo', 'CB', 48, 18],
       ['Ángel Sucre', 'GK', 47, 20], ['Carlos Barreto', 'CM', 49, 25], ['Luis El Khuffash', 'CM', 49, 23],
       ['Jesús Valbuena', 'CM', 45, 21]
     ] },
    { n: 'Carabobo FC', s: 'CBO', c1: '#0057B8', c2: '#FFE500', str: 58, p: [
       ['Lucas Bruera', 'GK', 59, 27], ['Marcel Guaramato', 'RB', 58, 31], ['Leonardo Aponte', 'CB', 59, 31],
       ['Norman Rodríguez', 'CB', 58, 26], ['Miguel Pernía', 'LB', 60, 24], ['Gustavo González', 'DM', 60, 29],
       ['Juan Pérez', 'CM', 58, 26], ['Matías Núñez', 'DM', 56, 24], ['Edson Tortolero', 'RW', 59, 27],
       ['Flabián Londoño', 'ST', 58, 24], ['Robert Hernández', 'LW', 56, 31], ['Diego Gil', 'GK', 53, 23],
       ['Ezequiel Neira', 'CB', 57, 24], ['Pablo Bonilla', 'RB', 56, 25], ['Franner López', 'CM', 55, 22],
       ['Javier Berríos', 'RW', 58, 28], ['José Riasco', 'ST', 52, 21], ['Carlos Ramos', 'CM', 53, 26]
     ] },
    { n: 'Caracas FC', s: 'CAR', c1: '#E30613', c2: '#FFFFFF', str: 61, p: [
       ['Frankarlos Benítez', 'GK', 62, 21], ['Edgardo Rito', 'RB', 61, 29], ['Luis Mago', 'CB', 63, 30],
       ['Francisco La Mantía', 'CB', 62, 29], ['Jesús Yendis', 'LB', 63, 27], ['Leslie Heráldez', 'DM', 60, 32],
       ['Vicente Rodríguez', 'CM', 62, 30], ['Michael Covea', 'AM', 63, 31], ['José Hernández', 'RW', 61, 28],
       ['Jeriel De Santis', 'ST', 61, 23], ['Néstor Jiménez', 'ST', 57, 22], ['Juan Vegas', 'GK', 52, 20],
       ['Brayan Rodríguez', 'CB', 59, 28], ['Daniel Rivillo', 'RB', 60, 28], ['Daniel Aguilar', 'CM', 62, 27],
       ['Chris Martinez', 'RW', 53, 18], ['Lucciano Reinoso', 'ST', 58, 19], ['Miguel Vegas', 'DM', 60, 19]
     ] },
    { n: 'Deportivo La Guaira', s: 'DLG', c1: '#FF6600', c2: '#000000', str: 57, p: [
       ['Cristopher Varela', 'GK', 59, 27], ['Carlos Rojas', 'RB', 59, 22], ['Guillermo Ortiz', 'CB', 57, 34],
       ['Carlos Rivero', 'CB', 59, 34], ['Nelson Hernández', 'LB', 57, 34], ['José Correa', 'DM', 56, 20],
       ['Rommel Ibarra', 'CM', 57, 26], ['Carlos Faya', 'AM', 56, 24], ['José Alí Meza', 'RW', 57, 35],
       ['Anthony Uribe', 'ST', 59, 36], ['Flabián Londoño', 'LW', 56, 26], ['Jorge Sánchez', 'GK', 62, 20],
       ['Genderson Ascanio', 'CB', 52, 23], ['Matías Orihuela', 'LB', 54, 34], ['César Da Silva', 'CM', 52, 22],
       ['Miguel González', 'RW', 56, 22], ['Luis Casimiro Peña', 'ST', 54, 24], ['Juan Herrera', 'CB', 54, 25],
       ['Juan Carlos Castellanos', 'CM', 52, 31], ['Manuel Sulbarán', 'CM', 52, 24], ['Juan Luis Perdomo', 'CM', 52, 25],
       ['Maiken González', 'CM', 51, 22]
     ] },
    { n: 'Deportivo Táchira', s: 'TAC', c1: '#FFE500', c2: '#000000', str: 60, p: [
       ['Jesús Camargo', 'GK', 62, 27], ['Roberto Rosales', 'RB', 63, 36], ['Mauro Maidana', 'CB', 61, 34],
       ['Lucas Acevedo', 'CB', 58, 33], ['Nelson Hernández', 'RB', 61, 32], ['Leandro Fioravanti', 'DM', 59, 33],
       ['Maurice Cova', 'CM', 62, 32], ['Carlos Sosa', 'AM', 62, 29], ['Juan Ortíz', 'RW', 59, 31],
       ['José Balza', 'ST', 60, 27], ['Luis Zuñiga', 'LW', 51, 21], ['Alejandro Araque', 'GK', 59, 29],
       ['Pablo Camacho', 'CB', 56, 34], ['Juan Sánchez', 'CB', 53, 19], ['Juan Requena', 'CM', 60, 26],
       ['Jean Castillo', 'RW', 57, 22], ['Lucas Cano', 'ST', 60, 30], ['Daniel Saggiomo', 'AM', 59, 26]
     ] },
    { n: 'Estudiantes de Mérida', s: 'EDM', c1: '#0057B8', c2: '#FFFFFF', str: 57, p: [
       ['Tito Rojas', 'GK', 57, 39], ['Jean Fran Gutiérrez', 'RB', 58, 29], ['Luis Caicedo', 'CB', 55, 34],
       ['Christopher Rodríguez', 'CB', 54, 29], ['Michael Maldonado', 'LB', 59, 25], ['Cristhian Rivas', 'DM', 56, 29],
       ['Wilken Ramírez', 'CM', 58, 24], ['Jesús Lobo', 'AM', 57, 24], ['Ronaldo Chacón', 'RW', 56, 28],
       ['Jesús Hernández', 'ST', 57, 33], ['Jhon Moreno', 'LW', 57, 23], ['Eddie Roberts', 'GK', 53, 32],
       ['Héctor Acosta', 'CB', 53, 26], ['Geovan Montes', 'LB', 55, 30], ["Andrés D'Agostino", 'CM', 52, 24],
       ['Angelo Peña', 'RW', 54, 37], ['Andrés Montero', 'ST', 53, 32], ['José Montilla', 'CB', 54, 22],
       ['Diego Mejias', 'CM', 49, 21], ['Luis Verá', 'CM', 51, 21], ['Yohandry Lacruz', 'CM', 48, 19],
       ['Ender Albarrán', 'CM', 50, 18]
     ] },
    { n: 'Trujillanos FC', s: 'TRU', c1: '#C8102E', c2: '#000000', str: 53, p: [
       ['César Atamañuk', 'GK', 54, 30], ['Brayan Morales', 'RB', 54, 24], ['Darvis Rodríguez', 'CB', 54, 32],
       ['Ezequiel Gnemmi', 'CB', 51, 27], ['Greyberth Trompetera', 'LB', 53, 22], ['Kevin González', 'DM', 51, 28],
       ['Carlos Suárez', 'CM', 54, 34], ['Axel Abet', 'AM', 54, 28], ['José Rivas Gamboa', 'RW', 51, 28],
       ['Franklin González', 'ST', 52, 30], ['Junior Paredes', 'LW', 53, 25], ['Osnel García', 'GK', 47, 22],
       ['Kar Sanchez', 'CB', 48, 24], ['Mayker González', 'LB', 46, 38], ['Agustín Araujo', 'CM', 46, 27],
       ['Joantony Carmona', 'RW', 49, 25], ['Christian Santos', 'ST', 48, 38], ['Julio da Silva', 'CB', 48, 25],
       ['José Luis Granados', 'CB', 47, 40], ['Manuel Granados', 'CB', 44, 37], ['Jhonny González', 'CB', 46, 31],
       ['Enderson Abreu', 'CM', 47, 26]
     ] },
    { n: 'Metropolitanos FC', s: 'MET', c1: '#0057B8', c2: '#FFFFFF', str: 56, p: [
       ['Yhonatann Yustiz', 'GK', 59, 34], ['Francisco Manenti', 'RB', 56, 30], ['Andrés Ferro', 'CB', 58, 25],
       ['Yolfran Caricote', 'CB', 57, 27], ['Leonardo Pérez', 'LB', 57, 23], ['Rafael Sangiovani', 'DM', 55, 28],
       ['George Ayine', 'CM', 56, 28], ['Jaiver Gimenez', 'AM', 56, 21], ['Nicolás Fedor', 'RW', 57, 41],
       ['Brayan Alcócer', 'ST', 57, 23], ['José Riasco', 'LW', 51, 22], ['Jesús Lara', 'GK', 54, 20],
       ['Isaac Ramírez', 'CB', 51, 25], ['Angel Jaimes', 'LB', 51, 21], ['David Zalzman', 'CM', 52, 30],
       ['Kavier Ortiz', 'RW', 53, 24], ['Alexander Nieves', 'ST', 54, 20], ['Daniel Rivillo', 'CB', 54, 30],
       ['Alan Vázquez', 'GK', 50, 18], ['Christian Camarillo', 'CB', 51, 24], ['Alejandro Hernández', 'DM', 50, 18],
       ['Óscar Hinojosa', 'CB', 52, 20]
     ] },
    { n: 'Monagas SC', s: 'MON', c1: '#0057B8', c2: '#FFE500', str: 56, p: [
       ['Thomas Riveros', 'GK', 57, 25], ['Alexis Rodas', 'RB', 55, 29], ['Facundo Queiroz', 'CB', 57, 28],
       ['Marcos Maitán', 'CB', 56, 18], ['Kevin De la Hoz', 'LB', 57, 28], ['Jean Colorado', 'DM', 54, 26],
       ['Cristian Ramírez', 'CM', 54, 23], ['Andrés Romero', 'AM', 56, 23], ['Fernando Basante', 'RW', 57, 23],
       ['Antonio Romero', 'ST', 55, 29], ['Edder Farías', 'LW', 56, 38], ['Jesús Cabrera', 'GK', 52, 24],
       ['Elvis Perlaza', 'CB', 54, 37], ['Dioner Fuentes', 'LB', 51, 18], ['Felipe Jaramillo', 'CM', 51, 30],
       ['Ronald Rodríguez', 'RW', 52, 21], ['Edward Osorio', 'ST', 50, 21], ['Yulwuis Perez', 'CB', 53, 21],
       ['Eduardo Lima', 'GK', 50, 34], ['Jesús Paz', 'CB', 51, 25], ['Ricardo Rincones', 'CB', 49, 18],
       ['Nicolás Henry', 'DM', 48, 28]
     ] },
    { n: 'Portuguesa FC', s: 'POR', c1: '#E30613', c2: '#FFFFFF', str: 55, p: [
       ['Samuel Rodríguez', 'GK', 53, 23], ['Germán Aguirre', 'RB', 55, 28], ['Luis Quero', 'CB', 55, 22],
       ['Antony Trujillo', 'CB', 55, 28], ['Néstor Trejo', 'LB', 53, 22], ['José Soto', 'DM', 54, 32],
       ['Keiver Zúñiga', 'CM', 55, 28], ['Christopher Montaña', 'AM', 56, 27], ['Jonathan Cañete', 'RW', 54, 30],
       ['Joel Martínez', 'ST', 56, 28], ['José Pérez', 'LW', 58, 28], ['Juan Reyes', 'GK', 49, 31],
       ['Moisés Acuña', 'CB', 49, 30], ['César Urpin', 'LB', 52, 32], ['Johan Moreno', 'CM', 49, 35],
       ['Rubén Rojas', 'RW', 56, 34], ['Robert Mendoza', 'ST', 53, 22], ['Guillermo Benítez', 'CB', 58, 27],
       ['Lautaro Lovazzano', 'CM', 47, 24], ['José Calzadilla', 'CM', 48, 24], ['Ricardo Toussaint', 'CM', 50, 25],
       ['Albaro Polo', 'CM', 47, 21]
     ] },
    { n: 'Rayo Zuliano', s: 'RAY', c1: '#FFFFFF', c2: '#E30613', str: 53, p: [
       ['José Camacaro', 'GK', 52, 24], ['Frank Chávez', 'RB', 50, 21], ['Jean Lossada', 'CB', 52, 21],
       ['Andrés Kinsler', 'CB', 50, 21], ['Óscar Conde', 'LB', 50, 24], ['Johao Martínez', 'DM', 53, 27],
       ['Jhan Vélez', 'CM', 52, 20], ['Deyson Copete', 'AM', 52, 25], ['Cristian Maldonado', 'RW', 52, 21],
       ['Cristian Romero', 'ST', 68, 21], ['Gilmar Martínez', 'LW', 53, 20], ['Luis Corredor', 'GK', 49, 29],
       ['Paolo Chacón', 'CB', 47, 29], ['Samuel Orejuela', 'LB', 46, 26], ['Jyanni Osorio', 'CM', 49, 19],
       ['José Ochoa', 'RW', 48, 28], ['Luis Dugarte', 'ST', 47, 21], ['Jaider Julio', 'CB', 47, 26],
       ['Jeremías Medina', 'GK', 47, 18], ['Oscar García', 'DM', 44, 20], ['Fernando Díaz', 'CB', 44, 22],
       ['Ángel Jimenez', 'CB', 45, 21]
     ] },
    { n: 'UCV FC', s: 'UCV', c1: '#0057B8', c2: '#FFFFFF', str: 59, p: [
       ['Rafael Romo', 'GK', 67, 36], ['Gonzalo Mottes', 'RB', 64, 28], ['Williams Velásquez', 'CB', 58, 29],
       ['Edwin Peraza', 'CB', 60, 33], ['Steven Pabón', 'LB', 56, 25], ['Francisco Solé', 'DM', 56, 29],
       ['Vicente Rodríguez', 'CM', 60, 32], ['Jean Polo', 'AM', 58, 21], ['Juan Camilo Zapata', 'RW', 59, 32],
       ['Juan Alegría', 'ST', 56, 24], ['Roberto Sarli', 'LW', 58, 22], ['Giancarlo Schiavone', 'GK', 51, 33],
       ['Kendrys Silva', 'CB', 55, 33], ['Yohan Cumana', 'LB', 54, 30], ['Maicol Ruiz', 'CM', 55, 23],
       ['Gianmarco Martínez', 'RW', 56, 19], ['Diego Rinaldi', 'ST', 51, 21], ['Daniel Carrillo', 'CB', 56, 31],
       ['Carlos González', 'GK', 67, 27], ['Diego Ochoa', 'GK', 49, 19], ['Federico Briceño', 'DM', 51, 22],
       ['Alberto Rodríguez', 'CB', 52, 21]
     ] },
    { n: 'Deportivo Anzoátegui', s: 'ANZ', c1: '#0057B8', c2: '#FFFFFF', str: 53, p: [
       ['Josué Agüero', 'GK', 51, 24], ['Didier Bueno', 'RB', 51, 26], ['Andry Vera', 'CB', 51, 23],
       ['Carlos Lujano', 'CB', 54, 35], ['Juan Silgado', 'LB', 55, 27], ['Jhon James Pacheco', 'DM', 52, 24],
       ['Guillermo Marín', 'CM', 54, 25], ['Emerson Ruíz', 'AM', 52, 23], ['Edanyilber Navas', 'RW', 55, 26],
       ['Deivi Tegues', 'ST', 52, 23], ['Antony Velasco', 'LW', 51, 27], ['Wilbert Hernández', 'GK', 48, 25],
       ['José Lovera', 'CB', 49, 27], ['Ruybert Henríquez', 'LB', 48, 21], ['Abrahan Moreno', 'CM', 49, 29],
       ['Frannaicel Sinza', 'RW', 48, 20], ['Juan Saab', 'ST', 51, 23], ['David Guevara', 'CB', 49, 25],
       ['Gabriel Fuentes', 'CB', 46, 29], ['Pablo Bonilla', 'CB', 55, 27], ['Carlos Cermeño', 'CM', 45, 31],
       ['Aldry Contreras', 'CM', 46, 22]
     ] },
    { n: 'Yaracuyanos FC', s: 'YAR', c1: '#00A94F', c2: '#FFE500', str: 53, p: [
       ['Benito José Rivero Álamo', 'GK', 53, 42], ['Oscar Alfonzo Parra Graterol', 'RB', 51, 29], ['Fernando Antonio Puerta Mujica', 'CB', 50, 36],
       ['Giovanni José Dolgetta Soto', 'CB', 55, 32], ['Alexis Baquero', 'LB', 52, 40], ['Edwin Bracho', 'DM', 51, 25],
       ['Brayan Darío Alzamora Velasco', 'CM', 53, 31], ['Gustavo Alejandro Peralta Vásquez', 'AM', 51, 30], ['Denny Stibenson Herrera Guillén', 'RW', 54, 31],
       ['Jesús Enrique Ordóñez Díaz', 'ST', 55, 37], ['Edwin Enrique Ibarra Preciado', 'LW', 53, 27], ['Kevin Rami Abouassi Chaarani', 'GK', 48, 27],
       ['Jesús Gabriel Gonzalez', 'CB', 47, 34], ['Manuel Antonio Ramirez Cardozo', 'LB', 47, 30], ['Williams José Lugo Ladera', 'CM', 49, 30],
       ['Isaac Parra', 'RW', 51, 21], ['Víctor Alfonzo Víez Mérida', 'ST', 51, 27], ['Jorge Luis Márquez Gómez', 'CB', 49, 38],
       ['Juan Rotjes', 'CM', 45, 33], ['Douglas Bracho', 'CM', 45, 37], ['Francisco Gabriel Rivero Pérez', 'CM', 44, 34],
       ['Rubén Darío Regalado Rivas', 'CM', 44, 34]
     ] },
    { n: 'Zamora FC', s: 'ZAM', c1: '#000000', c2: '#FFE500', str: 56, p: [
       ['Kevin Armesto', 'GK', 56, 29], ['Santiago Gómez', 'RB', 55, 23], ['Brayan Rodríguez', 'CB', 53, 30],
       ['Anthony Matos', 'CB', 56, 31], ['Armando Rivas', 'LB', 58, 23], ['Arles Flores', 'DM', 55, 35],
       ['Helzon Pomozy', 'CM', 58, 18], ['Cristian Díaz', 'AM', 58, 26], ['Marco Bustillo', 'RW', 58, 30],
       ['Freddy Espinal', 'ST', 56, 29], ['Néstor Jiménez', 'LW', 51, 23], ['Beycker Velásquez', 'GK', 51, 30],
       ['Jean Madera', 'CB', 51, 27], ['Juan Mosquera', 'LB', 57, 25], ['Santos Torrealba', 'CM', 53, 19],
       ['Roberth Patiño', 'RW', 52, 21], ['José Luis Sinisterra', 'ST', 51, 28], ['Isai Valladares', 'CB', 52, 21],
       ['Yonaiber Pérez', 'GK', 51, 21], ['Jean Exime', 'CB', 49, 20], ['Stiven Valencia', 'CB', 49, 23],
       ['Juan Manuel Valencia', 'CM', 50, 28]
     ] }
  ]
};
