import styles from './Header.module.scss';
import { ReactComponent as Logo } from '../../img/logo/logo.svg';
import { Link } from 'react-router-dom';
import { ReactComponent as GHicon } from '../../img/gh-icon.svg';

export const Header = () => {
   return (
      <header className={styles.header}>
         <div className={styles.header_content}>
            <Link to="/">
               <Logo />
            </Link>
            <a
               className={styles.header_content_ghlink}
               href="https://github.com/Mazurofficial/wisey-react-app"
            >
               <GHicon />
               <span>Github</span>
            </a>
         </div>
      </header>
   );
};
