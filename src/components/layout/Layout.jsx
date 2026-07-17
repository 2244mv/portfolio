// import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

import Background from "../ui/Background";
import CursorGlow from "../ui/CursorGlow";

const Layout = ({ children }) => {
  return (
    <div
      className="
      min-h-screen
      bg-[#050505]
      text-white
      relative
      overflow-hidden
      "
    >
      <Background />

      <CursorGlow />

      <div
        className="
        fixed
        inset-0
        grid-bg
        opacity-30
        pointer-events-none
        "
      />

      {/* <Navbar /> */}

      <Sidebar />

      <main
        className="
        relative
        z-10
        pt-20
        md:ml-20
        px-4
        sm:px-6
        lg:px-10
        "
      >
        {children}
      </main>
    </div>
  );
};

export default Layout;
