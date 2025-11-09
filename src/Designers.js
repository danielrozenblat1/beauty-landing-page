
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import FirstScreen from "./screens/FirstScreen"
import ThirdScreen from "./screens/ThirdScreen"
import ForthScreen from "./screens/ForthScreen"
import SecondScreen from "./screens/SecondScreen"
import AboutMe from "./meee/Me"
import Popped from './components/poppedUpWindow/Popped';
import FifthScreen from './screens/FifthScreen';
import SixthScreen from './screens/SixthScreen';
import NavBarNew from './components/CourseNav/NavBarNew';
import FloatingWhatsAppButton from './components/FloatingButton/FloatingButton';
import FirstScreenDesigners from './screens/FirstScreenDesigners';
import ThirdScreenDesigners from './screens/ThirdScreenDesigners';
import ForthScreenDesigners from './screens/ForthScreenDesigners';
import AboutMeDesigners from './meee/MeDesigners';
import SixthScreenDesigners from './screens/SixthScreenDesigners';

const Designers=()=>{

return <>
<NavBarNew/>
  <FirstScreenDesigners/>
  <ThirdScreenDesigners/>
  {/* <SecondScreen/> */}
  <ForthScreenDesigners/>
    <AboutMeDesigners/>
    <SixthScreenDesigners/>
<SecondScreen/>

<Popped/>
<FifthScreen/>
<FloatingWhatsAppButton/>
</>

}
export default Designers