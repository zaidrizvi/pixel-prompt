import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

const WhatWeDo = () => {
  const [visibleItems, setVisibleItems] = useState([]);
  const itemRefs = useRef([]);

  const messages = {
    label: "What we do",
    title: "WE COMBINE",
    highlight: "CREATIVITY & STRATEGY",
    description:
      "To build partnerships and craft content that scales your brand's digital footprint.",
  };

  useEffect(() => {
    const observers = [];

    itemRefs.current.forEach((ref, index) => {
      if (ref) {
        const observer = new IntersectionObserver(
          ([entry]) => {
            if (entry.isIntersecting) {
              const delay = index * 200;
              setTimeout(() => {
                setVisibleItems((prev) => [...new Set([...prev, index])]);
              }, delay);
            }
          },
          {
            threshold: 0.3,
            rootMargin: "0px 0px -50px 0px",
          }
        );
        observer.observe(ref);
        observers.push(observer);
      }
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, []);

  return (
    <section className="relative  bg-white dark:bg-black overflow-hidden py-16 lg:py-24">
      {/* Grid background */}
     <div className="absolute inset-0 pointer-events-none z-0">
  <div className="w-full h-full grid grid-cols-12">
    {Array.from({ length: 12 }).map((_, i) => (
      <div
        key={i}
        className="border-l border-gray-200 dark:border-white/10"
      />
    ))}
  </div>
  <div className="absolute inset-0 grid grid-rows-8">
    {Array.from({ length: 8 }).map((_, i) => (
      <div
        key={i}
        className="border-t border-gray-200 dark:border-white/10"
      />
    ))}
  </div>
</div>


      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="space-y-6">
            {/* Label - Index 0 */}
            <div
              ref={(el) => (itemRefs.current[0] = el)}
              className={`transform transition-all duration-700 ease-out ${
                visibleItems.includes(0)
                  ? "translate-y-0 opacity-100"
                  : "translate-y-8 opacity-0"
              }`}
            >
              <div className="text-gray-600 text-xl dark:text-light-gray font-modern text-sm tracking-wider uppercase">
                {messages.label}
              </div>
            </div>

            {/* Title - Index 1 */}
            <div
              ref={(el) => (itemRefs.current[1] = el)}
              className={`transform transition-all duration-700 ease-out ${
                visibleItems.includes(1)
                  ? "translate-y-0 opacity-100"
                  : "translate-y-8 opacity-0"
              }`}
            >
              <h2 className="font-cyber text-4xl lg:text-7xl font-bold text-light-text dark:text-white leading-tight">
                {messages.title}
              </h2>
            </div>

            {/* Highlight - Index 2 */}
            <div
              ref={(el) => (itemRefs.current[2] = el)}
              className={`transform transition-all duration-700 ease-out ${
                visibleItems.includes(2)
                  ? "translate-y-0 opacity-100"
                  : "translate-y-8 opacity-0"
              }`}
            >
              <h3 className="font-cyber text-4xl lg:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-electric-blue to-cyber-purple leading-tight">
                {messages.highlight}
              </h3>
            </div>

            {/* Description - Index 3 */}
            <div
              ref={(el) => (itemRefs.current[3] = el)}
              className={`transform transition-all duration-700 ease-out ${
                visibleItems.includes(3)
                  ? "translate-y-0 opacity-100"
                  : "translate-y-8 opacity-0"
              }`}
            >
              <p className="text-gray-600 dark:text-light-gray text-lg lg:text-xl font-modern leading-relaxed max-w-3xl">
                {messages.description}
              </p>
            </div>

            {/* Gradient line - Index 4 */}
            <div
              ref={(el) => (itemRefs.current[4] = el)}
              className={`transform transition-all duration-700 ease-out pb-10 ${
                visibleItems.includes(4)
                  ? "translate-y-0 opacity-100 scale-x-100"
                  : "translate-y-8 opacity-0 scale-x-0"
              }`}
              style={{ transformOrigin: "left" }}
            >
              <div className="w-16 h-0.5 bg-gradient-to-r from-electric-blue to-cyber-purple "></div>

              
            </div>
            
          </div>
          <Link to="/about" >
    <button className="px-6 py-3 text-sm font-semibold rounded-full border border-transparent bg-gradient-to-r from-electric-blue to-cyber-purple text-white shadow-md hover:shadow-lg transition-all duration-300">
      Behind the Brilliance
    </button>
  </Link>
        </div>
        
      </div>

      {/* Background gradient overlay */}
     
    </section>
  );
};

export default WhatWeDo;
