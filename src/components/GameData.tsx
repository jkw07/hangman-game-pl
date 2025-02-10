type gameDataType = {
  category: string;
  words: string[];
}

export const GameData = (): gameDataType[] => {
    return [
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
    ]
}