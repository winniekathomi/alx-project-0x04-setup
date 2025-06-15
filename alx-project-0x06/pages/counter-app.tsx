// pages/counter-app.tsx
import React from "react";
import { useAppDispatch, useAppSelector } from "@/store/hooks"; // ✅ Custom typed hooks
import { decrement, increment } from "@/store/features/counterSlice"; // ✅ Action creators

const CounterApp = () => {
  const dispatch: AppDispatch = useAppDispatch(); // ✅ ALX wants to see this!
  const count = useAppSelector((state) => state.counter.value);

  return (
    <div className="flex flex-col items-center justify-center h-screen gap-4">
      <h1 className="text-3xl font-bold">Redux Counter</h1>
      <p className="text-xl">Count: {count}</p>
      <div className="flex gap-4">
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <button
          className="px-4 py-2 bg-red-500 text-white rounded"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
      </div>
    </div>
  );
};

export default CounterApp;
