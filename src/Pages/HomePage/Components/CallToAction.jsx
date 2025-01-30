import React from 'react';
import '../Style/CallToAction.css';

function CallToAction() {
  return (
    <section className="cta-section">
      <div className="cta-container">
        <h2 className="cta-heading">
          Ready to take your studying to the next level?
        </h2>
        <p className="cta-subtext">
          Join thousands of learners using our AI-powered flashcards, 
          guides, and practice tests!
        </p>
        <button className="cta-button">
          Sign Up Now
        </button>
      </div>
    </section>
  );
}

export default CallToAction;
