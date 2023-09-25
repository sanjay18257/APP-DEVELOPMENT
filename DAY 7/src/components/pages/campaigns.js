import React from 'react';
import {  FaEdit, FaTrash } from 'react-icons/fa';
import '../../assets/css/home.css';
import { useState } from 'react';

function Campaigns() {
  const dummyCampaigns = [
    {
      id: 1,
      name: 'Summer Sale 2023',
      user: 'John Doe',
      status: 'Active',
    },
    {
      id: 2,
      name: 'Back to School Promo',
      user: 'Jane Smith',
      status: 'Paused',
    },
    {
      id: 3,
      name: 'Holiday Special Offer',
      user: 'Mike Johnson',
      status: 'Active',
    },
    {
      id: 4,
      name: "New Year's Countdown Sale",
      user: 'Emily White',
      status: 'Inactive',
    },
    // Add more campaigns as needed
  ];

  // State to store the list of campaigns
  const [campaigns] = useState(dummyCampaigns);

  return (
    <div className="home">
      <div className="dashboard">
        <h2>Dashboard</h2>
        <ul className="dashboard-menu">
          <li><a className="dashboard-text" href="/home">Home</a></li>
          <li><a className="dashboard-text" href="/profile">Profile &nbsp; <i className="bi bi-person-circle fs-4 text-white"></i></a></li>
          <li><a className="dashboard-text" href="/users">Users</a></li>
          <li><a className="dashboard-text" href="/campaigns">campaigns</a></li>
          <li><a className="dashboard-text" href="/emailsub">Email Subscribers</a></li>
          <li><a className="dashboard-text2" href="/login">Log out</a></li>
        </ul>
      </div>
      <div className="main-content">
        <header>
          <h1 style={{ color: 'white' }}>our campaigns!</h1>
        </header>
        <div className="campaign-panel">
          <h2 className="campaign-heading">Campaign Management</h2>
          <table className="campaign-table">
            <thead>
              <tr>
                <th className="campaign-table-header">ID</th>
                <th className="campaign-table-header">Name</th>
                <th className="campaign-table-header">User</th>
                <th className="campaign-table-header">Status</th>
                <th className="campaign-table-header">Actions</th>
              </tr>
            </thead>
            <tbody>
              {campaigns.map((campaign) => (
                <tr key={campaign.id}>
                  <td>{campaign.id}</td>
                  <td>{campaign.name}</td>
                  <td>{campaign.user}</td>
                  <td>{campaign.status}</td>
                  <td>
                    {/* Edit button with FaEdit icon */}
                    <button className="campaign-action-button">
                    <FaEdit className="edit-icon" />
                    </button>
                    &nbsp;
                    {/* Delete button with FaTrash icon */}
                    <button className="campaign-action-button">
                    <FaTrash className="delete-icon" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Campaigns;
