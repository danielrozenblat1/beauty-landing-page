import React, { useEffect, useRef } from 'react';
import ScrollReveal from 'scrollreveal';
import styles from "./ForthScreen.module.css";
import IconTextComponent from '../components/can/Can';
import IconTextComponentt from '../components/cann/Cann';
import FormScreen from '../components/formScreen/FormScreen';

// ייבוא אייקונים
import cold from "../icons/wired-lineal-2489-ice-cube-hover-pinch.json";
import look from "../icons/wired-outline-414-money-bag-dollar-hover-shake.json";
import book from "../icons/wired-outline-195-phone-book-contacts-hover-pinch.json";
import money from "../icons/wired-lineal-414-money-bag-dollar-hover-shake (5).json";
import hot from "../icons/wired-outline-458-goal-target-hover-hit.json";
import coins from "../icons/wired-lineal-298-coins-loop-spin (4).json";

const ForthScreenDesigners = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    // הגדרות אנימציה איטיות ויוקרתיות יותר
    const sr = ScrollReveal({
      origin: 'top',      
      distance: '30px',   
      duration: 1500,     // האטה של האנימציה ל-1.5 שניות
      delay: 300,         
      easing: 'cubic-bezier(0.2, 0, 0.2, 1)', // תנועה חלקה מאוד
      viewFactor: 0.2,    // האנימציה תתחיל כש-20% מהאלמנט נראה
      reset: false 
    });

    // כותרות
    sr.reveal(`.${styles.title}`, { interval: 300 });
    
    // פסקאות טקסט
    sr.reveal(`.${styles.description}`, { interval: 200 });

    // הקופסאות הלבנות
    sr.reveal(`.${styles.whiteContainer}`, { 
        duration: 1800,   // אפילו קצת יותר איטי לקופסאות הגדולות
        distance: '40px' 
    });

    // האייקונים בתוך ה-row - כניסה מדורגת ואיטית
    sr.reveal(`.${styles.row} > div`, { 
      interval: 350,      // הפוגה גדולה יותר בין אייקון לאייקון
      scale: 0.98,
      opacity: 0
    });

  }, []);

  return (
    <div className={styles.container} ref={containerRef}>
      
      <h2 className={styles.title}>בואי נדבר תכלס</h2>

      <p className={styles.description}>
        דיברתי עם מאות מעצבות פנים ואדריכליות, וכולן אמרו לי אותו דבר:
      </p>

      <div className={`${styles.titlePain} ${styles.whiteContainer}`}>
        ״אני יודעת שאני באמת מקצועית, אבל אני לא מצליחה להעביר את זה בדיגיטל״
      </div>

      <p className={styles.description}>
        יש לך שנים של ניסיון, לימודים, פרקטיקה ואת שמה לב לפרטים שאחרים לא רואים בכלל. אבל ברשת.. הסיפור קצת אחר
      </p>

      <div className={`${styles.titlePain} ${styles.whiteContainer}`}>
        היום לצערנו זה כבר לא מספיק להיות טובה ומקצועית.. צריך גם שיראו את זה ברשת
      </div>

      <div className={styles.description}>
        בינתיים, אותן מעצבות ואדריכליות צעירות משקיעות בדיגיטל, משקיעות בדף נחיתה יוקרתי, וגם מתפעלות את שאר הרשתות
        ובעיני המתעניינים הן נתפסות כמו מותג!! וגם בזמן מאוד קצר!.
        <br /><br />
        זה עובד להן, כי בעידן הזה מי שנראית יוקרתית - נתפסת כיוקרתית.
      </div>

      <p className={styles.description}>
        אבל את, עם כל הידע, הסטנדרטים והחוויה שאת נותנת,
        עדיין לא משקיעה בנוכחות שלך בדיגיטל
      </p>

      <div className={`${styles.titlePain} ${styles.whiteContainer}`}>
        וככה נוצר מצב ש..
      </div>

      <div className={styles.row}>
        <div><IconTextComponent icon={cold} text="את מקבלת פניות קרות, לא מדויקות ולא מתאימות לסגנון שלך" /></div>
        <div><IconTextComponent icon={coins} text="את שומעת יותר מדי פעמים ״יקר לי״ מלקוחות שלא מבינות מה הן מקבלות" /></div>
        <div><IconTextComponent icon={money} text="עד שכבר פונים אלייך, אז אלה מתעניינים עם תקציב פרוייקט שקשה לעבוד איתו" /></div>
      </div>

      <h2 className={styles.title}>
        אז איך גורמים למי שצופה בך להבין שאת הבחירה הנכונה כבר מהקליק הראשון?
      </h2>

      <p className={styles.description}>
        איך הופכים את הנוכחות שלך ברשת לשיקוף מדויק של מה שאת באמת שווה ולמשוך את הקהל שאת רוצה לעבוד איתו?
      </p>

      <div className={`${styles.titlePain} ${styles.whiteContainer}`}>
        התשובה פשוטה.
      </div>

      <p className={styles.description}>
        דף נחיתה שמציב אותך במקום הנכון.
        לא עוד אתר ״בסדר״ שבנית בעצמך או כרטיס ביקור חינמי,
        אלא חוויה דיגיטלית שמרגישה כמו העיצובים שלך! - מדויקת, יוקרתית, ונקייה.
      </p>

      <div className={`${styles.titlePain} ${styles.whiteContainer}`}>
        ואז..
      </div>

      <div className={styles.row}>
        <div><IconTextComponentt icon={look} text="את מושכת לקוחות שרוצים איכות, לא מחיר" /></div>
        <div><IconTextComponentt icon={hot} text="את מקבלת פניות חמות שמגיעות כבר סגורות עלייך" /></div>
        <div><IconTextComponentt icon={book} text="את שומרת על הרמה שלך גם בעולם הדיגיטלי" /></div>
      </div>

      <div className={`${styles.titleAction} ${styles.whiteContainer}`}>
        אם את רוצה שהלקוחות ירגישו מהרגע הראשון את הרמה שלך,
        זה הזמן לבנות דף נחיתה שמוכיח את זה בלי שתצטרכי להסביר.
      </div>

      <FormScreen />
    </div>
  )
}

export default ForthScreenDesigners;