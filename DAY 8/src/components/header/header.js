import React from 'react'
import "../../assets/css/header.css";

function Header() {
  return (
    <header className='header'>
         <div className='sidebar-brand'>
         <ul>
        <li className="activestat"><a  href="/userhome">Home</a></li>
        <li><a href="/userprofile">Profile</a></li>
        <li><a href="/adminlog">Admin </a></li>
        <li><a href="/contact">Contact</a></li>
        <li><a  href="/login">Logout</a></li>
      </ul>
        </div>
    </header>
  )
}

export default Header