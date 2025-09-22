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
        <section className="flex flex-col items-center pl-4 sm:pl-0 pr-4 sm:pr-0">
            <h1 className="text-left w-[100%] sm:text-center text-2xl md:text-4xl font-bold mt-5 lg:mt-30 text-gray-900">Skills & Tools</h1>
            <hr className="hr-underline mt-2 mb-2 sm:mt-5 sm:mb-5 w-[100%] sm:max-w-[220px] rounded-sm" />
            <p className="sm:text-center mb-4 sm:mb-8 sm:pl-2 sm:pr-2 text-gray-700">Refined and developed over the years. Here are the languages, skills and tools I know.</p>
            <ul className="max-w-6xl flex justify-center flex-wrap gap-5 sm:p-4">
                {skillsList.map((element, index) => {
                    const IconComponent = element[1];
                    return (
                        <li key={index} className="w-[30%] h-[100px] sm:h-[140px] sm:w-[140px] p-2 bg-gray-100 rounded-lg text-center hover:[transform:perspective(800px)_rotateY(-30deg)] group duration-300">
                            <span>
                                <span className="flex h-[50px] sm:h-[100px] items-center justify-center duration-300 group-hover:-translate-x-4 text-4xl sm:text-7xl">
                                    {typeof element[1] === "function" ? <IconComponent /> : <img src={element[1]} alt="" className="sm:h-auto h-[100%] sm:w-auto w-[100%] pt-2 pb-2 sm:pt-0 sm:pb-0 object-contain" />}
                                </span>
                                <div className="truncate w-[100%]">{element[0]}</div>
                            </span>
                        </li>
                    )
                })}
            </ul>
        </section>
    )
}

export default Skills