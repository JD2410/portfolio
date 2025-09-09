import { FaHtml5, FaCss3Alt, FaPhp, FaReact, FaGit, FaGithub, FaWordpress, FaFigma } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { DiJqueryLogo, DiScrum } from "react-icons/di";
import { BsFillBootstrapFill } from "react-icons/bs";
import { SiAdobe, SiAffinitydesigner } from "react-icons/si";
import { BiLogoNetlify } from "react-icons/bi";

const Skills = () => {
    const skillsList = [
        ["HTML", FaHtml5],
        ["CSS", FaCss3Alt],
        ["SCSS", FaHtml5],
        ["JavaScript", IoLogoJavascript],
        ["jQuery", DiJqueryLogo],
        ["PHP", FaPhp],
        ["Bootstrap", BsFillBootstrapFill],
        ["React", FaReact],
        ["Git", FaGit],
        ["GitHub", FaGithub],
        ["WordPress", FaWordpress],
        ["SEO", FaHtml5],
        ["Agile", FaHtml5],
        ["SCRUM", DiScrum],
        ["Figma", FaFigma],
        ["Adobe Suite", SiAdobe],
        ["Affinity Studio", SiAffinitydesigner],
        ["Wireframing", FaHtml5],
        ["Graphic Design", FaHtml5],
        ["Responsive Web Design", FaHtml5],
        ["UI Design", FaHtml5],
        ["Web Development", FaHtml5],
        ["Netlify", BiLogoNetlify],
        ["Product Ownership", FaHtml5],
    ]
    return (
        <>
            <h1 className="text-center">Skills & Tools</h1>
            <p className="text-center">Refined and developed over the years. Here are the languages, skills and tools I know.</p>
            <ul className="grid lg:grid-cols-7 md:grid-cols-4 grid-cols-2 gap-5 text-center p-4">
                {skillsList.map((element, index) => {
                    const IconComponent = element[1];
                    return (
                        <li key={index} className="lg:h-[140px] lg:w-[140px] p-2 bg-gray-100 rounded-lg text-center">
                            <span>
                                <IconComponent size={60} />
                                <span>{element[0]}</span>
                            </span>
                        </li>
                    )
                })
            }
            </ul>
            
        </>
    )
}

export default Skills