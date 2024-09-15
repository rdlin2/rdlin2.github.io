import ProjectCard from '../components/ProjectCard';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      title: 'Project One',
      description: 'Brief description of Project One.',
      link: 'https://github.com/yourusername/project-one'
    },
    {
      title: 'Project Two',
      description: 'Brief description of Project Two.',
      link: 'https://github.com/yourusername/project-two'
    },

  ];

  return (
    <div className="projects-container">
      <h1>Projects</h1>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <ProjectCard 
            key={index}
            title={project.title}
            description={project.description}
            link={project.link}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
