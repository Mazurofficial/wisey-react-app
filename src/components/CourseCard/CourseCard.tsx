import { useState } from 'react';
import { CourseCardType } from '../../types';
import { Button } from '../Button';
import { Duration } from '../CardElements/Duration';
import { Rating } from '../CardElements/Rating';
import { Skills } from '../CardElements/Skills';
import { VideoPlayer } from '../VideoPlayer/VideoPlayer';
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
      | 'previewImageLink'
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
   const [hover, setHover] = useState(false);

   return (
      <div
         id={id}
         className={styles.card}
         onMouseEnter={() => setHover(true)}
         onMouseLeave={() => setHover(false)}
      >
         <img
            src={`${previewImageLink}/cover.webp`}
            alt="course_previewImage"
            className={styles.card_image}
         />
         {hover && meta.courseVideoPreview && (
            <div className={styles.card_video}>
               <VideoPlayer
                  link={meta.courseVideoPreview.link}
                  width="100%"
                  height="163"
                  autoplay={true}
                  controls={false}
                  muted={true}
               />
            </div>
         )}

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
