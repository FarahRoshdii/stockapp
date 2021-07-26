import React from "react";
// material-ui components
import { makeStyles } from "@material-ui/core/styles";
// core components
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";

import {
  cardTitle,
  cardLink,
  cardSubtitle,
} from "assets/jss/material-kit-react.js";

const styles = {
  cardTitle,
  cardLink,
  cardSubtitle,
};

const useStyles = makeStyles(styles);

export default function Cards() {
  const classes = useStyles();
  return (
    <Card style={{ width: "20rem" }}>
      <CardBody>
        <h4 className={classes.cardTitle}>AAPL</h4>
        <h6 className={classes.cardSubtitle}>Apple Inc.</h6>
        <p>Some.</p>
        <a
          href="#pablo"
          className={classes.cardLink}
          onClick={(e) => e.preventDefault()}
        >
          Card link
        </a>
        <a
          href="#pablo"
          className={classes.cardLink}
          onClick={(e) => e.preventDefault()}
        >
          Another link
        </a>
      </CardBody>
    </Card>
  );
}
