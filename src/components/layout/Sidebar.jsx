import { Home, User, Brain, Code2, Mail } from "lucide-react";

import { FaGithub } from "react-icons/fa";

const Sidebar = () => {
  const links = [
    {
      icon: <Home size={20} />,
      path: "/",
    },

    {
      icon: <User size={20} />,
      path: "/about",
    },

    {
      icon: <Brain size={20} />,
      path: "/skills",
    },

    {
      icon: <Code2 size={20} />,
      path: "/projects",
    },

    {
      icon: <FaGithub size={20} />,
      path: "/github",
    },

    {
      icon: <Mail size={20} />,
      path: "/contact",
    },
  ];

  return (
    <aside
      className="
      hidden
      md:flex
      fixed
      left-4
      top-24
      w-14
      h-[80vh]
      glass
      rounded-2xl
      flex-col
      items-center
      justify-center
      gap-8
      z-40
      "
    >
      {links.map((item, index) => (
        <a
          key={index}
          href={item.path}
          className="
            text-gray-400
            hover:text-[#39FF88]
            transition-all
            duration-300
            hover:scale-110
            "
        >
          {item.icon}
        </a>
      ))}
    </aside>
  );
};

export default Sidebar;
