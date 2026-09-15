import { motion } from "framer-motion";

import SkillCategory from "../components/skills/SkillCategory";

const SkillsSection = () => {
  const categories = [
    {
      title: "Frontend",
      skills: [
        "React.js",
        "JavaScript ES6+",
        "HTML5",
        "CSS3",
        "Tailwind CSS",
        "Redux",
        "Responsive Design",
      ],
    },

    {
      title: "Backend & Database",
      skills: [
        "Node.js",
        "Express.js",
        "MongoDB",
        "Mongoose",
        "REST APIs",
        "JWT Authentication",
        "Socket.IO",
      ],
    },

    {
      title: "Tools & Technologies",
      skills: [
        "Git",
        "GitHub",
        "Vite",
        "npm",
        "Cloudinary",
        "Framer Motion",
        "VS Code",
      ],
    },
  ];

  return (
    <section
      id="skills"
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
              mb-3
            "
          >
            Skills
          </p>

          <h2
            className="
              text-4xl
              font-bold
            "
          >
            Technologies I Work With
          </h2>

          <p
            className="
              text-gray-400
              mt-4
              max-w-2xl
            "
          >
            A full stack technology toolkit for building scalable, responsive,
            and production-ready web applications from frontend interfaces to
            backend APIs and databases.
          </p>
        </motion.div>

        <div
          className="
            grid
            md:grid-cols-2
            lg:grid-cols-3
            gap-6
            mt-12
          "
        >
          {categories.map((category, index) => (
            <SkillCategory key={index} data={category} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;

