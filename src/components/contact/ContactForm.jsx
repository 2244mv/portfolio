import { useState } from "react";

import { Send } from "lucide-react";

import toast from "react-hot-toast";

import { sendEmail } from "../../services/emailService";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,

      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      await toast.promise(
        sendEmail(formData),

        {
          loading: "Sending message...",

          success: "Message sent successfully 🚀",

          error: "Failed to send message ❌",
        },
      );

      setFormData({
        name: "",

        email: "",

        message: "",
      });
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const handleTextareaKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();

      e.currentTarget.form.requestSubmit();
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="
      glass
      border
      border-white/10
      rounded-3xl
      p-6
      md:p-8
      w-full
      "
    >
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Your Name"
        required
        className="
        w-full
        mb-5
        px-5
        py-3
        rounded-xl
        bg-black/40
        border
        border-white/10
        outline-none
        focus:border-[#39FF88]
        transition
        "
      />

      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Your Email"
        required
        className="
        w-full
        mb-5
        px-5
        py-3
        rounded-xl
        bg-black/40
        border
        border-white/10
        outline-none
        focus:border-[#39FF88]
        transition
        "
      />

      <textarea
        name="message"
        value={formData.message}
        onChange={handleChange}
        onKeyDown={handleTextareaKeyDown}
        placeholder="Your Message"
        rows="5"
        required
        className="
        w-full
        mb-5
        px-5
        py-3
        rounded-xl
        bg-black/40
        border
        border-white/10
        outline-none
        resize-none
        focus:border-[#39FF88]
        transition
        "
      />

      <button
        type="submit"
        disabled={loading}
        className="
        flex
        items-center
        justify-center
        gap-2
        px-8
        py-3
        rounded-xl
        bg-[#39FF88]
        text-black
        font-semibold
        hover:scale-105
        transition
        disabled:opacity-50
        disabled:cursor-not-allowed
        "
      >
        <Send size={18} />

        {loading ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
};

export default ContactForm;
