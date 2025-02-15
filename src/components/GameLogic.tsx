import { useState } from "react";

export const useGameLogic = (selectedWord: string, maxLives: number) => {
  const [livesLeft, setLivesLeft] = useState(maxLives);
  const [guessedLetters, setGuessedLetters] = useState<string[]>([]);
  const [gameStatus, setGameStatus] = useState<"playing" | "won" | "lost">("playing");

  //TODO enum = gamestatus (playing ... itd)

  const handleLetterClick = (letter: string) => {
    const newGuessedLetters = [...guessedLetters, letter];
    const newLivesLeft = selectedWord.includes(letter) ? livesLeft : livesLeft - 1;
    setGuessedLetters(newGuessedLetters);
    setLivesLeft(newLivesLeft);
    checkGameStatus(selectedWord, newGuessedLetters, newLivesLeft);
  };

  const checkGameStatus = (word: string, guessedLetters: string[], livesLeft: number) => {
    const wordLetters = Array.from(new Set(word.split("")));
    if (wordLetters.every((letter) => guessedLetters.includes(letter))) {
      setGameStatus("won");
    } else if (livesLeft <= 0) {
      setGameStatus("lost");
    }
  };
  return { livesLeft, guessedLetters, gameStatus, handleLetterClick };
};

