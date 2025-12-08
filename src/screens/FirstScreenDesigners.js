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
const FirstScreenDesigners = () => {
    // עבור הגרדיאנט המרחף
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    // עבור אפקט הפרלקס
    const [offset, setOffset] = useState(0);
    
    // עבור טעינת התמונה
    const [imageLoaded, setImageLoaded] = useState(false);
    
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
    
    // אנימציות ScrollReveal בלבד - ללא כפילויות
    useEffect(() => {
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
            origin: "top",
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
            <div className={styles.introHeader}>
                <div className={styles.introText}>
                    <p className={styles.introDescription}>אם את מעצבת פנים או אדריכלית ונמאס לך לראות מתחרות צעירות ממך מקבלות פרוייקטים בדיגיטל בזמן שאת מתבססת רק על פניות מפה לאוזן - <strong> הדף הזה בשבילך </strong></p>
                </div>
            </div>
            
            {/* Title */}
            <div className={styles.title}>
                דף נחיתה שיעזור לך לסגור פרוייקטים מהדיגיטל <span className={styles.bold}>בכל חודש מחדש</span> ולהצטייר כמותג בתחום שלך
            </div>
            
            {/* Hero Image with Placeholder */}
            <div className={styles.heroImageContainer}>
                {/* Placeholder - אותה תמונה עם opacity 0 ששומרת על המקום */}
                <img 
                    src={daniel} 
                    alt="" 
                    className={styles.imagePlaceholder}
                />
                <img 
                    src={daniel} 
                    alt="דניאל רוזנבלט והלקוחות" 
                    className={`${styles.heroImage} ${imageLoaded ? styles.imageVisible : ''}`}
                    style={{ transform: `translateY(${offset * 0.2}px)` }}
                    onLoad={() => setImageLoaded(true)}
                />
            </div>
            <FormScreen/>
        </div>
    </>
}

export default FirstScreenDesigners