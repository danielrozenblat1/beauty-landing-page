import FAQItem from "../components/questions/Questions";
import styles from "./SecondScreen.module.css";
import { Heart, Award, BookOpen, Target, Calendar } from "lucide-react";

const SecondScreen = () => {
  return <>
  
  <div className={styles.title}>שאלות נפוצות</div>
  <FAQItem 
          question="מה זה דף נחיתה?" 
          answer="דף נחיתה זה אתר אינטרנטי לכל דבר, כשמו כן הוא - דף. הדף הזה זמין 24/7 לכל מתעניינ/ת שמחפש לשמוע עוד על השירות שלך וברגע שמשתמשים בו נכון הוא פשוט הופך להיות מכונה של כסף (והחבר הכי טוב שלך)!"
        />
        <FAQItem 
          question="איך דף נחיתה חוסך לי זמן?" 
          answer="את לא זמינה כרגע? המתעניינים יכולים לקבל את המידע שהם רוצים לקבל בדף הנחיתה! שיווקת פוסט בממומן? את יכולה להניע את המתעניינים ישירות לדף נחיתה ולהעביר אותם את התהליך שאת רוצה שהם יעברו! בנוסף, דף נחיתה מסנן לך אנשים פחות רציניים שמעוניינים לשמוע רק מחיר ואת תעלי לשיחה רק עם הרציניים יותר! בקיצור במצטבר הוא חוסך לך כמה שעות טובות בחודש שכרגע נשרפות ויכולות להפוך לעבודה על העסק "
        />
        <FAQItem 
          question="איך אתה יודע מה לכתוב בדף הנחיתה?" 
          answer="לאורך התהליך איתי אני מוציא ממך את המידע המקצועי, את המסרים שאת רוצה להעביר, את נקודת המבט שלך על קהל היעד ואת החוויות שלך ממנו בשיחות ומשלב אותם בדף"
        />
        <FAQItem 
          question="האם עסק בתחילת דרכו צריך דף נחיתה?" 
          answer="בהחלט! דף נחיתה הוא השקעה חכמה שמחזירה את עצמה במהירות. הדף עוזר לך לבנות ולבסס אמון, לייצר לידים איכותיים יותר ומאפשר לך להתחרות בשוק באופן מקצועי מהיום הראשון"
        />
        <FAQItem 
          question="איך אתה ממליץ להשתמש בדף הנחיתה?" 
          answer="מומלץ לשלב את הדף בכל נקודות המגע עם לקוחות - בביו באינסטגרם, בהודעות אוטומטיות בווצאפ, בקמפיינים ממומנים ובכל תקשורת עם לקוחות פוטנציאליים. זה מאפשר להם להכיר אותך ואת העסק עוד לפני השיחה הראשונה"
        />
        <FAQItem 
          question="לאיזה תחומים אתה בונה דפי נחיתה ואתרי תדמית?" 
          answer="אני בונה דפי נחיתה ואתרי תדמית לכל תחום עסקי. אני באמת מאמין שסוג העסק לא משנה, אלא איך אתה מציג אותו, התהליך איתי מאפשר לי ולך להבין במה להתמקד בדף, איך להציג את הדברים ואיך ״להזיז״ את קהל היעד שלך - ואם נסכם - אם העסק שלך הוא לא מתחום הביוטי תשאירי פרטים ונראה אם ואיך אני אוכל לעזור"
        />
        <FAQItem 
          question="מה ההבדל בין דף נחיתה לאתר תדמית?" 
          answer="דף נחיתה הוא אתר של עמוד אחד ואתר תדמיתי מורכז ממספר עמודים - רוב העסקים הקטנים יצטרכו דף, אלא אם יש להם כמות רחבה של שירותים שדורשת התייחסות רחבה לכל שירות ושמכילה קהלי יעד שונים לכל שירות"
        />

        <FAQItem 
          question="עד היום הסתדרתי בלי דף נחיתה, למה שאצטרך אחד?" 
          answer="השאלה היא לא אם הסתדרת, אלא כמה הזדמנויות עסקיות פספסת בדרך. דף נחיתה מקצועי יכול להגדיל משמעותית את ההמרות שלך, לחסוך עבורך זמן ולשפר את התדמית העסקית שלך בשוק התחרותי של היום"
        />
        <FAQItem 
          question="אני עובדת במשרה נוספת - האם אני עדיין צריכה תדמית דיגיטלית?" 
          answer="דווקא כשאת עובדת במשרה נוספת, תדמית דיגיטלית חזקה היא קריטית. היא עובדת בשבילך 24/7, מספקת מידע ללקוחות פוטנציאליים גם כשאת לא זמינה, ומייצרת הזדמנויות עסקיות באופן אוטומטי - אבל, כל מקרה לגופו - תשאירי לי פרטים ואדע יותר טוב להבין את המצב שלך"
        />
  </>
};

export default SecondScreen;