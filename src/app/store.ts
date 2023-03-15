import { paginationReducer } from './../features/pagination/paginationSlice';
import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import axios from 'axios';
import * as api from '../api/api'
import counterReducer from '../features/counter/counterSlice';
import { coursesReducer } from '../features/courses/coursesSlice';
import { courseReducer } from '../features/course/courseSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    courses: coursesReducer,
    pagination: paginationReducer,
    course: courseReducer
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
