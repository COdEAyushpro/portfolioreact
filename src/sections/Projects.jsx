import React from "react";

const Projects = () => {
  const projects = [
    {
      name: "CodingLabs ",
      desc: "Frontend: React.js (for interactive UI),Styling: Tailwind CSS / Bootstrap / CSS3",
      image: "data:image/png;base64,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", // sample icon
      link: "https://leaningplatform.vercel.app/", // change to your actual link
    },
    {
      name: "Netflix Clone",
      desc: "A Netflix front-end clone built using React, HTML, and CSS with responsive design and UI similar to Netflix.",
      image: "https://cdn-icons-png.flaticon.com/512/732/732228.png", // sample icon
      link: "https://netflixclon-nine.vercel.app/", // change to your actual link
    },
  ];

  return (
    <section id="projects" className="py-5 bg-light text-center">
      <div className="container">
        <h2 className="fw-bold mb-4">Projects</h2>
        <div className="row">
          {projects.map((p) => (
            <div className="col-md-6 mb-4" key={p.name}>
              <div className="card h-100 shadow-sm border-0">
                <img
                  src={p.image}
                  className="card-img-top"
                  alt={p.name}
                  style={{ height: "200px", objectFit: "contain", padding: "20px" }}
                />
                <div className="card-body">
                  <h5 className="card-title fw-bold">{p.name}</h5>
                  <p className="card-text">{p.desc}</p>
                  {p.link && (
                    <a
                      href={p.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-primary"
                    >
                      View Project
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
