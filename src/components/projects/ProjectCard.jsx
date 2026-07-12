import { motion } from "framer-motion";

import {
  ExternalLink
} from "lucide-react";


import {
  FaGithub
} from "react-icons/fa";


const ProjectCard = ({project}) => {


return (

<motion.div

whileHover={{
y:-10
}}

className={`
glass
rounded-3xl
overflow-hidden
border
transition
${project.featured 
? "border-[#39FF88]/50 shadow-[0_0_40px_rgba(57,255,136,0.2)]"
:"border-white/10"
}
`}

>



{/* IMAGE */}


<div
className="
h-48
overflow-hidden
"
>


<img

src={project.image}

alt={project.title}

className="
w-full
h-full
object-cover
hover:scale-110
transition
duration-500
"

/>


</div>





<div
className="
p-6
"
>


{
project.featured &&

<span
className="
text-xs
px-3
py-1
rounded-full
bg-[#39FF88]
text-black
font-semibold
"
>

Featured

</span>

}




<h3
className="
text-2xl
font-bold
mt-4
"
>

{project.title}

</h3>




<p
className="
text-gray-400
mt-3
leading-relaxed
"
>

{project.description}

</p>





<div
className="
flex
flex-wrap
gap-2
mt-5
"
>


{
project.tech.map((item)=>(

<span

key={item}

className="
px-3
py-1
text-xs
rounded-lg
bg-white/5
text-gray-300
"

>

{item}

</span>

))
}


</div>





<div
className="
flex
gap-4
mt-6
"
>


<a

href={project.live}

target="_blank"

rel="noreferrer"

className="
flex
items-center
gap-2
px-4
py-2
rounded-xl
bg-[#39FF88]
text-black
font-medium
"

>

<ExternalLink size={16}/>

Live

</a>




<a

href={project.github}

target="_blank"

rel="noreferrer"

className="
flex
items-center
gap-2
px-4
py-2
rounded-xl
glass
"

>

<FaGithub size={16}/>

Code

</a>


</div>


</div>


</motion.div>

);


};


export default ProjectCard;