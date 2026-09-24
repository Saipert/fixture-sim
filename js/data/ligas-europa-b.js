/* =========================================================================
   LIGAS EUROPEAS (II) — 2025/26
   Bélgica, Suiza, Austria, Escandinavia, Polonia, Croacia, Serbia y Hungría.
   ========================================================================= */
window.LEAGUES = window.LEAGUES || {};

window.LEAGUES.belgica = {
  id: 'belgica', name: 'Belgian Pro League', country: 'Bélgica', ucl: 3, rel: 2,
  pool: 'nl', squadSize: 17, teams: [
    { n: 'RSC Anderlecht', s: 'AND', c1: '#5B2C83', c2: '#FFFFFF', str: 74, p: [
       ['Colin Coosemans', 'GK', 79, 32], ['Killian Sardella', 'RB', 74, 23], ['Yasin Özcan', 'CB', 71, 19],
       ['Lucas Hey', 'CB', 70, 22], ['Ludwig Augustinsson', 'LB', 74, 31], ['Enric Llansana Beuse', 'DM', 74, 24],
       ['Mario Stroeykens', 'CM', 76, 20], ['Tristan Degreef', 'AM', 66, 20], ['César Huerta', 'LW', 75, 24],
       ['Adriano Bertaccini', 'ST', 77, 24], ['Thorgan Hazard', 'LW', 75, 32], ['Mads Kikkenborg', 'GK', 68, 25],
       ['Mihajlo Ilić', 'CB', 70, 21], ["Moussa N'Diaye", 'LB', 74, 23], ['Mats Rits', 'CM', 74, 31],
       ['Alexis Flips', 'LW', 72, 25], ['Luis Vázquez', 'ST', 71, 24], ['Yari Verschaeren', 'CM', 74, 23]
     ] },
    { n: 'Royal Antwerp FC', s: 'ANT', c1: '#E30613', c2: '#FFFFFF', str: 73, p: [
       ['Yannick Thoelen', 'GK', 66, 34], ['Glenn Bijl', 'RB', 71, 29], ['Zeno Van Den Bosch', 'CB', 76, 21],
       ['Boubakar Kouyaté', 'CB', 75, 28], ['Kobe Corbanie', 'RB', 69, 20], ['Geoffry Hairemans', 'AM', 72, 33],
       ['Mahamadou Diawara', 'CM', 71, 20], ['Dennis Praet', 'AM', 75, 31], ['Thibo Somers', 'RW', 75, 26],
       ['Vincent Janssen', 'ST', 79, 31], ['Daam Foulon', 'LW', 74, 26], ['Niels Devalckeneer', 'GK', 60, 21],
       ['Björn Engels', 'CB', 69, 30], ['Semm Renders', 'RB', 64, 17], ['Mauricio Benítez', 'CM', 64, 21],
       ['Gyrano Kerk', 'RW', 74, 29], ['Masoud Al Sahafi', 'AM', 65, 21], ['Anthony Valencia', 'RW', 69, 21]
     ] },
    { n: 'Cercle Brugge', s: 'CER', c1: '#00A94F', c2: '#000000', str: 66, p: [
       ['Warleson', 'GK', 68, 28], ['Valy Konate', 'LB', 60, 18], ['Edgaras Utkus', 'CB', 68, 25],
       ['Christiaan Ravych', 'CB', 68, 22], ['Nazinho', 'LB', 65, 21], ['Nils De Wilde', 'DM', 63, 22],
       ['Hannes Van Der Bruggen', 'CM', 68, 32], ['Oluwaseun Adewumi', 'AM', 57, 20], ['Alan Minda', 'RW', 68, 22],
       ['Oumar Diakité', 'ST', 70, 21], ['Gary Magnée', 'LW', 68, 25], ['Maxime Delanghe', 'GK', 63, 24],
       ['Ibrahim Diakité', 'CB', 64, 21], ['Beni Mpanzu', 'LB', 64, 21], ['Pieter Gerkens', 'CM', 67, 30],
       ['Erick', 'AM', 59, 21], ['Steve Ngoura', 'ST', 65, 20], ['Bruninho', 'LW', 65, 22]
     ] },
    { n: 'Sporting Charleroi', s: 'CHA', c1: '#000000', c2: '#FFFFFF', str: 68, p: [
       ['Martin Delavallée', 'GK', 69, 21], ['Lewin Blum', 'RB', 68, 23], ['Aiham Ousou', 'CB', 70, 25],
       ['Cheick Keita', 'CB', 68, 22], ['Jules Gaudin', 'LB', 67, 25], ['Yassine Titraoui', 'DM', 67, 21],
       ['E. Camara', 'DM', 67, 22], ['Antoine Colassin', 'AM', 63, 24], ['Patrick Pflücke', 'RW', 72, 28],
       ['Aurélien Scheidler', 'ST', 67, 27], ['Parfait Guiagon', 'LW', 71, 24], ['Mohamed Koné', 'GK', 67, 23],
       ['Massamba Sow', 'CB', 63, 21], ['Mardochée Nzita', 'LB', 64, 25], ['Amine Boukamir', 'DM', 56, 18],
       ['Kevin Van Den Kerkhof', 'RW', 69, 29], ['Filip Szymczak', 'AM', 64, 23], ['Antoine Bernier', 'RW', 69, 27]
     ] },
    { n: 'Club Brugge', s: 'CLB', c1: '#0057B8', c2: '#000000', str: 76, p: [
       ['Simon Mignolet', 'GK', 75, 37], ['Joaquin Seys', 'RB', 74, 20], ['Brandon Mechele', 'CB', 77, 32],
       ['Joel Ordoñez', 'CB', 76, 21], ['Bjorn Meijer', 'LB', 73, 22], ['Raphael Onyedika', 'DM', 78, 24],
       ['Ludovit Reis', 'CM', 74, 25], ['Hans Vanaken', 'AM', 81, 32], ['Hugo Siquet', 'RW', 71, 22],
       ['Gustaf Nilsson', 'ST', 76, 28], ['Christos Tzolis', 'LW', 81, 23], ['Nordin Jackers', 'GK', 71, 27],
       ['Zaid Romero', 'CB', 73, 25], ['Kyriani Sabbe', 'RB', 72, 20], ['Alejandro Granados', 'CM', 66, 19],
       ['Mamadou Diakhon', 'RW', 67, 19], ['Romeo Vermant', 'ST', 73, 21], ['Hugo Vetlesen', 'DM', 72, 25]
     ] },
    { n: 'KV Kortrijk', s: 'KOR', c1: '#E30613', c2: '#FFFFFF', str: 64, p: [
       ['Ebbe De Vlaeminck', 'GK', 64, 21], ['Ryan Alebiosu', 'RB', 60, 25], ['Mark Mampassi', 'CB', 63, 23],
       ['Nayel Mehssatou', 'CB', 64, 24], ['Gilles Dewaele', 'LB', 61, 30], ['Dermane Karim', 'DM', 66, 23],
       ['Dion De Neve', 'CM', 64, 25], ['Iver Fossum', 'AM', 66, 30], ['Mounaïm El Idrissy', 'RW', 63, 27],
       ['Abdelkahar Kadri', 'ST', 70, 26], ['Massimo Bruno', 'LW', 62, 33], ['Patrik Gunnarsson', 'GK', 65, 26],
       ['Haruya Fujii', 'CB', 60, 26], ['Bram Lagae', 'LB', 62, 22], ['Brecht Dejaegere', 'CM', 61, 35],
       ['Ignacio Ferri Julià', 'RW', 64, 22], ['Thierry Ambrose', 'ST', 58, 29], ['Ryotaro Tsunoda', 'CB', 60, 27],
       ['Lucas Pirard', 'GK', 64, 31], ['João Antunes da Silva', 'CB', 56, 27], ['Marco Ilaimaharitra', 'CM', 68, 31],
       ['Abdoulaye Sissako', 'CM', 64, 28]
     ] },
    { n: 'KAA Gent', s: 'GEN', c1: '#0057B8', c2: '#FFFFFF', str: 74, p: [
       ['Dirk Roef', 'GK', 79, 31], ['Matisse Samoise', 'RB', 73, 23], ['Siebe Van der Heyden', 'CB', 76, 27],
       ['Stefan Mitrović', 'CB', 73, 35], ['Jean-Kévin Duverne', 'LB', 74, 27], ['Atsuki Ito', 'DM', 73, 26],
       ['Abdelkahar Kadri', 'CM', 76, 25], ['Omri Gandelman', 'AM', 74, 25], ['Michał Skóraś', 'RW', 73, 25],
       ['Dante Vanzeir', 'ST', 75, 27], ['Tiago Araújo', 'LW', 72, 24], ['Tom Vandenberghe', 'GK', 71, 32],
       ['Hatim Essaouabi', 'CB', 68, 24], ['Bram Lagae', 'CB', 68, 21], ['Mathias Delorge', 'CM', 75, 20],
       ['Franck Surdez', 'LW', 72, 23], ['Wilfried Kanga', 'ST', 72, 27], ['Leonardo Lopes', 'CM', 73, 26]
     ] },
    { n: 'KRC Genk', s: 'GNK', c1: '#0057B8', c2: '#FFFFFF', str: 75, p: [
       ['Tobias Lawal', 'GK', 73, 25], ['Zakaria El Ouahdi', 'RB', 77, 23], ['Matte Smets', 'CB', 77, 21],
       ['Mujaid', 'CB', 75, 25], ['Joris Kayembe', 'LB', 75, 30], ['Bryan Heynen', 'DM', 79, 28],
       ['Patrik Hrošovský', 'CM', 77, 33], ['Daan Heymans', 'AM', 72, 26], ['Junya Ito', 'RW', 78, 32],
       ['Yira Sor', 'ST', 73, 24], ['Luca Oyen', 'LW', 68, 22], ['Hendrik Van Crombrugge', 'GK', 70, 32],
       ['Josue Kongolo', 'CB', 63, 19], ['Yaimar Medina', 'LB', 71, 20], ['Konstantinos Karetsas', 'AM', 71, 17],
       ['Jarne Steuckers', 'RW', 76, 23], ['Oh Hyeon Gyu', 'ST', 72, 24], ['Nikolas Sattlberger', 'DM', 71, 21]
     ] },
    { n: 'RAAL La Louvière', s: 'LAL', c1: '#00A94F', c2: '#FFFFFF', str: 61, p: [
       ['Marcos Peano', 'GK', 62, 26], ['Darío Benavides', 'RB', 60, 22], ['Matthis Riou', 'CB', 61, 24],
       ['Wagane Faye', 'CB', 61, 31], ['Djibril Lamego', 'LB', 61, 22], ['Adelin Beka Beka', 'DM', 64, 24],
       ['Maxime Pau', 'CM', 63, 25], ['Owen Maës', 'CM', 60, 26], ['Menaour Belkheir', 'RW', 65, 26],
       ['Mohamed Guindo', 'ST', 60, 21], ['Oucasse Mendy', 'LW', 57, 24], ['Célestin De Schrevel', 'GK', 56, 23],
       ['Yllan Okou', 'CB', 60, 22], ['Thierry Lutonda', 'CM', 59, 24], ['Joel Ito', 'CM', 60, 27],
       ['Jordi Liongola', 'RW', 63, 25], ['Pape Fall', 'ST', 55, 20], ['Maxence Maisonneuve', 'CB', 60, 26]
     ] },
    { n: 'KV Mechelen', s: 'MEC', c1: '#FFE500', c2: '#E30613', str: 65, p: [
       ['Ortwin De Wolf', 'GK', 72, 28], ['Thérence Koudou', 'RB', 65, 20], ['José Marsà', 'CB', 64, 23],
       ['Tommy St. Jago', 'CB', 63, 25], ['Redouane Halhal', 'CB', 60, 22], ['Mory Konaté', 'DM', 68, 31],
       ['Elton Yeboah', 'CM', 54, 20], ['Kerim Mrabti', 'AM', 71, 31], ['Bill Antonio', 'RW', 59, 22],
       ['Benito Raman', 'ST', 70, 30], ['Myron van Brederode', 'LW', 67, 21], ['Nacho Miras', 'GK', 60, 27],
       ['Gora Diouf', 'CB', 63, 21], ['Lovro Golič', 'CB', 59, 19], ['Amine Ouahabi', 'CM', 52, 16],
       ['Keano Vanrafelghem', 'ST', 60, 21], ['Lion Lauberbach', 'ST', 68, 27], ['Ryan Teague', 'DM', 66, 23]
     ] },
    { n: 'OH Leuven', s: 'OHL', c1: '#FFFFFF', c2: '#0057B8', str: 64, p: [
       ['Tobe Leysen', 'GK', 67, 23], ['Óscar Gil', 'RB', 63, 27], ['Noë Dussenne', 'CB', 67, 33],
       ['Takuma Ominami', 'CB', 64, 27], ['Takahiro Akimoto', 'LB', 63, 27], ['Łukasz Łakomy', 'CM', 64, 24],
       ['Siebe Schrijvers', 'CM', 68, 28], ['Youssef Maziz', 'AM', 66, 27], ['Casper Terho', 'RW', 60, 22],
       ['Chukwubuikem Ikwuemesi', 'ST', 62, 23], ['Thibaud Verlinden', 'LW', 64, 25], ['Maxence Prévot', 'GK', 61, 28],
       ['Ewoud Pletinckx', 'CB', 64, 24], ['Christ Souanga', 'LB', 49, 18], ['Birger Verstraete', 'CM', 65, 31],
       ['Thibault Vlietinck', 'RW', 59, 27], ['Sory Kaba', 'ST', 61, 30], ['Mathieu Maertens', 'AM', 63, 30]
     ] },
    { n: 'Sint-Truiden', s: 'STV', c1: '#FFE500', c2: '#0057B8', str: 65, p: [
       ['Leo Kokubo', 'GK', 68, 24], ['Wolke Janssens', 'CB', 63, 29], ['Shogo Taniguchi', 'CB', 67, 33],
       ['Rein Van Helden', 'CB', 67, 22], ['Simen Juklerød', 'LB', 63, 31], ['Rihito Yamamoto', 'CM', 63, 23],
       ['Ryotaro Ito', 'CM', 69, 27], ['Isaías Delpupo', 'AM', 59, 22], ['Robert-Jan Vanwesemael', 'RW', 64, 23],
       ['Andrés Ferrari', 'ST', 65, 22], ['Loïc Lapoussin', 'LW', 70, 29], ['Jo Coppens', 'GK', 60, 34],
       ['Visar Musliu', 'CB', 66, 30], ['Hugo Lambotte', 'CB', 53, 19], ['Abdoulaye Sissako', 'CM', 65, 27],
       ['Arbnor Muja', 'LW', 69, 26], ['Jay-David Mbalanda', 'AM', 57, 18], ['Ilias Sebaoui', 'LW', 64, 23]
     ] },
    { n: 'Standard de Lieja', s: 'STA', c1: '#E30613', c2: '#FFFFFF', str: 70, p: [
       ['Matthieu Epolo', 'GK', 74, 20], ['Marlon Fossey', 'RB', 72, 26], ['Ibe Hautekiet', 'CB', 70, 23],
       ['David Bates', 'CB', 70, 28], ['Souleyman Doumbia', 'LB', 69, 28], ['Marco Ilaimaharitra', 'DM', 72, 29],
       ['Léandre Kuavita', 'CM', 66, 21], ['Casper Nielsen', 'DM', 71, 31], ['Adnane Abid', 'AM', 61, 21],
       ['Dennis-Yerai Eckert Ayensa', 'ST', 74, 28], ['Mohammed El Hankouri', 'LW', 72, 28], ['Lucas Pirard', 'GK', 68, 30],
       ['Josué Homawoo', 'CB', 68, 27], ['Bolingoli-Mbombo Bolingoli', 'LB', 66, 30], ['Bradley Nam James', 'CM', 53, 18],
       ['Timothé Nkada', 'ST', 71, 25], ['Thomas Henry', 'ST', 72, 30], ['Tobias Mohr', 'LW', 70, 29]
     ] },
    { n: 'Union Saint-Gilloise', s: 'USG', c1: '#FFE500', c2: '#0057B8', str: 71, p: [
       ['Kjell Scherpen', 'GK', 71, 25], ['Fedde Leysen', 'CB', 66, 21], ['Christian Burgess', 'CB', 76, 33],
       ['Kevin Mac Allister', 'CB', 74, 27], ['Mamadou Barry', 'CB', 58, 20], ['Adem Zorgane', 'DM', 76, 25],
       ['Rob Schoofs', 'CM', 74, 31], ['Sofiane Boufal', 'AM', 72, 31], ['Anan Khalaili', 'RW', 71, 20],
       ['Promise David', 'ST', 73, 23], ['Ousseynou Niang', 'LW', 68, 23], ['Vic Chambaere', 'GK', 61, 22],
       ['Ross Sykes', 'CB', 70, 26], ['Ait Ait El Hadj', 'AM', 70, 23], ['Mathias Rasmussen', 'CM', 69, 27],
       ['Raul Florucz', 'RW', 68, 24], ['Mohammed Fuseini', 'ST', 69, 23], ['Louis Patris', 'RW', 67, 24]
     ] },
    { n: 'KVC Westerlo', s: 'WES', c1: '#FFE500', c2: '#0057B8', str: 63, p: [
       ['Sinan Bolat', 'GK', 63, 36], ['Bryan Reynolds', 'RB', 66, 24], ['Emin Bayram', 'CB', 66, 22],
       ['Roman Neustädter', 'CB', 62, 37], ['Tuur Rommens', 'LB', 62, 22], ['Doğucan Haspolat', 'DM', 67, 25],
       ['Thomas Van Den Keybus', 'CM', 61, 24], ['Ján Bernát', 'AM', 56, 24], ['Griffin Yow', 'RW', 62, 22],
       ['Nacho Ferri', 'ST', 60, 20], ['Allahyar Sayyadmanesh', 'LW', 67, 24], ['Koen Van Langendonck', 'GK', 61, 36],
       ['Amando Lapage', 'CB', 55, 20], ['Bakary Haidara', 'CB', 54, 20], ['Reda Laalaoui', 'CM', 54, 20],
       ['Awokoya-Mebude Mebude', 'RW', 57, 21], ['Kyan Vaesen', 'ST', 59, 24], ['SydorchukСидорчук Sydorchuk', 'DM', 62, 34]
     ] },
    { n: 'SV Zulte Waregem', s: 'ZWA', c1: '#E30613', c2: '#FFFFFF', str: 66, p: [
       ['Ennio van der Gouw', 'GK', 65, 24], ['Benoit Nyssen', 'RB', 64, 27], ['Anton Tanghe', 'CB', 66, 26],
       ['Jakob Kiilerich', 'CB', 66, 25], ['Emran Soglo', 'LB', 63, 19], ['Enrique Lofolomo', 'DM', 65, 25],
       ['Thomas Claes', 'CM', 65, 21], ['Jeppe Erenbjerg', 'AM', 68, 25], ['Stavros Gavriel', 'RW', 68, 23],
       ['Jelle Vossen', 'ST', 70, 36], ['Joseph Opoku', 'LW', 68, 19], ['Brent Gabriël', 'GK', 64, 26],
       ['Laurent Lemoine', 'CB', 64, 27], ['Yannick Cappelle', 'LB', 60, 21], ['Tochukwu Nnadi', 'CM', 57, 22],
       ['Nikola Mituljikic', 'RW', 64, 22], ['Anosike Ementa', 'AM', 63, 23], ['Mickaël Aké', 'LW', 68, 24]
     ] }
  ,
    { n: 'SK Beveren', s: 'BEV', c1: '#FFE500', c2: '#0057B8', str: 66, p: [
       ['Beau Reus', 'GK', 69, 31], ['Viktor Boone', 'RB', 64, 32], ['Christophe Janssens', 'CB', 68, 25],
       ['Ahmed Khatir', 'CB', 55, 20], ['Dylan Dassy', 'LB', 69, 25], ['Guillaume De Schryver', 'DM', 69, 23],
       ['Sieben Dewaele', 'CM', 68, 23], ['Christian Brüls', 'AM', 64, 22], ['Ilyes Najim', 'RW', 66, 23],
       ['Mathis Servais', 'ST', 66, 20], ['Yutaka Michiwaki', 'LW', 65, 26], ['Maxim Deman', 'GK', 62, 32],
       ['Laurent Jans', 'CB', 60, 28], ['Abdul Aziz Ouedraogo', 'LB', 64, 32], ['Noah Mawete', 'CM', 64, 22],
       ['Kurt Abrahams', 'RW', 62, 33], ['Hüseyin Ertürk', 'ST', 62, 26], ['Bruno Godeau', 'CB', 63, 25],
       ['Yoni Gomis', 'CB', 62, 29], ['Jannes Van Hecke', 'CM', 60, 31], ['Josua Lusamba', 'GK', 59, 21],
       ['Lennart Mertens', 'ST', 58, 25]
     ] },
    { n: 'Lommel SK', s: 'LOM', c1: '#00A94F', c2: '#FFFFFF', str: 62, p: [
       ['Nikola Ivezić', 'GK', 59, 33], ['Timothy Eyoma', 'RB', 60, 21], ['Shawn Adewoye', 'CB', 65, 25],
       ['Dries Wouters', 'CB', 63, 20], ['Jhon Banguera', 'LB', 64, 26], ['Joey Pelupessy', 'DM', 62, 25],
       ['Nicolas Rommens', 'CM', 62, 27], ['Lucas Schoofs', 'AM', 64, 27], ['Jason van Duiven', 'RW', 60, 31],
       ['Juho Talvitie', 'ST', 61, 20], ['Don-Angelo Konadu', 'LW', 61, 19], ['Matthias Pieklak', 'GK', 55, 30],
       ['Jesper Tolinsson', 'CB', 58, 30], ['Josias Lama', 'LB', 57, 27], ['Đorđe Gordić', 'CM', 57, 29],
       ['Tom Reyners', 'RW', 59, 29], ['Stredair Appuah', 'ST', 58, 24], ['Henry Oware', 'CB', 55, 33],
       ['Elijah Odede', 'ST', 56, 18], ['Ralf Seuntjens', 'ST', 53, 25], ['Rik Vercauteren', 'GK', 56, 25],
       ['Sverre Nypan', 'CM', 67, 18]
     ] }
  ]
};

window.LEAGUES.suiza = {
  id: 'suiza', name: 'Swiss Super League', country: 'Suiza', ucl: 2, rel: 1,
  pool: 'de', squadSize: 17, teams: [
    { n: 'FC Basilea', s: 'BAS', c1: '#E30613', c2: '#0057B8', str: 70, p: [
       ['Marwin Hitz', 'GK', 72, 37], ['Keigo Tsunemoto', 'RB', 69, 26], ['Flavius Daniliuc', 'CB', 70, 24],
       ['Adrian Barišić', 'CB', 70, 24], ['Dominik Schmid', 'LB', 72, 27], ['Léo Leroy', 'DM', 69, 25],
       ['Koba Koindredi', 'CM', 68, 23], ['Xherdan Shaqiri', 'AM', 76, 33], ['Jeremy Agbonifo', 'AM', 64, 19],
       ['Moritz Broschinski', 'ST', 67, 24], ['Bénie Traoré', 'LW', 73, 22], ['Mirko Salvi', 'GK', 59, 31],
       ['Jonas Adjetey', 'CB', 68, 21], ['Moussa Cissé', 'LB', 62, 22], ['Dion Kacuri', 'CM', 59, 21],
       ['Marin Soticek', 'RW', 64, 20], ['Afrim Ajeti', 'ST', 66, 28], ['Porwei Otele', 'LW', 71, 26]
     ] },
    { n: 'Grasshopper Club', s: 'GCZ', c1: '#0057B8', c2: '#FFFFFF', str: 63, p: [
       ['Justin Hammel', 'GK', 70, 24], ['Dirk Abels', 'RB', 63, 28], ['Abdoulaye Diaby', 'CB', 64, 24],
       ['Saulo Decarli', 'CB', 61, 33], ['Loris Giandomenico', 'LB', 52, 19], ['Amir Abrashi', 'DM', 64, 35],
       ['Tim Meyer', 'CM', 61, 20], ['Jonathan Asp-Jensen', 'AM', 63, 19], ['Tomás Verón', 'RW', 64, 24],
       ['Lee Young Jun', 'ST', 64, 22], ['Óscar Clemente', 'LW', 63, 26], ['Nicolas Glaus', 'GK', 54, 23],
       ['Yannick Bettkober', 'CB', 57, 20], ['Allan Arigoni', 'RB', 61, 26], ['Samuel Marques', 'CM', 53, 20],
       ['Luke Plange', 'ST', 60, 22], ['Nikolas Muci', 'ST', 62, 22], ['Lovro Zvonarek', 'AM', 63, 20]
     ] },
    { n: 'FC Lausanne-Sport', s: 'LAU', c1: '#0057B8', c2: '#FFFFFF', str: 61, p: [
       ['Karlo Letica', 'GK', 64, 28], ['Hamza Abdallah', 'RB', 52, 22], ['Kévin Mouanga', 'CB', 63, 24],
       ['Karim Sow', 'CB', 62, 22], ['Morgan Poaty', 'LB', 64, 27], ['Olivier Custodio', 'CM', 62, 30],
       ['John Roche', 'CM', 65, 24], ['Beyatt Lekoueiry', 'AM', 56, 20], ['Muhannad Al Saad', 'RW', 63, 22],
       ['Thelonius Bair', 'ST', 66, 25], ['Manuel Polster', 'AM', 56, 22], ['Thomas Castella', 'GK', 56, 32],
       ['Bryan Okoh', 'CB', 59, 22], ['Sékou Fofana', 'LB', 55, 22], ['Nicky Beloko', 'CM', 62, 25],
       ['Brandon Soppy', 'RW', 61, 23], ['Alban Ajdini', 'ST', 64, 25], ['Gaoussou Diakité', 'ST', 57, 19]
     ] },
    { n: 'FC Lugano', s: 'LUG', c1: '#000000', c2: '#FFFFFF', str: 64, p: [
       ['Amir Saipi', 'GK', 65, 24], ['Mattia Zanotti', 'RB', 67, 22], ['Antonios Papadopoulos', 'CB', 65, 25],
       ['Lukas Mai', 'CB', 62, 25], ['Ezgjan Alioski', 'LB', 62, 33], ['Anto Grgić', 'DM', 65, 28],
       ['Uran Bislimi', 'CM', 66, 25], ['Mattia Bottani', 'AM', 61, 34], ['Renato Steffen', 'RW', 69, 33],
       ['Kevin Behrens', 'ST', 65, 34], ['Yanis Cimignani', 'LW', 62, 23], ['David von Ballmoos', 'GK', 64, 30],
       ['Ayman El Wafi', 'CB', 58, 21], ['Martim Marques', 'LB', 59, 21], ['Ahmed Kendouci', 'CM', 65, 26],
       ['Hicham Mahou', 'LW', 60, 25], ['Georgios Koutsias', 'ST', 60, 21], ['Ousmane Doumbia', 'DM', 64, 33]
     ] },
    { n: 'FC Luzern', s: 'LUZ', c1: '#0057B8', c2: '#FFFFFF', str: 64, p: [
       ['Pascal Loretz', 'GK', 69, 22], ['Pius Dorn', 'RB', 66, 28], ['Stefan Knežević', 'CB', 65, 28],
       ['Adrian Bajrami', 'CB', 64, 23], ['Andrejs Cigaņiks', 'LB', 64, 28], ['Taisei Abe', 'DM', 58, 21],
       ['Levin Winkler', 'CM', 62, 21], ['Matteo Di Giusto', 'AM', 67, 24], ['Julian von Moos', 'RW', 63, 24],
       ['Sinan Karweina', 'ST', 65, 26], ['Kevin Spadanuda', 'LW', 64, 28], ['VasićВасо Vasić', 'GK', 60, 35],
       ['Isak Beka', 'CB', 62, 25], ['Rúben Dantas Fernandes', 'CM', 59, 22], ['Tyron Owusu', 'CM', 58, 22],
       ['Oscar Kabwit', 'RW', 49, 20], ['Lars Villiger', 'ST', 65, 22], ['Severin Ottiger', 'RB', 64, 22]
     ] },
    { n: 'FC Sion', s: 'SIO', c1: '#E30613', c2: '#FFFFFF', str: 63, p: [
       ['Anthony Racioppi', 'GK', 64, 26], ['Numa Lavanchy', 'RB', 65, 31], ['Kreshnik Hajrizi', 'CB', 62, 26],
       ['Noé Sow', 'CB', 59, 26], ['Nias Hefti', 'LB', 61, 25], ['Lamine Diack', 'DM', 62, 24],
       ['Baltazar', 'CM', 63, 25], ['Donat Rrudhani', 'AM', 65, 26], ['Théo Berdayes', 'RW', 60, 23],
       ['Ilyas Chouaref', 'ST', 64, 24], ['Benjamin Kololli', 'LW', 63, 33], ['Francesco Ruberto', 'GK', 60, 32],
       ['Jan Kronig', 'CB', 56, 25], ['Marquinhos Cipriano', 'LB', 60, 26], ['Liam Chipperfield', 'CM', 58, 21],
       ['Ruben Londja', 'RW', 57, 19], ['Rilind Nivokazi', 'ST', 59, 25], ['Ali Kabacalman', 'DM', 62, 29]
     ] },
    { n: 'FC St. Gallen', s: 'SG', c1: '#00A94F', c2: '#FFFFFF', str: 64, p: [
       ['Lawrence Zigi', 'GK', 68, 28], ['Hugo Vandermersch', 'RB', 64, 26], ['Albert Vallci', 'CB', 64, 29],
       ['Jozo Stanić', 'CB', 63, 26], ['Chima Okoroji', 'LB', 63, 28], ['Jordi Quintillà', 'DM', 65, 31],
       ['Lukas Görtler', 'CM', 67, 31], ['Lukas Daschner', 'AM', 66, 26], ['Aliou Baldé', 'RW', 61, 22],
       ['Shkëlqim Vladi', 'ST', 61, 24], ['Enoch Owusu', 'RW', 50, 20], ['Lukas Watkowiak', 'GK', 56, 29],
       ['Stephan Ambrosius', 'CB', 63, 26], ['Tom Gaal', 'CB', 62, 24], ['Christian Witzig', 'CM', 65, 24],
       ['Malamine Efekele', 'RW', 58, 20], ['Alessandro Vogt', 'ST', 53, 20], ['Carlo Boukhalfa', 'CM', 65, 26]
     ] },
    { n: 'FC Thun', s: 'THU', c1: '#E30613', c2: '#FFFFFF', str: 64, p: [
       ['Niklas Steffen', 'GK', 64, 24], ['Lucien Dähler', 'RB', 61, 24], ['Genís', 'CB', 65, 28],
       ['Marco Bürki', 'CB', 64, 31], ['Fabio Fehr', 'LB', 68, 25], ['Leonardo Bertone', 'DM', 68, 31],
       ['Kastriot Imeri', 'CM', 66, 25], ['Nils Reichmuth', 'AM', 63, 23], ['Christopher Ibayi', 'ST', 63, 29],
       ['Brighton Labeau', 'ST', 67, 29], ['Marc Gutbub', 'ST', 61, 22], ['Nino Ziswiler', 'GK', 58, 25],
       ['Jan Bamert', 'CB', 64, 27], ['Dominik Franke', 'LB', 64, 26], ['Mattias Käit', 'CM', 64, 27],
       ['Elmin Rastoder', 'ST', 58, 23], ['Layton Stewart', 'ST', 64, 22], ['Vasilije Janjičić', 'DM', 63, 26]
     ] },
    { n: 'FC Aarau', s: 'AAR', c1: '#FFFFFF', c2: '#000000', str: 58, p: [
       ['Andreas Hirzel', 'GK', 56, 21], ['Marco Thaler', 'RB', 59, 25], ['Ramon Guzzo', 'CB', 58, 28],
       ['Binjamin Hasani', 'CB', 60, 20], ['David Acquah', 'LB', 59, 33], ['Izer Aliu', 'DM', 57, 25],
       ['Guillaume Furrer', 'CM', 59, 20], ['Kastrijot Ndau', 'AM', 57, 20], ['Mohamed Guindo', 'RW', 58, 21],
       ['Roko Baturina', 'ST', 60, 24], ['Shkelqim Vladi', 'LW', 59, 24], ['Melvin Frei', 'GK', 57, 24],
       ['Serge Müller', 'CB', 56, 26], ['Jasper van der Werff', 'LB', 58, 26], ['Damjan Čorić', 'CM', 55, 21],
       ['Henri Koide', 'RW', 53, 24], ['Daniel Afriyie', 'ST', 54, 32], ['Eliah Jordan', 'CB', 54, 20],
       ['Tomislav Arković', 'CB', 52, 24], ['Linus Obexer', 'CB', 53, 23], ['Marcin Dickenmann', 'DM', 50, 29],
       ['Victor Petit', 'CB', 52, 31]
     ] },
    { n: 'FC Zúrich', s: 'FCZ', c1: '#FFFFFF', c2: '#0057B8', str: 63, p: [
       ['Yanick Brecher', 'GK', 69, 32], ['Lindrit Kamberi', 'RB', 66, 25], ['Jorge Segura', 'CB', 63, 28],
       ['Mariano Gómez', 'CB', 62, 26], ['Milan Rodić', 'LB', 66, 34], ['Cosimo Fiorini', 'DM', 53, 19],
       ['Nelson Palacio', 'CM', 67, 24], ['Nevio Di Giusto', 'AM', 55, 20], ['Lisandru Tramoni', 'RW', 64, 22],
       ['Steven Zuber', 'ST', 72, 33], ['Matthias Phaëton', 'LW', 65, 25], ['Simon Huber', 'GK', 54, 19],
       ['Daniel Ihendu', 'CB', 59, 19], ['Nemanja Tošić', 'LB', 65, 28], ['Bledian Krasniqi', 'CM', 66, 24],
       ['Jahnoah Markelo', 'AM', 61, 22], ['José Perea', 'ST', 65, 25], ['Paulin Keny', 'ST', 65, 26]
     ] },
    { n: 'Servette FC', s: 'SER', c1: '#8B1F2F', c2: '#FFFFFF', str: 64, p: [
       ['Jérémy Frick', 'GK', 64, 32], ['Théo Magnin', 'RB', 59, 21], ['Steve Rouiller', 'CB', 66, 34],
       ['Daniel Bronn', 'CB', 62, 30], ['Bradley Mazikou', 'LB', 63, 29], ['Lamine Fomba', 'DM', 63, 27],
       ['Timothé Cognat', 'CM', 69, 27], ['Giuseppe Morandi', 'AM', 64, 26], ['Miroslav Stevanović', 'RW', 69, 34],
       ['Florian Ayé', 'ST', 64, 28], ['Tiemoko Ouattara', 'LW', 56, 20], ['Joël Mall', 'GK', 64, 34],
       ['Yoan Severin', 'CB', 62, 28], ['Anthony Baron', 'LB', 60, 32], ['Mattéo Anselme', 'CM', 45, 18],
       ['Abdoulie Jallow', 'RW', 65, 26], ['Samuel Mráz', 'ST', 62, 28], ['Alexis Antunes', 'AM', 63, 24]
     ] },
    { n: 'BSC Young Boys', s: 'YB', c1: '#FFE500', c2: '#000000', str: 69, p: [
       ['Marvin Keller', 'GK', 69, 22], ['Ryan Andrews', 'RB', 65, 20], ['Gregory Wüthrich', 'CB', 70, 30],
       ['Sandro Lauper', 'CB', 67, 28], ['Jaouen Hadjam', 'LB', 66, 22], ['Edimilson Fernandes', 'DM', 71, 29],
       ['Armin Gigović', 'CM', 69, 23], ['Alvyn Sanches', 'AM', 70, 22], ['Christian Fassnacht', 'RW', 69, 31],
       ['Chris Bedia', 'ST', 67, 29], ['Joël Almada Monteiro', 'LW', 70, 25], ['Heinz Lindner', 'GK', 64, 34],
       ['Loris Benito', 'CB', 67, 33], ['Rhodri Smith', 'LB', 57, 18], ['Rayan Raveloson', 'CM', 68, 28],
       ['Darian Males', 'RW', 68, 24], ['Sergio Córdova', 'ST', 64, 27], ['Dominik Pech', 'CM', 65, 18]
     ] }
  ]
};

window.LEAGUES.austria = {
  id: 'austria', name: 'Österreichische Bundesliga', country: 'Austria', ucl: 2, rel: 1,
  pool: 'de', squadSize: 17, teams: [
    { n: 'SCR Altach', s: 'ALT', c1: '#E30613', c2: '#FFFFFF', str: 61, p: [
       ['Dejan Stojanović', 'GK', 65, 31], ['Sandro Ingolitsch', 'RB', 61, 28], ['Paul-Friedrich Koller', 'CB', 63, 23],
       ['Benedikt Zech', 'CB', 62, 34], ['Mohamed Ouédraogo', 'LB', 60, 22], ['Yann Massombo', 'DM', 60, 25],
       ['Mike-Steven Bähre', 'CM', 61, 29], ['Alexander Gorgon', 'AM', 59, 36], ['Luca Kronberger', 'LW', 59, 23],
       ['M. Mustapha', 'ST', 60, 24], ['Leonardo Lukačević', 'LW', 60, 26], ['Daniel Antosch', 'GK', 58, 25],
       ['Lukas Gugganig', 'CB', 61, 30], ['Filip Milojević', 'CB', 50, 20], ['Moritz Oswald', 'CM', 60, 23],
       ['Ousmane Diawara', 'ST', 58, 25], ['Srdjan Hrstić', 'ST', 59, 21], ['Vesel Demaku', 'CM', 60, 25]
     ] },
    { n: 'FK Austria Viena', s: 'AUS', c1: '#5B2C83', c2: '#FFFFFF', str: 64, p: [
       ['Sahin-Radlinger Şahin-Radlinger', 'GK', 68, 32], ['Reinhold Ranftl', 'RB', 68, 33], ['Aleksandar Dragović', 'CB', 71, 34],
       ['Philipp Wiesinger', 'CB', 66, 31], ['Lee Tae Seok', 'LB', 66, 22], ['Lee Kang Hee', 'DM', 60, 23],
       ['Manfred Fischer', 'CM', 67, 29], ['Sanel Šaljić', 'AM', 57, 19], ['Noah Botić', 'ST', 65, 23],
       ['Johannes Eggestein', 'ST', 67, 27], ['Marko Raguž', 'ST', 61, 27], ['Mirko Kos', 'GK', 62, 28],
       ['Tin Plavotić', 'CB', 66, 28], ['Hakim Guenouche', 'CM', 62, 25], ['Abubakr Barry', 'CM', 65, 24],
       ['Kelvin Boateng', 'ST', 61, 25], ['Manprit Sarkaria', 'ST', 65, 28], ['Johannes Handl', 'CB', 65, 27]
     ] },
    { n: 'WSG Tirol', s: 'WSG', c1: '#00A94F', c2: '#FFFFFF', str: 61, p: [
       ['Adam Stejskal', 'GK', 61, 23], ['Lukas Sulzbacher', 'RB', 62, 25], ['Jamie Lawrence', 'CB', 66, 22],
       ['David Gugganig', 'CB', 62, 28], ['Benjamin Böckle', 'LB', 61, 23], ['Valentino Müller', 'DM', 63, 26],
       ['Matthäus Taferner', 'CM', 65, 24], ['Moritz Wels', 'AM', 59, 20], ['Quincy Butler', 'AM', 58, 23],
       ['Thomas Sabitzer', 'ST', 61, 24], ['Florian Rieder', 'LW', 59, 29], ['Alexander Eckmayr', 'GK', 55, 25],
       ['Marco Boras', 'CB', 60, 23], ['David Kubatta', 'CB', 58, 21], ['Johannes Naschberger', 'CM', 59, 25],
       ['Mahamadou Diarra', 'ST', 59, 21], ['Lukas Hinterseer', 'ST', 59, 34], ['Tobias Anselm', 'ST', 58, 25]
     ] },
    { n: 'Austria Lustenau', s: 'LUS', c1: '#00A94F', c2: '#FFFFFF', str: 59, p: [
       ['Ammar Helac', 'GK', 57, 28], ['Kennedy Boateng', 'RB', 62, 30], ['Tobias Berger', 'CB', 60, 25],
       ['Leo Mätzler', 'CB', 55, 24], ['Darijo Grujcic', 'LB', 61, 27], ['Torben Rhein', 'DM', 62, 23],
       ['Nico Gorzel', 'CM', 59, 28], ['Yadaly Diaby', 'AM', 59, 26], ['Lukas Fridrikas', 'RW', 59, 29],
       ['Leo Mikić', 'ST', 58, 29], ['Namory Cisse', 'LW', 59, 23], ['Domenik Schierl', 'GK', 53, 32],
       ['Fabian Gmeiner', 'CB', 58, 29], ['Baïla Diallo', 'LB', 58, 25], ['Pius Grabher', 'CM', 57, 33],
       ['Anthony Schmid', 'RW', 57, 27], ['Ben Bobzien', 'ST', 60, 23], ['Matheus Lins', 'CB', 54, 25],
       ['Paterson Chato', 'CM', 55, 30], ['Anderson', 'CB', 61, 28], ['Simon Nesler-Täubl', 'GK', 54, 21],
       ['Rafael Devisate', 'CM', 52, 21]
     ] },
    { n: 'Grazer AK', s: 'GAK', c1: '#E30613', c2: '#FFFFFF', str: 62, p: [
       ['Jakob Meierhofer', 'GK', 61, 27], ['Lukas Graf', 'CB', 60, 30], ['Donovan Pines', 'CB', 64, 27],
       ['Petar Filipović', 'CB', 63, 34], ['Jacob Italiano', 'LB', 61, 23], ['Sadik Fofana', 'DM', 62, 22],
       ['Murat Şatin', 'CM', 62, 28], ['Z. Jánó', 'AM', 59, 20], ['Dominik Frieser', 'RW', 62, 31],
       ['Daniel Maderner', 'ST', 63, 29], ['Tio Cipot', 'LW', 63, 22], ['Fabian Ehmann', 'GK', 59, 26],
       ['Martin Kreuzriegler', 'CB', 62, 31], ['Yannick Oberleitner', 'CB', 59, 23], ['Tobias Koch', 'CM', 62, 24],
       ['Christian Lichtenberger', 'RW', 62, 29], ['Alexander Hofleitner', 'AM', 60, 25], ['Ramiz Harakaté', 'LW', 62, 22]
     ] },
    { n: 'TSV Hartberg', s: 'HAR', c1: '#0057B8', c2: '#FFFFFF', str: 58, p: [
       ['Ammar Helac', 'GK', 56, 27], ['Jürgen Heil', 'RB', 61, 28], ['Paul Komposch', 'CB', 60, 24],
       ['Fabian Wilfinger', 'CB', 58, 21], ['Dominic Vincze', 'LB', 56, 21], ['Youba Diarra', 'DM', 61, 27],
       ['Tobias Kainz', 'DM', 60, 32], ['Jonas Karner', 'AM', 46, 20], ['Jed Drew', 'RW', 57, 21],
       ['Patrik Mijić', 'ST', 60, 26], ['Dominik Prokop', 'LW', 61, 28], ['Luka Marić', 'GK', 54, 22],
       ['Lukas Spendlhofer', 'CB', 56, 32], ['Marc Hennig', 'LB', 55, 18], ['Benjamin Markuš', 'DM', 57, 24],
       ['Maximilian Fillafer', 'AM', 55, 20], ['Lukas Fridrikas', 'ST', 58, 27], ['Elias Havel', 'LW', 57, 22]
     ] },
    { n: 'LASK', s: 'LASK', c1: '#000000', c2: '#FFFFFF', str: 70, p: [
       ['Lukas Jungwirth', 'GK', 65, 21], ['Melayro Bogarde', 'RB', 68, 23], ['Alemão', 'CB', 71, 22],
       ['Alberto Andrade', 'CB', 70, 26], ['George Bello', 'LB', 70, 23], ['Adetunji Adeshina', 'DM', 67, 20],
       ['Sascha Horvath', 'CM', 73, 28], ['Kryštof Daněk', 'AM', 71, 22], ['Moses Usor', 'RW', 71, 23],
       ['Saša Kalajdžić', 'ST', 75, 27], ['Valon Berisha', 'LW', 69, 32], ['Tobias Schützenauer', 'GK', 63, 28],
       ['Modou Cissé', 'CB', 65, 19], ['Emmanuel Michael', 'LB', 60, 19], ['Ismaila Coulibaly', 'CM', 68, 24],
       ['Florian Flecker', 'RW', 67, 29], ['Maximilian Entrup', 'ST', 73, 27], ['Lukas Kačavenda', 'AM', 69, 22]
     ] },
    { n: 'SK Rapid Viena', s: 'RAP', c1: '#00A94F', c2: '#FFFFFF', str: 67, p: [
       ['Niklas Hedl', 'GK', 68, 24], ['Bence Bolla', 'RB', 66, 25], ['Serge-Philippe Raux-Yao', 'CB', 70, 26],
       ['Nenad Cvetković', 'CB', 68, 29], ['Jannes-Kilian Horn', 'LB', 66, 28], ['Martin Ndzie', 'DM', 65, 22],
       ['Romeo Amane', 'CM', 67, 22], ['Tobias Gulliksen', 'AM', 69, 21], ['Marco Tilio', 'RW', 65, 23],
       ['Janis Antiste', 'ST', 67, 22], ['Petter Dahl', 'LW', 63, 21], ['Paul Gartler', 'GK', 62, 28],
       ['Jean Marcelin', 'CB', 66, 25], ['Jonas Auer', 'LB', 64, 24], ['Matthias Seidl', 'AM', 68, 24],
       ['Nikolaus Wurmbrand', 'RW', 65, 19], ['Claudy Mbuyi', 'ST', 64, 26], ['Lukas Grgić', 'DM', 65, 29]
     ] },
    { n: 'SV Ried', s: 'RIE', c1: '#00A94F', c2: '#FFFFFF', str: 61, p: [
       ['Andreas Leitner', 'GK', 61, 31], ['Philip Weissenbacher', 'RB', 54, 20], ['Oliver Steurer', 'CB', 62, 30],
       ['Nikki Havenaar', 'CB', 62, 30], ['Jonathan Scherzer', 'LB', 61, 29], ['Jonas Mayer', 'CM', 61, 21],
       ['Christopher Wernitznig', 'CM', 63, 35], ['Mark Grosse', 'AM', 64, 26], ['Ante Bajić', 'RW', 62, 29],
       ['Kingstone Mutandwa', 'ST', 59, 22], ['Philipp Pomer', 'LW', 62, 27], ['Felix Wimmer', 'GK', 56, 26],
       ['Michael Sollbauer', 'CB', 60, 35], ['Martin Rasner', 'CM', 60, 30], ['Yusuf Maart', 'CM', 63, 29],
       ['Joris Boguo', 'RW', 55, 17], ['Saliou Sané', 'ST', 59, 32], ['David Berger', 'ST', 58, 20]
     ] },
    { n: 'FC Red Bull Salzburg', s: 'RBS', c1: '#E30613', c2: '#FFFFFF', str: 75, p: [
       ['Alexander Schlager', 'GK', 78, 29], ['Stefan Lainer', 'RB', 76, 32], ['Jacob Rasmussen', 'CB', 76, 28],
       ['Anrie Chase', 'CB', 73, 21], ['Aleksa Terzić', 'LB', 77, 25], ['Lucas Gourna-Douath', 'DM', 76, 21],
       ['Maurits Kjaergaard', 'CM', 78, 22], ['Sota Kitano', 'AM', 70, 20], ['Edmund Baidoo', 'AM', 67, 19],
       ['Yorbe Vertessen', 'ST', 79, 24], ['Moussa Yeo', 'LW', 73, 21], ['Christian Zawieschitzky', 'GK', 69, 18],
       ['J. Gadou', 'CB', 71, 18], ['Frans Krätzig', 'LB', 76, 22], ['Mads Bidstrup', 'CM', 78, 24],
       ['Karim Konaté', 'ST', 77, 21], ['Karim Onisiwo', 'ST', 77, 33], ['Clement Bischoff', 'LW', 73, 19]
     ] },
    { n: 'SK Sturm Graz', s: 'STU', c1: '#000000', c2: '#FFFFFF', str: 68, p: [
       ['Oliver Christensen', 'GK', 69, 26], ['Arjan Malić', 'CM', 61, 19], ['Tim Oermann', 'CB', 70, 21],
       ['Emanuel Aiwu', 'CB', 66, 24], ['Dominique Lavalée', 'LB', 70, 28], ['Jon Gorenc Stanković', 'DM', 72, 29],
       ['Tomi Horvat', 'CM', 71, 26], ['Otar Kiteishvili', 'AM', 73, 29], ['Filip Rózga', 'RW', 62, 18],
       ['Maximilian Malone', 'ST', 68, 24], ['Axel Kayombo', 'LW', 62, 19], ['Daniil Khudyakov', 'GK', 61, 21],
       ['Niklas Geyrhofer', 'CB', 66, 25], ['Emir Karić', 'LB', 64, 28], ['Tochi Chukwuani', 'CM', 66, 22],
       ['Leon Grgić', 'ST', 62, 19], ['Seedyahmed Jatta', 'ST', 63, 22], ['Jeyland Mitchell', 'CB', 64, 20]
     ] },
    { n: 'Wolfsberger AC', s: 'WAC', c1: '#FFFFFF', c2: '#000000', str: 63, p: [
       ['Nikolas Polster', 'GK', 64, 22], ['Boris Matić', 'CM', 59, 20], ['Dominik Baumgartner', 'CB', 68, 28],
       ['Nicolas Wimmer', 'CB', 66, 30], ['René Renner', 'LB', 63, 31], ['Simon Piesinger', 'DM', 62, 33],
       ['André Schöpf', 'CM', 64, 31], ['Dejan Zukić', 'AM', 68, 24], ['Fabian Wolmuth', 'RW', 61, 23],
       ['Erik Kojzek', 'ST', 62, 19], ['Mickael Dosso', 'LW', 55, 19], ['Lukas Gütlbauer', 'GK', 62, 24],
       ['Chibuike Nwaiwu', 'CB', 66, 21], ['Austin Uzondu', 'LB', 60, 19], ['Donis Avdijaj', 'AM', 65, 28],
       ['Dona Atanga', 'RW', 61, 28], ['Markus Pink', 'ST', 61, 34], ['Adama Dramé', 'CB', 62, 20]
     ] }
  ]
};

window.LEAGUES.noruega = {
  id: 'noruega', name: 'Eliteserien', country: 'Noruega', ucl: 2, rel: 2,
  pool: 'scan', squadSize: 17, teams: [
    { n: 'FK Bodø/Glimt', s: 'BOD', c1: '#FFE500', c2: '#000000', str: 72, p: [
       ['Nikita Haikin', 'GK', 74, 29], ['Fredrik Sjøvold', 'RB', 69, 21], ['Jostein Gundersen', 'CB', 71, 29],
       ['Odin Bjørtuft', 'CB', 70, 26], ['Fredrik Bjørkan', 'LB', 74, 26], ['Patrick Berg', 'DM', 77, 27],
       ['Ulrik Saltnes', 'CM', 72, 32], ['Håkon Evjen', 'AM', 73, 25], ['Ole Blomberg', 'RW', 69, 25],
       ['Ola Brynhildsen', 'ST', 70, 26], ['Jens Hauge', 'LW', 74, 25], ['Julian Lund', 'GK', 66, 26],
       ['Brede Moe', 'CB', 70, 33], ['Haitam Aleesami', 'CB', 68, 33], ['Sondre Fet', 'CM', 70, 28],
       ['Isak Määttä', 'RW', 67, 23], ['Kasper Høgh', 'ST', 69, 24], ['Anders Klynge', 'CM', 68, 24]
     ] },
    { n: 'SK Brann', s: 'BRA', c1: '#E30613', c2: '#FFFFFF', str: 64, p: [
       ['Mathias Dyngeland', 'GK', 65, 29], ['Thore Pedersen', 'RB', 61, 28], ['Fredrik Knudsen', 'CB', 65, 28],
       ['Japhet Larsen', 'CB', 64, 25], ['Vetle Dragsnes', 'LB', 65, 31], ['Jacob Sørensen', 'DM', 64, 27],
       ['Felix Myhre', 'CM', 69, 26], ['Eggert Guðmundsson', 'AM', 58, 21], ['Mads Hansen', 'RW', 64, 22],
       ['Bård Finne', 'ST', 64, 30], ['Nygård Castro', 'LW', 64, 29], ['Mathias Klausen', 'GK', 49, 17],
       ['Eivind Helland', 'CB', 60, 20], ['Joachim Soltvedt', 'LB', 62, 29], ['Emil Kornvig', 'CM', 65, 25],
       ['Sævar Magnússon', 'RW', 61, 25], ['Noah Holm', 'ST', 62, 24], ['Sakarias Opsahl', 'CM', 62, 25]
     ] },
    { n: 'Aalesunds FK', s: 'AFK', c1: '#F58220', c2: '#0057B8', str: 57, p: [
       ['Kristoffer Klaesson', 'GK', 56, 26], ['Marius Andresen', 'RB', 56, 27], ['Ólafur Guðmundsson', 'CB', 57, 24],
       ['Simen Haram', 'CB', 55, 21], ['Aleksander Kjelsen', 'LB', 56, 20], ['Håkon Butli Hammer', 'DM', 59, 26],
       ['Kristoffer Nessø', 'CM', 55, 33], ['Henrik Melland', 'AM', 59, 21], ['Paul Ngongo', 'RW', 55, 26],
       ['Endre Osenbroch', 'ST', 57, 22], ['Elias Myrlid', 'LW', 55, 24], ['Tor Erik Larsen', 'GK', 54, 28],
       ['Uba Charles', 'CB', 53, 24], ['Jakob Nyland Ørsahl', 'LB', 53, 25], ['Mathias Kristensen', 'CM', 54, 29],
       ['Ivan Djantou', 'RW', 54, 24], ['Marcus Reed', 'ST', 54, 18], ['Emil Engqvist', 'CB', 51, 27],
       ['Ulrik Syversen', 'CB', 49, 23], ['Nicholas Alme Bakke', 'CB', 50, 17], ['Philip Aukland', 'CB', 52, 28],
       ['Davíð Jóhannsson', 'CM', 49, 24]
     ] },
    { n: 'Fredrikstad FK', s: 'FFK', c1: '#E30613', c2: '#FFFFFF', str: 61, p: [
       ['Valdemar Birksø', 'GK', 62, 24], ['Daniel Eid', 'RB', 64, 26], ['Maxwell Woledzi', 'CB', 65, 23],
       ['Ulrik Fredriksen', 'CB', 62, 26], ['Stray Molde', 'LB', 63, 28], ['Leonard Owusu', 'DM', 63, 28],
       ['Robert Shein', 'CM', 62, 21], ['Benjamin Faraas', 'AM', 57, 19], ['Henrik Skogvold', 'ST', 60, 20],
       ['Johannes Hummelvoll-Nuñez', 'ST', 63, 28], ['Ludvig Begby', 'LW', 55, 28], ['Øystein Øvretveit', 'GK', 59, 31],
       ['Solomon Owusu', 'DM', 61, 29], ['Simen Rafn', 'RB', 61, 33], ['Oskar Øhlenschlæger', 'CM', 60, 21],
       ['Jóannes Bjartalíð', 'ST', 60, 28], ['Sondre Sørløkk', 'ST', 62, 28], ['Sigurd Kvile', 'CB', 61, 25]
     ] },
    { n: 'Lillestrøm SK', s: 'LSK', c1: '#FFE500', c2: '#000000', str: 66, p: [
       ['Stefan Hagerup', 'GK', 68, 32], ['Lars Ranger', 'RB', 69, 27], ['Sturla Ottesen', 'CB', 66, 25],
       ['Espen Garnås', 'CB', 67, 32], ['Sander Moen Foss', 'LB', 66, 28], ['Harald Woxen', 'DM', 65, 18],
       ['Markus Karlsbakk', 'CM', 68, 26], ['Gustav Nyheim', 'AM', 55, 20], ['Linus Alperud', 'RW', 65, 21],
       ['Kparobo Arierhi', 'ST', 66, 19], ['Thomas Lehne Olsen', 'LW', 70, 35], ['Pontus Dahlberg', 'GK', 64, 27],
       ['Frederik Elkær', 'CB', 64, 25], ['John Kitolano', 'LB', 64, 27], ['Eric Kitolano', 'CM', 61, 29],
       ['Salieu Drammeh', 'RW', 64, 23], ['Camil Jebara', 'ST', 62, 23], ['Ulrik Jenssen', 'CB', 66, 30],
       ['Yaw Paintsil', 'CB', 60, 27], ['Ruben Gabrielsen', 'CB', 61, 34], ['Lucas Svenningsen', 'CB', 61, 19],
       ['Kevin Krygård', 'CM', 61, 26]
     ] },
    { n: 'Hamarkameratene', s: 'HAM', c1: '#00A94F', c2: '#FFFFFF', str: 56, p: [
       ['Marcus Sandberg', 'GK', 58, 34], ['Strand Nilsen', 'RB', 56, 28], ['Fredrik Sjølstad', 'CB', 58, 31],
       ['Luc Mares', 'CB', 57, 28], ['Anton Ekeroth', 'LB', 55, 23], ['Tore Sørås', 'DM', 56, 27],
       ['Gard Simenstad', 'CM', 57, 26], ['Mats Pedersen', 'AM', 53, 20], ['Ylldren Ibrahimaj', 'RW', 59, 29],
       ['Moses Mawa', 'ST', 57, 28], ['Kristian Lien', 'ST', 54, 23], ['Alexander Nilsson', 'GK', 53, 27],
       ['Gustav Granath', 'CB', 56, 28], ['Peter Sunday', 'CM', 50, 18], ['Alwande Roaldsøy', 'CM', 54, 21],
       ['Viðar Jónsson', 'RW', 57, 31], ['Pål Kirkevold', 'ST', 56, 34], ['Halvor Opsahl', 'CB', 56, 22]
     ] },
    { n: 'KFUM Oslo', s: 'KFU', c1: '#0057B8', c2: '#FFE500', str: 54, p: [
       ['Emil Ødegaard', 'GK', 54, 26], ['Amin Nouri', 'CM', 52, 35], ['Fredrik Berglie', 'CB', 54, 28],
       ['Ayoub Aleesami', 'CB', 52, 29], ['David Hickson', 'LB', 53, 27], ['Robin Rasch', 'DM', 57, 31],
       ['Simen Hestnes', 'CM', 54, 29], ['Mansour Sinyan', 'CM', 51, 25], ['Teodor Haltvik', 'RW', 53, 25],
       ['Bjørn Kristensen', 'ST', 52, 23], ['Moussa Njie', 'LW', 54, 29], ['William Da Rocha', 'GK', 49, 23],
       ['Mathias Tønnessen', 'CB', 52, 21], ['Jonas Hjorth', 'LB', 52, 24], ['Sverre Sandal', 'CM', 53, 22],
       ['Spieler Halvorsen', 'RW', 46, 20], ['Mor Ndiaye', 'ST', 52, 28], ['Helland Hoseth', 'RB', 52, 26]
     ] },
    { n: 'Kristiansund BK', s: 'KBK', c1: '#0057B8', c2: '#FFFFFF', str: 60, p: [
       ['Michael Lansing', 'GK', 62, 31], ['Ian Hoffmann', 'RB', 59, 23], ['Dan Ulvestad', 'CB', 62, 36],
       ['Max Williamsen', 'CB', 59, 21], ['Mikkel Rakneberg', 'LB', 59, 23], ['Axel Kryger', 'DM', 61, 27],
       ['Niklas Ødegård', 'CM', 59, 21], ['Rezan Corlu', 'AM', 61, 27], ['David Tufekčić', 'RW', 59, 21],
       ['Alioune Ndour', 'ST', 63, 27], ['Mustapha Isah', 'LW', 59, 20], ['Knut Skjærstein', 'GK', 58, 29],
       ['Marius Olsen', 'CB', 59, 24], ['Flintholm Flex', 'LB', 57, 21], ['Henry Sletsjøe', 'CM', 58, 25],
       ['Sander Kilen', 'LW', 57, 20], ['Leander Alvheim', 'ST', 54, 20], ['Wilfred Igor', 'DM', 59, 20]
     ] },
    { n: 'Molde FK', s: 'MOL', c1: '#0057B8', c2: '#FFFFFF', str: 67, p: [
       ['Jacob Karlstrøm', 'GK', 67, 28], ['Martin Linnes', 'RB', 71, 33], ['Birk Risa', 'CB', 67, 27],
       ['Eirik Haugan', 'CB', 66, 27], ['Samukelo Kabini', 'LB', 62, 21], ['Møller Dæhli', 'DM', 72, 30],
       ['Faveur Ndayizeye', 'CM', 55, 17], ['Magnus Eikrem', 'AM', 73, 34], ['Eirik Hestad', 'RW', 68, 30],
       ['Fredrik Gulbrandsen', 'ST', 69, 32], ['Caleb Zady Sery', 'LW', 66, 25], ['Sean McDermott', 'GK', 65, 32],
       ['Casper Øyvann', 'CB', 65, 25], ['Neraysho Kasanwirjo', 'RB', 68, 23], ['Kristian Eriksen', 'AM', 71, 29],
       ['Sondre Granaas', 'LW', 61, 18], ['Jalal Abdullai', 'ST', 64, 20], ['Emil Breivik', 'DM', 68, 25]
     ] },
    { n: 'Rosenborg BK', s: 'RBK', c1: '#FFFFFF', c2: '#000000', str: 67, p: [
       ['Sander Tangvik', 'GK', 66, 22], ['Aslak Witry', 'RB', 68, 29], ['Tomáš Nemčík', 'CB', 67, 24],
       ['Mikkel Ceïde', 'CB', 63, 23], ['Adrian Pereira', 'LB', 67, 25], ['Santeri Väänänen', 'DM', 64, 23],
       ['Ole Selnæs', 'CM', 69, 30], ['Moustafa Zeidan', 'AM', 66, 27], ['Dávid Ďuriš', 'LW', 67, 26],
       ['Dino Islamović', 'ST', 65, 31], ['Simen Nordli', 'LW', 70, 25], ['Rasmus Sandberg', 'GK', 59, 24],
       ['Håkon Volden', 'DM', 56, 18], ['Ulrik Jenssen', 'LB', 65, 28], ['Iver Fossum', 'CM', 66, 28],
       ['Emil Ceïde', 'LW', 65, 23], ['Ole Sæter', 'ST', 64, 29], ['Erlend Reitan', 'RB', 65, 27]
     ] },
    { n: 'Sandefjord Fotball', s: 'SAN', c1: '#0057B8', c2: '#FFFFFF', str: 58, p: [
       ['Carljohan Eriksson', 'GK', 59, 30], ['Filip Loftesnes-Bjune', 'RB', 56, 20], ['Stian Kristiansen', 'CB', 59, 26],
       ['Zinedin Smajlović', 'CB', 58, 21], ['Cheng郑泽彦 Cheng', 'LB', 60, 23], ['Filip Ottosson', 'DM', 61, 28],
       ['Loris Mettler', 'CM', 60, 26], ['Jakobsen Swift', 'AM', 50, 18], ['Evangelos Patoulidis', 'RW', 57, 23],
       ['Stefán Sigurðarson', 'ST', 60, 24], ['Jakob Dunsby', 'LW', 61, 25], ['Elias Hadaya', 'GK', 57, 26],
       ['Martin Gjone', 'CB', 56, 20], ['Vetle Egeli', 'LB', 58, 21], ['Sander Mørk', 'CM', 57, 24],
       ['Bendik Berntsen', 'RW', 51, 18], ['Storm Pettersen', 'AM', 48, 19], ['Jacob Hanstad', 'LW', 57, 22]
     ] },
    { n: 'Sarpsborg 08', s: 'SAR', c1: '#0057B8', c2: '#FFFFFF', str: 63, p: [
       ['Mamour Ndiaye', 'GK', 63, 19], ['Eirik Wichne', 'RB', 64, 28], ['Bjørn Utvik', 'CB', 65, 29],
       ['Maria Koch', 'CB', 65, 30], ['Mohanad Jeahze', 'LB', 66, 28], ['Aimar Sher', 'DM', 65, 22],
       ['Heine Bruseth', 'CM', 58, 21], ['Harald Tangen', 'AM', 64, 24], ['Niklas Sandberg', 'RW', 65, 30],
       ['Jo Berget', 'ST', 65, 34], ['Michael Opoku', 'LW', 58, 19], ['Håvar Jenssen', 'GK', 60, 29],
       ['Magnar Ødegaard', 'CB', 62, 32], ['Anders Trondsen', 'LB', 63, 30], ['Bop Guèye', 'CM', 56, 18],
       ['Sondre Sørli', 'RW', 65, 29], ['Daniel Karlsbakk', 'ST', 65, 22], ['Sander Christiansen', 'DM', 64, 24]
     ] },
    { n: 'IK Start', s: 'STA', c1: '#FFE500', c2: '#000000', str: 58, p: [
       ['Jacob Pryts', 'GK', 56, 28], ['Fredrik Pålerud', 'RB', 56, 32], ['Altin Ujkani', 'CB', 59, 26],
       ['Johan Meyer', 'CB', 60, 22], ['Omar Jebali', 'LB', 58, 26], ['Stève Mvoué', 'DM', 61, 24],
       ['Eirik Schulze', 'CM', 58, 33], ['Markus Soomets', 'AM', 59, 26], ['Jesper Cornelius', 'RW', 56, 25],
       ['Håkon Lorentzen', 'ST', 57, 29], ['James Ampofo', 'LW', 57, 23], ['Storm Strand-Kolbjørnsen', 'GK', 53, 22],
       ['John Olav Norheim', 'CB', 56, 31], ['Sebastian Griesbeck', 'LB', 54, 36], ['Tom Strannegård', 'CM', 55, 24],
       ['Terry Benjamin', 'RW', 56, 22], ['Alexander Gurendal', 'ST', 56, 21], ['Kristoffer Tønnessen', 'CB', 53, 29],
       ['Jasper Silva Torkildsen', 'GK', 52, 23], ['Ousmane Diallo Toure', 'CB', 50, 23], ['Erlend Dahl Reitan', 'CB', 62, 29],
       ['Mikael Ugland', 'CM', 54, 26]
     ] },
    { n: 'Tromsø IL', s: 'TIL', c1: '#E30613', c2: '#FFFFFF', str: 64, p: [
       ['Jakob Haugaard', 'GK', 65, 33], ['Leo Cornic', 'RB', 64, 24], ['Tobias Guddal', 'CB', 64, 22],
       ['Vetle Skjærvik', 'CB', 63, 24], ['Ruben Kristiansen', 'LB', 65, 37], ['Ruben Jenssen', 'DM', 65, 37],
       ['David Edvardsson', 'CM', 62, 23], ['Sigurd Prestmo', 'CM', 54, 18], ['Yaw Paintsil', 'RW', 60, 25],
       ['Vegard Erlien', 'ST', 66, 27], ['August Mikkelsen', 'LW', 66, 24], ['Simon Thomas', 'GK', 59, 35],
       ['Anders Jenssen', 'CB', 63, 31], ['Abubacarr Kinteh', 'CB', 63, 18], ['Jens Hjertø-Dahl', 'CM', 62, 19],
       ['Lars Larsen', 'LW', 65, 26], ['Ieltsin Camões', 'ST', 63, 26], ['Jens Husebø', 'DM', 62, 26]
     ] },
    { n: 'Vålerenga Fotball', s: 'VIF', c1: '#0057B8', c2: '#E30613', str: 62, p: [
       ['Oscar Hedvall', 'GK', 62, 26], ['Vegar Hedenstad', 'RB', 63, 34], ['Kevin Tshiembe', 'CB', 63, 28],
       ['Ivan Näsberg', 'CB', 63, 29], ['Vinícius Nogueira', 'LB', 62, 23], ['Brice Ambina', 'DM', 63, 23],
       ['Henrik Bjørdal', 'CM', 65, 28], ['Carl Lange', 'AM', 60, 26], ['Filip Thorvaldsen', 'RW', 57, 19],
       ['Mathias Grundetjern', 'ST', 59, 24], ['Elias Sørensen', 'LW', 62, 25], ['Jacob Storevik', 'GK', 61, 28],
       ['Aaron Olsen', 'CB', 61, 24], ['Noah Pallas', 'LB', 58, 24], ['Petter Strand', 'CM', 63, 30],
       ['Omar Drammeh', 'LW', 55, 22], ['Mohamed Ofkir', 'ST', 56, 28], ['Elias Hagen', 'CM', 62, 25]
     ] },
    { n: 'Viking FK', s: 'VIK', c1: '#0057B8', c2: '#FFFFFF', str: 69, p: [
       ['Kristoffer-August Klaesson', 'GK', 68, 24], ['Henrik Heggheim', 'RB', 69, 24], ['Gianni Stensness', 'CB', 69, 26],
       ['Anders Bærtelsen', 'CB', 67, 25], ['Kristoffer Haugen', 'LB', 71, 31], ['Joe Bell', 'DM', 74, 26],
       ['Kristoffer Askildsen', 'CM', 67, 24], ['Simen Kvia-Egeskog', 'CM', 65, 22], ['Zlatko Tripić', 'RW', 76, 32],
       ["Nicholas D'Agostino", 'ST', 70, 27], ['Edvin Austbø', 'AM', 66, 20], ['Arild Østbø', 'GK', 64, 34],
       ['Viljar Vevatne', 'CB', 66, 30], ['Vetle Auklend', 'LB', 61, 20], ['Yann-Erik de Lanlay', 'CM', 65, 33],
       ['Sander Svendsen', 'RW', 69, 27], ['Veton Berisha', 'ST', 68, 31], ['Peter Christiansen', 'ST', 68, 25]
     ] }
  ]
};

window.LEAGUES.dinamarca = {
  id: 'dinamarca', name: 'Superligaen', country: 'Dinamarca', ucl: 2, rel: 2,
  pool: 'scan', squadSize: 17, teams: [
    { n: 'Lyngby BK', s: 'LYN', c1: '#0057B8', c2: '#FFFFFF', str: 63, p: [
       ['David Jensen', 'GK', 63, 34], ['Brian Hamalainen', 'RB', 62, 37], ['Baptiste Rolland', 'CB', 63, 23],
       ['Lucas Lissens', 'CB', 62, 25], ['Andreas Bjelland', 'LB', 64, 38], ['Mathias Rasmussen', 'DM', 67, 31],
       ['Rezan Corlu', 'CM', 61, 29], ['Casper Winther', 'AM', 61, 23], ['Mathias Kristensen', 'RW', 64, 33],
       ['Jonathan Amon', 'ST', 60, 27], ['Sævar Atli Magnússon', 'LW', 62, 26], ['Jannich Storch', 'GK', 62, 33],
       ['Willy Kumado', 'CB', 57, 24], ['Magnus Jensen', 'LB', 63, 30], ['Lauge Sandgrav', 'CM', 58, 22],
       ['Frederik Gytkjær', 'RW', 58, 33], ['Nikolai Frederiksen', 'ST', 58, 26], ['Johan Meyer', 'CB', 58, 22],
       ['Michael Opoku', 'CM', 56, 21], ['Gustav Fraulo', 'CM', 57, 21], ['Kolbeinn Finnsson', 'CB', 62, 27],
       ['Peter Langhoff', 'CM', 58, 22]
     ] },
    { n: 'AGF Aarhus', s: 'AGF', c1: '#FFFFFF', c2: '#0057B8', str: 63, p: [
       ['Jesper Hansen', 'GK', 63, 40], ['Felix Beijmo', 'RB', 65, 27], ['Frederik Tingager', 'CB', 66, 32],
       ['Henrik Dalsgaard', 'CB', 64, 35], ['Gift Links', 'LB', 66, 26], ['Nicolai Poulsen', 'DM', 64, 31],
       ['Kristian Arnstad', 'CM', 62, 21], ['Kevin Yakob', 'CM', 60, 24], ['Sebastian Jørgensen', 'RW', 62, 25],
       ['Patrick Mortensen', 'ST', 66, 35], ['Frederik Emmery', 'LW', 53, 18], ['Leopold Wahlstedt', 'GK', 59, 25],
       ['Eric Kahl', 'CB', 63, 23], ['Tobias Mølgaard', 'CB', 63, 28], ['Markus Solbakken', 'CM', 62, 24],
       ['Janni-Luca Serra', 'ST', 60, 27], ['Tobias Bech', 'ST', 62, 23], ['Rasmus Carstensen', 'CM', 62, 24]
     ] },
    { n: 'Brøndby IF', s: 'BIF', c1: '#FFE500', c2: '#0057B8', str: 64, p: [
       ['Patrick Pentz', 'GK', 67, 28], ['Oliver Villadsen', 'RB', 62, 23], ['Jordi Vanlerberghe', 'CB', 64, 29],
       ['Frederik Alves', 'CB', 64, 25], ['Mats Köhlert', 'LB', 67, 27], ['Benjamin Tahirović', 'DM', 62, 22],
       ['Daniel Wass', 'CM', 66, 36], ['Nicolai Vallys', 'AM', 68, 28], ['Marcus Younis', 'RW', 53, 19],
       ['Michael Gregoritsch', 'ST', 70, 31], ['Shō Fukuda', 'ST', 61, 24], ['Thomas Mikkelsen', 'GK', 58, 41],
       ['Sean Klaiber', 'CB', 63, 30], ['Marko Divković', 'CM', 61, 26], ['Stijn Spierings', 'CM', 66, 29],
       ['Kotaro Uchino', 'ST', 57, 21], ['Filip Bundgaard', 'ST', 62, 20], ['Rasmus Lauritsen', 'CB', 63, 29]
     ] },
    { n: 'FC Copenhague', s: 'FCK', c1: '#FFFFFF', c2: '#0057B8', str: 73, p: [
       ['Dominik Kotarski', 'GK', 76, 25], ['Rodrigo Huescas', 'RB', 71, 21], ['Gabriel Pereira', 'CB', 73, 25],
       ['Pantelis Hatzidiakos', 'CB', 72, 28], ['Birger Meling', 'LB', 71, 30], ['Thomas Delaney', 'DM', 74, 33],
       ['Møller Madsen', 'CM', 71, 27], ['Viktor Claesson', 'AM', 71, 33], ['Mohamed Elyounoussi', 'RW', 75, 30],
       ['Youssoufa Moukoko', 'ST', 72, 20], ['Elias Achouri', 'LW', 71, 26], ['Rúnar Rúnarsson', 'GK', 66, 30],
       ['Munashe Garananga', 'CB', 68, 24], ['Marcos López', 'LB', 70, 25], ['Lukas Lerager', 'DM', 71, 31],
       ['Jordan Larsson', 'RW', 71, 28], ['Andreas Cornelius', 'ST', 68, 32], ['Magnus Mattsson', 'AM', 70, 26]
     ] },
    { n: 'FC Midtjylland', s: 'FCM', c1: '#000000', c2: '#E30613', str: 69, p: [
       ['Jonas Lössl', 'GK', 69, 36], ['Kevin Mbabu', 'RB', 71, 30], ['Mads Sørensen', 'CB', 71, 26],
       ['Ousmane Diao', 'CB', 70, 21], ['Paulinho', 'LB', 67, 30], ['Dani Silva', 'DM', 67, 25],
       ['Philip Billing', 'CM', 73, 29], ['Pedro Bravo', 'CM', 65, 20], ['Darío Osorio', 'RW', 70, 21],
       ['Franculino', 'ST', 70, 21], ['Aral Şimşir', 'LW', 71, 23], ['Elías Ólafsson', 'GK', 68, 25],
       ['Martin Erlić', 'CB', 70, 27], ['Victor Bak', 'CM', 66, 21], ['Daniel Castillo', 'CM', 65, 21],
       ['Edward Chilufya', 'RW', 67, 25], ['Cho Gue Sung', 'ST', 68, 27], ['Lee Han Beom', 'CB', 67, 23]
     ] },
    { n: 'FC Nordsjælland', s: 'FCN', c1: '#FFE500', c2: '#E30613', str: 67, p: [
       ['Andreas Hansen', 'GK', 72, 29], ['Peter Ankersen', 'RB', 69, 34], ['Tobias Salquist', 'CB', 71, 30],
       ['Erik Marxen', 'CB', 66, 34], ['Robinsønn Norheim', 'LB', 67, 20], ['Malte Heyde', 'DM', 58, 18],
       ['Nicklas Røjkjær', 'CM', 73, 26], ['Ola Solbakken', 'AM', 71, 26], ['Hjalte Rasmussen', 'RW', 59, 17],
       ['Alexander Lind', 'ST', 73, 23], ['Prince Junior', 'LW', 63, 18], ['Jakob Busk', 'GK', 67, 31],
       ['Noah Markmann', 'CB', 64, 18], ['Juho Lähteenmäki', 'LB', 64, 19], ['Mark Brink', 'CM', 71, 27],
       ['Souleymane Alio', 'ST', 60, 18], ['Levy Nene', 'ST', 65, 19], ['Caleb Yirenkyi', 'CM', 68, 19]
     ] },
    { n: 'Odense Boldklub', s: 'OB', c1: '#0057B8', c2: '#FFFFFF', str: 64, p: [
       ['Viljar Myhra', 'GK', 65, 28], ['Leeroy Owusu', 'RB', 64, 28], ['Bjørn Paulsen', 'CB', 64, 33],
       ['Nicolas Bürgy', 'CB', 64, 29], ['Adam Sørensen', 'LB', 64, 24], ['Tom Trybull', 'DM', 63, 32],
       ['Rasmus Falk', 'CM', 70, 33], ['Ismahila Ouédraogo', 'DM', 62, 25], ['Jona Niemiec', 'RW', 65, 23],
       ['Jann-Fiete Arp', 'ST', 66, 25], ['Magnus Andersen', 'LW', 55, 19], ['Theo Sander', 'GK', 62, 20],
       ['James Gomez', 'CB', 63, 23], ['Gustav Grubbe', 'CM', 62, 22], ['Jakob Bonde', 'CM', 65, 31],
       ['Noah Ganaus', 'ST', 65, 24], ['Jornell Grot', 'ST', 65, 27], ['Martin Hansen', 'GK', 62, 35]
     ] },
    { n: 'Randers FC', s: 'RFC', c1: '#FFFFFF', c2: '#0057B8', str: 62, p: [
       ['Paul Izzo', 'GK', 65, 30], ['Oliver Olsen', 'RB', 64, 24], ['Wessel Dammers', 'CB', 66, 30],
       ['Daniel Høegh', 'CB', 66, 34], ['Nikolas Dyhr', 'LB', 64, 24], ['John Björkengren', 'DM', 67, 26],
       ['Frederik Lauenborg', 'CM', 60, 28], ['Ousseynou Seck', 'AM', 50, 18], ['Mathias Greve', 'RW', 65, 30],
       ['Mohamed Touré', 'ST', 63, 21], ['Mike Themsen', 'LW', 59, 19], ['Jannich Storch', 'GK', 61, 32],
       ['Lucas Lissens', 'CB', 61, 23], ['Elias Andersson', 'LB', 60, 29], ['Max Albæk', 'CM', 53, 19],
       ['Elies Mahmoud', 'RW', 62, 24], ['Florian Danho', 'ST', 62, 25], ['André Rømer', 'DM', 66, 31]
     ] },
    { n: 'Silkeborg IF', s: 'SIF', c1: '#FFE500', c2: '#000000', str: 60, p: [
       ['Nicolai Larsen', 'GK', 65, 34], ['Jens Gammelby', 'RB', 60, 30], ['Alexander Busch', 'CB', 63, 21],
       ['Pedro Ganchas', 'CB', 62, 25], ['Andreas Poulsen', 'LB', 62, 25], ['Mikkel Øxenberg', 'DM', 51, 18],
       ['Mads Larsen', 'CM', 61, 23], ['Jeppe Andersen', 'AM', 63, 32], ['Alexander Simmelhack', 'ST', 58, 19],
       ['Tonni Adamsen', 'ST', 65, 30], ['Younes Bakiz', 'LW', 64, 26], ['Andrésen Andresen', 'GK', 56, 19],
       ['Pontus Rödin', 'CB', 60, 24], ['Robin Østrøm', 'LB', 61, 22], ['Mads Freundlich', 'CM', 58, 22],
       ['Sebastian Biller', 'LW', 52, 18], ['Asbjørn Bøndergaard', 'ST', 59, 21], ['Rami Al Hajj', 'AM', 63, 23]
     ] },
    { n: 'SønderjyskE', s: 'SJE', c1: '#0057B8', c2: '#FFFFFF', str: 61, p: [
       ['Marcus Bundgaard', 'GK', 61, 23], ['Andreas Oggesen', 'RB', 60, 31], ['Magnus Jensen', 'CB', 63, 28],
       ['Daníel Grétarsson', 'CB', 62, 29], ['Rúnar Sigurgeirsson', 'LB', 60, 25], ['Rasmus Vinderslev', 'DM', 62, 27],
       ['Sefer Emini', 'CM', 62, 24], ['Albert Rrahmani', 'AM', 55, 18], ['Tobias Klysner', 'RW', 61, 23],
       ['Lirim Qamili', 'ST', 64, 27], ['Mads Agger', 'LW', 60, 25], ['Nicolai Flø', 'GK', 60, 29],
       ['Maxime Soulas', 'CB', 59, 26], ['E. Duru', 'LB', 57, 25], ['Ivan Nikolov', 'CM', 55, 23],
       ['Alexander Lyng', 'RW', 60, 20], ['Kristall Ingason', 'ST', 60, 23], ['Matthew Hoppe', 'AM', 59, 24]
     ] },
    { n: 'AC Horsens', s: 'HOR', c1: '#FFE500', c2: '#000000', str: 59, p: [
       ['Matej Delač', 'GK', 57, 24], ['Magnus Jensen', 'RB', 61, 28], ['Malte Kiilerich', 'CB', 58, 31],
       ['Moses Opondo', 'CB', 58, 27], ['Mikkel Lassen', 'LB', 62, 29], ['Janus Drachmann', 'DM', 58, 31],
       ['Jonas Gemmer', 'CM', 58, 23], ['Marcus Hannesbo', 'AM', 58, 32], ['Lirim Qamili', 'RW', 62, 27],
       ['Anders K. Jacobsen', 'ST', 61, 33], ['Aron Sigurðarson', 'LW', 60, 25], ['Marcus Bobjerg', 'GK', 54, 32],
       ['James Gomez', 'CB', 59, 23], ['Alexander Ludwig', 'LB', 54, 24], ['David Kruse', 'CM', 61, 23],
       ['Thomas Santos', 'RW', 59, 26], ['Lubambo Musonda', 'ST', 62, 30], ['Samson Iyede', 'CB', 57, 31],
       ['Elijah Just', 'ST', 60, 25], ['Jashar Beluli', 'ST', 52, 32], ['Magnus Isager', 'CM', 53, 30],
       ['Simon Makienok', 'ST', 52, 30]
     ] },
    { n: 'Viborg FF', s: 'VFF', c1: '#00A94F', c2: '#FFFFFF', str: 61, p: [
       ['Lucas Lund', 'GK', 62, 25], ['Jean-Manuel Mbom', 'RB', 64, 25], ['Daniel Anyembe', 'CB', 63, 26],
       ['Ž. Zaletel', 'CB', 62, 25], ['Oliver Bundgaard', 'LB', 62, 24], ['Mees Hoedemakers', 'DM', 63, 27],
       ['Thomas Jørgensen', 'CM', 62, 19], ['Bilal Brahimi', 'AM', 61, 25], ['Charly Nouck', 'RW', 58, 21],
       ['Dorian Junior', 'ST', 59, 24], ['Yonis Njoh', 'LW', 58, 21], ['Filip Đukić', 'GK', 61, 25],
       ['Stipe Radić', 'CB', 61, 25], ['Srđan Kuzmić', 'RB', 60, 21], ['Mads Søndergaard', 'CM', 59, 22],
       ['Sami Karchoud', 'RW', 57, 20], ['Tim Freriks', 'ST', 58, 26], ['Jeppe Grønning', 'DM', 62, 34]
     ] }
  ]
};

window.LEAGUES.suecia = {
  id: 'suecia', name: 'Allsvenskan', country: 'Suecia', ucl: 2, rel: 2,
  pool: 'scan', squadSize: 17, teams: [
    { n: 'AIK', s: 'AIK', c1: '#000000', c2: '#FFE500', str: 66, p: [
       ['Kristoffer Nordfeldt', 'GK', 70, 36], ['Mads Thychosen', 'RB', 67, 28], ['Filip Benković', 'CB', 70, 27],
       ['Sotirios Papagiannopoulos', 'CB', 69, 34], ['Eskil Edh', 'LB', 64, 22], ['Martin Ellingsen', 'DM', 63, 30],
       ['Anton Salétros', 'CM', 71, 29], ['Dino Beširović', 'AM', 63, 31], ['Taha Ayari', 'LW', 60, 20],
       ['John Guidetti', 'ST', 62, 33], ['Bersant Celina', 'LW', 68, 28], ['Kalle Joelsson', 'GK', 61, 27],
       ['Thomas Isherwood', 'CB', 65, 27], ['Ferdinand Nissen', 'CB', 58, 20], ['Áron Csongvai', 'CM', 68, 24],
       ['Victor Gonçalves Andersson', 'LW', 59, 20], ['Erik Flataker', 'ST', 61, 20], ['Johan Hove', 'CM', 67, 24]
     ] },
    { n: 'Brommapojkarna', s: 'BP', c1: '#E30613', c2: '#000000', str: 63, p: [
       ['Davor Blažević', 'GK', 61, 32], ['Alex Timossi Andersson', 'RB', 63, 24], ['Even Hovland', 'CB', 63, 36],
       ['Isak Ssewankambo', 'CB', 62, 29], ['Oliver Zandén', 'LB', 63, 23], ['Serge-Junior Martinsson Ngouali', 'DM', 64, 33],
       ['Lukas Björklund', 'CM', 61, 21], ['Rasmus Örqvist', 'AM', 61, 26], ['Daleho Irandust', 'RW', 64, 27],
       ['Nabil Bahoui', 'ST', 62, 34], ['Victor Lind', 'LW', 65, 22], ['Leo Cavallius', 'GK', 59, 20],
       ['Hlynur Karlsson', 'CB', 62, 21], ['Baba Apiiga', 'LB', 57, 18], ['Oskar Jarde', 'CM', 54, 17],
       ['Evans Botchway', 'RW', 58, 19], ['Ezekiel Alladoh', 'ST', 61, 19], ['Kevin Ackermann', 'DM', 63, 24]
     ] },
    { n: 'Degerfors IF', s: 'DEG', c1: '#E30613', c2: '#FFFFFF', str: 59, p: [
       ['Matvei Igonen', 'GK', 59, 28], ['Daniel Sundgren', 'RB', 65, 34], ['Juhani Pikkarainen', 'CB', 63, 26],
       ['Sebastian Ohlsson', 'CB', 61, 32], ['Marcus Godinho', 'CM', 60, 28], ['Kazper Karlsson', 'CM', 57, 20],
       ['Nahom Netabay', 'CM', 62, 30], ['Hjalmar Smedberg', 'AM', 50, 19], ['Elias Barsoum', 'RW', 59, 22],
       ['Richie Omorowa', 'ST', 62, 21], ['Marcus Rafferty', 'LW', 60, 20], ['Wille Jakobsson', 'GK', 57, 23],
       ['Leon Hien', 'CB', 61, 23], ['Mamadouba Diaby', 'LB', 60, 28], ['Christos Gravius', 'CM', 61, 27],
       ['Santeri Haarala', 'RW', 59, 25], ['Dijan Vukojević', 'ST', 60, 29], ['Sebastian Ohlsson', 'RB', 62, 32]
     ] },
    { n: 'Djurgårdens IF', s: 'DIF', c1: '#0057B8', c2: '#FFFFFF', str: 62, p: [
       ['Jacob Rinne', 'GK', 62, 32], ['Adam Ståhl', 'RB', 62, 30], ['Marcus Danielson', 'CB', 64, 36],
       ['Jacob Une', 'CB', 61, 31], ['Kosugi小杉 Kosugi', 'LB', 64, 19], ['Albin Ekdal', 'DM', 62, 35],
       ['Mikael Anderson', 'CM', 65, 27], ['Bo Hegland', 'AM', 58, 21], ['Nino Žugelj', 'RW', 61, 25],
       ['Tokmac Nguen', 'ST', 65, 31], ['Jeppe Okkels', 'LW', 60, 25], ['Filip Manojlović', 'GK', 62, 29],
       ['Miro Tenho', 'CB', 60, 30], ['Piotr Johansson', 'RB', 61, 30], ['Hampus Finndell', 'CM', 59, 25],
       ['Oskar Fallenius', 'RW', 60, 23], ['August Priske', 'ST', 60, 21], ['Rasmus Schüller', 'DM', 62, 34]
     ] },
    { n: 'IF Elfsborg', s: 'ELF', c1: '#FFE500', c2: '#000000', str: 64, p: [
       ['Isak Pettersson', 'GK', 63, 28], ['Simon Hedlund', 'RB', 66, 32], ['Sebastian Holmén', 'CB', 68, 33],
       ['Rasmus Wikström', 'CB', 64, 24], ['Niklas Hult', 'LB', 66, 35], ['Júlíus Magnússon', 'DM', 61, 27],
       ['Besfort Zeneli', 'CM', 68, 22], ['Wenderson', 'CM', 61, 26], ['Gottfrid Rapp', 'RW', 57, 19],
       ['Frederik Ihler', 'ST', 62, 22], ['Arbër Zeneli', 'LW', 67, 30], ['Simon Eriksson', 'GK', 58, 19],
       ['B. Ibrahim', 'CB', 63, 23], ['Johan Larsson', 'CM', 62, 35], ['Simon Olsson', 'CM', 66, 27],
       ['Taylor Silverholt', 'ST', 60, 24], ['Per Frick', 'ST', 61, 33], ['Daniel Granli', 'CB', 62, 31]
     ] },
    { n: 'GAIS', s: 'GAIS', c1: '#00A94F', c2: '#000000', str: 58, p: [
       ['Mërgim Krasniqi', 'GK', 60, 32], ['August Wängberg', 'RB', 59, 31], ['Oskar Ågren', 'CB', 59, 26],
       ['Robin Frej', 'CB', 59, 27], ['Robin Wendin Thomasson', 'LB', 58, 26], ['Filip Gustafsson', 'DM', 51, 23],
       ['Amin Boudri', 'CM', 59, 20], ['Kevin Holmén', 'CM', 59, 23], ['Gustav Lundgren', 'RW', 63, 30],
       ['Ibrahim Diabate', 'ST', 61, 25], ['Rasmus Niklasson Petrovic', 'LW', 57, 22], ['Kees Sims', 'GK', 54, 22],
       ['Filip Beckman', 'CB', 58, 22], ['Matteo de Brienne', 'LB', 57, 23], ['William Milovanović', 'CM', 59, 23],
       ['Simon Sjöholm', 'RW', 47, 19], ['Jonas Lindberg', 'ST', 56, 36], ['Joackim Fagerjord', 'CM', 57, 26]
     ] },
    { n: 'IFK Göteborg', s: 'IFK', c1: '#0057B8', c2: '#FFFFFF', str: 67, p: [
       ['Pontus Dahlberg', 'GK', 67, 26], ['Felix Eriksson', 'RB', 62, 21], ['Gustav Svensson', 'CB', 69, 38],
       ['August Erlingmark', 'CB', 67, 27], ['Noah Tolf', 'LB', 63, 19], ['Kolbeinn Þórðarson', 'CM', 67, 25],
       ['David Kruse', 'CM', 68, 23], ['Ramon Lundqvist', 'AM', 68, 28], ['Thomas Santos', 'RW', 66, 26],
       ['Max Fenger', 'ST', 69, 23], ['Tobias Heintz', 'LW', 70, 26], ['Elis Bishesari', 'GK', 66, 20],
       ['Jonas Bager', 'CB', 67, 28], ['Rockson Yeboah', 'CB', 61, 20], ['I. Jagne', 'CM', 67, 21],
       ['Alfons Borén', 'AM', 56, 18], ['Senna Clemmensen', 'ST', 65, 21], ['Arbnor Mucolli', 'LW', 69, 25]
     ] },
    { n: 'BK Häcken', s: 'HAC', c1: '#FFE500', c2: '#000000', str: 62, p: [
       ['Etrit Berisha', 'GK', 65, 36], ['Brice Wembangomo', 'RB', 62, 28], ['Filip Helander', 'CB', 63, 32],
       ['Marius Lode', 'CB', 62, 32], ['Adam Lundkvist', 'LB', 61, 31], ['Silas Andersen', 'DM', 63, 21],
       ['Simon Gustafson', 'CM', 65, 30], ['Mikkel Rygaard', 'AM', 64, 34], ['Amor Layouni', 'RW', 65, 32],
       ['Adrian Svanbäck', 'ST', 55, 21], ['Danilo Al Saed', 'LW', 58, 26], ['Andreas Linde', 'GK', 62, 31],
       ['Leo Väisänen', 'CB', 62, 27], ['Jacob Laursen', 'LB', 59, 30], ['Pontus Dahbo', 'CM', 58, 19],
       ['Christ Wawa', 'RW', 55, 18], ['John Dembe', 'ST', 55, 19], ['Samuel Leach Holm', 'DM', 62, 27]
     ] },
    { n: 'Halmstads BK', s: 'HBK', c1: '#0057B8', c2: '#FFFFFF', str: 61, p: [
       ['Tim Erlandsson', 'GK', 64, 28], ['André Boman', 'RB', 63, 23], ['Pascal Gregor', 'CB', 64, 31],
       ['Bleon Kurtulus', 'CB', 62, 18], ['Rami Kaib', 'LB', 64, 28], ['Iddrisu Moro', 'DM', 55, 19],
       ['Gísli Eyjólfsson', 'CM', 62, 31], ['Vincent Johansson', 'AM', 55, 19], ['Villiam Granath', 'RW', 62, 26],
       ['Naeem Mohammed', 'ST', 64, 28], ['Niilo Mäenpää', 'LW', 62, 27], ['Tim Rönning', 'GK', 63, 26],
       ['Gabriel Wallentin', 'CB', 62, 24], ['Gustav Friberg', 'LB', 62, 22], ['Joel Allansson', 'CM', 62, 32],
       ['Ludvig Arvidsson', 'RW', 59, 17], ['Blair Turgott', 'ST', 63, 31], ['Rocco Ascone', 'CM', 61, 21]
     ] },
    { n: 'Hammarby IF', s: 'HAM', c1: '#00A94F', c2: '#FFFFFF', str: 63, p: [
       ['Warner Hahn', 'GK', 66, 33], ['Hampus Skoglund', 'RB', 62, 21], ['Victor Eriksson', 'CB', 67, 24],
       ['Pavle Vagić', 'CB', 65, 25], ['Noah Persson', 'LB', 61, 21], ['Jacob Ouro Ortmark', 'CM', 59, 27],
       ['Tesfaldet Tekie', 'CM', 66, 28], ['Nahir Besara', 'AM', 67, 34], ['Oscar Johansson Schellhas', 'RW', 61, 30],
       ['Nikola Vasić', 'ST', 61, 33], ['Paulos Abraham', 'LW', 61, 22], ['Felix Jakobsson', 'GK', 53, 25],
       ['Franck Winther', 'CB', 59, 24], ['Simon Strand', 'LB', 58, 32], ['Markus Karlsson', 'CM', 62, 21],
       ['Madjedمنتظر Madjed', 'RW', 60, 20], ['Elohim Kaboré', 'ST', 56, 18], ['Frank Junior Adjei', 'CM', 59, 21]
     ] },
    { n: 'Malmö FF', s: 'MFF', c1: '#6CACE4', c2: '#FFFFFF', str: 66, p: [
       ['Robin Olsen', 'GK', 69, 35], ['Jens Larsen', 'RB', 68, 34], ['Pontus Jansson', 'CB', 69, 34],
       ['Colin Rösler', 'CB', 64, 25], ['Busanello', 'LB', 69, 26], ['Oscar Lewicki', 'DM', 62, 32],
       ['Lasse Johnsen', 'CM', 69, 25], ['Anders Christiansen', 'AM', 68, 35], ['Emmanuel Ekong', 'RW', 60, 23],
       ['Erik Botheim', 'ST', 67, 25], ['Hugo Bolin', 'LW', 66, 21], ['Johan Dahlin', 'GK', 67, 38],
       ['Martin Olsson', 'CB', 62, 37], ['Andrej Đurić', 'CB', 62, 21], ['Otto Rosengren', 'CM', 67, 22],
       ['Salifou Soumah', 'RW', 60, 21], ['Daníel Guðjohnsen', 'AM', 59, 19], ['Sead Hakšabanović', 'LW', 66, 26]
     ] },
    { n: 'Mjällby AIF', s: 'MAIF', c1: '#FFE500', c2: '#000000', str: 64, p: [
       ['Noel Törnqvist', 'GK', 67, 23], ['Herman Johansson', 'RB', 67, 27], ['Axel Norén', 'CB', 68, 26],
       ['Abdullah Iqbal', 'CB', 66, 22], ['Elliot Stroud', 'LB', 68, 23], ['Manasse Kusu', 'DM', 57, 23],
       ['Jesper Gustavsson', 'CM', 66, 30], ['Jeppe Kjær', 'AM', 61, 21], ['Bork Bang-Kittilsen', 'RW', 59, 20],
       ['Jacob Bergström', 'ST', 62, 30], ['Abdoulie Manneh', 'LW', 68, 20], ['Alexander Lundin', 'GK', 57, 32],
       ['Tom Pettersson', 'CB', 65, 35], ['Uba Charles', 'RB', 60, 22], ['Viktor Gustafson', 'CM', 64, 30],
       ['Timo Stavitski', 'LW', 62, 25], ['Alexander Johansson', 'ST', 60, 29], ['Ludwig Małachowski Thorell', 'CM', 61, 20]
     ] },
    { n: 'Kalmar FF', s: 'KFF', c1: '#E30613', c2: '#FFFFFF', str: 60, p: [
       ['Samuel Brolin', 'GK', 61, 26], ['Victor Larsson', 'RB', 57, 26], ['Sivert Engh Øverby', 'CB', 59, 27],
       ['Rony Jansson', 'CB', 62, 22], ['Zakarias Råvik', 'LB', 59, 20], ['Melker Hallberg', 'DM', 61, 31],
       ['Vilmer Tyrén', 'CM', 63, 21], ['Nassef Chourak', 'AM', 59, 22], ['Malcolm Stolt', 'RW', 58, 26],
       ['Anthony Olusanya', 'ST', 60, 26], ['Charlie Rosenqvist', 'LW', 63, 19], ['Jakob Kindberg', 'GK', 57, 32],
       ['Sodiq Lawal', 'CB', 56, 18], ['Achraf Dari', 'LB', 59, 27], ['Marius Söderbäck', 'CM', 58, 22],
       ['Charles Sagoe Jr', 'RW', 58, 25], ['Abdi Sabriye', 'ST', 56, 24], ['Lars Sætra', 'CB', 57, 35],
       ['Casper Andersson', 'GK', 54, 21], ['Aboubacar Keita', 'CB', 53, 26], ['William Andersson', 'CM', 54, 20],
       ['Carl Gustafsson', 'CM', 55, 26]
     ] },
    { n: 'IK Sirius', s: 'SIR', c1: '#0057B8', c2: '#000000', str: 58, p: [
       ['Ismael Diawara', 'GK', 58, 30], ['Bogdan Milovanov', 'RB', 58, 27], ['Henrik Rönnlöf Castegren', 'CB', 59, 29],
       ['Simon Sandberg', 'CB', 58, 31], ['Dennis Widgren', 'CM', 57, 31], ['Adam Wikman', 'CM', 56, 21],
       ['Leo Walta', 'CM', 62, 22], ['Marcus Lindberg', 'AM', 58, 25], ['Joakim Persson', 'RW', 60, 23],
       ['Robert Ure', 'ST', 60, 21], ['Isak Bjerkebo', 'LW', 56, 22], ['David Ćelić', 'GK', 53, 22],
       ['Tobias Anker', 'CB', 57, 24], ['Oscar Krusnell', 'LB', 57, 26], ['Melker Heier', 'CM', 58, 24],
       ['Noel Milleskog', 'RW', 59, 23], ['Finlay Neat', 'ST', 50, 19], ['Jakob Voelkerling Persson', 'RB', 57, 24]
     ] },
    { n: 'Örgryte IS', s: 'ORG', c1: '#E30613', c2: '#0057B8', str: 58, p: [
       ['Mathias Nilsson', 'GK', 59, 27], ['Michael Parker', 'RB', 58, 22], ['Jonathan Azulay', 'CB', 59, 33],
       ['Christoffer Styffe', 'CB', 55, 25], ['Mikael Dyrestam', 'LB', 58, 35], ['Charlie Vindehall', 'DM', 59, 30],
       ['Benjamin Laturnus', 'CM', 58, 23], ['Anton Andreasson', 'AM', 58, 30], ['Liam Filip Andersson', 'RW', 54, 23],
       ['Rasmus Alm', 'ST', 58, 31], ['Noah Christoffersson', 'LW', 56, 27], ['Alex Rahm', 'GK', 51, 23],
       ['Hampus Dahlqvist', 'CB', 55, 29], ['William Svensson', 'LB', 53, 24], ['William Kenndal', 'CM', 53, 30],
       ['Daniel Paulson', 'RW', 50, 31], ['Jerome Tibbling Ugwo', 'ST', 52, 28], ['Sebastian Lagerlund', 'CB', 53, 24],
       ['Hampus Gustafsson', 'GK', 50, 25], ['Owen Parker-Price', 'CM', 52, 28], ['Demirel Hodžić', 'CM', 49, 21],
       ['Aydarus Abukar', 'CM', 50, 24]
     ] },
    { n: 'Västerås SK', s: 'VSK', c1: '#000000', c2: '#FFFFFF', str: 54, p: [
       ['Anton Fagerström', 'GK', 55, 35], ['Herman Magnusson', 'RB', 55, 28], ['Marcus Baggesen', 'CB', 51, 23],
       ['Philip Bonde', 'CB', 55, 23], ['Frédéric Nsabiyumva', 'LB', 56, 31], ['Karl Gunnarsson', 'DM', 55, 21],
       ['Mamadou Diagne', 'CM', 53, 23], ['Jonathan Ring', 'AM', 52, 35], ['Abdelrahman Boudah', 'RW', 56, 27],
       ['Mikkel Ladefoged', 'ST', 52, 23], ['Simon Gefvert', 'LW', 54, 29], ['André Bernardini', 'GK', 48, 30],
       ['Victor Wernersson', 'CB', 49, 31], ['Jack Tagesson', 'LB', 48, 21], ['Ismet Lushaku', 'CM', 53, 26],
       ['Melvin Ljungqvist', 'RW', 49, 19], ['Moussa Diallo', 'ST', 50, 19], ['Jonathan Karlsson', 'CB', 49, 23],
       ['Elis Jäger', 'GK', 48, 21], ['Axel Taonsa', 'CM', 46, 22], ['Jens Magnusson', 'CM', 48, 22],
       ['Lucas Sibelius', 'CM', 48, 24]
     ] }
  ]
};

window.LEAGUES.polonia = {
  id: 'polonia', name: 'Ekstraklasa', country: 'Polonia', ucl: 2, rel: 3,
  pool: 'pl', squadSize: 17, teams: [
    { n: 'Śląsk Wrocław', s: 'SLA', c1: '#00A94F', c2: '#FFFFFF', str: 66, p: [
       ['Tomasz Loska', 'GK', 61, 30], ['Aleksander Paluszek', 'RB', 63, 25], ['Serafin Szota', 'CB', 68, 27],
       ['Łukasz Bejger', 'CB', 64, 24], ['Aleks Petkov', 'LB', 67, 27], ['Lukasz Gerstenstein', 'DM', 65, 22],
       ['Piotr Samiec-Talar', 'CM', 69, 25], ['Patrick Olsen', 'AM', 66, 32], ['Junior Eyamba', 'RW', 67, 25],
       ['Sebastian Musiolik', 'ST', 66, 30], ['Patryk Klimala', 'LW', 66, 28], ['Rafał Leszczyński', 'GK', 63, 34],
       ['Krzysztof Kurowski', 'DM', 60, 20], ['Mateusz Bartolewski', 'LB', 64, 28], ['Matías Nahuel', 'CM', 61, 30],
       ['Patryk Janasik', 'RW', 63, 29], ['Mikołaj Tudruj', 'ST', 63, 20], ['Oleksandr Gavrylenko', 'CB', 61, 20],
       ['Bartosz Głogowski', 'GK', 60, 21], ['Hubert Śliczniak', 'GK', 59, 19], ['Yegor Matsenko', 'CB', 61, 24],
       ['Konrad Poprawa', 'CB', 61, 24]
     ] },
    { n: 'Wieczysta Kraków', s: 'WIE', c1: '#E30613', c2: '#FFFFFF', str: 57, p: [
       ['Antoni Mikułko', 'GK', 56, 29], ['Michał Pazdan', 'RB', 56, 28], ['Rafał Pietrzak', 'CB', 56, 23],
       ['Michał Koj', 'CB', 59, 32], ['Kuba Wiśniewski', 'LB', 57, 30], ['Jacek Góralski', 'DM', 55, 27],
       ['Jakub Pešek', 'CM', 59, 29], ['Dani Sandoval', 'AM', 60, 27], ['Dijan Vukojević', 'RW', 55, 29],
       ['Karol Danielak', 'ST', 59, 30], ['Manuel Torres', 'LW', 58, 33], ['Kacper Podlipni', 'GK', 52, 25],
       ['Konrad Kasolik', 'CB', 54, 21], ['Nikodem Kitowski', 'LB', 52, 33], ['Dawid Kiedrowicz', 'CM', 55, 24],
       ['Chuma', 'RW', 56, 31], ['Jakub Wołosik', 'ST', 55, 27], ['Karol Krzywiecki', 'CB', 55, 31],
       ['Dawid Pakulski', 'CM', 50, 26], ['Tomasz Swędrowski', 'CM', 51, 24], ['Michał Trąbka', 'CM', 50, 27],
       ['Petar Brlek', 'CM', 50, 31]
     ] },
    { n: 'Cracovia', s: 'CRA', c1: '#E30613', c2: '#FFFFFF', str: 63, p: [
       ['Sebastian Madejski', 'GK', 63, 28], ['Otar Kakabadze', 'RB', 65, 30], ['Boško Šutalo', 'CB', 65, 25],
       ['Mauro Perković', 'CB', 64, 22], ['Davíð Ólafsson', 'LB', 64, 30], ['Mateusz Praszelik', 'CM', 63, 24],
       ['Mateusz Klich', 'CM', 67, 35], ['Dijon Kameri', 'AM', 61, 21], ['Ajdin Hasić', 'RW', 66, 23],
       ['MinchevМартин Minchev', 'ST', 63, 24], ['Bartosz Biedrzycki', 'LW', 58, 22], ['Henrich Ravas', 'GK', 63, 27],
       ['Gustav Henriksson', 'CB', 63, 27], ['Jakub Jugas', 'CB', 63, 33], ['Mikkel Maigaard', 'CM', 65, 29],
       ['Kahveh Zahiroleslam', 'ST', 62, 23], ['Filip Stojilković', 'ST', 63, 25], ['Dominik Piła', 'CM', 62, 24]
     ] },
    { n: 'GKS Katowice', s: 'GKS', c1: '#FFE500', c2: '#0057B8', str: 62, p: [
       ['Dawid Kudła', 'GK', 64, 33], ['Konrad Gruszkowski', 'RB', 60, 24], ['Arkadiusz Jędrych', 'CB', 64, 33],
       ['Alan Czerwiński', 'CB', 63, 32], ['Lukas Klemenz', 'CB', 61, 29], ['Mateusz Marzec', 'AM', 58, 30],
       ['Mateusz Kowalczyk', 'CM', 64, 21], ['Kacper Łukasiak', 'AM', 60, 21], ['Marcin Wasielewski', 'RW', 64, 30],
       ['Ilya Shkurin', 'ST', 64, 25], ['Bartosz Nowak', 'LW', 64, 31], ['Rafał Strączek', 'GK', 57, 26],
       ['Märten Kuusk', 'CB', 62, 29], ['Aleksander Paluszek', 'CB', 61, 24], ['Jesse Bosch', 'CM', 62, 25],
       ['Adrian Błąd', 'RW', 62, 34], ['Maciej Rosołek', 'AM', 60, 23], ['Eman Marković', 'RW', 62, 26]
     ] },
    { n: 'Górnik Zabrze', s: 'GOR', c1: '#0057B8', c2: '#FFFFFF', str: 64, p: [
       ['Marcel Łubik', 'GK', 60, 21], ['Michal Sáček', 'RB', 67, 28], ['Rafał Janicki', 'CB', 64, 32],
       ['Kryspin Szcześniak', 'CB', 63, 24], ['Erik Janža', 'LB', 65, 32], ['Jarosław Kubicki', 'DM', 65, 29],
       ['Patrik Hellebrand', 'CM', 66, 26], ['Young Jun Goh', 'AM', 62, 23], ['Roberto Massimo', 'RW', 63, 24],
       ['L. Podolski', 'ST', 67, 40], ['Maksym Khlan', 'LW', 63, 22], ['Tomasz Loska', 'GK', 59, 29],
       ['Josema', 'CB', 62, 29], ['Matúš Kmeť', 'RB', 62, 25], ['Lukáš Ambros', 'AM', 59, 21],
       ['Kamil Lukoszek', 'LW', 61, 23], ['Luka Zahović', 'ST', 63, 29], ['Paweł Olkowski', 'CM', 61, 35]
     ] },
    { n: 'Jagiellonia Bialystok', s: 'JAG', c1: '#FFE500', c2: '#E30613', str: 68, p: [
       ['Sławomir Abramowicz', 'GK', 67, 21], ['Álex Pozo', 'RB', 69, 26], ['Bernardo Vital', 'CB', 69, 24],
       ['Andy Pelmard', 'CB', 68, 25], ['Bartłomiej Wdowik', 'LB', 66, 24], ['Taras Romanczuk', 'DM', 69, 33],
       ['Sergio Lozano', 'CM', 69, 26], ['Jesús Imaz', 'AM', 72, 34], ['Louka Prip', 'RW', 65, 28],
       ['Afimico Pululu', 'ST', 70, 26], ['Kamil Jóźwiak', 'LW', 66, 27], ['Miłosz Piekutowski', 'GK', 60, 19],
       ['Dušan Stojinović', 'CB', 65, 24], ['Cezary Polak', 'CM', 61, 22], ['Leon Flach', 'DM', 67, 24],
       ['Álex Cantero', 'LW', 65, 25], ['Dimitris Rallis', 'ST', 61, 20], ['Norbert Wojtuszek', 'RB', 65, 23]
     ] },
    { n: 'Korona Kielce', s: 'KOR', c1: '#FFE500', c2: '#E30613', str: 64, p: [
       ['Xavier Dziekoński', 'GK', 64, 21], ['Viktor Popov', 'RB', 67, 25], ['Konstantinos Soteriou', 'CB', 67, 29],
       ['Slobodan Rubežić', 'CB', 67, 25], ['Konrad Ciszek', 'LB', 52, 17], ['Wojciech Kamiński', 'DM', 61, 24],
       ['Martin Remacle', 'CM', 66, 28], ['Tamar Svetlin', 'AM', 66, 23], ['Wiktor Długosz', 'RW', 65, 25],
       ['Vladimir Nikolov', 'ST', 65, 24], ['Konrad Matuszewski', 'LW', 62, 23], ['Rafał Mamla', 'GK', 64, 21],
       ['Pau Resta', 'CB', 66, 24], ['Marcel Pięczek', 'CB', 65, 24], ['Nono', 'CM', 63, 34],
       ['Hubert Zwoźny', 'RW', 63, 21], ['Antoñín', 'ST', 63, 25], ['Dawid Błanik', 'AM', 65, 28]
     ] },
    { n: 'Lech Poznan', s: 'LEC', c1: '#0057B8', c2: '#FFFFFF', str: 67, p: [
       ['Bartosz Mrozek', 'GK', 68, 25], ['Joel Pereira', 'RB', 68, 28], ['Mateusz Skrzypczak', 'CB', 68, 24],
       ['Antonio Milić', 'CB', 67, 31], ['João Moutinho', 'LB', 66, 27], ['Radosław Murawski', 'DM', 66, 31],
       ['Antoni Kozubal', 'CM', 67, 20], ['Pablo Rodríguez', 'AM', 65, 23], ['Ali Gholizadeh', 'RW', 67, 29],
       ['Mikael Ishak', 'ST', 70, 32], ['Luis Palma', 'LW', 67, 25], ['Krzysztof Bąkowski', 'GK', 58, 22],
       ['Alex Douglas', 'CB', 64, 23], ['Michał Gurgul', 'LB', 63, 19], ['Filip Jagiełło', 'CM', 63, 27],
       ['Taofeek Ismaheel', 'AM', 62, 24], ['Yannick Agnero', 'ST', 63, 22], ['Patrik Wålemark', 'LW', 67, 23]
     ] },
    { n: 'Wisła Kraków', s: 'WKR', c1: '#E30613', c2: '#0057B8', str: 64, p: [
       ['Marcel Lubik', 'GK', 59, 22], ['Julian Lelieveld', 'RB', 66, 29], ['Rafał Mikulec', 'CB', 66, 29],
       ['Alan Uryga', 'CB', 66, 32], ['Maxence Maisonneuve', 'LB', 60, 27], ['Julius Ertlthaler', 'DM', 62, 29],
       ['Marc Carbó', 'CM', 63, 32], ['James Igbekeme', 'AM', 65, 31], ['Ángel Rodado 2.º', 'RW', 65, 29],
       ['Frederico Duarte', 'ST', 66, 27], ['Jordi Sánchez', 'LW', 65, 32], ['Patryk Letkiewicz', 'GK', 62, 21],
       ['Bartosz Jaroch', 'CB', 61, 31], ['Darijo Grujcic', 'LB', 62, 27], ['Marko Bozic', 'CM', 61, 28],
       ['Jérémy Guillemenot', 'RW', 62, 28], ['Élie Youan', 'ST', 65, 27], ['Raoul Giger', 'CB', 59, 31],
       ['Jakub Stępak', 'GK', 56, 20], ['Mariusz Kutwa', 'CB', 58, 22], ['Jakub Krzyżanowski', 'DM', 56, 20],
       ['Wiktor Biedrzycki', 'CB', 57, 29]
     ] },
    { n: 'Legia Warszawa', s: 'LEG', c1: '#00A94F', c2: '#FFFFFF', str: 65, p: [
       ['Kacper Tobiasz', 'GK', 62, 22], ['Paweł Wszołek', 'RB', 65, 33], ['Kamil Piątkowski', 'CB', 66, 25],
       ['Steve Kapuadi', 'CB', 66, 27], ['Rúben Vinagre', 'LB', 67, 26], ['Dawid Szymański', 'DM', 68, 30],
       ['Bartosz Kapustka', 'CM', 67, 28], ['Kacper Urbański', 'CM', 63, 20], ['Kacper Chodyna', 'RW', 63, 26],
       ['Antonio-Mirko Čolak', 'ST', 64, 31], ['Noah Weißhaupt', 'LW', 68, 23], ['Gabriel Kobylak', 'GK', 59, 23],
       ['Radovan Pankov', 'CB', 63, 29], ['Arkadiusz Reca', 'LB', 63, 30], ['Juergen Elitim', 'CM', 64, 26],
       ['Vahan Bichakhchyan', 'AM', 62, 25], ['Mileta Rajović', 'ST', 64, 25], ['Ermal Krasniqi', 'LW', 66, 26]
     ] },
    { n: 'Motor Lublin', s: 'MOT', c1: '#0057B8', c2: '#FFFFFF', str: 58, p: [
       ['Ivan Brkić', 'GK', 58, 30], ['Filip Wójcik', 'RB', 56, 28], ['Hervé Matthys', 'CB', 58, 29],
       ['Arkadiusz Najemski', 'CB', 57, 29], ['Filip Luberecki', 'LB', 57, 20], ['Sergi Samper', 'DM', 59, 30],
       ['Ivo Rodrigues', 'CM', 61, 30], ['Kacper Karasek', 'AM', 55, 23], ['Michał Król', 'RW', 57, 25],
       ['Renat Dadashov', 'ST', 57, 26], ['Fábio Ronaldo', 'LW', 59, 24], ['Gašper Tratnik', 'GK', 56, 25],
       ['Marek Bartoš', 'CB', 56, 28], ['Krystian Palacz', 'LB', 54, 21], ['Bartosz Wolski', 'CM', 60, 28],
       ['Mbaye Ndiaye', 'RW', 55, 21], ['Karol Czubak', 'ST', 57, 25], ['Jan Łabojko', 'DM', 56, 27]
     ] },
    { n: 'Piast Gliwice', s: 'PIA', c1: '#E30613', c2: '#0057B8', str: 63, p: [
       ['František Plach', 'GK', 64, 33], ['Emmanuel Twumasi', 'RB', 59, 28], ['Jakub Czerwiński', 'CB', 64, 33],
       ['Juande Rivas', 'CB', 60, 25], ['Igor Drapiński', 'LB', 61, 21], ['Grzegorz Tomasiewicz', 'DM', 63, 29],
       ['Patryk Dziczek', 'DM', 63, 27], ['Michał Chrapek', 'AM', 63, 33], ['Erik Jirka', 'RW', 63, 27],
       ['Dalmau', 'ST', 62, 31], ['Jorge Félix', 'LW', 63, 33], ['Karol Szymański', 'GK', 57, 32],
       ['Levis Pitan', 'CB', 51, 20], ['Jakub Lewicki', 'LB', 53, 19], ['Quentin Boisgard', 'AM', 59, 28],
       ['Jason Lokilo', 'RW', 60, 26], ['German Barkovskiy', 'AM', 59, 23], ['Hugo Vallejo', 'LW', 61, 25]
     ] },
    { n: 'Pogon Szczecin', s: 'POG', c1: '#0057B8', c2: '#E30613', str: 63, p: [
       ['Valentin Cojocaru', 'GK', 64, 29], ['Linus Wahlqvist Egnell', 'RB', 64, 28], ['Léo Borges', 'CB', 63, 24],
       ['Marian Huja', 'CB', 62, 25], ['Leonardo Koutris', 'LB', 64, 29], ['Mor Ndiaye', 'DM', 58, 24],
       ['Fredrik Ulvestad', 'CM', 63, 33], ['Sam Greenwood', 'AM', 64, 23], ['Musa Juwara', 'RW', 60, 23],
       ['Kacper Kostorz', 'ST', 59, 25], ['Kamil Grosicki', 'LW', 68, 37], ['Krzysztof Kamiński', 'GK', 57, 34],
       ['Danijel Lončar', 'CB', 60, 28], ['Jakub Lis', 'RB', 56, 23], ['Kapcer Smoliński', 'CM', 57, 24],
       ['Adrian Przyborek', 'RW', 60, 18], ['Patryk Paryzek', 'ST', 56, 19], ['José Pozo', 'AM', 62, 29]
     ] },
    { n: 'Radomiak Radom', s: 'RAD', c1: '#00A94F', c2: '#FFFFFF', str: 61, p: [
       ['Filip Majchrowicz', 'GK', 59, 25], ['Zié Ouattara', 'RB', 61, 25], ['Adrián Diéguez', 'CB', 62, 29],
       ['Jérémy Blasco', 'CB', 61, 26], ['Joshua Wilson-Esbrand', 'LB', 61, 22], ['Ibrahima Camará', 'DM', 60, 26],
       ['Romário Baró', 'CM', 61, 25], ['Rafał Wolski', 'AM', 61, 32], ['Jan Grzesik', 'RW', 63, 30],
       ['Maurides', 'ST', 59, 31], ['Capita', 'LW', 62, 23], ['Wiktor Koptas', 'GK', 52, 20],
       ['Steve Kingue', 'CB', 60, 25], ['João Pedro', 'LB', 58, 22], ['Roberto Alves', 'CM', 60, 28],
       ['Vasco Lopes', 'RW', 61, 25], ['Abdoul Tapsoba', 'AM', 58, 23], ['Elves Baldé', 'RW', 60, 25]
     ] },
    { n: 'Rakow Czestochowa', s: 'RAK', c1: '#E30613', c2: '#0057B8', str: 62, p: [
       ['Kacper Trelowski', 'GK', 63, 21], ['Bogdan Racovițan', 'CB', 59, 25], ['SvarnasΣτράτος Svarnas', 'CB', 65, 27],
       ['Zoran Arsenić', 'CB', 62, 31], ['Apostolos Konstantopoulos', 'CB', 58, 22], ['Oskar Repka', 'CM', 61, 26],
       ['Vladyslav Kochergin', 'CM', 64, 29], ['Ivi López', 'AM', 65, 31], ['Fran Tudor', 'RW', 63, 29],
       ['Jonatan Braut Brunes', 'ST', 63, 24], ['Jean Carlos', 'LW', 63, 29], ['Jakub Mądrzyk', 'GK', 55, 21],
       ['Ariel Mosór', 'CB', 60, 22], ['Erick Otieno', 'LW', 61, 28], ['Marko Bulat', 'CM', 61, 23],
       ['Michael Ameyaw', 'RW', 61, 24], ['Imad Rondić', 'ST', 58, 26], ['Karol Struski', 'CM', 61, 24]
     ] },
    { n: 'Widzew Lodz', s: 'WID', c1: '#E30613', c2: '#FFFFFF', str: 59, p: [
       ['Veljko Ilić', 'GK', 58, 21], ['Peter Therkildsen', 'RB', 56, 27], ['Stelios Andreou', 'CB', 62, 22],
       ['Mateusz Żyro', 'CB', 58, 26], ['Samuel Kozlovský', 'LB', 57, 25], ['Lindon Selahi', 'DM', 61, 26],
       ['Juljan Shehu', 'CM', 60, 26], ['Bartłomiej Pawłowski', 'AM', 56, 32], ['Samuel Akere', 'RW', 57, 21],
       ['Avdi Zeqiri', 'ST', 62, 26], ['Mariusz Fornalczyk', 'LW', 59, 22], ['Rafał Gikiewicz', 'GK', 56, 37],
       ['Ricardo Visus', 'CB', 57, 24], ['Dion Gallapeni', 'LB', 54, 20], ['Fran Álvarez', 'CM', 59, 27],
       ['Ángel Baena', 'AM', 54, 24], ['Pape Ba', 'ST', 59, 27], ['Sebastian Bergier', 'ST', 57, 25]
     ] },
    { n: 'Wisla Plock', s: 'WIS', c1: '#0057B8', c2: '#FFFFFF', str: 61, p: [
       ['Rafał Leszczyński', 'GK', 62, 33], ['Ž. Rogelj', 'RB', 64, 25], ['Marcin Kamiński', 'CB', 65, 33],
       ['Andrias Edmundsson', 'CB', 61, 24], ['Quentin Lecoeuche', 'LB', 61, 31], ['Dani Pacheco', 'DM', 64, 34],
       ['Dominik Kun', 'CM', 62, 32], ['Matchoi Djaló', 'AM', 63, 22], ['Piotr Krawczyk', 'ST', 59, 30],
       ['Deni Jurić', 'ST', 62, 27], ['Giannis Niarchos', 'ST', 59, 23], ['Jakub Burek', 'GK', 53, 22],
       ['Marcus Haglind-Sangré', 'DM', 60, 30], ['Bojan Nastić', 'LB', 60, 30], ['Iban Salvador', 'AM', 61, 29],
       ['Oskar Tomczyk', 'ST', 54, 19], ['Łukasz Sekulski', 'ST', 62, 34], ['Tomás Tavares', 'RB', 63, 24]
     ] },
    { n: 'Zaglebie Lubin', s: 'ZAG', c1: '#F58220', c2: '#0057B8', str: 62, p: [
       ['Dominik Hładun', 'GK', 63, 29], ['Mateusz Grzybek', 'RB', 60, 29], ['Aleks Ławniczak', 'CB', 65, 26],
       ['Damian Michalski', 'CB', 63, 27], ['Luka Lučić', 'LB', 61, 30], ['Damian Dąbrowski', 'DM', 65, 32],
       ['Ludvig Fritzson', 'CM', 59, 29], ['Adam Radwański', 'AM', 60, 27], ['Kajetan Szmyt', 'RW', 63, 23],
       ['Leonardo Rocha', 'ST', 65, 28], ['Mateusz Wdowiak', 'LW', 64, 28], ['Jasmin Burić', 'GK', 60, 38],
       ['Igor Orlikowski', 'CB', 62, 19], ['Roman Yakuba', 'CB', 62, 24], ['Mateusz Dziewiatowski', 'CM', 53, 18],
       ['Jakub Sypek', 'RW', 61, 24], ['Michalis Kosidis', 'ST', 64, 23], ['Filip Kocaba', 'DM', 62, 20]
     ] }
  ]
};

window.LEAGUES.croacia = {
  id: 'croacia', name: 'HNL', country: 'Croacia', ucl: 2, rel: 1,
  pool: 'balk', squadSize: 17, teams: [
    { n: 'Dinamo Zagreb', s: 'DZG', c1: '#0057B8', c2: '#FFFFFF', str: 70, p: [
       ['Ivan Nevistić', 'GK', 68, 26], ['Ronaël Pierre-Gabriel', 'RB', 71, 27], ['Scott McKenna', 'CB', 73, 28],
       ['Torrente', 'CB', 71, 23], ['Matteo Pérez Vinlöf', 'LB', 65, 19], ['Ismaël Bennacer', 'DM', 78, 27],
       ['Dejan Ljubičić', 'CM', 71, 27], ['Luka Stojković', 'AM', 68, 21], ['Mateo Lisica', 'RW', 66, 21],
       ['Drena Beljo', 'ST', 71, 23], ['Arbër Hoxha', 'LW', 66, 26], ['Ivan Filipović', 'GK', 63, 30],
       ['Kévin Théophile-Catherine', 'CB', 69, 35], ['Niko Galešić', 'CB', 68, 24], ['Miha Zajc', 'CM', 70, 31],
       ['José Córdoba', 'RW', 66, 21], ['Sandro Kulenović', 'ST', 67, 25], ['Gonzalo Villar', 'CM', 70, 27]
     ] },
    { n: 'Hajduk Split', s: 'HAJ', c1: '#FFFFFF', c2: '#0057B8', str: 67, p: [
       ['Ivica Ivušić', 'GK', 68, 30], ['Niko Sigur', 'RB', 66, 21], ['Edgar', 'CB', 67, 28],
       ['Zvonimir Šarlija', 'CB', 65, 28], ['Š. Hrgović', 'LB', 66, 21], ['Adrion Pajaziti', 'DM', 61, 22],
       ['Hugo Guillamón', 'CM', 68, 25], ['Filip Krovinović', 'AM', 66, 29], ['Abdoulie Sanyang', 'RW', 63, 26],
       ['Marko Livaja', 'ST', 75, 31], ['Ante Rebić', 'LW', 68, 31], ['Ivan Lučić', 'GK', 64, 30],
       ['Ron Raçi', 'DM', 61, 22], ['Dario Melnjak', 'LB', 65, 32], ['Rokas Pukštas', 'CM', 64, 20],
       ['Bruno Durdov', 'RW', 60, 17], ['Michele Šego', 'LW', 65, 24], ['Ismaël Diallo', 'LB', 65, 28]
     ] },
    { n: 'HNK Rijeka', s: 'RIJ', c1: '#FFFFFF', c2: '#0057B8', str: 64, p: [
       ['Ivan Nevistić', 'GK', 60, 26], ['Fausto Budicin', 'RB', 66, 20], ['Luka Cvetković', 'CB', 66, 25],
       ['Luka Čanković', 'CB', 65, 30], ['Dino Šarković', 'LB', 65, 30], ['Gerald Chibueze Diyoke', 'DM', 65, 26],
       ['Filip Frančišković', 'CM', 64, 25], ['Roko Nakić', 'AM', 64, 28], ['Mate Bajić', 'RW', 62, 33],
       ['Matko Budan', 'ST', 64, 25], ['Dario Vizinger', 'LW', 65, 32], ['Giuliano Popović', 'GK', 59, 28],
       ['Yusuf Musa', 'CB', 60, 22], ['Ivan Lucić', 'LB', 58, 30], ['Juri Cisotti', 'CM', 61, 32],
       ['Duje Mrdeša', 'RW', 62, 25], ['Antonio Petrović', 'ST', 61, 31], ['Muhammed Kabiru', 'CB', 59, 23],
       ['Borna Magaš', 'GK', 57, 23], ['Ayotunde Ikuepamitan', 'GK', 58, 24], ['Edin Fatić', 'CM', 59, 30],
       ['Mihael Rebernik', 'CM', 58, 28]
     ] },
    { n: 'NK Osijek', s: 'OSI', c1: '#0057B8', c2: '#FFFFFF', str: 63, p: [
       ['Nikola Curcija', 'GK', 66, 25], ['Krešimir Vrbanac', 'RB', 62, 21], ['Styopa Mkrtchyan', 'CB', 65, 23],
       ['Jon Mersinaj', 'CB', 66, 27], ['Roko Jurišić', 'LB', 66, 25], ['Hrvoje Babec', 'DM', 62, 27],
       ['Vedran Jugović', 'CM', 61, 37], ['Stanislav Shopov', 'AM', 64, 24], ['Justice Ohajunwa', 'RW', 63, 25],
       ['Yannick Toure', 'ST', 61, 26], ['Arnel Jakupović', 'LW', 61, 28], ['Jan Hlapčić', 'GK', 62, 20],
       ['Luka Jelenić', 'CB', 61, 26], ['Emin Hasić', 'LB', 59, 23], ['Nail Omerović', 'CM', 58, 24],
       ['Marino Žeravica', 'RW', 58, 20], ['Filip Živković', 'ST', 60, 20], ['Luka Zebec', 'CB', 60, 26],
       ['Marko Malenica', 'GK', 57, 32], ['Mattia Del Favero', 'GK', 58, 28], ['David Čolina', 'DM', 57, 26],
       ['Renan Guedes', 'CB', 58, 28]
     ] },
    { n: 'NK Slaven Belupo', s: 'SLA', c1: '#0057B8', c2: '#FFE500', str: 59, p: [
       ['Matija Jesenović', 'GK', 60, 29], ['Vinko Međimorec', 'RB', 57, 30], ['Antonio Jakir', 'CB', 59, 23],
       ['Dominik Kovačić', 'CB', 59, 32], ['Zvonimir Katalinić', 'LB', 59, 22], ['Adriano Jagušić', 'DM', 60, 21],
       ['Mihail Caimacov', 'CM', 58, 28], ['Adrian Liber', 'AM', 59, 25], ['Ivan Božić', 'RW', 58, 29],
       ['Josip Mitrović', 'ST', 57, 26], ['Ante Šuto', 'LW', 57, 26], ['Antun Marković', 'GK', 56, 34],
       ['Tomislav Božić', 'CB', 54, 39], ['Marko Lešković', 'LB', 55, 35], ['Ivan Ćubelić', 'CM', 56, 23],
       ['Ilija Nestorovski', 'RW', 54, 36], ['Patrik Marić', 'ST', 57, 19], ['Luka Ćurković', 'CB', 57, 21],
       ['Osman Hadžikić', 'GK', 53, 30], ['Ivan Čović', 'GK', 54, 36], ['Mateo Barać', 'DM', 50, 26],
       ['Filip Krušelj', 'CB', 53, 21]
     ] },
    { n: 'NK Varazdin', s: 'VAR', c1: '#FFE500', c2: '#0057B8', str: 55, p: [
       ['Oliver Zelenika', 'GK', 54, 33], ['Sven Lesjak', 'RB', 55, 20], ['Vane Jovanov', 'CB', 53, 28],
       ['Luka Škaričić', 'CB', 53, 24], ['Lamine Ba', 'LB', 55, 29], ['Tomislav Duvnjak', 'DM', 54, 23],
       ['Leon Belcar', 'CM', 56, 24], ['Jaime Sierra', 'AM', 55, 28], ['Matej Vuk', 'RW', 54, 26],
       ['Marko Dabro', 'ST', 55, 29], ['Mate Antunović', 'LW', 56, 22], ['Tomislav Tomić', 'GK', 52, 29],
       ['Petar Bočkaj', 'CB', 51, 30], ['Mario Mladenovski', 'LB', 50, 26], ['Rüfət Abdullazadə', 'CM', 52, 25],
       ['Ivan Mamut', 'RW', 51, 29], ['Thierry Nevers', 'ST', 53, 24], ['Novak Tepšić', 'CB', 53, 24],
       ['Josip Silić', 'GK', 49, 27], ['Frane Maglica', 'CB', 51, 29], ['Antonio Boršić', 'CB', 49, 31],
       ['Mateo Barać', 'DM', 48, 32]
     ] },
    { n: 'NK Lokomotiva', s: 'LOK', c1: '#0057B8', c2: '#FFE500', str: 56, p: [
       ['Krunoslav Hendija', 'GK', 54, 37], ['Mody Boune', 'RB', 57, 24], ['Cheikh Mbacke Diop', 'CB', 56, 21],
       ['Leonardo Sigali', 'CB', 57, 39], ['Tino Jukić', 'LB', 57, 25], ['Blaž Bošković', 'DM', 57, 25],
       ['Domagoj Antolić', 'CM', 54, 36], ['Fabijan Krivak', 'AM', 55, 21], ['Silvio Goričan', 'RW', 57, 26],
       ['Mirko Sušak', 'ST', 56, 22], ['Ivan Canjuga', 'LW', 56, 21], ['Josip Posavec', 'GK', 51, 30],
       ['Luka Dajčer', 'CB', 50, 25], ['Marko Pajač', 'LB', 49, 33], ['Aleks Stojaković', 'CM', 50, 22],
       ['Dušan Vuković', 'RW', 52, 24], ['Bartol Kardum', 'ST', 50, 20], ['Mario Šitum', 'CB', 52, 34],
       ['Zvonimir Šubarić', 'GK', 49, 29], ['Luka Savatović', 'GK', 48, 22], ['Denis Kolinger', 'DM', 48, 32],
       ['Marin Leovac', 'CB', 50, 38]
     ] },
    { n: 'NK Istra 1961', s: 'IST', c1: '#00A94F', c2: '#FFE500', str: 55, p: [
       ['Franko Kolić', 'GK', 53, 23], ['Jovan Ivanišević', 'RB', 55, 21], ['Mohamed Nasraoui', 'CB', 54, 24],
       ['Dario Marešić', 'CB', 58, 27], ['Ville Koski', 'LB', 55, 24], ['Josip Radošević', 'DM', 57, 32],
       ['Logi Hrafn Róbertsson', 'CM', 54, 22], ['Antonio Maurić', 'AM', 55, 23], ['Vinko Rozić', 'RW', 54, 23],
       ['Smail Prevljak', 'ST', 55, 31], ['Saydou Bangura', 'LW', 56, 23], ['Jan Paus-Kunšt', 'GK', 51, 25],
       ['Alejandro Jay', 'CB', 51, 24], ['Filip Taraba', 'LB', 53, 20], ['Stjepan Lončar', 'CM', 50, 30],
       ['Emil Frederiksen', 'RW', 49, 26], ['Dominik Celija', 'ST', 51, 20], ['Marcel Heister', 'CB', 54, 34],
       ['Advan Kadušić', 'CB', 50, 29], ['Albert Malaj', 'CB', 49, 20], ['Israel Isaac Ayuma', 'CM', 48, 21],
       ['Danijel Djuric', 'CM', 50, 23]
     ] },
    { n: 'HNK Gorica', s: 'GOR', c1: '#0057B8', c2: '#FFFFFF', str: 58, p: [
       ['Karlo Žiger', 'GK', 57, 25], ['Jakov Filipović', 'RB', 57, 34], ['Mateo Leš', 'CB', 58, 26],
       ['Jakov Gurlica', 'CB', 58, 22], ['Marijan Čabraja', 'LB', 59, 29], ['Iker Pozo', 'DM', 58, 26],
       ['Jurica Pršir', 'CM', 57, 26], ['Ivan Fiolić', 'AM', 59, 30], ['Filip Čuić', 'RW', 56, 23],
       ['Luka Vrzić', 'ST', 59, 19], ['Marko Kolar', 'LW', 58, 31], ['Darijan Žarkov', 'GK', 51, 34],
       ['Elvir Duraković', 'CB', 54, 26], ['Stefan Perić', 'LB', 54, 29], ['Luka Kapulica', 'CM', 52, 21],
       ['Vanja Pelko', 'RW', 55, 24], ['Ante Erceg', 'ST', 55, 37], ['Luka Dora', 'CB', 55, 21],
       ['Davor Matijaš', 'GK', 49, 27], ['Matej Vidić', 'GK', 51, 22], ['Žan Trontelj', 'CB', 52, 26],
       ['Domagoj Pavičić', 'CM', 53, 32]
     ] },
    { n: 'NK Rudeš', s: 'RUD', c1: '#E30613', c2: '#FFFFFF', str: 53, p: [
       ['Karlo Kralj', 'GK', 51, 25], ['Dominik Mihaljević', 'RB', 55, 32], ['Luka Pavković', 'CB', 53, 33],
       ['Tomislav Mrčela', 'CB', 54, 36], ['Vanja Vukmanović', 'LB', 54, 22], ['Tomislav Srbljinović', 'DM', 53, 27],
       ['Ante Ćorić', 'CM', 56, 29], ['Aleksa Latković', 'AM', 54, 26], ['Matko Babić', 'RW', 52, 28],
       ['Eros Grezda', 'ST', 53, 31], ['Vinko Petković', 'LW', 53, 31], ['Matej Marković', 'GK', 51, 30],
       ['Aboubacar Camara', 'CB', 50, 25], ['Fran Karačić', 'LB', 57, 30], ['Roko Brajković', 'CM', 51, 23],
       ['Fran Topić', 'RW', 53, 22], ['Dominik Rešetar', 'ST', 49, 26], ['Edin Šehić', 'CB', 48, 31],
       ['Mihael Stipić', 'CM', 49, 22], ['Riad Mašala', 'CM', 45, 22], ['Jan Doležal', 'ST', 49, 33],
       ['Luka Pasariček', 'CM', 48, 28]
     ] }
  ]
};

window.LEAGUES.serbia = {
  id: 'serbia', name: 'Superliga de Serbia', country: 'Serbia', ucl: 2, rel: 2,
  pool: 'balk', squadSize: 17, teams: [
    { n: 'Estrella Roja de Belgrado', s: 'CZV', c1: '#E30613', c2: '#FFFFFF', str: 70, p: [
       ['Matheus', 'GK', 72, 34], ['Miloš Veljković', 'RB', 72, 31], ['Nair Tiknizyan', 'CB', 68, 27],
       ['Nikola Stanković', 'CB', 68, 23], ['Strahinja Eraković', 'LB', 73, 25], ['Mirko Ivanić', 'DM', 70, 33],
       ['Kristiyan Balov', 'CM', 71, 20], ['Aleksandar Katai', 'AM', 68, 35], ['Marko Arnautović', 'RW', 69, 37],
       ['Jay Enem', 'ST', 70, 23], ['Bruno Duarte', 'LW', 69, 30], ['Savo Radanović', 'GK', 68, 17],
       ['Matej Strika', 'CB', 68, 17], ['Franklin Tebo Uchenna', 'LB', 68, 26], ['Osman Bukari', 'CM', 65, 28],
       ['Stefan Gudelj', 'RW', 66, 20], ['Seol Young-woo', 'ST', 66, 28], ['Derrick Luckassen', 'CB', 65, 31],
       ['Ivan Guteša', 'GK', 63, 24], ['Adem Avdić', 'CB', 66, 19], ['Mohammad Abu Fani', 'CM', 68, 28],
       ['Tomás Händel', 'CM', 63, 26]
     ] },
    { n: 'Partizan de Belgrado', s: 'PAR', c1: '#000000', c2: '#FFFFFF', str: 69, p: [
       ['Marko Milošević', 'GK', 67, 35], ['Aranđel Stojković', 'RB', 69, 31], ['Mario Jurčević', 'CB', 68, 31],
       ['Mateja Milovanović', 'CB', 68, 22], ['Vanja Dragojević', 'LB', 69, 20], ['Bibras Natkho', 'DM', 67, 38],
       ['Milan Vukotić', 'CM', 70, 24], ['Ghayas Zahid', 'AM', 71, 32], ['Jovan Milošević', 'RW', 67, 21],
       ['Andrej Kostić', 'ST', 68, 19], ['Aldo Kalulu', 'LW', 71, 30], ['Miloš Krunić', 'GK', 66, 30],
       ['Abdumalik Mohammed', 'CB', 65, 19], ['Iván Vasiljević', 'LB', 63, 21], ['Nemanja Trifunović', 'CM', 66, 22],
       ['Demba Seck', 'RW', 66, 25], ['Dušan Jovanović', 'ST', 63, 20], ['Vukašin Đurđević', 'CB', 66, 22],
       ['Tarik Banjić', 'GK', 63, 18], ['Vukašin Jovanović', 'GK', 64, 19], ['Yanis Karabelyov', 'CB', 61, 30],
       ['Milan Roganović', 'DM', 60, 21]
     ] },
    { n: 'FK Vojvodina', s: 'VOJ', c1: '#E30613', c2: '#FFFFFF', str: 62, p: [
       ['Matija Gočmanac', 'GK', 64, 23], ['Kufre Eta', 'RB', 63, 22], ['Đorđe Crnomarković', 'CB', 63, 33],
       ['Siniša Tanjga', 'CB', 65, 22], ['Mihai Butean', 'LB', 62, 30], ['Marko Poletanović', 'DM', 61, 33],
       ['Stefan Mitrović', 'CM', 62, 24], ['Marko Veličković', 'AM', 63, 22], ['Aleksa Vukanović', 'RW', 62, 34],
       ['Stefan Stanisavljević', 'ST', 61, 24], ['Milan Kolarević', 'LW', 62, 22], ['Dragan Rosić', 'GK', 61, 30],
       ['Lazar Nikolić', 'CB', 58, 27], ['Lucas Barros', 'LB', 58, 27], ['Dejan Zukić', 'CM', 64, 25],
       ['Lazar Peranović', 'RW', 60, 19], ['Vuk Boškan', 'ST', 60, 20], ['Kornél Szűcs', 'CB', 59, 25],
       ['Bogdan Bogdanović', 'GK', 58, 18], ['Hamza Redžić', 'CB', 56, 22], ['Marko Mladenović', 'CM', 59, 21],
       ['Vladan Novevski', 'CM', 56, 24]
     ] },
    { n: 'FK Cukaricki', s: 'CUK', c1: '#000000', c2: '#FFE500', str: 63, p: [
       ['Đorđe Nikolić', 'GK', 63, 29], ['Zlatan Šehović', 'RB', 63, 26], ['Nenad Tomović', 'CB', 61, 39],
       ['Veljko Žurić', 'CB', 61, 18], ['Lazar Stojanović', 'LB', 64, 21], ['Marko Docić', 'DM', 64, 33],
       ['Lazar Mijović', 'CM', 61, 23], ['Uroš Miladinović', 'AM', 63, 22], ['Luka Đorđević', 'RW', 61, 20],
       ['Fiorin Durmishaj', 'ST', 65, 30], ['Aires Nanque', 'LW', 65, 20], ['Vladan Čarapić', 'GK', 57, 19],
       ['Strahinja Anđelić', 'CB', 60, 18], ['Jovan Vojnović', 'LB', 59, 19], ['Coby Ebere', 'CM', 60, 21],
       ['Milan Pavkov', 'RW', 58, 32], ['Mateo Maravić', 'ST', 57, 18], ['Assane Ouedraogo', 'CB', 57, 21],
       ['Vladimir Stojković', 'GK', 54, 43], ['Ismael Maiga', 'CB', 58, 23], ['Milan Đoković', 'DM', 55, 23],
       ['Emmanuel Dzigbah', 'CB', 57, 20]
     ] },
    { n: 'Radnicki 1923', s: 'R23', c1: '#E30613', c2: '#FFFFFF', str: 60, p: [
       ['Muhamed Šahinović', 'GK', 60, 23], ['Mohamed Mezghrani', 'RB', 59, 32], ['Nemanja Miletić', 'CB', 61, 35],
       ['Nikola Miličić', 'CB', 59, 22], ['Nikola Marjanović', 'LB', 59, 28], ['Vanja Tomić', 'DM', 58, 21],
       ['Miloš Ristić', 'CM', 61, 31], ['Semir Alić', 'AM', 61, 22], ['Bojica Nikčević', 'RW', 62, 26],
       ['Mićo Kuzmanović', 'ST', 57, 30], ['Uroš Sremčević', 'LW', 62, 20], ['Luka Lijeskić', 'GK', 55, 21],
       ['Hassan Hilu', 'CB', 53, 27], ['Slobodan Simović', 'LB', 55, 37], ['Nikola Bukumira', 'CM', 56, 21],
       ['Mohamed Cissé', 'RW', 56, 25], ['Ilija Babić', 'ST', 56, 24], ['Dimitrije Nikolić', 'CB', 57, 19],
       ['Bogdan Marinković', 'GK', 52, 22], ['Thomas Ude', 'CB', 55, 20], ['Mateja Dukić', 'CB', 52, 25],
       ['Nemanja Glavčić', 'CM', 53, 29]
     ] },
    { n: 'FK Radnicki Nis', s: 'RNI', c1: '#E30613', c2: '#0057B8', str: 56, p: [
       ['Nikola Ćuruvija', 'GK', 53, 20], ['Marko Mijailović', 'RB', 55, 29], ['Basile Yamkam', 'CB', 54, 28],
       ['Uroš Vitas', 'CB', 57, 34], ['Marko Radić', 'LB', 55, 19], ['Franck Kanouté', 'DM', 58, 28],
       ['Stefan Ashkovski', 'CM', 58, 34], ['Radomir Milosavljević', 'AM', 56, 34], ['Radivoj Bosić', 'RW', 57, 26],
       ['Nemanja Belaković', 'ST', 57, 29], ['Lacine Koné', 'LW', 55, 24], ['Dejan Stanivuković', 'GK', 51, 32],
       ['Dušan Pavlović', 'CB', 53, 22], ['Nemanja Mićević', 'LB', 53, 27], ['Mateja Radonjić', 'CM', 53, 21],
       ['Babacar Mboup', 'RW', 51, 24], ['Nikola Srećković', 'ST', 51, 30], ['Milijan Ilić', 'CB', 52, 33],
       ['Strahinja Manojlović', 'GK', 50, 24], ['Marko Petković', 'CB', 50, 34], ['Luka Stanković', 'DM', 48, 19],
       ['Đorđe Petrović', 'CB', 67, 20]
     ] },
    { n: 'Mačva Šabac', s: 'MAC', c1: '#0057B8', c2: '#FFFFFF', str: 53, p: [
       ['Sava Ristivojević', 'GK', 54, 21], ['Nikola Jovanović', 'RB', 55, 31], ['Vladimir Ilić', 'CB', 55, 21],
       ['Luka Nikolić', 'CB', 51, 32], ['Slobodan Sladojević', 'LB', 54, 29], ['Darko Terzić', 'DM', 54, 26],
       ['Boško Vraštanović', 'CM', 51, 31], ['Vladimir Rakić', 'AM', 53, 22], ['Sani Abdullahi', 'RW', 55, 26],
       ['Dejan Živkov', 'ST', 50, 31], ['Mitar Ergelaš', 'LW', 54, 23], ['Kosta Rakonić', 'GK', 50, 23],
       ['Igor Ristivojević', 'CB', 48, 22], ['Matija Županjac', 'LB', 47, 28], ['Đorđe Đorđić', 'CM', 49, 33],
       ['Vuk Despenić', 'RW', 47, 21], ['Igor Milanović', 'ST', 49, 22], ['Mateja Dukić', 'CB', 47, 25],
       ['Luka Radovanović', 'AM', 46, 23], ['Vukota Isakovski', 'ST', 47, 20], ['Luka Pejović', 'ST', 47, 25],
       ['Uroš Kilibarda', 'ST', 47, 24]
     ] },
    { n: 'FK Zemun', s: 'ZEM', c1: '#00A94F', c2: '#FFFFFF', str: 53, p: [
       ['Marko Knežević', 'GK', 54, 27], ['Ilija Kostić', 'RB', 53, 31], ['Đorđe Jovanović', 'CB', 55, 21],
       ['Milan Spremo', 'CB', 55, 22], ['Ivan Ostojić', 'LB', 51, 21], ['Žarko Bogdanović', 'DM', 54, 28],
       ['Ognjen Ilić', 'CM', 52, 32], ['Danilo Miladinović', 'AM', 55, 21], ['Dimitrije Tabaković', 'RW', 53, 26],
       ['Novak Petrušić', 'ST', 53, 33], ['Nemanja Belaković', 'LW', 53, 23], ['Mladen Živković', 'GK', 50, 21],
       ['Dejan Parađina', 'CB', 48, 22], ['Vasilije Bakić', 'LB', 50, 25], ['Godswill Vadze', 'CM', 48, 24],
       ['Saša Knežević', 'RW', 51, 33], ['Eduvie Ikoba', 'ST', 47, 26], ['Aleksandar Kadijević', 'CB', 50, 22],
       ['Đorđe Petrović', 'CM', 69, 25], ['Milan Jokić', 'CM', 46, 27], ['Uroš Ljubomirac', 'ST', 48, 33],
       ['Andrej Milošević', 'ST', 46, 25]
     ] },
    { n: 'FK IMT Belgrado', s: 'IMT', c1: '#0057B8', c2: '#FFE500', str: 56, p: [
       ['Ognjen Čančarević', 'GK', 58, 37], ['Julián Delmás', 'RB', 57, 31], ['Iván Martos', 'CB', 55, 29],
       ['Blagoje Uzunovski', 'CB', 58, 17], ['Moussa Sissako', 'LB', 56, 26], ['Luka Luković', 'DM', 56, 30],
       ['Ibrahima Kebe', 'CM', 58, 26], ['Josué Tiendrébéogo', 'AM', 54, 24], ['Aleksa Mitić', 'RW', 56, 17],
       ['Dušan Žagar', 'ST', 54, 20], ['Rafael Juninho', 'LW', 57, 20], ['Kadir Gicić', 'GK', 54, 19],
       ['Vukašin Jovanović', 'CB', 54, 30], ['Nikola Glišić', 'LB', 53, 27], ['Tadija Cojić', 'CM', 53, 17],
       ['Oriyomi Lebi', 'RW', 52, 20], ['Vladimir Radočaj', 'ST', 51, 28], ['Stefan Bastaja', 'CB', 53, 21],
       ['Matej Pribišić', 'GK', 50, 17], ['Marko Luković', 'CB', 49, 23], ['Andrej Milanović', 'CB', 49, 18],
       ['Ismael Casas', 'DM', 48, 25]
     ] },
    { n: 'FK Mladost Lucani', s: 'MLA', c1: '#00A94F', c2: '#FFFFFF', str: 59, p: [
       ['Saša Stamenković', 'GK', 60, 41], ['Nemanja Petrović', 'RB', 58, 34], ['Dražen Dubačkić', 'CB', 60, 27],
       ['Nikola Andrić', 'CB', 59, 34], ['Milan Joksimović', 'LB', 60, 36], ['Veljko Kijevčanin', 'DM', 59, 27],
       ['Janko Tumbasević', 'CM', 59, 41], ['Filip Žunić', 'AM', 56, 24], ['Petar Bojić', 'RW', 59, 35],
       ['Ognjen Krsmanović', 'ST', 57, 21], ['Ognjen Bondžulić', 'LW', 59, 19], ['Nikola Popović', 'GK', 55, 20],
       ['Taras Bondarenko', 'CB', 53, 34], ['Aleksa Milošević', 'LB', 55, 19], ['Vukašin Marković', 'CM', 55, 25],
       ['Jovan Popović', 'RW', 54, 18], ['Mihailo Todosijević', 'ST', 53, 19], ['Nikola Boranijašević', 'CB', 53, 34],
       ['Željko Samčović', 'GK', 53, 24], ['Dušan Begović', 'GK', 51, 20], ['Nikola Ćirković', 'DM', 51, 35],
       ['Žarko Udovičić', 'CB', 51, 39]
     ] },
    { n: 'FK Radnik Surdulica', s: 'RSU', c1: '#0057B8', c2: '#FFFFFF', str: 58, p: [
       ['Lazar Radojičić', 'GK', 58, 23], ['David Stojanović', 'RB', 58, 24], ['Uroš Ilić', 'CB', 60, 20],
       ['Pedro Empis', 'CB', 59, 29], ['Sandro Trémoulet', 'LB', 56, 27], ['Haris Hajdarević', 'DM', 59, 28],
       ['Miloš Popović', 'CM', 56, 22], ['Luka Puzović', 'AM', 59, 22], ['Douglas Owusu', 'RW', 58, 20],
       ['Vukašin Bogdanović', 'ST', 56, 24], ['Borko Duronjić', 'LW', 59, 29], ['Stefan Ilić', 'GK', 55, 25],
       ['Uros Filipović', 'CB', 55, 20], ['Uroš Blagojević', 'LB', 54, 24], ['Uroš Filimonović', 'CM', 51, 20],
       ['Andrija Lazarević', 'RW', 55, 22], ['Lazar Stojanović', 'ST', 54, 26], ['Sadick Abubakar', 'CB', 55, 28],
       ['Stefan Ranđelović', 'GK', 52, 27], ['Mateja Gašić', 'CB', 50, 23], ['Mlađan Stevanović', 'CM', 50, 31],
       ['Aleksandar Pejović', 'CM', 49, 36]
     ] },
    { n: 'OFK Beograd', s: 'OFK', c1: '#0057B8', c2: '#FFFFFF', str: 61, p: [
       ['Vuk Draškić', 'GK', 60, 19], ['Stefan Despotovski', 'RB', 60, 23], ['Andrej Pavlović', 'CB', 61, 19],
       ['Darko Gojković', 'CB', 62, 38], ['Leon Ivanović', 'LB', 62, 18], ['Edmund Addo', 'DM', 59, 26],
       ['Sergio Peña', 'CM', 65, 31], ['Saša Marković', 'AM', 62, 35], ['Tayrell Wouter', 'RW', 59, 24],
       ['Ethan Hoard', 'ST', 61, 25], ['Tjay De Barr', 'LW', 59, 26], ['Vuk Barlov', 'GK', 55, 18],
       ['Milan Rodić', 'CB', 60, 35], ['Uroš Stojanović', 'LB', 57, 31], ['Miljan Momčilović', 'CM', 56, 25],
       ['Đorđe Ranković', 'RW', 56, 19], ['Emmanuel Egeoluoha', 'ST', 56, 19], ['Mamadou Fall', 'CB', 65, 21],
       ['Nedeljko Stojišić', 'GK', 54, 29], ['Sie Willy', 'CB', 55, 19], ['Aleksej Vukičević', 'DM', 52, 21],
       ['Marko Gobeljić', 'CB', 53, 34]
     ] },
    { n: 'FK Zeleznicar Pancevo', s: 'ZEL', c1: '#0057B8', c2: '#FFFFFF', str: 54, p: [
       ['Zoran Popović', 'GK', 55, 38], ['Christian Tchouante', 'RB', 48, 20], ['Billy Gee', 'CB', 56, 21],
       ['Nemanja Vidojević', 'CB', 54, 22], ['Mirko Milikić', 'LB', 54, 25], ['Marko Ćurić', 'DM', 54, 23],
       ['Davorin Tošić', 'CM', 52, 19], ['Janko Jevremović', 'AM', 55, 22], ['Dušan Jovanović', 'RW', 55, 20],
       ['Simão Pedro', 'ST', 52, 20], ['Nikola Jovanović', 'LW', 56, 23], ['Jovan Miladinović', 'GK', 50, 19],
       ['Abdul Yusif', 'CB', 51, 25], ['Abdoul Sawadogo', 'LB', 53, 20], ['Nemanja Zarić', 'CM', 50, 21],
       ['Aleksa Kuljanin', 'RW', 52, 22], ['David Ankeye', 'ST', 51, 24], ['Uroš Tegeltija', 'CB', 52, 20],
       ['Mirko Stevanović', 'GK', 47, 21], ['Nikola Đuričić', 'CB', 47, 27], ['Yassin Sbai', 'CB', 49, 23],
       ['Mamane Sabo', 'CM', 48, 22]
     ] },
    { n: 'FK Novi Pazar', s: 'NPA', c1: '#0057B8', c2: '#FFFFFF', str: 58, p: [
       ['Bogdan Matijašević', 'GK', 60, 22], ['Aleksandar Miljković', 'RB', 57, 36], ['Veljko Mirosavić', 'CB', 57, 21],
       ['Ahmed Hadžimujović', 'CB', 57, 19], ['Stefan Melentijević', 'LB', 56, 22], ['Papa Amady Gadio', 'DM', 60, 25],
       ['Skima Togbe', 'CM', 56, 20], ['Nikola Skrobonja', 'AM', 59, 21], ['Jonny Robert', 'RW', 58, 28],
       ['Vieiri Kotzebue', 'ST', 60, 24], ['Dominic Sadi', 'LW', 59, 23], ['Miloje Preković', 'GK', 56, 35],
       ['Bakir Bilalović', 'CB', 52, 18], ['Jovan Marinković', 'LB', 56, 30], ['Birsen Leković', 'CM', 55, 19],
       ['Ahmed Ljajić', 'RW', 56, 18], ['Matija Malekinušić', 'ST', 53, 27], ['Hamad Šaćirović', 'CB', 56, 18],
       ['Haris Alić', 'GK', 54, 18], ['Saladin Mecinović', 'GK', 53, 21], ['Bojan Adžić', 'DM', 50, 23],
       ['Tomislav Dadić', 'CB', 50, 29]
     ] }
  ]
};

window.LEAGUES.hungria = {
  id: 'hungria', name: 'NB I', country: 'Hungría', ucl: 2, rel: 2,
  pool: 'hu', squadSize: 17, teams: [
    { n: 'Debreceni VSC', s: 'DVSC', c1: '#E30613', c2: '#FFFFFF', str: 62, p: [
       ['Ádám Varga', 'GK', 62, 27], ['Adrián Guerrero', 'RB', 59, 28], ['Josua Mejías', 'CB', 59, 29],
       ['Bence Batik', 'CB', 61, 33], ['Gergő Tercza', 'LB', 61, 19], ['Víctor Camarasa', 'DM', 64, 32],
       ['Tamás Szűcs', 'CM', 62, 21], ['Balázs Dzsudzsák', 'AM', 62, 40], ['György Komáromi', 'RW', 61, 24],
       ['Donát Bárány', 'ST', 62, 26], ['Dominik Kocsis', 'LW', 62, 24], ['Bendek Erdélyi', 'GK', 59, 21],
       ['Ádám Lang', 'CB', 58, 33], ['Maximilian Hofmann', 'LB', 57, 33], ['Soma Szuhodovszki', 'CM', 57, 27],
       ['Gergő Regenyei', 'RW', 59, 19], ['Yacouba Silue', 'ST', 59, 24], ['Erik Kusnyír', 'CB', 56, 26],
       ['Donát Pálfi', 'GK', 53, 26], ['Márk Engedi', 'GK', 56, 20], ['Vyacheslav Kulbachuk', 'DM', 54, 22],
       ['Julien Dacosta', 'CB', 55, 30]
     ] },
    { n: 'Győri ETO FC', s: 'ETO', c1: '#00A94F', c2: '#FFFFFF', str: 57, p: [
       ['Balázs Megyeri', 'GK', 55, 36], ['Ștefan Vlădoiu', 'RB', 58, 28], ['Alexander Abrahamsson', 'CB', 55, 27],
       ['Senna Miangue', 'CB', 59, 29], ['Barnabás Bíró', 'LB', 58, 21], ['Paul Anton', 'DM', 56, 35],
       ['Rajmund Tóth', 'CM', 59, 22], ['László Vingler', 'AM', 55, 21], ['Nadhir Benbouali', 'RW', 58, 26],
       ['Nfansu Njie', 'ST', 57, 21], ['Szabolcs Schön', 'LW', 58, 26], ['Dániel Brecska', 'GK', 52, 20],
       ['Márk Csinger', 'CB', 55, 23], ['Daniel Štefulj', 'LB', 50, 27], ['Claudiu Bumba', 'CM', 53, 32],
       ['Oleksandr Pyshchur', 'RW', 52, 21], ['Imre Tollár', 'ST', 51, 20], ['Deian Boldor', 'CB', 52, 31],
       ['Samuel Petráš', 'GK', 51, 27], ['Norbert Urblík', 'CB', 52, 22], ['Miljan Krpić', 'CM', 50, 23],
       ['Milán Vitális', 'CM', 57, 24]
     ] },
    { n: 'Ferencvárosi TC', s: 'FTC', c1: '#00A94F', c2: '#FFFFFF', str: 68, p: [
       ['Dénes Dibusz', 'GK', 73, 34], ['C. Makreckis', 'RB', 67, 25], ['Stefan Gartenmann', 'CB', 66, 28],
       ['Ibrahim Cissé', 'CB', 65, 29], ["Callum O'Dowda", 'LB', 63, 30], ['Bence Ötvös', 'DM', 65, 27],
       ['Mohammad Abu Fani', 'CM', 70, 27], ['Kristoffer Zachariassen', 'AM', 66, 31], ['Jonathan Levi', 'RW', 67, 29],
       ['Barnabás Varga', 'ST', 70, 30], ['Cadu', 'LW', 69, 27], ['Dávid Gróf', 'GK', 63, 36],
       ['G. Szalai', 'CB', 64, 25], ['Barnabás Nagy', 'LB', 61, 24], ['Naby Keïta', 'CM', 68, 30],
       ['Lenny Joseph', 'RW', 64, 24], ['Aleksandar Pešić', 'ST', 65, 33], ['Gavriel Kanichowsky', 'CM', 66, 27]
     ] },
    { n: 'Vasas SC', s: 'VAS', c1: '#E30613', c2: '#0057B8', str: 62, p: [
       ['Gergely Nagy', 'GK', 63, 32], ['Attila Osváth', 'RB', 66, 31], ['Kire Ristevski', 'CB', 63, 36],
       ['Felix Burmeister', 'CB', 64, 36], ['Jan Šimůnek', 'LB', 61, 39], ['Donát Szivacski', 'DM', 63, 29],
       ['Mohamed Remili', 'CM', 62, 41], ['Zsombor Berecz', 'AM', 61, 31], ['Martin Ádám', 'RW', 61, 32],
       ['Nikolaos Vergos', 'ST', 63, 31], ['Yevhen Pavlov', 'LW', 61, 35], ['Dániel Póser', 'GK', 57, 36],
       ['Vit Beneš', 'CB', 57, 38], ['Szilveszter Hangya', 'LB', 61, 32], ['Máté Vida', 'CM', 57, 30],
       ['Benedek Murka', 'RW', 59, 29], ['Csanád Novák', 'ST', 59, 32], ['Csaba Preklet', 'CB', 59, 35],
       ['Ľuboš Kamenár', 'GK', 56, 39], ['Zsolt Korcsmár', 'CB', 58, 37], ['András Debreceni', 'DM', 54, 37],
       ['Tamás Vaskó', 'CB', 56, 42]
     ] },
    { n: 'Kisvárda FC', s: 'KIS', c1: '#FFE500', c2: '#0057B8', str: 58, p: [
       ['Marcell Kovács', 'GK', 58, 23], ['Stephen Adayilo', 'RB', 58, 26], ['Aleksandar Jovičić', 'CB', 56, 31],
       ['Bernardo Matić', 'CB', 58, 32], ['Martin Chlumecký', 'LB', 57, 29], ['Ridwan Popoola', 'DM', 58, 20],
       ['István Soltész', 'CM', 59, 26], ['Dominik Soltész', 'AM', 57, 26], ['Szilárd Szabó', 'RW', 57, 20],
       ['Gábor Molnár', 'ST', 56, 32], ['Jasmin Mešanović', 'LW', 58, 34], ['Alex Hrabina', 'GK', 52, 31],
       ['Bohdan Melnyk', 'CB', 51, 29], ['Kevin Körmendi', 'LB', 54, 25], ['Marko Matanović', 'CM', 54, 26],
       ['Bence Bíró', 'RW', 51, 28], ['Soma Novothny', 'ST', 55, 32], ['Sinan Medgyes', 'CB', 54, 33],
       ['Illya Popovych', 'GK', 53, 21], ['Branimir Cipetić', 'CB', 51, 31], ['Tibor Lippai', 'CB', 50, 29],
       ['Bálint Oláh', 'CM', 51, 32]
     ] },
    { n: 'MTK Budapest', s: 'MTK', c1: '#0057B8', c2: '#FFFFFF', str: 55, p: [
       ['Patrik Demjén', 'GK', 56, 28], ['Benedek Varju', 'RB', 55, 25], ['János Szépe', 'CB', 54, 30],
       ['Ilia Beriashvili', 'CB', 56, 28], ['Imre Széles', 'LB', 56, 31], ['Roland Lehoczky', 'DM', 55, 24],
       ['Mihály Kata', 'CM', 57, 24], ['Hunor Németh', 'AM', 53, 19], ['Ádin Molnár', 'RW', 53, 22],
       ['Marin Jurina', 'ST', 55, 33], ['Péter Törőcsik', 'LW', 52, 25], ['Tamás Fadgyas', 'GK', 49, 31],
       ['Zsombor Bévárdi', 'CB', 50, 27], ['Tamás Kádár', 'LB', 49, 36], ['István Bognár', 'CM', 52, 35],
       ['Róbert Polievka', 'RW', 51, 30], ['Krisztián Németh', 'ST', 53, 37], ['Patrik Kovács', 'CB', 52, 21],
       ['József Balázs', 'GK', 49, 23], ['Viktor Vitályos', 'CB', 50, 19], ['Artúr Horváth', 'CM', 49, 23],
       ['István Átrok', 'CM', 47, 21]
     ] },
    { n: 'Nyíregyháza Spartacus', s: 'NYI', c1: '#0057B8', c2: '#FFE500', str: 54, p: [
       ['Balázs Bese', 'GK', 53, 27], ['Ranko Jokić', 'RB', 51, 27], ['Áron Alaxai', 'CB', 56, 23],
       ['Nemanja Antonov', 'CB', 51, 31], ['Attila Temesvári', 'LB', 52, 26], ['Yuriy Toma', 'DM', 52, 30],
       ['Dantaye Gilbert', 'CM', 56, 22], ['Balázs Manner', 'AM', 54, 21], ['Dominik Nagy', 'RW', 55, 31],
       ['Benjámin Oláh', 'ST', 56, 21], ['Dorian Babunski', 'LW', 52, 30], ['Balázs Tóth', 'GK', 55, 22],
       ['Levente Katona', 'CB', 51, 25], ['Eneo Bitri', 'LB', 49, 30], ['Milán Májer', 'CM', 49, 27],
       ['Kevin Varga', 'RW', 50, 30], ['Márk Kovácsréti', 'ST', 49, 26], ['Stefanos Evangelou', 'CB', 49, 28],
       ['Roland Kersák', 'GK', 46, 29], ['Dániel Kovács', 'GK', 47, 32], ['Pavlos Korrea', 'DM', 47, 28],
       ['Barna Benczenleitner', 'CB', 48, 23]
     ] },
    { n: 'Paksi FC', s: 'PAK', c1: '#00A94F', c2: '#FFFFFF', str: 57, p: [
       ['Ádám Kovácsik', 'GK', 60, 35], ['Ákos Kinyik', 'RB', 58, 33], ['Attila Osváth', 'CB', 55, 31],
       ['Gábor Vas', 'CB', 59, 23], ['Erik Silye', 'LB', 55, 30], ['Bálint Vécsei', 'DM', 56, 33],
       ['Balázs Balogh', 'CM', 59, 36], ['Gergő Gyurkits', 'AM', 56, 24], ['Martin Ádám', 'RW', 57, 32],
       ['János Hahn', 'ST', 58, 31], ['Zsolt Haraszti', 'LW', 55, 35], ['Barnabás Simon', 'GK', 51, 22],
       ['Kristóf Hinora', 'CB', 51, 28], ['Márió Zeke', 'LB', 54, 26], ['Kevin Horváth', 'CM', 52, 21],
       ['Dániel Böde', 'RW', 55, 40], ['Ákos Szendrei', 'ST', 54, 23], ['Bence Lenzsér', 'CB', 52, 30],
       ['Márk Gyetván', 'GK', 50, 21], ['Milán Szekszárdi', 'CB', 49, 25], ['János Szabó', 'CB', 53, 37],
       ['Kristóf Papp', 'CM', 51, 33]
     ] },
    { n: 'Puskás Akadémia', s: 'PFC', c1: '#0057B8', c2: '#FFFFFF', str: 63, p: [
       ['Péter Szappanos', 'GK', 60, 36], ['Wojciech Golla', 'RB', 63, 34], ['Patrizio Stronati', 'CB', 64, 32],
       ['Georgy Arutyunyan', 'CB', 64, 22], ['Roland Szolnoki', 'LB', 65, 34], ['Michael Okeke', 'DM', 63, 21],
       ['Laros Duarte', 'CM', 66, 29], ['Moshe Semel', 'AM', 64, 23], ['Joel Fameyeh', 'RW', 65, 29],
       ['Dániel Lukács', 'ST', 60, 30], ['Lamin Colley', 'LW', 63, 33], ['Tamás Markek', 'GK', 59, 35],
       ['Quentin Maceiras', 'CB', 61, 31], ['Zsolt Nagy', 'LB', 66, 33], ['Urho Nissilä', 'CM', 57, 30],
       ['Palkó Dárdai', 'RW', 58, 27], ['Mikael Soisalo', 'ST', 60, 28], ['Brandon Ormonde-Ottewill', 'CB', 63, 31],
       ['Martin Dala', 'GK', 56, 22], ['Ákos Markgráf', 'CB', 60, 21], ['Barna Pál', 'CB', 59, 19],
       ['Roland Orján', 'DM', 58, 21]
     ] },
    { n: 'Újpest FC', s: 'UTE', c1: '#5B2C83', c2: '#FFFFFF', str: 64, p: [
       ['Riccardo Piscitelli', 'GK', 66, 33], ['André Duarte', 'RB', 66, 29], ['Davit Kobouri', 'CB', 65, 28],
       ['Tiago Gonçalves', 'CB', 64, 26], ['Krisztián Tamás', 'LB', 66, 31], ['Damian Rasak', 'DM', 63, 30],
       ['Arijan Ademi', 'CM', 66, 35], ['Mátyás Tajti', 'AM', 65, 28], ['Giorgi Beridze', 'RW', 62, 29],
       ['Fran Brodić', 'ST', 62, 29], ['Aljoša Matko', 'LW', 65, 26], ['Dávid Banai', 'GK', 60, 32],
       ['João Nunes', 'CB', 59, 31], ['Barnabás Bese', 'LB', 62, 32], ['Krisztofer Horváth', 'CM', 62, 24],
       ['George Ganea', 'RW', 59, 27], ['Milan Tučić', 'ST', 59, 30], ['Bence Gergényi', 'CB', 63, 28],
       ['Dávid Dombó', 'GK', 56, 33], ['Naruki Milán', 'DM', 57, 20], ['Attila Fiola', 'CB', 58, 36],
       ['Dominik Kaczvinszki', 'CB', 60, 20]
     ] },
    { n: 'Budapest Honvéd', s: 'HON', c1: '#E30613', c2: '#000000', str: 58, p: [
       ['Gellért Dúzs', 'GK', 57, 32], ['Pablo García', 'RB', 61, 25], ['Alex Szabó', 'CB', 58, 25],
       ['Dominik Csontos', 'CB', 56, 25], ['Szilveszter Hangya', 'LB', 58, 21], ['Ádám Somogyi', 'DM', 60, 32],
       ['Asier García', 'CM', 57, 28], ['Tamás Somogyi', 'AM', 60, 31], ['Ákos Zuigéber', 'RW', 59, 20],
       ['Patrik Pinte', 'ST', 56, 23], ['Adi Alić', 'LW', 58, 32], ['Osman Hadžikić', 'GK', 53, 21],
       ['Bonifác Csonka', 'CB', 57, 23], ['Ákos Baki', 'LB', 56, 31], ['Ádám Szamosi', 'CM', 52, 21],
       ['Zoltán Medgyes', 'RW', 55, 31], ['Kevin Kántor', 'ST', 56, 31], ['Tibor Szabó', 'CB', 56, 28],
       ['Branko Pauljević', 'CB', 53, 20], ['Deian Boldor', 'CB', 52, 26], ['Kevin Kállai', 'DM', 51, 27],
       ['Bence Varga', 'CB', 53, 29]
     ] },
    { n: 'Zalaegerszegi TE', s: 'ZTE', c1: '#0057B8', c2: '#FFFFFF', str: 57, p: [
       ['Bence Gundel-Takács', 'GK', 55, 28], ['Gergő Bodnár', 'RB', 57, 21], ['Zsombor Nagy', 'CB', 56, 28],
       ['Joseth Peraza', 'CB', 58, 22], ['Bence Várkonyi', 'LB', 60, 24], ['Gergely Mim', 'DM', 55, 27],
       ['András Csonka', 'CM', 57, 26], ['Norbert Szendrei', 'AM', 60, 26], ['Alen Skribek', 'RW', 58, 25],
       ['Daniel Lima', 'ST', 60, 22], ['Milán Klausz', 'LW', 56, 21], ['Žan Mauricio', 'GK', 53, 22],
       ['David López', 'CB', 68, 22], ['Vince Nyíri', 'LB', 53, 25], ['Fabricio Amato', 'CM', 52, 22],
       ['Maxsuell Alegria', 'RW', 56, 22], ['Ábel Krajcsovics', 'ST', 52, 22], ['José Calderón', 'CB', 52, 26],
       ['Martin Barbarics', 'GK', 51, 20], ['Vilmos Borsos', 'GK', 51, 26], ['Dániel Csóka', 'DM', 51, 26],
       ['Diego Borges', 'CB', 51, 22]
     ] }
  ]
};
