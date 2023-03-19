import { VideoPlayer } from '../../VideoPlayer';
import styles from './Poster.module.scss';

interface PosterProps {
   imgLink: string;
   videoLink?: string;
   hover: boolean;
}

export const Poster = ({ imgLink, videoLink, hover }: PosterProps) => {
   return (
      <>
         <img
            src={`${imgLink}/cover.webp`}
            alt="course_previewImage"
            className={styles.image}
         />
         {hover && videoLink && (
            <div className={styles.video}>
               <VideoPlayer
                  link={videoLink}
                  width="100%"
                  height="163"
                  autoplay={true}
                  controls={false}
                  muted={true}
               />
            </div>
         )}
      </>
   );
};
