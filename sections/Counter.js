import React from "react";
import { useState } from "react";

function multiplyByTen(number) {
  return number * 10;
}

function Counter() {
  // const [inputNumber, setInputNumber] = useState(20);
  const numberToMultiply = 2;
  const result = multiplyByTen(numberToMultiply /*inputNumber*/);

  return (
    <div className="flex flex-col justify-center items-center pb-32">
      {/* <label>
        Enter a number:{" "}
        <input
          type="number"
          placeholder="Enter a number"
          value={inputNumber}
          onChange={(e) => setInputNumber(Number(e.target.value))}
        />
      </label> */}
      <p className="text-4xl text-blue-700">Original Number:</p>
      <p className="my-6 text-2xl text-gray-700">
        {numberToMultiply /*inputNumber*/}
      </p>
      <p className="text-4xl text-blue-700">Result:</p>
      <p className="my-6 text-2xl text-gray-700">{result}</p>
    </div>
  );
}

export default Counter;
