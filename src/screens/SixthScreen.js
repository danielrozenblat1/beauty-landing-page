
import { useEffect, useRef, useState } from "react";
import FormScreen from "../components/formScreen/FormScreen";
import WhoDoesList from "../components/time/Time";
import styles from "./SixthScreen.module.css";

const SixthScreen = () => {
    const containerRef = useRef(null);
    const [isDarkMode, setIsDarkMode] = useState(false);
    
    // אפקט להוספת אנימציות בעת גלילה ושינוי רקע
    useEffect(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add(styles.visible);
            }
          });
        },
        { threshold: 0.1 }
      );
  
      const handleScroll = () => {
        if (!containerRef.current) return;
        
        // חישוב באחוזים כמה גלילה התבצעה ביחס לגובה המסך
        const scrollPosition = window.scrollY;
        const windowHeight = window.innerHeight;
        const containerHeight = containerRef.current.scrollHeight;
        
        const scrollPercentage = scrollPosition / (containerHeight - windowHeight);
        
        // הפעלת מצב כהה כאשר הגלילה עוברת סף מסוים
        if (scrollPercentage > 0.3) {
          setIsDarkMode(true);
        } else {
          setIsDarkMode(false);
        }
      };
  
      // הוספת אירוע גלילה
      window.addEventListener('scroll', handleScroll);
  
      const container = containerRef.current;
      if (container) {
        const elementsToAnimate = container.querySelectorAll(`.${styles.fadeIn}`);
        elementsToAnimate.forEach((el) => observer.observe(el));
      }
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
        if (container) {
          const elementsToAnimate = container.querySelectorAll(`.${styles.fadeIn}`);
          elementsToAnimate.forEach((el) => observer.unobserve(el));
        }
      };
    }, []);
  return <>
   <div className={`${styles.container} ${isDarkMode ? styles.containerDark : ''}`} ref={containerRef}>
      

      <div className={`${styles.title} ${styles.fadeIn} ${isDarkMode ? styles.titleDark : ''}`}>״דניאל, איך אני אדע אם זה הזמן לעשות דף נחיתה?״</div>
      <div className={`${styles.description} ${styles.fadeIn} ${isDarkMode ? styles.descriptionDark : ''}`}>
 האמת,אולי זה נשמע לך הזוי שאני אומר את זה אבל לא כל אחת צריכה דף נחיתה ולא תמיד זה הזמן הנכון
      </div>
      <div className={`${styles.description} ${styles.fadeIn} ${isDarkMode ? styles.descriptionDark : ''}`}>
אז בואי נעשה סדר, את צריכה דף נחיתה אם :
      </div>

 <WhoDoesList/>
      <FormScreen/>

    </div>
  </>
};

export default SixthScreen;