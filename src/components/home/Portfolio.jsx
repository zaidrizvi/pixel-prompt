import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ExternalLink,
  Instagram,
  Eye,
  ArrowRight,
  Star,
  Users,
  TrendingUp,
} from "lucide-react";
import image1 from "../../assets/image1.png";
import image2 from "../../assets/image2.png";
import image from "../../assets/image.png";


const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState("all");

 const projects = [
  {
    id: 1,
    title: "G-SHOCK × Pixel Prompt",
    category: "brand-collaboration",
    image: image2,
    description:
      "Handled digital promotions and curated social presence for G-SHOCK × Pixel Prompt campaign.",
    tags: ["G-SHOCK", "Campaign", "Social Reach"],
    stats: { views: "8M+", engagement: "9%", reach: "12M+" },
    gradient: "from-blue-600 to-purple-600",
  },
  {
    id: 2,
    title: "OPPO × Pixel Prompt",
    category: "celebrity-management",
    image: image1,
    description:
      "Promoted OPPO's celebrity event campaign through Pixel Prompt’s online amplification strategy.",
    tags: ["OPPO", "Promotion", "Celebrity Event"],
    stats: { views: "4M+", engagement: "11%", reach: "6M+" },
    gradient: "from-green-500 to-teal-500",
  },
  {
    id: 3,
    title: "Fashion Influencer Network",
    category: "influencer-marketing",
    image:
      "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop",
    description:
      "Built a fashion influencer loop of 500+ creators for client collaborations.",
    tags: ["Fashion", "Influencer", "Campaign"],
    stats: { views: "18M+", engagement: "21%", reach: "22M+" },
    gradient: "from-pink-500 to-rose-500",
  },
  
  {
    id: 5,
    title: "Brand Shoot Showcase",
    category: "professional-shoots",
    image: image,
    description:
      "Shot premium product visuals for brand positioning ",
    tags: ["Photography", "Branding", "Shoots"],
    stats: { views: "2M+", engagement: "5%", reach: "3M+" },
    gradient: "from-indigo-500 to-blue-500",
  },
  {
    id: 6,
    title: "Social Revamp",
    category: "social-media",
    image:
      "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=600&h=400&fit=crop",
    description:
      "Overhauled Instagram aesthetics, consistency and brand voice — driving new audience growth.",
    tags: ["SMM", "Revamp", "Instagram Growth"],
    stats: { views: "12M+", engagement: "14%", reach: "10M+" },
    gradient: "from-cyan-500 to-blue-500",
  },
];


  const categories = [
    { id: "all", name: "All Projects", icon: <Star size={16} /> },
    { id: "social-media", name: "SMM", icon: <Instagram size={16} /> },
    {
      id: "influencer-marketing",
      name: "Influencer",
      icon: <Users size={16} />,
    },
    { id: "celebrity-management", name: "Celebrity", icon: <Star size={16} /> },
    {
      id: "brand-collaboration",
      name: "Brand Partnerships",
      icon: <TrendingUp size={16} />,
    },
    { id: "ugc-content", name: "UGC", icon: <ExternalLink size={16} /> },
    { id: "professional-shoots", name: "Shoots", icon: <Eye size={16} /> },
  ];

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  return (
    <section className="min-h-screen bg-white dark:bg-black py-20 transition-colors duration-300">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, rgba(0,0,0,0.1) 1px, transparent 0)`,
            backgroundSize: "60px 60px",
          }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-neon-pink/10 to-electric-blue/10 rounded-full border border-neon-pink/20 mb-6"
          >
            <Eye className="w-4 h-4 text-neon-pink mr-2" />
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
              Our Success Stories
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-cyber font-bold mb-6"
          >
            <span className="bg-gradient-to-r from-neon-pink to-electric-blue bg-clip-text text-transparent">
              PORTFOLIO
            </span>
          </motion.h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            From G-SHOCK collaborations to celebrity management - here's how
            we've made brands go viral! 🔥
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveFilter(category.id)}
              className={`px-4 py-2 rounded-full font-semibold transition-all duration-300 flex items-center space-x-2 text-sm ${
                activeFilter === category.id
                  ? "bg-gradient-to-r from-neon-pink to-electric-blue text-white shadow-lg scale-105"
                  : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-700 hover:scale-105"
              }`}
            >
              {category.icon}
              <span>{category.name}</span>
            </button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <AnimatePresence>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ delay: index * 0.1 }}
                className="group relative bg-white dark:bg-gray-900 rounded-3xl overflow-hidden border border-gray-200 dark:border-gray-800 hover:border-neon-pink/50 dark:hover:border-neon-pink/50 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-2xl"
              >
                {/* Project Image */}
                <div className="relative h-64 overflow-hidden flex items-center justify-center bg-white">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="max-h-full max-w-full object-contain"
                  />

                  <div
                    className={`absolute inset-0 bg-gradient-to-t ${project.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-300`}
                  ></div>

                  {/* Stats Overlay */}

                  {/* Action Buttons */}
                  <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button className="p-2 bg-white/90 rounded-full hover:scale-110 transition-transform">
                      <Instagram size={16} className="text-gray-700" />
                    </button>
                    <button className="p-2 bg-white/90 rounded-full hover:scale-110 transition-transform">
                      <ExternalLink size={16} className="text-gray-700" />
                    </button>
                  </div>

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <button className="px-6 py-3 bg-white rounded-full font-semibold text-gray-900 hover:scale-105 transition-transform flex items-center space-x-2">
                      <span>View Case Study</span>
                      <ArrowRight size={16} />
                    </button>
                  </div>
                </div>

                {/* Project Info */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-electric-blue dark:text-electric-blue text-xs rounded-full font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Stats Bar */}
                </div>

                {/* Hover Gradient */}
                <div
                  className={`absolute inset-0 bg-gradient-to-t ${project.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none`}
                ></div>
              </motion.div>
            ))}
          </div>
        </AnimatePresence>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 rounded-3xl p-12 border border-gray-200 dark:border-gray-700">
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Ready to Create Your Success Story?
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-8 text-lg max-w-2xl mx-auto">
              Join the brands that have gone viral with our proven strategies.
              Let's make your next campaign unforgettable!
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-neon-pink to-electric-blue text-white font-bold rounded-full hover:shadow-lg hover:shadow-neon-pink/25 transition-all duration-300 flex items-center space-x-2 mx-auto"
            >
              <span>Start Your Viral Campaign</span>
              <ArrowRight size={20} />
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
