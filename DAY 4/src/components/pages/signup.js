import React, { useState } from 'react';
import '../../assets/css/signup.css';
import { Link } from 'react-router-dom';

function SignUp() {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const handleFullNameChange = (event) => {
    setFullName(event.target.value);
  };

  const handleEmailChange = (event) => {
    const newEmail = event.target.value;
    setEmail(newEmail);
  
    if (!validateEmail(newEmail)) {
      setPasswordError('Please enter a valid email address.');
    } else {
      setPasswordError('');
    }
  };
  
  const validateEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z.-]{2,}$/;
    return emailRegex.test(email);
  };

  const handlePasswordChange = (event) => {
    const newPassword = event.target.value;
    setPassword(newPassword);

    if (
      newPassword.length < 8 ||
      !/[A-Z]/.test(newPassword) || 
      !/\d/.test(newPassword) 
    ) { 
      setPasswordError('Password must be at least 8 characters long and contain at least one uppercase letter and one number.');
    } else {
      setPasswordError('');
    }
  };
  const handleSignUp = () => {
    if (fullName.trim() === '' || password.trim() === ''||email.trim()=== '') {
      setPasswordError('Please enter both username and password.');
    }
    else if (!validateEmail(email)) {
      setPasswordError('Please enter a valid email address.');
    }
     else {      window.location.href='/';}
    };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!passwordError) {
      console.log('Full Name:', fullName);
      console.log('Email:', email);
      console.log('Password:', password);

      setFullName('');
      setEmail('');
      setPassword('');
    }
  };

  return (
    <div className="form-box">
      <form className="form" onSubmit={handleSubmit}>
        <span className="title">Sign up</span>
        <br />
        <span className="subtitle">Create a free account with your email.</span>
        <br></br>
        <br></br>

        <div className="form-container">
          <label>
          Username:
          <input
            type="text"
            className="input"
            placeholder="Full Name"
            value={fullName}
            onChange={handleFullNameChange}
            required
            />
            </label>
            <br></br>
            <br></br>
            <label>
            E-mail:
            <br></br>
          <input
            type="email"
            className="input"
            placeholder="Email"
            value={email}
            onChange={handleEmailChange}
            required
            />
            </label>
            <br></br>
            <br></br>
            <label>
            Password:
          <input
            type="password"
            className="input"
            placeholder="Password"
            value={password}
            onChange={handlePasswordChange}
            required
            />
            </label>
          {passwordError && <p className="error-message">{passwordError}</p>}
        </div>
            
        <button type="submit" className ="button-submit" onClick={handleSignUp} disabled={passwordError}>Sign up</button>

        <div className="form-section">
          <p>
            Have an account?{' '}
            <br></br>
            <br></br>
            <Link to="/">
              <button type="button" className ="button-submit">Log in</button>
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
}

export default SignUp;