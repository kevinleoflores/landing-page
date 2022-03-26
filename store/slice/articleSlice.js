import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getArticles = createAsyncThunk("getArticles", async () => {
  try {
    const response = await fetch("/mock_data/case.json");
    const data = await response.json();
    return data;
  } catch (err) {
    console.log(err);
  }
});

export const getArticlePost = createAsyncThunk(
  "getArticlesPost",
  async (articleId) => {
    try {
      const response = await fetch("/mock_data/case.json");
      const data = await response.json();
      const newMap = data.filter((row) => {
        if (row.path === articleId) {
          return row;
        }
      });
      return newMap[0];
    } catch (err) {
      console.log(err);
    }
  }
);

const initialState = {
  data: [],
  loading: true,
  image: "",
  title: "",
  description: "",
  date_created: "",
  path: "",
};

const articleSlice = createSlice({
  name: "articles",
  initialState,
  reducers: {
    clearState(state, action) {
      state.data = [];
      state.loading = false;
      state.image = "";
      state.title = "";
      state.description = "";
      state.date_created = "";
      state.path = "";
    },
  },
  extraReducers: {
    [getArticles.pending]: (state, action) => {
      state.loading = true;
    },
    [getArticles.fulfilled]: (state, action) => {
      state.loading = false;
      state.data = action.payload;
    },
    [getArticles.rejected]: (state, action) => {
      state.loading = false;
    },
    [getArticlePost.pending]: (state, action) => {
      state.loading = true;
    },
    [getArticlePost.fulfilled]: (state, action) => {
      const { image, title, description, date_created, path } = action.payload;
      state.loading = false;
      state.image = image === undefined ? "" : image;
      state.title = title;
      state.description = description;
      state.date_created = date_created;
      state.path = path;
    },
    [getArticlePost.rejected]: (state, action) => {
      state.loading = false;
    },
  },
});
export default articleSlice;

export const articleActions = articleSlice.actions;
