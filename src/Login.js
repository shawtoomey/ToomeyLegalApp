import react from 'react';
import './App.css';
import MatterHomeUser from "./MatterHomeUser";
import MatterHomeAdmin from "./MatterHomeAdmin";
import Matterinfo from "./MatterInfo";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
    Link,
  } from "react-router-dom";

  function Login() {
    return (
        <div className = "Login">
            const isBackgroundPurple = true;
            <a>
              <img src="https://scontent.fbrs4-1.fna.fbcdn.net/v/t39.30808-6/273536999_3005458816373113_1211053597501658920_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=174925&_nc_ohc=Q5d9DWS0qLYAX8c8Qgt&_nc_ht=scontent.fbrs4-1.fna&oh=00_AT8ibaMLNisd5f8in-lzJ0YUArDPLdoNcL4NMtFZMiPnQQ&oe=6356667E">
              </img>
            </a>
            <h1>Please login to view your matters.</h1>
            <br>
            </br>
            <form onSubmit={"CredentialCheckerLogin()"}>

              <button type="submit">Log in</button>
            </form>
            
        
        </div>
    )
}

function CredentialCheckerLogin() {
    return 
}

export default Login;