import { createSlice } from "@reduxjs/toolkit";

type InitalThemeState = {
  darkTheme: boolean;
};

const initialState: InitalThemeState = {
  darkTheme: false,
};

export const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.darkTheme = !state.darkTheme;
    },
  },
});

export const { toggleTheme } = themeSlice.actions;

export default themeSlice.reducer;
