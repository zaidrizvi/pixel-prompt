import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Play, ExternalLink, TrendingUp, Users, Eye, Calendar, Award, Zap } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import oppophone from '../assets/oppophone.png';
import oppophone2 from '../assets/oppophone2.png';
const Oppo = () => {const navigate = useNavigate();

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
      
      
      url: "https://www.instagram.com/reel/C1l6-NOOGv4/",
      thumbnail: oppophone,
     
    },
    {
      id: 2,
     
      url: "https://www.instagram.com/reel/C1NzfDCSJmE/",
      thumbnail: oppophone2,
     
    },
  ];


  const openReel = (url) => window.open(url, '_blank');

  return (
    <div className="min-h-screen bg-white dark:bg-black transition-colors duration-500 overflow-hidden">
      {/* Animated Background */}
      

      {/* Header */}
      <header className="relative z-10 px-6 py-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-12">
            <button
              onClick={() => window.history.back()}
              className="flex items-center gap-3 text-light-text dark:text-dark-text k transition-all duration-300 group"
            >
              <div className="p-2 rounded-full bg-light-card dark:bg-dark-card border border-gray-200 dark:border-dark-border transition-colors">
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
            {/* OPPO Brand Logo */}
            <div className="relative">
  <h1 className="text-6xl lg:text-9xl font-bold bg-gradient-to-r from-cyber-purple via-electric-blue to-neon-pink bg-clip-text text-transparent drop-shadow-2xl">
    OPPO
  </h1>
</div>


            <div className="space-y-4">
              <h2 className="text-3xl lg:text-4xl font-bold text-light-text dark:text-dark-text">
                F3 Launch Campaign
              </h2>
              <p className="text-xl text-light-gray dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
                Influencer Marketing 
              </p>
            </div>
          </motion.div>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-10 px-6 py-12">
        <div className="max-w-7xl mx-auto">
          
          {/* Campaign Stats */}
         
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
                    <div className="relative bg-light-card dark:bg-black border border-gray-200 dark:border-dark-border rounded-3xl overflow-hidden shadow-lg   transition-all duration-500">
                      
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
                  Interactive booth activation at the Great Indian Sneaker Festival featuring the OPPO F3 launch with top-tier influencer collaborations and live engagement experiences.
                </p>
                
                <div className="space-y-3">
                  <h4 className="font-semibold text-light-text dark:text-dark-text">Campaign Highlights:</h4>
                  <ul className="space-y-2 text-sm text-light-gray dark:text-gray-400">
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-neon-pink rounded-full"></div>
                      Live product demonstrations
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-electric-blue rounded-full"></div>
                      Influencer meet & greets
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-cyber-green rounded-full"></div>
                      Real-time content creation
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-cyber-purple rounded-full"></div>
                      Interactive brand experiences
                    </li>
                  </ul>
                </div>
              </div>

              {/* Campaign Tags */}
             
            </motion.aside>
          </div>

          {/* Call to Action */}
          <motion.section 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-20"
          >
            <div className="bg-gradient-to-r from-cyber-purple/10 via-neon-pink/10 to-electric-blue/10 dark:from-cyber-purple/20 dark:via-neon-pink/20 dark:to-electric-blue/20 rounded-3xl p-12 text-center border border-cyber-purple/20 dark:border-cyber-purple/30">
              <h3 className="text-3xl lg:text-4xl font-bold text-light-text dark:text-dark-text mb-4">
                Ready for Your Brand's Breakthrough?
              </h3>
              <p className="text-lg text-light-gray dark:text-gray-400 mb-8 max-w-2xl mx-auto">
                Create campaigns that generate buzz, drive engagement, and deliver measurable results
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

export default Oppo;
