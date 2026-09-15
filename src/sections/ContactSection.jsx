import { motion } from "framer-motion";

import ContactForm from "../components/contact/ContactForm";

const ContactSection = () => {
  return (
    <section
      id="contact"
      className="
        min-h-screen
        scroll-mt-20
        py-20
        pb-32
        lg:pb-20
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
        <div
          className="
            grid
            lg:grid-cols-2
            gap-12
            lg:gap-16
            items-center
          "
        >
          {/* LEFT CONTENT */}

          <motion.div
            initial={{
              opacity: 0,
              x: -40,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.6,
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
                leading-tight
              "
            >
              Let's Build Something Together
            </h2>

            <p
              className="
                text-gray-400
                mt-5
                max-w-xl
                leading-relaxed
              "
            >
              Have a project idea, job opportunity, or collaboration in mind?
              Feel free to reach out. I am open to MERN Full Stack opportunities
              and building modern, scalable web applications.
            </p>
          </motion.div>

          {/* RIGHT CONTACT FORM */}

          <motion.div
            initial={{
              opacity: 0,
              x: 40,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.6,
            }}
            viewport={{
              once: true,
            }}
          >
            <ContactForm />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;


