import { letters } from "./GameData";
import { useGameContext } from "./GameContext";
import { GameActionType } from "./Reducer";

export const LetterButtons = () => {
  const { state, dispatch } = useGameContext();
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
  return (
    <div className="letters-container">
      {letters.map((letter) => (
        <button
          className="letter"
          key={letter}
          value={letter}
          onClick={() => onLetterClick(letter)}
          disabled={state.guessedLetters.includes(letter)}
          style={{
            backgroundColor: state.guessedLetters.includes(letter)
              ? "grey"
              : "whitesmoke",
            cursor: state.guessedLetters.includes(letter)
              ? "not-allowed"
              : "pointer",
          }}
        >
          {letter}
        </button>
      ))}
    </div>
  );
};
