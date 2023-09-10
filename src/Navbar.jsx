import React, { useState } from "react";
import { Link } from "react-scroll";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function toggleMenu() {
    setIsMenuOpen(!isMenuOpen);
  }

  const menuClass = isMenuOpen ? "menu-links.open" : "menu-links";

  return (
    <>
      <nav id="desktop-nav">
          <div className="logo">Luis Luna</div>
        <div>
          <ul className="nav-links">
            <li>
              <Link activeClass="active" smooth spy to="about">
                ABOUT
              </Link>
            </li>

            <li>
              <Link activeClass="active" smooth spy to="projects">
                PROJECTS
              </Link>
            </li>
            <li>
              <Link activeClass="active" smooth spy to="experience">
                EXPERIENCE
              </Link>
            </li>
            <li>
              <Link activeClass="active" smooth spy to="contact">
                CONTACT
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <nav id="hamburger-nav">
        <div className="hamburger-items">
          <div className="logo">Luis Luna</div>
          <div className="hamburger-menu">
            <div className={`hamburger-icon ${isMenuOpen ? "open" : ""}`} onClick={toggleMenu}>
              <span></span>
              <span></span>
              <span></span>
            </div>
            <ul className={menuClass}>
              <li>
                <Link
                  activeClass="active"
                  smooth
                  spy
                  to="about"
                  onClick={toggleMenu}
                >
                  ABOUT
                </Link>
              </li>

              <li>
                <Link
                  activeClass="active"
                  smooth
                  spy
                  to="projects"
                  onClick={toggleMenu}
                >
                  PROJECTS
                </Link>
              </li>
              <li>
                <Link
                  activeClass="active"
                  smooth
                  spy
                  to="experience"
                  onClick={toggleMenu}
                >
                  EXPERIENCE
                </Link>
              </li>
              <li>
                <Link
                  activeClass="active"
                  smooth
                  spy
                  to="contact"
                  onClick={toggleMenu}
                >
                  CONTACT
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
