type AddNewCategoryProps = {
  openNewCategory: () => void;
  deleteAddedCategories: () => void;
};

export const AddNewCategory = ({
  openNewCategory,
  deleteAddedCategories,
}: AddNewCategoryProps) => {
  return (
    <div className="add-new-category">
      <button className="default-button quit-button" onClick={openNewCategory}>
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
