
const Experience = (prop) => {
    return (
    <article className="pb-8 ml-6 pt-5 pl-9 relative text-left">
        <div className="job-indicator"></div>
        <div className="flex gap-3">
            <h3 className="text-xl font-bold">{prop.experience.title}</h3>
            <p className="blue-gradient text-white pt-1 pr-3 pb-1 pl-3 block rounded-2xl text-sm">{prop.experience.date}</p>
        </div>
        
        <p className="pb-4 leading-[1.8rem] text-gray-700">{prop.experience.description}</p>
        <ul className="flex flex-wrap gap-3 text-center">
            {prop.experience.skills.map((ele, index) => (
                <li key={index} className="bg-gray-100 pt-1 pb-1 pl-3 pr-3 rounded-3xl text-sm">{ele}</li>
            ))}
        </ul>
    </article>
    )
}

export default Experience