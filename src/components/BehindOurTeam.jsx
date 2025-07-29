import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
const BehindOurTeam = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  // Text content for typewriter effects
  const texts = {
    behind: "Behind",
    ourBrand: "Our Brand".replace(/\s+/g, " ").trim(),

    description:
      "We craft compelling narratives and build strong, impactful partnerships that set new standards in the Indian creator economy.",
  };

  // Typewriter effect hook (same as WhatWeDo)
  const useTypewriter = (text, speed = 25, startDelay = 0) => {
    const [displayText, setDisplayText] = useState("");
    const [isComplete, setIsComplete] = useState(false);
    const [shouldStart, setShouldStart] = useState(false);

    useEffect(() => {
      if (!shouldStart) return;

      const timer = setTimeout(() => {
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
      }, startDelay);

      return () => clearTimeout(timer);
    }, [text, speed, startDelay, shouldStart]);

    return { displayText, isComplete, setShouldStart };
  };

  // Initialize typewriter effects with fast speeds
  const behindTypewriter = useTypewriter(texts.behind, 40, 400);
  const ourBrandTypewriter = useTypewriter(texts.ourBrand, 40, 500);
  const descriptionTypewriter = useTypewriter(texts.description, 10, 1000);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true);

            // Start typewriter effects
            behindTypewriter.setShouldStart(true);
            ourBrandTypewriter.setShouldStart(true);
            descriptionTypewriter.setShouldStart(true);
          }, 100);
        }
      },
      {
        threshold: 0.2,
        rootMargin: "100px 0px",
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section className="min-h-screen bg-white dark:bg-black relative overflow-hidden">
      {/* Grid background */}
      <div className="absolute inset-0 opacity-[0.01]">
        <div className="grid grid-cols-12 h-full">
          {Array.from({ length: 12 }).map((_, i) => (
            <div
              key={i}
              className="border-l border-gray-200 dark:border-white/10"
            ></div>
          ))}
        </div>
        <div className="absolute inset-0 grid grid-rows-8">
          {Array.from({ length: 8 }).map((_, i) => (
            <div
              key={i}
              className="border-t border-gray-200 dark:border-white/10"
            ></div>
          ))}
        </div>
      </div>

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Behind Our Brand Section */}
          <div
            ref={sectionRef}
            className={`transform transition-all duration-700 ease-out ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-8 opacity-0"
            }`}
          >
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              {/* Left Column - Text Content with Typewriter Effects */}
              <div className="space-y-8">
                <div className="space-y-6">
                  {/* "Behind" with typewriter effect - no cursor */}
                  <h2 className="font-cyber text-6xl lg:text-8xl font-bold text-cyber-purple leading-tight">
                    {behindTypewriter.displayText}
                  </h2>

                  {/* "Our Brand" with typewriter effect - no cursor */}
                  <h2 className="font-cyber text-6xl lg:text-8xl font-bold text-cyber-purple leading-tight -mt-4 tracking-[-0.08em]">
  {ourBrandTypewriter.displayText}
</h2>

                </div>

                {/* Description with typewriter effect - no cursor */}
                <p className="text-light-text dark:text-white text-xl font-modern leading-relaxed max-w-lg">
                  {descriptionTypewriter.displayText}
                </p>

                {/* Button appears after description is complete */}
                <div
                  className={`transition-all duration-500 ${
                    descriptionTypewriter.isComplete
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-4"
                  }`}
                >
                  <Link to="/about">
                    <button className="px-8 py-4 bg-light-text text-white dark:bg-white dark:text-black font-modern font-semibold rounded-full hover:bg-gray-700 dark:hover:bg-light-gray transition-all duration-300 hover:shadow-lg">
                      Step Into Our World
                    </button>
                  </Link>
                </div>
              </div>

              {/* Right Column - Visual Elements */}
              <div className="relative lg:pl-8">
                {/* Speech Bubble */}
                <div className="relative mb-8">
                  <div className="bg-cyber-purple rounded-3xl p-8 text-white relative shadow-cyber">
                    <p className="text-lg font-modern leading-relaxed">
                      We are the mapmakers of the content realm, navigating the
                      digital landscape since its wild west days.
                    </p>

                    {/* Speech bubble tail - pointing down and left */}
                    <div className="absolute bottom-0 left-12 transform translate-y-full">
                      <div className="w-0 h-0 border-l-[15px] border-l-transparent border-r-[15px] border-r-transparent border-t-[20px] border-t-cyber-purple"></div>
                    </div>
                  </div>
                </div>

                {/* Team Photo Container */}
                <div className="relative">
                  {/* Placeholder for team photo - replace with your actual image */}
                  <div className="relative bg-gradient-to-br from-gray-50 to-gray-100 dark:from-dark-card dark:to-dark-surface p-6 rounded-2xl shadow-xl">
                    <div className="aspect-video bg-gradient-to-br from-electric-blue/20 to-cyber-purple/20 rounded-xl flex items-center justify-center">
                      {/* Replace this div with your actual team image */}
                      <img
                        src="/api/placeholder/500/300"
                        alt="Team Photo"
                        className="w-full h-full object-cover rounded-xl"
                      />
                    </div>
                  </div>

                  {/* Decorative Elements */}
                  <div className="absolute -top-6 -right-6 w-12 h-12 bg-light-text dark:bg-white rounded-full opacity-90"></div>
                  <div className="absolute -bottom-4 -left-4 w-8 h-8 bg-electric-blue rounded-full animate-pulse-neon"></div>

                  {/* Dotted Connection Line */}
                  <div className="absolute top-0 left-0 transform -translate-x-8 -translate-y-8">
                    <svg
                      width="100"
                      height="60"
                      className="text-gray-400/50 dark:text-white/30"
                    >
                      <path
                        d="M 0 50 Q 30 0 60 30 T 100 10"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeDasharray="4 4"
                        fill="none"
                      />
                    </svg>
                  </div>
                </div>

                {/* Additional decorative circles */}
                <div className="absolute top-20 right-0 transform translate-x-8">
                  <div className="w-6 h-6 border-2 border-cyber-purple rounded-full"></div>
                </div>
                <div className="absolute bottom-10 right-8">
                  <div className="w-4 h-4 bg-neon-pink rounded-full animate-pulse"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br pointer-events-none"></div>
    </section>
  );
};

export default BehindOurTeam;
