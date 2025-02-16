export const letters: string[] = ["A","Ą","B","C","Ć","D","E","Ę","F","G","H","I","J","K","L","Ł","M","N","Ń","O","Ó","P","Q","R","S","Ś","T","U","V","W","X","Y","Z","Ź","Ż"];

export type gameDataType = {
  category: string;
  words: string[];
}

export const GameData: gameDataType[] = [
        {category: "MIASTA",
          words: ["BERLIN", "LONDYN", "BRUKSELA", "PARYŻ", "KOPENHAGA", "HELSINKI", "DUBLIN", "AMSTERDAM", "WARSZAWA", "ATENY" ]
        },
        {category: "ZWIERZĘTA",
          words: ["PAPUGA", "ŚLIMAK", "HIPOPOTAM", "SURYKATKA", "CHOMIK", "REKIN"]
        },
        {category: "PAŃSTWA",
          words: ["POLSKA", "DANIA", "HISZPANIA", "PORTUGALIA", "SZWECJA", "FINLANDIA", "BRAZYLIA", 'PERU', "CHILE", "PARAGWAJ", "KOSTARYKA"]
        },
        {category: "STANY ZJEDNOCZONE",
          words: ["ARIZONA", "TEKSAS", "MISSOURI", "INDIANA", "PENSYLWANIA", "VERMONT", "OREGON", 'WASZYNGTON', "NEVADA", "MONTANA", "IDAHO"]
        },
        {category: "próba",
          words: ["ALA MA KOTA"]
        },
    ]