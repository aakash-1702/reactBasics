import { useState } from "react";

import "./App.css";
// what is batching ?
// batching is that react does not update as soon as we click the button , rather it collects all of them and the same ones are grouped together as one so writing them more than one won't have an effect
function App() {
  const [counter, setCounter] = useState(10);
  // const addValue = () => {
  //   // this is the batched version , below would be the non batched version
  //   setCounter(counter + 1);
  // };
  // const removeValue = () => {
  //   setCounter(counter - 1);
  // };

  const addValue = () => {// this is the example of non batched version where we do operations through callbacks so they are not basically the same operations or maybe the correct thing is to say they are not being applied over same val of counter so they can not be batched 
    setCounter((counter) => counter + 1);
    setCounter((counter) => counter + 1);
    setCounter((counter) => counter + 1);
    setCounter((counter) => counter + 1);
  };

  const removeValue = () => {
    setCounter((counter) => (counter -4));

  }

  return (
    <>
      <h1>Counter made using React</h1>
      <h1>{counter}</h1>

      <button onClick={addValue}>Add Value</button>
      {"     "}
      <button onClick={removeValue}>Decrease Value</button>

      <h3> footer </h3>
    </>
  );
}

export default App;
