import { useState, useEffect } from "react";

import { useLocation } from "react-router-dom";
import { GameData, letters } from "./GameData"; 
import { LetterButtons } from "./LetterButtons";
import { SelectedWord } from "./SelectedWord";
import { useGameLogic } from "./GameLogic";
import {GameStatus} from './GameLogic';
import { Paused } from "./Paused";
import { HealthBar } from "./HealthBar";
import { EndGame } from "./EndGame";
import menu from '../assets/images/icon-menu.svg';

export const GameBoard = () => {
    const [isPaused, setIsPaused] = useState(false);
    const [hasEnded, setHasEnded] = useState(false);
    const handlePause = () => {
        setIsPaused(true);
    };

    const handleContinue = () => {
        setIsPaused(false);
    };

    const location = useLocation();
    const category = location.state?.category as string;

    const selectedCategory = GameData.find(item => item.category === category);
    const wordsArray = selectedCategory ? selectedCategory.words : [];
    const [selectedWord] = useState<string>(() =>
    wordsArray.length > 0 ? wordsArray[Math.floor(Math.random() * wordsArray.length)] : ""); 

    const maxLives = 6;
    const { livesLeft, guessedLetters, gameStatus, handleLetterClick } = useGameLogic(selectedWord, maxLives);

    useEffect(() => {
        const handleKeyPress = (event: KeyboardEvent) => {
            const pressedKey = event.key.toUpperCase();
            if (letters.includes(pressedKey) && !guessedLetters.includes(pressedKey)) {
                handleLetterClick(pressedKey);
            }
        };
        document.addEventListener("keydown", handleKeyPress);
        return () => {
            document.removeEventListener("keydown", handleKeyPress);
        };
    }, [guessedLetters, handleLetterClick]); 

    useEffect(() => {
        if (gameStatus !== GameStatus.Playing) {
            setHasEnded(true);
        }
    }, [gameStatus]);

    useEffect(() => {
        const pageContainer = document.querySelector('.page-container');
        if (pageContainer) {
            if (isPaused || hasEnded) {
                pageContainer.classList.add("blurred");
            } else {
                pageContainer.classList.remove("blurred");
            }
        }
    }, [isPaused, hasEnded]);

    return (
        <>
        {isPaused && <Paused onContinue={handleContinue} />}
        {hasEnded && (
        <EndGame gameStatus={gameStatus}/>
        )}
        <div className="page-container">
                <div className="header">
                    <button onClick={handlePause} className="return-button">
                        <img src={menu} alt="menu button"></img>
                    </button>
                    <HealthBar livesLeft={livesLeft} />
                    <h2 className="game-board-header">Kategoria: {category}</h2>
                </div>
                <SelectedWord word={selectedWord} guessedLetters={guessedLetters} />
        {gameStatus === GameStatus.Playing && <LetterButtons onLetterClick={handleLetterClick} guessedLetters={guessedLetters}/>}
        </div>
    </>
    );
};