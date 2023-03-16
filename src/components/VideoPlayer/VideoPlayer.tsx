import Hls from 'hls.js';
import { useEffect, useRef } from 'react';

interface VideoPlayerInterFace {
   link: string;
   width: string;
   height: string;
}

export const VideoPlayer = ({ link, width, height }: VideoPlayerInterFace) => {
   const videoRef = useRef<HTMLVideoElement>(null);
   useEffect(() => {
      if (videoRef.current) {
         const { current: videoElement } = videoRef;
         if (Hls.isSupported()) {
            console.log('supported');
            const hls = new Hls();
            hls.loadSource(link);
            hls.attachMedia(videoElement);
            // hls.on(Hls.Events.MANIFEST_PARSED, () => {
            //    videoElement.play();
            // });
         }
      }
   }, [link]);

   return <video ref={videoRef} controls width={width} height={height}></video>;
};
