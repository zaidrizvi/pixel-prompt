import React from 'react';
import Hero from '../components/home/Hero.jsx';
import Services from '../components/home/Services2.jsx';

// import VideoShowcase from '../components/VideoSection.jsx';

import WhatWeDo from '../components/WhatWeDo.jsx';

import Timeline from '../components/Timeline.jsx';
import Stats from '../components/Stats.jsx';
import Stats2 from '../components/Stats2.jsx';
import BrandSection from '../components/BrandSection.jsx';
import WorkComponent from '../components/WorkComponent.jsx';



const Home = () => {
  return (
    <div className="overflow-x-hidden">
      <Hero />
      {/* <VideoShowcase/> */}
     <WorkComponent/>
     <WhatWeDo/>
     <Timeline/>
      <Services/>
     <Stats/>
      <BrandSection/>
      <Stats2/>
      
    </div>
  );
};

export default Home;
