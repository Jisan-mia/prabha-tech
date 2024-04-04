import React from "react";
import "./IndustriesPageCTA.css";
const IndustriesPageCTA = ({ ctaText,...props }) => {
  return (
    <div className="industries__cta" {...props}>
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
