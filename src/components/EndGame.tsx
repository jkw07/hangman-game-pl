import { useNavigate } from "react-router-dom";
import { goToCategoriesPage, goToHomePage } from "../utils/navigation";
import { useGameContext } from "./GameContext";
import { GameActionType } from "./Reducer";
import { GameStatus } from "./Reducer";

export const EndGame = () => {
  const { state, dispatch } = useGameContext();
  const navigate = useNavigate();
  return (
    <div className="end-game-wrapper">
      <div className="end-game">
        <div className="end-game-header">
          <h2>KONIEC GRY</h2>
        </div>
        {state.gameStatus === GameStatus.Won && (
          <>
            <i className="fa-solid fa-trophy fa-2xl"></i>
            <h3>GRATULACJE, WYGRAŁEŚ! Twoje hasło to: {state.selectedWord}</h3>
          </>
        )}
        {state.gameStatus === GameStatus.Lost && (
          <>
            <i className="fa-regular fa-face-sad-tear fa-2xl"></i>
            <h3>
              Niestety, tym razem się nie udało... Poprawne hasło to:{" "}
              {state.selectedWord}
            </h3>
          </>
        )}
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
