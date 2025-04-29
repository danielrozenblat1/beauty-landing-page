import React from 'react';
import styles from './Me.module.css';
import daniel from "../images/דניאל.png";

import Works from '../components/recommends/Works';
import FormScreen from '../components/formScreen/FormScreen';

const AboutMe = () => {
  return (
    <>
      <div className={styles.header} id="מי אני">אזזזז.. מי אני?</div>
      <div className={styles.container}>
        <div className={styles.imageContainer}>
          <img src={daniel} alt="דניאל רוזנבלט" className={styles.image} />
        </div>
        <div className={styles.content}>
          <h1 className={styles.title}>דניאל רוזנבלט</h1>
          <div className={styles.subtitle}>
            "לשלב את התשוקה שלי ולעזור לבעלי עסקים אחרים להרוויח מזה? פעם זה היה נשמע לי הזוי"
          </div>
          <p className={styles.description}>
            מגיל מאוד קטן עניין אותי לדעת איך אנשים מצליחים לשכנע אחרים לפעול, איך להגיד את 
            המשפט הנכון שיגרום לבן אדם בצד השני להפתח אלי ולשתף אותי יותר ואיך לגרום לאנשים לסמוך עלי (כי זה תמיד היה עובד עלי).
          </p>
          <p className={styles.description}>
            כל החיים סללתי את המסלול שלי להייטק עד שהשתחררתי והכל השתנה - עולם העסקים מצא אותי בדרך לא דרך ומפה לשם - פשוט <span className={styles.bold}>התאהבתי</span> במשחק!
            לשלב את התשוקה שלי ולעזור לבעלי עסקים אחרים להרוויח מזה?? זה היה נשמע לי הזוי.
          </p>
          <p className={styles.description}>
            הבנתי שזה לא משנה מה אתה מוכר - אלא <span className={styles.bold}>איך</span> אתה מציג אותו 
            ופיצחתי את השיטה שעד היום עזרה ללקוחות שלי להכניס מעל ל<span className={styles.bold}>1,000,000</span> שקלים במצטבר!
          </p>
        </div>
      </div>
      
      <div className={styles.sectionContainer}>
        <h2 className={styles.sectionTitle}>אז למה בעצם תחום הביוטי?</h2>
        
        <div className={styles.glassContainer}>
          <p className={styles.description}>
            תכלס - העולם הזה מצא אותי - אתן יודעות איך זה.. חברה של חברה שהביאה עוד חברה והמליצה לעוד 5 והיום עזרתי כבר ללמעלה 
            מ<span className={styles.bold}>100</span> עצמאיות בתחום הביוטי <span className={styles.bold}>לפוצץ את היומן שלהן ולהצטייר כמותג עם תדמית דיגיטלית שבאמת משקפת את השירות שלהן </span> 
             - מנשים שמוכרות טיפולים שירותים וקורסים ב3 ו4 ספרות   ועד לנשים שמוכרות קורסים ושירותים ב5 ספרות.
            אני באמת מאמין <span className={styles.bold}> שהמחיר הוא המחיר האחרון שהלקוחה שלנו משלמת </span> - והכסף זה כמעט אף פעם לא הפקטור וזו הסיבה שאני כאן.
          </p>
        </div>
      </div>
      
      <div className={styles.sectionContainer}>
        <h2 className={styles.sectionTitle}>ממני שמעת מספיק - תשמעי קצת מהן (הן לא משוחדות)</h2>
      </div>
      <p className={styles.description}>
 <span className={styles.bold}>(תחליקי לצדדים)</span>
          </p>
      <Works/>
     <FormScreen/>
    </>
  );
};

export default AboutMe;