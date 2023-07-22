import React from "react";
import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const multiplyByTwo = () => {
    setCount(count * 2);
  };

  return (
    <div className="py-32 flex flex-col justify-center items-center">
      <p className="text-4xl text-blue-700 mb-6">You clicked {count} times</p>
      <div className="flex flex-col space-y-10">
        <button
          className=" bg-blue-300 px-6 py-3 text-white rounded font-bold"
          onClick={() => setCount(count + 1)}
        >
          Add by +1
        </button>
        <button
          className=" bg-blue-300 px-6 py-3 text-white rounded font-bold"
          onClick={() => setCount(0)}
        >
          Back to 0
        </button>
        <button
          className=" bg-blue-300 px-6 py-3 text-white rounded font-bold"
          onClick={() => setCount(count * 2)}
        >
          Multiply by *2
        </button>
      </div>
    </div>
  );
};

export default Counter;
