import styles from './Status.module.scss';

interface StatusProps {
   status: string;
}

export const Status = ({ status }: StatusProps) => {
   return (
      <span className={styles.status}>
         {status.charAt(0).toUpperCase() + status.slice(1)}
      </span>
   );
};
