import "./styles.css";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <>
      <span className="title">Counter Application </span>
      <p className="count-title">The Count is {count}</p>
      <button onClick={increment} className="button">
        +
      </button>
      <button onClick={decrement} className="button">
        -
      </button>
    </>
  );
}

export default App;
