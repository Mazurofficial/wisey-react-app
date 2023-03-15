import { selectCurrentPage, selectCoursesPerPage } from './paginationSelectors';
import { selectAllCourses } from './../courses/coursesSelectors';
import { useAppSelector } from './../../app/hooks';

export const useCurrentCourses = () => {
    const courses = useAppSelector(selectAllCourses);
    const currentPage = useAppSelector(selectCurrentPage);
    const coursesPerPage = useAppSelector(selectCoursesPerPage);

    const lastCourseIndex = currentPage * coursesPerPage;
    const firstCourseIndex = lastCourseIndex - coursesPerPage;
    const currentCourses = courses.slice(firstCourseIndex, lastCourseIndex);
    return currentCourses
}