import React from 'react';
import { motion } from 'framer-motion';
import { 
  Instagram, 
  Users, 
  Star, 
  Camera,
  ArrowRight,
  Zap,
  TrendingUp,
  Heart
} from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Instagram size={32} />,
      title: "Social Media Management",
      description: "Complete social media strategy with daily content, community engagement, and viral campaign creation.",
      features: ["Content Strategy", "Daily Posting", "Community Management", "Analytics"],
      gradient: "from-pink-500 to-rose-500",
      bgPattern: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=400&h=300&fit=crop"
    },
    {
      icon: <Users size={32} />,
      title: "Influencer Marketing",
      description: "Connect with the right influencers to amplify your brand message and reach millions of engaged users.",
      features: ["Influencer Outreach", "Campaign Management", "ROI Tracking", "Content Collaboration"],
      gradient: "from-blue-500 to-cyan-500",
      bgPattern: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=300&fit=crop"
    },
    {
      icon: <Star size={32} />,
      title: "Celebrity Management",
      description: "Professional celebrity social media management with exclusive brand partnerships and PR strategies.",
      features: ["Celebrity Partnerships", "PR Management", "Brand Collaborations", "Reputation Management"],
      gradient: "from-purple-500 to-indigo-500",
      bgPattern: "https://images.unsplash.com/photo-1594736797933-d0601ba2b2e5?w=400&h=300&fit=crop"
    },
    {
      icon: <TrendingUp size={32} />,
      title: "Brand Collaborations",
      description: "Strategic partnerships with top brands like G-SHOCK and OPPO for maximum market impact.",
      features: ["Partnership Strategy", "Brand Alignment", "Campaign Execution", "Performance Analytics"],
      gradient: "from-green-500 to-emerald-500",
      bgPattern: "https://images.unsplash.com/photo-1556656793-08538906a9f8?w=400&h=300&fit=crop"
    },
    {
      icon: <Heart size={32} />,
      title: "UGC Content Creation",
      description: "Authentic user-generated content campaigns that build trust and drive organic engagement.",
      features: ["UGC Strategy", "Community Building", "Content Curation", "Authentic Engagement"],
      gradient: "from-orange-500 to-red-500",
      bgPattern: "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=400&h=300&fit=crop"
    },
    {
      icon: <Camera size={32} />,
      title: "Professional Shoots",
      description: "High-end photography and videography for luxury brands with creative direction and post-production.",
      features: ["Photography", "Videography", "Creative Direction", "Post-Production"],
      gradient: "from-teal-500 to-blue-500",
      bgPattern: "https://images.unsplash.com/photo-1542038784456-1ea8e843b714?w=400&h=300&fit=crop"
    }
  ];

  return (
    <section className="min-h-screen bg-white dark:bg-black py-20 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-neon-pink/10 to-electric-blue/10 rounded-full border border-neon-pink/20 mb-6"
          >
            <Zap className="w-4 h-4 text-neon-pink mr-2" />
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Our Expertise</span>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-cyber font-bold mb-6"
          >
            <span className="bg-gradient-to-r from-neon-pink to-electric-blue bg-clip-text text-transparent">
              VIRAL SERVICES
            </span>
          </motion.h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            From social media management to celebrity partnerships - we've got everything to make your brand the talk of the town! 🔥
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group relative bg-white dark:bg-gray-900 rounded-3xl overflow-hidden border border-gray-200 dark:border-gray-800 hover:border-neon-pink/50 dark:hover:border-neon-pink/50 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-2xl"
            >
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-5 group-hover:opacity-10 transition-opacity duration-300">
                <img
                  src={service.bgPattern}
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content */}
              <div className="relative p-8">
                {/* Icon */}
                <div className={`w-16 h-16 bg-gradient-to-r ${service.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <div className="text-white">
                    {service.icon}
                  </div>
                </div>

                {/* Service Info */}
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">{service.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">{service.description}</p>

                {/* Features */}
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-700 dark:text-gray-300">
                      <div className="w-2 h-2 bg-electric-blue rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <button className="flex items-center space-x-2 text-electric-blue hover:text-neon-pink transition-colors group/btn">
                  <span className="font-semibold">Learn More</span>
                  <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>

              {/* Hover Overlay */}
              <div className={`absolute inset-0 bg-gradient-to-t ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none`}></div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-neon-pink/5 to-electric-blue/5 rounded-3xl p-8 border border-gray-200 dark:border-gray-800">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Ready to Go Viral?
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-8 text-lg">
              Let's create a campaign that gets everyone talking about your brand!
            </p>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-neon-pink to-electric-blue text-white font-bold rounded-full hover:shadow-lg hover:shadow-neon-pink/25 transition-all duration-300 flex items-center space-x-2 mx-auto"
            >
              <span>Get Your Custom Strategy</span>
              <ArrowRight size={20} />
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
