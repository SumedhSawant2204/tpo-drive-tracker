// DriveUpdate.js

import React, { useState } from 'react';

const DriveUpdate = () => {
  const [selectedCompany, setSelectedCompany] = useState('');
  const [newStatus, setNewStatus] = useState('');
  const [message, setMessage] = useState('');

  // Dummy data for dropdown options
  const companies = [
    { id: 1, name: 'Company A', status: 'Confirmed' },
    { id: 2, name: 'Company B', status: 'Pending' },
    { id: 3, name: 'Company C', status: 'Completed' }
  ];

  // Handle change in dropdown selection
  const handleCompanyChange = (event) => {
    const companyName = event.target.value;
    setSelectedCompany(companyName);
    // Reset message and newStatus when company changes
    setMessage('');
    setNewStatus('');
  };

  // Handle status update
  const handleStatusUpdate = () => {
    if (selectedCompany && newStatus) {
      // Simulate updating the status (replace with actual logic)
      setMessage(`Status updated for ${selectedCompany}: ${newStatus}`);
      // Reset state after updating
      setSelectedCompany('');
      setNewStatus('');
    } else {
      setMessage('Please select a company and enter a new status.');
    }
  };

  return (
    <div className="drive-update-container">
      <h2>Drive Update</h2>
      <div className="select-company">
        <label htmlFor="companySelect">Select Company:</label>
        <select id="companySelect" value={selectedCompany} onChange={handleCompanyChange}>
          <option value="">Select a company</option>
          {companies.map(company => (
            <option key={company.id} value={company.name}>{company.name}</option>
          ))}
        </select>
      </div>
      {selectedCompany && (
        <div className="update-status">
          <label htmlFor="statusInput">Update Status:</label>
          <input
            type="text"
            id="statusInput"
            value={newStatus}
            onChange={(e) => setNewStatus(e.target.value)}
            placeholder="Enter new status..."
          />
          <button onClick={handleStatusUpdate}>Update Status</button>
        </div>
      )}
      {message && <p className="message">{message}</p>}
    </div>
  );
};

export default DriveUpdate;
