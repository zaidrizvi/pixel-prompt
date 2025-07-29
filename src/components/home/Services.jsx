import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import {
  Instagram,
  Users,
  Star,
  Camera,
  ArrowRight,
  Zap,
  TrendingUp,
  Heart,
  Palette,
  BarChart3,
  Video,
} from "lucide-react";
import { Link } from "react-router-dom";

const Services = () => {
  const [visibleSections, setVisibleSections] = useState([]);
  const sectionRefs = useRef([]);

  // Typewriter effect hook
  const useTypewriter = (text, speed = 30, startDelay = 0) => {
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

  // Typewriter instances
  const headerTypewriter = useTypewriter("SERVICES", 5, 0);
  const subtitleTypewriter = useTypewriter("From social media management to celebrity partnerships - we've got everything to make your brand the talk of the town! 🔥", 15, 100);

  // Main 4 services in 2x2 grid - matching your image exactly
  const services = [
  {
    icon: <Instagram size={24} />,
    title: "SMM",
    description: "Strategic Social Media Marketing to build brand presence and engage your audience across all major platforms.",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=500&h=300&fit=crop&crop=center",
    bgColor: "bg-pink-50",
    iconColor: "text-pink-600",
    badgeColor: "bg-pink-100"
  },
  {
    icon: <Users size={24} />,
    title: "IFM",
    description: "Influencer & Fan Marketing to amplify your brand through trusted voices and loyal communities.",
    image: "https://images.unsplash.com/photo-1581090700227-1e8e6c2be4ee?w=500&h=300&fit=crop&crop=center",
    bgColor: "bg-yellow-50",
    iconColor: "text-yellow-600",
    badgeColor: "bg-yellow-100"
  },
  {
    icon: <Star size={24} />,
    title: "Celebrity Management",
    description: "Talent coordination, brand deals, and event planning with renowned celebrities and public figures.",
    image: "https://images.unsplash.com/photo-1602848595560-63ddaca2bc4b?w=500&h=300&fit=crop&crop=center",
    bgColor: "bg-purple-50",
    iconColor: "text-purple-600",
    badgeColor: "bg-purple-100"
  },

  {
    icon: <Camera size={24} />,
    title: "Professional Shoots",
    description: "High-quality photo and video shoots for branding, product showcases, campaigns, and more.",
    image: "https://images.unsplash.com/photo-1584515933487-779824d29309?w=500&h=300&fit=crop&crop=center",
    bgColor: "bg-blue-50",
    iconColor: "text-blue-600",
    badgeColor: "bg-blue-100"
  },
];


  // Intersection Observer setup
  useEffect(() => {
    const observers = [];
    
    sectionRefs.current.forEach((ref, index) => {
      if (ref) {
        const observer = new IntersectionObserver(
          ([entry]) => {
            if (entry.isIntersecting) {
              setTimeout(() => {
                setVisibleSections(prev => [...new Set([...prev, index])]);
                
                if (index === 0) {
                  headerTypewriter.setShouldStart(true);
                  subtitleTypewriter.setShouldStart(true);
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
    <section className="bg-white dark:bg-black py-16 lg:py-24 transition-colors duration-300 relative overflow-hidden">
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

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header with Typewriter */}
        <div 
          ref={el => sectionRefs.current[0] = el}
          className={`text-center mb-16 transform transition-all duration-700 ease-out ${
            visibleSections.includes(0) ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}
        >
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-neon-pink/10 to-electric-blue/10 rounded-full border border-neon-pink/20 mb-8 backdrop-blur-sm">
            <Zap className="w-5 h-5 text-neon-pink mr-3" />
            <span className="text-sm font-modern font-medium text-gray-700 dark:text-gray-300">
              Our Expertise
            </span>
          </div>

          <h2 className="font-cyber text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-neon-pink to-electric-blue bg-clip-text text-transparent">
              {headerTypewriter.displayText}
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed font-modern">
            {subtitleTypewriter.displayText}
          </p>

          <div className={`mt-8 w-24 h-1 bg-gradient-to-r from-neon-pink to-electric-blue mx-auto transition-all duration-500 ${
            subtitleTypewriter.isComplete ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'
          }`}></div>
        </div>

        {/* Services Grid - Clean 4*4 Layout */}
<div 
  ref={el => sectionRefs.current[1] = el}
  className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-1 transform transition-all duration-700 ease-out ${
    visibleSections.includes(1) ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
  }`}
>
  {services.map((service, index) => (
    <motion.div
      key={index}
      initial={{ opacity: 0, y: 50 }}
      animate={visibleSections.includes(1) ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.15 }}
      className={`group relative ${service.bgColor} dark:bg-gray-900 rounded-xl overflow-hidden border-2 border-gray-200 dark:border-gray-800 hover:border-black dark:hover:border-white transition-all duration-300 cursor-pointer w-full max-w-sm mx-auto`}
    >
      {/* Service Image */}
      <div className="relative h-40 lg:h-52 overflow-hidden">
        <img
          src={service.image}
          alt={service.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
      </div>

      {/* Service Content */}
      <div className="p-6 lg:p-8">
        <div className="space-y-3">
          {/* Clickable Title */}
          <Link 
            to="/services" 
            className="block group-hover:text-neon-pink transition-colors duration-300"
          >
            <h3 className="font-cyber text-xl lg:text-2xl font-bold text-gray-900 dark:text-white leading-tight text-center">
              {service.title}
            </h3>
          </Link>
          
          <p className="text-gray-600 dark:text-gray-300 text-sm lg:text-base leading-relaxed font-modern text-center">
            {service.description}
          </p>
        </div>
      </div>
    </motion.div>
  ))}
</div>


       
      </div>
    </section>
  );
};

export default Services;
