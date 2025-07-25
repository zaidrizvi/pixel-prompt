import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Priya Sharma",
      role: "CEO, TechStart Solutions",
      company: "TechStart Solutions",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150",
      content: "Pixel Prompt transformed our social media presence completely! Our engagement increased by 300% within just 3 months. Their team is incredibly creative and professional.",
      rating: 5,
      project: "Social Media Management"
    },
    {
      id: 2,
      name: "Rahul Mehta",
      role: "Founder, StyleCraft",
      company: "StyleCraft",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150",
      content: "The website they built for us is stunning and converts really well. We saw a 150% increase in online sales after launching. Highly recommend their services!",
      rating: 5,
      project: "Website Development"
    },
    {
      id: 3,
      name: "Sneha Patel",
      role: "Marketing Head, FreshFood Co.",
      company: "FreshFood Co.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150",
      content: "Their digital marketing strategies are top-notch. We achieved our lead generation goals 2 months ahead of schedule. The ROI has been incredible.",
      rating: 5,
      project: "Digital Marketing"
    },
    {
      id: 4,
      name: "Arjun Singh",
      role: "Owner, Fitness Hub",
      company: "Fitness Hub",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150",
      content: "Working with Pixel Prompt was a game-changer for our fitness studio. Their content creation and social media management helped us build a strong community.",
      rating: 5,
      project: "Content Creation"
    }
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-cyber font-bold mb-6"
          >
            <span className="bg-gradient-to-r from-neon-pink to-electric-blue bg-clip-text text-transparent">
              CLIENT STORIES
            </span>
          </motion.h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            See what our amazing clients have to say about working with us 💖
          </p>
        </div>

        {/* Main Testimonial Card */}
        <div className="relative max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="bg-gray-900/50 backdrop-blur-lg rounded-3xl p-8 md:p-12 border border-neon-pink/20 relative overflow-hidden"
            >
              {/* Background Pattern */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-neon-pink/10 to-electric-blue/10 rounded-full -translate-y-16 translate-x-16"></div>
              
              {/* Quote Icon */}
              <Quote className="text-neon-pink mb-6" size={48} />

              {/* Testimonial Content */}
              <blockquote className="text-xl md:text-2xl text-white mb-8 leading-relaxed font-light">
                "{testimonials[currentIndex].content}"
              </blockquote>

              {/* Rating */}
              <div className="flex items-center mb-6">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <Star key={i} className="text-yellow-400 fill-current" size={24} />
                ))}
              </div>

              {/* Client Info */}
              <div className="flex items-center">
                <img
                  src={testimonials[currentIndex].image}
                  alt={testimonials[currentIndex].name}
                  className="w-16 h-16 rounded-full object-cover mr-4 border-2 border-electric-blue"
                />
                <div>
                  <h4 className="text-white font-bold text-lg">{testimonials[currentIndex].name}</h4>
                  <p className="text-gray-400">{testimonials[currentIndex].role}</p>
                  <p className="text-electric-blue text-sm">{testimonials[currentIndex].company}</p>
                </div>
                <div className="ml-auto">
                  <span className="bg-gradient-to-r from-neon-pink to-electric-blue px-4 py-2 rounded-full text-sm font-semibold text-white">
                    {testimonials[currentIndex].project}
                  </span>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          <button
            onClick={prevTestimonial}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-gray-800 hover:bg-neon-pink rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
          >
            <ChevronLeft className="text-white" size={24} />
          </button>
          
          <button
            onClick={nextTestimonial}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-gray-800 hover:bg-electric-blue rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
          >
            <ChevronRight className="text-white" size={24} />
          </button>
        </div>

        {/* Testimonial Indicators */}
        <div className="flex justify-center mt-8 space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex 
                  ? 'bg-neon-pink scale-125' 
                  : 'bg-gray-600 hover:bg-gray-500'
              }`}
            />
          ))}
        </div>

        
      </div>
    </section>
  );
};

export default Testimonials;
