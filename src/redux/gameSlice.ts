import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type GameStateType = {
  defaultData: any;
  parsedData: any;
  status: "playing" | "paused" | "finished";
  selectedCategory: string;
    categoryWordsArray: string[];
    selectedWord: string;   
    livesLeft: number;
    guessedLetters: string[];
    result: "none" | "won" | "lost";
}

const gameSlice = createSlice({
  name: "game",
  initialState: {
    status: "playing",
    selectedCategory: "",
    categoryWordsArray: [] as string[],
    selectedWord: "",
    livesLeft: 6,
    guessedLetters: [] as string[],
    result: "none",
  } as GameStateType,
  reducers: {
    startGame: (state) => {
      state.status = "playing";
    },
    pauseGame: (state) => {
      state.status = "paused";
    },
    endGame: (state) => {
      state.status = "finished";
    },
    continueGame: (state) => {
      state.status = "playing";
    },
    pickCategory: (state, action: PayloadAction<{ category: string; words: string[] }>) => {
      state.selectedCategory = action.payload.category;
      state.categoryWordsArray = action.payload.words;
    },
    pickRandomWord: (state) => {
      if (state.categoryWordsArray.length > 0) {
        state.selectedWord =
          state.categoryWordsArray[Math.floor(Math.random() * state.categoryWordsArray.length)];
      }
    },
     replaceWord: (state) => {
      if (state.categoryWordsArray.length > 0) {
        state.selectedWord =
          state.categoryWordsArray[Math.floor(Math.random() * state.categoryWordsArray.length)];
      }
      state.livesLeft = 6;
      state.guessedLetters = [];
    },
    guessLetter: (state, action: PayloadAction<string>) => {
      if (!state.guessedLetters.includes(action.payload)) {
        state.guessedLetters.push(action.payload);
      }
    },
    looseLife: (state) => {
      state.livesLeft -= 1;
    },
    checkStatus: (state) => {
      if (!state.selectedWord) return;
      const wordLetters = new Set(state.selectedWord.split(""));
      const guessedCorrectly = [...wordLetters].every((letter) =>
        state.guessedLetters.includes(letter),
      );

      if (state.livesLeft <= 0) {
        state.result = "lost";
        state.status = "finished";
      } else if (guessedCorrectly) {
        state.result = "won";
        state.status = "finished";
      }
    },
    resetGame: (state) => {
      state.selectedCategory = "";
      state.categoryWordsArray = [];
      state.selectedWord = "";
      state.livesLeft = 6;
      state.guessedLetters = [] as string[];
      state.result = "none";
      state.status = "playing";
    },
},
});

export const { startGame, pauseGame, endGame, continueGame, pickCategory, pickRandomWord, guessLetter, checkStatus, resetGame, replaceWord, looseLife} = gameSlice.actions;
export default gameSlice.reducer;