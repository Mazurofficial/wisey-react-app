import React from 'react';
import { CoursesList } from '../../components/CoursesList';
import { Pagination } from '../../features/pagination/Pagination';
import { useCurrentCourses } from '../../features/pagination/useCurrentCourses';
import styles from './Main.module.scss';

export const Main = () => {
   const currentCourses = useCurrentCourses();

   return (
      <div className={styles.container}>
         <CoursesList courses={currentCourses} />
         <Pagination />
      </div>
   );
};
