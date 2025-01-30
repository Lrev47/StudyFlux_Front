import React from 'react';
import './Style/TermsOfService.css';

// Import sub-components
import TOSOverview from './Components/TOSOverview';
import TOSDetails from './Components/TOSDetails';

function TermsOfService() {
  return (
    <section className="tos-section">
      <div className="tos-container container">
        <h1 className="tos-page-heading">Terms of Service</h1>
        <p className="tos-page-subheading">
          Please read these terms carefully before using StudyFlux.
        </p>

        {/* Sub-Components for layout */}
        <div className="tos-content">
          <TOSOverview />
          <TOSDetails />
        </div>
      </div>
    </section>
  );
}

export default TermsOfService;
