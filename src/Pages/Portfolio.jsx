import React from "react";
import Brand from "../Components/Brand";
import OtherPortfolio from "../Components/Portfolio/OtherPortfolio";
import PartnerUs from "../Components/Portfolio/PartnerUs";
import PortfolioCTA2 from "../Components/Portfolio/PortfolioCTA2";
import PortfolioHero from "../Components/Portfolio/PortfolioHero";
import PortfolioLists from "../Components/Portfolio/PortfolioLists";
import PortfolioProfit from "../Components/Portfolio/PortfolioProfit";
import PortfolioSecondHero from "../Components/Portfolio/PortfolioSecondHero";

const PortfolioPage = () => {

  return (
    <>
      <PortfolioHero />
      <PortfolioSecondHero />
      <PortfolioLists />
      <PortfolioProfit />
      <OtherPortfolio />
      <PortfolioCTA2 />
      <PartnerUs />
      <Brand />
    </>
  );
};

export default PortfolioPage;
