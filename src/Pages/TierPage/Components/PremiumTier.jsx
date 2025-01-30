import React from 'react';
import '../Style/PremiumTier.css';

function PremiumTier() {
  return (
    <div className="premium-tier-card tier-card">
      <h2 className="tier-card__title">Premium</h2>
      <p className="tier-card__price">$9.99/month</p>
      <ul className="tier-card__features">
        <li>AI-generate 120-card decks for any topic</li>
        <li>10 decks, 10 study guides, 10 practice tests monthly</li>
        <li>AI-generated practice tests & study guides</li>
        <li>Each card tied to a knowledge base</li>
      </ul>
      <button className="tier-card__button">Upgrade</button>
    </div>
  );
}

export default PremiumTier;
