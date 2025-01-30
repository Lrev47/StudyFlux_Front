import React, { useState } from 'react';
import '../Style/StudyGuides.css';

function StudyGuides() {
  // Example data
  const [studyGuideCount, setStudyGuideCount] = useState(3);

  const handleGenerateGuide = () => {
    // Placeholder: generate new study guide logic
    alert('Generate new study guide logic goes here!');
  };

  const handleViewGuides = () => {
    // Placeholder: navigate to a list of study guides
    alert('View all study guides logic goes here!');
  };

  const handleDownloadGuides = () => {
    // Placeholder: download or print study guides
    alert('Download/Print study guides logic goes here!');
  };

  return (
    <div className="studyguides-container dashboard-card">
      <h2 className="studyguides-title">Study Guides</h2>
      <p className="studyguides-count">Number of Guides: {studyGuideCount}</p>
      <div className="studyguides-actions">
        <button className="studyguides-button" onClick={handleGenerateGuide}>
          Generate New Guide
        </button>
        <button className="studyguides-button" onClick={handleViewGuides}>
          View Guides
        </button>
        <button className="studyguides-button" onClick={handleDownloadGuides}>
          Download
        </button>
      </div>
    </div>
  );
}

export default StudyGuides;
