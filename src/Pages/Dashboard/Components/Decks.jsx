import React, { useState } from 'react';
import '../Style/Decks.css';

function Decks() {
  // Example data (replace with real API in the future)
  const [deckCount, setDeckCount] = useState(5);

  const handleGenerateDeck = () => {
    // Placeholder for generating a new deck (eventually call an API)
    alert('Generate new deck logic goes here!');
  };

  const handleViewDecks = () => {
    // Placeholder: go to a /decks page or open a modal
    alert('View decks logic goes here!');
  };

  const handlePractice = () => {
    // Placeholder: navigate to a flashcard practice route
    alert('Practice flashcards logic goes here!');
  };

  return (
    <div className="decks-container dashboard-card">
      <h2 className="decks-title">Decks</h2>
      <p className="decks-count">Number of Decks: {deckCount}</p>
      <div className="decks-actions">
        <button className="decks-button" onClick={handleGenerateDeck}>
          Generate New Deck
        </button>
        <button className="decks-button" onClick={handleViewDecks}>
          View Decks
        </button>
        <button className="decks-button" onClick={handlePractice}>
          Practice
        </button>
      </div>
    </div>
  );
}

export default Decks;
