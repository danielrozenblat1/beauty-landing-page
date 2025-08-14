import { NavLink, useNavigate } from 'react-router-dom';
import styles from './Takanon.module.css';

import { Link as ScrollLink } from 'react-scroll';

const Takanon = () => {
    const navigate = useNavigate();

    const handleNavigateHome = () => {
      navigate('/');
      // Scroll to the top of the page
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };


  return <div className={styles.container}>

      <h1 className={styles.title}>תקנון  - DR</h1>

      <section className={styles.section}>
      <h2 className={styles.subHeader}> הגדרות:</h2>
      <p className={styles.sentence}> "החברה" : דניאל רוזנבלט  DR</p>
      <p className={styles.sentence}> "האתר": אתר האינטרנט של החברה.</p>
      <p className={styles.sentence}> "המשתמש": כל אדם, לרבות גוף או תאגיד, אשר רשאי לבצע פעולות באמצעות האתר, והכל בכפוף
להתקיימות התנאים האמורים במצטבר</p>
<h2 className={styles.subHeader}>כללי:</h2>
<p className={styles.sentence}> השימוש באתר כפי שמוגדר בתקנון זה מהווה הסכמה מוחלטת ובלעדית לכל התנאים וההגבלות שבתקנון זה.</p>
<p className={styles.sentence}>המשתמש אינו רשאי להשתמש באתר אם אינו מסכים לתקנון זה.</p>

<h2 className={styles.subHeader}>נגישות ו/או הנגשת הדף</h2>

<p className={styles.sentence}>האחריות על נגישות ו/או הנגשת הדף היא על הלקוח בלבד</p>
<p className={styles.sentence}>הלקוח לא יבוא בטענות אל DR בכל הקשור לנגישות ו/או הנגשת הדף</p>


<h2 className={styles.subHeader}> קניין רוחני:</h2>
<p className={styles.sentence}> כל זכויות היוצרים והקניין הרוחני באתר לרבות
סימני מסחר, פטנטים, לוגו, תוכן מוצע, שיטות וסודות מסחריים, בשירותים הניתנים במסגרתו ובתכני
האתר הינן של החברה בלבד ומשמשים קניינה הבלעדי. זכויות אלה חלות, בין היתר, גם על בסיסי
הנתונים באתר (לרבות רשימת הפריטים, תיאורם, עיצובם ותמונותיהם) וכן על עיצובו הגרפי של האתר,קוד המחשב של האתר וכל הקשור בהפעלתו וכן בכל מידע אחר המתפרסם ע"י החברה ו/או מטעמה – כל אלה יוגדרו להלן: "הזכויות המוגנות".</p>

<p className={styles.sentence}> אין להעתיק, לשכפל, לשנות, לפרסם, לשווק, להפיץ, להציג בפומבי, לבצע בפומבי, לשדר, להעביר
לציבור או להעמיד לרשותו, לעבד, ליצור או לעבד יצירות נגזרות, למכור או להשכיר את הזכויות
המוגנות ו/או לתרגם מידע כלשהוא מהאתר (לרבות סימני מסחר, תמונות, טקסטים, עיצוב וכיו"ב)
כולן או חלקן, בין ע"י המשתמש ובין באמצעות ו/או בשיתוף צד שלישי, בכל דרך או אמצעי - בין אם
אלקטרוניים, ממוחשבים, מכאניים, אופטיים, אמצעי צילום או הקלטה, או בכל אמצעי ודרך אחרים או
שילוב של אמצעים.</p>
<p className={styles.sentence}> אין למנות או להסביר את המידע המפורסם באתר ו/או לשייך או לשדר אל האתר כל מידע, פרסומים
ואירועים אחרים באתר אחר או בתקשורת אחרת, בכל אמצעי או בדרך שהיא.</p>
<h2 className={styles.subHeader}> אחריות ושיפוי:</h2>
<p className={styles.sentence}>  השימוש באתר נעשה באחריותו המלאה של המשתמש.</p>
<p className={styles.sentence}>לא תהא למשתמש באתר כל טענה ו/או תביעה ו/או דרישה כלפי החברה בקשר עם האתר, השירותים
הניתנים במסגרתו או תכניו. מבלי לגרוע מכלליות האמור, הרי שהחברה לא תישא בכל אחריות שהיא
לתכני המשתמשים, לרבות שימוש שיעשה בהם בידי צדדים שלישיים (אם בכלל).</p>
<p className={styles.sentence}>החברה אינה מתחייבת, כי תכני האתר (לרבות תכני המשתמשים) יהיו מלאים, נכונים, חוקיים,
מדויקים או יהלמו את ציפיות ו/או דרישות המשתמשים.</p>
<p className={styles.sentence}>החברה לא תישא באחריות כלשהי בגין תכני האתר ו/או שימוש בהם ו/או הסתמכות עליהם, וקוראת
למשתמשים לאמת את דיוקו והאמיתות של כל מידע המתפרסם באתר טרם עשיית כל שימוש בו.
מובהר, למען הסר ספק, כי תכני האתר אינם משום תחליף לייעוץ ו/או לטיפול מקצועי במקום בו הם
נדרשים.</p>


        <h2 className={styles.subHeader}>זמני ייצור:</h2>
        <p className={styles.sentence}>במידה ויש צורך בהארכת זמן הייצור, בעל החברה יעדכן אותך על כך מראש .</p>
        
        <p className={styles.sentence}>במידה והלקוח מאחר בזמני הסיפוק של חומרי הגלם (תמונות וכו..) זמן הסיפוק של דף הנחיתה יתעכב בהתאם  .</p>
        <p className={styles.sentence}>במידה והפגישה נדחית/מתבטלת , כמוה גם תאריך סיפוק המוצר ללקוח עד לתאריך הבא שייקבע.</p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.subHeader}>זכויות יוצרים:</h2>
        <p className={styles.sentence}>כל הזכויות לעיצוב האתר, קובצי הקוד, והתוכן ישארו בבעלותו המלאה של בעל העסק.</p>
        <p className={styles.sentence}>אין להעתיק, לשכפל או להשתמש בכל דרך אחרת בחומר הנוצר ללא אישור כתוב מבעל העסק.</p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.subHeader}>תשלום:</h2>
        <p className={styles.sentence}>תשלום יתבצע על-פי הסכום הסופי שנקבע מראש.</p>
        <p className={styles.sentence}>התשלום יתבצע בכפוף למקדמה סמלית / תשלום מראש או לפי הסכמת הצדדים.</p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.subHeader}>שימור וגיבוי:</h2>
        {/* <p className={styles.sentence}> אנו לא אחראיים לאובדן מידע או נזק שיגרם לאתר אחרי מסירתו.</p> */}
        <p className={styles.sentence}>  אנו לא אחראיים לתחזוק האתר ושינויים בו לאחר מסירתו , אלא אם כן הלקוח רכש חבילת תחזוק והיא עדיין בתוקפה ( לא ניצל את כל השינויים שרכש או שנשאר לו זמן עבודה שרכש)</p>
        {/* <p className={styles.sentence}> אנו לא אחראיים לתחזוק האתר לאחר שהלקוח סיים את מכסת השינויים בחבילת תחזוק האתר (אלא אם כן הוא חידש אותה שוב).</p> */}
        <p className={styles.sentence}>כמות השינויים בחבילת התחזוק תהיה כתובה והלקוח יוודע בכל עת כמה שינויים נותרו לו לבצע ,כמה הוא ניצל / כמה זמן עבודה נשאר לו.</p>
        <p className={styles.sentence}>במסגרת תהליך העבודה - מרגע סיום הסקיצה הראשונית - הלקוח מקבל זמן מוקצב לשינויים ותיקונים חינמים שבו הוא אוסף את כל השינויים והתיקונים שעולים לו מהסקיצה - לאחר מכן מתבצע סשן מרוכז של תיקונים ושיוניים ובסיום הסשן - הדף יעלה לאויר ושינויים נוספים יתומחרו לפי שעת עבודה</p>
        <p className={styles.sentence}>כל השינויים והתחזוקה של העמוד מתבצעת ע''י בונה הדף וללקוח אין גישה לקוד באף נקודת זמן לאורך התהליך</p>
        <p className={styles.sentence}>השינויים כוללים מלל,צבעים ותמונות</p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.subHeader}>מדיניות פרטיות:</h2>
        <p className={styles.sentence}>אנו מכבדים את פרטיותכם ומתחייבים לשמור על המידע האישי שלכם.</p>
        
        <h3 className={styles.subHeader}>איסוף מידע:</h3>
        <p className={styles.sentence}>אנו אוספים מידע אישי שאתם מספקים לנו באופן וולנטרי באמצעות טפסי יצירת קשר ולידים באתר, כגון: שם, כתובת אימייל, מספר טלפון והודעות שאתם שולחים אלינו.</p>
        
        <h3 className={styles.subHeader}>שימוש במידע:</h3>
        <p className={styles.sentence}>אנו משתמשים במידע שאתם מספקים למטרות הבאות: יצירת קשר איתכם לפי בקשתכם, מתן מידע על שירותינו, טיפול בפניותיכם ושיפור השירות.</p>
        
        <h3 className={styles.subHeader}>Google Analytics:</h3>
        <p className={styles.sentence}>האתר משתמש ב-Google Analytics לצורך ניתוח ושיפור חווית המשתמש. Google Analytics אוסף מידע אנונימי על התנהגות המשתמשים באתר, לרבות דפים שנצפו, זמן שהייה ונתוני גלישה נוספים.</p>
        <p className={styles.sentence}>המידע שנאסף על ידי Google Analytics אינו מזהה אותכם אישית. לפרטים נוספים על מדיניות הפרטיות של גוגל, בקרו בכתובת: https://policies.google.com/privacy</p>
        
        <h3 className={styles.subHeader}>שמירה על המידע:</h3>
        <p className={styles.sentence}>אנו נוקטים באמצעי זהירות סבירים כדי להגן על המידע האישי שלכם מפני גישה לא מורשית, שינוי, גילוי או השמדה.</p>
        
        <h3 className={styles.subHeader}>העברת מידע לצדדים שלישיים:</h3>
        <p className={styles.sentence}>אנו לא מוכרים, משתפים או מעבירים את המידע האישי שלכם לצדדים שלישיים, פרט למקרים הנדרשים על פי חוק.</p>
        
        <h3 className={styles.subHeader}>זכויות המשתמש:</h3>
        <p className={styles.sentence}>יש לכם הזכות לדעת איזה מידע אישי אנו מחזיקים עליכם, לבקש עדכון או מחיקה של המידע, ולהתנגד לעיבוד המידע לצרכים מסוימים.</p>
        
        <h3 className={styles.subHeader}>עדכון מדיניות הפרטיות:</h3>
        <p className={styles.sentence}>אנו שומרים לעצמנו את הזכות לעדכן מדיניות פרטיות זו מעת לעת. שינויים יפורסמו באתר ויכנסו לתוקף מיד עם פרסומם.</p>
        
        <h3 className={styles.subHeader}>יצירת קשר:</h3>
        <p className={styles.sentence}>לשאלות או בקשות בנושא מדיניות הפרטיות, ניתן לפנות אלינו באמצעות פרטי ההתקשרות באתר.</p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.subHeader}>אחריות:</h2>
        <p className={styles.sentence}> אחריותנו המלאה תהיה עד לסיום תהליך הספק ומסירת האתר.</p>
        <p className={styles.sentence}> אין לנו אחריות לנזקים שייגרמו על-ידי שימוש שלא יתאים להסכם זה.</p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.subHeader}>סיום ההסכם:</h2>
        <p className={styles.sentence}>כאשר האתר נמסר ללקוח והתשלום הוסדר, הסכם זה יחשב כסגור ונסגר.</p>
      </section>
      <NavLink className={styles.back} to="/"  onClick={handleNavigateHome}>חזרה לעמוד הראשי</NavLink>
    </div>
  
}

export default Takanon;