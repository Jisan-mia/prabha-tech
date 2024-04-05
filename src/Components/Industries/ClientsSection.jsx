import React from "react";
import './ClientsSection.css';
import { default as Example } from "./HorizontalScroll";
const ClientsSection = () => {
  return (
    <div className="clients__section">
      <div className="clients__section-content container">
        <div className="client__section-titles">
          <h2>
            We Work with Clients Developing&nbsp;
            <br />
            Industry-Leading Solutions
          </h2>
          <p>
            Our experience has enabled us to serve some of the best companies
            across industries and&nbsp;
            <br />
            geographies. Here’s a snapshot of the same.
          </p>
        </div>


        <Example />
        <div className="client__section-container">
          {/* <HorizontalScrollCarousel /> */}
        </div>


      </div>
    </div>
  );
};

export default ClientsSection;
