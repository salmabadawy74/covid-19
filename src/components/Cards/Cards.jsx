import React from "react";
import styles from "./Cards.module.css";
import { Card, CardContent, Typography, Grid } from "@material-ui/core";
import ContendUp from "react-countup";
import cx from "classnames";

export default function Cards({
  data: { confirmed, recovered, deaths, lastUpdate },
}) {
  if (!confirmed) {
    return <h5>...loading</h5>;
  }
  return (
    <div className={styles.container}>
      <Grid container spacing={3} justify="center">
        <Grid
          item
          component={Card}
          xs={12}
          md={3}
          className={cx(styles.card, styles.card1)}
        >
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Infected
            </Typography>
            <Typography variant="h5">
              <ContendUp
                start={0}
                end={confirmed.value}
                duration={2.5}
                separator=","
              />
            </Typography>
            <Typography color="textSecondary">
              {new Date(lastUpdate).toDateString()}
            </Typography>
            <Typography variant="body2">
              Number of the active cases of covid-19
            </Typography>
          </CardContent>
        </Grid>
        <Grid
          item
          component={Card}
          xs={12}
          md={3}
          className={cx(styles.card, styles.card2)}
        >
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Recovered
            </Typography>
            <Typography variant="h5">
              <ContendUp
                start={0}
                end={recovered.value}
                duration={2.5}
                separator=","
              />
            </Typography>
            <Typography color="textSecondary">
              {new Date(lastUpdate).toDateString()}
            </Typography>
            <Typography variant="body2">
              Number of the recovered cases of covid-19
            </Typography>
          </CardContent>
        </Grid>
        <Grid
          item
          component={Card}
          xs={12}
          md={3}
          className={cx(styles.card, styles.card3)}
        >
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Deaths
            </Typography>
            <Typography variant="h5">
              <ContendUp
                start={0}
                end={deaths.value}
                duration={2.5}
                separator=","
              />
            </Typography>
            <Typography color="textSecondary">
              {" "}
              {new Date(lastUpdate).toDateString()}
            </Typography>
            <Typography variant="body2">
              Number of the Deaths of covid-19
            </Typography>
          </CardContent>
        </Grid>
      </Grid>
    </div>
  );
}
