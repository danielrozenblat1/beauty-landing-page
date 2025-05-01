import { useState, useRef, useEffect } from "react";
import styles from "./Popped.module.css";
import { FaTimes } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Popped = () => {
  const navigate = useNavigate();
  const [opened, setOpened] = useState(false);
  
  // State management like in FormScreen
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: ""
  });
  
  // Refs for direct DOM access
  const nameRef = useRef(null);
  const phoneRef = useRef(null);
  const mailRef = useRef(null);
  
  // URL שאליו נשלח את הליד - using the same as in FormScreen
  const serverUrl = "https://dynamic-server-dfc88e1f1c54.herokuapp.com/leads/newLead";
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

  const submitHandler = async (e) => {
    e.preventDefault();
    
    const name = nameRef?.current?.value;
    const phone = phoneRef?.current?.value;
    const email = mailRef?.current?.value;

    // Validation logic from FormScreen
    if (name.trim().length <= 2) {
      alert("אנא הכנס שם מלא");
      return;
    }
    
    if (phone.trim().length !== 10) {
      alert("אנא הכנס מספר טלפון הכולל 10 ספרות");
      return;
    }
    
    if (!email.includes("@")) {
      alert("אנא הכנס מייל תקין");
      return;
    }
    
    // Prepare data for submission - using same structure as FormScreen
    const serverData = {
      name,
      phone,
      reason: email, // using email in place of reason for this form
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
        mailRef.current.value = "";
        
        // Reset state as well
        setFormData({
          fullName: "",
          phone: "",
          email: ""
        });
        
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
    }
  };

  return (
    <>
      {opened && (
        <div className={styles.overlay}>
          <div className={styles.popped}>
            <FaTimes className={styles.x} onClick={handleToggle} />
            <div className={styles.subTitle}>
              "בעל עסק טוב נמדד ביכולת שלו לקחת החלטות"
            </div>
            <div className={styles.title}>זמן לקחת החלטה</div>
            <form className={styles.form} onSubmit={submitHandler}>
              <div className={styles.column}>
                <input
                  className={styles.input}
                  ref={nameRef}
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="שם מלא"
                />
                <input
                  className={styles.input}
                  ref={phoneRef}
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="מספר טלפון"
                />
                <input
                  className={styles.input}
                  ref={mailRef}
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="מייל"
                />
                <button type="submit" className={styles.button}>דניאל, בוא נדבר</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Popped;