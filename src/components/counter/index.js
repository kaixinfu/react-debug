import { useState, useEffect } from 'react';

const App = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("useEffect.count", count);
  }, [count]);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <span>Current Count: {count}</span>
      <button onClick={handleIncrement}>Increment</button>
    </div>
  );
};

export default App;
