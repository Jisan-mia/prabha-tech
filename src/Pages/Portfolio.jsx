import React from "react";
import OtherPortfolio from "../Components/Portfolio/OtherPortfolio";
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
    </>
  );
};

export default PortfolioPage;
