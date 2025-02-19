import { NavigateFunction } from "react-router-dom";
import { ROUTES } from "../config/config";

export const goToCategoriesPage = (navigate: NavigateFunction) => {
  navigate(ROUTES.CATEGORY);
};

export const goToHomePage = (navigate: NavigateFunction) => {
  navigate(ROUTES.HOME);
};

export const goToGameBoard = (navigate: NavigateFunction) => {
  navigate(ROUTES.GAME);
};

export const goToRulesPage = (navigate: NavigateFunction) => {
  navigate(ROUTES.HOW_TO_PLAY);
};
