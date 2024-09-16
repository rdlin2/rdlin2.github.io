
import { HashRouter as Router,Route,Routes} from 'react-router-dom';
import About from './pages/About.jsx'
import WorkExperience from './pages/WorkExperience.js';
import Projects from './pages/Projects.js';
import Contact from './pages/Contact.js';
import Assignments from './pages/Assignments.js';
import NavBar from './components/Navbar.jsx';

import './App.css'


function App() {
  return (
    <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/work-experience" element={<WorkExperience />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/assignments" element={<Assignments />} />
        </Routes>
    </Router>
  )
}

export default App
