import { PickCategoryButton } from "./PickCategoryButton";
import returnIcon from "../assets/images/icon-back.svg";
import { AddGameData } from "./AddGameData";
import { AddNewCategory } from "./AddNewCategory";
import { useGameActions } from "../hooks/useGameActions";
import { useCategoryActions } from "../hooks/useCategoryActions";

export const CategoryPage = () => {
  const { handleGoToHomePage } = useGameActions();
  const { isCategoryFormOpen } = useCategoryActions();

  return (
    <>
      <div className="page-container">
        <div className="header">
          <button onClick={handleGoToHomePage} className="return-button">
            <img src={returnIcon} alt="return button"></img>
          </button>
          <h2>Kategorie</h2>
        </div>
        <div className="categories">
          <PickCategoryButton />
          <AddNewCategory />
        </div>
        {isCategoryFormOpen && <AddGameData />}
      </div>
    </>
  );
};
