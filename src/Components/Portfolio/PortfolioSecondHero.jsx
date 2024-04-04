import React from "react";
import "./PortfolioSecondHero.css";

const PortfolioSecondHero = () => {
  return (
    <div className="portfolio__hero2">
      <div className="portfolio__hero2-content container">
       <div className="hero2-wrapper">
         <div className="portfolio__hero2-left">
          <h2>KFC</h2>
          <p>
            Helping the Americana Group’s KFC <br /> to digitally transform
            their business <br /> by launching seven innovative mobile <br />{" "}
            apps across global markets
          </p>
        </div>

        <div className="portfolio__hero2-result">
          <div className="portfolio__hero2-result-item">
            <h3>22%</h3>
            <p>
              Higher Conversation
              <br />
              Rate
            </p>
          </div>
          <div className="portfolio__hero2-result-item">
            <h3>4.5</h3>

            <p>
              Average Rating
              <br />
              on Stores
            </p>
          </div>

          <div className="portfolio__hero2-result-item">
            <h3>30K+</h3>
            <p>
              Order per Day
              <br />
              via App
            </p>
          </div>
        </div>
       </div>
      </div>
    </div>
  );
};

export default PortfolioSecondHero;
