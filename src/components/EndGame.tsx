import { useNavigate } from "react-router-dom";

interface EndGameProps {
    gameStatus: string;
}

export const EndGame = ({ gameStatus }: EndGameProps) => {
    const navigate = useNavigate();
    const goToCategoriesPage = () => {
    navigate('/CategoryPage');
    };
    const goToHomePage = () => {
    navigate('/');
    };
    return (
        <>
        <div className="paused-header">
            <h2>KONIEC GRY</h2>
        </div>
        <div className="end-game">
        <div className="end-game-container">
            {gameStatus === "won" && <><i className="fa-solid fa-trophy fa-2xl"></i><h3>GRATULACJE, WYGRAŁEŚ!</h3></>}
            {gameStatus !== "won" && <><i className="fa-regular fa-face-sad-tear fa-2xl"></i><h3>Niestety, tym razem się nie udało...</h3></>}
            <button className="default-button" onClick={goToCategoriesPage}>Nowa kategoria</button>
            <button className="default-button quit-button" onClick={goToHomePage}>Wyjście z gry</button>
        </div>
    </div>
        </>
    )
}