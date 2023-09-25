import React, { useState } from 'react';
import '../../assets/css/login.css';
import { Link } from 'react-router-dom'; 
import { useDispatch } from 'react-redux';
import { login } from '../redux/UserSlice';
function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const dispatch=useDispatch();
  // const {login:userLogin}
  const handleLogin = () => {
    if (username.trim() === '' || password.trim() === '') {
      setError('Please enter both username and password.');
    } else {
      dispatch(login(username));
      
      window.location.href='/userhome';
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
        <div className="stafflogin">
        <h6>If ADMIN:</h6>
        
        <a href="/adminlog">click here!</a>
        </div>
        <br></br>
        <label>
          Username:
          <div >
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="input-form"
            />
          </div>
        </label>
        <br></br>

        <label>
          Password:
          <div >
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="input-form"
            />
          </div>
        </label>
        <div className="button-container">
          <button type="submit" onClick={handleLogin} className="button-submit">Log In</button>
        </div>
          <br></br>
          <span>or</span>
          <br></br>
          <h4 className="ifnew">if new,</h4>
        <div className="button-container">
          <Link to="/signup">
            <button onClick={handleSignUp} className="button-submit">Sign Up</button>
          </Link>
        </div>
          <br></br>
        {error && <p className="error-message">{error}</p>}
      </div>
    </div>
    </form>
  );
}
export default Login;
