
const Experience = (prop) => {
    let even = false;
    if(prop.which % 2 == 0) {
        even = true
    }
    return (
        <>
        <article className={even ? "pb-8 md:pl-[52%] relative text-left" : "pb-8 md:pr-[52%] relative md:text-right"}>
            <div className={even ? "md:absolute md:text-right w-[48%] left-0" : "md:absolute text-left w-[48%] right-0"}>
                <p className="blue-gradient text-white pt-1 pr-3 pb-1 pl-3 inline-block rounded-2xl text-sm mb-2 ml-10 md:ml-0">{prop.experience.date}</p>
            </div>
            <div className="timeline-indi"></div>
            <h3 className="text-xl font-bold mb-1">{prop.experience.title}</h3>
            <p className="pb-4 leading-[1.8rem] text-gray-700">{prop.experience.description}</p>
            <ul className={even ? "flex flex-wrap gap-3 text-center" : "flex flex-wrap gap-3 text-center md:justify-end"}>
                {prop.experience.skills.map((ele, index) => (
                    <li key={index} className="border-blue-400 border-2 pt-1 pb-1 pl-3 pr-3 rounded-3xl text-sm">{ele}</li>
                ))}
            </ul>
        </article>
        </>
    )
}

export default Experience