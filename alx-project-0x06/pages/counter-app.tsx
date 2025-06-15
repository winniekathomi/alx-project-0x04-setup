import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "@/store/store";
import { increment, decrement, reset } from "@/store/counterSlice";

const CounterApp = () => {
  const count = useSelector((state: RootState) => state.counter.value); // 👈 this line
  const dispatch: AppDispatch = useDispatch();

  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      <button onClick={() => dispatch(reset())}>Reset</button>
    </div>
  );
};

export default CounterApp;
