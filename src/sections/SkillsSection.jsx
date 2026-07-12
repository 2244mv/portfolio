import { motion } from "framer-motion";

import SkillCategory from "../components/skills/SkillCategory";


const SkillsSection = () => {


const categories = [

{
title:"Frontend",
skills:[
"React.js",
"JavaScript ES6+",
"HTML5",
"CSS3",
"Tailwind CSS",
"Responsive Design"
]
},


{
title:"Tools & Workflow",
skills:[
"Vite",
"Git",
"GitHub",
"npm",
"REST API",
"VS Code"
]
},


{
title:"UI & Experience",
skills:[
"Framer Motion",
"Animations",
"Component Design",
"Accessibility",
"Performance Optimization"
]
}


];


return (

<section
className="
min-h-screen
py-24
"
>


<div
className="
max-w-6xl
mx-auto
"
>


<motion.div

initial={{
opacity:0,
y:30
}}

whileInView={{
opacity:1,
y:0
}}

viewport={{
once:true
}}

>


<p
className="
text-[#39FF88]
mb-3
"
>
Skills
</p>


<h2
className="
text-4xl
font-bold
"
>

Technologies I Work With

</h2>


<p
className="
text-gray-400
mt-4
max-w-2xl
"
>

A modern frontend toolkit focused on
building scalable, responsive and
high-quality web applications.

</p>


</motion.div>




<div
className="
grid
md:grid-cols-2
lg:grid-cols-3
gap-6
mt-12
"
>


{
categories.map((category,index)=>(

<SkillCategory
key={index}
data={category}
/>

))
}


</div>


</div>


</section>

);


};


export default SkillsSection;