import React from "react";
import "./ClientsSection.css";
const ClientsScrollItem = () => {
  return (
    <div className="client__list-item">
      {/* left side */}
      <div className="client__list-item-left">
        <div>
          <img src="/public/images/client-logo-1.svg" alt="" />
        </div>
        <p>
          We developed a voice-assistant app optimized for bluetooth wearables
          for social media experiences on the go. Results?
        </p>
        <div className="client__success">
          <div className="client__success-item">
            <h3>$1 Million</h3>
            <p>Funding Received</p>
          </div>
          <div className="client__success-item">
            <h3>50K+</h3>
            <p>Mobile App Downloads</p>
          </div>
        </div>
        <div>
          <button className="primary-button">Read Case Study</button>
        </div>
      </div>
      {/* right side */}
      <div className="client__list-item-right">
        <img src="/public/images/client-1.webp" alt="" />
      </div>
    </div>
  );
};

export default ClientsScrollItem;
