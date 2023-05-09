import React, { useState } from "react";
export function Counter() {
  const [count, setCount] = useState(2023);
  function plusClick() {
    setCount(count + 1);
  }
  function minusClick() {
    setCount(count - 1);
  }
  return (
    <div>
      <button onClick={minusClick} className="button-counter">
        decrease
      </button>
      <span> {count} </span>
      <button onClick={plusClick} className="button-counter">
        increase
      </button>
    </div>
  );
}
