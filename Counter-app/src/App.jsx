import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  if (count < 0) {
    setCount(0);
  }
  const increment = () => {
    setCount((prevCount) => prevCount + 1);
    setCount((prevCount) => prevCount + 1);
    setCount((prevCount) => prevCount + 1);
  };
  const decrement = () => setCount((prevCount) => Math.max(0, prevCount - 1));
  return (
    <>
      <p>Count {count}</p>
      <button onClick={increment}>Count +</button>
      <button onClick={decrement}>Count -</button>
    </>
  );
}

export default App;
