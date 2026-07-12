import { motion } from "framer-motion";

import ContactForm from "../components/contact/ContactForm";

const ContactSection = () => {
  return (
    <section
      id="contact"
      className="
      min-h-screen
      py-20
      flex
      items-center
      "
    >
      <div
        className="
        max-w-6xl
        mx-auto
        w-full
        px-5
        "
      >
        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
        >
          <p
            className="
            text-[#39FF88]
            uppercase
            tracking-[4px]
            text-sm
            "
          >
            Contact
          </p>

          <h2
            className="
            text-4xl
            md:text-5xl
            font-bold
            mt-3
            "
          >
            Let's Build Something Together
          </h2>

          <p
            className="
            text-gray-400
            mt-5
            max-w-2xl
            leading-relaxed
            "
          >
            Have a project idea or frontend opportunity? Feel free to reach out.
            I am always open to building modern digital experiences.
          </p>
        </motion.div>

        <motion.div
          initial={{
            opacity: 0,
            y: 40,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.6,
          }}
          viewport={{
            once: true,
          }}
          className="
          mt-10
          max-w-3xl
          "
        >
          <ContactForm />
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
