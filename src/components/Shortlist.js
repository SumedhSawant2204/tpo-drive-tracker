// Shortlist.js

import React, { useState } from 'react';
import './Shortlist.css'; // Import the CSS file

function Shortlist() {
  const [shortlistedStudents, setShortlistedStudents] = useState([
    { id: 1, name: 'John Doe', email: 'john.doe@example.com' },
    { id: 2, name: 'Jane Smith', email: 'jane.smith@example.com' },
    { id: 3, name: 'Michael Johnson', email: 'michael.johnson@example.com' },
  ]);

  const handleDelete = (id) => {
    // Logic to delete shortlisted student with given id
    const updatedShortlistedStudents = shortlistedStudents.filter(student => student.id !== id);
    setShortlistedStudents(updatedShortlistedStudents);
  };

  const handleView = (id) => {
    // Logic to view details of shortlisted student with given id
    console.log(`Viewing details of student with id ${id}`);
  };

  return (
    <div className="shortlist-container">
      <h2 className="shortlist-header">Shortlisted Students</h2>
      <table className="shortlist-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {shortlistedStudents.map(student => (
            <tr key={student.id}>
              <td>{student.name}</td>
              <td>{student.email}</td>
              <td className="actions">
                <button className="delete-btn" onClick={() => handleDelete(student.id)}>Delete</button>
                <button className="view-btn" onClick={() => handleView(student.id)}>View Details</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Shortlist;
