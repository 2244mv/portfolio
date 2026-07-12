import { Helmet } from "react-helmet-async";


const SEO = ({
  title = "Manish Verma | Frontend Developer",
  description = "Frontend Developer specializing in React.js, JavaScript and modern responsive web applications."
}) => {


return (

<Helmet>

<title>
{title}
</title>


<meta
name="description"
content={description}
/>


<meta
name="keywords"
content="
React Developer,
Frontend Developer,
JavaScript,
Tailwind CSS,
Web Developer
"
/>


<meta
name="author"
content="Manish Verma"
/>


</Helmet>

);


};


export default SEO;