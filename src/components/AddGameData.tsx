import { useState } from "react";
import { GameActionType } from "./Reducer";
import { useGameContext } from "./GameContext";

type AddGameDataProps = {
  closeNewCategory: () => void;
};

export const AddGameData = ({ closeNewCategory }: AddGameDataProps) => {
  const { dispatch } = useGameContext();
  const [category, setCategory] = useState("");
  const [words, setWords] = useState("");

  const handleSave = () => {
    const wordsArray = words.toUpperCase().split(",");
    const newCategory = {
      category: category.trim().toUpperCase(),
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

  return (
    <div className="new-category-wrapper">
      <div className="new-category">
        <div className="new-category-header">
          <h2>Dodaj kategorię i słowa</h2>
        </div>
        <label>Podaj nową kategorię:</label>
        <input
          type="text"
          className="input-category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          required
        />
        <label>Podaj słowa oddzielone przecinkami:</label>
        <textarea
          className="input-words"
          value={words}
          onChange={(e) => setWords(e.target.value)}
          required
        ></textarea>
        <button className="default-button" onClick={handleSave}>
          Zapisz i wyjdź
        </button>
      </div>
    </div>
  );
};
