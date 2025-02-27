import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { continueGame, pickCategory, pickRandomWord, replaceWord, resetGame, startGame } from "../redux/gameSlice";
import { goToCategoriesPage, goToGameBoard, goToHomePage, goToRulesPage } from "../utils/navigation";
import { addToParsedData, removeParsedData } from "../redux/dataSlice";
import { GameDataType } from "../gameData/defaultData";
import { loadLocalStorage } from "../utils/localStorage";

export function useGameActions() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleContinue = () => {
        dispatch(continueGame());
    };

    const handleShuffleWord = () => {
        dispatch(replaceWord());
        dispatch(continueGame());
    };

    const handlePickNewCategory = () => {
        goToCategoriesPage(navigate);
        dispatch(resetGame());
    };

    const handleQuitGame = () => {
        goToHomePage(navigate);
        dispatch(resetGame());
    };

    const handlePickCategory = (category: string, words: string[]) => {
        dispatch(pickCategory({ category, words }));
        dispatch(pickRandomWord());
        goToGameBoard(navigate);
      };

      const handlePlay = () => {
        dispatch(startGame());
        dispatch(removeParsedData());
        const loadedData: GameDataType[] = loadLocalStorage();
        dispatch(addToParsedData(loadedData));
        goToCategoriesPage(navigate);
    };

    const handleShowRules = () => {
        goToRulesPage(navigate);
    };

     const handleGoToHomePage = () => {
        goToHomePage(navigate);
    };

    return { handleContinue, handleShuffleWord, handlePickNewCategory, handleQuitGame, handlePickCategory, handlePlay, handleShowRules, handleGoToHomePage};
}
