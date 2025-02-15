import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

import { useLocation } from "react-router-dom";
import { GameData } from "./GameData"; 
import { LetterButtons } from "./LetterButtons";
import { SelectedWord } from "./SelectedWord";
import { useGameLogic } from "./GameLogic";
import { LivesCounter} from "./LivesCounter";
import { Paused } from "./Paused";
import logo from '../assets/images/logo.svg'
import menu from '../assets/images/icon-menu.svg'

export const GameBoard = () => {
    const [isPaused, setIsPaused] = useState(false);
    const handlePause = () => {
        setIsPaused(true);
    };

    const handleContinue = () => {
        setIsPaused(false);
    };

    useEffect(() => {
        const pageContainer = document.querySelector('.page-container');
        if (pageContainer) {
            if (isPaused) {
                pageContainer.classList.add("blurred");
            } else {
                pageContainer.classList.remove("blurred");
            }
        }
    }, [isPaused]);

    const navigate = useNavigate();
    const goToHomePage = () => {
    navigate('/');
    };
    const location = useLocation();
    const category = location.state?.category as string;

    const selectedCategory = GameData.find(item => item.category === category);
    const wordsArray = selectedCategory ? selectedCategory.words : [];
    const [selectedWord] = useState<string>(() =>
    wordsArray.length > 0 ? wordsArray[Math.floor(Math.random() * wordsArray.length)] : ""); 

    const maxLives = 6;
    const { livesLeft, guessedLetters, gameStatus, handleLetterClick } = useGameLogic(selectedWord, maxLives);

    return (
        <>
        {isPaused && <Paused onContinue={handleContinue} />}
        <div className="page-container">
            <div className="header">
                <button onClick={handlePause} className="return-button"><img src={menu} alt="menu button"></img></button>
                <h2>Kategoria: {category}</h2>
        </div>
        <LivesCounter livesLeft={livesLeft}/>
        <div className='selected-word'>
            <SelectedWord word={selectedWord} guessedLetters={guessedLetters} />
        </div>
        {gameStatus !== "playing" && (
        <button onClick={goToHomePage}>
            {gameStatus === "won" ? "Wygrałeś! :-) Zagraj ponownie" : "Przegrałeś! :-( Spróbuj ponownie"}
        </button>
        )}
        {gameStatus === "playing" && <div className="letters"><LetterButtons onLetterClick={handleLetterClick} guessedLetters={guessedLetters}/></div>}
        </div>
    </>
    );
};