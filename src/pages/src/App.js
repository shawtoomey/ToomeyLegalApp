import React from 'react';
import './App.css';
import Navbar from './components';
import { BrowserRouter as Router, Routes, Route, Link}
    from 'react-router-dom';
import Home from './pages';
import MatterInfo from './pages/MatterInfo';
import Quotation from './pages/Quotation';
import SignUp from './pages/signup';
import LogIn from './pages/LogIn';
  
function App() {
return (
  <header>
   <div className="Router">
    <Router>
    <Navbar />
    <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/MatterInfo' element={<MatterInfo/>} />
        <Route path='/Quotation' element={<Quotation/>} />
        <Route path='/LogIn' element={<LogIn/>} />
        <Route path='/signup' element={<SignUp/>} />
    </Routes>
    </Router>
    </div>
    </header>
);
}
  
export default App;