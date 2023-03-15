import { RootState } from './../../app/store';
export const selectCurrentPage = (state: RootState) => state.pagination.currentPage
export const selectCoursesPerPage = (state: RootState) => state.pagination.coursesPerPage
