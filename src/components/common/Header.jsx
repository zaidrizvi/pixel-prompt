import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, Zap } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import ThemeToggle from './ThemeToggle';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navItems = [
    { name: 'Home', path: '/', icon: '' },
    { name: 'About', path: '/about', icon: '' },
    { name: 'Services', path: '/services', icon: '' },
    { name: 'Portfolio', path: '/portfolio', icon: '' },
    { name: 'Contact', path: '/contact', icon: '' }
  ];

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed w-full z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-white/95 dark:bg-black/95 backdrop-blur-xl border-b border-gray-200/50 dark:border-neon-pink/30 shadow-lg shadow-gray-200/20 dark:shadow-neon-pink/10'
            : 'bg-white/90 dark:bg-black/90 backdrop-blur-md border-b border-gray-200/30 dark:border-neon-pink/20'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <Link to="/" className="flex items-center space-x-4 group">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-neon-pink/30 to-electric-blue/30 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <img
                  src="/pixel-prompt-logo.png"
                  alt="Pixel Prompt Logo"
                  className="relative h-14 w-14 rounded-2xl object-contain transform group-hover:scale-110 transition-all duration-300 shadow-lg"
                />
              </div>
              <div className="flex flex-col">
                <motion.span
                  className="bg-gradient-to-r from-gray-900 via-neon-pink to-electric-blue dark:from-white dark:via-neon-pink dark:to-electric-blue bg-clip-text text-transparent font-cyber text-2xl font-bold tracking-wider group-hover:scale-105 transition-transform duration-300"
                  whileHover={{ scale: 1.05 }}
                >
                  PIXEL PROMPT
                </motion.span>
               
              </div>
            </Link>

            {/* Desktop */}
            <nav className="hidden lg:flex items-center space-x-2">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`relative px-4 py-2 rounded-full font-medium transition-all duration-300 group ${
                    location.pathname === item.path
                      ? 'text-white bg-gradient-to-r from-neon-pink to-electric-blue shadow-lg shadow-neon-pink/25'
                      : 'text-gray-700 dark:text-white hover:text-neon-pink dark:hover:text-neon-pink hover:bg-gray-100 dark:hover:bg-gray-800'
                  }`}
                >
                  <span className="flex items-center space-x-2">
                    <span className="text-sm">{item.icon}</span>
                    <span>{item.name}</span>
                  </span>
                  {location.pathname === item.path && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute inset-0 bg-gradient-to-r from-neon-pink to-electric-blue rounded-full -z-10"
                      transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                </Link>
              ))}
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="ml-4">
                <Link
                  to="/contact"
                  className="px-6 py-3 bg-gradient-to-r from-neon-pink to-electric-blue text-white font-bold rounded-full hover:shadow-lg hover:shadow-neon-pink/25 transition-all duration-300 flex items-center space-x-2"
                >
                  <span>Get Viral</span>
                  <ArrowRight size={16} />
                </Link>
              </motion.div>
              <ThemeToggle />
            </nav>

            {/* Tablet */}
            <nav className="hidden md:flex lg:hidden items-center space-x-1">
              {navItems.slice(0, 4).map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`px-3 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    location.pathname === item.path
                      ? 'text-white bg-gradient-to-r from-neon-pink to-electric-blue'
                      : 'text-gray-700 dark:text-white hover:text-neon-pink hover:bg-gray-100 dark:hover:bg-gray-800'
                  }`}
                >
                  <span className="flex items-center space-x-1">
                    <span className="text-xs">{item.icon}</span>
                    <span>{item.name}</span>
                  </span>
                </Link>
              ))}
              <ThemeToggle />
            </nav>

            {/* Mobile */}
            <div className="md:hidden flex items-center space-x-3">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  to="/contact"
                  className="px-4 py-2 bg-gradient-to-r from-neon-pink to-electric-blue text-white font-bold rounded-full text-sm hover:shadow-lg transition-all duration-300 flex items-center space-x-1"
                >
                  <Zap size={14} />
                  <span>Contact</span>
                </Link>
              </motion.div>
              <ThemeToggle />
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="p-2 text-gray-700 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-all duration-300"
                onClick={() => setIsOpen(!isOpen)}
              >
                <AnimatePresence mode="wait">
                  {isOpen ? (
                    <motion.div
                      key="close"
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <X size={24} />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="menu"
                      initial={{ rotate: 90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: -90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Menu size={24} />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Mobile Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="md:hidden fixed inset-0 bg-black/50 backdrop-blur-sm z-40 top-24"
              onClick={() => setIsOpen(false)}
            />
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ type: 'spring', bounce: 0.2, duration: 0.4 }}
              className="md:hidden fixed top-[5.5rem] left-4 right-4 bg-white dark:bg-gray-900 rounded-3xl shadow-2xl border border-gray-200 dark:border-gray-800 z-50 overflow-hidden"
            >
              <div className="bg-gradient-to-r from-neon-pink/10 to-electric-blue/10 p-4 border-b border-gray-200 dark:border-gray-800">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Navigation Menu</span>
                </div>
              </div>

              <div className="px-4 py-3 space-y-2">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.07 }}
                  >
                    <Link
                      to={item.path}
                      className={`flex items-center justify-between p-3 rounded-xl text-base transition-all duration-300 group ${
                        location.pathname === item.path
                          ? 'bg-gradient-to-r from-neon-pink to-electric-blue text-white shadow'
                          : 'text-gray-800 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800'
                      }`}
                      onClick={() => setIsOpen(false)}
                    >
                      <span className="flex items-center space-x-3">
                        <span className="text-xl">{item.icon}</span>
                        <span>{item.name}</span>
                      </span>
                      <ArrowRight
                        size={16}
                        className={`ml-2 transition-transform group-hover:translate-x-1 ${
                          location.pathname === item.path ? 'text-white' : 'text-gray-400'
                        }`}
                      />
                    </Link>
                  </motion.div>
                ))}
              </div>

              <div className="px-4 py-5 bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 border-t border-gray-200 dark:border-gray-700">
                <div className="text-center">
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">Ready to go viral?</p>
                  <Link
                    to="/contact"
                    className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-neon-pink to-electric-blue text-white font-bold rounded-full hover:shadow-lg transition-all duration-300"
                    onClick={() => setIsOpen(false)}
                  >
                    <Zap size={16} />
                    <span>Start Your Campaign</span>
                  </Link>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
