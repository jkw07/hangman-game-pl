import { useNavigate } from 'react-router-dom';
import { PickCategoryButton } from './PickCategoryButton';
import { goToHomePage } from '../utils/navigation';

import returnIcon from '../assets/images/icon-back.svg';

export const CategoryPage = () => {
    const navigate = useNavigate();
    return (
        <div className="page-container">
            <div className="header">
                <button onClick={()=>goToHomePage(navigate)} className="return-button"><img src={returnIcon} alt="return button"></img></button>
            <h2>Kategorie</h2>
        </div>
        <div className="categories">
            <PickCategoryButton/>
        </div>
        </div>
    )
}