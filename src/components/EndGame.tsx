import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { useGameActions } from "../hooks/useGameActions";

export const EndGame = () => {
  const state = useSelector((state: RootState) => state.game);
  const { handlePickNewCategory, handleQuitGame, handleShuffleWord } =
    useGameActions();

  return (
    <div className="end-game-wrapper">
      <div className="end-game">
        <div className="end-game-header">
          <h2>KONIEC GRY</h2>
        </div>
        {state.result === "won" && (
          <>
            <i className="fa-solid fa-trophy fa-2xl"></i>
            <h3>GRATULACJE, WYGRAŁEŚ! Twoje hasło to: {state.selectedWord}</h3>
          </>
        )}
        {state.result === "lost" && (
          <>
            <i className="fa-regular fa-face-sad-tear fa-2xl"></i>
            <h3>
              Niestety, tym razem się nie udało... Poprawne hasło to:{" "}
              {state.selectedWord}
            </h3>
          </>
        )}
        <button className="default-button" onClick={handleShuffleWord}>
          Nowe słowo
        </button>
        <button className="default-button" onClick={handlePickNewCategory}>
          Nowa kategoria
        </button>
        <button className="default-button quit-button" onClick={handleQuitGame}>
          Wyjście z gry
        </button>
      </div>
    </div>
  );
};
