import React from "react";

import flgl from "../assets/images/flgl.jpg";

import education from "../assets/education.png";
import experience from "../assets/experience.png";

import Arc from "../assets/images/Arc.png";
import CSM from "../assets/images/CSM.png";
import DR from "../assets/images/DR.png";
import Kris from "../assets/images/Kris.png";
import Monkima from "../assets/images/Monkima.png";
import NA from "../assets/images/NA.png";

function About() {
  const images = [Arc, CSM, DR, Kris, Monkima, NA];

  return (
    <div className="about">
      <p className="section__text__p1">Get To Know More</p>
      <p className="title">About Me</p>
      <div className="image-carousel"></div>
      <div className="section-container">
        <div className="about-details-container">
          <div className="about-containers">
            <div className="details-container">
              <img src={experience} alt="experience-icon" className="icon" />
              <h3>Experience</h3>
              <p>
                3+ Years <br /> Digital Artist
              </p>
            </div>
            <div className="details-container">
              <img src={education} alt="education-icon" className="icon" />
              <h3>Education</h3>
              <p>
                B.A Bachelor's Degree <br /> Ana G. Mendez University
              </p>
            </div>
          </div>
          <div className="text-container">
            <p className="about-text">
              Luis Luna is a digital artist and graphic designer based in the
              island of Puerto Rico that yearns for new experiences and learning
              opportunities. Starting in 2020 he has dedicated most of his time
              to improving his artistic skill set and style with the goal of one
              day creating his multiple pieces of art for a big project that
              will put his name out in the world. As an artist he specializes in
              character focused pieces and designs that put the attention on the
              subject as well as some experience in logo and visual design from
              his university studies setting the foundation for his works.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
