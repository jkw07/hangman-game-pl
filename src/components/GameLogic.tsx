import { useState } from "react";

export enum GameStatus {
  Playing = 'playing',
  Won = 'won',
  Lost = 'lost',
}

export const useGameLogic = (selectedWord: string, maxLives: number) => {
  const [livesLeft, setLivesLeft] = useState(maxLives);
  const [guessedLetters, setGuessedLetters] = useState<string[]>([]);
  const [gameStatus, setGameStatus] = useState<GameStatus>(GameStatus.Playing);

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
      setGameStatus(GameStatus.Won);
    } else if (livesLeft <= 0) {
      setGameStatus(GameStatus.Lost);
    }
  };
  return { livesLeft, guessedLetters, gameStatus, handleLetterClick };
};

