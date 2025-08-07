import React from 'react';
import { motion } from 'framer-motion';

const LoadingScreen = () => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 z-[9999] bg-white dark:bg-black flex items-center justify-center"
    >
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-neon-pink/5 via-transparent to-electric-blue/5"></div>
      
      {/* Loading Content */}
      <div className="relative flex flex-col items-center space-y-6">
        
        {/* Logo Animation */}
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ 
            scale: [0.5, 1.1, 1],
            opacity: 1,
            rotate: [0, 5, -5, 0]
          }}
          transition={{ 
            duration: 1.5,
            ease: "easeOut",
            times: [0, 0.6, 1]
          }}
          className="relative"
        >
          {/* Glow Effect */}
          <motion.div
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.8, 0.3]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute inset-0 bg-gradient-to-r from-neon-pink/30 to-electric-blue/30 rounded-3xl blur-2xl"
          />
          
          {/* Logo */}
          <img
            src="/pixel-prompt-logo.png"
            alt="Pixel Prompt"
            className="relative h-24 w-24 sm:h-32 sm:w-32 md:h-40 md:w-40 rounded-3xl object-contain shadow-2xl"
          />
        </motion.div>

        {/* Brand Name */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-center"
        >
          <motion.h1
            animate={{ 
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "linear"
            }}
            className="bg-gradient-to-r from-gray-900 via-neon-pink via-electric-blue to-gray-900 dark:from-white dark:via-neon-pink dark:via-electric-blue dark:to-white bg-clip-text text-transparent font-cyber text-2xl  font-bold tracking-wider bg-[length:200%_auto]"
          >
            PIXEL PROMPT
          </motion.h1>
          
        </motion.div>

       

       
      </div>
    </motion.div>
  );
};

export default LoadingScreen;
