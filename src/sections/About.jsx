import React from "react";

const About = () => (
  <section id="about" style={{ color: "#ffcc00" }}>  {/* 👈 custom text color */}
    <div className="container">
      <h2 style={{ color: "#00ccff" }}>About Me</h2>
      <p className="mt-4 mx-auto" style={{ maxWidth: "700px" }}>
        I’m a passionate web developer who enjoys building beautiful and efficient websites.
        I’ve completed my B.Tech and work with Java, Python, React, HTML, and CSS.
        My projects include <b>Shareway</b> and a <b>Netflix Clone</b>.
      </p>
    </div>
  </section>
);

export default About;

