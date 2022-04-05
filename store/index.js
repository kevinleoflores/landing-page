import { configureStore } from "@reduxjs/toolkit";
import articleSlice from "./slice/articleSlice";
import pathsSlice from "./slice/pathsSlice";
import solutionsSlice from "./slice/pathsSlice";

const store = configureStore({
  reducer: {
    article: articleSlice.reducer,
    paths: pathsSlice.reducer,
  },
});

export default store;
