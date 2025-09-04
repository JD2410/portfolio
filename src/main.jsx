import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Header from './components/header/header.jsx';
import Hero from './components/hero/hero.jsx';
import Skills from './components/skills/skills.jsx';
import About from './components/about/about.jsx';
import Experience from './components/experience/experience.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header />
    <Hero />
    <Skills />
    <About />
    <Experience />
  </StrictMode>,
)