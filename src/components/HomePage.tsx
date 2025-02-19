import { useNavigate } from "react-router-dom";
import { goToCategoriesPage, goToRulesPage } from "../utils/navigation";
import { GameActionType } from "./Reducer"; // Adjust the import path as necessary

import logo from "../assets/images/logo.svg";
import play from "../assets/images/icon-play.svg";
import { useGameContext } from "./GameContext";

export const HomePage = () => {
  const { dispatch } = useGameContext();

  const handlePlay = () => {
    dispatch({ type: GameActionType.UPDATE_GAME_DATA });
    goToCategoriesPage(navigate);
  };
  const navigate = useNavigate();
  return (
    <>
      <header className="home-page">
        <div className="logo">
          <img src={logo} alt="Hangman Logo"></img>
        </div>
        <div className="container">
          <button onClick={() => handlePlay()} className="play-button">
            <img src={play} alt="play button"></img>
          </button>
          <button
            className="default-button"
            onClick={() => goToRulesPage(navigate)}
          >
            Zasady gry
          </button>
        </div>
      </header>
    </>
  );
};
