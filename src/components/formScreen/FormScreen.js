import { useState, useRef } from "react";
import styles from "./FormScreen.module.css";
import { useNavigate } from "react-router-dom";

const FormScreen = (props) => {
  const navigate = useNavigate();
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    occupation: "",
    agreeToTerms: false
  });

  const nameRef = useRef(null);
  const phoneRef = useRef(null);
  const reasonRef = useRef(null);

   const serverUrl = "https://dynamic-server-dfc88e1f1c54.herokuapp.com/leads/newLeadDaniel";

  const reciver = "danielroz12345@gmail.com";

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // מניעת שליחה נוספת אם כבר בתהליך
    if (isLoading) return;

    const name = nameRef?.current?.value;
    const phone = phoneRef?.current?.value;
    const reason = reasonRef?.current?.value;

    if (name.trim().length <= 2) {
      alert("אנא הכנס שם מלא");
      return;
    }

    if (phone.trim().length !== 10) {
      alert("אנא הכנס מספר טלפון הכולל 10 ספרות");
      return;
    }

    if (reason.trim().length <= 2) {
      alert("אנא הכנס במה את עוסקת");
      return;
    }

    // בדיקת checkbox
    if (!formData.agreeToTerms) {
      alert("יש לאשר את תקנון האתר כדי להמשיך");
      return;
    }

    // הפעלת מצב טעינה
    setIsLoading(true);

    const serverData = {
      name,
      phone,
      reason,
      reciver
    };

    try {
      // שליחה לשרת שלך
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

        nameRef.current.value = "";
        phoneRef.current.value = "";
        reasonRef.current.value = "";

        setFormData({
          fullName: "",
          phone: "",
          occupation: "",
          agreeToTerms: false
        });

        setSubmitted(true);
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
    <div className={styles.outerContainer} id="טופס">
      <div className={styles.container}>
        <div className={styles.formContainer}>
          <div className={styles.formDecor + " " + styles.topLeft}></div>
          <div className={styles.formDecor + " " + styles.bottomRight}></div>

          <p className={styles.formSubtitle}>תשאירי פרטים לשיחת התאמה ללא עלות</p>

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

            <div className={styles.checkboxGroup}>
              <label className={styles.checkboxLabel}>
                <input
                  type="checkbox"
                  name="agreeToTerms"
                  checked={formData.agreeToTerms}
                  onChange={handleChange}
                  className={styles.checkbox}
                  disabled={isLoading}
                />
                <span className={styles.checkboxText}>
                  קראתי ואני מאשר/ת את <a href="/תקנון" className={styles.termsLink} target="_blank" rel="noopener noreferrer">תקנון האתר</a>
                </span>
              </label>
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
  );
};

export default FormScreen;