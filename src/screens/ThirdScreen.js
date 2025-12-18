import { useState } from "react"
import YouTubeShortsCarousel from "../components/shorts/Shorts"
import styles from "./ThirdScreen.module.css"
import WorksCarousel from "../components/works/Works"
import Works from "../components/recommends/Works";
import FormScreen from "../components/formScreen/FormScreen";
import Showcase from "../components/ShowCases/ShowCases";
import silvi from "../images/סילביה מור שואוקייס.png"
import natali from "../images/נטלי שוורץ שואוקייס.png"

const ThirdScreen = () => {
    const [showAllShowcases, setShowAllShowcases] = useState(false);
    
    const shortsIds = [
        'bT61COiNKGM',
        '31ehauP2cRE',
        'r84l5ZllT_o',
        'YXu98G7U_vk',
        'Bp_iINog5kg',
        'A0E6G1MIWrU',
        'xqOb0FGbeJo',
        'udpA5LMr-Xc',
        'iOev0zVeO0Y',
        'hE5VR1w_8OE',
        'UoWR9wm1NeU',
        'C2RHk3Tbslw'
    ];

    const handleContactClick = () => {
        const formElement = document.getElementById('טופס');
        if (formElement) {
            const offsetPosition = formElement.offsetTop - 100;
            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    };

    return (
        <>
            {/* <div className={`${styles.title} ${styles.fadeInElement}`}>
                <span className={styles.bold}>לפני הכללל, התוצאות של הלקוחות</span>
            </div> */}

            {/* <Showcase
                clientName="שלי מאיר"
                clientDescription="קורסים לאיפור קבוע | טיפולי איפור קבוע"
                additionalText="שלי פנתה אלי כדי לשים יותר פוקוס על הקורסים שלה וכדי שהתדמית שלה תשקף למתעניינות את השירות שהיא משקיעה בו כל כך.. והתוצאה?"
                metric1Value={15}
                metric1="%"
                metric1Label="עלייה במחיר הקורס"
                metric2Value={5}
                metric2="x"
                youtubeShortId="r84l5ZllT_o"
                additionalResult="כמה מילים משלי.."
                metric2Label="על ההשקעה על הדף בחודש הראשון!"
                showcaseImage="/images/showcase.jpg"
            />

            <Showcase
                clientName="אנסטסיה טלן חכים"
                clientDescription="מאפרת כלות | מעבירה השתלמויות למאפרות | מאסטרקלאסים וקורסים דיגיטלים"
                additionalText="אנסטסיה פנתה אלי לגבי דף לקורס הדיגיטלי הראשון שהיא הוציאה, מיותר לומר שההשקעה על הקורס חזרה פי כמה וכמה.. מאז יצאו עוד קורסים דיגיטלים, השירותים התרחבו ואנסטסיה המשיכה איתי ל-3 דפים נוספים!"
                metric1Value={2}
                metric1=""
                metric1Label="דפים מכניסים לאנסטסיה הכנסה פסיבית על המוצרים הדיגיטלים שלה"
                metric2Value={4}
                additionalResult="כמה מילים מאנסטסיה.."
                metric2="x"
                youtubeShortId="31ehauP2cRE"
                metric2Label="החזר השקעה על הדפים בשנה הראשונה"
                showcaseImage="/images/showcase.jpg"
            />

         

            {!showAllShowcases && (
                <button 
                    className={styles.ctaButton}
                    onClick={() => setShowAllShowcases(true)}
                >
                    לעוד תוצאות לחצו כאן
                </button>
            )}

            {showAllShowcases && (
                <>
                    <Showcase
                        clientName="נטלי שוורץ"
                        clientDescription="ניהול סושיאל | ימי צילום"
                        additionalText="נטלי הגיעה אלי דרך המלצה ואמרה לי : ״בניתי כבר דף נחיתה בעצמי, ראיתי עבודות שלך והבנתי שאני צריכה אותך״ נטלי נכנסה אלי לתהליך של דף נחיתה + פגישת ייעוץ וליווי.. והתוצאה?: "
                        metric1Value={200}
                        metric1="%"
                        metric1Label="עלייה בריטיינר החודשי של נטלי"
                        metric2Value={2.5}
                        metric2="x"
                        metric2Label="על ההשקעה על הדף בחודש הראשון!"
                        showcaseImage={natali}
                    />
                    
                    <Showcase
                        clientName="סילביה מור"
                        clientDescription="אקדמיה גבוהה לעיצוב תסרוקות"
                        additionalText="בנינו לסילביה 2 דפי נחיתה - 1 לקורס הבסיס שלה, 2 למאסטר קלאס שהרימה והתוצאות בהתאם"
                        metric1Value={100}
                        metric1Label="סולדאווט למאסטר קלאס"
                        metric2Value={50}
                        metric2="x"
                        metric1="%"
                        metric2Label="לפחות פי 50 החזר השקעה על הדף בשנה הראשונה!"
                        showcaseImage={silvi}
                    />
                </>
            )} */}

            <div className={`${styles.title} ${styles.fadeInElement}`}>
                <span className={styles.bold}>קצת ממה שיש ללקוחות שלי לומר</span>
            </div>
            
            <YouTubeShortsCarousel shortsIds={shortsIds}/>

  

            <div className={`${styles.title} ${styles.fadeInElement}`}>
                <span className={styles.bold}>מקבץ עבודות</span>
            </div>
            <div className={`${styles.description}`}>
                (תגללו הצידה)
            </div>
            
            <WorksCarousel/>
               <button 
                className={styles.contactButton}
                onClick={handleContactClick}
            >
             לשיחת התאמה אישית איתי לחצי כאן
            </button>
        </>
    )
}

export default ThirdScreen