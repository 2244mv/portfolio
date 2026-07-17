import { useEffect, useState } from "react";

const CursorGlow = () => {
  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const move = (e) => {
      setPosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", move);

    return () => {
      window.removeEventListener("mousemove", move);
    };
  }, []);

  return (
    <div
      className="
fixed
w-72
h-72
rounded-full
bg-[#39FF88]/10
blur-[100px]
pointer-events-none
z-0
"

      style={{
        left: position.x - 140,

        top: position.y - 140,
      }}
    />
  );
};

export default CursorGlow;
