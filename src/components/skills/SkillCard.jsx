import { motion } from "framer-motion";

const SkillCard = ({ skill }) => {
  return (
    <motion.span
      whileHover={{
        scale: 1.08,
      }}

      className="
px-4
py-2
rounded-xl
bg-white/5
border
border-white/10
text-gray-300
text-sm
hover:text-[#39FF88]
transition
cursor-default
"
    >
      {skill}
    </motion.span>
  );
};

export default SkillCard;
