import React, { useState, useEffect } from "react";
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
import { getPersonMovieCredits, getPersonTvCredits } from "../../api/tmdb-api";
import Grid from "@material-ui/core/Grid";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Box from "@material-ui/core/Box";
import PropTypes from "prop-types";
import CakeIcon from "@material-ui/icons/Cake";
import MovieList from "../movieList";
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
  tab: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    listStyle: "none",
    padding: theme.spacing(1.5),
    margin: 0,
    backgroundColor: theme.palette.background.paper,
  },
}));

const PersonDetails = ({ person, action }) => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const [movies, setMovies] = useState([]);
  const [shows, setShows] = useState([]);

  useEffect(() => {
    getPersonMovieCredits(person.id).then((castAndCrew) => {
      setMovies(castAndCrew.cast.slice(0,12))
    })
    getPersonTvCredits(person.id).then((castAndCrew) => {
      setShows(castAndCrew.cast.slice(0,12))
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <Typography variant="h5" component="h3">
        Biography
      </Typography>
      <Typography variant="h6" component="p">
        {person.biography}
      </Typography>

      <Paper component="ul" className={classes.root}>
        <li>
          <Chip
            label="Also Known As"
            className={classes.chip}
            color="primary"
          />
        </li>
        <>
          {person.also_known_as.length > 0 ? (
            <>
              {person.also_known_as.map((g) => (
                <li key={g}>
                  <Chip label={g} className={classes.chip} />
                </li>
              ))}
            </>
          ) : (
            <Chip label="No Known Other Names" />
          )}
        </>
        {person.also_known_as.map((g) => (
          <li key={g}>
            <Chip label={g} className={classes.chip} />
          </li>
        ))}
      </Paper>
      <Paper component="ul" className={classes.root}>
        <Chip label="Known For:" className={classes.chip} />
        <Chip label={person.known_for_department} className={classes.chip} />
      </Paper>
      <Paper component="ul" className={classes.root}>
        <Chip icon={<CakeIcon />} label="Birth Day" className={classes.chip} />
        <Chip label={person.birthday} className={classes.chip} />
        <Chip label={person.place_of_birth} className={classes.chip} />
      </Paper>

      <div className={classes.tab}>
        <AppBar position="static">
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="simple tabs example"
            variant="fullWidth"
          >
            <Tab label="Moive Credits" {...a11yProps(0)} />
            <Tab label="Tv Credits" {...a11yProps(1)} />
          </Tabs>
        </AppBar>
        <TabPanel value={value} index={0}>
        <Grid container className={classes.root}>
            <MovieList movies={movies} action={action} />
          </Grid>
        </TabPanel>
        <TabPanel value={value} index={1}>
        <Grid container className={classes.root}>
            <TvList shows={shows} action={action} />
          </Grid>
        </TabPanel>
      </div>
    </>
  );
};
export default PersonDetails;
