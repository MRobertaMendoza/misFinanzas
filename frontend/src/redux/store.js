import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./features/themeSlice";
import activeSectionReducer from "./features/activeSectionSlice";
import userInfo from "./features/useInfoSlice";
import creditCardSlice from "./features/creditCardSlice";

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    activeSection: activeSectionReducer,
    cards: creditCardSlice,
    userInfo,
  },
});
