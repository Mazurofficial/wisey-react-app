import styles from './Pagination.module.scss';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { nextPage, prevPage, setPage } from './paginationSlice';
import { ReactComponent as LeftArrow } from '../../img/pagination/left-arrow.svg';
import { ReactComponent as RightArrow } from '../../img/pagination/right-arrow.svg';
import { selectCoursesPerPage, selectCurrentPage } from './paginationSelectors';
import { selectAllCourses } from '../courses/coursesSelectors';
import { useEffect } from 'react';

export const Pagination = () => {
   const dispatch = useAppDispatch();
   const currentPage = useAppSelector(selectCurrentPage);
   const coursesPerPage = useAppSelector(selectCoursesPerPage);
   const { length } = useAppSelector(selectAllCourses);

   const maxPagesCount = Math.ceil(length / coursesPerPage);
   const pagesBtns = Array.from(Array(maxPagesCount), (_, index) => index + 1);

   useEffect(() => {
      window.scrollTo({
         top: 0,
         behavior: 'smooth',
      });
   }, [currentPage]);

   return (
      <div className={styles.pagination}>
         {currentPage <= 1 ? null : (
            <button
               className={styles.pagination_arrowBtn}
               onClick={() => {
                  dispatch(prevPage());
               }}
            >
               <LeftArrow />
            </button>
         )}
         {pagesBtns.map((page, index) => {
            return page !== currentPage ? (
               <button
                  className={styles.pagination_pageBtn}
                  key={index}
                  onClick={() => {
                     dispatch(setPage(page));
                  }}
               >
                  {page}
               </button>
            ) : (
               <button
                  className={styles.pagination_pageBtn}
                  key={index}
                  disabled
               >
                  {page}
               </button>
            );
         })}
         {currentPage >= maxPagesCount ? null : (
            <button
               className={styles.pagination_arrowBtn}
               onClick={() => {
                  dispatch(nextPage());
               }}
            >
               <RightArrow />
            </button>
         )}
      </div>
   );
};
