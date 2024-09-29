import React from 'react';
import './App.css';
import CommentsList from './CommentsList'; // Импортируем наш компонент

function App() {
  return (
    <div className="App">
      <h1>Компоненты в React</h1>
      <CommentsList />
    </div>
  );
}

export default App;
