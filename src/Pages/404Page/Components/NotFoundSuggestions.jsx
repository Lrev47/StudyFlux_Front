import React from 'react';
import { Link } from 'react-router-dom';
import '../Style/NotFoundSuggestions.css';

function NotFoundSuggestions() {
  return (
    <div className="not-found-suggestions-container">
      <h3 className="suggestions-title">Here are some helpful links:</h3>
      <ul className="suggestions-list">
        <li>
          <Link to="/">Go to Homepage</Link>
        </li>
        <li>
          <Link to="/login">Log In</Link>
        </li>
        <li>
          <Link to="/signup">Sign Up</Link>
        </li>
        <li>
          <Link to="/contact">Contact Us</Link>
        </li>
      </ul>
      <p className="suggestions-note">
        If you still can’t find what you’re looking for, feel free to reach out!
      </p>
    </div>
  );
}

export default NotFoundSuggestions;
