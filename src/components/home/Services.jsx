import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const Services = () => {
  const navigate = useNavigate();

  const handleKnowMore = (serviceType) => {
    switch (serviceType) {
      case "brand":
        navigate("/services/brand");
        break;
      case "social-media":
        navigate("/services/social-media");
        break;
      case "influencer":
        navigate("/services/influencer");
        break;
      case "content":
        navigate("/services/content");
        break;
      case "celebrity":
        navigate("/services/celebrity");
        break;
      case "shoots":
        navigate("/services/professional");
        break;
      default:
        break;
    }
  };

  // Typewriter effect hook
  const useTypewriter = (text, speed = 30, startDelay = 0) => {
    const [displayText, setDisplayText] = useState("");
    const [isComplete, setIsComplete] = useState(false);
    const [shouldStart, setShouldStart] = useState(false);

    useEffect(() => {
      if (!shouldStart) return;

      const timer = setTimeout(() => {
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

        return () => clearInterval(interval);
      }, startDelay);

      return () => clearTimeout(timer);
    }, [text, speed, startDelay, shouldStart]);

    return { displayText, isComplete, setShouldStart };
  };

  const headerTypewriter = useTypewriter("Bring to the Table", 50, 0);
  const subtitleTypewriter = useTypewriter(
    "Our Services: From Idea to Impact",
    30,
    250
  );

  const services = [
    {
      number: "01",
      title: "Brand Conceptualisation",
      description:
        "Creative strategies to define and shape your brand's unique identity in the market.",
      buttonText: "Know More",
      type: "brand",
    },
    {
      number: "02",
      title: "Social Media Marketing",
      description:
        "Comprehensive SMM to grow your audience, boost engagement, and enhance brand visibility.",
      buttonText: "Know More",
      type: "social-media",
    },
    {
      number: "03",
      title: "Celebrity Marketing",
      description:
        "Leverage star power to elevate your brand with powerful celebrity endorsements.",
      buttonText: "Know More",
      type: "celebrity",
    },
    {
      number: "04",
      title: "Content Creation",
      description:
        "Engaging visuals, video shoots, and storytelling crafted to capture your audience's attention.",
      buttonText: "Know More",
      type: "content",
    },
    {
      number: "05",
      title: "Influencer Marketing",
      description:
        "Drive authentic engagement through collaborations with top social media influencers.",
      buttonText: "Know More",
      type: "influencer",
    },
    {
      number: "06",
      title: "Professional Shoots",
      description:
        "High-quality photo and video shoots that showcase your brand in the most compelling light.",
      buttonText: "Know More",
      type: "shoots",
    }
  ];

  return (
    <section className="bg-black py-16 lg:py-24 relative overflow-hidden min-h-screen">
      {/* Subtle grid background */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="grid grid-cols-12 h-full">
          {Array.from({ length: 12 }).map((_, i) => (
            <div key={i} className="border-l border-white/10"></div>
          ))}
        </div>
        <div className="absolute inset-0 grid grid-rows-8">
          {Array.from({ length: 8 }).map((_, i) => (
            <div key={i} className="border-t border-white/10"></div>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header - With typewriter effect and fixed height */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ 
            opacity: 1, 
            y: 0,
            transition: {
              duration: 0.1,
              onComplete: () => {
                headerTypewriter.setShouldStart(true);
                subtitleTypewriter.setShouldStart(true);
              }
            }
          }}
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-16 lg:mb-24"
        >
          {/* Fixed height container for typography */}
          <div className="h-32 md:h-40 lg:h-48 flex flex-col justify-center">
            <h2 className="font-bold text-4xl md:text-6xl  mb-4 lg:mb-6 leading-tight text-white min-h-[1.2em]">
              {headerTypewriter.displayText}
              
            </h2>
            <p className="text-lg md:text-xl lg:text-2xl text-gray-400 max-w-4xl mx-auto leading-relaxed min-h-[1.5em]">
              {subtitleTypewriter.displayText}
              {subtitleTypewriter.displayText && !subtitleTypewriter.isComplete && (
                <span className="animate-pulse"></span>
              )}
            </p>
          </div>
        </motion.div>

        {/* Services Grid - Individual card animations */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                delay: index * 0.15,
                duration: 0.6,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
              className="group relative bg-gray-900 rounded-3xl overflow-hidden border border-gray-700 cursor-pointer min-h-[400px] lg:min-h-[450px]"
            >
              {/* Curved background */}
              <div className="absolute top-0 right-0 w-32 h-32 lg:w-40 lg:h-40">
                <div
                  className="absolute inset-0 bg-gray-700/40 transform translate-x-8 -translate-y-8"
                  style={{
                    borderRadius: "0 0 0 100%",
                  }}
                ></div>
              </div>

              {/* Number */}
              <div className="absolute top-4 lg:top-6 right-4 lg:right-6 text-5xl lg:text-6xl font-bold text-gray-500/50 z-10">
                {service.number}
              </div>

              {/* Card content */}
              <div className="relative p-6 lg:p-8 h-full flex flex-col justify-between z-20">
                <div className="space-y-4 lg:space-y-6 mt-12 lg:mt-16">
                  <div className="space-y-3 lg:space-y-4">
                    <h3 className="text-xl lg:text-2xl font-bold text-purple-400 leading-tight">
                      {service.title}
                    </h3>
                    <p className="text-gray-300 text-sm lg:text-base leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>

                {/* Button */}
                <motion.button
                  whileTap={{ scale: 0.95 }}
                  onClick={() => handleKnowMore(service.type)}
                  className="mt-6 lg:mt-8 self-start bg-gradient-to-r from-purple-600 to-purple-700 text-white px-6 lg:px-8 py-3 lg:py-3.5 rounded-full font-semibold text-sm lg:text-base hover:from-purple-700 hover:to-purple-800 transition-colors duration-200 hover:scale-105 transition-transform"
                >
                  {service.buttonText}
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Services Button */}
        
      </div>
    </section>
  );
};

export default Services;
