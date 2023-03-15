import styles from './Pagination.module.scss';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { nextPage, prevPage } from './paginationSlice';
import { ReactComponent as LeftArrow } from '../../img/pagination/left-arrow.svg';
import { ReactComponent as RightArrow } from '../../img/pagination/right-arrow.svg';
import { selectCoursesPerPage, selectCurrentPage } from './paginationSelectors';
import { selectAllCourses } from '../courses/coursesSelectors';

export const Pagination = () => {
   const dispatch = useAppDispatch();
   const currentPage = useAppSelector(selectCurrentPage);
   const coursesPerPage = useAppSelector(selectCoursesPerPage);
   const { length } = useAppSelector(selectAllCourses);

   const maxPagesCount = Math.ceil(length / coursesPerPage);

   return (
      <div className={styles.pagination}>
         {currentPage <= 1 ? null : (
            <button onClick={() => dispatch(prevPage())}>
               <LeftArrow />
            </button>
         )}
         {currentPage >= maxPagesCount ? null : (
            <button onClick={() => dispatch(nextPage())}>
               <RightArrow />
            </button>
         )}
      </div>
   );
};
