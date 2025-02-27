import { letters } from "../gameData/letters";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

type LetterButtonsProps = {
  onLetterClick: (letter: string) => void;
};

export const LetterButtons = ({ onLetterClick }: LetterButtonsProps) => {
  const state = useSelector((state: RootState) => state.game);

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
