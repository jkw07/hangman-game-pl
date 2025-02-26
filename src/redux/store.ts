import { configureStore } from "@reduxjs/toolkit";
import gameReducer from "./gameSlice";
import dataReducer from "./dataSlice";
import wordReducer from "./wordSlice";

export const store = configureStore({
  reducer: {
    game: gameReducer,
    data: dataReducer,
    word: wordReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;