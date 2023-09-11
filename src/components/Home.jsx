import React from "react";

import Navbar from "../Navbar";

import Hero from "./Hero";
import About from "./About";
import Experience from "./experience";
import Contact from "./Contact";
import Projects from "./Projects";
import { Link } from "react-scroll";

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

      <footer>
        <nav>
          <div className="nav-links-container">
          <ul className="nav-links">
            <li>
              <Link smooth spy to="about">
                ABOUT
              </Link>
            </li>

            <li>
              <Link smooth spy to="projects">
                PROJECTS
              </Link>
            </li>
            <li>
              <Link smooth spy to="experience">
                EXPERIENCE
              </Link>
            </li>
            <li>
              <Link smooth spy to="contact">
                CONTACT
              </Link>
            </li>
          </ul>
          </div>
        </nav>
        <p>Copyright &#169; 2023 Joshua Toback. All Rights Reserved.</p>
      </footer>
    </div>
  );
}

export default Home;
