import { createSlice } from '@reduxjs/toolkit';

const addTaskSlice = createSlice({
  name: 'addTask',
  initialState: [],
  reducers: {
    Add: (state, action) => {
      // Add a new task with text and color to the state.
      const { text, color } = action.payload;
      state.push({ text, color, completed: false });
    },
    Remove: (state, action) => {
      return state.filter((task, idx) => idx !== action.payload);
    },
    RemoveAll: (state) => {
      // Remove all tasks, equivalent to setting the state to an empty array.
      state.splice(0, state.length);
    },
  },
});

export const { Add, Remove, RemoveAll, MarkAllCompleted } = addTaskSlice.actions;

export default addTaskSlice.reducer;
