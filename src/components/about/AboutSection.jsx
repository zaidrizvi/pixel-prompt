import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import {
  Users,
  Award,
  Target,
  Zap,
  Instagram,
  Camera,
  Star,
  Heart,
  Play,
  ArrowRight,
  CheckCircle,
  Sparkles,
  Rocket,
  Coffee,
  Music,
} from "lucide-react";
import { Link } from "react-router-dom";
import pixel from "../../assets/pixel.png";

const AboutSection = () => {
  const [visibleSections, setVisibleSections] = useState([]);
  const sectionRefs = useRef([]);

  // Typewriter effect hook
  const useTypewriter = (text, speed = 25, startDelay = 0) => {
    const [displayText, setDisplayText] = useState('');
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

  // Text content for different sections
  const heroTypewriter = useTypewriter("DIVE INTO OUR CULTURE", 50, 0);
  const subtitleTypewriter = useTypewriter("Where creativity meets passion, and every pixel tells a story", 30, 400);
  const storyTitleTypewriter = useTypewriter("We Don't Just Create Content, We Create Iconic Brands", 25, 0);
  const storyDescTypewriter = useTypewriter("At Pixel Prompt, we're experts in making brands go viral. Whether it's managing celebrity campaigns, influencer marketing, UGC production, or social media strategy — we do it all, and we do it loud!", 20, 300);

  const stats = [
    {
      icon: <Users size={32} />,
      number: "20+",
      label: "Happy Clients",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      icon: <Award size={32} />,
      number: "30+",
      label: "Viral Campaigns",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      icon: <Instagram size={32} />,
      number: "1M+",
      label: "Content Reach",
      gradient: "from-pink-500 to-rose-500",
    },
    {
      icon: <Zap size={32} />,
      number: "98%",
      label: "Client Retention",
      gradient: "from-green-500 to-emerald-500",
    },
  ];

  const cultureValues = [
    {
      icon: <Rocket size={24} />,
      title: "Innovation First",
      description: "We push boundaries and create content that hasn't been seen before.",
      color: "from-neon-pink to-purple-500"
    },
    {
      icon: <Heart size={24} />,
      title: "Passion Driven",
      description: "Every project is a labor of love, crafted with genuine enthusiasm.",
      color: "from-electric-blue to-cyan-500"
    },
    {
      icon: <Sparkles size={24} />,
      title: "Creative Excellence",
      description: "We don't settle for good enough. We create masterpieces.",
      color: "from-yellow-400 to-orange-500"
    },
    {
      icon: <Coffee size={24} />,
      title: "Team Spirit",
      description: "Late nights, early mornings, and everything in between - together.",
      color: "from-green-400 to-emerald-600"
    }
  ];

  const milestones = [
    {
      year: "2024",
      event: "Launched Pixel Prompt",
      description: "Started as a creative agency focused on digital-first brand promotions.",
    },
    {
      year: "2025",
      event: "First Celebrity Campaign",
      description: "Collaborated with influencers and celebs for product-focused campaigns.",
    },
    {
      year: "2025",
      event: "G-SHOCK × Pixel Prompt",
      description: "Handled online promotion and social media rollout for the G-SHOCK event.",
    },
    {
      year: "2025",
      event: "OPPO x Pixel Prompt",
      description: "Amplified OPPO's event presence through digital promotion & coverage.",
    },
  ];

  // Intersection Observer for sections
  useEffect(() => {
    const observers = [];
    
    sectionRefs.current.forEach((ref, index) => {
      if (ref) {
        const observer = new IntersectionObserver(
          ([entry]) => {
            if (entry.isIntersecting) {
              setTimeout(() => {
                setVisibleSections(prev => [...new Set([...prev, index])]);
                
                // Start typewriter effects for different sections
                if (index === 0) {
                  heroTypewriter.setShouldStart(true);
                  subtitleTypewriter.setShouldStart(true);
                }
                if (index === 1) {
                  storyTitleTypewriter.setShouldStart(true);
                  storyDescTypewriter.setShouldStart(true);
                }
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

  return (
    <section className="min-h-screen bg-white dark:bg-black transition-colors duration-500 relative overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-r from-neon-pink/20 to-purple-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-electric-blue/20 to-cyan-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-yellow-400/10 to-orange-400/10 rounded-full blur-2xl"></div>
      </div>

      {/* Grid background */}
      <div className="absolute inset-0 opacity-[0.02]">
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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative py-20">
        {/* Hero Section with Typewriter */}
        <div 
          ref={el => sectionRefs.current[0] = el}
          className={`text-center mb-20 transform transition-all duration-700 ease-out ${
            visibleSections.includes(0) ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}
        >
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-neon-pink/10 to-electric-blue/10 rounded-full border border-neon-pink/30 mb-8 backdrop-blur-sm">
            <Heart className="w-5 h-5 text-neon-pink mr-3" />
            <span className="text-sm font-modern font-medium text-gray-700 dark:text-gray-300">
              About Our Story
            </span>
          </div>

          <h1 className="font-cyber text-5xl md:text-8xl font-bold mb-8 leading-tight">
            <span className="bg-gradient-to-r from-neon-pink via-electric-blue to-cyber-purple bg-clip-text text-transparent">
              {heroTypewriter.displayText}
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed font-modern">
            {subtitleTypewriter.displayText}
          </p>

          <div className={`mt-8 w-24 h-1 bg-gradient-to-r from-neon-pink to-electric-blue mx-auto transition-all duration-500 ${
            subtitleTypewriter.isComplete ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'
          }`}></div>
        </div>

        {/* Culture Values Section */}
        <div 
          ref={el => sectionRefs.current[1] = el}
          className={`mb-20 transform transition-all duration-700 ease-out ${
            visibleSections.includes(1) ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}
        >
          <div className="text-center mb-16">
            <h2 className="font-cyber text-4xl md:text-5xl font-bold mb-6">
              <span className="text-gray-900 dark:text-white">Our </span>
              <span className="text-neon-pink">Core Values</span>
            </h2>
            <p className="text-gray-600 dark:text-gray-300 text-lg max-w-2xl mx-auto">
              The principles that drive every pixel, every campaign, every success story
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {cultureValues.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={visibleSections.includes(1) ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.1 }}
                className="bg-white dark:bg-gray-900 rounded-3xl p-8 border border-gray-200 dark:border-gray-800 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 group"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${value.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <div className="text-white">{value.icon}</div>
                </div>
                <h3 className="font-cyber text-xl font-bold text-gray-900 dark:text-white mb-4">
                  {value.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Main Story Section with Typewriter */}
        <div 
          ref={el => sectionRefs.current[2] = el}
          className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20 transform transition-all duration-700 ease-out ${
            visibleSections.includes(2) ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}
        >
          {/* Left Content */}
          <div>
            <h3 className="text-3xl md:text-4xl font-cyber font-bold text-gray-900 dark:text-white mb-6 leading-tight">
              {storyTitleTypewriter.displayText}
            </h3>

            <p className="text-gray-600 dark:text-gray-300 text-lg mb-6 leading-relaxed font-modern">
              {storyDescTypewriter.displayText}
            </p>

            <div className={`transition-all duration-500 ${
              storyDescTypewriter.isComplete ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}>
              <p className="text-gray-600 dark:text-gray-300 text-lg mb-8 leading-relaxed font-modern">
                We've worked with bold names like{" "}
                <strong className="text-neon-pink">G-SHOCK</strong> and{" "}
                <strong className="text-electric-blue">OPPO</strong>, driving
                jaw-dropping content reach and unmatched engagement across platforms.
              </p>

              {/* Key Features */}
              <div className="space-y-4 mb-8">
                {[
                  "🔥 Viral Content Creation & Strategy",
                  "⭐ Celebrity & Influencer Management", 
                  "🤝 Brand Collaboration Expertise",
                  "💫 User-Generated Content Campaigns",
                ].map((point, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={visibleSections.includes(2) ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    className="flex items-center space-x-3"
                  >
                    <CheckCircle className="w-5 h-5 text-neon-pink flex-shrink-0" />
                    <span className="text-gray-600 dark:text-gray-300 font-modern">
                      {point}
                    </span>
                  </motion.div>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact"
                  className="px-8 py-4 bg-gradient-to-r from-neon-pink to-electric-blue text-white font-modern font-semibold rounded-full hover:scale-105 hover:shadow-lg transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  <span>Start Your Viral Journey</span>
                  <ArrowRight size={18} />
                </Link>

                <Link
                  to="/portfolio"
                  className="px-8 py-4 border-2 border-electric-blue text-electric-blue hover:bg-electric-blue hover:text-white transition-all duration-300 rounded-full font-modern font-semibold flex items-center justify-center space-x-2"
                >
                  <Play size={18} />
                  <span>Watch Our Story</span>
                </Link>
              </div>
            </div>
          </div>

          {/* Right Content - Enhanced Visual */}
          <div className="relative">
            <div className="relative">
              <img
                src={pixel}
                alt="Pixel Prompt Culture"
                className="w-full h-[400px] object-cover rounded-3xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-neon-pink/20 to-electric-blue/20 rounded-3xl"></div>
              
              {/* Floating Elements */}
              <div className="absolute -top-6 -right-6 w-12 h-12 bg-neon-pink rounded-full animate-bounce opacity-80"></div>
              <div className="absolute -bottom-4 -left-4 w-8 h-8 bg-electric-blue rounded-full animate-pulse"></div>
              <div className="absolute top-1/2 -right-8 w-6 h-6 bg-yellow-400 rounded-full"></div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div 
          ref={el => sectionRefs.current[3] = el}
          className={`grid grid-cols-2 md:grid-cols-4 gap-8 mb-20 transform transition-all duration-700 ease-out ${
            visibleSections.includes(3) ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={visibleSections.includes(3) ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1 }}
              className="text-center bg-white dark:bg-gray-900 rounded-3xl p-8 border border-gray-200 dark:border-gray-800 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group"
            >
              <div className={`w-16 h-16 bg-gradient-to-r ${stat.gradient} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <div className="text-white">{stat.icon}</div>
              </div>
              <div className="text-3xl font-cyber font-bold text-gray-900 dark:text-white mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600 dark:text-gray-400 text-sm font-modern">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Timeline Section */}
        <div 
          ref={el => sectionRefs.current[4] = el}
          className={`transform transition-all duration-700 ease-out ${
            visibleSections.includes(4) ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}
        >
          <div className="text-center mb-16">
            <h3 className="text-4xl md:text-5xl font-cyber font-bold text-gray-900 dark:text-white mb-6">
              Our <span className="text-neon-pink">Journey</span>
            </h3>
            <p className="text-gray-600 dark:text-gray-300 text-lg font-modern">
              From startup to India's leading viral marketing agency
            </p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-neon-pink to-electric-blue rounded-full"></div>

            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={visibleSections.includes(4) ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.2 }}
                className={`flex items-center mb-12 ${
                  index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                }`}
              >
                <div className={`w-1/2 ${
                  index % 2 === 0 ? "pr-8 text-right" : "pl-8 text-left"
                }`}>
                  <div className="bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-800 hover:shadow-xl transition-all duration-300">
                    <div className="text-neon-pink font-cyber font-bold text-lg mb-2">
                      {milestone.year}
                    </div>
                    <h4 className="text-gray-900 dark:text-white font-cyber font-bold text-xl mb-2">
                      {milestone.event}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400 font-modern">
                      {milestone.description}
                    </p>
                  </div>
                </div>

                {/* Timeline Dot */}
                <div className="w-6 h-6 bg-gradient-to-r from-neon-pink to-electric-blue rounded-full border-4 border-white dark:border-black shadow-lg"></div>

                <div className="w-1/2"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
