import profilePicture from "./assets/profile-picture.png"
import ActionButtons from "../action/action"
const About = () => {
    return (
        <section className="flex flex-col items-center">
            <div className="max-w-6xl p-4 sm:grid sm:grid-cols-12 gap-4 content-center items-center ">
                <div className="lg:col-span-7 sm:col-span-6 self-center">
                    <h1 className="text-left text-2xl md:text-4xl font-bold">About Me</h1>
                    <hr className="hr-underline mt-2 mb-2 sm:mt-5 sm:mb-5 rounded-sm" />
                    <p className="pb-3 leading-[1.8rem] text-gray-700">I'm a highly adaptable product owner with a strong background in front-end development, design, and product management. Having led cross-functional teams and worked hands-on in UI/UX and development, I bridge the gap between technical execution and strategic decision-making. I excel at aligning business objectives with user needs, ensuring products deliver real value through a combination of stakeholder collaboration and data-driven decisions. With strong communication and problem-solving skills, I thrive in both independent and team environments, driving innovation and delivering impactful digital solutions.</p>
                    <ActionButtons />
                </div>
                <div className="lg:col-span-5 sm:col-span-6 pt-6 sm:pt-6">
                    <img src={profilePicture} alt="Jonatha Delves" className="ml-auto mr-auto block mt-4 sm:mt-0 w-[80%] sm:w-auto" />
                </div>
            </div>
        </section>
    )
}

export default About