import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const DashboardPage = () => {
  const { school } = useParams();
  const [selectedClass, setSelectedClass] = useState('');
  const navigate = useNavigate();

  // Array of classes (Class 1 to Class 10)
  const classes = [
    'Class 1',
    'Class 2',
    'Class 3',
    'Class 4',
    'Class 5',
    'Class 6',
    'Class 7',
    'Class 8',
    'Class 9',
    'Class 10',
  ];

  // Handle class selection
  const handleClassChange = (event) => {
    setSelectedClass(event.target.value);
  };

  // Navigate to ClassPage when a class is selected
  const handleClassSelection = (className) => {
    navigate(`/class/${className}`); // Navigate to class-specific page
  };

  // Handle logout functionality
  const handleLogout = () => {
    navigate('/login');
  };

  return (
    <div className="dashboard-page">
      <h1>Welcome to the Dashboard, {school}</h1>
      <label htmlFor="class-select">Select a Class:</label>
      <select
        id="class-select"
        value={selectedClass}
        onChange={handleClassChange}
        style={{ padding: '10px', marginTop: '10px' }}
      >
        <option value="">--Select a Class--</option>
        {classes.map((className, index) => (
          <option key={index} value={className}>
            {className}
          </option>
        ))}
      </select>

      <div>
        {selectedClass && <h2>You have selected: {selectedClass}</h2>}
      </div>

      {/* Display Classes with images in a 3-column layout */}
      <div className="class-gallery">
        {classes.map((className, index) => (
          <div key={index} className="class-item">
            <h3>{className}</h3>
            <img
              src={`https://via.placeholder.com/100x100.png?text=Class+${index + 1}`}
              alt={className}
              style={{
                width: '100px',
                height: '100px',
                marginBottom: '10px',
                cursor: 'pointer',
              }}
              onClick={() => handleClassSelection(className)} // Handle class selection click
            />
          </div>
        ))}
      </div>

      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default DashboardPage;
