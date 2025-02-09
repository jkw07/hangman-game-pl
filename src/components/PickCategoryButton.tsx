import {GameData} from './GameData'
import { useNavigate } from 'react-router-dom';

export const PickCategoryButton = () => {
    const gameData = GameData();
    const navigate = useNavigate();
    const uniqueCategories = [...new Set(gameData.map(item => item.category))];
    const handleCategoryClick = (category: string) => {
    navigate(`/GameBoard?category=${encodeURIComponent(category)}`);
  };

  return (
    <>
      {uniqueCategories.map((category, index) => (
        <button key={index} value={category} onClick={() => handleCategoryClick(category)}>
          {category}
        </button>
      ))}
    </>
  );
};