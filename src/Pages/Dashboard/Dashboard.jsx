import React from 'react';
import './Style/Dashboard.css';

// Sub-components
import Decks from './Components/Decks.jsx';
import StudyGuides from './Components/StudyGuides.jsx';
import PracticeTests from './Components/PracticeTests.jsx';
import Analytics from './Components/Analytics.jsx';
import Goals from './Components/Goals.jsx';

function Dashboard() {
  return (
    <section className="dashboard-section">
      <div className="dashboard-container container">
        <h1 className="dashboard-heading">Welcome to Your Dashboard</h1>
        <p className="dashboard-subheading">
          Manage your decks, study guides, practice tests, and track your progress here.
        </p>

        {/* Layout for the cards/components */}
        <div className="dashboard-grid">
          {/* Row 1: Decks, StudyGuides, PracticeTests */}
          <Decks />
          <StudyGuides />
          <PracticeTests />

          {/* Row 2: Analytics, Goals */}
          <Analytics />
          <Goals />

        </div>
      </div>
    </section>
  );
}

export default Dashboard;
