import './experience.css';
import Exp from "./experience"
const Experience = () => {
    const itvet = [
        {
            date: "Apr 2024 - Feb 2025",
            title: "Product Manager/Owner",
            description: "Translated client requirements into actionable plans and coordinated timelines and specifications with the development team. Collaborated with the admin team to align expectations, minimise scope creep, and maintain cohesion between teams. Presented new ideas and development strategies to the company, supporting both project success and long-term growth initiatives.",
            skills: ["Leadership & Team Development", "Application Scoping & Planning", "Cross-Department Collaboration", "ISO Policy Development & Compliance", "Development Systems Management"]
        },
        {
            date: "Feb 2023 - Apr 2024",
            title: "Senior Graphic Designer",
            description: "Designed creative assets while collaborating with the Product Owner to develop new features. Created wireframes, visual designs, and detailed specifications for handoff to development teams across multiple products, ensuring clarity, usability, and alignment with project goals. Along with my graphic design role, I was leading research into the market and assesing the landscape in comparison with the current products. Offering suggestions for new features and assessing where the product sat in the market",
            skills: ["Scrum Master & Agile Planning", "Project Management", "Figma", "Prototyping & Specification Writing", "Stakeholder Collaboration", "Product Ownership", "Graphic & UI/UX Design", "Azure DevOps", "Market Research"]
        },
        {
            date: "Apr 2019 - Feb 2023",
            title: "Graphic Designer & Developer",
            description: "Primary responsibility was designing the general look and feel of the new products and new features for the existing products. Maintaining all my responsibilities as a front end developer and heping the junior members of the team climatise to the new applications and assisting in code reviews for any front end development.",
            skills: ["Junior Developer Oversight", "Product Owner Collaboration", "Graphic & UI/UX Design", "Adobe Photoshop & Adobe XD", "Front-End & Design Collaboration"]
        },
        {
            date: "Sep 2017 - Apr 2019",
            title: "Front End Developer",
            description: "Responsible for managing and developing marketing websites both in Wordpress and MVC application. Implementing new features within the application implementing new libraries and business logic. Using a bespoke internal ticketing system to manage my time kept all tasks on schedule. Implementing bespoke website designs for clients' marketing based on an existing bespoke CMS system.",
            skills: ["Time Management", "HTML", "CSS", "JavaScript", "jQuery", "MVC Frameworks", "WordPress Plugin Development", "WordPress Theme Management", "Designer & Developer Collaboration", "Translating Client Designs"]
        }
    ]
    const hhuk = [
        {
            date: "Sep 2017 - Apr 2019",
            title: "Front End Developer",
            description: "Responsible for various tasks but focused primarily on web development of the B2C website and content administration of the B2B website. Producing promotional videos for web, YouTube and in-store marketing. I’m also responsible for researching and implementing any and all digital media initiatives.",
            skills: ["Time Management", "HTML", "CSS", "JavaScript", "jQuery", "MVC Frameworks", "WordPress Plugin Development", "WordPress Theme Management", "Designer & Developer Collaboration", "Translating Client Designs"]
        }
    ]
    return (
        <>
        <section className="p-4 flex flex-col gap-3 items-center">
            <h1 className="text-left text-2xl md:text-4xl w-[100%] sm:w-auto sm:text-center font-bold">Experience</h1>
            <hr className="hr-underline mt-1 mb-1 sm:mt-5 sm:mb-5 w-[100%] sm:max-w-[200px] rounded-sm" />
            <p className="text-left w-[100%] sm:w-auto sm:text-center mb-4 ">Where I’ve been and the skills and tools I’ve learnt</p>
            <div className='timeline relative pl-4'>
                 <div className='company relative'>
                    <span className='company-indicator'></span>
                    <h2 className="text-2xl font-bold ml-15">ITVET - Technology Solutions<span className="font-normal text-xl pl-4">2017 - 2025</span></h2>
                    <div className="max-w-6xl experience-list relative">
                        {itvet.map((ele, index) => (
                            <Exp key={index} experience={ele}></Exp>
                        ))}
                    </div>
                </div> 
                <div className="company relative">
                    <span className='company-indicator'></span>
                    <h2 className="text-2xl font-bold ml-15">Horizon Hobby UK<span className="font-normal text-xl pl-4">2006 - 2017</span></h2>
                <div className="max-w-6xl experience-list relative">
                    {hhuk.map((ele, index) => (
                        <Exp key={index} experience={ele}></Exp>
                    ))}
                </div>
                </div>
            </div>
           
        </section>
        </>
    )
}

export default Experience