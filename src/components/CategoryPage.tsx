import { useNavigate } from "react-router-dom";
import { PickCategoryButton } from "./PickCategoryButton";
import { goToHomePage } from "../utils/navigation";
import { useGameContext } from "./GameContext";
import { GameActionType } from "./Reducer";
import returnIcon from "../assets/images/icon-back.svg";
import { AddGameData } from "./AddGameData";
import { useState } from "react";
import { AddNewCategory } from "./AddNewCategory";

export const CategoryPage = () => {
  const [newCategory, setNewCategory] = useState(false);
  const { dispatch } = useGameContext();
  const openNewCategory = () => {
    setNewCategory(true);
  };
  const closeNewCategory = () => {
    setNewCategory(false);
  };
  const deleteAddedCategories = () => {
    localStorage.removeItem("addedCategories");
    dispatch({ type: GameActionType.UPDATE_GAME_DATA });
  };
  const navigate = useNavigate();
  return (
    <>
      <div className="page-container">
        <div className="header">
          <button
            onClick={() => goToHomePage(navigate)}
            className="return-button"
          >
            <img src={returnIcon} alt="return button"></img>
          </button>
          <h2>Kategorie</h2>
        </div>
        <div className="categories">
          <PickCategoryButton />
          <AddNewCategory
            openNewCategory={openNewCategory}
            deleteAddedCategories={deleteAddedCategories}
          />
        </div>
        {newCategory && <AddGameData closeNewCategory={closeNewCategory} />}
      </div>
    </>
  );
};
