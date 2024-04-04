import React from "react";
import ClientsScrollItem from "./ClientsScrollItem";
import './ClientsSection.css';
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


        <div className="client__section-container">
          <ClientsScrollItem />
        </div>


      </div>
    </div>
  );
};

export default ClientsSection;
