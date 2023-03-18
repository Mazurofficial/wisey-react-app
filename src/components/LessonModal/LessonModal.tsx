import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { selectActiveLesson } from '../../features/course/courseSelectors';
import { selectPipIsActive } from '../../features/pip/pipSelectors';
import { closePip } from '../../features/pip/pipSlice';
import { VideoPlayer } from '../VideoPlayer/VideoPlayer';
import styles from './LessonModal.module.scss';

export const LessonModal = () => {
   const activeLesson = useAppSelector(selectActiveLesson);
   const pipIsActive = useAppSelector(selectPipIsActive);
   const dispatch = useAppDispatch();
   return (
      <div className={styles.lesson}>
         {activeLesson.link ? (
            <div
               onClick={() => {
                  pipIsActive && dispatch(closePip());
               }}
            >
               <VideoPlayer
                  link={activeLesson.link}
                  width="100%"
                  height="300"
                  controls={true}
                  useCustomControls={true}
                  onPlay={() => dispatch(closePip())}
               />
            </div>
         ) : (
            <p>Lesson is not a video type</p>
         )}
         <div className={styles.lesson_info}>
            <h1>
               <span>{activeLesson.order}. </span>
               {activeLesson.title}
            </h1>
         </div>
      </div>
   );
};
