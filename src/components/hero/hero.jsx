
import ActionButtons from "../action/action"
import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";
import "./hero.css"
const Hero = () => {
    return (
         <section className="hero flex justify-center pt-20 pb-5 sm:pt-10 md:pt-0 md:pb-0">
            <div className="max-w-6xl p-4 flex flex-col justify-center sm:h-[500px] md:h-[600px] text-white">
                <h1 className="text-5xl pb-6 antialiased font-outfit md:w-[50%] text-[1.7rem]">Hi there, I'm<span className="block text-[3.2rem]"> Jonathan Delves</span>Front-End Designer and Developer</h1>
                <p className="font-display lg:w-[55%] text-lg">Hello! I’m a developer with a knack for design. I love creating beautiful websites and software, and I get a kick out of watching applications—and the companies behind them—grow. I’m up for any challenge and always willing to go the extra mile to help a project or business succeed.</p>
                <ActionButtons />
                <div className="flex gap-4 pt-6"><FaEnvelope size={30} /> <FaLinkedin size={30} /> <FaGithub size={30} /></div>
            </div>
        </section>
    )
}

export default Hero