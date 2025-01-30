import React from 'react';
import '../Style/FreeTier.css';

function FreeTier() {
  return (
    <div className="free-tier-card tier-card">
      <h2 className="tier-card__title">Free</h2>
      <p className="tier-card__price">$0/month</p>
      <ul className="tier-card__features">
        <li>View public flashcard decks</li>
        <li>Manually create decks, study guides, and practice tests</li>
        <li>Train with the flashcards</li>
        <li>Print out anything you make</li>
      </ul>
      <button className="tier-card__button">Get Started</button>
    </div>
  );
}

export default FreeTier;
