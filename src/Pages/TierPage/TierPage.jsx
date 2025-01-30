import React from 'react';
import './Style/TierPage.css';

// Import each tier component
import FreeTier from './Components/FreeTier';
import PremiumTier from './Components/PremiumTier';
import ProTier from './Components/ProTier';

function TierPage() {
  return (
    <section className="tier-section">
      <div className="tier-container container">
        {/* Page Heading */}
        <h1 className="tier-heading">Choose Your Plan</h1>
        <p className="tier-subheading">
          Find a plan that fits your needs and upgrade at any time.
        </p>

        {/* Tiers Grid */}
        <div className="tier-cards">
          <FreeTier />
          <PremiumTier />
          <ProTier />
        </div>
      </div>
    </section>
  );
}

export default TierPage;
