import React, { useEffect, useState }  from "react";
import Cast from "../castCard";
import Grid from "@material-ui/core/Grid";
import { getMovieCast } from "../../api/tmdb-api";

export default function MovieCast({ movie }) {
  const [cast, setCast] = useState([]);

  useEffect(() => {
    getMovieCast(movie.id).then((cast) => {
      setCast(cast);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  console.log(cast);
  const stars = cast.cast;
  console.log(stars);
  let castCards = stars.map((s) => (
    <Grid key={s.id} item xs={12} sm={6} md={4} lg={3} xl={2}>
      <Cast key={s.id} star={s} />
    </Grid>
  ));
  return (
    <>
    {stars.length > 0 ?
       castCards :
       <p>Waiting for cast details</p>
       }
    </>
  );
  {/*let castCards = stars.map((s) => (
    <>
    {stars ? (
      <>
        <Grid key={s.id} item xs={12} sm={6} md={4} lg={3} xl={2}>
          <Cast key={s.id} star={s}/>
          </Grid>
      </>
    ) : (
      <p>Waiting for cast details</p>
    )}
    </>
  )
  );
    return castCards;*/}
  
{/*return (
  <h1>Hello World</h1>
)*/}
};