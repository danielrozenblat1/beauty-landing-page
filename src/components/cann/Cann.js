import React, { useEffect, useRef } from 'react';
import { Player } from '@lordicon/react';
import ScrollReveal from "scrollreveal";
import styles from './Cann.module.css';

const IconTextComponentt = ({ text, icon }) => {
  const handleComplete = () => {
    setTimeout(() => {
      playerRef1?.current?.playFromBeginning();
    }, 2500);
  };
  
  const playerRef1 = useRef(null);
  
  useEffect(() => {
    playerRef1?.current?.playFromBeginning();
  }, []);
  
  useEffect(() => {
    ScrollReveal().reveal(`.${styles.icon}`, {
      duration: 1000,
      distance: "50px",
      origin: "top",
      easing: "ease-out",
      reset: false,
      viewFactor: 0.2,
      interval: 300,
      delay: 200,
      scale: 1,
    });
    
    ScrollReveal().reveal(`.${styles.text}`, {
      duration: 1000,
      distance: "30px",
      origin: "bottom",
      easing: "ease-out",
      reset: false,
      viewFactor: 0.2,
      interval: 300,
      delay: 400,
      scale: 1,
    });
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.icon}>
        <Player 
          icon={icon} 
          ref={playerRef1} 
          size="100%" 
          onComplete={handleComplete}
        />
      </div>
      <p className={styles.text}>{text}</p>
    </div>
  );
};

export default IconTextComponentt;