import { useState, useRef } from "react";
import styles from "./FormScreen.module.css";
import { useNavigate } from "react-router-dom";

// Enhanced form with OpenSans font and integrated logic
const FormScreen = (props) => {
  const navigate = useNavigate();
  const [submitted, setSubmitted] = useState(false);
  
  // Keep both state and refs for flexibility
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    occupation: ""
  });
  
  // Refs for direct DOM access
  const nameRef = useRef(null);
  const phoneRef = useRef(null);
  const reasonRef = useRef(null);
  
  // URL שאליו נשלח את הליד
  const serverUrl = "https://dynamic-server-dfc88e1f1c54.herokuapp.com/leads/newLead";
  const reciver = "danielroz12345@gmail.com";

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const name = nameRef?.current?.value;
    const phone = phoneRef?.current?.value;
    const reason = reasonRef?.current?.value;

 
    // Validation logic from previous form
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
    
    // Prepare data for submission
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
        
        // Navigate to thank you page
        navigate("/תודה");
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        throw new Error("שליחה נכשלה");
      }
    } catch (error) {
      console.error("❌ שגיאה:", error);
      alert("התרחשה שגיאה, אנא נסה שוב מאוחר יותר");
    }
  };

  return (
    <div className={styles.outerContainer} id="טופס">
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
                placeholder="מה השם?" 
                className={styles.input} 
                ref={nameRef}
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
                ref={phoneRef}
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
                ref={reasonRef}
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