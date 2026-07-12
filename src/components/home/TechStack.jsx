const TechStack = () => {


const skills=[
"React",
"JavaScript",
"Tailwind CSS",
"Vite",
"Framer Motion",
"Git"
];


return (

<div
className="
flex
flex-wrap
gap-3
mt-10
"
>

{
skills.map((skill)=>(

<span
key={skill}
className="
px-4
py-2
rounded-full
glass
text-sm
text-gray-300
hover:text-[#39FF88]
transition
"
>

{skill}

</span>

))
}


</div>

);


};


export default TechStack;