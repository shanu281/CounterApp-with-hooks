import "./style.css";
import { useState } from "react";

export default function App() {
  let [value, setValue] = useState(0);

  return (
    <div>
      <center>
        <h1>Counter App</h1>
        <div className="counter-value">
          <h1>{value}</h1>
        </div>
        <div>
          <button onClick={() => setValue(value+1)}>Increment</button>
          <button onClick={() => setValue(value-1)}>Decrement</button>
          <button onClick={() => setValue(0)}>Reset</button>
        </div>
      </center>
    </div>
  );
}
