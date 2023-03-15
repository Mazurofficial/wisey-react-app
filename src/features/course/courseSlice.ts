import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { CourseCardType, CourseType, ExtraType, Status } from '../../types';


export const loadCourseById = createAsyncThunk<
{
    data:CourseCardType
},
CourseCardType['id'], 
{
   extra: ExtraType,
   rejectValue: string
}
>(
   '@@course/load-course',
   async (id, { extra: { client, api }, rejectWithValue }) => {
    try {
        return client.get(api.getCourseById(id),{headers:{Authorization : 'Bearer ' + api.TOKEN}});
    } catch (error) {
        if (error instanceof Error)
            return rejectWithValue(error.message);
        return rejectWithValue('Unknown error')
    }
   }
);

interface CourseSlice {
    status: Status,
    error: string | null,
    course: CourseType | {}
}


const initialState : CourseSlice = {
   status: 'idle',
   error: null,
   course: {},
};

const courseSlice = createSlice({
   name: '@@course',
   initialState,
   reducers: {},
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
            console.log(action.payload.data)
            state.course = {...action.payload.data};
         });
   },
});

export const courseReducer = courseSlice.reducer;
