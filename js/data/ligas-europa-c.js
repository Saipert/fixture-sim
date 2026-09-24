/* =========================================================================
   LIGAS EUROPEAS (III) — Chequia, Rumanía, Israel y Chipre.
   Los clubes salen de las carpetas de logos; las plantillas son reales.
   ========================================================================= */
window.LEAGUES = window.LEAGUES || {};

window.LEAGUES.chequia = {
  id: "chequia", name: "Chance Liga", country: "Chequia", ucl: 3, rel: 2,
  pool: "pl", squadSize: 17, teams: [
    { n: "Slavia Praga", s: "SLA", c1: "#D7141A", c2: "#FFFFFF", str: 72, p: [
       ['Jindřich Staněk', 'GK', 73, 29], ['Daiki Hashioka', 'RB', 67, 26], ['Tomáš Holeš', 'CB', 73, 32],
       ['Igoh Ogbu', 'CB', 72, 25], ['Dominik Javorček', 'LB', 63, 22], ['Oscar Dorley', 'DM', 75, 26],
       ['Christos Zafeiris', 'CM', 72, 22], ['Lukáš Provod', 'AM', 75, 28], ['David Douděra', 'RW', 71, 27],
       ['Tomáš Chorý', 'ST', 72, 30], ['Vasil Kušej', 'LW', 71, 25], ['Jakub Markovič', 'GK', 69, 23],
       ['Jan Bořil', 'CB', 71, 34], ['David Zima', 'CB', 71, 24], ['Petr Ševčík', 'CM', 71, 31],
       ['Ivan Schranz', 'LW', 70, 31], ['Mojmír Chytil', 'ST', 71, 26], ['Michal Sadílek', 'DM', 73, 26]
     ] },
    { n: "Sparta Praga", s: "SPA", c1: "#8B1F2F", c2: "#FFFFFF", str: 69, p: [
       ['Peter Vindahl', 'GK', 72, 27], ['Pavel Kadeřábek', 'RB', 71, 33], ['Filip Panák', 'CB', 71, 29],
       ['Asger Sørensen', 'CB', 71, 29], ['Jaroslav Zelený', 'CB', 69, 32], ['Sivert Mannsverk', 'DM', 65, 23],
       ['Kaan Kairinen', 'CM', 72, 26], ['Santiago Eneme', 'AM', 57, 24], ['Veljko Birmančević', 'RW', 73, 27],
       ['Jan Kuchta', 'AM', 70, 28], ['Lukáš Haraslín', 'LW', 75, 29], ['Vojtěch Vorel', 'GK', 66, 29],
       ['Elias Cobbaut', 'CB', 70, 27], ['Emmanuel Uchenna', 'CB', 67, 21], ['Lukáš Sadílek', 'CM', 70, 29],
       ['Ángelo Preciado', 'RW', 72, 27], ['Albion Rrahmani', 'ST', 70, 24], ['Matěj Ryneš', 'LW', 70, 24]
     ] },
    { n: "Viktoria Plzeň", s: "PLZ", c1: "#0057B8", c2: "#E30613", str: 68, p: [
       ['Martin Jedlička', 'GK', 71, 27], ['Milan Havel', 'RB', 67, 30], ['Sampson Dweh', 'CB', 71, 23],
       ['Václav Jemelka', 'CB', 70, 30], ['Merchas Doski', 'LB', 64, 25], ['Lukáš Červ', 'DM', 70, 24],
       ['Matěj Valenta', 'CM', 64, 25], ['Tomáš Ladra', 'AM', 68, 28], ['Amar Memić', 'RW', 68, 24],
       ['Rafiu Durosinmi', 'ST', 71, 22], ['Cheick Souaré', 'LW', 67, 22], ['Marián Tvrdoň', 'GK', 63, 30],
       ['Svetozar Marković', 'CB', 69, 25], ['Karel Spáčil', 'CB', 67, 22], ['Adrian Zeljković', 'DM', 61, 22],
       ['Jan Kopic', 'RW', 68, 35], ['Matěj Vydra', 'ST', 70, 33], ['Prince Adu', 'AM', 66, 21]
     ] },
    { n: "Baník Ostrava", s: "BAN", c1: "#0057B8", c2: "#FFFFFF", str: 62, p: [
       ['Viktor Budinský', 'GK', 61, 33], ['Karel Pojezný', 'RB', 63, 25], ['Patrick Kpozo', 'CB', 60, 29],
       ['Michal Frydrych', 'CB', 65, 36], ['David Lischka', 'LB', 64, 29], ['Marek Havran', 'DM', 62, 20],
       ['Christ Tiéhi', 'CM', 64, 28], ['Jiří Boula', 'AM', 61, 27], ['David Buchta', 'RW', 62, 27],
       ['David Látal', 'ST', 61, 23], ['Tomáš Zlatohlávek', 'LW', 64, 26], ['Martin Hrubý', 'GK', 57, 22],
       ['Pablo Ortiz', 'DM', 55, 26], ['Alexander Munksgaard', 'LB', 58, 29], ['Christian Frýdek', 'CM', 61, 27],
       ['Filip Kubala', 'RW', 59, 27], ['Jakub Pira', 'ST', 56, 19], ['Matěj Chaluš', 'CB', 58, 28],
       ['Dominik Holec', 'GK', 55, 32], ['Mikuláš Kubný', 'GK', 56, 22], ['Jiří Míček', 'CB', 55, 19],
       ['Eldar Šehić', 'CB', 56, 26]
     ] },
    { n: "Jablonec", s: "JAB", c1: "#00A94F", c2: "#FFE500", str: 63, p: [
       ['Jan Hanuš', 'GK', 62, 38], ['Nemanja Tekijaški', 'RB', 65, 29], ['David Štěpánek', 'CB', 64, 29],
       ['Daniel Souček', 'CB', 66, 28], ['Martin Cedidla', 'LB', 62, 25], ['Vakhtang Chanturishvili', 'DM', 61, 33],
       ['Filip Zorvan', 'CM', 64, 30], ['Lukáš Penxa', 'AM', 62, 22], ['Antonín Růsek', 'RW', 65, 27],
       ['Jan Chramosta', 'ST', 64, 36], ['David Puškáč', 'LW', 64, 33], ['Albert Kotlín', 'GK', 58, 21],
       ['Kryštof Karban', 'CB', 62, 22], ['Filip Novák', 'LB', 58, 36], ['Jan Suchan', 'CM', 58, 30],
       ['Matej Malenšek', 'RW', 58, 21], ['Lamin Jawo', 'ST', 61, 31], ['Renato Pantalon', 'CB', 61, 29],
       ['Klemen Mihelak', 'GK', 56, 25], ['Nassim Innocenti', 'CB', 58, 24], ['Richard Sedláček', 'CM', 57, 27],
       ['Samuel Lavrinčík', 'CM', 56, 25]
     ] },
    { n: "Mladá Boleslav", s: "MLA", c1: "#0057B8", c2: "#FFFFFF", str: 62, p: [
       ['David Kořán', 'GK', 63, 23], ['Martin Králik', 'RB', 61, 31], ['Denis Donát', 'CB', 64, 25],
       ['Jetmir Haliti', 'CB', 62, 30], ['Matěj Zachoval', 'LB', 61, 21], ['Roman Macek', 'DM', 65, 29],
       ['Nicolas Penner', 'CM', 63, 25], ['David Kozel', 'AM', 60, 25], ['Vojtěch Hora', 'RW', 61, 22],
       ['Matyáš Vojta', 'ST', 62, 22], ['Filip Lehký', 'LW', 63, 24], ['Aleš Mandous', 'GK', 60, 34],
       ['Dominik Kostka', 'CB', 59, 30], ['Filip Matoušek', 'LB', 58, 25], ['Martin Šubert', 'CM', 58, 24],
       ['Jakub Fulnek', 'RW', 58, 32], ['Solomon John', 'ST', 59, 25], ['Filip Prebsl', 'CB', 59, 22],
       ['Jiří Floder', 'GK', 56, 29], ['Dominik Mareš', 'CM', 56, 23], ['Daniel Langhamer', 'CM', 56, 23],
       ['Jan Zíka', 'CM', 55, 20]
     ] },
    { n: "Sigma Olomouc", s: "OLO", c1: "#0057B8", c2: "#FFFFFF", str: 63, p: [
       ['Tadeáš Stoppen', 'GK', 62, 23], ['Abdoulaye Sylla', 'RB', 62, 26], ['Adam Dohnálek', 'CB', 63, 22],
       ['Tomáš Huk', 'CB', 62, 32], ['Jiří Sláma', 'LB', 62, 27], ['Radim Breite', 'DM', 61, 37],
       ['Jiří Spáčil', 'CM', 65, 27], ['Tihomir Kostadinov', 'AM', 62, 30], ['Jáchym Šíp', 'RW', 64, 23],
       ['Jan Kliment', 'ST', 66, 33], ['Yunusa Muritala', 'LW', 62, 26], ['Jakub Trefil', 'GK', 58, 25],
       ['Filip Slavíček', 'CB', 61, 24], ['Lukáš Vraštil', 'LB', 61, 32], ['David Tkáč', 'CM', 58, 24],
       ['Daniel Vašulín', 'RW', 61, 28], ['Muhamed Tijani', 'ST', 57, 26], ['Jan Král', 'CB', 62, 27],
       ['Jan Koutný', 'GK', 57, 22], ['Matúš Hruška', 'GK', 56, 32], ['Matěj Hadaš', 'DM', 57, 23],
       ['Andres Dumitrescu', 'CB', 57, 25]
     ] },
    { n: "Bohemians 1905", s: "BOH", c1: "#00A94F", c2: "#FFFFFF", str: 60, p: [
       ['Michal Reichl', 'GK', 61, 34], ['Matěj Kadlec', 'RB', 59, 24], ['Matěj Hybš', 'CB', 60, 33],
       ['Denis Vala', 'CB', 58, 26], ['Jan Vondra', 'LB', 59, 31], ['Benson Sakala', 'DM', 60, 30],
       ['Robert Hrubý', 'CM', 58, 32], ['Jan Matoušek', 'AM', 61, 28], ['Abdulla Yusuf Helal', 'RW', 59, 33],
       ['Eric Ramírez', 'ST', 60, 28], ['Václav Drchal', 'LW', 59, 27], ['Tomáš Frühwald', 'GK', 54, 24],
       ['Peter Kareem', 'CB', 53, 23], ['Adam Kadlec', 'LB', 54, 23], ['Vladimír Zeman', 'CM', 57, 26],
       ['Milan Ristovski', 'RW', 57, 28], ['Ondřej Kukučka', 'ST', 57, 22], ['Lukáš Hůlka', 'CB', 58, 31],
       ['Jakub Šiman', 'GK', 53, 31], ['Vlasiy Sinyavskiy', 'CB', 51, 30], ['Jan Kovařík', 'CM', 54, 38],
       ['Dominik Pleštil', 'CM', 53, 27]
     ] },
    { n: "Slovan Liberec", s: "LIB", c1: "#0057B8", c2: "#FFFFFF", str: 64, p: [
       ['Ivan Krajčírik', 'GK', 64, 26], ['Dominik Plechatý', 'RB', 66, 27], ['Jan Mikula', 'CB', 66, 34],
       ['Martin Rýzek', 'CB', 62, 21], ['Petr Hodouš', 'LB', 63, 23], ['Marek Icha', 'DM', 64, 24],
       ['Qëndrim Zyba', 'CM', 63, 25], ['Vojtěch Stránský', 'AM', 62, 23], ['Soliu Afolabi', 'RW', 65, 21],
       ['Lukáš Mašek', 'ST', 62, 22], ['Filip Špatenka', 'LW', 64, 22], ['Hugo Jan Bačkovský', 'GK', 61, 27],
       ["Ange N'Guessan", 'CB', 59, 23], ['Josef Koželuh', 'LB', 61, 24], ['Michal Hlavatý', 'CM', 59, 28],
       ['Petr Juliš', 'RW', 59, 23], ['Lukáš Letenay', 'ST', 60, 25], ['Jan Knapík', 'CB', 60, 26],
       ['Tomáš Koubek', 'GK', 56, 34], ['Jindřich Musil', 'GK', 58, 22], ['Aziz Kayondo', 'DM', 55, 24],
       ['Šimon Gabriel', 'CB', 58, 25]
     ] },
    { n: "Hradec Králové", s: "HRA", c1: "#000000", c2: "#FFE500", str: 62, p: [
       ['Patrik Vízek', 'GK', 60, 23], ['David Ludvíček', 'RB', 62, 25], ['Tomáš Petrášek', 'CB', 62, 34],
       ['Filip Čihák', 'CB', 60, 27], ['Jakub Uhrinčať', 'LB', 63, 25], ['Václav Pilař', 'DM', 64, 38],
       ['Alexandr Sojka', 'CM', 61, 23], ['Samuel Dancák', 'AM', 62, 28], ['Lukáš Čmelík', 'RW', 64, 30],
       ['Mick van Buren', 'ST', 61, 34], ['Jakub Hodek', 'LW', 64, 25], ['Adam Zadražil', 'GK', 59, 26],
       ['František Čech', 'CB', 55, 28], ['Daniel Horák', 'LB', 58, 26], ['Vladimír Darida', 'CM', 58, 36],
       ['Ondřej Mihálik', 'RW', 57, 29], ['Adam Griger', 'ST', 58, 22], ['Juraj Chvátal', 'CB', 59, 30],
       ['Matyáš Vágner', 'GK', 57, 23], ['Jakub Elbel', 'CB', 57, 26], ['Lucas Kubr', 'CB', 55, 22],
       ['David Heidenreich', 'DM', 54, 26]
     ] },
    { n: "Teplice", s: "TEP", c1: "#FFE500", c2: "#0057B8", str: 62, p: [
       ['Luděk Němeček', 'GK', 63, 27], ['Josef Švanda', 'RB', 63, 25], ['Jakub Hora', 'CB', 62, 25],
       ['Jakub Jakubko', 'CB', 63, 22], ['Jaroslav Harušťák', 'LB', 61, 24], ['Michal Bílek', 'DM', 61, 29],
       ['Marek Beránek', 'CM', 62, 23], ['Jan Fortelný', 'AM', 64, 27], ['Matěj Pulkrab', 'RW', 61, 29],
       ['Matyáš Kozák', 'ST', 63, 25], ['Matěj Náprstek', 'LW', 63, 23], ['Matouš Trmal', 'GK', 57, 28],
       ['Yehor Tsykalo', 'CB', 59, 25], ['Denis Halinský', 'LB', 59, 23], ['Ladislav Krejčí', 'CM', 73, 34],
       ['Hamza Ljukovac', 'RW', 60, 21], ['Pavel Svatek', 'ST', 56, 22], ['Daniel Danihel', 'CB', 57, 21],
       ['Kryštof Lichtenberg', 'GK', 56, 24], ['Richard Ludha', 'GK', 55, 26], ['Dalibor Večerka', 'CB', 56, 23],
       ['Nojus Audinis', 'DM', 53, 20]
     ] },
    { n: "Pardubice", s: "PAR", c1: "#E30613", c2: "#FFFFFF", str: 61, p: [
       ['Jáchym Šerák', 'GK', 61, 25], ['Louis Lurvink', 'RB', 61, 24], ['David Šimek', 'CB', 60, 28],
       ['Jan Trédl', 'CB', 63, 22], ['Dominik Mašek', 'LB', 62, 24], ['Jan Řezníček', 'DM', 64, 34],
       ['Kamil Vacek', 'CM', 62, 39], ['Divine Teah', 'AM', 59, 20], ['Vojtěch Patrák', 'RW', 61, 26],
       ['Daniel Smékal', 'ST', 61, 25], ['Filip Vecheta', 'LW', 61, 23], ['Jan Stejskal', 'GK', 59, 29],
       ['Michal Surzyn', 'CB', 56, 29], ['Ryan Mahuta', 'LB', 59, 24], ['Denis Darmovzal', 'CM', 57, 26],
       ['Muhammed Suso', 'RW', 57, 21], ['Ladislav Krobot', 'ST', 60, 25], ['Mikuláš Konečný', 'CB', 60, 20],
       ['Matěj Šimůnek', 'GK', 57, 22], ['Luka Kharatishvili', 'GK', 57, 23], ['Jason Noslin', 'CB', 54, 26],
       ['Filip Šancl', 'CM', 58, 21]
     ] },
    { n: "Slovácko", s: "SLO", c1: "#0057B8", c2: "#FFFFFF", str: 61, p: [
       ['Milan Heča', 'GK', 63, 35], ['Gigli Ndefe', 'RB', 61, 32], ['Milan Rundić', 'CB', 59, 34],
       ['Andrej Stojchevski', 'CB', 61, 23], ['Filip Vaško', 'LB', 60, 27], ['Martin Šviderský', 'DM', 60, 24],
       ['Daniel Tetour', 'CM', 62, 32], ['Michal Trávník', 'AM', 62, 32], ['Alan Marinelli', 'RW', 61, 27],
       ['Daniel Barát', 'ST', 61, 20], ['Michael Krmenčík', 'LW', 60, 33], ['Tomáš Fryšták', 'GK', 59, 39],
       ['Martin Koscelník', 'CB', 57, 31], ['Jonathan Mulder', 'LB', 56, 24], ['Milan Petržela', 'CM', 58, 43],
       ['Marko Kvasina', 'RW', 55, 30], ['Žan Medved', 'ST', 58, 27], ['Petr Reinberk', 'CB', 59, 37],
       ['Jiří Borek', 'GK', 54, 24], ['Patrik Blahút', 'CM', 52, 29], ['Marek Havlík', 'CM', 52, 31],
       ['Pavel Juroška', 'CM', 52, 25]
     ] },
    { n: "Zlín", s: "ZLI", c1: "#FFE500", c2: "#0057B8", str: 61, p: [
       ['Samuel Belaník', 'GK', 59, 23], ['André Lopes', 'RB', 61, 25], ['Michal Fukala', 'CB', 62, 26],
       ['Miloš Kopečný', 'CB', 59, 33], ['Jakub Černín', 'LB', 62, 27], ['Tom Ulbrich', 'DM', 62, 28],
       ['Joss Didiba', 'CM', 60, 29], ['David Machalík', 'AM', 63, 30], ['Zviad Natchkebia', 'RW', 61, 27],
       ['Stanley Kanu', 'ST', 62, 27], ['Matěj Koubek', 'LW', 62, 26], ['Stanislav Dostál', 'GK', 58, 35],
       ['Jakub Kolář', 'CB', 58, 26], ['Lukáš Bartošák', 'LB', 57, 36], ['Stanislav Petruța', 'CM', 56, 21],
       ['Lukáš Bránecký', 'RW', 58, 20], ['Tomáš Poznar', 'ST', 59, 38], ['Antonín Křapka', 'CB', 56, 32],
       ['Milan Knobloch', 'GK', 56, 34], ['Jan Kalabiška', 'CB', 56, 40], ['Vincent Trummer', 'CB', 57, 26],
       ['Cletus Nombil', 'CM', 54, 26]
     ] },
    { n: "Dukla Praga", s: "DUK", c1: "#FFE500", c2: "#8B1F2F", str: 63, p: [
       ['Rihards Matrevics', 'GK', 63, 27], ['Samuel Isife', 'RB', 63, 22], ['Zlatan Šehović', 'CB', 64, 26],
       ['Eric Hunal', 'CB', 61, 21], ['Roman Holiš', 'LB', 61, 28], ['Diego Velasquez', 'DM', 63, 20],
       ['Jan Peterka', 'CM', 65, 36], ['Pavel Gaszczyk', 'AM', 65, 21], ['Chinonso Emeka', 'RW', 62, 25],
       ['Štěpán Šebrle', 'ST', 63, 24], ['Tomáš Jedlička', 'LW', 63, 23], ['Adam Jágrik', 'GK', 61, 26],
       ['Dominik Hašek', 'CB', 59, 28], ['Mouhamed Tidjane Traore', 'LB', 59, 23], ['Jakub Jeřábek', 'CM', 62, 25],
       ['Jacques Fokam', 'RW', 59, 25], ['Namory Cissé', 'ST', 61, 23], ['Jaroslav Svozil', 'CB', 62, 33],
       ['Filip Vácha', 'GK', 56, 21], ['Marios Pourzitidis', 'CB', 56, 27], ['Daniel Kozma', 'CB', 57, 31],
       ['Rajmund Mikuš', 'CM', 59, 31]
     ] },
    { n: "Zbrojovka Brno", s: "ZBR", c1: "#E30613", c2: "#0057B8", str: 61, p: [
       ['Vojtěch Marek', 'GK', 61, 26], ['Jakub Černín', 'RB', 64, 27], ['Jan Hlavica', 'CB', 59, 32],
       ['Pavel Dreksa', 'CB', 60, 37], ['Lukáš Endl', 'LB', 64, 23], ['David Jambor', 'DM', 60, 23],
       ['Rudolf Reiter', 'CM', 59, 32], ['Šimon Šumbera', 'AM', 59, 35], ['Antonín Růsek', 'RW', 63, 27],
       ['Jakub Přichystal', 'ST', 60, 31], ['Jan Hladík', 'LW', 64, 33], ['Martin Šustr', 'GK', 57, 36],
       ['Zoran Gajić', 'CB', 59, 36], ['Jan Moravec', 'LB', 56, 39], ['Adam Fousek', 'CM', 55, 32],
       ['Jan Sedlák', 'RW', 59, 32], ['Jan Koudelka', 'ST', 59, 34], ['Jakub Šural', 'CB', 59, 30],
       ['Ondřej Pachlopník', 'CM', 57, 26], ['Peter Štepanovský', 'CM', 56, 38], ['Lukáš Kryštůfek', 'CB', 56, 34],
       ['Damián Bariš', 'CM', 56, 32]
     ] }
  ]
};

window.LEAGUES.rumania = {
  id: "rumania", name: "SuperLiga", country: "Rumanía", ucl: 3, rel: 2,
  pool: "ro", squadSize: 17, teams: [
    { n: "FCSB", s: "FCS", c1: "#E30613", c2: "#0057B8", str: 65, p: [
       ['Ș. Târnovanu', 'GK', 67, 25], ['Valentin Crețu', 'RB', 63, 36], ['Siyabonga Ngezana', 'CB', 68, 27],
       ['Joyskim Dawa', 'CB', 65, 29], ['RadunovićРисто Radunović', 'LB', 65, 33], ['Adrian Șut', 'DM', 67, 26],
       ['Dumitru Olaru', 'CM', 68, 27], ['Florin Tănase', 'AM', 65, 30], ['Mamadou Thiam', 'ST', 63, 30],
       ['Daniel Bîrligea', 'ST', 68, 25], ['Dennis-Dorian Politic', 'LW', 64, 25], ['Lukáš Zima', 'GK', 64, 31],
       ['Mihai Popescu', 'CB', 65, 32], ['David Kiki', 'LB', 58, 31], ['Juri Cisotti', 'CM', 66, 32],
       ['Octavian Popescu', 'LW', 63, 22], ['Denis Alibec', 'ST', 64, 34], ['Mihai Lixandru', 'DM', 63, 24]
     ] },
    { n: "CFR Cluj", s: "CFR", c1: "#8B1F2F", c2: "#FFFFFF", str: 63, p: [
       ['Alessandro Micai', 'GK', 63, 31], ['Marcus Coco', 'RB', 63, 29], ['Kurt Zouma', 'CB', 68, 30],
       ['Matei Ilie', 'CB', 62, 22], ['Simão Rocha', 'LB', 62, 24], ['Karlo Muhar', 'DM', 61, 29],
       ['Damjan Đoković', 'CM', 61, 35], ['Alexandru Păun', 'AM', 60, 30], ['Andrei Cordea', 'RW', 62, 26],
       ['Louis Munteanu', 'ST', 67, 23], ['Meriton Korenica', 'LW', 63, 28], ['Otto Hindrich', 'GK', 62, 22],
       ['Sheriff Sinyan', 'CB', 60, 28], ['Camora', 'LB', 58, 38], ['Alin Fică', 'CM', 61, 24],
       ['Ciprian Deac', 'AM', 59, 39], ['Islam Slimani', 'ST', 61, 37], ['Mohammed Kamara', 'LW', 62, 27]
     ] },
    { n: "Universitatea Craiova", s: "UCV", c1: "#0057B8", c2: "#FFFFFF", str: 58, p: [
       ['Laurenţiu Popescu', 'GK', 58, 28], ['Carlos Mora', 'RB', 58, 24], ['Oleksandr Romanchuk', 'CB', 59, 25],
       ['Nikola Stevanović', 'CB', 59, 26], ['Nicușor Bancu', 'LB', 61, 32], ['Vladimir Screciu', 'DM', 58, 25],
       ['Teles', 'CM', 57, 28], ['Alexandru Cicâldău', 'AM', 58, 27], ['Ș. Baiaram', 'RW', 60, 22],
       ['Al Al Hamlawi', 'ST', 59, 24], ['Luis Paradela', 'LW', 55, 28], ['Pavlo Isenko', 'GK', 57, 21],
       ['Adrian Rus', 'CB', 58, 29], ['Florin Ștefan', 'LB', 56, 29], ['David Matei', 'CM', 52, 18],
       ['Mihnea Rădulescu', 'RW', 57, 19], ['Steven Nsimba', 'ST', 55, 29], ['Anzor Mekvabishvili', 'DM', 58, 24]
     ] },
    { n: "Rapid Bucarest", s: "RAP", c1: "#8B1F2F", c2: "#FFFFFF", str: 63, p: [
       ['Mihai Aioani', 'GK', 62, 25], ['Cristian Manea', 'RB', 61, 27], ['Denis Ciobotariu', 'CB', 65, 27],
       ['Leo Bolgado', 'CB', 64, 26], ['Andrei Borza', 'LB', 65, 19], ['Keita Keïta', 'DM', 61, 24],
       ['Tobias Christensen', 'CM', 64, 25], ['Luka Gojković', 'AM', 60, 25], ['A. Dobre', 'RW', 67, 26],
       ['Antoine Baroan', 'ST', 61, 25], ['Claudiu Petrila', 'LW', 66, 24], ['Franz Stolz', 'GK', 61, 24],
       ['Alexandru Pașcanu', 'CB', 63, 26], ['Robert Badescu', 'CM', 52, 20], ['Constantin Grameni', 'CM', 59, 22],
       ['Rareș Pop', 'RW', 60, 20], ['BurmazБорисав Burmaz', 'ST', 60, 24], ['Lars Kramer', 'CB', 62, 25]
     ] },
    { n: "Dinamo Bucarest", s: "DIN", c1: "#E30613", c2: "#FFFFFF", str: 62, p: [
       ['Ailiesei Roșca', 'GK', 62, 21], ['Maxime Sivis', 'RB', 62, 27], ['Kofi Boateng', 'CB', 65, 28],
       ['Andrei Mărginean', 'CB', 62, 23], ['Raul Opruț', 'LB', 64, 27], ['Eddy Gnahoré', 'DM', 65, 31],
       ['Casian Soare', 'CM', 49, 18], ['Cătălin Cîrjan', 'AM', 65, 22], ['Daniel Armstrong', 'RW', 65, 27],
       ['Stipe Perica', 'ST', 63, 29], ['Alexandru Musi', 'LW', 61, 20], ['Devis Epassy', 'GK', 60, 32],
       ['Nikita Stoinov', 'CB', 58, 19], ['Jordan Ikoko', 'RB', 59, 31], ['Cristian Mihai', 'DM', 63, 20],
       ['Georgi Milanov', 'RW', 61, 33], ['Alexandru Pop', 'ST', 61, 25], ['Charalambos Kyriakou', 'DM', 62, 30]
     ] },
    { n: "Universitatea Cluj", s: "UCL", c1: "#000000", c2: "#FFFFFF", str: 59, p: [
       ['Edvinas Gertmonas', 'GK', 60, 29], ['Dino Mikanović', 'RB', 58, 31], ['Iulian Cristea', 'CB', 60, 30],
       ['Jonathan Cissé', 'CB', 60, 28], ['Alexandru Chipciu', 'LB', 61, 36], ['Andrei Artean', 'DM', 60, 31],
       ['Alessandro Murgia', 'CM', 62, 28], ['Dan Nistor', 'AM', 64, 37], ['Andrei Gheorghiță', 'RW', 58, 22],
       ['Virgiliu Postolachi', 'ST', 58, 25], ['Alexandru Bota', 'LW', 47, 17], ['Ș. Lefter', 'GK', 56, 20],
       ['Alin Toșca', 'CB', 58, 33], ['Miguel Silva', 'LB', 58, 29], ['Răzvan Oaidă', 'CM', 55, 27],
       ['Omar El Sawy', 'RW', 58, 21], ['Jovo Lukić', 'ST', 56, 26], ['Ovidiu Bic', 'DM', 60, 31]
     ] },
    { n: "Farul Constanța", s: "FAR", c1: "#0057B8", c2: "#FFFFFF", str: 58, p: [
       ['Alexandru Buzbuchi', 'GK', 60, 31], ['David Maftei', 'RB', 58, 20], ['Gustavo Marins', 'CB', 59, 23],
       ['Ionuț Larie', 'CB', 56, 38], ['Cristian Ganea', 'LB', 60, 33], ['André Seruca', 'DM', 54, 24],
       ['Ionuț Vînă', 'CM', 60, 30], ['Eduard Radaslavescu', 'CM', 58, 20], ['Narek Grigoryan', 'RW', 60, 25],
       ['Jovan Marković', 'ST', 55, 24], ['Răzvan Tănasă', 'LW', 58, 22], ['Răzvan Ducan', 'GK', 52, 24],
       ['Bogdan Țîru', 'CB', 56, 31], ['Dan Sîrbu', 'RB', 57, 22], ['Victor Dican', 'CM', 59, 24],
       ['Alexandru Ișfan', 'RW', 56, 25], ['Gabriel Iancu', 'ST', 54, 31], ['Ramalho', 'CM', 56, 26]
     ] },
    { n: "Oțelul Galați", s: "OTE", c1: "#E30613", c2: "#FFFFFF", str: 59, p: [
       ['Cosmin Dur-Bozoancă', 'GK', 59, 27], ['Milen Zhelev', 'RB', 57, 31], ['Né Lopes', 'CB', 59, 25],
       ['Paul Iacob', 'CB', 58, 29], ['Conrado', 'LB', 57, 28], ['Diego Živulić', 'DM', 61, 33],
       ['João Lameira', 'CM', 61, 26], ['Pedro Nuno', 'AM', 56, 30], ['Andrezinho', 'RW', 61, 28],
       ['Paulinho', 'ST', 57, 25], ['Denis Bordun', 'RW', 47, 19], ['Iustin Popescu', 'GK', 59, 31],
       ['Vadik Murria', 'CB', 56, 24], ['Kazu', 'LB', 57, 25], ['João Paulo', 'CM', 57, 27],
       ['Ș. Bană', 'RW', 56, 20], ['Patrick', 'ST', 56, 31], ['Andrei Ciobanu', 'CM', 55, 27]
     ] },
    { n: "Petrolul Ploiești", s: "PET", c1: "#FFE500", c2: "#0057B8", str: 57, p: [
       ['Raul Balbarau', 'GK', 56, 24], ['Ricardinho', 'RB', 58, 31], ['Paul Papp', 'CB', 58, 35],
       ['Guilherme Soares', 'CB', 57, 24], ['Valentin Țicu', 'LB', 57, 24], ['Alexandru Mateiu', 'DM', 56, 35],
       ['Tommi Jyry', 'CM', 59, 25], ['Rafinha', 'AM', 54, 27], ['Sergiu Hanca', 'RW', 57, 33],
       ['Adi Chică-Roșă', 'ST', 56, 26], ['Gheorghe Grozav', 'LW', 60, 34], ['Stefan Krell', 'GK', 53, 33],
       ['Franjo Prce', 'CB', 55, 29], ['Lucian Dumitriu', 'LB', 55, 32], ['Danel Dongmo', 'CM', 49, 24],
       ['Oscar Correia', 'RW', 54, 27], ['Konstantinos Doumtsios', 'AM', 52, 27], ['Valentin Gheorghe', 'LW', 55, 28]
     ] },
    { n: "Sepsi OSK", s: "SEP", c1: "#00A94F", c2: "#FFFFFF", str: 56, p: [
       ['Mátyás Bartha', 'GK', 59, 19], ['Gustavo Cascardo', 'RB', 58, 29], ['Fábio Vianna', 'CB', 59, 28],
       ['Setigui Karamoko', 'DM', 49, 27], ['Bogdan Vătăjelu', 'LB', 56, 33], ['Nicolae Păun', 'DM', 58, 27],
       ['Robert Silaghi', 'CM', 56, 24], ['Cosmin Matei', 'AM', 58, 35], ['Boris Cmiljanić', 'RW', 55, 30],
       ['Dimitri Oberlin', 'ST', 56, 29], ['Moses Mawa', 'LW', 55, 30], ['Szilárd Gyenge', 'GK', 52, 25],
       ['Alin Dobrosavlevici', 'CB', 53, 32], ['Bogdan Oteliță', 'LB', 54, 24], ['Raul Cantauz', 'CM', 55, 18],
       ['Nacho Heras', 'RW', 54, 29], ['Vlad Truță', 'ST', 55, 18], ['David Brădeanu', 'CB', 55, 17],
       ['David Lazar', 'GK', 55, 35], ['Petru Păcurar', 'CB', 51, 18], ['Daniel Vîrtej', 'CB', 51, 29],
       ['Lindsay Rose', 'CB', 51, 34]
     ] },
    { n: "FC Botoșani", s: "BOT", c1: "#E30613", c2: "#0057B8", str: 55, p: [
       ['Giannis Anestis', 'GK', 58, 34], ['Adams Friday', 'RB', 57, 22], ['Andrei Miron', 'CB', 55, 31],
       ['Charles Petro', 'CB', 53, 24], ['Michael Pavlović', 'LB', 56, 24], ['Aldaír Ferreira', 'DM', 57, 27],
       ['Gabriel David', 'CM', 50, 22], ['Hervin Ongenda', 'AM', 57, 30], ['Alexandru Cîmpanu', 'RW', 53, 24],
       ['Enzo López', 'ST', 54, 27], ['Sebastian Mailat', 'LW', 59, 27], ['Luka Kukić', 'GK', 53, 29],
       ['Riad Šuta', 'CB', 53, 23], ['Alexandru Țigănașu', 'LB', 50, 35], ['Mihai Bordeianu', 'DM', 56, 33],
       ['Antonio Dumitru', 'AM', 47, 20], ['Andrei Dumiter', 'ST', 51, 26], ['Ș. Bodișteanu', 'LW', 56, 22]
     ] },
    { n: "UTA Arad", s: "UTA", c1: "#E30613", c2: "#FFFFFF", str: 55, p: [
       ['Dejan Iliev', 'GK', 56, 30], ['Mark Țuțu', 'RB', 51, 21], ['Dmytro Pospelov', 'CB', 59, 33],
       ['Florent Poulolo', 'CB', 57, 28], ['Din Alomerović', 'LB', 55, 28], ['Ovidiu Popescu', 'DM', 56, 31],
       ['Benjamin Van Durmen', 'CM', 54, 28], ['Alin Roman', 'AM', 58, 31], ['Marian Danciu', 'RW', 50, 23],
       ['Valentin Costache', 'ST', 57, 26], ['Marinos Tzionis', 'LW', 54, 23], ['Andrei Gorcea', 'GK', 52, 23],
       ['Alexandru Benga', 'CB', 54, 36], ['Andrea Padula', 'LB', 52, 29], ['Luca Mihai', 'CM', 52, 21],
       ['David Barbu', 'RW', 48, 19], ['Hakim Abdallah', 'ST', 55, 27], ['Sota Mino', 'DM', 55, 30]
     ] },
    { n: "FC Argeș", s: "ARG", c1: "#8B1F2F", c2: "#FFFFFF", str: 57, p: [
       ['David Lazar', 'GK', 59, 33], ['Dorinel Oancea', 'RB', 58, 28], ['Leard Sadriu', 'CB', 58, 24],
       ['Esteban Orozco', 'CB', 57, 27], ['Marius Briceag', 'LB', 58, 33], ['Kevin Doukoure', 'DM', 56, 26],
       ['Vadim Rață', 'CM', 57, 32], ['Jakov Blagaić', 'AM', 56, 25], ['Ionuţ Rădescu', 'RW', 54, 30],
       ['Caio Ferreira', 'ST', 59, 24], ['Robert Moldoveanu', 'ST', 56, 26], ['Cătălin Straton', 'GK', 56, 35],
       ['Guilherme Garutti', 'CB', 57, 31], ['Costinel Tofan', 'RB', 56, 28], ['Rober Sierra', 'CM', 57, 29],
       ['Mihai Roman', 'ST', 55, 33], ['Ricardo Matos', 'ST', 58, 25], ['Takayuki Seto', 'DM', 56, 39]
     ] },
    { n: "Corvinul Hunedoara", s: "COR", c1: "#0057B8", c2: "#FFFFFF", str: 52, p: [
       ['Fabio Blaga', 'GK', 53, 20], ['Mo Abualnadi', 'RB', 50, 25], ['Pedro Albino', 'CB', 51, 28],
       ['Alexandru Neacșa', 'CB', 51, 35], ['Flavius Iacob', 'LB', 49, 26], ['Muhammed Hayatu', 'DM', 51, 20],
       ['Nicolae Pîrvulescu', 'CM', 50, 30], ['Sérgio Ribeiro', 'AM', 52, 30], ['Renato Espinosa', 'RW', 50, 28],
       ['Filip Ilie', 'ST', 54, 24], ['Emmanuel Okoro', 'LW', 55, 20], ['Adrian Frănculescu', 'GK', 47, 21],
       ['Mihajlo Ivančević', 'CB', 48, 27], ['Florin Ilie', 'LB', 50, 34], ['Andrej Fábry', 'CM', 56, 29],
       ['Ángel Gillard', 'RW', 47, 24], ['Emmanuel Yeboah', 'ST', 49, 23], ['Antoniu Manolache', 'CB', 50, 26],
       ['Codruț Sandu', 'GK', 48, 20], ['Ion Cărăruș', 'CM', 44, 30], ['Mario Bratu', 'CM', 47, 24],
       ['Gideon Goodlad', 'CM', 44, 21]
     ] },
    { n: "Csíkszereda", s: "CSI", c1: "#E30613", c2: "#FFFFFF", str: 53, p: [
       ['Máté Simon', 'GK', 52, 18], ['N. Kaján', 'RB', 54, 20], ['János Hegedűs', 'CB', 53, 28],
       ['Dávid Kelemen', 'CB', 52, 33], ['Lóránd Pászka', 'LB', 57, 29], ['Bence Végh', 'DM', 53, 28],
       ['Efraim Bödő', 'CM', 50, 18], ['Bálint Szabó', 'AM', 53, 24], ['Anderson Ceará', 'RW', 55, 26],
       ['Jozef Dolný', 'ST', 53, 33], ['Szabolcs Szalay', 'LW', 51, 23], ['Eduard Pap', 'GK', 52, 31],
       ['Maks Ćelić', 'DM', 50, 29], ['János Ferenczi', 'LB', 53, 34], ['Szabolcs Szilágyi', 'CM', 47, 21],
       ['Benjamin Babati', 'RW', 53, 29], ['Márton Eppel', 'ST', 52, 33], ['Raul Palmeș', 'RB', 53, 28]
     ] },
    { n: "FC Voluntari", s: "VOL", c1: "#0057B8", c2: "#FFE500", str: 55, p: [
       ['Bogdan Ștefan', 'GK', 54, 20], ['Daniel Dumbrăvanu', 'RB', 56, 25], ['Denis Haruț', 'CB', 53, 27],
       ['Matej Mamić', 'CB', 57, 24], ['David Kiki', 'LB', 54, 33], ['Darius Ghindovean', 'DM', 55, 25],
       ['Daniel Toma', 'CM', 54, 26], ['Ion Gheorghe', 'AM', 55, 27], ['Matko Babić', 'RW', 55, 28],
       ['Marvin Schieb', 'ST', 54, 30], ['Adi Chică-Roșă', 'LW', 56, 28], ['Eduard Chioveanu', 'GK', 53, 21],
       ['Radu Crișan', 'CB', 53, 30], ['Mario Ștefan', 'LB', 50, 17], ['George Merloi', 'CM', 53, 27],
       ['Mihai Roman', 'RW', 52, 34], ['Ianis Vencu', 'ST', 52, 20], ['Alexandru Șuteu', 'CB', 53, 22],
       ['Metod Jurhar', 'GK', 49, 29], ['Remus Guțea', 'CM', 48, 20], ['Robert Petculescu', 'CM', 51, 19],
       ['Lovro Cvek', 'CM', 49, 31]
     ] }
  ]
};

window.LEAGUES.israel = {
  id: "israel", name: "Liga Premier de Israel", country: "Israel", ucl: 3, rel: 2,
  pool: "he", squadSize: 17, teams: [
    { n: "Maccabi Tel Aviv", s: "MTA", c1: "#FFE500", c2: "#0057B8", str: 68, p: [
       ['Yoav Gerafi', 'GK', 69, 33], ['Avishay Cohen', 'RB', 68, 31], ['Roy Revivo', 'CB', 70, 23],
       ['Heitor Marinho', 'CB', 69, 26], ['Mohamed Ali Camara', 'LB', 69, 29], ['Kervin Andrade', 'DM', 66, 21],
       ['Kristijan Belić', 'CM', 69, 25], ['Ben Lederman', 'AM', 70, 26], ['Yonas Malede', 'RW', 66, 27],
       ['Elad Madmon', 'ST', 69, 22], ['Hélio Varela', 'LW', 66, 24], ['Ofek Melika', 'GK', 64, 21],
       ['Tyrese Asante', 'DM', 62, 24], ['Sagiv Yehezkel', 'LB', 63, 31], ['Issouf Sissokho', 'CM', 66, 24],
       ['Sayed Abu Farkhi', 'RW', 63, 20], ['Osher Davida', 'ST', 62, 25], ['Raz Shlomo', 'CB', 63, 27],
       ['Roei Amedi', 'GK', 64, 22], ['Shalev Saadia', 'GK', 61, 20], ['Roi Mishpati', 'GK', 61, 34],
       ['Denny Gropper', 'CB', 62, 27]
     ] },
    { n: "Maccabi Haifa", s: "MHA", c1: "#00A94F", c2: "#FFFFFF", str: 69, p: [
       ['Tomás Sultani', 'GK', 66, 28], ['Shon Goldberg', 'RB', 71, 31], ['Vital Nsimba', 'CB', 71, 33],
       ['Ilay Feingold', 'CB', 61, 22], ['Maor Kandil', 'LB', 72, 33], ['Ali Mohamed', 'DM', 71, 31],
       ['Gadi Kinda', 'CM', 72, 31], ['Dia Saba', 'AM', 73, 34], ['Xander Severina', 'RW', 66, 25],
       ['Dolev Haziza', 'ST', 71, 31], ['Erik Shuranov', 'LW', 63, 24], ['Sharif Kaiuf', 'GK', 66, 25],
       ['Ilay Hajaj', 'CB', 70, 25], ['Abdoulaye Seck', 'LB', 71, 34], ['Lior Refaelov', 'CM', 69, 40],
       ['Dean David', 'RW', 68, 30], ['Iyad Khalaili', 'ST', 67, 20], ['Oleksandr Syrota', 'CB', 67, 26],
       ['Kenny Saief', 'CM', 66, 33], ['Ethane Azoulay', 'CM', 65, 24], ['Mahmoud Jaber', 'CM', 63, 27],
       ['Liam Hermesh', 'CM', 65, 22]
     ] },
    { n: "Hapoel Beer Sheva", s: "HBS", c1: "#E30613", c2: "#FFFFFF", str: 63, p: [
       ['Ofir Marciano', 'GK', 62, 22], ['Guy Mizrahi', 'RB', 62, 24], ['Matan Baltaxa', 'CB', 62, 31],
       ['Miguel Vítor', 'CB', 66, 23], ['Pedro Amador', 'LB', 60, 26], ['Eliel Peretz', 'DM', 65, 32],
       ["Mohammed Kna'an", 'CM', 65, 25], ['Dan Bitton', 'AM', 63, 21], ['Zahi Ahmed', 'RW', 62, 20],
       ['Yonas Malede', 'ST', 63, 22], ['Javon East', 'LW', 65, 24], ['Marco Wolff', 'GK', 61, 21],
       ['Itay Rotman', 'CB', 58, 29], ['Ofir Davidzada', 'LB', 60, 28], ['Amir Ganah', 'CM', 57, 32],
       ['Muhammad Abu Rumi', 'RW', 61, 24], ['Igor Zlatanović', 'ST', 59, 33], ['Idan Nachmias', 'CB', 59, 27],
       ['Roy Levy', 'CB', 56, 29], ['Itay Hazut', 'CM', 55, 29], ['Lucas Ventura', 'CM', 58, 25],
       ['Yoni Stoyanov', 'CM', 55, 21]
     ] },
    { n: "Beitar Jerusalén", s: "BEI", c1: "#FFE500", c2: "#000000", str: 61, p: [
       ['Yehonathan Ozer', 'GK', 63, 26], ['Gil Cohen', 'RB', 61, 26], ['Brayan Carabalí', 'CB', 61, 27],
       ['Roey Elimelech', 'CB', 60, 24], ['Yarden Cohen', 'LB', 64, 29], ['Yarin Levi', 'DM', 60, 21],
       ['Adi Yona', 'CM', 62, 22], ['Dor Micha', 'AM', 60, 34], ['Yarden Shua', 'RW', 63, 27],
       ['Johnbosco Kalu', 'ST', 61, 29], ['Timothy Muzie', 'LW', 60, 25], ['Miguel Silva', 'GK', 57, 31],
       ['Grigori Morozov', 'CB', 57, 32], ['Uri Dahan', 'LB', 57, 27], ['Ilay Hajaj', 'CM', 57, 25],
       ['Ravid Abergil', 'RW', 56, 23], ['Omer Atzili', 'ST', 57, 33], ['Yuval Shalev', 'CB', 57, 21],
       ['Kim Zivat', 'GK', 54, 23], ['Arial Mendy', 'DM', 53, 32], ['Luka Gadrani', 'CB', 56, 29],
       ['Raz Baruchian', 'CB', 56, 24]
     ] },
    { n: "Hapoel Tel Aviv", s: "HTA", c1: "#E30613", c2: "#FFFFFF", str: 67, p: [
       ['Robi Levkovich', 'GK', 67, 38], ['Ziv Morgan', 'RB', 69, 26], ['Chico', 'CB', 65, 28],
       ['Fernand Mayembo', 'CB', 67, 30], ['Doron Leidner', 'LB', 65, 24], ['Andrian Kraev', 'DM', 69, 27],
       ['Ran Binyamin', 'CM', 70, 22], ['Roei Alkukin', 'AM', 66, 24], ['Roy Korine', 'RW', 65, 24],
       ['Xande Silva', 'ST', 65, 29], ['Stav Turiel', 'LW', 65, 25], ['Assaf Tzur', 'GK', 63, 28],
       ['Tal Archel', 'CB', 61, 23], ['Shahar Piven', 'LB', 64, 31], ['Ariel Cohen', 'CM', 63, 23],
       ['Liran Rotman', 'RW', 63, 30], ['Mor Buskila', 'ST', 66, 22], ['Yazan Nassar', 'CB', 64, 29],
       ['Matthew Frank', 'GK', 60, 26], ['Dor Benyamini', 'GK', 63, 21], ['Sagi Pinhas', 'GK', 62, 25],
       ['Amit Lemkin', 'CM', 59, 21]
     ] },
    { n: "Maccabi Netanya", s: "MNE", c1: "#FFE500", c2: "#000000", str: 62, p: [
       ['Tomer Tzarfati', 'GK', 62, 23], ['Itay Ben Shabat', 'RB', 64, 26], ['Matan Levy', 'CB', 62, 24],
       ['Naftali Belay', 'CB', 63, 29], ['Joel Abu Hanna', 'LB', 64, 28], ['Basam Zaarura', 'DM', 65, 24],
       ['Maxim Plakushchenko', 'CM', 62, 30], ['Boris Enow', 'AM', 57, 26], ['Stanislav Bilenkyi', 'RW', 61, 28],
       ['Ibrahim Tanko', 'ST', 65, 27], ['Ahmad Salman', 'LW', 63, 22], ['Omer Niron', 'GK', 60, 25],
       ['Karem Jaber', 'CB', 57, 26], ['Nassim Ouammou', 'LB', 60, 33], ['Oz Bilu', 'CM', 61, 25],
       ['Liran Rotman', 'RW', 59, 30], ['Igor Zlatanović', 'ST', 57, 28], ['Saba Khvadagiani', 'CB', 57, 23],
       ['Adi Tabachnik', 'GK', 56, 28], ['Denis Kulikov', 'CB', 57, 22], ['Guy Mizrahi', 'CB', 54, 25],
       ['Yuval Sade', 'CM', 55, 26]
     ] },
    { n: "Hapoel Haifa", s: "HHA", c1: "#E30613", c2: "#000000", str: 62, p: [
       ['Yoav Gerafi', 'GK', 62, 28], ['Noam Cohen', 'RB', 61, 24], ['Tamir Arbel', 'CB', 64, 20],
       ['Dor Malul', 'CB', 64, 24], ['Ivan Kričak', 'LB', 58, 28], ['Liran Rotman', 'DM', 62, 25],
       ['Cheikh Keita', 'CM', 60, 29], ['Shai Elias', 'AM', 61, 21], ['William Agada', 'RW', 60, 25],
       ['Waheb Habiballah', 'ST', 63, 26], ['Alon Turgeman', 'LW', 64, 33], ['Matan Ambar', 'GK', 56, 23],
       ['Dario Župarić', 'CB', 59, 33], ['George Diba', 'LB', 57, 28], ['Sali Pahima', 'CM', 58, 30],
       ['Itay Zafrani', 'RW', 57, 25], ["Sa'ar Elkayam", 'ST', 59, 32], ['Arial Mendy', 'CB', 56, 25],
       ['Anis Porat Ayash', 'CM', 57, 27], ["Ya'ad Gonen", 'CM', 56, 28], ['Ahmed Hamam', 'ST', 54, 33],
       ['Cheickna Diakité', 'CM', 55, 25]
     ] },
    { n: "Bnei Sakhnin", s: "BSA", c1: "#E30613", c2: "#FFFFFF", str: 56, p: [
       ['Muhammad Abu Nil', 'GK', 58, 25], ['Maroun Gantus', 'RB', 56, 30], ['Eyad Abu Abaid', 'CB', 57, 32],
       ['Itay Ben Hamo', 'CB', 57, 24], ['Naftali Balay', 'LB', 56, 29], ['Ilay Elmkies', 'DM', 53, 26],
       ['Elad Shahaf', 'CM', 58, 28], ['Matthew Cudjoe', 'AM', 56, 23], ['Alexandre Ramalingom', 'RW', 57, 33],
       ['Anis Ayias', 'ST', 56, 21], ['Basil Khuri', 'LW', 56, 23], ['Abed Yassin', 'GK', 51, 22],
       ['Oveida Darwish', 'CB', 52, 28], ['Hatem Abd Elhamed', 'LB', 54, 35], ['Omer Abuhav', 'CM', 52, 23],
       ['Ahmed Salman', 'RW', 49, 22], ['Abdalla Halaihal', 'ST', 53, 25], ['Daniel Golani', 'CB', 51, 23],
       ['Jubayer Bushnak', 'CM', 48, 23], ['Ahmad Taha', 'CM', 49, 21], ['Jeando Fuchs', 'CM', 47, 29],
       ['Mohammad Bdarney', 'CM', 50, 31]
     ] },
    { n: "Hapoel Jerusalén", s: "HJE", c1: "#E30613", c2: "#000000", str: 60, p: [
       ['Adebayo Adeleye', 'GK', 61, 26], ['Shahar Piven', 'RB', 58, 31], ['Noam Malmud', 'CB', 63, 24],
       ['Amit Glazer', 'CB', 63, 26], ['Eloge Yao', 'LB', 61, 30], ['Awaka Eshata', 'DM', 58, 27],
       ['Ofek Biton', 'CM', 59, 27], ['Aynao Prada', 'AM', 58, 24], ['Matan Hozez', 'RW', 61, 30],
       ['Or Roizman', 'ST', 62, 24], ['Jelle Duin', 'LW', 56, 27], ['Nadav Zamir', 'GK', 58, 25],
       ['Omer Agvadish', 'CB', 56, 26], ['Ofek Nadir', 'LB', 56, 27], ['Nadav Niddam', 'CM', 58, 25],
       ['Cédric Franck Don', 'RW', 58, 22], ['Karem Zoabi', 'ST', 56, 20], ['Yorai Maliach', 'CB', 55, 28],
       ['Peleg Hamani', 'DM', 54, 23], ['Maksim Grechkin', 'CB', 56, 30], ['Idan Dahan', 'ST', 54, 25],
       ['Capita', 'ST', 62, 24]
     ] },
    { n: "Maccabi Petah Tikva", s: "MPT", c1: "#0057B8", c2: "#FFFFFF", str: 58, p: [
       ['Marco Wolff', 'GK', 59, 30], ['Andreas Karo', 'RB', 59, 30], ['Rushine De Reuck', 'CB', 60, 30],
       ['Alon Azugi', 'CB', 56, 27], ['Yarden Mordehai Cohen', 'LB', 56, 29], ['Liran Hazan', 'DM', 59, 20],
       ['Arad Bar', 'CM', 59, 26], ['Tamir Glazer Itzhak', 'AM', 56, 26], ['Anas Mahamid', 'RW', 60, 28],
       ['Idan Vered', 'ST', 57, 37], ['Wilson Harris', 'LW', 56, 27], ['Tomer Litvinov', 'GK', 54, 28],
       ['Aviv Salem', 'CB', 53, 27], ['Gal Gabi Matuk', 'LB', 55, 23], ['Eden Shamir', 'CM', 53, 31],
       ['Vitalie Damaşcan', 'RW', 55, 27], ['Jordy Junior Soladio', 'ST', 56, 28], ['Ido Cohen', 'CB', 56, 24],
       ['Plamen Galavob', 'CB', 50, 31], ['Guy Amos Deznet', 'CB', 53, 21], ['Mohammed Handy', 'CB', 50, 31],
       ['Niv Yehoshua', 'CM', 51, 21]
     ] },
    { n: "Hapoel Petah Tikva", s: "HPT", c1: "#0057B8", c2: "#FFE500", str: 56, p: [
       ['Omer Katz', 'GK', 56, 28], ['Matan Peleg', 'RB', 58, 33], ['Matan Gosha', 'CB', 55, 27],
       ['Jean Carlos Quiñónez', 'CB', 58, 25], ['Dror Nir', 'LB', 57, 33], ['Ram Levy', 'DM', 56, 29],
       ['Djimy Alexis', 'CM', 57, 29], ['Samuel Broun', 'AM', 54, 28], ['Itay Shechter', 'RW', 57, 39],
       ['Raz Stain', 'ST', 55, 32], ['Idan Vered', 'LW', 57, 37], ['Ran Haspia', 'GK', 55, 23],
       ['Yaar Zambrawski', 'CB', 54, 23], ['Nico Antonitsch', 'LB', 50, 35], ['Bar Nawi', 'CM', 53, 23],
       ['Ofek Osher', 'RW', 52, 26], ['Fortune Bassey', 'ST', 57, 28], ['Roey Elimelech', 'CB', 55, 24],
       ['Raz Karmi', 'GK', 50, 30], ['Daniel Felczer', 'CB', 52, 29], ['Ido Davidov', 'CM', 50, 32],
       ['Roy Nawi', 'CM', 49, 22]
     ] },
    { n: "Hapoel Kiryat Shmona", s: "HKS", c1: "#E30613", c2: "#FFFFFF", str: 57, p: [
       ['Gad Amos', 'GK', 57, 38], ['Ziv Morgan', 'RB', 55, 26], ['Idan Nachmias', 'CB', 60, 29],
       ['Yuval Levin', 'CB', 58, 26], ['Gal Shish', 'LB', 56, 37], ['Ori Dahan', 'DM', 57, 27],
       ['Samuel Bar On', 'CM', 57, 28], ['Omer Lako', 'AM', 59, 28], ['Adrián Ugarriza', 'RW', 58, 29],
       ['Yoel Abuhatzira', 'ST', 56, 30], ['Muhamad Shaker', 'LW', 56, 30], ['Džiugas Bartkus', 'GK', 53, 37],
       ['Amir Ben Shimon', 'CB', 55, 33], ["Shemor Tza'adon", 'CM', 54, 32], ['Yadin Lugasi', 'CM', 52, 27],
       ['Ismaeel Ryan', 'RW', 54, 32], ['Shay Golan', 'ST', 51, 28], ['Fernando Pacheco', 'CB', 58, 27]
     ] },
    { n: "Ironi Tiberias", s: "TIB", c1: "#00A94F", c2: "#FFFFFF", str: 53, p: [
       ['Daniel Tenenbaum', 'GK', 51, 31], ['David Keltjens', 'RB', 53, 31], ['Yonatan Teper', 'CB', 55, 26],
       ['Ben Vahaba', 'CB', 54, 34], ['Odřej Bačo', 'LB', 55, 30], ['Roee Shahar', 'DM', 50, 20],
       ['Feras Abu Akel', 'CM', 51, 29], ['Ron Apelbaum', 'AM', 54, 23], ['Jordan Botaka', 'RW', 53, 33],
       ['Matanel Tadesa', 'ST', 54, 30], ['Stanislav Bilenkyi', 'LW', 52, 28], ['Tal Bomstein', 'GK', 51, 31],
       ['Eli Balilti', 'CB', 48, 32], ['Shay Konstatin', 'LB', 47, 30], ['Basam Zaarura', 'CM', 49, 24],
       ['Or Roizman', 'RW', 47, 24], ['Michael Ohana', 'ST', 48, 31], ['Bassel Shaban', 'CB', 47, 26],
       ['Snir Talias', 'CM', 47, 27], ['Neri Bar', 'CM', 45, 20], ['Haroun Shapso', 'CM', 45, 27],
       ['Wahib Habiballah', 'ST', 46, 28]
     ] },
    { n: "Hapoel Ramat Gan", s: "HRG", c1: "#0057B8", c2: "#FFFFFF", str: 54, p: [
       ['Ben Parduaro', 'GK', 52, 26], ['Yabelo Getachew', 'RB', 56, 33], ['Daniel Tishler', 'CB', 52, 33],
       ['Márcio Silva', 'CB', 52, 25], ['Jota', 'LB', 54, 22], ['Maxim Plakuschenko', 'DM', 55, 28],
       ['Idan Baranes', 'CM', 55, 27], ['Moshe Semel', 'AM', 55, 26], ['Marius Noubissi', 'RW', 52, 26],
       ['David Asanka', 'ST', 54, 29], ['Hod Messika', 'LW', 51, 21], ['Amit Reif', 'GK', 47, 33],
       ['Moshe Meir', 'CB', 50, 23], ['Noam Schwartz', 'LB', 50, 29], ['Amit Tzur', 'CM', 48, 30],
       ['Liam Aluk', 'RW', 51, 31], ['Luan Campos⁠', 'ST', 51, 31], ['Omer Itzhak', 'CB', 50, 32],
       ['Oli Cohen Bergman', 'CM', 49, 29], ['Christopher Boniface', 'CM', 47, 25], ['Ido Oli', 'CM', 48, 33],
       ['Tamir Glazer', 'CM', 45, 22]
     ] }
  ]
};

window.LEAGUES.chipre = {
  id: "chipre", name: "Cypriot First Division", country: "Chipre", ucl: 3, rel: 2,
  pool: "gr", squadSize: 17, teams: [
    { n: "APOEL", s: "APO", c1: "#FFE500", c2: "#0057B8", str: 66, p: [
       ['Vid Belec', 'GK', 70, 35], ['Nanu', 'RB', 63, 31], ['Konstantinos Laifis', 'CB', 69, 32],
       ['Franz Brorsson', 'CB', 64, 29], ['Konstantinos Stafylidis', 'LB', 65, 31], ['Dálcio', 'DM', 67, 29],
       ['Diego Rosa', 'CM', 64, 22], ['Maximilian Meyer', 'AM', 68, 29], ['Gabriel Maioli', 'RW', 62, 22],
       ['Stefan Dražić', 'ST', 66, 32], ['Marquinhos', 'LW', 71, 28], ['Andreas Christodoulou', 'GK', 63, 28],
       ['Evagoras Antoniou', 'CB', 62, 22], ['Vitor Meer', 'LB', 60, 21], ['Panagiotis Kattirtzis', 'CM', 59, 19],
       ['Charles Appiah', 'AM', 54, 19], ['Pieros Sotiriou', 'ST', 65, 32], ['Romário Baldé', 'LW', 65, 28]
     ] },
    { n: "Omonia Nicosia", s: "OMO", c1: "#00A94F", c2: "#FFFFFF", str: 68, p: [
       ['Thomas Kaminski', 'GK', 70, 32], ['Fotis Kitsos', 'RB', 65, 25], ['Senou Coulibaly', 'CB', 66, 22],
       ['Stefan Simić', 'CB', 65, 32], ['Moses Odubajo', 'LB', 67, 31], ['Carel Eiting', 'DM', 66, 25],
       ['Ewandro', 'CM', 69, 27], ['Mateo Marić', 'AM', 68, 31], ['Jaden Montnor', 'RW', 69, 30],
       ['David Akintola', 'ST', 70, 33], ['Andronikos Kakoullis', 'LW', 67, 20], ['Fabiano', 'GK', 65, 26],
       ['Jure Balkovec', 'CB', 67, 30], ['Ľubomír Šatka', 'LB', 66, 29], ['Luuk Brouwers', 'CM', 63, 27],
       ['Florin Tănase', 'RW', 66, 30], ['Mihlali Mayambela', 'ST', 62, 26], ['Loïc Négo', 'CB', 68, 34],
       ['Muamer Tanković', 'CM', 61, 26], ['Mateusz Musiałowski', 'CM', 62, 21], ['Panagiotis Andreou', 'CM', 62, 25],
       ['Pantelis Michael', 'GK', 61, 33]
     ] },
    { n: "Pafos FC", s: "PAF", c1: "#0057B8", c2: "#FFFFFF", str: 64, p: [
       ['Jay Gorter', 'GK', 64, 26], ['Kostas Pileas', 'RB', 67, 28], ['David Luiz', 'CB', 64, 39],
       ['David Goldar', 'CB', 68, 32], ['Axel Guessand', 'LB', 54, 22], ['Domingos Quina', 'DM', 64, 27],
       ['Ken Sema', 'CM', 64, 33], ['Wilmer Odefalk', 'AM', 65, 22], ['Bruno Felipe', 'RW', 67, 32],
       ['Mons Bassouamina', 'ST', 66, 28], ['Landry Dimata', 'LW', 64, 29], ['Neofytos Michail', 'GK', 62, 33],
       ['Ognjen Mimović', 'CB', 63, 22], ['Derrick Luckassen', 'LB', 63, 31], ['Ivan Šunjić', 'CM', 62, 30],
       ['Jajá Alves', 'RW', 62, 25], ['Mislav Oršić', 'ST', 63, 34], ['Bruno Langa', 'CB', 60, 29],
       ['Athanasios Papadoudis', 'GK', 59, 23], ['Pedrão Henrique', 'CB', 58, 22], ['João Correia', 'CB', 60, 30],
       ['Vlad Dragomir', 'CM', 57, 27]
     ] },
    { n: "APOEL Aris Limassol", s: "ARI", c1: "#FFE500", c2: "#0057B8", str: 64, p: [
       ['Vaná Alves', 'GK', 66, 35], ['Gédéon Kalulu', 'RB', 63, 29], ['Alex Moucketou-Moussounda', 'CB', 63, 26],
       ['Connor Goldson', 'CB', 64, 34], ['Anderson Correia', 'LB', 65, 35], ['Yacine Bourhane', 'DM', 64, 28],
       ['Viktor Kovalenko', 'CM', 63, 30], ['Veljko Nikolić', 'AM', 62, 27], ['Aleksandr Kokorin', 'RW', 64, 35],
       ['Mihlali Mayambela', 'ST', 64, 30], ['Giorgi Kvilitaia', 'LW', 63, 33], ['Wes Foderingham', 'GK', 61, 35],
       ['Miłosz Matysik', 'DM', 58, 22], ['Mamadou Sané', 'LB', 60, 22], ['Charalampos Charalampous', 'CM', 58, 24],
       ['Yannick Gomis', 'RW', 61, 34], ['Dennis Gaustad', 'ST', 59, 22], ['Steeve Yago', 'CB', 61, 27],
       ['Anastasios Pisiias', 'GK', 57, 20], ['Ellinas Sofroníou', 'GK', 58, 31], ['Leon Balogun', 'CB', 59, 38],
       ['Abdoulaye Sow', 'CB', 58, 21]
     ] },
    { n: "AEK Larnaca", s: "AEK", c1: "#FFE500", c2: "#00A94F", str: 63, p: [
       ['Zlatan Alomerović', 'GK', 65, 35], ['Petros Ioannou', 'RB', 63, 27], ['Enric Saborit', 'CB', 63, 34],
       ['Ángel García', 'CB', 64, 33], ['Hrvoje Miličević', 'LB', 61, 33], ['Jimmy Suárez', 'DM', 62, 30],
       ['Gustavo Ledes', 'CM', 62, 34], ['Marcus Rohdén', 'AM', 63, 35], ['Đorđe Ivanović', 'RW', 63, 31],
       ['Waldo Rubio', 'ST', 62, 31], ['Riad Bajić', 'LW', 63, 32], ['Kewin Komar', 'GK', 61, 23],
       ['Jorge Miramón', 'CB', 59, 37], ['Godswill Ekpolo', 'LB', 60, 31], ['Pere Pons', 'CM', 59, 33],
       ['Yerson Chacón', 'RW', 58, 23], ['Karol Angielski', 'ST', 58, 30], ['Jairo Izquierdo', 'CB', 59, 33],
       ['Andreas Paraskevas', 'GK', 57, 28], ['Demetris Demetriou', 'GK', 57, 27], ['Valentin Roberge', 'CB', 58, 39],
       ['Maximos Petousis', 'DM', 56, 19]
     ] },
    { n: "Apollon Limassol", s: "APL", c1: "#0057B8", c2: "#FFFFFF", str: 67, p: [
       ['Philipp Kühn', 'GK', 67, 34], ['Praxitelis Vouros', 'RB', 64, 31], ['Thomas Lam', 'CB', 68, 33],
       ['Zacharias Adoni', 'CB', 68, 27], ['Giorgos Malekkidis', 'LB', 67, 29], ['Morgan Brown', 'DM', 69, 27],
       ['Jaromír Zmrhal', 'CM', 67, 33], ['Danilo Špoljarić', 'AM', 68, 27], ['Sergio Castel', 'RW', 67, 31],
       ['Garry Rodrigues', 'ST', 64, 36], ['Clinton Duodu', 'LW', 68, 21], ['Konstantinos Stylianou', 'GK', 64, 22],
       ['Andreas Shikkis', 'CB', 64, 24], ['Josef Kvída', 'LB', 62, 29], ['Marcelino Carreazo', 'CM', 61, 27],
       ['Brandon Thomas', 'RW', 63, 31], ['Pedro Marques', 'ST', 62, 28], ['Bruno Gaspar', 'CB', 62, 33],
       ['Peter Leeuwenburgh', 'GK', 62, 32], ['Gaétan Weissbeck', 'CM', 61, 29], ['Ivan Ljubić', 'CM', 59, 30],
       ['Christos Charalambous', 'CM', 60, 18]
     ] },
    { n: "Anorthosis", s: "ANO", c1: "#0057B8", c2: "#FFFFFF", str: 59, p: [
       ['Konstantinos Panagi', 'GK', 61, 32], ['Simranjit Thandi', 'RB', 60, 27], ['Fran García', 'CB', 69, 34],
       ['Kiko Geraldo', 'CB', 58, 33], ['Luís Silva', 'LB', 59, 27], ['Kostakis Artymatas', 'DM', 57, 33],
       ['Stefano Sensi', 'CM', 58, 31], ['Yoëll van Nieff', 'AM', 56, 33], ['Stefan Vukić', 'RW', 58, 31],
       ['Daniil Paroutis', 'ST', 60, 25], ['Babacar Dione', 'LW', 57, 29], ['Martin Sebők', 'GK', 57, 21],
       ['Konstantinos Sergiou', 'CB', 54, 26], ['Fanos Katelaris', 'LB', 56, 30], ['Dimitris Theodorou', 'CM', 53, 29],
       ['Elián Sosa', 'RW', 56, 23], ['Evagoras Charalampous', 'ST', 54, 21], ['Emil Bergström', 'CB', 55, 33],
       ['Lovre Rogić', 'GK', 53, 31], ['Tobias Schättin', 'DM', 51, 29], ['Gabriel Furtado', 'CB', 52, 27],
       ['Andreas Karamanolis', 'CB', 52, 25]
     ] },
    { n: "AEL Limassol", s: "AEL", c1: "#FFE500", c2: "#0057B8", str: 62, p: [
       ['Panayiotis Kyriakou', 'GK', 63, 22], ['Christoforos Frantzis', 'RB', 60, 25], ['Dylan Ouédraogo', 'CB', 62, 28],
       ['Dušan Stevanović', 'CB', 63, 30], ['Luka Bogdan', 'LB', 62, 30], ['Davor Zdravkovski', 'DM', 61, 28],
       ['Denis Thomalla', 'CM', 64, 34], ['Vasilios Papafotis', 'AM', 62, 31], ['Morgan Ferrier', 'RW', 63, 32],
       ['Luther Singh', 'ST', 63, 29], ['Simonas Christofi', 'LW', 61, 19], ['Andreas Keravnos', 'GK', 56, 27],
       ['Kypros Neophytou', 'CB', 57, 24], ['Emmanuel Imanishimwe', 'LB', 57, 31], ['Bassel Jradi', 'CM', 57, 33],
       ['Stelios Panagiotou', 'RW', 56, 18], ['Savvas Christodoulou', 'ST', 56, 21], ['Andreas Panayiotou', 'CB', 57, 31],
       ['Sérgio Conceição', 'CB', 55, 30], ['Christos Gouiler', 'CB', 54, 29], ['Theoklitos Polychroniou', 'DM', 53, 19],
       ['Stephane Keller', 'CB', 54, 25]
     ] },
    { n: "Nea Salamis", s: "NEA", c1: "#E30613", c2: "#FFFFFF", str: 55, p: [
       ['Alberto Varo', 'GK', 53, 33], ['Alexandros Theocharous', 'RB', 55, 34], ['Panagiotis Artymatas', 'CB', 57, 28],
       ['Alexandros Michail', 'CB', 56, 28], ['Andreas Dimitriou', 'LB', 58, 23], ['Georgios Christodoulou', 'DM', 54, 29],
       ['José Artiles', 'CM', 56, 33], ['Andreas Frangos', 'AM', 56, 29], ['Giorgos Pontikou', 'RW', 54, 23],
       ['Daniel Pérez', 'ST', 55, 24], ['Mika Borges', 'LW', 57, 29], ['Daniel Stefanov', 'GK', 54, 19],
       ['Konstantinos Kastanas', 'CB', 54, 33], ['Thomas Nikolaou', 'LB', 53, 25], ['Giorgos Pavlidis', 'CM', 51, 24],
       ['Álex Guti', 'RW', 53, 27], ['Aldair', 'ST', 49, 35], ['Dimitrios Kyprianou', 'CB', 54, 34],
       ['Denys Vakulyk', 'GK', 47, 21], ['Giannis Kalanidis', 'GK', 50, 20], ['Kostas Charalampous', 'DM', 47, 31],
       ['Giorgos Viktoros', 'CB', 47, 21]
     ] },
    { n: "Omonia Aradippou", s: "OAR", c1: "#00A94F", c2: "#FFFFFF", str: 53, p: [
       ['Ivan Kostić', 'GK', 54, 31], ['Sebastian Ring', 'RB', 53, 31], ['Rasmus Thelander', 'CB', 51, 35],
       ['Jeremy van Mullem', 'CB', 52, 27], ['Omar Shatla', 'LB', 53, 23], ['Christos Kallis', 'DM', 52, 28],
       ['Ryan Edwards', 'CM', 53, 33], ['Niko Havelka', 'AM', 55, 27], ['Jorginho', 'RW', 56, 31],
       ['Giorgos Pontikos', 'ST', 53, 25], ['Karim Mekkaoui', 'LW', 53, 25], ['Giorgos Papacharalampous', 'GK', 51, 19],
       ['Efthymios Efthymiou', 'CB', 50, 20], ['Minas Antoniou', 'LB', 51, 32], ['Jaly Mouaddib', 'CM', 49, 26],
       ['Sodiq Fatai', 'RW', 50, 30], ['Richard Birkheun', 'ST', 51, 27], ['Lautaro Cano', 'CB', 48, 24],
       ['Gavriil Sakka', 'GK', 45, 24], ['Bourama Fomba', 'DM', 45, 27], ['Antoine Ortega', 'CB', 46, 23],
       ['Alexandros Theocharous', 'CB', 48, 34]
     ] },
    { n: "Doxa Katokopias", s: "DOX", c1: "#0057B8", c2: "#FFFFFF", str: 58, p: [
       ['Michalis Agrimakis', 'GK', 57, 34], ['Valentinos Sielis', 'RB', 57, 36], ['Simranjit Thandi', 'CB', 59, 27],
       ['Khaled Adénon', 'CB', 57, 41], ['Dimitar Velkovski', 'LB', 60, 31], ['Guessouma Fofana', 'DM', 56, 34],
       ['Dusko Trajcevski', 'CM', 59, 36], ['Adil Nabi', 'AM', 57, 32], ['Nikola Trujić', 'RW', 59, 34],
       ['Berat Sadik', 'ST', 57, 40], ['Nicolai Skoglund', 'LW', 56, 23], ['Alexandros Antoniou', 'GK', 55, 27],
       ['Marios Antoniadis', 'CB', 56, 36], ['Konstantinos Provydakis', 'LB', 54, 30], ['Bryan Alceus', 'CM', 57, 30],
       ['Ernest Antwi', 'RW', 53, 31], ['Ernest Asante', 'ST', 53, 38], ['Musa Muhammed', 'CB', 52, 30],
       ['Panagiotis Kyriakou', 'GK', 51, 22], ['Vangelis Kyriakou', 'CB', 53, 32], ['Charalampos Kyriakou', 'DM', 50, 37],
       ['Aleksa Purić', 'CB', 51, 23]
     ] },
    { n: "Karmiotissa", s: "KAR", c1: "#00A94F", c2: "#000000", str: 56, p: [
       ['Alexander Spoljarić', 'GK', 55, 31], ['Minas Antoniou', 'RB', 56, 32], ['Dion Malone', 'CB', 55, 37],
       ['Bojan Kovačević', 'CB', 60, 30], ['Delmiro', 'LB', 58, 38], ['Deni Hocko', 'DM', 53, 32],
       ['Andreas Neofytou', 'CM', 57, 28], ['Luka Stojanović', 'AM', 57, 32], ['Aboubacar Doumbia', 'RW', 57, 27],
       ['Mate Kvirkvia', 'ST', 54, 30], ['Boris Cmiljanić', 'LW', 55, 30], ['Andreas Violaris', 'GK', 54, 21],
       ['Stylianos Panteli', 'CB', 53, 27], ['Răzvan Grădinaru', 'LB', 50, 31], ['Arthur Gribakin', 'CM', 54, 21],
       ['Luka Đorđević', 'RW', 49, 32], ['Nikolas Mattheou', 'ST', 54, 28], ['Stefan Simić', 'CB', 51, 31],
       ['José Pozo', 'CM', 60, 30], ['Stavros Tsoukalas', 'CM', 48, 38], ['Sadok Yeddes', 'GK', 49, 28],
       ['Marios Taveloudis', 'CB', 48, 20]
     ] },
    { n: "Krasava Ypsonas", s: "KRA", c1: "#E30613", c2: "#FFFFFF", str: 54, p: [
       ['Dimitrios Priniotaki', 'GK', 53, 27], ['Luiyi de Lucas', 'RB', 55, 32], ['Kristopher Da Graca', 'CB', 55, 28],
       ['Irodotos Christodoulou', 'CB', 53, 24], ['Xavi Quintillà', 'LB', 52, 30], ['Ivan Pankov', 'DM', 55, 21],
       ['Curtis Yebli', 'CM', 53, 29], ['Michalis Koumouris', 'AM', 55, 32], ['Nikola Trujić', 'RW', 54, 34],
       ['Yevhen Budnik', 'ST', 53, 36], ['Maxime Do Couto', 'LW', 56, 30], ['Yuriy Avramenko', 'GK', 50, 21],
       ['Marios Stylianou', 'CB', 48, 33], ['Issam Chebake', 'LB', 51, 37], ['Dmytro Melnichenko', 'CM', 50, 22],
       ['Algassime Bah', 'RW', 48, 24], ['Eric Davidyan', 'ST', 48, 19], ['Vangelis Kyriakou', 'CB', 50, 32],
       ['Mislav Zadro', 'GK', 49, 23], ['Julio César', 'DM', 47, 22], ['Vernon Addo', 'CB', 47, 21],
       ['Andreas Michailides', 'CB', 47, 23]
     ] },
    { n: "Olympiakos Nicosia", s: "OLY", c1: "#00A94F", c2: "#FFFFFF", str: 57, p: [
       ['Christos Talichmanidis', 'GK', 57, 25], ['Aboubacar Loucoubar', 'RB', 55, 21], ['Loukas Kalogirou', 'CB', 59, 24],
       ['Andreas Christou', 'CB', 57, 21], ['Gerasimos Bakadimas', 'LB', 57, 26], ['Orhan Džepar', 'DM', 59, 30],
       ['Rui Moreira', 'CM', 56, 30], ['Vieirinha', 'AM', 57, 30], ['Adel Beggah', 'RW', 56, 26],
       ['Iasonas Pikis', 'ST', 56, 26], ['Admir Bajrović', 'LW', 56, 31], ['Nikitas Papakonstantinou', 'GK', 50, 20],
       ['Henrique Gomes', 'CB', 53, 31], ['Ektoras Stephanou', 'LB', 52, 25], ['João Tavares', 'CM', 50, 28],
       ['Geron Tocka', 'RW', 50, 27], ['Filippos Eftichidis', 'ST', 52, 24], ['Andreas Kasartos', 'CB', 54, 19],
       ['Michalis Kyriakou', 'GK', 50, 24], ['Konstantinos Prokopiou', 'GK', 48, 19], ['Maurício Barbosa', 'CB', 50, 32],
       ['Panagiotis Aggeli', 'CM', 49, 20]
     ] }
  ]
};

