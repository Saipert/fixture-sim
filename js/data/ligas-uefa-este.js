/* =========================================================================
   DOCE LIGAS EUROPEAS MAS
   Segunda de Turquia y de Belgica, y las primeras divisiones de Bulgaria,
   Azerbaiyan, Kazajistan, Bosnia, Eslovaquia, Eslovenia, Georgia, Albania,
   Armenia e Irlanda.

   Los clubes que ya estaban en «Resto de UEFA» se mudan aqui con su
   valoracion y su plantilla real intactas. Del resto se conoce el nivel;
   las plantillas las inventa el juego con nombres del pais.
   ========================================================================= */
window.LEAGUES = window.LEAGUES || {};

window.LEAGUES.turquia2 = {
  id: 'turquia2', name: 'TFF 1. Lig', country: 'Turquía', tier: 2, uccl: 0, rel: 4,
  pool: 'tr', squadSize: 18, teams: [
    { n: 'Kayserispor', s: 'KAY', c1: '#FFD200', c2: '#C8102E', str: 63 },
    { n: 'Antalyaspor', s: 'ANT', c1: '#E30613', c2: '#FFFFFF', str: 63 },
    { n: 'Sivasspor', s: 'SIV', c1: '#E30613', c2: '#FFFFFF', str: 62 },
    { n: 'Fatih Karagümrük', s: 'KGM', c1: '#E2001A', c2: '#000000', str: 62 },
    { n: 'Bodrum FK', s: 'BOD', c1: '#00A3E0', c2: '#FFFFFF', str: 61 },
    { n: 'Bandırmaspor', s: 'BND', c1: '#E30613', c2: '#FFFFFF', str: 61 },
    { n: 'Pendikspor', s: 'PEN', c1: '#004B9B', c2: '#FFFFFF', str: 60 },
    { n: 'Ümraniyespor', s: 'UMR', c1: '#E30613', c2: '#FFFFFF', str: 60 },
    { n: 'Boluspor', s: 'BOL', c1: '#E30613', c2: '#FFFFFF', str: 60 },
    { n: 'Manisa FK', s: 'MAN', c1: '#000000', c2: '#FFD200', str: 60 },
    { n: 'Esenler Erokspor', s: 'ESE', c1: '#7B1A2B', c2: '#FFFFFF', str: 59 },
    { n: 'İstanbulspor', s: 'IST', c1: '#FFD200', c2: '#000000', str: 59 },
    { n: 'Keçiörengücü', s: 'KEC', c1: '#5B2C6F', c2: '#FFFFFF', str: 59 },
    { n: 'Sarıyer', s: 'SAR', c1: '#003DA5', c2: '#FFFFFF', str: 58 },
    { n: 'Iğdır FK', s: 'IGD', c1: '#0057B8', c2: '#FFFFFF', str: 58 },
    { n: 'Bursaspor', s: 'BUR', c1: '#009A44', c2: '#FFFFFF', str: 58 },
    { n: 'Vanspor', s: 'VAN', c1: '#E30613', c2: '#FFFFFF', str: 57 },
    { n: 'Batman Petrolspor', s: 'BAT', c1: '#E30613', c2: '#009A44', str: 57 },
    { n: 'Mardin 1969 Spor', s: 'MRD', c1: '#E30613', c2: '#FFFFFF', str: 57 },
    { n: 'Muğlaspor', s: 'MUG', c1: '#009A44', c2: '#FFFFFF', str: 57 }
  ]
};

window.LEAGUES.belgica2 = {
  id: 'belgica2', name: 'Challenger Pro League', country: 'Bélgica', tier: 2, uccl: 0, rel: 2,
  pool: 'nl', squadSize: 18, teams: [
    { n: 'Beerschot', s: 'BEE', c1: '#5B2C6F', c2: '#FFFFFF', str: 62 },
    { n: 'RFC Liège', s: 'RFC', c1: '#E30613', c2: '#003DA5', str: 61 },
    { n: 'Patro Eisden', s: 'PAT', c1: '#009A44', c2: '#FFFFFF', str: 60 },
    { n: 'KAS Eupen', s: 'EUP', c1: '#000000', c2: '#FFD200', str: 60 },
    { n: 'Lokeren-Temse', s: 'LOK', c1: '#FFFFFF', c2: '#000000', str: 59 },
    { n: 'FCV Dender EH', s: 'DEN', c1: '#E30613', c2: '#FFFFFF', str: 59 },
    { n: 'Lierse', s: 'LIE', c1: '#FFD200', c2: '#000000', str: 58 },
    { n: 'RFC Seraing', s: 'SER', c1: '#E30613', c2: '#000000', str: 57 },
    { n: 'Francs Borains', s: 'FRB', c1: '#009A44', c2: '#FFFFFF', str: 57 },
    { n: 'Excelsior Virton', s: 'VIR', c1: '#000000', c2: '#FFD200', str: 56 },
    { n: 'Sporting Hasselt', s: 'HAS', c1: '#003DA5', c2: '#FFFFFF', str: 56 }
  ]
};

window.LEAGUES.bulgaria = {
  id: 'bulgaria', name: 'Parva Liga', country: 'Bulgaria', tier: 1, uccl: 2, rel: 2,
  pool: 'balk', squadSize: 18, teams: [
    { n: 'Ludogorets', s: 'LUD', c1: '#00843D', c2: '#FFFFFF', str: 67, pool: 'ro', p: [
      ['Sergio Padt', 'GK', 65, 36], ['Joel Andersson', 'RB', 69, 30], ['Anton Nedyalkov', 'CB', 70, 33],
      ['Georgi Terziev', 'CB', 66, 34], ['Edvin Kurtulus', 'LB', 69, 26], ['Petar Stanić', 'DM', 66, 25],
      ['Ivaylo Chochev', 'CM', 66, 33], ['Aguibou Camara', 'AM', 69, 25], ['Alberto Salido', 'RW', 66, 26],
      ['Kwadwo Duah', 'ST', 68, 29], ['Nathan Fernandes', 'LW', 69, 21], ['Hendrik Bonmann', 'GK', 61, 32],
      ['Son', 'CB', 61, 32], ['Deroy Duarte', 'CM', 64, 27], ['Mihail Polendakov', 'LB', 56, 19],
      ['Filip Kaloč', 'DM', 61, 26], ['Caio Vidal', 'ST', 63, 26], ['Rwan Cruz', 'RW', 63, 25]
     ] },
    { n: 'CSKA Sofia', s: 'CSK', c1: '#E30613', c2: '#FFFFFF', str: 66, pool: 'ro', p: [
      ['Fiódor Lapavujov', 'GK', 65, 23], ['Pastor', 'RB', 65, 26], ['Tamimou Ouorou', 'CB', 65, 23],
      ['Adrián Lapeña', 'CB', 65, 30], ['Jean-Philippe Gbamin', 'LB', 68, 31], ['Bruno Jordão', 'DM', 65, 28],
      ['Max Ebong', 'CM', 67, 27], ['Stefano Sensi', 'AM', 67, 31], ['Leandro Godoy', 'RW', 66, 25],
      ['Joël Zwarts', 'ST', 69, 27], ['Mohamed Brahimi', 'LW', 67, 28], ['Dimitar Evtimov', 'GK', 62, 33],
      ['Teodor Ivanov', 'CB', 64, 22], ['Petko Panayotov', 'CM', 65, 21], ['Ángelo Martino', 'LB', 64, 28],
      ['Vasil Kaymakanov', 'DM', 64, 19], ['Kevin Dodaj', 'ST', 64, 21], ['Ioannis Pittas', 'RW', 63, 30]
     ] },
    { n: 'Levski Sofia', s: 'LEV', c1: '#003DA5', c2: '#FFFFFF', str: 63 },
    { n: 'CSKA 1948', s: 'C48', c1: '#E30613', c2: '#FFFFFF', str: 62 },
    { n: 'Lokomotiv Plovdiv', s: 'LKP', c1: '#000000', c2: '#FFFFFF', str: 61 },
    { n: 'Botev Plovdiv', s: 'BOP', c1: '#FFD200', c2: '#000000', str: 60 },
    { n: 'Cherno More', s: 'CHM', c1: '#003DA5', c2: '#FFFFFF', str: 60 },
    { n: 'Arda Kardzhali', s: 'ARD', c1: '#E30613', c2: '#FFFFFF', str: 60 },
    { n: 'Slavia Sofia', s: 'SLS', c1: '#FFFFFF', c2: '#E30613', str: 59 },
    { n: 'Lokomotiv Sofia', s: 'LKS', c1: '#E30613', c2: '#000000', str: 58 },
    { n: 'Spartak Varna', s: 'SPV', c1: '#003DA5', c2: '#FFFFFF', str: 58 },
    { n: 'Septemvri Sofia', s: 'SEP', c1: '#E30613', c2: '#FFFFFF', str: 57 },
    { n: 'Botev Vratsa', s: 'BOV', c1: '#E30613', c2: '#000000', str: 57 },
    { n: 'Dunav Ruse', s: 'DUN', c1: '#003DA5', c2: '#FFFFFF', str: 57 }
  ]
};

window.LEAGUES.azerbaiyan = {
  id: 'azerbaiyan', name: 'Azerbaijan Premier League', country: 'Azerbaiyán', tier: 1, uccl: 2, rel: 1,
  pool: 'turkic', squadSize: 18, teams: [
    { n: 'Qarabağ', s: 'QAR', c1: '#000000', c2: '#FFFFFF', str: 67, pool: 'turkic', p: [
      ['Shahrudin Mahammadaliyev', 'GK', 68, 32], ['Matheus Silva', 'RB', 67, 29], ['Bahlul Mustafazada', 'CB', 64, 29],
      ['Toral Bayramov', 'CB', 67, 25], ['Marko Vešović', 'LB', 67, 35], ['Júlio Romão', 'DM', 66, 28],
      ['Yassine Benzia', 'CM', 70, 32], ['Marko Janković', 'AM', 66, 31], ['Abdellah Zoubir', 'RW', 69, 35],
      ['Emmanuel Addai', 'ST', 65, 25], ['Leandro Andrade', 'LW', 70, 27], ['Sadiq Mammadzada', 'GK', 59, 20],
      ['Abbas Hüseynov', 'CB', 64, 31], ['Richard Almeida', 'CM', 61, 37], ['Anton Krivotsyuk', 'LB', 66, 31],
      ['Rotrovski Apolov', 'DM', 63, 17], ['Juninho Vieira', 'ST', 63, 30], ['Redon Xhixha', 'RW', 61, 28]
     ] },
    { n: 'Sabah FK', s: 'SAB', c1: '#00843D', c2: '#FFFFFF', str: 64, pool: 'turkic', p: [
      ['Amin Ramazanov', 'GK', 62, 23], ['Steve Solvet', 'RB', 64, 30], ['Aden McCarthy', 'CB', 66, 23],
      ['Rahman Dashdamirov', 'CB', 65, 27], ['Tellur Mütallimov', 'LB', 67, 31], ['Abdulakh Khaybulayev', 'DM', 65, 25],
      ['Umarali Rakhmonaliev', 'CM', 64, 23], ['Aleksey Isayev', 'AM', 67, 31], ['Christian Nwachukwu', 'RW', 58, 21],
      ['Khayal Aliyev', 'ST', 63, 22], ['Kaheem Parris', 'LW', 68, 26], ['Stas Pokatilov', 'GK', 61, 34],
      ['Tymoteusz Puchacz', 'CB', 70, 27], ['Ivan Lepinjica', 'CM', 62, 27], ['Erivaldo Almeida', 'LB', 61, 26],
      ['Rauf Rüstamli', 'DM', 62, 23], ['Joy-Lance Mickels', 'ST', 63, 32], ['Veljko Simic', 'RW', 61, 31]
     ] },
    { n: 'Neftçi Baku', s: 'NEF', c1: '#000000', c2: '#FFFFFF', str: 61 },
    { n: 'Turan Tovuz', s: 'TUR', c1: '#009A44', c2: '#FFFFFF', str: 58 },
    { n: 'Zira FK', s: 'ZIR', c1: '#003DA5', c2: '#FFFFFF', str: 57 },
    { n: 'Araz-Naxçıvan', s: 'ARA', c1: '#E30613', c2: '#FFFFFF', str: 56 },
    { n: 'Sumqayıt', s: 'SUM', c1: '#003DA5', c2: '#FFD200', str: 56 },
    { n: 'Şamaxı', s: 'SAM', c1: '#E30613', c2: '#FFFFFF', str: 55 },
    { n: 'Gabala', s: 'GAB', c1: '#E30613', c2: '#000000', str: 55 },
    { n: 'Kapaz', s: 'KAP', c1: '#FFD200', c2: '#000000', str: 54 },
    { n: 'İmişli', s: 'IMI', c1: '#009A44', c2: '#FFFFFF', str: 54 },
    { n: 'Shafa Baku', s: 'SHF', c1: '#003DA5', c2: '#FFFFFF', str: 53 }
  ]
};

window.LEAGUES.kazajistan = {
  id: 'kazajistan', name: 'Kazakhstan Premier League', country: 'Kazajistán', tier: 1, uccl: 2, rel: 2,
  pool: 'turkic', squadSize: 18, teams: [
    { n: 'Kairat Almaty', s: 'KAI', c1: '#FFD100', c2: '#000000', str: 64, pool: 'turkic', p: [
      ['Temirlan Anarbekov', 'GK', 64, 23], ['Luís Mata', 'RB', 66, 29], ['Lev Kurgin', 'CB', 64, 24],
      ['Aleksandr Martynovich', 'CB', 67, 39], ['Erkin Tapalov', 'LB', 65, 33], ['Damir Kasabulat', 'DM', 67, 24],
      ['Adilet Sadybekov', 'CM', 63, 24], ['Olzhas Baybek', 'AM', 63, 21], ['Jorginho', 'RW', 63, 29],
      ['Edmilson de Paula', 'ST', 64, 29], ['Dastan Satpaev', 'LW', 64, 18], ['Danila Buch', 'GK', 59, 18],
      ['Aleksandr Mrynskiy', 'CB', 60, 22], ['Jaakko Oksanen', 'CM', 62, 26], ['Aleksandr Shirobokov', 'LB', 58, 23],
      ['Azamat Tuyakbayev', 'DM', 60, 19], ['Sebastián Zeballos', 'ST', 62, 25], ['Mansur Birkurmanov', 'RW', 62, 19]
     ] },
    { n: 'FC Astana', s: 'AST', c1: '#00A3E0', c2: '#FFD100', str: 63, pool: 'turkic', p: [
      ['Mukhammedzhan Seysen', 'GK', 62, 27], ['Karlo Bartolec', 'RB', 65, 31], ['Branimir Kalaica', 'CB', 61, 28],
      ['Sanzhar Anuarov', 'CB', 65, 21], ['Kipras Kazukolovas', 'LB', 64, 26], ['Dinmukhamed Karaman', 'DM', 64, 26],
      ['Ivan Bašić', 'CM', 61, 24], ['Bauyrzhan Islamkhan', 'AM', 62, 33], ['Nurali Zhaksylyk', 'RW', 66, 22],
      ['Nnamdi Ahanonu', 'ST', 64, 24], ['Stanislav Basmanov', 'LW', 62, 25], ['Josip Čondrić', 'GK', 62, 33],
      ['Alibek Kasym', 'CB', 59, 28], ['Marin Tomasov', 'CM', 58, 39], ['Jan Vorogovsky', 'LB', 59, 30],
      ['Maksat Abrayev', 'DM', 57, 18], ['Ramazan Karimov', 'ST', 59, 27], ['Abzal Beysebekov', 'RW', 59, 34]
     ] },
    { n: 'Ordabasy', s: 'ORD', c1: '#009A44', c2: '#FFFFFF', str: 61 },
    { n: 'Aktobe', s: 'AKT', c1: '#E30613', c2: '#FFFFFF', str: 59 },
    { n: 'Okzhetpes', s: 'OKZ', c1: '#003DA5', c2: '#FFFFFF', str: 58 },
    { n: 'Yelimay', s: 'YEL', c1: '#009A44', c2: '#FFD200', str: 58 },
    { n: 'Tobol', s: 'TOB', c1: '#003DA5', c2: '#FFFFFF', str: 57 },
    { n: 'Irtysh Pavlodar', s: 'IRT', c1: '#FFFFFF', c2: '#003DA5', str: 57 },
    { n: 'Kaysar', s: 'KAY', c1: '#E30613', c2: '#FFD200', str: 56 },
    { n: 'Zhenis', s: 'ZHE', c1: '#FFD200', c2: '#003DA5', str: 56 },
    { n: 'Zhetysu', s: 'ZHY', c1: '#009A44', c2: '#FFFFFF', str: 55 },
    { n: 'Kaspiy', s: 'KAS', c1: '#003DA5', c2: '#FFD200', str: 55 },
    { n: 'Atyrau', s: 'ATY', c1: '#003DA5', c2: '#FFFFFF', str: 54 },
    { n: 'Kyzylzhar', s: 'KYZ', c1: '#E30613', c2: '#FFFFFF', str: 54 },
    { n: 'Shakhter Karagandy', s: 'SHK', c1: '#000000', c2: '#FFD200', str: 54 },
    { n: 'Taraz', s: 'TAR', c1: '#009A44', c2: '#FFFFFF', str: 53 },
    { n: 'Maqtaaral', s: 'MAQ', c1: '#003DA5', c2: '#FFFFFF', str: 53 },
    { n: 'Aksu', s: 'AKS', c1: '#E30613', c2: '#FFFFFF', str: 53 },
    { n: 'Turan Turkistan', s: 'TRK', c1: '#009A44', c2: '#FFD200', str: 53 },
    { n: 'Ulytau', s: 'ULY', c1: '#FFD200', c2: '#000000', str: 53 }
  ]
};

window.LEAGUES.bosnia = {
  id: 'bosnia', name: 'Premijer Liga', country: 'Bosnia-Herzegovina', tier: 1, uccl: 2, rel: 2,
  pool: 'balk', squadSize: 18, teams: [
    { n: 'Zrinjski Mostar', s: 'ZRI', c1: '#E30613', c2: '#FFFFFF', str: 64, pool: 'ro', p: [
      ['Anis Sefo', 'GK', 65, 23], ['Hrvoje Barišić', 'RB', 63, 35], ['Ilija Mašić', 'CB', 64, 27],
      ['Josip Ćorluka', 'CB', 63, 31], ['Petar Mamić', 'LB', 63, 30], ['Frano Mlinar', 'DM', 64, 34],
      ['Ivan Posavec', 'CM', 67, 28], ['Tarik Ramić', 'AM', 63, 23], ['Alen Jurilj', 'RW', 65, 30],
      ['Tomislav Kiš', 'ST', 64, 32], ['Nardin Mulahusejnović', 'LW', 66, 28], ['Goran Karačić', 'GK', 63, 30],
      ['Slobodan Jakovljević', 'CB', 62, 37], ['Antonio Ivančić', 'CM', 61, 31], ['Toni Šunjić', 'LB', 63, 38],
      ['Igor Savić', 'DM', 59, 26], ['Matija Malekinušić', 'ST', 62, 27], ['Mario Ćuže', 'RW', 62, 27]
     ] },
    { n: 'Željezničar', s: 'ZEL', c1: '#00529B', c2: '#FFFFFF', str: 62, pool: 'ro', p: [
      ['Tarik Abdulahović', 'GK', 63, 28], ['Edwin Odinaka', 'RB', 64, 23], ['Stefan Radinović', 'CB', 60, 27],
      ['Nemanja Cavnić', 'CB', 61, 31], ['Marin Karamarko', 'LB', 62, 28], ['Amer Hiroš', 'DM', 62, 30],
      ['Dženan Šabić', 'CM', 61, 20], ['Huso Karjašević', 'AM', 63, 29], ['Sulejman Krpić', 'RW', 62, 35],
      ['Filip Dangubić', 'ST', 63, 31], ['Matej Cvetanoski', 'LW', 63, 29], ['Vedad Muftić', 'GK', 60, 25],
      ['Mustafa Šukilović', 'CB', 60, 23], ['Harun Karić', 'CM', 60, 24], ['Marin Galić', 'LB', 59, 31],
      ['Abdulmalik Al-Jaber', 'DM', 48, 22], ['Ognjen Laušević', 'ST', 61, 21], ['Martin Mircevski', 'RW', 58, 29]
     ] },
    { n: 'Borac Banja Luka', s: 'BOR', c1: '#E30613', c2: '#003DA5', str: 60 },
    { n: 'FK Sarajevo', s: 'SAR', c1: '#7B1A2B', c2: '#FFFFFF', str: 59 },
    { n: 'Velež Mostar', s: 'VEL', c1: '#E30613', c2: '#FFFFFF', str: 58 },
    { n: 'Široki Brijeg', s: 'SIR', c1: '#E30613', c2: '#FFFFFF', str: 57 },
    { n: 'Radnik Bijeljina', s: 'RAD', c1: '#003DA5', c2: '#FFFFFF', str: 55 },
    { n: 'Sloga Meridian', s: 'SLO', c1: '#E30613', c2: '#FFFFFF', str: 54 },
    { n: 'Posušje', s: 'POS', c1: '#003DA5', c2: '#FFD200', str: 53 },
    { n: 'Rudar Prijedor', s: 'RUD', c1: '#000000', c2: '#FFD200', str: 53 }
  ]
};

window.LEAGUES.eslovaquia = {
  id: 'eslovaquia', name: 'Slovak First Football League', country: 'Eslovaquia', tier: 1, uccl: 2, rel: 2,
  pool: 'pl', squadSize: 18, teams: [
    { n: 'Slovan Bratislava', s: 'SLO', c1: '#0072CE', c2: '#FFFFFF', str: 65, pool: 'ro', p: [
      ['Martin Trnovský', 'GK', 66, 26], ['Guram Kashia', 'RB', 62, 39], ['Kevin Wimmer', 'CB', 66, 34],
      ['Kenan Bajrić', 'CB', 65, 32], ['Jurij Medveděv', 'LB', 67, 30], ['Peter Pokorný', 'DM', 64, 25],
      ['Rahim Ibrahim', 'CM', 64, 25], ['Artur Gajdoš', 'AM', 67, 22], ['Vladimír Weiss', 'RW', 63, 37],
      ['Mykola Kukharevych', 'ST', 64, 25], ['Tigran Barseghyan', 'LW', 65, 33], ['Matúš Macík', 'GK', 59, 33],
      ['Sidoine Fogning', 'CB', 59, 25], ['Marko Tolić', 'CM', 59, 30], ['Zuberu Sharani', 'LB', 60, 26],
      ['Maxim Mateáš', 'DM', 59, 18], ['Alasana Yirajang', 'ST', 61, 22], ['Nino Marcelli', 'RW', 58, 21]
     ] },
    { n: 'DAC Dunajská Streda', s: 'DAC', c1: '#FFD200', c2: '#003DA5', str: 62 },
    { n: 'Spartak Trnava', s: 'TRN', c1: '#E30613', c2: '#000000', str: 61 },
    { n: 'MŠK Žilina', s: 'ZIL', c1: '#FFD200', c2: '#009A44', str: 60 },
    { n: 'Zemplín Michalovce', s: 'MIC', c1: '#FFD200', c2: '#003DA5', str: 58 },
    { n: 'Podbrezová', s: 'POD', c1: '#009A44', c2: '#FFFFFF', str: 58 },
    { n: 'FC Košice', s: 'KOS', c1: '#FFD200', c2: '#000000', str: 57 },
    { n: 'AS Trenčín', s: 'TRE', c1: '#E30613', c2: '#FFFFFF', str: 57 },
    { n: 'MFK Skalica', s: 'SKA', c1: '#003DA5', c2: '#FFFFFF', str: 56 },
    { n: 'MFK Ružomberok', s: 'RUZ', c1: '#E30613', c2: '#FFFFFF', str: 55 },
    { n: 'KFC Komárno', s: 'KOM', c1: '#FFFFFF', c2: '#003DA5', str: 54 },
    { n: 'Dukla B. Bystrica', s: 'DUK', c1: '#E30613', c2: '#FFD200', str: 54 }
  ]
};

window.LEAGUES.eslovenia = {
  id: 'eslovenia', name: 'Slovenian PrvaLiga', country: 'Eslovenia', tier: 1, uccl: 2, rel: 1,
  pool: 'balk', squadSize: 18, teams: [
    { n: 'NK Celje', s: 'CEL', c1: '#FFD100', c2: '#00519E', str: 65, pool: 'ro', p: [
      ['Žan-Luk Leban', 'GK', 63, 24], ['Juanjo Nieto', 'RB', 66, 32], ['Damjan Vuklišević', 'CB', 65, 31],
      ['Gašper Vodeb', 'CB', 67, 23], ['Artemijus Tutyškinas', 'LB', 64, 23], ['Darko Hrka', 'DM', 64, 27],
      ['Florjan Jevšenak', 'CM', 67, 21], ['Mario Kvesić', 'AM', 66, 34], ['Franko Kovačević', 'RW', 64, 27],
      ['Danijel Šturm', 'ST', 63, 27], ['Milot Avdyli', 'LW', 64, 24], ['Luka Kolar', 'GK', 61, 21],
      ['Nino Vukasović', 'CB', 62, 25], ['Papa Daniel', 'CM', 63, 24], ['David Castro', 'LB', 59, 31],
      ['Ivica Vidović', 'DM', 62, 24], ['Nikita Iosifov', 'ST', 64, 25], ['Armandas Kučys', 'RW', 61, 23]
     ] },
    { n: 'NK Maribor', s: 'MAR', c1: '#5A2D82', c2: '#FFD100', str: 63, pool: 'ro', p: [
      ['Ažbe Jug', 'GK', 63, 34], ['Cedomir Bumbic', 'RB', 65, 27], ['Pijus Širvys', 'CB', 65, 28],
      ["Bradley M'Bondo", 'CB', 62, 25], ['Adam Rasheed', 'LB', 61, 20], ['Nejc Viher', 'DM', 64, 18],
      ['Claude Gonçalves', 'CM', 66, 32], ['Žiga Repas', 'AM', 61, 25], ['El Arbi Hillel Soudani', 'RW', 61, 39],
      ['Tio Cipot', 'ST', 65, 23], ['Ali Reghba', 'LW', 65, 26], ['Téva Gardies', 'GK', 56, 25],
      ['Petar Stojanović', 'CB', 68, 30], ['Jean Michaël Seri', 'CM', 58, 35], ['Luka Krajnc', 'LB', 59, 32],
      ['Jan Repas', 'DM', 60, 29], ['Niko Grlić', 'ST', 58, 20], ['Sheyi Ojo', 'RW', 59, 29]
     ] },
    { n: 'Olimpija Ljubljana', s: 'OLI', c1: '#009B48', c2: '#FFFFFF', str: 63, pool: 'ro', p: [
      ['Denis Pintol', 'GK', 62, 26], ['Jorge Silva', 'RB', 61, 30], ['David Sualehe', 'CB', 61, 29],
      ['Nikola Motika', 'CB', 64, 22], ['Justas Lasickas', 'LB', 63, 29], ['Peter Agba', 'DM', 62, 24],
      ['Dino Kojic', 'CM', 59, 21], ['Diogo Pinto', 'AM', 66, 27], ['Raul Florucz', 'RW', 68, 25],
      ['Álex Blanco', 'ST', 61, 28], ['Marko Brest', 'LW', 63, 24], ['Gal Lubej-Fink', 'GK', 56, 24],
      ['Marcel Ratnik', 'CB', 57, 23], ['Reda Boultam', 'CM', 58, 28], ['Marko Ristić', 'LB', 57, 22],
      ['Agustín Doffo', 'DM', 58, 31], ['Ivan Durdov', 'ST', 59, 26], ['Benjika Caciel', 'RW', 58, 25]
     ] },
    { n: 'FC Koper', s: 'KOP', c1: '#009A44', c2: '#FFFFFF', str: 61 },
    { n: 'NK Bravo', s: 'BRA', c1: '#FFFFFF', c2: '#003DA5', str: 59 },
    { n: 'NK Radomlje', s: 'RAD', c1: '#FFD200', c2: '#000000', str: 56 },
    { n: 'NK Aluminij', s: 'ALU', c1: '#003DA5', c2: '#FFFFFF', str: 55 },
    { n: 'NŠ Mura', s: 'MUR', c1: '#000000', c2: '#FFFFFF', str: 55 },
    { n: 'NK Nafta 1903', s: 'NAF', c1: '#009A44', c2: '#FFFFFF', str: 54 },
    { n: 'Brinje Grosuplje', s: 'BRI', c1: '#E30613', c2: '#FFFFFF', str: 53 }
  ]
};

window.LEAGUES.georgia = {
  id: 'georgia', name: 'Erovnuli Liga', country: 'Georgia', tier: 1, uccl: 2, rel: 1,
  pool: 'ro', squadSize: 18, teams: [
    { n: 'Dinamo Tbilisi', s: 'DIN', c1: '#0033A0', c2: '#FFFFFF', str: 63, pool: 'turkic', p: [
      ['Giorgi Loria', 'GK', 64, 40], ['Aleksandre Kalandadze', 'RB', 62, 25], ['Nikoloz Ugrekhelidze', 'CB', 52, 23],
      ['Saba Kharebashvili', 'CB', 65, 18], ['Léo Santos', 'LB', 66, 23], ['Luka Tsulaia', 'DM', 64, 19],
      ['Giorgi Zaria', 'CM', 62, 29], ['Giorgi Kharaishvili', 'AM', 64, 30], ['Giorgi Gvasalia', 'RW', 61, 22],
      ['Halid Doltmurziev', 'ST', 61, 19], ['Mate Vatsadze', 'LW', 65, 38], ['Mikheli Makatsaria', 'GK', 59, 22],
      ['Mate Shatirishvili', 'CB', 57, 18], ['Nikoloz Ninua', 'CM', 57, 27], ['Numan Kurdić', 'LB', 60, 27],
      ['Jaba Kankava', 'DM', 58, 40], ['Rodrigo Ramos', 'ST', 59, 23], ['Nana-Kofi Donkor', 'RW', 59, 19]
     ] },
    { n: 'Dinamo Batumi', s: 'BAT', c1: '#003DA5', c2: '#FFFFFF', str: 60 },
    { n: 'Iberia 1999', s: 'IBE', c1: '#7B1A2B', c2: '#FFFFFF', str: 59 },
    { n: 'FC Rustavi', s: 'RUS', c1: '#FFD200', c2: '#000000', str: 57 },
    { n: 'Dila Gori', s: 'DIL', c1: '#003DA5', c2: '#FFD200', str: 56 },
    { n: 'Torpedo Kutaisi', s: 'TOR', c1: '#009A44', c2: '#FFFFFF', str: 56 },
    { n: 'Samgurali', s: 'SAM', c1: '#E30613', c2: '#FFFFFF', str: 55 },
    { n: 'FC Gagra', s: 'GAG', c1: '#003DA5', c2: '#FFFFFF', str: 54 },
    { n: 'FC Spaeri', s: 'SPA', c1: '#000000', c2: '#FFD200', str: 53 },
    { n: 'Meshakhte Tkibuli', s: 'MES', c1: '#E30613', c2: '#000000', str: 53 }
  ]
};

window.LEAGUES.albania = {
  id: 'albania', name: 'Kategoria Superiore', country: 'Albania', tier: 1, uccl: 2, rel: 3,
  pool: 'balk', squadSize: 18, teams: [
    { n: 'Skënderbeu', s: 'SKE', c1: '#E30613', c2: '#FFFFFF', str: 62, pool: 'ro', p: [
      ['Kristian Rroku', 'GK', 63, 23], ['Lucho Vásquez', 'RB', 64, 23], ['Marcos Ramos', 'CB', 63, 27],
      ['Elvis Prençi', 'CB', 62, 33], ['Andreas Gkertsos', 'LB', 62, 26], ['Mario Rabiu', 'DM', 61, 26],
      ['Yuri Merlim', 'CM', 62, 28], ['Erolind Krasniqi', 'AM', 61, 26], ['Ermir Rashica', 'RW', 64, 22],
      ['Ardit Nikaj', 'ST', 63, 23], ['Skerdi Xhixho', 'LW', 60, 21], ['Marco Alia', 'GK', 57, 26],
      ['Randy Dwumfour', 'CB', 56, 26], ['Rei Pecani', 'CM', 55, 24], ['Albi Doka', 'LB', 57, 29],
      ['Kosta Vangjeli', 'DM', 55, 26], ['Etienne Tare', 'ST', 60, 23], ['Foti Cucka', 'RW', 56, 23]
     ] },
    { n: 'Egnatia', s: 'EGN', c1: '#003DA5', c2: '#FFFFFF', str: 60 },
    { n: 'Vllaznia', s: 'VLL', c1: '#003DA5', c2: '#FFFFFF', str: 59 },
    { n: 'Partizani', s: 'PAR', c1: '#E30613', c2: '#FFFFFF', str: 58 },
    { n: 'KF Tirana', s: 'TIR', c1: '#003DA5', c2: '#FFFFFF', str: 58 },
    { n: 'Dinamo City', s: 'DIN', c1: '#003DA5', c2: '#FFFFFF', str: 57 },
    { n: 'Teuta Durrës', s: 'TEU', c1: '#003DA5', c2: '#FFFFFF', str: 56 },
    { n: 'Kukësi', s: 'KUK', c1: '#E30613', c2: '#003DA5', str: 56 },
    { n: 'Laçi', s: 'LAC', c1: '#009A44', c2: '#FFFFFF', str: 55 },
    { n: 'Bylis', s: 'BYL', c1: '#FFD200', c2: '#000000', str: 55 },
    { n: 'Flamurtari', s: 'FLA', c1: '#E30613', c2: '#000000', str: 54 },
    { n: 'Besa Kavajë', s: 'BES', c1: '#003DA5', c2: '#FFD200', str: 54 },
    { n: 'Apolonia Fier', s: 'APO', c1: '#003DA5', c2: '#FFFFFF', str: 53 },
    { n: 'Kastrioti', s: 'KAS', c1: '#E30613', c2: '#FFFFFF', str: 53 },
    { n: 'Lushnja', s: 'LUS', c1: '#E30613', c2: '#FFFFFF', str: 53 },
    { n: 'Pogradeci', s: 'POG', c1: '#003DA5', c2: '#FFFFFF', str: 53 },
    { n: 'Shkumbini', s: 'SHK', c1: '#009A44', c2: '#FFFFFF', str: 53 },
    { n: 'Tërbuni', s: 'TER', c1: '#003DA5', c2: '#E30613', str: 53 },
    { n: 'Tomori Berat', s: 'TOM', c1: '#E30613', c2: '#FFFFFF', str: 53 },
    { n: 'Besa Pejë', s: 'BSP', c1: '#003DA5', c2: '#FFD200', str: 53 }
  ]
};

window.LEAGUES.armenia = {
  id: 'armenia', name: 'Armenian Premier League', country: 'Armenia', tier: 1, uccl: 2, rel: 1,
  pool: 'ro', squadSize: 18, teams: [
    { n: 'Pyunik', s: 'PYU', c1: '#FFD100', c2: '#0033A0', str: 64, pool: 'turkic', p: [
      ['Henri Avagyan', 'GK', 63, 30], ['Arman Hovhannisyan', 'RB', 64, 33], ['James', 'CB', 65, 31],
      ['Juninho', 'CB', 63, 31], ['Mikhail Kovalenko', 'LB', 61, 31], ['Solomon Udo', 'DM', 64, 31],
      ['Artak Grigoryan', 'CM', 64, 39], ['José Caraballo', 'AM', 65, 30], ['Luka Juričić', 'RW', 65, 30],
      ['Edgar Malakyan', 'ST', 62, 36], ['João Paredes', 'LW', 62, 30], ['Sergey Mikaelyan', 'GK', 58, 24],
      ['Alemão', 'CB', 72, 34], ['Lucas Villela', 'CM', 57, 32], ['Taron Voskanyan', 'LB', 61, 33],
      ['Eugeniu Cociuc', 'DM', 61, 33], ['Yusuf Otubanjo', 'ST', 61, 34], ['Levon Petrosyan', 'RW', 61, 22]
     ] },
    { n: 'FC Noah', s: 'NOA', c1: '#D0021B', c2: '#FFFFFF', str: 63, pool: 'turkic', p: [
      ['Artyom Davidov', 'GK', 64, 19], ['Sergey Muradyan', 'RB', 65, 22], ['Guðmundur Þórarinsson', 'CB', 61, 34],
      ['Marcos Pedro', 'CB', 65, 25], ['Bryan Mendoza', 'LB', 63, 33], ['Artak Dashyan', 'DM', 63, 37],
      ['Robert Baghramyan', 'CM', 63, 24], ['Gustavo Sangaré', 'AM', 64, 30], ['Hélder Ferreira', 'RW', 61, 29],
      ['Gonçalo Gregório', 'ST', 63, 31], ['Matheus Aiás', 'LW', 66, 30], ['Ognjen Cancarević', 'GK', 58, 37],
      ['Hovhannes Hambardzumyan', 'CB', 60, 36], ['Martin Gambos', 'CM', 60, 28], ['Aleksander Miljković', 'LB', 58, 36],
      ['Gor Manvelyan', 'DM', 60, 24], ['Eraldo Çinari', 'ST', 57, 30], ['Artyom Avanesyan', 'RW', 61, 27]
     ] },
    { n: 'Ararat-Armenia', s: 'ARR', c1: '#E30613', c2: '#003DA5', str: 62 },
    { n: 'Alashkert', s: 'ALA', c1: '#FFD200', c2: '#000000', str: 60 },
    { n: 'Urartu', s: 'URA', c1: '#003DA5', c2: '#E30613', str: 59 },
    { n: 'FC Van', s: 'VAN', c1: '#E30613', c2: '#FFFFFF', str: 58 },
    { n: 'BKMA Yerevan', s: 'BKM', c1: '#009A44', c2: '#FFFFFF', str: 57 },
    { n: 'Gandzasar Kapan', s: 'GAN', c1: '#003DA5', c2: '#FFD200', str: 56 },
    { n: 'Ararat Yerevan', s: 'ARY', c1: '#E30613', c2: '#FFFFFF', str: 56 },
    { n: 'Shirak', s: 'SHI', c1: '#E30613', c2: '#000000', str: 55 },
    { n: 'FC Syunik', s: 'SYU', c1: '#009A44', c2: '#FFD200', str: 55 },
    { n: 'Sardarapat', s: 'SRD', c1: '#003DA5', c2: '#FFFFFF', str: 55 }
  ]
};

window.LEAGUES.irlanda = {
  id: 'irlanda', name: 'League of Ireland', country: 'Irlanda', tier: 1, uccl: 2, rel: 1,
  pool: 'en', squadSize: 18, teams: [
    { n: 'Shamrock Rovers', s: 'SHA', c1: '#009A44', c2: '#FFFFFF', str: 63, pool: 'en', p: [
      ['Edward McGinty', 'GK', 65, 27], ['Adam Matthews', 'RB', 60, 34], ['Enda Stevens', 'CB', 63, 36],
      ['Robert Lopes', 'CB', 62, 34], ['Lee Grace', 'LB', 63, 34], ['Dylan Watts', 'DM', 64, 29],
      ['Matt Healy', 'CM', 63, 24], ['Danny Mandroiu', 'AM', 63, 28], ['Aaron Greene', 'RW', 60, 36],
      ['Graham Burke', 'ST', 65, 33], ['Jake Mulraney', 'LW', 64, 30], ['Lee Steacy', 'GK', 55, 33],
      ['Dan Cleary', 'CB', 58, 30], ["Gary O'Neill", 'CM', 61, 31], ['Trevor Clarke', 'LB', 59, 28],
      ['Adam Brennan', 'DM', 57, 21], ['Rory Gaffney', 'ST', 59, 37], ['Michael Noonan', 'RW', 60, 18]
     ] },
    { n: 'Dundalk', s: 'DUN', c1: '#FFFFFF', c2: '#000000', str: 62, pool: 'en', p: [
      ['Enda Minogue', 'GK', 64, 24], ["Conor O'Keeffe", 'RB', 62, 33], ['Bobby Burns', 'CB', 64, 27],
      ['Mayowa Animasahun', 'CB', 60, 23], ['Harvey Warren', 'LB', 64, 22], ['Aodh Dervin', 'DM', 60, 27],
      ['Harry Groome', 'CM', 60, 25], ['Ronan Teahan', 'AM', 61, 22], ['Daryl Horgan', 'RW', 61, 34],
      ['Gbemi Arubi', 'ST', 65, 22], ['Leo Gaxha', 'LW', 61, 24], ['Peter Cherrie', 'GK', 61, 28],
      ['Luke Mulligan', 'CB', 56, 19], ['Shane Tracey', 'CM', 61, 20], ['Vinnie Leonard', 'LB', 56, 18],
      ['Keith Buckley', 'DM', 58, 34], ['Norman Garbett', 'ST', 59, 22], ['Eoin Kenny', 'RW', 57, 21]
     ] },
    { n: 'St Patrick\'s Athletic', s: 'STP', c1: '#E30613', c2: '#FFFFFF', str: 60 },
    { n: 'Bohemian FC', s: 'BOH', c1: '#E30613', c2: '#000000', str: 59 },
    { n: 'Derry City', s: 'DER', c1: '#E30613', c2: '#FFFFFF', str: 59 },
    { n: 'Shelbourne', s: 'SHE', c1: '#E30613', c2: '#FFFFFF', str: 58 },
    { n: 'Galway United', s: 'GAL', c1: '#7B1A2B', c2: '#FFFFFF', str: 57 },
    { n: 'Waterford', s: 'WAT', c1: '#003DA5', c2: '#FFFFFF', str: 57 },
    { n: 'Drogheda United', s: 'DRO', c1: '#E30613', c2: '#FFFFFF', str: 56 },
    { n: 'Sligo Rovers', s: 'SLI', c1: '#E30613', c2: '#FFFFFF', str: 56 }
  ]
};
