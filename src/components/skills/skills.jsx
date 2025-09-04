
const Skills = () => {
    const skillsList = [
        ["HTML", "Image"],
        ["CSS", "Image"],
        ["SCSS", "Image"],
        ["JavaScript", "Image"],
        ["jQuery", "Image"],
        ["PHP", "Image"],
        ["Bootstrap", "Image"],
        ["React", "Image"],
        ["Git", "Image"],
        ["GitHub", "Image"],
        ["WordPress", "Image"],
        ["SEO", "Image"],
        ["Agile", "Image"],
        ["SCRUM", "Image"],
        ["Figma", "Image"],
        ["Adobe Suite", "Image"],
        ["Affinity Studio", "Image"],
        ["Wireframing", "Image"],
        ["Graphic Design", "Image"],
        ["Responsive Web Design", "Image"],
        ["UI Design", "Image"],
        ["Web Development", "Image"],
        ["Netlify", "Image"],
        ["Product Ownership", "Image"],
    ]
    return (
        <>
            <h1 className="text-center">Skills & Tools</h1>
            <p className="text-center">Refined and developed over the years. Here are the languages, skills and tools I know.</p>
            <ul className="grid lg:grid-cols-7 md:grid-cols-4 grid-cols-2 gap-5 text-center p-4">
                {skillsList.map((element, index) => (
                    <li key={index} className="lg:h-[140px] lg:w-[140px] p-2 bg-gray-100 rounded-lg">{element[0]}</li>
                ))
            }
            </ul>
            
        </>
    )
}

export default Skills