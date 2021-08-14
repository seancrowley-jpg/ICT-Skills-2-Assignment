import React from "react";
import PageTemplate from "../components/templateTvListPage";
import { useQuery } from "react-query";
import Spinner from "../components/spinner";
import { getTv } from "../api/tmdb-api";
import AddToWatchListIcon from "../components/cardIcons/addToWatchList";
import AddToFavoritesIcon from "../components/cardIcons/addTVToFavorites";
import Paper from "@material-ui/core/Paper";

const DiscoverTvPage = (props) => {
  const [page, setPage] = React.useState(1);
  const {
    data,
    error,
    isLoading,
    isError,
    isFetching,
  } = useQuery(["tv", page], () => getTv(page), { keepPreviousData: true });
  console.log(page);
  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }
  const shows = data.results;

  return (
    <>
    {/*<Paper>
        <span>Current Page: {page}</span>
        <button
          onClick={() => setPage((old) => Math.max(old - 1, 0))}
          disabled={page === 1}
        >
          Previous Page
        </button>{" "}
        <button
          onClick={() => {
            setPage((old) => old + 1);
          }}
        >
          Next Page
        </button>
        {isFetching ? <span> Loading...</span> : null}{" "}
      </Paper>*/}
      <PageTemplate
        title="Discover Tv Shows"
        shows={shows}
        action={(show) => {
          return <AddToFavoritesIcon show={show} />;
        }}
        page = {page}
        setPage = {setPage}
        isFetching = {isFetching}
      />
    </>
  );
};

export default DiscoverTvPage;
