import { FaHtml5, FaCss3Alt, FaPhp, FaReact, FaGit, FaGithub, FaWordpress, FaFigma } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { DiJqueryLogo, DiScrum } from "react-icons/di";
import { BsFillBootstrapFill } from "react-icons/bs";
import { SiAdobe, SiAffinitydesigner } from "react-icons/si";
import { BiLogoNetlify } from "react-icons/bi";
import Scrum from './assets/scrum.svg';
import Graphicdesign from './assets/graphic-design.svg';
import Productownership from './assets/product-ownership.svg';
import Responsive from './assets/responsive.svg';
import Uidesign from './assets/ui-design.svg';
import Webdevelopment from './assets/web-development.svg';
import Wireframing from './assets/wireframing.svg';

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
        ["Agile", DiScrum],
        ["SCRUM", Scrum],
        ["Figma", FaFigma],
        ["Adobe Suite", SiAdobe],
        ["Affinity Studio", SiAffinitydesigner],
        ["Wireframing", Wireframing],
        ["Graphic Design", Graphicdesign],
        ["Responsive Web Design", Responsive],
        ["UI Design", Uidesign],
        ["Web Development", Webdevelopment],
        ["Netlify", BiLogoNetlify],
        ["Product Ownership", Productownership],
    ]
    return (
        <>
            <h1 className="text-center">Skills & Tools</h1>
            <p className="text-center">Refined and developed over the years. Here are the languages, skills and tools I know.</p>
            <ul className="grid lg:grid-cols-7 md:grid-cols-4 grid-cols-2 gap-5 p-4">
                {skillsList.map((element, index) => {
                    const IconComponent = element[1];
                    if (typeof element[1] === "function") {
                        return (
                            <li key={index} className="lg:h-[140px] lg:w-[140px] p-2 bg-gray-100 rounded-lg text-center hover:[transform:perspective(800px)_rotateY(-30deg)] group duration-300">
                                <span>
                                    <span className="flex h-[100px] items-center justify-center duration-300 group-hover:-translate-x-4">
                                        <IconComponent size={68} />
                                    </span>
                                    <div className="truncate w-[100%]">{element[0]}</div>
                                </span>
                            </li>
                        )
                    }

                    return (
                        <li key={index} className="lg:h-[140px] lg:w-[140px] p-2 bg-gray-100 rounded-lg text-center hover:[transform:perspective(800px)_rotateY(-30deg)] group duration-300">
                            <span>
                                <span className="flex h-[100px] items-center justify-center duration-300 group-hover:-translate-x-4">
                                    <img src={element[1]} alt="" />
                                </span>
                                <div className="truncate w-[100%]">{element[0]}</div>
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