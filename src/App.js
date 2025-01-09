import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css'; // Import CSS

// Import Components
import RegistrationPage from './RegistrationPage';
import LoginPage from './LoginPage';
import DashboardPage from './DashboardPage';
import ClassPage from './ClassPage';
import SubjectDetailPage from './SubjectDetailPage'; // Import new page

const App = () => {
  const schools = ["Hyderabad Public School"];
  const [selectedSchool, setSelectedSchool] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);  // Track login status

  const handleSelectChange = (event) => {
    setSelectedSchool(event.target.value);
  };

  return (
    <Router>
      <div>
        {/* Conditionally render based on login status */}
        {!isLoggedIn ? (
          <>
            {!selectedSchool && (
              <div className="select-school">
                <h1>Welcome to the Application</h1>
                <label htmlFor="school">Select a School:</label>
                <select
                  id="school"
                  value={selectedSchool}
                  onChange={handleSelectChange}
                  style={{ padding: '10px' }}
                >
                  <option value="">--Select a School--</option>
                  {schools.map((school, index) => (
                    <option key={index} value={school}>
                      {school}
                    </option>
                  ))}
                </select>
              </div>
            )}

            {selectedSchool && (
              <div className="select-school">
                <h2>You selected: {selectedSchool}</h2>
                <div>
                  <Link to={`/register/${selectedSchool}`}>
                    <button>Go to Registration</button>
                  </Link>
                  <Link to={`/login/${selectedSchool}`}>
                    <button>Go to Login</button>
                  </Link>
                </div>
              </div>
            )}
          </>
        ) : (
          <Routes>
            <Route path="/dashboard/:school" element={<DashboardPage />} />
            <Route path="/class/:className" element={<ClassPage />} />
            <Route path="/class/:className/subject/:subject" element={<SubjectDetailPage />} />
          </Routes>
        )}

        {/* Registration and Login Routes */}
        <Routes>
          <Route
            path="/register/:school"
            element={<RegistrationPage />}
          />
          <Route
            path="/login/:school"
            element={<LoginPage setIsLoggedIn={setIsLoggedIn} />}
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
