/* =========================================================================
   SELECCIONES FIFA — UEFA y CONCACAF que faltaban
   Cada selección lleva su código FIFA, confederación, colores y valoración.
   Donde hay jugadores reales de la última convocatoria conocida, van escritos;
   el resto de la lista la completa el generador (quedan marcados «genérico»)
   y se pueden editar uno a uno desde «Editar equipos y selecciones».
   ========================================================================= */
window.NATIONS = window.NATIONS || [];
(function () {
  'use strict';
  var N = [

    /* ==================== UEFA ==================== */
    {
      n: 'Suecia', s: 'SWE', conf: 'UEFA', str: 77, c1: '#006AA7', c2: '#FECC00', pool: 'scan', p: [
       ['Jacob Widell Zetterström', 'GK', 71, 28], ['Gustaf Lagerbielke', 'RB', 71, 26], ['Victor Lindelöf', 'CB', 75, 32],
       ['Isak Hien', 'CB', 78, 27], ['Gabriel Gudmundsson', 'LB', 77, 27], ['Lucas Bergvall', 'DM', 77, 20],
       ['Benjamin Nygren', 'CM', 73, 25], ['Ken Sema', 'AM', 70, 33], ['Alexander Isak', 'RW', 88, 27],
       ['Anthony Elanga', 'ST', 81, 24], ['Viktor Gyökeres', 'LW', 87, 28], ['Viktor Johansson', 'GK', 74, 28],
       ['Herman Johansson', 'CB', 70, 29], ['Daniel Svensson', 'LB', 77, 24], ['Jesper Karlström', 'CM', 75, 31],
       ['Gustaf Nilsson', 'RW', 75, 29], ['Taha Ali', 'ST', 68, 28], ['Hjalmar Ekdal', 'CB', 72, 28],
       ['Yasin Ayari', 'DM', 75, 23], ['Mattias Svanberg', 'AM', 76, 27], ['Eric Smith', 'ST', 75, 29],
       ['Carl Starfelt', 'RB', 78, 31], ['Elliot Stroud', 'LW', 71, 24], ['Kristoffer Nordfeldt', 'GK', 72, 37],
       ['Alexander Bernhardsson', 'CM', 72, 28], ['Besfort Zeneli', 'CM', 72, 24]
     ]
    },
    {
      n: 'Serbia', s: 'SRB', conf: 'UEFA', str: 75, c1: '#C6363C', c2: '#0C4076', pool: 'balk', p: [
       ['Filip Stanković', 'GK', 77, 24], ['Strahinja Eraković', 'RB', 76, 25], ['Kosta Nedeljković', 'CB', 75, 21],
       ['Ognjen Mimović', 'CB', 78, 22], ['Stefan Bukinac', 'LB', 74, 21], ['Veljko Birmančević', 'DM', 79, 28],
       ['Andrija Maksimović', 'CM', 74, 19], ['Aleksandar Stanković', 'AM', 69, 21], ['Nikola Štulić', 'RW', 75, 25],
       ['Mihailo Ivanović', 'ST', 72, 22], ['Petar Petrović', 'LW', 75, 21], ['Veljko Ilić', 'GK', 71, 23],
       ['Adem Avdić', 'CB', 70, 19], ['Vukašin Đurđević', 'LB', 74, 22], ['Njegoš Petrović', 'CM', 74, 27],
       ['Vasilije Kostov', 'RW', 74, 18], ['Dejan Zukić', 'ST', 75, 25], ['Nikola Simić', 'CB', 71, 19],
       ['Lazar Ranđelović', 'DM', 71, 29], ['Vladimir Lučić', 'AM', 72, 24], ['Petar Stanić', 'ST', 73, 25],
       ['Mirko Milikić', 'RB', 69, 25], ['Vanja Dragojević', 'LW', 70, 20], ['Luka Lijeskić', 'GK', 71, 21]
     ]
    },
    {
      n: 'Grecia', s: 'GRE', conf: 'UEFA', str: 71, c1: '#0D5EAF', c2: '#FFFFFF', pool: 'gr', p: [
       ['Odysseas Vlachodimos', 'GK', 69, 32], ['Georgios Vagiannidis', 'RB', 72, 25], ['Konstantinos Koulierakis', 'CB', 74, 23],
       ['Konstantinos Mavropanos', 'CB', 73, 29], ['Panagiotis Retsos', 'LB', 74, 28], ['Dimitrios Kourbelis', 'DM', 69, 33],
       ['Christos Mouzakitis', 'CM', 68, 20], ['Sotiris Kontouris', 'AM', 68, 21], ['Georgios Masouras', 'RW', 70, 32],
       ['Anastasios Douvikas', 'ST', 70, 27], ['Christos Tzolis', 'LW', 77, 24], ['Konstantinos Tzolakis', 'GK', 76, 24],
       ['Lazaros Rota', 'CB', 72, 29], ['Pantelis Chatzidiakos', 'LB', 70, 29], ['Christos Zafeiris', 'CM', 72, 23],
       ['Charalampos Kostoulas', 'RW', 69, 19], ['Vangelis Pavlidis', 'ST', 79, 28], ['Giorgos Kyriakopoulos', 'CB', 71, 30],
       ['Nectarios Triantis', 'DM', 65, 23], ['Thanasis Androutsos', 'AM', 62, 29], ['Andrews Tetteh', 'ST', 62, 25],
       ['Kostas Tsimikas', 'RB', 62, 30], ['Alexandros Kyziridis', 'LW', 67, 26], ['Christos Mandas', 'GK', 71, 25],
       ['Andreas Ntoi', 'CB', 69, 23], ['Dimitris Giannoulis', 'CB', 73, 31]
     ]
    },
    {
      n: 'Hungría', s: 'HUN', conf: 'UEFA', str: 69, c1: '#CE2939', c2: '#477050', pool: 'hu', p: [
       ['Balázs Tóth', 'GK', 62, 29], ['Willi Orbán', 'RB', 64, 34], ['Zsolt Nagy', 'CB', 69, 33],
       ['Milos Kerkez', 'CB', 78, 23], ['Callum Styles', 'LB', 66, 26], ['Dominik Szoboszlai', 'DM', 79, 26],
       ['András Schäfer', 'CM', 70, 27], ['Alex Tóth', 'AM', 65, 21], ['Roland Sallai', 'RW', 74, 29],
       ['Barnabás Varga', 'ST', 71, 32], ['Dániel Lukács', 'LW', 63, 30], ['Péter Szappanos', 'GK', 63, 36],
       ['Attila Osváth', 'CB', 64, 31], ['Kornél Szűcs', 'LB', 63, 25], ['Milán Vitális', 'CM', 65, 24],
       ['Damir Redzic', 'RW', 62, 23], ['Zsombor Gruber', 'ST', 64, 22], ['Márk Csinger', 'CB', 61, 23],
       ['Péter Baráth', 'DM', 60, 24], ['Tamás Szűcs', 'AM', 62, 21], ['Bendegúz Kovács', 'ST', 62, 19],
       ['Ákos Markgráf', 'RB', 62, 21], ['Rajmund Tóth', 'LW', 62, 22], ['Ármin Pécsi', 'GK', 60, 21],
       ['Áron Yaakobishvili', 'GK', 61, 20], ['Norbert Szendrei', 'CM', 59, 26]
     ]
    },
    {
      n: 'Rumanía', s: 'ROU', conf: 'UEFA', str: 68, c1: '#002B7F', c2: '#FCD116', pool: 'ro', p: [
       ['Ștefan Târnovanu', 'GK', 70, 26], ['Andrei Burcă', 'RB', 66, 33], ['Deian Sorescu', 'CB', 70, 29],
       ['Adrian Rus', 'CB', 66, 30], ['Mihai Popescu', 'LB', 68, 33], ['Nicolae Stanciu', 'DM', 75, 33],
       ['Darius Olaru', 'CM', 67, 28], ['Tudor Băluță', 'AM', 64, 27], ['Denis Drăguș', 'RW', 66, 27],
       ['Florinel Coman', 'ST', 67, 28], ['Olimpiu Moruțan', 'LW', 63, 27], ['Otto Hindrich', 'GK', 67, 24],
       ['Lisav Eissat', 'CB', 62, 21], ['Andrei Coubiș', 'LB', 64, 23], ['Vladimir Screciu', 'CM', 66, 26],
       ['Alexandru Dobre', 'RW', 63, 28], ['Louis Munteanu', 'ST', 72, 24], ['Andrei Borza', 'CB', 68, 21],
       ['Vlad Dragomir', 'DM', 64, 27], ['David Matei', 'AM', 60, 20], ['Ștefan Baiaram', 'ST', 68, 24],
       ['Matei Ilie', 'RB', 67, 24], ['Tony Strata', 'LW', 62, 22], ['Marian Aioani', 'GK', 61, 27],
       ['Cătălin Cîrjan', 'CM', 68, 24]
     ]
    },
    {
      n: 'Eslovenia', s: 'SVN', conf: 'UEFA', str: 69, c1: '#FFFFFF', c2: '#005DA4', pool: 'balk', p: [
       ['Jan Oblak', 'GK', 87, 33], ['Žan Karničnik', 'RB', 69, 32], ['Jošt Urbančič', 'CB', 69, 25],
       ['Marcel Ratnik', 'CB', 58, 23], ['Srđan Kuzmić', 'LB', 64, 22], ['Benjamin Verbič', 'DM', 69, 33],
       ['Sandi Lovrić', 'CM', 74, 28], ['Svit Sešlar', 'AM', 62, 24], ['Andraž Šporar', 'RW', 69, 32],
       ['Tjaš Begić', 'ST', 64, 23], ['Danijel Šturm', 'LW', 70, 27], ['Matevž Vidovšek', 'GK', 65, 27],
       ['Jaka Bijol', 'CB', 76, 27], ['Erik Janža', 'LB', 68, 33], ['Tamar Svetlin', 'CM', 66, 25],
       ['Žan Vipotnik', 'RW', 67, 24], ['Aljoša Matko', 'ST', 63, 26], ['David Zec', 'CB', 70, 26],
       ['Adam Gnezda Čerin', 'DM', 73, 27], ['Tian Nai Koren', 'AM', 64, 17], ['Ester Sokler', 'ST', 64, 27],
       ['Vanja Drkušić', 'RB', 63, 27], ['David Brekalo', 'LW', 69, 28], ['Žan-Luk Leban', 'GK', 61, 24],
       ['Adrian Zeljković', 'CM', 64, 24]
     ]
    },
    {
      n: 'Georgia', s: 'GEO', conf: 'UEFA', str: 68, c1: '#FFFFFF', c2: '#FF0000', pool: 'turkic', p: [
       ['Giorgi Mamardashvili', 'GK', 80, 26], ['Iva Gelashvili', 'RB', 60, 25], ['Luka Lochoshvili', 'CB', 65, 28],
       ['Saba Goglichidze', 'CB', 65, 22], ['Ilia Beriashvili', 'LB', 60, 28], ['Giorgi Kochorashvili', 'DM', 70, 27],
       ['Saba Lobzhanidze', 'CM', 59, 32], ['Otar Kiteishvili', 'AM', 71, 30], ['Khvicha Kvaratskhelia', 'RW', 83, 25],
       ['Budu Zivzivadze', 'ST', 68, 32], ['Giorgi Kvilitaia', 'LW', 63, 33], ['Davit Kereselidze', 'GK', 59, 27],
       ['Irakli Azarovi', 'CB', 66, 24], ['Saba Kharebashvili', 'LB', 58, 18], ['Anzor Mekvabishvili', 'CM', 64, 25],
       ['Giorgi Kvernadze', 'RW', 61, 23], ['Nika Gagnidze', 'ST', 59, 25], ['Lasha Dvali', 'CB', 55, 31],
       ['Gizo Mamageishvili', 'DM', 59, 23], ['Irakli Yegoian', 'AM', 59, 22], ['Giorgi Chakvetadze', 'ST', 70, 27],
       ['Luka Gadrani', 'RB', 56, 29], ['Luka Gugeshashvili', 'GK', 66, 27]
     ]
    },
    {
      n: 'Albania', s: 'ALB', conf: 'UEFA', str: 69, c1: '#E41E20', c2: '#000000', pool: 'balk', p: [
       ['Alen Sherri', 'GK', 68, 29], ['Andi Hadroj', 'RB', 62, 27], ['Mario Mitaj', 'CB', 68, 23],
       ['Elseid Hysaj', 'CB', 72, 32], ['Arlind Ajeti', 'LB', 62, 33], ['Adrion Pajaziti', 'DM', 65, 24],
       ['Kristjan Asllani', 'CM', 74, 24], ['Nedim Bajrami', 'AM', 73, 27], ['Armando Broja', 'RW', 72, 25],
       ['Myrto Uzuni', 'ST', 75, 31], ['Taulant Seferi', 'LW', 62, 30], ['Pano Qirko', 'GK', 56, 27],
       ['Berat Gjimshiti', 'CB', 58, 33], ['Naser Aliji', 'LB', 59, 33], ['Qazim Laçi', 'CM', 74, 30],
       ['Mirlind Daku', 'RW', 57, 28], ['Cristian Shpendi', 'ST', 70, 23], ['Klisman Cake', 'CB', 61, 27],
       ['Juljan Shehu', 'DM', 70, 28], ['Ylber Ramadani', 'AM', 70, 30], ['Bujar Pllana', 'ST', 64, 25],
       ['Stavro Pilo', 'RB', 56, 26], ['Arbër Hoxha', 'LW', 68, 28], ['Simon Simoni', 'GK', 62, 22],
       ['Luis Hasa', 'CM', 65, 22], ['Anis Mehmeti', 'CM', 72, 25]
     ]
    },
    {
      n: 'Macedonia del Norte', s: 'MKD', conf: 'UEFA', str: 68, c1: '#D20000', c2: '#FFE600', pool: 'balk', p: [
       ['Damjan Shishkovski', 'GK', 63, 31], ['Stefan Despotovski', 'RB', 67, 23], ['Sebastián Herrera', 'CB', 66, 31],
       ['Nikola Serafimov', 'CB', 63, 27], ['Gjoko Zajkov', 'LB', 65, 31], ['Eljif Elmas', 'DM', 79, 27],
       ['Agon Elezi', 'CM', 68, 25], ['Boban Nikolov', 'AM', 67, 32], ['Bojan Miovski', 'RW', 74, 27],
       ['Darko Churlinov', 'ST', 70, 26], ['Elmin Rastoder', 'LW', 61, 25], ['Davor Taleski', 'GK', 61, 31],
       ['Visar Musliu', 'CB', 70, 32], ['Ezgjan Alioski', 'LB', 70, 34], ['Sefer Emini', 'CM', 68, 26],
       ['Azer Omeragikj', 'RW', 64, 24], ['Milan Ristovski', 'ST', 63, 28], ['Imran Fetai', 'CB', 61, 24],
       ['Jani Atanasov', 'DM', 63, 27], ['Darko Angjeleski', 'AM', 61, 27], ['Darko Dodev', 'ST', 63, 28],
       ['Darko Velkovski', 'RB', 61, 31], ['Georgije Jankulov', 'LW', 59, 25], ['Stole Dimitrievski', 'GK', 81, 33],
       ['Din Alomerovikj', 'CB', 61, 29], ['Jovan Manev', 'CB', 59, 25]
     ]
    },
    {
      n: 'Israel', s: 'ISR', conf: 'UEFA', str: 67, c1: '#FFFFFF', c2: '#0038B8', pool: 'he', p: [
       ['Omri Glazer', 'GK', 62, 30], ['Eli Dasa', 'RB', 62, 34], ['Roy Revivo', 'CB', 61, 23],
       ['Idan Nachmias', 'CB', 63, 29], ['Stav Lemkin', 'LB', 69, 23], ['Oscar Gloukh', 'DM', 77, 22],
       ['Neta Lavi', 'CM', 62, 30], ['Gabi Kanichowsky', 'AM', 65, 29], ['Manor Solomon', 'RW', 78, 27],
       ['Dor Turgeman', 'ST', 68, 23], ['Idan Gorno', 'LW', 65, 22], ['Daniel Peretz', 'GK', 74, 26],
       ['Guy Mizrahi', 'CB', 62, 25], ['Or Blorian', 'LB', 61, 26], ['Eliel Peretz', 'CM', 62, 30],
       ['Sayed Abu Farchi', 'RW', 59, 20], ['Ido Shahar', 'ST', 57, 25], ['Nikita Stoinov', 'CB', 64, 21],
       ['Stav Turiel', 'DM', 58, 25], ['Yarin Levi', 'AM', 61, 21], ['Tai Abed', 'ST', 60, 22],
       ['Itay Rotman', 'RB', 60, 24], ['Assaf Tzur', 'GK', 57, 28]
     ]
    },
    {
      n: 'Montenegro', s: 'MNE', conf: 'UEFA', str: 68, c1: '#C40308', c2: '#D4AF37', pool: 'balk', p: [
       ['Danijel Petković', 'GK', 63, 33], ['Stefan Savić', 'RB', 79, 35], ['Marko Vešović', 'CB', 62, 35],
       ['Igor Vujačić', 'CB', 63, 32], ['Risto Radunović', 'LB', 71, 34], ['Marko Janković', 'DM', 69, 31],
       ['Sead Hakšabanović', 'CM', 71, 27], ['Stefan Lončar', 'AM', 61, 30], ['Stevan Jovetić', 'RW', 60, 37],
       ['Milutin Osmajić', 'ST', 71, 27], ['Nikola Krstović', 'LW', 76, 26], ['Igor Nikić', 'GK', 69, 26],
       ['Slobodan Rubežić', 'CB', 69, 26], ['Milan Roganović', 'LB', 59, 21], ['Miloš Brnović', 'CM', 57, 26],
       ['Viktor Đukanović', 'RW', 57, 22], ['Aleksa Latković', 'ST', 58, 26], ['Ognjen Gašević', 'CB', 56, 24],
       ['Milan Vukotić', 'DM', 58, 24], ['Andrija Bulatović', 'AM', 65, 20], ['Dušan Vuković', 'ST', 57, 24],
       ['Stefan Milić', 'RB', 59, 26], ['Andrej Đurić', 'LW', 67, 23], ['Balša Popović', 'GK', 55, 26],
       ['Bodin Tomašević', 'CB', 55, 20], ['Vasilije Adžić', 'CM', 66, 20]
     ]
    },
    {
      n: 'Bulgaria', s: 'BUL', conf: 'UEFA', str: 66, c1: '#FFFFFF', c2: '#00966E', pool: 'balk', p: [
       ['Daniel Naumov', 'GK', 62, 28], ['Rosen Bozhinov', 'RB', 67, 21], ['Andrea Hristov', 'CB', 67, 27],
       ['Patrik-Gabriel Galchev', 'CB', 64, 25], ['Kristian Dimitrov', 'LB', 64, 29], ['Borislav Tsonev', 'DM', 65, 31],
       ['Andrian Kraev', 'CM', 66, 27], ['Efe Ali', 'AM', 66, 23], ['Vladimir Nikolov', 'RW', 72, 25],
       ['Zdravko Dimitrov', 'ST', 66, 28], ['Georgi Rusev', 'LW', 66, 28], ['Dimitar Sheytanov', 'GK', 58, 27],
       ['Hristiyan Petrov', 'CB', 72, 24], ['Teodor Ivanov', 'LB', 62, 22], ['Nikola Iliev', 'CM', 61, 22],
       ['Marin Petkov', 'RW', 62, 23], ['Martin Minchev', 'ST', 60, 25], ['Ivan Turitsov', 'CB', 60, 27],
       ['Emil Tsenov', 'DM', 62, 24], ['Petko Panayotov', 'AM', 59, 21], ['Tonislav Yordanov', 'ST', 59, 28],
       ['Martin Georgiev', 'RB', 59, 21], ['Lukas Petkov', 'LW', 76, 26], ['Martin Velichkov', 'GK', 59, 27],
       ['Dimitar Velkovski', 'CB', 58, 31], ['Berk Beyhan', 'CM', 58, 22]
     ]
    },
    {
      n: 'Rusia', s: 'RUS', conf: 'UEFA', str: 71, c1: '#FFFFFF', c2: '#D52B1E', pool: 'ru', p: [
       ['Stanislav Agkatsev', 'GK', 73, 24], ['Igor Diveyev', 'RB', 68, 27], ['Aleksandr Silyanov', 'CB', 71, 24],
       ['Danil Krugovoy', 'CB', 70, 28], ['Ilya Vakhaniya', 'LB', 70, 25], ['Aleksei Miranchuk', 'DM', 71, 31],
       ['Anton Miranchuk', 'CM', 72, 31], ['Dmitri Barinov', 'AM', 70, 30], ['Ivan Sergeyev', 'RW', 72, 31],
       ['Georgi Melkadze', 'ST', 70, 29], ['Maksim Glushenkov', 'LW', 69, 27], ['Aleksandr Maksimenko', 'GK', 67, 28],
       ['Yevgeny Morozov', 'CB', 68, 25], ['Mingiyan Beveyev', 'LB', 68, 31], ['Ivan Oblyakov', 'CM', 69, 28],
       ['Matvey Kislyak', 'RW', 65, 21], ['Nail Umyarov', 'ST', 64, 26], ['Viktor Melyokhin', 'CB', 65, 23],
       ['Lechi Sadulayev', 'DM', 66, 26], ['Aleksey Batrakov', 'AM', 68, 21], ['Nikita Krivtsov', 'ST', 67, 24],
       ['Kirill Danilov', 'RB', 68, 19], ['Artyom Karpukas', 'LW', 67, 24], ['Anton Mitryushkin', 'GK', 66, 30],
       ['Denis Adamov', 'GK', 62, 28], ['Maksim Petrov', 'CM', 65, 25], ['Amir Ibragimov', 'CM', 65, 18]
     ]
    },
    {
      n: 'Islandia', s: 'ISL', conf: 'UEFA', str: 67, c1: '#02529C', c2: '#DC1E35', pool: 'isl', p: [
       ['Elías Ólafsson', 'GK', 67, 26], ['Logi Tómasson', 'RB', 64, 26], ['Daníel Leó Grétarsson', 'CB', 62, 31],
       ['Victor Pálsson', 'CB', 64, 35], ['Hjörtur Hermannsson', 'LB', 63, 31], ['Gísli Þórðarson', 'DM', 61, 22],
       ['Hákon Haraldsson', 'CM', 75, 23], ['Ísak Jóhannesson', 'AM', 70, 23], ['Orri Óskarsson', 'RW', 71, 22],
       ['Albert Guðmundsson', 'ST', 76, 29], ['Daníel Guðjohnsen', 'LW', 60, 20], ['Hákon Valdimarsson', 'GK', 65, 25],
       ['Dagur Dan Þórhallsson', 'CB', 56, 26], ['Aron Gunnarsson', 'LB', 55, 37], ['Gylfi Sigurðsson', 'CM', 57, 37],
       ['Jón Dagur Þorsteinsson', 'RW', 53, 28], ['Kristian Hlynsson', 'ST', 65, 22], ['Mikael Egill Ellertsson', 'CB', 66, 24],
       ['Andri Baldursson', 'DM', 59, 24], ['Kristall Máni Ingason', 'AM', 61, 24], ['Arnór Sigurðsson', 'ST', 66, 27],
       ['Hörður Björgvin Magnússon', 'RB', 54, 33], ['Anton Ari Einarsson', 'GK', 52, 32]
     ]
    },
    {
      n: 'Finlandia', s: 'FIN', conf: 'UEFA', str: 67, c1: '#FFFFFF', c2: '#003580', pool: 'fi', p: [
       ['Lukas Hradecky', 'GK', 79, 37], ['Tony Miettinen', 'RB', 60, 24], ['Miro Tenho', 'CB', 64, 31],
       ['Rony Jansson', 'CB', 63, 22], ['Ryan Mahuta', 'LB', 63, 24], ['Matti Peltola', 'DM', 64, 24],
       ['Niklas Pyyhtiä', 'CM', 67, 23], ['Leo Walta', 'AM', 67, 23], ['Oliver Antman', 'RW', 73, 25],
       ['Naatan Skyttä', 'ST', 69, 24], ['Topi Keskinen', 'LW', 65, 23], ['Jesse Joronen', 'GK', 67, 33],
       ['Samuli Miettinen', 'CB', 57, 22], ['Nikolai Alho', 'LB', 65, 33], ['Robin Lod', 'CM', 71, 33],
       ['Benjamin Källman', 'RW', 70, 28], ['Joel Pohjanpalo', 'ST', 58, 32], ['Ville Koski', 'CB', 60, 24],
       ['Santeri Väänänen', 'DM', 65, 24], ['Adam Markhiyev', 'AM', 58, 24], ['Daniel Håkans', 'ST', 64, 26],
       ['Anssi Suhonen', 'RB', 64, 25], ['Oiva Jukkola', 'LW', 59, 24], ['Viljami Sinisalo', 'GK', 56, 25],
       ['Doni Arifi', 'CM', 56, 24], ['Juho Kilo', 'CM', 54, 24], ['Casper Terho', 'ST', 64, 23]
     ]
    },
    {
      n: 'Irlanda del Norte', s: 'NIR', conf: 'UEFA', str: 65, c1: '#00843D', c2: '#FFFFFF', pool: 'en', p: [
       ['Pierce Charles', 'GK', 63, 21], ['Trai Hume', 'RB', 72, 24], ['Ciaron Brown', 'CB', 68, 28],
       ['Brodie Spencer', 'CB', 66, 22], ['Ruairi McConville', 'LB', 60, 21], ['Shea Charles', 'DM', 70, 23],
       ['Ali McCann', 'CM', 62, 27], ['Isaac Price', 'AM', 67, 23], ['Josh Magennis', 'RW', 63, 36],
       ['Paul Smyth', 'ST', 65, 29], ['Jamie Reid', 'LW', 65, 32], ['Luke Southwood', 'GK', 63, 29],
       ['Tom Atcheson', 'CB', 61, 20], ['Patrick Kelly', 'LB', 59, 22], ['Ethan Galbraith', 'CM', 66, 25],
       ['Callum Marshall', 'RW', 64, 22], ["Ceadach O'Neill", 'ST', 61, 18], ['Jamie McDonnell', 'CB', 64, 22],
       ['Justin Devenny', 'DM', 69, 23], ['Jamie Donley', 'AM', 65, 21], ['Kieran Morrison', 'ST', 62, 20],
       ['Braiden Graham', 'LW', 58, 19], ['Josh Clarke', 'GK', 55, 22]
     ]
    },
    {
      n: 'Armenia', s: 'ARM', conf: 'UEFA', str: 68, c1: '#D90012', c2: '#0033A0', pool: 'turkic', p: [
       ['Ognjen Čančarević', 'GK', 64, 37], ['Kamo Hovhannisyan', 'RB', 62, 34], ['Georgy Arutyunyan', 'CB', 66, 22],
       ['Nair Tiknizyan', 'CB', 67, 27], ['Edgar Grigoryan', 'LB', 66, 28], ['Eduard Spertsyan', 'DM', 64, 26],
       ['Edgar Sevikyan', 'CM', 81, 25], ['Gor Manvelyan', 'AM', 67, 24], ['Artur Serobyan', 'RW', 65, 23],
       ['Grant-Leon Ranos', 'ST', 77, 23], ['Zhirayr Shaghoyan', 'LW', 64, 25], ['Henri Avagyan', 'GK', 62, 30],
       ['Erik Piloyan', 'CB', 63, 25], ['David Davidyan', 'LB', 60, 29], ['Tigran Avanesyan', 'CM', 61, 24],
       ['Artur Miranyan', 'RW', 59, 31], ['Narek Grigoryan', 'ST', 82, 25], ['Artyom Bandikyan', 'CB', 62, 21],
       ['Karlen Hovhannisyan', 'DM', 60, 21], ['Aram Khamoyan', 'AM', 61, 26], ['Narek Hovhannisyan', 'ST', 63, 20],
       ['Junior Bueno', 'RB', 59, 30], ['Davit Hakobyan', 'LW', 59, 21], ['Aleksandr Mishiev', 'GK', 59, 22],
       ['Arman Nersesyan', 'GK', 59, 25], ['Arman Ghazaryan', 'CB', 59, 25], ['Argishti Petrosyan', 'CB', 59, 34]
     ]
    },
    {
      n: 'Luxemburgo', s: 'LUX', conf: 'UEFA', str: 64, c1: '#00A1DE', c2: '#EF3340', pool: 'fr', p: [
       ['Tiago Pereira Cardoso', 'GK', 69, 20], ['Seid Korać', 'RB', 65, 25], ['Enes Mahmutović', 'CB', 66, 29],
       ['Florian Bohnert', 'CB', 68, 29], ['Vahid Selimović', 'LB', 66, 29], ['Tomás Moreira', 'DM', 59, 21],
       ['Christopher Martins', 'CM', 60, 29], ['Miguel Gonçalves', 'AM', 59, 22], ['Aiman Dardari', 'RW', 64, 21],
       ['Alessio Curci', 'ST', 60, 24], ['Danel Sinani', 'LW', 71, 29], ['Lucas Fox', 'GK', 57, 26],
       ['Dirk Carlson', 'CB', 59, 28], ['Eric Veiga', 'LB', 55, 29], ['Mathias Olesen', 'CM', 68, 25],
       ['Edvin Muratović', 'RW', 55, 29], ['Vincent Thill', 'ST', 57, 26], ['Mica Pinto', 'CB', 58, 33],
       ['Sébastien Thill', 'DM', 57, 33], ['Enzo Duarte', 'AM', 55, 17], ['Hamza Kadamani', 'ST', 55, 17],
       ['Laurent Jans', 'RB', 54, 34], ['Leon Elshan', 'LW', 58, 22], ['Tim Kips', 'GK', 53, 26],
       ['Anthony Moris', 'GK', 77, 36], ['Helmer Tavares', 'CB', 55, 19]
     ]
    },
    {
      n: 'Kazajistán', s: 'KAZ', conf: 'UEFA', str: 63, c1: '#00AFCA', c2: '#FEC50C', pool: 'turkic', p: [
       ['Bekkhan Shayzada', 'GK', 64, 28], ['Serhiy Malyi', 'RB', 61, 36], ['Nuraly Alip', 'CB', 65, 27],
       ['Alibek Kasym', 'CB', 64, 28], ['Yan Vorogovsky', 'LB', 62, 30], ['Islambek Kuat', 'DM', 65, 33],
       ['Dinmukhamed Karaman', 'CM', 61, 26], ['Ramazan Orazov', 'AM', 62, 28], ['Galymzhan Kenzhebek', 'RW', 61, 23],
       ['Maksim Samorodov', 'ST', 61, 24], ['Dastan Satpayev', 'LW', 64, 18], ['Temirlan Anarbekov', 'GK', 58, 23],
       ['Arsen Ashirbek', 'CB', 57, 23], ['Sagi Sovet', 'LB', 57, 26], ['Yerkin Tapalov', 'CM', 57, 33],
       ['Roman Murtazayev', 'RW', 57, 33], ['Maksat Abrayev', 'ST', 60, 18], ['Aleksandr Mrynskiy', 'CB', 60, 22],
       ['Islam Chesnokov', 'DM', 60, 27], ['Adilet Sadybekov', 'AM', 61, 24], ['Abinur Nurymbet', 'ST', 58, 21],
       ['Sanzhar Satanov', 'RB', 58, 25], ['Magzhan Toktybay', 'LW', 59, 22], ['Aleksandr Zarutskiy', 'GK', 57, 33],
       ['Zhasulan Amir', 'CM', 58, 20]
     ]
    },
    {
      n: 'Azerbaiyán', s: 'AZE', conf: 'UEFA', str: 63, c1: '#00B5E2', c2: '#EF3340', pool: 'turkic', p: [
       ['Shakhruddin Magomedaliyev', 'GK', 63, 32], ['Badavi Guseynov', 'RB', 63, 35], ['Anton Kryvotsyuk', 'CB', 64, 28],
       ['Elvin Cafarguliyev', 'CB', 59, 26], ['Rahil Mammadov', 'LB', 64, 31], ['Emin Mahmudov', 'DM', 60, 34],
       ['Toral Bayramov', 'CM', 75, 25], ['Aleksey Isayev', 'AM', 63, 31], ['Renat Dadaşov', 'RW', 62, 27],
       ['Musa Qurbanlı', 'ST', 61, 24], ['Abdulla Rzayev', 'LW', 60, 24], ['Səlahət Ağayev', 'GK', 56, 35],
       ['Qismət Alıyev', 'CB', 56, 30], ['Elvin Badalov', 'LB', 57, 31], ['Rustam Akhmedzade', 'CM', 59, 26],
       ['Khayal Aliyev', 'RW', 58, 22], ['Abdulakh Khaybulayev', 'ST', 57, 25], ['Cəlal Hüseynov', 'CB', 56, 23],
       ['Ceyhun Nuriyev', 'DM', 56, 25], ['Ragim Sadykhov', 'AM', 55, 30], ['Emil Safarov', 'ST', 58, 24],
       ['Rahman Dashdamirov', 'RB', 58, 27], ['Mustafa Ahmadzada', 'LW', 58, 23], ['Rza Jafarov', 'GK', 54, 23],
       ['Aydın Bayramov', 'GK', 54, 30], ['Vusal Isgandarli', 'CM', 56, 31], ['Aykhan Guseynov', 'CM', 54, 27]
     ]
    },
    {
      n: 'Bielorrusia', s: 'BLR', conf: 'UEFA', str: 62, c1: '#CE1720', c2: '#007C30', pool: 'ru', p: [
       ['Pavel Pavlyuchenko', 'GK', 63, 28], ['Kiryl Pyachenin', 'RB', 59, 29], ['Zakhar Volkov', 'CB', 63, 29],
       ['Pavel Zabelin', 'CB', 61, 31], ['Gleb Shevchenko', 'LB', 62, 27], ['Max Ebong', 'DM', 64, 27],
       ['Yevgeny Yablonsky', 'CM', 59, 31], ['Valery Gromyko', 'AM', 63, 29], ['Vladislav Morozov', 'RW', 60, 26],
       ['German Barkovsky', 'ST', 62, 24], ['Artyom Shumansky', 'LW', 60, 22], ['Fyodor Lapoukhov', 'GK', 60, 23],
       ['Roman Begunov', 'CB', 58, 33], ['Yegor Parkhomenko', 'LB', 57, 23], ['Yury Kavalyow', 'CM', 56, 33],
       ['Karen Vardanyan', 'RW', 56, 23], ['Aleksandr Selyava', 'ST', 57, 33], ['Vladislav Kalinin', 'CB', 57, 24],
       ['Artem Kontsevoy', 'DM', 56, 27], ['Ruslan Lisakovich', 'AM', 57, 24], ['Maksim Kireev', 'ST', 57, 22],
       ['Ivan Tikhomirov', 'RB', 56, 23], ['Daniil Galyata', 'LW', 57, 19], ['Mikhail Kozakevich', 'GK', 57, 24]
     ]
    },
    {
      n: 'Chipre', s: 'CYP', conf: 'UEFA', str: 64, c1: '#FFFFFF', c2: '#D57800', pool: 'gr', p: [
       ['Neofytos Michail', 'GK', 60, 33], ['Konstantinos Laifis', 'RB', 75, 33], ['Stelios Andreou', 'CB', 75, 24],
       ['Konstantinos Sotiriou', 'CB', 71, 30], ['Evagoras Antoniou', 'LB', 68, 24], ['Panayiotis Andreou', 'DM', 59, 20],
       ['Charalampos Charalampous', 'CM', 58, 24], ['Grigoris Kastanos', 'AM', 75, 28], ['Stavros Georgiou', 'RW', 57, 22],
       ['Andronikos Kakoullis', 'ST', 61, 25], ['Loizos Loizou', 'LW', 59, 23], ['Charalampos Kyriakidis', 'GK', 55, 28],
       ['Anderson Correia', 'CB', 57, 35], ['Giorgos Malekkidis', 'LB', 57, 29], ['Ioannis Kosti', 'CM', 54, 26],
       ['Angelos Neophytou', 'RW', 55, 21], ['Ioannis Pittas', 'ST', 55, 30], ['Andreas Shikkis', 'CB', 58, 24],
       ['Charalampos Kyriakou', 'DM', 55, 31], ['Giannis Satsias', 'AM', 69, 24], ['Marinos Tzionis', 'ST', 67, 25],
       ['Christos Sielis', 'RB', 53, 26], ['Konstantinos Sergiou', 'LW', 57, 26], ['Fabiano', 'GK', 51, 38],
       ['Andreas Paraskevas', 'GK', 51, 28], ['Giorgos Naoum', 'CM', 55, 25], ['Andreas Christou', 'CM', 53, 21]
     ]
    },
    {
      n: 'Letonia', s: 'LVA', conf: 'UEFA', str: 62, c1: '#9E3039', c2: '#FFFFFF', pool: 'bal', p: [
       ['Krišjānis Zviedris', 'GK', 61, 29], ['Daniels Balodis', 'RB', 62, 28], ['Vitālijs Jagodinskis', 'CB', 62, 34],
       ['Roberts Veips', 'CB', 58, 26], ['Antonijs Černomordijs', 'LB', 59, 30], ['Iļja Korotkovs', 'DM', 58, 26],
       ['Eduards Dašķevičs', 'CM', 61, 24], ['Kristers Penkevics', 'AM', 61, 23], ['Vladislavs Gutkovskis', 'RW', 76, 31],
       ['Dario Šits', 'ST', 62, 22], ['Marko Regža', 'LW', 61, 27], ['Frenks Dāvids Orols', 'GK', 57, 26],
       ['Roberts Savaļnieks', 'CB', 57, 33], ['Raivis Andris Jurkovskis', 'LB', 57, 30], ['Mārtiņš Ķigurs', 'CM', 57, 29],
       ['Deniss Meļņiks', 'RW', 57, 24], ['Lukass Vapne', 'ST', 57, 23], ['Andrejs Cigaņiks', 'CB', 79, 29],
       ['Dmitrijs Zelenkovs', 'DM', 57, 26], ['Eduards Emsis', 'AM', 57, 30], ['Aleksejs Saveļjevs', 'ST', 58, 27],
       ['Maksims Toņiševs', 'RB', 57, 26], ['Kristaps Grabovskis', 'LW', 57, 21], ['Rihards Matrevics', 'GK', 57, 27],
       ['Gļebs Žaleiko', 'CM', 57, 22]
     ]
    },
    {
      n: 'Lituania', s: 'LTU', conf: 'UEFA', str: 61, c1: '#FDB913', c2: '#006A44', pool: 'bal', p: [
       ['Arnas Voitinovičius', 'GK', 59, 20], ['Artemijus Tutyškinas', 'RB', 61, 23], ['Edgaras Utkus', 'CB', 81, 26],
       ['Edvinas Kloniūnas', 'CB', 59, 28], ['Žygimantas Baltrūnas', 'LB', 60, 24], ['Modestas Vorobjovas', 'DM', 60, 31],
       ['Eligijus Jankauskas', 'CM', 59, 28], ['Tomas Kalinauskas', 'AM', 58, 26], ['Meinardas Mikulėnas', 'RW', 58, 24],
       ['Armandas Kučys', 'ST', 62, 23], ['Ignas Venckus', 'LW', 59, 25], ['Tomas Švedkauskas', 'GK', 57, 32],
       ['Matijus Remeikis', 'CB', 58, 23], ['Justas Lasickas', 'LB', 56, 29], ['Arvydas Novikovas', 'CM', 56, 36],
       ['Ričardas Šveikauskas', 'RW', 56, 29], ['Domantas Šluta', 'ST', 56, 22], ['Vilius Armalas', 'CB', 56, 26],
       ['Gvidas Gineitis', 'DM', 79, 22], ['Lukas Michelbrink', 'AM', 67, 21], ['Motiejus Burba', 'ST', 56, 23],
       ['Klaudijus Upstas', 'RB', 58, 32], ['Vaidas Magdušauskas', 'LW', 56, 23], ['Ignas Plūkas', 'GK', 56, 33]
     ]
    },
    {
      n: 'Estonia', s: 'EST', conf: 'UEFA', str: 59, c1: '#0072CE', c2: '#000000', pool: 'bal', p: [
       ['Karl Jakob Hein', 'GK', 77, 24], ['Märten Kuusk', 'RB', 70, 30], ['Mihhail Kolobov', 'CB', 49, 21],
       ['Rasmus Peetson', 'CB', 50, 31], ['Ioan Yakovlev', 'LB', 50, 28], ['Mattias Käit', 'DM', 69, 28],
       ['Rocco Robert Shein', 'CM', 70, 23], ['Robi Saarma', 'AM', 49, 25], ['Karel Mustmaa', 'RW', 50, 21],
       ['Tony Varjund', 'ST', 51, 19], ['Mattias Männilaan', 'LW', 52, 25], ['Henri Perk', 'GK', 49, 27],
       ['Kristofer Käit', 'CB', 49, 21], ['Tanel Tammik', 'LB', 49, 24], ['Markus Soomets', 'CM', 49, 26],
       ['Frank Liivak', 'RW', 49, 30], ['Erko Jonne Tõugjas', 'ST', 49, 23], ['Kristo Hussar', 'CB', 49, 24],
       ['Kevor Palumets', 'DM', 49, 24], ['Patrik Kristal', 'AM', 49, 19], ['Vladislav Kreida', 'ST', 49, 27],
       ['Vlasiy Sinyavskiy', 'RB', 49, 30], ['Markus Poom', 'LW', 49, 27], ['Kaur Kivila', 'GK', 49, 23],
       ['Martin Miller', 'CM', 49, 29]
     ]
    },
    {
      n: 'Moldavia', s: 'MDA', conf: 'UEFA', str: 57, c1: '#0046AE', c2: '#FFD200', pool: 'ro', p: [
       ['Emil Tîmbur', 'GK', 52, 29], ['Leo Saca', 'RB', 55, 19], ['Mihail Ștefan', 'CB', 53, 25],
       ['Vladislav Baboglo', 'CB', 54, 28], ['Cătălin Cucoș', 'LB', 54, 23], ['Ștefan Bîtca', 'DM', 52, 21],
       ['Teodor Lungu', 'CM', 52, 31], ['Ștefan Bodișteanu', 'AM', 73, 23], ['Petru Popescu', 'RW', 55, 24],
       ['Virgiliu Postolachi', 'ST', 73, 26], ['Victor Ciumașu', 'LW', 53, 21], ['Dumitru Celeadnic', 'GK', 52, 34],
       ['Mihail Gherasimencov', 'CB', 52, 21], ['Ioan-Călin Revenco', 'LB', 52, 26], ['Nicky Cleșcenco', 'CM', 52, 25],
       ['Victor Bogaciuc', 'RW', 52, 27], ['Dan Pușcaș', 'ST', 52, 25], ['Ovidiu David', 'CB', 52, 20],
       ['Victor Stînă', 'DM', 52, 28], ['Danila Forov', 'AM', 52, 22], ['Sergiu Perciun', 'ST', 66, 20],
       ['Serghei Țurcan', 'RB', 52, 22], ['Andrei Cojuhar', 'GK', 52, 27]
     ]
    },
    {
      n: 'Malta', s: 'MLT', conf: 'UEFA', str: 56, c1: '#FFFFFF', c2: '#CF142B', pool: 'mini', p: [
       ['Henry Bonello', 'GK', 51, 38], ['Zach Muscat', 'RB', 53, 33], ['Enrico Pepe', 'CB', 55, 37],
       ['Kurt Shaw', 'CB', 53, 27], ['Jean Borg', 'LB', 51, 28], ['Matthew Guillaumier', 'DM', 52, 28],
       ['Teddy Teuma', 'CM', 81, 33], ['Juan Carlos Corbalan', 'AM', 54, 29], ['Joseph Mbong', 'RW', 52, 29],
       ['Alexander Satariano', 'ST', 51, 25], ['Paul Mbong', 'LW', 51, 25], ['Rashed Al-Tumi', 'GK', 51, 26],
       ['Myles Beerman', 'CB', 51, 27], ['Gabriel Mentz', 'LB', 51, 28], ['Jake Grech', 'CM', 51, 29],
       ['Ilyas Chouaref', 'RW', 75, 26], ['Basil Tuma', 'ST', 65, 21], ['Carlo Zammit Lonardelli', 'CB', 51, 25],
       ['Brandon Paiber', 'DM', 51, 31], ['Keyon Ewurum', 'AM', 51, 19], ['Andrea Zammit', 'ST', 51, 23],
       ['Kean Scicluna', 'RB', 51, 20], ['Alejandro Garcia', 'LW', 74, 24], ['James Sissons', 'GK', 51, 19],
       ['Jake Azzopardi', 'CM', 51, 20], ['Kevin Cannavò', 'CM', 51, 26]
     ]
    },
    {
      n: 'Islas Feroe', s: 'FRO', conf: 'UEFA', str: 63, c1: '#FFFFFF', c2: '#0065BD', pool: 'isl', p: [
       ['Ari Petersen', 'GK', 62, 24], ['Jóannes Danielsen', 'RB', 63, 29], ['Viljormur Davidsen', 'CB', 60, 35],
       ['Samuel Chukwudi', 'CB', 60, 23], ['Arnbjørn Svensson', 'LB', 59, 27], ['Noah Mneney', 'DM', 62, 24],
       ['Brandur Hendriksson', 'CM', 61, 31], ['Géza Dávid Turi', 'AM', 68, 25], ['Jóannes Bjartalíð', 'RW', 75, 30],
       ['Páll Klettskarð', 'ST', 60, 36], ['Áki Samuelsen', 'LW', 59, 22], ['Silas Eyðsteinsson', 'GK', 59, 28],
       ['Martin Agnarsson', 'CB', 56, 23], ['Gullbrandur Øregaard', 'LB', 57, 24], ['Jákup Andreasen', 'CM', 56, 28],
       ['Árni Frederiksberg', 'RW', 58, 34], ['Adrian Justinussen', 'ST', 58, 28], ['Ari Olsen', 'CB', 56, 28],
       ['Jann Benjaminsen', 'DM', 57, 29], ['Hanus Sørensen', 'AM', 56, 25], ['Petur Knudsen', 'ST', 56, 28],
       ['Gunnar Vatnhamar', 'RB', 56, 31], ['Bárður á Reynatrøð', 'GK', 56, 26]
     ]
    },
    {
      n: 'Gibraltar', s: 'GIB', conf: 'UEFA', str: 53, c1: '#FFFFFF', c2: '#DA020E', pool: 'mini', p: [
       ['Bradley Banda', 'GK', 53, 28], ['Kian Ronan', 'RB', 53, 25], ['Ethan Jolley', 'CB', 53, 29],
       ['Bernardo Lopes', 'CB', 53, 33], ['Julian Valarino', 'LB', 53, 26], ['Nicholas Pozo', 'DM', 53, 21],
       ['James Scanlon James Scanlon', 'CM', 53, 20], ['Dan Bent', 'AM', 53, 30], ['Tjay De Barr', 'RW', 53, 26],
       ['Jamie Coombes', 'ST', 53, 30], ['Ayoub El Hmidi', 'LW', 53, 26], ['Harry Victor', 'GK', 53, 22],
       ['Jayvan Garro', 'CB', 53, 18], ['Jay Coombes', 'LB', 53, 19], ['Evan De Haro', 'CM', 53, 24],
       ['Jaiden Bartolo', 'RW', 60, 20], ['Dylan Borge', 'ST', 53, 23], ['Jesse Gomez', 'DM', 53, 21],
       ['Han Stevens', 'AM', 53, 21], ['Luca Scanlon', 'ST', 53, 17], ['Leon Mason', 'LW', 53, 19],
       ['Victor Huart', 'GK', 53, 18]
     ]
    },
    {
      n: 'Andorra', s: 'AND', conf: 'UEFA', str: 58, c1: '#10069F', c2: '#FEDD00', pool: 'mini', p: [
       ['Álex Ruiz', 'GK', 56, 35], ['Biel Borra', 'RB', 58, 21], ['Àlex Cornella', 'CB', 60, 20],
       ['Kiko Pomares', 'CB', 56, 28], ['Moisés San Nicolás', 'LB', 59, 33], ['Marc Vales', 'DM', 59, 36],
       ['Eric de las Heras', 'CM', 58, 24], ['Pau Babot', 'AM', 59, 23], ['Àlex Martínez', 'RW', 58, 28],
       ['Ricard Fernández', 'ST', 58, 27], ['Guillaume López', 'LW', 58, 27], ['Iker Álvarez', 'GK', 78, 25],
       ['Jesús Rubio', 'CB', 56, 32], ['Joel Guillén', 'LB', 56, 25], ['Hugo Ferreira', 'CM', 56, 22],
       ['Jordi Aláez', 'RW', 56, 28], ['Aron Rodrigo', 'ST', 56, 22], ['Ian Olivera', 'CB', 56, 22],
       ['Izan Fernández', 'DM', 56, 25], ['Nil Linares', 'AM', 56, 21], ['Gerard Solà', 'ST', 56, 22],
       ['Ot Remolins', 'RB', 56, 22], ['Marc de Castro', 'GK', 56, 22]
     ]
    },
    {
      n: 'Liechtenstein', s: 'LIE', conf: 'UEFA', str: 53, c1: '#002B7F', c2: '#CE1126', pool: 'mini', p: [
       ['Justin Ospelt', 'GK', 52, 27], ['Maximilian Göppel', 'RB', 52, 29], ['Livio Meier', 'CB', 52, 28],
       ['Andreas Malin', 'CB', 52, 32], ['Jens Hofer', 'LB', 52, 29], ['Sandro Wolfinger', 'DM', 52, 35],
       ['Aron Sele', 'CM', 52, 30], ['Marcel Büchel', 'AM', 52, 35], ['Dennis Salanović', 'RW', 52, 30],
       ['Ferhat Sağlam', 'ST', 52, 25], ['Fabio Luque-Notaro', 'LW', 65, 21], ['Gabriel Foser', 'GK', 52, 24],
       ['Niklas Beck', 'CB', 52, 25], ['Felix Oberwaditzer', 'LB', 52, 20], ['Lars Traber', 'CM', 52, 26],
       ['Willy Pizzi', 'RW', 52, 32], ['Philipp Gaßner', 'ST', 52, 23], ['Jonas Weissenhofer', 'CB', 52, 20],
       ['Andrin Netzer', 'DM', 52, 24], ['Kenny Kindle', 'AM', 52, 23], ['Julien Hasler', 'ST', 52, 37],
       ['Emanuel Zünd', 'RB', 52, 22], ['Bruno Poitner', 'LW', 52, 19], ['Lorenzo Lo Russo', 'GK', 52, 33],
       ['Silvan Schädler', 'GK', 52, 20], ['Severin Schlegel', 'CM', 52, 22], ['Alessio Hasler', 'CM', 52, 21]
     ]
    },
    {
      n: 'San Marino', s: 'SMR', conf: 'UEFA', str: 49, c1: '#FFFFFF', c2: '#5EB6E4', pool: 'mini', p: [
       ['Edoardo Colombo', 'GK', 49, 25], ['Michele Cevoli', 'RB', 49, 28], ['Filippo Fabbri', 'CB', 49, 24],
       ['Alessandro Tosi', 'CB', 49, 25], ['Giacomo Benvenuti', 'LB', 49, 20], ['Marcello Mularoni', 'DM', 49, 28],
       ['Lorenzo Capicchioni', 'CM', 49, 24], ['Lorenzo Lazzari', 'AM', 49, 23], ['Nicola Nanni', 'RW', 49, 26],
       ['Nicolas Giacopetti', 'ST', 49, 20], ['Samuel Pancotti', 'LW', 49, 26], ['Pietro Amici', 'GK', 49, 22],
       ['Marco Pasolini', 'CB', 49, 23], ['Mattia Sancisi', 'LB', 49, 23], ['Matteo Valli Casadei', 'CM', 49, 21],
       ['Gabriel Capicchioni', 'RW', 49, 20], ['Fausto Salicioni', 'ST', 49, 20], ['Pietro Marinucci', 'CB', 49, 19],
       ['Samuele Zannoni', 'DM', 49, 24], ['Simone Giocondi', 'AM', 49, 24], ['Simone Tamagnini', 'ST', 49, 18],
       ['Filippo Terni', 'RB', 49, 17], ['Cristian Meloni', 'LW', 49, 18], ['Mirco De Angelis', 'GK', 49, 26]
     ]
    },

    /* ==================== CONCACAF ==================== */
    {
      n: 'Guatemala', s: 'GUA', conf: 'CONCACAF', str: 62, c1: '#4997D0', c2: '#FFFFFF', pool: 'latam', p: [
       ['Kenderson Navarro', 'GK', 63, 24], ['José Carlos Pinto', 'RB', 63, 33], ['José Morales', 'CB', 62, 30],
       ['José Ardón', 'CB', 60, 26], ['Allen Yanes', 'LB', 62, 29], ['Óscar Castellanos', 'DM', 61, 26],
       ['Stheven Robles', 'CM', 60, 31], ['Jonathan Franco', 'AM', 61, 23], ['Óscar Santis', 'RW', 61, 27],
       ['Darwin Lom', 'ST', 62, 29], ['Olger Escobar', 'LW', 68, 20], ['Luis Morán', 'GK', 55, 30],
       ['Carlos Aguilar', 'CB', 56, 20], ['Marcelo Hernández', 'LB', 56, 21], ['José Rosales', 'CM', 56, 33],
       ['Rudy Muñoz', 'RW', 57, 21], ['Arquímides Ordóñez', 'ST', 56, 23], ['Diego Fernández', 'CB', 76, 21],
       ['Kevin Ramírez', 'DM', 56, 24], ['Matt Evans', 'AM', 59, 20], ['Daniel Méndez', 'ST', 58, 21]
     ]
    },
    {
      n: 'El Salvador', s: 'SLV', conf: 'CONCACAF', str: 61, c1: '#0F47AF', c2: '#FFFFFF', pool: 'latam', p: [
       ['Mario González', 'GK', 73, 29], ['Julio Sibrián', 'RB', 57, 30], ['Henry Romero', 'CB', 55, 35],
       ['Jorge Cruz', 'CB', 55, 26], ['Rudy Clavel', 'LB', 53, 30], ['Mayer Gil', 'DM', 57, 23],
       ['Harold Osorio', 'CM', 58, 23], ['Marcelo Díaz', 'AM', 75, 26], ['Styven Vásquez', 'RW', 55, 24],
       ['Brayan Gil', 'ST', 53, 25], ['Nathan Ordaz', 'LW', 70, 22], ['Geonathan Barrera', 'GK', 50, 22],
       ['Danis Cerros', 'CB', 51, 27], ['Jefferson Valladares', 'LB', 51, 24], ['Christian Martínez', 'CM', 51, 32],
       ['Cristian Gil', 'RW', 51, 30], ['Elvis Claros', 'ST', 50, 26], ['Diego Flores', 'CB', 52, 25],
       ['Jairo Henríquez', 'DM', 51, 33], ['Rafael Tejada', 'AM', 52, 23], ['Mauricio Cerritos', 'ST', 54, 23],
       ['Alejandro Henríquez', 'RB', 51, 24], ['Noel Rivera', 'LW', 53, 22], ['Daniel Franco', 'GK', 70, 20],
       ['Víctor García', 'CM', 73, 31], ['Diego Ortez', 'CM', 49, 23]
     ]
    },
    {
      n: 'Trinidad y Tobago', s: 'TRI', conf: 'CONCACAF', str: 64, c1: '#DA1A35', c2: '#000000', pool: 'car', p: [
       ['Jabari Brice', 'GK', 63, 27], ['Shervohnez Hamilton', 'RB', 63, 23], ['Anthony Herbert', 'CB', 60, 28],
       ['Andre Raymond', 'CB', 61, 26], ['Justin Garcia', 'LB', 63, 31], ['Daniel Phillips', 'DM', 76, 25],
       ['Daniel David', 'CM', 64, 24], ['Ali Kazim Nakhid', 'AM', 63, 26], ['Ryan Telfer', 'RW', 64, 32],
       ['Molik Khan', 'ST', 63, 22], ['Judah Garcia', 'LW', 62, 26], ['Teshorne Ragoo', 'GK', 58, 24],
       ['Noah Powder', 'CB', 60, 28], ['John-Paul Rochford', 'CM', 61, 26], ['Reon Moore', 'RW', 61, 30],
       ['Jaheim Faustin', 'ST', 60, 22], ['Andre Rampersad', 'DM', 59, 31], ['Michel Poon-Angeron', 'AM', 59, 25],
       ['Isaiah Lee', 'ST', 56, 27], ['Kaihim Thomas', 'LW', 59, 23], ['Denzil Smith', 'GK', 56, 27]
     ]
    },
    {
      n: 'Surinam', s: 'SUR', conf: 'CONCACAF', str: 64, c1: '#377E3F', c2: '#B40A2D', pool: 'nl', p: [
       ['Warner Hahn', 'GK', 66, 34], ['Anfernee Dijksteel', 'RB', 63, 30], ['Radinio Balker', 'CB', 48, 28],
       ['Stefano Denswil', 'CB', 67, 33], ['Dion Malone', 'LB', 57, 37], ['Melayro Bogarde', 'DM', 61, 24],
       ['Jean-Paul Boëtius', 'CM', 63, 32], ['Tjaronn Chery', 'AM', 68, 38], ['Gyrano Kerk', 'RW', 66, 31],
       ['Joël Piroe', 'ST', 69, 27], ['Sheraldo Becker', 'LW', 69, 31], ['Jahnilo Wiegel', 'GK', 46, 21],
       ['Myenty Abena', 'CB', 64, 32], ['Djavan Anderson', 'LB', 45, 31], ['Immanuel Pherai', 'CM', 46, 25],
       ['Richonell Margaret', 'RW', 61, 26], ['Jay-Roy Grot', 'ST', 43, 28], ['Yannick Leliendal', 'CB', 61, 24],
       ['Denzel Jubitana', 'DM', 43, 27], ['Kenneth Paal', 'AM', 63, 29], ['Gleofilo Vlijter', 'ST', 44, 27],
       ['Shaquille Pinas', 'RB', 67, 28], ['Liam van Gelderen', 'LW', 45, 25], ['Etienne Vaessen', 'GK', 64, 31],
       ['Ridgeciano Haps', 'CB', 62, 33], ['Djevencio van der Kust', 'CB', 44, 25]
     ]
    },
    {
      n: 'República Dominicana', s: 'DOM', conf: 'CONCACAF', str: 58, c1: '#002D62', c2: '#CE1126', pool: 'latam', p: [
       ['Miguel Lloyd', 'GK', 57, 44], ['Luiyi de Lucas', 'RB', 58, 32], ['Joao Urbáez', 'CB', 64, 24],
       ['Noah Dollenmayer', 'CB', 58, 27], ['Jeremy Báez', 'LB', 56, 27], ['Jean Carlos López', 'DM', 54, 33],
       ['Lucas Bretón', 'CM', 57, 20], ['Pablo Rosario', 'AM', 53, 29], ['Dorny Romero', 'RW', 72, 28],
       ['Edarlyn Reyes', 'ST', 57, 29], ['Erick Japa', 'LW', 53, 27], ['Xavier Valdez', 'GK', 61, 23],
       ['Brayan Ademán', 'CB', 53, 24], ['Alejandro López', 'LB', 52, 17], ['Manny Rodríguez', 'CM', 52, 28],
       ['Juanca Pineda', 'RW', 54, 26], ['Peter González', 'ST', 52, 24], ['Israel Boatwright', 'CB', 64, 21],
       ['Yordy Álvarez', 'DM', 52, 21], ['Alessandro Ovalle', 'AM', 52, 21], ['Mariano Díaz', 'ST', 53, 33],
       ['Anyelo Gómez', 'RB', 52, 23], ['Adrián García', 'LW', 52, 17], ['Edwin Frías', 'GK', 52, 20],
       ['Anthony Núñez', 'GK', 52, 21]
     ]
    },
    {
      n: 'Nicaragua', s: 'NCA', conf: 'CONCACAF', str: 59, c1: '#0067C6', c2: '#FFFFFF', pool: 'latam', p: [
       ['Alyer López', 'GK', 57, 27], ['Josué Quijano', 'RB', 57, 35], ['Óscar Acevedo', 'CB', 59, 29],
       ['Justing Cano', 'CB', 60, 24], ['Joab Gutiérrez', 'LB', 59, 20], ['Jefferson Rivera', 'DM', 59, 30],
       ['Jacob Montes', 'CM', 58, 28], ['Marvin Barahona', 'AM', 61, 21], ['Bancy Hernández', 'RW', 61, 26],
       ['José Martínez', 'ST', 59, 21], ['Byron Bonilla', 'LW', 58, 33], ['Adonis Pineda', 'GK', 54, 29],
       ['Leyner Moses', 'CB', 55, 21], ['Evert Martínez', 'LB', 56, 24], ['Jason Coronel', 'CM', 54, 33],
       ['Juan Barrera', 'RW', 54, 37], ['Jorge García', 'ST', 55, 28], ['Christian Reyes', 'CB', 54, 28],
       ['Jonathan Moncada', 'DM', 54, 28], ['Marlon López', 'AM', 56, 34], ['Edgar Castillo', 'ST', 56, 24],
       ['Anyelo Velásquez', 'RB', 57, 22], ['Darryl Parker', 'GK', 54, 33]
     ]
    },
    {
      n: 'Cuba', s: 'CUB', conf: 'CONCACAF', str: 56, c1: '#002A8F', c2: '#CF142B', pool: 'latam', p: [
       ['Ismel Morgado', 'GK', 54, 23], ['Yosel Piedra', 'RB', 54, 32], ['Karel Espino', 'CB', 55, 25],
       ['Karel Pérez', 'CB', 55, 21], ['Orlando Calvo', 'LB', 53, 27], ['Yunior Pérez', 'DM', 54, 25],
       ['Dairon Reyes', 'CM', 54, 23], ['Romario Torres', 'AM', 57, 21], ['Luis Paradela', 'RW', 73, 29],
       ['Yasniel Matos', 'ST', 53, 24], ['Alessio Raballo', 'LW', 53, 20], ['Yurdy Hodelin', 'GK', 53, 21],
       ['Elvis Casanova', 'CB', 53, 21], ['Leandro Mena', 'LB', 53, 21], ['Diego Catasus', 'CM', 53, 21],
       ['Jorge Aguirre', 'RW', 53, 26], ['Jade Quiñónes', 'ST', 53, 19], ['Camilo Pinillo', 'CB', 53, 19],
       ['Pedro Bravo', 'DM', 75, 25], ['Michael Camejo', 'AM', 53, 21], ['Marcos Campos', 'ST', 53, 21],
       ['Dayron David Reyes', 'RB', 53, 22], ['Eloy Nebreda', 'LW', 53, 19], ['Yorlan Urgelles', 'GK', 53, 21],
       ['Maikol Vega', 'CM', 53, 20]
     ]
    },
    {
      n: 'Guyana', s: 'GUY', conf: 'CONCACAF', str: 45, c1: '#009E49', c2: '#FCD116', pool: 'car', p: [
       ['Akel Clarke', 'GK', 38, 38], ['Liam Gordon', 'RB', 56, 27], ['Jalen Jones', 'CB', 38, 28],
       ['Terence Vancooten', 'CB', 57, 29], ['Kvist Paul', 'LB', 38, 20], ['Kelsey Benjamin', 'DM', 37, 27],
       ['Nathan Moriah-Welsh', 'CM', 54, 24], ['Elliot Bonds', 'AM', 55, 26], ['Omari Glasgow', 'RW', 37, 23],
       ['Osaze De Rosario', 'ST', 50, 25], ['Enoch George', 'LW', 38, 23], ['Joshua Naraine', 'GK', 37, 23],
       ['Walker Shabazz-Edwards', 'CB', 37, 19], ['Kyle Reid', 'LB', 37, 21], ['Curtez Kellman', 'CM', 37, 28],
       ['Maliq Cadogan', 'RW', 37, 22], ['Reiss Elliott-Parris', 'ST', 37, 19], ['Shemar Scott', 'CB', 37, 26],
       ['Nathan Ferguson', 'DM', 37, 31], ['Raushan Ritch', 'AM', 37, 26], ['Bryan Wharton', 'ST', 37, 19],
       ['Brandon Solomon', 'RB', 37, 22], ['Grant Wyles', 'GK', 37, 21]
     ]
    },
    {
      n: 'Puerto Rico', s: 'PUR', conf: 'CONCACAF', str: 54, c1: '#ED0000', c2: '#0050F0', pool: 'latam', p: [
       ['Sebastián Cutler', 'GK', 52, 23], ['Nicolás Cardona', 'RB', 52, 28], ['Giovanni Calderón', 'CB', 52, 26],
       ['Callum Stretch', 'CB', 55, 27], ['André Cutler', 'LB', 53, 23], ['Gerald Díaz', 'DM', 54, 27],
       ['Wilfredo Rivera', 'CM', 53, 23], ['Jaden Servania', 'AM', 51, 25], ['Ricardo Rivera', 'RW', 52, 29],
       ['Leandro Antonetti', 'ST', 66, 23], ['Isaiah Vicentti', 'LW', 51, 18], ['Nicolás Aristizábal', 'GK', 51, 18],
       ['David Marrero', 'CB', 51, 21], ['Gamaliel Ortiz', 'LB', 51, 19], ["Juan O'Neill", 'CM', 51, 28],
       ['Benjamín Donato', 'RW', 51, 21], ['Steven Echevarria', 'ST', 51, 26], ['Adyn Torres', 'CB', 51, 19],
       ['Noeh Hernández', 'DM', 51, 22], ['Sidney Paris', 'AM', 51, 24], ['Jeremy de León', 'ST', 51, 22],
       ['Ignacio Antonetti', 'RB', 51, 18], ['Aurie Briscoe', 'GK', 51, 25]
     ]
    },
    {
      n: 'Bermudas', s: 'BER', conf: 'CONCACAF', str: 49, c1: '#CF102D', c2: '#FFFFFF', pool: 'car', p: [
       ['Jahquil Hill', 'GK', 47, 29], ['Roger Lee', 'RB', 49, 35], ['Harry Twite', 'CB', 49, 21],
       ['Deniche Hill', 'CB', 49, 22], ['Daniel Cook', 'LB', 48, 23], ['Zeiko Lewis', 'DM', 48, 32],
       ['Ne-Jai Tucker', 'CM', 50, 24], ['Aundè Todd', 'AM', 51, 21], ['Logan Jiménez', 'RW', 48, 18],
       ['Ajani Burchall', 'ST', 48, 22], ['Elisha Darrell', 'LW', 51, 27], ['Milai Perott', 'GK', 54, 22],
       ['Julian Carpenter', 'CB', 47, 31], ['Kieron Richardson', 'LB', 47, 21], ['Riley Robinson', 'CM', 47, 21],
       ['Senoj Mitchell', 'RW', 47, 25], ['La Zai Outerbridge', 'ST', 47, 22], ['David Jones', 'CB', 47, 29],
       ['Amir Dill', 'DM', 47, 24], ['Joshua Joseph', 'AM', 47, 23], ['Brighton Morrison', 'RB', 47, 21],
       ['Nathaniel Swan', 'GK', 47, 20]
     ]
    },
    {
      n: 'Belice', s: 'BLZ', conf: 'CONCACAF', str: 48, c1: '#003F87', c2: '#CE1126', pool: 'car', p: [
       ['Woodrow West', 'GK', 48, 41], ['Pele Martínez', 'RB', 48, 29], ['Deshawon Nembhard', 'CB', 48, 32],
       ['Norman Anderson', 'CB', 48, 29], ['Alence Ayala', 'LB', 48, 27], ['Jordy Polanco', 'DM', 48, 30],
       ['Darrel Myvette', 'CM', 48, 33], ['Nahjib Guerra', 'AM', 48, 32], ['Jaheim Mena', 'RW', 48, 20],
       ['Desmond Wade', 'ST', 48, 29], ['Daijon Daniels', 'LW', 48, 23], ['Charles Tillett', 'GK', 48, 25],
       ['Jaylen Lennan', 'CB', 48, 24], ['Jordan Casanova', 'LB', 48, 22], ['Andir Chi', 'CM', 48, 26],
       ['Félix Martínez', 'RW', 48, 21], ['Orlando Velásquez', 'ST', 48, 28], ['Calvin Reid', 'CB', 48, 22],
       ['Eldon Reneau', 'DM', 48, 23], ['Freybin Pagoada', 'AM', 48, 24], ['Marlon Meza Jr.', 'ST', 48, 17],
       ['Kenyon Smith', 'RB', 48, 32]
     ] },
    { n: 'Antigua y Barbuda', s: 'ATG', conf: 'CONCACAF', str: 46, c1: '#000000', c2: '#CE1126', pool: 'car', p: [
       ['Jayden Martin', 'GK', 46, 24], ['Zafique Drew', 'RB', 44, 23], ['Kylano Isaac', 'CB', 44, 21],
       ['Tyrik Hughes', 'CB', 45, 21], ['Amir Daley', 'LB', 44, 24], ['Sean Tomlinson', 'DM', 44, 22],
       ['Dion Pereira', 'CM', 60, 27], ['TJ Bramble', 'AM', 44, 25], ['Raheem Deterville', 'RW', 45, 27],
       ['Daryl Massicot', 'ST', 45, 21], ["D'Andre Bishop", 'LW', 44, 24], ['Zaieem Scott', 'GK', 44, 22],
       ["Jahzinho O'Garro", 'CB', 44, 24], ['Leroy Graham', 'LB', 44, 27], ['Quinton Griffith', 'CM', 44, 34],
       ['Karique Knight', 'RW', 44, 21], ['Shalon Knight', 'DM', 44, 26], ['Dannen Francis', 'AM', 44, 22],
       ['Shahoi Dorsett', 'GK', 44, 22]
     ] },
    { n: 'Barbados', s: 'BRB', conf: 'CONCACAF', str: 41, c1: '#00267F', c2: '#FFC726', pool: 'car', p: [
       ['Jireh Malcolm', 'GK', 43, 20], ['Ackeel Applewhaite', 'RB', 41, 27], ['Andre Applewhaite', 'CB', 41, 24],
       ['Carl Hinkson', 'CB', 41, 29], ['Ethan Taylor', 'LB', 41, 21], ['Mario Williams', 'DM', 41, 34],
       ['Rashad Jules', 'CM', 41, 34], ['Nadre Butcher', 'AM', 41, 22], ['Sheran Hoyte', 'RW', 41, 26],
       ['Shaquan Phillips', 'GK', 41, 24], ['Jaheim Neblett', 'CB', 41, 24], ['Ajani Banton', 'LB', 41, 20],
       ['Nicoli Brathwaite', 'CM', 41, 26], ['Shay Prescod', 'CB', 41, 22], ['Jaron Oughterson', 'DM', 41, 25],
       ['Leon Elliott', 'AM', 41, 20]
     ] },
    { n: 'San Cristóbal y Nieves', s: 'SKN', conf: 'CONCACAF', str: 53, c1: '#009E49', c2: '#FFCD00', pool: 'car', p: [
       ['Xander Parke', 'GK', 51, 23], ['Malique Roberts', 'RB', 51, 25], ['Ethan Bristow', 'CB', 68, 25],
       ['Ruben Freeman', 'CB', 51, 26], ['Daron Thomas', 'LB', 51, 20], ['Theo Wharton', 'DM', 51, 32],
       ['Yohannes Mitchum', 'CM', 52, 28], ['Jahlyan Burt', 'AM', 53, 23], ['Tiquanny Williams', 'RW', 54, 25],
       ['Harry Panayiotou', 'ST', 51, 32], ["G'Vaune Amory", 'LW', 54, 29], ['Julani Archibald', 'GK', 49, 35],
       ["Jal'den Myers", 'CB', 49, 23], ['Lois Maynard', 'LB', 49, 37], ['Mervin Lewis', 'CM', 49, 26],
       ['Savi-K Morton', 'RW', 50, 17], ['Kyle Kelly', 'ST', 49, 21], ['Jordan Bowery', 'CB', 67, 35],
       ['Nequan Browne', 'DM', 49, 28], ['Romaine Sawyers', 'AM', 49, 35], ['Omari Sterling-James', 'ST', 49, 33],
       ['Tyrese Shade', 'RB', 65, 26], ['Joshua Warde', 'GK', 49, 25]
     ] },
    { n: 'Granada', s: 'GRN', conf: 'CONCACAF', str: 47, c1: '#CE1126', c2: '#FCD116', pool: 'car', p: [
       ['Trishwan Thomas', 'GK', 44, 23], ['Benjamin Ettienne', 'RB', 46, 23], ['Joshua Lett', 'CB', 47, 22],
       ['Kayden Harrack', 'CB', 46, 23], ['Shavon John-Brown', 'LB', 44, 31], ['Dorrel Pierre', 'DM', 46, 27],
       ['Myles Hippolyte', 'CM', 61, 32], ['Keston Williams', 'AM', 44, 22], ['Narshon Sylvester', 'RW', 44, 19],
       ['Lucas Akins', 'ST', 46, 37], ['Jermaine Francis', 'LW', 44, 24], ['Shaquille Charles', 'GK', 44, 22],
       ['Greg Sandiford', 'CB', 44, 21], ['Kane Vincent-Young', 'LB', 60, 30], ['Parish Muirhead', 'CM', 44, 26],
       ['Deanroy Phillip', 'RW', 44, 23], ['Vijay Valcin', 'ST', 44, 21], ['Josh Gabriel', 'CB', 44, 27],
       ['Ashley Charles', 'DM', 59, 27], ['Romar Frank', 'AM', 44, 30], ['Raheem Raeburn', 'ST', 44, 18],
       ['Jacob Bedeau', 'RB', 63, 27], ['Darius Johnson', 'LW', 44, 26]
     ] },
    { n: 'San Vicente y las Granadinas', s: 'VIN', conf: 'CONCACAF', str: 54, c1: '#009E60', c2: '#FCD116', pool: 'car', p: [
       ['Kenyan Lynch', 'GK', 54, 41], ['Jamal Yorke', 'RB', 52, 35], ['Najima Burgin', 'CB', 52, 30],
       ['Nigel Charles', 'CB', 55, 23], ['Dimitri Thomas', 'LB', 55, 19], ['Nazir McBurnette', 'DM', 52, 33],
       ['Diel Spring', 'CM', 53, 26], ['Kennijha Joseph', 'AM', 54, 26], ['Cornelius Stewart', 'RW', 56, 37],
       ['Azinho Solomon', 'ST', 54, 32], ['Steven Pierre', 'LW', 55, 21], ['Garwin Davis', 'GK', 52, 22],
       ['Saviola Blake', 'CB', 52, 22], ['Addeen Charles', 'CM', 52, 30], ['Garret Leigertwood', 'RW', 52, 26],
       ['Kirtney Franklyn', 'DM', 52, 21], ['Bishon Richards', 'AM', 52, 23], ['Samir Bristol', 'GK', 52, 26]
     ] },
    { n: 'Santa Lucía', s: 'LCA', conf: 'CONCACAF', str: 52, c1: '#6CCEDD', c2: '#FCD116', pool: 'car', p: [
       ['Devone St. Prix', 'GK', 53, 29], ['Ajani Louis', 'RB', 51, 23], ['Melvin Doxilly', 'CB', 53, 28],
       ['Alvinus Myers', 'CB', 52, 30], ['Doneal Lionel', 'LB', 54, 28], ['Shaquan Nelson', 'DM', 52, 22],
       ['Thierry Morille', 'CM', 52, 18], ['Lester Joseph', 'AM', 51, 33], ['Donavan Phillip', 'RW', 54, 21],
       ['Hemaiael Charlery', 'ST', 53, 22], ['Shevon Byron', 'LW', 51, 18], ['Darren Donaie', 'GK', 51, 23],
       ['Ridel Stanislas', 'CB', 51, 29], ['Eymani Butcher', 'LB', 51, 19], ['Trent Alexander', 'CM', 51, 25],
       ['Arkell Jude-Boyd', 'RW', 67, 23], ['Kegan Caull', 'ST', 51, 22], ['Bayan Aman', 'DM', 51, 21],
       ['Mervin St. Romain', 'AM', 51, 21], ['Jahlil Evans', 'ST', 51, 22], ["A'dee Germe", 'GK', 51, 18]
     ] },
    { n: 'Dominica', s: 'DMA', conf: 'CONCACAF', str: 43, c1: '#006B3F', c2: '#FCD116', pool: 'car', p: [
       ['Donté Newton', 'GK', 43, 27], ['Javid George', 'RB', 43, 28], ['Eustace Marshall', 'CB', 43, 29],
       ['Marcus Bredas', 'CB', 43, 23], ['Savio Anselm', 'LB', 43, 24], ['Briel Thomas', 'DM', 43, 32],
       ['Audel Laville', 'CM', 43, 24], ['Jervanie Xavier', 'AM', 43, 26], ['Troy Jules', 'RW', 43, 26],
       ['Antawn Larocque', 'ST', 43, 20], ['Clemson Isaac', 'LW', 43, 24], ['Dwight Eloi', 'GK', 43, 18],
       ['Nick Anthony', 'CB', 43, 28], ['Titus Sandy Jr', 'LB', 43, 24], ['Dhamario Challenger', 'CM', 43, 20],
       ['Jahlil Alexander', 'RW', 43, 28], ['Lyan Edwards', 'DM', 43, 21], ['Nicholas Harve', 'AM', 43, 19]
     ] },
    { n: 'Bahamas', s: 'BAH', conf: 'CONCACAF', str: 38, c1: '#00778B', c2: '#FFC72C', pool: 'car', p: [
       ['Michael Butler', 'GK', 37, 27], ['Miguel Thompson', 'RB', 37, 25], ['Junior Kelly', 'CB', 37, 21],
       ['Lamond Cross', 'CB', 37, 21], ['Justin Minns', 'LB', 37, 24], ['Chris Rahming', 'DM', 37, 27],
       ["Re'john Ene", 'CM', 37, 30], ['Dylan Archer', 'AM', 37, 18], ['Nahum Johnson', 'RW', 37, 20],
       ['Lothario Milfrise', 'ST', 37, 23], ['Joshua Johnson', 'LW', 48, 23], ['Vance Wheaton', 'GK', 37, 21],
       ['Prince Cooper', 'CB', 37, 19], ['Jamario Charles', 'LB', 37, 25], ['Dwyane Taylor', 'CM', 37, 28],
       ['Robert Holcombe', 'RW', 37, 19], ['Creven Ferguson', 'CB', 37, 23], ['Deron Ferguson', 'DM', 37, 20],
       ['Keno Thomas', 'AM', 37, 19]
     ] },
    { n: 'Islas Caimán', s: 'CAY', conf: 'CONCACAF', str: 36, c1: '#012169', c2: '#C8102E', pool: 'car', p: [
       ['Lachlin Lambert', 'GK', 36, 20], ['Wesley Robinson', 'RB', 36, 33], ['Jabari Campbell', 'CB', 36, 26],
       ["D'Andre Rowe", 'CB', 36, 25], ['Cameron Gray', 'LB', 36, 28], ['Trey Ebanks', 'DM', 36, 26],
       ['Zachary Scott', 'CM', 36, 28], ['Jordan Bonilla', 'AM', 36, 29], ['Elijah Seymour', 'RW', 36, 28],
       ['Christopher Reeves', 'ST', 36, 29], ['Jacobbi Tugman', 'LW', 36, 22], ['Deshawn Whittaker', 'GK', 36, 20],
       ['Jah Dain Alexander', 'CB', 36, 27], ['Joshwa Campbell', 'LB', 36, 20], ['Shakurn Silburn', 'CM', 36, 27],
       ['Gonzalo McLaughlin', 'RW', 36, 26], ['Kareem Foster', 'CB', 36, 26]
     ] },
    { n: 'Islas Vírgenes Británicas', s: 'VGB', conf: 'CONCACAF', str: 32, c1: '#012169', c2: '#FFFFFF', pool: 'car', p: [
       ['Toby Whiteside', 'GK', 32, 18], ['Joshua Bertie', 'RB', 32, 30], ['Ikyjah Williams', 'CB', 32, 23],
       ['Jaden Abrams', 'CB', 32, 19], ["T'Khoi Morton", 'LB', 32, 19], ['Kristian Javier', 'DM', 32, 30],
       ["T'Sharne Gallimore", 'CM', 32, 26], ['Luka Chalwell', 'AM', 32, 22], ['Tyler Forbes', 'RW', 32, 24],
       ['Johari Lacey', 'ST', 32, 20], ['Javaun Splatt', 'LW', 32, 25], ['Harry Foden', 'GK', 32, 20],
       ['Quelahni Nickie', 'CB', 32, 22], ['Momchil Yordanov', 'LB', 32, 19], ['William Green', 'CM', 32, 29],
       ['Adrian Padilla', 'RW', 32, 20], ['Decoi Prince', 'ST', 32, 19], ['Rush Broderick', 'CB', 32, 19],
       ['Joel Mars', 'DM', 32, 19], ['Alejandro Santos', 'AM', 32, 23]
     ] },
    { n: 'Islas Vírgenes de EE.UU.', s: 'VIR', conf: 'CONCACAF', str: 33, c1: '#FFFFFF', c2: '#0081C8', pool: 'car', p: [
       ['Dylan Ramos', 'GK', 33, 25], ['Jett Blaschka', 'RB', 33, 27], ['Joshua Ramos', 'CB', 33, 26],
       ['Quinn Farrell', 'CB', 33, 24], ['Carmelo Rodríguez', 'LB', 33, 34], ['Axel Bartsch', 'DM', 33, 24],
       ['Jair Whyte', 'CM', 33, 22], ['Andrew Shaffer', 'AM', 33, 22], ['Jimson St. Louis', 'RW', 33, 24],
       ['Rakeem Joseph', 'ST', 33, 26], ['Naqwan Henry', 'LW', 33, 22], ['Whelan Joseph', 'GK', 33, 24],
       ['Alfred Harris', 'CB', 33, 27], ['Brad Robinson', 'LB', 33, 22], ['Jannick Liburd', 'CM', 33, 25],
       ['Matthew Roth', 'RW', 33, 22], ['Ramesses McGuiness', 'ST', 33, 26], ['Ismail Nieves', 'CB', 33, 21],
       ['Aubin Atemazem', 'DM', 33, 30], ['Devien Bell', 'AM', 33, 22], ['Gabriel Catone-Highfield', 'ST', 33, 26],
       ['Quinn Scott', 'RB', 33, 20], ['Toryn Penders', 'LW', 33, 18], ['Terrence Jones Jr.', 'GK', 33, 35]
     ] },
    { n: 'Islas Turcas y Caicos', s: 'TCA', conf: 'CONCACAF', str: 35, c1: '#012169', c2: '#FFD100', pool: 'car', p: [
       ['Sebastian Turbyfield', 'GK', 35, 24], ['Kyle Belizaire', 'RB', 35, 20], ['Keniel Clervil', 'CB', 35, 21],
       ['Hency Gédéon', 'CB', 35, 20], ['Anios Jean', 'LB', 35, 18], ['Mackenson Cadet', 'DM', 35, 26],
       ['Jeff Beljour', 'CM', 35, 28], ['Christopher Louisy', 'AM', 35, 21], ['Wilsony Charles', 'RW', 35, 19],
       ['Billy Forbes', 'ST', 35, 36], ['Junior Paul', 'LW', 35, 25], ['Samuel Harvey', 'GK', 35, 17],
       ['Ledson Jerome', 'CB', 35, 28], ['Kendly Telusma', 'LB', 35, 18], ['Emmanuel Martin', 'CM', 35, 19],
       ['Schuyler Selver', 'RW', 35, 18], ['Wepsdel Saintilus', 'ST', 35, 18], ['Maddox-Zaidan Jones', 'CB', 35, 18],
       ['Rotskancy Mondelus', 'DM', 35, 21], ['Callum Park', 'AM', 35, 22]
     ] },
    { n: 'Montserrat', s: 'MSR', conf: 'CONCACAF', str: 52, c1: '#012169', c2: '#00A650', pool: 'car', p: [
       ['Trent Carter-Rogers', 'GK', 50, 20], ['Jernade Meade', 'RB', 49, 34], ['Nico Gordon', 'CB', 50, 24],
       ['Lucas Kirnon', 'CB', 49, 23], ['Donervon Daniels', 'LB', 64, 33], ['James Comley', 'DM', 50, 35],
       ['Brandon Comley', 'CM', 65, 31], ['Kaleem Simon', 'AM', 49, 30], ['Dominic Richmond', 'RW', 49, 20],
       ['Ashley Boatswain', 'ST', 49, 21], ['Seigel Rodney', 'LW', 49, 23], ['Kymani Nelson', 'GK', 49, 22],
       ['Lenni Cirino', 'CB', 62, 23], ['Mackye Townsend-West', 'LB', 49, 23], ['Lewis Duberry', 'CM', 49, 23],
       ['Sydney Mendes', 'RW', 49, 23], ['Marcus Walters', 'ST', 49, 21], ['Ahijah Daley', 'CB', 49, 25],
       ['Mylan Benjamin', 'DM', 49, 22], ['Mark Rogers', 'AM', 49, 24], ['Ervin Liburd', 'GK', 49, 23]
     ] },
    { n: 'Anguila', s: 'AIA', conf: 'CONCACAF', str: 37, c1: '#FFFFFF', c2: '#F58220', pool: 'car', p: [
       ['Jelanie Lawrence', 'GK', 37, 43], ['Kieron Lake-Bryan', 'RB', 37, 25], ['Luke Paris', 'CB', 37, 32],
       ['Alexander Fleming-Franco', 'CB', 37, 21], ['Nathaniel Owen', 'LB', 37, 18], ['Germain Hughes', 'DM', 37, 30],
       ['Aedan Scipio', 'CM', 37, 36], ['Javis Jones', 'AM', 37, 21], ['Jonathan Guishard', 'RW', 37, 30],
       ['Timarqus Connor', 'ST', 37, 19], ['Tarique Jackson', 'LW', 37, 17], ['Orliandry Curiel', 'GK', 37, 21],
       ['Sedu Bradshaw', 'CB', 37, 24], ['Jaheim Thompson', 'LB', 37, 19], ['Kayne Connor', 'CM', 37, 22],
       ['Jayvon Lloyd', 'RW', 37, 24], ['Jan-Willem Tesselaar', 'ST', 37, 29], ['Yariel Fleming', 'CB', 37, 29],
       ['Tjivari Leveret-Francisca', 'DM', 37, 17], ['Malachi Gumbs', 'AM', 37, 20]
     ] },
    { n: 'Aruba', s: 'ARU', conf: 'CONCACAF', str: 39, c1: '#418FDE', c2: '#F2A900', pool: 'nl', p: [
       ['Matthew Lentink', 'GK', 39, 33], ['Nickenson Paul', 'RB', 39, 29], ['Rovien Ostiana', 'CB', 39, 24],
       ['Kymani Nedd', 'CB', 39, 22], ['Diederick Luydens', 'LB', 39, 27], ['Walter Bennett', 'DM', 39, 29],
       ['Jaybrien Romano', 'CM', 39, 22], ['Dimaggio Senchi', 'AM', 39, 31], ['Javier Jiménez', 'RW', 39, 26],
       ['Jayden Kruydenhof', 'ST', 39, 20], ['Mishawn Molina', 'LW', 39, 21], ['Jahmani Eisden', 'GK', 39, 21],
       ['Darryl Bäly', 'CB', 39, 28], ['Bradley Martis', 'LB', 39, 28], ['Conner van Kilsdonk', 'CM', 39, 20],
       ['Carlito Fermina', 'RW', 39, 26], ['Gello Robertha', 'ST', 39, 22], ['Rainey Breinburg', 'CB', 39, 21],
       ['Quinlan Poulina', 'DM', 39, 23], ['Gianni Vandepitte', 'AM', 39, 26], ['Arenchelo Leito', 'ST', 39, 24],
       ['Gladwin Curiel', 'RB', 39, 24], ['Josthan Maduro', 'GK', 39, 20]
     ] },

    /* ==================== CONMEBOL ==================== */
    /* (las diez ya estaban) */
  ];

  N.forEach(function (x) { window.NATIONS.push(x); });
})();
