import React from 'react';
import PortfolioCTA1 from './PortfolioCTA1';
import './PortfolioCTA2.css';

const PortfolioCTA2 = () => {
  const cta = (
    <>
      Put our full stack development experience of solving the challenges of
      <br />
      <span className="text__gradient">
        FinTech, eCommerce, Healthcare, Aviation,{" "}
      </span>{" "}
      and 20+ other industries to your benefit
    </>
  );
  return (
    <div className='portfolio__cta1'>
      <div className='portfolio__cta1-content container'>
        <PortfolioCTA1 ctaText={cta} style={{marginTop: 0}} />
      </div>
    </div>
  )
}

export default PortfolioCTA2