import { useNavigate } from "react-router-dom";
import { goToCategoriesPage, goToHomePage } from "../utils/navigation";
import { useGameContext } from "./GameContext";
import { GameActionType } from "./Reducer";

export const Paused = () => {
  const { state, dispatch } = useGameContext();
  const navigate = useNavigate();
  return (
    <div className="paused-wrapper">
      <div className="paused">
        <div className="paused-header">
          <h2>Paused</h2>
        </div>
        <button
          className="default-button"
          onClick={() => dispatch({ type: GameActionType.CONTINUE })}
        >
          Kontynuuj
        </button>
        <button
          className="default-button"
          onClick={() =>
            dispatch({
              type: GameActionType.RESET_GAME,
              payload: state.selectedCategory,
            })
          }
        >
          Nowe słowo
        </button>
        <button
          className="default-button"
          onClick={() => goToCategoriesPage(navigate)}
        >
          Nowa kategoria
        </button>
        <button
          className="default-button quit-button"
          onClick={() => goToHomePage(navigate)}
        >
          Wyjście z gry
        </button>
      </div>
    </div>
  );
};
