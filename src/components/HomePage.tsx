import logo from "../assets/images/logo.svg";
import play from "../assets/images/icon-play.svg";
import { useGameActions } from "../hooks/useGameActions";

export const HomePage = () => {
  const { handlePlay, handleShowRules } = useGameActions();

  return (
    <>
      <header className="home-page">
        <div className="logo">
          <img src={logo} alt="Hangman Logo"></img>
        </div>
        <div className="container">
          <button onClick={handlePlay} className="play-button">
            <img src={play} alt="play button"></img>
          </button>
          <button className="default-button" onClick={handleShowRules}>
            Zasady gry
          </button>
        </div>
      </header>
    </>
  );
};
