import emailjs from "@emailjs/browser";


export const sendEmail = (formData) => {

  return emailjs.send(
    import.meta.env.VITE_EMAIL_SERVICE_ID,
    import.meta.env.VITE_EMAIL_TEMPLATE_ID,
    formData,
    import.meta.env.VITE_EMAIL_PUBLIC_KEY
  );

};