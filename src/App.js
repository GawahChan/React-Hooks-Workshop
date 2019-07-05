import React, { useState } from 'react';
import './App.css';

function App() {
  const[count, setCount] = useState(0);
  const[name, setName] = useState("")

  return (
    <div className="App">
      <h1>Hello World</h1>

      <h3>Hi, my name is {name} and this is my counter: {count}</h3>

      <h6>
        Name: <input 
          className="nameInput"
          type="text" 
          onChange={(e) => setName(e.target.value)}
        />
      </h6>
      <button onClick={() => setCount(count + 1)}>Add by 1</button>
      <button onClick={() => setCount(count - 1)}>Takeaway by 1</button>
    </div>
  );
}

export default App;
