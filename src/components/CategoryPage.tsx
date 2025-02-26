import { useNavigate } from "react-router-dom";
import { PickCategoryButton } from "./PickCategoryButton";
import { goToHomePage } from "../config/navigation";
import returnIcon from "../assets/images/icon-back.svg";
import { AddGameData } from "./AddGameData";
import { useState } from "react";
import { AddNewCategory } from "./AddNewCategory";
import { clearParsedData } from "../utils/localStorage";
import { removeParsedData } from "../redux/dataSlice";
import { useDispatch } from "react-redux";

export const CategoryPage = () => {
  const dispatch = useDispatch();

  const [newCategory, setNewCategory] = useState(false);
  const openNewCategory = () => {
    setNewCategory(true);
  };
  const closeNewCategory = () => {
    setNewCategory(false);
  };

  const deleteAddedCategories = () => {
    clearParsedData();
    dispatch(removeParsedData());
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
