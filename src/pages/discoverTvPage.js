import React from "react";
import PageTemplate from "../components/templateTvListPage";
import { useQuery } from 'react-query'
import Spinner from '../components/spinner'
import {getTv} from '../api/tmdb-api'
import AddToWatchListIcon from '../components/cardIcons/addToWatchList'
import AddToFavoritesIcon from '../components/cardIcons/addTVToFavorites'


const DiscoverTvPage = (props) => {
  const { data, error, isLoading, isError }  = useQuery('tv', getTv)

  if (isLoading) {
    return <Spinner />
  }

  if (isError) {
    return <h1>{error.message}</h1>
  }  
  const shows = data.results;

  // Redundant, but necessary to avoid app crashing.
  const favorites = shows.filter(s => s.favorite)
  localStorage.setItem('favorites', JSON.stringify(favorites))
  const addToTvFavorites = (showId) => true 

  return (
    <PageTemplate
      title="Discover Tv Shows"
      shows={shows}
      action={(show) => {
        return <AddToFavoritesIcon show={show} />
      }}
    />
);
};

export default DiscoverTvPage;