
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import FirstScreen from "../screens/FirstScreen"
import ThirdScreen from "../screens/ThirdScreen"
import ForthScreen from "../screens/ForthScreen"
import SecondScreen from "../screens/SecondScreen"
import AboutMe from "../meee/Me"
import Popped from '../components/poppedUpWindow/Popped';
import FifthScreen from '../screens/FifthScreen';

const MainWrapper=()=>{

return <>
  <FirstScreen/>
  <ThirdScreen/>
  {/* <SecondScreen/> */}
  <ForthScreen/>
    <AboutMe/>
<SecondScreen/>
<Popped/>
<FifthScreen/>
</>

}
export default MainWrapper