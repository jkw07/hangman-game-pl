import { useCategoryActions } from "../hooks/useCategoryActions";

export const AddNewCategory = () => {
  const { openCategoryForm, deleteAddedCategories } = useCategoryActions();
  return (
    <div className="add-new-category">
      <button className="default-button quit-button" onClick={openCategoryForm}>
        Dodaj własną kategorię
      </button>
      <button
        className="default-button quit-button"
        onClick={deleteAddedCategories}
      >
        Usuń dodane kategorie
      </button>
    </div>
  );
};
