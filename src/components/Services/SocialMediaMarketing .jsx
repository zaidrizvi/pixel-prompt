import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, Moon, Sun, Share2, Hash, TrendingUp, BarChart3, Smartphone, MessageSquare } from "lucide-react";
import { useNavigate } from "react-router-dom";
import BrandSectionImproved from "../BrandSection";

const SocialMediaMarketing = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    // Check if user has a saved preference, otherwise default to dark
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('darkMode');
      return saved !== null ? JSON.parse(saved) : true;
    }
    return true;
  });
  
  const [visibleSections, setVisibleSections] = useState([]);
  const sectionRefs = useRef([]);
  const navigate = useNavigate();

  // Apply theme to document
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const root = window.document.documentElement;
      if (isDarkMode) {
        root.classList.add('dark');
      } else {
        root.classList.remove('dark');
      }
      // Save preference
      localStorage.setItem('darkMode', JSON.stringify(isDarkMode));
    }
  }, [isDarkMode]);

  // Intersection Observer to reveal sections
  useEffect(() => {
    const observers = [];

    sectionRefs.current.forEach((ref, index) => {
      if (ref) {
        const observer = new IntersectionObserver(
          ([entry]) => {
            if (entry.isIntersecting) {
              setTimeout(() => {
                setVisibleSections(prev => [...new Set([...prev, index])]);
              }, 100);
            }
          },
          {
            threshold: 0.3,
            rootMargin: '50px'
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

  const deliverables = [
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Social Media Artwork Design",
      description: "Custom visual content designed to engage and captivate your audience"
    },
    {
      icon: <MessageSquare className="w-8 h-8" />,
      title: "Brand Communication Strategy",
      description: "Establishing uniform brand voice and messaging across platforms"
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Promotional Campaigns",
      description: "Ideating and executing various promotional campaigns for maximum impact"
    },
    {
      icon: <Hash className="w-8 h-8" />,
      title: "Hashtag Strategy & Optimization",
      description: "Strategic hashtag planning and organic/paid traction optimization"
    }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-black transition-colors duration-500">
      {/* Grid Background */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.1)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
      </div>

      {/* Header with Navigation */}
      <div className="relative z-10 px-4 sm:px-6 lg:px-8 py-6">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-light-text dark:text-dark-text hover:text-neon-pink dark:hover:text-neon-pink transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Back to Services</span>
          </button>

          <button
            onClick={() => setIsDarkMode(!isDarkMode)}
            className="p-3 rounded-full bg-light-card dark:bg-dark-card border border-gray-200 dark:border-dark-border text-light-text dark:text-dark-text hover:bg-gray-50 dark:hover:bg-dark-surface transition-all duration-300"
          >
            {isDarkMode ? 
              <Sun className="w-5 h-5 text-neon-yellow" /> : 
              <Moon className="w-5 h-5 text-cyber-purple" />
            }
          </button>
        </div>
      </div>

      {/* Social Media Marketing Section */}
      <section className="relative z-10 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            ref={el => sectionRefs.current[0] = el}
            className={`grid md:grid-cols-2 gap-12 lg:gap-16 items-center transform transition-all duration-700 ease-out ${
              visibleSections.includes(0) ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`}
          >
            {/* Left Side - Illustration - Hidden on small screens, visible from md up */}
            <div className="relative hidden md:block">
              <div className="bg-light-card dark:bg-dark-card border border-gray-200 dark:border-dark-border rounded-3xl p-8 lg:p-12 shadow-lg dark:shadow-electric">
                <div className="flex items-center justify-center h-64 lg:h-80">
                  <div className="relative">
                    {/* Main SMM Speech Bubble */}
                    <div className="relative">
                      <div className="w-40 h-28 bg-gradient-to-br from-electric-blue to-cyber-green rounded-2xl flex items-center justify-center shadow-electric relative">
                        <span className="text-white font-bold text-2xl">SMM</span>
                        {/* Speech bubble tail */}
                        <div className="absolute -bottom-3 left-8 w-0 h-0 border-l-[12px] border-l-transparent border-r-[12px] border-r-transparent border-t-[12px] border-t-cyber-green"></div>
                      </div>
                      
                      {/* Base platform */}
                      <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 w-32 h-4 bg-gradient-to-r from-electric-blue-light/40 to-cyber-green/40 rounded-full blur-sm"></div>
                    </div>
                    
                    {/* Floating Social Media Elements */}
                    <div className="absolute -top-6 -left-6 bg-neon-pink/20 dark:bg-neon-pink/30 rounded-full p-3 animate-bounce">
                      <Share2 className="w-6 h-6 text-neon-pink" />
                    </div>
                    
                    <div className="absolute -top-4 -right-8 bg-cyber-purple/20 dark:bg-cyber-purple/30 rounded-full p-3 animate-pulse">
                      <Hash className="w-6 h-6 text-cyber-purple" />
                    </div>
                    
                    <div className="absolute -bottom-6 -right-6 bg-electric-blue/20 dark:bg-electric-blue/30 rounded-full p-3" style={{ animation: 'bounce 2s infinite reverse' }}>
                      <BarChart3 className="w-6 h-6 text-electric-blue" />
                    </div>
                    
                    {/* Connecting Network Lines */}
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                      <div className="w-48 h-48 border border-dashed border-electric-blue/20 rounded-full animate-spin" style={{ animationDuration: '15s' }}></div>
                      <div className="absolute w-36 h-36 border border-dashed border-neon-pink/20 rounded-full animate-spin" style={{ animationDuration: '10s', animationDirection: 'reverse' }}></div>
                    </div>
                    
                    {/* Animated Social Dots */}
                    <div className="absolute -top-8 -right-2 bg-cyber-green/20 dark:bg-cyber-green/30 rounded-full p-4">
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-cyber-green rounded-full animate-pulse"></div>
                        <div className="w-2 h-2 bg-electric-blue rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                        <div className="w-2 h-2 bg-neon-pink rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Content */}
            <div className="space-y-8">
              <h2 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-electric-blue via-cyber-green to-neon-pink bg-clip-text text-transparent">
                Social Media Marketing
              </h2>

              <div className="space-y-6">
                <p className="text-lg lg:text-xl leading-relaxed text-light-text dark:text-dark-text">
                  Goes way beyond maintaining an aesthetic feed – the right strategy and well-researched 
                  campaigns can make a visible difference to your brand identity, brand awareness, and 
                  even revenue!
                </p>
                
               

                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-neon-pink">
                    Our deliverables include:
                  </h3>

                  <div className="grid sm:grid-cols-2 gap-4">
                    {deliverables.map((item, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={visibleSections.includes(0) ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: index * 0.1 + 0.5, duration: 0.6 }}
                        className="bg-light-card dark:bg-dark-card border border-gray-200 dark:border-dark-border rounded-xl p-4 hover:scale-105 hover:shadow-lg dark:hover:shadow-electric transition-all duration-300 group"
                      >
                        <div className="text-electric-blue group-hover:text-cyber-green transition-colors duration-300 mb-2">
                          {item.icon}
                        </div>
                        <h4 className="font-semibold text-light-text dark:text-dark-text mb-1">
                          {item.title}
                        </h4>
                        <p className="text-sm text-light-gray dark:text-gray-400">
                          {item.description}
                        </p>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* SMM Impact Highlight */}
                <div className="mt-8 p-6 bg-gradient-to-r from-electric-blue/10 via-cyber-green/10 to-neon-pink/10 dark:from-electric-blue/20 dark:via-cyber-green/20 dark:to-neon-pink/20 rounded-2xl border border-electric-blue/20 dark:border-electric-blue/30">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-electric-blue/20 dark:bg-electric-blue/30 rounded-full">
                      <TrendingUp className="w-6 h-6 text-electric-blue" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-light-text dark:text-dark-text">Strategic Social Impact</h4>
                      <p className="text-sm text-light-gray dark:text-gray-400">Beyond aesthetics - driving real business results through strategic social media presence</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <BrandSectionImproved/>
      </section>
    </div>
  );
};

export default SocialMediaMarketing;
