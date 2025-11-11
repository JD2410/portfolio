import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const Modal = (props) => {

    return (
        <>
        <div className="bg-white rounded-2xl shadow-xl max-h-[70vh] max-w-[80%] w-[100%] flex gap-6 p-6">
            <div className="flex-4">
                <img src={props.project.image} alt="" className='shadow-sm rounded-md' />
            </div>
            <div className="flex-7" >
                <div className="flex justify-between">
                    <h1 className="text-2xl font-bold text-left mb-1">{props.project.name}</h1>
                    <div>Close</div>
                </div>
                <div className="font-bold">
                    <p><span className="text-[#0972D3]">Project Date:</span> {props.project.date}</p>
                    <p className="font-bold"><span className="text-[#0972D3]">Roles:</span> {props.project.roles.map((ele,index) => (index == 0 ? ele : ', ' + ele ))}</p>
                </div>
                <p className="leading-[1.5rem] text-gray-700 mt-3 mb-3" >{props.project.description}</p>
                <div className="flex gap-2">
                        {typeof(props.project.website) == "undefined" ? "" : 
                        <a href={props.project.website.url} 
                            target="_blank" 
                            className={`rounded-3xl flex justify-center items-center ${props.project.website.active ? "bg-[#0972D3] hover:bg-blue-400 text-white" : "bg-gray-500 text-white opacity-35"}`} 
                            title={props.project.website.active ? "Got to Project" : "Project no longer exits"}><FaExternalLinkAlt /> Visit Website</a>}
                        {typeof(props.project.github) == "undefined" ? "" : 
                        <a href={props.project.github} target="_blank" className="bg-[#0972D3] hover:bg-blue-400 text-white rounded-3xl flex align-middle"><FaGithub /> GitHub</a>}
                    </div>
                <ul className="flex flex-wrap mt-1 gap-2">
                    {props.project.skills.map((ele, index) => (
                        <li key={index} className="bg-gray-100 pt-1 pb-1 pl-3 pr-3 rounded-3xl text-xs uppercase">{ele}</li>
                    ))}
                </ul>
            </div>
        </div>
        </>
    )
}

export default Modal