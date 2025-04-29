import Works from "../components/works/Works"
import styles from "./Thanks.module.css"
  
import Recommends from "../components/recommends/Works"
const Thanks=()=>{


return <>
<div style={{width:'100%', justifyContent:"center", overflow:"hidden" ,background:"linear-gradient(135deg, rgba(248,238,255,1) 15%, rgba(224,210,226,0.9915615904564951) 30%, rgba(248,238,255,1) 50%, rgba(224,210,226,1) 70%, rgba(248,238,255,1) 85%)"}}>
<div className={styles.title}>תודה על האמון בי ! </div>
<div className={styles.subtitle}>את בהחלט בדרך הנכונה ! <br/> עד השיחה שלנו.. מוזמנת לעיין שוב בדפים שהכנתי ללקוחות שלי - החליקי לצדדים </div>
{/* <div className={styles.center}><video className={styles.video} src={daniel} alt="דניאל רוזנבלט סרטון תודה" autoPlay loop muted playsInline controls/></div> */}
<Works/>
<div className={styles.subtitle}>החליקי לצדדים כדי לראות קצת ממה שהלקוחות שלי אמרו בסוף התהליך</div>
<Recommends/>
<div className={styles.subtitle}>כולי תקווה שאת/ה תהיה התמונה הבאה כאן</div>
</div>
</>


    }
    export default Thanks