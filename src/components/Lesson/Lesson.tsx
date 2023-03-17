import { useAppDispatch } from '../../app/hooks';
import { setActiveLesson } from '../../features/course/courseSlice';
import { openModal } from '../../features/modalWindow/modalWindow-slice';
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

   const handleLesson = () => {
      if (videoLink) {
         dispatch(setActiveLesson({ order, title, videoLink }));
      } else {
         dispatch(setActiveLesson({ order, title }));
      }
      dispatch(openModal());
   };
   return (
      <div className={styles.lesson}>
         <img
            src={`${imageLink}/lesson-${order}.webp`}
            alt="lessonPreviewImage"
         />
         <h3>
            <span>{order}. </span>
            {title}
         </h3>
         <p className={styles.duration}>
            Duration: {Math.trunc(duration / 60)}m{' '}
            {duration - Math.trunc(duration / 60) * 60}s
         </p>
         {status === 'locked' ? (
            <Button isLink={false} disabled={true}>
               Lesson is locked
            </Button>
         ) : (
            <Button isLink={false} onClick={handleLesson}>
               Open Lesson
            </Button>
         )}
      </div>
   );
};
