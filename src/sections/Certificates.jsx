import React from "react";

const Certificate = () => {
  const certificates = [
    {
      title: "Python for Data Science",
      org: "Coursera",
      link: "https://www.coursera.org/account/accomplishments/certificate/example",
      download: "/certificates/python.pdf",
    },
    {
      title: "Frontend Development with React",
      org: "Meta",
      link: "https://www.coursera.org/account/accomplishments/certificate/example2",
      download: "/certificates/react.pdf",
    },
    {
      title: "Machine Learning Basics",
      org: "Google",
      link: "https://www.coursera.org/account/accomplishments/certificate/example3",
      download: "/certificates/ml.pdf",
    },
  ];

  return (
    <section
      id="certificates"
      style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1503676260728-1c00da094a0b')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        padding: "60px 0",
        color: "#fff",
      }}
    >
      <div className="container text-center">
        <h2 className="mb-4 text-info">My Certifications</h2>
        <p className="mb-5">
          Here are some of my verified certifications that showcase my technical learning and
          achievements.
        </p>

        <div className="row">
          {certificates.map((cert, index) => (
            <div key={index} className="col-md-4 mb-4">
              <div className="card bg-dark bg-opacity-75 text-light h-100 shadow-lg border-0">
                <div className="card-body">
                  <h5 className="card-title text-info">{cert.title}</h5>
                  <p className="card-text">Issued by {cert.org}</p>
                </div>
                <div className="card-footer bg-transparent border-0 d-flex justify-content-around">
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline-info btn-sm"
                  >
                    View
                  </a>
                  <a href={cert.download} download className="btn btn-info btn-sm">
                    Download
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Optional: Other Achievements Section */}
        <div className="mt-5">
          <h4 className="text-info mb-3">Other Achievements</h4>
          <ul className="list-unstyled">
            <li>🏆 Hackathon Participant — Smart India Hackathon 2024</li>
            <li>💻 Solved 100+ coding problems on LeetCode</li>
            <li>🌐 Built and deployed multiple full-stack projects using React and Django</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Certificate;
