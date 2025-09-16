import FourthGen from './assets/fourth-gen-decorating.png';
import Christopher from './assets/christopher-william-building-solutions.png'
import Ultra from './assets/ultra-hr.png'
import RetailReport from './assets/retail-report.png'
import Itvet from './assets/itvet.png'
import Horizonhobby from './assets/horizonhobby.png'

const Projects = () => {
    return (
        <>
         <section className=" p-4 flex flex-col gap-3 items-center">
            <h1 className="text-center text-4xl font-bold">Projects Personal and Commercial</h1>
            <hr className="hr-underline mt-6 mb-6 min-w-[580px] rounded-sm" />
            <p className="text-center leading-[1.8rem] text-gray-700 pl-2 pr-2">Here are some of the projects I’ve been apart of over the years in either front end development, project management or UI/UX Design aspect. Along with some of my personal projects to sharpen and build my skillset.</p>
            <article className="grid grid-cols-9 gap-8 mb-10 max-w-6xl">
                <div className="col-span-3">
                    <img src={FourthGen} alt="" className='drop-shadow-lg overflow-hidden rounded-1xl' />
                </div>
                <div className="col-span-6">
                    <h3 className="text-xl font-bold mb-1 text-left">4th Generation Decorating</h3>
                    <p className="leading-[1.8rem] text-gray-700" >For this project, I designed and developed a WordPress website for a father-and-son painting and decorating business. Starting with agreed wireframes, I created a clean, bright design that captured their brand identity. WordPress provided the flexibility for them to update their own content, including galleries and contact details, without relying on ongoing support. To keep the build efficient and easy to maintain, I used SCSS for styling and chose InfinityFree as a cost-effective hosting solution. The contact form was set up with Contact Form 7 and integrated with Brevo to ensure reliable email delivery.</p>
                    <div className="flex flex-wrap gap-3 pt-3 pb-3">
                        <a href="#" target="_blank" className="bg-blue-500 hover:bg-blue-400 text-white rounded-3xl pt-1 pb-1 pl-3 pr-3">Visit the Website</a>
                        <a href="#" target="_blank" className="bg-blue-500 hover:bg-blue-400 text-white rounded-3xl pt-1 pb-1 pl-3 pr-3">View GitHub Repo</a>
                    </div>
                    <h4>Skills and Tools</h4>
                    <ul className="flex flex-wrap gap-3 pt-4">
                        <li className="border-gray-300 border-2 pt-1 pb-1 pl-3 pr-3 rounded-3xl text-sm">Wordpress</li>
                        <li className="border-gray-300 border-2 pt-1 pb-1 pl-3 pr-3 rounded-3xl text-sm">ACF</li>
                        <li className="border-gray-300 border-2 pt-1 pb-1 pl-3 pr-3 rounded-3xl text-sm">Wordfence</li>
                        <li className="border-gray-300 border-2 pt-1 pb-1 pl-3 pr-3 rounded-3xl text-sm">Contact From 7</li>
                        <li className="border-gray-300 border-2 pt-1 pb-1 pl-3 pr-3 rounded-3xl text-sm">Web Design</li>
                        <li className="border-gray-300 border-2 pt-1 pb-1 pl-3 pr-3 rounded-3xl text-sm">Responisve Web Design</li>
                        <li className="border-gray-300 border-2 pt-1 pb-1 pl-3 pr-3 rounded-3xl text-sm">Javascript</li>
                        <li className="border-gray-300 border-2 pt-1 pb-1 pl-3 pr-3 rounded-3xl text-sm">HTML</li>
                        <li className="border-gray-300 border-2 pt-1 pb-1 pl-3 pr-3 rounded-3xl text-sm">CSS</li>
                        <li className="border-gray-300 border-2 pt-1 pb-1 pl-3 pr-3 rounded-3xl text-sm">InfinityFree</li>
                        <li className="border-gray-300 border-2 pt-1 pb-1 pl-3 pr-3 rounded-3xl text-sm">Brevo</li>
                        <li className="border-gray-300 border-2 pt-1 pb-1 pl-3 pr-3 rounded-3xl text-sm">DNS Management</li>
                        <li className="border-gray-300 border-2 pt-1 pb-1 pl-3 pr-3 rounded-3xl text-sm">Figma</li>
                        <li className="border-gray-300 border-2 pt-1 pb-1 pl-3 pr-3 rounded-3xl text-sm">Git</li>
                        <li className="border-gray-300 border-2 pt-1 pb-1 pl-3 pr-3 rounded-3xl text-sm">GitHub</li>
                    </ul>
                </div>
            </article> 
            <article className="grid grid-cols-3 gap-8 mb-10 items-center max-w-6xl">
                <div>
                    <img src={Christopher} alt="" className='drop-shadow-lg overflow-hidden rounded-1xl' />
                </div>
                <div className="col-span-2">
                    <h3 className="text-xl font-bold mb-1 text-left">Christopher William - Building Solutions</h3>
                    <p className="leading-[1.8rem] text-gray-700">For Christopher William Building Solutions, I designed a website and full brand identity from the ground up. With no existing assets, I created a traditional look using clean fonts and a red-and-black colour scheme, paired with architectural motifs to reflect their bespoke work. I also designed the logo, inspired by architectural plans, to strengthen the professional tone. The site was built as a flat-file website, hosted on Netlify for simplicity, with an external service handling the contact form and reCAPTCHA security. Special attention was given to metadata to ensure the site displayed cleanly when saved to a mobile home screen.</p>
                    <div className="flex flex-wrap gap-3 pt-3 pb-3">
                        <a href="#" target="_blank" className="bg-blue-500 hover:bg-blue-400 text-white rounded-3xl pt-1 pb-1 pl-3 pr-3">Visit the Website</a>
                        <a href="#" target="_blank" className="bg-blue-500 hover:bg-blue-400 text-white rounded-3xl pt-1 pb-1 pl-3 pr-3">View GitHub Repo</a>
                    </div>
                    <h4>Skills and Tools</h4>
                    <ul className="flex flex-wrap gap-3 pt-4">
                        <li className="border-gray-300 border-2 pt-1 pb-1 pl-3 pr-3 rounded-3xl text-sm">Graphic Design</li>
                        <li className="border-gray-300 border-2 pt-1 pb-1 pl-3 pr-3 rounded-3xl text-sm">Web Design</li>
                        <li className="border-gray-300 border-2 pt-1 pb-1 pl-3 pr-3 rounded-3xl text-sm">Responisve Web Design</li>
                        <li className="border-gray-300 border-2 pt-1 pb-1 pl-3 pr-3 rounded-3xl text-sm">Javascript</li>
                        <li className="border-gray-300 border-2 pt-1 pb-1 pl-3 pr-3 rounded-3xl text-sm">HTML</li>
                        <li className="border-gray-300 border-2 pt-1 pb-1 pl-3 pr-3 rounded-3xl text-sm">CSS</li>
                        <li className="border-gray-300 border-2 pt-1 pb-1 pl-3 pr-3 rounded-3xl text-sm">Netlify</li>
                        <li className="border-gray-300 border-2 pt-1 pb-1 pl-3 pr-3 rounded-3xl text-sm">DNS Management</li>
                        <li className="border-gray-300 border-2 pt-1 pb-1 pl-3 pr-3 rounded-3xl text-sm">Figma</li>
                        <li className="border-gray-300 border-2 pt-1 pb-1 pl-3 pr-3 rounded-3xl text-sm">Git</li>
                        <li className="border-gray-300 border-2 pt-1 pb-1 pl-3 pr-3 rounded-3xl text-sm">GitHub</li>
                    </ul>
                </div>
            </article> 
            <article className="grid grid-cols-3 mb-10 content-center max-w-6xl">
                <div>
                    Picture of Lion
                </div>
                <div className="col-span-2">
                    <h3 className="text-xl font-bold mb-1 text-left">Publishing Company – Label Generator Tool (Lion)</h3>
                    <p className="leading-[1.8rem] text-gray-700">For a publishing company, I developed a standalone tool to automate the creation of address labels from CSV files directly from the order section of their website. Previously, staff had to re-enter data manually, a time-consuming and error-prone process. The web-based system, hosted locally on their machine, allowed them to upload CSV files, review a summary of the data, and generate formatted labels ready for printing on standard Avery sheets. By removing the need for internet access or third-party tools, this project streamlined a repetitive task, improved accuracy, and delivered a simple, efficient offline solution.</p>
                    <div className="pt-3 pb-3">
                        <a href="#" target="_blank" className="bg-blue-500 hover:bg-blue-400 text-white rounded-3xl pt-1 pb-1 pl-3 pr-3">View GitHub Repo</a>
                    </div>
                    <h4>Skills and Tools</h4>
                    <ul className="flex flex-wrap gap-3 pt-4">
                        <li className="border-gray-300 border-2 pt-1 pb-1 pl-3 pr-3 rounded-3xl text-sm">Web Design</li>
                        <li className="border-gray-300 border-2 pt-1 pb-1 pl-3 pr-3 rounded-3xl text-sm">jQuery</li>
                        <li className="border-gray-300 border-2 pt-1 pb-1 pl-3 pr-3 rounded-3xl text-sm">HTML</li>
                        <li className="border-gray-300 border-2 pt-1 pb-1 pl-3 pr-3 rounded-3xl text-sm">CSS</li>
                    </ul>
                </div>
            </article> 
            <article className="grid grid-cols-3 gap-8 mb-10 items-center max-w-6xl">
                <div>
                    <img src={Ultra} alt="" className='drop-shadow-lg overflow-hidden rounded-1xl' />
                </div>
                <div className="col-span-2">
                    <h3 className="text-xl font-bold mb-1 text-left">Ultra HR - HR Management System</h3>
                    <p className="leading-[1.8rem] text-gray-700">Ultra HR was a management tool covering holidays, expenses, reviews, and performance tracking. I began by creating screen designs with the HR team and later acted as the bridge between developers and stakeholders. The first version, built in C#, saw me working on front-end design and UI improvements. A second, modernised version used Angular and a microservices architecture, where I led UI/UX design. I later moved into product ownership, writing technical specifications and working with the CTO to introduce AI features that streamlined performance reviews. Though no longer active, the project was a key learning experience.</p>
                    <div className="pt-3 pb-3">
                        <a href="#" target="_blank" className="bg-gray-500 text-white rounded-3xl pt-1 pb-1 pl-3 pr-3" title="Prject no longer exists">Visit the Website</a>
                    </div>
                    <h4>Skills and Tools</h4>
                    <ul className="flex flex-wrap gap-3 pt-4">
                        <li className="border-gray-300 border-2 pt-1 pb-1 pl-3 pr-3 rounded-3xl text-sm">Web Design</li>
                        <li className="border-gray-300 border-2 pt-1 pb-1 pl-3 pr-3 rounded-3xl text-sm">jQuery</li>
                        <li className="border-gray-300 border-2 pt-1 pb-1 pl-3 pr-3 rounded-3xl text-sm">HTML</li>
                        <li className="border-gray-300 border-2 pt-1 pb-1 pl-3 pr-3 rounded-3xl text-sm">CSS</li>
                    </ul>
                </div>
            </article> 
            <article className="grid grid-cols-3 gap-8 mb-10 items-center max-w-6xl">
                <div>
                    <img src={RetailReport} alt="" className='drop-shadow-lg overflow-hidden rounded-1xl' />
                </div>
                <div className="col-span-2">
                    <h3 className="text-xl font-bold mb-1 text-left">Retail Report - Application</h3>
                    <p className="leading-[1.8rem] text-gray-700">Retail Report was a management tool for shopping centres, designed to provide insights and practical tools for day-to-day operations. I began as a front-end developer, building new features, maintaining the codebase, and fixing issues. Over time, I worked with the product manager to design client-specific tools, ensuring requirements were met and workflows were efficient. Later, I shifted into a strategic role, creating product roadmaps, estimating development timelines, and presenting future plans at internal events. I also supported sales and stakeholder discussions by aligning technical feasibility with business goals.</p>
                    <div className="pt-3 pb-3">
                        <a href="#" target="_blank" className="bg-gray-500 text-white rounded-3xl pt-1 pb-1 pl-3 pr-3" title="Prject no longer exists">Visit the Website</a>
                    </div>
                    <h4>Skills and Tools</h4>
                    <ul className="flex flex-wrap gap-3 pt-4">
                        <li className="border-gray-300 border-2 pt-1 pb-1 pl-3 pr-3 rounded-3xl text-sm">Leadership</li>
                        <li className="border-gray-300 border-2 pt-1 pb-1 pl-3 pr-3 rounded-3xl text-sm">Team Development</li>
                        <li className="border-gray-300 border-2 pt-1 pb-1 pl-3 pr-3 rounded-3xl text-sm">Application Scoping & Planning</li>
                        <li className="border-gray-300 border-2 pt-1 pb-1 pl-3 pr-3 rounded-3xl text-sm">Cross-Department Collaboration</li>
                        <li className="border-gray-300 border-2 pt-1 pb-1 pl-3 pr-3 rounded-3xl text-sm">ISO Policy Development</li>
                        <li className="border-gray-300 border-2 pt-1 pb-1 pl-3 pr-3 rounded-3xl text-sm">Department System Development</li>
                        <li className="border-gray-300 border-2 pt-1 pb-1 pl-3 pr-3 rounded-3xl text-sm">Web Design</li>
                        <li className="border-gray-300 border-2 pt-1 pb-1 pl-3 pr-3 rounded-3xl text-sm">Responsive Design</li>
                        <li className="border-gray-300 border-2 pt-1 pb-1 pl-3 pr-3 rounded-3xl text-sm">jQuery</li>
                        <li className="border-gray-300 border-2 pt-1 pb-1 pl-3 pr-3 rounded-3xl text-sm">HTML</li>
                        <li className="border-gray-300 border-2 pt-1 pb-1 pl-3 pr-3 rounded-3xl text-sm">CSS</li>
                    </ul>
                </div>
            </article> 
            <article className="grid grid-cols-3 gap-8 mb-10 items-center max-w-6xl">
                <div>
                    <img src={Itvet} alt="" className='drop-shadow-lg overflow-hidden rounded-1xl' />
                </div>
                <div className="col-span-2">
                    <h3 className="text-xl font-bold mb-1 text-left">ITVET</h3>
                    <p className="leading-[1.8rem] text-gray-700">At ITVET, I developed and maintained the company’s marketing website on the WordPress platform, working with the marketing team to optimise usability and SEO. Beyond day-to-day updates, I created a custom plugin that integrated with the Ultra HR recruitment module. This allowed job listings to be published directly on the site, each with its own tailored application form. Applicants could also update submissions post-application, improving the user experience. The project balanced technical development with cross-department collaboration, ensuring the site supported both marketing and HR goals.</p>
                    <h4>Skills and Tools</h4>
                    <ul className="flex flex-wrap gap-3 pt-4">
                        <li className="border-gray-300 border-2 pt-1 pb-1 pl-3 pr-3 rounded-3xl text-sm">Responsive Design</li>
                        <li className="border-gray-300 border-2 pt-1 pb-1 pl-3 pr-3 rounded-3xl text-sm">Wordpress</li>
                        <li className="border-gray-300 border-2 pt-1 pb-1 pl-3 pr-3 rounded-3xl text-sm">WordPress Plugin Development</li>
                        <li className="border-gray-300 border-2 pt-1 pb-1 pl-3 pr-3 rounded-3xl text-sm">API Integration</li>
                        <li className="border-gray-300 border-2 pt-1 pb-1 pl-3 pr-3 rounded-3xl text-sm">jQuery</li>
                        <li className="border-gray-300 border-2 pt-1 pb-1 pl-3 pr-3 rounded-3xl text-sm">HTML</li>
                        <li className="border-gray-300 border-2 pt-1 pb-1 pl-3 pr-3 rounded-3xl text-sm">CSS</li>
                        <li className="border-gray-300 border-2 pt-1 pb-1 pl-3 pr-3 rounded-3xl text-sm">PHP</li>
                    </ul>
                </div>
            </article> 
            <article className="grid grid-cols-3 gap-8 mb-10 items-center max-w-6xl">
                <div>
                    <img src={Horizonhobby} alt="" className='drop-shadow-lg overflow-hidden rounded-1xl' />
                </div>
                <div className="col-span-2">
                    <h3 className="text-xl font-bold mb-1 text-left">Horizon Hobby UK</h3>
                    <p className="leading-[1.8rem] text-gray-700">At Horizon Hobby UK, I managed the development and maintenance of their flat-file marketing website for premium RC products. I introduced forward-looking practices at the time, such as responsive design and SEO optimisation, ensuring the site kept pace with emerging trends. My role also included building new sections, fixing bugs, and streamlining maintenance. Working with graphic designers, I integrated social media platforms and supported marketing with YouTube sizzle videos. I also implemented Google Analytics to track user journeys and guide future improvements.</p>
                    <h4>Skills and Tools</h4>
                    <ul className="flex flex-wrap gap-3 pt-4">
                        <li className="border-gray-300 border-2 pt-1 pb-1 pl-3 pr-3 rounded-3xl text-sm">Website Usability, SEO & Browser Compatibility</li>
                        <li className="border-gray-300 border-2 pt-1 pb-1 pl-3 pr-3 rounded-3xl text-sm">Site Testing, Debugging & Error Resolution</li>
                        <li className="border-gray-300 border-2 pt-1 pb-1 pl-3 pr-3 rounded-3xl text-sm">WordPress Plugin Development</li>
                        <li className="border-gray-300 border-2 pt-1 pb-1 pl-3 pr-3 rounded-3xl text-sm">Front-End Development (HTML, CSS, JavaScript)</li>
                        <li className="border-gray-300 border-2 pt-1 pb-1 pl-3 pr-3 rounded-3xl text-sm">jQuery</li>
                        <li className="border-gray-300 border-2 pt-1 pb-1 pl-3 pr-3 rounded-3xl text-sm">Designer & Developer Collaboration</li>
                    </ul>
                </div>
            </article> 
         </section>
         
        </>
    )
}

export default Projects