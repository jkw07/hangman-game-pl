import { gameDataType, GameData } from "./GameDefaultData";

export enum GameStatus {
  Playing = "playing",
  Won = "won",
  Lost = "lost",
}

const maxLives = 6;

export type GameState = {
  isPaused: boolean;
  hasEnded: boolean;
  livesLeft: number;
  guessedLetters: string[];
  gameStatus: GameStatus;
  selectedWord: string;
  selectedCategory: string;
  gameData: gameDataType[];
};

export const initialState: GameState = {
  isPaused: false,
  hasEnded: false,
  livesLeft: maxLives,
  guessedLetters: [],
  gameStatus: GameStatus.Playing,
  selectedWord: "",
  selectedCategory: "",
  gameData: GameData,
};

export type GameAction =
  | { type: GameActionType.PAUSE }
  | { type: GameActionType.CONTINUE }
  | { type: GameActionType.END }
  | { type: GameActionType.LOSE_LIFE }
  | { type: GameActionType.UPDATE_GAME_DATA }
  | { type: GameActionType.RESET_GAME; payload?: string }
  | { type: GameActionType.PICK_CATEGORY; payload: string }
  | { type: GameActionType.GUESS_LETTER; payload: string }
  | { type: GameActionType.CHECK_STATUS };

export enum GameActionType {
  PAUSE = "PAUSE",
  CONTINUE = "CONTINUE",
  END = "END",
  LOSE_LIFE = "LOSE_LIFE",
  UPDATE_GAME_DATA = "UPDATE_GAME_DATA",
  RESET_GAME = "RESET_GAME",
  PICK_CATEGORY = "PICK_CATEGORY",
  GUESS_LETTER = "GUESS_LETTER",
  CHECK_STATUS = "CHECK_STATUS",
}

export const gameReducer = (
  state: GameState,
  action: GameAction
): GameState => {
  switch (action.type) {
    case GameActionType.PAUSE:
      return { ...state, isPaused: true };
    case GameActionType.CONTINUE:
      return { ...state, isPaused: false };
    case GameActionType.END:
      localStorage.removeItem("gameState");
      return { ...state, hasEnded: true };
    case GameActionType.LOSE_LIFE:
      return {
        ...state,
        livesLeft: state.livesLeft - 1,
        gameStatus:
          state.livesLeft - 1 === 0 ? GameStatus.Lost : state.gameStatus,
      };
    case GameActionType.UPDATE_GAME_DATA:
      const addedData = localStorage.getItem("addedCategories");
      const parsedData: gameDataType[] = addedData ? JSON.parse(addedData) : [];
      if (!Array.isArray(parsedData)) {
        console.error("Błąd: parsedData nie jest tablicą!", parsedData);
        return state;
      }
      return {
        ...initialState,
        gameData: [...initialState.gameData, ...parsedData],
      };
    case GameActionType.RESET_GAME:
      const newUpdatedState = {
        ...initialState,
        selectedCategory: action.payload || initialState.selectedCategory,
        selectedWord: action.payload
          ? getRandomWord(action.payload, state.gameData)
          : initialState.selectedWord,
      };
      localStorage.setItem("gameState", JSON.stringify(newUpdatedState));
      return newUpdatedState;
    case GameActionType.PICK_CATEGORY:
      const updatedState = {
        ...initialState,
        gameData: state.gameData,
        selectedCategory: action.payload,
        selectedWord: getRandomWord(action.payload, state.gameData),
      };
      localStorage.setItem("gameState", JSON.stringify(updatedState));
      return updatedState;
    case GameActionType.GUESS_LETTER:
      return {
        ...state,
        guessedLetters: [...state.guessedLetters, action.payload],
      };
    case GameActionType.CHECK_STATUS:
      if (state.selectedCategory) {
        const wordLetters = Array.from(
          new Set(
            state.selectedWord.split("").filter((letter) => letter !== " ")
          )
        );
        const isWon = wordLetters.every((letter) =>
          state.guessedLetters.includes(letter)
        );
        return {
          ...state,
          hasEnded: state.livesLeft <= 0 || isWon,
          gameStatus: isWon
            ? GameStatus.Won
            : state.livesLeft <= 0
            ? GameStatus.Lost
            : GameStatus.Playing,
        };
      }
      return {
        ...state,
      };
    default:
      return state;
  }
};

const getRandomWord = (category: string, gameData: gameDataType[]): string => {
  const wordsArray: string[] =
    gameData.find((item: gameDataType) => item.category === category)?.words ||
    [];

  if (wordsArray.length > 0) {
    return wordsArray[Math.floor(Math.random() * wordsArray.length)];
  } else {
    return "";
  }
};
