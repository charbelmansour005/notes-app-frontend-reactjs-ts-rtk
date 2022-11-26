import { createSlice } from "@reduxjs/toolkit";

type InitialConfettiState = {
  isActive: boolean;
};

const initialConfettiState: InitialConfettiState = {
  isActive: false,
};

export const confettiSlice = createSlice({
  name: "confetti",
  initialState: initialConfettiState,
  reducers: {
    toggleConfetti: (state) => {
      state.isActive = !state.isActive;
    },
  },
});

export const { toggleConfetti } = confettiSlice.actions;

export default confettiSlice.reducer;
