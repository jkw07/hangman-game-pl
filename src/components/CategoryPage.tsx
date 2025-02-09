import { useNavigate } from 'react-router-dom';
import { PickCategoryButton } from './PickCategoryButton';

export const CategoryPage = () => {
    const navigate = useNavigate();
    const goToHomePage = () => {
    navigate('/');
};
    return (
        <div className="category-page">
        <div className="back-to-home-button">
        <i onClick={goToHomePage} className="fa-solid fa-arrow-rotate-left fa-xl" style={{ color: 'whitesmoke'}}></i>
        </div>
        <div className="categories">
            <PickCategoryButton/>
        </div>
        </div>
    )
}