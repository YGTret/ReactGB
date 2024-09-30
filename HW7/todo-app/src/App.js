// src/App.js
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTasks } from './store/tasksSlice';

function App() {
  const dispatch = useDispatch();
  const { tasksList, loading } = useSelector((state) => state.tasks);

  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  if (loading) {
    return <div>Loading tasks...</div>;
  }

  return (
    <div>
      <h1>Task List</h1>
      <ul>
        {tasksList.map((task) => (
          <li key={task.id}>
            {task.title} - {task.completed ? 'Completed' : 'Incomplete'}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
