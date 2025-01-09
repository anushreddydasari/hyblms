import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const LoginPage = ({ setIsLoggedIn }) => {
  const { school } = useParams();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform login logic (authentication) here (currently just redirects)
    alert('Login Successful!');
    setIsLoggedIn(true); // Update login status to true
    // Navigate to Dashboard after successful login
    navigate(`/dashboard/${school}`);
  };

  return (
    <div className="login-page">
      <h1>Login to {school}</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>
        <br />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginPage;
