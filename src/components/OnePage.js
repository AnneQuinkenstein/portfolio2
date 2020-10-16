import React from "react";
import ReactFullpage from "@fullpage/react-fullpage";
import Navbar from "./Navbar";
import Home from "./Home";
import Contact from "./Contact";
import Portfolio from "./Portfolio";
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
              <Home />
            </div>
            <div
              className="section"
              // onClick={() => fullpageApi.moveSectionDown()}
            >
              <Portfolio />
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
