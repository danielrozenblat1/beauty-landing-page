import FormScreen from "../components/formScreen/FormScreen"
import styles from "./FirstScreen.module.css"
// Import Lordicon - make sure you've installed the package
import { Player } from "@lordicon/react";
import call from "../icons/wired-outline-23-smartphone-ring-hover-phone-ring (1).json"
import price from "../icons/wired-outline-2912-price-up-hover-pinch (1).json"
import talk from "../icons/wired-outline-2177-infinity-sign-hover-draw (1).json"
import { useRef, useEffect, useState } from "react";
import ScrollReveal from "scrollreveal";
import daniel from "../images/דניאל רוזנבלט ביוטי.png"
import YouTubeShortsCarousel from "../components/shorts/Shorts";
import SecondScreen from "./SecondScreen";
import WorksCarousel from "../components/works/Works"
const FirstScreen = () => {
    // עבור הגרדיאנט המרחף
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    // עבור אפקט הפרלקס
    const [offset, setOffset] = useState(0);
    
    const handleComplete = () => {
        setTimeout(() => {
            playerRef1?.current?.playFromBeginning();
            playerRef2?.current?.playFromBeginning();
            playerRef3?.current?.playFromBeginning();
        }, 2500); // play again after 2.5 seconds
    };
    
    const playerRef1 = useRef(null);
    const playerRef2 = useRef(null);
    const playerRef3 = useRef(null);
    
    // אפקט התחלתי להפעלת האייקונים
    useEffect(() => {
        playerRef1?.current?.playFromBeginning();
    }, []);
    
    // מעקב אחרי מיקום העכבר עבור אפקט הגרדיאנט
    useEffect(() => {
        const handleMouseMove = (e) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };
        
        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);
    
    // מעקב אחרי גלילה עבור אפקט פרלקס
    useEffect(() => {
        const handleScroll = () => {
            setOffset(window.pageYOffset);
        };
        
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);
    
    // אנימציות ScrollReveal
    useEffect(() => {
        // הגדרת אנימציות בסיסיות
        ScrollReveal().reveal(`.${styles.introHeader}`, {
            duration: 1000,
            distance: "30px",
            origin: "top",
            easing: "ease-out",
            reset: false,
            viewFactor: 0.2,
            delay: 200,
            scale: 1,
        });
        
        ScrollReveal().reveal(`.${styles.title}`, {
            duration: 1000,
            distance: "30px",
            origin: "right",
            easing: "ease-out",
            reset: false,
            viewFactor: 0.2,
            interval: 300,
            delay: 400,
            scale: 1,
        });
        
        ScrollReveal().reveal(`.${styles.heroImageContainer}`, {
            duration: 1200,
            distance: "50px",
            origin: "bottom",
            easing: "ease-out",
            reset: false,
            viewFactor: 0.1,
            delay: 600,
            scale: 0.95,
        });
        
        ScrollReveal().reveal(`.${styles.benefitItem}`, {
            duration: 1000,
            distance: "30px",
            origin: "bottom",
            easing: "ease-out",
            reset: false,
            viewFactor: 0.2,
            interval: 200,
            delay: 800,
            scale: 1,
        });
        
        // הוספת אנימציה לכפתור CTA
        ScrollReveal().reveal(`.${styles.ctaButton}`, {
            duration: 1000,
            distance: "20px",
            origin: "bottom",
            easing: "ease-out",
            reset: false,
            viewFactor: 0.2,
            delay: 1200,
            scale: 0.9,
        });
    }, []);
    
    return <>
        <div className={styles.container}>
            {/* גרדיאנט אינטראקטיבי */}
            <div 
                className={styles.gradientBackground} 
                style={{
                    background: `radial-gradient(
                        circle at ${mousePosition.x}px ${mousePosition.y}px,
                        rgba(147, 97, 255, 0.12),
                        rgba(75, 42, 130, 0.04) 40%,
                        transparent 70%
                    )`
                }}
            />
            
            {/* Intro Header with Purple Background */}
            <div className={`${styles.introHeader} ${styles.fadeInElement}`}>
                <div className={styles.introText}>
                    <h3 className={styles.introTitle}>לאחר שליווה מאות עצמאיות בתחום הביוטי</h3>
                    <p className={styles.introDescription}>דניאל רוזנבלט מציג:</p>
                </div>
            </div>
            
            {/* Title */}
            <div className={`${styles.title} ${styles.fadeInElement}`}>
                דף נחיתה שיעזור לך למלא את היומן שלך <span className={styles.bold}>בכל חודש מחדש</span> ולהצטייר כמותג בתחום שלך
            </div>
            
            {/* Hero Image with Parallax */}
            <div className={`${styles.heroImageContainer} ${styles.fadeInElement}`}>
                <img 
                    src={daniel} 
                    alt="דניאל רוזנבלט והלקוחות" 
                    className={styles.heroImage}
                    style={{ transform: `translateY(${offset * 0.2}px)` }}
                />
            </div>
    <FormScreen/>


        </div>
       
        {/* <div className={styles.benefitsWrapper}>
                <div className={styles.benefitsContainer}>
                    <div className={`${styles.benefitItem} ${styles.fadeInElement}`}>
                        <div className={styles.benefitIconWrapper}>
                            <Player 
                                icon={price}
                                size={48}
                                ref={playerRef1} 
                                size="100%" 
                                loop={true}
                                onComplete={handleComplete}
                            />
                        </div>
                        <div className={styles.benefitText}>להתחיל לתמחר במחיר שאת רוצה לקבל</div>
                    </div>
                    <div className={`${styles.benefitItem} ${styles.fadeInElement}`}>
                        <div className={styles.benefitIconWrapper}>
                            <Player
                                icon={talk}
                                ref={playerRef2}
                                size="100%" 
                                loop={true}
                                onComplete={handleComplete}
                            />
                        </div>
                        <div className={styles.benefitText}>בלי לדבר כמו תוכי בשיחות מכירה</div>
                    </div>
                    <div className={`${styles.benefitItem} ${styles.fadeInElement}`}>
                        <div className={styles.benefitIconWrapper}>
                            <Player 
                                icon={call}
                                size={48}
                                ref={playerRef3} 
                                size="100%" 
                                loop={true}
                                onComplete={handleComplete}
                            />
                        </div>
                        <div className={styles.benefitText}>שיזכרו אותך ויחכו לשיחה ממך</div>
                    </div>
                </div>      </div> */}
      
    </>
}

export default FirstScreen