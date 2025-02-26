import { useNavigate } from "react-router-dom";
import { goToGameBoard } from "../config/navigation";
import { useDispatch, useSelector } from "react-redux";
import { pickCategory, pickRandomWord } from "../redux/wordSlice";

import { RootState } from "../redux/store";

export const PickCategoryButton = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const state = useSelector((state: RootState) => state.data);
  const gameData = [...state.defaultData, ...state.parsedData];

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
