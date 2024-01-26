import { useState } from "react";

export const useCounter = (initialValune = 10) => {
  const [counter, setCounter] = useState(initialValune);

  const increment = () => {
    if (counter >= 20) {
      console.log("ya pasaste por los 20");
      return;
    }
    setCounter(counter + 1);
  };

  const decrement = () => {
    if (counter === 0) {
      console.log("first");
      return;
    }
    setCounter(counter - 1);
  };
  const reset = () => {
    setCounter(0);
  };

  return {
    counter,
    increment,
    decrement,
    reset,
  };
};
