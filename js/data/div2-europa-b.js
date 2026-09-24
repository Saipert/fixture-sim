/* =========================================================================
   SEGUNDAS DIVISIONES — Portugal y Países Bajos.
   Ascensos y descensos según el reglamento actual (ver PROMOTIONS).
   ========================================================================= */
window.LEAGUES = window.LEAGUES || {};

window.LEAGUES.portugal2 = {
  id: "portugal2", name: "Liga Portugal 2", country: "Portugal", tier: 2, ucl: 0, rel: 0,
  pool: "pt", squadSize: 17, teams: [
    { n: "CD Tondela", s: "TON", c1: "#FFE500", c2: "#000000", str: 57, p: [
       ['Bernardo', 'GK', 57, 22], ['Bebeto', 'RB', 59, 35], ['João Afonso', 'CB', 58, 35],
       ['Brayan Medina', 'CB', 57, 23], ['João Talocha', 'LB', 59, 35], ['André Ceitil', 'DM', 56, 30],
       ['Juan Rodríguez', 'CM', 48, 19], ['Xabi Huarte', 'AM', 54, 24], ['Rony Lopes', 'RW', 62, 29],
       ['J. Siebatcheu', 'ST', 62, 29], ['Ivan Cavaleiro', 'LW', 56, 31], ['Cañizares', 'GK', 55, 23],
       ['Christian Marques', 'DM', 55, 22], ['Rémy Vita', 'LB', 57, 24], ['Cícero', 'DM', 55, 28],
       ['Maranhão', 'RW', 57, 26], ['Miro', 'ST', 56, 22], ['Tiago Manso', 'RB', 57, 25]
     ] },
    { n: "Portimonense SC", s: "POR", c1: "#000000", c2: "#E30613", str: 59, p: [
       ['Maycon Cleiton', 'GK', 59, 28], ['Alexandre Abel', 'RB', 58, 28], ['Heitor Rodrigues', 'CB', 57, 26],
       ['Samy Neves', 'CB', 58, 27], ['Thauan Lara', 'LB', 57, 22], ['Samuel Lobato', 'DM', 61, 25],
       ['Vitor Xavier', 'CM', 58, 26], ['Zé Gabriel', 'AM', 59, 27], ['Danio Djassi', 'RW', 58, 20],
       ['Tamble Monteiro', 'ST', 60, 26], ['Mateus Santos', 'LW', 60, 27], ['Douglas Friedrich', 'GK', 55, 38],
       ['João Reis', 'CB', 56, 34], ['Diogo Casimiro', 'LB', 53, 28], ['Mateus Sarará', 'CM', 54, 24],
       ['Tiago Mamede', 'RW', 56, 24], ['Mesaque Djú', 'ST', 55, 27], ['Edney Silva', 'CB', 57, 22],
       ['Wellington Santana', 'GK', 52, 29], ['Sébastien Cibois', 'GK', 53, 28], ['Jarleysom Ferreira', 'DM', 52, 22],
       ['Douglas Grolli', 'CB', 52, 37]
     ] },
    { n: "AVS", s: "AVS", c1: "#00A94F", c2: "#FFFFFF", str: 58, p: [
       ['Pedro Trigueira', 'GK', 57, 38], ['Sidi Bane', 'RB', 56, 22], ['Guillem Molina', 'CB', 59, 26],
       ['Daniel Rivas', 'CB', 56, 25], ['Kiki Afonso', 'LB', 57, 32], ['Pedro Lima', 'DM', 60, 23],
       ['Rafael Barbosa', 'CM', 58, 30], ['Jaume Grau', 'AM', 61, 29], ['Jordi Escobar', 'RW', 58, 24],
       ['Tunde Akinsola', 'ST', 58, 23], ['Kobamelo Kodisang', 'LW', 60, 27], ['Simão Bertelli', 'GK', 60, 33],
       ['Aderlan Santos', 'CB', 52, 37], ['Cristian Devenish', 'LB', 53, 25], ['Tiago Galletto', 'CM', 58, 24],
       ['Nenê', 'RW', 54, 43], ['Diego Duarte', 'ST', 59, 24], ['Gustavo Mendonça', 'CB', 54, 23],
       ['João Gonçalves', 'GK', 61, 26], ['Ángel Algobia', 'CM', 52, 27], ['António Machado', 'CM', 50, 20],
       ['Guilherme Neiva', 'ST', 51, 25]
     ] },
    { n: "GD Chaves", s: "CHA", c1: "#E30613", c2: "#0057B8", str: 59, p: [
       ['Marko Gudžulić', 'GK', 60, 24], ['Aarón Romero', 'RB', 59, 27], ['Bruno Rodrigues', 'CB', 59, 25],
       ['Kiko', 'CB', 59, 27], ['Rui Carraça', 'LB', 56, 33], ['Pedro Pinho', 'DM', 56, 26],
       ['Pedro Pelágio', 'CM', 58, 26], ['Roan Wilson', 'AM', 60, 24], ['Paulo Victor', 'RW', 68, 25],
       ['Uroš Milovanović', 'ST', 57, 26], ['Rúben Pina', 'LW', 60, 26], ['Thiago Pereira', 'GK', 55, 22],
       ['Tiago Almeida', 'CB', 55, 25], ['Zach Muscat', 'LB', 54, 33], ['Ktatau', 'CM', 56, 25],
       ['Roberto Rodrigo', 'RW', 56, 38], ['Henrique Pereira', 'ST', 56, 24], ['Mamadou Tounkara', 'CB', 55, 25],
       ['Tiago Simões', 'CB', 52, 26], ['Ricardo Alves', 'CB', 54, 35], ['Gabi Costa', 'CM', 51, 21],
       ['João Teixeira', 'CM', 65, 32]
     ] },
    { n: "FC Vizela", s: "VIZ", c1: "#FFFFFF", c2: "#00A94F", str: 57, p: [
       ['Antonio Gomis', 'GK', 58, 23], ['Jean Pierre Rhyner', 'RB', 55, 30], ['Jota Gonçalves', 'CB', 59, 26],
       ['Bright Godwin', 'CB', 58, 25], ['Rodrigo Beirão', 'LB', 58, 23], ['Moha Moukhliss', 'DM', 58, 26],
       ['Angel Bastunov', 'CM', 58, 27], ['Leverton Pierre', 'AM', 57, 28], ['Damien Loppy', 'RW', 56, 29],
       ['Manu Garrido', 'ST', 58, 26], ['Natanael Ntolla', 'LW', 57, 27], ['Ruly García', 'GK', 54, 26],
       ['José Sampaio', 'CB', 53, 21], ['Ítalo Machado', 'LB', 52, 24], ['Giovani Bamba', 'CM', 52, 27],
       ['Miguel Tavares', 'RW', 50, 28], ['Rodrigo Ramos', 'ST', 54, 22], ['Andrea Hristov', 'CB', 54, 27],
       ['Pedro Souza', 'GK', 51, 24], ['Stefan Obradović', 'CB', 48, 23], ['Aleksandar Busnić', 'CM', 49, 29],
       ['Heinz Mörschel', 'CM', 50, 29]
     ] },
    { n: "SC Farense", s: "FAR", c1: "#000000", c2: "#FFFFFF", str: 56, p: [
       ['Miguel Carvalho', 'GK', 42, 30], ['Fran Delgado', 'RB', 56, 25], ['Lucas D’Agrella', 'CB', 57, 21],
       ['Alysson Oliveira', 'CB', 57, 29], ['Franco Romero', 'LB', 59, 31], ['Miguel Menino', 'DM', 56, 23],
       ['Geovanny Almeida', 'CM', 59, 22], ['André Candeias', 'AM', 57, 23], ['Rui Costa', 'RW', 61, 30],
       ['Bruno Almeida', 'ST', 59, 30], ['Darío Poveda', 'LW', 56, 29], ['Jakob Tånnander', 'GK', 52, 26],
       ['Derick Poloni', 'CB', 55, 33], ['Rúben Fernandes', 'LB', 56, 40], ['Yannick Semedo', 'CM', 52, 31],
       ['Leonardo Oliveira', 'RW', 54, 21], ['Jaiminho Pinto', 'ST', 55, 29], ['Toni Herrero', 'CB', 52, 25],
       ['Brian Araújo', 'GK', 51, 26], ['Matheus Gonçalves', 'CB', 50, 22], ['Rivaldo Morais', 'CB', 50, 26],
       ['Nikola Gjorgjev', 'CM', 50, 29]
     ] },
    { n: "CD Feirense", s: "FEI", c1: "#E30613", c2: "#FFFFFF", str: 59, p: [
       ['Francisco Meixedo', 'GK', 58, 25], ['Luiz Gustavo', 'RB', 59, 27], ['Robyelyson Barros', 'CB', 59, 23],
       ['Antonio Leal', 'CB', 56, 27], ['Bruno Silva', 'LB', 57, 34], ['Daouda Doumbia', 'DM', 60, 24],
       ['Nile John', 'CM', 58, 23], ['Gabi Miranda', 'AM', 61, 20], ['Leandro Antunes', 'RW', 60, 29],
       ['Kirill Klimov', 'ST', 60, 25], ['Jonny Arriba', 'LW', 60, 25], ['Diego Altube', 'GK', 54, 26],
       ['Zé Ricardo', 'CB', 57, 28], ['Jójó Fernandes', 'LB', 56, 27], ['Samad Popoola', 'CM', 56, 21],
       ['Desmond Nketia', 'RW', 52, 25], ['Miguel Correia', 'ST', 55, 22], ['Emanuel Fernandes', 'CB', 55, 23],
       ['Edgar Ié', 'CB', 51, 32], ['Isah Ali', 'CB', 52, 25], ['Gabriel Costa', 'CM', 61, 20],
       ['Ayoub Abou', 'CM', 53, 28]
     ] },
    { n: "Leixões SC", s: "LEI", c1: "#E30613", c2: "#FFFFFF", str: 57, p: [
       ['Miguel Ángel Morro', 'GK', 58, 26], ['Lourenço Figueiredo', 'RB', 58, 22], ['Rafael Santos', 'CB', 57, 28],
       ['Naldo Gomes', 'CB', 58, 38], ['Leo Díaz', 'LB', 57, 22], ['Paulinho Neves', 'DM', 54, 29],
       ['Ângelo Neto', 'CM', 57, 35], ['João Assunção', 'AM', 56, 22], ['Werton de Almeida', 'RW', 57, 23],
       ['José Bica', 'ST', 58, 23], ['Paulité', 'LW', 57, 26], ['Wesley Barbosa', 'GK', 51, 22],
       ['Simãozinho', 'CB', 51, 31], ['Serif Nhaga', 'LB', 55, 21], ['Evrard Zag', 'CM', 53, 36],
       ['Salvador Agra', 'RW', 52, 35], ['Morufdeen Moshood', 'ST', 52, 22], ['Paulinho Mota', 'CB', 55, 35],
       ['Igor Stefanović', 'GK', 51, 39], ['Hugo Basto', 'CB', 51, 33], ['Benjamin Kanuric', 'CM', 51, 23],
       ['Cláudio Araújo', 'CM', 51, 23]
     ] },
    { n: "FC Penafiel", s: "PEN", c1: "#E30613", c2: "#FFE500", str: 57, p: [
       ['Miguel Oliveira', 'GK', 56, 32], ['Iano Imbeni', 'RB', 55, 27], ['Gustavo Fernandes', 'CB', 59, 27],
       ['João Miguel Xavier', 'CB', 58, 33], ['Jaime Sánchez', 'LB', 58, 31], ['Roosewelt Neto', 'DM', 58, 26],
       ['Reko', 'CM', 56, 31], ['Ibrahima Kebe', 'AM', 54, 26], ['Pedro Vieira', 'RW', 54, 24],
       ['Hélder Suker', 'ST', 56, 27], ['Jota Silva', 'LW', 68, 24], ['Manuel Baldé', 'GK', 52, 24],
       ['Bruno Pereira', 'CB', 51, 28], ['Chico Ferreira', 'LB', 55, 27], ['Jaime Escario', 'CM', 53, 23],
       ['Raúl Alcaina', 'RW', 53, 26], ['Álvaro Santos', 'ST', 52, 21], ['Gonçalo Negrão', 'CB', 52, 23],
       ['Joan Femenías', 'GK', 51, 30], ['Cláudio Silva', 'CB', 51, 26], ['Meireles Injai', 'DM', 49, 23],
       ['Teddy Alloh', 'CB', 50, 24]
     ] },
    { n: "SC Torreense", s: "TOR", c1: "#00A94F", c2: "#FFFFFF", str: 61, p: [
       ['Lucas Paes', 'GK', 62, 29], ['Stopíra', 'RB', 62, 38], ['Aritz Muguruza', 'CB', 60, 25],
       ['David Bruno', 'CB', 62, 34], ['Javi Vázquez', 'LB', 60, 26], ['Arnau Casas', 'DM', 61, 22],
       ['Léo Azevedo', 'CM', 64, 22], ['Álex Alfaro', 'AM', 60, 24], ['Dany Jean', 'RW', 61, 24],
       ['Kévin Zohi', 'ST', 59, 30], ['Manu Pozo', 'LW', 62, 25], ['Unai Pérez', 'GK', 58, 25],
       ['Brian Agbor', 'CB', 58, 25], ['Danilo Ferreira', 'LB', 59, 22], ['Costinha', 'CM', 73, 34],
       ['Musa Drammeh', 'RW', 57, 25], ['Mateusz Kowalski', 'ST', 57, 21], ['Afonso Peixoto', 'CB', 56, 23],
       ['Silas Bjerre', 'GK', 53, 21], ['David Ivanov', 'GK', 53, 20], ['Mohamed Ali Diadié', 'CB', 55, 22],
       ['Pité', 'CM', 56, 32]
     ] },
    { n: "União de Leiria", s: "ULE", c1: "#0057B8", c2: "#FFFFFF", str: 58, p: [
       ['Salvi Carrasco', 'GK', 57, 26], ['Marc Baró', 'RB', 59, 27], ['Sema Velázquez', 'CB', 59, 36],
       ['Víctor Rofino', 'CB', 57, 24], ['Zé Vitor', 'LB', 66, 24], ['Genaro Rodríguez', 'DM', 58, 28],
       ['Famana Quizera', 'CM', 57, 24], ['Eboue Kouassi', 'AM', 59, 29], ['Juan Muñoz', 'RW', 59, 31],
       ['Jair Silva', 'ST', 56, 29], ['Pablo Fernández', 'LW', 58, 30], ['João Bravim', 'GK', 55, 28],
       ['João Silva', 'CB', 52, 28], ['Zé Pedro', 'LB', 70, 24], ['Jordan van der Gaag', 'CM', 55, 27],
       ['Júnior Armando', 'RW', 51, 25], ['Victor Silva', 'ST', 53, 22], ['Habib Sylla', 'CB', 53, 27],
       ['Jakob Odehnal', 'GK', 50, 25], ['Miguel Maga', 'CB', 66, 27], ['Vasco Oliveira', 'CB', 50, 26],
       ['Lucho Vega', 'CM', 52, 27]
     ] },
    { n: "Académica de Coimbra", s: "ACA", c1: "#000000", c2: "#FFFFFF", str: 63, p: [
       ['António Filipe', 'GK', 64, 41], ['António Montez', 'RB', 62, 25], ['André Serra', 'CB', 61, 28],
       ['Ruca Morgado', 'CB', 62, 24], ['Francisco Ferreira', 'LB', 62, 27], ['Leandro Silva', 'DM', 64, 32],
       ['Duarte Carvalho', 'CM', 64, 24], ['Lucas Henrique', 'AM', 63, 26], ['Noah Santos', 'RW', 63, 24],
       ['Khalid Hachadi', 'ST', 63, 28], ['Mario Rondón', 'LW', 63, 40], ['José Roxo', 'GK', 57, 18],
       ['Gonçalo Loureiro', 'CB', 59, 26], ['Rúben Freitas', 'LB', 59, 33], ['Gonçalo Ferreira', 'CM', 58, 25],
       ['Amadou Ba-Sy', 'RW', 58, 25], ['Hugo Oliveira', 'ST', 57, 22], ['"Ni" Rodrigues', 'CB', 62, 23],
       ['Bernardo Santos', 'GK', 56, 24], ['Elvis Mendes', 'CB', 57, 29], ['Vítor Bruno', 'DM', 55, 36],
       ['Nwankwo Obiora', 'CB', 58, 35]
     ] },
    { n: "FC Felgueiras", s: "FEL", c1: "#E30613", c2: "#FFFFFF", str: 54, p: [
       ['Didi', 'GK', 54, 23], ['João Pinto', 'RB', 53, 29], ['Dudu Cruz', 'CB', 55, 20],
       ['Pedro Rosas', 'CB', 53, 20], ['Filipe Cruz', 'LB', 54, 29], ['Henrique Martins', 'DM', 55, 25],
       ['Landinho', 'CM', 51, 20], ['Michel', 'AM', 56, 22], ['Mario Rivas', 'RW', 54, 29],
       ['Léo Teixeira', 'ST', 51, 33], ['Mathys Jean-Marie', 'LW', 56, 20], ['Cristiano', 'GK', 49, 29],
       ['Jean Felipe', 'CB', 48, 21], ['Dário', 'LB', 48, 31], ['João Rafael', 'CM', 47, 32],
       ['Lucas Duarte', 'RW', 49, 20], ['Feliz Vaz', 'ST', 49, 27], ['Afonso Silva', 'CB', 50, 24],
       ['Faissal Zangré', 'CM', 47, 27], ['Gabi Pereira', 'CM', 46, 21], ['Berna', 'CM', 47, 28],
       ['Felipe Scheibig', 'GK', 46, 26]
     ] },
    { n: "Amarante FC", s: "AMA", c1: "#0057B8", c2: "#FFFFFF", str: 56, p: [
       ['Nené Dias', 'GK', 54, 28], ['Carlos Silva', 'RB', 52, 26], ['Dani', 'CB', 56, 22],
       ['César', 'CB', 52, 31], ['Gil Pinto', 'LB', 54, 29], ['Kingsley Onyeukwu', 'DM', 54, 23],
       ['Thiago Silva', 'CM', 55, 28], ['Nélson Piquet', 'AM', 51, 27], ['Marquinhos', 'RW', 80, 31],
       ['Nelson Monteiro', 'ST', 53, 26], ['Paul Ayongo', 'LW', 55, 30], ['Paulo Jorge', 'GK', 48, 22],
       ['Armando Silva', 'CB', 51, 26], ['Diogo Pereira', 'LB', 51, 22], ['Paulo Magalhães', 'CM', 49, 32],
       ['Luizão', 'RW', 47, 27], ['Hélder Pedro', 'ST', 49, 28], ['Tiago Marques', 'CB', 50, 28],
       ['Andrézinho', 'CM', 61, 28], ['Rui Magalhães', 'CM', 45, 33]
     ] },
    { n: "Lusitânia FC", s: "LUS", c1: "#00A94F", c2: "#FFFFFF", str: 53, p: [
       ['Ricardo Moura', 'GK', 56, 38], ['Dylan Collard', 'RB', 52, 26], ['Silvério Silva', 'CB', 53, 31],
       ['Luís Rocha', 'CB', 62, 33], ['Bruno Faria', 'LB', 51, 22], ['Ibrahim Alhassan', 'DM', 52, 30],
       ['Tokinho Dória', 'CM', 52, 30], ['Mimito Biai', 'AM', 54, 29], ['Rodrigo Martins', 'RW', 51, 28],
       ['João Silva', 'ST', 53, 36], ['Miguel Pereira', 'LW', 54, 27], ['Marco Sousa', 'GK', 48, 31],
       ['Tiago Mesquita', 'CB', 50, 36], ['Tiago Cerveira', 'LB', 49, 34], ['Fabinho', 'CM', 75, 32],
       ['Arsénio Nunes', 'RW', 51, 37], ['Aly Palacios', 'ST', 47, 23], ['Gonçalo Braga', 'CB', 51, 23],
       ['Vítor Hugo', 'GK', 47, 25], ['Josué Sá', 'CB', 46, 34], ['Nicolas Ortiz', 'CM', 47, 19],
       ['Miguel Teixeira', 'CM', 47, 23]
     ] }
  ]
};

window.LEAGUES.eredivisie2 = {
  id: "eredivisie2", name: "Eerste Divisie", country: "Países Bajos", tier: 2, ucl: 0, rel: 0,
  pool: "nl", squadSize: 17, teams: [
    { n: "Vitesse", s: "VIT", c1: "#FFE500", c2: "#000000", str: 64, p: [
       ['Connor van den Berg', 'GK', 66, 25], ['Solomon Bonnah', 'RB', 62, 23], ['Justin Bakker', 'CB', 64, 28],
       ['Valon Zumberi', 'CB', 67, 24], ['Xiamaro Thenu', 'LB', 64, 22], ['Marco Schikora', 'DM', 66, 32],
       ['Moustafa Moustafa', 'CM', 64, 22], ['Yuval Ranon', 'AM', 63, 20], ['Dillon Hoogewerf', 'RW', 65, 23],
       ['Elias Huth', 'ST', 63, 29], ['João Pinto', 'LW', 62, 22], ['Jayden Siecker', 'GK', 59, 21],
       ['Nathan Markelo', 'CB', 61, 27], ['Lishairo Brudet', 'CM', 58, 20], ['Ricardo-Felipe Schwarz', 'CM', 61, 22],
       ['Adam Tahaui', 'RW', 59, 21], ['Naoufal Bannis', 'ST', 61, 24], ['Alexander Büttner', 'CB', 60, 37],
       ['Maximilian Brüll', 'GK', 57, 24], ['Dylan Tevreden', 'GK', 59, 21], ['Michel Driezen', 'CB', 58, 22],
       ['Jordy de Beer', 'CB', 58, 22]
     ] },
    { n: "Heracles Almelo", s: "HER", c1: "#000000", c2: "#FFFFFF", str: 61, p: [
       ['Fabian de Keijzer', 'GK', 62, 25], ['Jannes Wieckhoff', 'RB', 59, 24], ['Alec Van Hoorenbeeck', 'CB', 62, 26],
       ['Damon Mirani', 'CB', 61, 29], ['der van der Kust', 'LB', 61, 24], ['Jan Žambůrek', 'DM', 60, 24],
       ['Ajdin Hrustić', 'CM', 61, 28], ['Jeff Reine-Adélaïde', 'AM', 64, 27], ['Bryan Limbombe', 'RW', 59, 24],
       ['Luka Kulenović', 'ST', 63, 25], ['Mario Engels', 'LW', 60, 31], ['Robin Mantel', 'GK', 53, 24],
       ['Ivan Mesík', 'CB', 60, 24], ['Lorenzo Milani', 'LB', 57, 24], ['Thomas Bruns', 'AM', 61, 33],
       ['Yvandro Borges Sanches', 'LW', 57, 21], ['Jizz Hornkamp', 'ST', 62, 27], ['Walid Ould-Chikh', 'AM', 60, 25]
     ] },
    { n: "NAC Breda", s: "NAC", c1: "#FFE500", c2: "#000000", str: 62, p: [
       ['Daniel Bielica', 'GK', 63, 26], ['Cherrion Valerius', 'RB', 61, 19], ['Leo Greiml', 'CB', 64, 23],
       ['Terence Kongolo', 'CB', 61, 31], ['Boy Kemper', 'LB', 61, 26], ['Fredrik Jensen', 'DM', 60, 32],
       ['Lewis Holtby', 'CM', 65, 34], ['Maximilien Balard', 'CM', 62, 24], ['Raul Paula', 'AM', 61, 21],
       ['Sydney van Hooijdonk', 'ST', 63, 25], ['Mohamed Nassoh', 'LW', 62, 22], ['Konstantinos Lamprou', 'GK', 61, 33],
       ['Rio Hillen', 'CB', 60, 22], ['Christian Chiza', 'LB', 54, 17], ['Clint Leemans', 'CM', 63, 29],
       ['Jaakko Talvitie', 'RW', 61, 20], ['Kamal Sowah', 'ST', 62, 25], ['Charles-Andreas Brym', 'ST', 61, 26]
     ] },
    { n: "FC Volendam", s: "VOL", c1: "#E30613", c2: "#FFFFFF", str: 59, p: [
       ['Kayne van Oevelen', 'GK', 60, 21], ['Deron Payne', 'RB', 59, 22], ['Xavier Mbuyamba', 'CB', 64, 23],
       ['Mawouna Amevor', 'CB', 61, 33], ['Yannick Leliendal', 'LB', 61, 23], ['Alex Plat', 'DM', 59, 27],
       ['Nordin Bukala', 'CM', 58, 19], ['Ozan Kökçü', 'AM', 58, 26], ['Anthony Descotte', 'ST', 58, 21],
       ['Hendrik Veerman', 'ST', 62, 34], ['Brandley Kuwas', 'LW', 61, 32], ['Roy Steur', 'GK', 53, 20],
       ['Precious Ugwu', 'CB', 56, 19], ['Aaron Meijers', 'LB', 58, 37], ['Gibson Yah', 'CM', 57, 21],
       ['Joel Ideho', 'LW', 58, 21], ['Robert Mühren', 'ST', 61, 36], ['Kiano Dyer', 'CM', 57, 18]
     ] },
    { n: "Almere City FC", s: "ALM", c1: "#E30613", c2: "#000000", str: 62, p: [
       ['Jonas Wendlinger', 'GK', 63, 26], ['Boyd Reith', 'RB', 62, 27], ['Joey Jacobs', 'CB', 60, 26],
       ['James Lawrence', 'CB', 64, 34], ['Teun Bijleveld', 'LB', 62, 28], ['Enzo Cornelisse', 'DM', 62, 24],
       ['Milan de Haan', 'CM', 61, 23], ['Olivier de Nijs', 'AM', 64, 22], ['Byron Burgering', 'RW', 60, 26],
       ['Ferdy Druijf', 'ST', 63, 28], ['Julian Rijkhoff', 'LW', 60, 21], ['Tristan Kuijsten', 'GK', 57, 21],
       ['Misha Engel', 'CB', 56, 24], ['Emmanuel van de Blaak', 'LB', 57, 21], ['Job Kalisvaart', 'CM', 58, 22],
       ['Junior Kadile', 'RW', 57, 24], ['Emmanuel Poku', 'ST', 59, 21], ['Amoah Sam', 'CB', 57, 24],
       ['Joel van der Wilt', 'GK', 53, 22], ['Twan van der Zeeuw', 'CB', 55, 24], ['Jaden Pinas', 'DM', 54, 23],
       ['Tiziano Vianello', 'CB', 55, 21]
     ] },
    { n: "RKC Waalwijk", s: "RKC", c1: "#FFE500", c2: "#0057B8", str: 58, p: [
       ['Xander Mulder', 'GK', 56, 21], ['Bjarn Zorgdrager', 'RB', 60, 22], ['Roshon van Eijma', 'CB', 56, 28],
       ['Liam van Gelderen', 'CB', 56, 25], ['Juan Familia-Castillo', 'LB', 57, 26], ['Godfried Roemeratoe', 'DM', 59, 27],
       ['Daniël van Kaam', 'CM', 60, 26], ['Rein van Hedel', 'AM', 58, 22], ['Denilho Cleonise', 'RW', 59, 25],
       ['Jesper Uneken', 'ST', 57, 22], ['Tim van der Leij', 'LW', 59, 20], ['Mark Spenkelink', 'GK', 54, 29],
       ['Luuk Wouters', 'CB', 57, 27], ['Jordi Altena', 'LB', 55, 23], ['Harrie Kuster', 'CM', 53, 21],
       ['Chris Lokesa', 'RW', 54, 22], ['Roy Kuijpers', 'ST', 54, 26], ['Faissal Al Mazyani', 'CB', 55, 21],
       ['Yanick van Osch', 'GK', 52, 29], ['Luuk Vogels', 'GK', 51, 23], ['Loek Postma', 'CB', 53, 23],
       ['Nazjir Held', 'DM', 50, 21]
     ] },
    { n: "FC Emmen", s: "EMM", c1: "#E30613", c2: "#FFFFFF", str: 59, p: [
       ['Koen Bucker', 'GK', 57, 30], ['Jorginho Soares', 'RB', 60, 24], ['Christian Østergaard', 'CB', 58, 20],
       ['Tim Geypens', 'CB', 57, 21], ['Pascal Mulder', 'LB', 59, 27], ['Torben Rhein', 'DM', 60, 23],
       ['Alaa Bakir', 'CM', 60, 25], ['Luca Denk', 'AM', 60, 23], ['Romano Postema', 'RW', 57, 24],
       ['Jalen Hawkins', 'ST', 61, 25], ['Nelson Amadin', 'LW', 59, 25], ['Kevin Norder', 'GK', 55, 19],
       ['Lukas Larsen', 'CB', 54, 20], ['Daniël Beukers', 'LB', 53, 22], ['Adam Claridge', 'CM', 53, 20],
       ['Freddy Quispel', 'RW', 57, 26], ['Stan van Manen', 'ST', 55, 19], ['Juliën Mesbahi', 'CB', 53, 20],
       ['Aaron Wanki', 'GK', 53, 19], ['Luca Unbehaun', 'GK', 51, 25], ['Gijs Bolk', 'CB', 51, 21],
       ['Luca Everink', 'DM', 50, 25]
     ] },
    { n: "De Graafschap", s: "GRA", c1: "#0057B8", c2: "#FFFFFF", str: 61, p: [
       ['Ties Wieggers', 'GK', 60, 24], ['Rowan Besselink', 'RB', 60, 22], ['Othniël Raterink', 'CB', 62, 20],
       ['Levi Schoppema', 'CB', 62, 22], ['Joran Hardeman', 'LB', 62, 24], ['Milan Smits', 'DM', 63, 22],
       ['Teun Gijselhart', 'CM', 61, 21], ['Reuven Niemeijer', 'AM', 60, 31], ['Jevon Simons', 'RW', 59, 21],
       ['Dimitrios Theodoridis', 'ST', 62, 24], ['Ibrahim El Kadiri', 'LW', 59, 24], ['Sten Kremers', 'GK', 57, 22],
       ['Thomas Kok', 'CB', 60, 28], ['Stijn Bultman', 'LB', 57, 21], ['Tim Braem', 'CM', 57, 20],
       ['Nathan Kaninda', 'RW', 57, 22], ['Arjen van der Heide', 'ST', 57, 25], ['Kaya Symons', 'CB', 60, 21],
       ['Rick Jonkers', 'GK', 57, 22], ['Tygo Grotenhuis', 'CB', 56, 21], ['Nic Hartgers', 'CB', 55, 22],
       ['Fedde de Jong', 'CM', 53, 23]
     ] },
    { n: "Roda JC Kerkrade", s: "ROD", c1: "#FFE500", c2: "#000000", str: 60, p: [
       ['Justin Treichel', 'GK', 60, 23], ['Juul Timmermans', 'RB', 59, 23], ['Marco Tol', 'CB', 59, 28],
       ['Koen Jansen', 'CB', 62, 22], ['Tim Köther', 'LB', 59, 25], ['Josh Nisbet', 'DM', 59, 27],
       ['Mitchel Paulissen', 'CM', 60, 33], ['Joey Müller', 'AM', 60, 26], ['Cain Seedorf', 'RW', 62, 26],
       ['Anthony van den Hurk', 'ST', 63, 33], ['Iman Griffith', 'LW', 61, 26], ['Ben Zich', 'GK', 56, 23],
       ['Jay Kruiver', 'CB', 56, 25], ['Reda El Meliani', 'LB', 56, 21], ['Joshua Schwirten', 'CM', 55, 24],
       ['Michael Breij', 'RW', 58, 29], ['Jack Cooper-Love', 'ST', 57, 25], ['Jonathan Foss', 'CB', 55, 22],
       ['Jordy Steins', 'GK', 54, 21], ['Casper Van Hemelryck-Bray', 'GK', 53, 20], ['Dario Van den Buijs', 'CB', 54, 31],
       ['Lucas Beerten', 'CM', 54, 23]
     ] },
    { n: "VVV-Venlo", s: "VVV", c1: "#FFE500", c2: "#000000", str: 59, p: [
       ['Trevor Doornbusch', 'GK', 59, 27], ['Sylian Mokono', 'RB', 62, 27], ['Luuk Verheij', 'CB', 60, 21],
       ['Dylan Timber', 'CB', 60, 26], ['Lars de Blok', 'LB', 59, 22], ['Joep Kluskens', 'DM', 59, 24],
       ['Jorn Triep', 'CM', 58, 21], ['Driess Saddiki', 'AM', 62, 30], ['Lasse Wehmeyer', 'RW', 58, 24],
       ['Dean Zandbergen', 'ST', 59, 25], ['Nassim Ait Mouhou', 'LW', 57, 22], ['Youri Schoonderwaldt', 'GK', 56, 26],
       ['Thomas Reinders', 'CB', 55, 22], ['Tijn Joosten', 'LB', 55, 20], ['Joshua Eijgenraam', 'CM', 57, 24],
       ['Bjorn van Zijl', 'RW', 53, 22], ['Naïm Matoug', 'ST', 56, 23], ['Philip Heise', 'CB', 55, 35],
       ['Zidane Taylan', 'GK', 53, 21], ['Michael Davis', 'CB', 54, 24], ['Gabin Blancquart', 'DM', 52, 22],
       ['Yousri El Anbri', 'CB', 54, 20]
     ] },
    { n: "FC Eindhoven", s: "EIN", c1: "#0057B8", c2: "#FFFFFF", str: 60, p: [
       ['Jort Borgmans', 'GK', 62, 24], ['Tyrese Simons', 'RB', 58, 24], ['Farouq Limouri', 'CB', 63, 23],
       ['Luc Netten', 'CB', 58, 22], ['Siem de Moes', 'LB', 63, 22], ['Daan Huisman', 'DM', 59, 24],
       ['Dyon Dorenbosch', 'CM', 62, 23], ['Sven Simons', 'AM', 59, 22], ['Sven Blummel', 'RW', 59, 30],
       ['Kevin van Veen', 'ST', 59, 35], ['Hugo Deenen', 'LW', 60, 22], ['Jorn Brondeel', 'GK', 58, 33],
       ['Clint Essers', 'CB', 56, 29], ['Owen Renfrum', 'LB', 55, 20], ['Boris van Schuppen', 'CM', 58, 25],
       ['Amir Bryson', 'RW', 55, 22], ['Edoly Lukoki', 'ST', 54, 22], ['Terrence Douglas', 'CB', 58, 25],
       ['Nino Fancito', 'GK', 54, 22], ['Roel van Zutphen', 'GK', 54, 21], ['Marlon van de Wetering', 'CB', 55, 19],
       ['John Neeskens', 'DM', 54, 33]
     ] },
    { n: "MVV Maastricht", s: "MVV", c1: "#E30613", c2: "#FFFFFF", str: 57, p: [
       ['Sem Westerveld', 'GK', 58, 24], ['Simon Francis', 'RB', 58, 21], ['Finn Dicke', 'CB', 57, 22],
       ['Wout Coomans', 'CB', 57, 25], ['Ilias Breugelmans', 'LB', 55, 26], ['Bryan Smeets', 'DM', 56, 34],
       ['Nabil El Basri', 'CM', 58, 22], ['Stan Van Dessel', 'AM', 56, 25], ['Camil Mmaee', 'RW', 59, 22],
       ['Sven Braken', 'ST', 54, 34], ['Thijme Verheijen', 'LW', 56, 23], ['Ruud Geerinck', 'GK', 54, 19],
       ['Adam Zaian', 'CB', 52, 22], ['Djairo Tehubijuluw', 'LB', 53, 21], ['Ilano Silva Timas', 'CM', 51, 24],
       ['Mats Kuipers', 'RW', 53, 20], ['Jaël Pawirodihardjo', 'ST', 52, 20], ['Mitch van Kempen', 'CB', 54, 24],
       ['Nicola Rijnbout', 'GK', 49, 19], ['Tom Poitoux', 'GK', 49, 19], ['Sep van der Heijden', 'GK', 51, 22],
       ['Lenn-Minh Tran', 'DM', 50, 19]
     ] },
    { n: "FC Dordrecht", s: "DOR", c1: "#00A94F", c2: "#FFFFFF", str: 59, p: [
       ['Tim Coremans', 'GK', 57, 35], ['Jurre van Aken', 'RB', 60, 23], ['Sem Valk', 'CB', 57, 24],
       ['Agustin Drakpe', 'CB', 58, 25], ['John Hilton', 'LB', 61, 25], ['Daniel van Vianen', 'DM', 59, 23],
       ['Lawson Sunderland', 'CM', 59, 25], ['Joep van der Sluijs', 'AM', 61, 25], ['Nick Venema', 'RW', 61, 27],
       ['Stephano Carrillo', 'ST', 62, 20], ['Marouane Afaker', 'LW', 57, 27], ['Tijn Baltussen', 'GK', 53, 21],
       ["Yannis M'Bemba", 'CB', 56, 25], ['Lars van de Giessen', 'LB', 55, 21], ['Bae Seung-gyun', 'CM', 53, 19],
       ['Joshua Pynadath', 'RW', 55, 24], ['Jayson Ezeb', 'ST', 56, 20], ['Lucas Woudenberg', 'CB', 54, 32],
       ['Celton Biai', 'GK', 52, 26], ['Thomas Artic', 'GK', 54, 18], ['Lorenzo Codutti', 'CB', 53, 23],
       ['Robin van Asten', 'CM', 54, 18]
     ] },
    { n: "Helmond Sport", s: "HEL", c1: "#E30613", c2: "#000000", str: 54, p: [
       ['Menno Bergsen', 'GK', 52, 27], ['Justin Ogenia', 'RB', 54, 27], ['Flor Van den Eynden', 'CB', 55, 26],
       ['Brian Koglin', 'CB', 52, 29], ['Thomas Poll', 'LB', 56, 25], ['Michel Ludwig', 'DM', 53, 22],
       ['Pol Llonch', 'CM', 54, 34], ['Helgi Fróði Ingason', 'AM', 55, 21], ['Labinot Bajrami', 'RW', 56, 21],
       ['Lennerd Daneels', 'ST', 52, 28], ['Maik Łukowicz', 'LW', 54, 31], ['Hugo Wentges', 'GK', 49, 24],
       ['Lion Semić', 'CB', 49, 23], ['Amine Et-Taïbi', 'LB', 53, 23], ['Alen Dizdarević', 'CM', 51, 22],
       ['Tarik Essakkati', 'RW', 53, 20], ['André Leipold', 'ST', 51, 25], ['Amir Absalem', 'CB', 50, 29],
       ['Kevin Aben', 'GK', 48, 23], ['Dennis Vos', 'CB', 48, 25], ['Noah Makanza', 'CM', 48, 21],
       ['Khalid El Arnouki', 'CM', 49, 20]
     ] },
    { n: "TOP Oss", s: "TOP", c1: "#E30613", c2: "#000000", str: 53, p: [
       ['Mike Havekotte', 'GK', 54, 31], ['Leonel Miguel', 'RB', 50, 25], ['Xander Lambrix', 'CB', 54, 26],
       ['Jules Van Bost', 'CB', 51, 23], ['Maxim Mariani', 'LB', 53, 22], ['Mitchell van Rooijen', 'DM', 55, 28],
       ['Marcelencio Esajas', 'CM', 51, 24], ['Justin Mathieu', 'AM', 51, 30], ['Luciano Slagveer', 'RW', 54, 33],
       ['Tijmen Wildeboer', 'ST', 51, 25], ['Mauresmo Hinoke', 'LW', 54, 21], ['Sil Milder', 'GK', 50, 22],
       ['Bryan van Hove', 'CB', 48, 26], ['Thomas Cox', 'LB', 50, 24], ['Mart Remans', 'CM', 48, 28],
       ['Yaid Marhoum', 'RW', 47, 23], ['Mert Erkan', 'ST', 50, 21], ['Julian Kuijpers', 'CB', 47, 22],
       ['Devin Remie', 'GK', 47, 23], ['Maurilio de Lannoy', 'CB', 44, 23], ['Jillian Bernardina', 'CB', 47, 20],
       ['Nico Clara Pinto', 'CM', 47, 24]
     ] },
    { n: "FC Den Bosch", s: "DEN", c1: "#0057B8", c2: "#FFFFFF", str: 60, p: [
       ['Mees Bakker', 'GK', 61, 25], ['Stan Maas', 'RB', 59, 25], ['Teun van Grunsven', 'CB', 58, 27],
       ['Nick de Groot', 'CB', 59, 25], ['Jeffry Fortes', 'LB', 61, 37], ['Kevin Felida', 'DM', 62, 27],
       ['Thijs van Leeuwen', 'CM', 60, 25], ['Danny Verbeek', 'AM', 60, 36], ['Genrich Sillé', 'RW', 61, 24],
       ['Kévin Monzialo', 'ST', 59, 26], ['Sebastian Karlsson Grach', 'LW', 60, 25], ['Tjemme Bijlsma', 'GK', 54, 19],
       ['Reda Akmum', 'CB', 55, 25], ['Luc van Koeverden', 'LB', 54, 21], ['Wang Bohao', 'CM', 58, 21],
       ['Jack de Vries', 'RW', 57, 24], ['Emian-Johar Semedo', 'ST', 55, 23], ['Sheddy Barglan', 'CB', 55, 24],
       ['Pepijn van de Merbel', 'GK', 53, 24], ['Silver Elum', 'GK', 54, 21], ['Zaid El Bakkali', 'CM', 55, 20],
       ['Mees Laros', 'CM', 53, 21]
     ] }
  ]
};

