
const project = (prop) => {
    return (
        <>
        <article className="grid grid-cols-1 sm:grid-cols-12 gap-8 mb-12 items-center max-w-6xl drop-shadow-lg bg-white p-6 text-gray-700 rounded-xl">
            <div className="sm:col-span-5">
                <img src={prop.project.image} alt="" className='shadow-sm overflow-hidden rounded-1xl object-cover object-top-left max-w-[441px] max-h-[300px] w-[100%] rounded-xl' />
            </div>
            <div className="sm:col-span-7 flex flex-col content-between" >
                <div className="flex justify-between">
                    <h3 className="text-2xl font-bold text-left mb-1">{prop.project.name}</h3>
                    <div className="flex">
                        {typeof(prop.project.website) == "undefined" ? "" : <a href={prop.project.website.url} target="_blank" className={prop.project.website.active ? "bg-[#0972D3] hover:bg-blue-400 text-white rounded-3xl pt-1 pb-1 pl-3 pr-3" : "bg-gray-500 text-white rounded-3xl pt-1 pb-1 pl-3 pr-3"} title={prop.project.website.active ? "Got to Project" : "Project no longer exits"}>W</a>}
                        {typeof(prop.project.github) == "undefined" ? "" : <a href={prop.project.github}  target="_blank" className="bg-[#0972D3] hover:bg-blue-400 text-white rounded-3xl pt-1 pb-1 pl-3 pr-3">GR</a>}
                    </div>
                </div>
                <ul className="flex flex-wrap mt-1 gap-2 overflow-hidden h-[28px] whitespace-nowrap items-center">
                    {prop.project.skills.map((ele, index) => (
                        <li key={index} className="bg-gray-100 pt-1 pb-1 pl-3 pr-3 rounded-3xl text-xs uppercase">{ele}</li>
                    ))}
                </ul>
                <p className="leading-[2.1rem] text-gray-700 line-clamp-5 mt-3 mb-3" >{prop.project.description}</p>
                <p className="font-bold whitespace-nowrap overflow-hidden text-ellipsis"><span className="text-[#0972D3]">Roles:</span> {prop.project.roles.map((ele,index) => (index == 0 ? ele : ', ' + ele ))}</p>
                <div className="flex justify-between font-bold">
                    <p><span className="text-[#0972D3]">Project Date:</span> {prop.project.date}</p>
                    <div className="text-[#0972D3]">FIND OUT MORE &gt;&gt;</div>
                </div>
                
            </div>
        </article>
        </> 
    )
}

export default project