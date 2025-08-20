import React, { useState } from "react";
import { motion } from "framer-motion";
import { Heart, Rocket, Coffee, Sparkles, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import pixel from "../../assets/pixel.png";
import Stats from "../Stats";

const AboutSection = () => {
  // Typewriter effect hook
  const useTypewriter = (text, speed = 25) => {
    const [displayText, setDisplayText] = useState("");
    const [isComplete, setIsComplete] = useState(false);

    const startTyping = () => {
      let currentIndex = 0;
      const interval = setInterval(() => {
        if (currentIndex <= text.length) {
          setDisplayText(text.slice(0, currentIndex));
          currentIndex++;
        } else {
          setIsComplete(true);
          clearInterval(interval);
        }
      }, speed);
    };

    return { displayText, isComplete, startTyping };
  };

  const heroTypewriter = useTypewriter("DIVE INTO OUR CULTURE", 50);

  const cultureValues = [
    {
      icon: <Rocket size={24} />,
      title: "We Work With You, Not Just For You",
      description:
        "We believe in partnerships, not transactions. Your goals become our goals, and we walk every step together as one team.",
      color: "from-neon-pink to-purple-500",
    },
    {
      icon: <Heart size={24} />,
      title: "Creators at Heart",
      description:
        "We are creators ourselves. That’s why we understand the new-age culture, trends, and what actually connects with people.",
      color: "from-electric-blue to-cyan-500",
    },
    {
      icon: <Sparkles size={24} />,
      title: "Growth as a Shared Mission",
      description:
        "Your success is our success. We measure our work not in likes, but in the real growth we create together.",
      color: "from-yellow-400 to-orange-500",
    },
    {
      icon: <Coffee size={24} />,
      title: "Team Over Everything",
      description:
        "Late nights, early mornings, endless brainstorming we thrive as a team. And when we work with you, you become a part of that team.",
      color: "from-green-400 to-emerald-600",
    },
    {
      icon: <Sparkles size={24} />,
      title: "Always Evolving",
      description:
        "The digital world changes every day, and so do we. We’re quick, adaptable, and always ready to bring the next big idea to the table.",
      color: "from-yellow-400 to-orange-500",
    },
  ];

  return (
    <section className="min-h-screen bg-white dark:bg-black transition-colors duration-500 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute bottom-20 right-10 w-96 h-96  from-electric-blue/20 to-cyan-400/20 "></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64  from-yellow-400/10 to-orange-400/10  "></div>
      </div>

      {/* Grid background */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="grid grid-cols-12 h-full">
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

      <div className="max-w-7xl  mx-auto px-4 sm:px-6 lg:px-8 relative py-20">
        {/* Hero Section */}
       
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          onViewportEnter={() => {
            if (
              !heroTypewriter.isComplete &&
              heroTypewriter.displayText === ""
            ) {
              heroTypewriter.startTyping();
            }
          }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center px-6 py-3  from-neon-pink/10 to-electric-blue/10 rounded-full  mb-8 ">
            <Heart className="w-5 h-5 text-neon-pink mr-3" />
            <span className="text-sm font-modern font-medium text-gray-700 dark:text-gray-300">
              The PixelPrompt Journey
            </span>
          </div>

          <h1 className="font-cyber text-3xl md:text-[80px] font-bold mb-8 leading-tight text-center bg-gradient-to-r from-neon-pink via-electric-blue to-cyber-purple bg-clip-text text-transparent">
            {heroTypewriter.displayText}
          </h1>

          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed font-modern">
            PixelPrompt started with one simple goal: helping brands grow with
            ideas that actually work.
          </p>
        </motion.div>
        {/* Core Values */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mb-20"
        >
          <div className="text-center mb-16">
            <h2 className="font-cyber text-4xl md:text-5xl font-bold mb-6">
              <span className="text-gray-900 dark:text-white">Our </span>
              <span className="text-neon-pink">Core Values</span>
            </h2>
            <p className="text-gray-600 dark:text-gray-300 text-lg max-w-2xl mx-auto">
              The principles that drive every pixel, every campaign, every
              success story
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {cultureValues.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white dark:bg-gray-900 rounded-3xl p-8 border border-gray-200 dark:border-gray-800 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 group"
              >
                <div
                  className={`w-16 h-16  ${value.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <div className="text-white">{value.icon}</div>
                </div>
                <h3 className="font-cyber text-xl font-bold text-gray-900 dark:text-white mb-4">
                  {value.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
        {/* Main Story */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20"
        >
          <div>
            <h3 className="text-3xl md:text-4xl font-cyber font-bold text-gray-900 dark:text-white mb-6 leading-tight">
              Pixel Prompt.
              <br />
              Your brand, our mission
            </h3>

            <p className="text-gray-600 dark:text-gray-300 text-lg mb-6 leading-relaxed font-modern">
                We’re not an agency that just runs campaigns we become your team.
                <span className="text-electric-blue
                "> The ones who brainstorm late, test crazy ideas, track every click, and celebrate every win with you.</span>
             
            </p>

            <p className="text-gray-600 dark:text-gray-300 text-lg mb-8 leading-relaxed font-modern">
             With 80+ brands across fashion, F&B, beauty, and wellness including names like{" "}
              <strong className="text-neon-pink">G-SHOCK</strong> and{" "}
              <strong className="text-electric-blue">OPPO </strong>
                we’ve seen one truth: growth comes when your brand feels understood.
            </p>
            <h3 className="text-2xl md:text-3xl font-cyber font-bold text-gray-900 dark:text-white mb-6 leading-tight">
              How we work with you:
            </h3>
            <div className="space-y-4 mb-12">
              {[
                "We understand your audience, like it’s our own",
                "We create content that feels authentic, not forced",
                "We connect you with influencers/creators who actually move the needle",
                "We treat your wins like they’re ours because they are.",
              ].map((point, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ delay: 0.1 + index * 0.1 }}
                  className="flex items-center space-x-3"
                >
                  <CheckCircle className="w-5 h-5 text-neon-pink flex-shrink-0" />
                  <span className="text-gray-600 dark:text-gray-300 font-modern">
                    {point}
                  </span>
                </motion.div>
              ))}
            </div>
            <p className="text-gray-600 dark:text-gray-300 text-lg mb-8 leading-relaxed font-modern">
              If you’re looking for a team that cares about your brand as much
              as you do you’ve just found them.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/contact"
                className="px-8 py-4 bg-gradient-to-r from-neon-pink to-electric-blue text-white font-modern font-semibold rounded-full hover:scale-105 hover:shadow-lg transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <span>Start Your Journey</span>
              </Link>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative">
              <img
                src={pixel}
                alt="Pixel Prompt Culture"
                className="w-full h-[400px] object-cover rounded-3xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-neon-pink/20 to-electric-blue/20 rounded-3xl"></div>

              <div className="absolute -top-6 -right-6 w-12 h-12 bg-neon-pink rounded-full animate-bounce opacity-80"></div>
              <div className="absolute -bottom-4 -left-4 w-8 h-8 bg-electric-blue rounded-full animate-pulse"></div>
              <div className="absolute top-1/2 -right-8 w-6 h-6 bg-yellow-400 rounded-full"></div>
            </div>
          </div>
        </motion.div>
        {/* Stats */}
        <Stats />
      </div>
    </section>
  );
};

export default AboutSection;
