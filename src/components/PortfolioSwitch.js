import React from "react";
import useMediaQuery from '@material-ui/core/useMediaQuery';
import OnePagePortfolio from "./OnePagePortfolio";
import Portfolio from "./Portfolio";

const PortfolioSwitch = () => {
  const phone = useMediaQuery('(max-width: 1000px)');
  return (
    <>
      {phone && <Portfolio />}
      {!phone && <OnePagePortfolio />}
    </>
  );
};

export default PortfolioSwitch;
