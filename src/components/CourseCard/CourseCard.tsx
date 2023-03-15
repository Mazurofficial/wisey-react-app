import { CourseType } from '../../types';
import styles from './CourseCard.module.scss';

interface CourseCardI
   extends Pick<
      CourseType,
      'id' | 'title' | 'rating' | 'lessonsCount' | 'meta' | 'previewImageLink'
   > {}

export const CourseCard = ({
   id,
   lessonsCount,
   rating,
   title,
   meta,
   previewImageLink,
}: CourseCardI) => {
   return (
      <div id={id} className={styles.card}>
         <img src={`${previewImageLink}/cover.webp`} alt="course_img" />
         <h1>{title}</h1>
         <h3>{rating}</h3>
         <p>{lessonsCount}</p>
         <ul>
            {meta.skills &&
               meta.skills.map((skill, index) => {
                  return <li key={index}>{skill}</li>;
               })}
         </ul>
      </div>
   );
};
