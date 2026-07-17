import { motion } from "framer-motion";

import { Download } from "lucide-react";

import { FaGithub, FaLinkedin } from "react-icons/fa";

import { TypeAnimation } from "react-type-animation";

const HomeSection = () => {
  return (
    <section
      id="home"
      className="
        min-h-[calc(100vh-80px)]
        scroll-mt-20
        flex
        items-center
        pb-24
        lg:pb-0
      "
    >
      <div
        className="
          max-w-7xl
          mx-auto
          w-full
          grid
          lg:grid-cols-2
          gap-10
          items-center
        "
      >
        {/* LEFT CONTENT */}

        <motion.div
          initial={{
            opacity: 0,
            x: -40,
          }}

          animate={{
            opacity: 1,
            x: 0,
          }}

          transition={{
            duration: 0.7,
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
            Frontend Developer
          </p>

          <h1
            className="
              text-4xl
              sm:text-5xl
              lg:text-6xl
              font-bold
              leading-tight
              mt-5
            "
          >
            Building
            <span className="text-[#39FF88]"> Modern</span>
            <br />
            React Experiences
          </h1>

          <div
            className="
              text-xl
              mt-6
              text-gray-300
            "
          >
            <TypeAnimation
              sequence={[
                "React.js Developer",
                2000,

                "Frontend Engineer",
                2000,

                "UI Developer",
                2000,

                "JavaScript Developer",
                2000,
              ]}

              speed={50}

              repeat={Infinity}
            />
          </div>

          <p
            className="
              text-gray-400
              mt-6
              max-w-xl
              leading-relaxed
            "
          >
            I create responsive, scalable and modern web applications using
            React.js, JavaScript and contemporary frontend technologies.
          </p>

          <div
            className="
              flex
              flex-wrap
              gap-4
              mt-8
            "
          >
            <a
              href="/resume.pdf"
              target="_blank"
              className="
                flex
                items-center
                gap-2
                px-6
                py-3
                rounded-xl
                bg-[#39FF88]
                text-black
                font-semibold
                hover:scale-105
                transition
              "
            >
              <Download size={18} />
              Resume
            </a>

            <a
              href="https://github.com/2244mv"
              target="_blank"
              rel="noreferrer"
              className="
                p-3
                rounded-xl
                glass
                hover:text-[#39FF88]
                transition
              "
            >
              <FaGithub size={22} />
            </a>

            <a
              href="https://www.linkedin.com/in/manish-verma-5b98ba382/"
              target="_blank"
              rel="noreferrer"
              className="
                p-3
                rounded-xl
                glass
                hover:text-[#39FF88]
                transition
              "
            >
              <FaLinkedin size={22} />
            </a>
          </div>
        </motion.div>

        {/* PROFILE CARD */}

        <motion.div
          initial={{
            opacity: 0,
            scale: 0.8,
          }}

          animate={{
            opacity: 1,
            scale: 1,
          }}

          transition={{
            duration: 0.8,
          }}

          className="
            flex
            flex-col
            items-center
          "
        >
          <div
            className="
              relative
              w-[300px]
              h-[330px]
              sm:w-[330px]
              sm:h-[360px]
              rounded-3xl
              overflow-hidden
              glass
              border
              border-white/10
            "
          >
            <div
              className="
                absolute
                inset-3
                rounded-3xl
                border
                border-[#39FF88]/40
                pointer-events-none
              "
            />

            <img
              src="/images/profile/manish.jpeg"
              alt="Manish Verma"
              className="
                w-full
                h-full
                object-cover
                object-top
              "
            />
          </div>

          <div
            className="
              text-center
              mt-5
            "
          >
            <h3
              className="
                text-3xl
                font-bold
              "
            >
              Manish Verma
            </h3>

            <p
              className="
                text-gray-400
                mt-2
              "
            >
              React Developer
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HomeSection;
