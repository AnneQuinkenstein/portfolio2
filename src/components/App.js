import React from "react";
import "../App.css";
import ReactFullpage from "@fullpage/react-fullpage";
import Home from "./Home";
import Contact from "./Contact";
import Resume from "./Resume";
import NavbarSwitch from "./NavbarSwitch";
import PortfolioSwitch from "./PortfolioSwitch";

const App = () => {
  return (
    <ReactFullpage
      //fullpage options
      licenseKey={process.env.REACT_APP_FULLPAGE_API_KEY}
      scrollingSpeed={1000}
      anchors={["Home", "Portfolio", "Resume", "Contact"]}
      responsiveWidth={1000}
      fixedElements={".MuiBox-root.jss5"}
      render={({ state, fullpageApi }) => {
        return (
          <>
            <ReactFullpage.Wrapper>
              <div className="section">
                <NavbarSwitch />
                <Home />
              </div>
              <div className="section">
                <PortfolioSwitch />
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
};

export default App;
