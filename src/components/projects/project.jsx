
const project = (prop) => {
    return (
        <>
        <article className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-10 items-center max-w-6xl">
            <div>
                <img src={prop.project.image} alt="" className='drop-shadow-lg overflow-hidden rounded-1xl w-[100%] h-[150px] object-cover object-top-left sm:w-auto sm:h-auto' />
            </div>
            <div className="sm:col-span-2">
                <h3 className="text-xl font-bold mb-1 text-left">{prop.project.name}</h3>
                <p className="leading-[1.8rem] text-gray-700" >{prop.project.description}</p>
                <div className="flex flex-wrap gap-3 pt-3 pb-3">
                    {typeof(prop.project.website) == "undefined" ? "" : <a href={prop.project.website.url} target="_blank" className={prop.project.website.active ? "bg-blue-500 hover:bg-blue-400 text-white rounded-3xl pt-1 pb-1 pl-3 pr-3" : "bg-gray-500 text-white rounded-3xl pt-1 pb-1 pl-3 pr-3"} title={prop.project.website.active ? "Got to Project" : "Project no longer exits"}>Visit the Website</a>}
                    {typeof(prop.project.github) == "undefined" ? "" : <a href="#" target="_blank" className="bg-blue-500 hover:bg-blue-400 text-white rounded-3xl pt-1 pb-1 pl-3 pr-3">View GitHub Repo</a>}
                </div>
                <h4>Skills and Tools</h4>
                <ul className="flex flex-wrap gap-3 pt-4">
                    {prop.project.skills.map((ele, index) => (
                        <li key={index} className="border-gray-300 border-2 pt-1 pb-1 pl-3 pr-3 rounded-3xl text-sm">{ele}</li>
                    ))}
                </ul>
            </div>
        </article>
        </> 
    )
}

export default project