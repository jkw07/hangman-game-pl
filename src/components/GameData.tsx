export const letters: string[] = [
  "A",
  "Ą",
  "B",
  "C",
  "Ć",
  "D",
  "E",
  "Ę",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "Ł",
  "M",
  "N",
  "Ń",
  "O",
  "Ó",
  "P",
  "Q",
  "R",
  "S",
  "Ś",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "Ź",
  "Ż",
];

export type gameDataType = {
  category: string;
  words: string[];
};

export const GameData: gameDataType[] = [
  {
    category: "MIASTA",
    words: [
      "NOWY JORK",
      "LOS ANGELES",
      "CHICAGO",
      "MIAMI",
      "SAN FRANCISCO",
      "LONDYN",
      "PARYŻ",
      "BERLIN",
      "RZYM",
      "MADRYT",
      "BARCELONA",
      "LIZBONA",
      "AMSTERDAM",
      "BRUKSELA",
      "WIEDEŃ",
      "PRAGA",
      "BUDAPESZT",
      "WARSZAWA",
      "KRAKÓW",
      "MOSKWA",
      "STAMBUŁ",
      "ATENY",
      "DUBLIN",
      "OSLO",
      "SZTOKHOLM",
      "HELSINKI",
      "KOPENHAGA",
      "ZURYCH",
      "GENEWA",
      "MONTREAL",
      "TORONTO",
      "VANCOUVER",
      "MEXICO CITY",
      "BUENOS AIRES",
      "RIO DE JANEIRO",
      "SÃO PAULO",
      "BOGOTA",
      "LIMA",
      "SANTIAGO",
      "TOKIO",
      "KIOTO",
      "SEUL",
      "PEKIN",
      "SZANGHAJ",
      "HONGKONG",
      "TAJPEJ",
      "BANGKOK",
      "SINGAPUR",
      "SYDNEY",
    ],
  },
  {
    category: "ZWIERZĘTA",
    words: [
      "LEW",
      "TYGRYS",
      "SŁOŃ",
      "ŻYRAFA",
      "HIPOPOTAM",
      "NOSOROŻEC",
      "NIEDŹWIEDŹ",
      "WILK",
      "LIS",
      "JELEŃ",
      "SARNA",
      "DZIK",
      "ZEBRA",
      "GAZELA",
      "ANTYLOPA",
      "KANGUR",
      "KOALA",
      "PINGWIN",
      "FOCA",
      "ORSZEL",
      "WIELORYB",
      "DELFIN",
      "REKIN",
      "ŻÓŁW",
      "KROKODYL",
      "ALIGATOR",
      "SOWA",
      "ORZEŁ",
      "JASTRZĄB",
      "SOKÓŁ",
      "KONDOR",
      "ŁABĘDŹ",
      "FLAMING",
      "BOCIAN",
      "WRÓBEL",
      "KUKUŁKA",
      "DZIĘCIOŁ",
      "KOT",
      "PIES",
      "KOŃ",
      "KROWA",
      "OWCA",
      "KOZA",
      "ŚWINIA",
      "KURA",
      "KACZKA",
      "GĘŚ",
      "INDYK",
      "SZCZUR",
      "KRET",
    ],
  },
  {
    category: "PAŃSTWA",
    words: [
      "USA",
      "KANADA",
      "MEKSYK",
      "BRAZYLIA",
      "ARGENTYNA",
      "CHILE",
      "KOLUMBIA",
      "PERU",
      "WENEZUELA",
      "BOLIWIA",
      "FRANCJA",
      "NIEMCY",
      "WŁOCHY",
      "HISZPANIA",
      "PORTUGALIA",
      "WIELKA BRYTANIA",
      "IRLANDIA",
      "HOLANDIA",
      "BELGIA",
      "SZWAJCARIA",
      "AUSTRIA",
      "POLSKA",
      "CZECHY",
      "SŁOWACJA",
      "WĘGRY",
      "RUMUNIA",
      "BUŁGARIA",
      "GRECJA",
      "TURCJA",
      "ROSJA",
      "UKRAINA",
      "BIAŁORUŚ",
      "LITWA",
      "ŁOTWA",
      "ESTONIA",
      "NORWEGIA",
      "SZWECJA",
      "FINLANDIA",
      "DANIA",
      "ISLANDIA",
      "CHINY",
      "JAPONIA",
      "KOREA POŁUDNIOWA",
      "INDIE",
      "AUSTRALIA",
      "NOWA ZELANDIA",
      "EGIPT",
      "RPA",
      "ARABIA SAUDYJSKA",
      "ZJEDNOCZONE EMIRATY ARABSKIE",
    ],
  },
  {
    category: "STANY ZJEDNOCZONE",
    words: [
      "ALABAMA",
      "ALASKA",
      "ARIZONA",
      "ARKANSAS",
      "CALIFORNIA",
      "COLORADO",
      "CONNECTICUT",
      "DELAWARE",
      "FLORIDA",
      "GEORGIA",
      "HAWAII",
      "IDAHO",
      "ILLINOIS",
      "INDIANA",
      "IOWA",
      "KANSAS",
      "KENTUCKY",
      "LOUISIANA",
      "MAINE",
      "MARYLAND",
      "MASSACHUSETTS",
      "MICHIGAN",
      "MINNESOTA",
      "MISSISSIPPI",
      "MISSOURI",
      "MONTANA",
      "NEBRASKA",
      "NEVADA",
      "NEW HAMPSHIRE",
      "NEW JERSEY",
      "NEW MEXICO",
      "NEW YORK",
      "NORTH CAROLINA",
      "NORTH DAKOTA",
      "OHIO",
      "OKLAHOMA",
      "OREGON",
      "PENNSYLVANIA",
      "RHODE ISLAND",
      "SOUTH CAROLINA",
      "SOUTH DAKOTA",
      "TENNESSEE",
      "TEXAS",
      "UTAH",
      "VERMONT",
      "VIRGINIA",
      "WASHINGTON",
      "WEST VIRGINIA",
      "WISCONSIN",
      "WYOMING",
    ],
  },
  {
    category: "DYSCYPLINY SPORTOWE",
    words: [
      "PIŁKA NOŻNA",
      "KOSZYKÓWKA",
      "SIATKÓWKA",
      "PIŁKA RĘCZNA",
      "HOKEJ NA LODZIE",
      "TENIS",
      "BADMINTON",
      "GOLF",
      "BASEBALL",
      "RUGBY",
      "LEKKOATLETYKA",
      "PŁYWANIE",
      "KOLARSTWO",
      "BOKS",
      "SZACHY",
      "SKOKI NARCIARSKIE",
      "BIATHLON",
      "WIOŚLARSTWO",
      "SZERMIERKA",
      "JUDO",
    ],
  },
  {
    category: "FILMY",
    words: [
      "SKAZANI NA SHAWSHANK",
      "ZIELONA MILA",
      "NIETYKALNI",
      "OJCIEC CHRZESTNY",
      "DWUNASTU GNIEWNYCH LUDZI",
      "FORREST GUMP",
      "LOT NAD KUKUŁCZYM GNIAZDEM",
      "OJCIEC CHRZESTNY",
      "WŁADCA PIERŚCIENI: POWRÓT KRÓLA",
      "LISTA SCHINDLERA",
      "PULP FICTION",
      "ŻYCIE JEST PIĘKNE",
      "WŁADCA PIERŚCIENI: DWIE WIEŻE",
      "SIEDEM",
      "PODZIEMNY KRĄG",
      "CHŁOPCY Z FERAJNY",
      "PIANISTA",
      "MILCZENIE OWIEC",
      "PIĘKNY UMYSŁ",
      "WŁADCA PIERŚCIENI: DRUŻYNA PIERŚCIENIA",
      "INCEPCJA",
      "GLADIATOR",
      "LEON ZAWODOWIEC",
      "BRAVEHEART - WALCZĄCE SERCE",
      "TERMINATOR",
      "MATRIX",
      "SZÓSTY ZMYSŁ",
      "AMELIA",
      "REQUIEM DLA SNU",
      "CZŁOWIEK Z BLIZNĄ",
    ],
  },
  {
    category: "FRAZEOLOGIZMY",
    words: [
      "CUDZE CHWALICIE",
      "KROPKA NAD I",
      "RZUCIĆ OKIEM",
      "PIĘTA ACHILLESA",
      "ZMIENIĆ FRONT",
      "WPAŚĆ JAK ŚLIWKA",
      "PÓJŚĆ NA ŻYWIOŁ",
      "BYĆ W KROPCE",
      "SPALIĆ ZA SOBĄ MOSTY",
      "SIEDZIEĆ NA MINIE",
      "ZJEŚĆ ZĘBY NA",
      "MÓWIĆ JAK DO ŚCIANY",
      "RĘKA RĘKĘ MYJE",
      "SŁOWA NA WIATR",
      "WALKA Z WIATRAKAMI",
      "BYĆ POD KRESKĄ",
      "BYĆ NA CZARNĄ GODZINĘ",
      "MIEĆ GŁOWĘ NA KARKU",
      "DZIELIĆ WŁOS NA CZWORO",
      "MIEĆ ZŁOTE SERCE",
    ],
  },
  {
    category: "BIOLOGIA I CHEMIA",
    words: [
      "ATOM",
      "MOLEKUŁA",
      "PROTON",
      "NEUTRON",
      "ELEKTRON",
      "WIĄZANIE",
      "REAKCJA",
      "KATALIZATOR",
      "ROZTWÓR",
      "ZWIĄZEK",
      "ENZYM",
      "BIAŁKO",
      "WĘGLOWODAN",
      "LIPID",
      "RNA",
      "DNA",
      "GEN",
      "CHROMOSOM",
      "KOMÓRKA",
      "BŁONA",
      "MITOCHONDRIUM",
      "RYBOSOM",
      "CHLOROFIL",
      "FOTOSYNTEZA",
      "OSMOZA",
      "HORMON",
      "NEUROPRZEKAŹNIK",
      "TOKSYNA",
      "METABOLIZM",
      "EWOLUCJA",
    ],
  },
  {
    category: "ASTROFIZYKA",
    words: [
      "GALAKTYKA",
      "KWAZAR",
      "PULSAR",
      "NEUTRINO",
      "CZARNA DZIURA",
      "GRAWITACJA",
      "PROMIENIOWANIE",
      "SUPERNOWA",
      "HIPERNOWA",
      "WSZECHŚWIAT",
      "CIEMNA MATERIA",
      "CIEMNA ENERGIA",
      "HORYZONT ZDARZEŃ",
      "CZĄSTKI ELEMENTARNE",
      "INFLACJA",
      "ROZBŁYSK GAMMA",
      "DYLATACJA CZASU",
      "SFERA SCHWARZSCHILDA",
      "EKSOPLANETA",
      "MGŁAWICA",
      "WIELKI WYBUCH",
      "WIELKI KOLAPS",
      "STAŁA HUBBLA",
      "CZERWONE PRZESUNIĘCIE",
      "MATERIA BARIONOWA",
      "PROMIENIOWANIE TŁA",
      "FOTON",
      "CZASOPRZESTRZEŃ",
      "SINGULARNOŚĆ",
      "WZGLĘDNOŚĆ",
    ],
  },
  {
    category: "TRANSPORT",
    words: [
      "SAMOCHÓD",
      "AUTOBUS",
      "TRAMWAJ",
      "POCIĄG",
      "MOTOCYKL",
      "SKUTER",
      "ROWER",
      "HULAJNOGA",
      "SAMOLOT",
      "ŚMIGŁOWIEC",
      "STATEK",
      "ŁÓDŹ",
      "JACHT",
      "PROM",
      "PODUSZKOWIEC",
      "CYSTERNA",
      "CIĘŻARÓWKA",
      "TIR",
      "KARETKA",
      "RADIOWÓZ",
      "CZOŁG",
      "WOJSKOWIEC",
      "RIKSZA",
      "QUAD",
      "SEGWAY",
      "WÓZEK GOLFOWY",
      "TRAKTOR",
      "BALON",
      "STEROWIEC",
      "WÓZ STRAŻACKI",
    ],
  },
  {
    category: "POGODA",
    words: [
      "DESZCZ",
      "ŚNIEG",
      "GRAD",
      "MŻAWKA",
      "BURZA",
      "BŁYSKAWICA",
      "GRZMOT",
      "WIATR",
      "HURAGAN",
      "TAJFUN",
      "TĘCZA",
      "MGŁA",
      "ZACHMURZENIE",
      "SZRON",
      "PRZYMROZEK",
      "UPAŁ",
      "MRÓZ",
      "MRZAWKA",
      "ROSA",
      "SŁONECZNIE",
      "POGODNIE",
      "PRZEJAŚNIENIA",
      "ZACHÓD SŁOŃCA",
      "WSCHÓD SŁOŃCA",
      "SUSZA",
      "MONSUN",
      "CYKLON",
      "ANTYCYKLON",
      "NIŻ",
      "WYŻ",
    ],
  },
];
