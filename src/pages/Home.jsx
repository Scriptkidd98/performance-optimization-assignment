import { useState } from 'react';


function Home() {
  const [count, setCount] = useState(0);
  const [number, setNumber] = useState(''); //this is a part that was added

  const handleClick = () => {
    setCount(count + 1);
  };

  const handleInputChange = (e) => {
    setNumber(e.target.value); 
  };

  const handleReset = () => {
    setCount(0);
    setNumber('');
  };

  const getItem = () => {
    return [number, number * 2, number * 3];
  }

  return (
    <div className="home-page">
      <h1>Home Page - Performance Hell</h1>      
      <div className="counter">
        <h2>Counter: {count}</h2>
        <button onClick={handleClick}>Increment</button>
        <button onClick={handleReset}>Reset</button>
      </div>

      <div className="input-section">
        <input 
          type="number" 
          value={number} 
          onChange={handleInputChange}
          placeholder="Type something (watch it lag!)"
        />
        <p>You typed: {number}</p>
      </div>

      

        <ChildComponent getItem={getItem} />
    </div>
  );
}

function ChildComponent({ getItem }) {
  console.log('ChildComponent rendered!');
  
  const data = getItem();
  const expensiveSum = data.reduce((sum, num) => sum + num, 0);
  
  return (
    <div className="child-component">
        <h3>Child Component</h3>
        {data.map((num, index) => (
          <p key={index}>Number: {num}</p>
        ))}
        <p>Expensive Sum: {expensiveSum}</p>
    </div>
  );
}

export default Home;
