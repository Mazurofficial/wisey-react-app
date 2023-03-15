import styles from './Duration.module.scss';

interface DurationProps {
   duration: number;
   lessons: number;
}

export const Duration = ({ duration, lessons }: DurationProps) => {
   return (
      <p className={styles.duration}>
         In total: {Math.trunc(duration / 60)}h{' '}
         {duration - Math.trunc(duration / 60) * 60}m, {lessons} Free lessons
      </p>
   );
};
