import { createContext, useState, useContext } from "react";

const ProjectContext = createContext(undefined)

export const ProjectProvider = ({ children }) => {

    const [modalOpen, setModalOpen] = useState(false)
    const [whichProject, setWhichProject] = useState(0)
    const toggleModal = () => setModalOpen(prev => (prev ? false : true))

    return (
        <ProjectContext.Provider value={{modalOpen, toggleModal, whichProject, setWhichProject}}>
            {children}
        </ProjectContext.Provider>
    )
}

export const useModal = () => {
    return useContext(ProjectContext)
}