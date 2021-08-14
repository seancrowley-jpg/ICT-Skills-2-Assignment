import React from "react";
import { withRouter } from "react-router-dom";
import MovieDetails from "../components/movieDetails";
import PageTemplate from "../components/templateMoviePage";
// import useMovie from "../hooks/useMovie";   Redundant
import { getMovie } from '../api/tmdb-api'
import { useQuery } from "react-query";
import Spinner from '../components/spinner'
import AddToFavoritesIcon from "../components/cardIcons/addToFavorites";
import StarRating from "../components/starRating"

const MovieDetailsPage = (props) => {
  const { id } = props.match.params

  const { data: movie, error, isLoading, isError } = useQuery(
    ["movie", { id: id }],
    getMovie,
  );

  
  //const castQuerey = useQuery(["cast", { id: id }], getMovieCast)

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }
  

  return (
    <>
      {movie ? (
        <>
          <PageTemplate movie={movie}>
            <MovieDetails movie={movie}
            action={(movie) => {
              return <AddToFavoritesIcon movie={movie} />
            }}
            actionRating={(movie) => {
              return <StarRating movie={movie} />
            }}/>
          </PageTemplate>
        </>
      ) : (
        <p>Waiting for movie details</p>
      )}
    </>
  );
};

export default withRouter(MovieDetailsPage);