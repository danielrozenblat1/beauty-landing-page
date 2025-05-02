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
    result26, result27, result33, result34, result35, result36, result28, result29, result30, result31, result32, result4, result5, result7, result8, 
    result9, result10, result11, result12, result14, result15, result16, 
    result17, result18, result21, result22, result23, result24, result25, 
    result1,
  ];

  // מימוש משופר למניעת קפיצות בגלילה
  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (!scrollContainer) return;
    
    let scrollAmount = 0;
    let animationId = null;
    const step = 0.3; // מהירות איטית יותר למניעת קפיצות
    let isPaused = false;
    let isManualScrolling = false;
    let lastScrollPosition = 0;
    let lastTimestamp = 0;
    let scrollTimeout;
    
    // אתחול מיקום הגלילה לתחילת הקרוסלה
    setTimeout(() => {
      scrollContainer.scrollLeft = 0;
      scrollAmount = 0;
    }, 100);

    // פונקציית אנימציה משופרת לגלילה חלקה
    const animation = (timestamp) => {
      if (!lastTimestamp) lastTimestamp = timestamp;
      const deltaTime = timestamp - lastTimestamp;
      lastTimestamp = timestamp;
      
      if (scrollContainer && !isPaused && !isManualScrolling) {
        // גלילה הדרגתית ואחידה עם חישוב דלתא מדויק יותר
        const moveAmount = step * (deltaTime / 16); // נורמליזציה לפי 60fps
        
        // שימוש בגלילה מדויקת יותר עם הגבלת הדיוק
        scrollAmount += moveAmount;
        
        // עיגול למספר עשרוני קטן למניעת בעיות דיוק מספרי
        const roundedScrollAmount = Math.round(scrollAmount * 100) / 100;
        scrollContainer.scrollLeft = roundedScrollAmount;
        
        // בדיקה אם הגענו לסוף וחזרה להתחלה בצורה חלקה
        if (scrollAmount >= scrollContainer.scrollWidth / 2) {
          // קפיצה לתחילת הגלילה ללא אנימציה
          scrollContainer.style.scrollBehavior = 'auto';
          scrollAmount = 0;
          scrollContainer.scrollLeft = 0;
          // חזרה לאנימציה חלקה
          setTimeout(() => {
            scrollContainer.style.scrollBehavior = 'auto';
          }, 50);
        }
      }
      
      animationId = requestAnimationFrame(animation);
    };
    
    // התחלת האנימציה
    animationId = requestAnimationFrame(animation);
    
    // עצירת האנימציה בעת אינטראקציית משתמש
    const pauseAnimation = () => {
      isPaused = true;
      clearTimeout(scrollTimeout);
    };
    
    // המשך האנימציה לאחר אינטראקציית משתמש
    const resumeAnimation = () => {
      clearTimeout(scrollTimeout);
      
      // עדכון מיקום הגלילה הנוכחי
      scrollAmount = scrollContainer.scrollLeft;
      
      // המשך האנימציה לאחר השהייה
      scrollTimeout = setTimeout(() => {
        isPaused = false;
        isManualScrolling = false;
      }, 6000); // המשך אנימציה אחרי 6 שניות של חוסר פעילות
    };
    
    // זיהוי גלילה ידנית משופר
    const handleScroll = () => {
      // בדיקה אם הגלילה הידנית משמעותית
      if (Math.abs(scrollContainer.scrollLeft - lastScrollPosition) > 1) {
        isManualScrolling = true;
        isPaused = true;
        clearTimeout(scrollTimeout);
        
        scrollTimeout = setTimeout(() => {
          // עדכון מיקום הגלילה לאחר שהמשתמש סיים לגלול
          scrollAmount = scrollContainer.scrollLeft;
          isPaused = false;
          isManualScrolling = false;
        }, 6000);
      }
      
      lastScrollPosition = scrollContainer.scrollLeft;
    };
    
    // רישום מאזיני אירועים לזיהוי אינטראקציות משתמש
    scrollContainer.addEventListener('mousedown', pauseAnimation);
    scrollContainer.addEventListener('touchstart', pauseAnimation);
    scrollContainer.addEventListener('scroll', handleScroll, { passive: true });
    document.addEventListener('mouseup', resumeAnimation);
    document.addEventListener('touchend', resumeAnimation);
    
    // ניקוי מאזיני אירועים בעת פירוק הקומפוננטה
    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
      
      clearTimeout(scrollTimeout);
      
      if (scrollContainer) {
        scrollContainer.removeEventListener('mousedown', pauseAnimation);
        scrollContainer.removeEventListener('touchstart', pauseAnimation);
        scrollContainer.removeEventListener('scroll', handleScroll);
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