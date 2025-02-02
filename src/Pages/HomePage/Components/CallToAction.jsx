import React from 'react';
import '../Style/CallToAction.css';
import { useNavigate } from 'react-router-dom';



function CallToAction() {

  const navigate = useNavigate()

  
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
        <button onClick={() => navigate("/signup")} className="cta-button">
          Sign Up Now
        </button>
      </div>
    </section>
  );
}

export default CallToAction;
