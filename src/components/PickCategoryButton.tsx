import { GameData } from "./GameData";
import { useNavigate } from "react-router-dom";
import { goToGameBoard } from "../utils/navigation";
import { useGameContext } from "./GameContext";
import { GameActionType } from "./Reducer";

type gameDataType = {
  category: string;
  words: string[];
};

export const PickCategoryButton = () => {
  const { dispatch } = useGameContext();
  const gameData: gameDataType[] = GameData;
  const navigate = useNavigate();
  const categories: string[] = gameData.map((item) => item.category);

  const handleCategoryButtonClick = (category: string) => {
    dispatch({ type: GameActionType.PICK_CATEGORY, payload: category });
    goToGameBoard(navigate);
  };

  return (
    <>
      {categories.map((category, index) => (
        <button
          className="default-button"
          key={index}
          value={category}
          onClick={() => handleCategoryButtonClick(category)}
        >
          {category}
        </button>
      ))}
    </>
  );
};
