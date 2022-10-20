import react from 'react';
import './App.css';

function MatterInfo() {
    return (
        <div>
            const isBackgroundPurple = true;
            <a>
              <img src="https://scontent.fbrs4-1.fna.fbcdn.net/v/t39.30808-6/273536999_3005458816373113_1211053597501658920_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=174925&_nc_ohc=Q5d9DWS0qLYAX8c8Qgt&_nc_ht=scontent.fbrs4-1.fna&oh=00_AT8ibaMLNisd5f8in-lzJ0YUArDPLdoNcL4NMtFZMiPnQQ&oe=6356667E">
              </img>
            </a>
            <h1>Please login or create an account to view your matters.</h1>
            <br>
            </br>
            <form action="/Login">
              <button type="submit">Log in</button>
            </form>
            <br>
            </br>
            <form action="/CreateAccount">
              <button type="submit">Create Account</button>
            </form>  
        
        </div>
    )
}

export default MatterInfo;