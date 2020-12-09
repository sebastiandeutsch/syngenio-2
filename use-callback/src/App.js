import { useState, useCallback } from 'react';
import UseMemoExample from './UseMemoExample';

function App() {
  const [count, setCount] = useState(0);

  const increment = useCallback(() => {
    setCount(c => c + 1);
  }, [setCount]);

  return (
    <div>
      <UseMemoExample increment={increment} />
      <div>count: {count}</div>
    </div>
  );
}

export default App;
