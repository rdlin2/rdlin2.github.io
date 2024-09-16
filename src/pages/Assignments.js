import './Assignments.css';

const assignments = [
  {
    title: 'Assignment 0',
    description: 'In this assignment I created a simple website using React. I made each section of the navbar its own separate page.',
    githubLink: 'https://github.com/rdlin2/rdlin2.github.io'
  },
  {
    title: 'Assignment 1',
    description: 'TBD',
    githubLink: 'https://github.com/yourusername/assignment2'
  },
  // Add more assignments as needed
];

const Assignments = () => {
  return (
    <div className="assignments-container">
      <h1>Assignments</h1>
      <div className="card-container">
        <div className="assignments-grid">
          {assignments.map((assignment, index) => (
            <div key={index} className="assignment-card">
              <h2 className="assignment-title">{assignment.title}</h2>
              <p className="assignment-description">{assignment.description}</p>
              <a href={assignment.githubLink} target="_blank" rel="noopener noreferrer" className="assignment-button">View on GitHub</a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Assignments;
