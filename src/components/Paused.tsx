import { useGameActions } from "../hooks/useGameActions";

export const Paused = () => {
  const {
    handleContinue,
    handlePickNewCategory,
    handleQuitGame,
    handleShuffleWord,
  } = useGameActions();

  return (
    <div className="paused-wrapper">
      <div className="paused">
        <div className="paused-header">
          <h2>Paused</h2>
        </div>
        <button className="default-button" onClick={handleContinue}>
          Kontynuuj
        </button>
        <button className="default-button" onClick={handleShuffleWord}>
          Nowe słowo
        </button>
        <button className="default-button" onClick={handlePickNewCategory}>
          Nowa kategoria
        </button>
        <button className="default-button quit-button" onClick={handleQuitGame}>
          Wyjście z gry
        </button>
      </div>
    </div>
  );
};
