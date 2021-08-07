import React, { useState, useQuery } from "react";
import Chip from "@material-ui/core/Chip";
import Paper from "@material-ui/core/Paper";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import MonetizationIcon from "@material-ui/icons/MonetizationOn";
import StarRate from "@material-ui/icons/StarRate";
import NavigationIcon from "@material-ui/icons/Navigation";
import Fab from "@material-ui/core/Fab";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import MovieReviews from "../movieReviews";
import CastList from "../castList";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    listStyle: "none",
    padding: theme.spacing(1.5),
    margin: 0,
  },
  chip: {
    margin: theme.spacing(0.5),
  },
  fab: {
    position: "fixed",
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
}));

const TvDetails = ({ show }) => {
  const classes = useStyles();

  return (
    <>
      <Typography variant="h5" component="h3">
        Overview
      </Typography>

      <Typography variant="h6" component="p">
        {show.overview}
      </Typography>

      <Paper component="ul" className={classes.root}>
        <li>
          <Chip label="Genres" className={classes.chip} color="primary" />
        </li>
        {show.genres.map((g) => (
          <li key={g.name}>
            <Chip label={g.name} className={classes.chip} />
          </li>
        ))}
      </Paper>
      <Paper component="ul" className={classes.root}>
        <Chip label={`In Production ${show.in_production}`} />
        <Chip label={`Seasons: ${show.seasons.length}`} />
        <Chip
          icon={<StarRate />}
          label={`${show.vote_average} (${show.vote_count}`}
        />
        <Chip label={`First Aired: ${show.first_air_date}`} />
        <Chip label={`Last Aired: ${show.last_air_date}`} />
        <Chip label={`Next Episode: ${show.next_episode_to_air}`} />
      </Paper>
      <Paper component="ul" className={classes.root}>
        <li>
          <Chip label="Networks" className={classes.chip} color="primary" />
        </li>
        {show.networks.map((n) => (
          <li key={n.name}>
            <Chip label={n.name} className={classes.chip} />
          </li>
        ))}
      </Paper>
    </>
  );
};
export default TvDetails;
