import { AnimatePresence } from "framer-motion";
import { useLocation } from "react-router-dom";

import PageTransition from "../components/ui/PageTransition";

import Home from "../pages/Home";
import About from "../pages/About";
import Skills from "../pages/Skills";
import Projects from "../pages/Projects";
import Github from "../pages/Github";
import Contact from "../pages/Contact";

const AppRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <PageTransition key={location.pathname}>
        <Home />

        <About />

        <Skills />

        <Projects />

        <Github />

        <Contact />
      </PageTransition>
    </AnimatePresence>
  );
};

export default AppRoutes;
