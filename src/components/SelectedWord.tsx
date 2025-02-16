type SelectedWordProps = {
    word: string;
    guessedLetters: string[];
}

export const SelectedWord = ({ word, guessedLetters }: SelectedWordProps) => {
    return (
        <div className="selected-word-container">
            {word.split("").map((letter: string, index: number) => (
                <div 
                    key={index} 
                    className={`${letter === " " ? "selected-word-empty" : "selected-word-letter"}`}
                >
                    {letter === " " ? " " : guessedLetters.includes(letter) ? letter : "_"}
                </div>
            ))}
        </div>
    );
};