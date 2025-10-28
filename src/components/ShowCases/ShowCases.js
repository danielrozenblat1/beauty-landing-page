import React from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import styles from './ShowCases.module.css';

const Showcase = ({ 
  clientName,
  clientDescription,
  additionalText, 
  metric1Value, 
  metric1Label, 
  metric2Value, 
  metric2Label,
  showcaseImage,
  additionalResult,
  youtubeShortId,
  metric2,
  metric1
}) => {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

  const handleScrollToForm = () => {
    const formElement = document.getElementById('טופס');
    if (formElement) {
      const elementPosition = formElement.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - 100;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const isShort = !!youtubeShortId;

  return (
    <div className={styles.showcaseContainer} ref={ref}>
      <div className={styles.glassCard}>
        <div className={`${styles.decorElement} ${styles.topLeftDecor}`}></div>
        <div className={`${styles.decorElement} ${styles.bottomRightDecor}`}></div>

        <div className={styles.clientHeader}>
          <h3 className={styles.clientName}>{clientName}</h3>
          {clientDescription && (
            <p className={styles.clientDescription}>{clientDescription}</p>
          )}
          {additionalText && (
            <p className={styles.additionalText}>{additionalText}</p>
          )}
        </div>

        <div className={styles.metricsSection}>
          <div className={styles.metricCard}>
            <div className={styles.metricValue}>
              {inView && (
                <CountUp
                  start={0}
                  end={metric1Value}
                  duration={2.5}
                  separator=","
                  suffix={metric1}
                />
              )}
            </div>
            <div className={styles.metricLabel}>{metric1Label}</div>
          </div>

          <div className={styles.metricDivider}></div>

          <div className={styles.metricCard}>
            <div className={styles.metricValue}>
              {inView && (
                <CountUp
                  start={0}
                  end={metric2Value}
                  duration={2.5}
                  separator=","
                  suffix={metric2}
                />
              )}
            </div>
            <div className={styles.metricLabel}>{metric2Label}</div>
          </div>
        </div>

        {additionalResult && (
          <p className={styles.additionalText} style={{margin:"2% auto", textAlign:"center"}}>
            {additionalResult}
          </p>
        )}

        <div className={styles.imageSection}>
          <div className={isShort ? styles.imageWrapperShort : styles.imageWrapperRegular}>
            {youtubeShortId ? (
              <iframe
                className={styles.showcaseImageShort}
                src={`https://www.youtube-nocookie.com/embed/${youtubeShortId}?loop=1&controls=1&rel=0&modestbranding=1`}
                title={clientName}
                allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                sandbox="allow-scripts allow-same-origin allow-presentation"
              />
            ) : (
              <img 
                src={showcaseImage} 
                alt={clientName} 
                className={styles.showcaseImageRegular}
              />
            )}
          </div>
        </div>

        <div className={styles.ctaSection}>
          <button 
            className={styles.ctaButton}
            onClick={handleScrollToForm}
          >
            דניאל, בוא נדבר על הדף שלי!
          </button>
        </div>
      </div>
    </div>
  );
};

export default Showcase;