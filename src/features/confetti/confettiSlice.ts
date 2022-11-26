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
    toggleConfettiOn: (state) => {
      state.isActive = true;
    },
    toggleConfettiOff: (state) => {
      state.isActive = false;
    },
  },
});

export const { toggleConfettiOn, toggleConfettiOff } = confettiSlice.actions;

export default confettiSlice.reducer;
