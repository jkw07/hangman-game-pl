import { letters } from "./GameData";

type LetterButtonsProps = {
  onLetterClick: (letter: string) => void;
  guessedLetters: string[];
}

export const LetterButtons = ({onLetterClick, guessedLetters}: LetterButtonsProps) => {
    return (
        <div className="letters-container">
            {letters.map((letter) => (
                <button className="letter" key={letter} value={letter} onClick={() => onLetterClick(letter)}  disabled={guessedLetters.includes(letter)} style={{
            backgroundColor: guessedLetters.includes(letter) ? "grey" : "whitesmoke",
            cursor: guessedLetters.includes(letter) ? "not-allowed" : "pointer", 
          }}>{letter}</button>
            ))}
        </div>
    );
};