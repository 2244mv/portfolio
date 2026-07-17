import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";

const ProjectCard = ({ project }) => {
  return (
    <motion.article
      whileHover={{
        y: -6,
        scale: 1.02,
      }}
      transition={{
        duration: 0.25,
      }}
      className="
        group
        relative
        flex
        h-full
        flex-col
        overflow-hidden
        rounded-2xl
        border
        border-white/10
        bg-white/5
        backdrop-blur-xl
        transition-all
        duration-500
        hover:border-[#39FF88]/40
        hover:shadow-[0_0_30px_rgba(57,255,136,0.15)]
      "
    >
      {/* Glow */}
      <div
        className="
          absolute
          inset-0
          bg-gradient-to-br
          from-[#39FF88]/10
          via-transparent
          to-transparent
          opacity-0
          transition
          duration-500
          group-hover:opacity-100
        "
      />

      {/* Image */}
      <div
        className="
          relative
          h-32
          sm:h-36
          overflow-hidden
        "
      >
        <img
          src={project.image}
          alt={project.title}
          className="
            h-full
            w-full
            object-cover
            transition
            duration-700
            group-hover:scale-110
          "
        />

        <div
          className="
            absolute
            inset-0
            bg-gradient-to-t
            from-black
            via-black/20
            to-transparent
          "
        />
      </div>

      {/* Content */}
      <div
        className="
          relative
          flex
          flex-1
          flex-col
          p-4
        "
      >
        <h3
          className="
            truncate
            text-lg
            font-bold
            text-white
          "
        >
          {project.title}
        </h3>

        {/* Short Description */}
        <div className="relative mt-2">
          <p
            className="
              line-clamp-2
              text-sm
              leading-5
              text-gray-400
            "
          >
            {project.description}
          </p>
        </div>

        {/* Tech */}
        <div
          className="
            mt-3
            flex
            flex-wrap
            gap-1.5
          "
        >
          {project.tech.map((item) => (
            <span
              key={item}
              className="
                rounded-full
                border
                border-[#39FF88]/20
                bg-[#39FF88]/10
                px-2
                py-0.5
                text-[10px]
                text-[#39FF88]
              "
            >
              {item}
            </span>
          ))}
        </div>

        {/* Buttons */}
        <div
          className="
            mt-4
            flex
            gap-2
          "
        >
          <a
            href={project.live}
            target="_blank"
            rel="noreferrer"
            className="
              flex-1
              flex
              items-center
              justify-center
              gap-1.5
              rounded-lg
              bg-[#39FF88]
              py-2
              text-xs
              font-semibold
              text-black
              transition
              hover:scale-105
            "
          >
            <ExternalLink size={14} />
            Live
          </a>

          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="
              flex-1
              flex
              items-center
              justify-center
              gap-1.5
              rounded-lg
              border
              border-white/10
              bg-white/5
              py-2
              text-xs
              transition
              hover:border-[#39FF88]
              hover:text-[#39FF88]
            "
          >
            <FaGithub size={14} />
            Code
          </a>
        </div>
      </div>
    </motion.article>
  );
};

export default ProjectCard;
