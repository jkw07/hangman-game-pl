import {GameData} from './GameData'
import { useNavigate } from 'react-router-dom';
import { goToGameBoard } from '../utils/navigation';

type gameDataType = {
  category: string;
  words: string[];
}

export const PickCategoryButton = () => {
    const gameData: gameDataType[] = GameData;
    const navigate = useNavigate();
    const categories: string[] = gameData.map(item => item.category);

  return (
    <>
      {categories.map((category, index) => (
        <button className='default-button' key={index} value={category} onClick={() => goToGameBoard(navigate, category)}>
          {category}
        </button>
      ))}
    </>
  );
};