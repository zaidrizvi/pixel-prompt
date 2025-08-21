import React from "react";
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
      case "professional":
        navigate("/services/professional");
        break;
      default:
        break;
    }
  };

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
      title: "Influencer Marketing",
      description:
        "Strategic influencer collaborations to build trust, reach niche audiences, and drive authentic engagement.",
      buttonText: "Know More",
      type: "influencer",
    },
    {
      number: "04",
      title: "Content Creation",
      description:
        "Engaging visuals, video shoots, and storytelling crafted to capture your audience's attention.",
      buttonText: "Know More",
      type: "content",
    },
  ];

  return (
    <section className="bg-white dark:bg-black py-16 lg:py-24 relative overflow-hidden min-h-screen">

      {/* Subtle grid background */}
  <div className="absolute top-12 sm:top-8 left-0 right-0 bottom-0 opacity-20">
  {/* Grid background */}
  <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.55)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.55)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(255,255,255,0.55)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.55)_1px,transparent_1px)] bg-[size:150px_150px]"></div>

  {/* Softer top & bottom fade */}
  <div className="absolute inset-0 bg-gradient-to-b from-white/40 via-transparent to-white/70 dark:from-black/40 dark:via-transparent dark:to-black/70"></div>
</div>



      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 lg:mb-24"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-bold text-4xl md:text-6xl lg:text-7xl mb-4 lg:mb-6 leading-tight text-black dark:text-white"
          >
           SERVICES WE OFFER
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl lg:text-2xl text-gray-600 dark:text-gray-400 max-w-4xl mx-auto leading-relaxed"
          >
            Our Services: From Idea to Impact
          </motion.p>
        </motion.div>

        {/* Services Grid */}
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
              className="group relative bg-gray-100 dark:bg-gray-900 rounded-3xl overflow-hidden border border-gray-200 dark:border-gray-700 cursor-pointer min-h-[400px] lg:min-h-[450px]"
            >
              {/* Curved background */}
              <div className="absolute top-0 right-0 w-32 h-32 lg:w-40 lg:h-40">
                <div
                  className="absolute inset-0 bg-gray-300/40 dark:bg-gray-700/40 transform translate-x-8 -translate-y-8"
                  style={{
                    borderRadius: "0 0 0 100%",
                  }}
                ></div>
              </div>

              {/* Number */}
              <div className="absolute top-4 lg:top-6 right-4 lg:right-6 text-5xl lg:text-6xl font-bold text-gray-300 dark:text-gray-500/50 z-10">
                {service.number}
              </div>

              {/* Card content */}
              <div className="relative p-6 lg:p-8 h-full flex flex-col justify-between z-20">
                <div className="space-y-4 lg:space-y-6 mt-12 lg:mt-16">
                  <div className="space-y-3 lg:space-y-4">
                    <h3 className="text-xl lg:text-2xl font-bold text-purple-600 dark:text-purple-400 leading-tight">
                      {service.title}
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300 text-sm lg:text-base leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>

                {/* Button */}
                <button
                  onClick={() => handleKnowMore(service.type)}
                  className="mt-6 lg:mt-8 self-start bg-gradient-to-r from-purple-600 to-purple-700 text-white px-6 lg:px-8 py-3 lg:py-3.5 rounded-full font-semibold text-sm lg:text-base hover:from-purple-700 hover:to-purple-800 transition-colors duration-200 hover:scale-105 transition-transform"
                >
                  {service.buttonText}
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Services Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.6, delay: 0 }}
          className="mt-12 text-center"
        >
          <button
            onClick={() => navigate("/services")}
            className="bg-black text-white dark:bg-white dark:text-black px-8 py-3 rounded-full font-semibold text-base hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors duration-200 hover:scale-105 transition-transform"
          >
            View All Services
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
