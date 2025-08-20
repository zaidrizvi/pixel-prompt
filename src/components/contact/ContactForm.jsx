import React, { useState } from 'react';
import { Send, MessageCircle, Mail, Phone, Instagram, Users, Star, Camera, Sparkles, Heart } from 'lucide-react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    services: []
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};

    if (!formData.name.trim()) newErrors.name = 'Name is required.';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required.';
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = 'Enter a valid email.';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required.';
    } else if (!/^\d{10}$/.test(formData.phone)) {
      newErrors.phone = 'Phone number must be exactly 10 digits.';
    }

    if (formData.services.length === 0) {
      newErrors.services = 'Please select at least one service.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    const emailSubject = `🔥 New Project Inquiry from ${formData.name} - Pixel Prompt`;
    const emailBody = `
New Project Inquiry Details:

Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Services: ${formData.services.join(', ')}

Message:
${formData.message}

---
Sent from Pixel Prompt Contact Form
    `;

    const emailUrl = `mailto:pixelpromptofficial@gmail.com?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;
    window.open(emailUrl, '_blank');

    setFormData({
      name: '',
      email: '',
      phone: '',
      message: '',
      services: []
    });
    setErrors({});
    alert('Email opened! Please send it to reach us 📧');
  };

  const handleServiceChange = (service) => {
    setFormData(prev => ({
      ...prev,
      services: prev.services.includes(service)
        ? prev.services.filter(s => s !== service)
        : [...prev.services, service]
    }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 dark:from-black dark:via-black dark:to-black py-16 transition-all duration-500">
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 leading-tight pt-5">
            <span className="bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 bg-clip-text text-transparent">
              Turn Buzz Into Impact
            </span>
            <br />
           
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Transform your brand with cutting-edge digital marketing strategies that actually work.
          </p>
        </div>

        {/* Main Form Container */}
        <div className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-white/50 dark:border-gray-700/50 transition-all duration-300">
          <form onSubmit={handleSubmit} className="space-y-8">
            
            {/* Personal Info Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Name */}
              <div className="space-y-2">
                <label className="block text-gray-800 dark:text-white font-semibold text-sm uppercase tracking-wide">
                  Your Name *
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Enter your full name"
                  className="w-full px-4 py-4 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl outline-none text-gray-900 dark:text-white placeholder-gray-500 focus:border-pink-500 focus:ring-2 focus:ring-pink-500/20 transition-all duration-300"
                  required
                />
                {errors.name && <p className="text-red-500 text-sm flex items-center gap-1"><Heart size={14}/>{errors.name}</p>}
              </div>

              {/* Phone */}
              <div className="space-y-2">
                <label className="block text-gray-800 dark:text-white font-semibold text-sm uppercase tracking-wide">
                  Phone Number *
                </label>
                <div className="relative">
                  <Phone className="absolute left-4 top-4 text-gray-400" size={20} />
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="10 digit number"
                    className="w-full px-4 py-4 pl-12 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl outline-none text-gray-900 dark:text-white placeholder-gray-500 focus:border-pink-500 focus:ring-2 focus:ring-pink-500/20 transition-all duration-300"
                    required
                  />
                </div>
                {errors.phone && <p className="text-red-500 text-sm flex items-center gap-1"><Heart size={14}/>{errors.phone}</p>}
              </div>
            </div>

            {/* Email */}
            <div className="space-y-2">
              <label className="block text-gray-800 dark:text-white font-semibold text-sm uppercase tracking-wide">
                Email Address *
              </label>
              <div className="relative">
                <Mail className="absolute left-4 top-4 text-gray-400" size={20} />
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="your.email@example.com"
                  className="w-full px-4 py-4 pl-12 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl outline-none text-gray-900 dark:text-white placeholder-gray-500 focus:border-pink-500 focus:ring-2 focus:ring-pink-500/20 transition-all duration-300"
                  required
                />
              </div>
              {errors.email && <p className="text-red-500 text-sm flex items-center gap-1"><Heart size={14}/>{errors.email}</p>}
            </div>

            {/* Services Section */}
            <div className="space-y-4">
              <label className="block text-gray-800 dark:text-white font-semibold text-sm uppercase tracking-wide">
                Which Services Interest You? *
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  { name: 'Social Media Management', icon: <Instagram size={20} />, color: 'from-pink-500 to-red-500' },
                  { name: 'Influencer Marketing', icon: <Users size={20} />, color: 'from-purple-500 to-pink-500' },
                  { name: 'Celebrity Management', icon: <Star size={20} />, color: 'from-yellow-500 to-orange-500' },
                  { name: 'Brand Collaborations', icon: <Sparkles size={20} />, color: 'from-blue-500 to-purple-500' },
                  { name: 'UGC Content Creation', icon: <MessageCircle size={20} />, color: 'from-green-500 to-blue-500' },
                  { name: 'Professional Shoots', icon: <Camera size={20} />, color: 'from-indigo-500 to-purple-500' }
                ].map((service) => (
                  <label
                    key={service.name}
                    className={`group relative flex items-center space-x-3 p-4 rounded-xl cursor-pointer ${
                      formData.services.includes(service.name)
                        ? 'bg-gradient-to-r ' + service.color + ' text-white shadow-lg scale-105'
                        : 'bg-gray-50/50 dark:bg-gray-800/50  border border-gray-200 dark:border-gray-700'
                    }`}
                  >
                    <input
                      type="checkbox"
                      checked={formData.services.includes(service.name)}
                      onChange={() => handleServiceChange(service.name)}
                      className="sr-only"
                    />
                    <div className={`flex-shrink-0 ${formData.services.includes(service.name) ? 'text-white' : 'text-gray-600 dark:text-gray-400'}`}>
                      {service.icon}
                    </div>
                    <span className={`text-sm font-medium ${
                      formData.services.includes(service.name) ? 'text-white' : 'text-gray-800 dark:text-white'
                    }`}>
                      {service.name}
                    </span>
                    {formData.services.includes(service.name) && (
                      <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent rounded-xl"></div>
                    )}
                  </label>
                ))}
              </div>
              {errors.services && <p className="text-red-500 text-sm flex items-center gap-1"><Heart size={14}/>{errors.services}</p>}
            </div>

            {/* Message */}
            <div className="space-y-2">
              <label className="block text-gray-800 dark:text-white font-semibold text-sm uppercase tracking-wide">
                Tell Us About Your Project
              </label>
              <div className="relative">
                <MessageCircle className="absolute left-4 top-4 text-gray-400" size={20} />
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows="5"
                  placeholder="Describe your vision, goals, and how we can help make your brand go viral..."
                  className="w-full px-4 py-4 pl-12 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl outline-none text-gray-900 dark:text-white placeholder-gray-500 focus:border-pink-500 focus:ring-2 focus:ring-pink-500/20 transition-all duration-300 resize-none"
                />
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="group w-full relative px-6 py-3 bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 text-white font-bold rounded-xl shadow-xl hover:shadow-2xl hover:shadow-purple-500/25 transform hover:scale-[1.02] transition-all duration-300 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative flex items-center justify-center space-x-3">
                <Send size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
                <span className="text-lg">Send Message & Let's Create Magic ✨</span>
              </div>
            </button>

            {/* Contact Info */}
            <div className="text-center pt-8 border-t border-gray-200/50 dark:border-gray-700/50">
              <p className="text-gray-600 dark:text-gray-400 mb-6 font-medium">Prefer direct contact?</p>
              <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8">
                
                {/* Phone */}
                <a 
                  href="tel:+917078890112" 
                  className="group flex items-center space-x-3 px-6 py-3 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-lg hover:from-blue-100 hover:to-purple-100 dark:hover:from-blue-800/30 dark:hover:to-purple-800/30 shadow-md hover:shadow-lg transition-all duration-300"
                >
                  <Phone size={18} className="text-blue-600 group-hover:scale-110 transition-transform duration-300" />
                  <span className="font-medium text-gray-800 dark:text-white">+91 70788 90112</span>
                </a>
                
                {/* Email */}
                <a 
                  href="mailto:pixelpromptofficial@gmail.com" 
                  className="group flex items-center space-x-3 px-6 py-3 bg-gradient-to-r from-pink-50 to-purple-50 dark:from-pink-900/20 dark:to-purple-900/20 rounded-lg hover:from-pink-100 hover:to-purple-100 dark:hover:from-pink-800/30 dark:hover:to-purple-800/30 shadow-md hover:shadow-lg transition-all duration-300"
                >
                  <Mail size={18} className="text-pink-600 group-hover:scale-110 transition-transform duration-300" />
                  <span className="font-medium text-gray-800 dark:text-white">pixelpromptofficial@gmail.com</span>
                </a>
              </div>
            </div>

          </form>
        </div>

        {/* Footer note */}
        <div className="text-center mt-8">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            🔒 Your information is secure and will only be used to contact you about your project.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
