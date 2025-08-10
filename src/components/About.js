// src/components/About.js
import React from "react";
import "./About.css";
import useReveal from "../hooks/useReveal";
import "../App.css";

const About = () => {
  const [ref, visible] = useReveal();
  return (
    <section ref={ref}
      className={`about-section reveal-section ${visible ? "show" : ""}`} >
      <div className="about-container">
        <div className="about-left">
          <div className="aboutsqr"></div>
          <div className="about-label">WHO I AM</div>
          <h2 className="about-title">ABOUT</h2>
          <h2 className="about-years">13</h2><span className="years">Years of Experience</span>
        </div>

        <div className="about-right">
          <p>
            I’m an experienced Website Developer and UX designer, specialising
            in Front-End Development and online system or mobile app UI/UX
            design.
          </p>
          <p>
            I hold a Diploma of website development and Bachelor of Visual Arts
            from the University of Sydney, which has equipped me with a
            distinctive blend of technical expertise and creative vision.
          </p>
          <p>
            Over the past 13 years, I have
            accumulated extensive commercial experience, developed professional
            web apps and delivered impactful B2C solutions.
          </p>
        </div>
      </div>

      <div className="quote-container">
        <div className="quote-label">MY FAVOURITE QUOTE</div>
        <div className="quotesqr"></div>
        <blockquote className="quote">
          “Everything should be made as simple as possible, but not simpler”
        </blockquote>
        <cite className="quote-author">– Albert Einstein</cite>
      </div>
    </section>
  );
};

export default About;
