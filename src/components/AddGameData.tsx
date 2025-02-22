import { useState } from "react";
import { GameActionType } from "./Reducer";
import { useGameContext } from "./GameContext";
import { letters } from "./GameDefaultData";

type AddGameDataProps = {
  closeNewCategory: () => void;
};

export const AddGameData = ({ closeNewCategory }: AddGameDataProps) => {
  const { state, dispatch } = useGameContext();
  const [category, setCategory] = useState("");
  const [words, setWords] = useState("");
  const [categoryError, setCategoryError] = useState(false);

  const handleCategoryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newCategory = e.target.value.trim();
    setCategory(newCategory);
    const categoryExists = state.gameData.some(
      (item) => item.category.toLowerCase() === newCategory.toLowerCase()
    );
    if (categoryExists) {
      setCategoryError(true);
    } else {
      setCategoryError(false);
    }
  };

  const handleSave = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (categoryError || !category.trim()) {
      return;
    }

    const wordsArray = words.toUpperCase().split(",");
    const newCategory = {
      category: category.toUpperCase(),
      words: wordsArray.map((word) => word.trim()),
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
  const allowedCharsRegex = new RegExp(`[^${letters.join("")},\\s]`, "gi");

  const handleTextareaInput = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const filteredValue = e.target.value.replace(allowedCharsRegex, "");
    setWords(filteredValue);
  };

  return (
    <>
      <div className="new-category-wrapper">
        <form className="new-category" onSubmit={handleSave}>
          <div className="new-category-header">
            <h2>Dodaj kategorię i słowa</h2>
          </div>
          <label>Podaj nową kategorię:</label>
          <input
            type="text"
            className="input-category"
            value={category}
            onChange={handleCategoryChange}
            required
          />
          {categoryError && (
            <div className="error-message">
              Kategoria już istnieje! Wybierz inną
            </div>
          )}
          <label>Podaj słowa oddzielone przecinkami:</label>
          <textarea
            className="input-words"
            value={words}
            onChange={handleTextareaInput}
            required
          ></textarea>
          <div className="input-category-buttons">
            <button className="default-button" type="submit">
              Zapisz
            </button>
            <button className="default-button" onClick={closeNewCategory}>
              Wyjdź
            </button>
          </div>
        </form>
      </div>
    </>
  );
};
