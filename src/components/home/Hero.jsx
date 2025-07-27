import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();
  const [currentText, setCurrentText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [wordIndex, setWordIndex] = useState(0);

  const words = ["CREATIVE", "MODERN", "INNOVATIVE", "DIGITAL"];
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
          setTimeout(() => setIsDeleting(true), 1500);
        } else if (isDeleting && currentText.length === 0) {
          setIsDeleting(false);
          setCurrentIndex(0);
          setWordIndex((prev) => (prev + 1) % words.length);
        }
      },
      isDeleting ? 50 : 150
    );

    return () => clearTimeout(timeout);
  }, [
    currentText,
    currentIndex,
    isDeleting,
    fullText,
    wordIndex,
    words.length,
  ]);

  return (
    <section className="min-h-screen bg-gradient-to-br from-white via-gray-50 to-slate-100 dark:from-slate-900 dark:via-gray-900 dark:to-slate-900 flex items-center justify-center relative overflow-hidden transition-colors duration-500">
      {/* Background elements - adaptive to theme */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-20 w-72 h-72 bg-purple-500/20 dark:bg-purple-500/30 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-20 right-20 w-96 h-96 bg-blue-500/20 dark:bg-blue-500/30 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-8"
        >
          {/* Typewriter heading */}
          <div className="space-y-4">
            <div className="min-h-[80px] sm:min-h-[120px] md:min-h-[160px] flex items-center justify-center">
              <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-neon-pink via-electric-blue to-cyber-purple bg-clip-text text-transparent ">
                  {currentText}
                </span>
                <motion.span
                  className="inline-block w-1 h-16 sm:h-24 md:h-32 bg-gray-800 dark:bg-white ml-2"
                  animate={{ opacity: [0, 1, 0] }}
                  transition={{ duration: 1, repeat: Infinity }}
                />
              </h1>
            </div>

            <motion.h2
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light text-gray-700 dark:text-gray-300 transition-colors duration-300"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              SOLUTIONS FOR BRANDS ✨
            </motion.h2>
          </div>

          <motion.div
            className="flex flex-wrap justify-center gap-3 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.6 }}
          >
            <motion.span
              className="px-4 py-2 text-sm font-medium 
    bg-pink-200 dark:bg-pink-900/40 
    text-pink-700 dark:text-pink-300 
    rounded-full border border-pink-300 dark:border-pink-600"
              whileHover={{
                scale: 1.05,
                backgroundColor: "rgba(236, 72, 153, 0.25)",
                transition: { duration: 0.2 },
              }}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.2 }}
            >
              #ViralMarketing
            </motion.span>

            <motion.span
              className="px-4 py-2 text-sm font-medium 
    bg-cyan-200 dark:bg-cyan-900/40 
    text-cyan-700 dark:text-cyan-300 
    rounded-full border border-cyan-300 dark:border-cyan-600"
              whileHover={{
                scale: 1.05,
                backgroundColor: "rgba(6, 182, 212, 0.25)",
                transition: { duration: 0.2 },
              }}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.3 }}
            >
              #CreativeCampaigns
            </motion.span>

            <motion.span
              className="px-4 py-2 text-sm font-medium 
    bg-purple-300 dark:bg-purple-900/40 
    text-purple-800 dark:text-purple-300 
    rounded-full border border-purple-400 dark:border-purple-600"
              whileHover={{
                scale: 1.05,
                backgroundColor: "rgba(147, 51, 234, 0.25)",
                transition: { duration: 0.2 },
              }}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.4 }}
            >
              #BrandGrowth
            </motion.span>
          </motion.div>

          {/* Description */}
          <motion.div
            className="max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 0.8 }}
          >
            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 leading-relaxed transition-colors duration-300">
              Transforming ideas into extraordinary digital experiences that
              deliver results.
            </p>
          </motion.div>

          {/* CTA Buttons - theme adaptive */}
          <motion.div
            className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2, duration: 0.6 }}
          >
            <motion.button
              onClick={handleGetStarted}
              className="px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-500 text-white font-semibold rounded-full shadow-lg"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 10px 25px rgba(236, 72, 153, 0.3)",
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              Get Started
            </motion.button>

            <motion.button
              onClick={handleViewPortfolio}
              className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white dark:hover:text-slate-900 transition-all duration-300 rounded-full font-semibold"
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.2 },
              }}
              whileTap={{ scale: 0.95 }}
            >
              View Portfolio
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
