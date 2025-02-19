import { useEffect } from "react";

import { letters } from "./GameData";
import { LetterButtons } from "./LetterButtons";
import { SelectedWord } from "./SelectedWord";
import { GameStatus } from "./Reducer";
import { Paused } from "./Paused";
import { HealthBar } from "./HealthBar";
import { EndGame } from "./EndGame";
import { useGameContext } from "./GameContext";
import { GameActionType } from "./Reducer";
import menu from "../assets/images/icon-menu.svg";

export const GameBoard = () => {
  const { state, dispatch } = useGameContext();

  useEffect(() => {
    const savedState = localStorage.getItem("gameState");
    if (savedState) {
      const parsedState = JSON.parse(savedState);
      dispatch({
        type: GameActionType.PICK_CATEGORY,
        payload: parsedState.selectedCategory || "",
      });
    }
  }, [dispatch]);

  const onLetterClick = (letter: string) => {
    if (state.guessedLetters.includes(letter)) {
      return;
    }
    dispatch({ type: GameActionType.GUESS_LETTER, payload: letter });
    if (!state.selectedWord.includes(letter)) {
      dispatch({ type: GameActionType.LOSE_LIFE });
    }
    dispatch({ type: GameActionType.CHECK_STATUS });
  };

  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      const pressedKey = event.key.toUpperCase();
      if (
        letters.includes(pressedKey) &&
        !state.guessedLetters.includes(pressedKey)
      ) {
        onLetterClick(pressedKey);
      }
    };
    document.addEventListener("keydown", handleKeyPress);
    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, [state.guessedLetters, onLetterClick]);

  useEffect(() => {
    if (state.gameStatus !== GameStatus.Playing) {
      dispatch({ type: GameActionType.END });
    }
  }, [state.gameStatus, dispatch]);

  useEffect(() => {
    const pageContainer = document.querySelector(".page-container");
    if (pageContainer) {
      if (state.isPaused || state.hasEnded) {
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
        {state.gameStatus === GameStatus.Playing && <LetterButtons />}
      </div>
    </>
  );
};
