import { createSlice } from '@reduxjs/toolkit';

const searchSlice = createSlice({
  name: 'search',
  initialState: {
    searchTerm: '',
  },
  reducers: {
    searchTermProduct: (state, action) => {
      const { value } = action.payload;
      if (value !== '') {
        state.searchTerm = value;
      }
    },
  },
});

const { actions, reducer } = searchSlice;
export const { searchTermProduct } = actions;
export default reducer;
