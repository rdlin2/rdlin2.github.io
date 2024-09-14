import { useState } from 'react'
// import {React} from 'react'
import { HashRouter as Router,Route,Switch,Link} from 'react-router-dom';
import About from './pages/ ';
import WorkExperience from './pages/WorkExperience ';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Assignments from './pages/Assignments ';


import './App.css'

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li><Link to=""></Link></li>
            <li><Link to=""></Link></li>
            <li><Link to=""></Link></li>
            <li><Link to=""></Link></li>
            <li><Link to=""></Link></li>
          </ul>
        </nav>
        <Switch>
          <Route exact path ="/" component={About}/>
          <Route path ="/work-experience" component={WorkExperience}/>
          <Route path ="/projects" component={Projects}/>
          <Route path ="/contact" component={Contact}/>
          <Route path ="/assignments" component={Assignments}/>
        </Switch>
      </div>
    </Router>
  )
}

export default App
