import React from "react";
import ReactFullpage from "@fullpage/react-fullpage";
import Navbar from "./Navbar";
import OnePageHome from "./OnePageHome";
import Contact from "./Contact";
import OnePagePortfolio from "./OnePagePortfolio";
import Resume from "./Resume";
import "../App.css";

const OnePage = () => (
  <ReactFullpage
    //fullpage options
    licenseKey={process.env.REACT_APP_FULLPAGE_API_KEY}
    scrollingSpeed={1000} /* Options here */
    anchors={["Home", "Portfolio", "Resume", "Contact"]}
    responsiveWidth={1000}
    fixedElements={".MuiBox-root-5"}
    

    render={({ state, fullpageApi }) => {
      return (
        <>
          <ReactFullpage.Wrapper>
            <div className="section">
              <Navbar />
              <OnePageHome />
            </div>
            <div
              className="section"
            >
              <OnePagePortfolio />
            </div>
            <div
              className="section"
              onClick={() => fullpageApi.moveSectionDown()}
            >
              <Resume />
            </div>
            <div
              className="section"
              onClick={() => fullpageApi.moveSectionDown()}
            >
              <Contact />
            </div>
          </ReactFullpage.Wrapper>
        </>
      );
    }}
  />
);

export default OnePage;
