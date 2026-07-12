import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";

const GithubCard = () => {
  return (
    <div
      className="
        glass
        rounded-3xl
        p-8
        border
        border-white/10
        hover:border-[#39FF88]/40
        transition-all
        duration-300
      "
    >
      <FaGithub
        size={42}
        className="text-[#39FF88]"
      />

      <h3
        className="
          text-2xl
          font-bold
          mt-5
        "
      >
        Manish Verma
      </h3>

      <p
        className="
          text-gray-400
          mt-3
          leading-relaxed
        "
      >
        Frontend Developer passionate about building modern,
        responsive, and user-friendly web applications using
        React.js, JavaScript, Tailwind CSS, and modern frontend
        technologies.
      </p>

      <div
        className="
          grid
          grid-cols-3
          gap-4
          mt-8
        "
      >
        <div
          className="
            glass
            rounded-xl
            p-4
            text-center
          "
        >
          <h4
            className="
              text-2xl
              font-bold
              text-[#39FF88]
            "
          >
            4+
          </h4>

          <p
            className="
              text-xs
              text-gray-400
              mt-1
            "
          >
            Projects
          </p>
        </div>

        <div
          className="
            glass
            rounded-xl
            p-4
            text-center
          "
        >
          <h4
            className="
              text-2xl
              font-bold
              text-[#39FF88]
            "
          >
            React
          </h4>

          <p
            className="
              text-xs
              text-gray-400
              mt-1
            "
          >
            Primary
          </p>
        </div>

        <div
          className="
            glass
            rounded-xl
            p-4
            text-center
          "
        >
          <h4
            className="
              text-2xl
              font-bold
              text-[#39FF88]
            "
          >
            JS
          </h4>

          <p
            className="
              text-xs
              text-gray-400
              mt-1
            "
          >
            Language
          </p>
        </div>
      </div>

      <div className="mt-8">
        <a
          href="https://github.com/2244mv"
          target="_blank"
          rel="noreferrer"
          className="
            inline-flex
            items-center
            gap-2
            px-5
            py-3
            rounded-xl
            bg-[#39FF88]
            text-black
            font-semibold
            hover:scale-105
            transition
          "
        >
          <FaGithub size={18} />

          Visit GitHub

          <ExternalLink size={16} />
        </a>
      </div>
    </div>
  );
};

export default GithubCard;