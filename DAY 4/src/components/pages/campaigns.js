import React from 'react';
import '../../assets/css/home.css';

function Campaigns() {
    return (
      <div className="home">
       <div className="dashboard">
        <h2>Dashboard</h2>
        <ul className="dashboard-menu">
          <li><a className="dashboard-text"href="/profile">Profile</a></li>
          <li><a className="dashboard-text"href="/users">Users</a></li>
          <li><a className="dashboard-text"href="/campaigns">campaigns</a></li>
          <li><a className="dashboard-text2"href="/">Log out</a></li>
        </ul>
      </div>
        <div className="main-content">
          <header>
            <h1>our campaigns!</h1>
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
  
  export default Campaigns;