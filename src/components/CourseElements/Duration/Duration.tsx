import styles from './Duration.module.scss';

interface DurationProps {
   duration: number;
   lessons: number;
   full?: boolean;
}

export const Duration = ({ duration, lessons, full }: DurationProps) => {
   return (
      <p className={styles.duration}>
         In total: {Math.trunc(duration / 60)}m{' '}
         {duration - Math.trunc(duration / 60) * 60}s, {lessons}{' '}
         {full ? 'lessons' : 'Free lessons'}
      </p>
   );
};
