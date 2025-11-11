import Header from './components/header/header.jsx';
import Hero from './components/hero/hero.jsx';
import Skills from './components/skills/skills.jsx';
import About from './components/about/about.jsx';
import Experience from './components/experience/experiences.jsx';
import Projects from './components/projects/projects.jsx';
import Contact from './components/contact/contact.jsx'
import Footer from './components/footer/footer.jsx'
import { useModal } from './components/context/context.jsx';

const Porfolio = () => {

    const { modalOpen } = useModal()
    
    return(
        <div className={modalOpen ? "modal-open" : "modal-closed"}>
            <Header />
            <Hero />
            <Skills />
            <About />
            <Experience />
            <Projects />
            <Contact />
            <Footer />
        </div>
    )
}

export default Porfolio