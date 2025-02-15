import {GameData} from './GameData'
import { useNavigate } from 'react-router-dom';

type gameDataType = {
  category: string;
  words: string[];
}

export const PickCategoryButton = () => {
    const gameData: gameDataType[] = GameData;
    const navigate = useNavigate();
    const categories: string[] = gameData.map(item => item.category);
    const handleCategoryClick = (category: string) => {
    navigate("/GameBoard", { state: { category } });
  };

  return (
    <>
      {categories.map((category, index) => (
        <button className='blue-button' key={index} value={category} onClick={() => handleCategoryClick(category)}>
          {category}
        </button>
      ))}
    </>
  );
};