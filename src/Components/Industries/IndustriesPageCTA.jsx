import React from "react";
import "./IndustriesPageCTA.css";
const IndustriesPageCTA = ({ ctaText }) => {
  return (
    <div className="industries__cta">
      <div className="industries__cta-content container">
        <div className="cta__wrapper">
          <h2>{ctaText}</h2>
          <button style={{zIndex:1}} className="primary-button">Connect with an Expert</button>
        </div>
      </div>
    </div>
  );
};

export default IndustriesPageCTA;
