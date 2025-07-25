import React, { useState } from 'react';
import { Send, MessageCircle, Mail, Phone, Instagram, Users, Star, Camera } from 'lucide-react';

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

    const emailUrl = `mailto:zaidd.rizvii@gmail.com?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;

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
    <div className="min-h-screen bg-white dark:bg-black py-20 transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white dark:bg-gray-900 rounded-3xl p-8 border border-gray-200 dark:border-neon-pink/20 shadow-2xl transition-colors duration-300">

          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-cyber font-bold mb-4">
              <span className="bg-gradient-to-r from-neon-pink to-electric-blue bg-clip-text text-transparent">
                LET'S CREATE MAGIC
              </span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Ready to make your brand go viral? Let's talk! ✨
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">

            {/* Name */}
            <div>
              <label className="block text-gray-800 dark:text-white font-semibold mb-2">*Your Name</label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="Enter your full name"
                className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-800 border rounded-lg outline-none text-gray-900 dark:text-white"
                required
              />
              {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
            </div>

            {/* Email */}
            <div>
              <label className="block text-gray-800 dark:text-white font-semibold mb-2">*Email Address</label>
              <div className="relative">
                <Mail className="absolute left-3 top-3 text-gray-400" size={20} />
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="your.email@example.com"
                  className="w-full px-4 py-3 pl-12 bg-gray-50 dark:bg-gray-800 border rounded-lg outline-none text-gray-900 dark:text-white"
                  required
                />
              </div>
              {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
            </div>

            {/* Phone */}
            <div>
              <label className="block text-gray-800 dark:text-white font-semibold mb-2">*Phone Number</label>
              <div className="relative">
                <Phone className="absolute left-3 top-3 text-gray-400" size={20} />
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="10 digit number"
                  className="w-full px-4 py-3 pl-12 bg-gray-50 dark:bg-gray-800 border rounded-lg outline-none text-gray-900 dark:text-white"
                  required
                />
              </div>
              {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
            </div>

            {/* Message */}
            <div>
              <label className="block text-gray-800 dark:text-white font-semibold mb-2">Tell Us About Your Project</label>
              <div className="relative">
                <MessageCircle className="absolute left-3 top-3 text-gray-400" size={20} />
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows="4"
                  placeholder="Describe your project..."
                  className="w-full px-4 py-3 pl-12 bg-gray-50 dark:bg-gray-800 border rounded-lg outline-none text-gray-900 dark:text-white resize-none"
                />
              </div>
            </div>

            {/* Services */}
            <div>
              <label className="block text-gray-800 dark:text-white font-semibold mb-4">*Which Services Interest You?</label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  { name: 'Social Media Management', icon: <Instagram size={16} /> },
                  { name: 'Influencer Marketing', icon: <Users size={16} /> },
                  { name: 'Celebrity Management', icon: <Star size={16} /> },
                  { name: 'Brand Collaborations', icon: <Star size={16} /> },
                  { name: 'UGC Content Creation', icon: <MessageCircle size={16} /> },
                  { name: 'Professional Shoots', icon: <Camera size={16} /> }
                ].map((service) => (
                  <label
                    key={service.name}
                    className="flex items-center space-x-3 p-3 rounded-lg border cursor-pointer bg-gray-50 dark:bg-gray-800 hover:border-neon-pink/50"
                  >
                    <input
                      type="checkbox"
                      checked={formData.services.includes(service.name)}
                      onChange={() => handleServiceChange(service.name)}
                      className="w-5 h-5"
                    />
                    <div className="flex items-center space-x-2">
                      <span className="text-electric-blue">{service.icon}</span>
                      <span className="text-gray-800 dark:text-white">{service.name}</span>
                    </div>
                  </label>
                ))}
              </div>
              {errors.services && <p className="text-red-500 text-sm mt-1">{errors.services}</p>}
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full px-8 py-4 bg-gradient-to-r from-neon-pink to-electric-blue text-white font-bold rounded-full shadow-lg hover:scale-105 transition-all"
            >
              <Mail size={20} className="inline-block mr-2" />
              Send Email 📧
            </button>

            {/* Contact Info */}
            <div className="text-center pt-6 border-t border-gray-200 dark:border-gray-700">
              <p className="text-gray-600 dark:text-gray-400 mb-4">Or reach us directly:</p>
              <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-6">
                <a href="tel:+917078890112" className="flex items-center space-x-2 text-electric-blue hover:text-neon-pink">
                  <Phone size={16} />
                  <span>+91 70788 90112</span>
                </a>
                <a href="mailto:contact@pixelprompt.net" className="flex items-center space-x-2 text-electric-blue hover:text-neon-pink">
                  <Mail size={16} />
                  <span>contact@pixelprompt.net</span>
                </a>
              </div>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
