import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();
  const [currentText, setCurrentText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [wordIndex, setWordIndex] = useState(0);

  const words = ["IMPACT," , "VISIONS," , "CULTURE,",  "DEMAND,"
    ];
  const fullText = words[wordIndex];

  const handleGetStarted = () => navigate("/contact");
  const handleViewPortfolio = () => navigate("/portfolio");

  // Typewriter effect
  useEffect(() => {
    const timeout = setTimeout(
      () => {
        if (!isDeleting && currentIndex < fullText.length) {
          setCurrentText((prev) => prev + fullText[currentIndex]);
          setCurrentIndex((prev) => prev + 1);
        } else if (isDeleting && currentText.length > 0) {
          setCurrentText((prev) => prev.slice(0, -1));
        } else if (!isDeleting && currentIndex === fullText.length) {
          setTimeout(() => setIsDeleting(true), 2000);
        } else if (isDeleting && currentText.length === 0) {
          setIsDeleting(false);
          setCurrentIndex(0);
          setWordIndex((prev) => (prev + 1) % words.length);
        }
      },
      isDeleting ? 100 : 200
    );

    return () => clearTimeout(timeout);
  }, [currentText, currentIndex, isDeleting, fullText, wordIndex, words.length]);

  return (
    <section className="min-h-[70vh] md:min-h-screen bg-white dark:bg-black 
  flex items-center justify-center relative overflow-hidden
  pt-12 sm:pt-12 md:pt-0">


      {/* Grid Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.1)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-8"
        >
          {/* Main Heading - Finnet Style */}
          <div className="space-y-6">
            <motion.h1 
              className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-tight  tracking-[-1px]

"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <span className="text-black dark:text-white">CRAFTING </span>
              <span className="text-neon-pink">
                {currentText}
                <motion.span
  className="inline-block w-1 h-16 sm:h-20 md:h-24 bg-orange-500 ml-2"

                  animate={{ opacity: [0, 1, 0] }}
                  transition={{ duration: 1, repeat: Infinity }}
                />
              </span>
              <br />
              <span className="text-black dark:text-white">ELEVATING  </span>
              <span className="text-blue-400">BRANDS</span>
              <span className="text-black dark:text-white">.</span>
            </motion.h1>

            <motion.p
              className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-xl mx-auto font-mono"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              The new standard for creator-led marketing
            </motion.p>
          </div>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <motion.button
              onClick={handleGetStarted}
              className="px-8 py-3 bg-neon-pink-light hover:bg-neon-pink text-white font-semibold rounded-lg transition-colors duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get Started
            </motion.button>

            
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
