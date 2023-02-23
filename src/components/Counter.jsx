import { useState } from "react";

export const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount((prev) => prev + 1);
  };

  const decrement = () => {
    setCount((prev) => prev - 1);
  };

  const btnClass =
    "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded";

  return (
    <div className="inline-block border text-center p-4 rounded-md">
      <h3>I am an island</h3>
      <div>Counter: {count}</div>
      <div className="flex gap-3 mt-4">
        <button className={btnClass} onClick={increment}>
          Increment
        </button>
        <button className={btnClass} onClick={decrement}>
          Decrement
        </button>
      </div>
    </div>
  );
};
