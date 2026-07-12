import { motion } from "framer-motion";


const Loader = () => {


return (

<div
className="
fixed
inset-0
bg-[#050505]
flex
items-center
justify-center
z-[999]
"
>


<motion.div

animate={{
scale:[1,1.3,1]
}}

transition={{
duration:1.2,
repeat:Infinity
}}

className="
w-16
h-16
rounded-full
border-4
border-[#39FF88]
"

>


</motion.div>


</div>

);


};


export default Loader;