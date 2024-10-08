import { createSlice } from "@reduxjs/toolkit";

interface ScoreState {
  score: number;
}

const initialState: ScoreState = {
  score: 0
}

const scoreSlice = createSlice({
  name: 'score',
  initialState,
  reducers: {
    increment: (state) => {
      state.score++;
    },
    decrement: (state) => {
      state.score--;
    },
  },
  extraReducers: (builder) => {
    builder.addCase('history/addHistory', (state) => {
      state.score = 0;
    });
  }
});

export const { increment, decrement } = scoreSlice.actions;

export default scoreSlice.reducer;
