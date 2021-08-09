import React, { useEffect, useState } from "react";
import Cast from "../castCard";
import Grid from "@material-ui/core/Grid";
import { getMovieCast } from "../../api/tmdb-api";
import { makeStyles } from "@material-ui/core/styles";

export default function MovieCast({ movie }) {
  const [stars, setStars] = useState([]);
  useEffect(() => {
    getMovieCast(movie.id).then((castAndCrew) => {
      setStars(castAndCrew.cast.slice(0,12))
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  let castCards = stars.map((s) => (
        <Grid key={s.id} item xs={12} sm={6} md={4} lg={3} xl={2}>
          <Cast key={s.id} star={s} />
        </Grid>
  ));
  return <>{stars.length > 0 ? castCards : <p>Waiting for cast details</p>}</>;
  //return <h1>Hello World</h1>;
}
