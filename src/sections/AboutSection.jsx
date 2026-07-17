import { motion } from "framer-motion";

import AboutCard from "../components/about/AboutCard";
import StrengthCard from "../components/about/StrengthCard";

const AboutSection = () => {
  const strengths = [
    {
      title: "Frontend Development",
      description:
        "Building responsive and scalable interfaces using React.js, JavaScript and modern frontend technologies.",
    },

    {
      title: "Clean Architecture",
      description:
        "Writing reusable components with maintainable and organized code structure.",
    },

    {
      title: "UI Engineering",
      description:
        "Creating modern user experiences with animations, accessibility and responsive design.",
    },
  ];

  return (
    <section
      id="about"
      className="
        min-h-screen
        scroll-mt-20
        py-24
        pb-32
        lg:pb-24
      "
    >
      <div
        className="
          max-w-6xl
          mx-auto
        "
      >
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
            duration: 0.7,
          }}

          viewport={{
            once: true,
          }}
        >
          <p
            className="
              text-[#39FF88]
              mb-3
            "
          >
            About Me
          </p>

          <h2
            className="
              text-4xl
              font-bold
            "
          >
            Building Digital Experiences with Modern Technology
          </h2>

          <p
            className="
              mt-5
              text-gray-400
              max-w-3xl
              leading-relaxed
            "
          >
            I am a passionate Frontend Developer focused on creating
            high-performance web applications. My expertise includes React.js,
            JavaScript, Tailwind CSS and modern frontend workflows.
            <br />
            <br />I enjoy transforming ideas into clean, interactive and
            user-friendly digital products.
          </p>
        </motion.div>

        <div
          className="
            grid
            lg:grid-cols-2
            gap-8
            mt-12
          "
        >
          <AboutCard />

          <div
            className="
              space-y-5
            "
          >
            {strengths.map((item, index) => (
              <StrengthCard key={index} data={item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
