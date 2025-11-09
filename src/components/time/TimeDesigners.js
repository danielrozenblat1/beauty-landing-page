import React, { useEffect, useRef } from 'react';
import styles from './Time.module.css';
import { Player } from '@lordicon/react';
import cold from "../../icons/wired-outline-2167-books-course-assign-hover-pinch.json";
import course from "../../icons/wired-outline-2258-online-learning-hover-pinch.json";
import coins from "../../icons/wired-outline-962-social-media-marketing-hover-pinch (1).json";
import vip from "../../icons/wired-outline-2456-person-talking-hover-talking.json";
import tadmit from "../../icons/wired-outline-456-handshake-deal-hover-pinch (3).json";
import training from "../../icons/wired-outline-950-attract-customers-hover-slide (1).json";
import book from "../../icons/wired-outline-2489-ice-cube-hover-pinch.json";
import online from "../../icons/wired-outline-1027-marketing-campaign-hover-pinch.json";

const WhoDoesList = ({ isDarkMode }) => {
  const playerRefs = {
    course: useRef(null),
    launch: useRef(null),
    price: useRef(null),
    image: useRef(null),
    marketing: useRef(null),
    brand: useRef(null),
    digital: useRef(null),
    value: useRef(null),
  };

  const icons = {
    course: training,
    launch: book,
    price: coins,
    brand: tadmit,

    marketing: vip,
    image:  online,
   
  };

  const handleComplete = (ref) => {
    setTimeout(() => {
      ref?.current?.playFromBeginning();
    }, 2500);
  };

  useEffect(() => {
    Object.values(playerRefs).forEach((ref) => {
      ref?.current?.playFromBeginning();
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.visible);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    const revealables = document.querySelectorAll(`.${styles.needsItemWrapper}, .${styles.needsTitle}`);
    revealables.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const texts = [
    "את רוצה לקבל פניות חמות מהרשתות ולא להסתמך רק על הפה לאוזן",
    "רוב הפניות שמגיעות אלייך קרות, לא ממוקדות, או כאלה שלא מתאימות לרמת השירות שאת נותנת.",
    "את מרגישה שהתדמית שלך ברשת לא משקפת את הרמה שלך, את ההשקעה בפרויקטים ואת הסטנדרט שלך.",
"את רואה מעצבות אחרות עם דפי נחיתה יוקרתיים ומדויקים שמושכים אליהן לקוחות רציניים, ומבינה שזה מה שחסר לך.",
  

    "יש לך שם חזק בשטח ובין הלקוחות, אבל מי שלא מכיר אותך עדיין – לא מבין את הערך שלך מהאתר או מהרשתות.",
    
    "את רוצה שהנוכחות שלך ברשת תעבוד בשבילך – שתמשוך לקוחות מתאימים ותייצר אמון עוד לפני השיחה הראשונה."
  ];

  const keys = Object.keys(playerRefs);

  return (
    <div className={`${styles.needsContainer} ${isDarkMode ? styles.needsContainerDark : ''}`}>
      <div className={`${styles.needsList} ${isDarkMode ? styles.needsListDark : ''}`}>
        {texts.map((text, i) => (
          <div className={`${styles.needsItemWrapper}`} key={i}>
            <div className={`${styles.needsItem} ${isDarkMode ? styles.needsItemDark : ''}`}>
              <div className={styles.iconWrapper}>
                <Player
                  icon={icons[keys[i]]}
                  ref={playerRefs[keys[i]]}
                  size="100%"
                  loop={true}
                  onComplete={() => handleComplete(playerRefs[keys[i]])}
                />
              </div>
              <div className={styles.itemContent}>
                <p className={styles.itemText}>{text}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhoDoesList;
