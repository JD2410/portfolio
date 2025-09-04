
import ActionButtons from "../action/action"
const Hero = () => {
    return (
        <>
            <section className="max-w-6xl p-4 flex flex-col justify-center sm:h-[50vh] md:h-[32rem]">
                <h1 className="text-5xl pb-6 antialiased font-outfit">Hi there, I'm<span> Jonathan Delves</span>, Front-End Designer and Developer</h1>
                <p className="text-base font-display">Hello! I’m a developer with a knack for design. I love creating beautiful websites and software, and I get a kick out of watching applications—and the companies behind them—grow. I’m up for any challenge and always willing to go the extra mile to help a project or business succeed.</p>
                <div className="flex space-x-4 pt-6">
                    <ActionButtons />
                </div>

            </section>
        </>
    )
}

export default Hero