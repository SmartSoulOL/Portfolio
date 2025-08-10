// src/components/Skills.js
import React from "react";
import "./Skills.css";
import background from "../assets/bg1.png";
import useReveal from "../hooks/useReveal";
import "../App.css";

const skillGroups = [
  {
    title: "Front-end",
    skills: ["HTML", "CSS/SCSS", "JavaScript"],
  },
  {
    title: "JS Frameworks",
    skills: ["JQUERY", "NODE JS", "REACT JS", "REACT NATIVE", "TYPE SCRIPT"],
  },
  {
    title: "Back-end",
    skills: ["PHP", "MYSQL", "NOSQL"],
  },
  {
    title: "Design Tools",
    skills: ["ADOBE PS", "ADOBE AI", "ADOBE XD", "SKETCH"],
  },
];

const Skills = () => {
  const [ref, visible] = useReveal();
  return (
    <section ref={ref}
      className={`skills-section reveal-section ${visible ? "show" : ""}`}  style={{ backgroundImage: `url(${background})` }}>
      <div className="skills-container">
        <div className="row">
          <div className="col-lg-5 col-md-5 col-sm-12">
             <div className="skillsqr"></div>
             <div className="skills-header">
              <div className="skills-label">MY SKILLS</div>
              <h2>KNOWLEDGE</h2>
              <p className="skills-description">
                My design and coding technological competencies
                include the create complex online system/hub, the creation of
                responsive web applications, also the mobile apps using
                React Native and e-commerce websites. These skills set
                enables me to effectively translate client and stakeholder
                requirements into innovative, user-focused, and engaging
                online experiences.
              </p>
            </div>
          </div>
          <div className="col-lg-7 col-md-7 col-sm-12">
            <div className="skills-grid">
              {skillGroups.map((group, index) => (
                <div className="skill-box" key={index}>
                  <h3>{group.title}</h3>
                  <ul>
                    {group.skills.map((skill, i) => (
                      <li key={i}>{skill}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
