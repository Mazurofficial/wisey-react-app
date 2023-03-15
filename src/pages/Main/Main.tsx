import React from 'react';
import { CoursesList } from '../../components/CoursesList';
import styles from './Main.module.scss';

export const Main = () => {
   return (
      <div className={styles.wrapper}>
         <CoursesList />
      </div>
   );
};
