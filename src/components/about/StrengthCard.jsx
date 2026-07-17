import { motion } from "framer-motion";

const StrengthCard = ({ data }) => {
  return (
    <motion.div
      whileHover={{
        scale: 1.03,
      }}
      className="
glass
rounded-2xl
p-6
transition
"
    >
      <h3
        className="
text-xl
font-semibold
mb-2
"
      >
        {data.title}
      </h3>

      <p
        className="
text-gray-400
text-sm
leading-relaxed
"
      >
        {data.description}
      </p>
    </motion.div>
  );
};

export default StrengthCard;
