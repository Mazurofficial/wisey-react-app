import Hls from 'hls.js';
import { useEffect, useRef, useState } from 'react';
import { useAppDispatch } from '../../app/hooks';
import { closeModal } from '../../features/modalWindow/modalWindow-slice';
import { setPip } from '../../features/pip/pipSlice';
import styles from './VideoPlayer.module.scss';

interface VideoPlayerInterFace {
   link: string;
   width: string;
   height: string;
   autoplay?: boolean;
   controls?: boolean;
   muted?: boolean;
   hasPip?: boolean;
}

export const VideoPlayer = ({
   link,
   width,
   height,
   autoplay,
   controls,
   muted,
   hasPip,
}: VideoPlayerInterFace) => {
   const videoRef = useRef<HTMLVideoElement>(null);
   const [videoPlayback, setVideoPlayback] = useState(1);
   const dispatch = useAppDispatch();

   useEffect(() => {
      if (videoRef.current) {
         const { current: videoElement } = videoRef;
         if (Hls.isSupported()) {
            const hls = new Hls();
            hls.loadSource(link);
            hls.attachMedia(videoElement);
            if (autoplay) {
               hls.on(Hls.Events.MANIFEST_PARSED, () => {
                  videoElement.play();
               });
            }
         }
         videoElement.addEventListener('timeupdate', () => {
            localStorage.setItem(
               `videoTime${link}`,
               videoElement.currentTime.toString()
            );
         });
         videoElement.addEventListener('ended', () => {
            localStorage.setItem(`videoTime${link}`, '0');
         });
      }
   }, [link, autoplay]);

   useEffect(() => {
      if (videoRef.current) {
         const { current: videoElement } = videoRef;
         const handleKeyDown = (event: KeyboardEvent) => {
            if (event.code === 'ShiftLeft' && videoElement.playbackRate > 0.5) {
               videoElement.playbackRate -= 0.25;
               setVideoPlayback((prev) => prev - 0.25);
            } else if (
               event.code === 'ShiftRight' &&
               videoElement.playbackRate < 3
            ) {
               videoElement.playbackRate += 0.25;
               setVideoPlayback((prev) => prev + 0.25);
            }
         };
         window.addEventListener('keydown', handleKeyDown);
         const videoTime = localStorage.getItem(`videoTime${link}`);
         videoElement.currentTime = Number(videoTime);
         console.log(videoTime);
         return () => {
            window.removeEventListener('keydown', handleKeyDown);
         };
      }
   }, []);

   return (
      <div className={styles.container}>
         <span>x{videoPlayback}</span>
         {hasPip && (
            <span
               onClick={() => {
                  dispatch(closeModal());
                  dispatch(setPip(link));
               }}
            >
               open pip
            </span>
         )}
         <video
            ref={videoRef}
            controls={controls}
            width={width}
            height={height}
            muted={muted}
         ></video>
      </div>
   );
};
