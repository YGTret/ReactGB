import React, { useState } from "react";
import { TextField, Box } from "@mui/material";

const TemperatureConverter = () => {
  const [celsius, setCelsius] = useState("");
  const [fahrenheit, setFahrenheit] = useState("");

  // Функция для конвертации Цельсия в Фаренгейты
  const handleCelsiusChange = (e) => {
    const celsiusValue = e.target.value;
    setCelsius(celsiusValue);

    // Проверка на ввод числа
    if (!isNaN(celsiusValue) && celsiusValue !== "") {
      const fahrenheitValue = (celsiusValue * 9) / 5 + 32;
      setFahrenheit(fahrenheitValue.toFixed(2)); // Округление до 2 знаков после запятой
    } else {
      setFahrenheit("");
    }
  };

  // Функция для конвертации Фаренгейтов в Цельсия
  const handleFahrenheitChange = (e) => {
    const fahrenheitValue = e.target.value;
    setFahrenheit(fahrenheitValue);

    // Проверка на ввод числа
    if (!isNaN(fahrenheitValue) && fahrenheitValue !== "") {
      const celsiusValue = ((fahrenheitValue - 32) * 5) / 9;
      setCelsius(celsiusValue.toFixed(2)); // Округление до 2 знаков после запятой
    } else {
      setCelsius("");
    }
  };

  return (
    <Box display="flex" flexDirection="column" gap={2} maxWidth={300} margin="auto">
      <TextField
        label="Цельсия"
        variant="outlined"
        value={celsius}
        onChange={handleCelsiusChange}
        type="number"
        fullWidth
      />
      <TextField
        label="Фаренгейта"
        variant="outlined"
        value={fahrenheit}
        onChange={handleFahrenheitChange}
        type="number"
        fullWidth
      />
    </Box>
  );
};

export default TemperatureConverter;
