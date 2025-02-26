import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type WordStateType = {
  selectedCategory: string;
    categoryWordsArray: string[];
    selectedWord: string;   
    livesLeft: number;
    guessedLetters: string[];
    status: "none" | "won" | "lost";
}


const wordSlice = createSlice({
  name: "word",
  initialState: {
    selectedCategory: "",
    categoryWordsArray: [] as string[],
    selectedWord: "",
    livesLeft: 6,
    guessedLetters: [] as string[],
    status: "none",
  } as WordStateType,
  reducers: {
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
        if (state.selectedWord && !state.selectedWord.includes(action.payload)) {
          state.livesLeft -= 1;
        }
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
        state.status = "lost";
      } else if (guessedCorrectly) {
        state.status = "won";
      }
    },
    resetGame: (state) => {
      state.selectedCategory = "";
      state.categoryWordsArray = [];
      state.selectedWord = "";
      state.livesLeft = 6;
        state.guessedLetters = [] as string[];
        state.status = "none";
    },
  },
});

export const { pickCategory, pickRandomWord, guessLetter, checkStatus, resetGame, replaceWord, looseLife } = wordSlice.actions;

export default wordSlice.reducer;