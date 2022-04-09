import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { menu, solutions_sub, branch } from "../../utils/menu";

const initialState = {
  paths: [],
  sub_data: [],
  branch_data: [],
  solutionsSubMenu: null,
  branchMenu: branch,
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
          console.log(row);
          state.solutionsSubMenu = row.sub_menu;
        }
      });
    },
    getSubData(state, action) {
      const subMenu = solutions_sub.map((row) => {
        if (row.slug === action.payload) {
          state.sub_data = row;
        }
      });
    },
    getBranchData(state, action) {
      const subMenu = branch.map((row) => {
        if (row.slug === action.payload) {
          state.branch_data = row;
        }
      });
    },
  },
});
export default pathsSlice;

export const pathsActions = pathsSlice.actions;
