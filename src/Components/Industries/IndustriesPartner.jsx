import React from 'react';
import './IndustriesPartner.css';
const IndustriesPartner = () => {
  return (
    <div className="partners">
      {/* left side */}
     <div className='partners__content container'>
       <div className="partners__left">
        <div className="partners__left-top">
          <span className='tag'>Industries</span>
          <h1>
            Preferred Transformation Partner of Global Leaders in&nbsp;
            <span className='partner-active'>eCommerce</span>
          </h1>
        </div>
        <div>
          <button className="partners__left-button primary-button">Consult Our Experts</button>
        </div>
        <div className="partners__left-recognitions">
          <div className='partners__left-recognitions-item'>
            <img src="/images/partner-1.svg" alt="" />
            <p>App Development Company of the Year</p>
          </div>
          <div className='partners__left-recognitions-item'>
            <img src="/images/partner-2.svg" alt="" />

            <p>Tech Company of the Year</p>
          </div>
          <div className='partners__left-recognitions-item'>
            <img src="/images/partner-3.svg" alt="" />

            <p>India’s Growth Champions in IT</p>
          </div>
        </div>
      </div>

      {/* right side */}
      <div className="partners__right">
        <img src="/images/partner.webp" alt="" />
      </div>
     </div>
    </div>
  );
};

export default IndustriesPartner;
