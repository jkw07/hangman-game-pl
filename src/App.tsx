import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HomePage } from "./components/HomePage";
import { CategoryPage } from "./components/CategoryPage";
import {GameBoard} from './components/GameBoard'
import { HowToPlay } from "./components/HowToPlay";

export const App: React.FC = () => {
  return (
    <div className="App">
      <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/CategoryPage" element={<CategoryPage />} />
        <Route path="/GameBoard" element={<GameBoard />} />
        <Route path="/HowToPlay" element={<HowToPlay />} />
      </Routes>
    </Router>
    </div>
  );
};