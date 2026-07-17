import emailjs from "@emailjs/browser";

export const sendEmail = async (formData) => {
  try {
    const response = await emailjs.send(
      import.meta.env.VITE_EMAIL_SERVICE_ID,
      import.meta.env.VITE_EMAIL_TEMPLATE_ID,
      formData,
      import.meta.env.VITE_EMAIL_PUBLIC_KEY,
    );

    console.log("EmailJS Success:", response);
    return response;
  } catch (error) {
    console.error("EmailJS Failed:", error);
    throw error;
  }
};
