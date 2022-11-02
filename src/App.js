
import './App.css';
import React from 'react';
import MatterInfo from './MatterInfo';
import Quotation from './Quotation';
import ReactDOM from "react-dom";
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

function App() {
  const isBackgroundPurple = true;
  return (
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
    <header className="App-header">
      <a>
      <img className="logo" src="https://scontent.fbrs4-1.fna.fbcdn.net/v/t39.30808-6/273536999_3005458816373113_1211053597501658920_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=174925&_nc_ohc=Q5d9DWS0qLYAX8c8Qgt&_nc_ht=scontent.fbrs4-1.fna&oh=00_AT8ibaMLNisd5f8in-lzJ0YUArDPLdoNcL4NMtFZMiPnQQ&oe=6356667E"></img>
      </a>
      <p>
        Welcome to the Toomey Legal app, please choose an option:
      </p>
      <br>
      </br>
      <form onSubmit={"./MatterInfo.js"}>
        <button type="submit">View a Matter</button>
      </form>
      <br>
      </br>
      <form onSubmit={"./Quotation.js"}>
        <button type="submit">Receive a Quote</button>
      </form>  
    </header>
    </div>
  );
}


export default App;
