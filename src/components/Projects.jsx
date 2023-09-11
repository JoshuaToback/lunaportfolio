import React, { useState, useEffect } from "react";
import Arc from "../assets/images/Arc.png";
import CSM from "../assets/images/CSM.png";
import DR from "../assets/images/DR.png";
import GWitch from "../assets/images/G-Witch_Red_birthmark_Piece.png";
import Kafka from "../assets/images/Kafka_-_Honkai_Star_Rail.png";
import Kris from "../assets/images/Kris.png";
import MoreMon from "../assets/images/More_Monika_as_Makima.png";
import NA from "../assets/images/NA.png";
import Nago from "../assets/images/Nagoriyuki.png";

function Projects() {
  // Create an array with your project image paths
  const projectImages = [Arc, CSM, DR, GWitch, Kris, MoreMon, NA];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    // Create an interval to automatically advance the slide
    const interval = setInterval(() => {
      // Increment the current slide index, and loop back to the first slide if necessary
      setCurrentSlide((prevSlide) => (prevSlide + 1) % projectImages.length);
    }, 5000); // Change the duration (in milliseconds) to control the slide speed

    // Clear the interval when the component unmounts
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <p className="section__text__p1">Browse My Recent</p>
      <h1 className="title">Projects</h1>

      <div className="project-details-container">
        {projectImages.map((image, index) => (
          <div
            key={index}
            className={`projects-container color-container ${
              index === currentSlide ? "active-slide" : ""
            }`}
          >
            <div className="project-container">
              <img src={image} alt={`Project ${index}`} className="project-img" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;