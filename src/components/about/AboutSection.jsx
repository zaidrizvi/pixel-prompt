import React from "react";
import { motion } from "framer-motion";
import {
  Users,
  Award,
  Target,
  Zap,
  Instagram,
  Camera,
  Star,
  Heart,
  Play,
  ArrowRight,
  CheckCircle,
} from "lucide-react";
import { Link } from "react-router-dom";

const AboutSection = () => {
  const stats = [
    {
      icon: <Users size={32} />,
      number: "20+",
      label: "Happy Clients",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      icon: <Award size={32} />,
      number: "30+",
      label: "Viral Campaigns",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      icon: <Instagram size={32} />,
      number: "1M+",
      label: "Content Reach",
      gradient: "from-pink-500 to-rose-500",
    },
    {
      icon: <Zap size={32} />,
      number: "98%",
      label: "Client Retention",
      gradient: "from-green-500 to-emerald-500",
    },
  ];

  const milestones = [
    {
      year: "2024",
      event: "Founded Pixel Prompt",
      description: "Started with a vision to make brands go viral",
    },
    {
      year: "2025",
      event: "First Celebrity Partnership",
      description: "description here",
    },
    {
      year: "2025",
      event: "G-SHOCK Collaboration",
      description: "YOUR Desicription here",
    },
    { year: "2025", event: "OPPO Partnership", description: "descriptionn" },
  ];

  return (
    <section className="min-h-screen bg-white dark:bg-black py-20 transition-colors duration-500 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-r from-neon-pink/10 to-purple-400/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-electric-blue/10 to-cyan-400/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-yellow-400/5 to-orange-400/5 rounded-full blur-2xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-neon-pink/10 to-electric-blue/10 rounded-full border border-neon-pink/20 mb-6"
          >
            <Heart className="w-4 h-4 text-neon-pink mr-2" />
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
              About Our Story
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-cyber font-bold mb-6"
          >
            <span className="bg-gradient-to-r from-neon-pink to-electric-blue bg-clip-text text-transparent">
              ABOUT US
            </span>
          </motion.h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto transition-colors duration-300">
            We’re Pixel Prompt — a marketing agency where ideas go viral, brands
            shine. 🌟
          </p>
        </div>

        {/* Main Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6 transition-colors duration-300">
              We Don’t Just Create Content, We Create{" "}
              <span className="text-neon-pink">Iconic Brands</span>
            </h3>

            <p className="text-gray-600 dark:text-gray-300 text-lg mb-6 leading-relaxed transition-colors duration-300">
              At Pixel Prompt, we’re experts in making brands go viral. Whether
              it’s managing celebrity campaigns, influencer marketing, UGC
              production, or social media strategy — we do it all, and we do it
              loud!
            </p>

            <p className="text-gray-600 dark:text-gray-300 text-lg mb-8 leading-relaxed transition-colors duration-300">
              We’ve worked with bold names like{" "}
              <strong className="text-neon-pink">G-SHOCK</strong> and{" "}
              <strong className="text-electric-blue">OPPO</strong>, driving
              jaw-dropping content reach and unmatched engagement across
              platforms.
            </p>

            {/* Key Features */}
            <div className="space-y-4 mb-8">
              {[
                "🔥 Viral Content Creation & Strategy",
                "⭐ Celebrity & Influencer Management",
                "🤝 Brand Collaboration Expertise",
                "💫 User-Generated Content Campaigns",
              ].map((point, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center space-x-3"
                >
                  <CheckCircle className="w-5 h-5 text-neon-pink flex-shrink-0" />
                  <span className="text-gray-600 dark:text-gray-300 transition-colors duration-300">
                    {point}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/contact" // or wherever you want the user to go
                className="px-6 py-3 bg-gradient-to-r from-neon-pink to-electric-blue text-white font-semibold rounded-full hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <span>Start Your Viral Journey</span>
                <ArrowRight size={18} />
              </Link>

              <Link
                to="/portfolio"
                className="px-6 py-3 border-2 border-electric-blue text-electric-blue hover:bg-electric-blue hover:text-white transition-all duration-300 rounded-full font-semibold flex items-center justify-center space-x-2"
              >
                <Play size={18} />
                <span>Watch Our Story</span>
              </Link>
            </div>
          </motion.div>

          {/* Right Content - Visual Grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-4">
              {/* Main Image */}
              <div className="col-span-2 relative">
                <img
                  src="https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=300&fit=crop"
                  alt="Team collaboration"
                  className="w-full h-48 object-cover rounded-3xl shadow-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-neon-pink/20 to-electric-blue/20 rounded-3xl"></div>
              </div>

              {/* Smaller Images */}
              <div className="relative">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDe7Tj7tcrQdPG9Qd6a-EodZvbquOYbHHsGA&s"
                  alt="Brand collaboration"
                  className="w-full h-32 object-cover rounded-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-2xl"></div>
                <div className="absolute bottom-2 left-2 text-white text-xs font-semibold">
                  Brand Partners
                </div>
              </div>       
            </div>

          
            
          </motion.div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="text-center bg-white dark:bg-gray-900 rounded-3xl p-8 border border-gray-200 dark:border-gray-800 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <div
                className={`w-16 h-16 bg-gradient-to-r ${stat.gradient} rounded-2xl flex items-center justify-center mx-auto mb-4`}
              >
                <div className="text-white">{stat.icon}</div>
              </div>
              <div className="text-3xl font-cyber font-bold text-gray-900 dark:text-white mb-2 transition-colors duration-300">
                {stat.number}
              </div>
              <div className="text-gray-600 dark:text-gray-400 text-sm transition-colors duration-300">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Timeline Section */}
        <div>
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Our <span className="text-neon-pink">Journey</span>
            </h3>
            <p className="text-gray-600 dark:text-gray-300 text-lg">
              From startup to India's leading viral marketing agency
            </p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-neon-pink to-electric-blue rounded-full"></div>

            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className={`flex items-center mb-12 ${
                  index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                }`}
              >
                <div
                  className={`w-1/2 ${
                    index % 2 === 0 ? "pr-8 text-right" : "pl-8 text-left"
                  }`}
                >
                  <div className="bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-800">
                    <div className="text-neon-pink font-bold text-lg mb-2">
                      {milestone.year}
                    </div>
                    <h4 className="text-gray-900 dark:text-white font-bold text-xl mb-2">
                      {milestone.event}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400">
                      {milestone.description}
                    </p>
                  </div>
                </div>

                {/* Timeline Dot */}
                <div className="w-4 h-4 bg-gradient-to-r from-neon-pink to-electric-blue rounded-full border-4 border-white dark:border-black shadow-lg"></div>

                <div className="w-1/2"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
