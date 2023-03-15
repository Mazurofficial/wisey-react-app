import React, { useEffect } from 'react';
import { useAppDispatch } from '../../app/hooks';
import { CoursesList } from '../../components/CoursesList';
import { loadCourseById } from '../../features/course/courseSlice';
import { Pagination } from '../../features/pagination/Pagination';
import { useCurrentCourses } from '../../features/pagination/useCurrentCourses';
import styles from './Main.module.scss';

export const Main = () => {
   const currentCourses = useCurrentCourses();
   const dispatch = useAppDispatch();

   useEffect(() => {
      dispatch(loadCourseById('f58ff842-2d2b-4f24-9a4b-c6f6e1fd866e'));
   }, [dispatch]);

   return (
      <div className={styles.container}>
         <CoursesList courses={currentCourses} />
         <Pagination />
      </div>
   );
};
