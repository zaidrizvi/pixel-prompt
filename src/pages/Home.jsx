import React from 'react';
import Hero from '../components/home/Hero.jsx';
import Services from '../components/home/Services.jsx';
import Portfolio from '../components/home/Portfolio.jsx';
import VideoShowcase from '../components/VideoSection.jsx';
import AboutSection from '../components/about/AboutSection.jsx';
import WhatWeDo from '../components/WhatWeDo.jsx';
import BehindOurTeam from '../components/BehindOurTeam.jsx';

const Home = () => {
  return (
    <div className="overflow-x-hidden">
      <Hero />
      <VideoShowcase/>
     <WhatWeDo/>
     <BehindOurTeam/>
      <Services />
      <Portfolio />
    </div>
  );
};

export default Home;
