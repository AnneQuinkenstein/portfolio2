import React from "react";
import { Route, Switch } from "react-router-dom";
import { useMediaPredicate } from "react-media-hook";
import "./App.css";
import Home from "./components/Home";
import CssBaseline from "@material-ui/core/CssBaseline";
import Resume from "./components/Resume";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import OnePage from "./components/OnePage";

function App() {
  const phone = useMediaPredicate("(max-width: 1000px)");

  return (
    <>
      {!phone && <OnePage />}
      {phone && (
        <CssBaseline>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/resume" component={Resume} />
            <Route path="/portfolio" component={Portfolio} />
            <Route path="/contact" component={Contact} />
          </Switch>
        </CssBaseline>
      )}
    </>
  );
}

export default App;
