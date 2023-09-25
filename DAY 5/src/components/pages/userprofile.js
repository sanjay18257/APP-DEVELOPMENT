import React from 'react';
import { useSelector } from 'react-redux';
import { selectUser } from '../redux/UserSlice';
import '../../assets/css/userhome.css';
function NavigationBar() {
  return (
    
    <div className="navbar">
      <ul>
        <li ><a  href="/userhome">Home</a></li>
        <li className="activestat"><a href="/userprofile">Profile</a></li>
        <li><a href="/adminlog">Admin </a></li>
        <li><a href="/contact">Contact</a></li>
        <li><a href="/login">Logout</a></li>
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

function UserProfile() {
  const user=useSelector(selectUser);
    const username= user.name;
    const userInfo = {
      username: username,
      id: 30,
      email: '@example.com',
      role: 'Administrator',
    };
  return (
    <>
      <NavigationBar />
    <div className="landcontainer" >
        
      <div className="userhomecontent">
      <div className="profile-container">
        <div className="profile-card">
          <h2>User Profile</h2>
          <table className="user-table">
            <tbody>
              <tr>
                <td>User ID:</td>
                <td>{userInfo.id}</td>
              </tr>
              <tr>
                <td>Name:</td>
                <td>{username}</td>
              </tr>
              <tr>
                <td>Email:</td>
                <td>{userInfo.email}</td>
              </tr>
              <tr>
                <td>Role:</td>
                <td>{userInfo.role}</td>
              </tr>
              {/* Add more user data fields as needed */}
            </tbody>
          </table>
          <button className="editprofile">edit profile</button>
        </div>
      </div>

      </div>
    </div>
      <Footer />
    </>
  );
}

export default UserProfile;
