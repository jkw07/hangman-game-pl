import { createSlice } from "@reduxjs/toolkit";

type GameStateType = {
  status: "none" | "playing" | "paused" | "finished";
}

const gameSlice = createSlice({
  name: "game",
  initialState: {
    status: "playing",
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
},
});

export const { startGame, pauseGame, endGame, continueGame} = gameSlice.actions;
export default gameSlice.reducer;