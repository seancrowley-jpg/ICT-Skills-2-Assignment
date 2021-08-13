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