import React, { useState } from "react";
import "./IndustriesAcrossGlobe.css";
import { allContinent, allIndustriesAcrossGlobes } from "./data";
const IndustriesAcrossGlobe = () => {
  return (
    <div className="globe__industries">
      <div className="globe__industries-content container">
        <div className="globe__industries-titles">
          <h2>
            We Serve
            <br />
            &nbsp; Industries across the Globe
          </h2>
          <p>
            We go beyond the geographies of our excellence centers to serve
            clients all across the world.
          </p>
        </div>

        {/* tab filter section */}
        <IndustiriesGlobeTab />
      </div>
    </div>
  );
};

export default IndustriesAcrossGlobe;

const IndustiriesGlobeTab = () => {
  const [selectedContinent, setSelectedContinent] = useState(allContinent[0]);
  const filterByContinent = (item) => {
    if(item.continent === selectedContinent.id) {
      return true
    } else {
      return false
    }
  }
  return (
    <div className="globe__tab">
      {/* top filterable button */}
      <div className="tab-button-container">
        {allContinent.map((item) => {
          return (
            <button
              key={item.id}
              onClick={() => {
                setSelectedContinent(item);
              }}
              className={`tab-button ${
                selectedContinent.id === item.id ? "active" : ""
              }`}
            >
              {item.label}
            </button>
          );
        })}
      </div>

      {/* filter result */}
      <div className="tab-filter-result">
        {allIndustriesAcrossGlobes.filter(filterByContinent).map(item => (
          <div key={item.id}>
            <img  src={item.logo} alt="" />
          </div>
        ))}
      </div>
    </div>
  );
};
