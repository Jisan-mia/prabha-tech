import React from "react";
import './PortfolioHero.css';

const PortfolioHero = () => {
  return (
   <>
    <div className="bg-line"></div>
     <div className="portfolio__hero1">
      <div className="portfolio__hero1-wrapper">
        <div className="portfolio__hero1-content container">
          <div className="portfolio__hero1-titles">
            <h2>Case Studies</h2>
            <h1>Optimize. Innovate. Disrupt</h1>
            <p>
              Success stories that demonstrate our expertise to deliver
              technology-led business breakthroughs across startups, global
              brands, and Fortune 500s
            </p>
          </div>
        </div>
      </div>
    </div>
   </>
  );
};

export default PortfolioHero;
