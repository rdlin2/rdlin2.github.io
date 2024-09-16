
import { HashRouter as Router,Route,Routes} from 'react-router-dom';
import About from './pages/About.jsx'
import WorkExperience from './pages/WorkExperience.jsx';
import Projects from './pages/Projects.jsx';
import Contact from './pages/Contact.jsx';
import Assignments from './pages/Assignments.jsx';
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
