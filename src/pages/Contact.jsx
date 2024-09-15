import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-container">
      <h1>Contact Information</h1>
      <div className="contact-details">
        <div className="contact-item">
          <h2>Email</h2>
          <p><a href="mailto:rlin2@bu.edu">rlin2@bu.edu</a></p>
        </div>
        <div className="contact-item">
          <h2>LinkedIn</h2>
          <p><a href="https://www.linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">linkedin.com</a></p>
        </div>
        <div className="contact-item">
          <h2>GitHub</h2>
          <p><a href="https://github.com/rdlin2" target="_blank" rel="noopener noreferrer">github.com/rdlin2</a></p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
