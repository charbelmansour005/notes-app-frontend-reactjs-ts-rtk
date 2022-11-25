import { createSlice } from "@reduxjs/toolkit";

export const confettiSlice = createSlice({
  name: "confetti",
  initialState: {
    isActive: false,
  },
  reducers: {
    toggleConfetti: (state) => {
      state.isActive = !state.isActive;
    },
  },
});

export const { toggleConfetti } = confettiSlice.actions;

export default confettiSlice.reducer;
