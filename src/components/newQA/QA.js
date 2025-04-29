import React, { useState } from 'react';
import styles from './QA.module.css';

const CollapsibleBox = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleBox = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles.container}>
      <div 
        className={`${styles.questionBox} ${isOpen ? styles.open : ''}`} 
        onClick={toggleBox}
      >
        <div className={styles.iconContainer}>
          {isOpen ? (
            <svg width="16" height="16" viewBox="0 0 24 24" className={styles.icon}>
              <rect x="5" y="11" width="14" height="2" rx="1" fill="#4b2a82" />
            </svg>
          ) : (
            <svg width="16" height="16" viewBox="0 0 24 24" className={styles.icon}>
              <rect x="5" y="11" width="14" height="2" rx="1" fill="#4b2a82" />
              <rect x="11" y="5" width="2" height="14" rx="1" fill="#4b2a82" />
            </svg>
          )}
        </div>
        <div className={styles.questionText}>{question}</div>
        <div className={styles.purpleCircle}></div>
      </div>
      
      {isOpen && (
        <div className={styles.answerBox}>
          <div className={styles.answerText}>
            {answer}
          </div>
        </div>
      )}
    </div>
  );
};
// Example usage component
const CollapsibleBoxDemo = () => {
  return (
    <div className={styles.demoContainer}>
      <CollapsibleBox 
        question="מהי חשיבות השימוש באקורדיון במערכות מידע?"
        answer="אקורדיון מאפשר להציג מידע רב באופן מדורג וממוקד, תוך שמירה על חוויית משתמש נקייה ונגישה. הצגת מידע בשלבים מסייעת למשתמש להתמקד במידע הרלוונטי עבורו ומפחיתה עומס קוגניטיבי. בנוסף, עיצוב מותאם של אקורדיון יכול להדגיש את המותג ולהעניק למשתמש חוויה ייחודית."
      />
      
      <CollapsibleBox 
        question="מהם היתרונות של עיצוב מינימליסטי?"
        answer="עיצוב מינימליסטי מדגיש את התוכן החשוב באמת, מפחית הסחות דעת ומאפשר למשתמש להתמקד במידע המרכזי. עיצוב כזה מקל על הניווט באתר, משפר את מהירות הטעינה ותורם לחוויית משתמש חלקה ואינטואיטיבית. בנוסף, עיצוב מינימליסטי מעניק מראה מודרני, מקצועי ועל-זמני."
      />
    </div>
  );
};

export default CollapsibleBoxDemo;