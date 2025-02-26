import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { defaultData, GameDataType } from "../gameData/defaultData";

type DataType = {
    parsedData: GameDataType[];
    defaultData: GameDataType[];
}

const dataSlice = createSlice({
  name: "data",
  initialState: {
    parsedData: [] as GameDataType[],
    defaultData: defaultData,
  } as DataType,
  reducers: {
    addToParsedData: (state, action: PayloadAction<GameDataType>) => {
      state.parsedData.push(action.payload);
    },
    removeParsedData: (state) => {
      state.parsedData = [];
    },
  },
});

export const { addToParsedData, removeParsedData } = dataSlice.actions;

export default dataSlice.reducer;