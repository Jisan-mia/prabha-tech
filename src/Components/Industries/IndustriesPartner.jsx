import React, { useEffect, useState } from "react";
import "./IndustriesPartner.css";
import { allIndustryAnimationPhoto } from "./data";
const IndustriesPartner = () => {
  const [selectedIndustry, setSelectedIndustry] = useState(
    allIndustryAnimationPhoto[0]
  );

  useEffect(() => {
    const interval = setInterval(() => {
      const nextId =
        selectedIndustry.id + 1 < allIndustryAnimationPhoto.length
          ? selectedIndustry.id + 1
          : 1;
      setSelectedIndustry(allIndustryAnimationPhoto[nextId]);
    }, 2500);

    return () => clearInterval(interval);
  }, [selectedIndustry]);
  return (
    <div className="partners">
      {/* left side */}
      <div className="partners__content container">
        <div className="partners__left">
          <div className="partners__left-top">
            <span className="tag">Industries</span>
            <h1>
              Preferred Transformation Partner of Global Leaders in&nbsp;
              <span className="partner-active">{selectedIndustry.name}</span>
            </h1>
          </div>
          <div>
            <button className="partners__left-button primary-button">
              Consult Our Experts
            </button>
          </div>
          <div className="partners__left-recognitions">
            <div className="partners__left-recognitions-item">
              <img src="/images/partner-1.svg" alt="" />
              <p>App Development Company of the Year</p>
            </div>
            <div className="partners__left-recognitions-item">
              <img src="/images/partner-2.svg" alt="" />

              <p>Tech Company of the Year</p>
            </div>
            <div className="partners__left-recognitions-item">
              <img src="/images/partner-3.svg" alt="" />

              <p>India’s Growth Champions in IT</p>
            </div>
          </div>
        </div>

        {/* right side */}
        <div className="partners__right">
          <img src={selectedIndustry.image} alt="" />
        </div>
      </div>
    </div>
  );
};

export default IndustriesPartner;
