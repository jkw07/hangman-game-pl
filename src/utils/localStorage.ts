import { GameDataType } from "../gameData/defaultData";

export const loadParsedData = (): GameDataType[] => {
  const storedData = localStorage.getItem("parsedData");
  return storedData ? JSON.parse(storedData) : "[]";
};

export const saveParsedData = (data: GameDataType[]) => {
  localStorage.setItem("parsedData", JSON.stringify(data));
};

export const clearParsedData = () => {
  localStorage.removeItem("parsedData");
};


 const existingData = JSON.parse(
      localStorage.getItem("addedCategories") || "[]"
    );
    existingData.push(newCategory);
    localStorage.setItem("addedCategories", JSON.stringify(existingData));
    setCategory("");
    setWords("");
    dispatch({ type: GameActionType.UPDATE_GAME_DATA });
    closeNewCategory();
  };