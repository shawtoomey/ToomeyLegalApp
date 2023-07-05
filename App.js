import React from 'react';
import './App.css';
import Navbar from './components';
import Footer from './components/Footer';
import { BrowserRouter as Router, Routes, Route, Link}
    from 'react-router-dom';
import Home from './pages';
import MatterInfo from './pages/MatterInfo';
import Quotation from './pages/Quotation';
import SignUp from './pages/Signup';
import LogIn from './pages/LogIn';
import QuoteResult from './pages/QuoteResult';
import PasswordRetrieve from './pages/PasswordRetrieve';
  
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
        <Route path='/Signup' element={<SignUp/>} />
    </Routes>
    <Footer />
    </Router>
    </div>
    </header>
);
}
  
export default App;