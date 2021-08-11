import React from "react";
import { withRouter } from "react-router-dom";
import TvDetails from "../components/tvDetails";
import PageTemplate from "../components/templateTvPage";
import { getTvDetails} from '../api/tmdb-api'
import { useQuery } from "react-query";
import Spinner from '../components/spinner';
import AddToFavoritesIcon from "../components/cardIcons/addTVToFavorites";


const TvDetailsPage = (props) => {
  const { id } = props.match.params

  const { data: show, error, isLoading, isError } = useQuery(
    ["show", { id: id }],
    getTvDetails,
  );

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }

  return (
    <>
      {show ? (
        <>
          <PageTemplate show={show}>
            <TvDetails show={show}
            action={(show) => {
              return <AddToFavoritesIcon show={show} />
            }}/>
          </PageTemplate>
        </>
      ) : (
        <p>Waiting for show details</p>
      )}
    </>
  );
};

export default withRouter(TvDetailsPage);