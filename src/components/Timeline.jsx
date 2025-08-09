import React from "react";
import { motion } from "framer-motion";

const milestones = [
  {
    year: "2024",
    event: "Launched Pixel Prompt",
    description:
      "Started as a creative agency focused on digital-first brand promotions.",
  },
  {
    year: "2025",
    event: "First Celebrity Campaign",
    description:
      "Collaborated with influencers and celebs for product-focused campaigns.",
  },
  {
    year: "2025",
    event: "G-SHOCK × Pixel Prompt",
    description:
      "Handled online promotion and social media rollout for the G-SHOCK event.",
  },
  {
    year: "2025",
    event: "OPPO × Pixel Prompt",
    description:
      "Amplified OPPO's event presence through digital promotion & coverage.",
  },
];

const Timeline = () => (
  <section className="bg-white dark:bg-black py-16 lg:py-24">
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Heading */}
      <div className="text-center mb-16">
        <motion.h3
          style={{ willChange: "transform, opacity" }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.4 }}
          className="text-4xl md:text-5xl font-cyber font-bold text-gray-900 dark:text-white mb-6"
        >
          Our <span className="text-neon-pink">Journey</span>
        </motion.h3>
        <motion.p
          style={{ willChange: "transform, opacity" }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.1, duration: 0.4 }}
          className="text-gray-600 dark:text-gray-300 text-lg font-modern"
        >
          From startup to India's leading viral marketing agency
        </motion.p>
      </div>

      <div className="relative">
        {/* Timeline line - Fixed height with fade */}
        <motion.div
  style={{ willChange: "opacity" }}
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 0.6 }}
  className="absolute left-1/2 -translate-x-1/2 w-1 h-full
             bg-gradient-to-b from-neon-pink to-electric-blue rounded-full"
/>


        {milestones.map((m, i) => (
          <motion.div
            key={i}
            style={{ willChange: "transform, opacity" }}
            initial={{ opacity: 0, x: i % 2 ? 50 : -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{
              once: true,
              amount: 0.5, // earlier trigger
            }}
            transition={{ delay: i * 0.05, duration: 0.4, ease: "easeOut" }}
            className={`flex items-center mb-12 min-h-[150px] ${
              i % 2 ? "flex-row-reverse" : "flex-row"
            }`}
          >
            {/* Card */}
            <div
              className={`w-1/2 ${
                i % 2 ? "pl-8 text-left" : "pr-8 text-right"
              }`}
            >
              <div
                className="bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-md
                           border border-gray-200 dark:border-gray-800
                           hover:shadow-xl transition-shadow duration-300"
              >
                <div className="text-neon-pink font-cyber font-bold text-lg mb-2">
                  {m.year}
                </div>
                <h4 className="text-gray-900 dark:text-white font-cyber font-bold text-xl mb-2">
                  {m.event}
                </h4>
                <p className="text-gray-600 dark:text-gray-400 font-modern">
                  {m.description}
                </p>
              </div>
            </div>

            {/* Dot */}
            <motion.div
              style={{ willChange: "transform, opacity" }}
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: i * 0.05 + 0.15, duration: 0.3 }}
              className="w-6 h-6 bg-gradient-to-r from-neon-pink to-electric-blue
                         rounded-full border-4 border-white dark:border-black shadow-md"
            />

            <div className="w-1/2" />
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Timeline;
