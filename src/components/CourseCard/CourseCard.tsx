import { CourseCardType } from '../../types';
import { Button } from '../Button';
import { Duration } from '../CardElements/Duration';
import { Rating } from '../CardElements/Rating';
import { Skills } from '../CardElements/Skills';
import styles from './CourseCard.module.scss';

interface CourseCardI
   extends Pick<
      CourseCardType,
      | 'id'
      | 'title'
      | 'rating'
      | 'lessonsCount'
      | 'meta'
      | 'previewImageLink'
      | 'duration'
      | 'status'
   > {}

export const CourseCard = ({
   id,
   lessonsCount,
   rating,
   title,
   meta,
   previewImageLink,
   duration,
   status,
}: CourseCardI) => {
   return (
      <div id={id} className={styles.card}>
         <img
            src={`${previewImageLink}/cover.webp`}
            alt="course_previewImage"
            className={styles.card_image}
         />
         <div className={styles.card_details}>
            <h3>{title}</h3>
            <Rating rating={rating} />
            <Duration duration={duration} lessons={lessonsCount} />
            <Button isLink={true} link={`course/${id}`}>
               Start course
            </Button>
            <Skills skills={meta.skills} />
         </div>
      </div>
   );
};
