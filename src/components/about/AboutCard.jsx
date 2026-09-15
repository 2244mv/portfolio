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
        MERN Full Stack Developer
      </h3>

      <p
        className="
          text-gray-400
          leading-relaxed
        "
      >
        I am a MERN Full Stack Developer focused on building modern,
        responsive, and scalable web applications. I work across the
        frontend and backend using React, Node.js, Express.js, and MongoDB,
        with a focus on clean architecture, reusable components, REST APIs,
        performance, and seamless user experiences.
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
          <p className="text-[#39FF88] font-bold">React.js</p>

          <span className="text-gray-400 text-sm">Frontend</span>
        </div>

        <div
          className="
            glass
            rounded-xl
            p-4
          "
        >
          <p className="text-[#39FF88] font-bold">Node.js</p>

          <span className="text-gray-400 text-sm">Backend</span>
        </div>
      </div>
    </div>
  );
};

export default AboutCard;
;
