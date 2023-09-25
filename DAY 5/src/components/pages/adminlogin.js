import React, { useState } from 'react';
import '../../assets/css/adminlogin.css';
import { useDispatch } from 'react-redux';
import { login } from '../redux/UserSlice';
function AdminLogin() {
  const [adminname, setAdminname] = useState('');
  const [adminpass, setAdminpass] = useState('');
  const [error, setError] = useState('');
  const dispatch=useDispatch();
  const handleLogin = () => {
    if (adminname.trim() === '' || adminpass.trim() === '') {
      setError('Please enter both admin name and password.');
    } else {
      dispatch(login(adminname));
      
      window.location.href='/home';
    }
  };
  const submitForm=(e)=>{
    e.preventDefault();
    console.log(e);
  }
  

  return (<form action="" onSubmit={submitForm}>
    <div className="admin-digital-marketing-login-background">
      <div className="admin-digital-marketing-login-form">
        <h1>Admin Log In</h1>
        <label>
          Admin Name:
          <div className="admin-input-form">
            <input
              type="text"
              placeholder="Admin name"
              value={adminname}
              onChange={(e) => setAdminname(e.target.value)}
              className="input"
            />
          </div>
        </label>
        <br></br>
        <label>
          Password:
          <div className="admin-input-form">
            <input
              type="password"
              placeholder="Password"
              value={adminpass}
              onChange={(e) => setAdminpass(e.target.value)}
              className="input"
            />
          </div>
        </label>
        <div className="admin-button-container">
          <button type="submit" onClick={handleLogin} className="button-submit">Log In</button>
        </div>
        {error && <p className="error-message">{error}</p>}

          <br></br>
      </div>
    </div>
    </form>
  );
}
export default AdminLogin;
