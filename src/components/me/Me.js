// Me.jsx
import React, { useEffect, useState, useRef, useCallback } from 'react';
import styles from './Me.module.css';
// import daniel from "../../images/דניאל.png" - התמונה תוחזר בשלב מאוחר יותר
import Works from "../recommends/Works";

const Me = () => {
  // State for scroll position
  const [scrollY, setScrollY] = useState(0);
  
  // Refs for all the sections we want to animate
  const headerRef = useRef(null);
  const card1Ref = useRef(null);
  const card2Ref = useRef(null);
  const card3Ref = useRef(null);
  const titleRef = useRef(null);
  const worksRef = useRef(null);
  const beautyTitleRef = useRef(null);
  const beautyCardRef = useRef(null);
  
  // Ref for main container to calculate viewport
  const containerRef = useRef(null);
  // Array to collect all cards for animation
  const cardsRefs = useRef([]);
  
  // Function to check if element is in viewport and calculate visibility percentage
  const checkVisibility = (element) => {
    if (!element) return { isVisible: false, visibilityRatio: 0 };
    
    const rect = element.getBoundingClientRect();
    const windowHeight = window.innerHeight;
    
    // Element is considered visible when at least part of it is in viewport
    const isVisible = rect.top < windowHeight && rect.bottom > 0;
    
    // Calculate how far into the viewport the element is (0 to 1)
    let visibilityRatio = 0;
    if (isVisible) {
      // When element first enters viewport from bottom
      if (rect.top > 0) {
        visibilityRatio = 1 - (rect.top / windowHeight);
      } 
      // When element is fully in viewport
      else if (rect.bottom < windowHeight) {
        visibilityRatio = 1;
      } 
      // When element is partially visible and exiting from top
      else {
        visibilityRatio = rect.bottom / windowHeight;
      }
    }
    
    return { isVisible, visibilityRatio };
  };
  
  // Add to refs collection
  const addToRefs = (el) => {
    if (el && !cardsRefs.current.includes(el)) {
      cardsRefs.current.push(el);
    }
  };

  useEffect(() => {
    // Handle scroll event
    const handleScroll = () => {
      const newScrollY = window.scrollY;
      setScrollY(newScrollY);
      
      // Apply animations to each element based on its visibility
      const elements = [
        { ref: headerRef, className: styles.headerActive },
        { ref: card1Ref, className: styles.cardActive },
        { ref: card2Ref, className: styles.cardActive },
        { ref: card3Ref, className: styles.cardActive },
        { ref: titleRef, className: styles.titleActive },
        { ref: worksRef, className: styles.worksActive },
        { ref: beautyTitleRef, className: styles.titleActive },
        { ref: beautyCardRef, className: styles.cardActive }
      ];
      
      elements.forEach(({ ref, className }) => {
        if (ref.current) {
          const { isVisible, visibilityRatio } = checkVisibility(ref.current);
          
          if (isVisible) {
            ref.current.classList.add(className);
            
            // Apply dynamic transform based on visibility ratio
            // Different elements can have different parallax rates
            if (ref === headerRef) {
              ref.current.style.transform = `translateY(${visibilityRatio * 50}px)`;
            } else if (ref === card1Ref || ref === card3Ref) {
              ref.current.style.transform = `translateY(${-visibilityRatio * 40}px)`;
              ref.current.style.opacity = Math.min(1, visibilityRatio * 2);
            } else if (ref === card2Ref) {
              ref.current.style.transform = `translateY(${-visibilityRatio * 30}px)`;
              ref.current.style.opacity = Math.min(1, visibilityRatio * 2);
            } else if (ref === titleRef || ref === beautyTitleRef) {
              ref.current.style.transform = `translateY(${-visibilityRatio * 20}px)`;
              ref.current.style.opacity = Math.min(1, visibilityRatio * 1.5);
            } else if (ref === worksRef) {
              ref.current.style.transform = `translateY(${-visibilityRatio * 25}px)`;
              ref.current.style.opacity = Math.min(1, visibilityRatio * 1.5);
            } else if (ref === beautyCardRef) {
              ref.current.style.transform = `translateY(${-visibilityRatio * 35}px)`;
              ref.current.style.opacity = Math.min(1, visibilityRatio * 2);
            }
          } else {
            // Reset element if not visible
            if (!ref.current.classList.contains(className)) {
              ref.current.style.opacity = 0;
            }
          }
        }
      });
    };
    
    // Initial check
    handleScroll();
    
    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);
    
    // Clean up
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={styles.container} ref={containerRef}>
      {/* Parallax background */}
      <div className={styles.parallaxBackground}></div>
      
      {/* Floating background elements that move at different speeds */}
      <div className={styles.floatingShapes}>
        {Array.from({ length: 12 }).map((_, index) => (
          <div 
            key={index}
            className={`${styles.shape} ${styles[`shape${index + 1}`]}`} 
            style={{ 
              transform: `translate(${scrollY * (0.03 + index * 0.01) * (index % 2 ? 1 : -1)}px, 
                          ${scrollY * (0.05 + index * 0.008) * (index % 3 ? 1 : -1)}px) 
                          rotate(${scrollY * 0.02 * (index % 2 ? 1 : -1)}deg)`,
            }}
          ></div>
        ))}
      </div>
      
      {/* Header with parallax effect */}
      <header className={styles.header} ref={headerRef}>
        <h1 className={styles.title}>
          אזזז.. מי אני?
          <span className={styles.titleAccent}></span>
        </h1>
      </header>
      <p className={styles.title}>
       דניאל רוזנבלט
            </p>
      {/* Content container */}
      <div className={styles.contentContainer}>
        {/* About Section */}
        <section className={styles.section}>
          <div 
            className={`${styles.card} ${styles.cardRight}`}
            ref={(el) => { card1Ref.current = el; addToRefs(el); }}
          >
            
            <div className={styles.cardDecoration}></div>
       
            <p className={styles.text}>
              מגיל מאוד קטן עניין אותי לדעת איך אנשים מצליחים לשכנע אחרים לפעול, איך להגיד את 
              המשפט הנכון שיגרום לבן אדם בצד השני להפתח אלי ולשתף אותי יותר ואיך לגרום לאנשים לסמוך עלי (כי זה תמיד היה עובד עלי).
            </p>
          </div>

          <div 
            className={`${styles.card} ${styles.cardLeft}`}
            ref={(el) => { card2Ref.current = el; addToRefs(el); }}
          >
            <div className={styles.cardDecoration}></div>
            <p className={styles.text}>
              כל החיים סללתי את המסלול שלי להייטק עד שהשתחררתי והכל השתנה - עולם העסקים מצא אותי בדרך לא דרך ומפה לשם - פשוט התאהבתי במשחק.
            </p>
          </div>

          <div 
            className={`${styles.card} ${styles.highlightCard}`}
            ref={(el) => { card3Ref.current = el; addToRefs(el); }}
          >
            <div className={styles.shineEffect}></div>
            <div className={styles.cardDecoration}></div>
            <p className={styles.text}>
              הבנתי שזה לא משנה מה סוג העסק שלך - אלא <span className={styles.bold}>איך אתה מציג אותו</span> ופיצחתי את השיטה שעד היום עזרה ללקוחות שלי להכניס מעל ל<span className={styles.bold}>1,000,000 שקלים</span> במצטבר מדפי הנחיתה שלהן.
            </p>
          </div>
        </section>

        {/* Testimonials Title */}
        <h2 
          className={styles.sectionTitle}
          ref={titleRef}
        >
          ומעבר לתוצאות.. ככה הלקוחות שלי מדברות בסוף התהליך:
        </h2>
        
        {/* Works Component */}
        <div 
          className={styles.worksWrapper}
          ref={worksRef}
        >
          <Works />
        </div>
        
        {/* Beauty Section */}
        <section className={styles.section}>
          <h2 
            className={styles.sectionTitle}
            ref={beautyTitleRef}
          >
            אז למה תחום הביוטי בעצם?
          </h2>

          <div 
            className={`${styles.card} ${styles.beautyCard}`}
            ref={(el) => { beautyCardRef.current = el; addToRefs(el); }}
          >
            <div className={styles.cardDecoration}></div>
            <p className={styles.text}>
              תכלס, התחום הזה פשוט מצא אותי - אתן יודעת כבר איך אתן מתנהגות. - לקוחה שהביאה חברה שהביאה עוד 2 שהביאה עוד 5 שפשוט גרמו לי להבין עד כמה תחום הביוטי זקוק לאמון.
            </p>
          </div>
        </section>
      </div>
      
      {/* Parallax floating particles */}
      <div className={styles.particles}>
        {Array.from({ length: 30 }).map((_, index) => (
          <div 
            key={`particle-${index}`}
            className={styles.particle}
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: `${Math.max(3, Math.random() * 6)}px`,
              height: `${Math.max(3, Math.random() * 6)}px`,
              animationDuration: `${15 + Math.random() * 30}s`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          ></div>
        ))}
      </div>
      
      {/* Scrolling indicator */}
      <div className={`${styles.scrollIndicator} ${scrollY > 100 ? styles.hideScrollIndicator : ''}`}>
        <div className={styles.scrollIcon}>
          <div className={styles.scrollDot}></div>
        </div>
        <p className={styles.scrollText}>גלול למטה לגלות יותר</p>
      </div>
    </div>
  );
};

export default Me;