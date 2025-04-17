import { createSlice } from '@reduxjs/toolkit';

interface pipState {
  activeLink: string;
  isActive: boolean;
}

const initialState: pipState = {
  activeLink: '',
  isActive: false,
};

export const pipSlice = createSlice({
  name: '@@pip',
  initialState,
  reducers: {
    setPip: (state, action) => {
      state.activeLink = action.payload;
      state.isActive = true;
    },
    closePip: (state) => {
      state.isActive = false;
    },
  },
});

export const { setPip, closePip } = pipSlice.actions;
export const pipReducer = pipSlice.reducer;
