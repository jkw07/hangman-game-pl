import { useNavigate } from "react-router-dom";
import { goToCategoriesPage, goToHomePage } from "../config/navigation";
import { useDispatch } from "react-redux";
import { continueGame } from "../redux/gameSlice";
import { replaceWord, resetGame } from "../redux/wordSlice";

export const Paused = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleContinue = () => {
    dispatch(continueGame());
  };

  const shuffleWord = () => {
    dispatch(replaceWord());
  };

  const goToCategories = () => {
    goToCategoriesPage(navigate);
    dispatch(resetGame());
  };

  const quitGame = () => {
    goToHomePage(navigate);
    dispatch(resetGame());
  };

  return (
    <div className="paused-wrapper">
      <div className="paused">
        <div className="paused-header">
          <h2>Paused</h2>
        </div>
        <button className="default-button" onClick={handleContinue}>
          Kontynuuj
        </button>
        <button className="default-button" onClick={shuffleWord}>
          Nowe słowo
        </button>
        <button className="default-button" onClick={goToCategories}>
          Nowa kategoria
        </button>
        <button className="default-button quit-button" onClick={quitGame}>
          Wyjście z gry
        </button>
      </div>
    </div>
  );
};
