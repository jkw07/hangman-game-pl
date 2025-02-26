import { useNavigate } from "react-router-dom";
import { goToCategoriesPage, goToHomePage } from "../config/navigation";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { replaceWord } from "../redux/wordSlice";
import { continueGame } from "../redux/gameSlice";

export const EndGame = () => {
  const stateWord = useSelector((state: RootState) => state.word);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handlePickNewWord = () => {
    dispatch(replaceWord());
    dispatch(continueGame());
  };
  return (
    <div className="end-game-wrapper">
      <div className="end-game">
        <div className="end-game-header">
          <h2>KONIEC GRY</h2>
        </div>
        {stateWord.status === "won" && (
          <>
            <i className="fa-solid fa-trophy fa-2xl"></i>
            <h3>
              GRATULACJE, WYGRAŁEŚ! Twoje hasło to: {stateWord.selectedWord}
            </h3>
          </>
        )}
        {stateWord.status === "lost" && (
          <>
            <i className="fa-regular fa-face-sad-tear fa-2xl"></i>
            <h3>
              Niestety, tym razem się nie udało... Poprawne hasło to:{" "}
              {stateWord.selectedWord}
            </h3>
          </>
        )}
        <button className="default-button" onClick={handlePickNewWord}>
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
