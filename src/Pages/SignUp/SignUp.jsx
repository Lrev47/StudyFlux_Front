import React, { useState } from 'react';
import './Style/SignUp.css'; // Make sure the path is correct

function SignUp() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic client-side validation
    if (!name || !email || !password || !confirmPassword) {
      setError('Please fill out all the required fields.');
      return;
    }

    if (password !== confirmPassword) {
      setError('Passwords do not match. Please check again.');
      return;
    }

    // Clear any existing errors
    setError('');

    // TODO: Implement real sign-up logic here or dispatch an action to Redux
    console.log('Signing up with:', { name, email, password });

    // Reset form fields (optional)
    setName('');
    setEmail('');
    setPassword('');
    setConfirmPassword('');
    alert(`Signed up with email: ${email}`);
  };

  return (
    <div className="signup-container">
      <div className="signup-card card">
        <h2 className="signup-heading">Create an Account</h2>

        {error && <div className="signup-error">{error}</div>}

        <form onSubmit={handleSubmit} className="signup-form">
          <div className="form-group">
            <label htmlFor="signupName">Name</label>
            <input
              type="text"
              id="signupName"
              className="signup-input"
              placeholder="Your full name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              autoComplete="name"
            />
          </div>

          <div className="form-group">
            <label htmlFor="signupEmail">Email</label>
            <input
              type="email"
              id="signupEmail"
              className="signup-input"
              placeholder="Your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              autoComplete="email"
            />
          </div>

          <div className="form-group">
            <label htmlFor="signupPassword">Password</label>
            <input
              type="password"
              id="signupPassword"
              className="signup-input"
              placeholder="Create a password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoComplete="new-password"
            />
          </div>

          <div className="form-group">
            <label htmlFor="signupConfirmPassword">Confirm Password</label>
            <input
              type="password"
              id="signupConfirmPassword"
              className="signup-input"
              placeholder="Re-enter your password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              autoComplete="new-password"
            />
          </div>

          <button type="submit" className="signup-button">
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
