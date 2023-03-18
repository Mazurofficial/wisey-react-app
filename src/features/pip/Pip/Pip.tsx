import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import { VideoPlayer } from '../../../components/VideoPlayer';
import { selectPipLink, selectPipIsActive } from '../pipSelectors';
import { closePip } from '../pipSlice';
import styles from './Pip.module.scss';
import { ReactComponent as DefaultCloseIcon } from '../../../img/closeImg/times.svg';

export const Pip = () => {
   const link = useAppSelector(selectPipLink);
   const isActive = useAppSelector(selectPipIsActive);
   const dispatch = useAppDispatch();
   return isActive ? (
      <div className={styles.pip}>
         <span
            className={styles.pip_close}
            onClick={() => dispatch(closePip())}
         >
            <DefaultCloseIcon />
         </span>
         <VideoPlayer
            link={link}
            height="200"
            width="100%"
            autoplay={true}
            muted={false}
            controls={true}
         />
      </div>
   ) : null;
};
