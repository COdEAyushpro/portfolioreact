import React from "react";

const Resume = () => {
  return (
    <section
      id="resume"
      style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1522071820081-009f0129c71c')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        color: "#fff",
        padding: "60px 0",
      }}
    >
      <div className="container text-center">
        <h2 className="mb-4">My Resume</h2>

        {/* Resume Summary */}
        <div className="card bg-dark bg-opacity-75 text-start p-4 mb-4">
          <h4 className="text-info">Summary</h4>
          <p>
            Enthusiastic and detail-oriented Computer Science graduate with strong skills in
            Python, and Web Development (React, HTML, CSS, Bootstrap). Passionate about
            building responsive, user-friendly applications and eager to start a professional
            journey in software or web development.
          </p>
        </div>

        
        <div className="card bg-dark bg-opacity-75 text-start p-4 mb-4">
          <h4 className="text-info">Education</h4>
          <ul>
            <li>
              <b>B.Tech in Computer Science Engineering</b> — 2021–2025<br />
              Moradabad Institute of Technology
            </li>
            <li>
              <b>Intermediate (PCM)</b> — 2019–2021<br />
              Pushp Niketan Senior Secondary School
            </li>
          </ul>
        </div>

        {/* Experience Section */}
        <div className="card bg-dark bg-opacity-75 text-start p-4 mb-4">
          <h4 className="text-info">Experience</h4>
          <p>
            <b>Internship (Web Development)</b> — Remote<br />
            Developed multiple front-end projects using React and Bootstrap. Created reusable
            UI components, optimized performance, and improved user interactivity.
          </p>
        </div>

        {/* Skills Section */}
        <div className="card bg-dark bg-opacity-75 text-start p-4 mb-4">
          <h4 className="text-info">Key Skills</h4>
          <ul className="row">
            <li className="col-md-4">Python</li>
            <li className="col-md-4">React.js</li>
            <li className="col-md-4">HTML & CSS</li>
            <li className="col-md-4">Bootstrap</li>
            <li className="col-md-4">Java</li>
            <li className="col-md-4">Git & GitHub</li>
          </ul>
        </div>

        {/* Resume PDF and Download */}
        <div className="bg-dark bg-opacity-75 p-4 rounded">
          <iframe
            src="/resume.pdf"
            title="Resume PDF"
            width="100%"
            height="500px"
            style={{ border: "2px solid #00ccff", borderRadius: "10px" }}
          ></iframe>

          <a
            href="/resume.pdf"
            download="Ayush_Sisodia_Resume.pdf"
            className="btn btn-info mt-3"
          >
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default Resume;
