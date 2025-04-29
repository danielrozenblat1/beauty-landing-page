import { useState } from "react";
import styles from "./FormScreen.module.css";

// Enhanced form with OpenSans font
const FormScreen = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    occupation: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // כאן תוכל להוסיף את הלוגיקה לשליחת הטופס
    console.log("נשלח טופס:", formData);
  };

  return (
    <div className={styles.outerContainer}>
      <div className={styles.container}>
   
        
        <div className={styles.formContainer}>
          {/* Classical decorative elements */}
          <div className={styles.formDecor + " " + styles.topLeft}></div>
          <div className={styles.formDecor + " " + styles.bottomRight}></div>
          
          <p className={styles.formSubtitle}>תשאירי פרטים ונחזור אלייך בהקדם</p>
          
          <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.inputGroup}>
              <input 
                type="text" 
                name="fullName" 
                value={formData.fullName}
                onChange={handleChange}
                placeholder=" מה השם?" 
                className={styles.input} 
                required 
              />
            </div>
            
            <div className={styles.inputGroup}>
              <input 
                type="tel" 
                name="phone" 
                value={formData.phone}
                onChange={handleChange}
                placeholder="מספר טלפון" 
                className={styles.input} 
                required 
              />
            </div>
            
            <div className={styles.inputGroup}>
              <input 
                type="text" 
                name="occupation" 
                value={formData.occupation}
                onChange={handleChange}
                placeholder="במה את עוסקת?" 
                className={styles.input} 
                required 
              />
            </div>
            
            <button type="submit" className={styles.submitButton}>
              דניאל, בוא נדבר!
            </button>
            <p className={styles.limitedNotice}>* מספר המקומות בחודש מוגבל *</p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FormScreen;