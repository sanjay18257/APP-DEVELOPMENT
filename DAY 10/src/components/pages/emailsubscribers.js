import React, { useState, useEffect } from 'react';
import '../../assets/css/home.css';

function EmailSubscribers() {
  const [subscribers, setSubscribers] = useState([]);

  useEffect(() => {
    // Simulate fetching email subscriber data from your backend API
    // In a real application, replace this with actual API calls
    const dummyData = [
      { id: 1, name: 'John Doe', email: 'john@example.com', status: 'Active', openRate: '25%' },
      { id: 2, name: 'Jane Smith', email: 'jane@example.com', status: 'Inactive', openRate: '12%' },
      { id: 3, name: 'Bob Johnson', email: 'bob@example.com', status: 'Active', openRate: '18%' },
      { id: 4, name: 'John wick', email: 'john@example.com', status: 'Inctive', openRate: '18%' },
      { id: 5, name: 'William Butcher', email: 'will@example.com', status: 'Active', openRate: '18%' },
      // Add more dummy data as needed
    ];
    setSubscribers(dummyData);
  }, []);
  return (
    <div className="home">
      <div className="dashboard">
        <h2>Dashboard</h2>
        <ul className="dashboard-menu">
        <li><a className="dashboard-text"href="/home">Home</a></li>

          <li>
            <a className="dashboard-text" href="/profile">
              Profile &nbsp; <i className="bi bi-person-circle fs-4 text-white"></i>
            </a>
          </li>
          <li><a className="dashboard-text" href="/users">Users</a></li>
          <li><a className="dashboard-text" href="/campaigns">Campaigns</a></li>
          <li><a className="dashboard-text" href="/email-subscribers">Email Subscribers</a></li>
          <li><a className="dashboard-text2" href="/">Log out</a></li>
        </ul>
      </div>
      <div className="main-content">
        <div className="email-subscribers">
          <h2 style={{color:'white'}}>Email Subscribers</h2>
          <br></br>
          <table className="email">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Status</th>
                <th>Open Rate</th>
              </tr>
            </thead>
            <tbody>
              {subscribers.map((subscriber) => (
                <tr key={subscriber.id}>
                  <td>{subscriber.id}</td>
                  <td>{subscriber.name}</td>
                  <td>{subscriber.email}</td>
                  <td>{subscriber.status}</td>
                  <td>{subscriber.openRate}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default EmailSubscribers;
