import React from 'react'
import './PortfolioCTA1.css'
const PortfolioCTA1 = ({ctaText, ...props}) => {
  return (
    <div className='portfolio__cta2' {...props}>
        <div className='portfolio__cta2-content container'>
          <h2>
            {ctaText}
          </h2>
          <div>
            <button className='primary-button'>Join the Club</button>
          </div>
        </div>
    </div>
  )
}

export default PortfolioCTA1