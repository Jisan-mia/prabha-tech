import React from "react";
import FeaturesItem from "./FeaturesItem";
import "./FeaturesList.css";
import { allFeaturesList } from "./data";

const FeaturesList = () => {
  return (
    <div className="features-content container">
      <div className="features-list">
        {allFeaturesList.map((item) => (
          <FeaturesItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default FeaturesList;
