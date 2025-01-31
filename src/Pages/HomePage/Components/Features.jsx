import React from "react";
import "../Style/Features.css";

function FeaturesSection() {
  return (
    <section className="features-section">
      <div className="container">
        <h2 className="features-heading">
          Our <span className="keyword-interactive">features</span>
        </h2>

        <div className="features-grid">
          {/* Feature 1: Flashcards */}
          <div className="feature-card feature-card--purple">
            <h3>Flashcards</h3>
            {/* Image between heading & paragraph */}
            <img
              className="feature-icon"
              src="/icons8-study-80.png"
              alt="Study Icon"
            />
            <p>
              AI-generated flashcards to help you learn and memorize any topic
              more efficiently.
            </p>
          </div>

          {/* Feature 2: Study Guides */}
          <div className="feature-card feature-card--lavender">
            <h3>Study Guides</h3>
            <img
              className="feature-icon"
              src="/icons8-study-80.png"
              alt="Study Icon"
            />
            <p>
              Organized, AI-crafted outlines for every subject to keep you on
              track.
            </p>
          </div>

          {/* Feature 3: Practice Tests */}
          <div className="feature-card feature-card--yellow">
            <h3>Practice Tests</h3>
            <img
              className="feature-icon"
              src="/icons8-study-80.png"
              alt="Study Icon"
            />
            <p>
              Test your knowledge with realistic practice exams and quiz
              yourself any time.
            </p>
          </div>

          {/* Feature 4: ATS‑Optimized Resumes */}
          <div className="feature-card feature-card--blue">
            <h3>ATS‑Optimized Resumes</h3>
            <img
              className="feature-icon"
              src="/icons8-study-80.png"
              alt="Study Icon"
            />
            <p>
              Tailor your resume to any job description with AI and stand out in
              ATS scans.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FeaturesSection;
