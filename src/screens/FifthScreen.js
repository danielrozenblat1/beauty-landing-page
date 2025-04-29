
import {Link as NavLink } from "react-router-dom";
import styles from "./FifthScreen.module.css";
import { useNavigate } from "react-router-dom";

const FifthScreen = () => {
    const navigate=useNavigate()
  const handleNavigateHome = () => {
    navigate('/תקנון');
    // Scroll to the top of the page
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  return <>
  <div className={styles.center}>
  <NavLink to="/תקנון"  onClick={handleNavigateHome} className={styles.ctaButton}>לתקנון לחץ כאן</NavLink>
  </div>
  </>
};

export default FifthScreen;