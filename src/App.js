
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


import Takanon from './components/takanon/Takanon';

import Thanks from './thank/Thanks';

import MainWrapper from './mainBeauty/MainWrapper';
function App() {

  
  return <>
 <Router>
    <Routes>
    <Route path="/" index element={<MainWrapper/>}/>

    <Route path="/תקנון"  element={<Takanon/>}/>

    <Route path="/תודה"  element={<Thanks/>}/>
 </Routes>
 </Router>
  </>
}

export default App;
