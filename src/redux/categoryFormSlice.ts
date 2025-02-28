import { createSlice} from "@reduxjs/toolkit";

type categoryFormType = {
    isCategoryFormOpen: boolean;
}

const categoryFormSlice = createSlice({
  name: "data",
  initialState: {
    isCategoryFormOpen: false,
  } as categoryFormType,
  reducers: {
    openCategoryForm: (state) => {
      state.isCategoryFormOpen = true;
    },
    closeCategoryForm: (state) => {
      state.isCategoryFormOpen = false;
    },
  },
});

export const { openCategoryForm, closeCategoryForm} = categoryFormSlice.actions;

export default categoryFormSlice.reducer;