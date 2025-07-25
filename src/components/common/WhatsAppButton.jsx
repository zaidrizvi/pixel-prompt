import React from 'react';
import { MessageCircle } from 'lucide-react';

const WhatsAppButton = () => {
  const handleClick = () => {
    const message = "Hi! I'm interested in your marketing services. Can we discuss?";
    const whatsappUrl = `https://api.whatsapp.com/send?phone=7078890112&text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-6 right-6 z-50 w-16 h-16 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transform transition-all duration-300 animate-bounce"
    >
      <MessageCircle size={28} className="text-white" />
    </button>
  );
};

export default WhatsAppButton; 
