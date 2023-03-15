import { useAppSelector } from '../../app/hooks';
import {
   selectAllCourses,
   selectCoursesStatus,
} from '../../features/courses/coursesSelectors';
import { CourseCard } from '../CourseCard';
import styles from './CoursesList.module.scss';

export const CoursesList = () => {
   const courses = useAppSelector(selectAllCourses);
   const status = useAppSelector(selectCoursesStatus);

   if (status === 'loading') {
      return <h1>Loading...</h1>;
   }

   return (
      <div className={styles.list}>
         {courses.map((course) => {
            return <CourseCard key={course.id} {...course} />;
         })}
      </div>
   );
};
