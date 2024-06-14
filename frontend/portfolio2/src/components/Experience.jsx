import React from "react";
import { Link } from "react-router-dom";

export const Experience = () => {
  return (
    <div className="experience">
      <div className="container">
        <div className="main-exp">
          <div className="exp-img">
            <img src="../img/mainimg.png" alt="" />
            <div className="social-card">
              <div className="social">
                <i class="fa-brands fa-instagram"></i>
                <i class="fa-brands fa-github"></i>
                <i class="fa-brands fa-facebook"></i>
                <i class="fa-brands fa-linkedin"></i>
                <i class="fa-brands fa-behance"></i>
              </div>
            </div>
          </div>
          <div className="exp-text">
            <h1>
              I am Professional User <br />
              Experience Designer
            </h1>
            <h3>
              I design and develop services for customers specializing creating
              stylish, <br /> modern websites, web services and online  stores. My
              passion is <br /> to design digital user experiences.
            </h3>
            <h3>
              I design and develop services for customers specializing creating
              stylish, modern <br />websites,  web services.
            </h3>
            <div  className="exp-button">
              <Link to="/project"><button className="primary-btn    expbtn-primary">My Project</button></Link>
              <Link to="/"><button className="secondary-btn">Download My CV <i class="fa-solid fa-download"></i></button></Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
