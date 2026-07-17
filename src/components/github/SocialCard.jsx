import { ExternalLink } from "lucide-react";

import { FaLinkedin } from "react-icons/fa";

const SocialCard = () => {
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
      <FaLinkedin
        size={42}

        className="
        text-[#39FF88]
        "
      />

      <h3
        className="
        text-2xl
        font-bold
        mt-5
        "
      >
        Connect With Me
      </h3>

      <p
        className="
        text-gray-400
        mt-3
        leading-relaxed
        "
      >
        Open to frontend development opportunities, collaborations, and building
        modern web experiences with React.js.
      </p>

      <a
        href="https://www.linkedin.com/in/manish-verma-5b98ba382/"

        target="_blank"

        rel="noreferrer"

        className="
        inline-flex
        items-center
        gap-2
        mt-8
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
        <FaLinkedin size={18} />
        LinkedIn Profile
        <ExternalLink size={16} />
      </a>
    </div>
  );
};

export default SocialCard;
