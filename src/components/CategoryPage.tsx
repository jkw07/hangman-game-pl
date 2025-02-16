import { useNavigate } from 'react-router-dom';
import { PickCategoryButton } from './PickCategoryButton';

import returnIcon from '../assets/images/icon-back.svg';

export const CategoryPage = () => {
    const navigate = useNavigate();
    const goToHomePage = () => {
    navigate('/');
    };
    return (
        <div className="page-container">
            <div className="header">
                <button onClick={goToHomePage} className="return-button"><img src={returnIcon} alt="return button"></img></button>
            <h2>Kategorie</h2>
        </div>
        <div className="categories">
            <PickCategoryButton/>
        </div>
        </div>
    )
}