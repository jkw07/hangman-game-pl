import {GameDataType } from "../gameData/defaultData";

//spr czy kategoria juz istnieje
export const categoryExists = (parsedData: GameDataType[], category: string): boolean => {
  return parsedData.some((data) => data.category === category);
};

//Filtruje duplikaty słów w obrębie kategorii
export const filterDuplicateWords = (words: string[]): string[] => {
  return [...new Set(words)];
};

// Łączy nowe słowa z istniejącą kategorią lub dodaje nową kategorię ??
export const addWordsToCategory = (
  parsedData: GameDataType[],
  newCategory: string,
  newWords: string[],
): GameDataType[] => {
  return parsedData.map((data) =>
    data.category === newCategory
      ? { ...data, words: filterDuplicateWords([...data.words, ...newWords]) }
      : data,
  );
};

//usuwanie kategorii
//TODO dodać X do kazdej kategorii
export const removeCategory = (parsedData: GameDataType[], categoryToRemove: string): GameDataType[] => {
  return parsedData.filter((data) => data.category !== categoryToRemove);
};