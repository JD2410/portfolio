import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Header from './components/header/header.jsx';
import Hero from './components/hero/hero.jsx';
import Skills from './components/skills/skills.jsx';
import About from './components/about/about.jsx';
import Experience from './components/experience/experiences.jsx';
import Projects from './components/projects/projects.jsx';
import Contact from './components/contact/contact.jsx'
import Footer from './components/footer/footer.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header />
    <Hero />
    <Skills />
    <About />
    <Experience />
    <Projects />
    <Contact />
    <Footer />
  </StrictMode>,
)