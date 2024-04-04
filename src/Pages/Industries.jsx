import React from "react";
import ClientsSection from "../Components/Industries/ClientsSection";
import FeaturesList from "../Components/Industries/FeaturesList";
import IndustriesAcrossGlobe from "../Components/Industries/IndustriesAcrossGlobe";
import IndustriesPageCTA from "../Components/Industries/IndustriesPageCTA";
import IndustriesPartner from "../Components/Industries/IndustriesPartner";
import IndustriesWeServe from "../Components/Industries/IndustriesWeServe";
import IndustriesTestimonials from "../Components/Industries/Testimonials";

const IndustriesPage = () => {
  const ctaText = (
    <>
      <span className="text__gradient">Digitally transform your business’</span>
      &nbsp;
      <br /> with industry-best development services
    </>
  );
  return (
    <>
      <IndustriesPartner />
      <IndustriesWeServe />
      <FeaturesList />
      <IndustriesPageCTA ctaText={ctaText} />
      <ClientsSection />
      <IndustriesTestimonials />
      <IndustriesAcrossGlobe />
    </>
  );
};

export default IndustriesPage;
