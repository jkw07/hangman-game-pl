type LetterButtonsProps = {
  onLetterClick: (letter: string) => void;
  guessedLetters: string[];
}

export const LetterButtons = ({onLetterClick, guessedLetters}: LetterButtonsProps) => {
    const letters: string[] = ["A","Ą","B","C","Ć","D","E","Ę","F","G","H","I","J","K","L","Ł","M","N","Ń","O","Ó","P","Q","R","S","Ś","T","U","V","W","X","Y","Z","Ź","Ż"];
    return (
        <div className="letters-container">
            {letters.map((letter) => (
                <button className="letter" key={letter} value={letter} onClick={() => onLetterClick(letter)}  disabled={guessedLetters.includes(letter)} style={{
            backgroundColor: guessedLetters.includes(letter) ? "grey" : "whitesmoke", // Szary jeśli kliknięty
            cursor: guessedLetters.includes(letter) ? "not-allowed" : "pointer", // Blokada kursora
          }}>{letter}</button>
            ))}
        </div>
    );
};