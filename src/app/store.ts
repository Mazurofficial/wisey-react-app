import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import axios from 'axios';
import * as api from '../api'
import counterReducer from '../features/counter/counterSlice';
import { coursesReducer } from '../features/courses/coursesSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    courses: coursesReducer
  },
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware({
     thunk: {
        extraArgument: {
           client: axios,
           api,
        },
     },
     serializableCheck: false,
  }),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
