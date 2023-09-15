import React, { useState, useEffect } from "react";
import Arc from "../assets/images/Arc.png";
import CSM from "../assets/images/CSM.png";
import DR from "../assets/images/DR.png";
import GWitch from "../assets/images/G-Witch_Red_birthmark_Piece.png";
import Kafka from "../assets/images/Kafka_-_Honkai_Star_Rail.png";
import Kris from "../assets/images/Kris.png";
import MoreMon from "../assets/images/More_Monika_as_Makima.png";
import Mon from "../assets/images/Monkima.png";
import NA from "../assets/images/NA.png";
import Nago from "../assets/images/Nagoriyuki.png";

function Projects() {
  return (
    <div className="projects">
      <p className="section__text__p1">Browse My Recent</p>
      <h1 className="title">Projects</h1>
      <div className="experience-details-container">
        <div className="about-containers">
          <div className="details-container color-container">
            <div className="article-container">
              <img src={Mon} alt="Monika as Makima" className="project-img" />
            </div>
          </div>
          <div className="details-container color-container">
            <div className="article-container">
              <img src={Kafka} alt="Kafka" className="project-img" />
            </div>
            <h2 className="experience-sub-title project-title"></h2>
            <div className="article-container">
              <img src={Nago} alt="Kafka" className="project-img" />
            </div>
          </div>
          
          <div className="details-container color-container">
            <div className="article-container">
              <img src={NA} alt="Nitocris Alter" className="project-img" />
            </div>
          </div>
        </div> 
      </div>
    </div>
  );
}

export default Projects;