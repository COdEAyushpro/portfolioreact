import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa"; // 👈 install react-icons first

const Footer = () => {
  return (
    <footer className="py-4">
      <div className="container text-center">
        <p className="mb-2">© {new Date().getFullYear()} Ayush Sisodia | All Rights Reserved</p>

        <div>
          <a
            href="https://www.linkedin.com/in/ayush-sisodia-48b46326b/"
            target="_blank"
            rel="noopener noreferrer"
            className="mx-3 text-decoration-none"
            style={{ color: "#0a66c2", fontSize: "1.8rem" }}
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/COdEAyushpro"
            target="_blank"
            rel="noopener noreferrer"
            className="mx-3 text-decoration-none"
            style={{ color: "#fff", fontSize: "1.8rem" }}
          >
            <FaGithub />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
