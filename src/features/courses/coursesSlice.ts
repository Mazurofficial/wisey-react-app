import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { CourseCardType, ExtraType, Status } from '../../types';

export const loadCourses = createAsyncThunk<
  {
    data: {
      courses: CourseCardType[];
    };
  },
  undefined,
  {
    extra: ExtraType;
    rejectValue: string;
  }
>('@@courses/load-courses', async (_, { extra: { client, api }, rejectWithValue }) => {
  try {
    return client.get(api.ALL_COURSES, { headers: { Authorization: 'Bearer ' + api.TOKEN } });
  } catch (error) {
    if (error instanceof Error) return rejectWithValue(error.message);
    return rejectWithValue('Unknown error');
  }
});

interface CoursesSlice {
  status: Status;
  error: string | null;
  list: CourseCardType[];
}

const initialState: CoursesSlice = {
  status: 'idle',
  error: null,
  list: [],
};

const coursesSlice = createSlice({
  name: '@@courses',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loadCourses.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(loadCourses.rejected, (state, action) => {
        state.status = 'rejected';
        state.error = action.payload || 'Cannot load data';
      })
      .addCase(loadCourses.fulfilled, (state, action) => {
        state.status = 'received';
        state.list = action.payload.data.courses;
      });
  },
});

export const coursesReducer = coursesSlice.reducer;
