import { createSlice } from "@reduxjs/toolkit";
//put election on local storage

const initialState = {
  darkMode:
    (typeof window !== "undefined" && localStorage.getItem("darkMode")) ||
    "dark",
};
export const themeSlice = createSlice({
  name: "theme",
  initialState: initialState,
  reducers: {
    toggleTheme: (state) => {
      state.darkMode = state.darkMode === "dark" ? "light" : "dark";

      localStorage.setItem("darkMode", state.darkMode);
    },
  },
});

export const { toggleTheme } = themeSlice.actions;
export default themeSlice.reducer;
