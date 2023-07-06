import {
  decrement,
  increment,
  incrementByAmount,
} from "./redux/features/counter/counterSlice";
import { useAppDispatch, useAppSelector } from "./redux/hook";

function App() {
  const { count } = useAppSelector((state) => state.counter);
  const dispatch = useAppDispatch();

  return (
    <>
      <h1 className="text-3xl font-bold underline">Tech Net</h1>

      <>
        <div className="col-xl-1">
          <div className="flex items-center justify-center my-10 gap-5">
            <button
              className="px-3 py-1 bg-rose-200 hover:bg-rose-800 hover:text-white border text-xl font-medium rounded-md"
              type="button"
              onClick={() => dispatch(decrement())}
            >
              -
            </button>
            <div>{count}</div>
            <button
              className="px-3 py-1 bg-green-200 hover:bg-green-800 hover:text-white border text-xl font-medium rounded-md"
              type="button"
              onClick={() => dispatch(increment())}
            >
              +
            </button>
            <button
              className="px-3 py-1 bg-green-200 hover:bg-green-800 hover:text-white border text-xl font-medium rounded-md"
              type="button"
              onClick={() => dispatch(incrementByAmount(10))}
            >
              Increment by 10
            </button>
          </div>
        </div>
      </>
    </>
  );
}

export default App;
