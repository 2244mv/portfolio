import { Routes, Route, useLocation } from "react-router-dom";

import { AnimatePresence } from "framer-motion";


import Home from "../pages/Home";
import About from "../pages/About";
import Skills from "../pages/Skills";
import Projects from "../pages/Projects";
import Github from "../pages/Github";
import Contact from "../pages/Contact";
import NotFound from "../pages/NotFound";


import PageTransition from "../components/ui/PageTransition";



const AppRoutes = () => {


const location = useLocation();



return (

<AnimatePresence mode="wait">


<Routes location={location} key={location.pathname}>


<Route

path="/"

element={

<PageTransition>

<Home />

</PageTransition>

}

/>



<Route

path="/about"

element={

<PageTransition>

<About />

</PageTransition>

}

/>




<Route

path="/skills"

element={

<PageTransition>

<Skills />

</PageTransition>

}

/>



<Route

path="/projects"

element={

<PageTransition>

<Projects />

</PageTransition>

}

/>



<Route

path="/github"

element={

<PageTransition>

<Github />

</PageTransition>

}

/>



<Route

path="/contact"

element={

<PageTransition>

<Contact />

</PageTransition>

}

/>



<Route

path="*"

element={

<PageTransition>

<NotFound />

</PageTransition>

}

/>



</Routes>


</AnimatePresence>

);


};


export default AppRoutes;