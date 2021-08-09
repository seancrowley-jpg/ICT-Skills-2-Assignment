import Cast from "../castCard";
import Grid from "@material-ui/core/Grid";

export default function MovieCast({ movie, stars }) {
  let castCards = stars.map((s) => (
        <Grid key={s.id} item xs={12} sm={6} md={4} lg={3} xl={2}>
          <Cast key={s.id} star={s} />
        </Grid>
  ));
  return <>{stars.length > 0 ? castCards : <p>Waiting for cast details</p>}</>;
  //return <h1>Hello World</h1>;
}
