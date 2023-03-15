import { RootState } from "../../app/store";

export const selectAllCourses = (state: RootState) => state.courses.list
export const selectCoursesStatus = (state:RootState) => state.courses.status