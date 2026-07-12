import { motion } from "framer-motion";

import GithubCard from "../components/github/GithubCard";
import SocialCard from "../components/github/SocialCard";


const GithubSection = () => {


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
Open Source
</p>


<h2
className="
text-4xl
font-bold
"
>

GitHub & Developer Profile

</h2>


<p
className="
text-gray-400
mt-4
max-w-2xl
"
>

Explore my coding journey, projects,
and development activity through my
GitHub profile.

</p>


</motion.div>




<div
className="
grid
lg:grid-cols-2
gap-8
mt-12
"
>


<GithubCard />


<SocialCard />


</div>


</div>


</section>

);


};


export default GithubSection;