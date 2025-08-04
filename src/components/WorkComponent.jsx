import React, { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import oppo1 from '../assets/oppo1.png';
import gshock from '../assets/gshock.png';
import ssm1 from '../assets/ssm1.jpg';
import garnier from '../assets/Gemini.png';
import vintage from '../assets/vintage.jpg';


const WorkComponent = () => {
  const [visibleArrows, setVisibleArrows] = useState(false);
  const [index, setIndex] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, threshold: 0.3 });
  const navigate = useNavigate();


  const data = [
  {
    id: 1,
    title: 'OPPO',
    tag: 'Influencer Marketing',
    img: oppo1,
    link: '/work/oppo'
  },
  {
    id: 2,
    title: 'G SHOCK',
    tag: 'Influencer Marketing',
    img: gshock,
    link: '/work/gshock'
  },
  {
    id: 3,
    title: 'Donavi Café',
    tag: 'Social Media Marketing',
    img: ssm1,
   link: 'https://www.instagram.com/deardonnaqutub'
  },
  {
    id: 4,
    title: 'Garnier',
    tag: 'Influencer Marketing',
    img: garnier,
    link: '/work/garnier'
  },
  
  {
    id: 5,
    title: 'The Vintage Parandi',
    tag: 'Social Media Marketing',
    img: vintage,
     link: 'https://www.instagram.com/thevintageparandi'
  }
];


  /* ───── helpers ───── */
  const scroll = (offset) => {
    document
      .querySelector('.work-scroll')
      ?.scrollBy({ left: offset, behavior: 'smooth' });
  };
const to = (url) => {
  if (url.startsWith('http')) {
    window.open(url, '_blank'); // open external links in new tab
  } else {
    navigate(url); // internal navigation
  }
};



  /* ───── variants ───── */
  const container = {
    hidden: { opacity: 0, y: 60 },
    show: { opacity: 1, y: 0, transition: { staggerChildren: 0.15 } }
  };

  const card = {
    hidden: { opacity: 0, y: 40 },
    show:   { opacity: 1, y: 0 }
  };

  return (
    <motion.section
      ref={ref}
      initial="hidden"
      animate={inView ? 'show' : 'hidden'}
      variants={container}
      /* ↓ THEME-AWARE BACKGROUND */
      className="bg-light dark:bg-black text-gray-900 dark:text-white
           min-h-[500px] py-16 sm:py-20 flex flex-col justify-center transition-colors duration-300"

    >
      {/* header */}
      <motion.h2
        variants={card}
        className="text-center text-5xl font-bold mb-16"
      >
        Our <span className='bg-light dark:bg-black text-gray-900 dark:text-pink-600'>Work</span>
      </motion.h2>

      {/* carousel */}
      <div
        onMouseEnter={() => setVisibleArrows(true)}
        onMouseLeave={() => setVisibleArrows(false)}
        className="relative w-full max-w-6xl mx-auto"
      >
        {/* ← arrow */}
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: visibleArrows ? 1 : 0, x: visibleArrows ? 0 : -20 }}
          transition={{ duration: 0.25 }}
          disabled={index === 0}
          onClick={() => { scroll(-350); setIndex(Math.max(0, index - 1)); }}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-10
                     w-10 h-10 rounded-full border
                     bg-black/10 dark:bg-white/10
                     border-black/20 dark:border-white/20
                     hover:bg-black/20 dark:hover:bg-white/20
                     flex items-center justify-center
                     transition"
        >
          <svg className="w-4 h-4" stroke="currentColor" fill="none" viewBox="0 0 24 24">
            <path d="M15 19l-7-7 7-7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </motion.button>

        {/* → arrow */}
        <motion.button
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: visibleArrows ? 1 : 0, x: visibleArrows ? 0 : 20 }}
          transition={{ duration: 0.25 }}
          disabled={index === data.length - 1}
          onClick={() => { scroll(350); setIndex(Math.min(data.length - 1, index + 1)); }}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-10
                     w-10 h-10 rounded-full border
                     bg-black/10 dark:bg-white/10
                     border-black/20 dark:border-white/20
                     hover:bg-black/20 dark:hover:bg-white/20
                     flex items-center justify-center
                     transition"
        >
          <svg className="w-4 h-4" stroke="currentColor" fill="none" viewBox="0 0 24 24">
            <path d="M9 5l7 7-7 7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </motion.button>

        {/* cards */}
       <div className="work-scroll flex gap-8 overflow-x-auto px-4 sm:px-10 md:px-16 pb-4 snap-x snap-mandatory hide-scrollbar">


          {data.map((item) => (
            <motion.div
              key={item.id}
              variants={card}
             
              onClick={() => to(item.link)}
              className="snap-center w-80 shrink-0 cursor-pointer
                         rounded-2xl overflow-hidden border
                         bg-white dark:bg-black
                         border-gray-200 dark:border-gray-700
                         "
            >
              {/* image */}
              <div className="relative h-52 overflow-hidden group">
                <motion.img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover"
                 
                  transition={{ duration: 0.4 }}
                />

                {/* play icon on hover */}
                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
                  <div className="w-14 h-14 bg-white/90 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-black ml-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* text */}
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-1">{item.title}</h3>
                <hr className="border-gray-300 dark:border-gray-600 mb-3"/>
                <p className="text-sm tracking-wide text-gray-600 dark:text-gray-400">
                  {item.tag}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default WorkComponent;
