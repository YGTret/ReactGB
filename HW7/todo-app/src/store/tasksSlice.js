// src/store/tasksSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { tasks } from '../data/tasks';

// Имитация асинхронной загрузки данных
export const fetchTasks = createAsyncThunk('tasks/fetchTasks', async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(tasks);
    }, 1000); // Имитация задержки в 1 секунду
  });
});

const tasksSlice = createSlice({
  name: 'tasks',
  initialState: {
    tasksList: [],
    loading: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTasks.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchTasks.fulfilled, (state, action) => {
        state.tasksList = action.payload;
        state.loading = false;
      })
      .addCase(fetchTasks.rejected, (state) => {
        state.loading = false;
      });
  },
});

export default tasksSlice.reducer;
