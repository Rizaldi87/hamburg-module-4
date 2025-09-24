"use client";
import { useState } from "react";
import { ButtonIncrement } from "./ButtonIncrement";

export const Counter = () => {
  // Buat State
  const [count, setCount] = useState(0);
  console.log("state count", count);

  const [number, setNumber] = useState(999);
  console.log("state number", number);
  // variable
  const varCount = 0;
  console.log("var", varCount);

  // function incrementCounter
  const incrementCounter = () => setCount(count + 1);

  return (
    <>
      <p>You already Clicked {count} times</p>
      <p>Variable Clicked {varCount}</p>

      <ButtonIncrement name="revou" incrementCounter={incrementCounter} />

      <div>
        <button onClick={() => varCount + 1}>Increment Variable</button>
      </div>
    </>
  );
};
