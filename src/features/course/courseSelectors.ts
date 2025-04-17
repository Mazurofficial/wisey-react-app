import { RootState } from '../../app/store';

export const selectActiveCourse = (state: RootState) => state.course.course;
export const selectCourseStatus = (state: RootState) => state.course.status;
export const selectActiveLesson = (state: RootState) => state.course.activeLesson;
