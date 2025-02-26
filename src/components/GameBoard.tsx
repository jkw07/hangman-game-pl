import { useEffect } from "react";

import { letters } from "./GameDefaultData";
import { LetterButtons } from "./LetterButtons";
import { SelectedWord } from "./SelectedWord";
import { Paused } from "./Paused";
import { HealthBar } from "./HealthBar";
import { EndGame } from "./EndGame";
import menu from "../assets/images/icon-menu.svg";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../redux/store";
import { guessLetter, looseLife, checkStatus } from "../redux/wordSlice";
import { endGame } from "../redux/gameSlice";

export const GameBoard = () => {
  const wordState = useSelector((state: RootState) => state.word);
  const gameState = useSelector((state: RootState) => state.game);
  const dispatch = useDispatch();

  const onLetterClick = (letter: string) => {
    if (wordState.guessedLetters.includes(letter)) {
      return;
    }
    dispatch(guessLetter(letter));
    if (!wordState.selectedWord.includes(letter)) {
      dispatch(looseLife());
    }
    dispatch(checkStatus());
  };

  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      const pressedKey = event.key.toUpperCase();
      if (
        letters.includes(pressedKey) &&
        !wordState.guessedLetters.includes(pressedKey)
      ) {
        onLetterClick(pressedKey);
      }
    };
    document.addEventListener("keydown", handleKeyPress);
    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, [wordState.guessedLetters]);

  useEffect(() => {
    if (wordState.status !== "none") {
      dispatch(endGame());
    }
  }, [wordState.status]);

  useEffect(() => {
    const pageContainer = document.querySelector(".page-container");
    if (pageContainer) {
      if (gameState === "paused" || state.hasEnded) {
        pageContainer.classList.add("blurred");
      } else {
        pageContainer.classList.remove("blurred");
      }
    }
  }, [state.isPaused, state.hasEnded]);

  return (
    <>
      {state.isPaused && <Paused />}
      {state.hasEnded && <EndGame />}
      <div className="page-container">
        <div className="header">
          <button
            onClick={() => dispatch({ type: GameActionType.PAUSE })}
            className="return-button"
          >
            <img src={menu} alt="menu button"></img>
          </button>
          <HealthBar />
          <h2 className="game-board-header">
            Kategoria: {state.selectedCategory}
          </h2>
        </div>
        <SelectedWord />
        {state.gameStatus === GameStatus.Playing && (
          <LetterButtons onLetterClick={onLetterClick} />
        )}
      </div>
    </>
  );
};
