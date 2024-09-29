// src/App.js
import React from 'react';
import './App.css';
import Message from './Message';  // Импортируем компонент Message

function App() {
  return (
    <div className="App">
      <h1>React Message Component</h1>
      <Message text="Hello, this is a message!" />
      <Message text="This is another message with React!" />
    </div>
  );
}

export default App;
