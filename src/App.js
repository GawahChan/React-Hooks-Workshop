import React, { useState } from 'react';
import './App.css';

function App() {
  const[count, setCount] = useState(0);

  return (
    <div className="App">
      <h1>Hello World</h1>

      <h3>This is my counter: {count}</h3>

      <button onClick={() => setCount(count + 1) }>Add by 1</button>
      <button onClick={() => setCount(count - 1) }>Takeaway by 1</button>
    </div>
  );
}

export default App;
