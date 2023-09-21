import React, { useState } from 'react';
import '../assets/css/login.css';
import { Link } from 'react-router-dom'; 

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = () => {
    if (username.trim() === '' || password.trim() === '') {
      setError('Please enter both username and password.');
    } else {
      window.location.href='/home';
    }


  };
  const submitForm=(e)=>{
    e.preventDefault();
    console.log(e);
  }
  const handleSignUp = () => {
    console.log('Sign Up clicked');
  };

  return (<form action="" onSubmit={submitForm}>
    <div className="digital-marketing-login-background">
      <div className="digital-marketing-login-form">
        <h1> Log In</h1>
        <label>
          Username:
          <div className="input-form">
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="input"
            />
          </div>
        </label>
        <label>
          Password:
          <div className="input-form">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="input"
            />
          </div>
        </label>
        <div className="button-container">
          <button type="submit" onClick={handleLogin} className="button-submit">Log In</button>
        </div>
          <br></br>
          <span>or</span>
          <br></br>
          <h3>if new,</h3>
        <div className="button-container">
          <Link to="/signup">
            <button onClick={handleSignUp} className="button-submit">Sign Up</button>
          </Link>
        {error && <p className="error-message">{error}</p>}
        </div>
      </div>
    </div>
    </form>
  );
}
export default Login;