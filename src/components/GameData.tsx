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
    ]
}