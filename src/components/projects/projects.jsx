import "./modal.css"
import FourthGen from './assets/fourth-gen-decorating.png';
import Christopher from './assets/christopher-william-building-solutions.png'
import Ultra from './assets/ultra-hr.png'
import RetailReport from './assets/retail-report.png'
import Itvet from './assets/itvet.png'
import Horizonhobby from './assets/horizonhobby.png'
import LabelMaker from './assets/label-maker.png'
import ProjectDisplay from './project';
import Modal from "./modal";

const Projects = () => {
    const projectDetails = [
        {
            name: "4th Generation Decorating",
            image: FourthGen,
            description: "For this project, I designed and developed a WordPress website for a father-and-son painting and decorating business. Starting with agreed wireframes, I created a clean, bright design that captured their brand identity. WordPress provided the flexibility for them to update their own content, including galleries and contact details, without relying on ongoing support. To keep the build efficient and easy to maintain, I used SCSS for styling and chose InfinityFree as a cost-effective hosting solution. The contact form was set up with Contact Form 7 and integrated with Brevo to ensure reliable email delivery.",
            skills: ["Wordpress", "ACF", "Wordfence", "Contact From 7", "Web Design", "Responisve Web Design", "Javascript", "HTML", "CSS", "InfinityFree", "Brevo", "DNS Management", "Figma", "Git", "GitHub"],
            website: { 
                url: "https://4thgendecorating.com",
                active: true
            },
            roles: ["Web Designer", "Front End Developer"],
            date: "2025",
            github: "https://github.com/JD2410/fourth-generation-decoration"
        },
        {
            name: "Christopher William - Building Solutions",
            image: Christopher,
            description: "For Christopher William Building Solutions, I designed a website and full brand identity from the ground up. With no existing assets, I created a traditional look using clean fonts and a red-and-black colour scheme, paired with architectural motifs to reflect their bespoke work. I also designed the logo, inspired by architectural plans, to strengthen the professional tone. The site was built as a flat-file website, hosted on Netlify for simplicity, with an external service handling the contact form and reCAPTCHA security. Special attention was given to metadata to ensure the site displayed cleanly when saved to a mobile home screen.",
            skills: ["Graphic Design", "Web Design", "Responisve Web Design", "Javascript", "HTML", "CSS", "Netlify", "DNS Management", "Figma", "Git", "GitHub"],
            website: { 
                url: "https://cwbuilding-solutions.co.uk",
                active: true
            },
            roles: ["Graphic Designer", "Web Designer", "Front End Developer"],
            date: "2025",
            github: "https://github.com/JD2410/Christopher-Willliam-Website"
        },
        {
            name: "Publishing Company – Label Generator Tool (Lion)",
            image: LabelMaker,
            description: "For a publishing company, I developed a standalone tool to automate the creation of address labels from CSV files directly from the order section of their website. Previously, staff had to re-enter data manually, a time-consuming and error-prone process. The web-based system, hosted locally on their machine, allowed them to upload CSV files, review a summary of the data, and generate formatted labels ready for printing on standard Avery sheets. By removing the need for internet access or third-party tools, this project streamlined a repetitive task, improved accuracy, and delivered a simple, efficient offline solution.",
            skills: ["Web Design", "jQuery", "HTML", "CSS"],
            roles: ["Front End Developer"],
            date: "2020",
            github: "https://github.com/JD2410/Address-Label-Generator"
        },
        {
            name: "Ultra HR - HR Management System",
            image: Ultra,
            description: "Ultra HR was a management tool covering holidays, expenses, reviews, and performance tracking. I began by creating screen designs with the HR team and later acted as the bridge between developers and stakeholders. The first version, built in C#, saw me working on front-end design and UI improvements. A second, modernised version used Angular and a microservices architecture, where I led UI/UX design. I later moved into product ownership, writing technical specifications and working with the CTO to introduce AI features that streamlined performance reviews. Though no longer active, the project was a key learning experience.",
            skills: ["Web Design", "jQuery", "HTML", "CSS", "Project Management", "Team Management", "Azure DevOps", "SCRUM", "Agile Workflow", "Figma", "Adobe XD", "Adobe Photoshop", "Adobe Illustrator"],
            roles: ["Specification Writer", "UI/UX Designer", "Graphic Designer", "Product Owner", "Front End Developer"],
            date: "2019 - 2024",
            website: { 
                url: "#",
                active: false
            },
        },
        {
            name: "Retail Report - Application",
            image: RetailReport,
            description: "Retail Report was a management tool for shopping centres, designed to provide insights and practical tools for day-to-day operations. I began as a front-end developer, building new features, maintaining the codebase, and fixing issues. Over time, I worked with the product manager to design client-specific tools, ensuring requirements were met and workflows were efficient. Later, I shifted into a strategic role, creating product roadmaps, estimating development timelines, and presenting future plans at internal events. I also supported sales and stakeholder discussions by aligning technical feasibility with business goals.",
            skills: ["Leadership", "Team Development", "Application Scoping & Planning", "Cross-Department Collaboration", "ISO Policy Development", "Department System Development", "Web Design", "Responsive Design", "jQuery", "HTML", "CSS"],
            roles: ["UI/UX Designer", "Product Manager", "Front End Developer"],
            date: "2019 - 2024",
            website: { 
                url: "https://retailreport.com",
                active: true
            },
        },
        {
            name: "ITVET",
            image: Itvet,
            description: "At ITVET, I developed and maintained the company’s marketing website on the WordPress platform, working with the marketing team to optimise usability and SEO. Beyond day-to-day updates, I created a custom plugin that integrated with the Ultra HR recruitment module. This allowed job listings to be published directly on the site, each with its own tailored application form. Applicants could also update submissions post-application, improving the user experience. The project balanced technical development with cross-department collaboration, ensuring the site supported both marketing and HR goals.",
            skills: ["Responsive Design", "Wordpress", "WordPress Plugin Development", "API Integration", "jQuery", "HTML", "CSS"],
            roles: ["Front End Developer"],
            date: "2017 - 2021",
            website: { 
                url: "#",
                active: false
            },
        },
        {
            name: "Horizon Hobby UK",
            image: Horizonhobby,
            description: "At Horizon Hobby UK, I managed the development and maintenance of their flat-file marketing website for premium RC products. I introduced forward-looking practices at the time, such as responsive design and SEO optimisation, ensuring the site kept pace with emerging trends. My role also included building new sections, fixing bugs, and streamlining maintenance. Working with graphic designers, I integrated social media platforms and supported marketing with YouTube sizzle videos. I also implemented Google Analytics to track user journeys and guide future improvements",
            skills: ["Website Usability", "Front-End Development (HTML, CSS, JavaScript)", "SEO", "Browser Compatibility", "Site Testing", "Debugging & Error Resolution",  "jQuery", "Designer & Developer Collaboration"],
            website: { 
                url: "#",
                active: false
            },
            roles: ["Front End Developer"],
            date: "2010 - 2017",
        }
    ]

    return (
        <>
         <section className=" p-4 flex flex-col gap-3 items-center" id='projects'>
            <h1 className="text-center text-4xl font-bold">Projects Personal and Commercial</h1>
            <hr className="hr-underline mt-6 mb-6 w-[100%] lg:max-w-[580px] rounded-sm" />
            <p className="text-center leading-[1.8rem] text-gray-700 pl-2 pr-2 max-w-6xl">Here are some of the projects I’ve been apart of over the years in either front end development, project management or UI/UX Design aspect. Along with some of my personal projects to sharpen and build my skillset.</p>
            {projectDetails.map((ele, index) => (
                <ProjectDisplay project={ele} key={index}></ProjectDisplay>
            ))}
         </section>
         <div className='modal'>
            <Modal project={projectDetails[0]} />
         </div>
        </>
    )
}

export default Projects