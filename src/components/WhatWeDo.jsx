import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const WhatWeDo = () => {
  const messages = {
    label: "What we do",
    title: "At PixelPrompt",
    highlight: "WE DON’T BELIEVE IN ONE-SIZE-FITS-ALL MARKETING",
    description:
      "We sit with you, understand your story, and create strategies that don’t just look good — they work. From content that clicks to campaigns that scale, we help your brand grow where it matters.",
  };

  return (
    <section className="relative bg-white dark:bg-black overflow-hidden py-16 lg:py-20">
      {/* Grid background */}
      <div className="absolute top-12 sm:top-8 left-0 right-0 bottom-0 opacity-50">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.55)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.55)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(255,255,255,0.55)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.55)_1px,transparent_1px)] bg-[size:100px_100px] sm:bg-[size:150px_150px]"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-transparent to-white/70 dark:from-black/70 dark:via-transparent dark:to-black/70"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-white/30 via-transparent to-white/30 dark:from-black/70 dark:via-transparent dark:to-black/80"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-7xl mx-auto space-y-6 text-center lg:text-left">
          {/* Label */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0 }}
          >
            <div className="text-gray-600 text-xl dark:text-light-gray font-modern text-sm tracking-wider uppercase">
              {messages.label}
            </div>
          </motion.div>

          {/* Title */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <h2 className="font-cyber text-3xl lg:text-4xl font-bold text-light-text dark:text-white leading-tight">
              {messages.title}
            </h2>
          </motion.div>

          {/* Highlight */}
          <div className="space-y-2">
            {["WE DON’T BELIEVE IN", "ONE-SIZE-FITS-ALL", "MARKETING"].map(
              (line, idx) => (
                <motion.h3
                  key={idx}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.7, delay: 0.15 * (idx + 1) }}
                  className="font-cyber text-2xl sm:text-4xl md:text-4xl lg:text-5xl xl:text-[4rem] font-bold text-transparent bg-clip-text bg-gradient-to-r from-electric-blue to-cyber-purple leading-snug"
                >
                  {line}
                </motion.h3>
              )
            )}
          </div>

          {/* Description */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <p className="text-white-600 dark:text-[#dcdfe3] text-lg lg:text-[1.4rem] font-modern leading-relaxed max-w-3xl mx-auto lg:mx-0">
              {messages.description}
            </p>
          </motion.div>

          {/* Divider */}
          <motion.div
            initial={{ opacity: 0, y: 30, scaleX: 0 }}
            whileInView={{ opacity: 1, y: 0, scaleX: 1 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{ transformOrigin: "left" }}
            className="pb-10"
          >
            {/* Mobile center → Desktop left */}
            <div className="w-16 h-0.5 bg-gradient-to-r from-electric-blue to-cyber-purple mx-auto lg:mx-0"></div>
          </motion.div>

          {/* Button */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Link to="/about">
              <button className="px-6 py-4 text-sm font-semibold rounded-full border border-transparent bg-gradient-to-r from-electric-blue to-cyber-purple text-white shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105">
                The PixelPrompt Journey
              </button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
