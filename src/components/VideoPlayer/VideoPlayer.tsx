import Hls from 'hls.js';
import { useEffect, useRef, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { closeModal } from '../../features/modalWindow/modalWindow-slice';
import { setPip } from '../../features/pip/pipSlice';
import { selectIsModalVisible } from '../../features/modalWindow/modalWindowSelector';
import styles from './VideoPlayer.module.scss';
import { Preloader } from '../Preloader';
import { ReactComponent as PipTrigger } from '../../img/pip/pip.svg';
import { Tip } from '../Hint';

interface VideoPlayerInterFace {
  link: string;
  width: string;
  height: string;
  autoplay?: boolean;
  controls?: boolean;
  muted?: boolean;
  useCustomControls?: boolean;
  onPlay?: () => void;
}

export const VideoPlayer = ({
  link,
  width,
  height,
  autoplay,
  controls,
  muted,
  useCustomControls,
  onPlay,
}: VideoPlayerInterFace) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoPlayback, setVideoPlayback] = useState(1);
  const modalIsActive = useAppSelector(selectIsModalVisible);
  const dispatch = useAppDispatch();
  const [loading, setLoading] = useState(true);

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
        localStorage.setItem(`videoTime${link}`, videoElement.currentTime.toString());
      });
      videoElement.addEventListener('ended', () => {
        localStorage.setItem(`videoTime${link}`, '0');
      });

      videoElement.addEventListener('loadeddata', () => {
        console.log('loaded');
        setLoading(false);
      });
    }
  }, [link, autoplay]);

  useEffect(() => {
    modalIsActive === false && videoRef.current?.pause();
  }, [modalIsActive]);

  useEffect(() => {
    if (videoRef.current) {
      const { current: videoElement } = videoRef;
      const handleKeyDown = (event: KeyboardEvent) => {
        if (event.code === 'ShiftLeft' && videoElement.playbackRate > 0.5) {
          videoElement.playbackRate -= 0.25;
          setVideoPlayback((prev) => prev - 0.25);
        } else if (event.code === 'ShiftRight' && videoElement.playbackRate < 3) {
          videoElement.playbackRate += 0.25;
          setVideoPlayback((prev) => prev + 0.25);
        }
      };
      window.addEventListener('keydown', handleKeyDown);
      const videoTime = localStorage.getItem(`videoTime${link}`);
      videoElement.currentTime = Number(videoTime);
      return () => {
        window.removeEventListener('keydown', handleKeyDown);
      };
    } // eslint-disable-next-line
  }, []);

  const onLoadedData = () => {
    setLoading(false);
  };

  return (
    <div
      className={styles.container}
      style={{
        width: `${width}`,
        height: `${height}px`,
      }}
    >
      {loading && (
        <div
          className={styles.video_preloader}
          style={{
            width: `${width}`,
            height: `${height}px`,
          }}
        >
          <Preloader />
        </div>
      )}
      {useCustomControls && (
        <div className={styles.video_controls}>
          <span className={styles.video_controls_speed}>x{videoPlayback}</span>
          <span
            className={styles.video_controls_pipTrigger}
            onClick={() => {
              dispatch(closeModal());
              dispatch(setPip(link));
              videoRef.current?.pause();
            }}
          >
            <PipTrigger />
          </span>
          <Tip>
            To decrease speed by 0.25 press LeftShift
            <br /> To increase by 0.25 - RightShift
          </Tip>
        </div>
      )}
      <video
        ref={videoRef}
        controls={controls}
        width={width}
        height={height}
        muted={muted}
        onPlay={onPlay}
        onLoadedData={onLoadedData}
        disablePictureInPicture
      ></video>
    </div>
  );
};
