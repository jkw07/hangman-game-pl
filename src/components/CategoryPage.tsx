import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

import { useGameActions } from "../hooks/useGameActions";

import { PickCategoryButton } from "./PickCategoryButton";
import { AddGameData } from "./AddGameData";
import { AddNewCategory } from "./AddNewCategory";

import returnIcon from "../assets/images/icon-back.svg";

export const CategoryPage = () => {
  const { handleGoToHomePage } = useGameActions();
  const state = useSelector((state: RootState) => state.categoryForm);

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
        {state.isCategoryFormOpen && <AddGameData />}
      </div>
    </>
  );
};
