import { configureStore } from "@reduxjs/toolkit";
import noteReducer from "../features/note/noteSlice";
import theme from "../features/theme/themeSlice";
import confetti from "../features/confetti/confettiSlice";

const store = configureStore({
  reducer: {
    note: noteReducer,
    theme,
    confetti,
  },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
