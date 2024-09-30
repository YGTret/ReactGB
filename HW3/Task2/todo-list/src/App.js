import React from 'react';
import './App.css';
import Todolist from './Todolist'; // Импортируем наш компонент

function App() {
  return (
    <div className="App">
      <h1>Todo List</h1>
      <Todolist />
    </div>
  );
}

export default App;
