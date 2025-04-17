import { useAppSelector } from '../../app/hooks';
import { selectCoursesStatus } from '../../features/courses/coursesSelectors';
import { CourseCardType } from '../../types';
import { CourseCard } from '../CourseCard';
import { Preloader } from '../Preloader';
import styles from './CoursesList.module.scss';

interface CourseListProps {
  courses: CourseCardType[];
}

export const CoursesList = ({ courses }: CourseListProps) => {
  const status = useAppSelector(selectCoursesStatus);

  if (status === 'loading') {
    return <Preloader />;
  }

  return courses ? (
    <div className={styles.list}>
      {courses.map((course) => {
        return <CourseCard key={course.id} {...course} />;
      })}
    </div>
  ) : (
    <h1>{status.charAt(0).toUpperCase() + status.slice(1)}</h1>
  );
};
