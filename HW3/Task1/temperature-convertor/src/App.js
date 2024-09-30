import React from 'react';
import './App.css';
import TemperatureConverter from './tempertureconvert'; // Импортируем наш компонент

function App() {
  return (
    <div className="App">
      <h1>Перевод градусов Цельсия в Фаренгейта</h1>
      <TemperatureConverter />
    </div>
  );
}

export default App;
