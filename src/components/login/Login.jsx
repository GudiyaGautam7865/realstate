import React, { useState } from 'react';
import './Login.css'
import loginbanner from '../../assets/image/loginimg.png'
import googlesvg from '../../assets/image/Google__G__logo.png'
import facebooklogo from '../../assets/image/facebook-svgrepo-com.svg'
import logo from "../../assets/image/logo.png";

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle login logic here
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <div className="login-container">
      <div className="login-form">
         <a href="#" className="login-logo" >
                  <img src={logo} width="190" height="28" alt="wealthome" />
                </a>
        <h2>Log In to Your Account</h2>
        <p>Welcome back! Select method to log in:</p>

        <div className="social-login">
          <button className="google-btn">
            <img src={googlesvg}  alt="Google Logo" />
            <span>Google</span>
          </button>
          <button className="facebook-btn">
            <img src={facebooklogo} alt="Facebook Logo" />
            <span>Facebook</span>
          </button>
        </div>

        <p>or continue with email and password</p>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" value={email} onChange={handleEmailChange} required />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" value={password} onChange={handlePasswordChange} required />
          </div>

          <div className="form-group-label">
  <label htmlFor="remember-me">
    <input type="checkbox" id="remember-me" /> Remember me
  </label>
  <p className="forgot-password">Forgot Password?</p>
</div>

          <button type="submit" className="login-btn">Log In</button>
        </form>

       
        <p className="create-account">Don't have an account? Create an account</p>
      </div>

      <div className="login-image">
        <img src={loginbanner} alt="login" />
      </div>
    </div>
  );
}

export default Login;