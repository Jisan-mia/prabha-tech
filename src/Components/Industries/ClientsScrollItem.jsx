import React from "react";
import "./ClientsSection.css";
const ClientsScrollItem = ({ item }) => {
  return (
    <div className="client__list-item">
      {/* left side */}
      <div className="client__list-item-left">
        <div>
          <img src={item.logo} alt="" />
        </div>
        <p>{item.description}</p>
        <div className="client__success">
          {item.clientAchievement.map((aItem) => {
            return (
              <div key={aItem.title} className="client__success-item">
                <h3>{aItem.title}</h3>
                <p>{aItem.detail}</p>
              </div>
            );
          })}
        </div>
        <div>
          <button className="primary-button">Read Case Study</button>
        </div>
      </div>
      {/* right side */}
      <div className="client__list-item-right">
        <img src={item.image} alt="" />
      </div>
    </div>
  );
};

export default ClientsScrollItem;
