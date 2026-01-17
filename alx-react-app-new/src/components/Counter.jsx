import { useState } from 'react';

function Counter() {
  // State to store the count value
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Current Count: {count}</p>

      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>

      <button onClick={() => setCount(count - 1)}>
        Decrement
      </button>

      <button onClick={() => setCount(0)}>
        Reset
      </button>
    </div>
  );
}

export default Counter;
