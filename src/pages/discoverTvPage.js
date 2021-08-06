import React from "react";
import PageTemplate from "../components/templateMovieListPage";
import { useQuery } from 'react-query'
import Spinner from '../components/spinner'
import {getTv} from '../api/tmdb-api'
import AddToWatchListIcon from '../components/cardIcons/addToWatchList'

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
    />
);
};

export default DiscoverTvPage;