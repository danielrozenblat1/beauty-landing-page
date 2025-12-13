import FormScreen from "../components/formScreen copy/FormScreen";
import styles from "./FirstScreenHook.module.css";
import { useEffect, useState } from "react";
import ScrollReveal from "scrollreveal";

const FirstScreenHook = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = e => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };
        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
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

        ScrollReveal().reveal(`.${styles.headline}`, {
            duration: 1000,
            distance: "30px",
            origin: "top",
            easing: "ease-out",
            reset: false,
            viewFactor: 0.2,
            delay: 400,
            scale: 1
        });

        ScrollReveal().reveal(`.${styles.if}`, {
            duration: 1000,
            distance: "30px",
            origin: "bottom",
            easing: "ease-out",
            reset: false,
            viewFactor: 0.2,
            interval: 200,
            delay: 600,
            scale: 1
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
                    <p className={styles.painPoint}>
                        נמאס לך לקבל פניות שקשורות רק במחיר ולהרגיש שהתדמית שלך ברשת עדיין לא משקפת את המקצועיות והשירות שלך?
                    </p>
                </div>
            </div>

            <h1 className={styles.headline}>
                הדרך להפוך מ<span className={styles.strikethrough}>"עוד אופציה"</span> ל<span className={styles.underlined}>בחירה הראשונה של כל מתעניין</span>
            </h1>

            <div className={styles.ifContainer}>
                <div className={styles.ifRow}>
                    <div className={styles.if}>בלי להוזיל מחירים</div>
                    <div className={styles.if}>בלי לרדוף אחרי לקוחות</div>
                </div>
                <div className={styles.ifSingle}>
                    <div className={styles.if}>גם אם יש לך המון מתחרות</div>
                </div>
            </div>

            <FormScreen />
        </div>
    );
};

export default FirstScreenHook;