import React from "react";

import Navbar from "../Navbar";

import Hero from "./Hero";
import About from "./About";
import Experience from "./experience";
import Contact from "./contact";
import Projects from "./Projects";

function Home() {
  return (
    <div>
      <Navbar />

      <section id="hero">
        <Hero />
      </section>
      <section id="about">
        <About />
      </section>

      <section id="projects">
        <Projects />
      </section>

      <section id="experience">
        <Experience />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </div>
  );
}

export default Home;
