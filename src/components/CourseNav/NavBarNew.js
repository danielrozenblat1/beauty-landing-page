import React, { useState, useEffect } from 'react';
import { Link as ScrollLink } from "react-scroll";
import styles from './NavBarNew.module.css';
import logo from "../../images/דניאל רוזנבלט לוגו.png"

import { FaTimes } from 'react-icons/fa';

const NavBarNew = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show navbar only after scrolling 200px
      if (window.scrollY > 200) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    if (isMenuOpen) {
      setIsClosing(true);
      setTimeout(() => {
        setIsMenuOpen(false);
        setIsClosing(false);
      }, 500);
    } else {
      setIsMenuOpen(true);
    }
  };

  const handleWhatsAppClick = () => {
    const phoneNumber = "+972505991927";
    const message = "היי אדל ,אני רוצה לשמוע ממך עוד על..";
    const encodedMessage = encodeURIComponent(message);
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappURL, "_blank");
  };

  return (
    <nav className={`
      ${styles.navbar} 
      ${isVisible ? styles.visible : styles.hidden}
    `}>
      <div className={styles.navbarInner}>
        <div className={styles.logo}>
          <img src={logo} alt="Logo" />
        </div>
        
        <button className={styles.menuButton} onClick={handleWhatsAppClick}>
          <div className={styles.buttonContent}>
            <span className={styles.buttonText}>אדל, בואי נדבר!</span>
            <span className={styles.buttonTextHover}>תלחצי כאן</span>
          </div>
        </button>
      </div>

      {(isMenuOpen || isClosing) && (
        <div className={`${styles.mobileMenu} ${isClosing ? styles.closing : ''}`}>
          <div className={styles.mobileMenuHeader}>
            <div className={styles.closeButton} onClick={toggleMenu}>
              <FaTimes />
            </div>
            <div className={styles.mobileMenuLogo}>
              <img src={logo} alt="אדל מושייב לוגו"/>
            </div>
          </div>
          <div className={styles.mobileMenuContent}>
            <div className={styles.mobileLogo}>
              <img src={logo} alt="Logo" />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBarNew;