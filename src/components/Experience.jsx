import React from "react";

import check from "../assets/checkmark.png";

function Experience() {
  return (
    <div className="experience">
      <h1 className="title">Experience</h1>
      <div className="experience-details-container">
        <div className="about-containers">
          <div className="details-container">
            <h2 className="experience-sub-title">Graphic Design</h2>
            <div className="article-container">
              <article>
                <img src={check} alt="checkmark" className="icon" />
                <div>
                  <h3>Logos </h3>
                  <p>Med Level</p>
                </div>
              </article>
              <article>
                <img src={check} alt="checkmark" className="icon" />
                <div>
                  <h3>Branding </h3>
                  <p>Med Level</p>
                </div>
              </article>
              <article>
                <img src={check} alt="checkmark" className="icon" />
                <div>
                  <h3>Video Editing </h3>
                  <p>High Level</p>
                </div>
              </article>
              <article>
                <img src={check} alt="checkmark" className="icon" />
                <div>
                  <h3>Moodboard </h3>
                  <p>Med Level</p>
                </div>
              </article>
            </div>
          </div>
          <div className="details-container">
            <h2 className="experience-sub-title">Graphic Design</h2>
            <div className="article-container">
              <article>
                <img src={check} alt="checkmark" className="icon" />
                <div>
                  <h3>Backgrounds </h3>
                  <p>Low Level</p>
                </div>
              </article>
              <article>
                <img src={check} alt="checkmark" className="icon" />
                <div>
                  <h3>Character Design </h3>
                  <p>Med to High Level</p>
                </div>
              </article>
              <article>
                <img src={check} alt="checkmark" className="icon" />
                <div>
                  <h3>Concept Art </h3>
                  <p>Med Level</p>
                </div>
              </article>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experience;
