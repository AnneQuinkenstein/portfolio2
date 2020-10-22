import React from "react";
import { useMediaPredicate } from "react-media-hook";
import OnePagePortfolio from "./OnePagePortfolio";
import Portfolio from "./Portfolio";

const PortfolioSwitch = () => {
  const phone = useMediaPredicate("(max-width: 1000px)");
  return (
    <>
      <div>{phone && <Portfolio />}</div>
      <div>{!phone && <OnePagePortfolio />}</div>  
    </>
  );
};

export default PortfolioSwitch;
