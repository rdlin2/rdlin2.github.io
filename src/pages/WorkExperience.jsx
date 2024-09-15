// import React from 'react';
import './WorkExperience.css'; // Import the CSS for Work Experience

const WorkExperience = () => (
  <div className="page-container">
    <h1>Work Experience</h1>
    <div className="work-experience-container">
      <div className="experience-card">
        <h2>Job Title 1</h2>
        <p className="company">Company Name</p>
        <p className="dates">Jan 2021 - Present</p>
        <p className="description">
          Detailed description of responsibilities and achievements. This section can include bullet points, but for simplicity, we use paragraphs.
        </p>
      </div>
      <div className="experience-card">
        <h2>Job Title 2</h2>
        <p className="company">Company Name</p>
        <p className="dates">Jun 2019 - Dec 2020</p>
        <p className="description">
          Detailed description of responsibilities and achievements.
        </p>
      </div>
      {/* Add more experience cards as needed */}
    </div>
  </div>
);

export default WorkExperience;
