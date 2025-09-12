import './experience.css';
const Experience = () => {
    return (
        <>
        <section className="p-4 flex flex-col gap-3 items-center">
            <h1 className="text-center text-4xl font-bold">Experience</h1>
            <hr className="hr-underline mt-6 mb-6 min-w-[200px] rounded-sm" />
            <p className="text-center mb-4">Where I’ve been and the skills and tools I’ve learnt</p>
            <h2 className="text-center text-2xl font-bold mb-8">ITVET - Technology Solutions<span className="block font-normal text-xl text-center">2017 - 2025</span></h2>
            <div className="max-w-6xl experience-list relative">
                <article className="pb-8 md:pl-[52%] relative">
                    <div className="absolute text-right w-[48%] left-0">
                        <p className="blue-gradient text-white pt-1 pr-3 pb-1 pl-3 inline-block rounded-2xl text-sm">Apr 2024 - Feb 2025</p>
                    </div>
                    <div className="timeline-indi"></div>
                    <h3 className="text-xl font-bold mb-1">Product Manager/Owner</h3>
                    <p className="pb-4 leading-[1.8rem] text-gray-700">Translated client requirements into actionable plans and coordinated timelines and specifications with the development team. Collaborated with the admin team to align expectations, minimize scope creep, and maintain cohesion between teams. Presented new ideas and development strategies to the company, supporting both project success and long-term growth initiatives.</p>
                    <ul className="flex flex-wrap gap-3 text-center">
                        <li className="border-blue-400 border-2 pt-1 pb-1 pl-3 pr-3 rounded-3xl text-sm">Leadership & Team Development</li>
                        <li className="border-blue-400 border-2 pt-1 pb-1 pl-3 pr-3 rounded-3xl text-sm">Application Scoping & Planning</li>
                        <li className="border-blue-400 border-2 pt-1 pb-1 pl-3 pr-3 rounded-3xl text-sm">Cross-Department Collaboration</li>
                        <li className="border-blue-400 border-2 pt-1 pb-1 pl-3 pr-3 rounded-3xl text-sm">ISO Policy Development & Compliance</li>
                        <li className="border-blue-400 border-2 pt-1 pb-1 pl-3 pr-3 rounded-3xl text-sm">Development Systems Management</li>
                    </ul>
                </article>
                <article className="pb-8 md:pr-[52%] relative">
                    <div className="absolute text-left w-[48%] right-0 ">
                        <p className="blue-gradient text-white pt-1 pr-3 pb-1 pl-3 inline-block rounded-2xl text-sm">Feb 2023 - Apr 2024</p>
                    </div>
                    <div className="timeline-indi"></div>
                    <h3 className="text-xl font-bold mb-1 text-right">Senior Graphic Designer</h3>
                    <p className="pb-4 leading-[1.8rem] text-gray-700 text-right">Designed creative assets while collaborating with the Product Owner to develop new features. Created wireframes, visual designs, and detailed specifications for handoff to development teams across multiple products, ensuring clarity, usability, and alignment with project goals. Along with my graphic design role, I was leading research into the market and assesing the landscape in comparison with the current products. Offering suggestions for new features and assessing where the product sat in the market</p>
                    <ul className="flex flex-wrap gap-3 text-center justify-end">
                        <li className="border-blue-400 border-2 pt-1 pb-1 pl-3 pr-3 rounded-3xl text-sm">Scrum Master & Agile Planning</li>
                        <li className="border-blue-400 border-2 pt-1 pb-1 pl-3 pr-3 rounded-3xl text-sm">Project Management</li>
                        <li className="border-blue-400 border-2 pt-1 pb-1 pl-3 pr-3 rounded-3xl text-sm">Figma</li>
                        <li className="border-blue-400 border-2 pt-1 pb-1 pl-3 pr-3 rounded-3xl text-sm">Prototyping & Specification Writing</li>
                        <li className="border-blue-400 border-2 pt-1 pb-1 pl-3 pr-3 rounded-3xl text-sm">Stakeholder Collaboration</li>
                        <li className="border-blue-400 border-2 pt-1 pb-1 pl-3 pr-3 rounded-3xl text-sm">Product Ownership</li>
                        <li className="border-blue-400 border-2 pt-1 pb-1 pl-3 pr-3 rounded-3xl text-sm">Graphic & UI/UX Design</li>
                        <li className="border-blue-400 border-2 pt-1 pb-1 pl-3 pr-3 rounded-3xl text-sm">Azure DevOps</li>
                        <li className="border-blue-400 border-2 pt-1 pb-1 pl-3 pr-3 rounded-3xl text-sm">Market Research</li>
                    </ul>
                </article>
                <article className="pb-8 md:pl-[52%] relative">
                    <div className="absolute text-right w-[48%] left-0">
                        <p className="blue-gradient text-white pt-1 pr-3 pb-1 pl-3 inline-block rounded-2xl text-sm">Apr 2019 - Feb 2023</p>
                    </div>
                    <div className="timeline-indi"></div>
                    <h3 className="text-xl font-bold mb-1">Graphic Designer & Developer</h3>
                    <p className="pb-4 leading-[1.8rem] text-gray-700">Primary responsibility was designing the general look and feel of the new products and new features for the existing products. Maintaining all my responsibilities as a front end developer and heping the junior members of the team climatise to the new applications and assisting in code reviews for any front end development. </p>
                    <ul className="flex flex-wrap gap-3 text-center">
                        <li className="border-blue-400 border-2 pt-1 pb-1 pl-3 pr-3 rounded-3xl text-sm">Junior Developer Oversight</li>
                        <li className="border-blue-400 border-2 pt-1 pb-1 pl-3 pr-3 rounded-3xl text-sm">Product Owner Collaboration</li>
                        <li className="border-blue-400 border-2 pt-1 pb-1 pl-3 pr-3 rounded-3xl text-sm">Graphic & UI/UX Design</li>
                        <li className="border-blue-400 border-2 pt-1 pb-1 pl-3 pr-3 rounded-3xl text-sm">Adobe Photoshop & Adobe XD</li>
                        <li className="border-blue-400 border-2 pt-1 pb-1 pl-3 pr-3 rounded-3xl text-sm">Front-End & Design Collaboration</li>
                    </ul>
                </article>
                <article className="pb-8 md:pr-[52%] relative">
                    <div className="absolute text-left w-[48%] right-0 ">
                        <p className="blue-gradient text-white pt-1 pr-3 pb-1 pl-3 inline-block rounded-2xl text-sm">Sep 2017 - Apr 2019</p>
                    </div>
                    <div className="timeline-indi"></div>
                    <h3 className="text-xl font-bold mb-1 text-right">Front End Developer</h3>
                    <p className="pb-4 leading-[1.8rem] text-gray-700 text-right">Responsible for managing and developing marketing websites both in Wordpress and MVC application. Implementing new features within the application implementing new libraries and business logic. Using a bespoke internal ticketing system to manage my time kept all tasks on schedule. Implementing bespoke website designs for clients' marketing based on an existing bespoke CMS system.</p>
                    <ul className="flex flex-wrap gap-3 text-center justify-end">
                        <li className="border-blue-400 border-2 pt-1 pb-1 pl-3 pr-3 rounded-3xl text-sm">Time Management</li>
                        <li className="border-blue-400 border-2 pt-1 pb-1 pl-3 pr-3 rounded-3xl text-sm">HTML</li>
                        <li className="border-blue-400 border-2 pt-1 pb-1 pl-3 pr-3 rounded-3xl text-sm">CSS</li>
                        <li className="border-blue-400 border-2 pt-1 pb-1 pl-3 pr-3 rounded-3xl text-sm">JavaScript</li>
                        <li className="border-blue-400 border-2 pt-1 pb-1 pl-3 pr-3 rounded-3xl text-sm">jQuery</li>
                        <li className="border-blue-400 border-2 pt-1 pb-1 pl-3 pr-3 rounded-3xl text-sm">MVC Frameworks</li>
                        <li className="border-blue-400 border-2 pt-1 pb-1 pl-3 pr-3 rounded-3xl text-sm">WordPress Plugin Development</li>
                        <li className="border-blue-400 border-2 pt-1 pb-1 pl-3 pr-3 rounded-3xl text-sm">WordPress Theme Management</li>
                        <li className="border-blue-400 border-2 pt-1 pb-1 pl-3 pr-3 rounded-3xl text-sm">Designer & Developer Collaboration</li>
                        <li className="border-blue-400 border-2 pt-1 pb-1 pl-3 pr-3 rounded-3xl text-sm">Translating Client Designs</li>
                    </ul>
            </article>
            <div className='relative'>
                <div className="timeline-indi"></div>
            </div>
            </div>
            <h2 className="text-center text-2xl font-bold mt-8">Horizon Hobby UK<span className="block font-normal text-xl text-center">2006 - 2017</span></h2>
            <article className="pb-4 max-w-6xl text-center w-3xl">
                <div className="blue-gradient text-white pt-1 pr-3 pb-1 pl-3 rounded-2xl text-sm mb-8 inline-block">Sep 2017 - Apr 2019</div>
                <h3 className="text-xl font-bold mb-1">Web Developer / Videographer / Content Administrator</h3>
                <p className='pb-4 leading-[1.8rem] text-gray-700'>Responsible for various tasks but focused primarily on web development of the B2C website and content administration of the B2B website. Producing promotional videos for web, YouTube and in-store marketing. My resposibilities included: researching and implementing any and all digital media initiatives.</p>
                <ul className="flex flex-wrap gap-3 justify-center">
                    <li className="border-blue-400 border-2 pt-1 pb-1 pl-3 pr-3 rounded-3xl text-sm">Website Usability, SEO & Browser Compatibility</li>
                    <li className="border-blue-400 border-2 pt-1 pb-1 pl-3 pr-3 rounded-3xl text-sm">Site Testing, Debugging & Error Resolution</li>
                    <li className="border-blue-400 border-2 pt-1 pb-1 pl-3 pr-3 rounded-3xl text-sm">Front-End Development (HTML, CSS, JavaScript)</li>
                    <li className="border-blue-400 border-2 pt-1 pb-1 pl-3 pr-3 rounded-3xl text-sm">Social Media Management</li>
                    <li className="border-blue-400 border-2 pt-1 pb-1 pl-3 pr-3 rounded-3xl text-sm">Image Processing</li>
                    <li className="border-blue-400 border-2 pt-1 pb-1 pl-3 pr-3 rounded-3xl text-sm">Translating Designs to Websites</li>
                    <li className="border-blue-400 border-2 pt-1 pb-1 pl-3 pr-3 rounded-3xl text-sm">Print Layout and Design</li>
                    <li className="border-blue-400 border-2 pt-1 pb-1 pl-3 pr-3 rounded-3xl text-sm">Email Campaign Management (Mailchimp)</li>
                    <li className="border-blue-400 border-2 pt-1 pb-1 pl-3 pr-3 rounded-3xl text-sm">Film Editing</li>
                    <li className="border-blue-400 border-2 pt-1 pb-1 pl-3 pr-3 rounded-3xl text-sm">B2B Content Administration</li>
                </ul>
            </article>
        </section>
        </>
    )
}

export default Experience