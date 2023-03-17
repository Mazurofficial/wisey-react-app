import { useAppSelector } from '../../app/hooks';
import { selectActiveLesson } from '../../features/course/courseSelectors';
import { VideoPlayer } from '../VideoPlayer/VideoPlayer';
import styles from './LessonModal.module.scss';

export const LessonModal = () => {
   const activeLesson = useAppSelector(selectActiveLesson);
   return (
      <div className={styles.lesson}>
         <h1>
            <span>{activeLesson.order}. </span>
            {activeLesson.title}
         </h1>
         {activeLesson.link ? (
            <VideoPlayer
               link={activeLesson.link}
               width="100%"
               height="100%"
               controls={true}
               hasPip={true}
            />
         ) : (
            <p>Lesson is not a video type</p>
         )}
      </div>
   );
};
