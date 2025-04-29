import YouTubeShortsCarousel from "../components/shorts/Shorts"
import styles from "./ThirdScreen.module.css"
import WorksCarousel from "../components/works/Works"
import Works from "../components/recommends/Works";
import FormScreen from "../components/formScreen/FormScreen";
const ThirdScreen=()=>{
    const shortsIds = [
        'bT61COiNKGM', // https://www.youtube.com/shorts/bT61COiNKGM
        '31ehauP2cRE', // https://www.youtube.com/shorts/31ehauP2cRE
        'A0E6G1MIWrU', // https://www.youtube.com/shorts/A0E6G1MIWrU
        'xqOb0FGbeJo', // https://www.youtube.com/shorts/xqOb0FGbeJo
      ];

    return <>
    
    
    <div className={`${styles.title} ${styles.fadeInElement}`}>
     <span className={styles.bold}>לפני שנדבר.. קצת ממה שיש ללקוחות שלי לומר</span> 
            </div>
         
    <YouTubeShortsCarousel shortsIds={shortsIds}/>
    {/* <Works/> */}
    <div className={`${styles.title} ${styles.fadeInElement}`}>
     <span className={styles.bold}>מקבץ עבודות</span> 
            </div>
            <div className={`${styles.description}`}>
   (תגללו הצידה)
            </div>
  <WorksCarousel/>
  {/* <div className={`${styles.title} ${styles.fadeInElement}`}>
     <span className={styles.bold}>רוצה להתחיל למלא את היומן שלך ובאמת להנות מהעסק שלך?</span> 
            </div>
  <FormScreen/> */}
    </>
}
export default ThirdScreen