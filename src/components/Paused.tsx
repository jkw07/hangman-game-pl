import { useNavigate } from "react-router-dom";

type PausedProps = {
    onContinue: () => void;
}

export const Paused = ({onContinue}: PausedProps) => {
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
            <h2>Paused</h2>
        </div>
        <div className="paused">
        <div className="paused-container">
            <button className="blue-button" onClick={onContinue}>Kontynuuj</button>
            <button className="blue-button" onClick={goToCategoriesPage}>Nowa kategoria</button>
            <button className="blue-button" onClick={goToHomePage}>Wyjście z gry</button>
        </div>
    </div>
        </>
    )
}