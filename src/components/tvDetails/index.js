import React, { useState, useEffect } from "react";
import Chip from "@material-ui/core/Chip";
import Paper from "@material-ui/core/Paper";
import StarRate from "@material-ui/icons/StarRate";
import NavigationIcon from "@material-ui/icons/Navigation";
import Fab from "@material-ui/core/Fab";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import CastList from "../castList";
import { getRecomendedShows, getShowCast } from "../../api/tmdb-api";
import Grid from "@material-ui/core/Grid";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Box from "@material-ui/core/Box";
import PropTypes from "prop-types";
import TvList from "../tvList";


function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

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
  tab: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    listStyle: "none",
    padding: theme.spacing(1.5),
    margin: 0,
    backgroundColor: theme.palette.background.paper,
  }
}));

const TvDetails = ({ show, action }) => {
  const classes = useStyles();
  const [value, setValue] = useState(0);
  const [stars, setStars] = useState([]);
  const [crew, setCrew] = useState([]);
  const [recomendedShows, setRecomendedShows] = useState([]);

  useEffect(() => {
    getShowCast(show.id).then((castAndCrew) => {
      setStars(castAndCrew.cast.slice(0,12))
      setCrew(castAndCrew.crew.slice(0,12))
    })
    getRecomendedShows(show.id).then((shows) => {
      setRecomendedShows(shows.results)
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

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
      <div className={classes.tab}>
        <AppBar position="static">
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="simple tabs example"
            variant="fullWidth"
          >
            <Tab label="Cast" {...a11yProps(0)} />
            <Tab label="Crew" {...a11yProps(1)} />
            <Tab label="Recomended Shows" {...a11yProps(2)} />
          </Tabs>
        </AppBar>
        <TabPanel value={value} index={0}>
          <Grid container className={classes.root}>
            <CastList stars={stars} />
          </Grid>
        </TabPanel>
        <TabPanel value={value} index={1}>
        <Grid container className={classes.root}>
            <CastList stars={crew} />
          </Grid>
        </TabPanel>
        <TabPanel value={value} index={2}>
        <Grid container className={classes.root}>
          <TvList shows={recomendedShows} action={action}/>
          </Grid>
        </TabPanel>
      </div>
    </>
  );
};
export default TvDetails;
