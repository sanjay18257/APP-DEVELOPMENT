import React from 'react';
import '../../assets/css/userhome.css';
function NavigationBar() {
  return (
    
    <div className="navbar">
      <ul>
        <li ><a  href="/userhome">Home</a></li>
        <li><a href="/userprofile">Profile</a></li>
        <li><a href="/adminlog">Admin </a></li>
        <li className="activestat"><a href="/contact">Contact</a></li>
        <li className="rightlogout"><a  href="/login">Logout</a></li>
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

function Contact() {
  return (
    <>
      <NavigationBar />
    <div className="landcontainer" >
      <div className="contactcontent">
      <div className="contact">
        <div className="profile-card">

          <h2>Contact Us</h2>
          <div className="contact-details">
            <p>
              <strong>Email:</strong> contact@example.com
            </p>
            <p>
              <strong>Phone:</strong> +1 (123) 456-7890
            </p>
            {/* Add more contact details as needed */}
          </div>
          <div className="social-media-links">
            <h3>Follow Us on Social Media</h3>
            <ul>
              <li>
                <a href="https://www.facebook.com/example" target="_blank" rel="noopener noreferrer">
                  <i className="bi bi-facebook"></i> Facebook
                </a>
              </li>
              <li>
                <a href="https://twitter.com/example" target="_blank" rel="noopener noreferrer">
                  <i className="bi bi-twitter"></i> Twitter
                </a>
              </li>
              <li>
                <a href="https://www.youtube.com/user/example" target="_blank" rel="noopener noreferrer">
                  <i className="bi bi-youtube"></i> YouTube
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/example/" target="_blank" rel="noopener noreferrer">
                  <i className="bi bi-instagram"></i> Instagram
                </a>
              </li>            </ul>
          </div>
        </div>
        </div>

      </div>
    </div>
      <Footer />
    </>
  );
}

export default Contact;
