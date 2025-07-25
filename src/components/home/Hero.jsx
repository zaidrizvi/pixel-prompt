import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Sparkles, Zap, ArrowRight } from 'lucide-react';

const Hero = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => navigate('/contact');
  const handleViewPortfolio = () => navigate('/portfolio');

  return (
    <section className="min-h-screen bg-white dark:bg-gradient-to-br dark:from-black dark:via-gray-900 dark:to-black flex items-center justify-center relative overflow-hidden transition-colors duration-500">
      {/* Animated blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-16 left-8 w-72 h-72 bg-neon-pink/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-electric-blue/20 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 w-48 h-48 bg-cyber-purple/10 dark:bg-cyber-purple/20 rounded-full blur-2xl transform -translate-x-1/2 -translate-y-1/2 animate-blob-slow" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          {/* Hero Title */}
          <h1 className="text-5xl md:text-7xl font-cyber font-bold mb-6 leading-tight">
            <span className="inline-block bg-gradient-to-r from-neon-pink via-electric-blue to-cyber-purple bg-clip-text text-transparent animate-gradient-x">
              WE HELP BRANDS
            </span>
            <br />
            <span className="text-gray-900 dark:text-white transition-colors duration-300 inline-block">
              GROW & SHINE ✨
            </span>
          </h1>

          {/* Tagline */}
          <p className="text-lg md:text-2xl text-gray-600 dark:text-gray-300 mb-6 font-modern max-w-3xl mx-auto transition-colors duration-300">
            🚀 Elevate your digital presence with creative strategies that go viral. Let's create magic together!
          </p>

          {/* Badges */}
          <div className="flex justify-center space-x-3 mb-8">
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

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleGetStarted}
              className="px-8 py-4 bg-gradient-to-r from-neon-pink to-electric-blue text-white font-semibold rounded-full flex items-center justify-center gap-2 shadow-lg hover:shadow-neon-pink/30 transition-all duration-300"
            >
              <Zap size={18} />
              <span>Get Started</span>
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleViewPortfolio}
              className="px-8 py-4 border-2 border-electric-blue text-electric-blue dark:text-electric-blue hover:bg-electric-blue hover:text-white transition-all duration-300 rounded-full font-semibold flex items-center gap-2"
            >
              <ArrowRight size={18} />
              <span>View Portfolio</span>
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
