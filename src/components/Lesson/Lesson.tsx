import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { setActiveLesson } from '../../features/course/courseSlice';
import { openModal } from '../../features/modalWindow/modalWindow-slice';
import { selectPipLink } from '../../features/pip/pipSelectors';
import { closePip } from '../../features/pip/pipSlice';
import { Button } from '../Button';
import styles from './Lesson.module.scss';

interface LessonProps {
   title: string;
   duration: number;
   status: string;
   imageLink: string;
   videoLink?: string;
   order: number;
   type: string;
}

export const Lesson = ({
   title,
   duration,
   status,
   imageLink,
   videoLink,
   order,
   type,
}: LessonProps) => {
   const dispatch = useAppDispatch();
   const pipLink = useAppSelector(selectPipLink);

   const handleLesson = () => {
      if (videoLink) {
         dispatch(setActiveLesson({ order, title, videoLink }));
      } else if (videoLink && videoLink === pipLink) {
         dispatch(setActiveLesson({ order, title, videoLink }));
         dispatch(closePip());
      } else {
         dispatch(setActiveLesson({ order, title }));
      }
      dispatch(openModal());
   };

   return (
      <div className={styles.lesson}>
         <img
            className={styles.lesson_image}
            src={`${imageLink}/lesson-${order}.webp`}
            alt="lessonPreviewImage"
         />
         <div className={styles.lesson_details}>
            <h3 className={styles.lesson_title}>
               <span>{order}. </span>
               {title}
            </h3>
            <p className={styles.lesson_duration}>
               Duration: {Math.trunc(duration / 60)}m{' '}
               {duration - Math.trunc(duration / 60) * 60}s
            </p>
            <Button
               isLink={false}
               disabled={status === 'locked' ? true : false}
               onClick={handleLesson}
            >
               {status === 'locked' ? 'Lesson is locked' : 'Open Lesson'}
            </Button>
         </div>
      </div>
   );
};
