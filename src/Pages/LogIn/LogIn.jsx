import React, { useState } from 'react';
import './Style/LogIn.css'; // Make sure the path is correct (relative to this file)

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic client-side validation
    if (!email || !password) {
      setError('Please enter both email and password.');
      return;
    }

    // Clear any existing errors
    setError('');

    // TODO: Implement real authentication logic here or dispatch an action to Redux
    // For now, just log the credentials:
    console.log('Logging in with:', { email, password });
    alert(`Logged in with email: ${email}`);

    // Reset form fields (optional)
    setEmail('');
    setPassword('');
  };

  return (
    <div className="login-container">
      <div className="login-card card">
        <h2 className="login-heading">Sign In</h2>

        {error && <div className="login-error">{error}</div>}

        <form onSubmit={handleSubmit} className="login-form">
          <div className="form-group">
            <label htmlFor="loginEmail">Email</label>
            <input
              type="email"
              id="loginEmail"
              className="login-input"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              autoComplete="username"
            />
          </div>

          <div className="form-group">
            <label htmlFor="loginPassword">Password</label>
            <input
              type="password"
              id="loginPassword"
              className="login-input"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoComplete="current-password"
            />
          </div>

          <button type="submit" className="login-button">
            Log In
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
