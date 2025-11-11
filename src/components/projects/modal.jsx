import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { useModal } from '../context/context'

const Modal = (props) => {
    const { toggleModal } = useModal()

    const turnOff = () => {
        toggleModal()
    }

    return (
        <>
        <div className="bg-white rounded-xl shadow-xl max-w-[1200px] w-[100%] flex gap-6 p-6 overflow-auto" onClick={(e) => e.stopPropagation()}>
            <div className="flex-5">
                <img src={props.project.image} alt={props.project.name} className='shadow-sm rounded-md' />
            </div>
            <div className="flex-7" >
                <div className="flex justify-between">
                    <h1 className="text-2xl font-bold text-left mb-3">{props.project.name}</h1>
                    <div className="cursor-pointer" onClick={() => turnOff()}>Close</div>
                </div>
                <div className="font-bold">
                    <p><span className="text-[#0972D3]">Project Date:</span> {props.project.date}</p>
                    <p className="font-bold"><span className="text-[#0972D3]">Roles:</span> {props.project.roles.map((ele,index) => (index == 0 ? ele : ', ' + ele ))}</p>
                </div>
                <p className="leading-[1.8rem] text-gray-700 mt-3 mb-3" >{props.project.description}</p>
                <div className="flex gap-2 mb-5">
                    {typeof(props.project.website) == "undefined" ? "" : 
                    <a href={props.project.website.url} 
                        target="_blank" 
                        className={`rounded-3xl flex items-center gap-1.5 pl-2 pr-2 
                            ${props.project.website.active ? "bg-[#0972D3] hover:bg-blue-400 text-white" : "bg-gray-500 text-white opacity-35"}`
                        } 
                        title={props.project.website.active ? "Got to Project" : "Project no longer exits"}><FaExternalLinkAlt /> Visit Website</a>
                    }
                    {typeof(props.project.github) == "undefined" ? "" : 
                    <a href={props.project.github} 
                            target="_blank" 
                            className="bg-[#0972D3] hover:bg-blue-400 text-white rounded-3xl flex items-center gap-1.5 pl-2 pr-2"><FaGithub /> GitHub</a>
                    }
                </div>
                <h2 className="font-bold text-lg mb-2">Skills and Tools</h2>
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