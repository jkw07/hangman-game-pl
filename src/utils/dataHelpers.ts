import {GameDataType } from "../gameData/defaultData";
import {letters} from "../gameData/letters"

export const removeDuplicates = (dataArray: GameDataType[]): GameDataType[] => {
  const gameData: GameDataType[] = dataArray.reduce((acc: GameDataType[], { category, words }) => {
    const existingCategory = acc.find(item => item.category === category);
    if (existingCategory) {
      existingCategory.words = Array.from(new Set([...existingCategory.words, ...words]));
    } else {
      acc.push({ category, words });
    }  
    return acc;
  }, []);
  return gameData;
};

export interface FormatNewDataType {
  category: string;
  words: string[];
}

export const formatNewData = (category: string, words: string): FormatNewDataType => {
  const formatedCategory = category.trim().toUpperCase();
  const formatedWordsArray = words
    .toUpperCase()
    .split(",")
    .map((word) => word.trim());
    console.log(formatedCategory, formatedWordsArray)
  return {
    category: formatedCategory,
    words: formatedWordsArray,
  };
};

export const filterNewWords = (value: string) => {
  const allowedCharsRegex = new RegExp(`[^${letters.join("")},\\s]`, "gi");
  const filteredValue = value.replace(allowedCharsRegex, "");
  return filteredValue;
}