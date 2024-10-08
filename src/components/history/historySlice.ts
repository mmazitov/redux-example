import { createSlice } from "@reduxjs/toolkit";

interface HistoryState {
  history: number[];
}

const initialState: HistoryState = {
  history: JSON.parse(localStorage.getItem('history') || '[]')
}

const historySlice = createSlice({
  name: 'history',
  initialState,
  reducers: {
    addHistory: (state, action) => {
      state.history.push(action.payload);
      localStorage.setItem('history', JSON.stringify(state.history));
    },
    resetHistory: (state) => {
      state.history = [];
      localStorage.removeItem('history');
    }
  }
});


export const { addHistory, resetHistory } = historySlice.actions;

export default historySlice.reducer;