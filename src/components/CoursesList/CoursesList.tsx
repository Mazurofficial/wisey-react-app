import { useAppSelector } from '../../app/hooks';
import { selectCoursesStatus } from '../../features/courses/coursesSelectors';
import { CourseCardType } from '../../types';
import { CourseCard } from '../CourseCard';
import styles from './CoursesList.module.scss';

interface CourseListProps {
   courses: CourseCardType[];
}

export const CoursesList = ({ courses }: CourseListProps) => {
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
