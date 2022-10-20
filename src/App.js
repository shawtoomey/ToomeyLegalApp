
import './App.css';
import React from 'react';
import MatterInfo from './MatterInfo';
import QuoteInfo from './QuoteInfo';
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
    <header className="App-header">
      <a>
      <img src="https://scontent.fbrs4-1.fna.fbcdn.net/v/t39.30808-6/273536999_3005458816373113_1211053597501658920_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=174925&_nc_ohc=Q5d9DWS0qLYAX8c8Qgt&_nc_ht=scontent.fbrs4-1.fna&oh=00_AT8ibaMLNisd5f8in-lzJ0YUArDPLdoNcL4NMtFZMiPnQQ&oe=6356667E"></img>
      </a>
      <p>
        Welcome to the Toomey Legal app, please choose an option:
      </p>
      <br>
      </br>
      <form action="/MatterInfo">
        <button type="submit">View a matter</button>
      </form>
      <br>
      </br>
      <form action="/QuoteInfo">
        <button type="submit">Receive a Quote</button>
      </form>  
    </header>
  </div>

  );
}


export default App;
