import React from 'react';
import '../../assets/css/home.css';
import { useSelector } from 'react-redux';
import { selectUser } from '../redux/UserSlice';

function Profile() {
    const user=useSelector(selectUser);
    const username= user.name;
    const profileInfo = {
        username: username,
        age: 30,
        email: '@example.com',
        role: 'Administrator',
      };
    return (
      <div className="home">
       <div className="dashboard">
        <h2>Dashboard</h2>
        <ul className="dashboard-menu">
          <li><a className="dashboard-textx"href="/profile">Profile</a></li>
          <li><a className="dashboard-text"href="/users">Users</a></li>
          <li><a className="dashboard-text"href="/campaigns">Campaigns</a></li>
          <li><a className="dashboard-text2"href="/">Log out</a></li>
        </ul>
      </div>
        <div className="main-content">
          <header>
            <h1>Admin profile</h1>
          </header>
          <table className="profile-table">
        <tbody>
          <tr>
            <td><strong>Username:</strong></td>
            <td>{profileInfo.username}</td>
          </tr>
          <tr>
            <td><strong>Age:</strong></td>
            <td>{profileInfo.age}</td>
          </tr>
          <tr>
            <td><strong>Email:</strong></td>
            <td>{profileInfo.email}</td>
          </tr>
          <tr>
            <td><strong>role:</strong></td>
            <td>{profileInfo.role}</td>
          </tr>
        </tbody>
        </table>
        </div>
      </div>
    );
  }
  
  export default Profile;