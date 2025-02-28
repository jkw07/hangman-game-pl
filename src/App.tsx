import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { ROUTES } from "./config/routes";
import { HomePage } from "./components/HomePage";
import { CategoryPage } from "./components/CategoryPage";
import { GameBoard } from "./components/GameBoard";
import { HowToPlay } from "./components/HowToPlay";

export const App = () => {
  return (
    <>
      <Provider store={store}>
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
      </Provider>
    </>
  );
};
