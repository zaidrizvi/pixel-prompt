import React, { useState, useEffect } from 'react';
import { Menu, X, Zap, Home, User, Briefcase, Mail } from 'lucide-react';
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
    { name: 'Home', path: '/', icon: <Home size={16} />, aria: 'Go to homepage' },
    { name: 'About', path: '/about', icon: <User size={16} />, aria: 'Learn about PixelPrompt' },
    { name: 'Services', path: '/services', icon: <Briefcase size={16} />, aria: 'View our services' },
    { name: 'Contact', path: '/contact', icon: <Mail size={16} />, aria: 'Contact PixelPrompt' }
  ];

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed w-full z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-white/95 dark:bg-black/95 backdrop-blur-xl border-b-[0.1px] border-gray-200/35'
            : 'bg-white/90 dark:bg-black/90 backdrop-blur-md'
        }`}
      >
        <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20 sm:h-24 lg:h-[102px]">
            
            {/* Logo Section */}
            <div className="flex-shrink-0">
              <Link to="/" aria-label="PixelPrompt homepage" className="flex items-center space-x-3 sm:space-x-4 group">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-neon-pink/30 to-electric-blue/30 rounded-xl lg:rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <img
                    src="/pixel-prompt-logo.png"
                    alt="PixelPrompt logo - go to homepage"
                    className="relative h-10 w-10 sm:h-12 sm:w-12 md:h-14 md:w-14 lg:h-16 lg:w-16 rounded-xl lg:rounded-2xl object-contain transform group-hover:scale-110 transition-all duration-300 shadow-lg"
                  />
                </div>
                <div className="flex flex-col">
                  <motion.span
                    className="bg-gradient-to-r from-gray-900 via-neon-pink to-electric-blue dark:from-white dark:via-neon-pink dark:to-electric-blue bg-clip-text text-transparent font-cyber text-base sm:text-lg md:text-2xl font-bold tracking-wider group-hover:scale-105 transition-transform duration-300"
                    whileHover={{ scale: 1.05 }}
                  >
                    PIXEL PROMPT
                  </motion.span>
                </div>
              </Link>
            </div>

            {/* Desktop Navigation & Theme Toggle */}
            <div className="hidden lg:flex items-center space-x-6">
              <nav aria-label="Main navigation" className="flex items-center">
                <ul className="flex items-center space-x-2">
                  {navItems.map((item) => (
                    <li key={item.name}>
                      <Link
                        to={item.path}
                        aria-label={item.aria}
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
                    </li>
                  ))}
                </ul>
              </nav>
              <ThemeToggle />
            </div>

            {/* Mobile Controls */}
            <div className="md:hidden flex items-center space-x-2 sm:space-x-3">
              <ThemeToggle />
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="p-2 sm:p-2.5 text-gray-700 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-all duration-300"
                onClick={() => setIsOpen(!isOpen)}
                aria-label={isOpen ? 'Close mobile menu' : 'Open mobile menu'}
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

      {/* Mobile Full Screen Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.nav
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden fixed inset-0 bg-black/95 backdrop-blur-xl z-40"
            aria-label="Mobile menu"
          >
            <div className="absolute top-6 left-6">
              <Link to="/" aria-label="PixelPrompt homepage" className="flex items-center space-x-3">
                <img
                  src="/pixel-prompt-logo.png"
                  alt="PixelPrompt logo - go to homepage"
                  className="h-12 w-12 rounded-xl object-contain"
                />
                <span className="bg-gradient-to-r from-white via-neon-pink to-electric-blue bg-clip-text text-transparent font-cyber text-lg font-bold tracking-wider">
                  PIXEL PROMPT
                </span>
              </Link>
            </div>

            <div className="absolute top-6 right-6">
              <button
                onClick={() => setIsOpen(false)}
                aria-label="Close mobile menu"
                className="p-2 text-white hover:bg-white/10 rounded-full transition-colors duration-300"
              >
                <X size={24} />
              </button>
            </div>

            <ul className="flex flex-col justify-center items-start h-full pl-8 space-y-12">
              {navItems.map((item, index) => (
                <motion.li
                  key={item.name}
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                >
                  <Link
                    to={item.path}
                    aria-label={item.aria}
                    className={`text-4xl font-bold tracking-wide transition-colors duration-300 hover:text-neon-pink ${
                      location.pathname === item.path ? 'text-neon-pink' : 'text-white'
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name.toUpperCase()}
                  </Link>
                </motion.li>
              ))}
            </ul>

            <div className="absolute bottom-8 left-8 right-8">
             <Link
  to="/contact"
  aria-label="Start your campaign with PixelPrompt"
  className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-neon-pink to-electric-blue text-white font-bold rounded-full hover:shadow-lg transition-all duration-300"
  onClick={() => setIsOpen(false)}
>
  <Zap size={18} />
  <span>Start Your Campaign</span>
</Link>


            </div>
         </motion.nav>

        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
