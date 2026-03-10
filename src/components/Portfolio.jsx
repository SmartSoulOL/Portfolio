import React, { useEffect, useRef, useState } from 'react';
import './Portfolio.css';
import useReveal from "../hooks/useReveal";
import "../App.css";

import port1 from '../assets/portfolio1.png';
import port2 from '../assets/portfolio2.png';
import port3 from '../assets/portfolio3.png';
import port4 from '../assets/portfolio4.png';
import port5 from '../assets/portfolio5.png';
import port6 from '../assets/portfolio6.png';
import port7 from '../assets/portfolio7.png';
import portux1 from '../assets/portfolioUX1.png';

const portfolioItems = [
  { title: 'Woolmark', image: port1, link: 'https://www.woolmark.com/' },
  { title: 'Woolmark Learning Centre', image: port2, link: 'https://www.woolmarklearningcentre.com/' },
  { title: 'Australian Wool Innovation', image: port3, link: 'https://www.wool.com/' },
  { title: 'Australian Wool Traceability Hub', image: port4, link: 'https://awth.com.au/' },
  { title: 'University Admissions Centre', image: port5, link: 'https://uac.edu.au/' },
  { title: 'Nuzest', image: port6, link: 'https://www.nuzest.com.au/' },
  { title: 'SmartSoul', image: port7, link: 'https://www.nuzest.com.au/' },
];

const Portfolio = () => {
  const itemRefs = useRef([]);
  const [showModal, setShowModal] = useState(false);
  const [ref, visible] = useReveal();

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    itemRefs.current.forEach(el => el && observer.observe(el));

    return () => {
      itemRefs.current.forEach(el => el && observer.unobserve(el));
    };
  }, []);

  return (
    <section
      ref={ref}
      className={`portfolio-section reveal-section ${visible ? "show" : ""}`}
    >
      <div className="portfolio-contents">
        <div className="portfoliosqr"></div>
        <div className="portfolio-label">MY RECENT PROJECTS</div>
        <h2 className="portfolio-title">PORTFOLIO</h2>

        <div className="portfolio-grid">
          {portfolioItems.map((item, index) => {
            const isSmartSoul = item.image === port7;

            return (
              <a
                key={index}
                href={isSmartSoul ? "#" : item.link}
                className="portfolio-card hidden"
                target={isSmartSoul ? undefined : "_blank"}
                rel="noopener noreferrer"
                ref={el => (itemRefs.current[index] = el)}
                onClick={(e) => {
                  if (isSmartSoul) {
                    e.preventDefault();
                    setShowModal(true);
                  }
                }}
              >
                <img src={item.image} alt={item.title} className="portfolio-img" />
                <div className="portfolio-overlay">
                  <h3>{item.title}</h3>
                </div>
              </a>
            );
          })}
        </div>
      </div>

      <div className="copyright" align="center">
        © Owen's online portfolio
      </div>

      {/* MODAL */}
      {showModal && (
        <div className="modal-backdrop" onClick={() => setShowModal(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setShowModal(false)}>
              ✕
            </button>
            <img src={portux1} alt="SmartSoul UX" className="modal-img" />
          </div>
        </div>
      )}
    </section>
  );
};

export default Portfolio;
