import React from "react";

import FLGL from "../assets/images/luis.jpg"
import { Link } from "react-scroll";
import { SocialIcon } from "react-social-icons";

function Hero() {

  const LuisLinks = {
    twitter: "https://twitter.com/foolygh0uly",
    // email: "mailto:casting.openmicstudios@gmail.com",
    linkedin: "https://www.linkedin.com/in/luis-luna-9b5910267/"
  }
  return (
    <div className="section">
      <div className="section_pic-container">
        <img src={FLGL} alt="Luis Luna Profile Picture" />
      </div>
      <div className="section__text">
        <p className="section__text__p1">
          Hello, I'm
        </p>
        <h1 className="title">Luis Luna</h1>
        <p className="section__text__p2">Digital Artist and Graphic Designer</p>
        <div className="btn-container">
          <Link smooth spy to="projects"><button className="btn btn-color-1">Projects</button></Link>
          <Link smooth spy to="contact"><button className="btn btn-color-1">Contact</button></Link>
        </div>
        <div id="socials-container">
          <SocialIcon className="icon" url={LuisLinks.twitter} bgColor="#000" />
          <SocialIcon className="icon" url={LuisLinks.linkedin} bgColor="#000" />
        </div>
      </div>
    </div>
  );
}

export default Hero;
