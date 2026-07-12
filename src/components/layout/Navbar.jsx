import { useState } from "react";

import {
  Menu,
  X
} from "lucide-react";

import {
  FaGithub,
  FaLinkedin
} from "react-icons/fa";

import {
  NavLink
} from "react-router-dom";


const Navbar = () => {


  const [open, setOpen] = useState(false);



  const navLinks = [

    {
      name: "Home",
      path: "/"
    },

    {
      name: "About",
      path: "/about"
    },

    {
      name: "Skills",
      path: "/skills"
    },

    {
      name: "Projects",
      path: "/projects"
    },

    {
      name: "GitHub",
      path: "/github"
    },

    {
      name: "Contact",
      path: "/contact"
    }

  ];



  const activeStyle = ({isActive}) => (

    isActive

    ? "text-[#39FF88]"

    : "text-gray-300 hover:text-[#39FF88]"

  );



  return (

    <nav
      className="
      fixed
      top-0
      left-0
      w-full
      z-50
      glass
      border-b
      border-white/10
      "
    >


      <div
        className="
        flex
        items-center
        justify-between
        px-5
        py-4
        max-w-7xl
        mx-auto
        "
      >


        <NavLink

          to="/"

          className="
          text-xl
          font-bold
          neon-text
          "

        >

          MV.dev

        </NavLink>




        <div
          className="
          hidden
          md:flex
          items-center
          gap-7
          "
        >

          {
            navLinks.map((link)=>(

              <NavLink

                key={link.path}

                to={link.path}

                className={activeStyle}

              >

                {link.name}

              </NavLink>

            ))
          }

        </div>





        <div
          className="
          hidden
          md:flex
          items-center
          gap-4
          "
        >


          <a
            href="https://github.com/2244mv"
            target="_blank"
            rel="noreferrer"
            className="
            text-gray-400
            hover:text-[#39FF88]
            transition
            "
          >

            <FaGithub size={20}/>

          </a>



          <a
            href="https://www.linkedin.com/in/manish-verma-5b98ba382/"
            target="_blank"
            rel="noreferrer"
            className="
            text-gray-400
            hover:text-[#39FF88]
            transition
            "
          >

            <FaLinkedin size={20}/>

          </a>


        </div>





        <button

          onClick={()=>setOpen(!open)}

          className="
          md:hidden
          text-gray-300
          "

        >

          {
            open

            ?

            <X size={26}/>

            :

            <Menu size={26}/>

          }

        </button>


      </div>





      {
        open &&

        <div

          className="
          md:hidden
          px-6
          pb-6
          flex
          flex-col
          gap-5
          "

        >


          {
            navLinks.map((link)=>(

              <NavLink

                key={link.path}

                to={link.path}

                onClick={()=>setOpen(false)}

                className={activeStyle}

              >

                {link.name}

              </NavLink>

            ))
          }





          <div
            className="
            flex
            gap-5
            pt-3
            border-t
            border-white/10
            "
          >


            <a
              href="https://github.com/2244mv"
              target="_blank"
              rel="noreferrer"
              className="
              text-gray-400
              hover:text-[#39FF88]
              "
            >

              <FaGithub size={22}/>

            </a>




            <a
              href="https://www.linkedin.com/in/manish-verma-5b98ba382/"
              target="_blank"
              rel="noreferrer"
              className="
              text-gray-400
              hover:text-[#39FF88]
              "
            >

              <FaLinkedin size={22}/>

            </a>


          </div>


        </div>

      }



    </nav>

  );

};


export default Navbar;