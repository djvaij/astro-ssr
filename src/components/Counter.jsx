import { useState } from "react";

export const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount((prev) => prev + 1);
  };

  const decrement = () => {
    setCount((prev) => prev - 1);
  };

  const btnClasses =
    "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded";

  return (
    <>
      <div>Counter: {count}</div>
      <button className={btnClasses} onClick={increment}>
        Increment
      </button>
      <button className={btnClasses} onClick={decrement}>
        Decrement
      </button>
    </>
  );
};
