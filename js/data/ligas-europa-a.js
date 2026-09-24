/* =========================================================================
   LIGAS EUROPEAS (I) — 2025/26
   Portugal, Países Bajos, Turquía, Grecia, Ucrania y Rusia.
   ========================================================================= */
window.LEAGUES = window.LEAGUES || {};

window.LEAGUES.portugal = {
  id: 'portugal', name: 'Liga Portugal', country: 'Portugal', ucl: 3, rel: 2,
  pool: 'pt', squadSize: 17, teams: [
    { n: 'FC Alverca', s: 'ALV', c1: '#E30613', c2: '#FFFFFF', str: 62, p: [
       ['André Gomes', 'GK', 64, 20], ['Gonçalo Esteves', 'RB', 59, 21], ['Sergi Gómez', 'CB', 67, 33],
       ['Naves', 'CB', 62, 23], ['Chissumba', 'LB', 65, 20], ['Abderrahmane Soumare', 'DM', 54, 18],
       ['Gian Cabezas', 'CM', 59, 22], ['Lincoln', 'AM', 68, 26], ['Stéphane Diarra', 'RW', 63, 26],
       ['Sandro Lima', 'ST', 62, 34], ['Chiquinho', 'LW', 67, 25], ['Matheus Mendes', 'GK', 63, 26],
       ['Julián Martinez', 'CB', 60, 21], ['Isaac James', 'LB', 58, 20], ['Sabit Abdulai', 'CM', 57, 26],
       ['Nabil Touaizi', 'AM', 60, 24], ['MilovanovićМарко Milovanović', 'ST', 61, 21], ['Figueiredo', 'LW', 63, 23]
     ] },
    { n: 'FC Arouca', s: 'ARO', c1: '#FFE500', c2: '#0057B8', str: 64, p: [
       ['Nico Mantl', 'GK', 66, 25], ['Tiago Esgaio', 'RB', 67, 29], ['José Fontán', 'CB', 64, 25],
       ['Boris Popović', 'CB', 61, 25], ['Amadou Dante', 'LB', 62, 24], ['Mateo Flores', 'DM', 60, 21],
       ['David Simão', 'CM', 67, 35], ['Lee Hyun Ju', 'AM', 63, 22], ['Alfonso Trezza', 'RW', 65, 26],
       ['Dylan Nandín', 'ST', 63, 23], ['Näis Djouahra', 'LW', 63, 25], ['João Valido', 'GK', 61, 25],
       ['Matías Rocha', 'CB', 60, 24], ['Arnau Solà', 'LB', 60, 22], ['Taichi Fukui', 'CM', 63, 20],
       ['Brian Mansilla', 'RW', 62, 23], ['Barbero', 'ST', 61, 26], ['Pedro Santos', 'CM', 62, 24]
     ] },
    { n: 'Académico de Viseu', s: 'AVI', c1: '#E30613', c2: '#000000', str: 63, p: [
       ['Bruno Brígido', 'GK', 61, 35], ['Nikos Michelis', 'RB', 63, 25], ['André Almeida', 'CB', 74, 31],
       ['Pedro Barcelos', 'CB', 64, 30], ['Kauã Oliveira', 'LB', 63, 22], ['Luís Silva', 'DM', 61, 34],
       ['Samba Koné', 'CM', 63, 24], ['Soufiane Messeguem', 'AM', 62, 25], ['Robinho Ribeiro', 'RW', 63, 29],
       ['Nils Mortimer', 'ST', 60, 25], ['Issoufi Maïga', 'LW', 65, 24], ['Matheus Sampaio', 'GK', 58, 22],
       ['Benjamín Rojas', 'CB', 61, 25], ['Tomás Domingos', 'LB', 58, 27], ['Rodrigo Guedes', 'CM', 57, 25],
       ['Álvaro Zamora', 'RW', 57, 24], ['André Clóvis', 'ST', 56, 29], ['Mohamed Aidara', 'CB', 58, 30],
       ['Domen Gril', 'GK', 54, 25], ['Anthony Correia', 'DM', 56, 27], ['Rúben Pereira', 'CB', 58, 28],
       ['Igor Milioransa', 'CB', 57, 30]
     ] },
    { n: 'SC Braga', s: 'BRA', c1: '#E30613', c2: '#FFFFFF', str: 74, p: [
       ['Lukáš Hornicek', 'GK', 71, 22], ['Víctor Gómez', 'RB', 74, 25], ['Sikou Niakaté', 'CB', 74, 25],
       ['Paulo Oliveira', 'CB', 72, 33], ['Bright Arrey-Mbi', 'CB', 69, 22], ['Vitor Carvalho', 'DM', 72, 28],
       ['João Moutinho', 'CM', 75, 38], ['Ricardo Horta', 'AM', 79, 30], ['Gabri Martínez', 'LW', 71, 22],
       ['Simon Banza', 'ST', 79, 28], ['Leonardo Lelo', 'LW', 73, 25], ['Alaa Bellaarouch', 'GK', 66, 23],
       ['Robson Bambu', 'CB', 71, 27], ['Gustaf Lagerbielke', 'CB', 69, 25], ['Florian Grillitsch', 'CM', 73, 29],
       ['João Marques', 'LW', 69, 23], ['Fran Navarro', 'ST', 72, 27], ['Rodrigo Zalazar', 'AM', 77, 25]
     ] },
    { n: 'Casa Pia AC', s: 'CPA', c1: '#000000', c2: '#FFFFFF', str: 64, p: [
       ['Ricardo Batista', 'GK', 65, 38], ['André Geraldes', 'RB', 63, 34], ['José Fonte', 'CB', 66, 41],
       ['Duplexe Tchamba', 'CB', 65, 26], ['Fahem Benaissa-Yahia', 'LB', 59, 23], ['Sebastián Pérez', 'DM', 65, 32],
       ['Yassin Oukili', 'CM', 61, 24], ['Miguel Sousa', 'AM', 61, 26], ['Larrazabal', 'RW', 65, 27],
       ['Cassiano', 'ST', 66, 36], ['Tiago Morais', 'LW', 63, 21], ['Patrick Sequeira', 'GK', 65, 26],
       ['João Goulart', 'CB', 64, 25], ['Abdu Conté', 'CM', 58, 27], ['Rafael Brito', 'CM', 60, 23],
       ['Jérémy Livolant', 'RW', 64, 27], ['Dailon Livramento', 'ST', 64, 24], ['Kaique Rocha', 'CB', 63, 24]
     ] },
    { n: 'Estoril Praia', s: 'EST', c1: '#FFE500', c2: '#0057B8', str: 68, p: [
       ['Joel Robles', 'GK', 70, 35], ['Ricard', 'RB', 68, 25], ['Felix Bacher', 'CB', 66, 25],
       ['Kévin Boma', 'CB', 66, 22], ['Pedro Amaral', 'LB', 67, 27], ['Patrick de Paula', 'DM', 68, 25],
       ['Pizzi', 'CM', 70, 35], ['João Carvalho', 'AM', 69, 28], ['Rafik Guitane', 'RW', 70, 26],
       ['Yanis Begraoui', 'ST', 69, 23], ['Fabrício Garcia', 'LW', 64, 24], ['Martin Turk', 'GK', 61, 21],
       ['Ferro', 'CB', 65, 28], ['Gonçalo Costa', 'LB', 64, 25], ['Jordan Holsgrove', 'CM', 70, 25],
       ['Peixinho', 'RW', 59, 21], ['Alejandro Marqués', 'ST', 69, 24], ['Xeka', 'CM', 69, 30]
     ] },
    { n: 'CF Estrela da Amadora', s: 'ESA', c1: '#E30613', c2: '#00A94F', str: 63, p: [
       ['Diogo Pinto', 'GK', 65, 21], ['Sidny Cabral', 'RB', 63, 22], ['Bernardo Schappo', 'CB', 66, 27],
       ['Issiar Dramé', 'CB', 64, 26], ['Nilton Varela', 'LB', 66, 24], ['Oumar Ngom', 'CM', 61, 21],
       ['Paulo Moreira', 'CM', 64, 25], ['Alex Sola', 'CM', 54, 21], ['Ayomide Marcus', 'RW', 62, 25],
       ['Kikas', 'ST', 68, 26], ['Jovane Cabral', 'LW', 67, 27], ['Renan Ribeiro', 'GK', 64, 35],
       ['Luan Patrick', 'DM', 62, 23], ['Guilherme Montóia', 'LB', 62, 21], ['Robinho', 'CM', 63, 22],
       ['Ilie Stoica', 'LW', 67, 22], ['Rodrigo Pinho', 'ST', 67, 34], ['Jefferson Encada', 'RB', 63, 27]
     ] },
    { n: 'FC Famalicão', s: 'FAM', c1: '#FFFFFF', c2: '#0057B8', str: 65, p: [
       ['Lazar Carević', 'GK', 65, 26], ['Gustavo Garcia', 'RB', 66, 23], ['Justin de Haas', 'CB', 67, 25],
       ['Leonardo Realpe', 'CB', 62, 24], ['Rafa Soares', 'LB', 64, 30], ['Tom van de Looi', 'DM', 63, 25],
       ['Mathias de Amorim', 'CM', 63, 20], ['Gustavo Sá', 'AM', 68, 20], ['Sorriso', 'RW', 68, 24],
       ['Simon Elisor', 'ST', 63, 25], ['Óscar Aranda', 'LW', 68, 23], ['Ivan Zlobin', 'GK', 64, 28],
       ['Ibrahima Ba', 'CB', 57, 20], ['Pedro Bondo', 'LB', 60, 20], ['Otar Mamageishvili', 'CM', 58, 22],
       ['Gil Dias', 'RW', 64, 28], ['Umar Abubakar', 'AM', 59, 19], ['Rochinha', 'LW', 65, 30]
     ] },
    { n: 'Gil Vicente FC', s: 'GIL', c1: '#E30613', c2: '#FFFFFF', str: 67, p: [
       ['Andrew', 'GK', 72, 24], ['Zé Carlos', 'RB', 67, 26], ['Buatu', 'CB', 66, 31],
       ['Espigares', 'CB', 63, 20], ['Ghislain Konan', 'LB', 69, 29], ['Facundo Cáseres', 'DM', 66, 24],
       ['Luís Esteves', 'CM', 67, 27], ['Martín Fernández Benítez', 'AM', 64, 22], ['Murilo', 'RW', 68, 30],
       ['Pablo Felipe', 'ST', 67, 21], ['Tidjany Touré', 'AM', 65, 22], ['Daniel Figueira', 'GK', 67, 26],
       ['Marvin Elimbi', 'CB', 61, 22], ['Zé Carlos', 'RB', 63, 23], ['Santi García', 'CM', 66, 23],
       ['Hevertton', 'RW', 65, 24], ['Gustavo Varela', 'ST', 65, 20], ['Bermejo', 'RW', 65, 27]
     ] },
    { n: 'CD Nacional', s: 'NAC', c1: '#000000', c2: '#FFFFFF', str: 64, p: [
       ['Lucas França', 'GK', 71, 29], ['João Aurélio', 'RB', 62, 36], ['Zé Vitor', 'CB', 67, 24],
       ['Ulisses Wilson', 'CB', 65, 25], ['José Gomes', 'LB', 64, 28], ['Matheus Dias', 'DM', 64, 23],
       ['Liziero', 'CM', 66, 27], ['Daniel Júnior', 'AM', 62, 23], ['Martim Watts', 'RW', 56, 19],
       ['Jesús Ramírez', 'ST', 65, 27], ['Witi', 'LW', 64, 28], ['Kaique Pereira', 'GK', 60, 22],
       ['Léo Santos', 'CB', 63, 26], ['Lenny Vallier', 'LB', 63, 26], ['Joel Silva', 'CM', 66, 22],
       ['Paulinho Bóia', 'LW', 64, 27], ['Lucas João', 'ST', 65, 31], ['Filipe Soares', 'CM', 63, 26]
     ] },
    { n: 'Moreirense FC', s: 'MOR', c1: '#00A94F', c2: '#FFFFFF', str: 64, p: [
       ['André Ferreira', 'GK', 63, 29], ['Diogo Travassos', 'RB', 64, 21], ['Maracás', 'CB', 67, 31],
       ['Gilberto', 'CB', 60, 21], ['Álvaro Martínez', 'LB', 61, 23], ['Lawrence Ofori', 'DM', 66, 27],
       ['Jimi Gower', 'CM', 61, 20], ['Alan', 'AM', 69, 25], ['Cedric Teguia', 'RW', 64, 23],
       ['Guilherme Schettine', 'ST', 66, 29], ['Kiko Bondoso', 'LW', 66, 29], ['Caio Secco', 'GK', 62, 34],
       ['Michel', 'DM', 59, 22], ['Kiko', 'LB', 60, 23], ['Vasco Sousa', 'AM', 64, 22],
       ['Rodri Alonso', 'RW', 60, 22], ['Yan Maranhão', 'ST', 60, 22], ['Dinis Pinto', 'RB', 64, 24]
     ] },
    { n: 'SL Benfica', s: 'BEN', c1: '#E30613', c2: '#FFFFFF', str: 80, p: [
       ['Anatolii Trubin', 'GK', 81, 23], ['Alexander Bah', 'RB', 79, 27], ['Nicolás Otamendi', 'CB', 83, 37],
       ['Tomás Araújo', 'CB', 79, 23], ['Samuel Dahl', 'LB', 74, 22], ['Manu Silva', 'DM', 73, 24],
       ['Fredrik Aursnes', 'CM', 81, 29], ['Georgiy Sudakov', 'AM', 81, 22], ['Dodi Lukébakio', 'RW', 83, 27],
       ['Vangelis Pavlidis', 'ST', 83, 26], ['Bruma', 'LW', 79, 30], ['Samuel Soares', 'GK', 71, 23],
       ['António Silva', 'CB', 79, 21], ['Obrador', 'LB', 70, 21], ['Rios Ríos', 'CM', 80, 25],
       ['Gianluca Prestianni', 'RW', 72, 19], ['Franjo Ivanović', 'ST', 76, 21], ['Leandro Barreiro', 'CM', 78, 25]
     ] },
    { n: 'FC Porto', s: 'POR', c1: '#0057B8', c2: '#FFFFFF', str: 79, p: [
       ['Diogo Costa', 'GK', 87, 25], ['Martim Fernandes', 'RB', 78, 19], ['Jakub Kiwior', 'CB', 80, 25],
       ['Nehuen Pérez', 'CB', 79, 25], ['Francisco Moura', 'LB', 81, 25], ['Alan Varela', 'DM', 82, 23],
       ['Victor Froholdt', 'CM', 74, 19], ['Pepê', 'AM', 81, 28], ['Brayan Caicedo', 'RW', 64, 18],
       ['Samu', 'ST', 82, 21], ['Borja Sainz', 'LW', 78, 24], ['Cláudio Ramos', 'GK', 76, 33],
       ['Jan Bednarek', 'CB', 77, 29], ['Zaidu Sanusi', 'LB', 75, 28], ['Stephen Eustáquio', 'DM', 80, 28],
       ['André Miranda', 'RW', 61, 17], ['Luuk de Jong', 'ST', 81, 34], ['Gabri Veiga', 'AM', 79, 23]
     ] },
    { n: 'Rio Ave FC', s: 'RIO', c1: '#00A94F', c2: '#FFFFFF', str: 65, p: [
       ['Cezary Miszta', 'GK', 66, 23], ['Marios Vrousai', 'RB', 66, 26], ['Jakub Brabec', 'CB', 66, 32],
       ['Andreas Ntoi', 'CB', 66, 22], ['Omar Richards', 'LB', 66, 27], ['Tamás Nikitscher', 'DM', 63, 25],
       ['Brandon Aguilera', 'CM', 63, 22], ['Ole Pohlmann', 'AM', 65, 24], ['Dario Špikić', 'RW', 63, 26],
       ['Clayton', 'ST', 69, 26], ['Rafael Lobato', 'RW', 57, 19], ['Kevin Chamorro', 'GK', 63, 25],
       ['Jonathan Panzo', 'CB', 63, 24], ['Nikolaos Athanasiou', 'LB', 63, 24], ['João Graça', 'CM', 61, 30],
       ['André Luiz', 'RW', 63, 23], ['Marc Gual', 'ST', 64, 29], ['Georgios Liavas', 'DM', 63, 24]
     ] },
    { n: 'CD Santa Clara', s: 'SCL', c1: '#E30613', c2: '#FFFFFF', str: 67, p: [
       ['Gabriel Batista', 'GK', 70, 27], ['Diogo Calila', 'CM', 66, 26], ['Sidney Lima', 'CB', 68, 28],
       ['Frederico Venâncio', 'CB', 68, 32], ['Matheus Araújo', 'LB', 69, 24], ['Adriano Firmino', 'DM', 67, 25],
       ['Serginho', 'CM', 65, 25], ['Djé Tavares', 'AM', 57, 22], ['Vinícius Lopes', 'RW', 70, 26],
       ['Anthony Carter', 'ST', 67, 30], ['Gabriel Silva', 'LW', 71, 23], ['Neneca', 'GK', 59, 21],
       ['Luís Rocha', 'CB', 66, 38], ['Matheus Pereira', 'LB', 67, 24], ['Pedro Ferreira', 'DM', 66, 27],
       ['Luquinhas', 'LW', 67, 28], ['Wendel Silva', 'ST', 66, 24], ['Lucas Soares', 'RB', 66, 27]
     ] },
    { n: 'Sporting CP', s: 'SCP', c1: '#00A94F', c2: '#FFFFFF', str: 79, p: [
       ['Rui Silva', 'GK', 80, 31], ['Georgios Vagiannidis', 'RB', 74, 23], ['Gonçalo Inácio', 'CB', 80, 23],
       ['Ousmane Diomande', 'CB', 79, 21], ['Eduardo Quaresma', 'CB', 76, 23], ['Morten Hjulmand', 'DM', 82, 26],
       ['Hidemasa Morita', 'CM', 78, 30], ['Pedro Gonçalves', 'AM', 82, 27], ['Geny Catamo', 'RW', 77, 24],
       ['Luis Suárez', 'ST', 76, 27], ['Nuno Santos', 'LW', 78, 30], ['João Virgínia', 'GK', 70, 25],
       ['Matheus Reis', 'CB', 76, 30], ['Jeremiah St. Juste', 'CB', 75, 28], ['Daniel Bragança', 'CM', 77, 26],
       ['Geovany Quenda', 'RW', 75, 18], ['Fotis Ioannidis', 'ST', 76, 25], ['Trincão', 'AM', 81, 25]
     ] },
    { n: 'Marítimo', s: 'MAR', c1: '#E30613', c2: '#00A94F', str: 65, p: [
       ['Gonçalo Tabuaço', 'GK', 66, 25], ['Igor Julião', 'RB', 66, 32], ['Junior Almeida', 'CB', 66, 26],
       ['Noah Madsen', 'CB', 66, 25], ['Xavi Grande', 'LB', 65, 21], ['Rodrigo Andrade', 'DM', 63, 25],
       ['Marco Cruz', 'CM', 67, 22], ['Martín Tejón', 'AM', 65, 22], ['Adrián Butzke', 'RW', 66, 27],
       ['Enrique Peña Zauner', 'ST', 66, 26], ['Alberth Elis', 'LW', 64, 30], ['Samú Silva', 'GK', 61, 27],
       ['Paulo Henrique', 'CB', 62, 30], ['Rodrigo Borges', 'LB', 59, 28], ['Raphael Guzzo', 'CM', 63, 31],
       ['Simo Bouzaidi', 'RW', 63, 27], ['Xiko Gomes', 'ST', 63, 22], ['Afonso Freitas', 'CB', 61, 26],
       ['Pedro Mendes', 'GK', 70, 23], ['Romain Correia', 'CB', 59, 27], ['Jhonnys Guerrero', 'CB', 58, 27],
       ['Vladan Danilović', 'CM', 61, 27]
     ] },
    { n: 'Vitória SC', s: 'VSC', c1: '#FFFFFF', c2: '#000000', str: 69, p: [
       ['Charles', 'GK', 70, 31], ['Miguel Maga', 'RB', 72, 22], ['Rodrigo Abascal', 'CB', 72, 31],
       ['Óscar Rivas', 'CB', 68, 25], ['João Mendes', 'LB', 73, 25], ['Diogo Sousa', 'DM', 60, 19],
       ['Samu', 'CM', 74, 29], ['Miguel Nogueira', 'AM', 62, 20], ['Telmo Arcanjo', 'RW', 72, 24],
       ['Nélson Oliveira', 'ST', 72, 33], ['Nuno Santos', 'LW', 73, 26], ['Juan Castillo', 'GK', 67, 22],
       ['Miguel Nóbrega', 'CB', 67, 25], ['Orest Lebedenko', 'LB', 70, 26], ['Beni', 'CM', 69, 23],
       ['Fabio Blanco', 'AM', 65, 21], ['Alioune Ndoye', 'ST', 66, 23], ['Gustavo Silva', 'LW', 72, 26]
     ] }
  ]
};

window.LEAGUES.eredivisie = {
  id: 'eredivisie', name: 'Eredivisie', country: 'Países Bajos', ucl: 3, rel: 2,
  pool: 'nl', squadSize: 17, teams: [
    { n: 'AFC Ajax', s: 'AJA', c1: '#FFFFFF', c2: '#E30613', str: 77, p: [
       ['Remko Pasveer', 'GK', 77, 41], ['Anton Gaaei', 'RB', 74, 22], ['Josip Šutalo', 'CB', 80, 25],
       ['Ko Itakura', 'CB', 79, 28], ['Owen Wijndal', 'LB', 74, 25], ['Jorthy Mokio', 'DM', 72, 17],
       ['Kenneth Taylor', 'CM', 80, 23], ['Oscar Gloukh', 'AM', 78, 21], ['Steven Berghuis', 'RW', 80, 33],
       ['Wout Weghorst', 'ST', 80, 32], ['Raúl Moro', 'LW', 78, 22], ['Vítězslav Jaroš', 'GK', 72, 23],
       ['Youri Baas', 'CB', 77, 22], ['Lucas Jetten', 'LB', 64, 18], ['Davy Klaassen', 'CM', 79, 32],
       ['Marcel Godts', 'LW', 76, 20], ['Kasper Dolberg', 'ST', 79, 27], ['Oliver Edvardsen', 'AM', 75, 26]
     ] },
    { n: 'AZ Alkmaar', s: 'AZ', c1: '#E30613', c2: '#FFFFFF', str: 73, p: [
       ['Rome Owusu-Oduro', 'GK', 70, 20], ['Seiya Maikuma', 'RB', 73, 27], ['Wouter Goes', 'CB', 76, 21],
       ['Alexandre Penetra', 'CB', 73, 23], ['Mateo Chávez', 'LB', 71, 21], ['Jordy Clasie', 'DM', 78, 34],
       ['Peer Koopmeiners', 'DM', 73, 25], ['Sven Mijnans', 'AM', 74, 25], ['Ibrahim Sadiq', 'RW', 71, 25],
       ['Troy Parrott', 'ST', 73, 23], ['Isak Jensen', 'LW', 69, 21], ['Jeroen Zoet', 'GK', 68, 34],
       ['Maxim Dekker', 'CB', 66, 21], ['Mees de Wit', 'LB', 68, 27], ['Matěj Šín', 'AM', 73, 21],
       ['Patati', 'RW', 71, 21], ['Mexx Meerdink', 'ST', 72, 21], ['Kees Smit', 'AM', 71, 19]
     ] },
    { n: 'Excelsior', s: 'EXC', c1: '#E30613', c2: '#000000', str: 63, p: [
       ['Stijn van Gassel', 'GK', 64, 28], ['Ilias Bronkhorst', 'RB', 62, 28], ['Casper Widell', 'CB', 64, 22],
       ['Rick Meissen', 'CB', 61, 23], ['Arthur Zagré', 'LB', 63, 23], ['Adam Carlén', 'DM', 61, 25],
       ['Chris-Kévin Nadje', 'CM', 64, 23], ['Irakli Yegoian', 'AM', 59, 21], ['Derensili Sanches Fernandes', 'RW', 64, 24],
       ['Szymon Włodarczyk', 'ST', 63, 22], ['Stefan Mitrović', 'LW', 64, 22], ['Calvin Raatsie', 'GK', 63, 23],
       ['Stan Henderikx', 'CB', 60, 21], ['Simon Janssen', 'LB', 60, 24], ['Mathijs Tielemans', 'CM', 64, 23],
       ['Zachary Booth', 'RW', 59, 21], ['Mike van Duinen', 'ST', 59, 33], ['Noah Naujoks', 'CM', 61, 23]
     ] },
    { n: 'SC Heerenveen', s: 'HEE', c1: '#0057B8', c2: '#FFFFFF', str: 67, p: [
       ['Andries Noppert', 'GK', 68, 31], ['Oliver Braude', 'RB', 68, 21], ['Piotr Bochniewicz', 'CB', 68, 29],
       ['Nikolai Hopland', 'CB', 67, 20], ['Vasilios Zagaritis', 'LB', 66, 24], ['Isaiah Ahmed', 'DM', 58, 19],
       ['Joris van Overeem', 'CM', 70, 31], ['Ringo Meerveld', 'AM', 71, 22], ['Jacob Trenskow', 'RW', 69, 24],
       ['Dylan Vente', 'ST', 69, 26], ['Maxence Rivera', 'LW', 67, 23], ['Nordin Bakker', 'GK', 66, 27],
       ['Sam Kersten', 'CB', 66, 27], ['Robin Bouw', 'LB', 58, 19], ['Marcus Linday', 'CM', 68, 22],
       ['Eser Gürbüz', 'RW', 60, 18], ['Václav Sejk', 'ST', 66, 23], ['Luuk Brouwers', 'AM', 67, 27]
     ] },
    { n: 'ADO Den Haag', s: 'ADO', c1: '#FFE500', c2: '#00A94F', str: 64, p: [
       ['Kilian Nikiema', 'GK', 64, 23], ['Steven van der Sloot', 'RB', 65, 24], ['Matteo Waem', 'CB', 64, 26],
       ['Mees Kreekels', 'CB', 66, 25], ['Philippe Lanquetin', 'LB', 65, 21], ['Jari Vlak', 'DM', 62, 28],
       ['Evan Rottier', 'CM', 63, 24], ['Mylian Jimenez', 'AM', 66, 23], ['Daryl van Mieghem', 'RW', 63, 37],
       ['Luka Reischl', 'ST', 65, 22], ['Lorenzo Maasland', 'LW', 64, 21], ['Antoine Lejoly', 'GK', 58, 28],
       ['Milan Hokke', 'CB', 61, 23], ['Sekou Sylla', 'LB', 60, 27], ['Finn de Bruin', 'CM', 59, 22],
       ['Cameron Peupion', 'RW', 57, 24], ['Jesse Bal', 'ST', 59, 20], ['Devyn Payne', 'CB', 58, 21],
       ['Caleb Kramer', 'GK', 55, 20], ['Sanyika Bergtop', 'CB', 57, 19], ['Diogo Tomas', 'CB', 57, 31],
       ['Juho Kilo', 'CM', 56, 24]
     ] },
    { n: 'Feyenoord', s: 'FEY', c1: '#E30613', c2: '#FFFFFF', str: 76, p: [
       ['Timon Wellenreuther', 'GK', 76, 29], ['Givairo Read', 'RB', 75, 19], ['Gernot Trauner', 'CB', 75, 33],
       ['Tsuyoshi Watanabe', 'CB', 75, 28], ['Gijs Smal', 'LB', 74, 27], ['Jakub Moder', 'CM', 75, 26],
       ['Quinten Timber', 'CM', 80, 24], ['Sem Steijn', 'AM', 78, 23], ['Anis Hadj-Moussa', 'RW', 76, 23],
       ['Christopher Larin', 'ST', 77, 30], ['Leo Sauer', 'LW', 72, 19], ['Justin Bijlow', 'GK', 75, 27],
       ['Thomas Beelen', 'CB', 74, 24], ['Jacob Bos', 'CM', 69, 22], ['Hwang In Beom', 'CM', 77, 28],
       ['Gonçalo Borges', 'RW', 72, 24], ['Casper Tengstedt', 'ST', 74, 25], ['Jordan Lotomba', 'RB', 75, 26]
     ] },
    { n: 'FC Groningen', s: 'GRO', c1: '#00A94F', c2: '#FFFFFF', str: 68, p: [
       ['Etienne Vaessen', 'GK', 71, 29], ['Marco Rente', 'RB', 69, 28], ['Marvin Peersman', 'CB', 69, 34],
       ['Thijmen Blokzijl', 'CB', 68, 20], ['Wouter Prins', 'LB', 65, 21], ['Stije Resink', 'DM', 70, 22],
       ['Tygo Land', 'CM', 69, 19], ['der van der Werff', 'AM', 63, 20], ['Younes Taha', 'RW', 68, 22],
       ['Oskar Zawada', 'ST', 69, 29], ['Mats Seuntjens', 'LW', 68, 33], ['Hidde Jurjus', 'GK', 67, 31],
       ['Dies Janse', 'CB', 67, 19], ['Tyrique Mercera', 'RB', 65, 21], ['Tika de Jonge', 'CM', 67, 22],
       ['Jorg Schreuders', 'AM', 67, 20], ['Thom van Bergen', 'ST', 68, 21], ['Brynjólfur Willumsson', 'ST', 67, 24]
     ] },
    { n: 'Fortuna Sittard', s: 'FOR', c1: '#FFE500', c2: '#00A94F', str: 62, p: [
       ['Mattijs Branderhorst', 'GK', 64, 31], ['Ivo Pinto', 'RB', 62, 35], ['Iván Márquez', 'CB', 62, 31],
       ['Syb van Ottele', 'CB', 60, 23], ['Daley Sinkgraven', 'LB', 62, 29], ['É. Michut', 'DM', 61, 22],
       ['Samuel Bastien', 'CM', 60, 28], ['Mohamed Ihattaren', 'AM', 64, 23], ['Dimitris Limnios', 'LW', 62, 27],
       ['Kaj Sierhuis', 'ST', 62, 27], ['Kristoffer Peterson', 'LW', 62, 30], ['Luuk Koopmans', 'GK', 58, 31],
       ['Shawn Adewoye', 'CB', 60, 25], ['Jasper Dahlhaus', 'LB', 59, 23], ['Justin Lonwijk', 'CM', 59, 25],
       ['Makan Aïko', 'ST', 56, 24], ['Paul Gladon', 'ST', 57, 33], ['Alen Halilović', 'AM', 64, 29]
     ] },
    { n: 'Go Ahead Eagles', s: 'GAE', c1: '#E30613', c2: '#FFE500', str: 62, p: [
       ['Jari De Busser', 'GK', 63, 25], ['Mats Deijl', 'RB', 63, 27], ['Joris Kramer', 'CB', 63, 28],
       ['Gerrit Nauber', 'CB', 61, 33], ['Dean James', 'LB', 61, 25], ['Melle Meulensteen', 'DM', 63, 25],
       ['Kenzo Goudmijn', 'CM', 59, 23], ['Jakob Breum', 'AM', 65, 21], ['Oscar Pettersson', 'RW', 57, 25],
       ['Victor Edvardsen', 'ST', 63, 29], ['Mathis Suray', 'LW', 59, 23], ['Luca Plogmann', 'GK', 58, 25],
       ['Giovanni van Zwam', 'CB', 53, 21], ['Aske Adelgaard', 'LB', 56, 21], ['Yassir Rahmouni', 'CM', 48, 19],
       ['Richonell Margaret', 'LW', 58, 24], ['Milan Smit', 'ST', 57, 22], ['E. Linthorst', 'DM', 60, 25]
     ] },
    { n: 'SC Cambuur', s: 'CAM', c1: '#FFE500', c2: '#0057B8', str: 61, p: [
       ['Thijs Jansen', 'GK', 59, 25], ['Diyae Jermoumi', 'RB', 64, 22], ['Jorn Berkhout', 'CB', 61, 24],
       ['Ismaël Baouf', 'CB', 63, 20], ['Jamal Amofa', 'LB', 61, 28], ['Nicky Souren', 'DM', 59, 27],
       ['Mark Diemers', 'CM', 61, 33], ['Tony Rölke', 'AM', 62, 23], ['Remco Balk', 'RW', 62, 25],
       ['Kian Visser', 'ST', 63, 25], ['Oscar Sjöstrand', 'LW', 63, 22], ['Jasper Meijster', 'GK', 59, 21],
       ['Rik Mulders', 'DM', 56, 26], ['Tomas Galvez', 'LB', 57, 21], ['Daan Visser', 'CM', 57, 22],
       ['Nicolas Binder', 'RW', 59, 24], ['Jort van der Sande', 'ST', 55, 30], ['Toni Jonker', 'CB', 60, 20],
       ['Matthijs Kalisvaart', 'GK', 54, 20], ['Bram Marsman', 'CB', 56, 23], ['Iwan Henstra', 'ST', 55, 20],
       ['Ichem Ferrah', 'ST', 57, 21]
     ] },
    { n: 'NEC Nijmegen', s: 'NEC', c1: '#E30613', c2: '#00A94F', str: 66, p: [
       ['Jacobus Cillessen', 'GK', 74, 36], ['Brayann Pereira', 'RB', 62, 22], ['Philippe Sandler', 'CB', 69, 28],
       ['Ahmetcan Kaplan', 'CB', 66, 22], ['Thomas Ouwejan', 'LB', 64, 28], ['Kodai Sano', 'DM', 66, 21],
       ['Noé Lebreton', 'CM', 60, 21], ['Tjaronn Chery', 'AM', 69, 37], ['Sami Ouaissa', 'RW', 63, 20],
       ['Bryan Linssen', 'ST', 64, 34], ['Virgil Misidjan', 'LW', 65, 31], ['Gonzalo Crettaz', 'GK', 65, 25],
       ['Bram Nuytinck', 'CB', 64, 35], ['Deveron Fonville', 'LB', 58, 22], ['Argyris Darelas', 'CM', 55, 21],
       ['Rober', 'RW', 62, 24], ['Youssef El Kachati', 'ST', 64, 25], ['Dirk Proper', 'DM', 66, 23]
     ] },
    { n: 'PEC Zwolle', s: 'PEC', c1: '#0057B8', c2: '#FFFFFF', str: 62, p: [
       ['Jasper Schendelaar', 'GK', 66, 24], ['Sherel Floranus', 'RB', 60, 26], ['Simon Graves', 'CB', 62, 26],
       ['Anselmo García MacNulty', 'CB', 62, 22], ['der van der Haar', 'LB', 59, 21], ['Nick Fichtinger', 'DM', 59, 21],
       ['Zico Buurmeester', 'CM', 63, 23], ['Jamiro Monteiro', 'AM', 63, 31], ['Dylan Mbayo', 'RW', 62, 23],
       ['Koen Kostons', 'ST', 61, 25], ['Odysseus Velanas', 'LW', 60, 27], ['Tom de Graaff', 'GK', 55, 20],
       ['Dylan Ruward', 'CB', 51, 20], ['Olivier Aertssen', 'RB', 59, 20], ['Ryan Thomas', 'CM', 60, 30],
       ['Braydon Manu', 'RW', 61, 28], ['Thomas Buitink', 'ST', 59, 25], ['Thijs Oosting', 'AM', 60, 25]
     ] },
    { n: 'PSV Eindhoven', s: 'PSV', c1: '#E30613', c2: '#FFFFFF', str: 78, p: [
       ['Nick Olij', 'GK', 77, 29], ['Sergiño Dest', 'RB', 79, 24], ['Ryan Flamingo', 'CB', 77, 22],
       ['Yarek', 'CB', 73, 20], ['Mauro Júnior', 'LB', 79, 26], ['Jerdy Schouten', 'DM', 80, 28],
       ['Joey Veerman', 'CM', 79, 26], ['Ismael Saibari', 'AM', 79, 23], ['Ivan Perišić', 'RW', 81, 36],
       ['Alexandre Pléa', 'ST', 78, 32], ['Ruben van Bommel', 'LW', 74, 20], ['Matěj Kovář', 'GK', 75, 25],
       ['Armando Obispo', 'CB', 73, 26], ['Anass Salah-Eddine', 'LB', 71, 23], ['Joël van den Berg', 'CM', 60, 18],
       ['Dennis Man', 'RW', 76, 26], ['Ricardo Pepi', 'ST', 76, 22], ['Guus Til', 'AM', 77, 27]
     ] },
    { n: 'Sparta Rotterdam', s: 'SPA', c1: '#E30613', c2: '#FFFFFF', str: 64, p: [
       ['Joël Drommel', 'GK', 67, 28], ['Shurandy Sambo', 'RB', 63, 23], ['Marvin Young', 'CB', 64, 19],
       ['B. Martins Indi', 'CB', 63, 33], ['Patrick van Aanholt', 'LB', 67, 34], ['Julian Baas', 'CM', 62, 23],
       ['Joshua Kitolano', 'CM', 64, 23], ['Jens Toornstra', 'AM', 64, 36], ['Mitchell van Bergen', 'RW', 64, 25],
       ['Tobias Lauritsen', 'ST', 67, 27], ['Sayfallah Ltaief', 'LW', 63, 25], ['Filip Bednarek', 'GK', 60, 32],
       ['Teo Quintero', 'CB', 60, 26], ['Mike Kleijn', 'CM', 58, 20], ['Pelle Clement', 'CM', 62, 29],
       ['Shunsuke Mito', 'RW', 63, 22], ['Nökkvi Þórisson', 'ST', 60, 25], ['Saïd Bakari', 'RB', 62, 30]
     ] },
    { n: 'SC Telstar', s: 'TEL', c1: '#FFFFFF', c2: '#000000', str: 62, p: [
       ['Ronald Koeman Jr.', 'GK', 64, 30], ['Devon Koswal', 'CB', 60, 21], ['Danny Bakker', 'CB', 64, 30],
       ['Guus Offerhaus', 'CB', 61, 24], ['Neville Ogidi Nwankwo', 'CB', 58, 22], ['Dylan Mertens', 'AM', 62, 29],
       ['Nils Rossen', 'CM', 60, 19], ['Jochem van de Kamp', 'AM', 63, 21], ['Tyrese Noslin', 'RW', 63, 22],
       ['Soufiane Hetli', 'ST', 61, 24], ['Jeff Hardeveld', 'LW', 63, 30], ['Daan Reiziger', 'GK', 60, 24],
       ['Dion Malone', 'CB', 60, 36], ['Yamano Olfers', 'CB', 56, 18], ['Tyrone Owusu', 'CM', 59, 26],
       ['Kay Tejan', 'RW', 62, 28], ['Milan Zonneveld', 'AM', 60, 21], ['Mohamed Hamdaoui', 'LW', 62, 32]
     ] },
    { n: 'FC Twente', s: 'TWE', c1: '#E30613', c2: '#FFFFFF', str: 69, p: [
       ['Lars Unnerstall', 'GK', 74, 34], ['Bart van Rooij', 'RB', 70, 24], ['Robin Pröpper', 'CB', 69, 31],
       ['Mees Hilgers', 'CB', 68, 24], ['Bas Kuipers', 'LB', 66, 30], ['Ramiz Zerrouki', 'DM', 69, 27],
       ['Thomas van den Belt', 'CM', 66, 24], ['Arno Verschueren', 'AM', 66, 28], ['Daan Rots', 'RW', 70, 23],
       ['Ricky van Wolfswinkel', 'ST', 69, 36], ['Marko Pjaca', 'LW', 67, 30], ['Przemysław Tytoń', 'GK', 62, 38],
       ['Max Bruns', 'CB', 65, 22], ['Mats Rots', 'LB', 64, 19], ['Daouda Weidmann', 'CM', 60, 22],
       ['Taylor Booth', 'RW', 66, 24], ['Sam Lammers', 'ST', 69, 28], ['Mathias Kjølø', 'DM', 67, 24]
     ] },
    { n: 'FC Utrecht', s: 'UTR', c1: '#E30613', c2: '#FFFFFF', str: 67, p: [
       ['Vasilis Barkas', 'GK', 68, 31], ['Siebe Horemans', 'RB', 65, 27], ['Mike van der Hoorn', 'CB', 69, 32],
       ['Nick Viergever', 'CB', 67, 35], ['Souffian El Karouani', 'LB', 69, 24], ['Alonzo Engwanda', 'DM', 64, 22],
       ['Gjivai Zechiël', 'CM', 63, 21], ['de de Wit', 'AM', 66, 27], ['Miguel Rodríguez', 'RW', 67, 22],
       ['Sébastien Haller', 'ST', 71, 31], ['Yoann Cathline', 'LW', 69, 22], ['Michael Brouwer', 'GK', 62, 32],
       ['Mike Eerdhuijzen', 'CB', 67, 24], ['Derry Murkin', 'LB', 62, 25], ['Can Bozdoğan', 'CM', 61, 24],
       ['Miliano Jonathans', 'RW', 60, 21], ['Noah Ohio', 'ST', 61, 22], ['Victor Jensen', 'AM', 63, 25]
     ] },
    { n: 'Willem II', s: 'WIL', c1: '#E30613', c2: '#FFFFFF', str: 64, p: [
       ['Thomas Didillon-Hödl', 'GK', 66, 31], ['Alessandro Ciranni', 'RB', 65, 30], ['Finn Stam', 'CB', 65, 23],
       ['Justin Hoogma', 'CB', 66, 28], ['Jens Mathijsen', 'LB', 63, 19], ['Gijs Besselink', 'DM', 65, 22],
       ['Jari Schuurman', 'CM', 65, 29], ['Anass Zarrouk', 'AM', 64, 20], ['Nick Doodeman', 'RW', 64, 30],
       ['Armin Ćulum', 'ST', 63, 23], ['Devin Haen', 'LW', 63, 22], ['Wouter van der Steen', 'GK', 63, 36],
       ['Nathan Tjoe-A-On', 'CB', 64, 25], ['Raffael Behounek', 'LB', 63, 29], ['Uriël van Aalst', 'CM', 61, 20],
       ['Emilio Kehrer', 'RW', 63, 24], ['Samuel Bamba', 'ST', 61, 22], ['Feliciano de Ruijter', 'CB', 62, 21],
       ['Karst de Leeuw', 'GK', 57, 22], ['Niels van Berkel', 'CB', 59, 25], ['Mounir El Allouchi', 'CM', 60, 32],
       ['Max de Waal', 'CM', 57, 24]
     ] }
  ]
};

window.LEAGUES.turquia = {
  id: 'turquia', name: 'Süper Lig', country: 'Turquía', ucl: 3, rel: 3,
  pool: 'tr', squadSize: 17, teams: [
    { n: 'Alanyaspor', s: 'ALA', c1: '#F58220', c2: '#00A94F', str: 69, p: [
       ['Paulo Victor', 'GK', 75, 38], ['Florent Hadergjonaj', 'RB', 69, 30], ['Bruno Viana', 'CB', 71, 30],
       ['Fatih Aksoy', 'CB', 68, 27], ['Baran Mogultay', 'LB', 63, 21], ['Gaïus Makouta', 'DM', 72, 27],
       ['Nicolas Janvier', 'CM', 68, 26], ['Ianis Hagi', 'AM', 74, 26], ['Ruan', 'RW', 59, 20],
       ['Steve Mounié', 'ST', 73, 30], ['Yusuf Özdemir', 'LW', 67, 24], ['Ertuğrul Taşkıran', 'GK', 69, 35],
       ['Fidan Aliti', 'CB', 67, 31], ['Ümit Akdağ', 'CB', 67, 21], ['Enes Keskin', 'CM', 57, 24],
       ['Meschack Elia', 'ST', 70, 27], ['Hwang Ui Jo', 'ST', 71, 32], ['Efecan Karaca', 'AM', 72, 35]
     ] },
    { n: 'Amedspor', s: 'AMD', c1: '#00A94F', c2: '#E30613', str: 62, p: [
       ['Abdulsamed Damlu', 'GK', 63, 27], ['Hasan Ali Kaldırım', 'RB', 63, 24], ['Murat Uçar', 'CB', 61, 31],
       ['Tarkan Serbest', 'CB', 67, 31], ['Mehmet Yeşil', 'LB', 66, 22], ['Atakan Müjde', 'DM', 49, 21],
       ['Sinan Kurt', 'CM', 64, 28], ['Cem Üstündag', 'AM', 62, 24], ['Emrah Başsan', 'RW', 65, 29],
       ['Florent Hasani', 'ST', 65, 26], ['Zdravko Dimitrov', 'LW', 64, 28], ['Erce Kardeşler', 'GK', 61, 30],
       ['Oleksandr Syrota', 'CB', 67, 25], ['Kahraman Demirtaş', 'LB', 60, 22], ['Çekdar Orhan', 'CM', 60, 29],
       ['Daniel Moreno', 'RW', 59, 20], ['Felix Afena-Gyan', 'ST', 58, 25], ['Celal Hanalp', 'CB', 61, 31],
       ['Adama Traoré', 'CM', 75, 29], ['Yunus Tarhan', 'CM', 59, 26], ['Mbaye Diagne', 'ST', 59, 31],
       ['Dia Saba', 'CM', 58, 29]
     ] },
    { n: 'Basaksehir', s: 'IBF', c1: '#F58220', c2: '#0A2240', str: 71, p: [
       ['Muhammed Şengezer', 'GK', 69, 28], ['Ömer Şahiner', 'RB', 66, 33], ['Léo Duarte', 'CB', 73, 28],
       ['Ousseynou Ba', 'CB', 72, 29], ['Christopher Operi', 'LB', 72, 28], ['Berat Özdemir', 'DM', 71, 27],
       ['Miguel Crespo', 'CM', 71, 28], ['Amine Harit', 'AM', 73, 28], ['Yusuf Sarı', 'RW', 73, 26],
       ['Eldor Shomurodov', 'ST', 72, 30], ['Ivan Brnić', 'AM', 67, 23], ['Volkan Babacan', 'GK', 68, 36],
       ['Jerome Opoku', 'CB', 70, 26], ['Onur Bulut', 'RB', 66, 31], ['Olivier Kemen', 'CM', 70, 28],
       ['Deniz Türüç', 'RW', 71, 32], ['Davie Selke', 'ST', 72, 30], ['Nuno da Costa', 'ST', 72, 34]
     ] },
    { n: 'Besiktas', s: 'BJK', c1: '#000000', c2: '#FFFFFF', str: 75, p: [
       ['Mert Günok', 'GK', 75, 36], ['Jonas Svensson', 'RB', 72, 32], ['Gabriel Paulista', 'CB', 74, 34],
       ['Felix Uduokhai', 'CB', 73, 27], ['David Jurásek', 'LB', 70, 24], ['Wilfred Ndidi', 'DM', 73, 28],
       ['Orkun Kökçü', 'CM', 79, 24], ['Rafa', 'AM', 79, 32], ['Václav Černý', 'RW', 74, 27],
       ['Tamaraebi Abraham', 'ST', 74, 27], ['Cengiz Ünder', 'RW', 73, 27], ['Ersin Destanoğlu', 'GK', 69, 24],
       ['Tiago Djaló', 'CB', 72, 25], ['Rıdvan Yılmaz', 'LB', 70, 24], ['Salih Uçan', 'CM', 69, 31],
       ['Milot Rashica', 'RW', 73, 29], ['El Touré', 'AM', 70, 23], ['Jota Silva', 'RW', 72, 25]
     ] },
    { n: 'Eyüpspor', s: 'EYU', c1: '#5B2C83', c2: '#FFE500', str: 65, p: [
       ['Marcos Felipe', 'GK', 61, 29], ['Calegari', 'RB', 63, 23], ['Robin Yalçın', 'CB', 61, 31],
       ['Nihad Mujakić', 'CB', 61, 27], ['Umut Meraş', 'LB', 61, 29], ['Kerem Demirbay', 'DM', 68, 31],
       ['Yalçın Kayan', 'CM', 63, 26], ['Samu Sáiz', 'AM', 68, 34], ['Halil Akbunar', 'RW', 65, 31],
       ['Mame Thiam', 'ST', 69, 32], ['Serdar Gürler', 'LW', 65, 33], ['Jankat Yılmaz', 'GK', 58, 20],
       ['Emir Ortakaya', 'CB', 52, 21], ['Talha Ülvan', 'RB', 51, 24], ['Mateusz Łęgowski', 'CM', 61, 22],
       ['Prince Ampem', 'LW', 64, 27], ['Drăguş Drăguș', 'ST', 66, 25], ['Taras Stepanenko', 'DM', 67, 35]
     ] },
    { n: 'Çorum FK', s: 'COR', c1: '#E30613', c2: '#000000', str: 64, p: [
       ['Ahmet Kıvanç', 'GK', 64, 27], ['Joseph Larweh Attamah', 'RB', 60, 32], ['Sinan Osmanoğlu', 'CB', 60, 35],
       ['Arda Şengül', 'CB', 64, 21], ['Cemali Sertel', 'LB', 64, 28], ['Ferhat Yazgan', 'DM', 63, 30],
       ['Atakan Akkaynak', 'CM', 62, 22], ['Pedrinho', 'AM', 71, 27], ['Serdar Gürler', 'RW', 69, 33],
       ['Danijel Aleksić', 'ST', 62, 26], ['Yusuf Erdoğan', 'LW', 64, 31], ['Ibrahim Šehić', 'GK', 57, 24],
       ['Kerem Kalafat', 'CB', 57, 22], ['Üzeyir Ergün', 'LB', 57, 24], ['Fredy', 'CM', 60, 31],
       ['Mame Thiam', 'RW', 73, 32], ['Braian Samudio', 'ST', 57, 30], ['Erkan Kaş', 'CB', 58, 24],
       ['Oğuz Gürbulak', 'CM', 55, 25], ['Ibrahim Zubairu', 'CM', 57, 25], ['Hasan Akinay', 'GK', 56, 24],
       ['Geraldo', 'ST', 54, 23]
     ] },
    { n: 'Fenerbahce', s: 'FEN', c1: '#FFE500', c2: '#0A2240', str: 79, p: [
       ['Ederson', 'GK', 84, 31], ['Nélson Semedo', 'RB', 76, 31], ['Milan Škriniar', 'CB', 80, 30],
       ['Ç. Söyüncü', 'CB', 76, 29], ['Jayden Oosterwolde', 'LB', 75, 24], ['Edson Álvarez', 'DM', 77, 27],
       ['Fred', 'CM', 79, 32], ['Anderson Talisca', 'AM', 80, 31], ['Marco Asensio', 'RW', 79, 29],
       ['Youssef En-Nesyri', 'ST', 81, 28], ['Kerem Aktürkoğlu', 'LW', 79, 26], ['İ. Eğribayat', 'GK', 74, 27],
       ['Rodrigo Becão', 'CB', 75, 29], ['Levent Mercan', 'LB', 70, 24], ['Mert Yandaş', 'CM', 69, 30],
       ['İ. Kahveci', 'RW', 77, 29], ['Jáder Durán', 'ST', 78, 21], ['Sebastian Szymański', 'AM', 77, 26]
     ] },
    { n: 'Galatasaray', s: 'GS', c1: '#FFE500', c2: '#E30613', str: 80, p: [
       ['Uğurcan Çakır', 'GK', 79, 29], ['Kaan Ayhan', 'RB', 75, 30], ['Davinson Sánchez', 'CB', 81, 29],
       ['Wilfried Singo', 'CB', 79, 24], ['Eren Elmalı', 'LB', 74, 24], ['Lucas Torreira', 'DM', 82, 29],
       ['İ. Gündoğan', 'CM', 82, 34], ['Mario Lemina', 'DM', 78, 31], ['Leroy Sané', 'RW', 81, 29],
       ['Victor Osimhen', 'ST', 86, 26], ['Barış Yılmaz', 'LW', 79, 25], ['Günay Güvenç', 'GK', 74, 33],
       ['Abdülkerim Bardakcı', 'CB', 79, 30], ['Ismail Jakobs', 'LB', 74, 25], ['Gabriel Sara', 'CM', 79, 26],
       ['Roland Sallai', 'AM', 77, 28], ['Mauro Icardi', 'ST', 80, 32], ['Yunus Akgün', 'RW', 77, 24]
     ] },
    { n: 'Gaziantep FK', s: 'GFK', c1: '#E30613', c2: '#000000', str: 68, p: [
       ['Zafer Görgen', 'GK', 62, 25], ['Luis Pérez', 'RB', 67, 30], ['Myenty Abena', 'CB', 67, 30],
       ['Semih Güler', 'CB', 66, 30], ['Kévin Rodrigues', 'LB', 72, 31], ['B. Ndiaye', 'DM', 71, 34],
       ['Kacper Kozłowski', 'CM', 67, 21], ['Alexandru Maxim', 'AM', 73, 34], ['Deian Sorescu', 'RW', 69, 27],
       ['Mohamed Bayo', 'ST', 70, 27], ['Christopher Lungoyi', 'LW', 63, 24], ['Mustafa Bozan', 'GK', 61, 24],
       ['Arda Kızıldağ', 'CB', 66, 26], ['Rob Nizet', 'LB', 60, 23], ['Ogün Özçiçek', 'CM', 63, 26],
       ['Yusuf Kabadayi', 'RW', 63, 21], ['Emmanuel Boateng', 'ST', 69, 29], ['Juninho Bacuna', 'DM', 66, 27]
     ] },
    { n: 'Genclerbirligi', s: 'GEN', c1: '#E30613', c2: '#000000', str: 67, p: [
       ['Ricardo Velho', 'GK', 73, 26], ['Pedro Pereira', 'RB', 71, 27], ['Dimitrios Goutas', 'CB', 69, 31],
       ['Ž. Žužek', 'CB', 63, 28], ['Matěj Hanousek', 'LB', 64, 32], ['Oghenekaro Etebo', 'DM', 68, 29],
       ['T. Dele-Bashiru', 'CM', 67, 25], ['Dal Varešanović', 'AM', 64, 24], ['Fıratcan Üzüm', 'RW', 60, 26],
       ['Sékou Koita', 'ST', 71, 25], ['Henry Onyekuru', 'LW', 69, 28], ['Gökhan Akkan', 'GK', 66, 30],
       ['Thalisson Kelven', 'CB', 63, 27], ['Abdurrahim Dursun', 'LB', 60, 26], ['Michał Nalepa', 'CM', 63, 30],
       ['Elias Durmaz', 'AM', 54, 25], ["M'Baye Niang", 'ST', 66, 30], ['Metehan Mimaroğlu', 'LW', 65, 30]
     ] },
    { n: 'Göztepe', s: 'GOZ', c1: '#FFE500', c2: '#E30613', str: 69, p: [
       ['Mateusz Lis', 'GK', 74, 28], ['Ogün Bayrak', 'RB', 69, 26], ['Malcom Bokele', 'CB', 69, 25],
       ['Héliton', 'CB', 69, 29], ['İ. Köybaşı', 'LB', 68, 35], ['Novatus Miroshi', 'DM', 69, 22],
       ['Anthony Dennis', 'CM', 71, 21], ['Efkan Bekiroğlu', 'AM', 71, 29], ['Ruan', 'RW', 66, 30],
       ['Juan', 'ST', 70, 23], ['Junior Olaitan', 'LW', 66, 23], ['Ekrem Kılıçarslan', 'GK', 60, 27],
       ['Taha Altıkardeş', 'CB', 68, 21], ['Amin Cherni', 'LB', 67, 23], ['Ahmed Ildız', 'CM', 68, 28],
       ['Ibrahim Sabra', 'ST', 62, 19], ['Janderson', 'ST', 68, 26], ['Rhaldney', 'DM', 69, 26]
     ] },
    { n: 'Kasimpasa', s: 'KAS', c1: '#0057B8', c2: '#FFFFFF', str: 69, p: [
       ['Andreas Gianniotis', 'GK', 72, 32], ['Cláudio Winck', 'RB', 73, 31], ['Attila Szalai', 'CB', 69, 27],
       ['Nicholas Opoku', 'CB', 66, 27], ['Godfried Frimpong', 'LB', 69, 26], ['Cafú', 'DM', 67, 32],
       ['HajradinovićХарис Hajradinović', 'CM', 75, 31], ['Cem Üstündag', 'DM', 62, 24], ['Mamadou Fall', 'RW', 72, 33],
       ['Pape Gueye', 'ST', 67, 25], ['Fousseni Diabaté', 'LW', 68, 29], ['Ali Yanar', 'GK', 59, 27],
       ['Adem Arous', 'DM', 58, 20], ['Mortadha Ben Ouanes', 'LB', 68, 30], ['Atakan Müjde', 'CM', 49, 21],
       ['Yusuf Barası', 'ST', 63, 22], ['Kubilay Kanatsızkuş', 'ST', 66, 28], ['Jairo Espinoza', 'RB', 66, 26]
     ] },
    { n: 'Erzurumspor', s: 'ERZ', c1: '#0057B8', c2: '#FFFFFF', str: 64, p: [
       ['Erkan Anapa', 'GK', 66, 32], ['Ali Ülgen', 'RB', 64, 24], ['Yakup Kırtay', 'CB', 63, 28],
       ['Amar Gërxhaliu', 'CB', 64, 28], ['Guram Giorbelidze', 'LB', 65, 28], ['Brandon Baiye', 'DM', 62, 31],
       ['Sefa Akgün', 'CM', 65, 22], ['Murat Akpınar', 'AM', 62, 33], ['İlkan Sever', 'RW', 65, 22],
       ['Hüsamettin Yener', 'ST', 64, 20], ['Eren Tozlu', 'LW', 63, 23], ['Matija Orbanić', 'GK', 59, 22],
       ['Salih Sarıkaya', 'CB', 61, 21], ['Fernando Andrade', 'LB', 60, 25], ['Adem Eren Kabak', 'CM', 62, 29],
       ['Furkan Özhan', 'RW', 62, 33], ['Cheikne Sylla', 'ST', 61, 25], ['Mustafa Yumlu', 'CB', 61, 28],
       ['Cengizhan Bayrak', 'CB', 56, 28], ['Giovanni Crociata', 'CM', 57, 23], ['Ömer Arda Kara', 'CB', 57, 22],
       ['Orhan Ovacıklı', 'CB', 59, 26]
     ] },
    { n: 'Kocaelispor', s: 'KOC', c1: '#00A94F', c2: '#000000', str: 65, p: [
       ['Gökhan Değirmenci', 'GK', 63, 36], ['Ahmet Oğuz', 'RB', 66, 32], ['Mateusz Wieteska', 'CB', 67, 28],
       ['Hrvoje Smolčić', 'CB', 67, 24], ['Massadio Haïdara', 'LB', 68, 32], ['Karol Linetty', 'DM', 68, 30],
       ['Habib Keïta', 'CM', 63, 23], ['Show', 'DM', 61, 26], ['Can Keleş', 'RW', 63, 23],
       ['Bruno Petković', 'ST', 71, 30], ['Darko Churlinov', 'LW', 63, 24], ['Aleksandar Jovanović', 'GK', 61, 32],
       ['Botond Balogh', 'CB', 65, 23], ['Muharrem Cinan', 'CM', 55, 27], ['Tayfur Bingöl', 'CM', 60, 32],
       ['Rigoberto Rivas', 'RW', 61, 26], ['Serdar Dursun', 'ST', 64, 33], ['Anfernee Dijksteel', 'RB', 64, 28]
     ] },
    { n: 'Konyaspor', s: 'KON', c1: '#00A94F', c2: '#FFFFFF', str: 67, p: [
       ['Bahadır Güngördü', 'GK', 66, 29], ['Josip Ćalušić', 'CB', 58, 31], ['Riechedly Bazoer', 'CB', 72, 28],
       ['Adil Demirbağ', 'CB', 68, 27], ['Guilherme Sityá', 'LB', 74, 35], ['Marko Jevtović', 'DM', 67, 31],
       ['Morten Bjørlo', 'CM', 65, 29], ['Enis Bardhi', 'AM', 72, 29], ['Alassane Ndao', 'RW', 66, 28],
       ['Jackson Muleka', 'ST', 68, 25], ['Yhoan Andzouana', 'LW', 61, 28], ['Deniz Ertaş', 'GK', 60, 20],
       ['Uğurcan Yazğılı', 'CB', 63, 26], ['Yasir Subaşı', 'LB', 59, 29], ['Melih Ibrahimoglu', 'CM', 61, 24],
       ['Marius Ștefănescu', 'RW', 65, 26], ['Umut Nayir', 'ST', 68, 32], ['Ufuk Akyol', 'DM', 64, 27]
     ] },
    { n: 'Rizespor', s: 'RIZ', c1: '#00A94F', c2: '#0057B8', str: 67, p: [
       ['Yahia Fofana', 'GK', 71, 24], ['Taha Şahin', 'RB', 66, 24], ['Modibo Sagnan', 'CB', 68, 26],
       ['Samet Akaydın', 'CB', 65, 31], ['Casper Højer', 'LB', 68, 30], ['Giannis Papanikolaou', 'DM', 63, 26],
       ['Qazim Laçi', 'CM', 69, 29], ['Ibrahim Olawoyin', 'AM', 65, 27], ['Jesurun Rak-Sakyi', 'RW', 67, 22],
       ['Ali Sowe', 'ST', 69, 31], ['Valentin Mihăilă', 'LW', 67, 25], ['Erdem Canpolat', 'GK', 61, 24],
       ['Khusniddin Alikulov', 'CB', 63, 26], ['Attila Mocsi', 'CB', 63, 25], ['Taylan Antalyalı', 'CM', 64, 30],
       ['Loide Augusto', 'AM', 62, 25], ['Václav Jurečka', 'ST', 65, 31], ['Halil Dervişoğlu', 'ST', 62, 25]
     ] },
    { n: 'Samsunspor', s: 'SAM', c1: '#E30613', c2: '#FFFFFF', str: 68, p: [
       ['Okan Kocuk', 'GK', 69, 29], ['Josafat Mendes', 'RB', 68, 22], ['Rick van Drongelen', 'CB', 71, 26],
       ['Toni Borevković', 'CB', 69, 28], ['Logi Tómasson', 'LB', 63, 24], ['Olivier Ntcham', 'DM', 69, 29],
       ['Soner Aydoğdu', 'CM', 66, 34], ['Carl Holse', 'AM', 70, 26], ['Anthony Musaba', 'RW', 66, 24],
       ['Marius Mouandilmadji', 'ST', 69, 27], ['Emre Kılınç', 'LW', 69, 30], ['Albert Posiadała', 'GK', 64, 22],
       ['Ľ. Šatka', 'CB', 66, 29], ['Soner Gönül', 'LB', 62, 28], ['Afonso Sousa', 'AM', 70, 25],
       ['Tanguy Coulibaly', 'LW', 67, 24], ['Cherif Ndiaye', 'ST', 66, 29], ['Antoine Makoumbou', 'DM', 69, 26]
     ] },
    { n: 'Trabzonspor', s: 'TS', c1: '#8B1F2F', c2: '#6CACE4', str: 73, p: [
       ['André Onana', 'GK', 79, 29], ['Serdar Saatçı', 'CB', 69, 22], ['Stefan Savić', 'CB', 77, 34],
       ['Arseniy Batagov', 'CB', 72, 23], ['Mustafa Eskihellaç', 'LB', 71, 28], ['Okay Yokuşlu', 'DM', 75, 31],
       ['Bouchouariبنيامين Bouchouari', 'CM', 69, 23], ['Cihan Çanak', 'AM', 65, 20], ['Edin Višća', 'RW', 77, 35],
       ['Danylo Sikan', 'AM', 73, 24], ['Ernest Muçi', 'LW', 74, 24], ['Onuralp Çevikkan', 'GK', 61, 19],
       ['Rayyan Baniya', 'CB', 70, 26], ['Arif Boşluk', 'LB', 60, 22], ['Tim Jabol-Folcarelli', 'CM', 68, 25],
       ['Oleksandr Zubkov', 'RW', 77, 28], ['Paul Onuachu', 'ST', 73, 31], ['Anthony Nwakaeme', 'LW', 73, 36]
     ] }
  ]
};

window.LEAGUES.grecia = {
  id: 'grecia', name: 'Super League Grecia', country: 'Grecia', ucl: 2, rel: 2,
  pool: 'gr', squadSize: 17, teams: [
    { n: 'AEK Atenas', s: 'AEK', c1: '#FFE500', c2: '#000000', str: 68, p: [
       ['Thomas Strakosha', 'GK', 67, 30], ['Lazaros Rota', 'RB', 68, 27], ['Harold Moukoudi', 'CB', 69, 27],
       ['Domagoj Vida', 'CB', 67, 36], ['James Penrice', 'LB', 63, 26], ['Jens Jønsson', 'DM', 66, 32],
       ['Roberto Pereyra', 'CM', 69, 34], ['Orbelín Pineda', 'AM', 70, 29], ['Niclas Eliasson', 'RW', 69, 29],
       ['Luka Jović', 'ST', 69, 27], ['João Mário', 'LW', 71, 32], ['Alberto Brignoli', 'GK', 66, 33],
       ['Filipe Relvas', 'CB', 66, 25], ['Stavros Pilios', 'LB', 63, 24], ['Răzvan Marin', 'CM', 67, 29],
       ['Anthony Martial', 'LW', 70, 29], ['Zine', 'AM', 65, 22], ['Aboubakary Koita', 'LW', 68, 26]
     ] },
    { n: 'Aris Salónica', s: 'ARI', c1: '#FFE500', c2: '#000000', str: 64, p: [
       ['Sokratis Dioudis', 'GK', 62, 33], ['Fabiano Leismann', 'RB', 63, 35], ['Álvaro Tejero', 'CB', 64, 30],
       ['Martin Frydek', 'CB', 64, 34], ['Noah Sonko Sundberg', 'LB', 65, 30], ['Konstantinos Galanopoulos', 'DM', 65, 29],
       ['Monchu', 'CM', 64, 27], ['Uroš Račić', 'AM', 65, 28], ['Carles Pérez', 'RW', 61, 28],
       ['Tino Kadewere', 'ST', 63, 30], ['Anastasios Donis', 'LW', 64, 30], ['Lovro Majkić', 'GK', 61, 27],
       ['Pedro Álvaro', 'CB', 57, 26], ['Noah Fadiga', 'LB', 60, 34], ['Olimpiu Moruțan', 'CM', 57, 27],
       ['Migouel Alfarela', 'RW', 58, 29], ['Dudu Rodrigues', 'ST', 59, 24], ['Hamza Mendyl', 'CB', 57, 29],
       ['Georgios Athanasiadis', 'GK', 56, 33], ['Emiliano Karaj', 'GK', 58, 21], ['Lindsay Rose', 'CB', 58, 34],
       ['Michalis Voriazidis', 'CM', 55, 22]
     ] },
    { n: 'Asteras Tripolis', s: 'AST', c1: '#FFE500', c2: '#0057B8', str: 64, p: [
       ['Nikos Papadopoulos', 'GK', 64, 36], ['Robert Ivanov', 'RB', 64, 32], ['Nikola Šipčić', 'CB', 64, 31],
       ['Issiaga Sylla', 'CB', 65, 32], ['Konstantinos Triantafyllopoulos', 'LB', 65, 33], ['Yevgeniy Yablonskiy', 'DM', 62, 31],
       ['Theofanis Tzandaris', 'CM', 64, 33], ['Eder González', 'AM', 66, 29], ['Julián Bartolo', 'RW', 63, 30],
       ['Nicholas Gioacchini', 'ST', 64, 26], ['Dimitris Emmanouilidis', 'LW', 64, 26], ['Panagiotis Tsintotas', 'GK', 62, 33],
       ['Nikolai Alho', 'CB', 64, 33], ['Pepe Castaño', 'LB', 63, 28], ['Julián Chicco', 'CM', 62, 28],
       ['Nikolaos Kaltsas', 'RW', 62, 36], ['Júnior Mendieta', 'ST', 60, 33], ['Konstantinos Pomonis', 'CB', 63, 24],
       ['Spyros Angelidis', 'GK', 58, 21], ['Theofilos Kakadiaris', 'GK', 58, 19], ['Dani Fernández', 'CB', 58, 29],
       ['Mumo Muñoz', 'CM', 58, 31]
     ] },
    { n: 'Atromitos', s: 'ATR', c1: '#0057B8', c2: '#FFFFFF', str: 63, p: [
       ['Lefteris Choutesiotis', 'GK', 64, 32], ['Dimitrios Stavropoulos', 'RB', 65, 29], ['Mattheos Mountes', 'CB', 62, 23],
       ['Georgios Papadopoulos', 'CB', 62, 24], ['Jere Uronen', 'LB', 62, 32], ['Theocharis Tsingaras', 'DM', 63, 26],
       ['Athanasios Karamanis', 'CM', 64, 23], ['Stavros Pnevmonidis', 'AM', 59, 20], ['Panagiotis Tsantilas', 'RW', 65, 22],
       ['Sotiris Tsiloulis', 'ST', 64, 31], ['Konstantinos Batos', 'LW', 63, 20], ['Vasilios Athanasiou', 'GK', 61, 27],
       ['Gerasimos Mitoglou', 'CB', 67, 27], ['Dimitrios Tsakmakis', 'LB', 62, 27], ['Elton Hoxha', 'CM', 62, 20],
       ['Vangelis Paliouras', 'RW', 62, 17], ['Steven Zuber', 'ST', 69, 35], ['Hördur Magnússon', 'CB', 60, 33],
       ['Leonardos Kopanidis', 'CM', 56, 20], ['Spyros Ampartzidis', 'CM', 56, 21], ['Samuel Moutoussamy', 'CM', 57, 30],
       ['Cristopher Núñez', 'CM', 55, 29]
     ] },
    { n: 'Kifisia', s: 'KIF', c1: '#00A94F', c2: '#FFFFFF', str: 59, p: [
       ['Vasilios Xenopoulos', 'GK', 58, 28], ['David Simón', 'RB', 61, 28], ['Diamantis Chouchoumis', 'CB', 59, 32],
       ['Alberto Botía', 'CB', 60, 37], ['Alex Petkov', 'LB', 61, 27], ['Jorge Pombo', 'DM', 59, 32],
       ['Timipere Johnson Eboh', 'CM', 60, 24], ['Alexandros Pothas', 'AM', 56, 20], ['Jeremy Antonisse', 'RW', 58, 24],
       ['Panagiotis Tzimas', 'ST', 59, 25], ['Andrews Tetteh', 'LW', 58, 25], ['Filippos Roberts', 'GK', 55, 21],
       ['Luciano Maidana', 'CB', 57, 24], ['Theodoros Faitakis', 'LB', 55, 19], ['Konstantinos Roukounakis', 'CM', 55, 25],
       ['Gerson Sousa', 'RW', 54, 24], ['Pavlos Pantelidis', 'ST', 52, 24], ['Vasilios Spinos', 'CB', 56, 25],
       ['Wellington Ramírez', 'GK', 50, 26], ['Hugo Sousa', 'CB', 53, 34], ['Jakub Pokorný', 'DM', 51, 30],
       ['Manolis Smpokos', 'CB', 51, 23]
     ] },
    { n: 'Iraklis', s: 'IRA', c1: '#0057B8', c2: '#FFFFFF', str: 61, p: [
       ['Georgios Giagiozis', 'GK', 60, 32], ['Dimitris Koutromanos', 'RB', 64, 26], ['Michalis Giannitsis', 'CB', 62, 20],
       ['Georgios Kousas', 'CB', 61, 23], ['Christos Koukolis', 'LB', 61, 22], ['Dimitris Stamou', 'DM', 59, 21],
       ['Kostas Panagiotoudis', 'CM', 60, 23], ['Giannis Papadopoulos', 'AM', 59, 32], ['Christos Rovas', 'RW', 60, 32],
       ['Emanuel Perrone', 'ST', 60, 27], ['Markos Dounis', 'LW', 63, 29], ['Panagiotis Vosniadis', 'GK', 56, 27],
       ['Esteban Muñoz', 'CB', 56, 24], ['Petros Kanakoudis', 'LB', 57, 20], ['Cleyton', 'CM', 59, 31],
       ['James Davis', 'RW', 56, 22], ['Andreas Tsipras', 'ST', 60, 31], ['Vasilios Vitlis', 'CB', 57, 20],
       ['Konstantinos Kaznaferis', 'CM', 56, 27], ['Vasilis Papadopoulos', 'ST', 56, 23], ['Nikos Katharios', 'CM', 57, 25],
       ['Nikos Ziabaris', 'CB', 55, 32]
     ] },
    { n: 'Levadiakos', s: 'LEV', c1: '#00A94F', c2: '#FFFFFF', str: 61, p: [
       ['Yuriy Lodygin', 'GK', 62, 36], ['Georgios Katris', 'RB', 60, 21], ['Marios Vichos', 'CB', 61, 26],
       ['Joel Abu Hanna', 'CB', 61, 28], ['Triantafyllos Tsapras', 'LB', 59, 25], ['Konstantinos Plegas', 'DM', 63, 29],
       ['Guillermo Balzi', 'CM', 60, 25], ['Renild Kasemi', 'AM', 62, 23], ['Hisham Layous', 'RW', 60, 26],
       ['Alen Ozbolt', 'ST', 59, 30], ['Fabricio Pedrozo', 'LW', 59, 34], ['Ramiro Macagno', 'GK', 58, 29],
       ['Steven Havales', 'CB', 57, 23], ['Georgios Manthatis', 'LB', 57, 29], ['Giannis Kosti', 'CM', 58, 26],
       ['Panagiotis Symelidis', 'RW', 58, 34], ['Sebastián Palacios', 'ST', 56, 34], ['Taxiarchis Filon', 'DM', 54, 21],
       ['Stelios Vallindras', 'GK', 54, 21], ['Lucas Anacker', 'GK', 56, 30], ['Giannis Sourdis', 'GK', 55, 25],
       ['Panagiotis Liagas', 'CB', 54, 27]
     ] },
    { n: 'OFI Creta', s: 'OFI', c1: '#000000', c2: '#FFFFFF', str: 64, p: [
       ['Klidman Lilo', 'GK', 65, 23], ['Krešimir Krizmanić', 'RB', 66, 26], ['Nikos Athanasiou', 'CB', 64, 25],
       ['Nikolaos Marinakis', 'CB', 62, 33], ['Konstantinos Kostoulas', 'LB', 66, 21], ['Zisis Karachalios', 'DM', 65, 30],
       ['Georgios Kanellopoulos', 'CM', 59, 26], ['Ilija Vukotić', 'AM', 61, 27], ['Eddy Salcedo', 'RW', 65, 25],
       ['Taxiarchis Fountas', 'ST', 64, 31], ['Thiago Nuss', 'LW', 66, 25], ['Panagiotis Katsikas', 'GK', 58, 27],
       ['Ilias Chatzitheodoridis', 'CB', 59, 29], ['Achilleas Poungouras', 'LB', 59, 31], ['Juan Neira', 'CM', 58, 37],
       ['Levan Shengelia', 'RW', 61, 31], ['Thiago Romano', 'ST', 60, 20], ['Borja González', 'CB', 58, 31],
       ['Manouel Kalafatis', 'GK', 58, 21], ['Nikolaos Christogeorgos', 'GK', 58, 26], ['Giannis Christopoulos', 'DM', 57, 26],
       ['Vasilios Lampropoulos', 'CB', 59, 36]
     ] },
    { n: 'Olympiacos', s: 'OLY', c1: '#E30613', c2: '#FFFFFF', str: 76, p: [
       ['Konstantinos Tzolakis', 'GK', 78, 22], ['Rodinei', 'RB', 78, 33], ['Panagiotis Retsos', 'CB', 76, 26],
       ['Lorenzo Pirola', 'CB', 74, 23], ['Francisco Ortega', 'LB', 72, 26], ['Santiago Hezze', 'DM', 77, 23],
       ['Chiquinho', 'CM', 77, 29], ['Yusuf Yazıcı', 'AM', 74, 28], ['Gelson Martins', 'RW', 77, 30],
       ['Ayoub El Kaabi', 'ST', 79, 32], ['Rémy Cabella', 'AM', 74, 35], ['Alexandros Paschalakis', 'GK', 72, 35],
       ['Giulian Biancone', 'CB', 72, 25], ['Bruno Onyemaechi', 'LB', 71, 26], ['Christos Mouzakitis', 'CM', 70, 18],
       ['Gabriel Strefezza', 'RW', 77, 28], ['Mehdi Taremi', 'ST', 77, 32], ['Daniel Podence', 'RW', 76, 29]
     ] },
    { n: 'Panathinaikos', s: 'PAO', c1: '#00A94F', c2: '#FFFFFF', str: 73, p: [
       ['Bartłomiej Drągowski', 'GK', 74, 27], ['Davide Calabria', 'RB', 76, 28], ['Sverrir Ingason', 'CB', 73, 31],
       ['Tin Jedvaj', 'CB', 72, 29], ['Giorgos Kyriakopoulos', 'LB', 72, 29], ['M. Siopis', 'DM', 72, 31],
       ['Renato Sanches', 'CM', 73, 27], ['Anastasios Bakasetas', 'AM', 74, 32], ['Tetê', 'RW', 75, 25],
       ['Karol Świderski', 'ST', 71, 28], ['Anass Zaroury', 'LW', 72, 24], ['Alban Lafont', 'GK', 73, 26],
       ['Ahmed Touba', 'CB', 68, 27], ['Filip Mladenović', 'LB', 70, 33], ['Adam Čerin', 'CM', 72, 25],
       ['Facundo Pellistri', 'RW', 71, 23], ['Cyriel Dessers', 'ST', 71, 30], ['Filip Đuričić', 'AM', 73, 33]
     ] },
    { n: 'Panetolikos', s: 'PAN', c1: '#00A94F', c2: '#FFFFFF', str: 63, p: [
       ['Michalis Pardalos', 'GK', 64, 25], ['Chrysovalantis Manos', 'RB', 63, 21], ['Unai García', 'CB', 60, 34],
       ['Sebastian Mladen', 'CB', 64, 35], ['Christian Manrique', 'LB', 64, 28], ['Sotiris Kontouris', 'DM', 59, 21],
       ['Alexandru Mățan', 'CM', 64, 27], ['Jeyson Chura', 'AM', 64, 24], ['Lampros Smyrlis', 'RW', 63, 22],
       ['Christos Belevonis', 'ST', 63, 24], ['Jorge Aguirre', 'LW', 63, 26], ['Živko Živković', 'GK', 56, 37],
       ['Christos Sielis', 'CB', 56, 26], ['Georgios Agapakis', 'LB', 58, 25], ['Lazar Kojić', 'CM', 59, 27],
       ['Béni Nkololo', 'RW', 58, 30], ['Kosta Aleksić', 'ST', 57, 28], ['Charalampos Mavrias', 'CB', 55, 32],
       ['Lucas Chaves', 'GK', 57, 31], ['Efthymios Papazois', 'GK', 54, 19], ['David Galiatsos', 'DM', 54, 20],
       ['Nikola Stajić', 'CB', 54, 25]
     ] },
    { n: 'Kalamata', s: 'KAL', c1: '#000000', c2: '#FFFFFF', str: 58, p: [
       ['Giannis Gelios', 'GK', 57, 34], ['Nikolaos Vafeas', 'RB', 58, 29], ['Stefanos Stroungis', 'CB', 57, 29],
       ['Panagiotis Panagiotou', 'CB', 59, 24], ['Timotheos Tselepidis', 'LB', 60, 34], ['Juan Cataldi', 'DM', 57, 28],
       ['Angelos Ikonomou', 'CM', 61, 31], ['Nicolás Czornomaz', 'AM', 58, 31], ['Josete Miranda', 'RW', 60, 28],
       ['Ahmad Mendes Moreira', 'ST', 57, 31], ['Georgios Pamlidis', 'LW', 57, 33], ['Georgios Ladas', 'GK', 52, 27],
       ['Odysseas Lymperakis', 'CB', 53, 28], ['Maximiliano Moreira', 'LB', 56, 32], ['Ilias Tselios', 'CM', 55, 29],
       ['Julián Bonetto', 'RW', 54, 32], ['Nikolaos Spyrakos', 'ST', 56, 22], ['Salimo Sylla', 'CB', 57, 32],
       ['Manolis Kalogerakis', 'GK', 52, 34], ['Pavlos Varelas', 'GK', 51, 18], ['Petros Kaloutsikidis', 'DM', 52, 25],
       ['Stathis Tachatos', 'CB', 52, 25]
     ] },
    { n: 'PAOK', s: 'PAOK', c1: '#000000', c2: '#FFFFFF', str: 72, p: [
       ['Jiří Pavlenka', 'GK', 71, 33], ['Jonjoe Kenny', 'RB', 69, 28], ['Tomasz Kędziora', 'CB', 72, 31],
       ['Giannis Michailidis', 'CB', 69, 25], ['Rahman Baba', 'LB', 73, 30], ['Soualiho Meïté', 'DM', 72, 31],
       ['Mady Camara', 'CM', 71, 28], ['Giannis Konstantelias', 'AM', 74, 22], ['Andrija Živković', 'RW', 75, 28],
       ['GiakoumakisΓεώργιος Giakoumakis', 'ST', 72, 30], ['Luka Ivanušec', 'LW', 69, 26], ['Luka Gugeshashvili', 'GK', 67, 26],
       ['Dejan Lovren', 'CB', 69, 35], ['Greg Taylor', 'LB', 71, 27], ['Magomed Ozdoev', 'CM', 71, 32],
       ['Kiril Despodov', 'RW', 74, 28], ['Fedor Chalov', 'ST', 70, 27], ['Taison', 'AM', 72, 37]
     ] },
    { n: 'Volos NFC', s: 'VOL', c1: '#0057B8', c2: '#FFFFFF', str: 59, p: [
       ['Marios Siampanis', 'GK', 59, 27], ['Carles Soria', 'RB', 58, 30], ['Giannis Kargas', 'CB', 56, 32],
       ['Georgios Lagonidis', 'CB', 58, 24], ['Georgios Mygas', 'LB', 56, 32], ['Anastasios Tsokanis', 'DM', 60, 35],
       ['Joca', 'CM', 58, 30], ['Juanpi', 'AM', 60, 32], ['Lazaros Lamprou', 'RW', 58, 29],
       ['Said Hamulić', 'ST', 60, 26], ['Antonio Zarzana', 'LW', 59, 24], ['Nikolaos Grammatikakis', 'GK', 55, 23],
       ['Konstantinos Lykourinos', 'CB', 54, 20], ['Núrio Fortuna', 'LB', 53, 31], ['Klearchos Vainopoulos', 'CM', 54, 21],
       ['Nabil Makni', 'RW', 54, 25], ['Maximiliano Comba', 'ST', 57, 32], ['Hjörtur Hermannsson', 'CB', 59, 31],
       ['Adebayo Adeleye', 'GK', 53, 26], ['Marios Sinanaj', 'CB', 53, 22], ['Lefteris Tasiouras', 'DM', 51, 22],
       ['Athanasios Triantafyllou', 'CB', 52, 23]
     ] }
  ]
};

window.LEAGUES.ucrania = {
  id: 'ucrania', name: 'Premier League de Ucrania', country: 'Ucrania', ucl: 2, rel: 2,
  pool: 'ua', squadSize: 17, teams: [
    { n: 'Dynamo Kyiv', s: 'DYN', c1: '#FFFFFF', c2: '#0057B8', str: 73, p: [
       ['Ruslan Neshcheret', 'GK', 70, 23], ['Oleksandr Karavaiev', 'RB', 73, 33], ['Denys Popov', 'CB', 75, 26],
       ['Taras Mykhavko', 'CB', 70, 20], ['Vladyslav Dubinchak', 'LB', 71, 27], ['Volodymyr Brazhko', 'DM', 75, 23],
       ['Mykola Shaparenko', 'CM', 78, 26], ['Vitaliy Buyalskyi', 'AM', 76, 32], ['Andriy Yarmolenko', 'RW', 73, 35],
       ['Eduardo Guerrero', 'ST', 69, 25], ['Nazar Voloshyn', 'LW', 70, 22], ['Valentyn Morgun', 'GK', 60, 23],
       ['K. Bilovar', 'DM', 68, 24], ['Kostiantyn Vivcharenko', 'LB', 69, 23], ['Oleksandr Pikhalyonok', 'CM', 75, 28],
       ['Vladyslav Kabaev', 'LW', 70, 29], ['Vladislav Blănuță', 'ST', 68, 23], ['Oleksandr Tymchyk', 'RB', 72, 28]
     ] },
    { n: 'Shakhtar Donetsk', s: 'SHK', c1: '#F58220', c2: '#000000', str: 75, p: [
       ['Dmytro Riznyk', 'GK', 76, 26], ['Yukhym Konoplia', 'RB', 74, 25], ['MatvienkoМатвієнко Matviienko', 'CB', 79, 29],
       ['Valeriy Bondar', 'CB', 77, 26], ['Pedro Henrique', 'LB', 74, 22], ['Yegor Nazaryna', 'CM', 71, 27],
       ['Dmytro Kryskiv', 'CM', 74, 24], ['Artem Bondarenko', 'AM', 79, 24], ['Pedrinho', 'RW', 75, 27],
       ['Kauã Elias', 'ST', 73, 19], ['Eguinaldo', 'LW', 72, 20], ['Kiril Fesiun', 'GK', 71, 22],
       ['Marlon', 'CB', 74, 29], ['Irakli Azarov', 'CM', 72, 23], ['Marlon Gomes', 'CM', 73, 21],
       ['Alisson', 'RW', 72, 19], ['Lassina Traoré', 'ST', 73, 24], ['Vinícius Tobías', 'RB', 72, 21]
     ] },
    { n: 'Zorya Luhansk', s: 'ZOR', c1: '#000000', c2: '#E30613', str: 67, p: [
       ['Oleksandr Saputin', 'GK', 67, 23], ['Gabriel Eskinja', 'RB', 69, 23], ['Andrija Janjić', 'CB', 68, 24],
       ['Juninho', 'CB', 66, 31], ['Ihor Perduta', 'LB', 67, 36], ['Dejan Popara', 'DM', 69, 23],
       ['Nemanja Anđušić', 'CM', 66, 30], ['Kyrylo Dryshlyuk', 'AM', 69, 27], ['Artem Seslar', 'RW', 64, 22],
       ['Ihor Horbach', 'ST', 68, 22], ['Andriy Matkevych', 'LW', 66, 21], ['Mykyta Turbayevskyi', 'GK', 63, 24],
       ['Roman Vantukh', 'CB', 60, 28], ['Anderson Jordan', 'LB', 63, 27], ['Roman Salenko', 'CM', 64, 21],
       ['Pylyp Budkivskyi', 'RW', 61, 34], ['Vladyslav Vakula', 'ST', 61, 27], ['Jakov Bašić', 'CB', 64, 30],
       ['Valeriy Kosivskyi', 'GK', 61, 21], ['Petar Mićin', 'CM', 60, 28], ['Navin Malysh', 'CM', 58, 23],
       ['Ivan Holovkin', 'CM', 62, 26]
     ] },
    { n: 'Poltava', s: 'PLT', c1: '#00A94F', c2: '#FFFFFF', str: 61, p: [
       ['Volodymyr Krynskyi', 'GK', 62, 26], ['Pavlo Ivanov', 'RB', 59, 21], ['Oleksiy Kovtun', 'CB', 63, 24],
       ['Dmytro Bashlay', 'CB', 62, 27], ['Oleksandr Holikov', 'LB', 61, 25], ['Oleksiy Savchenko', 'DM', 59, 27],
       ['Ihor Medynskyi', 'CM', 59, 28], ['Vitaliy Sokurenko', 'AM', 62, 25], ['Maksym Dehtyarev', 'RW', 61, 31],
       ['Oleksandr Kovpak', 'ST', 63, 23], ['Kostyantyn Yatsyk', 'LW', 62, 32], ['Maksym Kuchynskyi', 'GK', 59, 24],
       ['Maksym Zhychykov', 'CB', 55, 32], ['Vadym Zhuk', 'LB', 56, 24], ['Anton Savin', 'CM', 55, 30],
       ['Yevhen Troyanovskyi', 'RW', 57, 33], ['Maksym Pokotylyuk', 'ST', 58, 23], ['Oleh Boroday', 'CB', 59, 28],
       ['Dmytro Krapyvnyi', 'CM', 54, 29], ['Vadym Paramonov', 'CB', 55, 22], ['Mykyta Fedotov', 'GK', 54, 32],
       ['Artem Nedolya', 'CM', 53, 20]
     ] },
    { n: 'Kryvbas', s: 'KRY', c1: '#E30613', c2: '#FFFFFF', str: 59, p: [
       ['Bogdan Khoma', 'GK', 57, 23], ['Oleksandr Romanchuk', 'RB', 59, 27], ['Tymur Stetskov', 'CB', 60, 28],
       ['Andriy Ponedelnik', 'CB', 57, 29], ['Oleksandr Drambayev', 'LB', 60, 25], ['Djihad Bizimana', 'DM', 60, 30],
       ['Dmytro Khomchenovskyi', 'CM', 60, 36], ['Yegor Tverdokhlib', 'AM', 58, 26], ['Daniel Sosah', 'RW', 60, 28],
       ['Maksym Lunyov', 'ST', 59, 28], ['Noha Ndombasi', 'LW', 58, 25], ['Volodymyr Makhankov', 'GK', 52, 29],
       ['Volodymyr Yakimets', 'CB', 57, 28], ['Rafael Bandeira', 'LB', 57, 25], ['Denys Kuzyk', 'CM', 57, 24],
       ['Artur Mykytyshyn', 'RW', 52, 23], ['Oleg Kozhushko', 'ST', 56, 28], ['Yvan Dibango', 'CB', 53, 24],
       ['Andriy Klishchuk', 'GK', 50, 34], ['Bakary Konaté', 'CB', 54, 23], ['Yuriy Vakulko', 'CM', 51, 29],
       ['Hrvoje Ilić', 'CM', 51, 27]
     ] },
    { n: 'FC Oleksandriya', s: 'OLE', c1: '#FFE500', c2: '#0057B8', str: 64, p: [
       ['Viktor Dolhyi', 'GK', 64, 22], ['Ilya Ukhan', 'RB', 63, 23], ['Anton Drozd', 'CB', 62, 21],
       ['Théo Ndicka', 'CB', 64, 26], ['Danil Skorko', 'LB', 64, 24], ['Fernando Henrique', 'DM', 65, 25],
       ['Kyrylo Kovalets', 'CM', 63, 33], ['Serhiy Buletsa', 'AM', 64, 27], ['Andriy Kulakov', 'RW', 63, 27],
       ['Artem Shulyanskyi', 'ST', 63, 25], ['Oleksandr Yakymenko', 'LW', 64, 21], ['Mykyta Shevchenko', 'GK', 61, 33],
       ['Mykola Oharkov', 'CB', 61, 21], ['Miguel Campos', 'LB', 57, 30], ['Dmytro Myshnyov', 'CM', 62, 32],
       ['Jota', 'RW', 59, 24], ['Hussayn Touati', 'ST', 60, 25], ['Jocelin Behiratche', 'CB', 62, 26],
       ['Nazar Makarenko', 'GK', 58, 19], ['Anton Bol', 'CB', 57, 23], ['Daniil Vashchenko', 'CM', 56, 21],
       ['Dmytro Chernysh', 'CM', 55, 22]
     ] },
    { n: 'Polissya Zhytomyr', s: 'POL', c1: '#00A94F', c2: '#FFFFFF', str: 59, p: [
       ['Oleh Kudryk', 'GK', 57, 30], ['Andi Hadroj', 'RB', 58, 27], ['Mykyta Kravchenko', 'CB', 61, 29],
       ['Eduard Sarapiy', 'CB', 57, 27], ['Lucas Taylor', 'LB', 56, 31], ['Ruslan Babenko', 'DM', 58, 34],
       ['Tomer Yosefi', 'CM', 59, 27], ['Oleksiy Hutsulyak', 'AM', 59, 29], ['Oleksandr Nazarenko', 'RW', 60, 26],
       ['Oleksandr Filippov', 'ST', 57, 34], ['André Gonçalves', 'LW', 61, 23], ['Heorhiy Bushchan', 'GK', 52, 32],
       ['Bohdan Mykhaylichenko', 'DM', 52, 29], ['Giorgi Maisuradze', 'LB', 55, 24], ['Oleksandr Andriyevskyi', 'CM', 54, 32],
       ['Maksym Braharu', 'RW', 54, 24], ['Jerry Yoka', 'ST', 53, 20], ['João Vialle', 'CB', 56, 24],
       ['Yevhen Volynets', 'GK', 53, 33], ['Viktor Uliganets', 'GK', 51, 21], ['Serhiy Chobotenko', 'CB', 52, 29],
       ['Borys Krushynskyi', 'CB', 52, 24]
     ] },
    { n: 'Kolos Kovalivka', s: 'KOL', c1: '#00A94F', c2: '#FFE500', str: 61, p: [
       ['Dmytro Matsapura', 'GK', 62, 26], ['Zurab Rukhadze', 'RB', 62, 23], ['Eduard Kozik', 'CB', 58, 23],
       ['Valeriy Bondarenko', 'CB', 58, 32], ['Mykyta Burda', 'LB', 62, 31], ['Oleksandr Demchenko', 'DM', 63, 30],
       ['Albin Krasniqi', 'CM', 59, 25], ['Ibrahim Kane', 'AM', 63, 26], ['Maksym Tretyakov', 'RW', 61, 30],
       ['Artem Husol', 'ST', 63, 20], ['Anton Salabay', 'LW', 60, 24], ['Ivan Pakholyuk', 'GK', 57, 22],
       ['Andriy Tsurikov', 'CB', 59, 34], ['Ilir Krasniqi', 'LB', 55, 26], ['Nika Gagnidze', 'CM', 56, 25],
       ['Danyil Alefirenko', 'RW', 54, 26], ['Mathias Oyewusi', 'ST', 57, 27], ['Vladyslav Shershen', 'CB', 55, 20],
       ['Tymur Puzankov', 'GK', 52, 23], ['Andriy Ponyedyelnik', 'CB', 52, 29], ['Daniil Denysenko', 'CM', 55, 20],
       ['Maksym Vasylets', 'CM', 54, 21]
     ] },
    { n: 'Rukh Lviv', s: 'RUK', c1: '#E30613', c2: '#000000', str: 64, p: [
       ['Yuriy-Volodymyr Hereta', 'GK', 63, 22], ['Vitaliy Kholod', 'RB', 66, 22], ['Denys Slyusar', 'CB', 66, 24],
       ['Ibrahim Juma', 'CB', 66, 22], ['Yuriy Kopyna', 'LB', 63, 30], ['Edson Fernando', 'DM', 67, 28],
       ['Vlad Reilanu', 'CM', 65, 23], ['Ostap Prytula', 'AM', 62, 26], ['Klayver Gabriel', 'RW', 65, 23],
       ['Vasyl Runich', 'ST', 63, 26], ['Illya Kvasnytsya', 'LW', 64, 23], ['Yehor Klymenko', 'GK', 59, 18],
       ['Bohdan Levytskyi', 'CB', 59, 17], ['Rostyslav Lyakh', 'LB', 60, 26], ['Denys Pidhurskyi', 'CM', 62, 23],
       ['Nazar Kasarda', 'RW', 60, 21], ['Beknaz Almazbekov', 'ST', 62, 21], ['Andriy Kitela', 'CB', 60, 22],
       ['Oleksiy Tovarnytskyi', 'CB', 60, 22], ['Bohdan Slyubyk', 'CB', 58, 22], ['Vitaliy Roman', 'CB', 56, 23],
       ['Kostyantyn Kvas', 'CM', 57, 21]
     ] },
    { n: 'Veres Rivne', s: 'VER', c1: '#00A94F', c2: '#FFFFFF', str: 60, p: [
       ['Pavlo Stefaniuk', 'GK', 60, 21], ['Maksym Smiyan', 'RB', 60, 24], ['Semen Vovchenko', 'CB', 61, 27],
       ['Kai Cipot', 'CB', 60, 25], ['Serhiy Korniychuk', 'LB', 59, 22], ['Giorgi Kutsia', 'DM', 58, 27],
       ['Dmytro Hodya', 'CM', 61, 21], ['Dmytro Klyots', 'AM', 62, 30], ['Eren Aydın', 'RW', 60, 23],
       ['Wesley Pomba', 'ST', 60, 24], ['Alagie Wally', 'LW', 57, 20], ['Andriy Kozhukhar', 'GK', 55, 27],
       ['Mykhaylo Protasevych', 'CB', 55, 22], ['Konstantinos Stamoulis', 'LB', 57, 26], ['Ígor Jaratin', 'CM', 55, 31],
       ['Serhiy Sten', 'RW', 54, 24], ['Denys Ndukve', 'ST', 53, 26], ['Roman Honcharenko', 'CB', 56, 33],
       ['Valentyn Horokh', 'GK', 51, 25], ['Danyil Checher', 'CB', 54, 22], ['Vitaliy Boyko', 'CM', 52, 29],
       ['Valeriy Kucherov', 'CM', 55, 33]
     ] },
    { n: 'Obolon Kyiv', s: 'OBO', c1: '#0057B8', c2: '#FFE500', str: 57, p: [
       ['Nazariy Fedorivskyi', 'GK', 57, 21], ['Dmytro Kapinus', 'RB', 58, 30], ['Vitaliy Yermakov', 'CB', 54, 29],
       ['Yevheniy Shevchenko', 'CB', 58, 32], ['Yevheniy Morozko', 'LB', 59, 29], ['Taras Moroz', 'DM', 56, 28],
       ['Maksym Chekh', 'CM', 55, 21], ['Artem Kulakovskyi', 'AM', 58, 33], ['Andriy Matkevych', 'RW', 58, 30],
       ['Denys Ustymenko', 'ST', 58, 24], ['Ihor Medynskyi', 'LW', 59, 24], ['Kyrylo Barantsov', 'GK', 53, 24],
       ['Oleksandr Feshchenko', 'CB', 54, 21], ['Yehor Prokopenko', 'LB', 53, 28], ['Oleh Slobodyan', 'CM', 54, 23],
       ['Artem Shulyanskyi', 'RW', 54, 25], ['Serhiy Sukhanov', 'ST', 50, 24], ['Pavlo Polehenko', 'CB', 54, 30],
       ['Maksym Hrysyo', 'CM', 48, 33], ['Dmytro Myshnyov', 'CM', 50, 30], ['Roman Volokhatyi', 'CM', 48, 24],
       ['Vadym Stashkiv', 'GK', 49, 22]
     ] },
    { n: 'LNZ Cherkasy', s: 'LNZ', c1: '#FFE500', c2: '#000000', str: 55, p: [
       ['Yevgeniy Kucherenko', 'GK', 56, 23], ['Ajdi Dajko', 'RB', 57, 24], ['Oleksandr Nasonov', 'CB', 56, 25],
       ['Oleksandr Kapliyenko', 'CB', 55, 30], ['Oleg Gorin', 'LB', 54, 26], ['Shota Nonikashvili', 'DM', 55, 25],
       ['Vyacheslav Tankovskyi', 'CM', 54, 31], ['Artur Avagimyan', 'AM', 55, 29], ['Eynel Soares', 'RW', 58, 28],
       ['Prosper Obah', 'ST', 54, 23], ['Danylo Kravchuk', 'LW', 55, 25], ['Oleksiy Palamarchuk', 'GK', 51, 35],
       ['Roman Didyk', 'CB', 51, 24], ['Ilya Putrya', 'LB', 52, 28], ['Muharrem Jashari', 'CM', 53, 28],
       ['Jewison Bennette', 'RW', 54, 22], ['Mark Assinor', 'ST', 50, 26], ['Nazariy Muravskyi', 'CB', 50, 26],
       ['Kirill Samoylenko', 'GK', 49, 25], ['Yaroslav Kysil', 'CB', 49, 23], ['Gennadiy Pasich', 'CM', 47, 33],
       ['Artur Ryabov', 'CM', 50, 26]
     ] },
    { n: 'Karpaty Lviv', s: 'KAR', c1: '#00A94F', c2: '#FFFFFF', str: 63, p: [
       ['Nazar Domchak', 'GK', 64, 19], ['Mykola Kyrychok', 'RB', 62, 20], ['Volodymyr Adamyuk', 'CB', 65, 35],
       ['Vladislav Baboglo', 'CB', 66, 28], ['Andriy Buleza', 'LB', 62, 22], ['Ambrosiy Chachua', 'DM', 61, 32],
       ['Ivan Chaban', 'CM', 62, 20], ['Oleg Fedor', 'AM', 62, 22], ['Paulo Vitor', 'RW', 62, 27],
       ['Fabiano', 'ST', 65, 20], ['Igor Neves', 'LW', 62, 27], ['Andriy Klishchuk', 'GK', 60, 34],
       ['Denys Miroshnichenko', 'CB', 57, 32], ['Yuriy Kokodynyak', 'LB', 58, 19], ['Vladyslav Klymenko', 'CM', 58, 32],
       ['Yaroslav Karabin', 'RW', 60, 24], ['Ihor Krasnopir', 'ST', 59, 24], ['Diego Palacios', 'CB', 60, 27],
       ['Roman Mysak', 'GK', 58, 35], ['Pavlo Polehenko', 'CB', 57, 31], ['Jean Pedroso', 'CB', 56, 22],
       ['Tymur Stetskov', 'DM', 55, 28]
     ] },
    { n: 'Epicentr', s: 'EPI', c1: '#F58220', c2: '#FFFFFF', str: 54, p: [
       ['Arseniy Vavshko', 'GK', 52, 29], ['Stepan Hryhorashchuk', 'RB', 56, 29], ['Vladyslav Moroz', 'CB', 55, 20],
       ['Valeriy Luchkevych', 'CB', 51, 22], ['Serjan Repaj', 'LB', 54, 22], ['Yevhen Zaporozhets', 'DM', 55, 23],
       ['Kyrylo Kovalets', 'CM', 55, 26], ['Mykola Myronyuk', 'AM', 56, 25], ['Maksym Yevpak', 'RW', 51, 30],
       ['Ivan Bendera', 'ST', 55, 26], ['Vadym Sydun', 'LW', 55, 29], ['Oleh Bilyk', 'GK', 47, 23],
       ['Vitaliy Horin', 'CB', 50, 31], ['Artem Kozak', 'LB', 52, 28], ['Jon Ceberio', 'CM', 50, 27],
       ['Nene', 'RW', 49, 21], ['Carlos Rojas', 'ST', 50, 29], ['Ihor Kyryukhantsev', 'CB', 51, 30],
       ['Raúl Tavares', 'CM', 48, 31], ['Daniil Vashchenko', 'CM', 46, 26], ['Andriy Lipovuz', 'CM', 48, 21],
       ['Nikita Fedotov', 'GK', 47, 33]
     ] },
    { n: 'Kudrivka', s: 'KUD', c1: '#0057B8', c2: '#FFFFFF', str: 56, p: [
       ['Roman Lyopka', 'GK', 57, 29], ['Vladyslav Shapoval', 'RB', 57, 31], ['Myroslav Serdyuk', 'CB', 57, 27],
       ['Bohdan Veklyak', 'CB', 55, 27], ['Oleh Husiev', 'LB', 55, 21], ['Andriy Totovytskyi', 'DM', 58, 33],
       ['Andriy Storchous', 'CM', 57, 32], ['Kyrylo Matvyeyev', 'AM', 54, 24], ['Dmytro Korkishko', 'RW', 58, 36],
       ['Oleksandr Kozak', 'ST', 57, 32], ['Oleksiy Lytovchenko', 'LW', 54, 30], ['Anton Yashkov', 'GK', 54, 34],
       ['Yevheniy Morozko', 'CB', 54, 33], ['Artem Machelyuk', 'LB', 52, 27], ['Artur Dumanyuk', 'CM', 54, 30],
       ['Roman Solodarenko', 'RW', 51, 42], ['Denys Svityukha', 'ST', 55, 24], ['Yuriy Potimkov', 'CB', 54, 24],
       ['Mykhaylo Kulyk', 'GK', 51, 21], ['Valeriy Rohozynskyi', 'CB', 51, 31], ['Ivan Mamrosenko', 'CB', 52, 26],
       ['Maksym Melnychuk', 'DM', 50, 27]
     ] },
    { n: 'Metalist 1925', s: 'MET', c1: '#FFE500', c2: '#0057B8', str: 60, p: [
       ['Danylo Kanevtsev', 'GK', 59, 26], ['Oleksandr Myzyuk', 'RB', 59, 31], ['Serhiy Lyulka', 'CB', 62, 22],
       ['Vitaliy Fedoriv', 'CB', 62, 31], ['Volodymyr Shopin', 'LB', 62, 29], ['Eduard Sarapiy', 'DM', 62, 22],
       ['Andriy Ralyuchenko', 'CM', 59, 23], ['Vladyslav Nekhtiy', 'AM', 60, 33], ['Matheus Peixoto', 'RW', 60, 33],
       ['Dmytro Shamych', 'ST', 62, 29], ['Ruslan Fomin', 'LW', 59, 24], ['Oleksandr Rybka', 'GK', 58, 21],
       ['Bohdan Porokh', 'CB', 56, 24], ['Maílton', 'LB', 56, 20], ['Farès Bahlouli', 'CM', 59, 31],
       ['Yevheniy Ryazantsev', 'RW', 59, 28], ['Brayan Riascos', 'ST', 56, 25], ['Yevhen Pidlepenets', 'CB', 56, 33],
       ['Anton Postupalenko', 'CM', 52, 24], ['Yehor Demchenko', 'CM', 55, 27], ['Serhiy Horbunov', 'CM', 53, 20],
       ['Vyacheslav Tankovskyi', 'CM', 54, 32]
     ] }
  ]
};

window.LEAGUES.rusia = {
  id: 'rusia', name: 'Premier Liga de Rusia', country: 'Rusia', ucl: 2, rel: 2,
  pool: 'ru', squadSize: 17, teams: [
    { n: 'Akhmat Grozny', s: 'AKH', c1: '#00A94F', c2: '#FFFFFF', str: 63, p: [
       ['Vadim Ulyanov', 'GK', 63, 25], ['Turpal-Ali Ibishev', 'RB', 63, 24], ['Miloš Šatara', 'CB', 64, 31],
       ['Miroslav Bogosavac', 'CB', 63, 30], ['Mohammadmehdi Zare', 'LB', 61, 23], ['Rifat Zhemaletdinov', 'DM', 66, 30],
       ['Ismael Silva', 'CM', 61, 32], ['Amine Talal', 'AM', 65, 30], ['Lechi Sadulayev', 'RW', 62, 26],
       ['Braian Mansilla', 'ST', 64, 29], ['Mohamed Konaté', 'LW', 62, 29], ['Yakhya Magomedov', 'GK', 60, 19],
       ['Ilyas Gaibov', 'CB', 57, 21], ['Rizvan Utsiyev', 'LB', 58, 38], ['Egas Cacintura', 'CM', 59, 29],
       ['Yoshan Valois', 'RW', 61, 22], ['Maksim Samorodov', 'ST', 60, 26], ['Darko Todorović', 'CB', 57, 29],
       ['Giorgi Sheliya', 'GK', 56, 38], ['Nader Ghandri', 'CB', 57, 31], ['Maksim Sidorov', 'DM', 56, 28],
       ['Ousmane Ndong', 'CB', 57, 27]
     ] },
    { n: 'Fakel Voronezh', s: 'FAK', c1: '#0057B8', c2: '#FFFFFF', str: 57, p: [
       ['Vitaliy Gudiev', 'GK', 56, 31], ['Maks Dziov', 'RB', 56, 25], ['Igor Kalinin', 'CB', 57, 31],
       ['Igor Yurganov', 'CB', 58, 33], ['Sergey Bozhin', 'LB', 60, 32], ['Thabo Cele', 'DM', 57, 29],
       ['Dylan Mertens', 'CM', 58, 31], ['Abdula Bagamaev', 'AM', 59, 22], ['Mohamed Brahimi', 'RW', 56, 28],
       ['Aleksey Kashtanov', 'ST', 58, 30], ['Ilnur Alshin', 'LW', 57, 33], ['Aleksandr Belenov', 'GK', 56, 40],
       ['Rayan Senhadji', 'CB', 53, 29], ['Vladislav Masternoy', 'LB', 52, 31], ['Nichita Moțpan', 'CM', 53, 25],
       ['Vladimir Iljin', 'RW', 53, 34], ['Evgeniy Markov', 'ST', 55, 32], ['Sergey Bryzgalov', 'CB', 55, 34],
       ['Vyacheslav Dorovskikh', 'GK', 50, 23], ['Nikolay Giorgobiani', 'CM', 52, 29], ['Mikhail Shchetinin', 'CM', 51, 21],
       ['Vyacheslav Yakimov', 'CM', 50, 28]
     ] },
    { n: 'Baltika', s: 'BAL', c1: '#0057B8', c2: '#FFFFFF', str: 58, p: [
       ['Egor Lyubakov', 'GK', 60, 27], ['Sergey Varatynov', 'RB', 56, 23], ['Nathan Gassama', 'CB', 59, 25],
       ['Diego Luna', 'CB', 61, 26], ['Mingiyan Beveyev', 'LB', 59, 31], ['Aymane Mourid', 'DM', 59, 26],
       ['Andrei Mendel', 'CM', 57, 31], ['Ilya Petrov', 'AM', 58, 31], ['Tenton Yenne', 'RW', 59, 26],
       ['Kirill Stepanov', 'ST', 58, 20], ['Irakli Manelov', 'LW', 55, 26], ['Maksim Borisko', 'GK', 56, 26],
       ['Aleksandr Filin', 'CB', 54, 30], ['Kirill Obonin', 'LB', 56, 20], ['Yury Kavalyow', 'CM', 55, 33],
       ['Chinonso Offor', 'RW', 51, 26], ['Brayan Gil', 'ST', 55, 25], ['Eldar Ćivić', 'CB', 54, 30],
       ['Ivan Kukushkin', 'GK', 52, 24], ['Amir Mokhammad', 'CB', 50, 30], ['Stefan Kovač', 'CM', 51, 27],
       ['Vladislav Saus', 'CM', 53, 23]
     ] },
    { n: 'CSKA Moscú', s: 'CSKA', c1: '#E30613', c2: '#0057B8', str: 73, p: [
       ['Igor Akinfeev', 'GK', 75, 40], ['Danil Krugovoy', 'RB', 74, 28], ['João Victor', 'CB', 63, 28],
       ['Milan Gajić', 'CB', 71, 30], ['Dzhamalutdin Abdulkadyrov', 'LB', 75, 21], ['Rodrigo Villagra', 'DM', 74, 25],
       ['Matheus Alves', 'CM', 73, 21], ['Ivan Oblyakov', 'AM', 75, 28], ['Artyom Shumansky', 'RW', 75, 22],
       ['Alerrandro Mansa', 'ST', 71, 26], ['Tamerlan Musayev', 'LW', 75, 25], ['Vladislav Torop', 'GK', 72, 23],
       ['Ramiro Di Luciano', 'CB', 68, 22], ['Moisés', 'LB', 72, 31], ['Lionel Verde', 'CM', 67, 22],
       ['Yegor Ushakov', 'RW', 71, 24], ['Kirill Glebov', 'ST', 71, 21], ['Mikhail Ryadno', 'CB', 68, 21],
       ['Yegor Besayev', 'GK', 69, 20], ['Igor Diveyev', 'CB', 68, 27], ['Matvey Lukin', 'CB', 69, 22],
       ['Matija Popović', 'CM', 67, 20]
     ] },
    { n: 'Dinamo Moscú', s: 'DIN', c1: '#0057B8', c2: '#FFFFFF', str: 71, p: [
       ['Igor Leshchuk', 'GK', 71, 30], ['Nicolás Marichal', 'RB', 73, 25], ['Juan José Cáceres', 'CB', 69, 26],
       ['Milan Majstorović', 'CB', 73, 21], ['Roberto Fernández', 'CM', 66, 26], ['Bitello', 'DM', 71, 26],
       ['Danil Glebov', 'CM', 71, 28], ['Anton Miranchuk', 'AM', 72, 31], ['Arthur Gomes', 'RW', 69, 28],
       ['Moumi Ngamaleu', 'ST', 74, 32], ['El Mehdi Maouhoub', 'LW', 71, 23], ['Kurban Rasulov', 'GK', 69, 20],
       ['Dmitri Skopintsev', 'CB', 66, 29], ['Bakhtiyar Zaynutdinov', 'LB', 69, 28], ['Luis Chávez', 'CM', 68, 30],
       ['Ulvi Babayev', 'RW', 66, 22], ['Ivan Sergeyev', 'ST', 67, 31], ['Rubens Dias', 'CB', 69, 25],
       ['Andrey Kudravets', 'GK', 66, 23], ['Andrey Lunyov', 'GK', 66, 27], ['Maksim Osipenko', 'CB', 66, 32],
       ['Leon Zaydenzal', 'CB', 66, 22]
     ] },
    { n: 'Ural Yekaterinburg', s: 'URA', c1: '#F58220', c2: '#000000', str: 60, p: [
       ['Aleksandr Selikhov', 'GK', 59, 24], ['Silvije Begić', 'RB', 61, 23], ['Vitali Stezhko', 'CB', 58, 30],
       ['Dmitry Tikhy', 'CB', 59, 22], ['Ítalo', 'LB', 63, 27], ['Fanil Sungatulin', 'DM', 59, 28],
       ['Maksim Kaynov', 'CM', 61, 28], ['Vladislav Karapuzov', 'AM', 59, 28], ['Martin Sekulić', 'RW', 61, 25],
       ['Denis Bokov', 'ST', 57, 28], ['Denis Gazhalov', 'LW', 59, 27], ['Yury Maleyev', 'GK', 53, 32],
       ['Aleksandr Korotkov', 'CB', 57, 25], ['Klimenty Sidorov', 'LB', 55, 21], ['Nikita Morozov', 'CM', 56, 31],
       ['Pavel Satuchin', 'RW', 56, 32], ['Vitaly Nem', 'ST', 58, 22], ['Dmitry Prishchepa', 'CB', 57, 20],
       ['Khoren Bayramyan', 'CM', 55, 25], ['Léo Cordeiro', 'CM', 53, 25], ['Ilya Skoropupov', 'CM', 51, 24],
       ['Vitaly Bondarev', 'CM', 53, 24]
     ] },
    { n: 'Krasnodar', s: 'KRA', c1: '#000000', c2: '#00A94F', str: 68, p: [
       ['Stalislav Agkatsev', 'GK', 71, 24], ['Vitaliy Stezhko', 'RB', 69, 28], ['Vítor Tormena', 'CB', 71, 30],
       ['Diego Costa', 'CB', 68, 27], ['Jubal', 'LB', 69, 33], ['Kevin Pina', 'DM', 69, 29],
       ['Douglas Augusto', 'CM', 68, 29], ['João Batxi', 'AM', 67, 28], ['Jhon Córdoba', 'RW', 60, 33],
       ['Dmitry Vorobyov', 'ST', 69, 29], ['Juan Manuel Boselli', 'LW', 71, 27], ['Aleksandr Koryakin', 'GK', 66, 24],
       ['Lucas Olaza', 'CB', 64, 32], ['Valentin Paltsev', 'LB', 66, 25], ['Christian', 'CM', 66, 26],
       ['Moses David Cobnan', 'RW', 64, 24], ['Artyom Khamrin', 'ST', 67, 19], ['Ilya Vakhania', 'CB', 65, 25],
       ['Sergey Petrov', 'CB', 62, 35], ['Magomed Ozdoyev', 'CM', 64, 34], ['Daniil Utkin', 'CM', 63, 27],
       ['Aleksandr Chernikov', 'CM', 64, 26]
     ] },
    { n: 'Krylia Sovetov', s: 'KRY', c1: '#0057B8', c2: '#FFFFFF', str: 64, p: [
       ['Sergei Pesyakov', 'GK', 64, 38], ['Kiryl Pyachenin', 'RB', 63, 29], ['Thomas Galdames', 'CB', 63, 28],
       ['Dominik Oroz', 'CB', 67, 26], ['Nikolai Rasskazov', 'LB', 63, 28], ['Sergei Babkin', 'DM', 65, 24],
       ['Maksim Vityugov', 'CM', 66, 28], ['Amar Rahmanović', 'AM', 62, 32], ['Vadim Rakov', 'RW', 66, 21],
       ['Aleksei Sutormin', 'ST', 64, 32], ['Vladimir Khubulov', 'LW', 63, 25], ['Yevgeny Frolov', 'GK', 58, 38],
       ['Ivan Lepsky', 'CB', 61, 21], ['Nikita Chernov', 'LB', 63, 30], ['Mihajlo Banjac', 'CM', 60, 27],
       ['Ivan Oleynikov', 'RW', 59, 28], ['Jimmy Marín', 'ST', 59, 29], ['Roman Yevgenyev', 'CB', 62, 27],
       ['Nikita Kokarev', 'GK', 58, 23], ['Sergei Bozhin', 'CB', 58, 32], ['Ilya Gribakin', 'CB', 56, 22],
       ['Dmytro Ivanisenya', 'CM', 56, 32]
     ] },
    { n: 'Lokomotiv Moscú', s: 'LOK', c1: '#E30613', c2: '#00A94F', str: 72, p: [
       ['Anton Mitryushkin', 'GK', 72, 30], ['Cristian Ramírez', 'RB', 72, 32], ['Lucas Fasson', 'CB', 73, 25],
       ['Gerzino Nyamsi', 'CB', 74, 29], ['Mark Mampassi', 'LB', 72, 23], ['Dmitri Barinov', 'DM', 71, 30],
       ['Danil Prutsev', 'CM', 71, 26], ['Aleksey Batrakov', 'AM', 71, 21], ['Zelimkhan Bakayev', 'RW', 72, 30],
       ['Vladislav Sarveli', 'ST', 73, 29], ['Sergei Pinyayev', 'LW', 72, 22], ['Daniil Veselov', 'GK', 68, 21],
       ['César Montes', 'CB', 71, 29], ['Maksim Nenakhov', 'LB', 67, 28], ['Danila Godyayev', 'CM', 66, 22],
       ['Dmitry Vorobyov', 'RW', 65, 29], ['Nikita Saltykov', 'ST', 67, 22], ['Aleksandr Silyanov', 'CB', 66, 25],
       ['Ilya Lantratov', 'GK', 66, 31], ['Yegor Pogostnov', 'CB', 63, 22], ['Yevgeny Morozov', 'CB', 65, 25],
       ['Artyom Karpukas', 'CM', 65, 24]
     ] },
    { n: 'Orenburg', s: 'ORE', c1: '#0057B8', c2: '#FFE500', str: 58, p: [
       ['Bogdan Ovsyannikov', 'GK', 56, 27], ['Stanislav Poroykov', 'RB', 59, 22], ['Danila Vedernikov', 'CB', 56, 25],
       ['Danila Khotulyov', 'CB', 59, 24], ['Aleksei Tatayev', 'LB', 60, 28], ['Vladislav Kamilov', 'DM', 58, 31],
       ['Dmitri Rybchinsky', 'CM', 56, 28], ['Pavel Gorelov', 'AM', 60, 23], ['Emircan Gürlük', 'RW', 60, 23],
       ['Maksim Savelyev', 'ST', 57, 24], ['Stepan Oganesyan', 'LW', 57, 25], ['Andrey Khodanovich', 'GK', 52, 22],
       ['Jhon Palacios', 'CB', 52, 27], ['Fahd Moufi', 'LB', 55, 30], ['Vladan Bubanja', 'CM', 54, 27],
       ['Jordhy Thompson', 'RW', 53, 22], ['Alexandre Jesus', 'ST', 56, 25], ['Emil Tsenov', 'CB', 55, 24],
       ['Nikolai Sysuyev', 'GK', 52, 27], ['Georgi Zotov', 'CB', 51, 36], ['Artyom Kasimov', 'CB', 51, 23],
       ['Anri Chichinadze', 'DM', 50, 28]
     ] },
    { n: 'Pari Nizhny Novgorod', s: 'PNN', c1: '#0057B8', c2: '#FFFFFF', str: 57, p: [
       ['Vadim Lukyanov', 'GK', 57, 24], ['Viktor Aleksandrov', 'RB', 56, 24], ['Yury Koledin', 'CB', 58, 22],
       ['Aleksandr Ektov', 'CB', 55, 30], ['Yaroslav Krashevsky', 'LB', 55, 22], ['Alex Opoku Sarfo', 'DM', 54, 22],
       ['Mamadou Maiga', 'CM', 58, 31], ['Yegor Smelov', 'AM', 59, 21], ['Vakho Bedoshvili', 'RW', 57, 23],
       ['Juan Manuel Boselli', 'ST', 58, 27], ['Renaldo Cephas', 'LW', 58, 27], ['Nikita Medvedev', 'GK', 51, 32],
       ['Nikita Kakkoyev', 'CB', 51, 27], ['Juan Castillo', 'LB', 57, 24], ['Nikita Yermakov', 'CM', 54, 23],
       ['Vyacheslav Grulyov', 'RW', 52, 27], ['Olakunle Olusegun', 'ST', 53, 24], ['Edgardo Fariña', 'CB', 53, 25],
       ['Yegor Koshkin', 'GK', 48, 20], ['Sven Karič', 'DM', 50, 28], ['Vadim Pigas', 'CB', 52, 25],
       ['Maksim Shnaptsev', 'CB', 51, 22]
     ] },
    { n: 'Rostov', s: 'ROS', c1: '#FFE500', c2: '#0057B8', str: 63, p: [
       ['Rustam Yatimov', 'GK', 64, 28], ['Oumar Sako', 'RB', 64, 30], ['Viktor Melyokhin', 'CB', 62, 23],
       ['Danila Prokhin', 'CB', 64, 25], ['Aleksandr Tarasov', 'LB', 63, 20], ['Aleksei Mironov', 'DM', 64, 26],
       ['Kirill Shchetinin', 'CM', 61, 24], ['Konstantin Kuchayev', 'AM', 61, 28], ['Ronaldo Cezar', 'RW', 63, 26],
       ['Mohammad Mohebi', 'ST', 64, 28], ['Ibraheem Mahfus Ajasa', 'LW', 60, 21], ['Hidajet Hankić', 'GK', 60, 32],
       ['Nikolai Poyarkov', 'CB', 58, 27], ['David Semenchuk', 'LB', 58, 22], ['Khoren Bayramyan', 'CM', 60, 34],
       ['Ivan Komarov', 'RW', 60, 23], ['Yegor Golenkov', 'ST', 60, 27], ['Yevgeni Chernov', 'CB', 60, 34],
       ['Daniil Odoyevsky', 'GK', 56, 23], ['Eyad El Askalany', 'DM', 55, 22], ['Ilya Vakhaniya', 'CB', 57, 25],
       ['German Ignatov', 'CB', 55, 21]
     ] },
    { n: 'Rubin Kazán', s: 'RUB', c1: '#E30613', c2: '#00A94F', str: 69, p: [
       ['Artur Nigmatullin', 'GK', 72, 35], ['Yegor Teslenko', 'RB', 68, 25], ['Denil Maldonado', 'CB', 70, 28],
       ['Konstantin Nizhegorodov', 'CB', 71, 24], ['Igor Vujačić', 'LB', 71, 32], ['Ugochukwu Iwu', 'DM', 69, 27],
       ['Bogdan Jočić', 'CM', 68, 25], ['Daler Kuzyayev', 'AM', 67, 33], ['Aleksandr Lomovitsky', 'RW', 68, 28],
       ['Mirlind Daku', 'ST', 68, 28], ['Nikola Čumić', 'LW', 72, 28], ['Yevgeni Staver', 'GK', 65, 28],
       ['Anderson Arroyo', 'CB', 67, 27], ['Uroš Drezgić', 'LB', 64, 24], ['Marat Apshatsev', 'CM', 64, 25],
       ['Jacques Siwe', 'RW', 64, 25], ['Daniil Kuznetsov', 'ST', 65, 23], ['Aleksei Gritsayenko', 'CB', 64, 31],
       ['Ilya Yezhov', 'GK', 64, 20], ['Ilya Rozhkov', 'DM', 61, 21], ['Dmitri Kabutov', 'CB', 62, 34],
       ['Nikita Lobov', 'CB', 64, 25]
     ] },
    { n: 'Sochi', s: 'SOC', c1: '#0057B8', c2: '#FFFFFF', str: 65, p: [
       ['Maksim Rudakov', 'GK', 67, 30], ['Aleksandr Soldatenkov', 'RB', 65, 30], ['Vyacheslav Litvinov', 'CB', 63, 25],
       ['Nabil Aberdin', 'CB', 63, 24], ['Solomon Agbalaka', 'LB', 66, 23], ['Ignacio Saavedra', 'DM', 67, 27],
       ['Mikhail Ignatov', 'CM', 67, 26], ['Kirill Kravtsov', 'AM', 63, 24], ['Anton Zinkovsky', 'RW', 64, 30],
       ['Zakhar Fyodorov', 'ST', 66, 22], ['Martin Kramarič', 'LW', 66, 29], ['Aleksandr Dyogtev', 'GK', 59, 21],
       ['Artyom Makarchuk', 'CB', 63, 31], ['Yahia Attiyat Allah', 'LB', 71, 31], ['Maksim Mukhin', 'CM', 63, 25],
       ['Pavel Melyoshin', 'RW', 63, 22], ['Artyom Korneyev', 'ST', 60, 20], ['Kirill Zaika', 'CB', 59, 34],
       ['Ivan Lomayev', 'GK', 60, 27], ['Yury Dyupin', 'GK', 59, 38], ['Ruslan Magal', 'CB', 58, 35],
       ['Marcelo Alves', 'DM', 57, 28]
     ] },
    { n: 'Spartak Moscú', s: 'SPA', c1: '#E30613', c2: '#FFFFFF', str: 76, p: [
       ['Ilya Pomazun', 'GK', 76, 30], ['Christopher Wooh', 'RB', 77, 25], ['Alexander Djiku', 'CB', 77, 32],
       ['Srđan Babić', 'CB', 75, 30], ['Victor Parada', 'LB', 67, 24], ['Esequiel Barco', 'DM', 75, 27],
       ['Maksim Laykin', 'CM', 75, 23], ['Nail Umyarov', 'AM', 78, 26], ['Pablo Solari', 'RW', 74, 25],
       ['Manfred Ugalde', 'ST', 77, 24], ['Marquinhos', 'LW', 87, 27], ['Aleksandr Dovbnya', 'GK', 75, 39],
       ['Ruslan Litvinov', 'CB', 71, 25], ['Daniil Khlusevich', 'LB', 71, 25], ['Daniil Zorin', 'CM', 74, 22],
       ['Levi García', 'RW', 72, 29], ['Nikita Massalyga', 'ST', 74, 19], ['Daniil Denisov', 'CB', 71, 24],
       ['Aleksandr Maksimenko', 'GK', 70, 28], ['Christopher Martins', 'CM', 69, 29], ['Roman Zobnin', 'CM', 68, 32],
       ['Gedson Fernandes', 'CM', 71, 27]
     ] },
    { n: 'Zenit', s: 'ZEN', c1: '#6CACE4', c2: '#FFFFFF', str: 76, p: [
       ['Evgeniy Latyshonok', 'GK', 79, 28], ['Douglas Santos', 'RB', 77, 32], ['Yuri Gorshkov', 'CB', 75, 27],
       ['Vanja Drkušić', 'CB', 77, 27], ['Vyacheslav Karavayev', 'LB', 78, 31], ['Wilmar Barrios', 'DM', 79, 33],
       ['Wendel', 'CM', 75, 29], ['Jhon Jhon', 'AM', 77, 24], ['Aleksandr Sobolev', 'RW', 79, 29],
       ['Felipe Augusto', 'ST', 65, 22], ['Maksim Glushenkov', 'LW', 75, 27], ['Denis Adamov', 'GK', 74, 28],
       ['Kevin Andrade', 'CB', 75, 27], ['Nuraly Alip', 'LB', 75, 27], ['Andrei Mostovoy', 'CM', 73, 29],
       ['Luiz Henrique', 'RW', 75, 25], ['Pedro', 'ST', 75, 20], ['Nino', 'CB', 73, 29],
       ['Román Vega', 'CB', 71, 22], ['Ígor Divéyev', 'CB', 71, 27], ['Yaroslav Mikhaylov', 'CM', 70, 23],
       ['Aleksandr Yerojin', 'CM', 73, 37]
     ] }
  ]
};
