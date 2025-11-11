import { createContext, useState, useContext } from "react";

const ProjectContext = createContext(undefined)

export const ProjectProvider = ({ children }) => {

    const [modalOpen, setModalOpen] = useState(true)
    const toggleModal = () => setModalOpen(prev => (prev ? false : true))

    return (
        <ProjectContext.Provider value={{modalOpen, toggleModal}}>
            {children}
        </ProjectContext.Provider>
    )
}

export const useModal = () => {
    return useContext(ProjectContext)
}