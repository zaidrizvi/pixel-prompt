import React, { useEffect, useRef, useState } from 'react';

const WhatWeDo = () => {
  const [visibleItems, setVisibleItems] = useState([]);
  const [currentStep, setCurrentStep] = useState(0);
  const itemRefs = useRef([]);

  const messages = [
    {
      id: 1,
      label: "What we do",
      title: "WE COMBINE",
      highlight: "CREATIVITY & STRATEGY",
      description: "To build partnerships and craft content that scales your brand's digital footprint."
    },
  ];

  // Fast typewriter effect hook without cursor
  const useTypewriter = (text, speed = 30, shouldStart = false) => {
    const [displayText, setDisplayText] = useState('');
    const [isComplete, setIsComplete] = useState(false);

    useEffect(() => {
      if (!shouldStart) {
        setDisplayText('');
        setIsComplete(false);
        return;
      }

      let currentIndex = 0;
      
      const interval = setInterval(() => {
        if (currentIndex <= text.length) {
          setDisplayText(text.slice(0, currentIndex));
          currentIndex++;
        } else {
          setIsComplete(true);
          clearInterval(interval);
        }
      }, speed);

      return () => clearInterval(interval);
    }, [text, speed, shouldStart]);

    return { displayText, isComplete };
  };

  // Initialize typewriter effects with faster speeds
  const labelTypewriter = useTypewriter(messages[0].label, 25, currentStep >= 1);
  const titleTypewriter = useTypewriter(messages[0].title, 30, currentStep >= 2);
  const highlightTypewriter = useTypewriter(messages[0].highlight, 25, currentStep >= 3);
  const descriptionTypewriter = useTypewriter(messages[0].description, 15, currentStep >= 4);

  // Progress to next step when current typewriter completes with shorter delays
  useEffect(() => {
    if (currentStep === 0) return;

    const stepTimers = [];

    if (currentStep === 1 && labelTypewriter.isComplete) {
      stepTimers.push(setTimeout(() => setCurrentStep(2), 100));
    }
    
    if (currentStep === 2 && titleTypewriter.isComplete) {
      stepTimers.push(setTimeout(() => setCurrentStep(3), 100));
    }
    
    if (currentStep === 3 && highlightTypewriter.isComplete) {
      stepTimers.push(setTimeout(() => setCurrentStep(4), 100));
    }

    return () => stepTimers.forEach(timer => clearTimeout(timer));
  }, [
    currentStep, 
    labelTypewriter.isComplete, 
    titleTypewriter.isComplete, 
    highlightTypewriter.isComplete
  ]);

  useEffect(() => {
    const observers = [];
    
    itemRefs.current.forEach((ref, index) => {
      if (ref) {
        const observer = new IntersectionObserver(
          ([entry]) => {
            if (entry.isIntersecting) {
              setVisibleItems(prev => [...new Set([...prev, index])]);
              
              // Start the sequential typewriter effects immediately
              if (index === 0) {
                setCurrentStep(1);
              }
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
    <section className="bg-white dark:bg-black relative overflow-hidden py-16 lg:py-24">
      {/* Grid background */}
      <div className="absolute inset-0 opacity-[0.01]">
        <div className="grid grid-cols-12 h-full">
          {Array.from({ length: 12 }).map((_, i) => (
            <div key={i} className="border-l border-gray-200 dark:border-white/10"></div>
          ))}
        </div>
        <div className="absolute inset-0 grid grid-rows-8">
          {Array.from({ length: 8 }).map((_, i) => (
            <div key={i} className="border-t border-gray-200 dark:border-white/10"></div>
          ))}
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
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
              <div className="space-y-6">
                {/* Label with typewriter effect - no cursor */}
                {message.label && (
                  <div className="text-gray-600 dark:text-light-gray font-modern text-sm tracking-wider uppercase">
                    {labelTypewriter.displayText}
                  </div>
                )}

                <div className="space-y-4">
                  {/* Title with typewriter effect - no cursor */}
                  {message.title && (
                    <div className="space-y-2">
                      <h2 className="font-cyber text-5xl lg:text-7xl font-bold text-light-text dark:text-white leading-tight">
                        {titleTypewriter.displayText}
                      </h2>
                      
                      {/* Highlight with typewriter effect - no cursor */}
                      {message.highlight && (
                        <h3 className="font-cyber text-5xl lg:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-electric-blue to-cyber-purple leading-tight">
                          {highlightTypewriter.displayText}
                        </h3>
                      )}
                    </div>
                  )}

                  {/* Description with typewriter effect - no cursor */}
                  {message.description && (
                    <p className="text-gray-600 dark:text-light-gray text-lg lg:text-xl font-modern leading-relaxed max-w-3xl">
                      {descriptionTypewriter.displayText}
                    </p>
                  )}
                </div>

                {/* Gradient line appears after all text is complete */}
                <div 
                  className={`w-16 h-0.5 bg-gradient-to-r from-electric-blue to-cyber-purple transition-all duration-500 ${
                    descriptionTypewriter.isComplete ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'
                  }`}
                  style={{ transformOrigin: 'left' }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br pointer-events-none"></div>
    </section>
  );
};

export default WhatWeDo;
