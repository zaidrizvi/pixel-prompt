import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const WhatWeDo = () => {
  const messages = {
    label: "What we do",
    title: "WE COMBINE",
    highlight: "CREATIVITY & STRATEGY",
    description:
      "To build partnerships and craft content that scales your brand's digital footprint.",
  };

  return (
    <section className="relative bg-white dark:bg-black overflow-hidden py-16 lg:py-24">
      {/* Grid background */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="w-full h-full grid grid-cols-12">
          {Array.from({ length: 12 }).map((_, i) => (
            <div
              key={i}
              className="border-l border-gray-200 dark:border-white/10"
            />
          ))}
        </div>
        <div className="absolute inset-0 grid grid-rows-8">
          {Array.from({ length: 8 }).map((_, i) => (
            <div
              key={i}
              className="border-t border-gray-200 dark:border-white/10"
            />
          ))}
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="space-y-6">
            {/* Label */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
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
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <h2 className="font-cyber text-4xl lg:text-7xl font-bold text-light-text dark:text-white leading-tight">
                {messages.title}
              </h2>
            </motion.div>

            {/* Highlight */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              <h3 className="font-cyber text-4xl lg:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-electric-blue to-cyber-purple leading-tight">
                {messages.highlight}
              </h3>
            </motion.div>

            {/* Description */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, delay: 0.6 }}
            >
              <p className="text-gray-600 dark:text-light-gray text-lg lg:text-xl font-modern leading-relaxed max-w-3xl">
                {messages.description}
              </p>
            </motion.div>

            {/* Gradient line */}
           <motion.div
  initial={{ opacity: 0, y: 30, scaleX: 0 }}
  whileInView={{ opacity: 1, y: 0, scaleX: 1 }}
  viewport={{ once: true, amount: 0.3 }}
  transition={{ duration: 0.6, delay: 0.3 }} // pehle 0.8 tha
  className="pb-10"
  style={{ transformOrigin: "left" }}
>
  <div className="w-16 h-0.5 bg-gradient-to-r from-electric-blue to-cyber-purple"></div>
</motion.div>
          </div>

          {/* Button */}
          <motion.div
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, amount: 0.3 }}
  transition={{ duration: 0.6, delay: 0.4 }} // pehle 1.0 tha
>
  <Link to="/about">
    <button className="px-6 py-4 text-sm font-semibold rounded-full border border-transparent bg-gradient-to-r from-electric-blue to-cyber-purple text-white shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105">
      Behind the Brilliance
    </button>
  </Link>
</motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
