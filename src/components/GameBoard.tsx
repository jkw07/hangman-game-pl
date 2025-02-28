import { LetterButtons } from "./LetterButtons";
import { SelectedWord } from "./SelectedWord";
import { Paused } from "./Paused";
import { HealthBar } from "./HealthBar";
import { EndGame } from "./EndGame";

import { useGameActions } from "../hooks/useGameActions";
import { useGameBoard } from "../hooks/useGameBoard";

import menu from "../assets/images/icon-menu.svg";

export const GameBoard = () => {
  const { handlePauseGame } = useGameActions();
  const { state, onLetterClick } = useGameBoard();

  return (
    <>
      {state.status === "paused" && <Paused />}
      {state.status === "finished" && <EndGame />}
      <div className="page-container">
        <div className="header">
          <button onClick={handlePauseGame} className="return-button">
            <img src={menu} alt="menu button"></img>
          </button>
          <HealthBar />
          <h2 className="game-board-header">
            Kategoria: {state.selectedCategory}
          </h2>
        </div>
        <SelectedWord />
        {state.status === "playing" && (
          <LetterButtons onLetterClick={onLetterClick} />
        )}
      </div>
    </>
  );
};
