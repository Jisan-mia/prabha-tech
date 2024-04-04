import React from "react";
import "./IndustriesWeServe.css";
import ServeItem from "./ServeItem";
import { allServedIndustries } from "./data";
const IndustriesWeServe = () => {
  return (
    <div className="served__industries">
      <div className="served__industries-content container">
        <div className="served__industries-titles">
          <h2>Industries We Serve</h2>
          <p>
            Delivering value to multiple industries, we innovate
            industry-specific technologies to scale
            <br /> and optimize operations and
            bottom line.
          </p>
        </div>
        <div className="served__industries-list">
          {allServedIndustries.map((item) => (
            <ServeItem key={item.id} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default IndustriesWeServe;
