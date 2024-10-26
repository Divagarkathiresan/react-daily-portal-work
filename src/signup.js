import React ,{ useState } from 'react';
import Home from './homepage';
import './signup.css'
function Signup(){
  const [isHome, setIsHome] = useState(false);

  if (isHome) {
    return <Home />; // RENDERING HOME PAGE IF (isHome) IS TRUE
  }
  return(
    <div className='sign'>
      <h3>Sign Up !</h3>
      <form className='signupform'>
        <label>
          Email :
        </label>
        <input type="email" required placeholder='Enter your mail id'>
        </input>
        <br></br>
        <label>
          Password :
        </label>
        <input type="password" required placeholder='Enter your password'> 
        </input>
        <br></br>
        <button type="submit" onClick={() => setIsHome(true)}>Signup</button>
      </form>
    </div>
  );
}

export default Signup;



