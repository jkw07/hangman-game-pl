import { GameDataType } from "../gameData/defaultData";

export const loadParsedData = (): GameDataType[] => {
  const storedData = localStorage.getItem("parsedData");
  return storedData ? JSON.parse(storedData) : [];
};

export const saveParsedData = (data: GameDataType[]) => {
  localStorage.setItem("parsedData", JSON.stringify(data));
};

export const clearParsedData = () => {
  localStorage.removeItem("parsedData");
};