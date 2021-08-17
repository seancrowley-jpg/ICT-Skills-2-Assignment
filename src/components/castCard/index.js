import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import CardHeader from "@material-ui/core/CardHeader";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import FavoriteIcon from "@material-ui/icons/Favorite";
import CalendarIcon from "@material-ui/icons/CalendarTodayTwoTone";
import StarRateIcon from "@material-ui/icons/StarRate";
import IconButton from "@material-ui/core/IconButton";
import Grid from "@material-ui/core/Grid";
import img from "../../images/film-poster-placeholder.png";
import Avatar from "@material-ui/core/Avatar";
import { MoviesContext } from "../../contexts/moviesContext";

const useStyles = makeStyles({
  card: { maxWidth: 345 },
  media: { height: 500 },
  avatar: {
    backgroundColor: "rgb(255, 0, 0)",
  },
});

export default function CastCard({ star, action }) {
  const classes = useStyles();

  const { personFavorites, addPersonToFavorites } = useContext(MoviesContext);

  if (personFavorites.find((id) => id === star.id)) {
    star.favorite = true;
  } else {
    star.favorite = false;
  }

  const handleAddToFavorite = (e) => {
    e.preventDefault();
    addPersonToFavorites(star);
  };

  return (
    <Card className={classes.card}>
      <CardHeader
        className={classes.header}
        avatar={
          star.favorite ? (
            <Avatar className={classes.avatar}>
              <FavoriteIcon />
            </Avatar>
          ) : null
        }
        title={
          <Typography variant="h5" component="p">
            {star.name}
          </Typography>
        }
      />
      <CardMedia
        className={classes.media}
        image={
          star.profile_path
            ? `https://image.tmdb.org/t/p/w500/${star.profile_path}`
            : img
        }
      />
      <CardContent>
        <Grid container>
          <Grid item xs={6}>
            <Typography variant="h6" component="p">
              {star.character}
              <>{star.character ? <>{star.character}</> : <>{star.job}</>}</>
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
      <CardActions disableSpacing>
        {action(star)}
        <Link to={`/person/${star.id}`}>
          <Button variant="outlined" size="medium" color="primary">
            View Profile
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
}
