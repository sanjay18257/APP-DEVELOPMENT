import React from 'react';
import '../../assets/css/home.css';

function Users() {
  const users = [
    { id: 1, name: 'John Doe', email: 'john@example.com' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com' },
    { id: 3, name: 'Bob Johnson', email: 'bob@example.com' },
    { id: 3, name: 'John wick', email: 'john@example.com' },
    { id: 3, name: 'WilliamButcher', email: 'will@example.com' },
    { id: 3, name: 'Peter Parker', email: 'peter@example.com' },
  ];
    return (
      <div className="home">
       <div className="dashboard">
        <h2>Dashboard</h2>
        <ul className="dashboard-menu">
          <li><a className="dashboard-text"href="/home">Home</a></li>
          <li><a className="dashboard-text"href="/profile">Profile &nbsp; <i className="bi bi-person-circle  fs-4 text-white"></i></a></li>
          <li><a className="dashboard-text"href="/users">Users</a></li>
          <li><a className="dashboard-text"href="/campaigns">campaigns</a></li>
          <li><a className="dashboard-text" href="/emailsub">Email Subscribers</a></li>
          <li><a className="dashboard-text2"href="/login">Log out</a></li>
        </ul>
      </div>
        <div className="main-content">
          <div className="opacity">

          <br></br>
          <h1 style={{color:'white'}}>USERS:</h1>
          <br></br>
        <div className="users-list">
      {users.map((user) => (
        <div key={user.id} className="user-card">
          <h2>{user.name}</h2>
          <p>Email: {user.email}</p>
        </div>
      ))}
    </div>
      </div>
        </div>
      </div>
    );
  }
  
  export default Users;