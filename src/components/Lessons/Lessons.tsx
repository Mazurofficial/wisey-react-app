import { useAppSelector } from '../../app/hooks';
import { selectActiveCourse } from '../../features/course/courseSelectors';
import { Lesson } from '../Lesson/Lesson';
import styles from './Lessons.module.scss';

export const Lessons = () => {
  const course = useAppSelector(selectActiveCourse);

  return (
    <div className={styles.container}>
      <h2>Lessons:</h2>
      <div className={styles.lessons}>
        {course &&
          course.lessons.map((lesson, index) => {
            return (
              <Lesson
                key={lesson.id}
                title={lesson.title}
                duration={lesson.duration}
                imageLink={lesson.previewImageLink}
                status={lesson.status}
                videoLink={lesson.link}
                order={lesson.order}
                type={lesson.type}
              />
            );
          })}
      </div>
    </div>
  );
};
