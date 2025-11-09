import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import Typewriter from "typewriter-effect";

const Home = () => {
  return (
    <section
      id="home"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1519389950473-47ba0277781c')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        color: "#fff",
        textAlign: "center",
      }}
    >
      <div className="container">
        <div className="p-5 bg-dark bg-opacity-75 rounded shadow-lg">
          <h1 className="fw-bold mb-3">Hi, I'm <span className="text-info">Ayush Sisodia</span></h1>

          <h4 className="mb-4">
            <Typewriter
              options={{
                strings: [
                  "Web Developer 💻",
                  "Python Developer 🐍",
                  "React Developer ⚛️",
                  "Future Software Engineer 🚀",
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </h4>

          <p className="lead mb-4">
            I’m passionate about building responsive, user-friendly web applications using
            React, Python, and modern web technologies. Let's collaborate to bring your ideas
            to life!
          </p>

          <div className="d-flex justify-content-center gap-3 mb-4">
            <a href="#contact" className="btn btn-info px-4">
              Hire Me
            </a>
          </div>

          <div className="d-flex justify-content-center gap-4">
            <a
             href="https://www.linkedin.com/in/ayush-sisodia-48b46326b/"
            
              target="_blank"
              rel="noopener noreferrer"
              className="text-info fs-3"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/COdEAyushpro"
              target="_blank"
              rel="noopener noreferrer"
              className="text-light fs-3"
            >
              <FaGithub />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
