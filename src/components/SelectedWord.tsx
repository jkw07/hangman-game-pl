import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

export const SelectedWord = () => {
  const state = useSelector((state: RootState) => state.word);

  return (
    <div className="selected-word-container">
      {state.selectedWord.split("").map((letter: string, index: number) => {
        let className = "selected-word-letter";
        if (letter === " ") {
          className = "selected-word-empty";
        } else if (state.guessedLetters.includes(letter)) {
          className = "selected-word-letter guessed";
        }
        return (
          <div key={index} className={className}>
            {letter === " "
              ? " "
              : state.guessedLetters.includes(letter)
              ? letter
              : "_"}
          </div>
        );
      })}
    </div>
  );
};
