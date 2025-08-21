import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();
  const [currentText, setCurrentText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [wordIndex, setWordIndex] = useState(0);

  const words = [ "REAL IMPACT", "SMART MARKETING","LESS TALK, MORE SALES."];

  const fullText = words[wordIndex];

  // New array for tagline rotation
  
  

  const handleGetStarted = () => navigate("/contact");
  

  // Typewriter effect for main words
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
  }, [
    currentText,
    currentIndex,
    isDeleting,
    fullText,
    wordIndex,
    words.length,
  ]);

  

  return (
    <section className="min-h-[60vh] md:min-h-screen bg-white dark:bg-black flex items-center justify-center relative overflow-hidden pt-28 sm:pt-24 ">
      <h1 className="sr-only">Pixel Prompt – Digital Marketing Agency</h1>

      <h2 className="sr-only">
        Pixel Prompt: Turning Ideas into Results for Brands
      </h2>

      {/* Grid Background Pattern */}
       
      {/* Subtle grid background */}
  <div className="absolute top-28 sm:top-8 left-0 right-0 bottom-0 opacity-30">
  {/* Grid background */}
  <div className="absolute inset-0 
  bg-[linear-gradient(rgba(0,0,0,0.9)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.9)_1px,transparent_1px)] 
  dark:bg-[linear-gradient(rgba(255,255,255,0.9)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.9)_1px,transparent_1px)] 
  bg-[size:90px_80px] sm:bg-[size:150px_150px]">
</div>


  {/* Softer top & bottom fade */}
  {/* Vertical fade (existing) */}
<div className="absolute inset-0 bg-gradient-to-b from-white/80 via-transparent to-white/70 dark:from-black/80 dark:via-transparent dark:to-black/70"></div>

{/* Horizontal fade (new) */}
<div className="absolute inset-0 bg-gradient-to-r from-white/70 via-transparent to-white/80 dark:from-black/80 dark:via-transparent dark:to-black/80"></div>

</div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">

        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-8"
        >
          <div className="space-y-6">
            <motion.h1
              className="text-4xl sm:text-[55px] md:text-7xl lg:text-[82px]  font-bold leading-tight tracking-[-1px] "
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
             <span className="inline-block whitespace-nowrap bg-gradient-to-r from-white via-pink-200 to-[#ff0080] bg-clip-text text-transparent mb-8">


                {currentText}
                <motion.span
                  className="inline-block w-0.5 h-16 sm:h-20 md:h-24  bg-orange-500 ml-1 "
                  animate={{ opacity: [0, 1, 0] }}
                  transition={{ duration: 1, repeat: Infinity }}
                />
              </span>
              <br />
              <span className="block text-4xl sm:text-6xl md:text-7xl lg:text-[86px] text-black dark:text-white leading-tight">
                TURNING REACH
              </span>
              <span className="block text-4xl sm:text-6xl md:text-7xl lg:text-[86px] text-blue-400 leading-tight ">
                INTO REVENUE
              </span>
             
            </motion.h1>

            {/* Rotating Tagline */}
            <motion.p
              className=" sm:text-xl lg:text-[21px] leading-relaxed text-gray-600 dark:text-gray-300 max-w-xl mx-auto font-mono"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
             Building Brands People Remember
              
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
              className="px-8 py-3 bg-neon-pink text-white font-semibold rounded-lg transition-colors duration-300"
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
