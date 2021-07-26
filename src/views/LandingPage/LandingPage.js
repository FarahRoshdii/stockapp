import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import styles from "assets/jss/material-kit-react/views/landingPage.js";

// Sections for this page

import TickersSection from "./Sections/TickersSection.js";
const dashboardRoutes = [];

const useStyles = makeStyles(styles);

export default function LandingPage(props) {
  const classes = useStyles();
  const { ...rest } = props;
  return (
    <div>
      <Header
        color="white"
        routes={dashboardRoutes}
        brand="Material Kit React"
        rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: -1,
          color: "white",
        }}
        {...rest}
      />
      <div className={classes.container}></div>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
          <TickersSection />
        </div>
      </div>
      <Footer />
    </div>
  );
}
