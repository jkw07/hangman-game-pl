import { useNavigate } from "react-router-dom";
import {GameStatus} from './GameLogic';
import { goToCategoriesPage, goToHomePage } from "../utils/navigation";

interface EndGameProps {
    gameStatus: GameStatus;
    word: string;
}

export const EndGame = ({ gameStatus, word }: EndGameProps) => {
    const navigate = useNavigate();
    return (
        <>
        <div className="end-game-header">
            <h2>KONIEC GRY</h2>
        </div>
        <div className="end-game">
        <div className="end-game-container">
            {gameStatus === GameStatus.Won && <><i className="fa-solid fa-trophy fa-2xl"></i><h3>GRATULACJE, WYGRAŁEŚ! Twoje hasło to: {word}</h3></>}
            {gameStatus === GameStatus.Lost && <><i className="fa-regular fa-face-sad-tear fa-2xl"></i><h3>Niestety, tym razem się nie udało... Poprawne hasło to: {word}</h3></>}
            <button className="default-button" onClick={()=>goToCategoriesPage(navigate)}>Nowa kategoria</button>
            <button className="default-button quit-button" onClick={()=>goToHomePage(navigate)}>Wyjście z gry</button>
        </div>
    </div>
        </>
    )
}