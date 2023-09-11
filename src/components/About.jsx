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
      <div className="image-carousel">
      </div>
      <div className="section-container">
        <div className="about-details-container">
          <div className="about-containers">
            <div className="details-container">
              <img src={experience} alt="experience-icon" className="icon" />
              <h3>Experience</h3>
              <p>
                X+ Years <br /> Graphic Design
              </p>
            </div>
            <div className="details-container">
              <img src={education} alt="education-icon" className="icon" />
              <h3>Education</h3>
              <p>
                B.A Bachelor's Degree <br /> University
              </p>
            </div>
          </div>
          <div className="text-container">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed
              voluptas dolores eaque repellat magni ipsam enim beatae iusto,
              illum ab saepe nam, aliquam quidem ea rerum adipisci, incidunt
              praesentium assumenda.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
