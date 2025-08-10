import React from "react";
import "./SkillCards.css";
import icon1 from "../assets/icon1.png"
import icon2 from "../assets/icon2.png";
import icon3 from "../assets/icon3.png";

const cards = [
  {
    title: "UI/UX",
    role:"Designer",
    icon: icon1,
    color: "#ce1f40", 
  },
  {
    title: "Front-end",
    role:"Developer",
    icon: icon2,
    color: "#F2B632", 
  },
  {
    title: "eCommerce",
    role:"Developer",
    icon: icon3,
    color: "#005AA7", 
  },
];

const SkillCards = () => {
  return (
    <section className="skill-section">
      <div className="skill-card-container">
        {cards.map((card, index) => (
          <div
            key={index}
            className="skill-card"
            style={{ backgroundColor: card.color }}
          >
            <h3 className="skill-title">{card.title}</h3>
            <h2 className="skill-role">{card.role}</h2>
            <img className="skill-image" src={card.icon}></img>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkillCards;
