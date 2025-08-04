import React from 'react';
import { motion } from 'framer-motion';
import { 
  Instagram, 
  Facebook, 
  Twitter, 
  Linkedin, 
  Mail, 
  Phone, 
  MapPin,
  ArrowUp,
  Send,
  Star,
  Users,
  TrendingUp,
  Zap
} from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const services = [
    "Social Media Management",
    "Influencer Marketing", 
    "Celebrity Management",
    "Brand Collaborations",
    "UGC Content Creation",
    "Professional Shoots"
  ];

  const quickLinks = [
    { name: "About Us", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Contact", href: "/contact" },
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" }
  ];

  const achievements = [
    { icon: <Users size={20} />, text: "20+ Brands Served" },
    { icon: <TrendingUp size={20} />, text: "1M+ Content Reach" },
    { icon: <Star size={20} />, text: "30+ Viral Campaigns" },
    { icon: <Zap size={20} />, text: "98% Client Retention" }
  ];

  return (
    <footer className="bg-white dark:bg-black border-t border-gray-200 dark:border-gray-800 transition-colors duration-300">
      {/* Newsletter Section */}
     

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <img 
                src="/pixel-prompt-logo.png" 
                alt="Pixel Prompt Logo" 
                className="h-12 w-auto object-contain"
              />
              <div>
                <span className="text-gray-900 dark:text-white font-cyber text-2xl font-bold">PIXEL PROMPT</span>
                <div className="text-gray-500 dark:text-gray-400 text-sm">Making Brands Go Viral</div>
              </div>
            </div>
            
            <p className="text-gray-600 dark:text-gray-400 text-lg mb-6 max-w-md leading-relaxed">
              India's #1 social media marketing agency. From G-SHOCK to OPPO, we've helped top brands create viral moments and build authentic connections with their audience.
            </p>
            
            {/* Social Media Links */}
            <div className="flex space-x-4 mb-8">
              {[
                { icon: <Instagram size={20} />, url: "https://www.instagram.com/pixelpromptofficial/", color: "hover:bg-pink-500", name: "Instagram" },
                { icon: <Facebook size={20} />, url: "https://www.instagram.com/pixelpromptofficial/", color: "hover:bg-blue-500", name: "Facebook" },
                { icon: <Twitter size={20} />, url: "https://www.instagram.com/pixelpromptofficial/", color: "hover:bg-blue-400", name: "Twitter" },
                { icon: <Linkedin size={20} />, url: "https://linkedin.com/company/pixelpromptofficial", color: "hover:bg-blue-600", name: "LinkedIn" }
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  className={`w-12 h-12 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center text-gray-600 dark:text-gray-400 ${social.color} hover:text-white transition-all duration-300 hover:scale-110 hover:shadow-lg`}
                >
                  {social.icon}
                </a>
              ))}
            </div>

            {/* Achievements */}
            <div className="grid grid-cols-2 gap-4">
              {achievements.map((achievement, index) => (
                <div key={index} className="flex items-center space-x-2 text-gray-600 dark:text-gray-400">
                  <div className="text-neon-pink">{achievement.icon}</div>
                  <span className="text-sm font-medium">{achievement.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-gray-900 dark:text-white font-bold text-lg mb-6 flex items-center">
              <Star className="w-5 h-5 text-neon-pink mr-2" />
              Our Services
            </h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <a 
                    href="/services" 
                    className="text-gray-600 dark:text-gray-400 hover:text-neon-pink dark:hover:text-neon-pink transition-colors duration-300 text-sm flex items-center group"
                  >
                    <div className="w-1.5 h-1.5 bg-electric-blue rounded-full mr-3 group-hover:bg-neon-pink transition-colors"></div>
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Quick Links */}
          <div>
            <h3 className="text-gray-900 dark:text-white font-bold text-lg mb-6 flex items-center">
              <Phone className="w-5 h-5 text-electric-blue mr-2" />
              Get In Touch
            </h3>
            
            {/* Contact Info */}
            <div className="space-y-4 mb-8">
              <div className="flex items-start space-x-3">
                <Phone className="text-neon-pink mt-1 flex-shrink-0" size={18} />
                <div>
                  <a href="tel:+917078890112" className="text-gray-600 dark:text-gray-400 hover:text-neon-pink transition-colors">
                    +91 70788 90112
                  </a>
                  <div className="text-xs text-gray-500 dark:text-gray-500">Available 24/7</div>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Mail className="text-electric-blue mt-1 flex-shrink-0" size={18} />
                <div>
                  <a href="mailto: pixelpromptofficial@gmail.com" className="text-gray-600 dark:text-gray-400 hover:text-electric-blue transition-colors">
                    pixelpromptofficial@gmail.com
                  </a>
                  <div className="text-xs text-gray-500 dark:text-gray-500">Quick Response</div>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <MapPin className="text-neon-pink mt-1 flex-shrink-0" size={18} />
                <div>
                  <span className="text-gray-600 dark:text-gray-400">New Delhi, Delhi</span>
                  <div className="text-xs text-gray-500 dark:text-gray-500">India</div>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-gray-900 dark:text-white font-semibold text-sm mb-3">Quick Links</h4>
              <div className="grid grid-cols-2 gap-2">
                {quickLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    className="text-gray-600 dark:text-gray-400 hover:text-neon-pink transition-colors text-xs"
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6">
              <p className="text-gray-600 dark:text-gray-400 text-sm text-center md:text-left">
                © 2025 Pixel Prompt. All rights reserved. Made with 💖 in India
              </p>
              <div className="flex items-center space-x-4">
                <a href="/privacy" className="text-gray-500 dark:text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 text-xs transition-colors">
                  Privacy Policy
                </a>
                <span className="text-gray-300 dark:text-gray-700">•</span>
                <a href="/terms" className="text-gray-500 dark:text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 text-xs transition-colors">
                  Terms of Service
                </a>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="text-xs text-gray-500 dark:text-gray-500">
                🚀 Making brands viral since 2024
              </div>
              
              {/* Back to Top Button */}
              <motion.button
                onClick={scrollToTop}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="w-10 h-10 bg-gradient-to-r from-neon-pink to-electric-blue rounded-full flex items-center justify-center transition-all duration-300 hover:shadow-lg hover:shadow-neon-pink/25"
              >
                <ArrowUp className="text-white" size={18} />
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
