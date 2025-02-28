import { configureStore } from "@reduxjs/toolkit";
import gameReducer from "./gameSlice";
import dataReducer from "./dataSlice";
import categoryFormReducer from "./categoryFormSlice"

export const store = configureStore({
  reducer: {
    game: gameReducer,
    data: dataReducer,
    categoryForm: categoryFormReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;