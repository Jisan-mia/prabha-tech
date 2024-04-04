import React from "react";
import { allPortfolioProfit } from "../Industries/data";
import "./PortfolioProfit.css";

const PortfolioProfit = () => {
  return (
    <div className="portfolio__profit">
      <div className="portfolio__profit-content container">
        <h2>
          Unleashing the Digital Potential
          <br />
          of Global Leaders
        </h2>

        <div className="portfolio__profit-list">
          {allPortfolioProfit.map((item) => {
            return (
              <div key={item.id} className="portfolio__profit-list-item">
                <div>
                  <img src={item.logo} alt="" />
                </div>
                <div className="portfolio__profit-list-result">
                  {item.profitList.map((pItem) => (
                    <div
                      key={pItem.title}
                      className="portfolio__profit-list-result-item"
                    >
                      <h2>{pItem.title}</h2>
                      <p>{pItem.detail}</p>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default PortfolioProfit;
