import React from "react";
import { Link } from "react-router-dom";
import { Navbar } from "../Navbar";
import { useEffect } from "react";
import styles from "./about.module.css";
import {Footer} from "../Footer"

export const About = ({ full, half }) => {
  const clientCard = [
    {
      id: 1,
      quote: <i class="fa-solid fa-quote-right"></i>,
      clientImg: <img src="./img/male1.png" alt="John Doe" />,
      para: "Excellent developer! Highly skilled in coding and problem-solving.",
      hr: <hr />,
      name: "John Doe",
    },
    {
      id: 1,
      quote: <i class="fa-solid fa-quote-right"></i>,
      clientImg: <img src="./img/male-3.jpg" alt="John Doe" />,
      para: "A great professional with a deep understanding of development.",
      hr: <hr />,
      name: "Samuel Stevens",
    },
    {
      id: 1,
      quote: <i class="fa-solid fa-quote-right"></i>,
      clientImg: <img src="./img/female-3.jpg" alt="John Doe" />,
      para: "Delivers top-notch code, always meets deadlines efficiently.",
      hr: <hr />,
      name: "Jenna Smith",
    },
    {
      id: 1,
      quote: <i class="fa-solid fa-quote-right"></i>,
      clientImg: <img src="./img/male1.png" alt="John Doe" />,
      para: "Impressive work! A talented developer with a strong skill set.",
      hr: <hr />,
      name: "Harry Potter",
    },
    {
      id: 1,
      quote: <i class="fa-solid fa-quote-right"></i>,
      clientImg: <img src="./img/female-4.jpg" alt="John Doe" />,
      para: "Fantastic developer with an eye for detail and quality.",
      hr: <hr />,
      name: "Jessica Loren",
    },
  ];

  const skills = [
    { name: "JavaScript", level: 80 },
    { name: "HTML", level: 70 },
    { name: "CSS", level: 90 },
    { name: "React", level: 95 },
    { name: "Express", level: 65 },
  ];

  const SkillBar = ({ skill }) => {
    useEffect(() => {
      const fillElement = document.querySelector(`.fill-${skill.name}`);
      setTimeout(() => {
        fillElement.style.setProperty("--fill-width", `${skill.level}%`);
        fillElement.classList.add("animate");
      }, 100);
    }, [skill]);

    return (
      <div className="skill-bar">
        <span className="skill-name">{skill.name}</span>
        <div className="bar">
          <div
            className={`fill fill-${skill.name}`}
            style={{ "--fill-width": "0%" }}
          ></div>
        </div>
      </div>
    );
  };

  const icon = () => [
    {
      id: 1,
      icon: <i class="fa-brands fa-instagram"></i>,
    },
    {
      id: 1,
      icon: <i class="fa-brands fa-github"></i>,
    },
    {
      id: 1,
      icon: <i class="fa-brands fa-linkedin"></i>,
    },
    {
      id: 1,
      icon: <i class="fa-brands fa-behance"></i>,
    },
  ];
  const aboutcard = () => [
    {
      id: 1,
      head: "User Experience (UX)",
      para: `Developing intuitive user interfaces with a focus on user needs.`,
    },
    {
      id: 2,
      head: "User Interface (UI)",
      para: `Crafting visually appealing interfaces with modern design principles.`,
    },
    {
      id: 3,
      head: "Web Development",
      para: `Building responsive and dynamic websites with the latest technologies.`,
    },
  ];
  return (
    <>
      {full && <Navbar />}
      {full && (
        <div className="space" style={{marginTop:"0px"}}>
          
        </div>
      )} 
      
        <div className="about">
          <div className="about-tag" style={{display:'flex',flexDirection:'column',gap:'10px',alignItems:'center', marginTop:'-10px'}}>
            <h1>About</h1>
            <h3>
              I am a passionate developer, committed to delivering high-quality solutions. <br /> Discover my journey and work.
            </h3>
            <hr />
          </div>
          
          {half && (
            
          <div className="container">
            {half && (
        <div className="space" style={{marginTop:"200px"}}>
          
        </div>
      )} 
          
            <div className="about-me">
              <div className="about-left">
                <h1>What I do?</h1>
                <h3>
                  I specialize in full-stack development, creating dynamic and responsive applications. <br /> From front-end interfaces to back-end systems, I deliver comprehensive solutions.
                </h3>
                <h3>
                  My expertise includes JavaScript, React, and modern web technologies. <br /> I am dedicated to continuous learning and improvement.
                </h3>
                <Link to="/about">
                  <button className="secondary-btn">Say Hello!</button>
                </Link>
              </div>
              <div className="about-right">
                {aboutcard().map((card) => (
                  <div key={card.id} className="about-cards">
                    <div className="cards">
                      <h1>{card.head}</h1>
                      <h3>{card.para}</h3>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
      )}
        </div>
      {full && (
        <>
          <div className="aboutpage">
            <div className="container">
              <div className="about-route">
                <div className="about-route-hero">
                  <div className="about-route-img">
                    <img src="./img/aboutmain2.png" alt="" />
                  </div>
                  <div className="about-route-text">
                    <h1>
                      Designing With Passion While <br /> Exploring The World
                    </h1>
                    <hr />
                    <h3>
                      As a developer, I combine creativity and technical skills to build amazing products. I believe in the power of technology to transform ideas into reality. <br /> <br />Let's collaborate and create something incredible.
                    </h3>
                    <h2>abhisekpattanayak07@gmail.com</h2>
                  </div>
                  <div className="about-route-text2">
                    <h1>
                      I Create Products Not <br />
                      Just Arts
                    </h1>
                    <hr />
                    <h3>
                      My approach is to create functional and beautiful web applications. I ensure each project is tailored to meet specific needs, delivering value and excellence. Connect with me to bring your ideas to life.
                      <div className="about-route-social">
                        {icon().map((icons) => (
                          <div className="social">{icons.icon}</div>
                        ))}
                      </div>
                    </h3>
                  </div>
                </div>
              </div>
              <div className="about-route-skill">
                <div className="skill-text">
                  <h1>Frontend and Backend Developer</h1>
                  <hr />
                  <h3>
                    With expertise in both front-end and back-end development, I create seamless <br />and integrated web applications. From user interfaces to server-side logic, <br />I build robust and scalable solutions.
                  </h3>
                  <button className=" skill-btn secondary-btn">
                    Download CV
                  </button>
                </div>

                <div className="about-skills-bar">
                  <div className="App">
                    {skills.map((skill, index) => (
                      <SkillBar key={index} skill={skill} />
                    ))}
                  </div>
                </div>
              </div>
              <div className="about-client">
                <div className="client-tag">
                  <h1>What My Clients Says</h1>
                  <h3>
                    Hear from some of the clients I have worked with and their experiences.
                  </h3>
                    <hr />
                </div>
                  <div className="client-cards">
                {clientCard.map((client) => (
                    <div className="c-card">
                      {client.quote}
                      <div className="c-img">{client.clientImg}</div>
                      <h3>{client.para}</h3>
                      {client.hr}
                      <h1>{client.name}</h1>
                    </div>
                ))}
                  </div>
              </div>
              <div className="about-contact">
                <h1>Stay In Touch</h1>
                <h3>Connect with me to discuss your projects or just to say hello. I am always open to new opportunities and collaborations.</h3>
                <hr />
                <Link to="/contact"><button className="secondary-btn">Contact Me</button></Link>
              </div>
            </div>
          </div>
          <Footer/>
        </>
      )}
    </>
  );
};
