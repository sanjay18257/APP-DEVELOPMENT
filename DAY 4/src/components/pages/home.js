import React from 'react';
import '../../assets/css/home.css';
import { useSelector } from 'react-redux';
import { selectUser } from '../redux/UserSlice';

import Header from '../header/header';

function Home() {
    const user=useSelector(selectUser);
    const username= user.name;
    return (
      <div className="home">
       <div className="dashboard">
        <h2>Dashboard</h2>
        <ul className="dashboard-menu">
          <li><a className="dashboard-text"href="/profile">Profile &nbsp; <i className="bi bi-person-circle  fs-4 text-white"></i></a></li>
          <li><a className="dashboard-text"href="/users">Users</a></li>
          <li><a className="dashboard-text"href="/campaigns">Campaigns</a></li>
          <li><a className="dashboard-text2"href="/">Log out</a></li>
        </ul>
      </div>
        <div className="main-content">
          <Header/>
          <header>
            <h1>Welcome {username}</h1>
          </header>
          <br></br>
          <h1>      LANDING PAGE</h1>
          <br></br>
          
        </div>
      </div>
    );
  }
  
  export default Home;