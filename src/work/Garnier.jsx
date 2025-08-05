import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Play, ExternalLink, TrendingUp, Users, Eye, Calendar, Award, Zap } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import garnier1 from '../assets/garnier1.png';
import garnier2 from '../assets/garnier2.png';
const Garnier = () => {const navigate = useNavigate();


  const [isDarkMode, setIsDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('darkMode');
      return saved !== null ? JSON.parse(saved) : true;
    }
    return true;
  });

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const root = window.document.documentElement;
      if (isDarkMode) {
        root.classList.add('dark');
      } else {
        root.classList.remove('dark');
      }
    }
  }, [isDarkMode]);

  const reelsData = [
    {
      id: 1,
     
      url: "https://www.instagram.com/reel/DKEoiVdxyDg/",
      thumbnail: garnier1
    },
    {
      id: 2,
     
      url: "https://www.instagram.com/reel/DJ4mmsHT-W9/",
      thumbnail: garnier2
    }
  ];

  const openReel = (url) => window.open(url, '_blank');

  return (
    <div className="min-h-screen bg-white dark:bg-black transition-colors duration-500 overflow-hidden">
     

      {/* Header */}
      <header className="relative z-10 px-6 py-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-12">
            <button
              onClick={() => window.history.back()}
              className="flex items-center gap-3 text-light-text dark:text-dark-text hover:text-neon-pink transition-all duration-300 group"
            >
              <div className="p-2 rounded-full bg-light-card dark:bg-dark-card border border-gray-200 dark:border-dark-border group-hover:border-neon-pink transition-colors">
                <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
              </div>
              <span className="font-semibold">Back to Portfolio</span>
            </button>
          </div>

          {/* Hero Section */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center space-y-8"
          >
            {/* GARNIER Brand Logo */}
            <div className="relative">
  <h1 className="text-6xl lg:text-9xl font-bold bg-gradient-to-r from-cyber-purple via-electric-blue to-neon-pink bg-clip-text text-transparent drop-shadow-2xl">
    GARNIER
  </h1>
</div>


            <div className="space-y-4">
              <h2 className="text-3xl lg:text-4xl font-bold text-light-text dark:text-dark-text">
                Super Cooling Gel Sunscreen Campaign
              </h2>
              <p className="text-xl text-light-gray dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
                Influencer Marketing • Beauty Campaign • Lifestyle Integration
              </p>
            </div>
          </motion.div>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-10 px-6 py-12">
        <div className="max-w-7xl mx-auto">
          
          {/* Content Grid */}
          <div className="grid lg:grid-cols-3 gap-12">
            
            {/* Video Content */}
            <motion.section 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="lg:col-span-2 space-y-8"
            >
              <div className="flex items-center gap-3 mb-8">
                <Zap className="w-6 h-6 text-electric-blue" />
                <h3 className="text-2xl font-bold text-light-text dark:text-dark-text">Campaign Content</h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {reelsData.map((reel, index) => (
                  <motion.div
                    key={reel.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.2 + 0.6 }}
                    onClick={() => openReel(reel.url)}
                    className="group cursor-pointer"
                  >
                    {/* Video Card */}
                    <div className="relative bg-light-card dark:bg-dark-card border border-gray-200 dark:border-dark-border rounded-3xl overflow-hidden transition-all duration-500">
                      
                      {/* Video Thumbnail */}
                      <div className="aspect-[4/5] overflow-hidden relative">
                        <img
                          src={reel.thumbnail}
                          alt={reel.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                        />
                        
                        {/* Play Overlay */}
                        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                          <div className="bg-white/20 backdrop-blur-xl p-6 rounded-full border border-white/20">
                            <Play className="w-8 h-8 text-white" fill="white" />
                          </div>
                        </div>

                        {/* External Link */}
                        <div className="absolute top-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <div className="bg-white/20 backdrop-blur-xl p-2 rounded-full">
                            <ExternalLink size={16} className="text-white" />
                          </div>
                        </div>
                      </div>

                      {/* Card Content */}
                     
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.section>

            {/* Campaign Details Sidebar */}
            <motion.aside 
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="space-y-8"
            >
              {/* Campaign Overview */}
              <div className="bg-light-card dark:bg-dark-card border border-gray-200 dark:border-dark-border rounded-3xl p-8 space-y-6">
                <h3 className="text-xl font-bold text-electric-blue flex items-center gap-3">
                  <TrendingUp className="w-5 h-5" />
                  Campaign Strategy
                </h3>
                <p className="text-light-text dark:text-dark-text leading-relaxed">
                  We partnered with Garnier for a high-impact Instagram campaign promoting their Super Cooling Gel Sunscreen. By onboarding top beauty and lifestyle creators, we delivered engaging Reels that boosted influencer engagement and drove product awareness.
                </p>
                
                <div className="space-y-3">
                  <h4 className="font-semibold text-light-text dark:text-dark-text">Campaign Results:</h4>
                  <ul className="space-y-2 text-sm text-light-gray dark:text-gray-400">
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-cyber-green rounded-full"></div>
                      High-impact Instagram Reels
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-electric-blue rounded-full"></div>
                      Top beauty & lifestyle creators
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-neon-pink rounded-full"></div>
                      Boosted engagement rates
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-cyber-purple rounded-full"></div>
                      Quick turnaround execution
                    </li>
                  </ul>
                </div>
              </div>

              {/* Campaign Stats */}
              
            </motion.aside>
          </div>

          {/* Call to Action */}
          <motion.section 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-20"
          >
            <div className="bg-gradient-to-r from-cyber-green/10 via-electric-blue/10 to-cyber-purple/10 dark:from-cyber-green/20 dark:via-electric-blue/20 dark:to-cyber-purple/20 rounded-3xl p-12 text-center border border-cyber-green/20 dark:border-cyber-green/30">
              <h3 className="text-3xl lg:text-4xl font-bold text-light-text dark:text-dark-text mb-4">
                Ready to Grow Your Beauty Brand?
              </h3>
              <p className="text-lg text-light-gray dark:text-gray-400 mb-8 max-w-2xl mx-auto">
                Let's make your campaign shine in the spotlight with powerful creator collaborations
              </p>
             <button
  onClick={() => navigate('/contact')}
  className="px-8 py-4 bg-gradient-to-r from-cyber-green to-electric-blue hover:from-cyber-green hover:to-electric-blue-dark text-white rounded-full text-lg font-semibold transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-neon"
>
  Launch With Us
</button>

            </div>
          </motion.section>
        </div>
      </main>
    </div>
  );
};

export default Garnier;
