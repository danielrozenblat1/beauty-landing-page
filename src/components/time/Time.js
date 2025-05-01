import React, { useEffect, useRef } from 'react';
import styles from './Time.module.css';
import { Player } from '@lordicon/react';
import cold from "../../icons/wired-lineal-19-magnifier-zoom-search-hover-spin.json";
import course from "../../icons/wired-lineal-950-attract-customers-hover-pinch.json";
import coins from "../../icons/wired-lineal-101-price-tag-dollar-hover-flutter.json";
import vip from "../../icons/wired-lineal-1353-membership-vip-card-hover-pinch.json";
import tadmit from "../../icons/wired-lineal-187-suitcase-morph-open.json";
import training from "../../icons/wired-lineal-2612-training-hover-pinch (1).json"
import book from "../../icons/wired-lineal-2167-books-course-assign-hover-pinch.json"
import online from "../../icons/wired-lineal-2258-online-learning-hover-pinch.json"
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
    brand: cold,
    digital: online,
    marketing: vip,
    image: coins,
    value: cold,
  };

  const handleComplete = (ref) => {
    setTimeout(() => {
      ref?.current?.playFromBeginning();
    }, 2500);
  };

  useEffect(() => {
    // Play all animations on initial load
    Object.values(playerRefs).forEach((ref) => {
      ref?.current?.playFromBeginning();
    });

    // Set up Intersection Observer for scroll reveal animations
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

    // Observe all items that should have reveal animation
    const revealables = document.querySelectorAll(`.${styles.needsItemWrapper}, .${styles.needsTitle}`);
    revealables.forEach((el) => observer.observe(el));

    // Clean up observer on component unmount
    return () => observer.disconnect();
  }, []);

  const texts = [
    "אם יש לך קורס קיים ומתפספסות לך 2-3 מתעניינות בחודש שיכלו להפוך ללקוחות",
    "אם את מתכננת להשיק קורס חדש ורוצה שהמכירה תתחיל עוד לפני שאת מרימה שיחה למתעניינות.",
    "אם השאלה הראשונה שאת שומעת ממתעניינות היא \"כמה זה עולה?\" – במקום \"איך מצטרפים?\"",
    "אם את מרגישה שהתדמית שלך לא משקפת את המוצר/שירות שלך",
    "אם את רוצה להתחיל למכור את השירותים שלך במחירי פרימיום ולא במחירי השוק",
    "אם את רוצה להתחיל להיתפס כמותג בתחום שלך",
    "אם את עומדת להשיק קורס דיגיטלי ורוצה שהוא אשכרה יימכר!",
    "אם את עייפה מלהסביר שוב ושוב מה מיוחד בשירות שלך – ורוצה שדף אחד יעשה את זה במקומך."
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