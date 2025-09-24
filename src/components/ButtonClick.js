"use client";
import { useState } from "react";

function ButtonClick() {
  const [message, setMessage] = useState("no message");

  function handleClick() {
    alert(`Button already clicked from parameter ${message}`);
  }

  return (
    <div>
      <button onClick={() => handleClick()}>Click me</button>
    </div>
  );
}

export default ButtonClick;
