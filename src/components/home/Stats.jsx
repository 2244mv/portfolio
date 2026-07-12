const Stats = () => {


const data=[
["Projects","5+"],
["Experience","Frontend"],
["Focus","React"]
];


return (

<div
className="
grid
grid-cols-3
gap-4
mt-10
"
>

{
data.map(([title,value])=>(

<div
key={title}
className="
glass
rounded-xl
p-4
text-center
"
>

<h3
className="
text-xl
font-bold
neon-text
"
>

{value}

</h3>


<p
className="
text-gray-400
text-sm
"
>

{title}

</p>


</div>

))
}

</div>


);


};


export default Stats;