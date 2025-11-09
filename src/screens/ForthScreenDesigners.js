import { useEffect, useRef, useState } from 'react'
import styles from "./ForthScreen.module.css"
import IconTextComponent from '../components/can/Can'
import IconTextComponentt from '../components/cann/Cann'
import FormScreen from '../components/formScreen/FormScreen'
import price from "../icons/wired-lineal-101-price-tag-dollar-hover-flutter.json"
import cold from "../icons/wired-lineal-2489-ice-cube-hover-pinch.json"
import look from "../icons/wired-outline-414-money-bag-dollar-hover-shake.json"
import book from "../icons/wired-outline-195-phone-book-contacts-hover-pinch.json"
import money from "../icons/wired-lineal-414-money-bag-dollar-hover-shake (5).json"
import hot from "../icons/wired-outline-458-goal-target-hover-hit.json"
import coins from "../icons/wired-lineal-298-coins-loop-spin (4).json"

const ForthScreenDesigners = () => {
  const containerRef = useRef(null)
  const [isDarkMode, setIsDarkMode] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.visible)
          }
        })
      },
      { threshold: 0.1 }
    )

    const handleScroll = () => {
      if (!containerRef.current) return
      const scrollPosition = window.scrollY
      const windowHeight = window.innerHeight
      const containerHeight = containerRef.current.scrollHeight
      const scrollPercentage = scrollPosition / (containerHeight - windowHeight)
      setIsDarkMode(scrollPercentage > 0.3)
    }

    window.addEventListener('scroll', handleScroll)

    const container = containerRef.current
    if (container) {
      const elementsToAnimate = container.querySelectorAll(`.${styles.fadeIn}`)
      elementsToAnimate.forEach(el => observer.observe(el))
    }

    return () => {
      window.removeEventListener('scroll', handleScroll)
      if (container) {
        const elementsToAnimate = container.querySelectorAll(`.${styles.fadeIn}`)
        elementsToAnimate.forEach(el => observer.unobserve(el))
      }
    }
  }, [])

  return (
    <div className={`${styles.container} ${isDarkMode ? styles.containerDark : ''}`} ref={containerRef}>
      <div className={`${styles.title} ${styles.fadeIn} ${isDarkMode ? styles.titleDark : ''}`}>בואי נדבר תכלס</div>

      <div className={`${styles.description} ${styles.fadeIn} ${isDarkMode ? styles.descriptionDark : ''}`}>
        דיברתי עם מאות מעצבות פנים ואדריכליות, וכולן אמרו לי אותו דבר:
      </div>

      <div className={`${styles.titlePain} ${styles.fadeIn} ${styles.whiteContainer} ${isDarkMode ? styles.whiteContainerDark : ''}`}>
        ״אני יודעת שאני באמת מקצועית, אבל אני לא מצליחה להעביר את זה בדיגיטל״
      </div>

      <div className={`${styles.description} ${styles.fadeIn} ${isDarkMode ? styles.descriptionDark : ''}`}>
        יש לך שנים של ניסיון, לימודים, פרקטיקה ואת שמה לב לפרטים שאחרים לא רואים בכלל. אבל ברשת.. הסיפור קצת אחר
      </div>

      <div className={`${styles.titlePain} ${styles.fadeIn} ${styles.whiteContainer} ${isDarkMode ? styles.whiteContainerDark : ''}`}>
        היום לצערנו זה כבר לא מספיק להיות טובה ומקצועית.. צריך גם שיראו את זה ברשת
      </div>


      <div className={`${styles.description} ${styles.fadeIn} ${isDarkMode ? styles.descriptionDark : ''}`}>
        בינתיים, אותן מעצבות ואדריכליות צעירות משקיעות בדיגיטל, משקיעות בדף נחיתה יוקרתי, וגם מתפעלות את שאר הרשתות
        ובעיני המתעניינים הן נתפסות כמו מותג!! וגם בזמן מאוד קצר!.
        זה עובד להן, כי בעידן הזה מי שנראית יוקרתית - נתפסת כיוקרתית.
      </div>

      <div className={`${styles.description} ${styles.fadeIn} ${isDarkMode ? styles.descriptionDark : ''}`}>
        אבל את, עם כל הידע, הסטנדרטים והחוויה שאת נותנת,
    עדיין לא משקיעה בנוכחות שלך בדיגיטל
      </div>

      <div className={`${styles.titlePain} ${styles.fadeIn} ${styles.whiteContainer} ${styles.bounceAnimation} ${isDarkMode ? styles.whiteContainerDark : ''}`}>
        וככה נוצר מצב ש..
      </div>

      <div className={styles.row}>
        <IconTextComponent icon={cold} text="את מקבלת פניות קרות, לא מדויקות ולא מתאימות לסגנון שלך" />
        <IconTextComponent icon={coins} text="את שומעת יותר מדי פעמים ״יקר לי״ מלקוחות שלא מבינות מה הן מקבלות וכמה את חוסכת להן" />
        <IconTextComponent icon={money} text="עד שכבר פונים אלייך, אז אלה מתעניינים עם תקציב פרוייקט שקשה לעבוד איתו" />
      </div>

      <div className={`${styles.title} ${styles.fadeIn} ${isDarkMode ? styles.titleDark : ''}`}>
        אז איך גורמים למי שצופה בך להבין שאת הבחירה הנכונה כבר מהקליק הראשון?
      </div>

      <div className={`${styles.description} ${styles.fadeIn} ${isDarkMode ? styles.descriptionDark : ''}`}>
        איך הופכים את הנוכחות שלך ברשת לשיקוף מדויק של מה שאת באמת שווה ולמשוך את הקהל שאת רוצה לעבוד איתו?
      </div>

      <div className={`${styles.titlePain} ${styles.fadeIn} ${styles.whiteContainer} ${isDarkMode ? styles.whiteContainerDark : ''}`}>
        התשובה פשוטה.
      </div>

      <div className={`${styles.description} ${styles.fadeIn} ${isDarkMode ? styles.descriptionDark : ''}`}>
        דף נחיתה שמציב אותך במקום הנכון.
        לא עוד אתר ״בסדר״ שבנית בעצמך או כרטיס ביקור חינמי,
        אלא חוויה דיגיטלית שמרגישה כמו העיצובים שלך! - מדויקת, יוקרתית, ונקייה,  אחת כזו שמעבירה את המתעניינים מסע הבנה של מה בתכלס את נותנת להם מעבר ל״עיצוב״ וכמובן, מניעה לפעולה.
      </div>
    <div className={`${styles.titlePain} ${styles.fadeIn} ${styles.whiteContainer} ${isDarkMode ? styles.whiteContainerDark : ''}`}>
     ואז..
      </div>
      <div className={styles.row}>
        <IconTextComponentt icon={look} text="את מושכת לקוחות שרוצים איכות, לא מחיר" />
        <IconTextComponentt icon={hot} text="את מקבלת פניות חמות שמגיעות כבר סגורות עלייך" />
        <IconTextComponentt icon={book} text="את שומרת על הרמה שלך גם בעולם הדיגיטלי" />
      </div>

      <div className={`${styles.titleAction} ${styles.fadeIn} ${styles.whiteContainer} ${isDarkMode ? styles.whiteContainerDark : ''}`}>
        אם את רוצה שהלקוחות ירגישו מהרגע הראשון את הרמה שלך,
        זה הזמן לבנות דף נחיתה שמוכיח את זה בלי שתצטרכי להסביר.
      </div>

      <FormScreen />
    </div>
  )
}

export default ForthScreenDesigners
