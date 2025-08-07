import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";

const BrandSectionImproved = () => {
  // Updated brands array with type and content
  const brands = [
    {
      type: "image",
      src: "/logos/gshocklogo.png",
      alt: "G-SHOCK",
      name: "G-SHOCK",
    },
    { type: "text", name: "OPPO" },
    {
      type: "image",
      src: "/logos/geetanjali-logo.png",
      alt: "Geetanjali Salon",
      name: "GEETANJALI SALON",
    },
    {
      type: "image",
      src: "/logos/dear-donna.png",
      alt: "Dear Donna",
      name: "Dear Donna",
    },
    {
      type: "image",
      src: "/logos/garnier-logo.png",
      alt: "Garnier",
      name: "GARNIER",
    },
    { type: "image", src: "/logos/handa.png", alt: "HANDA", name: "HANDA" },
    { type: "image", src: "/logos/cink.png", alt: "CINK", name: "CINK" },
    {
      type: "image",
      src: "/logos/burgrill-logo.png",
      alt: "Burgrill",
      name: "Burgrill",
    },
    { type: "image", src: "/logos/savvy.png", alt: "SAVVY", name: "SAVVY" },
    {
      type: "image",
      src: "/logos/nomad-pizza-logo.png",
      alt: "Nomad Pizza",
      name: "NOMAD PIZZA",
    },
    {
      type: "image",
      src: "/logos/tresemme-logo.png",
      alt: "TRESemmé",
      name: "TRESemmé",
    },
    { type: "image", src: "/logos/snitch.png", alt: "SNITCH", name: "SNITCH" },
    {
      type: "image",
      src: "/logos/cheesecake-co.png",
      alt: "CHEESECAKE & CO.",
      name: "CHEESECAKE & CO.",
    },
    {
      type: "image",
      src: "/logos/khan-chacha.png",
      alt: "KHAN CHACHA",
      name: "KHAN CHACHA",
    },
    {
      type: "image",
      src: "/logos/daryaganj.png",
      alt: "DARYAGANJ",
      name: "DARYAGANJ",
    },
    {
      type: "image",
      src: "/logos/yes-madam.png",
      alt: "Yes madam",
      name: "Yes madam",
    },
    {
      type: "image",
      src: "/logos/mcdonalds-logo.png",
      alt: "McDonald's",
      name: "McDonald's",
    },
    {
      type: "image",
      src: "/logos/kamalbhai.png",
      alt: "KAMAL BHAI SAREE SANGAM",
      name: "KAMAL BHAI SAREE SANGAM",
    },
    {
      type: "text",
      name: "ASTA BERRY",
    },
    {
      type: "image",
      src: "/logos/indian-sneaker-festival.png",
      alt: "Indian Sneaker Festival",
      name: "Indian Sneaker Festival",
    },
    {
      type: "image",
      src: "/logos/honey-dough.png",
      alt: "Honey & Dough",
      name: "Honey & Dough",
    },
    {
      type: "image",
      src: "/logos/urbanmonkey.png",
      alt: "urbanmonkey",
      name: "urbanmonkey",
    },
    {
      type: "image",
      src: "/logos/tacobell-logo.png",
      alt: "Taco Bell",
      name: "TACO BELL",
    },
    {
      type: "image",
      src: "/logos/the-vintage-parandi.png",
      alt: "The Vintage परांदी",
      name: "The Vintage परांदी",
    },
    {
      type: "image",
      src: "/logos/musaafir.png",
      alt: "Musaafir",
      name: "Musaafir",
    },
    {
      type: "image",
      src: "/logos/dominos-logo.png",
      alt: "Domino's",
      name: "Domino's",
    },
    {
      type: "image",
      src: "/logos/brodway-logo.png",
      alt: "brodway",
      name: "brodway",
    },
    {
      type: "image",
      src: "/logos/bikanervala.png",
      alt: "Bikanervala",
      name: "Bikanervala",
    },
  ];

  const marqueeRef = useRef(null);
  const [scrollWidth, setScrollWidth] = useState(0);
  const [imageErrors, setImageErrors] = useState({});

  const SPEED = 200; // pixels per second

  useEffect(() => {
    const updateScrollWidth = () => {
      if (marqueeRef.current) {
        setScrollWidth(marqueeRef.current.scrollWidth);
      }
    };

    updateScrollWidth(); // initial check
    window.addEventListener("resize", updateScrollWidth);

    // Ensure recalculation after fonts, images, etc.
    const timeout = setTimeout(updateScrollWidth, 1000);

    return () => {
      clearTimeout(timeout);
      window.removeEventListener("resize", updateScrollWidth);
    };
  }, []);

  const duration = scrollWidth / SPEED;

  // Handle image load errors
  const handleImageError = (index) => {
    setImageErrors((prev) => ({
      ...prev,
      [index]: true,
    }));
  };

  // Render brand item based on type
  const renderBrandItem = (brand, index) => {
    const baseClasses =
      "flex items-center justify-center whitespace-nowrap min-w-fit";

    if (brand.type === "image" && !imageErrors[index]) {
      return (
        <div key={index} className={baseClasses}>
          <img
            src={brand.src}
            alt={brand.alt}
            className="h-[80px] md:h-28 lg:h-28 xl:h-32 max-w-[300px] md:max-w-[400px] lg:max-w-[450px] object-contain scale-110 opacity-100 transition-all duration-300 px-8 "
            onError={() => handleImageError(index)}
            loading="lazy"
          />
        </div>
      );
    } else {
      // Fallback to text for image errors or text-only brands
      return (
        <div key={index} className={baseClasses}>
          <span className="text-white text-2xl md:text-4xl  font-semibold hover:text-blue-400 transition-colors duration-300 px-8">
            {brand.name}
          </span>
        </div>
      );
    }
  };

  return (
    <section className="bg-black py-16 overflow-hidden">
      <div className="text-center mb-12">
        <h2 className="text-5xl md:text-6xl pb-12 font-bold text-blue-500 tracking-wider">
          BRANDS
        </h2>
      </div>

      <div className="relative">
        {/* Gradient edges */}
        <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-black to-transparent z-10" />
        <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-black to-transparent z-10" />

        {/* Marquee container */}
        <div className="overflow-hidden">
          <motion.div
            className="flex items-center gap-12 md:gap-20 lg:gap-24"
            ref={marqueeRef}
            animate={{ x: [0, -scrollWidth] }}
            transition={{
              repeat: Infinity,
              repeatType: "loop",
              duration: duration || 10,
              ease: "linear",
            }}
            style={{ willChange: "transform" }}
          >
            {/* Repeat brands multiple times for seamless loop */}
            {[...brands, ...brands, ...brands].map((brand, index) =>
              renderBrandItem(brand, index)
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BrandSectionImproved;
