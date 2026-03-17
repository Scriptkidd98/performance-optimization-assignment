import { useState } from 'react';
import { increment } from '../hooks/add';

const Counter = () => {
  const[count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(increment(count));
  }

  return (
    <div>
        <p>{count}</p>

        <button onClick={() => incrementCount()} data-testid="increment-button">Increment</button>
        <button onClick={() => setCount(count - 1)} data-testid="decrement-button">Decrement</button>
    </div>
  )
}

export default Counter