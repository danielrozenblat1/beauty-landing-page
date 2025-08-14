import React, { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';
import styles from './MinimalComponent.module.css';

const MinimalComponent = () => {
  useEffect(() => {
    // הגדרת ScrollReveal
    ScrollReveal({
      reset: true,
      distance: '60px',
      duration: 1000,
      delay: 200,
      easing: 'ease-out'
    });

    // אנימציות לכל פריט
    ScrollReveal().reveal('[data-reveal="right"]', {
      origin: 'right',
      interval: 300
    });

    ScrollReveal().reveal('[data-reveal="left"]', {
      origin: 'left',
      interval: 300
    });
  }, []);

  return (
    <div className={styles.container}>
      {/* פריט 01 - ספרה בצד ימין */}
      <div className={`${styles.item} ${styles.itemRight}`} data-reveal="right">
        <div className={styles.number}>01</div>
        <div className={`${styles.text} ${styles.textRight}`}>
          תיאור עבור הפריט הראשון שמופיע כאן בפונט Assistant עם עיצוב מינימליסטי
        </div>
      </div>

      {/* פריט 02 - ספרה בצד שמאל */}
      <div className={`${styles.item} ${styles.itemLeft}`} data-reveal="left">
        <div className={`${styles.text} ${styles.textLeft}`}>
          תיאור עבור הפריט השני שמופיע כאן בפונט Assistant עם עיצוב מינימליסטי
        </div>
        <div className={styles.number}>02</div>
      </div>

      {/* פריט 03 - ספרה בצד ימין */}
      <div className={`${styles.item} ${styles.itemRight}`} data-reveal="right">
        <div className={styles.number}>03</div>
        <div className={`${styles.text} ${styles.textRight}`}>
          תיאור עבור הפריט השלישי שמופיע כאן בפונט Assistant עם עיצוב מינימליסטי
        </div>
      </div>
    </div>
  );
};

export default MinimalComponent;