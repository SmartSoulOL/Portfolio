// src/components/Experience.js
import React from "react";
import "./Experience.css";
import useReveal from "../hooks/useReveal";
import "../App.css";
import logo1 from "../assets/logo1.png";
import logo2 from "../assets/logo2.png"
import logo3 from "../assets/logo3.png"
import logo4 from "../assets/logo4.png"
import logo5 from "../assets/logo5.png"
import logo6 from "../assets/logo6.png"
import logo7 from "../assets/logo7.png"

const jobs = [
  {
    logo: logo1,
    company: "Australian Wool Innovation (AWI)",
    date: "May 2022 – Present",
    role: "Front-end Engineer / UX Designer",
  },
  {
    logo: logo2,
    company: "University Admission Centre (UAC) ",
    date: "Oct/2020 – April/2022",
    role: "Full Stack Developer",
  },
  {
    logo: logo3,
    company: "Nuzest Pty Ltd",
    date: "Feb/2018 – Oct/2020",
    role: "eCommerce Web Developer",
  },
  {
    logo: logo4,
    company: "InfoTrack Pty Ltd",
    date: "Oct/2017 – Feb/2018",
    role: "Junior Front-end DeveloperWeb developer / graphic designer",
  },
  {
    logo: logo5,
    company: "BlueInc Pty Ltd",
    date: "Jun/2015 – Oct/2017",
    role: "Front end web developer and designer",
  },
  {
    logo: logo6,
    company: "ASUS – Australia ",
    date: "Aug/2014 – Dec/2014",
    role: "Graphic designer / web designer",
  },
  {
    logo: logo7,
    company: "Triple888 Studio",
    date: "Jan/2013 – Nov/2014",
    role: "Web developer / designer",
  },
];

const Experience = () => {
  const [ref, visible] = useReveal();
  return (
    <section ref={ref}
      className={`experience-section reveal-section ${visible ? "show" : ""}`}>
      <div className="experience-container">
        <div className="row">  
            <div className="col-lg-5 col-md-5 col-sm-12">
              <div className="experience-header">
                <div className="experiencesqr"></div>
                <div className="experience-label">MY JOURNEY</div>
                <h2 className="experience-title">EXPERIENCE</h2>
              </div>
              <div className="experience-desc">I am a highly dedicated and diligent professional, recognized for my strong work ethic, positive attitude, and commitment to delivering quality outcomes. I approach every project with a solution-driven mindset and a passion for continuous learning, ensuring that I remain at the forefront of emerging technologies and design trends. My ability to combine creative problem-solving with strong technical proficiency positions me to excel in delivering exceptional digital products and experiences.</div>
          </div>
          <div className="col-lg-7 col-md-7 col-sm-12">
            <div className="timeline">
              {jobs.map((job, index) => (
                <div className="timeline-item" key={index}>
                  <div className="timeline-dot" />
                  <div className="timeline-content">
                    <div className="row">
                      <div className="col-2"><img className="timeline-logos" src={job.logo}></img></div>
                      <div className="col-10">
                      <h3>{job.company}</h3>
                      <span className="timeline-date">{job.date}</span>
                      <p>{job.role}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
