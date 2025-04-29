import React, { useEffect, useRef } from 'react';
import styles from './Recommends.module.css';
import Button from '../button/Button';

// Import images from the first list (skipping videos)
import result1 from "../../images/שובל דעבול חוות דעת.png";
import result3 from "../../images/חוות דעת דניאל טורייב.png";
import result4 from "../../images/ניקול ולארי חוות דעת.png";
import result5 from "../../images/לירון רוקח חוות דעת.png";
import result7 from "../../images/ניר בן דוד חוות דעת.png";
import result8 from "../../images/ולריה רמידובסקי חוות דעת.png";
import result9 from "../../images/נאור לוי חוות דעת.png";
import result10 from "../../images/מיכל אבנד חוות דעת.png";
import result11 from "../../images/עדי ממן חוות דעת.png";
import result12 from "../../images/ספיר דיין חוות דעת.png";
import result14 from "../../images/אוריאן חממי חווות דעת.png";
import result15 from "../../images/שרה אנניה חוות דעת.png";
import result16 from "../../images/תומר גדי חוות דעת.png";
import result17 from "../../images/אופק ברקוביץ חוות דעת.png";
import result18 from "../../images/ענבל רוזנפלד חוות דעת.png";
import result21 from "../../images/מאי סויסה חוות דעת.png";
import result22 from "../../images/לורין נקש חוות דעת.png";
import result23 from "../../images/שרון סרור חוות דעת.png";
import result24 from "../../images/גרטה מור חוות דעת.png";
import result25 from "../../images/סתיו יעקובי חוות דעת.png";
import result26 from "../../images/אנסטסיה טלן חוות דעת.png";
import result27 from "../../images/סוזנה חוות דעת.png";
import result28 from "../../images/לריאן חוות דעת.png";
import result29 from "../../images/מעיין חוות דעת.png";
import result30 from "../../images/אביה חוות דעת.png";
import result31 from "../../images/נופר חלפון המלצה.png";
import result32 from "../../images/סוזנה חוות דעת.png";
import result33 from "../../images/שמחה לוי המלצה.png";
import result34 from "../../images/שיר עדי המלצה.png";
import result35 from "../../images/חן ושי המלצה.png";
import result36 from "../../images/שיראל זגורי המלצה.png";

const Recommends = () => {
  const scrollContainerRef = useRef(null);
  
  const images = [
   result26, result27,   result33, result34, result35, result36,result28, result29, result30, result31, result32, result4, result5, result7, result8, 
    result9, result10, result11, result12, result14, result15, result16, 
    result17, result18, result21, result22, result23, result24, result25, 
    result1, 
  
  ];

  // הגדרת אוטו-סקרול אינסופי שמאפשר גלילה ידנית
  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (!scrollContainer) return;
    
    let scrollAmount = 0;
    let animationId = null;
    const step = 0.5; // מהירות הגלילה - ניתן להתאים
    let isPaused = false;
    
    const animation = () => {
      if (scrollContainer && !isPaused) {
        scrollAmount += step;
        scrollContainer.scrollLeft = scrollAmount;
        
        // בדיקה אם הגענו לסוף וחזרה להתחלה
        if (scrollAmount >= scrollContainer.scrollWidth / 2) {
          scrollAmount = 0;
          scrollContainer.scrollLeft = 0;
        }
      }
      animationId = requestAnimationFrame(animation);
    };
    
    // התחלת האנימציה
    animationId = requestAnimationFrame(animation);
    
    // עצירת אנימציה זמנית בעת אינטראקציה משתמש
    const pauseAnimation = () => {
      isPaused = true;
    };
    
    // המשך אנימציה לאחר סיום אינטראקציה
    const resumeAnimation = () => {
      // עדכון מיקום הגלילה הנוכחי
      scrollAmount = scrollContainer.scrollLeft;
      setTimeout(() => {
        isPaused = false;
      }, 3000); // המשך אנימציה אחרי 3 שניות של חוסר פעילות
    };
    
    // מאזיני אירועים
    scrollContainer.addEventListener('mousedown', pauseAnimation);
    scrollContainer.addEventListener('touchstart', pauseAnimation);
    scrollContainer.addEventListener('wheel', pauseAnimation);
    document.addEventListener('mouseup', resumeAnimation);
    document.addEventListener('touchend', resumeAnimation);
    
    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
      
      // הסרת מאזיני אירועים
      if (scrollContainer) {
        scrollContainer.removeEventListener('mousedown', pauseAnimation);
        scrollContainer.removeEventListener('touchstart', pauseAnimation);
        scrollContainer.removeEventListener('wheel', pauseAnimation);
      }
      document.removeEventListener('mouseup', resumeAnimation);
      document.removeEventListener('touchend', resumeAnimation);
    };
  }, []);

  return (
    <div className={styles.recommendsContainer}>
      <div 
        className={styles.scrollCarousel} 
        ref={scrollContainerRef}
      >
        {/* הקבוצה הראשונה של תמונות */}
        {images.map((img, index) => (
          <div key={`first-${index}`} className={styles.imageWrapper}>
            <img
              src={img}
              alt={`דניאל רוזנבלט לקוחות ממליצות ${index + 1}`}
              className={styles.image}
            />
          </div>
        ))}
        
        {/* הקבוצה השנייה של תמונות - זהה לראשונה, ליצירת אפקט אינסופי */}
        {images.map((img, index) => (
          <div key={`second-${index}`} className={styles.imageWrapper}>
            <img
              src={img}
              alt={`דניאל רוזנבלט לקוחות ממליצות ${index + 1}`}
              className={styles.image}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Recommends;