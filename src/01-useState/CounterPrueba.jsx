import { useState } from "react";
import { useCounterpueba } from "../hooks/useCounterpueba";

export const CounterPrueba = () => {

    const {counter,increment1,decrement2,reset} =useCounterpueba()
  
  return (
    <>
      <h1>counter: {counter}</h1>
      <hr />
      <button onClick={increment1}>+</button>
      <button onClick={reset}>reset</button>
      <button onClick={decrement2}>-</button>
    </>
  );
};
