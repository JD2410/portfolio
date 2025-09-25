
const Header = () => {
    return (
        <nav className="flex justify-center fixed w-[100%] left-0 pt-3 z-50">
            <div className="pl-6 pr-6 space-x-5 bg-white rounded-4xl flex shadow-lg">
                <a href="#" className="pt-2.5 pr-0.5 pb-2.5 pl-0.5 block">Home</a>
                <a href="#projects" className="pt-2.5 pr-0.5 pb-2.5 pl-0.5 block">Projects</a>
                <a href="#skills" className="pt-2.5 pr-0.5 pb-2.5 pl-0.5 block">Skills</a>
                <a href="#aboutme" className="pt-2.5 pr-0.5 pb-2.5 pl-0.5 block">About/Experience</a>
                <a href="#contactme" className="pt-2.5 pr-0.5 pb-2.5 pl-0.5 block">Contact</a>
            </div>
            
        </nav>
    )
}

export default Header