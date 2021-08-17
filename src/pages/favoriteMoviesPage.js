import React, { useContext } from "react";
import PageTemplate from "../components/templateFavoritesPage";
import { MoviesContext } from "../contexts/moviesContext";
import { useQueries } from "react-query";
import { getMovie, getPersonDetails, getTvDetails } from "../api/tmdb-api";
import Spinner from '../components/spinner';
import RemoveFromFavorites from "../components/cardIcons/removeFromFavorites";
import RemoveFromTvFavorites from "../components/cardIcons/removeFromTvFavorites";
import WriteReview from "../components/cardIcons/writeReview";
import RemoveFromPersonFavoritesIcon from "../components/cardIcons/removeFromPersonFavorites";


const FavoriteMoviesPage = () => {
  const {favorites: movieIds } = useContext(MoviesContext);
  const {tvFavorites: showIds } = useContext(MoviesContext);
  const {personFavorites: personIds } = useContext(MoviesContext);

  // Create an array of queries and run in parallel.
  const favoriteMovieQueries = useQueries(
    movieIds.map((movieId) => {
      return {
        queryKey: ["movie", { id: movieId }],
        queryFn: getMovie,
      };
    })
  );
  // Check if any of the parallel queries is still loading.
  const isLoadingMovie = favoriteMovieQueries.find((m) => m.isLoading === true);

  // Create an array of queries and run in parallel.
  const favoriteShowQueries = useQueries(
    showIds.map((showId) => {
      return {
        queryKey: ["show", { id: showId }],
        queryFn: getTvDetails,
      };
    })
  );
  // Check if any of the parallel queries is still loading.
  const isLoadingShow = favoriteShowQueries.find((s) => s.isLoading === true);

  const favoritePeopleQueries = useQueries(
    personIds.map((personId) => {
      return {
        queryKey: ["person", { id: personId }],
        queryFn: getPersonDetails,
      };
    })
  );
  // Check if any of the parallel queries is still loading.
  const isLoadingPerson = favoritePeopleQueries.find((p) => p.isLoading === true);

  if (isLoadingMovie || isLoadingShow || isLoadingPerson) {
    return <Spinner />;
  }
  const movies = favoriteMovieQueries.map((q) => q.data);
  const shows = favoriteShowQueries.map((q) => q.data);
  const people = favoritePeopleQueries.map((q) => q.data);
  const toDo = () => true;

  console.log(shows);

  return (
    <PageTemplate
      title="Favorites"
      movies={movies}
      shows={shows}
      people={people}
      action={(movie) => {
        return (
          <>
            <RemoveFromFavorites movie={movie} />
            <WriteReview movie={movie} />
          </>
        );
      }}
      actionTv={(show) => {
        return (
          <>
            <RemoveFromTvFavorites show={show} />
          </>
        );
      }}
      actionPerson={(person) => {
        return (
          <>
            <RemoveFromPersonFavoritesIcon person={person} />
          </>
        );
      }}
    />
  );
};

export default FavoriteMoviesPage;