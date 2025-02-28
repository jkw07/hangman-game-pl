import { useGameActions } from "../hooks/useGameActions";
import returnIcon from "../assets/images/icon-back.svg";

export const HowToPlay = () => {
  const { handleGoToHomePage } = useGameActions();
  return (
    <>
      <div className="page-container">
        <div className="header">
          <button onClick={handleGoToHomePage} className="return-button">
            <img src={returnIcon} alt="return button"></img>
          </button>
          <h2>Zasady gry</h2>
        </div>
        <div className="game-rules-container">
          <p>
            Cel gry: Twoim zadaniem jest odgadnięcie ukrytego słowa, zanim
            stracisz wszystkie życia.
          </p>
          <p>
            Rozgrywka:
            <ul>
              <li>
                Gra losuje tajne słowo i ukrywa je pod podkreśleniami (_ _ _ _).
              </li>
              <li>Możesz zgadywać litery pojedynczo.</li>
              <li>
                Jeśli podana litera znajduje się w słowie, zostanie odsłonięta
                we właściwych miejscach.
              </li>
              <li>Jeśli litera nie występuje w słowie, tracisz jedno życie.</li>
              <li>
                Masz 6 żyć. Każda błędna litera to jedno stracone życie. Gdy
                wykorzystasz wszystkie - przegrywasz.
              </li>
              <li>
                Gra kończy się po odgadnięciu słowa lub utracie wszystkich żyć.
              </li>
            </ul>
          </p>
          <p>
            <strong>Wygrywasz</strong>, jeśli odkryjesz całe słowo przed utratą
            wszystkich żyć. <strong>Przegrywasz</strong>, jeśli stracisz
            wszystkie życia przed odgadnięciem słowa.
          </p>
        </div>
      </div>
    </>
  );
};
