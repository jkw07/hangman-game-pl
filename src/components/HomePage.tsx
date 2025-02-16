import { useNavigate } from 'react-router-dom';
import { goToCategoriesPage, goToRulesPage } from '../utils/navigation';

import logo from '../assets/images/logo.svg'
import play from '../assets/images/icon-play.svg'

export const HomePage = () => {
    const navigate = useNavigate();
    return (
        <>
            <header className="home-page">
                <div className="logo">
                    <img src={logo} alt="Hangman Logo"></img>
                </div>
                <div className="container">
                    <button onClick={()=>goToCategoriesPage(navigate)} className="play-button"><img src={play} alt="play button"></img></button>
                    <button className="default-button" onClick={()=>goToRulesPage(navigate)}>Zasady gry</button>
                </div>
            </header>
        </>
    );
}