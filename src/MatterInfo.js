import react from 'react';
import './App.css';
import Login from "./Login.js";
import CreateAccount from "./CreateAccount.js";
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

function MatterInfo() {
    return (
        <div className="Matters">
            const isBackgroundPurple = true;
            <div className="App">
    <Navbar collapseOnSelect expand="lg" variant="dark" fixed="top">
        <Container>
          <h1>Toomey Legal </h1>
          <Nav className="me-auto">
            <li href="#quotation">Quotation | </li>
            <li href="#matters">Matters | </li>
            <li href="#login">Login | </li>
            <li href="#sign-up">Sign Up</li>
          </Nav>
        </Container>
      </Navbar>
            <a>
              <img src="https://scontent.fbrs4-1.fna.fbcdn.net/v/t39.30808-6/273536999_3005458816373113_1211053597501658920_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=174925&_nc_ohc=Q5d9DWS0qLYAX8c8Qgt&_nc_ht=scontent.fbrs4-1.fna&oh=00_AT8ibaMLNisd5f8in-lzJ0YUArDPLdoNcL4NMtFZMiPnQQ&oe=6356667E">
              </img>
            </a>
            <h1>Please login or create an account to view your matters.</h1>
            <br>
            </br>
            <form onSubmit={"./Login"}>
              <button type="submit">Log in</button>
            </form>
            <br>
            </br>
            <form onSubmit={"./CreateAccount"}>
              <button type="submit">Create Account</button>
            </form>  
        
        </div>
    </div>
    )
}

export default MatterInfo;