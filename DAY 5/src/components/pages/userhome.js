import React from 'react';
import { useSelector } from 'react-redux';
import { selectUser } from '../redux/UserSlice';
import '../../assets/css/userhome.css';
function NavigationBar() {
  return (
    
    <div className="navbar">
      <ul>
        <li className="activestat"><a  href="/userhome">Home</a></li>
        <li><a href="/userprofile">Profile</a></li>
        <li><a href="/adminlog">Admin </a></li>
        <li><a href="/contact">Contact</a></li>
        <li><a  href="/login">Logout</a></li>
      </ul>
    </div>
  );
}

// Create a Footer component
function Footer() {
  return (
    <div className="footer">
      <p>&copy; 2023 Your Company</p>
      <div className="footer-links">
        <a href="/privacypolicy">Privacy Policy</a> | <a href="/termsandconditions">Terms and Conditions</a>
      </div>
    </div>
  );
}

function UserHome() {
  const user=useSelector(selectUser);
    const username= user.name;
  return (
    <>
      <NavigationBar />
    <div className="landcontainer" >
      <div className="userhomecontent">
        <h1>Welcome to the Landing Page {username} </h1>
        <p>This is the content of the landing page.</p>
        <p></p>
        <p>.</p>
        <p> </p>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>

      </div>
    </div>
      <Footer />
    </>
  );
}

export default UserHome;
