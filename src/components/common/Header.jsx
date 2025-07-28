import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, Zap, Home, User, Briefcase, FolderOpen, Mail } from 'lucide-react';
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
    { name: 'Home', path: '/', icon: <Home size={16} /> },
    { name: 'About', path: '/about', icon: <User size={16} /> },
    { name: 'Services', path: '/services', icon: <Briefcase size={16} /> },
    { name: 'Portfolio', path: '/portfolio', icon: <FolderOpen size={16} /> },
    { name: 'Contact', path: '/contact', icon: <Mail size={16} /> }
  ];

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed w-full z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-white/95 dark:bg-black/95 backdrop-blur-xl border-b border-gray-200/35 shadow-lg shadow-gray-200/20 dark:shadow-neon-pink/10'
            : 'bg-white/90 dark:bg-black/90 backdrop-blur-md '
        }`}
      >
        <div className=" max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8">
          {/* Main Header Row - Modified Layout */}
          <div className="flex items-center justify-between h-16 sm:h-18 md:h-24 lg:h-22">
            
            {/* Logo Section */}
            <div className="flex-shrink-0">
              <Link to="/" className="flex items-center space-x-3 sm:space-x-4 group">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-neon-pink/30 to-electric-blue/30 rounded-xl lg:rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <img
                    src="/pixel-prompt-logo.png"
                    alt="Pixel Prompt Logo"
                    className="relative h-10 w-10 sm:h-12 sm:w-12 md:h-14 md:w-14 lg:h-16 lg:w-16 rounded-xl lg:rounded-2xl object-contain transform group-hover:scale-110 transition-all duration-300 shadow-lg"
                  />
                </div>
                <div className="flex flex-col">
                  <motion.span
                    className="bg-gradient-to-r from-gray-900 via-neon-pink to-electric-blue dark:from-white dark:via-neon-pink dark:to-electric-blue bg-clip-text text-transparent font-cyber text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold tracking-wider group-hover:scale-105 transition-transform duration-300"
                    whileHover={{ scale: 1.05 }}
                  >
                    PIXEL PROMPT
                  </motion.span>
                </div>
              </Link>
            </div>

            {/* Desktop Navigation & Theme Toggle - Right Aligned */}
            <div className="hidden lg:flex items-center space-x-6">
              {/* Navigation */}
              <nav className="flex items-center">
                <div className="flex items-center space-x-2">

                  {navItems.map((item) => (
                    <Link
                      key={item.name}
                      to={item.path}
                      className={`relative px-6 py-3 rounded-full font-semibold transition-all duration-300 group flex items-center space-x-2 ${
                        location.pathname === item.path
                          ? 'text-white bg-gradient-to-r from-neon-pink to-electric-blue shadow-lg shadow-neon-pink/25'
                          : 'text-gray-700 dark:text-white hover:text-neon-pink dark:hover:text-neon-pink hover:bg-gray-100/80 dark:hover:bg-gray-800/60'
                      }`}
                    >
                      <span className={`text-sm ${location.pathname === item.path ? 'text-white' : 'text-gray-400 group-hover:text-neon-pink'} transition-colors duration-300`}>
                        {item.icon}
                      </span>
                      <span>{item.name}</span>
                      {location.pathname === item.path && (
                        <motion.div
                          layoutId="activeTab"
                          className="absolute inset-0 bg-gradient-to-r from-neon-pink to-electric-blue rounded-full -z-10"
                          transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                        />
                      )}
                    </Link>
                  ))}
                </div>
              </nav>

              {/* Theme Toggle */}
              <div className="flex-shrink-0">
                <ThemeToggle />
              </div>
            </div>

            {/* Tablet Navigation */}
            <nav className="hidden md:flex lg:hidden items-center space-x-1 flex-1 justify-center mx-4">
              <div className="flex items-center space-x-1 bg-white/60 dark:bg-gray-900/60 backdrop-blur-xl rounded-full px-4 py-3 border border-gray-200/50 dark:border-gray-700/50">
                {navItems.slice(0, 4).map((item) => (
                  <Link
                    key={item.name}
                    to={item.path}
                    className={`px-4 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                      location.pathname === item.path
                        ? 'text-white bg-gradient-to-r from-neon-pink to-electric-blue'
                        : 'text-gray-700 dark:text-white hover:text-neon-pink hover:bg-gray-100 dark:hover:bg-gray-800'
                    }`}
                  >
                    <span className="flex items-center space-x-1">
                      <span className="text-xs">{item.icon}</span>
                      <span className="hidden sm:inline">{item.name}</span>
                    </span>
                  </Link>
                ))}
              </div>
            </nav>

            {/* Tablet Theme Toggle */}
            <div className="hidden md:flex lg:hidden">
              <ThemeToggle />
            </div>

            {/* Mobile Controls */}
            <div className="md:hidden flex items-center space-x-2 sm:space-x-3">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                
              </motion.div>
              
              {/* Theme Toggle for Mobile */}
              <div className="scale-90 sm:scale-100">
                <ThemeToggle />
              </div>
              
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="p-2 sm:p-2.5 text-gray-700 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-all duration-300"
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
                      <X size={20} className="sm:w-6 sm:h-6" />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="menu"
                      initial={{ rotate: 90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: -90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Menu size={20} className="sm:w-6 sm:h-6" />
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
              className="md:hidden fixed inset-0 bg-black/50 backdrop-blur-sm z-40 top-0"
              onClick={() => setIsOpen(false)}
            />
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ type: 'spring', bounce: 0.2, duration: 0.4 }}
              className="md:hidden fixed top-18 sm:top-20 left-3 right-3 sm:left-4 sm:right-4 bg-white dark:bg-gray-900 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-800 z-50 overflow-hidden max-h-[calc(100vh-6rem)] sm:max-h-[calc(100vh-7rem)]"
            >
              <div className="bg-gradient-to-r from-neon-pink/10 to-electric-blue/10 p-4 sm:p-5 border-b border-gray-200 dark:border-gray-800">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-2.5 h-2.5 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-sm sm:text-base font-medium text-gray-700 dark:text-gray-300">Navigation Menu</span>
                  </div>
                  {/* Additional Theme Toggle in Menu Header */}
                  <div className="scale-90">
                    <ThemeToggle />
                  </div>
                </div>
              </div>

              <div className="px-3 sm:px-4 py-3 sm:py-4 space-y-2 max-h-80 sm:max-h-96 overflow-y-auto">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.07 }}
                  >
                    <Link
                      to={item.path}
                      className={`flex items-center justify-between p-3 sm:p-4 rounded-xl transition-all duration-300 group ${
                        location.pathname === item.path
                          ? 'bg-gradient-to-r from-neon-pink to-electric-blue text-white shadow'
                          : 'text-gray-800 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800'
                      }`}
                      onClick={() => setIsOpen(false)}
                    >
                      <span className="flex items-center space-x-3 sm:space-x-4">
                        <span className="text-lg sm:text-xl">{item.icon}</span>
                        <span className="font-medium text-base sm:text-lg">{item.name}</span>
                      </span>
                      <ArrowRight
                        size={16}
                        className={`transition-transform group-hover:translate-x-1 ${
                          location.pathname === item.path ? 'text-white' : 'text-gray-400'
                        }`}
                      />
                    </Link>
                  </motion.div>
                ))}
              </div>

              <div className="px-3 sm:px-4 py-4 sm:py-5 bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 border-t border-gray-200 dark:border-gray-700">
                <div className="text-center">
                  <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mb-3 sm:mb-4">Ready to go viral?</p>
                  <Link
                    to="/contact"
                    className="inline-flex items-center space-x-2 px-6 py-3 sm:px-8 sm:py-4 bg-gradient-to-r from-neon-pink to-electric-blue text-white font-bold rounded-full hover:shadow-lg transition-all duration-300 text-sm sm:text-base"
                    onClick={() => setIsOpen(false)}
                  >
                    <Zap size={14} className="sm:w-5 sm:h-5" />
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
