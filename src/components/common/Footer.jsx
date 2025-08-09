import React from "react";
import { motion } from "framer-motion";
import {
  Instagram,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  ArrowUp,
  Star,
  Users,
  TrendingUp,
  Zap,
} from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const services = [
    "Social Media Management",
    "Influencer Marketing",
    "Celebrity Management",
    "Brand Collaborations",
    "UGC Content Creation",
    "Professional Shoots",
  ];

  const achievements = [
    { icon: <Users size={18} />, text: "20+ Brands" },
    { icon: <TrendingUp size={18} />, text: "1M+ Reach" },
    { icon: <Star size={18} />, text: "30+ Viral Campaigns" },
    { icon: <Zap size={18} />, text: "98% Retention" },
  ];

  return (
    <motion.footer
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8 }}
      className="bg-white dark:bg-black border-t border-gray-200 dark:border-gray-800 transition-colors duration-300"
    >
      {/* Top CTA Section */}
      <div className="text-center py-12 px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
          Elevate Your Influence with{" "}
          <span className="text-neon-pink">Pixel Prompt</span>
        </h2>
        <p className="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto mb-8">
          Explore, Collaborate, Innovate, and Achieve with India’s #1 social
          media marketing agency.
        </p>
        <motion.a
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          href="/contact"
          className="px-6 py-3 rounded-full bg-gradient-to-r from-neon-pink to-electric-blue text-white font-semibold shadow-lg hover:shadow-neon-pink/20 transition"
        >
          Let’s Collaborate
        </motion.a>
      </div>

      {/* Info Section */}
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10 py-12 border-t border-gray-200 dark:border-gray-800">
        {/* Services */}
        <div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
            <Star className="text-neon-pink w-5 h-5 mr-2" /> Services
          </h3>
          <ul className="space-y-2">
            {services.map((service, idx) => (
              <li
                key={idx}
                className="text-gray-600 dark:text-gray-400 text-sm hover:text-neon-pink transition"
              >
                {service}
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
            <Phone className="text-electric-blue w-5 h-5 mr-2" /> Contact
          </h3>
          <p className="text-gray-600 dark:text-gray-400 text-sm mb-2">
            <a
              href="tel:+917078890112"
              className="hover:text-neon-pink transition"
            >
              +91 70788 90112
            </a>
          </p>
          <p className="text-gray-600 dark:text-gray-400 text-sm mb-2">
            <a
              href="mailto:pixelpromptofficial@gmail.com"
              className="hover:text-electric-blue transition"
            >
              pixelpromptofficial@gmail.com
            </a>
          </p>
          <p className="text-gray-600 dark:text-gray-400 text-sm">
            <MapPin className="inline-block w-4 h-4 mr-1 text-neon-pink" />
            New Delhi, India
          </p>
        </div>

        {/* Social */}
        <div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            Follow Us
          </h3>
          <div className="flex space-x-4">
            {[
              {
                icon: <Instagram size={18} />,
                url: "https://instagram.com/pixelpromptofficial",
              },
              {
                icon: <Linkedin size={18} />,
                url: "https://linkedin.com/company/pixelpromptofficial",
              },
            ].map((s, i) => (
              <a
                key={i}
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gradient-to-r hover:from-neon-pink hover:to-electric-blue hover:text-white transition"
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Logo */}
        {/* Logo */}
<div className="flex justify-center md:justify-start mb-6 md:mb-0">
  <img
    src="/pixel-prompt-logo.png" // ensure this matches the exact filename in /public
    alt="Pixel Prompt Logo"
    className="h-32 md:h-40 w-auto max-w-full object-contain"
  />
</div>

      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-200 dark:border-gray-800 py-6">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between text-gray-500 dark:text-gray-400 text-sm space-y-4 md:space-y-0">
          <p>© {new Date().getFullYear()} Pixel Prompt. All rights reserved.</p>
          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="w-10 h-10 rounded-full bg-gradient-to-r from-neon-pink to-electric-blue flex items-center justify-center text-white shadow hover:shadow-neon-pink/30 transition"
          >
            <ArrowUp size={18} />
          </motion.button>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
