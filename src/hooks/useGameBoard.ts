import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { useDispatch } from "react-redux";
import { useCallback, useEffect, useRef } from "react";
import { guessLetter, looseLife, checkStatus } from "../redux/gameSlice";
import { letters } from "../gameData/letters";

export function useGameBoard() {
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
    return {state, onLetterClick}
}