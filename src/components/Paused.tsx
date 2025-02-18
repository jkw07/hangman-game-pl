import { useNavigate } from "react-router-dom";
import { goToCategoriesPage, goToHomePage } from "../utils/navigation";

type PausedProps = {
  onContinue: () => void;
  handleSelectNewWord: () => void;
};

export const Paused = ({ onContinue, handleSelectNewWord }: PausedProps) => {
  const navigate = useNavigate();
  return (
    <div className="paused-wrapper">
      <div className="paused">
        <div className="paused-header">
          <h2>Paused</h2>
        </div>
        <button className="default-button" onClick={onContinue}>
          Kontynuuj
        </button>
        <button className="default-button" onClick={handleSelectNewWord}>
          Nowe słowo
        </button>
        <button
          className="default-button"
          onClick={() => goToCategoriesPage(navigate)}
        >
          Nowa kategoria
        </button>
        <button
          className="default-button quit-button"
          onClick={() => goToHomePage(navigate)}
        >
          Wyjście z gry
        </button>
      </div>
    </div>
  );
};
