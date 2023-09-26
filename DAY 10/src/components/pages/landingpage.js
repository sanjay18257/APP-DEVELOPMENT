import React from 'react';
import '../../assets/css/landingpage.css';
import { Link } from 'react-router-dom';

function LandingPage() {
  return (
    <div className="landing-container">
      <div className="background"></div>
      <div className="landcontent">
        <h1>Welcome to the Landing Page</h1>
        <Link to ="/login">
            
        <button className="explore-button" >Explore</button>
        </Link>
      </div>
    </div>
  );
}

export default LandingPage;
