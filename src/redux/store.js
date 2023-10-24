
import { configureStore } from '@reduxjs/toolkit';
import AddTaskReducer from './AddTask';
import colorFilterReducer from './colorFilter';

const store = configureStore({
  reducer: {
    addTask: AddTaskReducer,
    colorFilter: colorFilterReducer, 
  },
});

export default store;
