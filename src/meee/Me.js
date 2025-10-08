import React from 'react';
import styles from './Me.module.css';
import Lottie from '@lottielab/lottie-player/react';
import daniel from "../images/דניאל תדמית.png"
import Works from '../components/recommends/Works';
import FormScreen from '../components/formScreen/FormScreen';

const AboutMe = () => {
  return (
    <>
      <div className={styles.header} id="מי אני">אזזזז.. מי אני?</div>
      <div className={styles.container}>
        <div className={styles.imageContainer}>
  <img className={styles.image} src={daniel}/>
        </div>
        <div className={styles.content}>
          <h1 className={styles.title}>דניאל רוזנבלט</h1>
          <div className={styles.subtitle}>
            "לשלב את התשוקה שלי ולעזור לבעלי עסקים אחרים להרוויח מזה?? פעם זה היה נשמע לי הזוי"
          </div>
          {/* <p className={styles.description}>
            מגיל מאוד קטן עניין אותי לדעת איך אנשים מצליחים לשכנע אחרים לפעול, איך להגיד את 
            המשפט הנכון שיגרום לבן אדם בצד השני להפתח אלי ולשתף אותי יותר ואיך לגרום לאנשים לסמוך עלי (כי זה תמיד היה עובד עלי!).
          </p> */}
          <p className={styles.description}>
            כל החיים סללתי את המסלול שלי להייטק עד שהשתחררתי והכל השתנה - עולם העסקים מצא אותי בדרך לא דרך ומפה לשם - פשוט התאהבתי במשחק!
            לשלב את התשוקה שתמיד הייתה לי ולעזור לבעלי עסקים אחרים להרוויח מזה?? זה באמת היה נשמע לי הזוי!
          </p>
          <p className={styles.description}>
            מהר מאוד הבנתי שזה לא משנה מה אתה מוכר או מה העסק שלך - אלא <span className={styles.bold}>איך</span> אתה מציג אותו והכי חשוב -<span className={styles.bold} >איך הצד השני תופס וחווה אותו. </span>   <br/>
             ואותה השיטה הזו לא עבדה רק לי - עד היום הדפים שבניתי עזרו ללקוחות שלי להכניס מעל ל <span className={styles.bold}>1,000,000 שקלים במצטבר! </span> 
          </p>

          {/* <p className={styles.description}>
המטרה שלי היא לקחת בעלות עסקים שמרגישות שהשירות שלהן טוב אבל הן לא מצליחות להציג אותו כמו שהוא באמת, שמשהו בתדמית הדיגיטלית שלהן מונע מהן כרגע לפוצץ את היומן ולהתחיל לפוצץ אותן בפניות ממוקדות, חמות והכי חשוב - להתחיל להפוך את התשוקה שלהן לרווחית!
          </p> */}
        </div>
      </div>
      
      <div className={styles.sectionContainer}>
        <h2 className={styles.sectionTitle}>אז למה בעצם תחום הביוטי?</h2>
        
        <div className={styles.glassContainer}>
          <p className={styles.description}>
            בסופו של דבר אתן מדברות כאן עם גבר שלא ידע שנשים מרימות ריסים עד לפני שנתיים <br/> תכלס - העולם הזה מצא אותי - אתן יודעות איך זה.. חברה של חברה שהביאה עוד חברה והמליצה לעוד כמה חברות כי הן פשוט התחילו להתפוצץ! (בתחום שלכן זה יכול לקרות מהר מאוד) ומפה לשם, היום עזרתי כבר ללמעלה 
            מ<span className={styles.bold}>100</span> עצמאיות בתחום הביוטי <span className={styles.bold}>לפוצץ את היומן שלהן ולהצטייר כמותג עם תדמית דיגיטלית שבאמת משקפת את השירות שלהן </span>    -  עבדתי עם נשים שמוכרות שירותים ב3 ו4 ספרות ועד לנשים שמוכרות שירותים ב5 ספרות .
            ואני באמת מאמין המחיר אף פעם לא הפקטור! <span className={styles.bold}> בעיניי, המחיר הוא המחיר האחרון שהלקוחה שלנו משלמת </span> - והיא משלמת הרבה יותר מזה עד שהיא פונה אלינו! וזו הסיבה שאני כאן - לעשות שינוי בתפיסה הזו ולעזור לכן להפוך את התשוקה שלכן לבאמת רווחית!
          </p>
        </div>
      </div>
      
      <div className={styles.sectionContainer}>
        <h2 className={styles.sectionTitle}>ממני שמעת מספיק - תשמעי קצת מהן (הן לא משוחדות)</h2>
      </div>
      <p className={styles.description} style={{textAlign:"center", display:"flex", margin:"0 auto"}}>
 <span className={styles.bold}style={{textAlign:"center", display:"flex", margin:"0 auto"}} >(תחליקי לצדדים)</span>
          </p>
      <Works/>
     <FormScreen/>
    </>
  );
};

export default AboutMe;