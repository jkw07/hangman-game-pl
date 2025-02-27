import {GameDataType } from "../gameData/defaultData";

export const mergeGameData = (dataArray: GameDataType[]): GameDataType[] => {
  const gameData: GameDataType[] = dataArray.reduce((acc: GameDataType[], { category, words }) => {
    const existingCategory = acc.find(item => item.category === category);
    if (existingCategory) {
      existingCategory.words = Array.from(new Set([...existingCategory.words, ...words]));
    } else {
      acc.push({ category, words });
    }  
    return acc;
  }, []);
  console.log(gameData)
  return gameData;
}