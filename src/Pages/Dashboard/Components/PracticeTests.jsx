import React, { useState } from 'react';
import '../Style/PracticeTests.css';

function PracticeTests() {
  // Example data
  const [testCount, setTestCount] = useState(2);

  const handleGenerateTest = () => {
    // Placeholder: generate a new practice test
    alert('Generate new practice test logic goes here!');
  };

  const handleViewTests = () => {
    // Placeholder: show existing practice tests
    alert('View practice tests logic goes here!');
  };

  const handleTakeTest = () => {
    // Placeholder: user starts a practice test
    alert('Take a practice test logic goes here!');
  };

  return (
    <div className="practice-tests-container dashboard-card">
      <h2 className="practice-tests-title">Practice Tests</h2>
      <p className="practice-tests-count">Number of Tests: {testCount}</p>
      <div className="practice-tests-actions">
        <button className="practice-tests-button" onClick={handleGenerateTest}>
          Generate New Test
        </button>
        <button className="practice-tests-button" onClick={handleViewTests}>
          View Tests
        </button>
        <button className="practice-tests-button" onClick={handleTakeTest}>
          Take Test
        </button>
      </div>
    </div>
  );
}

export default PracticeTests;
