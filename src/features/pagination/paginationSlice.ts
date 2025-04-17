import { createSlice } from '@reduxjs/toolkit';

interface PaginationState {
  currentPage: number;
  coursesPerPage: number;
}

const initialState: PaginationState = {
  currentPage: 1,
  coursesPerPage: 10,
};

const paginationSlice = createSlice({
  name: '@@pagination',
  initialState,
  reducers: {
    nextPage: (state) => {
      state.currentPage++;
    },
    prevPage: (state) => {
      state.currentPage--;
    },
    setPage: (state, action) => {
      state.currentPage = action.payload;
    },
  },
});

export const { nextPage, prevPage, setPage } = paginationSlice.actions;
export const paginationReducer = paginationSlice.reducer;
