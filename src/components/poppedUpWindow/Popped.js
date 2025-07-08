import { useState, useRef, useEffect } from "react";
import styles from "./Popped.module.css";
import { FaTimes } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Popped = () => {
  const navigate = useNavigate();
  const [opened, setOpened] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  
  // State management like in FormScreen
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    occupation: ""
  });
  
  // Refs for direct DOM access
  const nameRef = useRef(null);
  const phoneRef = useRef(null);
  const reasonRef = useRef(null);
  
  // URL שאליו נשלח את הליד - using the same as in FormScreen
  const serverUrl = "https://dynamic-server-dfc88e1f1c54.herokuapp.com/leads/newLeadDaniel";
  const reciver = "danielroz12345@gmail.com";

  const handleToggle = () => {
    setOpened(!opened);
  };

  useEffect(() => {
    // הצגת הטופס לראשונה אחרי 30 שניות
    const initialTimeout = setTimeout(() => {
      setOpened(true);
    }, 30000);

    // הצגת הטופס כל 3 דקות
    const interval = setInterval(() => {
      setOpened(true);
    }, 180000);

    // התנקות טיימרים על פי צורך
    return () => {
      clearTimeout(initialTimeout);
      clearInterval(interval);
    };
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // מניעת שליחה נוספת אם כבר בתהליך
    if (isLoading) return;
    
    const name = nameRef?.current?.value;
    const phone = phoneRef?.current?.value;
    const reason = reasonRef?.current?.value;

    // Validation logic from FormScreen
    if(name.trim().length <= 2){
      alert("אנא הכנס שם מלא");
      return;
    }
    
    if(phone.trim().length !== 10){
      alert("אנא הכנס מספר טלפון הכולל 10 ספרות");
      return;
    }
    
    if(reason.trim().length <= 2){
      alert("אנא הכנס במה את עוסקת");
      return;
    }
    
    // הפעלת מצב טעינה
    setIsLoading(true);
    
    // Prepare data for submission - using same structure as FormScreen
    const serverData = {
      name,
      phone,
      reason,
      reciver
    };
    
    try {
      const serverResponse = await fetch(serverUrl, {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(serverData)
      });
      
      console.log("✅ שלב 3: התקבלה תגובה מהשרת");
      console.log("🖥️ server response status:", serverResponse.status);
      
      const serverText = await serverResponse.text();
      console.log("🖥️ server response text:", serverText);
      
      if (serverResponse.ok) {
        alert("שמרנו את הפרטים שלך, ניצור קשר בימים הקרובים");
        
        // Reset form
        nameRef.current.value = "";
        phoneRef.current.value = "";
        reasonRef.current.value = "";
        
        // Reset state as well
        setFormData({
          fullName: "",
          phone: "",
          occupation: ""
        });
        
        setSubmitted(true);
        setOpened(false);
        
        // Navigate to thank you page
        navigate("/תודה");
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        throw new Error("שליחה נכשלה");
      }
    } catch (error) {
      console.error("❌ שגיאה:", error);
      alert("התרחשה שגיאה, אנא נסה שוב מאוחר יותר");
    } finally {
      // סיום מצב טעינה
      setIsLoading(false);
    }
  };

  return (
    <>
      {opened && (
        <div className={styles.overlay}>
          <div className={styles.popped}>
            <FaTimes className={styles.x} onClick={handleToggle} />
            <div className={styles.formContainer}>
              {/* Classical decorative elements like in FormScreen */}
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
                    placeholder="מה השם?" 
                    className={styles.input} 
                    ref={nameRef}
                    required 
                    disabled={isLoading}
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
                    ref={phoneRef}
                    required 
                    disabled={isLoading}
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
                    ref={reasonRef}
                    required 
                    disabled={isLoading}
                  />
                </div>
                
                <button 
                  type="submit" 
                  className={`${styles.submitButton} ${isLoading ? styles.loading : ''}`}
                  disabled={isLoading}
                >
                  {isLoading ? "הפרטים נשלחו.. כמה שניות" : "דניאל, בוא נדבר!"}
                </button>
                <p className={styles.limitedNotice}>* מספר המקומות בחודש מוגבל *</p>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Popped;