import { configureStore } from "@reduxjs/toolkit";
import historySlice from "./components/history/historySlice";
import scoreSlice from "./components/score/scoreSlice";

export const store = configureStore({
  reducer: {
    score: scoreSlice,
    history: historySlice,

  },
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;