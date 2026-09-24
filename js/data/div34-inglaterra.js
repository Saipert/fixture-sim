/* =========================================================================
   TERCERA Y CUARTA DIVISIÓN DE INGLATERRA
   League One baja 4 y sube 3 (2 directos + promoción).
   League Two sube 4 (3 directos + promoción); por debajo no hay más categorías.
   ========================================================================= */
window.LEAGUES = window.LEAGUES || {};

window.LEAGUES.league1 = {
  id: "league1", name: "EFL League One", country: "Inglaterra", tier: 3, ucl: 0, rel: 4,
  pool: "en", squadSize: 17, teams: [
    { n: "Leicester City", s: "LEI", c1: "#0053A0", c2: "#FDBE11", str: 70, p: [
       ['Fran Vieites', 'GK', 69, 26], ['Ricardo Pereira', 'RB', 72, 31], ['Jannik Vestergaard', 'CB', 72, 32],
       ['Wout Faes', 'CB', 71, 27], ['Victor Kristiansen', 'LB', 73, 22], ['Boubakary Soumaré', 'DM', 73, 26],
       ['Jordan James', 'CM', 67, 20], ['Michael Golding', 'AM', 60, 19], ['Abdul Fatawu', 'RW', 74, 21],
       ['Julián Carranza', 'ST', 71, 25], ['Stephy Mavididi', 'LW', 73, 27], ['Asmir Begović', 'GK', 68, 38],
       ['Caleb Okoli', 'CB', 71, 23], ['Luke Thomas', 'LB', 68, 24], ['Louis Page', 'CM', 59, 16],
       ['Jordan Ayew', 'RW', 71, 33], ['Patson Daka', 'ST', 70, 26], ['Harry Winks', 'DM', 72, 29]
     ] },
    { n: "Sheffield Wednesday", s: "SHW", c1: "#0057B8", c2: "#FFFFFF", str: 67, p: [
       ['Ethan Horvath', 'GK', 68, 30], ['Yan Valery', 'RB', 70, 26], ["Di'Shon Bernard", 'CB', 68, 24],
       ['Dominic Iorfa', 'CB', 67, 30], ['Max Lowe', 'LB', 70, 28], ['Nyakie Chalobah', 'DM', 68, 30],
       ['Barry Bannan', 'CM', 72, 35], ['Sheunesu Fusire', 'CM', 55, 20], ['Bailey-Tye Cadamarteri', 'ST', 63, 20],
       ['Jamal Lowe', 'ST', 69, 30], ['Olaf Kobacki', 'LW', 63, 23], ['Pierce Charles', 'GK', 64, 19],
       ['Liam Palmer', 'CB', 66, 33], ['Harry Amass', 'LB', 67, 18], ['Svante Ingelsson', 'CM', 67, 27],
       ['Charlie McNeill', 'ST', 62, 21], ['Iké Ugbo', 'ST', 68, 26], ['Gabriel Otegbayo', 'DM', 62, 20]
     ] },
    { n: "Oxford United", s: "OXF", c1: "#FFE500", c2: "#0057B8", str: 65, p: [
       ['James Cumming', 'GK', 66, 25], ['Hidde ter Avest', 'RB', 66, 28], ['Benjamin Davies', 'CB', 68, 29],
       ['Ciaron Brown', 'CB', 67, 27], ['Gregory Leigh', 'LB', 65, 30], ['Cameron Brannagan', 'DM', 68, 29],
       ['Joshua Johnson', 'CM', 53, 20], ['Louie Sibley', 'AM', 64, 23], ['Przemysław Płacheta', 'RW', 66, 27],
       ['Nik Prelec', 'ST', 66, 24], ['Siriki Dembélé', 'LW', 67, 28], ['Matthew Ingram', 'GK', 64, 31],
       ['Michał Helik', 'CB', 67, 29], ['Jack Currie', 'LB', 63, 23], ['Brian De Keersmaecker', 'DM', 67, 25],
       ['Ole Romeny', 'AM', 64, 25], ['Mark Harris', 'ST', 65, 26], ['Filip Krastev', 'LW', 66, 23]
     ] },
    { n: "Luton Town", s: "LUT", c1: "#F78F1E", c2: "#FFFFFF", str: 68, p: [
       ['James Shea', 'GK', 66, 34], ['Reuell Walters', 'RB', 63, 20], ['Teden Mengi', 'CB', 71, 23],
       ['Mads Andersen', 'CB', 70, 27], ['Conrad Bramall', 'LB', 64, 29], ['George Saville', 'DM', 71, 32],
       ['Jordan Clark', 'CM', 70, 31], ['Marvelous Nakamba', 'DM', 71, 31], ['Isaiah Jones', 'RW', 70, 26],
       ['Elijah Adebayo', 'ST', 71, 27], ['Zack Nelson', 'LW', 62, 20], ['Joshua Keeley', 'GK', 64, 22],
       ['Kallum Naismith', 'CB', 69, 33], ['Joseph Johnson', 'LB', 62, 19], ['Liam Walsh', 'CM', 68, 27],
       ['Shayden Morris', 'RW', 63, 23], ['Nahki Wells', 'ST', 69, 35], ['Shandon Baptiste', 'CM', 68, 27]
     ] },
    { n: "Huddersfield Town", s: "HUD", c1: "#0057B8", c2: "#FFFFFF", str: 65, p: [
       ['Lee Nicholls', 'GK', 65, 32], ['Lynden Gooch', 'RB', 67, 29], ['Jack Whatmough', 'CB', 68, 28],
       ['Murray Wallace', 'CB', 67, 32], ['Mickel Miller', 'LB', 66, 29], ['David Kasumu', 'DM', 67, 25],
       ['Benjamin Wiles', 'CM', 66, 26], ['Leo Castledine', 'AM', 61, 19], ['John Taylor', 'ST', 65, 22],
       ['Alfie May', 'ST', 69, 31], ['Myers-Harness Harness', 'LW', 67, 29], ['Olamidayo Goodman', 'GK', 64, 21],
       ['Roberto Balker', 'CB', 66, 26], ['Ruben Roosken', 'LB', 65, 25], ['Ryan Ledson', 'CM', 66, 27],
       ['Zépiqueno Redmond', 'ST', 63, 19], ['Dion Charles', 'ST', 65, 29], ['Michael McGuane', 'DM', 67, 26]
     ] },
    { n: "Reading", s: "REA", c1: "#0057B8", c2: "#FFFFFF", str: 69, p: [
       ['Joel Pereira', 'GK', 71, 29], ['Andrew Yiadom', 'RB', 68, 33], ['Derrick Williams', 'CB', 69, 32],
       ["Padhraic O'Connor", 'CB', 69, 27], ['Matthew Jacob', 'LB', 68, 24], ['Liam Fraser', 'DM', 67, 27],
       ['Lewis Wing', 'CM', 73, 30], ['Daniel Kyerewaa', 'AM', 68, 24], ['Matthew Ritchie', 'RW', 70, 35],
       ['Jack Marriott', 'ST', 68, 30], ['Patrick Lane', 'LW', 68, 24], ['Jack Stevens', 'GK', 66, 27],
       ['Finley Burns', 'CB', 68, 22], ['Jeriel Dorsett', 'LB', 68, 23], ['Charlie Savage', 'CM', 70, 22],
       ['Jeremiah Okine-Peters', 'RW', 61, 20], ["Mark O'Mahony", 'ST', 67, 20], ['Benjamin Elliott', 'CM', 68, 22]
     ] },
    { n: "Plymouth Argyle", s: "PLY", c1: "#00654E", c2: "#FFFFFF", str: 63, p: [
       ['Conor Hazard', 'GK', 66, 27], ['Joseph Edwards', 'RB', 64, 34], ['Pleguezuelo', 'CB', 65, 28],
       ['Kornél Szűcs', 'CB', 64, 23], ['Bali Mumba', 'LB', 66, 23], ['Malachi Boateng', 'DM', 62, 22],
       ['Ayman Benarous', 'CM', 59, 21], ['Jamie Paterson', 'AM', 65, 33], ['Xavier Amaechi', 'RW', 65, 24],
       ['Lorent Tolaj', 'ST', 62, 23], ['Owen Oseni', 'ST', 54, 22], ['Luca Ashby-Hammond', 'GK', 57, 24],
       ['Brendan Galloway', 'DM', 63, 29], ['Jack MacKenzie', 'LB', 64, 24], ['Caleb Roberts', 'CM', 53, 19],
       ['Owen Dale', 'RW', 63, 26], ['Aribusitamunoipirim Pepple', 'ST', 54, 22], ['Matthew Sorinola', 'RB', 64, 24]
     ] },
    { n: "Blackpool", s: "BLA", c1: "#F68B1F", c2: "#FFFFFF", str: 66, p: [
       ['Bailey Peacock-Farrell', 'GK', 66, 28], ['Andrew Lyons', 'RB', 63, 24], ['Michael Ihiekwe', 'CB', 67, 32],
       ['Fraser Horsfall', 'CB', 65, 28], ['Hayden Coulson', 'LB', 64, 27], ['Jordan Brown', 'DM', 63, 24],
       ['Lee Evans', 'CM', 65, 30], ['George Honeyman', 'AM', 69, 30], ['Joshua Bowler', 'RW', 67, 26],
       ['Nathan Ennis', 'ST', 64, 26], ['Emil Hansson', 'LW', 67, 27], ['Franco Ravizzoli', 'GK', 62, 27],
       ['Oliver Casey', 'CB', 65, 24], ['James Husband', 'LB', 63, 31], ['Albie Morgan', 'CM', 65, 25],
       ['Tom Bloxham', 'AM', 62, 21], ['Ashley Fletcher', 'ST', 63, 29], ['Christopher Hamilton', 'LW', 64, 30]
     ] },
    { n: "Barnsley", s: "BAR", c1: "#E30613", c2: "#FFFFFF", str: 64, p: [
       ['Mahoney Cooper', 'GK', 64, 23], ['Tennai Watson', 'CM', 64, 28], ['John Earl', 'CB', 66, 26],
       ['Maël de Gevigney', 'CB', 66, 25], ['Nathanael Ogbeta', 'LB', 66, 24], ['Luca Connell', 'DM', 67, 24],
       ['Kelechi Nwakali', 'CM', 67, 27], ['Jonathan Russell', 'CM', 65, 24], ['Caylan Vickers', 'ST', 62, 20],
       ['Davis Keillor-Dunn', 'ST', 68, 27], ['Reyes Cleary', 'ST', 59, 21], ['Jackson Smith', 'GK', 62, 23],
       ['Marc Roberts', 'CB', 66, 34], ['Georgie Gent', 'LB', 65, 21], ['Adam Phillips', 'CM', 66, 27],
       ['Fábio Jaló', 'ST', 59, 19], ['David McGoldrick', 'ST', 65, 37], ['Neil Farrugia', 'LB', 64, 26]
     ] },
    { n: "Bradford City", s: "BRA", c1: "#8B1F2F", c2: "#F5A623", str: 64, p: [
       ['Samuel Walker', 'GK', 64, 33], ['Joshua Neufville', 'RB', 65, 24], ['Matthew Pennington', 'CB', 67, 30],
       ['Joseph Wright', 'CB', 66, 30], ['Ibou Touray', 'LB', 66, 30], ['Mcauley Power', 'DM', 69, 31],
       ['Nicholas Powell', 'CM', 66, 31], ['Antoni Šarčević', 'AM', 64, 33], ['William Swan', 'ST', 63, 24],
       ['Stephen Humphrys', 'ST', 68, 27], ['Calum Kavanagh', 'ST', 62, 21], ['Joseph Hilton', 'GK', 59, 25],
       ['Thomas McIntyre', 'CB', 65, 26], ['Tyreik Wright', 'CM', 63, 23], ['Antony Pattison', 'CM', 63, 27],
       ['Harry Ibbitson', 'ST', 54, 19], ['Andrew Cook', 'ST', 66, 34], ['Bradley Halliday', 'RB', 65, 29]
     ] },
    { n: "Wigan Athletic", s: "WIG", c1: "#0057B8", c2: "#FFFFFF", str: 67, p: [
       ['Samuel Tickle', 'GK', 68, 23], ['James Carragher', 'RB', 64, 22], ['Morgan Fox', 'CB', 69, 31],
       ['Jason Kerr', 'CB', 67, 28], ['Steven Sessegnon', 'LB', 66, 25], ['Matthew Smith', 'DM', 65, 24],
       ['Jensen Weir', 'CM', 65, 23], ['Oliver Cooper', 'AM', 69, 25], ['Joseph Hungbo', 'RW', 68, 25],
       ['Philip Mullin', 'ST', 67, 30], ['Fraser Murray', 'LW', 65, 26], ['Toby Savin', 'GK', 62, 24],
       ['William Aimson', 'CB', 66, 31], ['Luke Robinson', 'LB', 63, 23], ['Ryan Trevitt', 'CM', 63, 22],
       ['Callum McManaman', 'RW', 63, 34], ['Christian Saydee', 'ST', 66, 23], ['Callum Wright', 'AM', 66, 25]
     ] },
    { n: "Peterborough United", s: "PET", c1: "#0057B8", c2: "#FFFFFF", str: 66, p: [
       ['Alexander Bass', 'GK', 65, 27], ['Peter Kioso', 'RB', 67, 25], ['Samuel Hughes', 'CB', 67, 28],
       ["Thomas O'Connor", 'CB', 66, 26], ['Rio Adebisi', 'LB', 65, 24], ['Archie Collins', 'DM', 67, 25],
       ['Benjamin Woods', 'CM', 63, 22], ['Matthew Garbett', 'AM', 66, 23], ['Cian Hayes', 'RW', 64, 22],
       ['Harry Leonard', 'ST', 66, 21], ['Abraham Odoh', 'LW', 66, 24], ['Vicente Reyes', 'GK', 65, 21],
       ['Thomas Lees', 'CB', 66, 34], ['Jacob Mendy', 'CM', 63, 28], ['Brandon Khela', 'CM', 60, 20],
       ['Declan Frith', 'LW', 63, 23], ['Jimmy-Jay Morgan', 'ST', 62, 19], ['Oscar Wallin', 'CB', 65, 23]
     ] },
    { n: "Stockport County", s: "STO", c1: "#0057B8", c2: "#FFFFFF", str: 60, p: [
       ['Cheremeh Addai', 'GK', 59, 27], ["Corey O'Keeffe", 'RB', 59, 27], ['Ethan Pye', 'CB', 60, 22],
       ['Arttu Hoskonen', 'CB', 60, 28], ['T. Edun', 'LB', 58, 27], ['Oliver Norwood', 'DM', 63, 34],
       ['Benjamin Osborn', 'CM', 62, 30], ['Owen Moxon', 'CM', 60, 27], ['Jayden Fevrier', 'RW', 58, 22],
       ['Nathan Lowe', 'ST', 60, 19], ['Maine Mothersille', 'LW', 59, 21], ['Ben Hinchliffe', 'GK', 58, 37],
       ['Callum Connolly', 'CB', 59, 27], ['Owen Dodgson', 'LB', 57, 22], ['Lewis Bate', 'CM', 61, 22],
       ['Jack Diamond', 'RW', 58, 25], ['Kyle Wootton', 'ST', 59, 28], ['Ohray Bailey', 'CM', 59, 25]
     ] },
    { n: "Wycombe Wanderers", s: "WYC", c1: "#003DA5", c2: "#7FB3E3", str: 62, p: [
       ['William Norris', 'GK', 62, 31], ['Jack Grimmer', 'RB', 62, 31], ['Anders Hagelskjær', 'CB', 62, 28],
       ['Dan Casey', 'CB', 62, 27], ['Luke Leahy', 'LB', 63, 32], ['Joshua Scowen', 'DM', 62, 32],
       ['Magnus Westergaard', 'CM', 62, 27], ['Alexander Lowry', 'AM', 60, 22], ['F. Onyedinma', 'RW', 62, 28],
       ['Cauley Woodrow', 'ST', 63, 30], ['Samuel Bell', 'LW', 61, 23], ['Mikki van Sas', 'GK', 56, 21],
       ['Connor Taylor', 'CB', 60, 23], ['Niall Huggins', 'LB', 63, 24], ['George Abbott', 'CM', 60, 19],
       ['Armando Quitirna', 'RW', 59, 25], ['Bradley Fink', 'ST', 60, 22], ['Caolan Boyd-Munce', 'DM', 61, 25]
     ] },
    { n: "Mansfield Town", s: "MAN", c1: "#FFE500", c2: "#0057B8", str: 62, p: [
       ['Liam Roberts', 'GK', 64, 30], ['Elliott Hewitt', 'RB', 63, 31], ['D. Oshilaja', 'CB', 64, 32],
       ['Baily Cargill', 'CB', 62, 29], ['Frazer Blake-Tracy', 'LB', 62, 29], ['Jamie McDonnell', 'DM', 64, 21],
       ['Aaron Lewis', 'CM', 61, 27], ['Joseph Gardner', 'AM', 59, 20], ['Luke Bolton', 'RW', 61, 25],
       ['Tyler Roberts', 'ST', 64, 26], ['Kyle McAdam', 'LW', 56, 20], ['Owen Mason', 'GK', 56, 21],
       ['Ryan Sweeney', 'CB', 62, 28], ['Stephen McLaughlin', 'LB', 61, 35], ['Regan Hendry', 'CM', 61, 27],
       ['Dominic Dwyer', 'ST', 62, 34], ['William Evans', 'ST', 63, 28], ['Louis Reed', 'DM', 62, 27]
     ] },
    { n: "Stevenage", s: "STE", c1: "#E30613", c2: "#FFFFFF", str: 61, p: [
       ['Taye Ashby-Hammond', 'GK', 61, 26], ['Luther James-Wildin', 'RB', 61, 27], ['Carl Piergianni', 'CB', 64, 33],
       ['Daniel Sweeney', 'CB', 61, 31], ['Daniel Butler', 'LB', 60, 30], ['Daniel Phillips', 'DM', 62, 24],
       ['Jordan Houghton', 'CM', 61, 29], ['Daniel Kemp', 'AM', 62, 26], ['Jordan Roberts', 'RW', 61, 31],
       ['James Reid', 'ST', 62, 30], ['Beryly Lubala', 'ST', 59, 27], ['Filip Marschall', 'GK', 59, 22],
       ['Charles Goode', 'CB', 61, 29], ['Saxon Earley', 'LB', 59, 22], ['Ryan Doherty', 'CM', 49, 16],
       ['Chem Campbell', 'RW', 59, 22], ['Jake Young', 'ST', 60, 23], ['Harvey White', 'DM', 60, 23]
     ] },
    { n: "Leyton Orient", s: "LEY", c1: "#E30613", c2: "#FFFFFF", str: 63, p: [
       ['Tommy Simkin', 'GK', 62, 20], ['Thomas James', 'RB', 64, 29], ['Omar Beckles', 'CB', 64, 33],
       ['Daniel Happe', 'CB', 64, 26], ['T. Adaramola', 'CM', 62, 21], ['Joe White', 'CM', 62, 22],
       ['Idris El Mizouni', 'CM', 67, 24], ['Jack Moorhouse', 'AM', 59, 19], ['Sonny Perkins', 'RW', 62, 21],
       ['Anthony Connolly', 'ST', 68, 25], ['Demetri Mitchell', 'LW', 67, 28], ['Killian Cahill', 'GK', 59, 21],
       ['River Edmonds-Green', 'CB', 63, 26], ['Sean Clare', 'RB', 64, 28], ['Tyreeq Bakinson', 'CM', 63, 26],
       ["Oliver O'Neill", 'LW', 65, 22], ['Joshua Koroma', 'ST', 67, 26], ['Michael Craig', 'RB', 64, 22]
     ] },
    { n: "Doncaster Rovers", s: "DON", c1: "#E30613", c2: "#FFFFFF", str: 63, p: [
       ['Thimothée Lo-Tutala', 'GK', 65, 22], ['Jamie Sterry', 'RB', 63, 29], ['Matthew Pearson', 'CB', 65, 31],
       ["Connor O'Riordan", 'CB', 63, 21], ['Jack Senior', 'LB', 61, 28], ['Owen Bailey', 'DM', 64, 26],
       ['Robbie Gotts', 'CM', 62, 25], ['George Broadbent', 'DM', 61, 24], ['Luke Molyneux', 'RW', 65, 27],
       ['Brandon Hanlan', 'ST', 62, 28], ['Jordan Gibson', 'LW', 63, 27], ['Ian Lawlor', 'GK', 59, 30],
       ['John-Alan McGrath', 'CB', 61, 22], ['James Maxwell', 'LB', 60, 23], ['Ben Close', 'CM', 60, 28],
       ['D. Ajayi', 'AM', 56, 19], ['B. Sharp', 'ST', 61, 39], ['Glenn Middleton', 'LW', 63, 25]
     ] },
    { n: "Burton Albion", s: "BUR", c1: "#FFE500", c2: "#000000", str: 64, p: [
       ['Bradley Collins', 'GK', 67, 28], ['Toby Sibbick', 'RB', 68, 26], ['Terence Vancooten', 'CB', 66, 27],
       ['Udoka Godwin-Malifé', 'CB', 65, 25], ['Dylan Williams', 'LB', 64, 21], ['George Evans', 'DM', 65, 30],
       ['Clive Webster', 'CM', 64, 21], ['Joshua McKiernan', 'AM', 63, 23], ['Kyran Lofthouse', 'RW', 60, 24],
       ['Jake Beesley', 'ST', 66, 28], ['Tyrese Shade', 'LW', 62, 25], ['Harvey Isted', 'GK', 64, 28],
       ['Alex Hartridge', 'CB', 65, 26], ['Sebastian Revan', 'CM', 63, 21], ['James Jones', 'CM', 62, 29],
       ['Julian Larsson', 'ST', 60, 24], ['Fábio Tavares', 'ST', 64, 24], ['Jack Armer', 'CB', 64, 24]
     ] },
    { n: "Milton Keynes Dons", s: "MKD", c1: "#FFFFFF", c2: "#000000", str: 63, p: [
       ['Craig MacGillivray', 'GK', 60, 32], ['Kane Wilson', 'RB', 67, 25], ['Marvin Ekpiteta', 'CB', 66, 29],
       ['Gethin Jones', 'CB', 63, 29], ['Joseph Tomlinson', 'CM', 60, 25], ['Daniel Crowley', 'AM', 63, 27],
       ['William Collar', 'CM', 63, 28], ['Alexander Gilbey', 'AM', 63, 30], ['Nathaniel Méndez-Laing', 'RW', 65, 33],
       ['Callum Paterson', 'ST', 66, 30], ['Rushian Hepburn-Murphy', 'ST', 61, 26], ['Connal Trueman', 'GK', 60, 29],
       ['James Mellish', 'CB', 61, 27], ['Aaron Nemane', 'RB', 61, 27], ['Liam Kelly', 'CM', 62, 29],
       ['Scott Hogan', 'ST', 60, 33], ['Aaron Collins', 'ST', 66, 28], ['Nathan Thompson', 'CB', 61, 34]
     ] },
    { n: "Notts County", s: "NOT", c1: "#000000", c2: "#FFFFFF", str: 61, p: [
       ['Kelle Roos', 'GK', 62, 33], ['Barry Cotter', 'RB', 62, 26], ['Jacob Bedeau', 'CB', 62, 25],
       ['Matthew Platt', 'CB', 61, 27], ['Nicholas Tsaroulla', 'LB', 60, 26], ['Tyrese Hall', 'DM', 60, 19],
       ['Oliver Norburn', 'CM', 63, 32], ['Conor Grant', 'AM', 59, 23], ['Jay Jones', 'RW', 63, 27],
       ['Alassana Jatta', 'ST', 63, 26], ['Keanan Bennetts', 'LW', 61, 26], ['Harry Griffiths', 'GK', 52, 20],
       ['Lucas Ness', 'CB', 60, 23], ['Rodney McDonald', 'CB', 60, 33], ['Matthew Palmer', 'CM', 62, 30],
       ['Jayden Luker', 'AM', 59, 20], ['Maï Traoré', 'ST', 59, 25], ['William Jarvis', 'LW', 61, 22]
     ] },
    { n: "Cambridge United", s: "CAM", c1: "#FFE500", c2: "#000000", str: 62, p: [
       ['Jake Eastwood', 'GK', 59, 28], ['Liam Bennett', 'RB', 64, 23], ['Kelland Watts', 'CB', 64, 25],
       ['Ben Purrington', 'CB', 62, 29], ['Adam Mayor', 'LB', 60, 21], ['Dominic Ball', 'DM', 64, 29],
       ['Pelly Mpanzu', 'CM', 67, 31], ['Glenn McConnell', 'AM', 55, 20], ['Elias Kachunga', 'RW', 62, 33],
       ['Shayne Lavery', 'ST', 64, 26], ['Kylian Kouassi', 'ST', 59, 22], ['Ben Hughes', 'GK', 55, 21],
       ['Michael Morrison', 'CB', 62, 37], ['Zak Bradshaw', 'LB', 55, 21], ['Korey Smith', 'CM', 63, 34],
       ['Sulaiman Kaikai', 'RW', 62, 29], ['Louis Appéré', 'ST', 63, 26], ['James Brophy', 'CM', 62, 30]
     ] },
    { n: "AFC Wimbledon", s: "WIM", c1: "#0057B8", c2: "#FFE500", str: 62, p: [
       ['Nathan Bishop', 'GK', 63, 25], ['Nathan Asiimwe', 'CM', 60, 20], ['Patrick Bauer', 'CB', 64, 32],
       ['Joe Lewis', 'CB', 63, 25], ['Steven Seddon', 'LB', 63, 27], ['Myles Hippolyte', 'CM', 61, 30],
       ['Alistair Smith', 'CM', 63, 26], ['Callum Maycock', 'CM', 59, 27], ['Osman Foyo', 'RW', 57, 20],
       ['Mathew Stevens', 'ST', 64, 27], ['Marcus Browne', 'LW', 63, 27], ['Joseph McDonnell', 'GK', 57, 31],
       ['Ryan Johnson', 'CB', 62, 28], ['Samuel Hutchinson', 'CB', 61, 35], ['Jake Reeves', 'CM', 63, 32],
       ['Omar Bugiel', 'ST', 61, 31], ['Danilo Orsi', 'ST', 62, 29], ['Riley-Jay Harbottle', 'CB', 61, 24]
     ] },
    { n: "Bromley", s: "BRO", c1: "#FFFFFF", c2: "#000000", str: 63, p: [
       ['Grant Smith', 'GK', 63, 31], ['Carl Jenkinson', 'RB', 62, 33], ['Olufemi Sowunmi', 'CB', 63, 29],
       ['Kyle Cameron', 'CB', 62, 28], ['Idris Odutayo', 'LB', 64, 22], ['Ashley Charles', 'DM', 61, 26],
       ['Ben Thompson', 'CM', 64, 29], ['Jude Arthurs', 'CM', 62, 23], ['Ben Krauhaus', 'RW', 62, 20],
       ['Michael Cheek', 'ST', 65, 33], ['Mitchell Pinnock', 'LW', 66, 30], ['Samuel Long', 'GK', 59, 22],
       ['Deji Elerewe', 'CB', 62, 21], ['Byron Webster', 'CB', 62, 38], ['William Hondermarck', 'CM', 63, 24],
       ['Nicke Kabamba', 'ST', 62, 32], ['Jemiah Umolu', 'ST', 62, 19], ['Corey Whitely', 'AM', 61, 33]
     ] }
  ]
};

window.LEAGUES.league2 = {
  id: "league2", name: "EFL League Two", country: "Inglaterra", tier: 4, ucl: 0, rel: 0,
  pool: "en", squadSize: 17, teams: [
    { n: "Rotherham United", s: "ROT", c1: "#E30613", c2: "#FFFFFF", str: 55, p: [
       ['Cameron Dawson', 'GK', 57, 29], ['Joseph Rafferty', 'RB', 57, 31], ['Thomas Holmes', 'CB', 58, 25],
       ['Sean Raggett', 'CB', 58, 31], ['Reece James', 'LB', 57, 31], ['Shaun McWilliams', 'DM', 58, 26],
       ['James Powell', 'CM', 57, 26], ['Ben Hatton', 'AM', 46, 19], ['Jack Holmes', 'RW', 52, 23],
       ['Samuel Nombe', 'ST', 58, 26], ['Jordan Hugill', 'ST', 56, 33], ['Ted Cann', 'GK', 43, 24],
       ['Zak Jules', 'CB', 56, 28], ['A. Martha', 'LB', 55, 21], ['Kian Spence', 'CM', 55, 24],
       ['Joshua Kayode', 'ST', 52, 25], ['Kion Etete', 'ST', 57, 23], ['Dru Yearwood', 'DM', 57, 25]
     ] },
    { n: "Port Vale", s: "POR", c1: "#FFFFFF", c2: "#000000", str: 58, p: [
       ['Joe Gauci', 'GK', 61, 24], ['Jay Gabriel', 'RB', 59, 26], ['Cameron Humphreys', 'CB', 60, 26],
       ['Connor Hall', 'CB', 58, 32], ['Liam Gordon', 'LB', 57, 26], ['Ryan Croasdale', 'CM', 57, 30],
       ['George Byers', 'CM', 58, 29], ['Funso-King Ojo', 'CM', 56, 33], ['Ronan Curtis', 'LW', 55, 29],
       ['Dewar-Cole Cole', 'ST', 61, 30], ['James Shipley', 'LW', 58, 27], ['Marko Maroši', 'GK', 58, 31],
       ['Benjamin Heneghan', 'CB', 56, 31], ['Kyle John', 'LB', 57, 24], ['Benjamin Garrity', 'CM', 57, 28],
       ['Benjamin Waine', 'ST', 55, 24], ['Jayden Stockley', 'ST', 57, 31], ['George Hall', 'CM', 55, 20]
     ] },
    { n: "Exeter City", s: "EXE", c1: "#E30613", c2: "#FFFFFF", str: 58, p: [
       ['Joseph Whitworth', 'GK', 60, 21], ['Johnly Yfeko', 'CB', 57, 22], ['Pierce Sweeney', 'CB', 58, 30],
       ['Joseph Fitzwater', 'CB', 58, 27], ['Daniel Andrew', 'LB', 57, 34], ['Kevin McDonald', 'DM', 54, 36],
       ['Reece Cole', 'CM', 59, 27], ['Jack Aitchison', 'AM', 58, 25], ['Ilmari Niskanen', 'RW', 57, 27],
       ['Joshua Magennis', 'ST', 59, 34], ['Carlos Mendes Gomes', 'LW', 59, 26], ['Jack Bycroft', 'GK', 53, 23],
       ['Edward Turns', 'CB', 58, 22], ['Ryan Rydel', 'LB', 56, 24], ['Edward Francis', 'CM', 58, 25],
       ['Jack McMillan', 'RW', 57, 27], ['Jayden Wareham', 'ST', 58, 22], ['Jake Doyle-Hayes', 'CM', 57, 26]
     ] },
    { n: "Northampton Town", s: "NOR", c1: "#8B1F2F", c2: "#FFFFFF", str: 58, p: [
       ['Lee Burge', 'GK', 57, 32], ['Jack Burroughs', 'RB', 57, 24], ['Jonathan Guthrie', 'CB', 61, 32],
       ['Jordan Thorniley', 'CB', 59, 28], ['Nesta Guinness-Walker', 'LB', 57, 25], ['Dean Campbell', 'DM', 57, 24],
       ['Liam Shaw', 'CM', 58, 24], ['Cameron McGeehan', 'AM', 57, 30], ['Samuel Hoskins', 'RW', 60, 32],
       ['Thomas Eaves', 'ST', 58, 33], ['Kyle Edwards', 'LW', 59, 27], ['Richard Fitzsimons', 'GK', 52, 31],
       ['Jordan Willis', 'CB', 57, 30], ['Conor McCarthy', 'CB', 57, 27], ['Terence Taylor', 'CM', 57, 24],
       ['Ethan Wheatley', 'ST', 55, 19], ['Elliott List', 'ST', 56, 28], ['Tyrese Fornah', 'CM', 57, 25]
     ] },
    { n: "Bristol Rovers", s: "BRR", c1: "#0057B8", c2: "#FFFFFF", str: 56, p: [
       ['Luke Southwood', 'GK', 59, 27], ['Macauley Southam-Hales', 'CM', 57, 29], ['Taylor Moore', 'CB', 58, 28],
       ['Alexander Kilgour', 'CB', 58, 27], ['Jack Sparkes', 'LB', 58, 24], ['Joshua McEachran', 'DM', 60, 32],
       ['Joel Cotterill', 'CM', 53, 20], ['Ryan Howley', 'AM', 52, 21], ['Luke Thomas', 'RW', 60, 26],
       ['Ruel Sotiriou', 'ST', 58, 24], ['Ollie Dewsbury', 'LW', 50, 17], ['Bradley Young', 'GK', 48, 23],
       ['Stephen Negru', 'CB', 58, 22], ['Clinton Mola', 'LB', 58, 24], ['Kamil Conteh', 'DM', 57, 22],
       ['Steven Forde', 'RW', 57, 21], ['Ellis Harrison', 'ST', 56, 31], ['Joel Senior', 'RB', 57, 26]
     ] },
    { n: "Gillingham", s: "GIL", c1: "#0057B8", c2: "#FFFFFF", str: 57, p: [
       ['Glenn Morris', 'GK', 56, 41], ['Remeao Hutton', 'RB', 58, 26], ['Ciaran Masterson', 'CB', 58, 26],
       ['Shadrach Ogie', 'CB', 57, 23], ['Max Clark', 'LB', 58, 29], ['Ethan Coleman', 'DM', 57, 25],
       ['Armani Little', 'CM', 59, 28], ['Bradley Dack', 'AM', 60, 31], ['Garath McCleary', 'RW', 61, 38],
       ['Samuel Vokes', 'ST', 59, 35], ['Damien Theodore', 'LW', 48, 17], ['Jake Turner', 'GK', 55, 26],
       ['Andrew Smith', 'CB', 57, 23], ['Lenni Cirino', 'LB', 53, 22], ['Jonathan Williams', 'CM', 54, 31],
       ['Jonathan Smith', 'RW', 60, 27], ['Sebastian Palmer-Houlden', 'ST', 56, 21], ['Robbie McKenzie', 'DM', 56, 26]
     ] },
    { n: "Walsall", s: "WAL", c1: "#E30613", c2: "#FFFFFF", str: 56, p: [
       ['Myles Roberts', 'GK', 54, 23], ['Connor Barrett', 'RB', 58, 23], ['Aden Flint', 'CB', 59, 35],
       ['Harry Williams', 'CB', 58, 22], ['Vincent Harper', 'LB', 58, 24], ['Lewis Warrington', 'DM', 57, 22],
       ['John Hollman', 'CM', 60, 23], ['Rico Richards', 'AM', 52, 21], ['Jamille Matt', 'ST', 56, 35],
       ['Daniel Kanu', 'ST', 57, 20], ['Albert Adomah', 'ST', 55, 37], ['Samuel Hornby', 'GK', 52, 30],
       ['Priestley Farquharson', 'CB', 56, 28], ['Mason Hancock', 'LB', 55, 22], ['Jamie Jellis', 'CM', 57, 24],
       ['Charlie Lakin', 'CM', 56, 26], ['Alex Pressley', 'ST', 56, 23], ['Evan Weir', 'CB', 55, 23]
     ] },
    { n: "Shrewsbury Town", s: "SHR", c1: "#FFE500", c2: "#0057B8", str: 55, p: [
       ['Elyh Harrison', 'GK', 51, 19], ['Luca Hoole', 'RB', 57, 23], ['Sam Stubbs', 'CB', 58, 26],
       ['William Boyle', 'CB', 58, 29], ['Malvind Benning', 'LB', 59, 31], ['Harrison Biggins', 'CM', 56, 29],
       ['Samuel Clucas', 'CM', 60, 34], ['Thomas McDermott', 'CM', 49, 20], ['Ismeal Kabia', 'RW', 52, 19],
       ['George Lloyd', 'ST', 57, 25], ['Anthony Scully', 'LW', 56, 26], ['Will Brook', 'GK', 51, 21],
       ['T. Nsiala', 'CB', 57, 33], ['George Nurse', 'LB', 59, 26], ['Taylor Perry', 'CM', 56, 23],
       ['Chukwuemeka Aneke', 'ST', 56, 31], ['John Marquis', 'ST', 56, 33], ['Thomas Sang', 'CM', 56, 26]
     ] },
    { n: "Swindon Town", s: "SWI", c1: "#E30613", c2: "#FFFFFF", str: 57, p: [
       ['Connor Ripley', 'GK', 57, 32], ['Joseph Snowdon', 'RB', 54, 21], ['Ryan Tafazolli', 'CB', 61, 33],
       ['William Wright', 'CB', 59, 28], ['Finley Munroe', 'LB', 56, 20], ['Darren Oldaker', 'DM', 56, 26],
       ['Gavin Kilkenny', 'CM', 58, 25], ['Daniel Butterworth', 'AM', 56, 25], ['Billy Bodin', 'RW', 59, 33],
       ['Oliver Palmer', 'ST', 59, 33], ['Paul Glatzel', 'ST', 55, 24], ['Lewis Ward', 'GK', 53, 28],
       ['Jamie Knight-Lebel', 'CB', 56, 20], ['Billy Kirkman', 'LB', 52, 21], ['Thomas Nichols', 'CM', 57, 31],
       ['Aaron Drinan', 'ST', 55, 27], ['Harry Smith', 'ST', 58, 30], ['Oliver Clarke', 'CM', 57, 33]
     ] },
    { n: "Grimsby Town", s: "GRI", c1: "#000000", c2: "#FFFFFF", str: 58, p: [
       ['Christy Pym', 'GK', 59, 30], ['Neo Eccleston', 'RB', 58, 21], ['Harvey Rodgers', 'CB', 59, 28],
       ['Cameron McJannet', 'CB', 59, 26], ['Jayden Sweeney', 'LB', 58, 23], ['George McEachran', 'DM', 59, 24],
       ['James Walker', 'CM', 59, 32], ['Henry Brown', 'AM', 49, 18], ['Jason Svanþórs­son', 'RW', 59, 25],
       ['Daniel Rose', 'ST', 59, 31], ['Zak Gilsenan', 'LW', 58, 22], ['Charlie Casper', 'GK', 52, 20],
       ['Douglas Tharme', 'CB', 58, 25], ['Reece Staunton', 'CM', 55, 23], ['Kieran Green', 'CM', 58, 28],
       ['Justin Amaluzor', 'RW', 58, 28], ['Jacob Soonsup-Bell', 'ST', 58, 21], ['Tyrell Warren', 'RB', 58, 26]
     ] },
    { n: "Salford City", s: "SAL", c1: "#E30613", c2: "#FFFFFF", str: 54, p: [
       ['Mark Howard', 'GK', 51, 38], ['Oliver Turton', 'RB', 57, 32], ['Michael Rose', 'CB', 59, 29],
       ['Thomas Edwards', 'CB', 53, 26], ['Luke Garbutt', 'LB', 55, 32], ['Ossama Ashley', 'DM', 55, 25],
       ['Jorge Grant', 'CM', 57, 30], ['Benjamin Woodburn', 'AM', 54, 25], ['Daniel Chesters', 'RW', 49, 23],
       ['Daniel Udoh', 'ST', 57, 28], ['Kadeem Harris', 'LW', 54, 32], ['Matthew Young', 'GK', 50, 18],
       ['Brandon Cooper', 'CB', 53, 25], ['Kelly Nmai', 'LB', 52, 21], ['Matthew Butcher', 'CM', 55, 28],
       ['Kyrell Malcolm', 'AM', 44, 18], ['Cole Stockton', 'ST', 54, 31], ['Nicolás Siri', 'ST', 53, 21]
     ] },
    { n: "Crewe Alexandra", s: "CRE", c1: "#E30613", c2: "#FFFFFF", str: 58, p: [
       ['Thomas Booth', 'GK', 53, 20], ['Lewis Billington', 'RB', 55, 21], ['Michael Demetriou', 'CB', 62, 35],
       ['James Connolly', 'CB', 59, 23], ['Reece Hutchinson', 'LB', 58, 25], ['Max Sanders', 'DM', 59, 26],
       ['Jack Powell', 'CM', 58, 31], ['Jack Lankester', 'AM', 60, 25], ['Dion Rankine', 'RW', 62, 22],
       ['Louis Moult', 'ST', 60, 33], ['Calum Agius', 'AM', 53, 19], ['Sam Waller', 'GK', 47, 21],
       ['Jay Mingi', 'CB', 58, 24], ['Charlie Finney', 'LB', 53, 21], ['Joel Tabiner', 'CM', 57, 21],
       ["Tommi O'Reilly", 'RW', 58, 21], ['Omar Bogle', 'ST', 59, 31], ['Emre Tezgel', 'ST', 59, 19]
     ] },
    { n: "Chesterfield", s: "CHE", c1: "#0057B8", c2: "#FFFFFF", str: 56, p: [
       ['Zachary Hemming', 'GK', 57, 25], ['Devan Tanton', 'RB', 52, 21], ['Thomas Naylor', 'CB', 57, 34],
       ['Cheyenne Dunkley', 'CB', 57, 33], ['Adam Lewis', 'LB', 55, 25], ['Ryan Stirk', 'DM', 57, 24],
       ['John Fleck', 'CM', 56, 33], ['Armando Dobra', 'AM', 56, 24], ['Dilan Markanday', 'RW', 58, 23],
       ['William Grigg', 'ST', 56, 33], ['Jon Berry', 'LW', 57, 24], ['Ryan Boot', 'GK', 52, 30],
       ['Kyle McFadzean', 'CB', 57, 38], ['Lewis Gordon', 'LB', 55, 24], ['Max Dibley-Dias', 'CM', 51, 21],
       ['Liam Mandeville', 'RW', 57, 28], ['Lee Bonis', 'ST', 53, 25], ['Ronan Darcy', 'AM', 56, 24]
     ] },
    { n: "Colchester United", s: "COL", c1: "#0057B8", c2: "#FFFFFF", str: 55, p: [
       ['Matthew Macey', 'GK', 56, 30], ['Kane Vincent-Young', 'RB', 53, 29], ['Jack Baldwin', 'CB', 55, 32],
       ['Thomas Flanagan', 'CB', 55, 33], ['Ellis Iandolo', 'LB', 56, 27], ['T. Bishop', 'DM', 56, 28],
       ['Arthur Read', 'DM', 55, 25], ['Jack Payne', 'AM', 57, 30], ['Harry Anderson', 'RW', 52, 28],
       ['William Goodwin', 'ST', 56, 23], ['Owura Edwards', 'LW', 55, 24], ['Tom Smith', 'GK', 50, 23],
       ['Jack Tucker', 'CB', 54, 25], ['Josh Powell', 'LB', 50, 20], ['Dominic Gape', 'DM', 54, 30],
       ['Kyrece Lisbie', 'AM', 51, 21], ['Samson Tovide', 'ST', 54, 21], ['Ameer Akande', 'LW', 54, 21]
     ] },
    { n: "Cheltenham Town", s: "CHT", c1: "#E30613", c2: "#FFFFFF", str: 57, p: [
       ['Joseph Day', 'GK', 55, 34], ['Ryan Broom', 'RB', 57, 28], ['Sam Sherring', 'CB', 59, 25],
       ['James Wilson', 'CB', 59, 36], ['George Harmon', 'LB', 58, 24], ['Liam Kinsella', 'DM', 58, 29],
       ['Isaac Hutchinson', 'CM', 59, 25], ['Tommy Backwell', 'AM', 53, 22], ['Jordan Thomas', 'RW', 58, 24],
       ['George Miller', 'ST', 56, 27], ['Emmanuel Archer', 'LW', 59, 22], ['Mamadou Diallo', 'GK', 49, 17],
       ['Scot Bennett', 'CB', 55, 34], ['Taine Anderson', 'LB', 53, 19], ['Harry Pell', 'CM', 52, 33],
       ['Joshua Martin', 'LW', 57, 23], ['Lee Angol', 'ST', 54, 30], ['Luke Young', 'DM', 58, 32]
     ] },
    { n: "Crawley Town", s: "CRA", c1: "#E30613", c2: "#FFFFFF", str: 55, p: [
       ['Joseph Wollacott', 'GK', 56, 28], ['Joy Mukena', 'CB', 53, 25], ['Joshua Flint', 'CB', 57, 24],
       ['Charlie Barker', 'CB', 55, 22], ['Scott Malone', 'LB', 56, 34], ['Jay Williams', 'DM', 57, 24],
       ['Louie Watson', 'CM', 56, 23], ['Gavan Holohan', 'CM', 55, 33], ['Harry McKirdy', 'RW', 55, 28],
       ['Kabongo Tshimanga', 'ST', 55, 27], ['Harry Forster', 'LW', 53, 25], ['Harvey Davies', 'GK', 54, 21],
       ['Dion Conroy', 'CB', 55, 29], ['Benjamin Radcliffe', 'CB', 52, 21], ['Reece Brown', 'CM', 55, 29],
       ['Dion Pereira', 'RW', 54, 26], ['Ryan Loft', 'ST', 54, 27], ['Max Anderson', 'CM', 55, 24]
     ] },
    { n: "Newport County", s: "NEW", c1: "#F5A623", c2: "#000000", str: 56, p: [
       ['Nikola Tzanev', 'GK', 56, 28], ['Liam Shephard', 'RB', 56, 30], ['Matthew Baker', 'CB', 58, 22],
       ['John Clarke', 'CB', 56, 35], ['Anthony Glennon', 'LB', 57, 25], ['Samuel Braybrooke', 'DM', 57, 21],
       ['Matthew Smith', 'CM', 60, 25], ['Ben Lloyd', 'AM', 53, 20], ['Gerard Garner', 'ST', 56, 26],
       ['Nathaniel Opoku', 'ST', 59, 23], ['Bobby-Emmanuel Kamwa', 'LW', 59, 25], ['Jordan Wright', 'GK', 54, 26],
       ['Ciaran Brennan', 'CB', 56, 25], ['Thomas Davies', 'CM', 53, 21], ['Cameron Antwi', 'CM', 55, 23],
       ['Michael Spellman', 'LW', 53, 22], ['Courtney Baker-Richardson', 'ST', 57, 29], ['Cameron Evans', 'CB', 55, 24]
     ] },
    { n: "Fleetwood Town", s: "FLE", c1: "#E30613", c2: "#FFFFFF", str: 57, p: [
       ['Jay Lynch', 'GK', 56, 32], ['Shaun Rooney', 'RB', 59, 28], ['Zechariah Medley', 'CB', 59, 24],
       ['James Bolton', 'CB', 58, 30], ['Denver Hume', 'LB', 60, 26], ['Elliot Bonds', 'DM', 58, 25],
       ['Matthew Virtue', 'CM', 58, 28], ['Harrison Neal', 'DM', 58, 23], ['Liam Roberts', 'AM', 48, 18],
       ['Chedwyn Evans', 'ST', 62, 36], ['Ethan Ennis', 'LW', 54, 20], ['David Harrington', 'GK', 55, 25],
       ['Tobias Mullarkey', 'CB', 58, 28], ['Finley Potter', 'CB', 55, 21], ['Mark Helm', 'CM', 57, 23],
       ['Ronan Coughlan', 'ST', 57, 28], ['Ryan Graydon', 'ST', 57, 26], ['Will Davies', 'ST', 56, 26]
     ] },
    { n: "Tranmere Rovers", s: "TRA", c1: "#FFFFFF", c2: "#0057B8", str: 54, p: [
       ['Luke McGee', 'GK', 52, 29], ["Lee O'Connor", 'RB', 54, 24], ['Nathan Smith', 'CB', 56, 29],
       ['Jordan Turnbull', 'CB', 54, 30], ['Ethan Bristow', 'LB', 56, 23], ['Nohan Kenneh', 'DM', 55, 22],
       ['Richard Smallwood', 'CM', 56, 34], ['Charlie Whitaker', 'AM', 50, 21], ['Kristian Dennis', 'ST', 52, 35],
       ['Connor Jennings', 'ST', 54, 33], ['Omari Patrick', 'LW', 56, 29], ['Joseph Murphy', 'GK', 49, 43],
       ['John Lowe', 'DM', 50, 33], ['Patrick Brough', 'LB', 55, 29], ['Samuel Finley', 'CM', 53, 32],
       ['Joshua Davison', 'ST', 51, 25], ['Joe Ironside', 'ST', 54, 31], ['Cameron Norman', 'RB', 54, 29]
     ] },
    { n: "Barnet", s: "BNT", c1: "#F58220", c2: "#000000", str: 55, p: [
       ['Cieran Slicker', 'GK', 54, 22], ['Kane Smith', 'RB', 56, 29], ['Daniele Collinge', 'CB', 55, 27],
       ['Romoney Crichlow', 'CB', 54, 26], ['Myles Kenlock', 'LB', 53, 28], ['Benjamin Winterburn', 'DM', 58, 20],
       ['Scott High', 'CM', 56, 24], ['Callum Stead', 'AM', 57, 25], ['Lee Ndlovu', 'ST', 53, 30],
       ['Ronnie Stutter', 'ST', 55, 20], ['Oliver Hawkins', 'ST', 52, 33], ['Owens Evans', 'GK', 53, 28],
       ['Nikola Tavares', 'CB', 54, 26], ['Ryan Galvin', 'LB', 52, 24], ['Dennis Adeniran', 'CM', 55, 26],
       ['Anthony Hartigan', 'DM', 57, 25], ['Joseph Hugill', 'ST', 54, 21], ['Nnamdi Ofoborh', 'DM', 56, 25]
     ] },
    { n: "Accrington Stanley", s: "ACC", c1: "#E30613", c2: "#FFFFFF", str: 57, p: [
       ['Michael Kelly', 'GK', 55, 28], ['Donald Love', 'RB', 58, 30], ['Farrend Rawson', 'CB', 58, 28],
       ['Benn Ward', 'CB', 56, 21], ['Conor Grant', 'LB', 57, 30], ['Daniel Martin', 'DM', 56, 23],
       ['Joseph Bauress', 'CM', 58, 19], ['Shaun Whalley', 'AM', 59, 37], ['Charlie Brown', 'RW', 57, 25],
       ['Patrick Madden', 'ST', 59, 35], ['Isaac Heath', 'LW', 54, 20], ['Ollie Wright', 'GK', 53, 22],
       ['Devon Matthews', 'CB', 56, 25], ['Logan Pye', 'LB', 55, 21], ['Liam Coyle', 'CM', 56, 25],
       ['Josh Woods', 'ST', 55, 24], ['Tyler Walton', 'ST', 56, 26], ['Séamus Conneely', 'DM', 56, 36]
     ] },
    { n: "Oldham Athletic", s: "OLD", c1: "#0057B8", c2: "#FFFFFF", str: 56, p: [
       ['Mathew Hudson', 'GK', 54, 26], ['Jake Caprice', 'RB', 57, 32], ['Monthe Monthé', 'CB', 57, 30],
       ['Donervon Daniels', 'CB', 55, 31], ['Jamie Robson', 'LB', 57, 27], ['Henry Charsley', 'CM', 55, 28],
       ['Ryan Woods', 'CM', 58, 31], ['Thomas Pett', 'CM', 55, 33], ['Joshua Hawkes', 'LW', 56, 26],
       ['Mike Fondop', 'ST', 57, 31], ['Kieron Morris', 'LW', 56, 31], ['Thomas Donaghy', 'GK', 52, 22],
       ['Robert Ogle', 'CB', 54, 26], ['Jake Leake', 'LB', 53, 22], ['Tom Conlon', 'CM', 56, 29],
       ['Joseph Quigley', 'ST', 55, 28], ['Michael Mellon', 'ST', 56, 21], ['Joseph Garner', 'AM', 54, 37]
     ] },
    { n: "Rochdale", s: "ROC", c1: "#0057B8", c2: "#FFFFFF", str: 56, p: [
       ['Louie Moulden', 'GK', 63, 23], ['Cameron John', 'RB', 55, 21], ['Max Taylor', 'CB', 57, 20],
       ['Ethan Ebanks-Landell', 'CB', 56, 20], ['George Nevett', 'LB', 60, 19], ['Ryan East', 'DM', 54, 27],
       ['Adam Clayton', 'CM', 54, 29], ['Jimmy Keohane', 'AM', 54, 28], ['Tyrese Sinclair', 'RW', 54, 20],
       ['Kairo Mitchell', 'ST', 55, 26], ['Devante Rodney', 'LW', 55, 33], ['Brad Kelly', 'GK', 54, 25],
       ['Kwaku Oduroh', 'CB', 51, 29], ['Kyle Ferguson', 'LB', 50, 22], ['Michael Afuye', 'CM', 51, 33],
       ['Jesurun Uchegbulam', 'RW', 50, 31], ['Darren Ehimamiegho', 'ST', 51, 23], ['Harvey Gilmour', 'CB', 50, 21],
       ['Oscar Kelly', 'CM', 52, 32], ['Kevin dos Santos', 'CM', 52, 25], ['John Dunlop', 'CM', 49, 24],
       ['Brooklyn Bailey', 'CM', 49, 22]
     ] },
    { n: "York City", s: "YOR", c1: "#E30613", c2: "#FFFFFF", str: 53, p: [
       ['Adam Bartlett', 'GK', 55, 32], ['Josh Law', 'RB', 54, 25], ['Connor Brown', 'CB', 54, 25],
       ['Hamza Bencherif', 'CB', 54, 22], ['Sam Muggleton', 'LB', 52, 33], ['Sean Newton', 'DM', 52, 24],
       ['Theo Wharton', 'CM', 51, 28], ['Simon Heslop', 'AM', 51, 28], ['Michael Rankine', 'RW', 55, 27],
       ['Alex Kempster', 'ST', 51, 22], ['Raul Correia', 'LW', 51, 33], ['Luke Simpson', 'GK', 50, 32],
       ['Daniel Rowe', 'CB', 51, 29], ['David Ferguson', 'LB', 51, 32], ['Connor Smith', 'CM', 51, 26],
       ['Jon Parkin', 'RW', 48, 20], ['James Gray', 'ST', 47, 30], ['Daniel Parslow', 'CB', 49, 24],
       ['Jonathan Burn', 'CB', 45, 33], ['Clovis Kamdjo', 'CM', 47, 29], ['Alex Pattison', 'CM', 46, 33],
       ['Adriano Moké', 'CM', 46, 22]
     ] }
  ]
};

