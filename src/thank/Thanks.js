import Works from "../components/works/Works"
import styles from "./Thanks.module.css"
  
import Recommends from "../components/recommends/Works"
import YouTubeShortsCarousel from "../components/shorts/Shorts";
const Thanks=()=>{
   const shortsIds = [
        'bT61COiNKGM',
        '31ehauP2cRE',
        'r84l5ZllT_o',
        'YXu98G7U_vk',
        'Bp_iINog5kg',
        'A0E6G1MIWrU',
        'xqOb0FGbeJo',
        'udpA5LMr-Xc',
        'iOev0zVeO0Y',
        'hE5VR1w_8OE',
        'UoWR9wm1NeU',
        'C2RHk3Tbslw'
    ];

return <>
<div style={{width:'100%', justifyContent:"center", overflow:"hidden" ,background:"linear-gradient(135deg, rgba(248,238,255,1) 15%, rgba(224,210,226,0.9915615904564951) 30%, rgba(248,238,255,1) 50%, rgba(224,210,226,1) 70%, rgba(248,238,255,1) 85%)"}}>
<div className={styles.title}>תודה על האמון בי ! </div>
<div className={styles.subtitle}>את בהחלט בדרך הנכונה ! <br/> עד השיחה שלנו.. מוזמנת לעיין שוב בדפים שהכנתי ללקוחות שלי - החליקי לצדדים </div>
{/* <div className={styles.center}><video className={styles.video} src={daniel} alt="דניאל רוזנבלט סרטון תודה" autoPlay loop muted playsInline controls/></div> */}
<Works/>
<div className={styles.subtitle}>החליקי לצדדים כדי לראות קצת ממה שהלקוחות שלי אמרו בסוף התהליך</div>
<Recommends/>
<div className={styles.subtitle}>חלקן רצו גם לדבר:</div>
 <YouTubeShortsCarousel shortsIds={shortsIds}/>
<div className={styles.subtitle}>כולי תקווה שאת/ה תהיה התמונה הבאה כאן</div>
</div>
</>


    }
    export default Thanks