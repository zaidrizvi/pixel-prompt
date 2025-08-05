import React, { useRef, useEffect } from "react";
import { motion } from "framer-motion";
// Import your video from assets
import demoVideo from "../assets/ref.mp4";

const VideoShowcase = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Start playing when video enters viewport
            videoRef.current?.play();
          }
          // Video keeps playing even when scrolled past
        });
      },
      { threshold: 0.1 }
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-16 bg-white dark:bg-black">
  {/* Section padding, intro text or heading can go here */}
  
  {/* Full-width video container */}
  <motion.div
    className="relative w-full rounded-none overflow-hidden shadow-lg"
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    viewport={{ once: true }}
  >
    <video
      ref={videoRef}
      className="w-full min-h-[700px] sm:min-h-[400px] md:min-h-[500px] object-cover"
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
