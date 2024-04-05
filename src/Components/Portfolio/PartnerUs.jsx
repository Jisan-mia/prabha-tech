import React from "react";
import "./PartnerUs.css";
const PartnerUs = () => {
  return (
    <div className="partnerus">
      <div className="partnerus__content container">
        <h2>
          Our agile solutions have resulted in recurring
          <br />
          collaborations with leading enterprises like
          <br />
          IKEA, Adidas, KPMG, and many more.
        </h2>
        <div>
          <button className="primary-button">Partner With Us</button>
        </div>

        {/* floating  */}
        <div className="floating__logo floating__logo-1">
          <img src="/images/portfolio-item-logo.svg" alt="" />
        </div>

        <div className="floating__logo floating__logo-2">
          <img src="/images/portfolio-item-logo.svg" alt="" />
        </div>
        <div className="floating__logo floating__logo-3">
          <img src="/images/portfolio-item-logo.svg" alt="" />
        </div>
        <div className="floating__logo floating__logo-4">
          <img src="/images/portfolio-item-logo.svg" alt="" />
        </div>
        <div className="floating__logo floating__logo-5">
          <img src="/images/portfolio-item-logo.svg" alt="" />
        </div>
        <div className="floating__logo floating__logo-6">
          <img src="/images/portfolio-item-logo.svg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default PartnerUs;
