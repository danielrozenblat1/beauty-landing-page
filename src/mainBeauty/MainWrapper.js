
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import FirstScreen from "../screens/FirstScreen"
import ThirdScreen from "../screens/ThirdScreen"
import ForthScreen from "../screens/ForthScreen"
import SecondScreen from "../screens/SecondScreen"
import AboutMe from "../meee/Me"
import Popped from '../components/poppedUpWindow/Popped';
import FifthScreen from '../screens/FifthScreen';
import SixthScreen from '../screens/SixthScreen';
import NavBarNew from '../components/CourseNav/NavBarNew';
import FloatingWhatsAppButton from '../components/FloatingButton/FloatingButton';

const MainWrapper=()=>{

return <>
<NavBarNew/>
  <FirstScreen/>
    <ForthScreen/>
  <ThirdScreen/>
  {/* <SecondScreen/> */}

    <AboutMe/>
    <SixthScreen/>
<SecondScreen/>

<Popped/>
<FifthScreen/>
<FloatingWhatsAppButton/>
</>

}
export default MainWrapper