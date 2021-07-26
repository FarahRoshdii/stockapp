import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";
import { config } from "./views/Components/app";
import { createOvermind } from "overmind";
import { Provider } from "overmind-react";

import "assets/scss/material-kit-react.scss?v=1.10.0";

// pages for this product
import Components from "views/Components/Components.js";
import LandingPage from "views/LandingPage/LandingPage.js";
import TickerPage from "views/TickerPage/TickerPage";

var hist = createBrowserHistory();

const rootElement = document.getElementById("root");

export const overmind = createOvermind(config, {
  devtools: false,
});

ReactDOM.render(
  <Provider value={overmind}>
    <Router history={hist}>
      <Switch>
        <Route path="/landing-page" component={LandingPage} />
        <Route path="/ticker-page/:ticker" component={TickerPage} />
        <Route path="/" component={Components} />
      </Switch>
    </Router>
    ,
  </Provider>,
  rootElement
);
