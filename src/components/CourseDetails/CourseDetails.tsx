import { Duration } from '../CardElements/Duration';
import { Rating } from '../CardElements/Rating';
import { Skills } from '../CardElements/Skills';
import { VideoPlayer } from '../VideoPlayer/VideoPlayer';
import styles from './CourseDetails.module.scss';

interface CourseDetailsProps {
   description: string;
   rating: number;
   duration: number;
   lessonsCount: number;
   skills: string[];
   videoLink?: string;
}

export const CourseDetails = ({
   description,
   rating,
   duration,
   lessonsCount,
   skills,
   videoLink,
}: CourseDetailsProps) => {
   return (
      <div className={styles.course_details}>
         <div className={styles.course_details_firstColumn}>
            <p className={styles.course_details_description}>{description}</p>
            <Rating rating={rating} />
            <Duration duration={duration} lessons={lessonsCount} full={true} />
            <Skills skills={skills} />
         </div>
         <div className={styles.course_details_secondColumn}>
            {videoLink && (
               <VideoPlayer link={videoLink} width="100%" height="290" />
            )}
         </div>
      </div>
   );
};
