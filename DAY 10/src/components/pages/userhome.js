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
        <li><a href="/mark">Email marketing</a></li>
        <li><a href="/ucamp">Campaign</a></li>

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
      <a href="/privacypolicy">Privacy Policy</a> | <a href="/termsandconditions">Terms and Conditions</a> | <a href="/faq">FAQ</a>
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
    <div className="userhomecontent" >
      <div >
        <h1 id="homeh" >Welcome to the Landing Page {username} !</h1>
        <p id="homep" >Discover a world of digital marketing possibilities. </p>
        <p id="homep">Your gateway to effective digital marketing strategies.</p>
            <p id="homep" >This is where your digital marketing story begins.</p>
      </div>
    </div>
      <Footer />
    </>
  );
}

export default UserHome;