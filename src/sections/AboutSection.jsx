import { motion } from "framer-motion";

import AboutCard from "../components/about/AboutCard";
import StrengthCard from "../components/about/StrengthCard";

const AboutSection = () => {
  const strengths = [
    {
      title: "Full Stack Development",
      description:
        "Building responsive and scalable web applications using React.js, Node.js, Express.js, and MongoDB.",
    },

    {
      title: "Backend & API Development",
      description:
        "Developing RESTful APIs, implementing authentication, managing databases, and connecting frontend applications with reliable backend services.",
    },

    {
      title: "Clean & Scalable Architecture",
      description:
        "Writing reusable components and maintainable code with a focus on performance, scalability, and a smooth user experience.",
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
            Building Modern Full Stack Applications
          </h2>

          <p
            className="
              mt-5
              text-gray-400
              max-w-3xl
              leading-relaxed
            "
          >
            I am a MERN Full Stack Developer focused on building modern,
            responsive, and scalable web applications. My expertise includes
            React.js, Node.js, Express.js, MongoDB, REST APIs, and modern
            frontend technologies.
            <br />
            <br />
            I enjoy transforming ideas into reliable digital products by
            combining clean user interfaces with efficient backend systems,
            secure APIs, and well-structured code.
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
 
