import React, { useEffect, useRef, useState } from 'react';
import styles from './Shorts.module.css';

const YouTubeThumbnail = ({ id, index }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  if (isPlaying) {
    return (
      <iframe
        src={`https://www.youtube-nocookie.com/embed/${id}?loop=1&controls=1&rel=0&autoplay=1`}
        title={`YouTube Short ${index + 1}`}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    );
  }

  return (
    <div className={styles.thumbnail} onClick={() => setIsPlaying(true)}>
      <img
        src={`https://img.youtube.com/vi/${id}/maxresdefault.jpg`}
        alt={`YouTube Short ${index + 1}`}
        loading="lazy"
      />
      <div className={styles.playButton}>
        <svg viewBox="0 0 68 48" width="68" height="48">
          <path d="M66.52,7.74c-0.78-2.93-2.49-5.41-5.42-6.19C55.79,.13,34,0,34,0S12.21,.13,6.9,1.55 C3.97,2.33,2.27,4.81,1.48,7.74C0.06,13.05,0,24,0,24s0.06,10.95,1.48,16.26c0.78,2.93,2.49,5.41,5.42,6.19 C12.21,47.87,34,48,34,48s21.79-0.13,27.1-1.55c2.93-0.78,4.64-3.26,5.42-6.19C67.94,34.95,68,24,68,24S67.94,13.05,66.52,7.74z" fill="#f00"/>
          <path d="M 45,24 27,14 27,34" fill="#fff"/>
        </svg>
      </div>
    </div>
  );
};

const YouTubeShortsCarousel = ({ shortsIds = [] }) => {
  const trackRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    document.documentElement.style.setProperty('--shorts-count', shortsIds.length);
  }, [shortsIds]);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const handleMouseEnter = () => setIsPaused(true);
    const handleMouseLeave = () => setIsPaused(false);

    track.addEventListener('mouseenter', handleMouseEnter);
    track.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      track.removeEventListener('mouseenter', handleMouseEnter);
      track.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  const duplicatedIds = [...shortsIds, ...shortsIds, ...shortsIds];

  return (
    <div className={styles.carouselOuterContainer}>
      <div className={styles.carouselContainer}>
        <div 
          className={`${styles.carouselTrack} ${isPaused ? styles.paused : ''}`} 
          ref={trackRef}
        >
          {duplicatedIds.map((id, index) => (
            <div key={`${id}-${index}`} className={styles.shortsItem}>
              <div className={styles.shortsWrapper}>
                <YouTubeThumbnail id={id} index={index} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default YouTubeShortsCarousel;