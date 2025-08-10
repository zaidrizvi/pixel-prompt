import React, { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import demoVideo from "../assets/ref.mp4";

const VideoShowcase = () => {
  const containerRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 640);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const width = useTransform(
    scrollYProgress,
    [0, 0.5],
    isMobile ? ["100vw", "100vw"] : ["80vw", "100vw"]
  );

  // Animate height slightly on desktop to remove gaps
  const height = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    isMobile
      ? ["700px", "700px", "700px"] // your original mobile height
      : ["700px", "700px", "700px"] // grows in middle for desktop
  );

  return (
    <section
      ref={containerRef}
      className="bg-black flex justify-center py-16 " // responsive padding
    >
      <motion.div
        style={{
          width,
          height,
        }}
        className="overflow-hidden shadow-lg"
      >
        <video
          className="w-full h-full object-cover"
          muted
          loop
          playsInline
          autoPlay
        >
          <source src={demoVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </motion.div>
    </section>
  );
};

export default VideoShowcase;
