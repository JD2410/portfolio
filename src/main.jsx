import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { ProjectProvider } from './components/context/context.jsx';
import Porfolio from './app.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ProjectProvider>
      <Porfolio />
    </ProjectProvider>
  </StrictMode>,
)