
import { createSlice } from '@reduxjs/toolkit';

export const colorFilterSlice = createSlice({
  name: 'colorFilter',
  initialState: 'all', // Default filter is 'all'
  reducers: {
    setColorFilter: (state, action) => {
      return action.payload;
    },
  },
});

export const { setColorFilter } = colorFilterSlice.actions;

export default colorFilterSlice.reducer;
