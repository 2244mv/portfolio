import { motion } from "framer-motion";

import ProjectCard from "../components/projects/ProjectCard";
import projects from "../data/projects";

const ProjectsSection = () => {
  return (
    <section
      id="projects"
      className="
        min-h-screen
        flex
        items-center
        py-8
        lg:py-10
      "
    >
      <div
        className="
          max-w-7xl
          mx-auto
          w-full
          px-5
        "
      >

        {/* Heading */}

        <motion.div
          initial={{
            opacity: 0,
            y: 25,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.5,
          }}
          className="
            text-center
          "
        >

          <p
            className="
              text-[#39FF88]
              uppercase
              tracking-[3px]
              text-xs
            "
          >
            Portfolio
          </p>


          <h2
            className="
              mt-2
              text-3xl
              lg:text-4xl
              font-bold
            "
          >
            Featured Projects
          </h2>


          <p
            className="
              mx-auto
              mt-3
              max-w-xl
              text-sm
              text-gray-400
            "
          >
            A collection of modern React applications showcasing
            UI development, API integration and frontend engineering.
          </p>

        </motion.div>



        {/* Project Grid */}

        <motion.div
          initial={{
            opacity: 0,
            y: 35,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.6,
          }}
          className="
            mt-8
            grid
            grid-cols-1
            sm:grid-cols-2
            gap-5
            lg:gap-6
          "
        >

          {projects.map((project, index) => (

            <motion.div
              key={project.id}
              initial={{
                opacity:0,
                scale:0.95,
              }}
              whileInView={{
                opacity:1,
                scale:1,
              }}
              viewport={{
                once:true,
              }}
              transition={{
                delay:index * 0.1,
              }}
            >

              <ProjectCard
                project={project}
              />

            </motion.div>

          ))}

        </motion.div>


      </div>

    </section>
  );
};

export default ProjectsSection;