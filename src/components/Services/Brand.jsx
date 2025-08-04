import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, Moon, Sun, Zap, Target, Lightbulb, Palette } from "lucide-react";
import { useNavigate } from "react-router-dom";
import BrandSectionImproved from "../BrandSection";

const Brand = () => {
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
      icon: <Target className="w-8 h-8" />,
      title: "Brand Conceptualization and Naming",
      description: "Strategic development of your brand identity and memorable naming solutions"
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "Brand Tagline & Logo Design",
      description: "Creative taglines and visual identity that captures your brand essence"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Brand Positioning & Manual",
      description: "Strategic positioning framework and comprehensive brand guidelines"
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Brand Stationery & Collaterals",
      description: "Photography, videography, and other essential brand materials"
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

      {/* Brand Conceptualisation Section */}
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
              <div className="bg-light-card dark:bg-dark-card border border-gray-200 dark:border-dark-border rounded-3xl p-8 lg:p-12 shadow-lg dark:shadow-cyber">
                <div className="flex items-center justify-center h-64 lg:h-80">
                  <div className="relative">
                    <div className="w-32 h-32 bg-gradient-to-br from-neon-pink to-cyber-purple rounded-full flex items-center justify-center shadow-neon">
                      <Zap className="w-16 h-16 text-white" />
                    </div>
                    <div className="absolute -top-8 -right-8 bg-neon-pink-light/20 dark:bg-neon-pink/20 rounded-full p-4">
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-neon-pink rounded-full animate-pulse"></div>
                        <div className="w-2 h-2 bg-electric-blue rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                        <div className="w-2 h-2 bg-cyber-purple rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Content */}
            <div className="space-y-8">
              <h2 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-neon-pink via-electric-blue to-cyber-purple bg-clip-text text-transparent">
                Brand Conceptualisation
              </h2>

              <div className="space-y-6">
                <p className="text-lg lg:text-xl leading-relaxed text-light-text dark:text-dark-text">
                  Your new brand and vision can come to life, or your existing brand can be reinvented by
                  a comprehensive understanding of your goals, ideas, and aesthetic. We work with
                  existing as well as upcoming brands and offer completely customized solutions for
                  end-to-end brand development.
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
                        className="bg-light-card dark:bg-dark-card border border-gray-200 dark:border-dark-border rounded-xl p-4 hover:scale-105 hover:shadow-lg dark:hover:shadow-cyber transition-all duration-300 group"
                      >
                        <div className="text-cyber-purple group-hover:text-neon-pink transition-colors duration-300 mb-2">
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
              </div>
            </div>
          </div>
        </div>

        <BrandSectionImproved/>
      </section>
    </div>
  );
};

export default Brand;
