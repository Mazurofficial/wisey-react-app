import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { CourseType, ExtraType, Status } from '../../types';

export const loadCourseById = createAsyncThunk<
  {
    data: CourseType;
  },
  CourseType['id'],
  {
    extra: ExtraType;
    rejectValue: string;
  }
>('@@course/load-course', async (id, { extra: { client, api }, rejectWithValue }) => {
  try {
    return client.get(api.getCourseById(id), { headers: { Authorization: 'Bearer ' + api.TOKEN } });
  } catch (error) {
    if (error instanceof Error) return rejectWithValue(error.message);
    return rejectWithValue('Unknown error');
  }
});

interface CourseSlice {
  status: Status;
  error: string | null;
  course: CourseType | null;
  activeLesson: {
    link: string | undefined;
    title: string;
    order: number;
  };
}

const initialState: CourseSlice = {
  status: 'idle',
  error: null,
  course: null,
  activeLesson: {
    order: 0,
    link: undefined,
    title: '',
  },
};

const courseSlice = createSlice({
  name: '@@course',
  initialState,
  reducers: {
    clearDetails: () => initialState,
    setActiveLesson: (state, action) => {
      state.activeLesson.link = action.payload.videoLink;
      state.activeLesson.order = action.payload.order;
      state.activeLesson.title = action.payload.title;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loadCourseById.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(loadCourseById.rejected, (state, action) => {
        state.status = 'rejected';
        state.error = action.payload || 'Cannot load data';
      })
      .addCase(loadCourseById.fulfilled, (state, action) => {
        state.status = 'received';
        state.course = { ...action.payload.data };
      });
  },
});

export const courseReducer = courseSlice.reducer;
export const { clearDetails, setActiveLesson } = courseSlice.actions;
