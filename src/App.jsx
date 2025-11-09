import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./sections/Home";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Certificates from "./sections/Certificates";
import Resume from "./sections/Resume";
import Contact from "./sections/Contact";
import Qualification from "./sections/Qualification";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Qualification />
      <Skills />
      <Projects />
      <Certificates />
      <Resume />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
