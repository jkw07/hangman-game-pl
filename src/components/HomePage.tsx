import { useNavigate } from 'react-router-dom';

import logo from '../assets/images/logo.svg'
import play from '../assets/images/icon-play.svg'

export const HomePage = () => {
    const navigate = useNavigate();
    const goToCategoriesPage = () => {
    navigate('/CategoryPage');
    };
    const goToRulesPage = () => {
    navigate('/HowToPlay');
    };
    return (
        <>
            <header className="home-page">
                <div className="logo">
                    <img src={logo} alt="Hangman Logo"></img>
                </div>
                <div className="container">
                    <button onClick={goToCategoriesPage} className="play-button"><img src={play} alt="play button"></img></button>
                    <button className="blue-button" onClick={goToRulesPage}>Zasady gry</button>
                </div>
            </header>
        </>
    );
}