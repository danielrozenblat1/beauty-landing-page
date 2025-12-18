import { useEffect, useRef } from 'react'
import styles from "./ForthScreen.module.css"
import IconTextComponent from '../components/can/Can';
import price from "../icons/wired-lineal-101-price-tag-dollar-hover-flutter.json"
import cold from "../icons/wired-lineal-2489-ice-cube-hover-pinch.json"
import look from "../icons/wired-lineal-19-magnifier-zoom-search-hover-spin.json"
import FormScreen from '../components/formScreen/FormScreen';
import IconTextComponentt from '../components/cann/Cann';
import book from "../icons/wired-outline-195-phone-book-contacts-hover-pinch.json"
import money from "../icons/wired-outline-414-money-bag-dollar-hover-shake.json"
import hot from "../icons/wired-outline-458-goal-target-hover-hit.json"

const ForthScreen = () => {
  const containerRef = useRef(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.visible);
          }
        });
      },
      { 
        threshold: 0.15, // מעט יותר גבוה כדי שהאנימציה תתחיל כשהאלמנט באמת נראה
        rootMargin: '0px 0px -50px 0px' 
      }
    );

    const container = containerRef.current;
    if (container) {
      const elementsToAnimate = container.querySelectorAll(`.${styles.fadeIn}`);
      elementsToAnimate.forEach((el) => observer.observe(el));
    }

    return () => {
      if (container) {
        const elementsToAnimate = container.querySelectorAll(`.${styles.fadeIn}`);
        elementsToAnimate.forEach((el) => observer.unobserve(el));
      }
    };
  }, []);

  return (
    <div className={styles.container} ref={containerRef}>
      
      <div className={`${styles.title} ${styles.fadeIn}`}>בואי נדבר תכלס</div>
      
      <div className={`${styles.description} ${styles.fadeIn}`}>
        דיברתי עם אלפי נשים בתחום הביוטי וכמעט כולן אמרו לי את המשפט הבא:
      </div>
      
      <div className={`${styles.titlePain} ${styles.fadeIn} ${styles.whiteContainer}`}>
        ״אתה לא מבין כמה התחום שלנו פרוץ״
      </div>
      
      <div className={`${styles.description} ${styles.fadeIn}`}>
        בואי נודה באמת - היום כל מי שסיימה קורס של שבועיים (לפעמים גם בלי קורס) כבר פותחת קליניקה, 
        קוראת לעצמה "<span className={styles.bold}>מומחית</span>" ואפילו מוכרת קורסים משלה. מכירה את זה?
      </div>
      
      <div className={`${styles.description} ${styles.fadeIn}`}>
        והתוצאה? הלקוחות שלך גולשות באינסטגרם ורואות מאות פרופילים שנראים בדיוק אותו דבר, 
        עם אותן תמונות, אותן הבטחות ואותן מילים.
      </div>
      
      <div className={`${styles.titlePain} ${styles.fadeIn} ${styles.whiteContainer} ${styles.bounceAnimation}`}>
        וככה נוצר מצב ש..
      </div>

      <div className={styles.row}>
        <IconTextComponent icon={look} text="הלקוחות כבר לא סומכות כמעט על אף אחת ועושות ״סקר שוק״"/>
        <IconTextComponent icon={cold} text="הפניות מגיעות מאוד קרות וכמעט תמיד קשורות במחיר"/>
        <IconTextComponent icon={price} text="ואת לא לוקחת את המחיר שאת באמת רוצה לקחת"/>
      </div>

      <div className={`${styles.title} ${styles.fadeIn}`}>וכל זה למרות שהביקוש לתחום מטורף!</div>
      
      <div className={`${styles.description} ${styles.fadeIn}`}>
        (והוא מטורף!!!!)
      </div>

      <div className={`${styles.description} ${styles.fadeIn}`}>
        הלקוחות שלך הופכות לחשדניות רק כי הן כבר לא מצליחות להבדיל בין 
        מי שבאמת מקצועית לבין מי שרק מעמידה פנים ועל מי היא תשקיע אלפי שקלים ״בלי ליפול״
      </div>
      
      <div className={`${styles.description} ${styles.fadeIn}`}>
        <span className={styles.bold}>אז השאלה היא:</span> איך אני מתחילה לקבל תוצאות שונות כשכולן נראות בדיוק אותו הדבר?
      </div>
      
      <div className={`${styles.description} ${styles.fadeIn}`}>
        <span className={styles.bold}>והתשובה?</span> פשוטה בטירוף - כדי לקבל תוצאות אחרות, את חייבת להציג את עצמך ואת השירות שלך בצורה אחרת.
      </div>

      <div className={`${styles.title} ${styles.fadeIn}`}>וברגע שהמתעניינות ייחשפו למשהו שונה</div>

      <div className={styles.row}>
        <IconTextComponentt icon={money} text="את תוכלי לקחת את המחיר שאת רוצה לקחת ולא את מחירי השוק"/>
        <IconTextComponentt icon={hot} text="הפניות יגיעו ממוקדות ובמיוחד אלייך ולא במסווה של ״סקר שוק״"/>
        <IconTextComponentt icon={book} text="היומן שלך יתחיל להתמלא ולא תצטרכי לרדוף אחרי מתעניינות שלא סגרו"/>
      </div>

      <div className={`${styles.titleAction} ${styles.fadeIn} ${styles.whiteContainer}`}>
        אז אם את רוצה להתחיל באמת להנות מהעסק שלך 
      </div>
      
      <FormScreen/>
    </div>
  )
}

export default ForthScreen