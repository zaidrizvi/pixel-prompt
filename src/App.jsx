import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { ThemeProvider } from "./contexts/ThemeContext";
import Header from "./components/common/Header.jsx";
import Footer from "./components/common/Footer.jsx";
import WhatsAppButton from "./components/common/WhatsAppButton.jsx";
import LoadingScreen from "./components/common/LoadingScreen.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Services from "./pages/Services.jsx";

import Contact from "./pages/Contact.jsx";
import ScrollToTop from "./components/ScrollToTop";
import Oppo from "./work/Oppo.jsx";
import GShock from "./work/Gshock.jsx";
import Garnier from "./work/Garnier.jsx";
import Brand from "./components/Services/Brand.jsx";
import ContentCreation from "./components/Services/ContentCreation .jsx";
import InfluencerMarketing from "./components/Services/InflencerMarketing.jsx";
import SocialMediaMarketing from "./components/Services/SocialMediaMarketing .jsx";
import Celebrity from "./components/Services/Celebrity.jsx";
import ProfessionalShoots from "./components/Services/ProfessionalShoots.jsx";

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
          new Promise(resolve => setTimeout(resolve, 1700))
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
            
              <Route path="/contact" element={<Contact />} />
              <Route path="/work/Oppo" element={<Oppo />} />
              <Route path="/work/Gshock" element={<GShock />} />
              <Route path="/work/Garnier" element={<Garnier />} />
              <Route path="/services/brand" element={<Brand />} />
               <Route path="/services/content" element={<ContentCreation />} />
                <Route path="/services/influencer" element={<InfluencerMarketing/>} />
                <Route path="/services/social-media" element={<SocialMediaMarketing/>} />
                <Route path="/services/celebrity" element={<Celebrity/>} />
                <Route path="/services/professional" element={<ProfessionalShoots/>} />
                
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
