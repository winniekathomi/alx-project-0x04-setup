import { configureStore, createSlice } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";

// Slice for counter state
const counterSlice = createSlice({
  name: "counter",
  initialState: {
    value: 0,
  },
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      if (state.value > 0) {
        state.value -= 1;
      }
    },
  },
});

// Create the Redux store
const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
  },
});

// Export actions
export const { increment, decrement } = counterSlice.actions;

// Export types
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// Custom hook to use dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>();

export default store;
