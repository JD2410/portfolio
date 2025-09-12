import { FaHtml5, FaCss3Alt, FaPhp, FaReact, FaGit, FaGithub, FaWordpress, FaFigma, FaSass } from "react-icons/fa";
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
        ["SCSS", FaSass],
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
        <section className="flex flex-col items-center">
            <h1 className="text-center text-4xl font-bold mt-30 text-gray-900">Skills & Tools</h1>
            <hr className="hr-underline mt-6 mb-6 min-w-[220px] rounded-sm" />
            <p className="text-center mb-8 text-gray-700">Refined and developed over the years. Here are the languages, skills and tools I know.</p>
            <ul className="max-w-6xl flex justify-center flex-wrap gap-5 p-4">
                {skillsList.map((element, index) => {
                    const IconComponent = element[1];
                    if (typeof element[1] === "function") {
                        return (
                            <li key={index} className="h-[140px] w-[140px] p-2 bg-gray-100 rounded-lg text-center hover:[transform:perspective(800px)_rotateY(-30deg)] group duration-300">
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
                        <li key={index} className="h-[140px] w-[140px] p-2 bg-gray-100 rounded-lg text-center hover:[transform:perspective(800px)_rotateY(-30deg)] group duration-300">
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
        </section>
            
            
        </>
    )
}

export default Skills