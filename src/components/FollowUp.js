// FollowUp.js

import React, { useState } from 'react';
import './FollowUp.css'; // Import the CSS file

function FollowUp() {
  const [followUps, setFollowUps] = useState([
    { id: 1, company: 'Company A', status: 'Pending', lastContacted: '2024-06-20' },
    { id: 2, company: 'Company B', status: 'Contacted', lastContacted: '2024-06-18' },
    { id: 3, company: 'Company C', status: 'Completed', lastContacted: '2024-06-15' },
  ]);

  const handleDelete = (id) => {
    // Logic to delete follow-up item with given id
    const updatedFollowUps = followUps.filter(item => item.id !== id);
    setFollowUps(updatedFollowUps);
  };

  const handleEdit = (id) => {
    // Logic to edit follow-up item with given id
    // Example: Redirect to edit page or open modal for editing
    console.log(`Editing item with id ${id}`);
  };

  return (
    <div className="follow-up-container">
      <h2 className="follow-up-header">Follow-Up List</h2>
      <ul className="follow-up-list">
        {followUps.map(item => (
          <li key={item.id} className="follow-up-item">
            <div className="company-name">{item.company}</div>
            <div className="status">{item.status}</div>
            <div className="last-contacted">Last Contacted: {item.lastContacted}</div>
            <div className="actions">
              <button className="delete-btn" onClick={() => handleDelete(item.id)}>Delete</button>
              <button className="edit-btn" onClick={() => handleEdit(item.id)}>Edit</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FollowUp;
