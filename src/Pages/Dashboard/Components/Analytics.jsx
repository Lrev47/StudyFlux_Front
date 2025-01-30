import React, { useState } from 'react';
import '../Style/Analytics.css';

function Analytics() {
  // Example data: total time in minutes
  const [timeStudied, setTimeStudied] = useState(120);

  // Convert minutes to hours and minutes
  const hours = Math.floor(timeStudied / 60);
  const minutes = timeStudied % 60;

  return (
    <div className="analytics-container dashboard-card">
      <h2 className="analytics-title">Analytics</h2>
      <p className="analytics-description">
        Total Time Studied:
      </p>
      <p className="analytics-time">
        {hours}h {minutes}m
      </p>
      <p className="analytics-note">
        (This is a placeholder. Eventually, we’ll show charts or more data.)
      </p>
    </div>
  );
}

export default Analytics;
