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
        scroll-smooth
      "
    >
      <Background />

      <CursorGlow />

      {/* Grid Background */}

      <div
        className="
          fixed
          inset-0
          grid-bg
          opacity-30
          pointer-events-none
        "
      />

      {/* Sidebar */}

      <Sidebar />

      {/* Main Content */}

      <main
        className="
          relative
          z-10
          min-h-screen
          px-4
          pt-10
          sm:px-6
          lg:ml-20
          lg:px-10
        "
      >
        {children}
      </main>
    </div>
  );
};

export default Layout;
