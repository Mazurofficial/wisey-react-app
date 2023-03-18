import { useState } from 'react';
import styles from './Hint.module.scss';

interface TipProps {
   children: React.ReactNode;
}

export const Tip = ({ children }: TipProps) => {
   const [isTipVisible, setIsTipVisible] = useState(false);

   return (
      <div className={styles.tip}>
         <span
            className={styles.tip_trigger}
            onMouseEnter={() => setIsTipVisible(true)}
            onMouseLeave={() => setIsTipVisible(false)}
         >
            ?
         </span>
         <p
            onMouseEnter={() => setIsTipVisible(true)}
            onMouseLeave={() => setIsTipVisible(false)}
            className={
               isTipVisible
                  ? `${styles.tip_text} ${styles.active}`
                  : styles.tip_text
            }
         >
            {children}
         </p>
      </div>
   );
};
