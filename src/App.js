import React from 'react';
import DriveStatus from './components/DriveStatus';
import DriveUpdate from './components/DriveUpdate';
import StudentProgress from './components/StudentProgress';
import Shortlist from './components/Shortlist';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>TPO Drive Tracker</h1>
      <DriveStatus />
      <DriveUpdate />
      <Shortlist />
      <StudentProgress />
      
    </div>
  );
}

export default App;
