import FormScreen from "../components/formScreen/FormScreen";
import styles from "./FirstScreen.module.css";
import { Player } from "@lordicon/react";
import call from "../icons/wired-outline-23-smartphone-ring-hover-phone-ring (1).json";
import price from "../icons/wired-outline-2912-price-up-hover-pinch (1).json";
import talk from "../icons/wired-outline-2177-infinity-sign-hover-draw (1).json";
import { useRef, useEffect, useState } from "react";
import ScrollReveal from "scrollreveal";
import daniel from "../images/דניאל רוזנבלט ביוטי.png";

const FirstScreen = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [offset, setOffset] = useState(0);
    const [imageLoaded, setImageLoaded] = useState(false);

    const playerRef1 = useRef(null);
    const playerRef2 = useRef(null);
    const playerRef3 = useRef(null);

    const handleComplete = () => {
        setTimeout(() => {
            playerRef1?.current?.playFromBeginning();
            playerRef2?.current?.playFromBeginning();
            playerRef3?.current?.playFromBeginning();
        }, 2500);
    };

    useEffect(() => {
        playerRef1?.current?.playFromBeginning();
    }, []);

    useEffect(() => {
        const handleMouseMove = e => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };
        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            setOffset(window.pageYOffset);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        ScrollReveal().reveal(`.${styles.introHeader}`, {
            duration: 1000,
            distance: "30px",
            origin: "top",
            easing: "ease-out",
            reset: false,
            viewFactor: 0.2,
            delay: 200,
            scale: 1
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
            scale: 1
        });

        ScrollReveal().reveal(`.${styles.heroImageContainer}`, {
            duration: 1200,
            distance: "50px",
            origin: "bottom",
            easing: "ease-out",
            reset: false,
            viewFactor: 0.1,
            delay: 600,
            scale: 0.95
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
            scale: 1
        });

        ScrollReveal().reveal(`.${styles.ctaButton}`, {
            duration: 1000,
            distance: "20px",
            origin: "bottom",
            easing: "ease-out",
            reset: false,
            viewFactor: 0.2,
            delay: 1200,
            scale: 0.9
        });
    }, []);

    return (
        <div className={styles.container}>
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

            <div className={styles.introHeader}>
                <div className={styles.introText}>
                    <p className={styles.introDescription}>
                                            נמאס לך לקבל פניות שקשורות רק למחיר ולהרגיש שהתדמית שלך ברשת עדיין לא משקפת את המקצועיות והשירות שלך?
                    </p>
                </div>
            </div>

            <div className={styles.title}>
                הגיע הזמן לדף נחיתה שהופך אותך מ"עוד אופציה"
                <span className={styles.bold}>למותג עם יומן מלא</span>
            </div>

            <div className={styles.heroImageContainer}>
                <div
                    className={styles.imagePlaceholder}
                    style={{ opacity: imageLoaded ? 0 : 1 }}
                />
                <img
                    src={daniel}
                    alt="דניאל רוזנבלט והלקוחות"
                    className={styles.heroImage}
                    style={{
                        transform: `translateY(${offset * 0.2}px)`,
                        opacity: imageLoaded ? 1 : 0
                    }}
                    onLoad={() => setImageLoaded(true)}
                />
            </div>

            <FormScreen />
        </div>
    );
};

export default FirstScreen;
