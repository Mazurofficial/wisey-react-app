import styles from './Duration.module.scss';

interface DurationProps {
   duration: number;
   lessons: number;
   full?: boolean;
}

export const Duration = ({ duration, lessons, full }: DurationProps) => {
   return full ? (
      <p className={styles.duration}>
         In total: {Math.trunc(duration / 60)}h{' '}
         {duration - Math.trunc(duration / 60) * 60}m, {lessons} lessons
      </p>
   ) : (
      <p className={styles.duration}>
         In total: {Math.trunc(duration / 60)}h{' '}
         {duration - Math.trunc(duration / 60) * 60}m, {lessons} Free lessons
      </p>
   );
};
