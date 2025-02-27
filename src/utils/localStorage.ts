import { GameDataType } from "../gameData/defaultData";
import { formatNewData } from "./dataHelpers";

export const loadLocalStorage = (): GameDataType[] => {
  const storedData = localStorage.getItem("parsedData");
  return storedData ? JSON.parse(storedData) : [];
};

export const saveInLocalStorage = (data: GameDataType[]) => {
  localStorage.setItem("parsedData", JSON.stringify(data));
};

export const clearLocalStorage = () => {
  localStorage.removeItem("parsedData");
};

export const updateLocalStorage = (category: string, words: string) => {
  const newCategory = formatNewData(category, words);
  const existingData = loadLocalStorage();
    existingData.push(newCategory);
    saveInLocalStorage(existingData);
    return existingData;
}