import React, {Component, useState} from 'react';
import Axios from 'axios';
import '../App.css';

const LogIn = (props) => {

  const [forename, setForename] = useState("")
  const [surname, setSurname] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const login = () => {
    Axios.post('http://localhost:3000/Login', {
      email: email, 
      password: password,
   }).then((response) => {
    console.log(response);
   });
  };

  return (
    <div className='Login'>
        <div className="App">
        <header className="App-header">
        <a>
              <img src="data:image/jpeg;base64,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">
              </img>
            </a>
            <h1>Login to the Toomey Legal app</h1>
            <h2> Please enter your details below:</h2>
            <br>
            </br>
            <form className="Login-Form" onSubmit={"CredentialCheckerLogin()"}>
             <div className="form-group">
              <label>Email </label>
              <br />
              <input type="email" className="email" onChange={(e) => {
               setEmail(e.target.value);
             }}/>
             </div>
             <div className="form-group">
              <label>Password </label>  
              <br />
              <input type="password" className="password" onChange={(e) => {
               setPassword(e.target.value);
             }}/>
             </div>
             <br />
             <button type="submit" onClick={login}>Log in</button>
             <br />
             <p className="forgot-password text-right">
             <a href="http://localhost:3000/PasswordRetrieve"> Forgot password?</a>
             </p>
            </form>
        </header>
        </div>
    </div>
  );
};
  
export default LogIn;