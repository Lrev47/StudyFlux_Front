import React, { useState } from 'react';
import '../Style/Goals.css';

function Goals() {
  // Example data
  const [goals, setGoals] = useState([
    'Finish reading Chapter 4',
    'Review flashcards every morning',
    'Complete 2 practice tests this week'
  ]);

  // In a real app, you'd probably have a form to add/edit goals, etc.
  const handleAddGoal = () => {
    const newGoal = prompt('Enter a new study goal:');
    if (newGoal) {
      setGoals((prevGoals) => [...prevGoals, newGoal]);
    }
  };

  return (
    <div className="goals-container dashboard-card">
      <h2 className="goals-title">Goals</h2>
      <ul className="goals-list">
        {goals.map((goal, index) => (
          <li key={index} className="goals-list-item">
            {goal}
          </li>
        ))}
      </ul>
      <button className="goals-button" onClick={handleAddGoal}>
        Add Goal
      </button>
    </div>
  );
}

export default Goals;
