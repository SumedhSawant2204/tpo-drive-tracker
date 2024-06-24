// DriveStatus.js

import React, { useState } from 'react';

const DriveStatus = () => {
  const [selectedCompany, setSelectedCompany] = useState('');
  const [companyStatus, setCompanyStatus] = useState('');
  const [companyComments, setCompanyComments] = useState('');

  // Dummy data for dropdown options
  const companies = [
    { id: 1, name: 'Company A', status: 'Confirmed', comments: 'Good progress in interviews' },
    { id: 2, name: 'Company B', status: 'Pending', comments: 'Awaiting final decision' },
    { id: 3, name: 'Company C', status: 'Completed', comments: 'Selected candidates notified' }
  ];

  // Handle change in dropdown selection
  const handleCompanyChange = (event) => {
    const companyName = event.target.value;
    const selectedCompany = companies.find(company => company.name === companyName);
    if (selectedCompany) {
      setSelectedCompany(selectedCompany.name);
      setCompanyStatus(selectedCompany.status);
      setCompanyComments(selectedCompany.comments);
    } else {
      setSelectedCompany('');
      setCompanyStatus('');
      setCompanyComments('');
    }
  };

  return (
    <div className="drive-status-container">
      <h2>Drive Status</h2>
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
        <div className="company-details">
          <h3>{selectedCompany}</h3>
          <p><strong>Status:</strong> {companyStatus}</p>
          <p><strong>Comments:</strong> {companyComments}</p>
        </div>
      )}
    </div>
  );
};

export default DriveStatus;
