import React from "react";
import "./Banner.css";
import background from "../assets/heroImg.png";
import face from "../assets/face.png";


const Banner = () => {
  return (
    <header className="header" style={{ backgroundImage: `url(${background})` }}>
      <div className="container">
        <div className="row">
          <div className="header-content col-lg-7 col-md-6 col-sm-12">
            <div className="herosqr"></div>
            <p className="code-tag">&lt;developer&gt;<span className="blinking-text">|</span></p>
            <h1 className="heroh1">
              I’m <span className="highlight">Owen</span>
            </h1>
            <h2 className="heroh2">Full Stack Developer & UX Designer</h2>
            <p className="summary">
              I am a professional Full Stack  Developer and UX Designer with 14+ years of experience, specialising in building complex web applications and online systems, developing e-commerce platforms, and designing intuitive, user-focused mobile apps.
            </p>
            <h2 className="ux-glow">UX Designer</h2>
          </div>
          <div className="header-content col-lg-5 col-md-6  col-sm-12">
              <div className="photo" style={{ backgroundImage: `url(${face})` }}></div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Banner;