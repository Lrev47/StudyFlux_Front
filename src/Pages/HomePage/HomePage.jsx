import React from 'react';
import Hero from './Components/Hero.jsx';
import FeaturesSection from './Components/Features.jsx';
import TestimonialsSection from './Components/Testimonials.jsx';
import StudyTipsSection from './Components/StudyTips.jsx';
import "./Style/HomePage.css"

function Homepage() {
  return (
    <>
      <Hero />
      <FeaturesSection />
      <TestimonialsSection />
      <StudyTipsSection />

    </>
  );
}

export default Homepage;
