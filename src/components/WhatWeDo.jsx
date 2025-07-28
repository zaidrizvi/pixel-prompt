import React, { useEffect, useRef, useState } from 'react';

const WhatWeDo = () => {
  const [visibleItems, setVisibleItems] = useState([]);
  const itemRefs = useRef([]);

  const messages = [
    {
      id: 1,
      label: "What we do",
      title: "WE COMBINE",
      highlight: "CREATIVITY & STRATEGY",
      description: "To build partnerships and craft content that scales your brand's digital footprint."
    },
    {
      id: 2,
      label: "Who are we",
      title: "THE",
      highlight: "DYNAMIC FORCE",
      subtitle: "DRIVING THE CONTENT ECONOMY",
      description: "We're more than just a bridge between brands and creators."
    },
    {
      id: 3,
      label: "What Defines Us",
      description: "We craft compelling narratives and build strong, impactful partnerships that set new standards in the Indian creator economy.",
      hasButton: true,
      buttonText: "Dive Into Our Culture"
    }
  ];

  useEffect(() => {
    const observers = [];
    
    itemRefs.current.forEach((ref, index) => {
      if (ref) {
        const observer = new IntersectionObserver(
          ([entry]) => {
            if (entry.isIntersecting) {
              setTimeout(() => {
                setVisibleItems(prev => [...new Set([...prev, index])]);
              }, index * 300); // Staggered reveal like messages
            }
          },
          {
            threshold: 0.4,
            rootMargin: '0px'
          }
        );
        
        observer.observe(ref);
        observers.push(observer);
      }
    });

    return () => {
      observers.forEach(observer => observer.disconnect());
    };
  }, []);

  return (
    <section className="min-h-screen bg-black relative overflow-hidden">
      {/* Simple grid background */}
      <div className="absolute inset-0 opacity-5">
        <div className="grid grid-cols-8 h-full">
          {Array.from({ length: 8 }).map((_, i) => (
            <div key={i} className="border-l border-white/10"></div>
          ))}
        </div>
        <div className="absolute inset-0 grid grid-rows-8">
          {Array.from({ length: 8 }).map((_, i) => (
            <div key={i} className="border-t border-white/10"></div>
          ))}
        </div>
      </div>

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="max-w-6xl mx-auto space-y-32">
          {messages.map((message, index) => (
            <div
              key={message.id}
              ref={el => itemRefs.current[index] = el}
              className={`transform transition-all duration-700 ease-out ${
                visibleItems.includes(index)
                  ? 'translate-y-0 opacity-100'
                  : 'translate-y-8 opacity-0'
              }`}
            >
              {/* Message Container */}
              <div className="space-y-6">
                {/* Label */}
                {message.label && (
                  <div className="text-light-gray font-modern text-sm tracking-wider uppercase">
                    {message.label}
                  </div>
                )}

                {/* Main Content */}
                <div className="space-y-4">
                  {/* Title Section */}
                  {message.title && (
                    <div className="space-y-2">
                      <h2 className="font-cyber text-5xl lg:text-7xl font-bold text-white leading-tight">
                        {message.title}
                      </h2>
                      {message.highlight && (
                        <h3 className="font-cyber text-5xl lg:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-electric-blue to-cyber-purple leading-tight">
                          {message.highlight}
                        </h3>
                      )}
                      {message.subtitle && (
                        <h4 className="font-cyber text-4xl lg:text-6xl font-bold text-white leading-tight">
                          {message.subtitle}
                        </h4>
                      )}
                    </div>
                  )}

                  {/* Description */}
                  {message.description && (
                    <p className="text-light-gray text-lg lg:text-xl font-modern leading-relaxed max-w-3xl">
                      {message.description}
                    </p>
                  )}

                  {/* Button */}
                  {message.hasButton && (
                    <div className="pt-6">
                      <button className="px-6 py-3 bg-white text-black font-modern font-medium rounded-full hover:bg-light-gray transition-colors duration-300">
                        {message.buttonText}
                      </button>
                    </div>
                  )}
                </div>

                {/* Message indicator line */}
                <div className="w-16 h-0.5 bg-gradient-to-r from-electric-blue to-cyber-purple"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Third section with image layout */}
        <div className="mt-32">
          <div
            ref={el => itemRefs.current[3] = el}
            className={`transform transition-all duration-700 ease-out ${
              visibleItems.includes(3)
                ? 'translate-y-0 opacity-100'
                : 'translate-y-8 opacity-0'
            }`}
          >
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Text Content */}
              <div className="space-y-6">
                <h2 className="font-cyber text-4xl lg:text-5xl font-bold text-cyber-purple leading-tight">
                  What Defines Us
                </h2>
                <p className="text-white text-lg font-modern leading-relaxed">
                  We craft compelling narratives and build strong, impactful partnerships that set new standards in the Indian creator economy.
                </p>
                <button className="px-6 py-3 bg-white text-black font-modern font-medium rounded-full hover:bg-light-gray transition-colors duration-300">
                  Dive Into Our Culture
                </button>
              </div>

              {/* Image/Visual Section */}
              <div className="relative">
                {/* Purple speech bubble */}
                <div className="relative bg-cyber-purple rounded-3xl p-8 text-white">
                  <p className="text-lg font-modern leading-relaxed">
                    We are the mapmakers of the content realm, navigating the digital landscape since its wild west days.
                  </p>
                  
                  {/* Speech bubble tail */}
                  <div className="absolute bottom-0 left-8 transform translate-y-full">
                    <div className="w-0 h-0 border-l-[20px] border-l-transparent border-r-[20px] border-r-transparent border-t-[20px] border-t-cyber-purple"></div>
                  </div>
                </div>

                {/* Decorative elements */}
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-white rounded-full"></div>
                <div className="absolute -bottom-8 -left-8 w-12 h-12 bg-white rounded-full"></div>
                
                {/* Dotted line */}
                <div className="absolute top-1/2 right-0 transform translate-x-16 -translate-y-1/2">
                  <div className="w-24 border-t-2 border-dotted border-white"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
