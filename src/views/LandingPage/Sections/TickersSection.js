import React from "react";
import { useEffect, useState } from "react";
import TextField from "@material-ui/core/TextField";

import { makeStyles } from "@material-ui/core/styles";
import { useAppState, useActions } from "../../Components/app";

// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";
import CardFooter from "components/Card/CardFooter.js";
import Paginations from "components/Pagination/Pagination.js";
import LinearProgress from "../../../components/CustomLinearProgress/CustomLinearProgress.js";

import styles from "assets/jss/material-kit-react/views/landingPageSections/teamStyle.js";

const useStyles = makeStyles(styles);

export default function TickersSection() {
  const classes = useStyles();
  const state = useAppState();
  const actions = useActions();
  const [search, setSearch] = useState("");

  useEffect(() => {
    actions.loadTickers();
  }, []);

  return (
    <div className={classes.section}>
      <h2 className={classes.title}>Stock Activity</h2>

      {state.isLoadingTickers ? (
        <LinearProgress color="info" />
      ) : (
        <div>
          <TextField
            id="standard-basic"
            label="Search"
            onChange={(e) => setSearch(e.target.value)}
          />
          <GridContainer>
            {state.postsList
              .filter((li) =>
                li.ticker
                  .toString()
                  .toLowerCase()
                  .includes(search.toLowerCase())
              )
              .map((post, index) => (
                <GridItem xs={12} sm={12} md={4} key={index}>
                  <Card style={{ width: "20em" }} key={index}>
                    <GridItem
                      xs={12}
                      sm={12}
                      md={6}
                      className={classes.itemGrid}
                    ></GridItem>
                    <a
                      href={`ticker-page/${post.ticker}`}
                      className={classes.cardLink}
                    >
                      <h4>
                        {post.ticker}
                        <br />
                        <small className={classes.smallTitle}>
                          {post.name}
                        </small>
                      </h4>
                    </a>
                    <CardFooter className={classes.justifyCenter}></CardFooter>
                  </Card>
                </GridItem>
              ))}{" "}
          </GridContainer>
          <Paginations
            pages={[
              { text: "PREV", onClick: actions.prevPage },
              { active: true, text: Number(state.currentPage) + Number(1) },
              { text: "NEXT", onClick: actions.nextPage },
            ]}
            color="info"
          />
        </div>
      )}
    </div>
  );
}
