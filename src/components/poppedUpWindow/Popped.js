import { useState, useRef, useEffect } from "react";
import styles from "./Popped.module.css";
import { FaTimes } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Popped = () => {
  const [opened, setOpened] = useState(false);
  const nameRef = useRef(null);
  const phoneRef = useRef(null);
  const mailRef = useRef(null);
const navigate=useNavigate()
  const handleToggle = () => {
    setOpened(!opened);
  };

  useEffect(() => {
    // הצגת הטופס לראשונה אחרי 20 שניות
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

  const submitHandler=async(e)=>{
    e.preventDefault()
    const name=nameRef.current.value
    const phone=phoneRef.current.value
    const email=mailRef.current.value
    if(name.trim().length<=2){
   
    alert("אנא הכנס שם מלא ")
    return;
    }
    if(phone.trim().length!==10){
  
    alert("אנא הכנס מספר טלפון הכולל 10 ספרות ")
    return;
        }
        if(!email.includes("@")){
         
            alert("אנא הכנס מייל תקין ")
            return;
            }
       
   const formData={
    name:name,
    phone:phone,
    email:email
   }
const response= await fetch('https://daniel-rozenblat-421d37a33cb7.herokuapp.com/leads/newLead',{
    method:"POST",
    headers:{'Content-Type':'application/json'},
    body:JSON.stringify(formData)
   })
        
        if(response.ok){

        alert("שמרנו את הפרטים שלך, ניצור קשר בימים הקרובים")
        nameRef.current.value=""
        phoneRef.current.value=""
        mailRef.current.value=""
        setOpened(false)
      navigate("/תודה")
      window.scrollTo({ top: 0, behavior: 'smooth' });
        }
}

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
            <form className={styles.form}>
              <div className={styles.column}>
                <input
                  className={styles.input}
                  ref={nameRef}
                  placeholder="שם מלא"
                />
                <input
                  className={styles.input}
                  ref={phoneRef}
                  placeholder="מספר טלפון"
                />
                <input
                  className={styles.input}
                  ref={mailRef}
                  placeholder="מייל"
                />
                <button  onClick={submitHandler} className={styles.button}>דניאל, בוא נדבר</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Popped;
