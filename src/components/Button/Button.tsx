import styles from './Button.module.scss';

interface ButtonProps {
   onClick?: () => {};
   children: React.ReactNode;
}

export const Button = ({ children, onClick }: ButtonProps) => {
   return (
      <button className={styles.btn} onClick={onClick}>
         {children}
      </button>
   );
};
