import React from 'react';
import '../Style/NotFoundMessage.css';

function NotFoundMessage() {
  return (
    <div className="not-found-message-container">
      <h1 className="not-found-title">404</h1>
      <h2 className="not-found-subtitle">Page Not Found</h2>
      <p className="not-found-description">
        Oops! The page you’re looking for doesn’t exist or may have been moved.
      </p>
    </div>
  );
}

export default NotFoundMessage;
