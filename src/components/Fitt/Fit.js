import React, { useState, useEffect } from 'react';
import { ChevronLeft, Sparkles, Calendar, PenTool, Heart, DollarSign, Users, ShoppingBag } from 'lucide-react';
import styles from './Fit.module.css';

const LandingSection = () => {
  const [visible, setVisible] = useState({});
  const [darkMode, setDarkMode] = useState(true);
  
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setVisible(prev => ({ ...prev, [entry.target.id]: true }));
        }
      });
    }, { threshold: 0.1 });

    const elements = document.querySelectorAll('.observe');
    elements.forEach(el => observer.observe(el));

    return () => {
      elements.forEach(el => observer.unobserve(el));
    };
  }, []);

  // איך נדע אם צריך דף נחיתה
  const needLandingPageItems = [
    {
      id: 'beauty',
      text: 'את מעבירה קורסים בתחום הביוטי',
      icon: <PenTool className={styles.itemIcon} />
    },
    {
      id: 'price',
      text: 'את מרגישה שהמתעניינות נעלמות לך ברגע שהן שומעות מחיר',
      icon: <DollarSign className={styles.itemIcon} />
    },
    {
      id: 'calendar',
      text: 'היומן שלך עדיין לא מלא',
      icon: <Calendar className={styles.itemIcon} />
    },
    {
      id: 'value',
      text: 'את מרגישה שהמוצר שלך שווה יותר',
      icon: <ShoppingBag className={styles.itemIcon} />
    },
    {
      id: 'appearance',
      text: 'את מרגישה שהמעטפת שלך לא נראית מספיק מושכת',
      icon: <Heart className={styles.itemIcon} />
    },
    {
      id: 'inquiries',
      text: 'את מקבלת פניות שלרוב קשורות במחיר',
      icon: <Users className={styles.itemIcon} />
    }
  ];

  return (
    <div className={`${styles.container} ${darkMode ? styles.containerDark : ''}`}>
      <div className={styles.sparklesContainer}>
        <Sparkles className={styles.sparklesIcon} />
      </div>
      
      <div 
        id="title" 
        className={`${styles.title} ${darkMode ? styles.titleDark : ''} observe ${visible['title'] ? styles.visible : styles.fadeIn}`}
      >
        איך אני יודעת אם אני צריכה <span className={`${styles.bold} ${darkMode ? styles.boldDark : ''}`}>דף נחיתה</span> לעסק?
      </div>
      
      <div 
        id="description" 
        className={`${styles.description} ${darkMode ? styles.descriptionDark : ''} observe ${visible['description'] ? styles.visible : styles.fadeIn}`}
      >
        <span className={`${styles.glowing}`}>את צריכה דף נחיתה אם:</span>
      </div>
      
      <div className={styles.itemsContainer}>
        {needLandingPageItems.map((item, index) => (
          <div 
            key={item.id}
            id={item.id}
            className={`${styles.item} ${darkMode ? styles.itemDark : ''} observe ${styles.glassEffect} ${visible[item.id] ? styles.visible : styles.fadeIn}`}
            style={{ animationDelay: `${index * 0.15}s` }}
          >
            <div className={styles.iconWrapper}>
              {item.icon}
            </div>
            <div className={styles.itemText}>{item.text}</div>
            <div className={styles.hoverGlow}></div>
          </div>
        ))}
      </div>
      
      <div 
        id="cta"
        className={`${styles.ctaButton} ${darkMode ? styles.ctaButtonDark : ''} observe ${visible['cta'] ? `${styles.visible} ${styles.pulse}` : styles.fadeIn}`}
      >
        אני רוצה דף נחיתה מושלם
        <ChevronLeft className={styles.arrowIcon} />
      </div>
      
      <div className={styles.glowCircle}></div>
      <div className={styles.glowCircle2}></div>
    </div>
  );
};

export default LandingSection;