import styles from './Lesson.module.scss';

interface LessonProps {
   title: string;
   duration: number;
   status: string;
   imageLink: string;
   videoLink: string;
   order: number;
}

export const Lesson = ({
   title,
   duration,
   status,
   imageLink,
   videoLink,
   order,
}: LessonProps) => {
   return (
      <div className={styles.lesson}>
         <img src={`${imageLink}/${order}.webp`} alt="lessonPreviewImage" />
         <h3>{title}</h3>
         <p>{duration}</p>
      </div>
   );
};
