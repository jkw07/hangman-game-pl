type SelectedWordProps = {
    word: string;
    guessedLetters: string[];
}

export const SelectedWord = ({ word, guessedLetters }: SelectedWordProps) => {
    return (
        <div className="selected-word-container">
            {word.split("").map((letter: string, index: number) => (
                <div className="selected-word-letter" key={index}>{guessedLetters.includes(letter) ? letter : "_"}</div>
            ))}
        </div>
    );
};