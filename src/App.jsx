import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { ThemeProvider } from './contexts/ThemeContext';
import Header from './components/common/Header.jsx';
import Footer from './components/common/Footer.jsx';
import WhatsAppButton from './components/common/WhatsAppButton.jsx';
import LoadingScreen from './components/common/LoadingScreen.jsx';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Services from './pages/Services.jsx';
import Portfolio from './pages/Portfolio.jsx';
import Contact from './pages/Contact.jsx';
import ScrollToTop from './components/ScrollToTop';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadApp = async () => {
      try {
        const imagesToPreload = [
          '/pixel-prompt-logo.png',
        ];

        const imagePromises = imagesToPreload.map((src) => {
          return new Promise((resolve) => {
            const img = new Image();
            img.onload = resolve;
            img.onerror = resolve;
            img.src = src;
          });
        });

        await Promise.all([
          ...imagePromises,
          new Promise(resolve => setTimeout(resolve, 3000))
        ]);

        setIsLoading(false);
      } catch (error) {
        console.log('Loading completed with some errors:', error);
        setIsLoading(false);
      }
    };

    loadApp();
  }, []);

  return (
    <ThemeProvider>
      <Router>
        <div className="App bg-white dark:bg-black min-h-screen transition-colors duration-300">
          <AnimatePresence mode="wait">
            {isLoading ? (
              <LoadingScreen key="loading" />
            ) : (
              <>
                <Header />
                <ScrollToTop />
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/services" element={<Services />} />
                  <Route path="/portfolio" element={<Portfolio />} />
                  <Route path="/contact" element={<Contact />} />
                </Routes>
                <Footer />
                <WhatsAppButton />
              </>
            )}
          </AnimatePresence>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
