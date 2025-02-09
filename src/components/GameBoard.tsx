import { useNavigate } from "react-router-dom";
import { useState } from "react";

import { useLocation } from "react-router-dom";
import { GameData } from "./GameData"; 
import { LetterButtons } from "./LetterButtons";
import { SelectedWord } from "./SelectedWord";
import { useGameLogic } from "./GameLogic";
import { LivesCounter} from "./LivesCounter";
import logo from '../assets/logo.png'

type gameDataType = {
  category: string;
  words: string[];
}

export const GameBoard = () => {
    const navigate = useNavigate();
    const goToHomePage = () => {
    navigate('/');
    };
    const location = useLocation();
    const category = location.state?.category as string;

    const gameData: gameDataType[] = GameData();
    const selectedCategory = gameData.find(item => item.category === category);
    const wordsArray = selectedCategory ? selectedCategory.words : [];
    const [selectedWord] = useState<string>(() =>
    wordsArray.length > 0 ? wordsArray[Math.floor(Math.random() * wordsArray.length)] : ""); 

    const maxLives = 6;
    const { livesLeft, guessedLetters, gameStatus, handleLetterClick } = useGameLogic(selectedWord, maxLives);

    return (
        <div className="game-board">
            <div className="game-status">
                <div className="back-to-home-button">
                    <i onClick={goToHomePage} className="fa-solid fa-arrow-rotate-left fa-xl" style={{ color: 'whitesmoke'}}></i>
                </div>
                <img src={logo} className="logo" alt="logo"></img>
                <LivesCounter maxLives={maxLives} livesLeft={livesLeft}/>
            </div>
            <p>KATEGORIA: <strong>{category}</strong></p>
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
    );
};