import { useNavigate } from "react-router-dom";
import { goToGameBoard } from "../config/navigation";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { pickCategory, pickRandomWord } from "../redux/gameSlice";

import { mergeGameData } from "../utils/dataHelpers";

export const PickCategoryButton = () => {
  const state = useSelector((state: RootState) => state.data);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const gameData = mergeGameData([...state.defaultData, ...state.parsedData]);

  const handleCategoryButtonClick = (category: string, words: string[]) => {
    dispatch(pickCategory({ category, words }));
    dispatch(pickRandomWord());
    goToGameBoard(navigate);
  };

  return (
    <>
      {gameData.map((item, index) => (
        <button
          className="default-button"
          key={index}
          value={item.category}
          onClick={() => handleCategoryButtonClick(item.category, item.words)}
        >
          {item.category}
        </button>
      ))}
    </>
  );
};
