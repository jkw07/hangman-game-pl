import { NavigateFunction } from "react-router-dom";
import { ROUTES } from "../config/config";

export const goToCategoriesPage = (navigate: NavigateFunction) => {
    navigate(ROUTES.CATEGORY);
};

export const goToHomePage = (navigate: NavigateFunction) => {
    navigate(ROUTES.HOME);
};

export const goToGameBoard = (navigate: NavigateFunction, category: string) => {
    navigate(ROUTES.GAME, { state: { category } });
};

export const goToRulesPage = (navigate: NavigateFunction) => {
    navigate(ROUTES.HOW_TO_PLAY);
};
