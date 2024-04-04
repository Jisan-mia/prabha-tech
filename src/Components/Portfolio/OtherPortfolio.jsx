import React from "react";
import { allOtherPortfolio } from "../Industries/data";
import "./OtherPortfolio.css";
const OtherPortfolio = () => {
  return (
    <div className="other__portfolio">
      <div className="other__portfolio-content container">
        {allOtherPortfolio.map((item) => {
          return (
            <div key={item.id} className="other__portfolio-item">
              <div className="other__portfolio-item">
                <img src={item.logo} alt="" />
              </div>
              <p>{item.description}</p>
              <div className="other__portfolio-image">
                <img src={item.image} alt="" />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default OtherPortfolio;
