import { useEffect, useRef } from "react";
import styles from "./Works.module.css";

// תמונות
import nikol from "../../images/ניקול ולארי - מומחית ביוטי.png"
import shoval from "../../images/שובל דעבול - נומורולוגית.png"
import danielTurayev from "../../images/דניאל טורייב - פיננסים.png"
import matan from "../../images/מתן חממי - דרופשיפינג.png"
import morezra from "../../images/מור עזרא.png"
import shiradi from "../../images/שיר עדי.png"
import orianHamami from "../../images/אוריאן חממי.png"
import valeriaRemidovski from "../../images/ולריה רמידובסקי.png"
import shirelzagury from "../../images/שיראל זגורי.png"
import suzanapinhasi from "../../images/סוזנה פנחסי.png"
import adiMaman from "../../images/עדי ממן.png"
import sapirDayan from "../../images/ספיר דיין.png"
import annagrekov from "../../images/אנה גרקוב.png"
import tomerGedi from "../../images/תומר גדי.png"
import saraAnanya from "../../images/שרה אנניה.png"
import inbalRozenfeld from "../../images/ענבל רוזנפלד.png"
import meravishulim from "../../images/מירב בישולים.png"
import lance from "../../images/לאנס.png"
import mayLine from "../../images/מאי סויסה.png"
import lorinNakash from "../../images/לורין נקש.png"
import anastasiaTalan from "../../images/אנסטסיה טלן חכים.png"
import sharonSror from "../../images/שרון סרור.png"
import aviaHarshish from "../../images/אביה הרשיש.png"
import sivanGross from "../../images/סיון גרוס.png"
import royshmuel from "../../images/רועי שמואל.png"
import iditBazak from "../../images/עידית בזק.png"
import haniHemo from "../../images/חני חמו.png"
import eclipseMedia from "../../images/אקליפס מדיה.png"
import sheliMeir from "../../images/שלי מאיר.png"
const Works = () => {
  const worksData = [
        { title: "רועי שמואל", description: "אדריכל ומעצב פנים", src:  royshmuel, href: "https://consilium.vercel.app/" },
    { title: "אנה גרקוב", description: "איפור קבוע - קורסים וטיפולים", src: annagrekov, href: "https://annagrekov.co.il" },
      { title: "חני חמו", description: "מעצבת פנים", src: haniHemo, href: "https://hanihemo.co.il" },
   
      { title: "עידית בזק", description: "קורסים למטפלות פנים | טיפולי פנים", src: iditBazak, href: "https://iditbazak-facecare.co.il" },
   
 { title: "אביה הרשיש", description: "אדריכלית", src: aviaHarshish, href: "https://avia-arch.co.il" },
  { title: "אקליפס מדיה", description: "חברת צילום | עמדות צילום ללינקדין", src: eclipseMedia, href: "https://eclipse-media.vercel.app" },
        { title: "שלי מאיר", description: "אקדמיה לאיפור קבוע | טיפולי איפור קבוע", src: sheliMeir, href: "https://shelimeir-academy.co.il" },
     { title: "סוזנה פנחסי", description: "קורסים בתחום הביוטי", src: suzanapinhasi, href: "https://suzanapinhasi.co.il" },
   { title: "סיון גרוס", description: "מעצבת פנים", src: sivanGross, href: "https://sivan-gross.vercel.app" },

    { title: "שרון סרור", description: "איפור כלות | השתלמויות למאפרות", src: sharonSror, href: "https://sharonsror.co.il" },
      { title: "שיר עדי", description: "קורס להחלקות שיער", src: shiradi, href: "https://shiradiacademy.co.il" },
    { title: "שיראל זגורי", description: "יוגה לילדים", src: shirelzagury, href: "https://yoga-with-shirel.co.il" },
  
    { title: "מור עזרא", description: "טיפולי איפור קבוע ומיקרופיגמנטציה", src: morezra, href: "https://morezra.co.il" },
 
    { title: "ספיר דיין", description: "מאפרת מקצועית", src: sapirDayan, href: "https://sapirdayanmakeup.co.il" },
   
   
    { title: "מאי ליין", description: "לימודי ציפורניים וגבות", src: mayLine, href: "https://mayline.co.il" },
    { title: "ניקול ולרי", description: "מומחית ביוטי", src: nikol, href: "https://nikolvalerie.co.il" },
    { title: "לורין נקש", description: "מומחית ללימודי ציפורניים", src: lorinNakash, href: "https://lorinnakash.co.il" },

    { title: "ענבל רוזנפלד", description: "אקדמיה ללימוד ציפורניים", src: inbalRozenfeld, href: "https://inbalrozenfeld.co.il" },
    { title: "מירב בישולים", description: "בישולים בייתיים", src: meravishulim, href: "https://Meravbishulim.co.il" },
   
    { title: "Lance", description: "קייטרינג לאירועים", src: lance, href: "https://lancebuffet.co.il" },
    { title: "שובל דעבול", description: "נומורולוגיה וריפוי דרך התת מודע", src: shoval, href: "https://shovaldabol.co.il" },
    // כפילת העבודות הראשונות לאפקט אינסופי
    { title: "אנה גרקוב", description: "איפור קבוע - קורסים וטיפולים", src: annagrekov, href: "https://annagrekov.co.il" },
    { title: "אביה הרשיש", description: "אדריכלית", src: aviaHarshish, href: "https://avia-arch.co.il" },
    { title: "אנסטסיה טלן", description: "איפור כלות | השתלמויות | קורס דיגיטלי", src: anastasiaTalan, href: "https://anastasiatalanhakim.co.il" },
  ];

  const scrollContainerRef = useRef(null);

  // מימוש משופר לגלילה אינסופית
  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (!scrollContainer) return;
    
    let scrollAmount = 0;
    let animationId = null;
    const step = 0.5; // מהירות הגלילה
    let isPaused = false;
    let isManualScrolling = false;
    let lastScrollPosition = 0;
    let lastTimestamp = 0;
    let scrollTimeout;
    
    // פונקציית אנימציה לגלילה אוטומטית
    const animation = (timestamp) => {
      if (!lastTimestamp) lastTimestamp = timestamp;
      const deltaTime = timestamp - lastTimestamp;
      lastTimestamp = timestamp;
      
      if (scrollContainer && !isPaused && !isManualScrolling) {
        // גלילה הדרגתית ואחידה
        scrollAmount += step * (deltaTime / 16); // נורמליזציה לפי 60fps
        scrollContainer.scrollLeft = scrollAmount;
        
        // איפוס הגלילה בהגעה למחצית התוכן (עבור אפקט אינסופי)
        if (scrollAmount >= scrollContainer.scrollWidth / 2) {
          scrollAmount = 0;
          scrollContainer.scrollLeft = 0;
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
    
    // זיהוי גלילה ידנית
    const handleScroll = () => {
      // בדיקה אם הגלילה הידנית משמעותית
      if (Math.abs(scrollContainer.scrollLeft - lastScrollPosition) > 2) {
        isManualScrolling = true;
        isPaused = true;
        clearTimeout(scrollTimeout);
        
        scrollTimeout = setTimeout(() => {
          // עדכון מיקום הגלילה לאחר שהמשתמש סיים לגלול
          scrollAmount = scrollContainer.scrollLeft;
          isPaused = false;
          isManualScrolling = false;
        }, 6000); // חידוש אנימציה לאחר 6 שניות ללא גלילה
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
    <div className={styles.worksContainer} id="עבודות">
      <div 
        className={styles.scrollCarousel} 
        ref={scrollContainerRef}
      >
        {worksData.map((work, index) => (
          <div className={styles.work} key={index}>
            {index % 2 === 0 ? (
              <>
                <div className={styles.text} itemScope itemType="http://schema.org/CreativeWork">
                  <h1 className={styles.title} itemProp="name">{work.title}</h1>
                  <p className={styles.description} itemProp="description">{work.description}</p>
                  <p className={styles.href}>למעבר לדף לחצו על התמונה</p>
                </div>
                <div className={styles.imageContainer}>
                  <div className={styles.overlay}></div>
                  <a href={work.href} target="_blank" rel="noopener noreferrer">
                    <img className={styles.img} src={work.src} alt={work.title} />
                  </a>
                </div>
              </>
            ) : (
              <>
                <div className={styles.imageContainer}>
                  <div className={styles.overlay}></div>
                  <a href={work.href} target="_blank" rel="noopener noreferrer">
                    <img className={styles.img} src={work.src} alt={work.title} />
                  </a>
                </div>
                <div className={styles.text} itemScope itemType="http://schema.org/CreativeWork">
                  <h1 className={styles.title} itemProp="name">{work.title}</h1>
                  <p className={styles.description} itemProp="description">{work.description}</p>
                  <p className={styles.href}>למעבר לדף לחצו על התמונה</p>
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Works;