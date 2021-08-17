import React from "react";
import { withRouter } from "react-router-dom";
import PersonDetails from "../components/personDetails";
import PageTemplate from "../components/templatePersonPage";
import { getPersonDetails } from "../api/tmdb-api";
import { useQuery } from "react-query";
import Spinner from "../components/spinner";
import AddToFavoritesIcon from "../components/cardIcons/addToFavorites";
import AddToTvFavoritesIcon from "../components/cardIcons/addTVToFavorites";

const PersonDetailsPage = (props) => {
  const { id } = props.match.params;

  const { data: person, error, isLoading, isError } = useQuery(
    ["person", { id: id }],
    getPersonDetails
  );

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }

  return (
    <>
      {person ? (
        <>
          <PageTemplate person={person}>
            <PersonDetails
              person={person}
              action={(movie) => {
                return <AddToFavoritesIcon movie={movie} />;
              }}
              actionTv={(show) => {
                return <AddToTvFavoritesIcon show={show} />
              }}
            />
          </PageTemplate>
        </>
      ) : (
        <p>Waiting for persons details</p>
      )}
    </>
  );
};

export default withRouter(PersonDetailsPage);
