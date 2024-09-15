import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => (
  <header>
    <div className="navbar-brand">My App</div>
    <nav className="navbar-links">
      <Link to="/">About</Link>
      <Link to="/work-experience">Work Experience</Link>
      <Link to="/projects">Projects</Link>
      <Link to="/contact">Contact</Link>
      <Link to="/assignments">Assignments</Link>
    </nav>
  </header>
);

export default Navbar;
