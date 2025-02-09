import { useNavigate } from "react-router-dom";

import { useLocation } from "react-router-dom";
import { GameData } from "./GameData"; 
import { LetterButtons } from "./LetterButtons";

export const GameBoard = () => {
   const navigate = useNavigate();
    const goToHomePage = () => {
    navigate('/');
};
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const category = params.get("category");

  const gameData = GameData();
  const selectedCategory = gameData.find(item => item.category === category);

  const words = selectedCategory ? selectedCategory.words : [];

  return (
    <div>
      <h1>Gra: Wisielec</h1>
      <div className="back-to-home-button">
        <i onClick={goToHomePage} className="fa-solid fa-arrow-rotate-left fa-xl" style={{ color: 'whitesmoke'}}></i>
        </div>
      <p>Kategoria: <strong>{category}</strong></p>
      <div className="letters">
        <LetterButtons />
      </div>
    </div>
  );
};