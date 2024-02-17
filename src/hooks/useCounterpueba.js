import { useState } from "react";

export const useCounterpueba = (initialValue = 1) => {
  const [counter, setCounter] = useState(initialValue);

  const increment1 = () => {
    setCounter(counter + 1);
  };

  const decrement2 = () => {
    if (counter ===0)return
    setCounter(counter - 1);
  };

  const reset = () => {
   
    setCounter(0);
  };

  return {
    counter,
    increment1,
    decrement2,
    reset,
  };
};
