import React, { useState } from 'react';
import { TextField, Button, List, ListItem, IconButton, Card, CardContent, Typography } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

const TodoList = () => {
  const [task, setTask] = useState(''); // для ввода новой задачи
  const [tasks, setTasks] = useState([]); // для хранения списка задач

  // Обработчик добавления задачи
  const addTask = () => {
    if (task.trim()) {
      setTasks([...tasks, task]);
      setTask('');
    }
  };

  // Обработчик удаления задачи
  const deleteTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  return (
    <div style={{ maxWidth: '400px', margin: '0 auto', padding: '20px' }}>
      <h2>Todo List</h2>
      <TextField
        label="Новая задача"
        variant="outlined"
        fullWidth
        value={task}
        onChange={(e) => setTask(e.target.value)}
        onKeyPress={(e) => e.key === 'Enter' && addTask()} // Добавление задачи по нажатию Enter
      />
      <Button
        variant="contained"
        color="primary"
        onClick={addTask}
        style={{ marginTop: '10px' }}
        fullWidth
      >
        Добавить задачу
      </Button>
      <List style={{ marginTop: '20px' }}>
        {tasks.map((task, index) => (
          <ListItem key={index} style={{ padding: 0 }}>
            <Card style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <CardContent>
                <Typography>{task}</Typography>
              </CardContent>
              <IconButton onClick={() => deleteTask(index)} edge="end" aria-label="delete">
                <DeleteIcon />
              </IconButton>
            </Card>
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default TodoList;
