import { Link } from 'react-router-dom';
import styles from './Button.module.scss';

interface ButtonProps {
  onClick?: () => void;
  children: React.ReactNode;
  isLink: boolean;
  link?: string;
  disabled?: boolean;
}

export const Button = ({ children, onClick, isLink, link, disabled }: ButtonProps) => {
  return isLink ? (
    <Link className={styles.btn} onClick={onClick} to={`/${link}`}>
      {children}
    </Link>
  ) : (
    <button className={styles.btn} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
};
