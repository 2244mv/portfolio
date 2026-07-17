const AboutCard = () => {
  return (
    <div
      className="
glass
rounded-3xl
p-8
"
    >
      <h3
        className="
text-2xl
font-bold
mb-4
"
      >
        Frontend Developer
      </h3>

      <p
        className="
text-gray-400
leading-relaxed
"
      >
        I specialize in React ecosystem development and building modern
        responsive applications. My focus is performance, clean UI, reusable
        components and excellent user experience.
      </p>

      <div
        className="
grid
grid-cols-2
gap-4
mt-8
"
      >
        <div
          className="
glass
rounded-xl
p-4
"
        >
          <p className="text-[#39FF88] font-bold">React</p>

          <span className="text-gray-400 text-sm">Primary Skill</span>
        </div>

        <div
          className="
glass
rounded-xl
p-4
"
        >
          <p className="text-[#39FF88] font-bold">JavaScript</p>

          <span className="text-gray-400 text-sm">Core Language</span>
        </div>
      </div>
    </div>
  );
};

export default AboutCard;
