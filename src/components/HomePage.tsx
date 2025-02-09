import { useState } from "react";
import { useNavigate } from 'react-router-dom';

import {HowToPlay} from './HowToPlay'

import logo from '../assets/logo.png'

export const HomePage = () => {
    const [gameRules, setGameRules] = useState<boolean>(false);
    const navigate = useNavigate();
    const goToNextPage = () => {
    navigate('/CategoryPage');
    };
    const handleToggleGameRules = () => {
        setGameRules(prevState => !prevState)
    }
    return (
        <>
            <header className="header">
                <img src={logo} className="logo" alt="logo"></img>
                <i onClick={goToNextPage}
                className="fa-solid fa-circle-play fa-rotate-by fa-2xl play-button"
                style={{ color: '#FF66B2', transform: 'rotate(-10deg)' }}
                />
                <button className="game-rules-button" onClick={handleToggleGameRules}>{gameRules ? "Ukryj" : 'Pokaż'} zasady gry</button>
            </header>
            {gameRules && <HowToPlay />}
        </>
    );
}