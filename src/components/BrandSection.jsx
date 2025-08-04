import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const BrandSectionImproved = () => {
 const brands = [
  'G-SHOCK',
  'OPPO',
  'GEETANJALI SALON',
  'Dear Donna',
  'GARNIER',
  'HANDA',
  'CINK',
  'Burgrill',
  'SAVVY',
  'NOMAD PIZZA',
  'TRESemmé',
  'SNITCH',
  'CHEESECAKE & CO.',
  'KHAN CHACHA',
  'DARYAGANJ',
  'Yes madam',
  'McDonald’s',
  'KAMAL BHAI SAREE SANGAM',
  'ASTA BERRY',
  'Indian Sneaker Festival',
  'Honey & Dough',
  'URBAN MONKEY',
  'TACO BELL',
  'The Vintage परांदी',
  'Musaafir',
  'Domino’s',
  'Broadway',
  'Bikanervala',
];


  const marqueeRef = useRef(null);
  const [scrollWidth, setScrollWidth] = useState(0);

  const SPEED = 100; // pixels per second (you can tweak this)

  useEffect(() => {
    if (marqueeRef.current) {
      setScrollWidth(marqueeRef.current.scrollWidth);
    }
  }, []);

  const duration = scrollWidth / SPEED;

  return (
    <section className="bg-black py-16 overflow-hidden">
      <div className="text-center mb-12">
        <h2 className="text-5xl md:text-6xl pb-12 font-bold text-blue-500 tracking-wider">
          BRANDS
        </h2>
      </div>

      <div className="relative">
        {/* Gradient edges */}
        <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-black to-transparent z-10" />
        <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-black to-transparent z-10" />

        {/* Marquee container */}
        <div className="overflow-hidden">
          <motion.div
            className="flex gap-12 md:gap-16 lg:gap-20"
            ref={marqueeRef}
            animate={{ x: [0, -scrollWidth] }}
            transition={{
              repeat: Infinity,
              repeatType: 'loop',
              duration: duration || 10,
              ease: 'linear',
            }}
            style={{ willChange: 'transform' }}
          >
            {/* Repeat brands multiple times */}
            {[...brands, ...brands, ...brands].map((brand, index) => (
              <div
                key={index}
                className="flex items-center justify-center whitespace-nowrap"
              >
                <span className="text-white text-2xl md:text-3xl lg:text-4xl font-semibold hover:text-blue-400 transition-colors duration-300">
                  {brand}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BrandSectionImproved;
