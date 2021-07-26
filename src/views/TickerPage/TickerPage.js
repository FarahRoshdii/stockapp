import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
// @material-ui/icons
import LockOpenIcon from "@material-ui/icons/LockOpen";
import CloseIcon from "@material-ui/icons/Close";
import EqualizerIcon from "@material-ui/icons/Equalizer";
import LowPriorityIcon from "@material-ui/icons/LowPriority";
import PriorityHighIcon from "@material-ui/icons/PriorityHigh";
import LinearProgress from "../../components/CustomLinearProgress/CustomLinearProgress.js";

// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import Button from "components/CustomButtons/Button.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import NavPills from "components/NavPills/NavPills.js";
import Parallax from "components/Parallax/Parallax.js";
import Tooltip from "@material-ui/core/Tooltip";
import Grid from "@material-ui/core/Grid";
import GlitchClip from "react-glitch-effect/core/GlitchClip";
import AnimatedNumber from "react-animated-number";

import { useAppState, useActions } from "../Components/app";

import styles from "assets/jss/material-kit-react/views/profilePage.js";

const useStyles = makeStyles(styles);

export default function TickerPage(props) {
  const classes = useStyles();
  const state = useAppState();
  const actions = useActions();
  const { ticker } = useParams();
  const { ...rest } = props;

  useEffect(() => {
    sessionStorage.getItem(`${ticker}`) === null &&
    sessionStorage.getItem(`${ticker + "stats"}`) === null
      ? (actions.loadTickerDetails(ticker), actions.loadstats(ticker))
      : (actions.loadmemTickerDetails(ticker), actions.loadmemstats(ticker));
  }, [ticker]);

  return (
    <div>
      <Header
        color="transparent"
        brand="Material Kit React"
        rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 200,
          color: "white",
        }}
        {...rest}
      />
      <Parallax small filter image={require("assets/img/trial2.jpg").default} />
      <div className={classNames(classes.main, classes.mainRaised)}>
        {state.isLoadingstats ? (
          <div>
            <div className={classes.container}>
              <GridContainer justify="center">
                <GridItem xs={12} sm={12} md={6}>
                  <div className={classes.profile}>
                    <div className={classes.name}>
                      <h3 className={classes.title}>
                        {state.tickerDetails.name}
                      </h3>
                      <h6>{state.tickerDetails.ceo}</h6>

                      <Tooltip
                        id="web"
                        title="Check out our website"
                        placement={window.innerWidth > 959 ? "bottom" : "left"}
                        classes={{ tooltip: classes.tooltip }}
                      >
                        <Button
                          id="web"
                          link
                          className={classes.margin5}
                          href={state.tickerDetails.url}
                          target="_blank"
                        >
                          <i className={"fas fa-globe"} />
                        </Button>
                      </Tooltip>
                    </div>
                  </div>
                </GridItem>
              </GridContainer>
              <div className={classes.description}>
                <p>{state.tickerDetails.description} </p>
                <p>
                  {" "}
                  <bold>Industry:</bold> <br></br>
                  {state.tickerDetails.industry}
                </p>
              </div>
              <GridContainer justify="center">
                <GridItem xs={12} sm={12} md={8} className={classes.navWrapper}>
                  {state.isLoadingstats ? (
                    <NavPills
                      alignCenter
                      color="primary"
                      tabs={[
                        {
                          tabButton: "High",
                          tabIcon: PriorityHighIcon,
                          tabContent: (
                            <Grid item xs={12} sm={12} md={12}>
                              <GlitchClip>
                                <AnimatedNumber
                                  style={{
                                    transition: "0.8s ease-out",
                                    fontSize: 30,
                                    fontWeight: "bold",
                                    transitionProperty:
                                      "background-color, color, opacity",
                                  }}
                                  frameStyle={(perc) =>
                                    perc === 100 ? {} : { opacity: 0.7 }
                                  }
                                  stepPrecision={1}
                                  duration={2500}
                                  value={state.stats.high}
                                  component="text"
                                />
                              </GlitchClip>
                            </Grid>
                          ),
                        },
                        {
                          tabButton: "Low",
                          tabIcon: LowPriorityIcon,
                          tabContent: (
                            <Grid item xs={12} sm={12} md={12}>
                              <GlitchClip>
                                <AnimatedNumber
                                  style={{
                                    transition: "0.8s ease-out",
                                    fontSize: 30,
                                    fontWeight: "bold",
                                    transitionProperty:
                                      "background-color, color, opacity",
                                  }}
                                  frameStyle={(perc) =>
                                    perc === 100 ? {} : { opacity: 0.7 }
                                  }
                                  stepPrecision={1}
                                  duration={2500}
                                  value={state.stats.low}
                                  component="text"
                                />
                              </GlitchClip>
                            </Grid>
                          ),
                        },
                        {
                          tabButton: "Volume",
                          tabIcon: EqualizerIcon,
                          tabContent: (
                            <Grid item xs={12} sm={12} md={12}>
                              <GlitchClip>
                                <AnimatedNumber
                                  style={{
                                    transition: "0.8s ease-out",
                                    fontSize: 30,
                                    fontWeight: "bold",
                                    transitionProperty:
                                      "background-color, color, opacity",
                                  }}
                                  frameStyle={(perc) =>
                                    perc === 100 ? {} : { opacity: 0.7 }
                                  }
                                  stepPrecision={1}
                                  duration={2500}
                                  value={state.stats.volume}
                                  component="text"
                                />
                              </GlitchClip>
                            </Grid>
                          ),
                        },
                        {
                          tabButton: "Open",
                          tabIcon: LockOpenIcon,
                          tabContent: (
                            <Grid item xs={12} sm={12} md={12}>
                              <GlitchClip>
                                <AnimatedNumber
                                  style={{
                                    transition: "0.8s ease-out",
                                    fontSize: 30,
                                    fontWeight: "bold",
                                    transitionProperty:
                                      "background-color, color, opacity",
                                  }}
                                  frameStyle={(perc) =>
                                    perc === 100 ? {} : { opacity: 0.7 }
                                  }
                                  stepPrecision={1}
                                  duration={2500}
                                  value={state.stats.open}
                                  component="text"
                                />
                              </GlitchClip>
                            </Grid>
                          ),
                        },
                        {
                          tabButton: "close",
                          tabIcon: CloseIcon,
                          tabContent: (
                            <Grid item xs={12} sm={12} md={12}>
                              <GlitchClip>
                                <AnimatedNumber
                                  style={{
                                    transition: "0.8s ease-out",
                                    fontSize: 30,
                                    fontWeight: "bold",
                                    transitionProperty:
                                      "background-color, color, opacity",
                                  }}
                                  frameStyle={(perc) =>
                                    perc === 100 ? {} : { opacity: 0.7 }
                                  }
                                  stepPrecision={1}
                                  duration={2500}
                                  value={state.stats.close}
                                  component="text"
                                />
                              </GlitchClip>
                            </Grid>
                          ),
                        },
                      ]}
                    />
                  ) : (
                    <LinearProgress color="info" />
                  )}
                </GridItem>
              </GridContainer>
            </div>
          </div>
        ) : (
          <LinearProgress color="info" />
        )}
      </div>
      <Footer />
    </div>
  );
}
