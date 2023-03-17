import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import { VideoPlayer } from '../../../components/VideoPlayer';
import { selectPipLink, selectPipStatus } from '../pipSelectors';
import { closePip } from '../pipSlice';
import styles from './Pip.module.scss';

export const Pip = () => {
   const link = useAppSelector(selectPipLink);
   const isActive = useAppSelector(selectPipStatus);
   const dispatch = useAppDispatch();
   return isActive ? (
      <div className={styles.pip}>
         <span onClick={() => dispatch(closePip())}>close pip</span>
         <VideoPlayer
            link={link}
            height="200"
            width="100%"
            autoplay={false}
            muted={false}
            controls={true}
         />
      </div>
   ) : null;
};
