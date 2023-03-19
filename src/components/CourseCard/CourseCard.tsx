import { useState } from 'react';
import { CourseCardType } from '../../types';
import { Button } from '../Button';
import { Duration } from '../CourseElements/Duration';
import { Poster } from '../CourseElements/Poster';
import { Rating } from '../CourseElements/Rating';
import { Skills } from '../CourseElements/Skills';
import { Status } from '../CourseElements/Status';
import { Tag } from '../CourseElements/Tag';
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
      | 'tags'
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
   tags,
}: CourseCardI) => {
   const [hover, setHover] = useState(false);

   return (
      <div
         id={id}
         className={styles.card}
         onMouseEnter={() => setHover(true)}
         onMouseLeave={() => setHover(false)}
      >
         <Tag tag={tags[0]} />
         <Status status={status} />
         <Poster
            imgLink={previewImageLink}
            videoLink={meta.courseVideoPreview?.link}
            hover={hover}
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
