import { HashRouter, BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { ROUTES } from "./config/routes";
import { HomePage } from "./components/HomePage";
import { CategoryPage } from "./components/CategoryPage";
import { GameBoard } from "./components/GameBoard";
import { HowToPlay } from "./components/HowToPlay";

export const App = () => {
  const Router =
    process.env.NODE_ENV === "production" ? HashRouter : BrowserRouter;
  return (
    <>
      <Provider store={store}>
        <div className="App">
          <Router basename={process.env.PUBLIC_URL}>
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
