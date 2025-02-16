import { useNavigate } from "react-router-dom";
import { goToCategoriesPage, goToHomePage } from "../utils/navigation";

type PausedProps = {
    onContinue: () => void;
}

export const Paused = ({onContinue}: PausedProps) => {
    const navigate = useNavigate();
    return (
        <>
        <div className="paused-header">
            <h2>Paused</h2>
        </div>
        <div className="paused">
        <div className="paused-container">
            <button className="default-button" onClick={onContinue}>Kontynuuj</button>
            <button className="default-button" onClick={()=>goToCategoriesPage(navigate)}>Nowa kategoria</button>
            <button className="default-button quit-button" onClick={()=>goToHomePage(navigate)}>Wyjście z gry</button>
        </div>
    </div>
        </>
    )
}