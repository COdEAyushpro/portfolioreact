import React from "react";

const Skills = () => {
  const skills = ["HTML", "CSS", "JavaScript", "React", "Python", "Django", "Git"];
  return (
    <section id="skills" className="py-5 text-center">
      <div className="container">
        <h2 className="fw-bold mb-4">Skills</h2>
        <div className="row">
          {skills.map((skill) => (
            <div className="col-md-3 col-6 mb-3" key={skill}>
              <div className="card border-0 shadow-sm py-3">
                <h5>{skill}</h5>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
