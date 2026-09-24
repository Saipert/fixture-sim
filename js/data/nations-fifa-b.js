/* =========================================================================
   SELECCIONES FIFA — AFC, CAF y OFC que faltaban
   Mismo criterio que el archivo anterior: identidad y valoración reales,
   jugadores reales donde se conocen y relleno marcado «genérico» en el resto.
   ========================================================================= */
window.NATIONS = window.NATIONS || [];
(function () {
  'use strict';
  var N = [

    /* ==================== AFC ==================== */
    {
      n: 'Tailandia', s: 'THA', conf: 'AFC', str: 56, c1: '#A51931', c2: '#2D2A4A', pool: 'sea', p: [
       ['Kampol Pathomakkakul', 'GK', 57, 34], ['Nattapong Sayriya', 'RB', 56, 34], ['Pansa Hemviboon', 'CB', 57, 36],
       ['Manuel Bihr', 'CB', 57, 33], ['Waris Choolthong', 'LB', 57, 22], ['Seksan Ratree', 'DM', 55, 23],
       ['Sarach Yooyen', 'CM', 58, 34], ['Kakana Khamyok', 'AM', 55, 22], ['Yotsakorn Burapha', 'RW', 59, 21],
       ['Teerasak Poeiphimai', 'ST', 55, 24], ['Jehhanafee Mamah', 'LW', 56, 21], ['Chatchai Budprom', 'GK', 51, 39],
       ['Oussama Thiangkham', 'CB', 53, 23], ['Narubadin Weerawatnodom', 'LB', 52, 32], ['Thossawat Limwannasathian', 'CM', 55, 33],
       ['Patrik Gustavsson', 'RW', 52, 25], ['Pichitchai Sienkrathok', 'ST', 54, 23], ['Adisorn Promrak', 'CB', 53, 33],
       ['Worachit Kanitsribampen', 'DM', 54, 29], ['Chawanwit Saelao', 'AM', 52, 22], ['Wanchai Jarunongkran', 'ST', 52, 30],
       ['Chaiyaphon Otton', 'RB', 54, 23], ['Picha Autra', 'LW', 54, 30], ['Korrakot Pipatnadda', 'GK', 49, 27],
       ['Pokklaw Anan', 'CM', 51, 35]
     ]
    },
    {
      n: 'Vietnam', s: 'VIE', conf: 'AFC', str: 58, c1: '#DA251D', c2: '#FFFF00', pool: 'sea', p: [
       ['Lê Giang Patrik', 'GK', 58, 34], ['Nguyễn Văn Vĩ', 'RB', 57, 28], ['Đinh Quang Kiệt', 'CB', 58, 19],
       ['Đoàn Văn Hậu', 'CB', 58, 27], ['Nguyễn Nhật Minh', 'LB', 59, 23], ['Lê Phạm Thành Long', 'DM', 58, 30],
       ['Đỗ Hoàng Hên', 'CM', 58, 32], ['Nguyễn Hoàng Đức', 'AM', 58, 28], ['Nguyễn Đình Bắc', 'RW', 57, 22],
       ['Nguyễn Xuân Son', 'ST', 59, 29], ['Nguyễn Tài Lộc', 'LW', 59, 32], ['Trần Trung Kiên', 'GK', 54, 23],
       ['Phạm Xuân Mạnh', 'CB', 56, 30], ['Khổng Minh Gia Bảo', 'LB', 57, 26], ['Nguyễn Hai Long', 'CM', 57, 26],
       ['Phạm Gia Hưng', 'RW', 56, 26], ['Nguyễn Trần Việt Cường', 'ST', 55, 26], ['Trương Tiến Anh', 'CB', 54, 27],
       ['Nguyễn Quang Hải', 'DM', 55, 29], ['Nguyễn Ngọc Mỹ', 'AM', 54, 22], ['Bùi Hoàng Việt Anh', 'ST', 54, 27],
       ['Nguyễn Thành Chung', 'RB', 55, 29], ['Phan Tuấn Tài', 'LW', 55, 25], ['Đặng Văn Lâm', 'GK', 51, 33],
       ['Lê Văn Đô', 'CM', 51, 25]
     ]
    },
    {
      n: 'Indonesia', s: 'IDN', conf: 'AFC', str: 55, c1: '#CE1126', c2: '#FFFFFF', pool: 'sea', p: [
       ['Nadeo Argawinata', 'GK', 56, 29], ['Brian Fatari', 'RB', 55, 27], ['Wahyu Prasetyo', 'CB', 52, 28],
       ['Jordi Amat', 'CB', 52, 34], ['Rizky Ridho', 'LB', 55, 25], ['Kadek Agung', 'DM', 56, 28],
       ['Beckham Putra', 'CM', 53, 25], ['Eliano Reijnders', 'AM', 53, 26], ['Mitchell Baker', 'RW', 54, 20],
       ['Egy Maulana Vikri', 'ST', 54, 26], ['Ragnar Oratmangoen', 'LW', 60, 28], ['Cahya Supriadi', 'GK', 51, 23],
       ['Sandy Walsh', 'CB', 52, 31], ['Dony Tri Pamungkas', 'LB', 49, 21], ['Saddil Ramdani', 'CM', 51, 27],
       ['Rizky Eka Pratama', 'RW', 51, 27], ['Jens Raven', 'ST', 53, 21], ['Shayne Pattynama', 'CB', 48, 28],
       ['Ivar Jenner', 'DM', 56, 22], ['Thom Haye', 'AM', 50, 31], ['Tim Geypens', 'ST', 49, 21],
       ['Justin Hubner', 'RB', 59, 23], ['Rayhan Hannan', 'LW', 50, 22], ['Muhammad Riyandi', 'GK', 47, 26],
       ['Marc Klok', 'CM', 46, 33]
     ]
    },
    {
      n: 'Malasia', s: 'MAS', conf: 'AFC', str: 57, c1: '#010066', c2: '#CC0001', pool: 'sea', p: [
       ['Azri Ghani', 'GK', 52, 27], ['Jimmy Raymond', 'RB', 56, 30], ['Ubaidullah Shamsul', 'CB', 52, 23],
       ['Alif Ahmad', 'CB', 55, 23], ['Rodney Celvin Akwensivie', 'LB', 52, 30], ['Wan Kuzain', 'DM', 53, 28],
       ['Ezequiel Agüero', 'CM', 54, 32], ['Endrick', 'AM', 84, 31], ['Hadi Fayyadh', 'RW', 52, 26],
       ['Fazrul Amir', 'ST', 54, 26], ['Mohamadou Sumareh', 'LW', 53, 32], ['Haziq Aiman', 'GK', 52, 21],
       ['Aysar Hadi', 'CB', 52, 23], ['Ibrahim Manusi', 'LB', 52, 25], ['Aliff Haiqal', 'CM', 52, 26],
       ['Engku Nur Shakir', 'RW', 52, 28], ['Paulo Josué', 'ST', 52, 37], ['V. Ruventhiran', 'CB', 52, 25],
       ['Daryl Sham', 'DM', 52, 24], ['Ziad El Basheer', 'AM', 52, 23], ['Haqimi Azim', 'ST', 52, 23],
       ['Faris Danish', 'RB', 52, 20], ['Syafiq Ahmad', 'LW', 52, 31], ['Rahadiazli Rahalim', 'GK', 52, 25],
       ['G. Pavithran', 'ST', 52, 21]
     ]
    },
    {
      n: 'Omán', s: 'OMA', conf: 'AFC', str: 59, c1: '#DB161B', c2: '#FFFFFF', pool: 'arab', p: [
       ['Ibrahim Al-Mukhaini', 'GK', 62, 29], ['Ghanim Al-Habashi', 'RB', 58, 28], ['Thani Al-Rushaidi', 'CB', 59, 31],
       ['Musab Al-Shaqsy', 'CB', 60, 26], ['Ahmed Al-Khamisi', 'LB', 62, 35], ['Arshad Al-Alawi', 'DM', 58, 26],
       ['Zahir Al-Aghbari', 'CM', 60, 27], ['Sultan Al-Marzouq', 'AM', 59, 22], ['Issam Al-Sabhi', 'RW', 59, 29],
       ['Mohammed Al-Ghafri', 'ST', 58, 29], ['Muhsen Al-Ghassani', 'LW', 59, 29], ['Faiz Al-Rushaidi', 'GK', 56, 38],
       ['Amjad Al-Harthi', 'CB', 57, 32], ['Khalid Al-Braiki', 'LB', 55, 33], ['Abdullah Fawaz', 'CM', 55, 30],
       ['Abdulrahman Al-Mushaifri', 'RW', 54, 28], ['Nayef Faraj', 'ST', 56, 24], ['Ali Al-Busaidi', 'CB', 55, 35],
       ['Ahed Al-Mashaiki', 'DM', 55, 23], ['Nasser Al-Rawahi', 'AM', 54, 25], ['Salaah Al-Yahyaei', 'ST', 55, 28],
       ['Mahmood Al-Mushaifri', 'RB', 55, 33], ['Harib Al-Saadi', 'LW', 58, 33], ['Bilal Al-Balushi', 'GK', 55, 30]
     ]
    },
    {
      n: 'Baréin', s: 'BHR', conf: 'AFC', str: 57, c1: '#CE1126', c2: '#FFFFFF', pool: 'arab', p: [
       ['Abdulkarim Fardan', 'GK', 56, 34], ['Amine Benaddi', 'RB', 58, 33], ['Waleed Al Hayam', 'CB', 57, 38],
       ['Hamad Al-Shamsan', 'CB', 58, 29], ['Vincent Emmanuel', 'LB', 56, 25], ['Sayed Dhiya Saeed', 'DM', 59, 34],
       ['Hussain Al-Eker', 'CM', 58, 25], ['Ali Madan', 'AM', 57, 31], ['Ismail Abdullatif', 'RW', 56, 40],
       ['Mahdi Abduljabbar', 'ST', 55, 35], ['Husain Abdulkarim', 'LW', 58, 24], ['Sayed Mohammed Jaffer', 'GK', 50, 41],
       ['Sayed Baqer', 'CB', 53, 32], ['Hazza Ali', 'LB', 55, 31], ['Mohamed Marhoon', 'CM', 53, 28],
       ['Mahmood Al-Moosawi', 'RW', 54, 22], ['Ali Haram', 'ST', 55, 38], ['Abdulla Al-Khulasi', 'CB', 53, 23],
       ['Ebrahim Al-Khattal', 'DM', 50, 26], ['Kamil Al-Aswad', 'AM', 52, 32], ['Jasim Al-Shaikh', 'ST', 54, 30],
       ['Ahmed Bughammar', 'RB', 50, 29], ['Ahmed Al-Sherooqi', 'LW', 54, 26], ['Ebrahim Lutfalla', 'GK', 51, 34],
       ['Mahdi Al-Humaidan', 'CM', 50, 33], ['Sayed Al-Wadaei', 'CM', 50, 18]
     ]
    },
    {
      n: 'Kuwait', s: 'KUW', conf: 'AFC', str: 58, c1: '#007A3D', c2: '#CE1126', pool: 'arab', p: [
       ['Khaled Al-Rashidi', 'GK', 58, 39], ['Fahad Al-Hajeri', 'RB', 58, 35], ['Hassan Al-Enezi', 'CB', 56, 26],
       ['Rashed Al-Dousari', 'CB', 57, 26], ['Muath Al-Dhefiri', 'LB', 56, 29], ['Redha Hani', 'DM', 58, 30],
       ['Fawaz Ayedh', 'CM', 59, 29], ['Athbi Shehab', 'AM', 60, 33], ['Yousef Nasser', 'RW', 59, 36],
       ['Eid Al-Rashidi', 'ST', 56, 27], ['Shabaib Al-Khaldi', 'LW', 59, 28], ['Saud Al-Hoshan', 'GK', 54, 26],
       ['Khaled Al-Fadhli', 'CB', 54, 24], ['Abdulwahab Al-Awadi', 'LB', 57, 24], ['Muath Al-Enezi', 'CM', 56, 23],
       ['Mohammad Daham', 'RW', 54, 26], ['Yousef Majed', 'ST', 54, 21], ['Mohammad Al-Sharifi', 'CB', 57, 22],
       ['Nasser Faleh', 'DM', 54, 27], ['Khaled Al-Mershed', 'AM', 57, 27], ['Jasem Al-Mutar', 'ST', 57, 20],
       ['Yousef Al-Haqan', 'RB', 55, 24], ['Abdullah Al-Garzaie', 'LW', 56, 18], ['Abdulrahman Al-Fadhli', 'GK', 54, 25]
     ]
    },
    {
      n: 'Palestina', s: 'PLE', conf: 'AFC', str: 57, c1: '#007A3D', c2: '#CE1126', pool: 'arab', p: [
       ['Abed Yassin', 'GK', 56, 22], ['Wajdi Nabhan', 'RB', 57, 25], ['Mohammed Saleh', 'CB', 57, 33],
       ['Musab Al-Battat', 'CB', 58, 33], ['Ahmed Taha', 'LB', 56, 25], ['Oday Kharoub', 'DM', 56, 33],
       ['Hamed Hamdan', 'CM', 59, 26], ['Abdelhadi Rashid', 'AM', 56, 21], ['Mohammed Balah', 'RW', 56, 33],
       ['Tamer Seyam', 'ST', 56, 34], ['Oday Dabbagh', 'LW', 56, 28], ['Rami Hamadeh', 'GK', 55, 32],
       ['Michel Termanini', 'CB', 53, 28], ['Emilio Saba', 'LB', 54, 25], ['Abada Baroud', 'CM', 55, 24],
       ['Gianni Touma', 'RW', 55, 27], ['Khaled Al-Nabris', 'ST', 55, 23], ['Khalid Abu El Haija', 'CB', 53, 21],
       ['Agustín Manzur', 'DM', 70, 26], ['Ameed Sawafta', 'AM', 51, 26], ['Zaid Qunbar', 'ST', 55, 24],
       ['Yaser Hamed', 'RB', 56, 29], ['Bader Mousa', 'LW', 55, 27], ['Mahdi Assi', 'GK', 51, 22],
       ['Sultan Abu Daken', 'CB', 50, 27], ['Moustafa Zeidan', 'CM', 71, 28], ['Adam Kaied', 'CM', 52, 24]
     ]
    },
    {
      n: 'Siria', s: 'SYR', conf: 'AFC', str: 63, c1: '#CE1126', c2: '#007A3D', pool: 'arab', p: [
       ['Ahmad Madania', 'GK', 63, 36], ['Omar Midani', 'RB', 61, 32], ['Khaled Kourdoghli', 'CB', 62, 29],
       ['Abdullah Al Shami', 'CB', 62, 32], ['Abdul Rahman Weiss', 'LB', 63, 28], ['Mohammed Osman', 'DM', 61, 32],
       ['Ahmed Ashkar', 'CM', 63, 30], ['Elmar Abraham', 'AM', 63, 27], ['Mahmoud Al-Mawas', 'RW', 65, 33],
       ['Alaa Al Dali', 'ST', 62, 29], ['Ammar Ramadan', 'LW', 65, 25], ['Shaher Al Shaker', 'GK', 59, 33],
       ['Abdulrazzak Al-Mohammad', 'CB', 60, 31], ['Ahmad Faqa', 'LB', 61, 23], ['Simon Amin', 'CM', 58, 29],
       ['Mahmoud Al Aswad', 'RW', 59, 23], ['Pablo Sabbag', 'ST', 72, 29], ['Zakaria Hannan', 'CB', 61, 29],
       ['Mohamad Al Sheikh', 'DM', 57, 25], ['Anas Dahan', 'ST', 57, 20], ['Ziad Ghanoum', 'RB', 57, 25],
       ['Mohammad Al Mustafa', 'LW', 57, 21], ['Maksim Sarraf', 'GK', 55, 21]
     ]
    },
    {
      n: 'Líbano', s: 'LBN', conf: 'AFC', str: 60, c1: '#ED1C24', c2: '#FFFFFF', pool: 'arab', p: [
       ['Mehdi Khalil', 'GK', 61, 35], ['Khalil Khamis', 'RB', 61, 31], ['Pedro Budib', 'CB', 59, 22],
       ['Nassar Nassar', 'CB', 60, 34], ['Hussein Zein', 'LB', 60, 31], ['Ali El Fadl', 'DM', 61, 23],
       ['Ali Tneich', 'CM', 61, 34], ['Mohamad Haidar', 'AM', 58, 37], ['Karim Darwich', 'RW', 58, 28],
       ['Omar Chaaban', 'ST', 58, 32], ['Leonardo Shahin', 'LW', 58, 23], ['Mostafa Matar', 'GK', 58, 31],
       ['Walid Shour', 'CB', 53, 30], ['Kassem El Zein', 'LB', 54, 36], ['Hasan Srour', 'CM', 56, 25],
       ['Ali Al Haj', 'RW', 57, 25], ['Austin Ayoubi', 'ST', 68, 25], ['Hasan Farhat', 'CB', 55, 22],
       ['Ahmad Kheir El Dine', 'DM', 57, 31], ['Gabriel Bitar', 'AM', 53, 28], ['Jimmy Kazan', 'ST', 57, 19],
       ['Hussein Sharafeddine', 'RB', 54, 29], ['Zein Farran', 'LW', 55, 27], ['Ali Sabeh', 'GK', 54, 32],
       ['Jihad Ayoub', 'CM', 53, 31], ['Mahdi Zein', 'CM', 55, 26]
     ]
    },
    {
      n: 'Corea del Norte', s: 'PRK', conf: 'AFC', str: 57, c1: '#024FA2', c2: '#ED1C27', pool: 'kr', p: [
       ['Kang Ju-hyok', 'GK', 59, 29], ['Kim Jin-hyok', 'RB', 57, 24], ['Jang Kuk-chol', 'CB', 55, 32],
       ['Jong Hwi-nam', 'CB', 59, 23], ['Choe Ryong-il', 'LB', 55, 22], ['Kye Tam', 'DM', 59, 26],
       ['Sin Kwang-nam', 'CM', 58, 23], ['Ra Myong-song', 'AM', 57, 23], ['Ri Kum-chol', 'RW', 57, 22],
       ['Kim Kuk-jin', 'ST', 58, 26], ['Ri Jo-guk', 'LW', 55, 24], ['Hong Kil-ryong', 'GK', 51, 21],
       ['Kim Yu-song', 'CB', 51, 23], ['Kim Sung-hye', 'LB', 51, 23], ['Kang Kuk-chol', 'CM', 53, 27],
       ['Ri Il-song', 'RW', 55, 22], ['Pak Kwang-hun', 'ST', 51, 29], ['Jong Kum-song', 'CB', 52, 29],
       ['Paek Chung-song', 'DM', 53, 26], ['Han Chung-guk', 'AM', 54, 24], ['Choe Kuk', 'ST', 51, 21],
       ['Ryang Kwang-myong', 'LW', 53, 23], ['Yu Kwang-jun', 'GK', 51, 26]
     ]
    },
    {
      n: 'Tayikistán', s: 'TJK', conf: 'AFC', str: 54, c1: '#CC0000', c2: '#006600', pool: 'turkic', p: [
       ['Rustam Yatimov', 'GK', 51, 28], ['Akhtam Nazarov', 'RB', 54, 34], ['Zoir Dzhuraboyev', 'CB', 56, 28],
       ['Vahdat Hanonov', 'CB', 54, 26], ['Tabrez Islomov', 'LB', 55, 28], ['Parvizdzhon Umarbayev', 'DM', 55, 32],
       ['Ehson Panjshanbe', 'CM', 54, 27], ['Amirbek Juraboev', 'AM', 56, 30], ['Shahrom Samiev', 'RW', 53, 25],
       ['Rustam Soirov', 'ST', 52, 24], ['Sheriddin Boboev', 'LW', 52, 27], ['Oleg Baklov', 'GK', 52, 32],
       ['Sodikjon Kurbonov', 'CB', 52, 23], ['Mekhrubon Karimov', 'LB', 50, 22], ['Mukhammadzhon Rakhimov', 'CM', 50, 28],
       ['Nuriddin Khamrokulov', 'RW', 51, 27], ['Daler Sharipov', 'ST', 50, 22], ['Alidzhon Karomatullozoda', 'CB', 48, 24],
       ['Shervoni Mabatshoev', 'DM', 50, 26], ['Alisher Dzhalilov', 'AM', 48, 33], ['Faridun Davlatov', 'ST', 47, 22],
       ['Daler Imomnazarov', 'RB', 48, 31], ['Rakhmatsho Rakhmatzoda', 'LW', 49, 22], ['Mukhriddin Khasanov', 'GK', 48, 24],
       ['Daler Azizov', 'GK', 49, 26], ['Muso Kakhorov', 'CB', 46, 19], ['Abdusamad Melikmurodov', 'CB', 46, 18]
     ]
    },
    {
      n: 'Turkmenistán', s: 'TKM', conf: 'AFC', str: 53, c1: '#28AE66', c2: '#FFFFFF', pool: 'turkic', p: [
       ['Rasul Çaryýew', 'GK', 52, 27], ['Zafar Babajanow', 'RB', 54, 39], ['Güýçmyrat Annagulyýew', 'CB', 54, 30],
       ['Mekan Saparow', 'CB', 52, 32], ['Abdy Bäşimow', 'LB', 55, 31], ['Ahmet Ataýew', 'DM', 52, 36],
       ['Teýmur Çaryýew', 'CM', 55, 26], ['Mirza Beknazarow', 'AM', 54, 26], ['Meýlis Diniýew', 'RW', 56, 26],
       ['Ýazgylyç Gurbanow', 'ST', 51, 29], ['Altymyrat Annadurdyýew', 'LW', 51, 33], ['Rüstem Ahallyýew', 'GK', 49, 24],
       ['Arzuwguly Sapargulýyew', 'CB', 52, 25], ['Welmyrat Ballakow', 'CM', 49, 27], ['Begenç Akmämmedow', 'RW', 49, 28],
       ['Didar Durdyýew', 'ST', 49, 33], ['Kakageldi Berdiýew', 'GK', 49, 22]
     ]
    },
    {
      n: 'Kirguistán', s: 'KGZ', conf: 'AFC', str: 56, c1: '#E8112D', c2: '#FFEF00', pool: 'turkic', p: [
       ['Erzhan Tokotayev', 'GK', 58, 26], ['Tamirlan Kozubaev', 'RB', 57, 32], ['Ermek Kenzhebayev', 'CB', 55, 23],
       ['Said Datsiev', 'CB', 54, 23], ['Arslan Bekberdinov', 'LB', 56, 27], ['Kayrat Zhyrgalbek uulu', 'DM', 58, 33],
       ['Odilzhon Abdurakhmanov', 'CM', 53, 30], ['Gulzhigit Alykulov', 'AM', 58, 26], ['Ernist Batyrkanov', 'RW', 57, 28],
       ['Kai Merk', 'ST', 56, 28], ['Gulzhigit Borubaev', 'LW', 55, 26], ['Kurmanbek Nurlanbekov', 'GK', 53, 22],
       ['Ulanbek Sulaymanov', 'CB', 52, 24], ['Valeriy Murzakov', 'LB', 51, 23], ['Alimardon Shukurov', 'CM', 49, 27],
       ['Beknaz Almazbekov', 'RW', 50, 21], ['Eldiyar Zarypbekov', 'ST', 49, 25], ['Kimi Merk', 'CB', 52, 22],
       ['Murolimzhon Akhmedov', 'DM', 51, 34], ['Erbol Atabayev', 'AM', 51, 25], ['Magomed Uzdenov', 'ST', 52, 32],
       ['Adil Kadyrzhanov', 'RB', 53, 26], ['Nurdoolot Stalbekov', 'LW', 51, 25], ['Artem Pryadkin', 'GK', 49, 25],
       ['Amir Zhaparov', 'CM', 50, 32], ['Bektur Kochkonbaev', 'CM', 49, 23]
     ]
    },
    {
      n: 'India', s: 'IND', conf: 'AFC', str: 51, c1: '#FF9933', c2: '#138808', pool: 'ind', p: [
       ['Gurpreet Singh Sandhu', 'GK', 52, 34], ['Anwar Ali', 'RB', 52, 26], ['Abhishek Singh Tekcham', 'CB', 54, 21],
       ['Hmingthanmawia Ralte', 'CB', 48, 26], ['Jay Gupta', 'LB', 49, 25], ['Anirudh Thapa', 'DM', 53, 28],
       ['Ashique Kuruniyan', 'CM', 52, 29], ['Farukh Choudhary', 'AM', 49, 30], ['Edmund Lalrindika', 'RW', 45, 27],
       ['Irfan Yadwad', 'ST', 55, 25], ['Manvir Singh Sr.', 'LW', 51, 31], ['Albino Gomes', 'GK', 59, 32],
       ['Akash Mishra', 'CB', 53, 25], ['Pramveer Singh', 'LB', 48, 19], ['Lalengmawia Ralte', 'CM', 59, 26],
       ['Rahim Ali', 'RW', 50, 26], ['Ryan Williams', 'ST', 63, 33], ['Bijoy Varghese', 'CB', 48, 26],
       ['Macarton Nickson', 'DM', 60, 22], ['Mohammed Sanan', 'AM', 45, 23], ['Vikram Partap Singh', 'ST', 50, 24],
       ['Ricky Meetei Haobam', 'RB', 49, 20], ['Ricky Shabong', 'LW', 46, 24], ['Prabhsukhan Singh Gill', 'GK', 53, 25],
       ['Som Kumar', 'GK', 48, 21], ['Sahal Abdul Samad', 'CM', 50, 29]
     ]
    },
    {
      n: 'Filipinas', s: 'PHI', conf: 'AFC', str: 58, c1: '#0038A8', c2: '#CE1126', pool: 'sea', p: [
       ['Quincy Kammeraad', 'GK', 58, 25], ['Adrian Ugelvik', 'RB', 59, 25], ['Angelo Brückner', 'CB', 56, 23],
       ['Noah Leddel', 'CB', 59, 23], ['Scott Woods Scott Woods', 'LB', 60, 26], ['Sandro Reyes', 'DM', 60, 23],
       ['Gavin Muens', 'CM', 56, 22], ['John Lucero', 'AM', 58, 23], ['André Leipold', 'RW', 60, 25],
       ['Jarvey Gayoso', 'ST', 60, 29], ['Martini Rey', 'LW', 56, 27], ['Enrico Mangaoang', 'GK', 54, 24],
       ['Jaime Rosquillo', 'CB', 56, 23], ['Michael Kempter', 'LB', 54, 31], ['Kenji Nishioka', 'CM', 54, 25],
       ['Andres Aldeguer', 'RW', 54, 23], ['Pocholo Bugas', 'ST', 54, 25], ['Daisuke Sato Daisuke Sato', 'CB', 56, 32],
       ['Oskari Kekkonen', 'DM', 55, 27], ['Cole Mrowka', 'AM', 54, 20], ['Rocket Ritarita', 'ST', 54, 19],
       ['Christian Rontini', 'RB', 54, 27], ['Aarran Long', 'LW', 54, 17], ['Patrick Deyto', 'GK', 54, 36],
       ['Santiago Rublico', 'CB', 54, 21], ['Javier Mariona', 'CM', 54, 22]
     ]
    },
    { n: 'Hong Kong', s: 'HKG', conf: 'AFC', str: 48, c1: '#DE2910', c2: '#FFFFFF', pool: 'cn', p: [
       ['Tse Ka Wing', 'GK', 41, 27], ['Yue Tze Nam', 'RB', 59, 28], ['Shinichi Chan', 'CB', 63, 24],
       ['Oliver Gerbig', 'CB', 55, 28], ['Tsui Wang Kit', 'LB', 43, 29], ['Wong Wai', 'DM', 43, 34],
       ['Tan Chun Lok', 'CM', 41, 30], ['Chan Siu Kwan', 'AM', 43, 34], ['Matt Orr', 'RW', 56, 29],
       ['Sun Ming Him', 'ST', 55, 26], ['Everton Camargo', 'LW', 42, 35], ['Pong Cheuk Hei', 'GK', 41, 22],
       ['Nicholas Benavides', 'CB', 41, 25], ['Vas Nuñez', 'LB', 41, 31], ['Juninho', 'CM', 41, 36],
       ['Michael Udebuluzor', 'RW', 41, 22], ['Poon Pui Hin', 'ST', 41, 26], ['Leung Nok Hang', 'CB', 41, 32],
       ['Ngan Cheuk Pan', 'DM', 41, 28], ['Wu Chun Ming', 'AM', 41, 29], ['Raphaël Merkies', 'ST', 46, 24],
       ['Li Ngai Hoi', 'RB', 41, 32], ['Chung Wai Keung', 'LW', 41, 31], ['Poon Sheung Hei', 'GK', 41, 20],
       ['Tuscany Shek', 'GK', 41, 19], ['Yip Ka Yu', 'GK', 41, 30], ['Alexander Jojo', 'CB', 49, 27]
     ] },
    { n: 'Singapur', s: 'SGP', conf: 'AFC', str: 55, c1: '#EF3340', c2: '#FFFFFF', pool: 'sea', p: [
       ['Izwan Mahbud', 'GK', 57, 36], ['Akram Azman', 'RB', 56, 26], ['Ryhan Stewart', 'CB', 52, 26],
       ['Amirul Adli', 'CB', 57, 30], ['Hariss Harun', 'LB', 54, 36], ['Saifullah Akbar', 'DM', 55, 27],
       ['Kyoga Nakamura', 'CM', 56, 30], ['Song Ui-young', 'AM', 55, 33], ['Nathan Mao', 'RW', 55, 18],
       ['Ilhan Fandi', 'ST', 54, 24], ['Shawal Anuar', 'LW', 54, 35], ['Syazwan Buhari', 'GK', 52, 34],
       ['Lionel Tan', 'CB', 52, 29], ['Irfan Fandi', 'LB', 52, 29], ['Shah Shahiran', 'CM', 52, 27],
       ['Luth Harith', 'RW', 52, 18], ['Nur Adam Abdullah', 'ST', 53, 25], ['Jacob Mahler', 'CB', 53, 26],
       ['Farhan Zulkifli', 'DM', 52, 24], ['Glenn Kweh', 'AM', 52, 26], ['Harhys Stewart', 'ST', 53, 25],
       ['Raoul Suhaimi', 'RB', 52, 21], ['Hami Syahin', 'LW', 52, 28], ['Ridhuan Barudin', 'GK', 52, 39],
       ['Joel Chew', 'CM', 52, 26]
     ] },
    { n: 'Myanmar', s: 'MYA', conf: 'AFC', str: 52, c1: '#FECB00', c2: '#EA2839', pool: 'sea', p: [
       ['Sann Satt Naing', 'GK', 52, 29], ['Hein Phyo Win', 'RB', 50, 28], ['Hein Ze Yar Lin', 'CB', 53, 26],
       ['Soe Moe Kyaw', 'CB', 53, 27], ['Nanda Kyaw', 'LB', 52, 30], ['Kyaw Min Oo', 'DM', 53, 30],
       ['Lwin Moe Aung', 'CM', 50, 27], ['Wai Lin Aung', 'AM', 51, 27], ['Than Paing', 'RW', 50, 30],
       ['Win Naing Tun', 'ST', 52, 26], ['Maung Maung Lwin', 'LW', 53, 31], ['Nay Lin Htet', 'GK', 50, 24],
       ['Zwe Khant Min', 'CB', 50, 26], ['Phyo Pyae Sone', 'LB', 50, 27], ['Aung Myo Khant', 'CM', 50, 25],
       ['Min Maw Oo', 'RW', 50, 21], ['Khun Kyaw Zin Hein', 'ST', 50, 24], ['Myat Phone Khant', 'CB', 50, 20],
       ['Myat Kaung Khant', 'DM', 50, 26], ['Ye Yint Aung', 'AM', 50, 26], ['Shine Wanna Aung', 'ST', 50, 20],
       ['Zaw Win Thein', 'RB', 50, 23], ['Hein Htet Aung', 'LW', 50, 25], ['Zin Nyi Nyi Aung', 'GK', 50, 26],
       ['Kaung Myat Nyein', 'CM', 50, 22], ['Saw Myo Zaw', 'ST', 50, 25]
     ] },
    { n: 'Camboya', s: 'CAM', conf: 'AFC', str: 45, c1: '#032EA1', c2: '#E00025', pool: 'sea', p: [
       ['Koy Salim', 'GK', 45, 24], ['Vann Vit', 'RB', 45, 23], ['Sophal Dimong', 'CB', 45, 25],
       ['Hikaru Mizuno', 'CB', 45, 35], ['Nu Chenmakara', 'LB', 47, 24], ['Alisher Mirzaev', 'DM', 45, 30],
       ['Yudai Ogawa', 'CM', 46, 30], ['Iago Bento', 'AM', 46, 27], ['Sieng Chanthea', 'RW', 45, 24],
       ['Mat Noron', 'ST', 45, 28], ['Mon Rado', 'LW', 45, 22], ['Reth Lyheng', 'GK', 45, 22],
       ['Tum Makara', 'CB', 45, 20], ['Ouk Sovann', 'LB', 45, 28], ['Bong Samuel', 'CM', 45, 21],
       ['Hav Soknet', 'RW', 45, 23], ['Yem Devit', 'ST', 45, 23], ['Phat Sokha', 'CB', 45, 23],
       ['Sos Suhana', 'DM', 45, 34], ['Sin Sovannmakara', 'AM', 45, 22], ['Sa Ty', 'ST', 45, 24],
       ['Im Vakhim', 'RB', 45, 23], ['Abdel Kader Coulibaly', 'LW', 45, 33], ['Hul Kimhuy', 'GK', 45, 26],
       ['Chea Sokmeng', 'CB', 45, 24], ['Mon Vanda', 'ST', 45, 29]
     ] },
    { n: 'Laos', s: 'LAO', conf: 'AFC', str: 51, c1: '#CE1126', c2: '#002868', pool: 'sea', p: [
       ['Kop Lokphathip', 'GK', 51, 20], ['Phoutthavong Sangvilay', 'RB', 52, 22], ['Sonevilay Phetviengsy', 'CB', 52, 22],
       ['Kaharn Phetsivilay', 'CB', 52, 28], ['Phetdavanh Somsanith', 'LB', 51, 22], ['Chanthavixay Khounthoumphone', 'DM', 51, 22],
       ['Sayfon Keohanam', 'CM', 51, 20], ['Damoth Thongkhamsavath', 'AM', 52, 22], ['Soukphachan Lueanthala', 'RW', 51, 24],
       ['Chony Waenpaseuth', 'ST', 51, 24], ['Kouaycheng Noophackde', 'LW', 51, 25], ['Keo-Oudone Souvannasangso', 'GK', 51, 26],
       ['Viengxay Sidavong', 'CB', 51, 30], ['Xayasith Singsavang', 'LB', 51, 26], ['Khonesavanh Keonuchanh', 'CM', 51, 22],
       ['Bounphachan Bounkong', 'RW', 51, 26], ['Bounchay Chernvanglien', 'ST', 51, 20], ['Bounphaeng Xaysombath', 'CB', 51, 21],
       ['Phayak Siphanom', 'DM', 51, 18], ['Somlith Sengvanny', 'AM', 51, 27], ['Phonsack Sisavath', 'ST', 51, 22],
       ['Vongsakda Chanthaleuxay', 'RB', 51, 22], ['Vilai Kulungsy', 'LW', 51, 26], ['Soulisack Souvankham', 'GK', 51, 19],
       ['Avilay Siphavanh', 'CB', 51, 21], ['Phahatxay Keomany', 'CB', 51, 20]
     ] },
    { n: 'Brunéi', s: 'BRU', conf: 'AFC', str: 40, c1: '#F7E017', c2: '#000000', pool: 'sea', p: [
       ['Haimie Abdullah Nyaring', 'GK', 40, 28], ['Afi Aminuddin', 'RB', 40, 35], ["Abdul Mu'iz Sisa", 'CB', 40, 35],
       ['Hibatur Rahman Mohamad', 'CB', 40, 26], ['Nurikhwan Othman', 'LB', 40, 33], ['Azwan Ali Rahman', 'DM', 40, 34],
       ['Nur Asyraffahmi Norsamri', 'CM', 40, 26], ['Haziq Kasyful Azim Hasimulabdillah', 'AM', 40, 28], ['Abdul Azim Abdul Rasid', 'RW', 40, 30],
       ['Nazirrudin Ismail', 'ST', 40, 28], ['Adi Said', 'LW', 40, 36], ['Ishyra Asmin Jabidi', 'GK', 40, 28],
       ['Martin Haddy Khallidden', 'CB', 40, 28], ['Hanif Hamir', 'LB', 40, 29], ['Faturrahman Embran', 'CM', 40, 27],
       ['Hariz Danial Khallidden', 'RW', 40, 30], ['Haziq Naqiuddin Syamra', 'ST', 40, 22], ['Nazry Aiman Azaman', 'CB', 40, 22],
       ['Abdul Hariz Herman', 'DM', 40, 26], ['Alinur Rashimy Jufri', 'AM', 40, 26], ['Hakeme Yazid Said', 'ST', 40, 23],
       ['Yura Indera Putera Yunos', 'RB', 40, 30], ['Jefri Syafiq Ishak', 'GK', 40, 24]
     ] },
    { n: 'Timor Oriental', s: 'TLS', conf: 'AFC', str: 45, c1: '#DC241F', c2: '#FFC726', pool: 'sea', p: [
       ['Dylan Niski', 'GK', 42, 26], ['Anizo Correia', 'RB', 42, 23], ['Liam Farrugia', 'CB', 42, 23],
       ['Ryan Jom', 'CB', 42, 21], ['Jackson Fowler', 'LB', 42, 22], ['Claudio Osorio', 'DM', 42, 24],
       ['Tiago', 'CM', 42, 27], ['Tristan Arrarte', 'AM', 42, 18], ['Luís Figo', 'RW', 42, 21],
       ['João Pedro', 'ST', 76, 28], ['Zenivio', 'LW', 42, 21], ['Alexandre Lima', 'GK', 42, 27],
       ['Eric Silva', 'CB', 42, 24], ['João Varudo', 'LB', 42, 34], ['Palomito Ribeiro', 'CM', 42, 21],
       ['Olagar Xavier', 'RW', 42, 23], ['Gali Freitas', 'ST', 42, 22], ['Juvito Moniz', 'CB', 42, 23],
       ['Vabio Canavaro', 'DM', 42, 19], ['Oatnasio da Silva', 'AM', 42, 20], ['Alexandro Bakhito', 'ST', 42, 20],
       ['Zion Cruz', 'LW', 42, 25], ['Egidio Lurio', 'GK', 42, 18]
     ] },
    { n: 'Taipéi Chino', s: 'TPE', conf: 'AFC', str: 50, c1: '#000095', c2: '#FE0000', pool: 'cn', p: [
       ['Huang Chiu-lin', 'GK', 50, 29], ['Christopher Tiao', 'RB', 49, 25], ['Jason Hsu', 'CB', 49, 24],
       ['Wang Ruei', 'CB', 49, 33], ['Huang Tzu-ming', 'LB', 49, 26], ['Tu Shao-chieh', 'DM', 50, 27],
       ['Emilio Estevez', 'CM', 50, 28], ['Wu Yen-shu', 'AM', 50, 27], ['Yu Yao-hsing', 'RW', 49, 24],
       ['Ange Kouamé', 'ST', 50, 30], ['Huang Wei-chieh', 'LW', 50, 22], ['Odo Jacobs', 'GK', 49, 22],
       ['William López', 'CB', 49, 33], ['Huang Chun-lin', 'LB', 49, 21], ['Hsu Po-chieh', 'CM', 49, 23],
       ['Li Kuan-yi', 'RW', 49, 22], ['Yang Chao-jing', 'ST', 49, 21], ['Martin Baudelet', 'CB', 49, 23],
       ['Kuo Po-wei', 'DM', 49, 28], ['Chen Po-liang', 'AM', 59, 38], ['Tsai Meng-cheng', 'ST', 49, 30],
       ['Lin Chen', 'RB', 49, 23], ['Tsai Shuo-che', 'GK', 49, 30]
     ] },
    { n: 'Macao', s: 'MAC', conf: 'AFC', str: 46, c1: '#00785E', c2: '#FFFFFF', pool: 'cn', p: [
       ['Ho Man Fai', 'GK', 46, 33], ['Marcos Cheong', 'RB', 46, 24], ['Amâncio', 'CB', 46, 36],
       ['Kam Chi Hou', 'CB', 46, 31], ['Xiao Rongrui', 'LB', 46, 24], ['Ng Wa Keng', 'DM', 46, 27],
       ['Si Hou In', 'CM', 46, 22], ['Dion Carlos Choi', 'AM', 46, 27], ['Gu Hoi Sou', 'RW', 46, 21],
       ['Leung Chi Seng', 'ST', 46, 26], ['Lei Cheng Lam', 'LW', 46, 21], ['Fong Chi Hang', 'GK', 46, 37],
       ['Chan Man', 'CB', 46, 33], ['Sou Hin Nang', 'LB', 46, 21], ['Ieong Lek Hang', 'CM', 46, 23],
       ['Ng Lai Teng', 'RW', 46, 22], ['Pang Chi Hang', 'ST', 46, 33], ['Lam Weng Kin', 'CB', 46, 20],
       ['Cheong Hoi San', 'DM', 46, 28], ['Nuno Jerónimo', 'AM', 46, 29], ['Ho Chi Fong', 'ST', 46, 32],
       ['Lei Wa Si', 'GK', 46, 26]
     ] },
    { n: 'Mongolia', s: 'MNG', conf: 'AFC', str: 52, c1: '#C4272F', c2: '#015197', pool: 'turkic', p: [
       ['Gan-Erdene Enkh-Erdene', 'GK', 52, 23], ['Mönkh-Orgil Orkhon', 'RB', 52, 27], ['Uuganbat Bat-Erdene', 'CB', 52, 29],
       ['Filip Chinzorig', 'CB', 52, 23], ['Tuguldur Batsukh', 'LB', 52, 22], ['Tsend-Ayuush Khürelbaatar', 'DM', 52, 36],
       ['Tögöldör Mönkh-Erdengiin', 'CM', 52, 35], ['Dölgöön Amaraa', 'AM', 52, 25], ['Temüülen Zayaat', 'RW', 52, 23],
       ['Usukh-Ireedui Baatar', 'ST', 52, 24], ['Sainbuyan Nergui', 'LW', 52, 24], ['Tsenguun Khandaa', 'GK', 52, 24],
       ['Taivankhuu Khürelbaatar', 'CB', 52, 29], ['Munkhkhuslen Munkhsaikhan', 'LB', 52, 24], ['Amgalanbat Batbaatar', 'CM', 52, 25],
       ['Gan-Erdene Erdenebat', 'RW', 52, 21], ['Enkh-Orgil Otgonbaatar', 'CB', 52, 28], ['Togoo Mönkhbaatar', 'DM', 52, 27],
       ['Tsogtbayar Batbayar', 'AM', 52, 25], ['Otgontsagaan Saikhanbayar', 'RB', 52, 25], ['Ariunbold Batsaikhan', 'GK', 52, 36]
     ] },
    { n: 'Afganistán', s: 'AFG', conf: 'AFC', str: 48, c1: '#000000', c2: '#D32011', pool: 'fa', p: [
       ['Faisal Hamidi', 'GK', 48, 29], ['Nawid Mahbobi', 'RB', 47, 18], ['Amid Arezou', 'CB', 48, 30],
       ['Mahboob Hanifi', 'CB', 48, 30], ['Ahmad Shekib Mehri', 'LB', 47, 20], ['Rahmat Akbari', 'DM', 50, 26],
       ['Hamed Mumand', 'CM', 50, 24], ['Ali Reza Panahi', 'AM', 46, 26], ['Mosawer Ahadi', 'RW', 48, 26],
       ['Roman Fazi', 'ST', 48, 27], ['Omid Musawi', 'LW', 47, 25], ['Ali Sina Hakimi', 'GK', 46, 21],
       ['Habibulla Askar', 'CB', 46, 27], ['Elias Mansor', 'LB', 46, 20], ['Amin Nabizada', 'CM', 46, 19],
       ['Maziar Kouhyar', 'RW', 61, 29], ['Yaser Safi', 'ST', 46, 18], ['Ali Rayez Muradi', 'CB', 46, 20],
       ['Sahil Sarwari', 'DM', 46, 17], ['Jamshed Asekzai', 'AM', 46, 29], ['Omid Popalzay', 'ST', 46, 30],
       ['Mustafa Omarkheil', 'RB', 46, 27], ['Keyvan Mottaghian', 'GK', 46, 23]
     ] },
    { n: 'Pakistán', s: 'PAK', conf: 'AFC', str: 53, c1: '#01411C', c2: '#FFFFFF', pool: 'ind', p: [
       ['Yousuf Butt', 'GK', 51, 37], ['Abdullah Iqbal', 'RB', 75, 24], ['Easah Suliman', 'CB', 51, 28],
       ['Abdullah Shah', 'CB', 51, 25], ['Mohib Ullah', 'LB', 51, 21], ['Alamgir Ghazi', 'DM', 51, 25],
       ['Hayyaan Khattak', 'CM', 51, 23], ['Ali Agha', 'AM', 51, 29], ['Shayak Dost', 'RW', 51, 24],
       ['Umar Nawaz', 'ST', 51, 19], ['Abdul Arshad', 'LW', 51, 23], ['Saqib Hanif', 'GK', 51, 32],
       ['Haris Zeb', 'CB', 51, 25], ['Mohammad Fazal', 'LB', 51, 24], ['Ali Zafar', 'CM', 51, 19],
       ['Syed Ali Raza', 'RW', 51, 22], ['Kaleemullah Khan', 'ST', 51, 34], ['Mamoon Moosa Khan', 'CB', 51, 26],
       ['Tufail Shinwari', 'DM', 51, 20], ['Ali Uzair', 'AM', 51, 30], ['Ali Khan', 'ST', 51, 25],
       ['Ali Khan Niazi', 'RB', 51, 26], ['Samad Khan Wazir', 'LW', 51, 28], ['Hassan Ali', 'GK', 51, 23],
       ['Zulqurnain Shinwari', 'GK', 51, 30], ['Abdul Rehman', 'CB', 51, 18], ['Waqar Baloch', 'CB', 51, 30]
     ] },
    { n: 'Bangladés', s: 'BAN', conf: 'AFC', str: 46, c1: '#006A4E', c2: '#F42A41', pool: 'ind', p: [
       ['Mitul Marma', 'GK', 46, 23], ['Tariq Kazi', 'RB', 46, 26], ['Topu Barman', 'CB', 46, 32],
       ['Zayyan Ahmed', 'CB', 46, 22], ['Md Shakil Ahad Topu', 'LB', 46, 20], ['Jamal Bhuyan', 'DM', 46, 36],
       ['Sohel Rana', 'CM', 47, 31], ['Md Sohel Rana', 'AM', 48, 30], ['Shekh Morsalin', 'RW', 46, 21],
       ['Fahamedul Islam', 'ST', 47, 20], ['Shahriar Emon', 'LW', 46, 25], ['Sujon Hossain', 'GK', 46, 30],
       ['Bishwanath Ghosh', 'CB', 46, 27], ['Md Saad Uddin', 'LB', 46, 28], ['Md Ridoy', 'CM', 46, 24],
       ['Foysal Ahmed Fahim', 'RW', 46, 24], ['Md Rafiqul Islam', 'ST', 46, 22], ['Rahmat Mia', 'CB', 46, 27],
       ['Hamza Choudhury', 'DM', 73, 29], ['Shamit Shome', 'AM', 46, 29], ['Rakib Hossain', 'ST', 46, 28],
       ['Abdullah Omar Sajib', 'RB', 46, 32], ['Mohammad Ibrahim', 'LW', 46, 29], ['Anisur Rahman Zico', 'GK', 46, 29],
       ['Saif Kerawala', 'GK', 46, 29], ['Mehedi Hasan Srabon', 'GK', 46, 21], ['Monjurur Rahman Manik', 'CB', 46, 30]
     ] },
    { n: 'Nepal', s: 'NEP', conf: 'AFC', str: 49, c1: '#DC143C', c2: '#003893', pool: 'ind', p: [
       ['Bishal Sunar', 'GK', 48, 24], ['Sanish Shrestha', 'RB', 49, 26], ['Suman Shrestha', 'CB', 49, 27],
       ['Ananta Tamang', 'CB', 48, 28], ['Bimal Panday', 'LB', 48, 36], ['Samyog Gurung', 'DM', 48, 19],
       ['Arik Bista', 'CM', 50, 26], ['Rohan Karki', 'AM', 48, 24], ['Gillespye Jung Karki', 'RW', 48, 28],
       ['Subash Bam Thakuri', 'ST', 49, 18], ['Anjan Bista', 'LW', 50, 28], ['Kiran Chemjong', 'GK', 48, 36],
       ['Sumit Shrestha', 'CB', 48, 22], ['Abhishek Limbu', 'LB', 48, 27], ['Laken Limbu', 'CM', 48, 24],
       ['Srijan Raj Gautam', 'RW', 48, 24], ['Ayush Ghalan', 'ST', 48, 22], ['Rohit Chand', 'CB', 48, 34],
       ['Kritish Ratna Chhunju', 'DM', 48, 23], ['Kushal Deuba', 'AM', 48, 20], ['Mani Kumar Lama', 'ST', 48, 30],
       ['Manish Dangi', 'RB', 48, 25], ['Deep Karki', 'GK', 48, 28]
     ] },
    { n: 'Sri Lanka', s: 'SRI', conf: 'AFC', str: 47, c1: '#8D153A', c2: '#FFBE29', pool: 'ind', p: [
       ['Sujan Perera', 'GK', 47, 34], ['Ayman Zawahir', 'RB', 47, 19], ['Mohammad Hasmeer', 'CB', 47, 27],
       ['Zahi Addis', 'CB', 47, 23], ['Jason Thayaparan', 'LB', 47, 31], ['Geremi Perera', 'DM', 47, 22],
       ['Leon Perera', 'CM', 47, 29], ['Adhavan Rajamohan', 'AM', 48, 33], ['Regize Canistan', 'RW', 47, 29],
       ['Sam Durrant', 'ST', 47, 24], ['Ahmed Waseem Razeek', 'LW', 47, 32], ['Mohamed Mursith', 'GK', 47, 25],
       ['Claudio Kammerknecht', 'CB', 69, 27], ['William Thomason', 'LB', 47, 24], ['Garrett Kelly', 'CM', 47, 30],
       ['Oliver Kelaart', 'RW', 47, 28], ['Wade Dekker', 'ST', 47, 32], ['Anujan Rajendram', 'CB', 47, 26],
       ['Niloshan Senthurvasan', 'DM', 47, 24], ['Dillon De Silva', 'AM', 47, 24], ['Rahul Suresh', 'ST', 47, 22],
       ['Barath Suresh', 'RB', 47, 23], ['Shafrath Nawas', 'LW', 47, 41], ['Kaveesh Lakpriya Fernando', 'GK', 47, 31],
       ['Steven Sacayaradjy', 'CB', 47, 29], ['Aman Faizer', 'CM', 47, 27], ['Mohamed Kursheeth', 'CM', 47, 27]
     ] },
    { n: 'Maldivas', s: 'MDV', conf: 'AFC', str: 53, c1: '#D21034', c2: '#007E3A', pool: 'ind', p: [
       ['Hussain Shareef', 'GK', 53, 28], ['Aihu', 'RB', 53, 28], ['Nashiu Ahmed Shiham', 'CB', 52, 28],
       ['Hassan Eenaaz', 'CB', 54, 26], ['Amdhan Ali', 'LB', 52, 34], ['Ibrahim Aisam', 'DM', 52, 29],
       ['Ahzam Rasheed', 'CM', 55, 19], ['Ibrahim Waheed Hassan', 'AM', 52, 31], ['Ali Fasir', 'RW', 52, 38],
       ['Abdulla Looth Ibrahim', 'ST', 55, 21], ['Hamza Mohamed', 'LW', 53, 31], ['Mohamed Faisal', 'GK', 52, 38],
       ['Haisham Hassan', 'CB', 52, 27], ['Thoif Gasim', 'LB', 52, 25], ['Fatho', 'CM', 52, 24],
       ['Ali Ashfaq', 'RW', 52, 41], ['Naiz Hassan', 'ST', 52, 30], ['Hussain Sifaau', 'CB', 52, 30],
       ['Nassah Ibrahim Nasir', 'DM', 52, 22], ['Ibrahim Mahudhee', 'AM', 52, 33], ['Mohamed Ilan Imran', 'ST', 52, 17],
       ['Ahmed Abdulla', 'RB', 52, 39], ['Mohamed Shafeeu', 'GK', 52, 38]
     ] },
    { n: 'Bután', s: 'BHU', conf: 'AFC', str: 41, c1: '#FFD520', c2: '#FF4E12', pool: 'ind', p: [
       ['Dendup Namgyel', 'GK', 41, 24], ['Yeshi Gyeltshen', 'RB', 41, 25], ['Sherub Dorji', 'CB', 41, 24],
       ['Tenzin Norbu', 'CB', 41, 25], ['Jignam Seltob Dorji', 'LB', 41, 20], ['Karma Chetrim', 'DM', 41, 23],
       ['Rinzin Dorji', 'CM', 41, 19], ['Phurba Tenzin', 'AM', 41, 27], ['Kinga Wangchuk', 'RW', 41, 24],
       ['Kelzang Jigme', 'ST', 41, 22], ['Kinzang Tenzin', 'LW', 41, 24], ['Tobgay', 'GK', 41, 28],
       ['Tenzin Dorji', 'CB', 41, 29], ['Kezang Dorji', 'LB', 41, 24], ['Orgyen Tshering', 'CM', 41, 27],
       ['Bikash Pradhan', 'RW', 41, 22], ['Nima Gyeltshen', 'ST', 41, 24], ['Jigdrel Wangchuk', 'CB', 41, 24],
       ['Pema Zangpo', 'DM', 41, 21], ['Nima Wangdi', 'AM', 41, 28], ['Tshelthrim Namgyel', 'ST', 41, 24],
       ['Kinzang Tashi Tobden', 'RB', 41, 21], ['Tenzin Dorji', 'GK', 41, 26]
     ] },
    { n: 'Yemen', s: 'YEM', conf: 'AFC', str: 53, c1: '#CE1126', c2: '#000000', pool: 'arab', p: [
       ['Abdullah Al-Saadi', 'GK', 53, 24], ['Amr Talal', 'RB', 56, 31], ['Nader Sahal', 'CB', 53, 36],
       ['Hamza Al-Rimi', 'CB', 51, 24], ['Emad Al-Godaimah', 'LB', 52, 23], ['Nasser Al-Gahwashi', 'DM', 53, 27],
       ['Nawaf Abdullah', 'CM', 54, 32], ['Mohammed Hashm Al-Najjar', 'AM', 52, 29], ['Omar Al-Dahy', 'RW', 54, 27],
       ['Abdulaziz Masnoum', 'ST', 55, 20], ['Abdul Majeed Sabarah', 'LW', 53, 26], ['Osama Haidar', 'GK', 50, 27],
       ['Rami Al-Wasmani', 'CB', 50, 29], ['Ali Al-Dugin', 'LB', 51, 23], ['Abdulwasea Al-Matari', 'CM', 50, 32],
       ['Gassem Al-Sharafi', 'RW', 50, 22], ['Osamah Anbar', 'ST', 50, 31], ['Radhawan Al-Hubaishi', 'CB', 50, 33],
       ['Adel Abbas Qasem', 'DM', 51, 18], ['Omar Al-Golan', 'AM', 50, 26], ['Anes Al-Maari', 'ST', 50, 26],
       ['Harwan Al-Zubaidi', 'RB', 50, 27], ['Mohammed Aman', 'GK', 50, 29]
     ] },
    { n: 'Guam', s: 'GUM', conf: 'AFC', str: 47, c1: '#003087', c2: '#BE0027', pool: 'oce', p: [
       ['John-Michael Guidroz', 'GK', 45, 22], ['Morgan McKenna', 'RB', 45, 23], ['Takumi Ito', 'CB', 45, 26],
       ['Kyle Halehale', 'CB', 45, 24], ['Leon Morimoto', 'LB', 45, 25], ['Joey Ciochetto', 'DM', 45, 30],
       ['Alec Taitague', 'CM', 45, 26], ['Jason Cunliffe', 'AM', 45, 43], ['James Gomez', 'RW', 65, 22],
       ['Oz Rocca', 'ST', 45, 22], ['Levi Berg', 'LW', 45, 18], ['Josiah Jones', 'GK', 45, 20],
       ['Anthony Quidachay', 'CB', 45, 24], ['Shane Healy', 'LB', 45, 28], ['Nainoa Norton', 'CM', 45, 22],
       ['Shuntaro Suzuki', 'RW', 45, 21], ['Daniel Glasscock', 'ST', 45, 22], ['Levi Buckwalter', 'CB', 45, 22],
       ['Nathan Sablan', 'DM', 45, 33], ['Jason Castro', 'AM', 45, 19], ['Marcus Lopez', 'ST', 45, 34],
       ['Isiah Lagutang', 'RB', 45, 29], ['Eddie Na', 'LW', 45, 30], ['Dallas Jaye', 'GK', 45, 33],
       ['Zaine Rocca', 'GK', 45, 19], ['Jonahan Romero', 'CB', 45, 38], ['Nate Lee', 'CB', 45, 32]
     ] },

    /* ==================== CAF ==================== */
    {
      n: 'Malí', s: 'MLI', conf: 'CAF', str: 69, c1: '#14B53A', c2: '#FCD116', pool: 'wafr', p: [
       ['Djigui Diarra', 'GK', 66, 31], ['Hamari Traoré', 'RB', 76, 34], ['Amadou Dante', 'CB', 65, 26],
       ['Ousmane Camara', 'CB', 66, 23], ['Nathan Gassama', 'LB', 67, 25], ['Lassana Coulibaly', 'DM', 71, 30],
       ['Amadou Haidara', 'CM', 74, 28], ['Aliou Dieng', 'AM', 66, 29], ['Dorgeles Nene', 'RW', 68, 24],
       ['Lassine Sinayoko', 'ST', 71, 27], ['El Bilal Touré', 'LW', 70, 25], ['Mamadou Samassa', 'GK', 69, 36],
       ['Modibo Sagnan', 'CB', 70, 27], ['Daouda Guindo', 'LB', 64, 24], ['Kamory Doumbia', 'CM', 71, 23],
       ['Gaoussou Diarra', 'RW', 69, 24], ['Moussa Sylla', 'ST', 70, 27], ['Cheick Keita', 'CB', 66, 23],
       ['Mamadou Sangaré', 'DM', 69, 24], ['Ousmane Diakité', 'AM', 65, 26], ['Alimami Gory', 'ST', 66, 30],
       ['Adama Camara', 'RB', 68, 30], ['Ange Martial Tia', 'LW', 57, 20], ['Emile Doucouré', 'GK', 59, 19],
       ["N'Golo Traoré", 'GK', 59, 27], ['Issa Djiguiba', 'CM', 58, 22]
     ]
    },
    {
      n: 'Burkina Faso', s: 'BFA', conf: 'CAF', str: 68, c1: '#EF2B2D', c2: '#009E49', pool: 'wafr', p: [
       ['Farid Ouédraogo', 'GK', 65, 30], ['Mohamed Ouédraogo', 'RB', 65, 23], ['Adamo Nagalo', 'CB', 71, 24],
       ['Cyril Dao', 'CB', 65, 21], ['Edmond Tapsoba', 'LB', 81, 27], ['Aboubacar Bassinga', 'DM', 62, 21],
       ['Mohamed Zougrana', 'CM', 65, 25], ['Lohann Doucet', 'AM', 68, 24], ['Dango Ouattara', 'RW', 77, 24],
       ['Ousseni Bouda', 'ST', 63, 26], ['Mohamed Konaté', 'LW', 68, 29], ['Hillel Konaté', 'GK', 62, 32],
       ['Rachide Gnanou', 'CB', 62, 22], ['Arthur Zagré', 'LB', 67, 25], ['Ismahila Ouédraogo', 'CM', 64, 27],
       ['Abdoul Tapsoba', 'RW', 64, 25], ['Georgi Minoungou', 'ST', 62, 24], ['Saïdou Simporé', 'CB', 63, 34],
       ['Gustavo Sangaré', 'DM', 63, 30], ['Arsène Kouassi', 'AM', 66, 22], ['Pierre Landry Kaboré', 'ST', 63, 25],
       ['Hanaby Hadalou Sagne', 'RB', 61, 26], ['Cyriaque Irié', 'LW', 70, 21], ['Kilian Nikiema', 'GK', 60, 23],
       ['Hervé Koffi', 'GK', 73, 30], ['Nasser Djiga', 'CB', 70, 24], ['Elohim Kaboré', 'ST', 62, 20]
     ]
    },
    {
      n: 'Guinea', s: 'GUI', conf: 'CAF', str: 67, c1: '#CE1126', c2: '#FCD116', pool: 'wafr', p: [
       ['Soumaïla Sylla', 'GK', 59, 22], ['Sekou Sylla', 'RB', 62, 27], ['Mory Konaté', 'CB', 70, 33],
       ['Mohamed Soumah', 'CB', 63, 23], ['Ibrahima Breze Fofana', 'LB', 63, 24], ['Morlaye Sylla', 'DM', 71, 28],
       ['Amadou Diawara', 'CM', 67, 29], ['Seydouba Cissé', 'AM', 72, 25], ['Ousmane Camara', 'RW', 68, 28],
       ['Thierno Barry', 'ST', 76, 26], ['Abdoul Karim Traoré', 'LW', 61, 19], ['Mussa Diallo', 'GK', 57, 26],
       ['Amadou Cissé', 'CB', 61, 20], ['Mohamed Cherif Haidara', 'LB', 60, 20], ['Lass Kourouma', 'CM', 57, 22],
       ['Ousmane Camara', 'RW', 68, 25], ['Abdoulaye Camara', 'ST', 62, 20], ['Ibrahima Sory Bangoura', 'DM', 69, 22],
       ['Ousmane Diabaté', 'AM', 57, 19], ['Mohamed Touré', 'ST', 67, 21], ['Gassimou Sylla', 'LW', 58, 18]
     ]
    },
    {
      n: 'Zambia', s: 'ZAM', conf: 'CAF', str: 61, c1: '#198A00', c2: '#EF7D00', pool: 'za', p: [
       ['Willard Mwanza', 'GK', 56, 29], ['Dominic Chanda', 'RB', 57, 30], ['Kondwani Chiboni', 'CB', 58, 30],
       ['Tinklar Sinkala', 'CB', 55, 25], ['Brian Chilimina', 'LB', 58, 29], ['Miguel Chaiwa', 'DM', 64, 22],
       ['Fredrick Mulambia', 'CM', 56, 24], ['Obino Chisala', 'AM', 55, 27], ['Fashion Sakala', 'RW', 79, 29],
       ['Patson Daka', 'ST', 76, 28], ['Albert Kangwanda', 'LW', 55, 27], ['Victor Chabu', 'GK', 55, 32],
       ['Fredrick Mwimanzi', 'CB', 54, 24], ['Owen Mwamba', 'LB', 55, 28], ['Owen Tembo', 'CM', 50, 31],
       ['Kingstone Mutandwa', 'RW', 67, 23], ['Pascal Phiri', 'ST', 54, 21], ['David Simukonda', 'CB', 52, 21],
       ['Wilson Chisala', 'DM', 53, 24], ['Kelvin Mwanza', 'AM', 52, 43], ['Chanka Zimba', 'ST', 53, 25],
       ['Given Kalusa', 'RB', 53, 23], ['Mangani Banda', 'GK', 51, 29]
     ]
    },
    {
      n: 'Angola', s: 'ANG', conf: 'CAF', str: 64, c1: '#CE1126', c2: '#000000', pool: 'cafr', p: [
       ['Neblú', 'GK', 62, 33], ['Jonathan Buatu', 'RB', 63, 33], ['Kialonda Gaspar', 'CB', 74, 29],
       ['Tó Carneiro', 'CB', 63, 31], ['Eddie Afonso', 'LB', 63, 32], ['Show', 'DM', 64, 27],
       ['Maestro', 'CM', 69, 23], ['Manuel Keliano', 'AM', 63, 23], ['Ary Papel', 'RW', 61, 32],
       ['Mabululu', 'ST', 63, 34], ['Felício Milson', 'LW', 65, 27], ['Hugo Marques', 'GK', 58, 40],
       ['Antonio Hossi', 'CB', 57, 25], ['David Carmo', 'LB', 76, 27], ['Randy Nteka', 'CM', 70, 29],
       ['Zini', 'RW', 58, 24], ['Chico Banza', 'ST', 60, 28], ['Pedro Bondo', 'CB', 66, 22],
       ['Mário Balbúrdia', 'DM', 59, 29], ['Fernandinho', 'AM', 57, 21], ['Depú', 'ST', 58, 26],
       ['Kinito', 'RB', 61, 28], ['Khaly', 'LW', 59, 23], ['Antonio Dominique', 'GK', 55, 32],
       ['Amorzinho', 'CM', 59, 26], ['Mabilson', 'CM', 58, 24]
     ]
    },
    {
      n: 'Uganda', s: 'UGA', conf: 'CAF', str: 62, c1: '#FCDC04', c2: '#000000', pool: 'eafr', p: [
       ['Denis Onyango', 'GK', 60, 41], ['Aziz Kayondo', 'RB', 61, 24], ['Gavin Kizito', 'CB', 59, 24],
       ['Toby Sibbick', 'CB', 73, 27], ['Rogers Torach', 'LB', 63, 23], ['Allan Okello', 'DM', 60, 26],
       ['Kenneth Semakula', 'CM', 60, 24], ['Travis Mutyaba', 'AM', 62, 21], ['Rogers Mato', 'RW', 62, 28],
       ['Steven Mukwala', 'ST', 60, 27], ['Denis Omedi', 'LW', 62, 30], ['David Lukwago', 'GK', 59, 24],
       ['Herbert Achayi', 'CB', 56, 27], ['Hilary Mukundane', 'LB', 57, 29], ['Baba Alhassan', 'CM', 71, 26],
       ['Richard Basangwa', 'RW', 59, 25], ['Frank Ssebuufu', 'ST', 56, 25], ['Nathan Asiimwe', 'CB', 67, 22],
       ['Allan Oyirwoth', 'DM', 57, 19], ['Noble Okello', 'AM', 58, 26], ['James Bogere', 'ST', 59, 18],
       ['Herbert Bockhorn', 'RB', 75, 31], ['Sadam Masereka', 'LW', 58, 22], ['Hannington Ssebwalunyo', 'GK', 54, 37],
       ['Geoffrey Lubanga', 'CB', 54, 30], ['Jonathan Odongo', 'CB', 54, 28], ['Joseph Seremba', 'CM', 53, 25]
     ]
    },
    {
      n: 'Kenia', s: 'KEN', conf: 'CAF', str: 58, c1: '#006600', c2: '#BB0000', pool: 'eafr', p: [
       ['Farouk Shikalo', 'GK', 58, 30], ['Frank Odhiambo', 'RB', 58, 24], ['Sydney Agina', 'CB', 58, 19],
       ['Sylvester Owino', 'CB', 60, 25], ['Alphonce Omija', 'LB', 56, 24], ['Richard Odada', 'DM', 58, 26],
       ['Austin Odhiambo', 'CM', 57, 27], ['William Wilson', 'AM', 58, 25], ['Mohammed Bajaber', 'RW', 57, 23],
       ['Sammy Henia-Kamau', 'ST', 59, 20], ['Lawrence Ouma', 'LW', 59, 21], ['Brian Bwire', 'GK', 53, 26],
       ['Erick Otieno', 'CB', 69, 30], ['Deon Woodman', 'LB', 53, 24], ['Chrispine Erambo', 'CM', 56, 22],
       ['Micah Obiero', 'RW', 57, 25], ['Ben Stanley Omondi', 'ST', 52, 22], ['Rooney Onyango', 'CB', 54, 25],
       ['Kelly Madada', 'DM', 56, 20], ['Amos Nondi', 'AM', 56, 27], ['Ryan Ogam', 'ST', 63, 22],
       ['Clarke Oduor', 'RB', 60, 27], ['Job Ochieng', 'LW', 54, 23], ['Caleb Kramer', 'GK', 51, 20],
       ['Bryne Odhiambo', 'GK', 51, 26], ['Stanley Wilson', 'CM', 51, 20], ['Zech Obiero', 'CM', 53, 21]
     ]
    },
    {
      n: 'Tanzania', s: 'TAN', conf: 'CAF', str: 57, c1: '#1EB53A', c2: '#00A3DD', pool: 'eafr', p: [
       ['Yonna Geoffrey', 'GK', 59, 27], ['Nickson Kibabage', 'RB', 55, 26], ['Lameck Lawi', 'CB', 56, 21],
       ['Nuru Twalib', 'CB', 58, 23], ['Bakari Mwamnyeto', 'LB', 55, 31], ['Haji Mnoga', 'DM', 64, 24],
       ['Feisal Salum', 'CM', 54, 28], ["Charles M'Mombwa", 'AM', 57, 28], ['Iddy Nado', 'RW', 56, 31],
       ['Paul Peter', 'ST', 55, 23], ['Kelvin John', 'LW', 57, 23], ['Zuberi Foba', 'GK', 54, 24],
       ['Mohamed Husseini', 'CB', 52, 30], ['Mohamed Mussa', 'LB', 54, 22], ['Morice Abraham', 'CM', 52, 23],
       ['Tarryn Allarakhia', 'RW', 54, 29], ['Selemani Mwalimu', 'ST', 52, 20], ['Ibrahim Hamad', 'CB', 52, 29],
       ['Kelvin Nashon', 'DM', 54, 26], ['Alphonce Msanga', 'AM', 55, 23], ['Bakari Msimu', 'ST', 51, 19],
       ['Novatus Miroshi', 'RB', 73, 24], ['Simon Msuva', 'LW', 54, 33], ['Aishi Manula', 'GK', 50, 31],
       ['Yona Amosi', 'GK', 50, 27], ['Mudathir Yahya', 'CM', 50, 31], ['Yusuf Kagoma', 'CM', 50, 30]
     ]
    },
    {
      n: 'Gabón', s: 'GAB', conf: 'CAF', str: 65, c1: '#009E60', c2: '#FCD116', pool: 'cafr', p: [
       ['François Bekale', 'GK', 65, 24], ['Oumar Bagnama', 'RB', 68, 25], ['Alex Moucketou-Moussounda', 'CB', 64, 26],
       ['Johann Obiang', 'CB', 65, 33], ['Mick Omfia', 'LB', 67, 26], ['Clench Loufilou', 'DM', 67, 27],
       ['Noha Lemina', 'CM', 65, 21], ['Meshak Babanzila', 'AM', 63, 25], ['David Sambissa', 'RW', 65, 30],
       ['Shavy Babicka', 'ST', 64, 26], ['Randy Essang-Matouti', 'LW', 67, 23], ['Loyce Mbaba', 'GK', 59, 28],
       ['Urie-Michel Mboula', 'CB', 70, 23], ["Yannis M'Bemba", 'LB', 59, 20], ['Guélor Kanga', 'CM', 63, 36],
       ['Didier Ndong', 'RW', 62, 32], ['Eric Bocoum', 'ST', 62, 30], ['Farhel Owanga', 'CB', 60, 21],
       ['Samaké Nzé Bagnama', 'DM', 60, 24], ['André Poko', 'AM', 62, 33], ['Teddy Averlant', 'ST', 60, 27],
       ['Jérémy Oyono', 'RB', 66, 25], ['Ben Jorcy Kabinambele', 'LW', 63, 21]
     ]
    },
    {
      n: 'Benín', s: 'BEN', conf: 'CAF', str: 61, c1: '#008751', c2: '#FCD116', pool: 'wafr', p: [
       ['Saturnin Allagbé', 'GK', 54, 33], ['Olivier Verdon', 'RB', 55, 31], ['Yohan Roche', 'CB', 67, 29],
       ['Mohamed Tijani', 'CB', 53, 29], ['Rachid Moumini', 'LB', 55, 22], ['Rodrigue Fassinou', 'DM', 56, 27],
       ['Junior Olaitan', 'CM', 68, 24], ['Dodo Dokou', 'AM', 55, 22], ['Jodel Dossou', 'RW', 54, 34],
       ['Steve Mounié', 'ST', 76, 32], ['Aiyegun Tosin', 'LW', 74, 28], ['Marcel Dandjinou', 'GK', 49, 28],
       ['Tamimou Ouorou', 'CB', 48, 23], ['Charlemagne Azongnitode', 'LB', 49, 25], ['Hassane Imourane', 'CM', 66, 23],
       ['Rodolfo Aloko', 'RW', 52, 20], ['Michel Boni', 'ST', 52, 18], ['Attidjikou Samadou', 'CB', 50, 22],
       ['Mattéo Ahlinvi', 'DM', 51, 27], ['Rodrigue Kossi', 'AM', 52, 27], ['Felipe Santos', 'ST', 51, 29],
       ['Gislain Ahoudo', 'RB', 52, 27], ['Prince Ricardo Dossou', 'LW', 52, 20], ['Serge Obassa', 'GK', 49, 30]
     ]
    },
    {
      n: 'Togo', s: 'TOG', conf: 'CAF', str: 63, c1: '#006A4E', c2: '#FFCE00', pool: 'wafr', p: [
       ['Malcolm Barcola', 'GK', 59, 27], ['Djené', 'RB', 57, 35], ['Loïc Bessilé', 'CB', 58, 27],
       ['Abdoul-Sabourh Bode', 'CB', 61, 31], ['Kennedy Boateng', 'LB', 60, 30], ['Dermane Karim', 'DM', 68, 23],
       ['Roger Aholou', 'CM', 60, 33], ['Kodjo Aziangbe', 'AM', 58, 23], ['Kodjo Fo-Doh Laba', 'RW', 76, 34],
       ['Kévin Denkey', 'ST', 76, 26], ['Mansour Ouro-Tagba', 'LW', 60, 22], ['Steven Mensah', 'GK', 56, 23],
       ['Steven Nador', 'CB', 63, 24], ['Josué Homawoo', 'LB', 66, 29], ['Sadik Fofana', 'CM', 64, 23],
       ['Charles Abi', 'RW', 57, 26], ['Idjessi Metsoko', 'ST', 57, 24], ['Izak Akakpo', 'CB', 53, 22],
       ['Faad Sana', 'DM', 56, 23], ['Yannis Lawson', 'AM', 65, 22], ['Pierre Nadjombe', 'RB', 62, 23],
       ['Fabrice Kagbatawouli', 'GK', 55, 24], ['Achirafou Yaya', 'GK', 54, 22]
     ]
    },
    {
      n: 'Sierra Leona', s: 'SLE', conf: 'CAF', str: 63, c1: '#1EB53A', c2: '#0072C6', pool: 'wafr', p: [
       ['Alhaji Sesay', 'GK', 64, 28], ['Ernest Koroma', 'RB', 62, 20], ['Alpha Turay', 'CB', 63, 21],
       ['Abdoulie Jarjue Kabia', 'CB', 62, 25], ['Juma Bah', 'LB', 61, 20], ['John Bilili Sesay', 'DM', 63, 19],
       ['Abu Dumbuya', 'CM', 65, 27], ['Momoh Kamara', 'AM', 63, 21], ['Mohamed Buya Turay', 'RW', 64, 31],
       ['Alhassan Koroma', 'ST', 62, 26], ['Samuel Gandi', 'LW', 62, 20], ['Francis Koroma', 'GK', 60, 26],
       ['Idris Kanu', 'CB', 67, 27], ['Daniel Kanu', 'LB', 68, 22], ['Kallum Cesay', 'CM', 62, 24],
       ['Yayah Kallon', 'RW', 60, 25], ['Mustapha Bundu', 'ST', 74, 29], ['Sallieu Tarawallie', 'CB', 62, 31],
       ['Saidu Bah Kamara', 'DM', 59, 24], ['Saidu Fofanah', 'AM', 59, 29], ['Sullay Kaikai', 'ST', 59, 31],
       ['Mohamed Fofanah', 'RB', 58, 21], ['Sampha Kamara', 'LW', 58, 38], ['Mohamed Kargbo', 'GK', 58, 21],
       ['Amadou Bakayoko', 'ST', 56, 30]
     ]
    },
    {
      n: 'Mauritania', s: 'MTN', conf: 'CAF', str: 58, c1: '#006233', c2: '#FFC400', pool: 'nafr', p: [
       ['Mamadou Diop', 'GK', 71, 26], ['Khadim Diaw', 'RB', 52, 28], ['Aly Abeid', 'CB', 66, 29],
       ['Lamine Ba', 'CB', 53, 29], ['Nouh Mohamed El Abd', 'LB', 55, 26], ['Maata Magassa', 'DM', 52, 23],
       ['Abdallahi Mahmoud', 'CM', 50, 26], ['Moctar Sidi El Hacen', 'AM', 53, 31], ['Aboubakary Koïta', 'RW', 77, 28],
       ['Souleymane Anne', 'ST', 53, 29], ['Pape Ndiaga Yade', 'LW', 53, 26], ['Abderrahmane Sarr', 'GK', 47, 21],
       ['Ibrahima Keita', 'CB', 48, 25], ['Jordan Lefort', 'LB', 75, 33], ['Sidi Bouna Amar', 'CM', 51, 28],
       ['Mamadou Diallo', 'RW', 56, 30], ['Djeidi Gassama', 'ST', 73, 23], ['Demine Saleck', 'CB', 50, 32],
       ['Beyatt Lekweiry', 'DM', 47, 21], ['Yacoub Sidi', 'AM', 47, 31], ['Idrissa Thiam', 'ST', 49, 26],
       ['Saïd Imigene', 'RB', 55, 21], ['Oumar Ngom', 'LW', 66, 22], ['Babacar Diop', 'GK', 47, 31],
       ['Guessouma Fofana', 'CM', 47, 34], ['Amar Haïdara', 'CM', 47, 23]
     ]
    },
    {
      n: 'Gambia', s: 'GAM', conf: 'CAF', str: 64, c1: '#CE1126', c2: '#0C1C8C', pool: 'wafr', p: [
       ['Baboucarr Gaye', 'GK', 59, 28], ['Omar Colley', 'RB', 59, 34], ['Sainey Sanyang', 'CB', 61, 23],
       ['Alagie Saine', 'CB', 60, 23], ['Yaya Bojang', 'LB', 59, 22], ['Ebou Adams', 'DM', 60, 30],
       ['Mahmudu Bajo', 'CM', 62, 22], ['Abubakr Barry', 'AM', 68, 26], ['Ebrima Colley', 'RW', 66, 26],
       ['Abdoulie Sanyang', 'ST', 67, 27], ['Yankuba Minteh', 'LW', 77, 22], ['Ebrima Jarju', 'GK', 58, 28],
       ['Tijan Sonha', 'CB', 57, 25], ['Abubacarr Sedi Kinteh', 'LB', 65, 20], ['Mouhamadou Drammeh', 'CM', 62, 27],
       ['Alieu Fadera', 'RW', 71, 25], ['Adama Sidibeh', 'ST', 59, 28], ['Elvin Mendy', 'CB', 54, 20],
       ['Jesper Ceesay', 'DM', 66, 23], ['Karamba Gassama', 'AM', 54, 21], ['Abdoulie Ceesay', 'ST', 65, 22],
       ['Adama Bojang', 'RB', 64, 22], ['Abdoulie Manneh', 'LW', 71, 22], ['Sheikh Sibi', 'GK', 52, 28],
       ['Suleiman Camara', 'ST', 66, 25], ['Salieu Drammeh', 'ST', 56, 23]
     ]
    },
    {
      n: 'Comoras', s: 'COM', conf: 'CAF', str: 59, c1: '#3A75C4', c2: '#FFD100', pool: 'cafr', p: [
       ['Salim Ben Boina', 'GK', 57, 35], ['Ismaël Boura', 'RB', 64, 26], ['Abdel-Hakim Abdallah', 'CB', 62, 29],
       ['Kenan Toibibou', 'CB', 57, 22], ['Ahmed Soilihi', 'LB', 55, 30], ['Iyad Mohamed', 'DM', 61, 25],
       ["Youssouf M'Changama", 'CM', 57, 36], ['Rémy Vita', 'AM', 64, 25], ['Faïz Selemani', 'RW', 56, 33],
       ['Aboubacar Ali', 'ST', 55, 20], ['Rafiki Saïd', 'LW', 65, 26], ['Yannick Pandor', 'GK', 51, 25],
       ['Yannis Kari', 'CB', 54, 26], ["Kassim M'Dahoma", 'LB', 50, 29], ['Benjaloud Youssouf', 'CM', 53, 32],
       ['Aymeric Ahmed', 'RW', 53, 23], ['Myziane Maolida', 'ST', 70, 27], ['Saïd Bakari', 'CB', 63, 32],
       ['Yacine Bourhane', 'DM', 52, 28], ['Raouf Mroivili', 'AM', 50, 27], ['Zaïd Amir', 'ST', 52, 24],
       ['Idris Mohamed', 'RB', 51, 23], ['El Fardou Ben Nabouhane', 'LW', 53, 37], ['Adel Anzimati', 'GK', 51, 25],
       ['Rayan Lutin', 'CM', 62, 23], ['Zaydou Youssouf', 'CM', 73, 27]
     ]
    },
    {
      n: 'Mozambique', s: 'MOZ', conf: 'CAF', str: 61, c1: '#007168', c2: '#FCE100', pool: 'cafr', p: [
       ['Ernan Siluane', 'GK', 61, 28], ['Bruno Langa', 'RB', 57, 29], ['Nené', 'CB', 59, 30],
       ['Edmilson Dove', 'CB', 57, 32], ['Fernando Chambuco', 'LB', 58, 28], ['Witi', 'DM', 57, 30],
       ['Geny Catamo', 'CM', 83, 25], ['Manuel Kambala', 'AM', 58, 35], ['Stanley Ratifo', 'RW', 57, 32],
       ['Dayo António', 'ST', 56, 31], ['Faisal Bangal', 'LW', 57, 31], ['José Guirrugo', 'GK', 55, 34],
       ['Diogo Calila', 'CB', 74, 28], ['Bruno Wilson', 'LB', 74, 30], ['Gildo Vilanculos', 'CM', 53, 31],
       ['Chamito', 'RW', 52, 22], ['Alcides Raice', 'ST', 57, 21], ['Oscar Cherene', 'CB', 56, 23],
       ['Guima', 'DM', 55, 31], ['Alfons Amade', 'AM', 56, 27], ['Valter Nhacussa', 'ST', 55, 24],
       ['Celton Janisse', 'RB', 54, 33], ['Candinho', 'LW', 54, 29], ['Kimiss Zavala', 'GK', 53, 22],
       ['Edson Mucuana', 'CM', 53, 23]
     ]
    },
    {
      n: 'Namibia', s: 'NAM', conf: 'CAF', str: 57, c1: '#003580', c2: '#009543', pool: 'za', p: [
       ['Lloyd Kazapua', 'GK', 57, 37], ['Riaan Hanamub', 'RB', 57, 31], ['Charles Hambira', 'CB', 55, 36],
       ['Ivan Kamberipa', 'CB', 56, 32], ['Ngero Katua', 'LB', 59, 25], ['Aprocius Petrus', 'DM', 56, 27],
       ['Dynamo Fredericks', 'CM', 57, 34], ['Paulus Amutenya', 'AM', 58, 24], ['Deon Hotto', 'RW', 58, 36],
       ['Willy Stephanus', 'ST', 57, 35], ['Peter Shalulile', 'LW', 55, 33], ['Edward Maova', 'GK', 52, 32],
       ['Sergio Damaseb', 'CB', 53, 26], ['Tyrese Hikupembe', 'LB', 53, 26], ['Prins Tjiueza', 'CM', 52, 24],
       ['Bethuel Muzeu', 'RW', 54, 26], ['Joslin Kamatuka', 'ST', 55, 35], ['Sisqo Haraseb', 'CB', 52, 25],
       ['Moses Shidolo', 'DM', 53, 28], ['Penda Mongudhi', 'AM', 52, 32], ['Elmo Kambindu', 'ST', 52, 33],
       ['Bonifasius Josef', 'RB', 52, 29], ['Isaskar Gurirab', 'LW', 52, 28], ['Kamaijanda Ndisiro', 'GK', 52, 27],
       ['Tuhafeni David', 'CB', 52, 25], ['Johannes Mutanga', 'CB', 52, 33], ['Leevi Alfeus', 'ST', 52, 25]
     ]
    },
    {
      n: 'Madagascar', s: 'MAD', conf: 'CAF', str: 54, c1: '#FC3D32', c2: '#007E3A', pool: 'cafr', p: [
       ['Michel Ramandimbisoa', 'GK', 47, 40], ['Thomas Fontaine', 'RB', 44, 35], ['Radoniaina Rabemanantsoa', 'CB', 47, 29],
       ['Sandro Trémoulet', 'CB', 47, 27], ['Louis Démoléon', 'LB', 48, 29], ['Andy Rakotondrajoa', 'DM', 47, 23],
       ['Rayan Raveloson', 'CM', 69, 29], ['Loïc Lapoussin', 'AM', 70, 30], ['Arnaud Randrianantenaina', 'RW', 45, 25],
       ['El Hadary Raheriniaina', 'ST', 47, 20], ['Hakim Abdallah', 'LW', 63, 28], ['Geordan Dupire', 'GK', 44, 33],
       ['Bono Rabearivelo', 'CB', 43, 19], ['Ehsan Kari', 'LB', 43, 24], ['Mamisoa Rakotoson', 'CM', 43, 23],
       ['Ryan Ponti', 'RW', 56, 28], ['Bryan Adinany', 'ST', 43, 26], ['Morgan Jean-Pierre', 'CB', 43, 34],
       ['Clément Couturier', 'DM', 44, 33], ["Johan N'Zi", 'AM', 43, 31], ['Nicolas Fontaine', 'ST', 43, 26],
       ['Mathieu Acapandié', 'RB', 43, 22], ['Behaja Tsirava', 'LW', 43, 19]
     ]
    },
    {
      n: 'Libia', s: 'LBY', conf: 'CAF', str: 58, c1: '#239E46', c2: '#000000', pool: 'nafr', p: [
       ['Murad Al-Wuheeshi', 'GK', 59, 29], ['Ali Youssef', 'RB', 57, 25], ['Muhanad Madyen', 'CB', 59, 32],
       ['Ibrahim Bourouis', 'CB', 58, 27], ['Moataz Al-Jurnazi', 'LB', 57, 24], ['Moatasem Al-Musrati', 'DM', 60, 30],
       ['Maruwan Al-Hbeishi', 'CM', 58, 23], ['Abdulmunem Okasha', 'AM', 56, 29], ['Ezoo El Maremi', 'RW', 57, 28],
       ['Ismael Tajouri-Shradi', 'ST', 61, 32], ['Mohamed Bawa', 'LW', 56, 22], ['Mohamed Darebi', 'GK', 55, 23],
       ['Jumaa Abu Raqiqah', 'CB', 57, 29], ['Saif Jaddour', 'LB', 54, 28], ['Amjed Al-Gsheim', 'CM', 56, 27],
       ['Ahmed Elmsmari', 'RW', 54, 20], ['Omar El-Harek', 'ST', 56, 20], ['Osamah Al-Shuraimi', 'DM', 56, 25],
       ['Farouk Al-Falith', 'AM', 52, 27], ['Jawad Rizq', 'GK', 51, 32]
     ]
    },
    {
      n: 'Zimbabue', s: 'ZIM', conf: 'CAF', str: 62, c1: '#006400', c2: '#FFD200', pool: 'za', p: [
       ['Elvis Chipezeze', 'GK', 55, 36], ['Divine Lunga', 'RB', 54, 31], ['Jordan Zemura', 'CB', 70, 27],
       ['Munashe Garananga', 'CB', 69, 25], ['Emmanuel Jalai', 'LB', 52, 27], ['Knowledge Musona', 'DM', 53, 36],
       ['Marvelous Nakamba', 'CM', 72, 32], ['Marshall Munetsi', 'AM', 76, 30], ['Tino Kadewere', 'RW', 53, 30],
       ['Tawanda Maswanhise', 'ST', 66, 24], ['Daniel Msendami', 'LW', 53, 26], ['Martin Mapisa', 'GK', 48, 28],
       ['Peter Muduhwa', 'CB', 52, 33], ['Brendan Galloway', 'LB', 66, 30], ['Tawanda Chirewa', 'CM', 64, 23],
       ['Bill Antonio', 'RW', 62, 24], ['Prince Dube', 'ST', 50, 29], ['Sean Fusire', 'CB', 49, 21],
       ['Andy Rinomhota', 'DM', 50, 29], ['Mongameli Tshuma', 'AM', 51, 25], ['Ishmael Wadi', 'ST', 50, 34],
       ['Kevin Moyo', 'RB', 48, 33], ['Junior Zindoga', 'LW', 49, 28], ['Nelson Chadya', 'GK', 47, 29],
       ['Marley Tavaziva', 'GK', 46, 22], ['Shane Maroodza', 'CB', 46, 22], ['Corbin Mthunzi', 'CB', 47, 19]
     ]
    },
    {
      n: 'Congo', s: 'CGO', conf: 'CAF', str: 62, c1: '#009543', c2: '#FBDE4A', pool: 'cafr', p: [
       ['Chelcy Bonazebi', 'GK', 64, 20], ['Béranger Itoua', 'RB', 61, 34], ['Prince Mouandza', 'CB', 63, 25],
       ['Romaric Etou', 'CB', 61, 31], ['Berlohd Mbemba', 'LB', 64, 24], ['Merveille Ndockyt', 'DM', 63, 28],
       ['Chandrel Massanga', 'CM', 59, 27], ['Gédéon Nongo', 'AM', 60, 19], ['Déo Bassinga', 'RW', 62, 21],
       ['Thievy Bifouma', 'ST', 62, 34], ['Dechan Moussavou', 'LW', 62, 20], ['Ulrich Samba', 'GK', 58, 25],
       ['Christ Makosso', 'CB', 72, 22], ['Charles Atipo', 'LB', 60, 27], ['Glid Otanga', 'CM', 60, 26],
       ['Wilfrid Nkaya', 'RW', 59, 27], ['Ismaël Ankobo', 'ST', 56, 29], ['John Kapaya', 'CB', 59, 23],
       ['Venold Dzaba', 'DM', 59, 28], ['Inno Loemba', 'AM', 56, 28], ['Mignon Koto', 'ST', 56, 27],
       ['Pachoud De Nzingoula', 'RB', 57, 24], ['Carly Ekongo', 'LW', 60, 21], ['Perrauld Ndinga', 'GK', 56, 27],
       ['Dericka Ossebi', 'CM', 54, 23], ['Junior Tchibinda', 'CM', 56, 24]
     ]
    },
    {
      n: 'Guinea Ecuatorial', s: 'EQG', conf: 'CAF', str: 63, c1: '#3E9A00', c2: '#E32118', pool: 'cafr', p: [
       ['Jesús Owono', 'GK', 61, 25], ['Basilio Ndong', 'RB', 60, 27], ['Esteban Obiang', 'CB', 59, 28],
       ['Saúl Coco', 'CB', 79, 27], ['Marvin Anieboh', 'LB', 61, 29], ['Pablo Ganet', 'DM', 63, 32],
       ['Santiago Eneme', 'CM', 63, 26], ['Jannick Buyla', 'AM', 63, 28], ['Luis Nlavo', 'RW', 63, 25],
       ['Dorian Jr.', 'ST', 60, 25], ['José Nabil Ondo', 'LW', 62, 21], ['Manuel Sapunga', 'GK', 55, 34],
       ['Charles Ondo', 'CB', 58, 23], ['José Elo', 'LB', 54, 26], ['José Machín', 'CM', 57, 30],
       ['Loren Zúñiga', 'RW', 57, 23], ['Cristian Makaté', 'ST', 62, 24], ['Roni Mbomio', 'CB', 55, 21],
       ['Álex Balboa', 'DM', 58, 25], ['Gael Joel Akogo', 'AM', 58, 23], ['Enrique Esono', 'ST', 58, 23],
       ['Javier Mum', 'RB', 56, 25], ['Omar Mascarell', 'LW', 78, 33], ['Miguel Ángel Nkogo', 'GK', 55, 21],
       ['Junior Bitá', 'CM', 54, 21]
     ]
    },
    {
      n: 'Ruanda', s: 'RWA', conf: 'CAF', str: 56, c1: '#00A1DE', c2: '#FAD201', pool: 'eafr', p: [
       ['Fiacre Ntwari', 'GK', 57, 27], ['Emmanuel Imanishimwe', 'RB', 54, 31], ['Ange Mutsinzi', 'CB', 56, 29],
       ['Gilbert Mugisha', 'CB', 58, 30], ['Claude Niyomugabo', 'LB', 53, 28], ['Djihad Bizimana', 'DM', 57, 30],
       ['Kevin Muhire', 'CM', 53, 28], ['Bonheur Mugisha', 'AM', 58, 26], ['Innocent Nshuti', 'RW', 58, 28],
       ['Abeddy Biramahire', 'ST', 55, 28], ['Joy-Lance Mickels', 'LW', 55, 32], ['Adolphe Hakizimana', 'GK', 53, 24],
       ['Jojea Kwizera', 'CB', 51, 27], ['Clement Niyigena', 'LB', 52, 25], ['Samuel Gueulette', 'CM', 70, 26],
       ['Joy-Slayd Mickels', 'RW', 51, 32], ['Taiba Mbonyumwami', 'ST', 51, 31], ['Phanuel Kavita', 'CB', 51, 33],
       ['Hakim Hamis', 'DM', 51, 27], ['Keddy Nsanzimfura', 'AM', 51, 23], ['Fidal Uwiyaremye', 'ST', 52, 25],
       ['Leroy-Jacques Mickels', 'RB', 51, 31], ['Gilbert Byiringiro', 'LW', 51, 26], ['Patience Niyongira', 'GK', 51, 26],
       ['Yves Mugisha', 'GK', 51, 23], ['Noam Emeran', 'CB', 67, 24], ['Darryl Nkulikiyimana', 'CB', 51, 21]
     ]
    },
    { n: 'Sudán', s: 'SDN', conf: 'CAF', str: 60, c1: '#D21034', c2: '#007229', pool: 'nafr', p: [
       ['Ali Abu Eshrein', 'GK', 59, 37], ['Mohamed Ering', 'RB', 59, 29], ['Altayeb Abdelrazeg', 'CB', 58, 35],
       ['Mustafa Karshoum', 'CB', 57, 34], ['Yaser Awad', 'LB', 58, 21], ['Abuaagla Abdalla', 'DM', 60, 33],
       ['Walieldin Khedr', 'CM', 62, 31], ['Abdel Raouf', 'AM', 61, 33], ['Yaser Muzmel', 'RW', 60, 34],
       ['Muhamed Abdelrahman', 'ST', 61, 33], ['John Mano', 'LW', 61, 25], ['Muhamed Alnour Abouja', 'GK', 54, 26],
       ['Bakhit Khamis', 'CB', 56, 34], ['Mazin Mohamedein', 'LB', 54, 26], ['Ammar Taifour', 'CM', 57, 29],
       ['Mohamed Eisa', 'RW', 57, 32], ['Abo Eisa', 'ST', 56, 30], ['Awad Zayed', 'CB', 57, 33],
       ['Salah Adel', 'DM', 55, 31], ['Muhamed Kesra', 'AM', 57, 30], ['Al-Jezoli Nouh', 'ST', 56, 24],
       ['Ahmed Tabanja', 'RB', 54, 26], ['Aamir Abdallah', 'LW', 58, 27], ['Munjed Alnil', 'GK', 54, 30],
       ['Sheddy Barglan', 'CB', 55, 24], ['Muhamed Tia Asad', 'ST', 54, 25]
     ] },
    { n: 'Etiopía', s: 'ETH', conf: 'CAF', str: 55, c1: '#078930', c2: '#FCDD09', pool: 'eafr', p: [
       ['Seid Habtamu', 'GK', 54, 28], ['Yared Bayeh', 'RB', 53, 31], ['Asrat Tunjo', 'CB', 56, 30],
       ['Mignot Debebe', 'CB', 54, 31], ['Yared Kassaye', 'LB', 52, 23], ['Gatoch Panom', 'DM', 57, 32],
       ['Wogene Gezahegn', 'CM', 55, 20], ['Biniam Ayten', 'AM', 54, 23], ['Chernet Gugesa', 'RW', 57, 27],
       ['Kenean Markneh', 'ST', 52, 28], ['Abel Yalew', 'LW', 57, 30], ['Abubeker Nura', 'GK', 52, 26],
       ['Ramkel James', 'CB', 52, 25], ['Abduselam Yusuf', 'LB', 51, 24], ['Habtamu Tekeste', 'CM', 51, 28],
       ['Mesfin Tafesse', 'RW', 51, 25], ['Abubeker Sani', 'ST', 52, 29], ['Alembirhan Yigzaw', 'CB', 51, 25],
       ['Biruk Endale', 'DM', 51, 26], ['Buzuayehu Seife', 'AM', 52, 31], ['Kebe Bizuneh', 'ST', 51, 23],
       ['Girum Hagos', 'RB', 51, 25], ['Firew Getahun', 'GK', 51, 34]
     ] },
    { n: 'Guinea-Bisáu', s: 'GNB', conf: 'CAF', str: 59, c1: '#CE1126', c2: '#FCD116', pool: 'wafr', p: [
       ['Manuel Baldé', 'GK', 53, 24], ['Sori Mané', 'RB', 57, 30], ['Opa Sanganté', 'CB', 67, 35],
       ['Iano Imbeni', 'CB', 54, 27], ['Braima Mané Piqué', 'LB', 53, 25], ['Bura Nogueira', 'DM', 55, 31],
       ['Carlos Mané', 'CM', 70, 32], ['Panutche Camará', 'AM', 62, 29], ['Mauro Rodrigues', 'RW', 54, 25],
       ['Tamble Monteiro', 'ST', 54, 26], ['Elves Baldé', 'LW', 63, 27], ['Aureliano Lopes Martins', 'GK', 48, 31],
       ['Etivaldo Mendes', 'CB', 49, 21], ['Henry M. Lamine', 'LB', 52, 21], ['Renato Nhaga', 'CM', 56, 19],
       ['Álvaro Djaló', 'RW', 52, 27], ['Flávio Silva', 'ST', 52, 30], ['José Jo', 'CB', 50, 21],
       ['Edson Silva', 'DM', 52, 25], ['Fuscano Gomes', 'AM', 49, 21], ['Alassan Manjam', 'ST', 48, 24],
       ['Leo Mendes', 'GK', 47, 26]
     ] },
    { n: 'Níger', s: 'NIG', conf: 'CAF', str: 57, c1: '#E05206', c2: '#0DB02B', pool: 'wafr', p: [
       ['Mahamadou Tanja', 'GK', 54, 30], ['Abdoulaye Boureima Katkoré', 'RB', 58, 33], ['Abdoul Garba', 'CB', 56, 26],
       ['Rahim Alhassane', 'CB', 73, 24], ['David Lebne', 'LB', 55, 37], ['Youssouf Oumarou', 'DM', 57, 33],
       ['Ali Mohamed', 'CM', 58, 31], ['Abdoul Madjid Moumouni', 'AM', 58, 32], ['Daniel Sosah', 'RW', 57, 28],
       ['Issa Djibrilla', 'ST', 55, 30], ['Kairou Amoustapha', 'LW', 55, 25], ['Yahaya Babari', 'GK', 52, 33],
       ['Oumar Sako', 'CB', 50, 30], ['Abraham Adamou Gora', 'LB', 51, 24], ['Ousseini Badamassi', 'CM', 54, 29],
       ['Chamsoudine Loukoumane', 'RW', 55, 28], ['Abdoul Jalil Mamane', 'ST', 51, 30], ['Mohamed Abdourahmane', 'CB', 51, 24],
       ['Hassane Harouna Moussa', 'DM', 54, 21], ['Abdoul Latif Djibril', 'AM', 53, 21], ['Zakariyaou Ibrahim', 'ST', 54, 21],
       ['Aboubacar Camara', 'RB', 65, 24]
     ] },
    { n: 'Liberia', s: 'LBR', conf: 'CAF', str: 54, c1: '#BF0A30', c2: '#002868', pool: 'wafr', p: [
       ['Tommy Songo', 'GK', 47, 31], ['Sampson Dweh', 'RB', 75, 25], ['Prince Balde', 'CB', 45, 28],
       ['Sebastien Teclay', 'CB', 45, 26], ['Mark Pabai', 'LB', 45, 26], ['Oscar Dorley', 'DM', 78, 28],
       ['Divine Teah', 'CM', 62, 20], ['Solomon Tweh', 'AM', 48, 22], ['Edward Ledlum', 'RW', 45, 27],
       ['Peter Wilson', 'ST', 45, 30], ['Sulahmana Bah', 'LW', 46, 25], ['Ashley Williams', 'GK', 45, 26],
       ['Natus Swen', 'CB', 45, 22], ['Nelson Laomie', 'LB', 45, 21], ['Sheikh Sesay', 'CM', 45, 24],
       ['Jimmy Farkarlun', 'RW', 50, 25], ['Emmanuel Flomo', 'ST', 45, 19], ['Emmanuel Fully', 'CB', 45, 20],
       ['Jegbay Konneh', 'DM', 45, 23], ['Emmanuel Gono', 'ST', 45, 21], ['Tito Yormie', 'RB', 45, 24],
       ['Prince Martor Jr.', 'LW', 45, 19], ['Junior Yeanaye', 'GK', 45, 22], ['Amos Wesseh', 'GK', 45, 26]
     ] },
    { n: 'Malaui', s: 'MWI', conf: 'CAF', str: 56, c1: '#000000', c2: '#CE1126', pool: 'za', p: [
       ['George Chikooka', 'GK', 55, 29], ['Charles Petro', 'RB', 69, 25], ['Gomezgani Chirwa', 'CB', 56, 30],
       ['McDonald Lameck', 'CB', 54, 28], ['Maxwell Paipi', 'LB', 57, 25], ['Lloyd Aaron', 'DM', 55, 23],
       ['Wisdom Mpinganjira', 'CM', 58, 24], ['Lloyd Njaliwa', 'AM', 54, 28], ['Richard Mbulu', 'RW', 54, 32],
       ['Chawanangwa Kawonga', 'ST', 56, 31], ['Patrick Mwaungulu', 'LW', 56, 24], ['William Thole', 'GK', 51, 28],
       ['Nickson Nyasulu', 'CB', 53, 28], ['Emmanuel Nyirenda', 'LB', 51, 26], ['Robert Saizi', 'CM', 51, 23],
       ['Chikumbutso Salima', 'RW', 53, 23], ['Mayele Malango', 'ST', 51, 29], ['Chawanangwa Gumbo', 'CB', 51, 24],
       ['Gaddie Chirwa', 'DM', 53, 29], ['Yankho Singo', 'AM', 51, 26], ['Babatunde Adepoju', 'ST', 52, 31],
       ['Festus Duwe', 'RB', 53, 23], ['Ephraim Kondowe', 'LW', 52, 24], ['Joshua Waka', 'GK', 51, 22],
       ['Mwisho Mhango', 'CM', 51, 19]
     ] },
    { n: 'Botsuana', s: 'BOT', conf: 'CAF', str: 53, c1: '#75AADB', c2: '#000000', pool: 'za', p: [
       ['Goitseone Phoko', 'GK', 53, 32], ['Tebogo Kopelang', 'RB', 55, 26], ['Tlamelo Kolagano', 'CB', 55, 25],
       ['Botsile Sakana', 'CB', 52, 25], ['Thabo Babutsi', 'LB', 52, 26], ['Monty Enosa', 'DM', 52, 22],
       ['Omphile Ramoagi', 'CM', 51, 22], ['Theo Shadikong', 'AM', 52, 24], ['Godfrey Tauyatswala', 'RW', 51, 25],
       ['Eric Ookame', 'ST', 55, 25], ['Oarabile Sekwai', 'LW', 56, 28], ['Thabo Motswagole', 'GK', 50, 26],
       ['Ricky Ratlhogo', 'CB', 50, 26], ['Thato Mosweunyane', 'LB', 50, 23], ['Philip Kaku', 'CM', 50, 21],
       ['Tshepho Keselebale', 'RW', 50, 25], ['Losika Ratshukudu', 'ST', 51, 20], ['Larona Modisaemang', 'CB', 51, 25],
       ['Kamogelo Moloi', 'DM', 50, 20], ['Nonofo Dikutu', 'AM', 50, 23], ['Boikobo Matakule', 'ST', 51, 22],
       ['Floyd Motheo', 'RB', 52, 23], ['Kgotso Radithongwa', 'LW', 50, 22], ['Cedric Ramojela', 'GK', 50, 24],
       ['Utlwang Ramakgathi', 'CB', 50, 29], ['Keitumetse Samunzala', 'CM', 50, 20]
     ] },
    { n: 'Burundi', s: 'BDI', conf: 'CAF', str: 56, c1: '#CE1126', c2: '#1EB53A', pool: 'eafr', p: [
       ['Jonathan Nahimana', 'GK', 48, 27], ['Kevin Icoyitungiye', 'RB', 50, 22], ['Omar Moussa', 'CB', 50, 29],
       ['Claus Niyukuri', 'CB', 68, 26], ['Christophe Nduwarugira', 'LB', 48, 32], ['Youssouf Ndayishimiye', 'DM', 80, 28],
       ['Saidi Ntibazonkiza', 'CM', 49, 39], ['Aaron Musore', 'AM', 51, 27], ['Cédric Amissi', 'RW', 49, 36],
       ['Jordi Liongola', 'ST', 71, 26], ['Bonfils-Caleb Bimenyimana', 'LW', 48, 29], ['Onésime Rukundo', 'GK', 48, 27],
       ['Akbar Muderi', 'CB', 48, 23], ['Derrick Mukombozi', 'LB', 48, 27], ['Henry Msanga', 'CM', 48, 25],
       ['Bienvenue Kanakimana', 'RW', 48, 27], ['Jean-Claude Girumugisha', 'ST', 48, 22], ['Djuma Nzeyimana', 'CB', 48, 26],
       ['Abdoul Karim Mpawenimana', 'DM', 48, 24], ['Leonard Gakwaya', 'AM', 48, 24], ['Vancy Mabanza', 'ST', 48, 26],
       ['Mossi Nduwumwe', 'RB', 48, 23], ['Franck Nduwimana', 'LW', 48, 24], ['Daniel Hakizimana', 'GK', 48, 25],
       ['Emanuel Swedi', 'CM', 48, 23]
     ] },
    { n: 'Lesoto', s: 'LES', conf: 'CAF', str: 53, c1: '#00209F', c2: '#009543', pool: 'za', p: [
       ['Sekhoane Moerane', 'GK', 56, 29], ['Rethabile Rasethuntsa', 'RB', 54, 32], ['Motlomelo Mkhwanazi', 'CB', 55, 32],
       ['Thabang Malane', 'CB', 54, 29], ['Rethabile Mokokoane', 'LB', 55, 30], ['Tsepo Toloane', 'DM', 51, 29],
       ['Lisema Lebokollane', 'CM', 53, 33], ['Lehlohonolo Fothoane', 'AM', 52, 29], ['Hlompho Kalake', 'RW', 52, 32],
       ['Neo Mokhachane', 'ST', 52, 30], ['Katleho Makateng', 'LW', 52, 28], ['Tankiso Chaba', 'GK', 52, 31],
       ['Thabo Makhele', 'CB', 50, 32], ['Lehlohonolo Matsau', 'LB', 50, 29], ['Tshwarelo Bereng', 'CM', 51, 36],
       ['Lemohang Lintša', 'RW', 50, 34], ['Mohlomi Makhetha', 'ST', 50, 26], ['Thato Sefoli', 'CB', 51, 31],
       ['Thabo Matšoele', 'DM', 50, 33], ['Mokoteli Mohapi', 'AM', 50, 28], ['Keketso Snyder', 'ST', 50, 36],
       ['Fusi Matlabe', 'RB', 51, 26], ['Sera Motebang', 'LW', 50, 31], ['Nthebe Majoro', 'GK', 50, 28],
       ['Ntsane Molise', 'GK', 50, 32], ['Thabo Mafatle', 'CB', 50, 30], ['Mpho Hlephole', 'CB', 50, 32]
     ] },
    { n: 'Esuatini', s: 'SWZ', conf: 'CAF', str: 49, c1: '#3E5EB9', c2: '#FFD900', pool: 'za', p: [
       ['Xolani Gama', 'GK', 47, 27], ['Siphephelo Newman Philiso', 'RB', 47, 23], ['Kwakhe Thwala', 'CB', 50, 24],
       ['Thando Langa', 'CB', 50, 27], ['Gift Gamedze', 'LB', 47, 27], ['Neliswa Senzo Dlamini', 'DM', 48, 24],
       ['Innocent Dlamini', 'CM', 50, 28], ['Felix Badenhorst', 'AM', 50, 37], ['Mayibongwe Mabuza', 'RW', 51, 33],
       ['Justice Figuareido', 'ST', 47, 28], ['Sambulo Simelane', 'LW', 50, 25], ['Bongiswa Dlamini', 'GK', 47, 25],
       ['Simanga Masangane', 'CB', 47, 29], ['Mpendulo Lungelo Tfomo', 'LB', 47, 26], ['Philani Mkhontfo', 'CM', 47, 31],
       ['Sabelo Ndzinisa', 'RW', 47, 35], ['Fanelo Mamba', 'ST', 47, 25], ['Mzwandile Mabelesa', 'CB', 47, 33],
       ['Banele Sikhondze', 'DM', 47, 33], ['Andy Junior Magagula', 'AM', 47, 31], ['Siyabonga Mthokozisi Gwebu', 'ST', 47, 32],
       ['Njabulo Ndlovu', 'RB', 47, 32], ['Mxolisi Mkhontfo', 'LW', 47, 33], ['Khanyakwezwe Shabalala', 'GK', 47, 33]
     ] },
    { n: 'Chad', s: 'CHA', conf: 'CAF', str: 51, c1: '#002664', c2: '#C60C30', pool: 'cafr', p: [
       ['Mathieu Adoassou', 'GK', 50, 33], ['Dia Wah Michael', 'RB', 50, 26], ['Félix Noubara', 'CB', 50, 21],
       ['Charles Tchouplaou', 'CB', 51, 25], ['Natoyoum Osee', 'LB', 52, 31], ['Djawal Kaiba', 'DM', 50, 23],
       ['Mahamat Thiam', 'CM', 52, 25], ['Lassine Kouma', 'AM', 51, 22], ['Abdoul Aziz', 'RW', 52, 20],
       ['Haroun Tchaouna', 'ST', 50, 26], ['Djedanoum Fabien', 'LW', 52, 20], ['Mbaiossoum Samba Diallo', 'GK', 50, 24],
       ['Wanre Daikreo', 'CB', 50, 26], ['Gabkala Daba', 'LB', 50, 22], ['Yves Allarabaye', 'CM', 50, 23],
       ['Marius Mouandilmadji', 'RW', 78, 29], ['Célestin Ecua', 'ST', 50, 24], ['Franck Tchaouna', 'CB', 50, 21],
       ['William Damba', 'DM', 50, 23], ['Benjamin Merba', 'AM', 50, 21], ['Bertrand Mani', 'ST', 50, 29],
       ['Ahmat Mahamat Abakar', 'LW', 50, 26], ['Jourdain Mbaynaïssem', 'GK', 50, 32]
     ] },
    { n: 'República Centroafricana', s: 'CTA', conf: 'CAF', str: 60, c1: '#003082', c2: '#289728', pool: 'cafr', p: [
       ['Dominique Youfeigane', 'GK', 55, 26], ['Flory Yangao', 'RB', 56, 24], ['Hugo Gambor', 'CB', 75, 24],
       ["Sacha M'Baka", 'CB', 55, 22], ['Julien Kouadio', 'LB', 71, 27], ['Séverin Tatolna', 'DM', 55, 24],
       ['Isaac Solet', 'CM', 58, 25], ['Ghislain Mounguide', 'AM', 57, 24], ['Louis Mafouta', 'RW', 77, 32],
       ['Karl Namnganda', 'ST', 54, 30], ['Vénuste Baboula', 'LW', 58, 28], ['Alladum Kolimba', 'GK', 53, 39],
       ['Maurice Selemby', 'CB', 53, 22], ['Wesley Zahibo', 'LB', 52, 23], ['Junior Sambia', 'CM', 52, 30],
       ['Christian Yawanendji', 'RW', 54, 24], ['Goduine Koyalipou', 'ST', 80, 26], ['Yoan Zouma', 'CB', 52, 28],
       ['Joël Ngoya', 'DM', 52, 24], ['Josias Sabone', 'AM', 54, 20], ['Moustapha Djimet', 'ST', 52, 23],
       ['Sami Wattel', 'RB', 54, 20], ['Delphin Mokonou', 'LW', 52, 26], ['Eugene Thibault Ganazoui', 'GK', 52, 21]
     ] },
    { n: 'Yibuti', s: 'DJI', conf: 'CAF', str: 50, c1: '#6AB2E7', c2: '#12AD2B', pool: 'eafr', p: [
       ['Sulait Luyima', 'GK', 50, 33], ['Ali Youssouf Farada', 'RB', 50, 31], ['Yabe Siad', 'CB', 50, 28],
       ['Moussa Hamadou Araita', 'CB', 50, 29], ['Moustapha Abdi Osman', 'LB', 50, 34], ['Doualeh Mahamoud Elabeh', 'DM', 50, 35],
       ['Hamza Abdi Idleh', 'CM', 50, 35], ['Warsama Hassan', 'AM', 50, 27], ['Mahdi Houssein Mahabeh', 'RW', 50, 31],
       ['Samuel Akinbinu', 'ST', 50, 27], ['Gabriel Dadzie', 'LW', 50, 29], ['Moktar Youssouf Said', 'GK', 50, 22],
       ['Ibrahim Idriss Mohamed', 'CB', 50, 24], ['Yonis Kireh', 'LB', 50, 24], ['Maarouf Abass Abaneh', 'CM', 50, 26],
       ['Ahmed Youssouf Omar', 'RW', 50, 28], ['Moussa Amoud Wais', 'ST', 50, 25], ['Ahmed Zakaria', 'CB', 50, 28],
       ['Sadik Aden', 'DM', 50, 27], ['Ahemdini Ali Gohar', 'AM', 50, 29], ['Mouad Amir Mahamed', 'ST', 50, 21],
       ['Aboubaker Liban Abdi', 'RB', 50, 26], ['Omar Mahamoud', 'GK', 50, 25]
     ] },
    { n: 'Somalia', s: 'SOM', conf: 'CAF', str: 46, c1: '#4189DD', c2: '#FFFFFF', pool: 'eafr', p: [
       ['Abdirahman Mohamud', 'GK', 46, 25], ['Abel Gigli', 'RB', 46, 36], ['Mohamud Ali', 'CB', 46, 32],
       ['Yonis Farah', 'CB', 46, 27], ['Ayman Mohamed Hussein', 'LB', 46, 26], ['Ahmed Hirabe', 'DM', 46, 29],
       ['Abdulsamed Abdullahi', 'CM', 46, 29], ['Mukhtar Suleiman', 'AM', 46, 28], ['Mohamed Awad', 'RW', 46, 32],
       ['Sak Hassan', 'ST', 46, 25], ['Yusuf Ahmed', 'LW', 46, 29], ['Ibrahim Ahmed Hussein', 'GK', 46, 21],
       ['Fahad Fussad', 'CB', 46, 26], ['Ali Omar', 'LB', 46, 27], ['Ibrahim Ilyas', 'CM', 46, 26],
       ['Issa Adim Abatari', 'RW', 46, 24], ['Ali Musse', 'ST', 46, 30], ['Abdulle Abdullahi', 'CB', 46, 20],
       ['Aweys Adan', 'DM', 46, 31], ['Mohamed Omar', 'AM', 46, 27], ['Mahad Shine', 'ST', 46, 25],
       ['Suleyman Sidali', 'RB', 46, 22], ['Bilal Habib', 'LW', 46, 26], ['Aleeleya Sheikh Saeed', 'GK', 46, 33]
     ] },
    { n: 'Eritrea', s: 'ERI', conf: 'CAF', str: 50, c1: '#EA0437', c2: '#12AD2B', pool: 'eafr', p: [
       ['Yonathan Sultan', 'GK', 48, 19], ['Jonas Idris', 'RB', 48, 21], ['Jamal Ali', 'CB', 48, 28],
       ['Victor Fors', 'CB', 48, 27], ['Yosief Tsegay', 'LB', 48, 25], ['Ablelom Teklezghi', 'DM', 48, 30],
       ['Nahom Netabay', 'CM', 68, 32], ['Aethan Yohannes', 'AM', 48, 22], ['Oliver Hintsa', 'RW', 48, 25],
       ['Ali Sulieman', 'ST', 48, 26], ['Romel Abdu', 'LW', 48, 25], ['Kibrom Solomon', 'GK', 48, 26],
       ['Wedeb Fessehaye', 'CB', 48, 27], ['Medhane Redie', 'LB', 48, 33], ['Namrud Embaye', 'CM', 48, 24],
       ['Siem Eyob-Abraha', 'RW', 48, 18], ['Fahmi Ibrahim', 'ST', 48, 26], ['Nahom Tadese', 'DM', 48, 26],
       ['Nobel Gebrezgi', 'ST', 48, 23], ['Amanuel Benhur', 'LW', 48, 26]
     ] },
    { n: 'Sudán del Sur', s: 'SSD', conf: 'CAF', str: 51, c1: '#078930', c2: '#DA121A', pool: 'eafr', p: [
       ['Majak Mawith', 'GK', 51, 27], ['Rashid Toha', 'RB', 52, 29], ['Athir Thomas', 'CB', 53, 39],
       ['Samuel Taban', 'CB', 50, 24], ['David Omot Sebit', 'LB', 51, 28], ['Ivan Wani', 'DM', 50, 28],
       ['Joseph Malish Manase', 'CM', 50, 24], ['William Gama', 'AM', 50, 24], ['Tito Okello', 'RW', 52, 30],
       ['Paul Jawa', 'ST', 50, 22], ['Yohanna Paulino', 'LW', 50, 27], ['Godwill Yugusuk', 'GK', 50, 27],
       ['Paul Puk Pal', 'CB', 50, 26], ['Rashid Okocha', 'LB', 50, 33], ['Peter Chan', 'CM', 50, 24],
       ['Lazarus Laku', 'RW', 50, 18], ['Angufi Mudasiri', 'ST', 50, 19], ['Bichiok', 'CB', 50, 19],
       ['Pap Chol', 'DM', 50, 24], ['Mario Albano', 'AM', 50, 20], ['Nelson Victor Elia', 'ST', 50, 24],
       ['Nhiak Agany', 'RB', 50, 25], ["Simon Kuoto'o", 'LW', 50, 26]
     ] },
    { n: 'Santo Tomé y Príncipe', s: 'STP', conf: 'CAF', str: 48, c1: '#12AD2B', c2: '#FFCE00', pool: 'cafr', p: [
       ['Pedro Mateus', 'GK', 48, 30], ['Vavá Pequeno', 'RB', 48, 32], ['Mimi', 'CB', 48, 30],
       ['Rogério Fernandes', 'CB', 48, 24], ['Adjakson Ramos', 'LB', 48, 24], ['Joel Neves', 'DM', 48, 30],
       ['Nicola Bragança', 'CM', 48, 26], ['Waldimilson Santo', 'AM', 48, 29], ['Luís Leal', 'RW', 48, 39],
       ['Ronaldo', 'ST', 48, 25], ['Marcos Barbeiro', 'LW', 48, 31], ['Yaniel Bonfim', 'GK', 48, 22],
       ["Gilberto d'Almeida", 'CB', 48, 26], ['Ricardo Fernandes', 'LB', 48, 24], ['Paulo Lima', 'CM', 48, 28],
       ['Ricardo Cardoso', 'RW', 48, 25], ['Sérgio Malé', 'ST', 48, 22], ['Gil Carvalho', 'CB', 48, 29],
       ['Pedro Monteiro', 'DM', 48, 28], ['Hélder Samuca', 'AM', 48, 20], ['Kelve Semedo', 'ST', 48, 22],
       ['Dola Costa', 'LW', 48, 27], ['Saiel Ramos', 'GK', 48, 36]
     ] },
    { n: 'Seychelles', s: 'SEY', conf: 'CAF', str: 45, c1: '#003F87', c2: '#FCD856', pool: 'cafr', p: [
       ['Carlos Simeon', 'GK', 45, 28], ['Justin Riaze', 'RB', 45, 24], ['Makhan Bristol-Cissoko', 'CB', 45, 20],
       ['Alfie Walters', 'CB', 45, 24], ['Don Fanchette', 'LB', 45, 29], ['Lorenzo Hoareau', 'DM', 45, 19],
       ['Dean Mothe', 'CM', 45, 26], ['Anil Dijoux', 'AM', 45, 20], ['Anelka Adela', 'RW', 45, 20],
       ['Brandon Labrosse', 'ST', 45, 27], ['Jerone Joubert', 'LW', 45, 23], ['Romeo Padayachy', 'GK', 45, 33],
       ['Warren Mellie', 'CB', 45, 32], ['Markus Payet', 'LB', 45, 21], ['Josip Ravignia', 'CM', 45, 25],
       ['Tyrone Cadeau', 'RW', 45, 22], ['Samuel Okolie', 'ST', 45, 18], ['Vince Fred', 'CB', 45, 21],
       ['Ryan Henriette', 'DM', 45, 25], ['Imra Raheriniaina', 'AM', 45, 22], ['Torry Radegonde', 'ST', 45, 23],
       ['Elie Sopha', 'RB', 45, 22], ['Ian Ah-Kong', 'GK', 45, 31]
     ] },
    { n: 'Mauricio', s: 'MRI', conf: 'CAF', str: 48, c1: '#EA2839', c2: '#1A206D', pool: 'cafr', p: [
       ['Kevin Jean-Louis', 'GK', 47, 37], ['Emmanuel Vincent', 'RB', 48, 29], ['Wilson Mootoo', 'CB', 48, 24],
       ['Lindsay Rose', 'CB', 47, 34], ['Jordan François', 'LB', 47, 24], ['Kévin Bru', 'DM', 49, 38],
       ['Adel Langue', 'CM', 48, 29], ['Adrien Botlar', 'AM', 47, 30], ['Kevin Perticots', 'RW', 48, 30],
       ['Adrien François', 'ST', 48, 27], ['Ashley Nazira', 'LW', 48, 31], ['Dorian Chiotti', 'GK', 47, 28],
       ['Brandon Citorah', 'CB', 47, 32], ['Rosario Latouchent', 'LB', 47, 30], ['Gabriel Caliste', 'CM', 47, 20],
       ['Jason Ferré', 'RW', 47, 28], ['Fernando Jackson', 'ST', 47, 27], ['Bradley Antoine', 'CB', 47, 23],
       ['William François', 'DM', 47, 22], ['Kentiss Bhugeerathee', 'AM', 47, 25], ['Linley Rita', 'ST', 47, 32],
       ['Leon Alizart', 'LW', 47, 19], ['Christopher James Caserne', 'GK', 47, 33]
     ] },

    /* ==================== OFC ==================== */
    {
      n: 'Nueva Caledonia', s: 'NCL', conf: 'OFC', str: 55, c1: '#009543', c2: '#ED4135', pool: 'oce', p: [
       ['Rocky Nyikeine', 'GK', 55, 34], ['Bernard Iwa', 'RB', 54, 26], ['Henri Wélépane', 'CB', 51, 26],
       ['Fonzy Ranchain', 'CB', 53, 32], ['Morgan Mathelon', 'LB', 53, 35], ['Pierre Bako', 'DM', 53, 25],
       ['Jekob Jeno', 'CM', 67, 26], ['Joris Kenon', 'AM', 51, 28], ['Jean-Jacques Katrawa', 'RW', 53, 27],
       ['Georges Gope-Fenepej', 'ST', 53, 38], ['Lues Waya', 'LW', 53, 25], ['Mickaël Ulile', 'GK', 52, 29],
       ['Didier Simane', 'CB', 51, 30], ['Joseph Athale', 'LB', 51, 31], ['César Zeoula', 'CM', 52, 37],
       ['Gérard Waia', 'RW', 51, 22], ['Germain Haewegene', 'ST', 51, 30], ['William Rokuad', 'CB', 51, 25],
       ['Shene Wélépane', 'DM', 51, 29], ['Yoan Béaruné', 'AM', 52, 24], ['Pierre Iékawé', 'ST', 52, 29],
       ['Titouan Richard', 'RB', 51, 26], ['Angelo Fulgini', 'LW', 79, 30], ['Thomas Schmidt', 'GK', 51, 30]
     ]
    },
    {
      n: 'Tahití', s: 'TAH', conf: 'OFC', str: 52, c1: '#CE1126', c2: '#FFFFFF', pool: 'oce', p: [
       ['Tevaearai Tamatai', 'GK', 51, 25], ['Taumihau Tiatia', 'RB', 51, 35], ['Matatia Paama', 'CB', 52, 34],
       ['Pothin Poma', 'CB', 52, 29], ['Kévin Barbe', 'LB', 51, 29], ['Vahia Tetuaroa', 'DM', 50, 26],
       ['Roonui Tehau', 'CM', 50, 27], ['Frank Papaura', 'AM', 54, 21], ['Benoît Mathon', 'RW', 52, 37],
       ['Teaonui Tehau', 'ST', 50, 34], ['Victor Snow', 'LW', 54, 35], ['Teave Teamotuaitau', 'GK', 50, 34],
       ['Mauri Heitaa', 'CB', 50, 27], ['François Hapipi', 'LB', 50, 27], ['Mana Teniau', 'CM', 50, 21],
       ['Manuarii Shan', 'RW', 50, 22], ['Téva Lossec', 'CB', 50, 24], ['Tauhiti Keck', 'DM', 50, 32],
       ['Manoa Flores', 'AM', 50, 21], ['Matéo Degrumelle', 'RB', 50, 23], ['François Decoret', 'GK', 50, 27]
     ]
    },
    {
      n: 'Islas Salomón', s: 'SOL', conf: 'OFC', str: 52, c1: '#0051BA', c2: '#215B33', pool: 'oce', p: [
       ['Philip Mango', 'GK', 55, 31], ['Javin Wae', 'RB', 53, 24], ['Leon Kofana', 'CB', 52, 24],
       ['David Supa', 'CB', 53, 26], ['Calvin Ohasio', 'LB', 52, 26], ['Atkin Kaua', 'DM', 51, 30],
       ['William Komasi', 'CM', 52, 26], ['Don Keana', 'AM', 50, 26], ["Micah Lea'alafa", 'RW', 51, 35],
       ['Alvin Hou', 'ST', 53, 30], ["Raphael Lea'i", 'LW', 55, 23], ['Michael Laulae', 'GK', 50, 24],
       ['Junior David', 'CB', 50, 25], ['Alick Stanton', 'LB', 50, 28], ['Carlos Liomasia', 'CM', 50, 32],
       ['Bobby Leslie', 'RW', 50, 26], ['Mohammad Mekawir', 'ST', 50, 26], ['Paul Francis', 'CB', 50, 22],
       ['Ben Fox', 'DM', 51, 25], ['Jared Rongosulia', 'AM', 50, 31], ['Harold Nauania', 'GK', 50, 29]
     ]
    },
    {
      n: 'Fiyi', s: 'FIJ', conf: 'OFC', str: 53, c1: '#68BFE5', c2: '#FFFFFF', pool: 'oce', p: [
       ['Aydin Mustahib', 'GK', 54, 22], ['Scott Wara', 'RB', 52, 27], ['Gabriele Matanisiga', 'CB', 54, 31],
       ['Ivan Kumar', 'CB', 52, 29], ['Antonio Tuivuna', 'LB', 54, 31], ['Sitiveni Cavuilagi', 'DM', 52, 32],
       ['Thomas Dunn', 'CM', 52, 23], ['Mohammed Raheem', 'AM', 52, 23], ['Roy Krishna', 'RW', 54, 39],
       ['Sairusi Nalaubu', 'ST', 53, 30], ['Etonia Dogalau', 'LW', 54, 25], ['Joji Vuakaca', 'GK', 50, 23],
       ['Filipe Baravilala', 'CB', 50, 32], ['Lekima Gonerau', 'LB', 50, 37], ['Setareki Hughes', 'CM', 51, 31],
       ['Rusiate Matarerega', 'RW', 50, 33], ['Tevita Waranaivalu', 'ST', 50, 31], ['Sterling Vasconcellos', 'CB', 50, 21],
       ['Nabil Begg', 'DM', 50, 22], ['Brendan McMullen', 'AM', 50, 24], ['Mosese Nabose', 'ST', 50, 28],
       ['Merrill Nand', 'RB', 50, 26], ['Isikeli Sevanaia', 'GK', 50, 23]
     ]
    },
    {
      n: 'Vanuatu', s: 'VAN', conf: 'OFC', str: 49, c1: '#D21034', c2: '#009543', pool: 'oce', p: [
       ['Massing Kalotang', 'GK', 50, 24], ['Michel Coulon', 'RB', 50, 31], ['Timothy Boulet', 'CB', 51, 28],
       ['Selwym Vatu', 'CB', 47, 28], ['Tasso Jeffrey', 'LB', 46, 28], ['John Alick', 'DM', 48, 35],
       ['John Wohale', 'CM', 48, 29], ['Jared Clark', 'AM', 50, 28], ['Alex Saniel', 'RW', 49, 30],
       ['Johnathan Spokeyjack', 'ST', 50, 28], ['Godine Tenene', 'LW', 49, 28], ['Anthony Quai', 'GK', 46, 21],
       ['Jacques Wanemut', 'CB', 46, 34], ['Zidane Maguekon', 'LB', 46, 26], ['Harry Norman', 'CM', 46, 23],
       ['Tony Kaltak', 'RW', 46, 30], ['Jean Kaltak', 'ST', 47, 32], ['Thomas Salemu', 'CB', 46, 20],
       ['Alick Worworbu', 'DM', 46, 29], ['Tonly Kalotang', 'ST', 46, 29], ['Joshua Tokio', 'RB', 46, 25],
       ['Jordy Tasip', 'LW', 47, 26], ['Dick Sablan', 'GK', 46, 30]
     ]
    },
    {
      n: 'Papúa Nueva Guinea', s: 'PNG', conf: 'OFC', str: 51, c1: '#000000', c2: '#CE1126', pool: 'oce', p: [
       ['Dave Tomare', 'GK', 52, 29], ['Daniel Joe', 'RB', 52, 36], ['Alwin Komolong', 'CB', 50, 32],
       ['Kolu Kepo', 'CB', 52, 33], ['Joshua Talau', 'LB', 50, 30], ['Rex Naime', 'DM', 52, 23],
       ['Simon Oberth', 'CM', 52, 25], ['Joseph Joe', 'AM', 50, 24], ['Raymond Gunemba', 'RW', 52, 40],
       ['Tommy Semmy', 'ST', 52, 32], ['Ati Kepo', 'LW', 50, 30], ['Charles Lepani', 'GK', 50, 32],
       ['Nathaniel Eddie', 'CB', 50, 21], ['Arol Tateng', 'LB', 50, 29], ['Solomon Rani', 'CM', 50, 24],
       ['Logan Biwa', 'RW', 50, 20], ['Ritzoki Tamgol', 'ST', 50, 26], ['Derek Kimai', 'CB', 50, 26],
       ['Shane Sakael', 'DM', 50, 34], ['Juduh Asar', 'AM', 50, 21], ['Chappy Upaiga', 'ST', 50, 33],
       ['Ethan Mom', 'RB', 50, 20], ['Christinus Biasu', 'GK', 50, 31]
     ]
    },
    { n: 'Samoa', s: 'SAM', conf: 'OFC', str: 47, c1: '#CE1126', c2: '#002B7F', pool: 'oce', p: [
       ['Joel Bartley', 'GK', 47, 21], ['Andrew Setefano', 'RB', 47, 39], ['Faitalia Hamilton-Pama', 'CB', 47, 33],
       ['Luke Salisbury', 'CB', 47, 22], ['Luke Tolo-Kent', 'LB', 47, 23], ['Dauntae Mariner', 'DM', 47, 26],
       ['Kaleb De Groot-Green', 'CM', 47, 24], ['Jarvis Filimalae', 'AM', 47, 23], ['Pharrell Trainor', 'RW', 47, 20],
       ['Dilo Tumua', 'ST', 47, 26], ['Michael Tumua Leo', 'LW', 47, 23], ['Paul Taupau', 'GK', 47, 20],
       ['Taine Wilson', 'CB', 47, 22], ['Harry Chote', 'LB', 47, 27], ['Alex Malauulu', 'CM', 47, 20],
       ['Kyah Cahill', 'RW', 47, 23], ['Juan Gobbi', 'ST', 47, 21], ['Niko Steinmetz', 'CB', 47, 26],
       ['Caleb Hilbron', 'DM', 47, 24], ['Jesse Vine', 'AM', 47, 23], ['Darcy Knight', 'ST', 47, 26],
       ['Greg Siamoa', 'LW', 47, 23], ['Kirk Auvele', 'GK', 47, 20]
     ] },
    { n: 'Tonga', s: 'TGA', conf: 'OFC', str: 45, c1: '#C10000', c2: '#FFFFFF', pool: 'oce', p: [
       ['Semisi ‘Otukolo', 'GK', 45, 27], ['Kulisitofa Kite', 'RB', 45, 23], ['Petelo Naniseni', 'CB', 45, 23],
       ['David-John Tuamoheloa', 'CB', 45, 22], ['Petelo Manu', 'LB', 45, 21], ['Fineasi Palei', 'DM', 45, 37],
       ['Christopher Kefu', 'CM', 45, 23], ['Ulafala Sonasi', 'AM', 45, 19], ['Hemaloto Polovili', 'RW', 45, 29],
       ['Lisiate Feke', 'ST', 45, 22], ['Amoni Fifita', 'LW', 45, 22], ['Unaloto Pahulu', 'GK', 45, 20],
       ['Viliami Tikoipau', 'CB', 45, 25], ["Utu'one Lea'aetoa", 'LB', 45, 21], ['Topuluka Tuamoheloa', 'CM', 45, 23],
       ['Vilikisepi Tai', 'RW', 45, 20], ['Viliami Tukia', 'ST', 45, 25], ['Hakeai Fonua', 'CB', 45, 18],
       ["Va'inga Teu", 'DM', 45, 20], ['Tomasi Armitage', 'AM', 45, 21], ['Ata Inia', 'ST', 45, 26],
       ['Herick Funaki', 'RB', 45, 23], ['Maikeli Lomu', 'LW', 45, 29]
     ] },
    { n: 'Islas Cook', s: 'COK', conf: 'OFC', str: 47, c1: '#00247D', c2: '#FFFFFF', pool: 'oce', p: [
       ['Tahiri Elikana', 'GK', 47, 38], ['Emiel Burrow', 'RB', 47, 34], ['Thane Beal', 'CB', 47, 29],
       ['Orin Ruaine-Prattley', 'CB', 47, 29], ['Oscar Wichman', 'LB', 47, 21], ['Paavo Mustonen', 'DM', 47, 37],
       ['Grover Harmon', 'CM', 47, 37], ['Tupaia Ringi', 'AM', 47, 23], ['Taylor Saghabi', 'RW', 47, 36],
       ['Josh Karika', 'ST', 47, 37], ['Siaosi Kaufononga', 'LW', 47, 31], ['Ngereine Maro', 'GK', 47, 21],
       ['Tamaiva Mateariki', 'CB', 47, 27], ['John Noovao', 'LB', 47, 22], ['Ngametua Tuakana', 'CM', 47, 21],
       ['Tremaine Rimene-Albrett', 'RW', 47, 24], ['Dwayne Tiputoa', 'ST', 47, 29], ['Charlie Noovao-Martin', 'CB', 47, 19],
       ['Taci Kumsuz', 'DM', 47, 27]
     ] },
    { n: 'Samoa Americana', s: 'ASA', conf: 'OFC', str: 46, c1: '#00247D', c2: '#CE1126', pool: 'oce', p: [
       ['Kai Yandall', 'GK', 46, 18], ['Vaha Tua', 'RB', 46, 24], ['Ben Stefanon', 'CB', 46, 22],
       ['Austin Kaleopa', 'CB', 46, 25], ['Matthew Stefanon', 'LB', 46, 25], ['Peter Lauvao', 'DM', 46, 23],
       ["Ali'i Mitchell", 'CM', 46, 32], ['Johnica Collins', 'AM', 46, 20], ["Tor Lawrence Mana'o", 'RW', 46, 27],
       ['Daniel Lee', 'ST', 46, 19], ['Fiamatai Itamua', 'LW', 46, 19], ['Nicholas Tuiasosopo', 'GK', 46, 24],
       ['Malachi Drago', 'CB', 46, 28], ['Dylan Salapu', 'LB', 46, 18], ['Leaga Lealuga', 'CM', 46, 21],
       ['Petu Pouli', 'RW', 46, 21], ['Michael Paselio', 'ST', 46, 25], ['Michael Settle', 'CB', 46, 25],
       ['Billjae Vaitoelau', 'DM', 46, 24], ['Kenai Mauga', 'AM', 46, 33], ['Nicky Salapu', 'GK', 46, 46]
     ] }
  ];

  N.forEach(function (x) { window.NATIONS.push(x); });
})();
