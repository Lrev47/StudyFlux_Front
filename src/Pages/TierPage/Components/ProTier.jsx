import React from 'react';
import '../Style/ProTier.css';

function ProTier() {
  return (
    <div className="pro-tier-card tier-card">
      <h2 className="tier-card__title">Pro</h2>
      <p className="tier-card__price">$19.99/month</p>
      <ul className="tier-card__features">
        <li>100 decks, 100 study guides, 100 practice tests monthly</li>
        <li>Upload your own documents</li>
        <li>Generate flashcards, study guides, and practice tests from them</li>
        <li>All Premium features included</li>
      </ul>
      <button className="tier-card__button">Go Pro</button>
    </div>
  );
}

export default ProTier;
