// FILE: src/Pages/HomePage/Components/Hero.jsx
import React from "react";
import "../Style/Hero.css";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-overlay-content">
        <h1 className="hero-heading">
          The best place to
          <span className="keyword-study"> STUDY </span>
          and
          <span className="keyword-succeed"> SUCCEED </span>
          for any topic.
        </h1>

        <p className="hero-subtext">
          Discover AI-generated flashcards, practice tests, and study guides for
          whatever subject you need, all in one place.
        </p>

        <button className="hero-cta">Get Started</button>
      </div>
    </section>
  );
}

export default Hero;
