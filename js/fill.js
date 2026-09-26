/* =========================================================================
   COMPLETADO DE PLANTILLAS
   En las ligas de menor difusión sólo guardo los jugadores que conozco de
   verdad. El resto del cupo se completa con nombres reales del país (nombre
   y apellido propios de cada región) marcados como genéricos, para que la
   plantilla esté llena y la simulación funcione sin inventar fichajes.
   Son deterministas: el mismo equipo genera siempre los mismos jugadores.
   ========================================================================= */
(function (global) {
  'use strict';

  var POOLS = {
    /* --------- regiones añadidas para el resto de selecciones FIFA --------- */
    ro: {
      f: ['Andrei', 'Ionut', 'Alexandru', 'Cristian', 'Florin', 'Vlad', 'Razvan', 'Gabriel', 'Marius', 'Bogdan', 'Denis', 'Stefan', 'Valentin', 'Mihai', 'Ciprian', 'Nicolae', 'Sergiu', 'Dragos', 'Octavian', 'Adrian', 'Catalin', 'Darius'],
      l: ['Popescu', 'Ionescu', 'Popa', 'Radu', 'Dumitru', 'Stoica', 'Stan', 'Gheorghe', 'Matei', 'Constantin', 'Marin', 'Nistor', 'Munteanu', 'Barbu', 'Dragomir', 'Tudor', 'Mihalache', 'Sandu', 'Anghel', 'Lungu', 'Cojocaru', 'Vasilescu']
    },
    he: {
      f: ['Omri', 'Itay', 'Dor', 'Shon', 'Liel', 'Ilay', 'Guy', 'Nir', 'Ofir', 'Eli', 'Idan', 'Tal', 'Roi', 'Ben', 'Amit', 'Yarden', 'Gavri', 'Sagiv', 'Neta', 'Eran', 'Yossi', 'Raz'],
      l: ['Cohen', 'Levi', 'Mizrahi', 'Peretz', 'Biton', 'Turgeman', 'Khalaili', 'Shlomo', 'Azoulay', 'Hadad', 'Nachmias', 'Elbaz', 'Yeini', 'Refaelov', 'Barda', 'Tibi', 'Menachem', 'Amsalem', 'Dahan', 'Sharabi', 'Malul', 'Kabha']
    },
    fa: {
      f: ['Ali', 'Mehdi', 'Reza', 'Amir', 'Saeid', 'Hossein', 'Milad', 'Alireza', 'Vahid', 'Omid', 'Ehsan', 'Kaveh', 'Ramin', 'Payam', 'Farhad', 'Behnam', 'Arash', 'Siamak', 'Morteza', 'Bahman', 'Mohammad', 'Sina'],
      l: ['Rezaei', 'Hosseini', 'Karimi', 'Ahmadi', 'Mohammadi', 'Hajsafi', 'Ansarifard', 'Nourollahi', 'Torabi', 'Pouraliganji', 'Cheshmi', 'Moharrami', 'Sadeghi', 'Amiri', 'Zare', 'Ebrahimi', 'Ghaedi', 'Sayyadmanesh', 'Esmaeili', 'Nazari', 'Dehghan', 'Ghorbani']
    },
    turkic: {
      f: ['Aibek', 'Nurlan', 'Ruslan', 'Timur', 'Azamat', 'Elvin', 'Rashad', 'Emin', 'Kanat', 'Bekzat', 'Islam', 'Renat', 'Serik', 'Sardor', 'Jasur', 'Otabek', 'Bakhtiyor', 'Anar', 'Ramil', 'Farid', 'Ulan', 'Eldor'],
      l: ['Aliyev', 'Mammadov', 'Huseynov', 'Guliyev', 'Ismayilov', 'Zhumabayev', 'Abdullayev', 'Karimov', 'Rakhimov', 'Turgunov', 'Nurmatov', 'Sadykov', 'Iskakov', 'Zaynutdinov', 'Toktarov', 'Nazarov', 'Yusupov', 'Ergashev', 'Sharipov', 'Kurbanov', 'Bayramov', 'Amanov']
    },
    eafr: {
      f: ['Baraka', 'Juma', 'Hassan', 'Ally', 'Mbwana', 'Simon', 'Erasto', 'Feisal', 'Michael', 'Denis', 'Allan', 'Farouk', 'Kennedy', 'Victor', 'Masoud', 'Salum', 'Ayub', 'Bernard', 'Eric', 'Innocent', 'Patrick', 'Elias'],
      l: ['Samatta', 'Kessy', 'Mnata', 'Mudde', 'Okello', 'Onyango', 'Wanyama', 'Olunga', 'Otieno', 'Ochieng', 'Mugisha', 'Byaruhanga', 'Kagere', 'Kizito', 'Mutyaba', 'Omondi', 'Wafula', 'Juuko', 'Sserunkuma', 'Tesfaye', 'Girma', 'Bekele']
    },
    cafr: {
      f: ['Gilles', 'Steve', 'Landry', 'Arnaud', 'Merveille', 'Chancel', 'Cedric', 'Fabrice', 'Yannick', 'Didier', 'Thievy', 'Prestige', 'Bryan', 'Silas', 'Grady', 'Theo', 'Junior', 'Ruben', 'Anicet', 'Loic', 'Warren', 'Jeremy'],
      l: ['Nguema', 'Mbemba', 'Mabiala', 'Bakambu', 'Mpasi', 'Bongonda', 'Wissa', 'Kayembe', 'Masuaku', 'Nkounkou', 'Makoun', 'Bissiki', 'Ondo', 'Meye', 'Poko', 'Boupendza', 'Allevinah', 'Obiang', 'Nsue', 'Buyla', 'Ganet', 'Salvador']
    },
    sea: {
      f: ['Chanathip', 'Teerasil', 'Supachok', 'Sarach', 'Quang', 'Cong', 'Hoang', 'Tien', 'Duc', 'Rizky', 'Egy', 'Asnawi', 'Marselino', 'Witan', 'Safawi', 'Faisal', 'Arif', 'Syafiq', 'Adisak', 'Nurul', 'Thanawat', 'Suphanat'],
      l: ['Songkrasin', 'Dangda', 'Sarachat', 'Yooyen', 'Van Hau', 'Hai', 'Phuong', 'Linh', 'Cuong', 'Ridho', 'Pratama', 'Mangkualam', 'Ferdinan', 'Sulaiman', 'Hadi', 'Nasir', 'Aziz', 'Ahmad', 'Kaewprom', 'Promsatit', 'Rahman', 'Bunmathan']
    },
    ind: {
      f: ['Sunil', 'Sandesh', 'Anirudh', 'Gurpreet', 'Rahul', 'Sahal', 'Manvir', 'Ashique', 'Jeakson', 'Vikram', 'Amrinder', 'Akash', 'Nikhil', 'Rohit', 'Deepak', 'Pritam', 'Anwar', 'Liston', 'Brandon', 'Ishan', 'Naveen', 'Mahesh'],
      l: ['Chhetri', 'Jhingan', 'Thapa', 'Singh', 'Bheke', 'Chhangte', 'Samad', 'Kumar', 'Kuruniyan', 'Mahato', 'Roy', 'Das', 'Yadav', 'Sharma', 'Gill', 'Patel', 'Reddy', 'Nair', 'Rana', 'Colaco', 'Fernandes', 'Pandita']
    },
    car: {
      f: ['Andre', 'Levi', 'Damion', 'Shamar', 'Kevon', 'Alvin', 'Marcus', 'Dwight', 'Tyrese', 'Kervin', 'Jamal', 'Reon', 'Nathan', 'Trevor', 'Shaquille', 'Omari', 'Jelani', 'Kadeem', 'Elton', 'Rushane', 'Damani', 'Curtly'],
      l: ['Thomas', 'Williams', 'Charles', 'Joseph', 'Lewis', 'Phillip', 'Jones', 'Bailey', 'Hyde', 'Brown', 'Blake', 'Gray', 'Edwards', 'Francis', 'Roberts', 'Simpson', 'Clarke', 'James', 'Wright', 'Henry', 'Peters', 'George']
    },
    fi: {
      f: ['Teemu', 'Aleksi', 'Ville', 'Joel', 'Niko', 'Robin', 'Leo', 'Oliver', 'Rasmus', 'Fredrik', 'Daniel', 'Eetu', 'Onni', 'Topi', 'Jere', 'Lucas', 'Anssi', 'Kaan', 'Miro', 'Arttu', 'Benjamin', 'Matti'],
      l: ['Virtanen', 'Makinen', 'Nieminen', 'Korhonen', 'Heikkila', 'Laine', 'Salminen', 'Koivisto', 'Jarvinen', 'Lahtinen', 'Rantanen', 'Peltola', 'Toivonen', 'Hamalainen', 'Kallio', 'Aho', 'Uronen', 'Pohjanpalo', 'Kamara', 'Sorsa', 'Hoskonen', 'Alho']
    },
    isl: {
      f: ['Gylfi', 'Arnor', 'Jon', 'Birkir', 'Hordur', 'Alfons', 'Andri', 'Mikael', 'Willum', 'Orri', 'Kolbeinn', 'Runar', 'Sverrir', 'Hakon', 'Isak', 'Stefan', 'Daniel', 'Elias', 'Logi', 'Aron', 'Viktor', 'Kristian'],
      l: ['Sigurdsson', 'Gudmundsson', 'Bjarnason', 'Johannesson', 'Magnusson', 'Thorsteinsson', 'Finnbogason', 'Hallfredsson', 'Palsson', 'Arnason', 'Ingason', 'Traustason', 'Gunnarsson', 'Haraldsson', 'Oskarsson', 'Einarsson', 'Baldursson', 'Helgason', 'Jonsson', 'Karlsson', 'Sigurjonsson', 'Halldorsson']
    },
    bal: {
      f: ['Kristers', 'Roberts', 'Janis', 'Vladislavs', 'Raimonds', 'Edgaras', 'Fedor', 'Arvydas', 'Gvidas', 'Mantas', 'Rokas', 'Henri', 'Rauno', 'Mattias', 'Karol', 'Sergei', 'Konstantin', 'Markus', 'Marten', 'Vlasi', 'Erik', 'Dainius'],
      l: ['Berzins', 'Ozols', 'Kalnins', 'Gutkovskis', 'Ikaunieks', 'Ciganiks', 'Zulpa', 'Novikovas', 'Slivka', 'Cernych', 'Vaitkunas', 'Uzela', 'Anier', 'Sappinen', 'Kait', 'Vassiljev', 'Ojamaa', 'Sorga', 'Tamm', 'Kuusk', 'Mets', 'Paskotsi']
    },
    mini: {
      f: ['Jordi', 'Marc', 'Ludovic', 'Roy', 'Liam', 'Aaron', 'Ethan', 'Kyle', 'Dylan', 'Nicolas', 'Fabio', 'Marco', 'Luca', 'Dante', 'Gianluca', 'Vincent', 'Sebastien', 'Olivier', 'Danel', 'Filip', 'Tom', 'Yanis'],
      l: ['Rubio', 'Vales', 'Alaves', 'Chipolina', 'Casciaro', 'De Barr', 'Olivero', 'Wiseman', 'Agius', 'Muscat', 'Borg', 'Camilleri', 'Mifsud', 'Nanu', 'Golinucci', 'Berardi', 'Rossi', 'Hasler', 'Buchel', 'Frick', 'Wieser', 'Salanovic']
    },
    es: {
      f: ['Álvaro', 'Javier', 'Sergio', 'Rubén', 'Iván', 'Marcos', 'Adrián', 'Pablo', 'Hugo', 'Dani', 'Jorge', 'Raúl', 'Óscar', 'Nacho', 'Aitor', 'Unai', 'Borja', 'Mario', 'Carlos', 'Gonzalo', 'Alberto', 'Diego'],
      l: ['García', 'Martínez', 'López', 'Sánchez', 'Fernández', 'Gómez', 'Ruiz', 'Hernández', 'Jiménez', 'Álvarez', 'Moreno', 'Muñoz', 'Romero', 'Navarro', 'Torres', 'Domínguez', 'Vázquez', 'Ramos', 'Gil', 'Serrano', 'Blanco', 'Castro']
    },
    latam: {
      f: ['Juan', 'Matías', 'Facundo', 'Nicolás', 'Santiago', 'Franco', 'Agustín', 'Lucas', 'Emiliano', 'Tomás', 'Bruno', 'Joaquín', 'Gastón', 'Maximiliano', 'Cristian', 'Ezequiel', 'Kevin', 'Brayan', 'Jhon', 'Luis', 'Óscar', 'Fabián'],
      l: ['Rodríguez', 'González', 'Pérez', 'Silva', 'Rojas', 'Medina', 'Ortiz', 'Cabrera', 'Acosta', 'Vargas', 'Ríos', 'Molina', 'Herrera', 'Aguilar', 'Peralta', 'Cardozo', 'Benítez', 'Sosa', 'Quiroga', 'Vera', 'Ibarra', 'Mendoza']
    },
    br: {
      f: ['Lucas', 'Gabriel', 'Matheus', 'Rafael', 'Bruno', 'Thiago', 'Vinícius', 'Felipe', 'Guilherme', 'Rodrigo', 'Caio', 'Wesley', 'Danilo', 'Everton', 'Pedro', 'João', 'Yuri', 'Léo', 'Igor', 'Renan', 'Diego', 'Marcelo'],
      l: ['Silva', 'Santos', 'Oliveira', 'Souza', 'Pereira', 'Lima', 'Costa', 'Ferreira', 'Almeida', 'Ribeiro', 'Carvalho', 'Gomes', 'Barbosa', 'Rocha', 'Dias', 'Nunes', 'Moraes', 'Cardoso', 'Teixeira', 'Vieira', 'Freitas', 'Machado']
    },
    it: {
      f: ['Marco', 'Andrea', 'Luca', 'Matteo', 'Davide', 'Alessandro', 'Federico', 'Simone', 'Lorenzo', 'Giuseppe', 'Stefano', 'Nicolò', 'Francesco', 'Riccardo', 'Antonio', 'Gianluca', 'Emanuele', 'Filippo', 'Daniele', 'Michele', 'Tommaso', 'Samuele'],
      l: ['Rossi', 'Ferrari', 'Esposito', 'Bianchi', 'Romano', 'Colombo', 'Ricci', 'Marino', 'Greco', 'Bruno', 'Gallo', 'Conti', 'De Luca', 'Mancini', 'Costa', 'Giordano', 'Rizzo', 'Lombardi', 'Barbieri', 'Moretti', 'Fontana', 'Caruso']
    },
    de: {
      f: ['Lukas', 'Jonas', 'Tim', 'Maximilian', 'Niklas', 'Julian', 'Florian', 'Marvin', 'Fabian', 'Sebastian', 'Dennis', 'Marcel', 'Philipp', 'Nico', 'Tobias', 'Leon', 'Kevin', 'Jannik', 'Robin', 'Simon', 'Patrick', 'Erik'],
      l: ['Müller', 'Schmidt', 'Schneider', 'Fischer', 'Weber', 'Meyer', 'Wagner', 'Becker', 'Hoffmann', 'Schäfer', 'Koch', 'Bauer', 'Richter', 'Klein', 'Wolf', 'Neumann', 'Schwarz', 'Zimmermann', 'Braun', 'Krüger', 'Hartmann', 'Lange']
    },
    fr: {
      f: ['Antoine', 'Théo', 'Maxime', 'Lucas', 'Hugo', 'Enzo', 'Nathan', 'Romain', 'Clément', 'Alexis', 'Jules', 'Baptiste', 'Yanis', 'Kylian', 'Amine', 'Mamadou', 'Ibrahim', 'Noah', 'Rayan', 'Valentin', 'Quentin', 'Florian'],
      l: ['Martin', 'Bernard', 'Dubois', 'Thomas', 'Robert', 'Richard', 'Petit', 'Durand', 'Leroy', 'Moreau', 'Simon', 'Laurent', 'Lefebvre', 'Michel', 'Garcia', 'Diallo', 'Traoré', 'Camara', 'Sylla', 'Fofana', 'Bamba', 'Koné']
    },
    en: {
      f: ['Jack', 'Harry', 'Callum', 'Liam', 'Josh', 'Ryan', 'Connor', 'Lewis', 'Ben', 'Jordan', 'Tyler', 'Charlie', 'George', 'Alfie', 'Dan', 'Sam', 'Ollie', 'Kieran', 'Reece', 'Nathan', 'Aaron', 'Louie'],
      l: ['Smith', 'Jones', 'Taylor', 'Brown', 'Wilson', 'Evans', 'Thomas', 'Roberts', 'Walker', 'Wright', 'Green', 'Hall', 'Wood', 'Clarke', 'Harris', 'Hughes', 'Edwards', 'Turner', 'Baker', 'Cooper', 'Ward', 'Morgan']
    },
    nl: {
      f: ['Daan', 'Sven', 'Bram', 'Jesper', 'Thijs', 'Ruben', 'Lars', 'Stijn', 'Joey', 'Rick', 'Sem', 'Jurgen', 'Mees', 'Kjell', 'Milan', 'Tycho', 'Youri', 'Dani', 'Jordy', 'Teun', 'Guus', 'Wout'],
      l: ['de Jong', 'Jansen', 'van Dijk', 'Bakker', 'Visser', 'Smit', 'Meijer', 'de Boer', 'Mulder', 'Bos', 'Vos', 'Peters', 'Hendriks', 'van Leeuwen', 'Dekker', 'Brouwer', 'de Graaf', 'van der Berg', 'Willems', 'Kuipers', 'Post', 'Timmermans']
    },
    pt: {
      f: ['João', 'Tiago', 'Rúben', 'Diogo', 'André', 'Bruno', 'Miguel', 'Rafael', 'Gonçalo', 'Nuno', 'Fábio', 'Ricardo', 'Hugo', 'Vasco', 'Afonso', 'Duarte', 'Tomás', 'Simão', 'Daniel', 'Henrique', 'Paulo', 'Sérgio'],
      l: ['Silva', 'Santos', 'Ferreira', 'Pereira', 'Oliveira', 'Costa', 'Rodrigues', 'Martins', 'Jesus', 'Sousa', 'Fernandes', 'Gonçalves', 'Gomes', 'Lopes', 'Marques', 'Alves', 'Almeida', 'Ribeiro', 'Pinto', 'Carvalho', 'Teixeira', 'Moreira']
    },
    tr: {
      f: ['Mehmet', 'Mustafa', 'Ahmet', 'Emre', 'Burak', 'Kerem', 'Umut', 'Serkan', 'Enes', 'Berkay', 'Halil', 'Yusuf', 'Onur', 'Caner', 'Oğuz', 'Batuhan', 'Doğan', 'Eren', 'Furkan', 'Hakan', 'Selim', 'Kaan'],
      l: ['Yılmaz', 'Kaya', 'Demir', 'Şahin', 'Çelik', 'Yıldız', 'Yıldırım', 'Öztürk', 'Aydın', 'Özdemir', 'Arslan', 'Doğan', 'Kılıç', 'Aslan', 'Çetin', 'Kara', 'Koç', 'Kurt', 'Özkan', 'Şimşek', 'Polat', 'Erdoğan']
    },
    gr: {
      f: ['Giorgos', 'Dimitris', 'Nikos', 'Kostas', 'Panagiotis', 'Christos', 'Vasilis', 'Thanasis', 'Stefanos', 'Petros', 'Alexandros', 'Manolis', 'Andreas', 'Ilias', 'Lefteris', 'Michalis', 'Sotiris', 'Anastasios', 'Fotis', 'Yannis', 'Tasos', 'Leonidas'],
      l: ['Papadopoulos', 'Nikolaou', 'Georgiou', 'Dimitriou', 'Vlachos', 'Pappas', 'Karagiannis', 'Ioannou', 'Makris', 'Antoniou', 'Christou', 'Oikonomou', 'Stavrou', 'Manolas', 'Katsouranis', 'Samaras', 'Douvikas', 'Bakasetas', 'Galanopoulos', 'Masouras', 'Limnios', 'Tzolis']
    },
    ua: {
      f: ['Oleksandr', 'Andriy', 'Serhiy', 'Dmytro', 'Vitaliy', 'Yevhen', 'Bohdan', 'Maksym', 'Roman', 'Ivan', 'Volodymyr', 'Denys', 'Artem', 'Vladyslav', 'Yuriy', 'Mykola', 'Danylo', 'Oleh', 'Taras', 'Pavlo', 'Ihor', 'Nazar'],
      l: ['Shevchenko', 'Kovalenko', 'Bondarenko', 'Tkachenko', 'Kravchenko', 'Melnyk', 'Moroz', 'Lysenko', 'Sydorenko', 'Marchenko', 'Petrenko', 'Rudenko', 'Savchenko', 'Havrylyuk', 'Zhuk', 'Bezus', 'Hutsulyak', 'Kharatin', 'Bilyi', 'Krevsun', 'Shaparenko', 'Piatov']
    },
    ru: {
      f: ['Aleksandr', 'Dmitri', 'Sergei', 'Andrei', 'Ivan', 'Maksim', 'Anton', 'Nikolai', 'Artem', 'Roman', 'Kirill', 'Denis', 'Egor', 'Pavel', 'Vladimir', 'Ilya', 'Fyodor', 'Danil', 'Aleksei', 'Yuri', 'Gleb', 'Matvei'],
      l: ['Ivanov', 'Smirnov', 'Kuznetsov', 'Popov', 'Vasilyev', 'Petrov', 'Sokolov', 'Mikhailov', 'Novikov', 'Fyodorov', 'Morozov', 'Volkov', 'Alekseev', 'Lebedev', 'Semenov', 'Egorov', 'Pavlov', 'Kozlov', 'Stepanov', 'Nikolaev', 'Orlov', 'Makarov']
    },
    scan: {
      f: ['Erik', 'Magnus', 'Anders', 'Emil', 'Oscar', 'Jonas', 'Kasper', 'Mathias', 'Sander', 'Henrik', 'Viktor', 'Adam', 'Elias', 'Rasmus', 'Noah', 'Sebastian', 'Filip', 'Isak', 'Jakob', 'Mikkel', 'Nikolai', 'Anton'],
      l: ['Hansen', 'Johansen', 'Olsen', 'Larsen', 'Andersen', 'Nilsen', 'Pedersen', 'Kristiansen', 'Jensen', 'Karlsson', 'Andersson', 'Nilsson', 'Eriksson', 'Larsson', 'Olsson', 'Persson', 'Svensson', 'Gustafsson', 'Lindberg', 'Berg', 'Holm', 'Sørensen']
    },
    pl: {
      f: ['Kamil', 'Bartosz', 'Mateusz', 'Jakub', 'Michal', 'Piotr', 'Damian', 'Lukasz', 'Adrian', 'Patryk', 'Dawid', 'Sebastian', 'Filip', 'Krzysztof', 'Rafal', 'Marcin', 'Tomasz', 'Karol', 'Wojciech', 'Pawel', 'Szymon', 'Oskar'],
      l: ['Nowak', 'Kowalski', 'Wisniewski', 'Wojcik', 'Kowalczyk', 'Kaminski', 'Lewandowski', 'Zielinski', 'Szymanski', 'Dabrowski', 'Mazur', 'Krawczyk', 'Piotrowski', 'Grabowski', 'Pawlowski', 'Michalski', 'Nowicki', 'Adamczyk', 'Dudek', 'Wrobel', 'Jankowski', 'Sikora']
    },
    balk: {
      f: ['Marko', 'Nikola', 'Luka', 'Stefan', 'Ivan', 'Filip', 'Aleksandar', 'Nemanja', 'Dusan', 'Milos', 'Petar', 'Vukasin', 'Ante', 'Josip', 'Mateo', 'Domagoj', 'Bruno', 'Toni', 'Dario', 'Sandro', 'Hrvoje', 'Emir'],
      l: ['Jovanovic', 'Petrovic', 'Nikolic', 'Markovic', 'Djordjevic', 'Stojanovic', 'Ilic', 'Pavlovic', 'Milosevic', 'Horvat', 'Kovacevic', 'Babic', 'Maric', 'Juric', 'Novak', 'Vukovic', 'Knezevic', 'Matic', 'Zivkovic', 'Radic', 'Peric', 'Simic']
    },
    hu: {
      f: ['Bence', 'Ádám', 'Máté', 'Dániel', 'Zsolt', 'Balázs', 'Attila', 'Gergő', 'Krisztián', 'Norbert', 'Roland', 'Tamás', 'Dominik', 'Barnabás', 'Levente', 'Milán', 'Patrik', 'Zoltán', 'Csaba', 'Ákos', 'Péter', 'Márk'],
      l: ['Nagy', 'Kovács', 'Tóth', 'Szabó', 'Horváth', 'Varga', 'Kiss', 'Molnár', 'Németh', 'Farkas', 'Balogh', 'Papp', 'Lakatos', 'Juhász', 'Mészáros', 'Oláh', 'Simon', 'Rácz', 'Fekete', 'Szűcs', 'Török', 'Gál']
    },
    jp: {
      f: ['Sota', 'Ren', 'Yuto', 'Haruto', 'Kaito', 'Takumi', 'Riku', 'Sho', 'Daiki', 'Yuki', 'Kenta', 'Ryota', 'Hiroki', 'Shota', 'Koki', 'Taiga', 'Naoki', 'Yamato', 'Kosei', 'Tatsuya', 'Ryo', 'Kento'],
      l: ['Sato', 'Suzuki', 'Takahashi', 'Tanaka', 'Ito', 'Watanabe', 'Yamamoto', 'Nakamura', 'Kobayashi', 'Kato', 'Yoshida', 'Yamada', 'Sasaki', 'Matsumoto', 'Inoue', 'Kimura', 'Hayashi', 'Shimizu', 'Saito', 'Mori', 'Ikeda', 'Hashimoto']
    },
    kr: {
      f: ['Min-jae', 'Ji-sung', 'Hyun-woo', 'Seung-ho', 'Dong-gook', 'Young-jun', 'Jae-sung', 'Sang-ho', 'Woo-young', 'Tae-hwan', 'Jun-ho', 'Kyung-won', 'In-beom', 'Seok-ho', 'Hee-chan', 'Gyu-sung', 'Chan-hee', 'Jin-su', 'Ui-jo', 'Kang-in', 'Moon-hwan', 'Beom-seok'],
      l: ['Kim', 'Lee', 'Park', 'Choi', 'Jung', 'Kang', 'Cho', 'Yoon', 'Jang', 'Lim', 'Han', 'Oh', 'Seo', 'Shin', 'Kwon', 'Hwang', 'Ahn', 'Song', 'Hong', 'Jeon', 'Moon', 'Son']
    },
    cn: {
      f: ['Wei', 'Hao', 'Lei', 'Jun', 'Yang', 'Bo', 'Chao', 'Tao', 'Peng', 'Kai', 'Yu', 'Xin', 'Long', 'Qiang', 'Feng', 'Ming', 'Jie', 'Rui', 'Bin', 'Sheng', 'Cheng', 'Hui'],
      l: ['Wang', 'Li', 'Zhang', 'Liu', 'Chen', 'Yang', 'Huang', 'Zhao', 'Wu', 'Zhou', 'Xu', 'Sun', 'Ma', 'Zhu', 'Hu', 'Guo', 'He', 'Gao', 'Lin', 'Luo', 'Zheng', 'Liang']
    },
    au: {
      f: ['Jackson', 'Riley', 'Cooper', 'Mason', 'Hudson', 'Archie', 'Lachlan', 'Declan', 'Beau', 'Jai', 'Kai', 'Marco', 'Nikita', 'Adrian', 'Dylan', 'Brandon', 'Jordan', 'Nicholas', 'Joshua', 'Aiden', 'Mitchell', 'Lucas'],
      l: ['Williams', 'Thompson', 'Anderson', 'Mitchell', 'Ryan', 'Kennedy', 'Fitzgerald', 'O\'Neill', 'Petratos', 'Kalmar', 'Bozanic', 'Vidmar', 'Nabbout', 'Maclaren', 'Grant', 'Hall', 'Dixon', 'Bell', 'Duke', 'Caceres', 'Deng', 'Mabil']
    },
    arab: {
      f: ['Mohammed', 'Abdullah', 'Ahmed', 'Saud', 'Faisal', 'Turki', 'Nawaf', 'Khalid', 'Salem', 'Fahad', 'Yasser', 'Hassan', 'Abdulrahman', 'Sultan', 'Majed', 'Naif', 'Bandar', 'Rakan', 'Ziyad', 'Waleed', 'Meshari', 'Omar'],
      l: ['Al-Otaibi', 'Al-Harbi', 'Al-Dossari', 'Al-Shammari', 'Al-Ghamdi', 'Al-Qahtani', 'Al-Zahrani', 'Al-Anazi', 'Al-Shehri', 'Al-Malki', 'Al-Juhani', 'Al-Amri', 'Al-Mutairi', 'Al-Subaie', 'Al-Balawi', 'Al-Nasser', 'Al-Sahafi', 'Al-Rashidi', 'Al-Khaibari', 'Al-Saeed', 'Al-Hamdan', 'Al-Yami']
    },
    nafr: {
      f: ['Youssef', 'Mehdi', 'Anas', 'Achraf', 'Hamza', 'Bilal', 'Ayoub', 'Soufiane', 'Karim', 'Walid', 'Ismail', 'Zakaria', 'Oussama', 'Reda', 'Amine', 'Nabil', 'Yassine', 'Marouane', 'Tarek', 'Sami', 'Rami', 'Chaker'],
      l: ['El Amrani', 'Benali', 'Bouzid', 'El Idrissi', 'Ziani', 'Hamdi', 'Saidi', 'Bennani', 'Cherif', 'Haddad', 'Belkacem', 'Mansouri', 'Zidane', 'Bouras', 'Hammouda', 'Trabelsi', 'Jelassi', 'Khelifi', 'Abdellaoui', 'Meziane', 'Rahmani', 'Sabri']
    },
    wafr: {
      f: ['Emmanuel', 'Samuel', 'Isaac', 'Kwame', 'Kofi', 'Daniel', 'Michael', 'Joseph', 'Prince', 'Eric', 'Richard', 'Frank', 'Godfred', 'Bright', 'Ibrahim', 'Moussa', 'Abdoul', 'Cheikh', 'Lamine', 'Sekou', 'Christian', 'Divine'],
      l: ['Mensah', 'Boateng', 'Asante', 'Owusu', 'Appiah', 'Addo', 'Amoah', 'Okoro', 'Adeyemi', 'Obi', 'Eze', 'Nwankwo', 'Diarra', 'Traoré', 'Konaté', 'Cissé', 'Sow', 'Ndiaye', 'Bakayoko', 'Kouassi', 'Mbongo', 'Kabongo']
    },
    za: {
      f: ['Sipho', 'Thabo', 'Lebo', 'Kagiso', 'Tebogo', 'Mduduzi', 'Bongani', 'Njabulo', 'Lehlohonolo', 'Katlego', 'Siyabonga', 'Nkosinathi', 'Themba', 'Aubrey', 'Ronwen', 'Keagan', 'Ethan', 'Dillan', 'Luke', 'Grant', 'Ashley', 'Deano'],
      l: ['Dlamini', 'Nkosi', 'Ndlovu', 'Mahlangu', 'Mokoena', 'Khumalo', 'Zulu', 'Sithole', 'Maluleka', 'Mngqithi', 'Radebe', 'Makgopa', 'Mbatha', 'Molefe', 'Tshabalala', 'Botha', 'Brockie', 'Coetzee', 'Fortuin', 'Petersen', 'Andrews', 'Titus']
    },
    oce: {
      f: ['Tama', 'Wiremu', 'Manaia', 'Josh', 'Ryan', 'Dylan', 'Joel', 'Aaron', 'Sione', 'Jone', 'Roy', 'Alex', 'Sam', 'Ben', 'Liam', 'Cory', 'Emmanuel', 'Georges', 'Bertrand', 'Micah', 'Nathan', 'Elijah'],
      l: ['Tuiloma', 'Ngata', 'Kereopa', 'Wilkinson', 'Payne', 'Gillion', 'Bevan', 'Hoyle', 'Lolohea', 'Krishna', 'Hughes', 'de Vries', 'Vaipulu', 'Kaltack', 'Iwai', 'Waita', 'Kayara', 'Hmae', 'Wajoka', 'Bako', 'Simon', 'Roqica']
    }
  };

  function hash(s) {
    var h = 2166136261;
    for (var i = 0; i < s.length; i++) { h ^= s.charCodeAt(i); h = Math.imul(h, 16777619); }
    return h >>> 0;
  }
  function rng(seed) {
    return function () {
      seed |= 0; seed = seed + 0x6D2B79F5 | 0;
      var t = Math.imul(seed ^ seed >>> 15, 1 | seed);
      t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t;
      return ((t ^ t >>> 14) >>> 0) / 4294967296;
    };
  }

  var XI = ['GK', 'RB', 'CB', 'CB', 'LB', 'DM', 'CM', 'AM', 'RW', 'ST', 'LW'];
  /* el orden del banquillo respeta los minimos por linea: ningun equipo
     puede quedarse con menos de 5 mediocampistas ni 3 delanteros */
  var BENCH = ['GK', 'CB', 'CM', 'LB', 'DM', 'ST', 'RW', 'AM', 'CB', 'LW', 'RB', 'CM'];
  var GROUP = {
    GK: 'GK', RB: 'DEF', CB: 'DEF', LB: 'DEF', RWB: 'DEF', LWB: 'DEF',
    DM: 'MID', CM: 'MID', AM: 'MID', RW: 'ATT', LW: 'ATT', ST: 'ATT', CF: 'ATT'
  };

  /* El nivel del equipo, visto en sus once mejores. Es lo que decide con
     qué valoración salen los jugadores que hay que inventar. */
  function nivelDe(team) {
    var r = (team.p || []).map(function (p) { return p[2]; })
      .sort(function (a, b) { return b - a; }).slice(0, 11);
    if (!r.length) return 70;
    var suma = 0;
    r.forEach(function (v) { suma += v; });
    return Math.round(suma / r.length);
  }

  function completeTeam(team, poolKey, size, opts) {
    opts = opts || {};
    var pool = POOLS[poolKey] || POOLS.es;
    /* la semilla lleva la temporada: si no, cada vez que un equipo repone
       bajas saldrían los mismos nombres y las mismas valoraciones */
    var rand = rng(hash(team.n + '|' + poolKey + '|' + (opts.semilla || '')));
    var str = team.str || nivelDe(team);
    var slots = XI.concat(BENCH).slice(0, size || 17);
    var real = (team.p || []).map(function (p) { return p.slice(); });
    var used = [], out = new Array(slots.length);

    // 1) los jugadores reales ocupan primero su puesto exacto, luego su zona
    function place(match) {
      real.forEach(function (p, pi) {
        if (used[pi]) return;
        for (var s = 0; s < slots.length; s++) {
          if (out[s]) continue;
          if (match(slots[s], p[1])) { out[s] = p; used[pi] = 1; return; }
        }
      });
    }
    place(function (slot, pos) { return slot === pos; });
    place(function (slot, pos) { return GROUP[slot] === GROUP[pos]; });
    place(function (slot, pos) { return GROUP[slot] !== 'GK' && GROUP[pos] !== 'GK'; });

    // los que no caben se añaden al final
    var leftovers = real.filter(function (p, i) { return !used[i]; });

    // 2) el resto de huecos, con nombres del país.
    //    Un jugador generado nunca supera al mejor jugador real del equipo.
    var best = 99;
    if (real.length) {
      best = real.reduce(function (m, p) { return Math.max(m, p[2]); }, 0) - 1;
      best = Math.max(best, str - 3);
    }
    var firsts = {}, lasts = {};
    for (var s2 = 0; s2 < slots.length; s2++) {
      if (out[s2]) continue;
      var fn, ln, guard = 0;
      do {
        fn = pool.f[Math.floor(rand() * pool.f.length)];
        ln = pool.l[Math.floor(rand() * pool.l.length)];
      } while ((firsts[fn] || lasts[ln]) && guard++ < 60);
      firsts[fn] = lasts[ln] = 1;
      var isXI = s2 < XI.length;
      var rat = Math.round(str + (isXI ? (rand() * 5 - 3) : (rand() * 4 - 7)));
      /* los de la cantera llegan por detrás de los titulares: tienen que
         ganarse el sitio, y con los años suben */
      if (opts.jovenes) rat = Math.round(str - 3 - rand() * 6);
      rat = Math.max(45, Math.min(best, Math.min(92, rat)));
      /* al reponer bajas salen de la cantera: chavales, no veteranos */
      var age = opts.jovenes ? 17 + Math.floor(rand() * 5) : 19 + Math.floor(rand() * 16);
      var pl = [fn + ' ' + ln, slots[s2], rat, age];
      pl.gen = true;
      out[s2] = pl;
    }

    team.p = out.concat(leftovers);
    team.filled = true;
  }

  /* ---------------------------------------------------------------------
     CANTERA Y TECHO
     Cada jugador tiene un techo: hasta dónde puede llegar si le va bien.
     No se guarda en ninguna parte, se saca de su nombre, así que es el
     mismo en cada partida y sobrevive a cualquier recarga. Sin techo, un
     chaval generado con 58 se queda en 63 para siempre y el mundo pierde
     cracks temporada a temporada.
     --------------------------------------------------------------------- */
  function potencial(p) {
    if (!p) return 0;
    var h = hash(String(p[0]) + '|' + String(p[1]));
    /* la mayoría se queda en el montón y unos pocos son figuras */
    var r = (h % 1000) / 1000;
    var techo = 62 + Math.round(Math.pow(r, 1.9) * 34);     /* 62 … 96 */
    return Math.max(p[2] || 0, techo);
  }

  /* Chavales nuevos para un club, SIN tocar el orden de la plantilla: se
     añaden al final, que el once lo decide el entrenador. */
  function cantera(team, poolKey, cuantos, semilla) {
    if (!team || cuantos <= 0) return 0;
    var pool = POOLS[poolKey] || POOLS.es;
    var rand = rng(hash(team.n + '|cantera|' + (semilla || '')));
    var str = team.str || nivelDe(team);
    var firsts = {}, lasts = {}, hechos = 0;
    (team.p || []).forEach(function (x) { lasts[String(x[0]).split(' ').pop()] = 1; });
    var puestos = ['GK', 'CB', 'RB', 'LB', 'DM', 'CM', 'AM', 'RW', 'LW', 'ST'];
    for (var i = 0; i < cuantos; i++) {
      var fn, ln, guard = 0;
      do {
        fn = pool.f[Math.floor(rand() * pool.f.length)];
        ln = pool.l[Math.floor(rand() * pool.l.length)];
      } while ((firsts[fn] || lasts[ln]) && guard++ < 60);
      firsts[fn] = lasts[ln] = 1;
      /* entra por detrás: se lo tiene que ganar */
      /* De la cantera de un grande no sale un jugador del montón: entra
         por detrás de los titulares, pero con el nivel de la casa. */
      var rat = Math.max(45, Math.min(88, Math.round(str - 3 - rand() * 7)));
      var pos = puestos[Math.floor(rand() * puestos.length)];
      var pl = [fn + ' ' + ln, pos, rat, 16 + Math.floor(rand() * 4)];
      pl.gen = true;
      (team.p = team.p || []).push(pl);
      hechos++;
    }
    return hechos;
  }

  function run(LEAGUES) {
    Object.keys(LEAGUES).forEach(function (id) {
      var lg = LEAGUES[id];
      if (!lg.pool) return;                       // sólo ligas que lo pidan
      lg.teams.forEach(function (t) {
        /* «fijo» es un plantel puesto a mano: ni se rellena ni se reordena,
           que el once es el que eligió quien lo cargó */
        if (t.fijo) return;
        if (t.p && t.p.length >= (lg.squadSize || 17) && !t.str) return;
        completeTeam(t, t.pool || lg.pool, lg.squadSize || 17);
      });
    });
  }

  global.Fill = { run: run, completeTeam: completeTeam, pools: POOLS,
    cantera: cantera, potencial: potencial, nivelDe: nivelDe };
})(window);
