import React, { useEffect, useRef, useState } from 'react';
import styles from './Shorts.module.css';

const YouTubeShortsCarousel = ({ shortsIds = [] }) => {
  const trackRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    // עדכון משתנה CSS עם מספר האיטמים
    document.documentElement.style.setProperty('--shorts-count', shortsIds.length);
  }, [shortsIds]);

  useEffect(() => {
    const handleMouseEnter = () => {
      setIsPaused(true);
    };

    const handleMouseLeave = () => {
      setIsPaused(false);
    };

    const track = trackRef.current;
    if (track) {
      track.addEventListener('mouseenter', handleMouseEnter);
      track.addEventListener('mouseleave', handleMouseLeave);
    }

    return () => {
      if (track) {
        track.removeEventListener('mouseenter', handleMouseEnter);
        track.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
  }, []);

  // יצירת מערך כפול כדי לאפשר גלילה אינסופית
  const duplicatedIds = [...shortsIds, ...shortsIds, ...shortsIds]; // שיכפול נוסף לתנועה רציפה יותר

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
                <iframe
                  src={`https://www.youtube-nocookie.com/embed/${id}?loop=1&controls=1&rel=0`}
                  title={`YouTube Short ${index + 1}`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default YouTubeShortsCarousel;