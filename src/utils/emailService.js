// utils/emailService.js
import emailjs from 'emailjs-com';

export const sendEmail = (formData) => {
  const templateParams = {
    from_name: formData.name,
    from_email: formData.email,
    phone: formData.phone,
    message: formData.message,
    services: formData.services.join(', ')
  };

  return emailjs.send(
    'your_service_id',
    'your_template_id',
    templateParams,
    'your_user_id'
  );
};
