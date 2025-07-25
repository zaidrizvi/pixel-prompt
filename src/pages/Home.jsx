import React from 'react';
import Hero from '../components/home/Hero.jsx';
import Services from '../components/home/Services.jsx';
import Portfolio from '../components/home/Portfolio.jsx';

import AboutSection from '../components/about/AboutSection.jsx';

const Home = () => {
  return (
    <div className="overflow-x-hidden">
      <Hero />
      <AboutSection />
      <Services />
      <Portfolio />
    </div>
  );
};

export default Home;
