import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const Hero = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => navigate('/contact');
  const handleViewPortfolio = () => navigate('/portfolio');

  return (
    <section className="min-h-screen bg-gradient-to-br from-light-bg via-white to-gray-50 dark:from-black dark:via-gray-900 dark:to-black flex items-center justify-center relative overflow-hidden transition-colors duration-500">
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-neon-pink/10 dark:bg-neon-pink/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-electric-blue/10 dark:bg-electric-blue/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-cyber font-bold mb-6 leading-tight sm:leading-snug">
            <span className="bg-gradient-to-r from-neon-pink via-electric-blue to-cyber-purple bg-clip-text text-transparent">
              WE HELP BRANDS
            </span>
            <br />
            <span className="text-gray-900 dark:text-white transition-colors duration-300">
              GROW & SHINE ✨
            </span>
          </h1>

          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-6">
            <span className="px-4 py-1 text-sm font-medium bg-neon-pink/10 text-neon-pink rounded-full border border-neon-pink/20">
              #ViralMarketing
            </span>
            <span className="px-4 py-1 text-sm font-medium bg-electric-blue/10 text-electric-blue rounded-full border border-electric-blue/20">
              #CreativeCampaigns
            </span>
            <span className="px-4 py-1 text-sm font-medium bg-cyber-purple/10 text-cyber-purple rounded-full border border-cyber-purple/20">
              #BrandGrowth
            </span>
          </div>

          <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto font-modern transition-colors duration-300 px-2 sm:px-0">
            Your brand's success, our mission. Yes you're at the right place! 🖤
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center sm:items-start">
            <button 
              onClick={handleGetStarted}
              className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-neon-pink to-electric-blue text-white font-semibold rounded-full hover:scale-105 transform transition-all duration-300 shadow-lg shadow-neon-pink/25 hover:shadow-neon-pink/40"
            >
              Get Started
            </button>
            <button 
              onClick={handleViewPortfolio}
              className="w-full sm:w-auto px-8 py-4 border-2 border-electric-blue text-electric-blue hover:bg-electric-blue hover:text-white dark:hover:text-black transition-all duration-300 rounded-full font-semibold"
            >
              View Portfolio
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
