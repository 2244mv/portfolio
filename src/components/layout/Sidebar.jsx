import { Home, User, Brain, Code2, Mail } from "lucide-react";

import { FaGithub } from "react-icons/fa";

import { useEffect, useState } from "react";

const Sidebar = () => {
  const [activeSection, setActiveSection] = useState("home");

  const links = [
    {
      icon: <Home size={20} />,
      id: "home",
      name: "Home",
    },

    {
      icon: <User size={20} />,
      id: "about",
      name: "About",
    },

    {
      icon: <Brain size={20} />,
      id: "skills",
      name: "Skills",
    },

    {
      icon: <Code2 size={20} />,
      id: "projects",
      name: "Projects",
    },

    {
      icon: <FaGithub size={20} />,
      id: "github",
      name: "Github",
    },

    {
      icon: <Mail size={20} />,
      id: "contact",
      name: "Contact",
    },
  ];

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        threshold: 0.55,
      },
    );

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const handleScroll = (id) => {
    const section = document.getElementById(id);

    if (!section) return;

    const offset = 20;

    const sectionPosition =
      section.getBoundingClientRect().top + window.scrollY;

    window.scrollTo({
      top: sectionPosition - offset,
      behavior: "smooth",
    });
  };

  return (
    <aside>
      {/* Desktop Sidebar */}

      <div
        className="
          hidden
          lg:flex
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
          z-50
        "
      >
        {links.map((item) => (
          <button
            key={item.id}
            onClick={() => handleScroll(item.id)}
            title={item.name}
            className={`
              transition-all
              duration-300

              ${
                activeSection === item.id
                  ? "text-[#39FF88] scale-125 drop-shadow-[0_0_10px_#39FF88]"
                  : "text-gray-400 hover:text-[#39FF88] hover:scale-110"
              }
            `}
          >
            {item.icon}
          </button>
        ))}
      </div>

      {/* Mobile Bottom Navigation */}

      <div
        className="
          lg:hidden
          fixed
          bottom-5
          left-1/2
          -translate-x-1/2
          w-[92%]
          max-w-md
          glass
          rounded-2xl
          flex
          items-center
          justify-around
          py-4
          z-50
          border
          border-white/10
        "
      >
        {links.map((item) => (
          <button
            key={item.id}
            onClick={() => handleScroll(item.id)}
            className={`
              transition-all
              duration-300

              ${
                activeSection === item.id
                  ? "text-[#39FF88] scale-125 drop-shadow-[0_0_10px_#39FF88]"
                  : "text-gray-400 hover:text-[#39FF88]"
              }
            `}
          >
            {item.icon}
          </button>
        ))}
      </div>
    </aside>
  );
};

export default Sidebar;

