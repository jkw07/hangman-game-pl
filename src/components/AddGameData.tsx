import { useState } from "react";
import { letters } from "../gameData/letters";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { loadParsedData, saveParsedData } from "../utils/localStorage";
import { addToParsedData } from "../redux/dataSlice";
import { useDispatch } from "react-redux";
import { mergeGameData } from "../utils/dataHelpers";

type AddGameDataProps = {
  closeNewCategory: () => void;
};

export const AddGameData = ({ closeNewCategory }: AddGameDataProps) => {
  const dispatch = useDispatch();
  const state = useSelector((state: RootState) => state.data);
  const [category, setCategory] = useState("");
  const [words, setWords] = useState("");
  const [categoryWarning, setCategoryWarning] = useState(false);
  const gameData = mergeGameData([...state.defaultData, ...state.parsedData]);

  const handleCategoryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newCategory = e.target.value.trim();
    setCategory(newCategory);
    const categoryExists = gameData.some(
      (item) => item.category.toLowerCase() === newCategory.toLowerCase()
    );
    if (categoryExists) {
      setCategoryWarning(true);
    } else {
      setCategoryWarning(false);
    }
  };

  const handleSave = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!category.trim()) {
      return;
    }

    const wordsArray = words.toUpperCase().split(",");
    const newCategory = {
      category: category.toUpperCase(),
      words: wordsArray.map((word) => word.trim()),
    };
    const existingData = loadParsedData();
    existingData.push(newCategory);
    saveParsedData(existingData);
    setCategory("");
    setWords("");
    dispatch(addToParsedData(existingData));
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
          {categoryWarning && (
            <div className="error-message">
              Kategoria już istnieje. Wpisane słowa zostaną dodane do
              istniejącej kategorii.
            </div>
          )}
          <label>
            Podaj słowa oddzielone przecinkami. Pamiętaj, że duplikaty słów
            zostaną usunięte.
          </label>
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
