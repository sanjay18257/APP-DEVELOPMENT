import React from 'react';
import '../assets/css/home.css';

function Home() {
    return (
      <div className="home">
       <div className="dashboard">
        <h2>Dashboard</h2>
        <ul className="dashboard-menu">
          <li><a href="#profile">Profile</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#services">Services</a></li>
        </ul>
      </div>
        <div className="main-content">
          <header>
            <h1>Welcome to Your Digital Marketing Dashboard</h1>
          </header>
          <section className="features">
            <div className="feature">
              <h2>Campaign Management</h2>
              <p>Create and manage marketing campaigns across various channels.</p>
            </div>
            <div className="feature">
              <h2>Content Management</h2>
              <p>Create and organize content for your campaigns.</p>
            </div>
            <div className="feature">
              <h2>Social Media Management</h2>
              <p>Schedule posts, engage with followers, and monitor social media performance.</p>
            </div>
            {/* Add more feature sections */}
          </section>
        </div>
      </div>
    );
  }
  
  export default Home;