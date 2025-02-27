import { useCategoryActions } from "../hooks/useCategoryActions";

export const AddGameData = () => {
  const {
    closeCategoryForm,
    category,
    words,
    categoryWarning,
    handleCategoryChange,
    handleSave,
    handleTextareaInput,
  } = useCategoryActions();

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
            <button className="default-button" onClick={closeCategoryForm}>
              Wyjdź
            </button>
          </div>
        </form>
      </div>
    </>
  );
};
