import React, { useState } from 'react';
import './loginpage.css';
import Signup from './signup';
import Home from './homepage';

function Login() {
  const [isSignUp, setIsSignUp] = useState(false);
  const [isHome, setIsHome] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  if (isSignUp) {
    return <Signup />;   // RENDERING SIGNUP PAGE IF (isSignUp) IS TRUE
  }

  if (isHome) {
    return <Home />; // RENDERING HOME PAGE IF (isHome) IS TRUE
  }

  const validateEmail = (email) => {
    const re = /^[a-zA-Z0-9._%+-]+@[gmail]+\.[a-zA-Z]{2,4}$/;   // Basic email format regex
    return re.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();     // Prevent form from submitting by default

    if (!validateEmail(email)) {
      alert('Please enter a valid email address.');
      return;
    }

    if (password.length < 6) {
      alert('Password should be at least 6 characters long.');
      return;
    }

    setIsHome(true);       // If validation passes, redirect to the home page
  };
 
  return (
    <div>
      <div className='body'> 
        <h2>FOODIE BEE </h2>
        <h3>A new food delivery website</h3>
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <label>                           
            Username or Email
          </label>  
          <input 
            type="text" 
            placeholder="Enter your Mail-Id" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required 
          />
          <label>
            Password
          </label>
          <input 
            type="password" 
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required 
          />
          <a href='#' style={{textDecoration:'none', color:'darkblue'}}>Forget Password?</a>
          <button type="submit">Login</button>
        </form>
        <h4>Don't have an account?{' '}
          <a href="#" style={{textDecoration:'none', color:'darkblue'}} onClick={() => setIsSignUp(true)}>Sign Up</a>
        </h4>
      </div>
    </div>
  );
}

export default Login;
