import { Link } from 'react-router-dom';
import styles from './Button.module.scss';

interface ButtonProps {
   onClick?: () => {};
   children: React.ReactNode;
   isLink: boolean;
   link?: string;
}

export const Button = ({ children, onClick, isLink, link }: ButtonProps) => {
   return isLink ? (
      <Link className={styles.btn} onClick={onClick} to={`/${link}`}>
         {children}
      </Link>
   ) : (
      <button className={styles.btn} onClick={onClick}>
         {children}
      </button>
   );
};
