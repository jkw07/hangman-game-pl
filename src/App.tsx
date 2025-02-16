import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ROUTES } from "./config/config";
import { HomePage } from "./components/HomePage";
import { CategoryPage } from "./components/CategoryPage";
import {GameBoard} from './components/GameBoard'
import { HowToPlay } from "./components/HowToPlay";

export const App = () => {
  return (
    <div className="App">
      <Router>
      <Routes>
        <Route path={ROUTES.HOME} element={<HomePage />} />
        <Route path={ROUTES.CATEGORY} element={<CategoryPage />} />
        <Route path={ROUTES.GAME} element={<GameBoard />} />
        <Route path={ROUTES.HOW_TO_PLAY} element={<HowToPlay />} />
      </Routes>
    </Router>
    </div>
  );
};