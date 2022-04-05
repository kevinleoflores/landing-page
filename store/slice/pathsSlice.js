import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { menu } from "../../utils/menu";

const initialState = {
  paths: [],
  solutionsSubMenu: null,
};

const pathsSlice = createSlice({
  name: "articles",
  initialState,
  reducers: {
    clearState(state, action) {
      state.paths = "";
    },
    getPath(state, action) {
      const menuArray = menu.map((row) => {
        if (row.title === "Solutions") {
          state.solutionsSubMenu = row.sub_menu;
        }
      });
    },
    getPathBranch(state, action) {
      const menuArray = menu.map((row) => {
        if (row.title === "Solutions") {
          state.solutionsSubMenu = row.sub_menu;
        }
      });
    },
  },
});
export default pathsSlice;

export const pathsActions = pathsSlice.actions;
