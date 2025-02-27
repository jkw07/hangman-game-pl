import { useEffect, useCallback, useRef } from "react";

import { letters } from "../gameData/letters";
import { LetterButtons } from "./LetterButtons";
import { SelectedWord } from "./SelectedWord";
import { Paused } from "./Paused";
import { HealthBar } from "./HealthBar";
import { EndGame } from "./EndGame";
import menu from "../assets/images/icon-menu.svg";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../redux/store";
import {
  guessLetter,
  looseLife,
  checkStatus,
  pauseGame,
} from "../redux/gameSlice";

export const GameBoard = () => {
  const state = useSelector((state: RootState) => state.game);
  const dispatch = useDispatch();

  const onLetterClick = useCallback(
    (letter: string) => {
      if (state.guessedLetters.includes(letter)) {
        return;
      }
      dispatch(guessLetter(letter));
      if (!state.selectedWord.includes(letter)) {
        dispatch(looseLife());
      }
      dispatch(checkStatus());
    },
    [state.guessedLetters, state.selectedWord, dispatch]
  );

  const onLetterClickRef = useRef(onLetterClick);

  useEffect(() => {
    onLetterClickRef.current = onLetterClick;
  }, [onLetterClick]);

  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      const pressedKey = event.key.toUpperCase();
      if (
        letters.includes(pressedKey) &&
        !state.guessedLetters.includes(pressedKey)
      ) {
        onLetterClickRef.current(pressedKey);
      }
    };
    document.addEventListener("keydown", handleKeyPress);
    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, [state.guessedLetters]);

  useEffect(() => {
    const pageContainer = document.querySelector(".page-container");
    if (pageContainer) {
      if (state.status === "paused" || state.status === "finished") {
        pageContainer.classList.add("blurred");
      } else {
        pageContainer.classList.remove("blurred");
      }
    }
  }, [state.status]);

  const handlePauseGame = () => {
    dispatch(pauseGame());
  };

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
