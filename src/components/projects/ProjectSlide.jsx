import { ExternalLink } from "lucide-react";

import { FaGithub } from "react-icons/fa";

const ProjectSlide = ({ project }) => {
  return (
    <div
      className="
      grid
      lg:grid-cols-2
      gap-6
      items-center
      "
    >
      {/* Image */}

      <div
        className="
        rounded-2xl
        overflow-hidden
        border
        border-white/10
        "
      >
        <img
          src={project.image}
          alt={project.title}
          className="
          w-full
          h-[220px]
          sm:h-[260px]
          object-cover
          hover:scale-105
          transition
          duration-500
          "
        />
      </div>

      {/* Content */}

      <div>
        {project.featured && (
          <span
            className="
            inline-block
            px-3
            py-1
            rounded-full
            bg-[#39FF88]
            text-black
            text-[11px]
            font-bold
            "
          >
            FEATURED
          </span>
        )}

        <h3
          className="
          text-2xl
          lg:text-3xl
          font-bold
          mt-3
          "
        >
          {project.title}
        </h3>

        <p
          className="
          text-gray-400
          text-sm
          mt-3
          leading-relaxed
          "
        >
          {project.description}
        </p>

        {/* Tech */}

        <div
          className="
          flex
          flex-wrap
          gap-2
          mt-4
          "
        >
          {project.tech.map((item) => (
            <span
              key={item}
              className="
                px-3
                py-1
                rounded-lg
                bg-white/5
                border
                border-white/10
                text-xs
                text-gray-300
                "
            >
              {item}
            </span>
          ))}
        </div>

        {/* Features */}

        <div
          className="
          mt-4
          grid
          grid-cols-2
          gap-2
          text-xs
          text-gray-400
          "
        >
          {project.features.slice(0, 4).map((feature) => (
            <p key={feature}>
              <span className="text-[#39FF88]">✓</span> {feature}
            </p>
          ))}
        </div>

        {/* Buttons */}

        <div
          className="
          flex
          gap-3
          mt-5
          "
        >
          <a
            href={project.live}
            target="_blank"
            rel="noreferrer"
            className="
            flex
            items-center
            gap-2
            px-4
            py-2
            rounded-lg
            bg-[#39FF88]
            text-black
            text-sm
            font-semibold
            hover:scale-105
            transition
            "
          >
            <ExternalLink size={15} />
            Demo
          </a>

          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="
            flex
            items-center
            gap-2
            px-4
            py-2
            rounded-lg
            bg-white/5
            border
            border-white/10
            text-sm
            hover:border-[#39FF88]
            transition
            "
          >
            <FaGithub size={15} />
            Code
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectSlide;
