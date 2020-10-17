import React from "react";
import { useMediaPredicate } from "react-media-hook";
import OnePagePortfolio from "./OnePagePortfolio";
import Portfolio from "./Portfolio";

const PortfolioSwitch = () => {
  const phone = useMediaPredicate("(max-width: 1000px)");
  return (
    <>
      {phone && <Portfolio />}
      {!phone && <OnePagePortfolio />}
    </>
  );
};

export default PortfolioSwitch;
