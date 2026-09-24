/* =========================================================================
   SEGUNDAS DIVISIONES EUROPEAS — 2025/26
   Se listan los jugadores conocidos de cada club; el resto del cupo lo
   completa js/fill.js con nombres del país marcados como genéricos.
   "str" es el nivel medio del equipo.
   ========================================================================= */
window.LEAGUES = window.LEAGUES || {};

window.LEAGUES.championship = {
  id: 'championship', name: 'EFL Championship', country: 'Inglaterra', tier: 2, ucl: 2, rel: 3,
  pool: 'en', squadSize: 17, teams: [
    { n: 'Birmingham City', s: 'BIR', c1: '#0000FF', c2: '#FFFFFF', str: 69, p: [
       ['James Beadle', 'GK', 66, 20], ['Bright Osayi-Samuel', 'RB', 72, 27], ['Phil Neumann', 'CB', 69, 27],
       ['Eiran Cashin', 'CB', 69, 23], ['Alexander Cochrane', 'LB', 68, 25], ['Paik Seung Ho', 'DM', 68, 28],
       ['Thomas Doyle', 'CM', 69, 23], ['Kanya Fujimoto', 'AM', 70, 26], ['Patrick Roberts', 'RW', 68, 28],
       ['Marvin Ducksch', 'ST', 72, 31], ['Demarai Gray', 'LW', 68, 29], ['Ryan Allsop', 'GK', 64, 33],
       ['Christoph Klarer', 'CB', 68, 25], ['Lee Buchanan', 'LB', 66, 24], ['Marc Leonard', 'CM', 65, 23],
       ['Lewis Koumas', 'RW', 65, 19], ['Kyogo Furuhashi', 'ST', 71, 30], ['Tomoki Iwata', 'DM', 68, 28]
     ] },
    { n: 'Blackburn Rovers', s: 'BLB', c1: '#009EE0', c2: '#FFFFFF', str: 72, p: [
       ['Alan Pears', 'GK', 71, 27], ['Lewis Miller', 'RB', 68, 24], ['Hayden Carter', 'CB', 72, 25],
       ['Scott Wharton', 'CB', 71, 27], ['Yuri Ribeiro', 'LB', 72, 28], ['Sondre Tronstad', 'DM', 74, 29],
       ['Ryoya Morishita', 'CM', 72, 28], ['Todd Cantwell', 'AM', 74, 27], ['Andri Guðjohnsen', 'ST', 70, 23],
       ['Yuki Ohashi', 'ST', 71, 28], ['Ryan Hedges', 'LW', 72, 29], ['Balázs Tóth', 'GK', 68, 27],
       ['Sean McLoughlin', 'CB', 70, 28], ['Harry Pickering', 'LB', 71, 26], ['Taylor Gardner-Hickman', 'CM', 71, 23],
       ['Augustus Kargbo', 'ST', 69, 25], ['Makhtar Gueye', 'ST', 71, 27], ['Moussa Baradji', 'CM', 70, 24]
     ] },
    { n: 'Bristol City', s: 'BRC', c1: '#E21C38', c2: '#FFFFFF', str: 67, p: [
       ['Radek Vitek', 'GK', 67, 21], ['Ross McCrorie', 'CM', 66, 27], ['Robert Dickie', 'CB', 69, 29],
       ['Luke McNally', 'CB', 68, 25], ['Neto Borges', 'LB', 67, 28], ['Joseph Williams', 'DM', 66, 28],
       ['Jason Knight', 'CM', 69, 24], ['Joshua Stokes', 'AM', 60, 21], ['Scott Twine', 'RW', 68, 25],
       ['Emil Riis', 'ST', 67, 27], ['Anis Mehmeti', 'LW', 68, 24], ['Joseph Lumley', 'GK', 66, 30],
       ['Robert Atkinson', 'CB', 67, 26], ['Cameron Pring', 'LB', 66, 27], ['Max Bird', 'CM', 69, 24],
       ['Mark Sykes', 'RW', 65, 27], ['Sinclair Armstrong', 'ST', 64, 22], ['George Tanner', 'RB', 66, 25]
     ] },
    { n: 'Charlton Athletic', s: 'CHA', c1: '#E8112D', c2: '#FFFFFF', str: 67, p: [
       ['Thomas Kaminski', 'GK', 73, 32], ['Joseph Rankin-Costello', 'RB', 68, 25], ['Reece Burke', 'CB', 70, 28],
       ["Amari'i Bell", 'CB', 69, 31], ['Joshua Edwards', 'CM', 64, 25], ['Conor Coventry', 'DM', 66, 25],
       ['Harvey Knibbs', 'CM', 67, 26], ['Luke Berry', 'AM', 65, 32], ['Robert Apter', 'RW', 65, 22],
       ['Charlie Kelman', 'ST', 67, 23], ['Tupac Campbell', 'LW', 64, 21], ['William Mannion', 'GK', 64, 27],
       ['Lloyd Jones', 'CB', 68, 29], ['James Bree', 'RB', 68, 27], ['Sonny Carey', 'CM', 65, 24],
       ['Isaac Olaofe', 'ST', 65, 25], ['Matthew Godden', 'ST', 67, 33], ['Kayne Ramsay', 'RB', 67, 24]
     ] },
    { n: 'Derby County', s: 'DER', c1: '#FFFFFF', c2: '#000000', str: 68, p: [
       ['Jacob Widell Zetterström', 'GK', 68, 26], ['Max Johnston', 'RB', 65, 21], ['Matthew Clarke', 'CB', 69, 28],
       ['Sondre Langås', 'CB', 68, 24], ['Owen Beck', 'LB', 67, 22], ['Ebrima Adams', 'DM', 70, 29],
       ['Liam Thompson', 'CM', 64, 23], ['Andreas Weimann', 'AM', 67, 33], ['Corey Blackett-Taylor', 'LW', 65, 27],
       ['Carlton Morris', 'ST', 70, 29], ['Brereton Brereton Díaz', 'LW', 71, 26], ['Joshua Vickers', 'GK', 64, 29],
       ['Daniel Batth', 'CB', 67, 34], ['Craig Forsyth', 'LB', 64, 36], ['Bobby-Lamont Clark', 'CM', 61, 20],
       ['Lars-Jørgen Salvesen', 'ST', 64, 29], ['Rhian Brewster', 'ST', 66, 25], ['Lewis Travis', 'DM', 69, 27]
     ] },
    { n: 'Bolton Wanderers', s: 'BOL', c1: '#263C8C', c2: '#FFFFFF', str: 70, p: [
       ['Teddy Sharman-Lowe', 'GK', 65, 22], ['Jacob Dacres-Cogley', 'RB', 71, 29], ['George Johnston', 'CB', 70, 26],
       ['Eoin Toal', 'CB', 70, 26], ['Maxwell Conway', 'LB', 68, 21], ['Joshua Sheehan', 'DM', 71, 30],
       ['Aaron Morley', 'CM', 69, 25], ['John Randall', 'AM', 70, 25], ['Jordi Osei-Tutu', 'RW', 69, 26],
       ['Marcus Forss', 'ST', 73, 26], ['Ibrahim Cissoko', 'LW', 72, 22], ['Tyler Miller', 'GK', 65, 32],
       ['Christian Forino', 'CB', 69, 25], ['Cyrus Christie', 'RB', 69, 32], ['Kyle Dempsey', 'CM', 68, 29],
       ['Amario Cozier-Duberry', 'RW', 69, 20], ['Samuel Dalby', 'ST', 70, 25], ['Ethan Erhahon', 'DM', 70, 24]
     ] },
    { n: 'Middlesbrough', s: 'MID', c1: '#E21C38', c2: '#FFFFFF', str: 72, p: [
       ['Seny Dieng', 'GK', 70, 30], ['Callum Brittain', 'RB', 72, 27], ['Dael Fry', 'CB', 72, 27],
       ['Darragh Lenihan', 'CB', 71, 31], ['Matthew Targett', 'LB', 71, 29], ['Hayden Hackney', 'DM', 73, 23],
       ['Alan Browne', 'CM', 72, 30], ['Aidan Morris', 'DM', 73, 23], ['Morgan Whittaker', 'RW', 73, 24],
       ['Tommy Conway', 'ST', 70, 22], ['Riley McGree', 'LW', 72, 26], ['Jonathan McLaughlin', 'GK', 66, 37],
       ['Alfie Jones', 'CB', 71, 27], ['Alex Bangura', 'CM', 69, 25], ['Sverre Nypan', 'CM', 69, 18],
       ['Delano Burgzorg', 'LW', 69, 26], ['Kaly Sène', 'ST', 69, 24], ['Luke Ayling', 'RB', 71, 33]
     ] },
    { n: 'Millwall', s: 'MIL', c1: '#00205B', c2: '#FFFFFF', str: 67, p: [
       ['Lukas Jensen', 'GK', 65, 26], ['Ryan Leonard', 'RB', 67, 33], ['Jake Cooper', 'CB', 69, 30],
       ['Caleb Taylor', 'CB', 64, 22], ['Alfie Doughty', 'LB', 70, 25], ['Casper De Norre', 'DM', 68, 28],
       ['William Smallbone', 'CM', 68, 25], ['Massimo Luongo', 'DM', 68, 32], ['Camiel Neghli', 'RW', 64, 23],
       ['Mihailo Ivanović', 'ST', 65, 20], ['Thierno Ballo', 'LW', 69, 23], ['Steven-Andreas Benda', 'GK', 63, 26],
       ['Wesley Harding', 'CB', 62, 28], ['Joseph Bryan', 'LB', 66, 31], ['Billy Mitchell', 'CM', 64, 24],
       ["Ra'ees Bangura-Williams", 'AM', 59, 20], ['Macaulay Langstaff', 'ST', 63, 28], ['F. Azeez', 'LW', 66, 24]
     ] },
    { n: 'Norwich City', s: 'NOR', c1: '#FFF200', c2: '#00A650', str: 69, p: [
       ['Vladan Kovacević', 'GK', 68, 27], ['Jack Stacey', 'RB', 70, 29], ['Harry Darling', 'CB', 69, 25],
       ['Shane Duffy', 'CB', 69, 33], ['Jeffrey Schlupp', 'LB', 71, 32], ['Kenneth McLean', 'DM', 70, 33],
       ['Emiliano Marcondes', 'CM', 68, 30], ['Oscar Schwartau', 'AM', 63, 19], ['Matěj Jurásek', 'RW', 71, 21],
       ['Joshua Sargent', 'ST', 73, 25], ['Papa Diallo', 'LW', 66, 21], ['Daniel Grimshaw', 'GK', 65, 27],
       ['Jakov Medić', 'CB', 68, 26], ['Benjamin Chrisene', 'LB', 64, 21], ['A. Forson', 'CM', 67, 22],
       ['Tony Springett', 'RW', 60, 22], ['Mathias Kvistgaarden', 'ST', 72, 23], ['Pelle Mattsson', 'DM', 69, 23]
     ] },
    { n: 'Cardiff City', s: 'CDF', c1: '#0070B5', c2: '#FFFFFF', str: 68, p: [
       ['Newman Trott', 'GK', 68, 26], ['Perry Ng', 'RB', 70, 29], ['Gabriel Osho', 'CB', 71, 26],
       ['Calum Chambers', 'CB', 69, 30], ['Joel Bagan', 'LB', 63, 23], ['Ryan Wintle', 'DM', 67, 28],
       ['David Turnbull', 'CM', 68, 25], ['Alexander Robertson', 'AM', 66, 22], ['Ollie Tanner', 'RW', 65, 23],
       ['Callum Robinson', 'ST', 67, 30], ['Christopher Willock', 'LW', 70, 27], ['Jak Alnwick', 'GK', 67, 32],
       ['William Fish', 'CB', 68, 22], ['Ronan Kpakio', 'RB', 57, 18], ['Dakarai Mafico', 'CM', 53, 18],
       ['Cian Ashford', 'RW', 61, 20], ['Isaak Davies', 'ST', 65, 23], ['Rubin Colwill', 'AM', 65, 23]
     ] },
    { n: 'Portsmouth', s: 'POR', c1: '#001489', c2: '#FFFFFF', str: 68, p: [
       ['Nicolas Schmid', 'GK', 69, 28], ['Terry Devlin', 'RB', 65, 21], ['Conor Shaughnessy', 'CB', 68, 29],
       ['Joshua Knight', 'CB', 67, 27], ['Connor Ogilvie', 'LB', 67, 29], ['Andre Dozzell', 'DM', 66, 26],
       ['Le Le Roux', 'CM', 64, 25], ['Conor Chaplin', 'AM', 72, 28], ['Yang Min Hyeok', 'RW', 68, 19],
       ['Colby Bishop', 'ST', 70, 28], ['Joshua Murphy', 'LW', 71, 30], ['John Bursik', 'GK', 63, 24],
       ['Regan Poole', 'CB', 66, 27], ['Jacob Farrell', 'LB', 65, 22], ['Márk Kosznovszky', 'CM', 61, 23],
       ['Franco Umeh', 'RW', 60, 20], ['Florian Bianchini', 'ST', 64, 24], ['Callum Lang', 'AM', 69, 26]
     ] },
    { n: 'Preston North End', s: 'PRE', c1: '#FFFFFF', c2: '#00205B', str: 68, p: [
       ['Daniel Iversen', 'GK', 68, 27], ['Bradley Potts', 'RB', 67, 30], ['Jordan Storey', 'CB', 69, 27],
       ['Liam Lindsay', 'CB', 69, 29], ['Robert Brady', 'LB', 67, 33], ['Benjamin Whiteman', 'DM', 70, 29],
       ['Alistair McCann', 'CM', 68, 25], ['Mads Frøkjær', 'AM', 70, 25], ['Thierry Small', 'RW', 65, 20],
       ['William Keane', 'ST', 68, 32], ['Lewis Dobbin', 'LW', 65, 22], ['James Walton', 'GK', 64, 27],
       ['Andrew Hughes', 'CB', 68, 33], ['Andrija Vukčević', 'LB', 63, 28], ['Stefán Þórðarson', 'CM', 67, 26],
       ['Michael Smith', 'ST', 67, 33], ['Milutin Osmajić', 'ST', 68, 25], ['Alfie Devine', 'AM', 68, 20]
     ] },
    { n: 'Queens Park Rangers', s: 'QPR', c1: '#1D5BA4', c2: '#FFFFFF', str: 67, p: [
       ['Paul Nardi', 'GK', 69, 31], ['James Dunne', 'RB', 69, 27], ['Jake-Liam Clarke-Salter', 'CB', 68, 27],
       ['Steve Cook', 'CB', 68, 34], ['Rhys Norrington-Davies', 'LB', 64, 26], ['Jonathan Varane', 'DM', 67, 23],
       ['Kieran Morgan', 'CM', 62, 19], ['Nicolas Madsen', 'AM', 67, 25], ['Kader Dembélé', 'RW', 66, 22],
       ['Michael Frey', 'ST', 66, 30], ['Ilias Chair', 'LW', 70, 27], ['Joe Walsh', 'GK', 57, 23],
       ['Amadou Mbengue', 'CB', 64, 23], ['Ziyad Larkeche', 'LB', 59, 22], ['Elijah Dixon-Bonner', 'CM', 59, 24],
       ['Kwame Poku', 'AM', 65, 23], ['Richard Kone', 'ST', 65, 21], ['Koki Saito', 'LW', 68, 23]
     ] },
    { n: 'Sheffield United', s: 'SHU', c1: '#EE2737', c2: '#000000', str: 68, p: [
       ['Michael Cooper', 'GK', 71, 25], ['Jamie Shackleton', 'RB', 64, 25], ['Benjamin Mee', 'CB', 69, 35],
       ['Benjamin Godfrey', 'CB', 68, 27], ['Harrison Burrows', 'LB', 69, 23], ['Sydie Peck', 'DM', 65, 20],
       ['Oliver Arblaster', 'CM', 66, 21], ["Callum O'Hare", 'AM', 68, 27], ['Chiedozie Ogbene', 'RW', 69, 28],
       ['Daniel Ings', 'ST', 67, 32], ['Gustavo Hamer', 'LW', 72, 28], ['Adam Davies', 'GK', 63, 32],
       ['Japhet Tanganga', 'CB', 68, 26], ['Sam McCallum', 'LB', 64, 24], ['Thomas Davies', 'CM', 65, 27],
       ['Andre Brooks', 'RW', 64, 21], ['Tyrese Campbell', 'ST', 67, 25], ['Tahith Chong', 'AM', 66, 25]
     ] },
    { n: 'Lincoln City', s: 'LIN', c1: '#E30613', c2: '#FFFFFF', str: 66, p: [
       ['George Wickens', 'GK', 65, 23], ['Tendayi Darikwa', 'RB', 68, 33], ['Sonny Bradley', 'CB', 69, 33],
       ['Thomas Hamer', 'CB', 67, 25], ['Lee Montsma', 'CB', 67, 27], ['Conor McGrandles', 'DM', 65, 29],
       ['Thomas Bayliss', 'CM', 67, 26], ['Ivan Varfolomeev', 'DM', 65, 21], ['Oscar Thorn', 'AM', 60, 21],
       ['James Collins', 'ST', 68, 34], ['Adam Reach', 'LW', 68, 32], ['Zachary Jeacock', 'GK', 60, 24],
       ['Ryley Towler', 'CB', 67, 23], ['Adam Jackson', 'CB', 67, 31], ['Gbolahan Okewoye', 'CM', 54, 18],
       ['Reeco Hackett', 'LW', 68, 27], ['Benjamin House', 'ST', 66, 25], ['Dominic Jefferies', 'LW', 66, 23]
     ] },
    { n: 'Southampton', s: 'SOU', c1: '#D71920', c2: '#FFFFFF', str: 72, p: [
       ['Gavin Bazunu', 'GK', 72, 23], ['Elias Jelert', 'RB', 72, 22], ['Taylor Harwood-Bellis', 'CB', 73, 23],
       ['Jack Stephens', 'CB', 71, 31], ['Ryan Manning', 'LB', 72, 29], ['Caspar Jander', 'CM', 72, 22],
       ['Flynn Downes', 'CM', 73, 26], ['Finn Azaz', 'AM', 73, 24], ['Tom Fellows', 'RW', 71, 22],
       ['Adam Armstrong', 'ST', 72, 28], ['Léo Scienza', 'LW', 72, 26], ['Alex McCarthy', 'GK', 69, 35],
       ['Ronnie Edwards', 'DM', 69, 22], ['Welington', 'LB', 71, 24], ['Joseph Aribo', 'CM', 72, 28],
       ['Samuel Edozie', 'LW', 71, 22], ['Cameron Archer', 'ST', 71, 23], ['Mads Roerslev', 'RB', 72, 26]
     ] },
    { n: 'Stoke City', s: 'STK', c1: '#E03A3E', c2: '#FFFFFF', str: 71, p: [
       ['Viktor Johansson', 'GK', 74, 26], ['Junior Tchamadeu', 'RB', 68, 21], ['Aaron Cresswell', 'CB', 73, 35],
       ['Ashley Phillips', 'CB', 70, 20], ['É. Bocat', 'LB', 69, 25], ['Steven Nzonzi', 'DM', 72, 36],
       ['Lewis Baker', 'CM', 70, 30], ['Jamie Donley', 'AM', 67, 20], ['Million Manhoef', 'RW', 72, 23],
       ['Róbert Boženík', 'ST', 70, 25], ['Bae Jun Ho', 'LW', 71, 21], ['Jack Bonham', 'GK', 65, 31],
       ['Benjamin Wilmot', 'CB', 69, 25], ['Maksym Talovierov', 'CB', 69, 25], ['Tomáš Rigo', 'CM', 70, 23],
       ['Sorba Thomas', 'RW', 71, 26], ['Samuel Gallagher', 'ST', 69, 29], ['Benjamin Pearson', 'DM', 70, 30]
     ] },
    { n: 'Swansea City', s: 'SWA', c1: '#FFFFFF', c2: '#000000', str: 70, p: [
       ['Lawrence Vigouroux', 'GK', 70, 31], ['Joshua Key', 'RB', 68, 25], ['Cameron Burgess', 'CB', 72, 29],
       ['Benjamin Cabango', 'CB', 70, 25], ['Joshua Tymon', 'LB', 69, 26], ['Gonçalo Franco', 'DM', 71, 24],
       ['Malick Yalcouyé', 'CM', 70, 19], ['Liam Cullen', 'AM', 69, 26], ['M. Benson', 'RW', 72, 28],
       ['Adam Idah', 'ST', 72, 24], ['Eom Ji Sung', 'LW', 70, 23], ['Andrew Fisher', 'GK', 65, 27],
       ['Ricardo Santos', 'CB', 66, 30], ['Ishé Samuels-Smith', 'LB', 67, 19], ['Melker Widell', 'CM', 65, 23],
       ['Ronald', 'RW', 70, 24], ['Ž. Vipotnik', 'ST', 67, 23], ['Marko Stamenić', 'DM', 70, 23]
     ] },
    { n: 'Watford', s: 'WAT', c1: '#FBEE23', c2: '#ED2127', str: 70, p: [
       ['Egil Selvik', 'GK', 69, 27], ['Jeremy Ngakia', 'RB', 68, 24], ['Formose Mendy', 'CB', 70, 24],
       ['Matthew Pollock', 'CB', 70, 23], ['Marc Bola', 'LB', 71, 27], ['Nampalys Mendy', 'DM', 72, 33],
       ['Imrân Louza', 'CM', 72, 26], ['Edo Kayembe', 'CM', 70, 27], ['Kyeremeh Baah', 'RW', 67, 22],
       ['Luca Kjerrumgaard', 'ST', 64, 22], ['Giorgi Chakvetadze', 'LW', 73, 25], ['Nathan Baxter', 'GK', 65, 26],
       ['Kévin Keben', 'CB', 68, 21], ['Caleb Wiley', 'LB', 67, 20], ['Moussa Sissoko', 'CM', 71, 35],
       ['Nestory Irankunda', 'RW', 66, 19], ['Mamadou Doumbia', 'ST', 63, 19], ['Pierre Dwomoh', 'CM', 67, 21]
     ] },
    { n: 'West Bromwich Albion', s: 'WBA', c1: '#122F67', c2: '#FFFFFF', str: 69, p: [
       ['Joseph Wildsmith', 'GK', 68, 29], ['Alfie Gilchrist', 'RB', 70, 21], ['Christopher Mepham', 'CB', 72, 27],
       ['Krystian Bielik', 'CB', 71, 27], ['Callum Styles', 'LB', 69, 25], ['Alex Mowatt', 'DM', 72, 30],
       ['Isaac Price', 'CM', 68, 21], ['Tammer Bany', 'AM', 63, 21], ['Jed Wallace', 'AM', 69, 31],
       ['Joshua Maja', 'ST', 71, 26], ['Samuel Iling-Junior', 'LW', 73, 21], ['James Griffiths', 'GK', 64, 23],
       ['Nathaniel Phillips', 'CB', 69, 28], ['Charles Taylor', 'LB', 69, 31], ['Tobias Collyer', 'DM', 69, 21],
       ['Michael Johnston', 'LW', 71, 26], ['Daryl Dike', 'ST', 69, 25], ['Karlan Grant', 'LW', 70, 27]
     ] },
    { n: 'Wrexham', s: 'WRE', c1: '#E30613', c2: '#FFFFFF', str: 66, p: [
       ['Daniel Ward', 'GK', 65, 32], ['Issa Kaboré', 'RB', 68, 24], ['Conor Coady', 'CB', 67, 32],
       ['Craig Doyle', 'CB', 67, 21], ['Liberato Cacace', 'LB', 67, 24], ['Benjamin Sheaf', 'DM', 69, 27],
       ["Lewis O'Brien", 'CM', 67, 26], ['Joshua Windass', 'AM', 67, 31], ['Samuel Smith', 'ST', 63, 27],
       ['Kieffer Moore', 'ST', 67, 32], ['Nathan Broadhead', 'LW', 68, 27], ['Arthur Okonkwo', 'GK', 64, 23],
       ['Dominic Hyam', 'CB', 66, 29], ['Joseph McClean', 'LB', 63, 36], ['Oliver Rathbone', 'CM', 64, 28],
       ['Ryan Longman', 'LW', 62, 24], ['Ryan Hardie', 'ST', 64, 28], ['George Dobson', 'DM', 64, 27]
     ] }
  ,
    {
      n: 'Burnley', s: 'BUR', c1: '#6C1D45', c2: '#99D6EA', p: [
       ['Martin Dúbravka', 'GK', 73, 36], ['Kyle Walker', 'RB', 75, 35], ['Maxime Estève', 'CB', 72, 23],
       ['Jordan Beyer', 'CB', 70, 25], ['Quilindschy Hartman', 'LB', 73, 23], ['Florentino', 'DM', 76, 25],
       ['Hannibal', 'CM', 70, 22], ['Jon Cullen', 'DM', 72, 29], ['Marcus Edwards', 'RW', 72, 26],
       ['Zeki Amdouni', 'ST', 71, 24], ['Jacob Larsen', 'LW', 70, 26], ['Václav Hladký', 'GK', 65, 34],
       ['Joseph Worrall', 'DM', 69, 28], ['Lucas Pires', 'LB', 70, 24], ['Jacob-Heron Laurent', 'DM', 69, 30],
       ['Loum Tchaouna', 'RW', 65, 21], ['Zian Flemming', 'ST', 69, 26], ['Connor Roberts', 'RB', 71, 29]
     ]
    },
    {
      n: 'West Ham United', s: 'WHU', c1: '#7A263A', c2: '#1BB1E7', p: [
       ['Aréola Areola', 'GK', 72, 32], ['Aaron Wan-Bissaka', 'RB', 75, 27], ['Jean-Clair Todibo', 'CB', 73, 25],
       ['Maximilian Kilman', 'CB', 72, 28], ['El Diouf', 'LB', 70, 20], ['Tomáš Souček', 'DM', 73, 30],
       ['Lucas Paquetá', 'CM', 75, 27], ['Mateus Fernandes', 'AM', 71, 20], ['Jarrod Bowen', 'RW', 78, 28],
       ['Niclas Füllkrug', 'ST', 74, 32], ['Crysencio Summerville', 'LW', 71, 23], ['Mads Hermansen', 'GK', 71, 24],
       ['Konstantinos Mavropanos', 'CB', 71, 27], ['Oliver Scarles', 'LB', 65, 19], ['James Ward-Prowse', 'CM', 72, 30],
       ['Luis Guilherme', 'RW', 66, 19], ['Callum Wilson', 'ST', 73, 33], ['Guido Rodríguez', 'DM', 72, 31]
     ]
    },
    {
      n: 'Wolverhampton', s: 'WOL', c1: '#FDB913', c2: '#231F20', p: [
       ['José Sá', 'GK', 75, 32], ['Kieran Trippier', 'RB', 78, 34], ['Hugo Bueno', 'CB', 72, 22],
       ['Yerson Mosquera', 'CB', 70, 24], ['Toti Gomes', 'LB', 67, 28], ['Marshall Munetsi', 'DM', 74, 29],
       ['André', 'CM', 76, 23], ['Jordan James', 'AM', 67, 20], ['Raúl Jiménez', 'RW', 75, 34],
       ['Adam Armstrong', 'ST', 71, 28], ['Bertrand Traoré', 'LW', 73, 29], ['João Virgínia', 'GK', 69, 25],
       ['Ghislain Konan', 'CB', 70, 29], ['Nasser Djiga', 'LB', 68, 22], ['Boubacar Traoré', 'CM', 69, 23],
       ['Sean Neave', 'RW', 62, 30], ['Rafiki Saïd', 'ST', 67, 25], ['Ladislav Krejčí', 'CB', 76, 26],
       ['Tommy Doyle', 'CM', 60, 31], ['Rodrigo Gomes', 'ST', 70, 21], ['Tawanda Chirewa', 'ST', 62, 21],
       ['John Ruddy', 'GK', 66, 38]
     ]
    }
  ]
};

window.LEAGUES.laliga2 = {
  id: 'laliga2', name: 'LaLiga Hypermotion', country: 'España', tier: 2, ucl: 2, rel: 4,
  pool: 'es', squadSize: 17, teams: [
    { n: 'Albacete', s: 'ALB', c1: '#FFFFFF', c2: '#0057B8', str: 67, p: [
       ['Raúl Lizoain', 'GK', 68, 34], ['Fran Gámez', 'RB', 68, 33], ['Vallejo', 'CB', 71, 28],
       ['Pepe Sánchez', 'CB', 67, 25], ['Carlos Neva', 'LB', 70, 29], ['Capi', 'DM', 59, 18],
       ['Agus Medina', 'CM', 69, 30], ['Javi Villar', 'CM', 65, 22], ['Víctor Valverde', 'AM', 63, 23],
       ['Jefté', 'ST', 70, 31], ['Puertas', 'LW', 71, 33], ['Diego Mariño', 'GK', 67, 35],
       ['Jon García', 'CB', 67, 34], ['Jonathan Gómez', 'LB', 63, 21], ['Riki', 'CM', 69, 27],
       ['Morci', 'LW', 70, 26], ['Higinio', 'ST', 70, 31], ['Lazo', 'LW', 67, 29]
     ] },
    { n: 'UD Almería', s: 'ALM', c1: '#E3242B', c2: '#FFFFFF', str: 69, p: [
       ['Andrés Fernández', 'GK', 70, 38], ['Luna', 'RB', 66, 22], ['Aridane', 'CB', 67, 36],
       ['Nélson Monte', 'CB', 66, 29], ['Álex Muñoz', 'LB', 69, 30], ['Dion Lopy', 'DM', 69, 23],
       ['André Horta', 'CM', 71, 28], ['Arribas', 'AM', 70, 23], ['Léo Baptistão', 'RW', 69, 32],
       ['Patrick Soko', 'ST', 69, 27], ['Embarba', 'LW', 70, 33], ['Fernando', 'GK', 68, 35],
       ['Chumi', 'CB', 66, 26], ['Álex Centelles', 'LB', 68, 25], ['Lucas Robertone', 'CM', 68, 28],
       ['Arnau Puigmal', 'RW', 68, 24], ['Thalys', 'AM', 64, 20], ['Nico Melamed', 'LW', 69, 24]
     ] },
    { n: 'FC Andorra', s: 'AND', c1: '#0033A0', c2: '#FFE500', str: 61, p: [
       ['Nicolás Ratti', 'GK', 64, 31], ['Álex Petxa', 'RB', 62, 28], ['Diego Alende', 'CB', 62, 27],
       ['Antal Yaakobishvili', 'CB', 60, 20], ['Imanol', 'LB', 65, 25], ['Efe Akman', 'DM', 57, 19],
       ['Sergio Molina', 'CM', 61, 29], ['Álvaro Martín', 'AM', 57, 24], ['Álex Calvo', 'RW', 61, 21],
       ['Manu Nieto', 'ST', 62, 27], ['Minsu', 'LW', 62, 19], ['Owono', 'GK', 62, 24],
       ['Gael Alonso', 'DM', 59, 22], ['Martí Vilà', 'LB', 60, 26], ['Marc Doménech', 'CM', 57, 22],
       ['Villahermosa', 'LW', 60, 24], ['Lautaro', 'ST', 60, 24], ['Thomas Carrique', 'RB', 60, 26]
     ] },
    { n: 'Burgos CF', s: 'BUR', c1: '#FFFFFF', c2: '#000000', str: 65, p: [
       ['Jesús Ruiz', 'GK', 67, 28], ['Aitor Buñuel', 'RB', 62, 27], ['Aitor Córdoba', 'CB', 68, 30],
       ['Sergio González', 'CB', 64, 28], ['Florian Miguel', 'LB', 66, 28], ['Atienza', 'DM', 66, 26],
       ['Kévin Appin', 'CM', 64, 27], ['Curro Sánchez', 'AM', 66, 29], ['Mateo Mejía', 'RW', 57, 22],
       ['Mollejo', 'ST', 66, 24], ['Iñigo Córdoba', 'LW', 67, 28], ['Cantero', 'GK', 66, 30],
       ['Gregorio Sierra', 'CB', 63, 32], ['Brais Martínez', 'LB', 62, 23], ['David González', 'CM', 61, 23],
       ['Fermín García', 'AM', 55, 21], ['Fer Niño', 'ST', 66, 24], ['Chapela', 'LW', 65, 26]
     ] },
    { n: 'Cádiz CF', s: 'CAD', c1: '#FFE500', c2: '#0057B8', str: 66, p: [
       ['David Gil', 'GK', 66, 31], ['Iza Carcelén', 'RB', 66, 32], ['Luís Hernández', 'CB', 69, 36],
       ['Fali', 'CB', 65, 31], ['Climent', 'LB', 64, 23], ['Moussa Diakité', 'DM', 61, 21],
       ['Álex Fernández', 'CM', 68, 32], ['Sergio Ortuño', 'CM', 64, 26], ['Suso', 'RW', 73, 31],
       ['Roger Martí', 'ST', 64, 34], ['Ontiveros', 'LW', 69, 27], ['Víctor Aznar', 'GK', 60, 22],
       ['Bojan Kovačević', 'CB', 64, 21], ['Raúl Pereira', 'LB', 58, 20], ['Youssouf Diarra', 'CM', 64, 26],
       ['Iuri Tabatadze', 'RW', 62, 25], ['Dawda Camara', 'AM', 61, 22], ['Brian Ocampo', 'LW', 66, 26]
     ] },
    { n: 'CD Castellón', s: 'CAS', c1: '#000000', c2: '#FFFFFF', str: 62, p: [
       ['Abedzadehامیر Abedzadeh', 'GK', 63, 32], ['Jérémy Mellot', 'RB', 64, 31], ['Fabrizio Brignani', 'CB', 64, 27],
       ['Alberto Jiménez', 'CB', 62, 32], ['Lucas Alcázar', 'LB', 59, 22], ['Diego Barri', 'DM', 60, 29],
       ['Gerenabarrena', 'CM', 60, 22], ['Adam Jakobsen', 'AM', 63, 26], ['Álex Calatrava', 'RW', 66, 25],
       ['Israel Suero', 'ST', 64, 31], ['Brian Cipenga', 'AM', 61, 27], ['Romain Matthys', 'GK', 58, 26],
       ['Óscar Gil', 'CB', 61, 30], ['Tincho', 'LB', 55, 22], ['Marc-Olivier Doué', 'DM', 59, 24],
       ['Kenneth Mamah', 'RW', 63, 27], ['Douglas Aurélio', 'ST', 62, 26], ['Awer Mabil', 'RW', 62, 29]
     ] },
    { n: 'AD Ceuta', s: 'CEU', c1: '#FFFFFF', c2: '#000000', str: 63, p: [
       ['Pedro López', 'GK', 61, 30], ['Almenara', 'RB', 60, 28], ['Diego González', 'CB', 63, 26],
       ['Carlos Hernández', 'CB', 61, 34], ['José Matos', 'LB', 64, 30], ['Yves Bodiger', 'DM', 64, 30],
       ['Cristian', 'CM', 62, 29], ['Rubén Díez', 'AM', 62, 31], ['Anuar', 'RW', 65, 30],
       ['Juanto Ortuño', 'ST', 65, 33], ['Konrad de la Fuente', 'LW', 62, 23], ['Guille Vallejo', 'GK', 61, 30],
       ['Yago Cantero', 'CB', 60, 25], ['Redru', 'LB', 61, 28], ['Aboubacar Bassinga', 'CM', 58, 19],
       ['Salvi Sánchez', 'RW', 65, 34], ['Samuel Obeng', 'ST', 64, 28], ['Aisar', 'AM', 61, 23]
     ] },
    { n: 'Córdoba CF', s: 'COR', c1: '#00A94F', c2: '#FFFFFF', str: 65, p: [
       ['Carlos Marín', 'GK', 66, 28], ['Albarrán', 'RB', 64, 31], ['Rubén Alves', 'CB', 66, 30],
       ['Xavi Sintes', 'CB', 64, 23], ['Vilarrasa', 'LB', 65, 25], ['Théo', 'CM', 62, 23],
       ['Isma Ruiz', 'CM', 66, 24], ['Dalisson', 'AM', 60, 25], ['Carracedo', 'RW', 68, 29],
       ['Sergi Guardiola', 'ST', 66, 34], ['Jacobo González', 'LW', 66, 28], ['Iker Álvarez', 'GK', 63, 23],
       ['Ferry Fomeyem', 'DM', 62, 25], ['Alcedo', 'LB', 62, 24], ['Pedro Ortiz', 'CM', 66, 24],
       ['Diego Bri', 'RW', 58, 22], ['Nikolay Obolskii', 'ST', 63, 28], ['Carlos Isaac', 'RB', 64, 27]
     ] },
    { n: 'Cultural Leonesa', s: 'CUL', c1: '#FFFFFF', c2: '#8B1F2F', str: 64, p: [
       ['Edgar Badia', 'GK', 68, 33], ['Iván Calero', 'RB', 63, 30], ['Tomás Ribeiro', 'CB', 67, 26],
       ['Satrústegui', 'CB', 62, 34], ['Roger Hinojo', 'LB', 60, 20], ['Thiago Ojeda', 'DM', 61, 22],
       ['Yayo', 'CM', 62, 20], ['Lucas Ribeiro', 'AM', 65, 26], ['Rubén Sobrino', 'RW', 67, 33],
       ['Daniel Paraschiv', 'ST', 65, 26], ['Luis Chacón', 'LW', 65, 25], ['Miguel Bañuz', 'GK', 61, 32],
       ['Quique Fornos', 'CB', 61, 28], ['Juan Larios', 'CM', 56, 21], ['Selu Diallo', 'CM', 57, 21],
       ['Jordi Mboula', 'RW', 66, 26], ['Manu Justo', 'ST', 63, 29], ['Víctor García', 'RB', 63, 31]
     ] },
    { n: 'SD Eibar', s: 'EIB', c1: '#0057B8', c2: '#E3242B', str: 65, p: [
       ['Magunagoitia', 'GK', 65, 24], ['Cubero', 'RB', 63, 25], ['Arbilla', 'CB', 65, 38],
       ['Jair Amador', 'CB', 63, 35], ['Leonardo Buta', 'LB', 64, 23], ['Nolaskoain', 'DM', 67, 26],
       ['Olaetxea', 'CM', 66, 32], ['Javi Martínez', 'AM', 63, 25], ['Corpas', 'RW', 67, 33],
       ['Jon Bautista', 'ST', 66, 29], ['Adu Ares', 'LW', 63, 23], ['Luis López', 'GK', 58, 24],
       ['Marco Moreno', 'CB', 63, 24], ['Hodei', 'LB', 62, 21], ['Aleix Garrido', 'CM', 61, 21],
       ['Alkain', 'RW', 65, 28], ['Javi Martón', 'ST', 63, 26], ['Sergio Álvarez', 'DM', 65, 33]
     ] },
    { n: 'Granada CF', s: 'GRA', c1: '#E3242B', c2: '#FFFFFF', str: 68, p: [
       ['Luca Zidane', 'GK', 70, 27], ['Pau Casadesús', 'RB', 63, 22], ['Loïc Williams', 'CB', 69, 23],
       ['Manu Lama', 'CB', 67, 24], ['Baïla Diallo', 'LB', 63, 24], ['Sergio Ruiz', 'DM', 70, 30],
       ['Rubén Alcaraz', 'CM', 70, 34], ['Pedro Alemañ', 'AM', 61, 22], ['Álex Sola', 'RW', 71, 26],
       ['Jorge Pascual', 'ST', 67, 22], ['José Arnáiz', 'LW', 69, 30], ['Astralaga', 'GK', 61, 21],
       ['Oscar Naasei Oppong', 'CB', 60, 20], ['Hormigo', 'LB', 63, 22], ['Martin Hongla', 'CM', 70, 27],
       ['Pablo Sáenz', 'RW', 65, 24], ['Mohamed Bouldini', 'ST', 65, 29], ['Manu Trigueros', 'CM', 70, 33]
     ] },
    { n: 'CD Eldense', s: 'ELD', c1: '#0057B8', c2: '#FFFFFF', str: 62, p: [
       ['Ramon Vila', 'GK', 62, 29], ['Iker Recio', 'RB', 61, 24], ['Juan Larios', 'CB', 57, 21],
       ['Floris Smand', 'CB', 60, 21], ['Álex Serra', 'LB', 63, 20], ['Borja Calvo', 'DM', 61, 31],
       ['Marcos Bustillo', 'CM', 64, 33], ['Roberto López', 'AM', 67, 25], ['Jorge Rastrojo', 'RW', 61, 32],
       ['Mariano Carmona', 'ST', 61, 25], ['Fidel Chaves', 'LW', 65, 20], ['Juan Palomares', 'GK', 56, 31],
       ['Jesús Clemente', 'CB', 57, 26], ['David Ruiz', 'LB', 62, 21], ['Justin Smith', 'CM', 63, 22],
       ['Manu Nieto', 'RW', 65, 27], ['Pau Cabanes', 'ST', 63, 20], ['Julien Yanda', 'CB', 59, 24],
       ['Carlos Guirao', 'CM', 55, 30], ['Guille Macho', 'CM', 57, 23], ['Alejandro Ibarrondo', 'ST', 54, 20],
       ['Waldo Rubio', 'ST', 57, 21]
     ] },
    { n: 'UD Las Palmas', s: 'LPA', c1: '#FFE500', c2: '#0057B8', str: 68, p: [
       ['Dinko Horkaš', 'GK', 69, 26], ['Viti Rozada', 'RB', 69, 27], ['Álex Suárez', 'CB', 69, 32],
       ['Herzog', 'CB', 67, 21], ['Mika Mármol', 'LB', 71, 24], ['Iñaki González', 'DM', 64, 20],
       ['Kirian', 'CM', 72, 29], ['Jonathan Viera', 'AM', 68, 35], ['Sandro', 'RW', 71, 29],
       ['Jesé', 'AM', 64, 32], ['Manu Fuster', 'LW', 70, 27], ['Caro', 'GK', 68, 31],
       ['Sergio Barcia', 'CB', 64, 24], ['Cristian Gutiérrez', 'LB', 66, 24], ['Enzo Loiodice', 'CM', 68, 24],
       ['Pejiño', 'RW', 64, 28], ['Marc Cardona', 'ST', 64, 29], ['Jeremía Recoba', 'LW', 67, 21]
     ] },
    { n: 'CD Leganés', s: 'LEG', c1: '#004C97', c2: '#FFFFFF', str: 67, p: [
       ['Juan Soriano', 'GK', 71, 27], ['Rubén Peña', 'RB', 68, 33], ['Jorge Sáenz', 'CB', 67, 28],
       ['Lalo Aguilar', 'CB', 66, 23], ['Franquesa', 'LB', 68, 28], ['Amadou Diawara', 'DM', 64, 27],
       ['Seydouba Cisse', 'CM', 69, 24], ['Roberto López', 'AM', 65, 25], ['Juan Cruz', 'RW', 72, 25],
       ['Óscar Plano', 'ST', 66, 34], ['Duk', 'LW', 64, 25], ['San Román', 'GK', 65, 27],
       ['Ignasi Miquel', 'CB', 64, 32], ['Rubén Pulido', 'CB', 63, 24], ['Melero', 'CM', 68, 31],
       ['Naim García', 'AM', 63, 23], ['Miguel', 'ST', 66, 25], ['Diego García', 'ST', 65, 25]
     ] },
    { n: 'CE Sabadell', s: 'SAB', c1: '#FFFFFF', c2: '#0057B8', str: 63, p: [
       ['Diego Fuoli', 'GK', 61, 27], ['Pipa', 'RB', 62, 30], ['Genar Fornés', 'CB', 63, 22],
       ['Miki Codina', 'CB', 66, 28], ['Edgar González', 'LB', 62, 29], ['Arthur Bonaldo', 'DM', 62, 24],
       ['Pere Pons', 'CM', 65, 33], ['Óscar Sanz', 'AM', 63, 26], ['Ton Ripoll', 'RW', 62, 23],
       ['Ángel Baena', 'ST', 63, 24], ['Javi López-Pinto', 'LW', 61, 29], ['José Ortega', 'GK', 60, 22],
       ['Kaiser', 'CB', 58, 25], ['José Luis Catalá', 'LB', 61, 26], ['Urri', 'CM', 58, 21],
       ['Gastón Valles', 'RW', 60, 32], ['Nicholas Gioacchini', 'ST', 58, 20], ['Nikolay Obolskiy', 'CB', 66, 28],
       ['Yanis Rahmani', 'ST', 57, 20], ['Alain Ribeiro', 'CM', 57, 29], ['Quadri Liameed', 'CM', 57, 33],
       ['Joel Priego', 'CM', 58, 25]
     ] },
    { n: 'Real Sociedad B', s: 'RSB', c1: '#0067B1', c2: '#FFFFFF', str: 60, p: [
       ['Fraga', 'GK', 61, 22], ['Rupérez', 'RB', 61, 22], ['Luken Beitia', 'CB', 61, 21],
       ['Peru Rodríguez', 'CB', 59, 23], ['Jon Balda', 'LB', 60, 23], ['Zac Shuaib', 'DM', 57, 18],
       ['Mikel Rodríguez', 'CM', 62, 23], ['Astiazarán', 'AM', 57, 19], ['Job Nguono Ochieng', 'RW', 60, 22],
       ['Mariezkurrena', 'ST', 62, 20], ['Alex Marchal', 'AM', 59, 17], ['Arana', 'GK', 60, 23],
       ['Kazunari Kita', 'CB', 59, 19], ['Unax Agote', 'LB', 57, 22], ['Tomy Carbonell', 'CM', 60, 20],
       ['Dani Díaz', 'RW', 60, 19], ['Sydney Osazuwa', 'ST', 59, 18], ['Dadie', 'RW', 59, 22]
     ] },
    { n: 'Sporting de Gijón', s: 'SPG', c1: '#E3242B', c2: '#FFFFFF', str: 68, p: [
       ['Rubén Yáñez', 'GK', 71, 31], ['Guille Rosas', 'RB', 68, 25], ['Eric Curbelo', 'CB', 68, 31],
       ['Pablo Vázquez', 'CB', 68, 30], ['Pablo García', 'LB', 67, 25], ['Nacho Martín', 'DM', 66, 23],
       ['César Gelabert', 'CM', 70, 24], ['Enol Prendes', 'AM', 61, 21], ['Jonathan Dubasin', 'RW', 71, 25],
       ['Juan Otero', 'ST', 71, 30], ['Ó. Cortés', 'LW', 68, 21], ['Christian Sánchez', 'GK', 64, 25],
       ['Lucas Perrin', 'CB', 67, 26], ['Kevin', 'RB', 67, 32], ['Àlex Corredera', 'CM', 69, 29],
       ['Gaspar Campos', 'LW', 67, 25], ['Josué Caicedo', 'ST', 64, 27], ['Diego Sánchez', 'DM', 66, 21]
     ] },
    { n: 'Real Valladolid', s: 'VLL', c1: '#5B2C83', c2: '#FFFFFF', str: 67, p: [
       ['Guilherme Fernandes', 'GK', 64, 24], ['Trilli', 'RB', 61, 22], ['Javi Sánchez', 'CB', 69, 28],
       ['Pablo Tomeo', 'CB', 68, 25], ['Guille Bueno', 'LB', 65, 22], ['Stanko Jurić', 'DM', 67, 28],
       ['Mathis Lachuer', 'CM', 67, 24], ['Chuki', 'AM', 65, 21], ['Peter', 'RW', 68, 22],
       ['Latasa', 'ST', 67, 24], ['Julien Ponceau', 'LW', 71, 24], ['Aceves', 'GK', 63, 21],
       ['David Torres', 'CB', 64, 22], ['Iván Garriel', 'LB', 61, 20], ['Meseguer', 'CM', 67, 26],
       ['Iván Alejo', 'AM', 65, 30], ['Marcos André', 'ST', 66, 28], ['Amath Ndiaye', 'LW', 69, 28]
     ] },
    { n: 'CD Tenerife', s: 'TEN', c1: '#FFFFFF', c2: '#0057B8', str: 67, p: [
       ['Carlos Abad', 'GK', 69, 26], ['Iñaki Sáenz', 'RB', 66, 30], ['Samuel Camille', 'CB', 66, 21],
       ['Alberto Jiménez', 'CB', 67, 32], ['Carlos Ruiz', 'LB', 67, 29], ['Vitolo', 'DM', 67, 27],
       ['Bryan Acosta', 'CM', 70, 31], ['Suso', 'AM', 64, 24], ['Juan Villar', 'RW', 67, 24],
       ['Filip Malbašić', 'ST', 66, 26], ['Tyronne', 'LW', 66, 25], ['Dani Hernández', 'GK', 60, 32],
       ['Lucas Aveldaño', 'CB', 63, 23], ['Jorge Sáenz', 'LB', 71, 28], ['Aitor Sanz', 'CM', 63, 28],
       ['Samuele Longo', 'RW', 63, 25], ['Víctor', 'ST', 64, 31], ['Raúl Cámara', 'CB', 61, 29],
       ['Juan Carlos Real', 'CM', 60, 23], ['Paco Montañés', 'CM', 58, 23], ['Brian Martín', 'ST', 58, 30],
       ['Luis Pérez', 'CB', 70, 30]
     ] }
  ,
    {
      n: 'Girona FC', s: 'GIR', c1: '#CD2534', c2: '#FFFFFF', p: [
       ['Dominik Livaković', 'GK', 75, 30], ['Arnau Martínez', 'RB', 74, 22], ['Daley Blind', 'CB', 72, 35],
       ['Angel Witsel', 'CB', 72, 36], ['Álex Moreno', 'LB', 72, 32], ['Jhon Solís', 'DM', 66, 20],
       ['Thomas Lemar', 'CM', 72, 29], ['de van de Beek', 'AM', 71, 28], ['Viktor Tsygankov', 'RW', 74, 27],
       ['Cristhian Stuani', 'ST', 72, 38], ['Bryan Gil', 'LW', 73, 24], ['Paulo Gazzaniga', 'GK', 74, 33],
       ['David López', 'CB', 72, 35], ['Francés', 'CB', 70, 22], ['Iván Martín', 'CM', 72, 26],
       ['Portu', 'RW', 71, 33], ['VanatВанат Vanat', 'ST', 71, 23], ['Azzedine Ounahi', 'CM', 71, 25]
     ]
    },
    {
      n: 'RCD Mallorca', s: 'MLL', c1: '#E20613', c2: '#000000', p: [
       ['Leo Román', 'GK', 70, 24], ['Maffeo', 'RB', 71, 27], ['Raíllo', 'CB', 74, 33],
       ['Martin Valjent', 'CB', 70, 29], ['Johan Mojica', 'LB', 71, 32], ['Samú Costa', 'DM', 71, 24],
       ['Manu Morlanes', 'CM', 70, 26], ['Dani Rodríguez', 'AM', 69, 37], ['Takuma Asano', 'RW', 68, 30],
       ['Vedat Muriqi', 'ST', 72, 31], ['Sergi Darder', 'LW', 74, 31], ['Pichu Cuéllar', 'GK', 60, 41],
       ['Marash Kumbulla', 'CB', 70, 25], ['Toni Lato', 'LB', 66, 27], ['Omar Mascarell', 'CM', 68, 32],
       ['Antonio Sánchez', 'RW', 66, 28], ['Abdón Prats', 'ST', 66, 32], ['Pablo Torre', 'AM', 67, 22]
     ]
    },
    {
      n: 'Real Oviedo', s: 'OVI', c1: '#004B9D', c2: '#FFFFFF', p: [
       ['Aarón', 'GK', 69, 29], ['Nacho Vidal', 'RB', 67, 30], ['David Carmo', 'CB', 70, 25],
       ['Eric Bailly', 'CB', 68, 31], ['Javi López', 'LB', 67, 23], ['Santiago Colombatto', 'DM', 67, 28],
       ['Leander Dendoncker', 'CM', 69, 30], ['Santi Cazorla', 'AM', 69, 40], ['Haissem Hassan', 'RW', 66, 23],
       ['Salomón Rondón', 'ST', 68, 35], ['Josip Brekalo', 'LW', 69, 27], ['Horațiu Moldovan', 'GK', 65, 27],
       ['Dani Calvo', 'CB', 67, 31], ['Rahim Alhassane', 'LB', 63, 23], ['Alberto Reina', 'CM', 67, 27],
       ['Mouhamed Gueye', 'AM', 55, 20], ['Federico Viñas', 'ST', 66, 27], ['Ilyas Chaira', 'LW', 66, 24]
     ]
    }
  ]
};

window.LEAGUES.serieb = {
  id: 'serieb', name: 'Serie B', country: 'Italia', tier: 2, ucl: 2, rel: 4,
  pool: 'it', squadSize: 17, teams: [
    { n: 'Avellino', s: 'AVE', c1: '#00A94F', c2: '#FFFFFF', str: 62, p: [
       ['Antony Iannarilli', 'GK', 61, 34], ['Tommaso Cancellotti', 'RB', 60, 33], ['Lorenco Šimić', 'CB', 62, 28],
       ['Michele Rigione', 'CB', 61, 34], ['Andrea Cagnano', 'LB', 59, 27], ['Luca Palmiero', 'DM', 60, 29],
       ['Dimitrios Sounas', 'CM', 61, 30], ['Roberto Insigne', 'AM', 66, 31], ["Luca D'Andrea", 'RW', 58, 20],
       ['Gennaro Tutino', 'ST', 66, 28], ['Facundo Lescano', 'ST', 62, 28], ['Leonardo Marson', 'GK', 57, 27],
       ['Alessandro Fontanarosa', 'CB', 59, 22], ['Alessandro Milani', 'LB', 55, 20], ['Marco Armellino', 'CM', 60, 35],
       ['Cosimo Patierno', 'ST', 61, 34], ['Tommaso Biasci', 'ST', 62, 30], ['Giuseppe Panico', 'AM', 62, 28]
     ] },
    { n: 'Arezzo', s: 'ARE', c1: '#E30613', c2: '#FFFFFF', str: 63, p: [
       ['Marco Pissardo', 'GK', 59, 27], ['Luca Mosti', 'RB', 65, 22], ['Samuele Sereni', 'CB', 64, 26],
       ['Ryan Nolan', 'CB', 61, 22], ['Diego Borghini', 'LB', 63, 27], ['Alberto Picchi', 'DM', 65, 25],
       ['Niccolò Belloni', 'CM', 63, 30], ['Fabio Foglia', 'AM', 62, 26], ['Antonio Mesina', 'RW', 64, 25],
       ['Aniello Cutolo', 'ST', 63, 30], ['Andrea Zini', 'LW', 62, 32], ['Riccardo Daga', 'GK', 60, 28],
       ['Alessio Luciani', 'CB', 61, 21], ['Marco Barbini', 'LB', 61, 20], ['Simone Madonna', 'CM', 60, 20],
       ['Alessandro Piu', 'RW', 58, 25], ['Gabriele Gori', 'ST', 60, 27], ['Lorenzo Burzigotti', 'CB', 57, 32],
       ['Marco Baldan', 'CB', 57, 25], ['Niccolò Corrado', 'CB', 67, 25], ['Adriano Sbarzella', 'CM', 58, 24],
       ['Giuseppe Caso', 'CM', 69, 26]
     ] },
    { n: 'Carrarese', s: 'CAR', c1: '#FFE500', c2: '#0057B8', str: 61, p: [
       ['Vincenzo Fiorillo', 'GK', 62, 35], ['Filippo Oliana', 'CB', 61, 26], ['Bartosz Salamon', 'CB', 62, 34],
       ['Julián Illanes', 'CB', 62, 28], ['Eliman Cham', 'LB', 55, 19], ['Leonardo Capezzi', 'CM', 59, 30],
       ['Nicolás Schiavi', 'CM', 65, 30], ['Alessandro Arena', 'AM', 60, 24], ['Simone Zanon', 'RW', 63, 23],
       ['Mattia Finotto', 'ST', 62, 32], ['Manuel Cicconi', 'LW', 64, 28], ['Marco Bleve', 'GK', 60, 29],
       ['Marco Imperiale', 'CB', 61, 26], ['Fabio Ruggeri', 'CB', 57, 20], ['Emanuele Zuelli', 'CM', 60, 23],
       ['Devid Bouah', 'AM', 59, 23], ['Ernesto Torregrossa', 'ST', 62, 33], ['Fabio Abiuso', 'ST', 61, 22]
     ] },
    { n: 'Catanzaro', s: 'CAT', c1: '#FFE500', c2: '#E3242B', str: 64, p: [
       ['Mirko Pigliacelli', 'GK', 67, 32], ['Tommaso Cassandro', 'RB', 61, 25], ['Nicolò Brighenti', 'CB', 62, 35],
       ['Matias Antonini', 'CB', 60, 27], ['Gianluca Di Chiara', 'LB', 64, 31], ['Jacopo Petriccione', 'DM', 64, 30],
       ['Marco Pompetti', 'CM', 64, 25], ['Alphadjo Cissè', 'AM', 59, 18], ['Rémi Oudin', 'RW', 64, 28],
       ['Pietro Iemmello', 'ST', 67, 33], ['Federico Di Francesco', 'LW', 69, 31], ['Christian Marietta', 'GK', 56, 23],
       ['Ervin Bashi', 'CB', 60, 19], ['Davide Bettella', 'CB', 60, 25], ['Simone Pontisso', 'CM', 63, 28],
       ['Costantino Favasuli', 'AM', 60, 21], ['Luca Pandolfi', 'ST', 63, 27], ["Marco D'Alessandro", 'LW', 65, 34]
     ] },
    { n: 'Cesena', s: 'CES', c1: '#FFFFFF', c2: '#000000', str: 66, p: [
       ['Jonathan Klinsmann', 'GK', 65, 28], ['Emanuele Adamo', 'RB', 66, 26], ['Giovanni Zaro', 'CB', 69, 31],
       ['Massimiliano Mangraviti', 'CB', 66, 27], ['Gianluca Frabotta', 'LB', 66, 26], ['Michele Castagnetti', 'DM', 68, 35],
       ['Dimitri Bisoli', 'CM', 70, 31], ['Tommaso Arrigoni', 'CM', 65, 31], ['Riccardo Ciervo', 'RW', 64, 23],
       ['Cristian Shpendi', 'ST', 68, 22], ['Siren Diao', 'ST', 62, 20], ['Alessandro Siano', 'GK', 54, 24],
       ['Andrea Ciofi', 'CB', 65, 26], ['Raffaele Celia', 'LB', 63, 26], ['Simone Bastoni', 'CM', 69, 28],
       ['Jalen Blesa', 'ST', 56, 24], ['Marco Olivieri', 'ST', 63, 26], ['Tommaso Berti', 'CM', 64, 21]
     ] },
    { n: 'Empoli', s: 'EMP', c1: '#0057B8', c2: '#FFFFFF', str: 67, p: [
       ['Andrea Fulignati', 'GK', 69, 30], ['Tyronne Ebuehi', 'RB', 70, 29], ['Marco Curto', 'CB', 68, 26],
       ['Matteo Lovato', 'CB', 67, 25], ['Brando Moruzzi', 'LB', 65, 20], ['Gerard Yepes', 'DM', 70, 22],
       ['Andrea Ghion', 'CM', 68, 25], ['Edoardo Saporiti', 'AM', 64, 23], ['Joseph Ceesay', 'RW', 66, 27],
       ['Pietro Pellegri', 'ST', 67, 24], ['Rareş Ilie', 'LW', 68, 22], ['Samuele Perisan', 'GK', 68, 27],
       ['Nosa Obaretin', 'CB', 65, 22], ['Franco Carboni', 'CM', 62, 22], ['Nicolas Haas', 'CM', 67, 29],
       ['Stiven Shpendi', 'ST', 64, 22], ['Marco Nasti', 'ST', 65, 21], ['Salvatore Elia', 'RB', 68, 26]
     ] },
    { n: 'Virtus Entella', s: 'ENT', c1: '#0057B8', c2: '#FFE500', str: 62, p: [
       ['Federico Del Frate', 'GK', 63, 29], ['Antonio Boccadamo', 'RB', 61, 25], ['Luca Parodi', 'CB', 61, 30],
       ['Ivan Marconi', 'CB', 61, 35], ['Stefano Di Mario', 'LB', 62, 20], ['Marco Nichetti', 'DM', 60, 28],
       ['Ahmed Benali', 'CM', 65, 33], ['Nermin Karić', 'CM', 63, 25], ['Davide Bariti', 'RW', 62, 33],
       ['Tommaso Fumagalli', 'ST', 64, 25], ['Alessandro Debenedetti', 'ST', 61, 21], ['Simone Colombi', 'GK', 62, 34],
       ['Andrea Tiritiello', 'CB', 61, 30], ['Tommaso Del Lungo', 'CB', 60, 21], ['Andrea Franzoni', 'CM', 64, 28],
       ['Flavio Russo', 'ST', 59, 20], ['Bernat Guiu', 'ST', 61, 24], ['Iacopo Lipani', 'DM', 59, 24]
     ] },
    { n: 'Juve Stabia', s: 'JST', c1: '#FFE500', c2: '#0057B8', str: 63, p: [
       ['Alessandro Confente', 'GK', 60, 27], ['Mattia Mannini', 'RB', 61, 18], ['Marco Varnier', 'CB', 65, 27],
       ['Marco Ruggero', 'CB', 65, 25], ['Andrea Giorgini', 'CB', 64, 23], ['Omar Correia', 'DM', 60, 25],
       ['Giuseppe Leone', 'CM', 65, 24], ['Fabio Maistro', 'AM', 64, 27], ['Giacomo De Pieri', 'RW', 61, 18],
       ['Leonardo Candellone', 'ST', 64, 27], ['Rareș Burnete', 'ST', 58, 21], ['Pietro Boer', 'GK', 59, 23],
       ['Marco Bellich', 'CB', 65, 26], ['Giacomo Stabile', 'CB', 61, 20], ['Christian Pierobon', 'CM', 63, 23],
       ['Alessio Cacciamani', 'RW', 52, 18], ['Alessandro Gabrielloni', 'ST', 64, 30], ['Kevin Piscopo', 'AM', 64, 27]
     ] },
    { n: 'Mantova', s: 'MAN', c1: '#E3242B', c2: '#FFFFFF', str: 63, p: [
       ['Marco Festa', 'GK', 63, 33], ['Nicolò Radaelli', 'RB', 61, 22], ['Valerio Mantovani', 'CB', 63, 29],
       ['Stefano Cella', 'CB', 60, 24], ['Cristiano Bani', 'LB', 62, 26], ['Simone Trimboli', 'DM', 61, 23],
       ['Ž. Majer', 'CM', 62, 32], ['César Falletti', 'AM', 66, 32], ['Francesco Galuppini', 'RW', 64, 31],
       ['Davis Mensah', 'ST', 64, 33], ['Francesco Ruocco', 'LW', 63, 24], ['Lorenzo Andrenacci', 'GK', 61, 30],
       ['Senan Mullen', 'CB', 57, 20], ['Tommaso Maggioni', 'RB', 61, 23], ['David Wieser', 'CM', 61, 23],
       ['Davide Bragantini', 'RW', 63, 21], ['Nicholas Bonfanti', 'ST', 62, 23], ['Leonardo Mancuso', 'AM', 64, 33]
     ] },
    { n: 'Modena', s: 'MOD', c1: '#FFE500', c2: '#0057B8', str: 63, p: [
       ['Leandro Chichizola', 'GK', 65, 35], ['Fabio Ponsi', 'RB', 60, 24], ['Davide Adorni', 'CB', 64, 32],
       ['Căuz Cauz', 'CB', 61, 28], ['Filippo Zampano', 'LB', 65, 31], ['Luca Magnino', 'DM', 62, 27],
       ['Simone Santoro', 'CM', 63, 25], ['Giuseppe Caso', 'AM', 64, 26], ['Luca Zanimacchia', 'RW', 66, 26],
       ['Grégoire Defrel', 'ST', 64, 34], ['Matteo Cotali', 'LW', 61, 28], ['Fabrizio Bagheria', 'GK', 55, 24],
       ['Antonio Pergreffi', 'CB', 61, 37], ['Daniel Tonoli', 'CB', 60, 22], ['Niklas Pyyhtiä', 'CM', 63, 21],
       ['Francesco Di Mariano', 'RW', 65, 29], ['Pedro Mendes', 'ST', 64, 25], ['Fabio Gerli', 'CM', 62, 28]
     ] },
    { n: 'Padova', s: 'PAD', c1: '#FFFFFF', c2: '#E3242B', str: 62, p: [
       ['Mattia Fortin', 'GK', 60, 21], ['Christian Pastina', 'CB', 59, 24], ['Francesco Belli', 'CB', 61, 31],
       ['Marco Perrotta', 'CB', 61, 31], ['Antonio Barreca', 'LB', 61, 30], ['Lorenzo Crisetig', 'DM', 64, 32],
       ['Daniele Baselli', 'CM', 62, 33], ['Cristian Buonaiuto', 'AM', 63, 32], ['Paolo Ghiglione', 'RW', 63, 28],
       ['Kevin Lasagna', 'ST', 65, 32], ['Giulio Favale', 'LW', 60, 27], ['Alessandro Sorrentino', 'GK', 58, 23],
       ['Carlo Faedo', 'CB', 60, 26], ['Filippo Sgarbi', 'CB', 59, 27], ['Pietro Fusi', 'CM', 61, 27],
       ['Alessandro Capelli', 'RW', 60, 28], ['Mattia Bortolussi', 'ST', 63, 29], ['Kevin Varas', 'AM', 61, 32]
     ] },
    { n: 'Palermo', s: 'PAL', c1: '#E75480', c2: '#000000', str: 71, p: [
       ['Francesco Bardi', 'GK', 72, 33], ['Salim Diakité', 'RB', 69, 25], ['Mattia Bani', 'CB', 70, 31],
       ['Pietro Ceccaroni', 'CB', 69, 29], ['Tommaso Augello', 'LB', 73, 30], ['Claudio Gomes', 'DM', 72, 24],
       ['Valerio Verre', 'CM', 72, 31], ['Antonio Palumbo', 'AM', 73, 28], ['Emanuel Gyasi', 'RW', 73, 31],
       ['Jérémy Le Douaron', 'ST', 73, 27], ['Pietro Avena', 'LW', 59, 17], ['Alfred Gomis', 'GK', 68, 31],
       ['Davide Veroli', 'CB', 67, 22], ['Niccolò Pierozzi', 'RB', 68, 23], ['Filippo Ranocchia', 'CM', 71, 24],
       ['Matteo Brunori', 'ST', 72, 30], ['Julius Pohjanpalo', 'ST', 73, 30], ['Alexis Blin', 'DM', 70, 28]
     ] },
    { n: 'Ascoli', s: 'ASC', c1: '#000000', c2: '#FFFFFF', str: 62, p: [
       ['Samuele Vitale', 'GK', 58, 24], ['Manuel Nicoletti', 'RB', 62, 28], ['Abdoul Guiebre', 'CB', 63, 29],
       ['Damiano Menna', 'CB', 63, 31], ['Manuel Alagna', 'LB', 59, 24], ['Samuele Damiani', 'DM', 61, 28],
       ['Luca Lo Scalzo', 'CM', 63, 19], ['Tommaso Milanese', 'AM', 62, 24], ['Andrea Silipo', 'RW', 61, 25],
       ['Mohammed Amine Chakir', 'ST', 63, 26], ['Ferdinando Del Sole', 'LW', 62, 29], ['Rok Bržan', 'GK', 56, 23],
       ['Marcos Curado', 'CB', 57, 31], ['Federico Gattoni', 'LB', 68, 27], ['Giovanni Corradini', 'CM', 55, 24],
       ["Simone D'Uffizi", 'RW', 57, 22], ['Giacomo De Pieri', 'ST', 61, 20], ['Nicholas Rizzo', 'CB', 59, 26],
       ['Gian Marco Crespi', 'GK', 55, 25], ['Davide Barosi', 'GK', 55, 26], ['Matteo Raffaelli', 'GK', 54, 21],
       ['Andrea Caucci', 'DM', 54, 19]
     ] },
    { n: 'Benevento', s: 'BNV', c1: '#FFE500', c2: '#E30613', str: 65, p: [
       ['Alessandro Nunziante', 'GK', 55, 18], ['Francesco Pio Sena', 'RB', 66, 22], ['Angelo Veltri', 'CB', 67, 33],
       ['Biagio Meccariello', 'CB', 66, 21], ['Alin Tosca', 'LB', 65, 33], ['Antonio Prisco', 'DM', 67, 32],
       ['Filippo Nardi', 'CM', 64, 33], ['Marco Pinato', 'AM', 67, 20], ['Ernesto Starita', 'RW', 66, 20],
       ['Jacopo Manconi', 'ST', 67, 25], ['Eric Lanini', 'LW', 68, 27], ['Nicolò Manfredini', 'GK', 64, 20],
       ['Filippo Berra', 'CB', 61, 26], ['Marco Ciurleo', 'LB', 60, 25], ['Gennaro Acampora', 'CM', 64, 24],
       ['Giuseppe Borello', 'RW', 60, 21], ['Mario Perlingieri', 'ST', 61, 28], ['Angelo Viscardi', 'CB', 59, 25],
       ['Pier Luigi Simonetti', 'CM', 60, 20], ['Davide Agazzi', 'CM', 59, 26], ['Mattia Viviani', 'CM', 60, 21],
       ['Shady Oukhadda', 'CB', 58, 28]
     ] },
    { n: 'Sampdoria', s: 'SAM', c1: '#0057B8', c2: '#FFFFFF', str: 69, p: [
       ['Simone Ghidotti', 'GK', 67, 25], ['Fabio Depaoli', 'RB', 69, 28], ['Simone Romagnoli', 'CB', 68, 35],
       ['Dennis Hadžikadunić', 'CB', 68, 26], ['Nicolas Ioannou', 'LB', 69, 29], ['Jordan Ferri', 'DM', 71, 33],
       ['Antonín Barák', 'CM', 73, 30], ['Simone Pafundi', 'AM', 66, 19], ['Víctor Narro', 'RW', 66, 26],
       ['Massimo Coda', 'ST', 72, 36], ['Estanis Pedrola', 'LW', 67, 21], ['Gaëtan Coucke', 'GK', 66, 26],
       ['Alex Ferrari', 'CB', 67, 31], ['Simone Giordano', 'LB', 66, 23], ['Alessandro Bellemo', 'CM', 69, 29],
       ['Lorenzo Venuti', 'RB', 69, 30], ['Marvin Çuni', 'ST', 65, 23], ['Liam Henderson', 'CM', 68, 29]
     ] },
    { n: 'Vicenza', s: 'VIC', c1: '#E30613', c2: '#FFFFFF', str: 64, p: [
       ['Mattia Basso', 'GK', 63, 18], ['Daniel Cappelletti', 'RB', 64, 35], ['Maxime Leverbe', 'CB', 64, 29],
       ['Mattia Golin', 'CB', 66, 21], ['Giuseppe Cuomo', 'LB', 66, 28], ['Marco Carraro', 'DM', 65, 28],
       ['Michele Cavion', 'CM', 64, 32], ['Alessio Tribuzzi', 'AM', 64, 28], ['Nicola Rauti', 'RW', 62, 26],
       ['Claudio Morra', 'ST', 62, 31], ['Alessandro Capello', 'LW', 63, 31], ['Samuele Massolo', 'GK', 60, 30],
       ['Francesco Benassai', 'CB', 58, 28], ['Thomas Sandon', 'LB', 61, 23], ['Giulio Pellizzari', 'CM', 61, 22],
       ['David Stückler', 'RW', 59, 22], ['Filippo Alessio', 'ST', 63, 22], ['Lorenzo Caferri', 'CB', 62, 27],
       ['Riccardo Gagno', 'GK', 57, 29], ['Filippo Costa', 'CB', 58, 31], ['Matteo Vescovi', 'CB', 59, 21],
       ['Loris Zonta', 'CM', 56, 29]
     ] },
    { n: 'Südtirol', s: 'SUD', c1: '#FFFFFF', c2: '#E3242B', str: 63, p: [
       ['Marius Adamonis', 'GK', 65, 28], ['Salvatore Molina', 'RB', 67, 33], ['Andrea Masiello', 'CB', 66, 39],
       ['Nicola Pietrangeli', 'CB', 66, 24], ['Simone Davi', 'LB', 64, 25], ['Dhirar Brik', 'DM', 53, 17],
       ['Daniele Casiraghi', 'CM', 69, 32], ['Fabian Tait', 'CM', 64, 32], ['Jonathan Italeng', 'ST', 62, 24],
       ['Raphael Odogwu', 'ST', 66, 34], ['Emanuele Pecorino', 'ST', 61, 23], ['Giacomo Poluzzi', 'GK', 64, 37],
       ['Frédéric Veseli', 'CB', 65, 32], ['Karim Zedadka', 'LB', 61, 25], ['Mamadou Coulibaly', 'CM', 64, 26],
       ['Raphael Kofler', 'CB', 64, 20], ['Silvio Merkaj', 'ST', 64, 27], ['Simone Tronchin', 'CM', 62, 22]
     ] },
    {
      n: 'Cremonese', s: 'CRE', c1: '#A6192E', c2: '#666666', p: [
       ['Emil Audero', 'GK', 70, 28], ['Tommaso Barbieri', 'RB', 61, 22], ['Federico Baschirotto', 'CB', 67, 28],
       ['Federico Ceccherini', 'CB', 64, 33], ['Leonardo Sernicola', 'LB', 65, 28], ['Warren Bondo', 'CM', 64, 21],
       ['Martín Payero', 'CM', 65, 26], ['Jari Vandeputte', 'CM', 64, 29], ['Alessio Zerbin', 'RW', 65, 26],
       ['Jamie Vardy', 'ST', 68, 38], ['Giuseppe Pezzella', 'LW', 63, 27], ['Marco Silvestri', 'GK', 64, 34],
       ['Matteo Bianchetti', 'CB', 63, 32], ['Filippo Terracciano', 'LB', 63, 22], ['Michele Collocolo', 'CM', 64, 25],
       ['Romano Floriani Mussolini', 'AM', 60, 22], ['Antonio Sanabria', 'ST', 68, 29], ['Franco Vázquez', 'ST', 66, 36]
     ]
    },
    {
      n: 'Hellas Verona', s: 'VER', c1: '#FFE600', c2: '#00308F', p: [
       ['Lorenzo Montipò', 'GK', 73, 29], ['Rafik Belghali', 'RB', 63, 23], ['Unai Núñez', 'CB', 73, 28],
       ['Victor Nelsson', 'CB', 72, 26], ['Domagoj Bradarić', 'LB', 68, 25], ['Al Al Musrati', 'DM', 75, 29],
       ['Suat Serdar', 'CM', 73, 28], ['Tomáš Suslov', 'AM', 69, 23], ['Giovane', 'RW', 62, 21],
       ['Gift Orban', 'ST', 71, 22], ['Daniel Mosquera', 'ST', 68, 25], ['Simone Perilli', 'GK', 64, 30],
       ['Nicolás Valentini', 'CB', 70, 24], ['Martin Frese', 'LB', 66, 27], ['Jean-Daniel Akpa Akpro', 'CM', 69, 32],
       ['Junior Ajayi', 'ST', 53, 20], ['Amin Sarr', 'ST', 68, 24], ['Antoine Bernede', 'CM', 69, 26]
     ]
    },
    {
      n: 'Pisa', s: 'PIS', c1: '#00285E', c2: '#B01E28', p: [
       ['Simone Scuffet', 'GK', 65, 29], ['Tomás Esteves', 'RB', 60, 23], ['Raúl Albiol', 'CB', 69, 39],
       ['Aldo Caracciolo', 'CB', 64, 35], ['Arturo Calabresi', 'CB', 61, 29], ['Malthe Højholt', 'DM', 59, 24],
       ['Michel Aebischer', 'CM', 67, 28], ['Calvin Stengs', 'AM', 69, 26], ['Juan Cuadrado', 'RW', 69, 37],
       ['Mbala Nzola', 'ST', 68, 28], ['Samuele Angori', 'LW', 62, 21], ['Adrian Šemper', 'GK', 64, 27],
       ['Simone Canestrelli', 'CB', 63, 24], ['Giovanni Bonfanti', 'CB', 60, 22], ['Mihai Marin', 'CM', 62, 26],
       ['Idrissa Touré', 'RW', 64, 27], ['Henrik Meister', 'ST', 60, 21], ['Mattéo Tramoni', 'AM', 67, 25]
     ]
    }
  ]
};

window.LEAGUES.bundesliga2 = {
  id: 'bundesliga2', name: '2. Bundesliga', country: 'Alemania', tier: 2, ucl: 2, rel: 3,
  pool: 'de', squadSize: 17, teams: [
    { n: 'Arminia Bielefeld', s: 'DSC', c1: '#004E9E', c2: '#FFFFFF', str: 65, p: [
       ['Jonas Kersken', 'GK', 65, 24], ['Christopher Lannert', 'RB', 65, 27], ['Leon Schneider', 'CB', 64, 25],
       ['Maximilian Großer', 'CB', 64, 23], ['Tim-Henry Handwerker', 'LB', 66, 27], ['Stefano Russo', 'DM', 66, 25],
       ['Marvin Mehlem', 'CM', 70, 27], ['Mael Corboz', 'CM', 66, 30], ['Noah Sarenren Bazee', 'RW', 66, 28],
       ['Joel Grodowski', 'ST', 66, 27], ['Daniel Richter', 'LW', 57, 17], ['Leo Oppermann', 'GK', 58, 23],
       ['Joel Felix', 'CB', 63, 27], ['Arne Sicker', 'LB', 63, 28], ['Marius Wörl', 'CM', 67, 21],
       ['Isaiah Young', 'RW', 64, 27], ['Julian Kania', 'ST', 64, 23], ['Sam Schreck', 'CM', 64, 26]
     ] },
    { n: 'VfL Bochum', s: 'BOC', c1: '#005CA9', c2: '#FFFFFF', str: 65, p: [
       ['Timo Horn', 'GK', 67, 32], ['Felix Passlack', 'RB', 65, 27], ['Kevin Vogt', 'CB', 69, 33],
       ['Erhan Mašović', 'CB', 65, 26], ['Maximilian Wittek', 'LB', 67, 29], ['Ibrahima Sissoko', 'DM', 70, 27],
       ['Matúš Bero', 'CM', 68, 29], ['Lennart Koerdt', 'AM', 56, 20], ['Moritz-Broni Kwarteng', 'RW', 63, 27],
       ['Ibrahim Sissoko', 'ST', 66, 29], ['Gerrit Holtmann', 'LW', 64, 30], ['Niclas Thiede', 'GK', 60, 26],
       ['Philipp Strompf', 'CB', 63, 27], ['Owono-Darnell Keumo', 'CM', 55, 17], ['Kjell-Arik Wätjen', 'CM', 61, 19],
       ['Koji Miyoshi', 'RW', 62, 28], ['Philipp Hofmann', 'ST', 66, 32], ['Noah Loosli', 'CB', 62, 28]
     ] },
    { n: 'Eintracht Braunschweig', s: 'BRA', c1: '#FFE500', c2: '#0057B8', str: 64, p: [
       ['Ron-Thorben Hoffmann', 'GK', 68, 26], ['Mehmet Aydın', 'RB', 63, 23], ['Frederik Jäkel', 'CB', 65, 24],
       ['Lukas Frenkert', 'CB', 64, 24], ['Léon Bell Bell', 'LB', 64, 28], ['Sven Köhler', 'DM', 64, 28],
       ['Lino Tempelmann', 'CM', 68, 26], ['Fabio Kaufmann', 'AM', 64, 32], ['Christian Conteh', 'RW', 63, 25],
       ['Erencan Yardımcı', 'ST', 65, 23], ['Levente Szabó', 'ST', 62, 26], ['Elhan Kastrati', 'GK', 66, 28],
       ['Kevin Ehlers', 'CB', 64, 24], ['Fabio Di Michele Sanchez', 'LB', 63, 22], ['Robin Heußer', 'CM', 65, 27],
       ['Robert Ramšak', 'ST', 59, 18], ['Sebastian Polter', 'ST', 63, 34], ['Johan Gómez', 'AM', 63, 23]
     ] },
    { n: 'SV Darmstadt 98', s: 'DAR', c1: '#004E9E', c2: '#FFFFFF', str: 64, p: [
       ['Marcel Schuhen', 'GK', 66, 32], ['Matthias Bader', 'RB', 65, 28], ['Aleksandar Vukotić', 'CB', 64, 29],
       ['Matej Maglica', 'CB', 62, 26], ['Leon Klassen', 'LB', 60, 25], ['Fabian Holland', 'DM', 65, 34],
       ['Jean-Paul Boëtius', 'CM', 63, 31], ['Marco Richter', 'AM', 63, 27], ['Fabian Nürnberger', 'LW', 65, 25],
       ['Isac Lidberg', 'ST', 67, 26], ['Killian Corredor', 'LW', 67, 24], ['Alexander Brunst', 'GK', 60, 29],
       ['Patric Pfeiffer', 'CB', 62, 25], ['Tim Arnold', 'LB', 50, 18], ['Matondo-Merveille Papela', 'CM', 61, 24],
       ['Luca Marseiler', 'ST', 62, 28], ['Fraser Hornby', 'ST', 64, 25], ['Kai Klefisch', 'DM', 65, 25]
     ] },
    { n: 'Dynamo Dresden', s: 'SGD', c1: '#FFE500', c2: '#000000', str: 64, p: [
       ['Tim Schreiber', 'GK', 64, 23], ['Konrad Faber', 'RB', 62, 27], ['Lars Bünning', 'CB', 63, 27],
       ['Lukas Boeder', 'CB', 63, 28], ['Sascha Risch', 'CM', 60, 25], ['Vinko Šapina', 'DM', 65, 30],
       ['Niklas Hauptmann', 'CM', 66, 29], ['Nils Fröling', 'AM', 61, 25], ['Jakob Lemmer', 'RW', 64, 25],
       ['Christoph Daferner', 'ST', 65, 27], ['Dominik Kother', 'LW', 65, 25], ['Lennart Grill', 'GK', 63, 26],
       ['Claudio Kammerknecht', 'CB', 63, 25], ['Alexander Rossipal', 'CB', 62, 29], ['Aljaž Casar', 'CM', 62, 24],
       ['Stefan Kutschke', 'ST', 61, 36], ['Vincent Vermeij', 'ST', 63, 30], ['Julian Pauli', 'CB', 62, 19]
     ] },
    { n: 'Energie Cottbus', s: 'COT', c1: '#E30613', c2: '#FFFFFF', str: 64, p: [
       ['Elias Bethke', 'GK', 67, 22], ['Henry Rorig', 'RB', 62, 25], ['Dennis Slamar', 'CB', 62, 30],
       ['Tim Campulka', 'CB', 61, 26], ['Anderson-Lenda Lucoqui', 'LB', 64, 27], ['Dominik Pelivan', 'DM', 64, 29],
       ['Axel Borgmann', 'CM', 63, 30], ['Tolcay Ciğerci', 'AM', 67, 30], ['Moritz Hannemann', 'RW', 58, 27],
       ['Erik Engelhardt', 'ST', 64, 27], ['Justin Butler', 'ST', 60, 24], ['Marius Funk', 'GK', 64, 29],
       ['King Manu', 'CB', 60, 21], ['Leon Guwara', 'LB', 61, 29], ['Jonas Hofmann', 'CM', 61, 28],
       ['Theo Ogbidi', 'RW', 55, 24], ['Timmy Thiele', 'ST', 64, 33], ['Janis Juckel', 'CM', 60, 20]
     ] },
    { n: 'Greuther Fürth', s: 'SGF', c1: '#00A94F', c2: '#FFFFFF', str: 64, p: [
       ['Nils-Jonathan Körber', 'GK', 62, 28], ['Jannik Dehm', 'RB', 63, 29], ['Philipp Ziereis', 'CB', 67, 32],
       ['L. Itter', 'CB', 65, 26], ['Reno Münz', 'LB', 59, 19], ['Sacha Bansé', 'DM', 61, 24],
       ['Julian Green', 'CM', 67, 30], ['Branimir Hrgota', 'AM', 67, 32], ['Aaron Keller', 'LW', 63, 21],
       ['Noel Futkeu', 'ST', 66, 22], ['Marco John', 'LW', 64, 23], ['Pelle Boevink', 'GK', 62, 27],
       ['Maximilian Dietz', 'CB', 63, 23], ['Raul Mariţa', 'LB', 53, 18], ['Jomaine Consbruch', 'CM', 63, 23],
       ['Felix Higl', 'ST', 60, 28], ['Dennis Srbeny', 'ST', 63, 31], ['Felix Klaus', 'AM', 66, 32]
     ] },
    { n: 'Hannover 96', s: 'H96', c1: '#00A94F', c2: '#FFFFFF', str: 68, p: [
       ['Nicolas Noll', 'GK', 65, 22], ['Jonas Sterner', 'RB', 67, 23], ['Boris Tomiak', 'CB', 69, 26],
       ['Virgil Ghiță', 'CB', 68, 27], ['Maurice Neubauer', 'LB', 71, 29], ['Franz Roggow', 'DM', 64, 22],
       ['Enzo Leopold', 'CM', 71, 24], ['Daisuke Yokota', 'AM', 68, 25], ['Mustapha Bundu', 'RW', 67, 28],
       ['Benjamin Källman', 'ST', 70, 27], ['Jannik Rochelt', 'LW', 66, 26], ['Leo Weinkauf', 'GK', 64, 28],
       ['Maik Nawrocki', 'CB', 67, 24], ['Brooklyn Ezeh', 'LB', 65, 24], ['Waniss Taïbi', 'CM', 67, 23],
       ['Bastian Allgeier', 'AM', 64, 23], ['Benedikt Pichler', 'ST', 66, 27], ['Håvard Nielsen', 'ST', 65, 31]
     ] },
    { n: 'Hertha BSC', s: 'BSC', c1: '#005CA9', c2: '#FFFFFF', str: 70, p: [
       ['Tjark Ernst', 'GK', 69, 22], ['Agustín Rogel', 'CB', 70, 27], ['John Brooks', 'CB', 72, 32],
       ['Márton Dárdai', 'CB', 70, 23], ['Michał Karbownik', 'LB', 70, 24], ['Paul Seguin', 'DM', 71, 30],
       ['Michaël Cuisance', 'CM', 72, 25], ['Maurice Krattenmacher', 'AM', 69, 19], ['Marten Winkler', 'RW', 68, 22],
       ['Fabian Reese', 'ST', 75, 27], ['Jón Þorsteinsson', 'LW', 69, 26], ['Marius Gersbeck', 'GK', 68, 30],
       ['Toni Leistner', 'CB', 70, 34], ['Deyovaisio Zeefuik', 'LB', 69, 27], ['Leon Jensen', 'CM', 70, 28],
       ['Julian Eitschberger', 'RW', 67, 21], ['Dawid Kownacki', 'ST', 72, 28], ['Diego Demme', 'DM', 71, 33]
     ] },
    { n: 'Holstein Kiel', s: 'KSV', c1: '#005CA9', c2: '#FFFFFF', str: 64, p: [
       ['Timon Weiner', 'GK', 65, 26], ['Lasse Rosenboom', 'RB', 65, 23], ['David Zec', 'CB', 67, 25],
       ['Marco Komenda', 'CB', 65, 28], ['John Tolkin', 'LB', 67, 22], ['Kasper Davidsen', 'DM', 59, 20],
       ['Stefan Schwab', 'CM', 69, 34], ['Jonas Therkelsen', 'AM', 62, 22], ['Adrián Kaprálik', 'RW', 64, 23],
       ['Steven Skrzybski', 'ST', 68, 32], ['Louis Köster', 'LW', 56, 22], ['Marcel Engelhardt', 'GK', 60, 32],
       ['Patrick Erras', 'CB', 65, 30], ['Tymoteusz Puchacz', 'LB', 65, 26], ['Magnus Knudsen', 'CM', 66, 24],
       ['Niklas Niehoff', 'RW', 59, 20], ['Alexander Bernhardsson', 'ST', 68, 26], ['Robert Wagner', 'CM', 65, 21]
     ] },
    { n: '1. FC Kaiserslautern', s: 'FCK', c1: '#E3242B', c2: '#FFFFFF', str: 66, p: [
       ['Julian Krahl', 'GK', 65, 25], ['Paul Joly', 'RB', 68, 25], ['Luca Sirch', 'CB', 67, 26],
       ['Jan Elvedi', 'CB', 65, 28], ['Florian Kleinhansl', 'LB', 63, 24], ['Semih Sahin', 'DM', 67, 25],
       ['Naatan Skyttä', 'CM', 67, 23], ['Marlon Ritter', 'AM', 67, 30], ['Simon Asta', 'RW', 65, 24],
       ['Daniel Hanslik', 'ST', 65, 28], ['Kenny Redondo', 'LW', 63, 30], ['Avdo Spahić', 'GK', 60, 28],
       ['Maxwell Gyamfi', 'CB', 62, 25], ['Erik Wekesser', 'LB', 62, 27], ['Tobias Raschl', 'CM', 62, 25],
       ['Faride Alidou', 'RW', 63, 23], ['Mahir Emreli', 'ST', 65, 28], ['Fabian Kunze', 'DM', 66, 27]
     ] },
    { n: 'Karlsruher SC', s: 'KSC', c1: '#005CA9', c2: '#FFFFFF', str: 63, p: [
       ['Robin Himmelmann', 'GK', 61, 36], ['Sebastian Jung', 'RB', 65, 35], ['Marcel Franke', 'CB', 66, 32],
       ['Marcel Beifus', 'CB', 64, 22], ['David Herold', 'LB', 63, 22], ['Andreas Müller', 'DM', 65, 24],
       ['Marvin Wanitzek', 'CM', 71, 32], ['Philipp Förster', 'AM', 64, 30], ['Louey Ben Farhat', 'ST', 59, 18],
       ['Fabian Schleusener', 'ST', 64, 33], ['Leon Opitz', 'LW', 57, 20], ['Hans Bernat', 'GK', 60, 24],
       ['Christoph Kobald', 'CB', 63, 27], ['Marc Dühring', 'LB', 55, 21], ['Dženis Burnić', 'CM', 63, 27],
       ['Shio Fukuda', 'ST', 59, 21], ['Roko Šimić', 'ST', 62, 21], ['Nicolai Rapp', 'DM', 64, 28]
     ] },
    { n: '1. FC Magdeburg', s: 'FCM', c1: '#005CA9', c2: '#FFFFFF', str: 63, p: [
       ['Dominik Reimann', 'GK', 64, 28], ['Herbert Bockhorn', 'RB', 64, 30], ['Marcus Mathisen', 'CB', 67, 29],
       ['Jean Hugonet', 'CB', 66, 25], ['Samuel Loric', 'LB', 61, 24], ['Silas Gnaka', 'DM', 65, 26],
       ['Abu-Bekir El Zein', 'CM', 62, 22], ['Nick Meier', 'AM', 52, 19], ['Philipp Hercher', 'RW', 64, 29],
       ['Ado Onaiwu', 'ST', 67, 29], ['Barış Atik', 'LW', 67, 30], ['Noah Kruth', 'GK', 57, 22],
       ['Daniel Heber', 'CB', 63, 30], ['Max Geschwill', 'CB', 63, 23], ['Connor Krempicki', 'CM', 61, 30],
       ['Lubambo Musonda', 'AM', 63, 30], ['Maximilian Breunig', 'ST', 63, 24], ['Alexander Nollenberger', 'LW', 64, 28]
     ] },
    { n: '1. FC Nürnberg', s: 'FCN', c1: '#E3242B', c2: '#FFFFFF', str: 67, p: [
       ['Christian Mathenia', 'GK', 65, 33], ['Henri Koudossou', 'RB', 67, 25], ['Robin Knoche', 'CB', 69, 33],
       ['Tim Drexler', 'CB', 67, 20], ['Danilo', 'CM', 66, 33], ['Pape Diop', 'DM', 67, 21],
       ['Finn Becker', 'CM', 70, 25], ['Julian Justvan', 'AM', 71, 27], ['Benjamin Goller', 'RW', 64, 26],
       ['Mickaël Biron', 'ST', 66, 27], ['Semir Telalović', 'ST', 65, 25], ['Jan Reichert', 'GK', 65, 24],
       ['Lochoshviliლუკა Lochoshvili', 'CB', 67, 27], ['Berkay Yilmaz', 'LB', 66, 20], ['Rafael Lubach', 'CM', 66, 20],
       ['Justin-Kai von der Hitz', 'RW', 58, 18], ['Adriano Grimaldi', 'ST', 66, 34], ['Ondřej Karafiát', 'CB', 66, 30]
     ] },
    { n: 'VfL Osnabrück', s: 'OSN', c1: '#6A2E8F', c2: '#FFFFFF', str: 62, p: [
       ['Lukas Jonsson', 'GK', 63, 32], ['Patrick Kammerbauer', 'RB', 62, 28], ['Jannik Müller', 'CB', 65, 31],
       ['Niklas Wiemann', 'CB', 61, 26], ['Bashkim Ajdini', 'RB', 61, 32], ['Robert Tesche', 'DM', 62, 38],
       ['Bryan Henning', 'CM', 63, 30], ['Tony Lesueur', 'AM', 59, 24], ['David Kopacz', 'RW', 64, 26],
       ['Kai Pröger', 'ST', 65, 33], ['Kevin Schumacher', 'LW', 61, 27], ['Niklas Sauter', 'GK', 60, 22],
       ['Yiğit Karademir', 'CB', 59, 21], ['Robin Fabinski', 'CB', 57, 21], ['Fridolin Wagner', 'DM', 62, 27],
       ['Ismail Badjie', 'AM', 55, 19], ['Lars Kehl', 'ST', 64, 23], ['Robin Meißner', 'ST', 63, 25]
     ] },
    {
      n: '1. FC Heidenheim', s: 'FCH', c1: '#E2001A', c2: '#0A2240', p: [
       ['Kevin Müller', 'GK', 70, 34], ['Omar Traoré', 'RB', 69, 27], ['Patrick Mainka', 'CB', 72, 30],
       ['Tim Siersleben', 'CB', 68, 25], ['Leart Paçarada', 'LB', 68, 30], ['Niklas Dorsch', 'DM', 70, 27],
       ['Adrian Beck', 'CM', 69, 28], ['Jan Schöppner', 'DM', 70, 26], ['Sirlord Conteh', 'ST', 65, 28],
       ['Marvin Pieringer', 'ST', 71, 25], ['Mathias Honsak', 'LW', 70, 28], ['Diant Ramaj', 'GK', 69, 23],
       ['Benedikt Gimber', 'DM', 67, 28], ['Jonas Föhrenbach', 'LB', 67, 29], ['Nick Rothweiler', 'CM', 55, 19],
       ['Mikkel Kaufmann', 'ST', 64, 24], ['Budu Zivzivadze', 'ST', 68, 31], ['Marnon-Thomas Busch', 'RB', 68, 30]
     ]
    },
    {
      n: 'FC St. Pauli', s: 'STP', c1: '#5F2C0E', c2: '#FFFFFF', p: [
       ['Nikola Vasilj', 'GK', 70, 29], ['Manolis Saliakas', 'RB', 66, 28], ['Hauke Wahl', 'CB', 67, 31],
       ['David Nemeth', 'CB', 64, 24], ['Lars Ritzka', 'LB', 62, 27], ['Eric Smith', 'DM', 68, 28],
       ['Jackson Irvine', 'CM', 68, 32], ['Danel Sinani', 'AM', 62, 28], ['D. Afolayan', 'RW', 65, 27],
       ['Martijn Kaars', 'ST', 64, 26], ['Mathias Pereira Lage', 'LW', 68, 28], ['Ben Voll', 'GK', 60, 24],
       ['Karol Mets', 'CB', 63, 32], ['Louis Oppie', 'LB', 61, 23], ['Connor Metcalfe', 'CM', 62, 25],
       ['Erik Ahlstrand', 'RW', 58, 23], ['Andreas Hountondji', 'ST', 62, 22], ['James Sands', 'DM', 64, 24]
     ]
    },
    {
      n: 'VfL Wolfsburg', s: 'WOB', c1: '#65B32E', c2: '#FFFFFF', p: [
       ['Kamil Grabara', 'GK', 74, 26], ['Kilian Fischer', 'RB', 69, 24], ['Denis Vavro', 'CB', 73, 29],
       ['KoulierakisΚωνσταντίνος Koulierakis', 'CB', 72, 21], ['Joakim Mæhle', 'LB', 73, 28], ['Maximilian Arnold', 'DM', 74, 31],
       ['Lovro Majer', 'CM', 73, 27], ['Patrick Wimmer', 'AM', 72, 24], ['Andreas Skov Olsen', 'RW', 72, 25],
       ['Mohamed Amoura', 'ST', 75, 25], ['Kevin Paredes', 'LW', 68, 22], ['Marius Müller', 'GK', 70, 31],
       ['Moritz Jenz', 'CB', 71, 26], ['Rogério', 'LB', 68, 27], ['Mattias Svanberg', 'CM', 71, 26],
       ['Jesper Lindstrøm', 'RW', 70, 25], ['Jonas Wind', 'ST', 73, 26], ['Vinicius Souza', 'DM', 71, 26]
     ]
    }
  ]
};

window.LEAGUES.ligue2 = {
  id: 'ligue2', name: 'Ligue 2', country: 'Francia', tier: 2, ucl: 2, rel: 3,
  pool: 'fr', squadSize: 17, teams: [
    { n: 'Dijon FCO', s: 'DIJ', c1: '#E30613', c2: '#FFFFFF', str: 66, p: [
       ['Lenny Montfort', 'GK', 65, 24], ['Ismail Diallo', 'RB', 64, 23], ['Fady Khatir', 'CB', 66, 30],
       ['Quentin Bernard', 'CB', 63, 37], ['Waly Diouf', 'LB', 66, 29], ['Michaël Barreto', 'DM', 65, 35],
       ['Ben-Chayeel Hamada', 'CM', 68, 23], ['Paul Bellon', 'AM', 66, 26], ['Yanis Barka', 'RW', 65, 28],
       ['Julio Tavarès', 'ST', 67, 38], ['Julien Domingues', 'LW', 67, 31], ['Paul Delecroix', 'GK', 63, 38],
       ['Lenny Lacroix', 'CB', 60, 23], ['Zoran Moco', 'LB', 61, 23], ['Jordan Marié', 'CM', 63, 35],
       ['Alexis Ntamack', 'RW', 61, 22], ['Florian Rombogouera', 'ST', 62, 20], ['César Obongo', 'CB', 60, 20],
       ['Adel Lembezat', 'CM', 57, 28], ['Brandon Ndezi', 'CM', 58, 26], ['Hugo Vargas-Ríos', 'CM', 59, 32],
       ['Samy Chouchane', 'CM', 58, 23]
     ] },
    { n: 'FC Annecy', s: 'ANN', c1: '#E3242B', c2: '#FFFFFF', str: 62, p: [
       ['Florian Escales', 'GK', 66, 29], ['François Lajugie', 'RB', 61, 29], ['Axel Drouhin', 'CB', 63, 25],
       ['Julien Kouadio', 'CB', 60, 25], ["Fabrice N'Sakala", 'LB', 63, 34], ['Ahmed Kashi', 'DM', 65, 36],
       ['Abdel Hbouch', 'CM', 57, 26], ['Josué Tiendrebeogo', 'AM', 60, 22], ['Antoine Larose', 'RW', 65, 32],
       ['Ben Touré', 'ST', 59, 21], ['Clément Billemaz', 'LW', 62, 26], ['Thomas Callens', 'GK', 59, 26],
       ['Mattéo Veillon', 'CB', 55, 23], ['Cédric Makutungu', 'LB', 55, 27], ['Paul Venot', 'CM', 52, 23],
       ['Quentin Paris', 'LW', 57, 18], ['Thibault Rambaud', 'ST', 56, 28], ['Vincent Pajot', 'DM', 64, 34]
     ] },
    { n: 'FC Sochaux', s: 'SOC', c1: '#FFE500', c2: '#0057B8', str: 65, p: [
       ['Théo Bermond', 'GK', 64, 30], ['Sofiane Addi', 'RB', 67, 28], ['Yoan Baquie-Constable', 'CB', 66, 30],
       ['Mathys Kuntz', 'CB', 63, 30], ['Boris Moltenis', 'LB', 62, 20], ['Isaak Umbdenstock', 'DM', 63, 24],
       ['Lucien Agoumé', 'CM', 75, 23], ['Gaetan Beuve', 'AM', 65, 27], ['Luther Archimede', 'RW', 64, 22],
       ['Mehdi Bariki', 'ST', 65, 29], ['Cameron Djassougue Mpouho', 'LW', 62, 21], ['Quentin Galvez-Diarra', 'GK', 58, 33],
       ['Alexandre Nsakala', 'CB', 60, 22], ['Koly Soumare', 'LB', 63, 21], ['Emmanuel Francois', 'CM', 59, 27],
       ['Walid Jarmouni', 'RW', 60, 27], ['Natanael Ntolla', 'ST', 61, 21], ['Hugo Voirol', 'CB', 60, 20],
       ['Yannick Etile', 'GK', 59, 33], ['Nathan Zohoré', 'CB', 63, 24], ['Romain Sans', 'CB', 60, 23],
       ['Darren-Kinsley Guere-Kossambia', 'CM', 58, 21]
     ] },
    { n: 'US Boulogne', s: 'BOU', c1: '#E3242B', c2: '#000000', str: 62, p: [
       ['Ibrahim Koné', 'GK', 63, 35], ['Aurélien Platret', 'RB', 61, 22], ['Demba Thiam', 'CB', 63, 35],
       ['Nathan Zohoré', 'CB', 63, 24], ['Julien Boyer', 'LB', 64, 27], ['Joffrey Bultel', 'DM', 63, 25],
       ['Nolan Binet', 'DM', 61, 21], ['Amine El Farissi', 'AM', 63, 26], ['Noah Fatar', 'RW', 61, 23],
       ['Corentin Fatou', 'ST', 61, 26], ['Exaucé Mpembele Boula', 'LW', 59, 23], ['Xavier Lenogue', 'GK', 59, 28],
       ['Siad Gourville', 'CB', 61, 25], ['Louis Siliadin', 'CM', 60, 23], ['Lilian Raillot', 'DM', 60, 21],
       ['Christian Kitenge', 'RW', 59, 23], ['Gabin Capuano', 'ST', 61, 19], ['Adrien Pinot', 'CB', 60, 24]
     ] },
    { n: 'Clermont Foot', s: 'CLE', c1: '#E3242B', c2: '#0057B8', str: 64, p: [
       ['Théo Guivarch', 'GK', 64, 29], ['Cheick Konaté', 'RB', 63, 21], ['Yoann Salmier', 'CB', 67, 32],
       ['Maximiliano Caufriez', 'CB', 66, 28], ['Kenji-Van Boto', 'LB', 62, 29], ['Johan Gastien', 'DM', 67, 37],
       ['Allan Ackra', 'DM', 60, 21], ['Henri Saivet', 'AM', 65, 34], ['Axel Camblan', 'AM', 61, 21],
       ['Famara Diédhiou', 'ST', 64, 32], ['Abdoul Bamba', 'LW', 66, 31], ['Massamba Ndiaye', 'GK', 63, 23],
       ['Josué Mwimba Isala', 'CB', 58, 22], ['Sumaila Awudu', 'LB', 54, 20], ['Yuliwes Bellache', 'AM', 58, 22],
       ['Ousmane Diop', 'RW', 61, 20], ['Adrien Hunou', 'ST', 62, 31], ['Maïdine Douane', 'LW', 65, 22]
     ] },
    { n: 'USL Dunkerque', s: 'DUN', c1: '#0057B8', c2: '#FFFFFF', str: 60, p: [
       ['Mathys Niflore', 'GK', 56, 18], ['Alec Georgen', 'RB', 63, 26], ['Vincent Sasso', 'CB', 64, 34],
       ['Opa Sangante', 'CB', 63, 34], ['Felipe Abner', 'LB', 62, 29], ['Eguaras', 'DM', 63, 33],
       ['Enzo Bardeli', 'CM', 64, 24], ['Thomas Robinet', 'AM', 59, 28], ['Gessime Yassine', 'RW', 58, 19],
       ['Aboubakary Kanté', 'ST', 58, 30], ['Marco Essimi', 'LW', 55, 26], ['Marcos Lavín', 'GK', 56, 28],
       ['Victor Mayela', 'CB', 53, 21], ['Geoffrey Kondo', 'LB', 55, 23], ['Eddy Sylvestre', 'CM', 58, 25],
       ['Aristide Zossou', 'LW', 54, 20], ['Alex Daho', 'LW', 53, 21], ['Pape Diong', 'DM', 58, 19]
     ] },
    { n: 'Grenoble Foot 38', s: 'GF38', c1: '#0057B8', c2: '#FFFFFF', str: 64, p: [
       ['Mamadou Diop', 'GK', 66, 25], ['Shaquil Delos', 'RB', 65, 26], ['Clément Vidal', 'CB', 65, 25],
       ['Stone Mambo', 'CB', 63, 26], ['Matthéo Xantippe', 'LB', 64, 23], ["Hianga'a Mbock", 'DM', 62, 25],
       ['Théo Valls', 'CM', 69, 29], ['Baptiste Mouazan', 'AM', 61, 23], ['Alan Kerouedan', 'RW', 62, 25],
       ['Moussa Djitté', 'ST', 63, 25], ['Yadaly Diaby', 'LW', 62, 24], ['Bobby Allain', 'GK', 62, 33],
       ['Allan Tchaptchet', 'CB', 63, 23], ['Mathieu Mion', 'CM', 54, 24], ['Jessy Benet', 'CM', 68, 30],
       ['Mamady Bangré', 'RW', 61, 24], ['Nesta Elphege', 'ST', 59, 24], ['Gaëtan Paquiez', 'RB', 63, 31]
     ] },
    { n: 'EA Guingamp', s: 'EAG', c1: '#E3242B', c2: '#000000', str: 65, p: [
       ['Adrián Ortolá', 'GK', 67, 31], ['Alpha Sissoko', 'RB', 68, 28], ['Donatien Gomis', 'CB', 67, 30],
       ['Sohaib Nair', 'CB', 65, 23], ['Abdel Abdallah', 'LB', 63, 27], ['Kalidou Sidibé', 'DM', 68, 26],
       ['Dylan Louiserre', 'CM', 65, 30], ['Darly Nlandu', 'AM', 60, 24], ['Amadou Sagna', 'RW', 63, 26],
       ['Amine Hemia', 'ST', 67, 27], ['Gautier Ott', 'LW', 60, 23], ['Teddy Bartouche-Selbonne', 'GK', 59, 28],
       ['Albin Démouchy', 'DM', 58, 23], ['Dylan Ourega', 'LB', 62, 20], ['Tanguy Ahile', 'DM', 55, 20],
       ['Freddy Mbemba', 'ST', 58, 22], ['Louis Mafouta', 'ST', 67, 30], ['Erwin Koffi', 'RB', 65, 30]
     ] },
    { n: 'Stade Lavallois', s: 'LAV', c1: '#FF6600', c2: '#000000', str: 62, p: [
       ['Mamadou Samassa', 'GK', 68, 35], ['Thibaut Vargas', 'RB', 67, 25], ['Théo Pellenard', 'CB', 65, 31],
       ['Yohan Tavares', 'CB', 64, 37], ['Ylies Aradj', 'LB', 58, 20], ['Cyril Mandouki', 'DM', 63, 33],
       ['Sam Sanna', 'CM', 65, 26], ['Ethan Clavreul', 'AM', 52, 19], ['Emmanuel Maddy', 'RW', 59, 24],
       ['Malik Tchokounté', 'ST', 65, 36], ['Aymeric Faurand-Tournaire', 'ST', 56, 21], ['Maxime Hautbois', 'GK', 59, 34],
       ['Peter Ouaneh', 'CB', 62, 27], ['William Bianda', 'CB', 60, 25], ['Malik Sellouki', 'CM', 64, 25],
       ['Noa-Grace Mupemba', 'ST', 54, 22], ['Mamadou Camara', 'ST', 62, 24], ['Julien Maggiotti', 'CM', 63, 29]
     ] },
    { n: 'Montpellier HSC', s: 'MHSC', c1: '#0057B8', c2: '#F58220', str: 69, p: [
       ['Mathieu Michel', 'GK', 67, 33], ['Enzo Tchato', 'RB', 72, 22], ['Bećir Omeragić', 'CB', 75, 23],
       ['Julien Laporte', 'CB', 74, 31], ['Lucas Mincarelli', 'LB', 72, 21], ['Yvan Djemba', 'DM', 57, 20],
       ['Khalil Fayad', 'CM', 71, 21], ['Tedy Savanier', 'AM', 76, 33], ['Nathanaël Mbuku', 'RW', 71, 23],
       ['Alexandre Mendy', 'ST', 72, 31], ['Axel Gueguin', 'LW', 62, 20], ['Simon Ngapandouetnbu', 'GK', 67, 22],
       ['Christopher Jullien', 'CB', 72, 32], ['Théo Sainte-Luce', 'LB', 70, 26], ['Everson Junior', 'CM', 65, 21],
       ['Yanis Issoufou', 'RW', 63, 18], ['Junior Ndiaye', 'ST', 63, 20], ['Yaël Mouanga', 'DM', 67, 19]
     ] },
    { n: 'AS Nancy-Lorraine', s: 'ASNL', c1: '#E3242B', c2: '#FFFFFF', str: 65, p: [
       ['Enzo Basilio', 'GK', 72, 30], ['Rayan Bamba', 'RB', 64, 21], ['Nicolas Saint-Ruf', 'CB', 66, 32],
       ['Nehemiah Fernandez', 'CB', 63, 20], ['Faitout Maouassa', 'LB', 70, 26], ['Teddy Bouriaud', 'DM', 64, 28],
       ['Ć. Suljić', 'CM', 62, 28], ['Walid Bouabdeli', 'AM', 66, 24], ['Jimmy Evans', 'RW', 63, 26],
       ['Adrian Dabasse', 'ST', 67, 31], ['Zakaria Fdaouch', 'AM', 62, 28], ['Martin Sourzac', 'GK', 65, 33],
       ['Yannis Nahounou', 'CB', 63, 21], ['Martin Expérience', 'LB', 63, 26], ['Maxence Carlier', 'DM', 62, 28],
       ['Oumar Sidibé', 'RW', 63, 24], ['Brandon Bokangu', 'ST', 63, 25], ['Cheikh Touré', 'ST', 63, 28]
     ] },
    { n: 'Pau FC', s: 'PAU', c1: '#FFE500', c2: '#0057B8', str: 63, p: [
       ['Esteban Salles', 'GK', 64, 31], ['Tony Pouilly', 'RB', 65, 22], ['Anthony Briançon', 'CB', 68, 30],
       ['Jean Ruiz', 'CB', 66, 27], ['Joseph Kalulu', 'LB', 61, 20], ['Edhy Zuliani', 'AM', 61, 20],
       ['Antonin Bobichon', 'CM', 67, 29], ['Kyllian Gasnier', 'AM', 62, 23], ['Kyliane Dong', 'RW', 63, 20],
       ['Omar Sadik', 'ST', 62, 21], ['Rayane Messi', 'LW', 61, 18], ['Tao Paradowski', 'GK', 60, 20],
       ['Ousmane Kanté', 'CB', 64, 35], ['Enzo Derouin', 'CM', 57, 17], ['Steeve Beusnard', 'CM', 64, 33],
       ['Giovani Versini', 'RW', 60, 21], ['Omar Sissoko', 'ST', 59, 18], ['Daylam Meddah', 'CB', 63, 22]
     ] },
    { n: 'Red Star FC', s: 'RED', c1: '#00A94F', c2: '#FFFFFF', str: 62, p: [
       ['Gaëtan Poussin', 'GK', 67, 26], ['Mohafidh Ahamada', 'RB', 53, 21], ['Pierre Lemonnier', 'CB', 63, 31],
       ['Bradley Danger', 'CB', 61, 27], ['Matthieu Huard', 'LB', 61, 27], ['Giovanni Haag', 'DM', 65, 25],
       ['Samuel Renel', 'CM', 60, 23], ['Saîf-Eddine Khaoui', 'AM', 65, 30], ['Kévin Cabral', 'RW', 60, 25],
       ['Hacène Benali', 'ST', 61, 25], ['Ryad Hachem', 'LW', 62, 27], ['Quentin Beunardeau', 'GK', 61, 31],
       ['Dylan Durivaux', 'CB', 60, 24], ['Joachim Kayi Sanda', 'CB', 58, 18], ['Vincent Kany', 'CM', 53, 23],
       ['Dembo Sylla', 'RW', 59, 22], ['Jovany Ikanga', 'AM', 55, 23], ['Damien Durand', 'LW', 62, 29]
     ] },
    { n: 'Stade de Reims', s: 'REI', c1: '#E3242B', c2: '#FFFFFF', str: 68, p: [
       ['Alexandre Olliero', 'GK', 64, 29], ['Hiroki Sekine', 'RB', 67, 22], ['Joseph Okumu', 'CB', 69, 28],
       ['Nicolas Pallois', 'CB', 69, 37], ['Akieme', 'LB', 69, 27], ['Mory Gbane', 'DM', 66, 24],
       ['Théo Leoni', 'CM', 68, 25], ['Teddy Teuma', 'AM', 71, 31], ['Antoine Leautey', 'RW', 67, 29],
       ['Amine Salama', 'ST', 63, 24], ['Keito Nakamura', 'LW', 72, 24], ['Ewen Jaouen', 'GK', 64, 19],
       ["Elie N'Tamon", 'CB', 60, 21], ['Vincent Burlet', 'LB', 62, 19], ['Yaya Fofana', 'CM', 64, 21],
       ['Mohamed Daramy', 'LW', 69, 23], ['Norman Bassette', 'ST', 62, 20], ['Yohan Demoncy', 'AM', 65, 29]
     ] },
    { n: 'Rodez AF', s: 'ROD', c1: '#0057B8', c2: '#FFFFFF', str: 61, p: [
       ['Quentin Braat', 'GK', 65, 27], ['Mathys Tourraine', 'RB', 66, 24], ['Loni Laurent', 'CB', 62, 24],
       ['Mathis Magnin', 'CB', 60, 23], ["Jean Evan's", 'CM', 59, 26], ['Samy Benchamma', 'DM', 60, 25],
       ['Alexis Trouillet', 'CM', 65, 24], ['Octave Joly', 'DM', 59, 22], ['Taïryk Arconte', 'RW', 62, 21],
       ['Ibrahima Baldé', 'ST', 62, 22], ['Ryan Ponti', 'LW', 55, 27], ['Lucas Margueron', 'GK', 58, 24],
       ['Clément Jolibois', 'CB', 59, 27], ['Raphaël Lipinski', 'LB', 59, 22], ['Wilitty Younoussa', 'CM', 64, 23],
       ['Mehdi Baaloudj', 'ST', 59, 24], ['Kenny Nagera', 'ST', 60, 23], ['Nolan Galves', 'RB', 62, 21]
     ] },
    { n: 'AS Saint-Étienne', s: 'ASSE', c1: '#00A94F', c2: '#FFFFFF', str: 69, p: [
       ['Gautier Larsonneur', 'GK', 72, 28], ['Dennis Appiah', 'RB', 69, 33], ['João Ferreira', 'CB', 69, 24],
       ['Dylan Batubinsika', 'CB', 69, 29], ['Ebenezer Annan', 'LB', 65, 22], ['Pierre-Emmanuel Ekwah', 'DM', 69, 23],
       ['Aïmen Moueffek', 'CM', 66, 24], ['Igor Miladinović', 'AM', 61, 22], ['Irvin Cardona', 'RW', 71, 27],
       ['Lucas Stassin', 'ST', 73, 20], ['Zuriko Davitashvili', 'LW', 72, 24], ['Brice Maubleu', 'GK', 68, 35],
       ['Mickaël Nadé', 'CB', 69, 26], ['Lassana Traoré', 'LB', 57, 18], ['Mahmoud Jaber', 'CM', 62, 25],
       ['Augustine Boakye', 'RW', 67, 24], ['James Duffus', 'ST', 59, 20], ['Florian Tardieu', 'DM', 69, 33]
     ] },
    {
      n: 'FC Metz', s: 'MET', c1: '#8B1F2F', c2: '#FFFFFF', p: [
       ['Jonathan Fischer', 'GK', 65, 23], ['Koffi Kouao', 'RB', 67, 27], ['Sadibou Sané', 'CB', 66, 21],
       ['Terry Yegbe', 'CB', 65, 24], ['Fodé Ballo-Touré', 'LB', 68, 28], ['Benjamin Stambouli', 'DM', 69, 34],
       ['Jessy Deminguet', 'CM', 68, 27], ['Gauthier Hein', 'AM', 72, 28], ['Georgiy Tsitaishvili', 'RW', 68, 24],
       ['Cheikh Sabaly', 'ST', 68, 26], ['Giorgi Abuashvili', 'LW', 62, 22], ['Pape Sy', 'GK', 59, 28],
       ['Urie-Michel Mboula', 'CB', 63, 22], ['Yannis Lawson', 'CM', 62, 20], ['Boubacar Traoré', 'DM', 67, 23],
       ['Joshoghene Asoro', 'RW', 63, 26], ['Habibou Diallo', 'ST', 68, 30], ['Maxime Colin', 'RB', 65, 33]
     ]
    },
    {
      n: 'FC Nantes', s: 'NAN', c1: '#FFE600', c2: '#00A94F', p: [
       ['Anthony Lopes', 'GK', 72, 34], ['Kelvin Amian', 'RB', 69, 27], ['Collins Awaziem', 'CB', 66, 28],
       ['Tylel Tati', 'CB', 63, 17], ['Nicolas Cozza', 'LB', 69, 26], ['Junior Mwanga', 'DM', 68, 22],
       ['Francis Coquelin', 'CM', 71, 34], ['Hong Hyeon Seok', 'AM', 69, 26], ['Mayckel Lahdo', 'RW', 64, 22],
       ['Matthis Abline', 'ST', 72, 22], ['Bahereba Guirassy', 'AM', 63, 18], ['Patrik Carlgren', 'GK', 67, 33],
       ['Uroš Radaković', 'CB', 63, 31], ['Fabien Centonze', 'RB', 66, 29], ['Johann Lepenant', 'CM', 70, 22],
       ['Yassine Benhattab', 'RW', 63, 22], ['Youssef El Arabi', 'ST', 69, 38], ['Mostafa Mohamed', 'ST', 69, 27]
     ]
    }
  ]
};
