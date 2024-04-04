import React from "react";
import FeaturesList from "../Components/Industries/FeaturesList";
import IndustriesPartner from "../Components/Industries/IndustriesPartner";
import IndustriesWeServe from "../Components/Industries/IndustriesWeServe";

const IndustriesPage = () => {
  return (
    <>
      <IndustriesPartner />
      <IndustriesWeServe />
      <FeaturesList />
    </>
  );
};

export default IndustriesPage;
