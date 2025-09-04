
const Hero = () => {
    return (
        <>
            <section className="max-w-6xl p-4 flex flex-col justify-center sm:h-[50vh] md:h-[32rem]">
                <h1 className="text-5xl pb-6 antialiased font-outfit">I'm <span> Jonathan Delves</span>, a Web Developer</h1>
                <p className="text-base font-display">Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta inventore aliquid voluptas numquam neque ullam hic aliquam veritatis dolores. Optio dolor porro enim ex eius! Fugit ducimus quae totam optio?</p>
                <div className="flex space-x-4 pt-6">
                    <a href="#" className="btn bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Get in Contact</a>
                    <a href="#" className="btn bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" download>Download CV</a>
                </div>
                
            </section>
        </>
    )
}

export default Hero