import SkillCard from "./SkillCard";

const SkillCategory = ({ data }) => {
  return (
    <div
      className="
glass
rounded-3xl
p-6
"
    >
      <h3
        className="
text-xl
font-bold
mb-5
"
      >
        {data.title}
      </h3>

      <div
        className="
flex
flex-wrap
gap-3
"
      >
        {data.skills.map((skill) => (
          <SkillCard key={skill} skill={skill} />
        ))}
      </div>
    </div>
  );
};

export default SkillCategory;
