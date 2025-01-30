import React from 'react';
import './Style/404Page.css';

// Import sub-components
import NotFoundMessage from './Components/NotFoundMessage.jsx';
import NotFoundSuggestions from './Components/NotFoundSuggestions.jsx';

function NotFoundPage() {
  return (
    <section className="not-found-section">
      <div className="not-found-container container">
        <div className="not-found-box">
          <NotFoundMessage />
          <NotFoundSuggestions />
        </div>
      </div>
    </section>
  );
}

export default NotFoundPage;
