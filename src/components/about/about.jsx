import ActionButtons from "../action/action"
const About = () => {
    return (
        <>
        <section className="max-w-6xl p-4 grid grid-cols-6 sm:h-[50vh] md:h-[32rem]">
            <div className="col-span-4 self-center">
                <h1>About Me</h1>
                <p className="pb-3">I’m a highly adaptable product owner with a strong background in front-end development, design, and product management. Having led cross-functional teams and worked hands-on in UI/UX and development, I bridge the gap between technical execution and strategic decision-making. I excel at aligning business objectives with user needs, ensuring products deliver real value through a combination of stakeholder collaboration and data-driven decisions. With strong communication and problem-solving skills, I thrive in both independent and team environments, driving innovation and delivering impactful digital solutions.</p>
                <ActionButtons />
            </div>
            <div className="col-span-2">
                
            </div>
        </section>
        </>
    )
}

export default About