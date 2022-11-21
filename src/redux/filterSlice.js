import { createSlice } from '@reduxjs/toolkit';

const filterInitialState = '';

const filterSlice = createSlice({
  name: 'filter',
  initialState: filterInitialState,
  reducers: {
    inputFilter(_, action) {
      return action.payload;
    },
  },
});

export const { inputFilter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;

//Selector
export const getFilter = state => state.filter;
