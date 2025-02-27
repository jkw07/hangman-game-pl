import { useNavigate } from "react-router-dom";
import { goToCategoriesPage, goToRulesPage } from "../config/navigation";
import { loadParsedData } from "../utils/localStorage";
import { GameDataType } from "../gameData/defaultData";

import logo from "../assets/images/logo.svg";
import play from "../assets/images/icon-play.svg";
import { useDispatch } from "react-redux";
import { startGame } from "../redux/gameSlice";
import { addToParsedData, removeParsedData } from "../redux/dataSlice";

export const HomePage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handlePlay = () => {
    dispatch(startGame());
    dispatch(removeParsedData());
    const loadedData: GameDataType[] = loadParsedData();
    dispatch(addToParsedData(loadedData));
    goToCategoriesPage(navigate);
  };

  const handleShowRules = () => {
    goToRulesPage(navigate);
  };

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
