import React from "react";
import "./FeaturesList.css";
const FeaturesItem = ({ item }) => {
  return (
    <div className="features-list-item">
      <div className="img-cont">
        <img src={item.image} alt="" />
      </div>

      <div className="features-list-item-content">
        <div className="titles">
          <div className="titles__image-cont">
            <img src={item.title_image} alt="" />
          </div>
          <h2>{item.title}</h2>
        </div>
        <p className="features-list-item-description">{item.details}</p>
      </div>
    </div>
  );
};

export default FeaturesItem;
