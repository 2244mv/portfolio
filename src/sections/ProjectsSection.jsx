import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import ProjectSlide from "../components/projects/ProjectSlide";
import projects from "../data/projects";

const ProjectsSection = () => {
  return (
    <section
      id="projects"
      className="min-h-screen py-24"
    >
      <div className="max-w-7xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-[#39FF88] uppercase tracking-[4px] text-sm">
            Portfolio
          </p>

          <h2 className="text-4xl lg:text-5xl font-bold mt-3">
            Featured Projects
          </h2>

          <p className="text-gray-400 max-w-2xl mt-5">
            A selection of projects that demonstrate my React.js,
            JavaScript, API integration, responsive design, and modern
            frontend development skills.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="
            relative
            mt-14
            rounded-[32px]
            border
            border-white/10
            bg-white/5
            backdrop-blur-xl
            p-6
            lg:p-10
            overflow-hidden
          "
        >
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            navigation
            pagination={{ clickable: true }}
            autoplay={{
              delay: 4500,
              disableOnInteraction: false,
            }}
            loop
          >
            {projects.map((project) => (
              <SwiperSlide key={project.id}>
                <ProjectSlide project={project} />
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;