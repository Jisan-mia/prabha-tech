/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { allPortfolioLists } from "../Industries/data";
import PortfolioCTA1 from "./PortfolioCTA1";
import "./PortfolioLists.css";

const PortfolioLists = () => {
  const cta = (
    <>
      Add your brand's success story to our <br /> exhaustive global list of
      elite brands
    </>
  );
  return (
    <div className="portfolio__lists">
      <div className="portfolio__lists-cont container">
        {allPortfolioLists.map((portfolio) => {
          return (
            <>
              {portfolio.id === 4 && <PortfolioCTA1 ctaText={cta} />}

              <PortfolioListItem key={portfolio.id} portfolio={portfolio} />
            </>
          );
        })}
      </div>
    </div>
  );
};

export default PortfolioLists;

const PortfolioListItem = ({ portfolio }) => {
  return (
    <div className="portfolio__lists-item">
      <div className="portfolio__lists-item-left">
        <img src={portfolio.image} alt="" />
      </div>

      <div
        className="portfolio__lists-item-right"
        style={
          !portfolio.isLeftImage
            ? {
                gridRow: 1,
                gridColumn: 1,
              }
            : {}
        }
      >
        <div>
          <img src={portfolio.logo} alt="" />
        </div>
        <p className="portfolio__lists-item-desc">{portfolio.description}</p>

        <div className="portfolio__list-result">
          {portfolio.portfolioFeature.map((item) => (
            <>
              <div className="portfolio__list-result-item">
                <h2>{item.title}</h2>
                <p>{item.detail}</p>
              </div>
            </>
          ))}
        </div>

        <div>
          <button className="primary-button">View Case Study</button>
        </div>
      </div>
    </div>
  );
};
