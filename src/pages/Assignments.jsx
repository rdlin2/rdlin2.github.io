
import './Assignments.css';

const assignments = [
  {
    title: 'Assignment 1',
    description: 'A brief description of the first assignment.',
    githubLink: 'https://github.com/yourusername/assignment1'
  },
  {
    title: 'Assignment 2',
    description: 'A brief description of the second assignment.',
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
